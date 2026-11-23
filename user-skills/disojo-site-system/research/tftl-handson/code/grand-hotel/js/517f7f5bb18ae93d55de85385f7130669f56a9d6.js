/* https://script.ringostat.com/v4/51/517f7f5bb18ae93d55de85385f7130669f56a9d6.js */
! function() {
  "use strict";
  var t = Object.prototype.hasOwnProperty;
  var e = function(e, n) {
      return null != e && t.call(e, n)
    },
    n = Array.isArray,
    i = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function s(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports
  }
  var r = "object" == typeof i && i && i.Object === Object && i,
    a = "object" == typeof self && self && self.Object === Object && self,
    o = r || a || Function("return this")(),
    c = o.Symbol,
    l = Object.prototype,
    u = l.hasOwnProperty,
    d = l.toString,
    h = c ? c.toStringTag : void 0;
  var p = function(t) {
      var e = u.call(t, h),
        n = t[h];
      try {
        t[h] = void 0;
        var i = !0
      } catch (t) {}
      var s = d.call(t);
      return i && (e ? t[h] = n : delete t[h]), s
    },
    f = Object.prototype.toString;
  var g = function(t) {
      return f.call(t)
    },
    m = "[object Null]",
    _ = "[object Undefined]",
    y = c ? c.toStringTag : void 0;
  var v = function(t) {
    return null == t ? void 0 === t ? _ : m : y && y in Object(t) ? p(t) : g(t)
  };
  var b = function(t) {
      return null != t && "object" == typeof t
    },
    M = "[object Symbol]";
  var N = function(t) {
      return "symbol" == typeof t || b(t) && v(t) == M
    },
    D = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    I = /^\w*$/;
  var S = function(t, e) {
    if (n(t)) return !1;
    var i = typeof t;
    return !("number" != i && "symbol" != i && "boolean" != i && null != t && !N(t)) || I.test(t) || !D.test(t) || null != e && t in Object(e)
  };
  var w = function(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
    },
    E = "[object AsyncFunction]",
    k = "[object Function]",
    T = "[object GeneratorFunction]",
    x = "[object Proxy]";
  var C, A = function(t) {
      if (!w(t)) return !1;
      var e = v(t);
      return e == k || e == T || e == E || e == x
    },
    j = o["__core-js_shared__"],
    z = (C = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "")) ? "Symbol(src)_1." + C : "";
  var O = function(t) {
      return !!z && z in t
    },
    L = Function.prototype.toString;
  var R = function(t) {
      if (null != t) {
        try {
          return L.call(t)
        } catch (t) {}
        try {
          return t + ""
        } catch (t) {}
      }
      return ""
    },
    U = /^\[object .+?Constructor\]$/,
    B = Function.prototype,
    Y = Object.prototype,
    P = B.toString,
    G = Y.hasOwnProperty,
    F = RegExp("^" + P.call(G).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Q = function(t) {
    return !(!w(t) || O(t)) && (A(t) ? F : U).test(R(t))
  };
  var $ = function(t, e) {
    return null == t ? void 0 : t[e]
  };
  var H = function(t, e) {
      var n = $(t, e);
      return Q(n) ? n : void 0
    },
    q = H(Object, "create");
  var V = function() {
    this.__data__ = q ? q(null) : {}, this.size = 0
  };
  var W = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e
    },
    Z = "__lodash_hash_undefined__",
    J = Object.prototype.hasOwnProperty;
  var K = function(t) {
      var e = this.__data__;
      if (q) {
        var n = e[t];
        return n === Z ? void 0 : n
      }
      return J.call(e, t) ? e[t] : void 0
    },
    X = Object.prototype.hasOwnProperty;
  var tt = function(t) {
      var e = this.__data__;
      return q ? void 0 !== e[t] : X.call(e, t)
    },
    et = "__lodash_hash_undefined__";
  var nt = function(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = q && void 0 === e ? et : e, this
  };

  function it(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var i = t[e];
      this.set(i[0], i[1])
    }
  }
  it.prototype.clear = V, it.prototype.delete = W, it.prototype.get = K, it.prototype.has = tt, it.prototype.set = nt;
  var st = it;
  var rt = function() {
    this.__data__ = [], this.size = 0
  };
  var at = function(t, e) {
    return t === e || t != t && e != e
  };
  var ot = function(t, e) {
      for (var n = t.length; n--;)
        if (at(t[n][0], e)) return n;
      return -1
    },
    ct = Array.prototype.splice;
  var lt = function(t) {
    var e = this.__data__,
      n = ot(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : ct.call(e, n, 1), --this.size, 0))
  };
  var ut = function(t) {
    var e = this.__data__,
      n = ot(e, t);
    return n < 0 ? void 0 : e[n][1]
  };
  var dt = function(t) {
    return ot(this.__data__, t) > -1
  };
  var ht = function(t, e) {
    var n = this.__data__,
      i = ot(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
  };

  function pt(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var i = t[e];
      this.set(i[0], i[1])
    }
  }
  pt.prototype.clear = rt, pt.prototype.delete = lt, pt.prototype.get = ut, pt.prototype.has = dt, pt.prototype.set = ht;
  var ft = pt,
    gt = H(o, "Map");
  var mt = function() {
    this.size = 0, this.__data__ = {
      hash: new st,
      map: new(gt || ft),
      string: new st
    }
  };
  var _t = function(t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  };
  var yt = function(t, e) {
    var n = t.__data__;
    return _t(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  };
  var vt = function(t) {
    var e = yt(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  };
  var bt = function(t) {
    return yt(this, t).get(t)
  };
  var Mt = function(t) {
    return yt(this, t).has(t)
  };
  var Nt = function(t, e) {
    var n = yt(this, t),
      i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
  };

  function Dt(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var i = t[e];
      this.set(i[0], i[1])
    }
  }
  Dt.prototype.clear = mt, Dt.prototype.delete = vt, Dt.prototype.get = bt, Dt.prototype.has = Mt, Dt.prototype.set = Nt;
  var It = Dt,
    St = "Expected a function";

  function wt(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(St);
    var n = function() {
      var i = arguments,
        s = e ? e.apply(this, i) : i[0],
        r = n.cache;
      if (r.has(s)) return r.get(s);
      var a = t.apply(this, i);
      return n.cache = r.set(s, a) || r, a
    };
    return n.cache = new(wt.Cache || It), n
  }
  wt.Cache = It;
  var Et = wt,
    kt = 500;
  var Tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    xt = /\\(\\)?/g,
    Ct = function(t) {
      var e = Et(t, function(t) {
          return n.size === kt && n.clear(), t
        }),
        n = e.cache;
      return e
    }(function(t) {
      var e = [];
      return 46 === t.charCodeAt(0) && e.push(""), t.replace(Tt, function(t, n, i, s) {
        e.push(i ? s.replace(xt, "$1") : n || t)
      }), e
    });
  var At = function(t, e) {
      for (var n = -1, i = null == t ? 0 : t.length, s = Array(i); ++n < i;) s[n] = e(t[n], n, t);
      return s
    },
    jt = 1 / 0,
    zt = c ? c.prototype : void 0,
    Ot = zt ? zt.toString : void 0;
  var Lt = function t(e) {
    if ("string" == typeof e) return e;
    if (n(e)) return At(e, t) + "";
    if (N(e)) return Ot ? Ot.call(e) : "";
    var i = e + "";
    return "0" == i && 1 / e == -jt ? "-0" : i
  };
  var Rt = function(t) {
    return null == t ? "" : Lt(t)
  };
  var Ut = function(t, e) {
      return n(t) ? t : S(t, e) ? [t] : Ct(Rt(t))
    },
    Bt = "[object Arguments]";
  var Yt = function(t) {
      return b(t) && v(t) == Bt
    },
    Pt = Object.prototype,
    Gt = Pt.hasOwnProperty,
    Ft = Pt.propertyIsEnumerable,
    Qt = Yt(function() {
      return arguments
    }()) ? Yt : function(t) {
      return b(t) && Gt.call(t, "callee") && !Ft.call(t, "callee")
    },
    $t = 9007199254740991,
    Ht = /^(?:0|[1-9]\d*)$/;
  var qt = function(t, e) {
      var n = typeof t;
      return !!(e = null == e ? $t : e) && ("number" == n || "symbol" != n && Ht.test(t)) && t > -1 && t % 1 == 0 && t < e
    },
    Vt = 9007199254740991;
  var Wt = function(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Vt
    },
    Zt = 1 / 0;
  var Jt = function(t) {
    if ("string" == typeof t || N(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -Zt ? "-0" : e
  };
  var Kt = function(t, e, i) {
    for (var s = -1, r = (e = Ut(e, t)).length, a = !1; ++s < r;) {
      var o = Jt(e[s]);
      if (!(a = null != t && i(t, o))) break;
      t = t[o]
    }
    return a || ++s != r ? a : !!(r = null == t ? 0 : t.length) && Wt(r) && qt(o, r) && (n(t) || Qt(t))
  };
  var Xt = function(t, n) {
    return null != t && Kt(t, n, e)
  };
  var te = function(t) {
    return void 0 === t
  };
  const ee = {
      "ringostatProjectHash": "517f7f5bb18ae93d55de85385f7130669f56a9d6",
      "uaId": "UA-109878774-5",
      "classified": 0,
      "xpaths": [{
        "xPath": "\/\/a[contains(@class, 'contacts-all__title') and contains(.,'032')]",
        "onlyForRegion": "",
        "mask": "+## (###) ### ## ##",
        "checkOnClient": "0",
        "callMeAll": "0",
        "reservedNumbersPercent": "0",
        "callMeMobile": "0",
        "geoGroup": "1",
        "callMeHTML": ""
      }, {
        "xPath": "\/\/a[contains(@class, 'contacts-list__link h5-book') and contains(.,'+38')]",
        "onlyForRegion": "",
        "mask": "+## (###) ###-##-##",
        "checkOnClient": "0",
        "callMeAll": "0",
        "reservedNumbersPercent": "0",
        "callMeMobile": "0",
        "geoGroup": "1",
        "callMeHTML": ""
      }, {
        "xPath": "\/\/a[starts-with(@href, 'tel:+38')]",
        "onlyForRegion": "",
        "mask": "+38 (###) ### ## ##",
        "checkOnClient": "0",
        "callMeAll": "0",
        "reservedNumbersPercent": "0",
        "callMeMobile": "0",
        "geoGroup": "",
        "callMeHTML": ""
      }],
      "isAdvanced": 1,
      "userSettings": {
        "observeDOM": true,
        "noGa": true,
        "browserGeolocation": false,
        "callbackSettings": {
          "delay": false,
          "CallbackOff": false,
          "autoFormOff": false,
          "hideCallbackButton": false
        },
        "customFormDataTracking": {
          "isActive": false,
          "startCallbackOnSubmitForm": false,
          "callbackDuringBusinessHours": true,
          "phoneInputName": ["phone", "tel", "telephone"],
          "pagesWhiteList": [],
          "pagesBlackList": [],
          "fieldsBlackList": []
        },
        "callback": "function (data) {}",
        "initChangeNumber": "function () { var urls=['https:\/\/grand-hotel.com.ua\/about-team']; var url =window.location.href; var check = true; for(var i = 0; i <= urls.length; i++) {if(urls[i] !== undefined && url.search(urls[i]) === 0) {check = false;} }  return check;}"
      },
      "substitutionStatus": 1,
      "crossDomainTracking": 0,
      "trackedEntities": {
        "sessionId": {
          "level": "session",
          "type": "expression",
          "value": "document.cookie.match('(^|;)\\\\s*_ga_9V65B0H2LZ\\\\s*=\\\\s*([^;]+)').pop().split('.')[2]"
        },
        "sessionNumber": {
          "level": "session",
          "type": "expression",
          "value": "document.cookie.match('(^|;)\\\\s*_ga_9V65B0H2LZ\\\\s*=\\\\s*([^;]+)').pop().split('.')[3]"
        },
        "clientId": {
          "level": "session",
          "type": "expression",
          "value": "gaGlobal.vid"
        }
      },
      "userFormsSettings": {
        "connectIntlTelInputPlugin": false,
        "forms": []
      }
    },
    ne = (t, e) => "string" == typeof t && 0 === t.indexOf("function") ? new Function(`return ${t}`)() : e;
  ee.userSettings = ee.userSettings || {}, ee.noGa = ee.userSettings.noGa || !1, ee.gtmGaId = ee.userSettings.gtmGaId || null, ee.transportDomain = ee.userSettings.transportDomain || !1, !1 !== ee.transportDomain ? ee.urls = {
    changedNumber: "https://" + ee.transportDomain + "/rng/ct/changed_number/",
    collect: "https://" + ee.transportDomain + "/rng/ct/collect/",
    ping: "https://" + ee.transportDomain + "/rng/ct/ping/",
    backend: "https://app.ringostat.com/",
    api: "https://" + ee.transportDomain + "/rng/ap/",
    analytics: "https://" + ee.transportDomain + "/rng/ct/",
    apiV2: "https://" + ee.transportDomain + "/rng/ct/api_v2?token=27a69aed645097ff7b46aead77ef0ad8",
    callback: "https://callback.ringostat.net/"
  } : ee.urls = {
    changedNumber: "https://analytics.ringostat.net/changed_number/",
    collect: "https://analytics.ringostat.net/collect/",
    ping: "https://analytics.ringostat.net/ping/",
    backend: "https://app.ringostat.com/",
    api: "https://api.ringostat.com/",
    analytics: "https://analytics.ringostat.net/",
    apiV2: "https://analytics.ringostat.net/api_v2?token=27a69aed645097ff7b46aead77ef0ad8",
    clientsScriptService: "https://script.ringostat.com/v5/ringostat-clients-script.js",
    callback: "https://callback.ringostat.net/"
  }, ee.manualMode = ee.userSettings.manualMode || !1, ee.browserGeolocation = void 0 === ee.userSettings.browserGeolocation || ee.userSettings.browserGeolocation, ee.callbackSettings = ee.userSettings.callbackSettings || {}, ee.changedNumberCallback = ne(ee.userSettings.callback, () => {}), ee.cookieDomain = ee.userSettings.cookieDomain || "", ee.cookieUpdate = ee.userSettings.cookieUpdate || !0, ee.cookies = {
    rngst1: "rngst1",
    rngst2: "rngst2"
  }, ee.ga = ee.userSettings.GoogleAnalyticsObject ? ee.userSettings.GoogleAnalyticsObject : window.GoogleAnalyticsObject, ee.interactionEvents = ["mousedown", "mouseup", "mousemove", "onscroll", "touchstart", "touchmove", "touchend", "keydown", "keyup"], ee.isAdvanced = ee.isAdvanced || !1, ee.numbersData = [], ee.observeDOM = ee.userSettings.observeDOM || !1, ee.pingInterval = 1e4, ee.phoneNumber = ee.phoneNumber || null, ee.roistatTracking = ee.userSettings.roistatTracking || !1, ee.sessionLength = ee.userSettings.sessionLength || 300, ee.sessionLengthMS = 1e3 * ee.sessionLength, 0 !== ee.substitutionStatus ? ee.substitutionEnabled = ne(ee.userSettings.initChangeNumber, () => !0)() : ee.substitutionEnabled = 0, ee.trackedEntities = ee.trackedEntities || {}, ee.ringostatRecaptchaKey = "6LeIw_0UAAAAAGEDTrNitDr_4BTLmnHqro3TVo0f";
  for (var ie = s(function(t) {
      var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
      if (e) {
        var n = new Uint8Array(16);
        t.exports = function() {
          return e(n), n
        }
      } else {
        var i = new Array(16);
        t.exports = function() {
          for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;
          return i
        }
      }
    }), se = [], re = 0; re < 256; ++re) se[re] = (re + 256).toString(16).substr(1);
  var ae = function(t, e) {
    var n = e || 0,
      i = se;
    return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("")
  };
  var oe = function(t, e, n) {
    var i = e && n || 0;
    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
    var s = (t = t || {}).random || (t.rng || ie)();
    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
      for (var r = 0; r < 16; ++r) e[i + r] = s[r];
    return e || ae(s)
  };
  const ce = (t, e, n, i) => {
      document.cookie = `${t}=${encodeURIComponent(JSON.stringify(e))}; expires=${new Date((new Date).getTime()+1e3*n).toUTCString()}; path=/${i?`; domain=${i}`:""}`
    },
    le = (t, e) => {
      ce(t, "", -1, e)
    },
    ue = (t, e) => {
      let n = document.cookie.match(new RegExp(`(^|;)\\s*${t}\\s*=\\s*([^;]+)`));
      return n = n ? decodeURIComponent(n.pop()) : null, e ? JSON.parse(n) : n
    },
    de = (t, e, n) => {
      ce(t, ue(t, !0), e, n)
    },
    he = (t, e) => {
      if (!1 === ee.noGa) {
        if (void 0 === t[e]) return null;
        if ("function" != typeof t[e].getAll) return null;
        const n = t[e].getAll();
        if (!1 === Array.isArray(n) || 0 === n.length) return null;
        const i = n.length;
        for (let t = 0; t < i; t += 1) {
          const e = n[t];
          if (e.get("ringostatTracker")) return e
        }
        return null
      } {
        let t, e;
        return ue("rngst", "clientId") ? (e = {
          clientId: t = ue("rngst", !0).clientId
        }, ee.cookieUpdate && de("rngst", e, 31536e3, ee.cookieDomain)) : (t = oe(), ce("rngst", e = {
          clientId: t
        }, 63072e3, ee.cookieDomain)), {
          clientId: t,
          trackingId: ee.uaId
        }
      }
    },
    pe = "pageview";
  var fe = function(t) {
    return null == t
  };
  const ge = t => {
      if ("#debug_ringostat_script" === window.location.hash) return console.log(`Ringostat: ${t}`)
    },
    me = function(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      try {
        if ("simple" !== e) {
          return new Function(`return ${t}`)()
        }
        return n ? t : window[t]
      } catch (t) {
        ge("Error executing content:", t)
      }
      return null
    },
    _e = (t, e) => {
      let n = {};
      if (void 0 !== window.ringostat_additional_data && "session" === e) {
        if ("string" == typeof window.ringostat_additional_data) try {
          n = JSON.parse(window.ringostat_additional_data)
        } catch (t) {
          ge(t)
        } else "[object Object]" === Object.prototype.toString.call(window.ringostat_additional_data) && (n = window.ringostat_additional_data);
        n.ringostatOldData = 1
      }
      return Object.keys(t).forEach(i => {
        const {
          level: s,
          type: r,
          value: a
        } = t[i];
        if (e !== s) return;
        const o = me(a, r);
        !1 === fe(o) && (n[i] = o)
      }), Object.keys(n).length > 0 ? JSON.stringify(n) : null
    },
    ye = t => {
      let {
        clientId: e,
        cookie: n,
        firstRequest: i,
        forceNumber: s,
        geoLocation: r,
        pageViewId: a,
        projectHash: o,
        adId: c,
        xPathId: l,
        sl: u
      } = t, d = _e(ee.trackedEntities, pe);
      if (c) {
        d || (d = "{}");
        let t = JSON.parse(d),
          e = Object.assign(t, {
            adId: c
          });
        d = JSON.stringify(e)
      }
      let h = [`r_h=${encodeURIComponent(o)}`, `r_cl=${encodeURIComponent(e)}`, `r_cu=${encodeURIComponent(window.location.href)}`, `r_re=${encodeURIComponent(document.referrer)}`, `r_ce=${encodeURIComponent(n)}`, `r_ur=${i}`, `r_us=${encodeURIComponent(window.navigator.userAgent)}`, "r_fs=null", `r_fn=${s?"forceNumber":null}`, `dt=${encodeURIComponent(document.title)}`, `hid=${a}`, `vid=${a}`, `r_ad=${encodeURIComponent(_e(ee.trackedEntities,"session"))}`, `r_pd=${encodeURIComponent(d)}`];
      return r.latitude && h.push(`r_la=${encodeURIComponent(r.latitude)}`), r.accuracy && h.push(`r_a=${encodeURIComponent(r.accuracy)}`), r.city && h.push(`r_ci=${encodeURIComponent(r.city)}`), r.country && h.push(`r_cy=${encodeURIComponent(r.country)}`), c && h.push(`r_ai=${encodeURIComponent(c)}`), l && h.push(`r_x=${encodeURIComponent(l)}`), u && h.push(`sl=${u}`), h.filter(Boolean).join("&")
    };
  var ve = Math.floor,
    be = Math.random;
  var Me = function(t, e) {
    return t + ve(be() * (e - t + 1))
  };
  var Ne = function(t) {
    return null != t && Wt(t.length) && !A(t)
  };
  var De = function(t, e, n) {
      if (!w(n)) return !1;
      var i = typeof e;
      return !!("number" == i ? Ne(n) && qt(e, n.length) : "string" == i && e in n) && at(n[e], t)
    },
    Ie = NaN,
    Se = /^\s+|\s+$/g,
    we = /^[-+]0x[0-9a-f]+$/i,
    Ee = /^0b[01]+$/i,
    ke = /^0o[0-7]+$/i,
    Te = parseInt;
  var xe = function(t) {
      if ("number" == typeof t) return t;
      if (N(t)) return Ie;
      if (w(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = w(e) ? e + "" : e
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(Se, "");
      var n = Ee.test(t);
      return n || ke.test(t) ? Te(t.slice(2), n ? 2 : 8) : we.test(t) ? Ie : +t
    },
    Ce = 1 / 0,
    Ae = 1.7976931348623157e308;
  var je = function(t) {
      return t ? (t = xe(t)) === Ce || t === -Ce ? (t < 0 ? -1 : 1) * Ae : t == t ? t : 0 : 0 === t ? t : 0
    },
    ze = parseFloat,
    Oe = Math.min,
    Le = Math.random;
  var Re = function(t, e, n) {
    if (n && "boolean" != typeof n && De(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = je(t), void 0 === e ? (e = t, t = 0) : e = je(e)), t > e) {
      var i = t;
      t = e, e = i
    }
    if (n || t % 1 || e % 1) {
      var s = Le();
      return Oe(t + s * (e - t + ze("1e-" + ((s + "").length - 1))), e)
    }
    return Me(t, e)
  };
  const Ue = (t, e, n) => {
      if (n.jsonRpc && n.method) {
        return {
          method: "POST",
          type: "application/json",
          url: t,
          query: JSON.stringify({
            jsonrpc: "2.0",
            method: n.method,
            params: e,
            id: Re(9999)
          })
        }
      }
      return e.length <= 2e3 || n.forceGet ? {
        method: "GET",
        type: "text/plain",
        url: `${t}?${e}`,
        query: void 0
      } : {
        method: "POST",
        type: "application/x-www-form-urlencoded",
        url: t,
        query: e
      }
    },
    Be = oe(),
    Ye = {
      adId: null,
      clientId: "",
      firstRequest: !0,
      geoLocation: {},
      lastInteractionTime: Date.now(),
      lastPayload: "",
      needsRegenerate: !1,
      pageViewId: Be,
      trackingId: "",
      customAdNumber: null
    },
    Pe = (t, e, n) => {
      let {
        clientId: i,
        cookie: s,
        hitId: r,
        firstRequest: a,
        geoLocation: o,
        pageViewId: c,
        trackingId: l
      } = e, u = _e(t.trackedEntities, pe);
      if (n) {
        u || (u = "{}");
        let t = JSON.parse(u),
          e = Object.assign(t, {
            adId: n
          });
        u = JSON.stringify(e)
      }
      return ["hid=" + r, "vid=" + c, "r_ad=" + encodeURIComponent(_e(t.trackedEntities, "session")), "r_ce=" + encodeURIComponent(s), "r_cl=" + encodeURIComponent(i), "r_cu=" + encodeURIComponent(window.location.href), "r_d=" + encodeURIComponent(Date.now()), "r_h=" + encodeURIComponent(t.ringostatProjectHash), "r_pd=" + encodeURIComponent(u), "r_re=" + encodeURIComponent(document.referrer), "r_ur=" + a, "r_ua=" + encodeURIComponent(l), "r_us=" + encodeURIComponent(window.navigator.userAgent), o.accuracy && "&r_a=" + encodeURIComponent(o.accuracy), o.city && "r_ci=" + encodeURIComponent(o.city), o.country && "r_cy=" + encodeURIComponent(o.country), o.latitude && "r_la=" + encodeURIComponent(o.latitude), o.longitude && "r_lo=" + encodeURIComponent(o.longitude)].filter(Boolean).join("&")
    };
  var Ge = function() {};
  const Fe = function(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const i = Ue(t, e, n),
        s = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
      s.open(i.method, i.url, !0), s.setRequestHeader("Content-Type", i.type), s.onerror = n.onError || Ge, s.onload = function() {
        n.onSuccess && n.onSuccess(this)
      }, n.withCredentials && (s.withCredentials = !0, s.crossDomain = !0), s.send(i.query), s.onreadystatechange = function() {
        4 === s.readyState && t.indexOf("changed_number") + 1 && ("blackList" === JSON.parse(s.response).msg && console.log("Current IP in block-list: insertion is OFF"))
      }
    },
    Qe = function(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        recollect: s = !1
      } = n, r = "pageview" === t;
      r && (Ye.needsRegenerate && !1 === s && (Ye.pageViewId = oe(), sessionStorage.setItem("vid_id", Ye.pageViewId)), Ye.needsRegenerate = !0);
      const a = !1 === r ? oe() : Ye.pageViewId;
      r && (Ye.lastPayload = e);
      const o = Pe(ee, {
        clientId: Ye.clientId,
        cookie: ue(ee.cookies.rngst2, !1),
        firstRequest: Ye.firstRequest,
        geoLocation: Ye.geoLocation,
        pageViewId: Ye.pageViewId,
        trackingId: Ye.trackingId,
        hitId: a
      }, i);
      Ye.firstRequest = !1, Fe(ee.urls.collect, `${e}&${o}`)
    },
    $e = function(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        recollect: i = !1
      } = e, s = "pageview" === t, r = screen, a = ["v=1", "t=" + encodeURIComponent(t), "cid=" + encodeURIComponent(Ye.clientId), "tid=" + encodeURIComponent(Ye.trackingId), "dl=" + encodeURIComponent(window.location.href), "dt=" + encodeURIComponent(document.title), "dr=" + encodeURIComponent(document.referrer), "sr=" + encodeURIComponent(r.width + "x" + r.height), "vp=" + encodeURIComponent(r.availWidth + "x" + r.availHeight), "sd=" + encodeURIComponent(r.colorDepth + "-bit"), "a=" + encodeURIComponent(Date.now())].filter(Boolean).join("&");
      s && (Ye.needsRegenerate && !1 === i && (Ye.pageViewId = oe()), Ye.needsRegenerate = !0);
      const o = !1 === s ? oe() : Ye.pageViewId;
      s && (Ye.lastPayload = a);
      const c = Pe(ee, {
        clientId: Ye.clientId,
        cookie: ue(ee.cookies.rngst2, !1),
        firstRequest: Ye.firstRequest,
        geoLocation: Ye.geoLocation,
        pageViewId: Ye.pageViewId,
        trackingId: Ye.trackingId,
        hitId: o
      }, n);
      Ye.firstRequest = !1, Fe(ee.urls.collect, `${a}&${c}`)
    },
    He = t => {
      let {
        responseText: e
      } = t;
      const n = JSON.parse(e);
      if (void 0 === n.pong) {
        var i = ee.userSettings.dataForPingEvents;
        n.forEach(function(t) {
          if (null != t.data && void 0 !== i[t.event]) {
            var e = i[t.event].cb;
            (e = new Function("return " + e)())(t.data)
          }
        })
      }
      n.recollect && Qe("pageview", Ye.lastPayload, {
        recollect: !0
      })
    },
    qe = t => {
      let e = function(t, e) {
        let {
          clientId: n,
          pageViewId: i
        } = e, s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = _e(t.trackedEntities, pe);
        if (s) {
          r || (r = "{}");
          let t = JSON.parse(r),
            e = Object.assign(t, {
              adId: s
            });
          r = JSON.stringify(e)
        }
        return ["hid=" + i, "vid=" + i, "r_ad=" + encodeURIComponent(_e(t.trackedEntities, "session")), "r_cl=" + encodeURIComponent(n), "r_pd=" + encodeURIComponent(r), "r_h=" + encodeURIComponent(t.ringostatProjectHash)].join("&")
      }(ee, Ye, t);
      Fe(ee.urls.ping, e, {
        forceGet: !0,
        onSuccess: He,
        withCredentials: !0
      })
    },
    Ve = (t, e, n) => {
      let i = e.length;
      for (; i--;) t.addEventListener(e[i], n, !1)
    },
    We = function(t, e) {
      const n = -1 !== e.indexOf("+380800") || -1 !== e.indexOf("380800"),
        i = -1 !== t.indexOf("#"),
        s = -1 !== t.indexOf(e);
      let r = t,
        a = `${e}`,
        o = `+${e}`;
      if (!0 === n && (-1 !== a.indexOf("+380800") && (a = a.replace("+380", "0")), -1 !== a.indexOf("380800") && (a = a.replace("380", "0"))), !1 === i) return a;
      !0 === i && !0 === n && (-1 !== r.indexOf("+380800") ? (r = t.replace("+" + e, a), r = t.replace("+38", "")) : -1 !== r.indexOf("380800") && (r = t.replace(e, a))), !1 === n && !0 === i && !0 === s && (r = t.replace(e, o));
      const c = a.toString().split(""),
        l = r.toString().split("");
      let u = c.length;
      for (; u--;) - 1 !== l.lastIndexOf("#") && (l[l.lastIndexOf("#")] = c[+u]);
      let d = l.join("").replace(/#/g, "");
      return d = d.replace("++", "+")
    },
    Ze = function(t, e, n, i, s, r) {
      let a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        o = arguments.length > 7 ? arguments[7] : void 0,
        c = t.length;
      for (; c--;) ! function(r) {
        let l = t[c],
          u = null;
        if (!0 === a) {
          l.innerHTML = e;
          let t = l.firstChild;
          l.parentNode.replaceChild(t, l), (u = t).addEventListener("click", function(e) {
            i(n, null, function(e, n) {
              t.innerHTML = e;
              const i = -1 !== n.indexOf("+380800") ? n.replace("+380", "0") : -1 !== n.indexOf("380800") ? n.replace("380", "0") : `+${n}`;
              t.parentNode.replaceChild(t.firstChild, t), "A" === t.nodeName && t.setAttribute("href", "tel:" + i), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + i)
            })
          })
        } else {
          l.innerHTML = e;
          let t = l.firstChild;
          for (let t = 0; t < o.length; t++) o[t].geoGroup === s.xpaths[n].geoGroup && (l.setAttribute("rngst-geoGroup", s.xpaths[n].geoGroup), l.setAttribute("rngst-id", n));
          t.addEventListener("click", function(t) {
            i(n, o, function(t, e) {
              let i = document.querySelectorAll(`[rngst-geoGroup="${s.xpaths[n].geoGroup}"]`);
              for (let t = 0; t < i.length; t++) {
                i[t].innerHTML = We(s.xpaths[i[t].getAttribute("rngst-id")].mask.replace("<t>", e), e);
                const n = -1 !== e.indexOf("+380800") ? e.replace("+380", "0") : -1 !== e.indexOf("380800") ? e.replace("380", "0") : `+${e}`;
                "A" === i[t].nodeName && i[t].setAttribute("href", "tel:" + n), 0 == t && /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + n)
              }
            })
          })
        }
      }()
    },
    Je = function(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const n = [],
        i = document.evaluate(t.xPath, null === e ? document : e, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let t = 0, e = i.snapshotLength; t < e; t++) n.push(i.snapshotItem(t));
      return n
    },
    Ke = t => {
      t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      const e = new RegExp(`[\\?&]${t}=([^&#]*)`).exec(location.search),
        n = e ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null;
      return n && n.length > 0 ? n : null
    },
    Xe = (t, e) => {
      "loaded" !== t.readyState && "completed" !== t.readyState ? setTimeout(() => {
        Xe(t, e)
      }, 100) : e()
    },
    tn = (t, e) => {
      const n = document.getElementsByTagName("script")[0],
        i = document.createElement("script");
      i.async = !0, i.src = t, i.type = "text/javascript", i.onload = e, Xe(i, e), n.parentNode.insertBefore(i, n)
    },
    en = t => {
      let e;
      const n = [],
        i = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null, !1);
      for (; e = i.nextNode();) n.push(e);
      return n
    },
    nn = function(t, e) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all";
      if (e.inactive_project || e.ip_is_blocked) return !1;
      const i = void 0 !== t.userSettings.messengers,
        s = i && t.userSettings.messengers.telegram && 1 === t.userSettings.messengers.telegram.enabled && t.userSettings.messengers.telegram.bot_name.length > 0,
        r = i && t.userSettings.messengers.viber && 1 === t.userSettings.messengers.viber.enabled && t.userSettings.messengers.viber.bot_name.length > 0,
        a = i && t.userSettings.messengers.facebookMessenger && 1 === t.userSettings.messengers.facebookMessenger.enabled && t.userSettings.messengers.facebookMessenger.bot_id.length > 0;
      return "telegram" === n ? i && s : "viber" === n ? i && r : "facebookMessenger" === n ? i && a : i && s || i && r || i && a
    },
    sn = t => {
      if (!1 === ee.noGa) {
        const e = he(window, ee.ga);
        if (e) return void((t, e) => {
          ge("Ringostat is connected through CustomTask"), Ye.clientId = t.get("clientId"), Ye.trackingId = t.get("trackingId"), e()
        })(e, t);
        window[ee.ga]("provide", "ringostat", (t => e => {
          const n = e.get("sendHitTask");
          ge("Ringostat is connected as a plugin"), Ye.clientId = e.get("clientId"), Ye.trackingId = e.get("trackingId"), t(), e.set("sendHitTask", t => {
            n(t), Qe(t.get("hitType"), t.get("hitPayload"))
          })
        })(t))
      } else {
        const e = he(window);
        e && ((t, e) => {
          ge("Ringostat is connected through noGaTask"), Ye.clientId = t.clientId, Ye.trackingId = t.trackingId, e()
        })(e, t)
      }
    };
  Array.prototype.forEach || (Array.prototype.forEach = function(t) {
    var e, n;
    if (null == this) throw new TypeError("this is null or not defined");
    var i = Object(this),
      s = i.length >>> 0;
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    for (arguments.length > 1 && (e = arguments[1]), n = 0; n < s;) {
      var r;
      n in i && (r = i[n], t.call(e, r, n, i)), n++
    }
  }), String.prototype.includes || (String.prototype.includes = function(t, e) {
    return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
  }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(t, e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var n = Object(this),
        i = n.length >>> 0;
      if (0 === i) return !1;
      var s, r, a = 0 | e,
        o = Math.max(a >= 0 ? a : i - Math.abs(a), 0);
      for (; o < i;) {
        if ((s = n[o]) === (r = t) || "number" == typeof s && "number" == typeof r && isNaN(s) && isNaN(r)) return !0;
        o++
      }
      return !1
    }
  }), window.MutationObserver = window.MutationObserver || function(t) {
    function e(t) {
      this.i = [], this.m = t
    }

    function n(e) {
      var n, i = {
        type: null,
        target: null,
        addedNodes: [],
        removedNodes: [],
        previousSibling: null,
        nextSibling: null,
        attributeName: null,
        attributeNamespace: null,
        oldValue: null
      };
      for (n in e) i[n] !== t && e[n] !== t && (i[n] = e[n]);
      return i
    }

    function i(e, i) {
      var o = r(e, i);
      return function(l) {
        var u, d = l.length;
        i.a && 3 === e.nodeType && e.nodeValue !== o.a && l.push(new n({
          type: "characterData",
          target: e,
          oldValue: o.a
        })), i.b && o.b && s(l, e, o.b, i.f), (i.c || i.g) && (u = function(e, i, r, o) {
          function l(t, i, r, a, c) {
            var l, d, h, p = t.length - 1;
            for (c = -~((p - c) / 2); h = t.pop();) l = r[h.j], d = a[h.l], o.c && c && Math.abs(h.j - h.l) >= p && (e.push(n({
              type: "childList",
              target: i,
              addedNodes: [l],
              removedNodes: [l],
              nextSibling: l.nextSibling,
              previousSibling: l.previousSibling
            })), c--), o.b && d.b && s(e, l, d.b, o.f), o.a && 3 === l.nodeType && l.nodeValue !== d.a && e.push(n({
              type: "characterData",
              target: l,
              oldValue: d.a
            })), o.g && u(l, d)
          }

          function u(i, r) {
            for (var h, p, f, g, m, _ = i.childNodes, y = r.c, v = _.length, b = y ? y.length : 0, M = 0, N = 0, D = 0; N < v || D < b;) g = _[N], m = (f = y[D]) && f.node, g === m ? (o.b && f.b && s(e, g, f.b, o.f), o.a && f.a !== t && g.nodeValue !== f.a && e.push(n({
              type: "characterData",
              target: g,
              oldValue: f.a
            })), p && l(p, i, _, y, M), o.g && (g.childNodes.length || f.c && f.c.length) && u(g, f), N++, D++) : (d = !0, h || (h = {}, p = []), g && (h[f = a(g)] || (h[f] = !0, -1 === (f = c(y, g, D, "node")) ? o.c && (e.push(n({
              type: "childList",
              target: i,
              addedNodes: [g],
              nextSibling: g.nextSibling,
              previousSibling: g.previousSibling
            })), M++) : p.push({
              j: N,
              l: f
            })), N++), m && m !== _[N] && (h[f = a(m)] || (h[f] = !0, -1 === (f = c(_, m, N)) ? o.c && (e.push(n({
              type: "childList",
              target: r.node,
              removedNodes: [m],
              nextSibling: y[D + 1],
              previousSibling: y[D - 1]
            })), M--) : p.push({
              j: f,
              l: D
            })), D++));
            p && l(p, i, _, y, M)
          }
          var d;
          return u(i, r), d
        }(l, e, o, i)), (u || l.length !== d) && (o = r(e, i))
      }
    }

    function s(e, i, s, r) {
      for (var a, o, c = {}, l = i.attributes, d = l.length; d--;) o = (a = l[d]).name, r && r[o] === t || (u(i, a) !== s[o] && e.push(n({
        type: "attributes",
        target: i,
        attributeName: o,
        oldValue: s[o],
        attributeNamespace: a.namespaceURI
      })), c[o] = !0);
      for (o in s) c[o] || e.push(n({
        target: i,
        type: "attributes",
        attributeName: o,
        oldValue: s[o]
      }))
    }

    function r(t, e) {
      var n = !0;
      return function t(i) {
        var s = {
          node: i
        };
        return !e.a || 3 !== i.nodeType && 8 !== i.nodeType ? (e.b && n && 1 === i.nodeType && (s.b = o(i.attributes, function(t, n) {
          return e.f && !e.f[n.name] || (t[n.name] = u(i, n)), t
        })), n && (e.c || e.a || e.b && e.g) && (s.c = function(t, e) {
          for (var n = [], i = 0; i < t.length; i++) n[i] = e(t[i], i, t);
          return n
        }(i.childNodes, t)), n = e.g) : s.a = i.nodeValue, s
      }(t)
    }

    function a(t) {
      try {
        return t.id || (t.mo_id = t.mo_id || d++)
      } catch (e) {
        try {
          return t.nodeValue
        } catch (t) {
          return d++
        }
      }
    }

    function o(t, e) {
      for (var n = {}, i = 0; i < t.length; i++) n = e(n, t[i], i, t);
      return n
    }

    function c(t, e, n, i) {
      for (; n < t.length; n++)
        if ((i ? t[n][i] : t[n]) === e) return n;
      return -1
    }
    e._period = 30, e.prototype = {
      observe: function(t, n) {
        for (var s = {
            b: !!(n.attributes || n.attributeFilter || n.attributeOldValue),
            c: !!n.childList,
            g: !!n.subtree,
            a: !(!n.characterData && !n.characterDataOldValue)
          }, r = this.i, a = 0; a < r.length; a++) r[a].s === t && r.splice(a, 1);
        n.attributeFilter && (s.f = o(n.attributeFilter, function(t, e) {
          return t[e] = !0, t
        })), r.push({
          s: t,
          o: i(t, s)
        }), this.h || function(t) {
          ! function n() {
            var i = t.takeRecords();
            i.length && t.m(i, t), t.h = setTimeout(n, e._period)
          }()
        }(this)
      },
      takeRecords: function() {
        for (var t = [], e = this.i, n = 0; n < e.length; n++) e[n].o(t);
        return t
      },
      disconnect: function() {
        this.i = [], clearTimeout(this.h), this.h = null
      }
    };
    var l = document.createElement("i");
    l.style.top = 0;
    var u = (l = "null" != l.attributes.style.value) ? function(t, e) {
        return e.value
      } : function(t, e) {
        return "style" !== e.name ? e.value : t.style.cssText
      },
      d = 1;
    return e
  }(void 0);
  const rn = (t, e) => {
      let n, i, s;
      "observeDOM" !== e && t.notifyAllObservers("numbers.beforeSetWithoutObserve", Ye.numbersData);
      for (const t in Ye.numbersData) {
        if (!Ye.numbersData.numbers) break;
        let e, r, a, o, c, l = "",
          u = 0,
          d = 1,
          h = 1,
          p = 1,
          f = "",
          g = "",
          m = "",
          _ = "",
          y = "";
        if (!Ye.numbersData.hasOwnProperty(t)) continue;
        if (s = t, i = ee.phoneNumber, ge(`Number: ${s} for phoneNumber[${i}]`), !i || !s) continue;
        for (; 10 !== u;) l = (e = i[i.length - d]) + l, isNaN(e) || " " === e || u++, i.length === d && (u = 10), d++;
        o = l.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)"), r = new RegExp(o, "gi"), a = l.replace(/\d/g, "Y"), c = l.replace(/(\D)/g, "(\\D*?)").replace("(\\D*?)(\\D*?)", "(\\D*?)").split(")");
        try {
          f = new RegExp(c[0] + ")", "gi")
        } catch (t) {
          f = new RegExp(c[0], "gi")
        }
        c.slice(1).forEach(t => {
          g = `${g+t})`
        }), g = new RegExp(g.substring(0, g.length - 1), "gi"), d = 0;
        const v = s.substr(s.length - 10);
        for (let t = 0, e = a.length; t < e; t++) "Y" === a[t] ? (m += v.toString()[d], h > 1 && (y += v.toString()[d]), d++) : "Y" === a[t - 1] && (m = `${m}$${h}`, 1 === h && (_ = m), h > 1 && (y = `${y}$${p}`, p++), h++);
        document.querySelectorAll("*:not(body)").forEach(t => {
          void 0 !== t.innerText && t.innerText.match(f) && (t.normalize(), en(t).forEach(t => {
            void 0 !== t.nodeValue && "none" !== t && t.nodeValue.match(r) ? (t.nodeValue = t.nodeValue.replace(r, m), t.parentNode.hasAttribute("href") && (t.parentNode.href = `tel:+${s}`)) : void 0 !== t.nodeValue && t.nodeValue.match(f) && t.parentNode.nextSibling && t.parentNode.nextSibling.nodeValue && t.parentNode.nextSibling.nodeValue.match(g) && (t.nodeValue = t.nodeValue.replace(f, _), t.parentNode.nextSibling.nodeValue = t.parentNode.nextSibling.nodeValue.replace(g, y), t.parentNode.parentNode.hasAttribute("href") && (t.parentNode.parentNode.href = `tel:+${s}`))
          }))
        }), n = !0
      }
      ee.callbackFunctionBehavior && !n || "function" == typeof ee.userSettings.callbackFunction && ee.userSettings.callbackFunction()
    },
    an = t => {
      Ye.numbersData.checkOnClient && Ye.numbersData.checkOnClient.includes(t) && (Ye.numbersData.checkOnClient.splice(Ye.numbersData.checkOnClient.indexOf(t), 1), 0 === Ye.numbersData.checkOnClient.length && delete Ye.numbersData.checkOnClient), Ye.numbersData.callMe && Ye.numbersData.callMe.includes(t) && (Ye.numbersData.callMe.splice(Ye.numbersData.callMe.indexOf(t), 1), 0 === Ye.numbersData.callMe.length && delete Ye.numbersData.callMe)
    },
    on = function(t) {
      let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
      const i = `${ye({clientId:Ye.clientId,cookie:ue(ee.cookies.rngst2,!1),firstRequest:Ye.firstRequest,forceNumber:!0,geoLocation:Ye.geoLocation,pageViewId:Ye.pageViewId,projectHash:ee.ringostatProjectHash})}&r_x=${t}`;
      Ye.firstRequest = !1, Fe(ee.urls.changedNumber, i, {
        onError(t) {
          ge(t)
        },
        onSuccess(i) {
          let {
            responseText: s
          } = i;
          const r = JSON.parse(s),
            a = Object.keys(r)[0];
          void 0 === Ye.numbersData[a] && (Ye.numbersData[a] = []);
          for (const n in Ye.numbersData)
            if (Array.isArray(Ye.numbersData[n]) && Ye.numbersData[n].includes(t)) {
              if (!(a in Ye.numbersData))
                if (null === e) Ye.numbersData[a] = [t];
                else
                  for (let t in e) Ye.numbersData[a].push(parseInt(e[t].xpathId, 10)), an(parseInt(e[t].xpathId, 10));
              if (Ye.numbersData[a].includes(t))
                if (null === e) an(t);
                else
                  for (let t in e) an(parseInt(e[t].xpathId, 10));
              else if (null === e) Ye.numbersData[a].length > 0 ? Ye.numbersData[a].push(parseInt(t, 10)) : Ye.numbersData[a] = [t], an(t);
              else
                for (let t in e) Ye.numbersData[a].push(parseInt(e[t].xpathId, 10)), an(parseInt(e[t].xpathId, 10))
            } ce(ee.cookies.rngst1, Ye.numbersData, ee.sessionLength, ee.cookieDomain), "function" == typeof n && n(We(ee.xpaths[t].mask.replace("<t>", a), a), a)
        }
      })
    },
    cn = t => t && /^\d+$/.test(t),
    ln = t => t && "callMe" === t,
    un = t => t && "checkOnClient" === t,
    dn = t => {
      if (void 0 === t) return [];
      let e = [],
        n = {};
      for (var i = 0; i < t.length; i++) t[i].xpathId = i, e.push(t[i].geoGroup);
      let s = e.filter(function(t, n) {
        return e.indexOf(t) === n
      });
      for (var r = 0; r < s.length; r++) n[s[r]] = t.filter(t => t.geoGroup === s[r]);
      return n
    },
    hn = (t, e, n) => {
      let i, s, r, a;
      "observeDOM" !== n && t.notifyAllObservers("numbers.beforeSetWithoutObserve", Ye.numbersData);
      for (let n in Ye.numbersData) {
        if (!Ye.numbersData.hasOwnProperty(n) || !Ye.numbersData.numbers) break;
        a = n;
        for (let o in Ye.numbersData[n]) {
          if (!Ye.numbersData[n].hasOwnProperty(o)) continue;
          if (s = Ye.numbersData[n][o], r = ee.xpaths[s], ge("Number: " + a + " for Xpath[" + s + "]: " + JSON.stringify(r, null, 2)), !r || !a) continue;
          let c = Je(r);
          if (cn(a))
            for (let t in c)
              if (c.hasOwnProperty(t))
                if (!0 === ee.userSettings.replaceXpaths) {
                  c[t].innerHTML = We(r.mask.replace("<t>", a), a);
                  let e = c[t].firstChild;
                  c[t].parentNode.replaceChild(e, c[t])
                } else c[t].innerHTML = o, c[t].innerHTML = We(r.mask.replace("<t>", a), a), c[t].hasAttribute("href") && (c[t].href = "tel:+" + a);
          if (ln(a) && "" !== r.callMeHTML) {
            let t = c,
              n = t.length;
            if (c.length > 0)
              for (Ze(c, r.callMeHTML, s, on, ee, Je, ee.userSettings.replaceXpaths, e[r.geoGroup]); n--;) "A" === t[n].nodeName && t[n].removeAttribute("href")
          }
          un(a) && "1" === r.checkOnClient && c.length > 0 && function() {
            let e = c,
              n = e.length;
            on(s, null, function(i, s) {
              for (t.notifyAllObservers("numbers.beforeSetWithoutObserve", Ye.numbersData); n--;) e[n].innerHTML = i, e[n].hasAttribute("href") && (e[n].href = "tel:+" + s)
            })
          }(), i = !0
        }
      }
      ee.callbackFunctionBehavior && !i || "function" == typeof ee.userSettings.callbackFunction && ee.userSettings.callbackFunction()
    },
    pn = (t, e) => {
      let n = {};
      for (let e = t.length - 1; e >= 0; --e) n[t[e]] = t[e];
      for (let t = e.length - 1; t >= 0; --t) n[e[t]] = e[t];
      let i = [];
      for (let t in n) n.hasOwnProperty(t) && i.push(n[t]);
      return i
    },
    fn = (t, e) => {
      for (let n = 0; n < e.length; n++)
        for (let i = 0; i < t.length; i++) e[n] === t[i] && e.splice(n, 1);
      return e
    };
  var gn = Object.prototype;
  var mn = function(t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || gn)
  };
  var _n = function(t, e) {
      return function(n) {
        return t(e(n))
      }
    }(Object.keys, Object),
    yn = Object.prototype.hasOwnProperty;
  var vn = function(t) {
      if (!mn(t)) return _n(t);
      var e = [];
      for (var n in Object(t)) yn.call(t, n) && "constructor" != n && e.push(n);
      return e
    },
    bn = H(o, "DataView"),
    Mn = H(o, "Promise"),
    Nn = H(o, "Set"),
    Dn = H(o, "WeakMap"),
    In = R(bn),
    Sn = R(gt),
    wn = R(Mn),
    En = R(Nn),
    kn = R(Dn),
    Tn = v;
  (bn && "[object DataView]" != Tn(new bn(new ArrayBuffer(1))) || gt && "[object Map]" != Tn(new gt) || Mn && "[object Promise]" != Tn(Mn.resolve()) || Nn && "[object Set]" != Tn(new Nn) || Dn && "[object WeakMap]" != Tn(new Dn)) && (Tn = function(t) {
    var e = v(t),
      n = "[object Object]" == e ? t.constructor : void 0,
      i = n ? R(n) : "";
    if (i) switch (i) {
      case In:
        return "[object DataView]";
      case Sn:
        return "[object Map]";
      case wn:
        return "[object Promise]";
      case En:
        return "[object Set]";
      case kn:
        return "[object WeakMap]"
    }
    return e
  });
  var xn = Tn;
  var Cn = function() {
      return !1
    },
    An = s(function(t, e) {
      var n = e && !e.nodeType && e,
        i = n && t && !t.nodeType && t,
        s = i && i.exports === n ? o.Buffer : void 0,
        r = (s ? s.isBuffer : void 0) || Cn;
      t.exports = r
    }),
    jn = {};
  jn["[object Float32Array]"] = jn["[object Float64Array]"] = jn["[object Int8Array]"] = jn["[object Int16Array]"] = jn["[object Int32Array]"] = jn["[object Uint8Array]"] = jn["[object Uint8ClampedArray]"] = jn["[object Uint16Array]"] = jn["[object Uint32Array]"] = !0, jn["[object Arguments]"] = jn["[object Array]"] = jn["[object ArrayBuffer]"] = jn["[object Boolean]"] = jn["[object DataView]"] = jn["[object Date]"] = jn["[object Error]"] = jn["[object Function]"] = jn["[object Map]"] = jn["[object Number]"] = jn["[object Object]"] = jn["[object RegExp]"] = jn["[object Set]"] = jn["[object String]"] = jn["[object WeakMap]"] = !1;
  var zn = function(t) {
    return b(t) && Wt(t.length) && !!jn[v(t)]
  };
  var On = function(t) {
      return function(e) {
        return t(e)
      }
    },
    Ln = s(function(t, e) {
      var n = e && !e.nodeType && e,
        i = n && t && !t.nodeType && t,
        s = i && i.exports === n && r.process,
        a = function() {
          try {
            var t = i && i.require && i.require("util").types;
            return t || s && s.binding && s.binding("util")
          } catch (t) {}
        }();
      t.exports = a
    }),
    Rn = Ln && Ln.isTypedArray,
    Un = Rn ? On(Rn) : zn,
    Bn = "[object Map]",
    Yn = "[object Set]",
    Pn = Object.prototype.hasOwnProperty;
  var Gn = function(t) {
    if (null == t) return !0;
    if (Ne(t) && (n(t) || "string" == typeof t || "function" == typeof t.splice || An(t) || Un(t) || Qt(t))) return !t.length;
    var e = xn(t);
    if (e == Bn || e == Yn) return !t.size;
    if (mn(t)) return !vn(t).length;
    for (var i in t)
      if (Pn.call(t, i)) return !1;
    return !0
  };
  var Fn = function() {
    this.__data__ = new ft, this.size = 0
  };
  var Qn = function(t) {
    var e = this.__data__,
      n = e.delete(t);
    return this.size = e.size, n
  };
  var $n = function(t) {
    return this.__data__.get(t)
  };
  var Hn = function(t) {
      return this.__data__.has(t)
    },
    qn = 200;
  var Vn = function(t, e) {
    var n = this.__data__;
    if (n instanceof ft) {
      var i = n.__data__;
      if (!gt || i.length < qn - 1) return i.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new It(i)
    }
    return n.set(t, e), this.size = n.size, this
  };

  function Wn(t) {
    var e = this.__data__ = new ft(t);
    this.size = e.size
  }
  Wn.prototype.clear = Fn, Wn.prototype.delete = Qn, Wn.prototype.get = $n, Wn.prototype.has = Hn, Wn.prototype.set = Vn;
  var Zn = Wn,
    Jn = "__lodash_hash_undefined__";
  var Kn = function(t) {
    return this.__data__.set(t, Jn), this
  };
  var Xn = function(t) {
    return this.__data__.has(t)
  };

  function ti(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new It; ++e < n;) this.add(t[e])
  }
  ti.prototype.add = ti.prototype.push = Kn, ti.prototype.has = Xn;
  var ei = ti;
  var ni = function(t, e) {
    for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
      if (e(t[n], n, t)) return !0;
    return !1
  };
  var ii = function(t, e) {
      return t.has(e)
    },
    si = 1,
    ri = 2;
  var ai = function(t, e, n, i, s, r) {
      var a = n & si,
        o = t.length,
        c = e.length;
      if (o != c && !(a && c > o)) return !1;
      var l = r.get(t);
      if (l && r.get(e)) return l == e;
      var u = -1,
        d = !0,
        h = n & ri ? new ei : void 0;
      for (r.set(t, e), r.set(e, t); ++u < o;) {
        var p = t[u],
          f = e[u];
        if (i) var g = a ? i(f, p, u, e, t, r) : i(p, f, u, t, e, r);
        if (void 0 !== g) {
          if (g) continue;
          d = !1;
          break
        }
        if (h) {
          if (!ni(e, function(t, e) {
              if (!ii(h, e) && (p === t || s(p, t, n, i, r))) return h.push(e)
            })) {
            d = !1;
            break
          }
        } else if (p !== f && !s(p, f, n, i, r)) {
          d = !1;
          break
        }
      }
      return r.delete(t), r.delete(e), d
    },
    oi = o.Uint8Array;
  var ci = function(t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function(t, i) {
      n[++e] = [i, t]
    }), n
  };
  var li = function(t) {
      var e = -1,
        n = Array(t.size);
      return t.forEach(function(t) {
        n[++e] = t
      }), n
    },
    ui = 1,
    di = 2,
    hi = "[object Boolean]",
    pi = "[object Date]",
    fi = "[object Error]",
    gi = "[object Map]",
    mi = "[object Number]",
    _i = "[object RegExp]",
    yi = "[object Set]",
    vi = "[object String]",
    bi = "[object Symbol]",
    Mi = "[object ArrayBuffer]",
    Ni = "[object DataView]",
    Di = c ? c.prototype : void 0,
    Ii = Di ? Di.valueOf : void 0;
  var Si = function(t, e, n, i, s, r, a) {
    switch (n) {
      case Ni:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case Mi:
        return !(t.byteLength != e.byteLength || !r(new oi(t), new oi(e)));
      case hi:
      case pi:
      case mi:
        return at(+t, +e);
      case fi:
        return t.name == e.name && t.message == e.message;
      case _i:
      case vi:
        return t == e + "";
      case gi:
        var o = ci;
      case yi:
        var c = i & ui;
        if (o || (o = li), t.size != e.size && !c) return !1;
        var l = a.get(t);
        if (l) return l == e;
        i |= di, a.set(t, e);
        var u = ai(o(t), o(e), i, s, r, a);
        return a.delete(t), u;
      case bi:
        if (Ii) return Ii.call(t) == Ii.call(e)
    }
    return !1
  };
  var wi = function(t, e) {
    for (var n = -1, i = e.length, s = t.length; ++n < i;) t[s + n] = e[n];
    return t
  };
  var Ei = function(t, e, i) {
    var s = e(t);
    return n(t) ? s : wi(s, i(t))
  };
  var ki = function(t, e) {
    for (var n = -1, i = null == t ? 0 : t.length, s = 0, r = []; ++n < i;) {
      var a = t[n];
      e(a, n, t) && (r[s++] = a)
    }
    return r
  };
  var Ti = function() {
      return []
    },
    xi = Object.prototype.propertyIsEnumerable,
    Ci = Object.getOwnPropertySymbols,
    Ai = Ci ? function(t) {
      return null == t ? [] : (t = Object(t), ki(Ci(t), function(e) {
        return xi.call(t, e)
      }))
    } : Ti;
  var ji = function(t, e) {
      for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
      return i
    },
    zi = Object.prototype.hasOwnProperty;
  var Oi = function(t, e) {
    var i = n(t),
      s = !i && Qt(t),
      r = !i && !s && An(t),
      a = !i && !s && !r && Un(t),
      o = i || s || r || a,
      c = o ? ji(t.length, String) : [],
      l = c.length;
    for (var u in t) !e && !zi.call(t, u) || o && ("length" == u || r && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || qt(u, l)) || c.push(u);
    return c
  };
  var Li = function(t) {
    return Ne(t) ? Oi(t) : vn(t)
  };
  var Ri = function(t) {
      return Ei(t, Li, Ai)
    },
    Ui = 1,
    Bi = Object.prototype.hasOwnProperty;
  var Yi = function(t, e, n, i, s, r) {
      var a = n & Ui,
        o = Ri(t),
        c = o.length;
      if (c != Ri(e).length && !a) return !1;
      for (var l = c; l--;) {
        var u = o[l];
        if (!(a ? u in e : Bi.call(e, u))) return !1
      }
      var d = r.get(t);
      if (d && r.get(e)) return d == e;
      var h = !0;
      r.set(t, e), r.set(e, t);
      for (var p = a; ++l < c;) {
        var f = t[u = o[l]],
          g = e[u];
        if (i) var m = a ? i(g, f, u, e, t, r) : i(f, g, u, t, e, r);
        if (!(void 0 === m ? f === g || s(f, g, n, i, r) : m)) {
          h = !1;
          break
        }
        p || (p = "constructor" == u)
      }
      if (h && !p) {
        var _ = t.constructor,
          y = e.constructor;
        _ != y && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y) && (h = !1)
      }
      return r.delete(t), r.delete(e), h
    },
    Pi = 1,
    Gi = "[object Arguments]",
    Fi = "[object Array]",
    Qi = "[object Object]",
    $i = Object.prototype.hasOwnProperty;
  var Hi = function(t, e, i, s, r, a) {
    var o = n(t),
      c = n(e),
      l = o ? Fi : xn(t),
      u = c ? Fi : xn(e),
      d = (l = l == Gi ? Qi : l) == Qi,
      h = (u = u == Gi ? Qi : u) == Qi,
      p = l == u;
    if (p && An(t)) {
      if (!An(e)) return !1;
      o = !0, d = !1
    }
    if (p && !d) return a || (a = new Zn), o || Un(t) ? ai(t, e, i, s, r, a) : Si(t, e, l, i, s, r, a);
    if (!(i & Pi)) {
      var f = d && $i.call(t, "__wrapped__"),
        g = h && $i.call(e, "__wrapped__");
      if (f || g) {
        var m = f ? t.value() : t,
          _ = g ? e.value() : e;
        return a || (a = new Zn), r(m, _, i, s, a)
      }
    }
    return !!p && (a || (a = new Zn), Yi(t, e, i, s, r, a))
  };
  var qi = function t(e, n, i, s, r) {
      return e === n || (null == e || null == n || !b(e) && !b(n) ? e != e && n != n : Hi(e, n, i, s, t, r))
    },
    Vi = 1,
    Wi = 2;
  var Zi = function(t, e, n, i) {
    var s = n.length,
      r = s,
      a = !i;
    if (null == t) return !r;
    for (t = Object(t); s--;) {
      var o = n[s];
      if (a && o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return !1
    }
    for (; ++s < r;) {
      var c = (o = n[s])[0],
        l = t[c],
        u = o[1];
      if (a && o[2]) {
        if (void 0 === l && !(c in t)) return !1
      } else {
        var d = new Zn;
        if (i) var h = i(l, u, c, t, e, d);
        if (!(void 0 === h ? qi(u, l, Vi | Wi, i, d) : h)) return !1
      }
    }
    return !0
  };
  var Ji = function(t) {
    return t == t && !w(t)
  };
  var Ki = function(t) {
    for (var e = Li(t), n = e.length; n--;) {
      var i = e[n],
        s = t[i];
      e[n] = [i, s, Ji(s)]
    }
    return e
  };
  var Xi = function(t, e) {
    return function(n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  };
  var ts = function(t) {
    var e = Ki(t);
    return 1 == e.length && e[0][2] ? Xi(e[0][0], e[0][1]) : function(n) {
      return n === t || Zi(n, t, e)
    }
  };
  var es = function(t, e) {
    for (var n = 0, i = (e = Ut(e, t)).length; null != t && n < i;) t = t[Jt(e[n++])];
    return n && n == i ? t : void 0
  };
  var ns = function(t, e, n) {
    var i = null == t ? void 0 : es(t, e);
    return void 0 === i ? n : i
  };
  var is = function(t, e) {
    return null != t && e in Object(t)
  };
  var ss = function(t, e) {
      return null != t && Kt(t, e, is)
    },
    rs = 1,
    as = 2;
  var os = function(t, e) {
    return S(t) && Ji(e) ? Xi(Jt(t), e) : function(n) {
      var i = ns(n, t);
      return void 0 === i && i === e ? ss(n, t) : qi(e, i, rs | as)
    }
  };
  var cs = function(t) {
    return t
  };
  var ls = function(t) {
    return function(e) {
      return null == e ? void 0 : e[t]
    }
  };
  var us = function(t) {
    return function(e) {
      return es(e, t)
    }
  };
  var ds = function(t) {
    return S(t) ? ls(Jt(t)) : us(t)
  };
  var hs = function(t) {
    return "function" == typeof t ? t : null == t ? cs : "object" == typeof t ? n(t) ? os(t[0], t[1]) : ts(t) : ds(t)
  };
  var ps = function(t) {
    return function(e, n, i) {
      var s = Object(e);
      if (!Ne(e)) {
        var r = hs(n, 3);
        e = Li(e), n = function(t) {
          return r(s[t], t, s)
        }
      }
      var a = t(e, n, i);
      return a > -1 ? s[r ? e[a] : a] : void 0
    }
  };
  var fs = function(t, e, n, i) {
    for (var s = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < s;)
      if (e(t[r], r, t)) return r;
    return -1
  };
  var gs = function(t) {
      var e = je(t),
        n = e % 1;
      return e == e ? n ? e - n : e : 0
    },
    ms = Math.max;
  var _s = ps(function(t, e, n) {
    var i = null == t ? 0 : t.length;
    if (!i) return -1;
    var s = null == n ? 0 : gs(n);
    return s < 0 && (s = ms(i + s, 0)), fs(t, hs(e, 3), s)
  });
  var ys = function(t) {
    return function(e, n, i) {
      for (var s = -1, r = Object(e), a = i(e), o = a.length; o--;) {
        var c = a[t ? o : ++s];
        if (!1 === n(r[c], c, r)) break
      }
      return e
    }
  }();
  var vs = function(t, e) {
    return function(n, i) {
      if (null == n) return n;
      if (!Ne(n)) return t(n, i);
      for (var s = n.length, r = e ? s : -1, a = Object(n);
        (e ? r-- : ++r < s) && !1 !== i(a[r], r, a););
      return n
    }
  }(function(t, e) {
    return t && ys(t, e, Li)
  });
  var bs = function(t, e) {
    var n = [];
    return vs(t, function(t, i, s) {
      e(t, i, s) && n.push(t)
    }), n
  };
  var Ms = function(t, e) {
    return (n(t) ? ki : bs)(t, hs(e, 3))
  };
  const Ns = (t, e, n, i) => {
      const s = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
      s.open("POST", t, !0), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onload = n, s.onerror = i, s.send((t => {
        function e(t, n, i) {
          let s, r, a, o;
          if (o = /\[\]$/, n instanceof Array)
            for (r = 0, a = n.length; r < a; r++) o.test(t) ? i(t, n[r]) : e(`${t}[${"object"==typeof n[r]?r:""}]`, n[r], i);
          else if ("object" == typeof n)
            for (s in n) e(`${t}[${s}]`, n[s], i);
          else i(t, n)
        }
        let n, i, s, r, a, o;
        if (i = [], a = /%20/g, s = function(t, e) {
            e = "function" == typeof e ? e() : null == e ? "" : e, i[i.length] = `${encodeURIComponent(t)}=${encodeURIComponent(e)}`
          }, t instanceof Array)
          for (r in t) s(r, t[r]);
        else
          for (n in t) e(n, t[n], s);
        return o = i.join("&").replace(a, "+")
      })(e))
    },
    Ds = () => (() => document.documentElement.lang ? document.documentElement.lang : navigator ? navigator.language || navigator.userLanguage : "en")().split("-")[0],
    Is = (t, e) => {
      for (const n in e) e.hasOwnProperty(n) && (t || (t = {}), t[n] && "object" == typeof e[n] ? Is(t[n], e[n]) : t[n] = e[n]);
      return t
    },
    Ss = t => {
      t.style.opacity = 0, t.style.display = "flex",
        function e() {
          let n = parseFloat(t.style.opacity);
          (n += .1) > 1 || (t.style.opacity = n, requestAnimationFrame(e))
        }()
    },
    ws = (t, e) => {
      let n = 1;
      var i = setInterval(() => {
        (n -= 10 / 300) <= 0 && (clearInterval(i), n = 0, t.style.display = "none", t.style.visibility = "hidden", "function" == typeof e && e()), t.style.opacity = n, t.style.filter = `alpha(opacity=${100*n})`
      }, 10)
    },
    Es = t => {
      const e = document.createElement("a");
      return e.href = t, e
    },
    ks = (t, e) => {
      let n, i, s = !1;
      return function r() {
        if (s) return n = arguments, void(i = this);
        t.apply(this, arguments), s = !0, setTimeout(() => {
          s = !1, n && (r.apply(i, n), n = i = null)
        }, e)
      }
    },
    Ts = t => {
      let e = t;
      /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/i.test(t) && (e = t.replace(/-/g, "").match(/.{1,2}/g).map(function(t) {
        return String.fromCharCode(parseInt(t, 16))
      }).join(""));
      const n = {
        "+": "-",
        "/": "_",
        "=": ""
      };
      return [...btoa(e)].reduce((t, e) => t + (e in n ? n[e] : e), "")
    },
    xs = {
      currentUrl: window.location.href,
      referrer: document.referrer,
      referrerHost: Es(document.referrer).hostname,
      currentHost: Es(window.location.href).host
    };

  function Cs(t) {
    return ("0" + t.toString(16)).substr(-2)
  }
  const As = function(t) {
      var e = new Uint8Array((t || 40) / 2);
      return window.crypto.getRandomValues(e), Array.from(e, Cs).join("")
    },
    js = {
      old_data: null,
      language: Ds(),
      formType: null,
      form: null,
      button: null,
      icon: null,
      overlay: null,
      formStatus: "hidden",
      buttonStatus: "hidden",
      iframeDocument: null,
      tooltipText: {
        ru: "Есть вопросы? \n Свяжитесь с нами",
        en: "Any questions? \n Contact us",
        uk: "Є питання? \n Зв'яжіться з нами",
        bg: "Имате въпроси? \n Свържете се с нас",
        pl: "Masz jakieś pytania? \n Skontaktuj się z nami"
      },
      recaptcha_token: null,
      user_has_recaptcha: 0
    },
    zs = t => {
      js.iframeDocument.getElementById("rngst_send_callback").disabled = t, js.iframeDocument.getElementById("rngst_send_callback_now").disabled = t, t ? (js.iframeDocument.getElementById("rngst_send_callback").setAttribute("style", "opacity: 0.7; cursor: not-allowed;"), js.iframeDocument.getElementById("rngst_send_callback_now").setAttribute("style", "cursor: not-allowed;")) : (js.iframeDocument.getElementById("rngst_send_callback").setAttribute("style", ""), js.iframeDocument.getElementById("rngst_send_callback_now").setAttribute("style", ""))
    },
    Os = (t, e) => new Promise(function(n, i) {
      let s = sessionStorage.getItem("hit_id");
      if (null !== s) {
        const r = {
          "data[num_to_call]": t.num_to_call,
          "data[ua_id]": xs.uaId,
          "data[hash]": ee.ringostatProjectHash,
          "data[client_id]": xs.clientId,
          "data[utmz]": ue(ee.cookies.rngst2, !1) && ue(ee.cookies.rngst2, !0).utmz || "",
          "data[avg_time_to_call]": js.old_data.avg_time_to_call,
          "data[page_url]": xs.currentUrl,
          "data[hid]": s
        };
        !0 === t.delayed_callback && (r["data[delayed_callback]"] = t.delayed_callback, r["data[call_date]"] = t.call_date, r["data[call_time]"] = t.call_time), 1 === js.user_has_recaptcha ? (r["data[recaptcha_token]"] = As(255), r["data[verified_user]"] = 0) : js.recaptcha_token && 1 == js.old_data.recaptcha ? (r["data[recaptcha_token]"] = js.recaptcha_token, r["data[verified_user]"] = 1) : 1 == js.old_data.recaptcha ? (r["data[recaptcha_token]"] = As(255), r["data[verified_user]"] = 1) : r["data[verified_user]"] = 1, Ns(`${ee.urls.callback}api/initiateCallback/`, r, function() {
          if (200 === this.status) null !== e && e.e.target.submit(), $e("event"), n();
          else if (403 === this.status) {
            let t = this.response.length ? JSON.parse(this.response) : {};
            if ("message" in t && "Callback is blocked for client because of spam" === t.message && js.iframeDocument) {
              let t = js.iframeDocument.getElementsByClassName("spam_modal_popup");
              t.length && (t[0].classList.toggle("show_spam_modal_popup"), zs(!1))
            }
            ge(`initiateCallback  403 Error : ${this.status} - ${this.statusText}`), i()
          } else ge(`initiateCallback  Not success : ${this.status} - ${this.statusText}`), i();
          document.addEventListener("DOMContentLoaded", function(t) {
            zs(!1)
          })
        }, function() {
          ge(`initiateCallback  Error : ${this.status} - ${this.statusText}`), i(), zs(!1)
        })
      } else ge("initiateCallback  Error : hit_id not found in session storage"), i(), zs(!1)
    }),
    Ls = (t, e, n) => {
      ge("callbackAfterSendFormData arguments: phoneNumber,callbackDuringBusinessHours", t, e);
      let i = t.replace(/^(380|\+380)0/, "$1");
      i = i.replace(/^(7|\+7)8/, "$1");
      try {
        void 0 !== e && !0 === e ? Os({
          num_to_call: i
        }, null).then(() => {
          ge("successful callback during working hours!"), n()
        }).catch(t => {
          ge("initiate callback during working hours error  ", t), n()
        }) : Os({
          num_to_call: i
        }, null).then(() => {
          ge("successful callback at any time!"), n()
        }).catch(t => {
          ge("initiate callback at any time error  ", t), n()
        })
      } catch (t) {
        ge("callbackAfterSendFormData catch error ", t), n()
      }
    },
    Rs = {},
    Us = (t, e, n) => {
      !0 === t ? e.target.closest("form").submit() : n.closest("form").submit()
    },
    Bs = function(t, e, n, i) {
      let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      t.preventDefault();
      const r = !1 === js.old_data.ip_is_blocked && !1 === js.old_data.inactive_project;
      ge("function sendFormData. Arguments form, formId, Callback, submitElement: ", e, n, i, s);
      const a = new RegExp(/^([a-zA-Z0-9_\+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i),
        o = i.closest("body"),
        c = js.old_data.inactive_project;
      let l = !0,
        u = null,
        d = {},
        h = e.fields.length;
      for (; h--;) {
        const t = e.fields[h];
        let i = Je({
            xPath: t.fieldXpath.xpath
          }, o),
          s = Ms(i, function(t) {
            const e = t.closest("body");
            return o.isEqualNode(e)
          }),
          r = s.length;
        for (; r--;) {
          const e = s[r];
          let i = e.tagName;
          const o = !0 === e.required && !1 === c,
            h = !1 === c && void 0 !== t.useRegexForValidation && !0 === t.useRegexForValidation,
            p = !1 === c && !0 === t.useIntlTelInput;
          switch (i) {
            case "INPUT":
              let r = e.type,
                c = t.type,
                f = "phone" === c ? "tel" : "firstName" === c || "lastName" === c || "patronymic" === c || "fullName" === c ? "text" : r;
              switch (f) {
                case "checkbox":
                  let i = e.labels[0];
                  !0 === o ? !1 === e.checked ? (void 0 !== i && !0 !== i.hasAttribute("data-ringostat-origin-border") && i.setAttribute("data-ringostat-origin-border", i.style.color), void 0 !== i && (i.style.color = "#EB5757"), l = !1) : (void 0 !== i && (i.style.color = i.getAttribute("data-ringostat-origin-border"), i.removeAttribute("data-ringostat-origin-border")), d[t.name] = e.checked) : (void 0 !== i && (i.setAttribute("data-ringostat-origin-border", i.style.color), i.removeAttribute("data-ringostat-origin-border")), d[t.name] = e.checked);
                  break;
                case "radio":
                  const r = document.querySelectorAll(`[name=${s[0].name}]`),
                    c = _s(r, function(t) {
                      return !0 === t.checked
                    });
                  for (let e = 0; e < r.length; e++)
                    if (null !== r[e].labels && void 0 !== r[e].labels[0])
                      if (!1 === r[e].labels[0].hasAttribute("data-ringostat-origin-border") && r[e].labels[0].setAttribute("data-ringostat-origin-border", r[e].labels[0].style.color), !0 === o)
                        if (void 0 !== c) {
                          d[t.name] = c.value;
                          for (let t = 0; t < r.length; t++) void 0 !== r[t].labels[0] && (r[t].labels[0].style.color = r[t].labels[0].getAttribute("data-ringostat-origin-border"), r[t].labels[0].removeAttribute("data-ringostat-origin-border"))
                        } else {
                          for (let t = 0; t < r.length; t++) void 0 !== r[t].labels[0] && (r[t].labels[0].style.color = "#EB5757");
                          l = !1
                        }
                  else {
                    for (let t = 0; t < r.length; t++) null !== r[t].labels && void 0 !== r[t].labels[0] && (r[t].labels[0].style.color = r[t].labels[0].getAttribute("data-ringostat-origin-border"), r[t].labels[0].removeAttribute("data-ringostat-origin-border"));
                    d[t.name] = c.value
                  } else d[t.name] = c.value;
                  break;
                case "email":
                case "tel":
                case "text":
                case "hidden":
                case "password":
                case "undefined":
                  let g = e.value;
                  if ("undefined" === f && console.log("Unknown input type: ", f, " Tracking this input as a text input. We support the following types: password, hidden, text, tel, email, radio, checkbox. Please write to support of Ringostat."), !0 === o && "tel" !== f ? 0 === g.length ? (!0 !== e.hasAttribute("data-ringostat-origin-border") && e.setAttribute("data-ringostat-origin-border", e.style.border), e.style.border = "1px solid #EB5757", l = !1) : "email" === f && !0 === h ? !1 === a.test(g) ? (e.style.border = "1px solid #EB5757", l = !1) : e.style.border = "" : (e.style.border = e.getAttribute("data-ringostat-origin-border"), e.removeAttribute("data-ringostat-origin-border"), d[t.name] = g) : !1 === o && "tel" !== f && (d[t.name] = g), "tel" === f) {
                    const i = e.getAttribute("ringostat-input-id");
                    !0 === o ? (u = !0 === p && !0 === Rs[n][i].isValidNumber() ? Rs[n][i].getNumber() : void 0 === e.value ? "" : e.value, !0 === p && !1 === Rs[n][i].isValidNumber() || !1 === p && !0 === Gn(e.value) ? (e.style.border = "1px solid #EB5757", l = !1) : e.style.border = "") : u = !0 === p ? void 0 === Rs[n][i].getNumber() ? "" : Rs[n][i].getNumber() : void 0 === e.value ? "" : e.value, d[t.name] = u
                  }
                  break;
                default:
                  console.log("Unknown input type: ", f, " we support the following types: password, hidden, text, tel, email, radio, checkbox. Please write to support of Ringostat.")
              }
              break;
            case "TEXTAREA":
              let g = e.value;
              !0 !== e.hasAttribute("data-ringostat-origin-border") && e.setAttribute("data-ringostat-origin-border", e.style.border), !0 === o && 0 === g.length ? (e.style.border = "1px solid #EB5757", l = !1) : (e.style.border = e.getAttribute("data-ringostat-origin-border"), e.removeAttribute("data-ringostat-origin-border"), d[t.name] = g);
              break;
            case "SELECT":
              let m = [...e.options].filter(t => t.selected).map(t => t.value),
                _ = e.labels[0];
              void 0 !== _ && !0 !== _.hasAttribute("data-ringostat-origin-border") && _.setAttribute("data-ringostat-origin-border", _.style.color), !0 === o ? !0 === Gn(m) ? (void 0 !== _ && (_.style.color = "#EB5757"), l = !1) : (void 0 !== _ && (_.style.color = _.getAttribute("data-ringostat-origin-border"), _.removeAttribute("data-ringostat-origin-border")), d[t.name] = Rt(m)) : (void 0 !== _ && (_.setAttribute("data-ringostat-origin-border", _.style.color), _.removeAttribute("data-ringostat-origin-border")), d[t.name] = Rt(m));
              break;
            default:
              console.log("Unknown Tag Name: ", i, " Please write to support of Ringostat.")
          }
        }
      }
      if (!0 === l) {
        ge("Stored data:" + JSON.stringify(d));
        let a = oe();
        sessionStorage.setItem("hit_id", a);
        let o = {
          hid: a,
          vid: Ye.pageViewId,
          r_cl: Ye.clientId,
          r_cu: window.location.href,
          r_pd: _e(ee.trackedEntities, pe),
          dt: document.title,
          formData: d,
          formId: n,
          formName: e.formName
        };
        Fe(ee.urls.apiV2, o, {
          jsonRpc: !0,
          method: "saveFormData",
          onSuccess: function(n) {
            ge("saveFormData response: ", n), !0 === e.startCallback && !0 === r ? !0 === e.callbackDuringBusinessHours ? "undefined" !== js.old_data.is_working_time && !0 === js.old_data.is_working_time && Ls(u, e.callbackDuringBusinessHours, () => {
              !0 === e.needSendSubmitAndReloadPage && Us(e.trackFormManually, t, i)
            }) : Ls(u, e.callbackDuringBusinessHours, () => {
              !0 === e.needSendSubmitAndReloadPage && Us(e.trackFormManually, t, i)
            }) : !0 === e.needSendSubmitAndReloadPage && Us(e.trackFormManually, t, i), s.click()
          }
        })
      }
    };
  var Ys = s(function(t) {
    var e;
    e = function(t) {
      return function() {
        for (var e = [
            ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
            ["Albania (Shqipëri)", "al", "355"],
            ["Algeria (‫الجزائر‬‎)", "dz", "213"],
            ["American Samoa", "as", "1", 5, ["684"]],
            ["Andorra", "ad", "376"],
            ["Angola", "ao", "244"],
            ["Anguilla", "ai", "1", 6, ["264"]],
            ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
            ["Argentina", "ar", "54"],
            ["Armenia (Հայաստան)", "am", "374"],
            ["Aruba", "aw", "297"],
            ["Ascension Island", "ac", "247"],
            ["Australia", "au", "61", 0],
            ["Austria (Österreich)", "at", "43"],
            ["Azerbaijan (Azərbaycan)", "az", "994"],
            ["Bahamas", "bs", "1", 8, ["242"]],
            ["Bahrain (‫البحرين‬‎)", "bh", "973"],
            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
            ["Barbados", "bb", "1", 9, ["246"]],
            ["Belarus (Беларусь)", "by", "375"],
            ["Belgium (België)", "be", "32"],
            ["Belize", "bz", "501"],
            ["Benin (Bénin)", "bj", "229"],
            ["Bermuda", "bm", "1", 10, ["441"]],
            ["Bhutan (འབྲུག)", "bt", "975"],
            ["Bolivia", "bo", "591"],
            ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
            ["Botswana", "bw", "267"],
            ["Brazil (Brasil)", "br", "55"],
            ["British Indian Ocean Territory", "io", "246"],
            ["British Virgin Islands", "vg", "1", 11, ["284"]],
            ["Brunei", "bn", "673"],
            ["Bulgaria (България)", "bg", "359"],
            ["Burkina Faso", "bf", "226"],
            ["Burundi (Uburundi)", "bi", "257"],
            ["Cambodia (កម្ពុជា)", "kh", "855"],
            ["Cameroon (Cameroun)", "cm", "237"],
            ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
            ["Cape Verde (Kabu Verdi)", "cv", "238"],
            ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
            ["Cayman Islands", "ky", "1", 12, ["345"]],
            ["Central African Republic (République centrafricaine)", "cf", "236"],
            ["Chad (Tchad)", "td", "235"],
            ["Chile", "cl", "56"],
            ["China (中国)", "cn", "86"],
            ["Christmas Island", "cx", "61", 2, ["89164"]],
            ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
            ["Colombia", "co", "57"],
            ["Comoros (‫جزر القمر‬‎)", "km", "269"],
            ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
            ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
            ["Cook Islands", "ck", "682"],
            ["Costa Rica", "cr", "506"],
            ["Côte d’Ivoire", "ci", "225"],
            ["Croatia (Hrvatska)", "hr", "385"],
            ["Cuba", "cu", "53"],
            ["Curaçao", "cw", "599", 0],
            ["Cyprus (Κύπρος)", "cy", "357"],
            ["Czech Republic (Česká republika)", "cz", "420"],
            ["Denmark (Danmark)", "dk", "45"],
            ["Djibouti", "dj", "253"],
            ["Dominica", "dm", "1", 13, ["767"]],
            ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
            ["Ecuador", "ec", "593"],
            ["Egypt (‫مصر‬‎)", "eg", "20"],
            ["El Salvador", "sv", "503"],
            ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
            ["Eritrea", "er", "291"],
            ["Estonia (Eesti)", "ee", "372"],
            ["Eswatini", "sz", "268"],
            ["Ethiopia", "et", "251"],
            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
            ["Faroe Islands (Føroyar)", "fo", "298"],
            ["Fiji", "fj", "679"],
            ["Finland (Suomi)", "fi", "358", 0],
            ["France", "fr", "33"],
            ["French Guiana (Guyane française)", "gf", "594"],
            ["French Polynesia (Polynésie française)", "pf", "689"],
            ["Gabon", "ga", "241"],
            ["Gambia", "gm", "220"],
            ["Georgia (საქართველო)", "ge", "995"],
            ["Germany (Deutschland)", "de", "49"],
            ["Ghana (Gaana)", "gh", "233"],
            ["Gibraltar", "gi", "350"],
            ["Greece (Ελλάδα)", "gr", "30"],
            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
            ["Grenada", "gd", "1", 14, ["473"]],
            ["Guadeloupe", "gp", "590", 0],
            ["Guam", "gu", "1", 15, ["671"]],
            ["Guatemala", "gt", "502"],
            ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
            ["Guinea (Guinée)", "gn", "224"],
            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
            ["Guyana", "gy", "592"],
            ["Haiti", "ht", "509"],
            ["Honduras", "hn", "504"],
            ["Hong Kong (香港)", "hk", "852"],
            ["Hungary (Magyarország)", "hu", "36"],
            ["Iceland (Ísland)", "is", "354"],
            ["India (भारत)", "in", "91"],
            ["Indonesia", "id", "62"],
            ["Iran (‫ایران‬‎)", "ir", "98"],
            ["Iraq (‫العراق‬‎)", "iq", "964"],
            ["Ireland", "ie", "353"],
            ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
            ["Israel (‫ישראל‬‎)", "il", "972"],
            ["Italy (Italia)", "it", "39", 0],
            ["Jamaica", "jm", "1", 4, ["876", "658"]],
            ["Japan (日本)", "jp", "81"],
            ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
            ["Jordan (‫الأردن‬‎)", "jo", "962"],
            ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
            ["Kenya", "ke", "254"],
            ["Kiribati", "ki", "686"],
            ["Kosovo", "xk", "383"],
            ["Kuwait (‫الكويت‬‎)", "kw", "965"],
            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
            ["Laos (ລາວ)", "la", "856"],
            ["Latvia (Latvija)", "lv", "371"],
            ["Lebanon (‫لبنان‬‎)", "lb", "961"],
            ["Lesotho", "ls", "266"],
            ["Liberia", "lr", "231"],
            ["Libya (‫ليبيا‬‎)", "ly", "218"],
            ["Liechtenstein", "li", "423"],
            ["Lithuania (Lietuva)", "lt", "370"],
            ["Luxembourg", "lu", "352"],
            ["Macau (澳門)", "mo", "853"],
            ["Madagascar (Madagasikara)", "mg", "261"],
            ["Malawi", "mw", "265"],
            ["Malaysia", "my", "60"],
            ["Maldives", "mv", "960"],
            ["Mali", "ml", "223"],
            ["Malta", "mt", "356"],
            ["Marshall Islands", "mh", "692"],
            ["Martinique", "mq", "596"],
            ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
            ["Mauritius (Moris)", "mu", "230"],
            ["Mayotte", "yt", "262", 1, ["269", "639"]],
            ["Mexico (México)", "mx", "52"],
            ["Micronesia", "fm", "691"],
            ["Moldova (Republica Moldova)", "md", "373"],
            ["Monaco", "mc", "377"],
            ["Mongolia (Монгол)", "mn", "976"],
            ["Montenegro (Crna Gora)", "me", "382"],
            ["Montserrat", "ms", "1", 16, ["664"]],
            ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
            ["Mozambique (Moçambique)", "mz", "258"],
            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
            ["Namibia (Namibië)", "na", "264"],
            ["Nauru", "nr", "674"],
            ["Nepal (नेपाल)", "np", "977"],
            ["Netherlands (Nederland)", "nl", "31"],
            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
            ["New Zealand", "nz", "64"],
            ["Nicaragua", "ni", "505"],
            ["Niger (Nijar)", "ne", "227"],
            ["Nigeria", "ng", "234"],
            ["Niue", "nu", "683"],
            ["Norfolk Island", "nf", "672"],
            ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
            ["North Macedonia (Северна Македонија)", "mk", "389"],
            ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
            ["Norway (Norge)", "no", "47", 0],
            ["Oman (‫عُمان‬‎)", "om", "968"],
            ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
            ["Palau", "pw", "680"],
            ["Palestine (‫فلسطين‬‎)", "ps", "970"],
            ["Panama (Panamá)", "pa", "507"],
            ["Papua New Guinea", "pg", "675"],
            ["Paraguay", "py", "595"],
            ["Peru (Perú)", "pe", "51"],
            ["Philippines", "ph", "63"],
            ["Poland (Polska)", "pl", "48"],
            ["Portugal", "pt", "351"],
            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
            ["Qatar (‫قطر‬‎)", "qa", "974"],
            ["Réunion (La Réunion)", "re", "262", 0],
            ["Romania (România)", "ro", "40"],
            ["Russia (Россия)", "ru", "7", 0],
            ["Rwanda", "rw", "250"],
            ["Saint Barthélemy", "bl", "590", 1],
            ["Saint Helena", "sh", "290"],
            ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
            ["Saint Lucia", "lc", "1", 19, ["758"]],
            ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
            ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
            ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
            ["Samoa", "ws", "685"],
            ["San Marino", "sm", "378"],
            ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
            ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
            ["Senegal (Sénégal)", "sn", "221"],
            ["Serbia (Србија)", "rs", "381"],
            ["Seychelles", "sc", "248"],
            ["Sierra Leone", "sl", "232"],
            ["Singapore", "sg", "65"],
            ["Sint Maarten", "sx", "1", 21, ["721"]],
            ["Slovakia (Slovensko)", "sk", "421"],
            ["Slovenia (Slovenija)", "si", "386"],
            ["Solomon Islands", "sb", "677"],
            ["Somalia (Soomaaliya)", "so", "252"],
            ["South Africa", "za", "27"],
            ["South Korea (대한민국)", "kr", "82"],
            ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
            ["Spain (España)", "es", "34"],
            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
            ["Sudan (‫السودان‬‎)", "sd", "249"],
            ["Suriname", "sr", "597"],
            ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
            ["Sweden (Sverige)", "se", "46"],
            ["Switzerland (Schweiz)", "ch", "41"],
            ["Syria (‫سوريا‬‎)", "sy", "963"],
            ["Taiwan (台灣)", "tw", "886"],
            ["Tajikistan", "tj", "992"],
            ["Tanzania", "tz", "255"],
            ["Thailand (ไทย)", "th", "66"],
            ["Timor-Leste", "tl", "670"],
            ["Togo", "tg", "228"],
            ["Tokelau", "tk", "690"],
            ["Tonga", "to", "676"],
            ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
            ["Tunisia (‫تونس‬‎)", "tn", "216"],
            ["Turkey (Türkiye)", "tr", "90"],
            ["Turkmenistan", "tm", "993"],
            ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
            ["Tuvalu", "tv", "688"],
            ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
            ["Uganda", "ug", "256"],
            ["Ukraine (Україна)", "ua", "380"],
            ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
            ["United Kingdom", "gb", "44", 0],
            ["United States", "us", "1", 0],
            ["Uruguay", "uy", "598"],
            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
            ["Vanuatu", "vu", "678"],
            ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
            ["Venezuela", "ve", "58"],
            ["Vietnam (Việt Nam)", "vn", "84"],
            ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
            ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
            ["Yemen (‫اليمن‬‎)", "ye", "967"],
            ["Zambia", "zm", "260"],
            ["Zimbabwe", "zw", "263"],
            ["Åland Islands", "ax", "358", 1, ["18"]]
          ], n = 0; n < e.length; n++) {
          var i = e[n];
          e[n] = {
            name: i[0],
            iso2: i[1],
            dialCode: i[2],
            priority: i[3] || 0,
            areaCodes: i[4] || null
          }
        }

        function s(t, e, n) {
          return (e = a(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t
        }

        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, a(i.key), i)
          }
        }

        function a(e) {
          var n = function(e, n) {
            if ("object" != typeof e || null === e) return e;
            var i = e[Symbol.toPrimitive];
            if (i !== t) {
              var s = i.call(e, n || "default");
              if ("object" != typeof s) return s;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === n ? String : Number)(e)
          }(e, "string");
          return "symbol" == typeof n ? n : String(n)
        }
        var o = {
          getInstance: function(t) {
            var e = t.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[e]
          },
          instances: {},
          documentReady: function() {
            return "complete" === document.readyState
          }
        };
        "object" == typeof window && (window.intlTelInputGlobals = o);
        var c = 0,
          l = {
            allowDropdown: !0,
            autoInsertDialCode: !1,
            autoPlaceholder: "polite",
            customContainer: "",
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: "",
            initialCountry: "",
            localizedCountries: null,
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            showFlags: !0,
            utilsScript: ""
          },
          u = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          d = function(t, e) {
            for (var n = Object.keys(t), i = 0; i < n.length; i++) e(n[i], t[n[i]])
          },
          h = function(t) {
            d(window.intlTelInputGlobals.instances, function(e) {
              window.intlTelInputGlobals.instances[e][t]()
            })
          },
          p = function() {
            function n(t, e) {
              var i = this;
              ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, n), this.id = c++, this.telInput = t, this.activeItem = null, this.highlightedItem = null;
              var s = e || {};
              this.options = {}, d(l, function(t, e) {
                i.options[t] = s.hasOwnProperty(t) ? s[t] : e
              }), this.hadInitialPlaceholder = Boolean(t.getAttribute("placeholder"))
            }
            var i, a, o;
            return i = n, (a = [{
              key: "_init",
              value: function() {
                var t = this;
                this.options.nationalMode && (this.options.autoInsertDialCode = !1), this.options.separateDialCode && (this.options.autoInsertDialCode = !1);
                var e = this.options.allowDropdown && !this.options.separateDialCode;
                if (!this.options.showFlags && e && (this.options.showFlags = !0), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (document.body.classList.add("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = document.body)), "undefined" != typeof Promise) {
                  var n = new Promise(function(e, n) {
                      t.resolveAutoCountryPromise = e, t.rejectAutoCountryPromise = n
                    }),
                    i = new Promise(function(e, n) {
                      t.resolveUtilsScriptPromise = e, t.rejectUtilsScriptPromise = n
                    });
                  this.promise = Promise.all([n, i])
                } else this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {}, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests()
              }
            }, {
              key: "_processCountryData",
              value: function() {
                this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort)
              }
            }, {
              key: "_addCountryCode",
              value: function(e, n, i) {
                n.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = n.length), this.countryCodes.hasOwnProperty(n) || (this.countryCodes[n] = []);
                for (var s = 0; s < this.countryCodes[n].length; s++)
                  if (this.countryCodes[n][s] === e) return;
                var r = i !== t ? i : this.countryCodes[n].length;
                this.countryCodes[n][r] = e
              }
            }, {
              key: "_processAllCountries",
              value: function() {
                if (this.options.onlyCountries.length) {
                  var t = this.options.onlyCountries.map(function(t) {
                    return t.toLowerCase()
                  });
                  this.countries = e.filter(function(e) {
                    return t.indexOf(e.iso2) > -1
                  })
                } else if (this.options.excludeCountries.length) {
                  var n = this.options.excludeCountries.map(function(t) {
                    return t.toLowerCase()
                  });
                  this.countries = e.filter(function(t) {
                    return -1 === n.indexOf(t.iso2)
                  })
                } else this.countries = e
              }
            }, {
              key: "_translateCountriesByLocale",
              value: function() {
                for (var t = 0; t < this.countries.length; t++) {
                  var e = this.countries[t].iso2.toLowerCase();
                  this.options.localizedCountries.hasOwnProperty(e) && (this.countries[t].name = this.options.localizedCountries[e])
                }
              }
            }, {
              key: "_countryNameSort",
              value: function(t, e) {
                return t.name < e.name ? -1 : t.name > e.name ? 1 : 0
              }
            }, {
              key: "_processCountryCodes",
              value: function() {
                this.countryCodeMaxLen = 0, this.dialCodes = {}, this.countryCodes = {};
                for (var t = 0; t < this.countries.length; t++) {
                  var e = this.countries[t];
                  this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0), this._addCountryCode(e.iso2, e.dialCode, e.priority)
                }
                for (var n = 0; n < this.countries.length; n++) {
                  var i = this.countries[n];
                  if (i.areaCodes)
                    for (var s = this.countryCodes[i.dialCode][0], r = 0; r < i.areaCodes.length; r++) {
                      for (var a = i.areaCodes[r], o = 1; o < a.length; o++) {
                        var c = i.dialCode + a.substr(0, o);
                        this._addCountryCode(s, c), this._addCountryCode(i.iso2, c)
                      }
                      this._addCountryCode(i.iso2, i.dialCode + a)
                    }
                }
              }
            }, {
              key: "_processPreferredCountries",
              value: function() {
                this.preferredCountries = [];
                for (var t = 0; t < this.options.preferredCountries.length; t++) {
                  var e = this.options.preferredCountries[t].toLowerCase(),
                    n = this._getCountryData(e, !1, !0);
                  n && this.preferredCountries.push(n)
                }
              }
            }, {
              key: "_createEl",
              value: function(t, e, n) {
                var i = document.createElement(t);
                return e && d(e, function(t, e) {
                  return i.setAttribute(t, e)
                }), n && n.appendChild(i), i
              }
            }, {
              key: "_generateMarkup",
              value: function() {
                this.telInput.hasAttribute("autocomplete") || this.telInput.form && this.telInput.form.hasAttribute("autocomplete") || this.telInput.setAttribute("autocomplete", "off");
                var t = this.options,
                  e = t.allowDropdown,
                  n = t.separateDialCode,
                  i = t.showFlags,
                  r = t.customContainer,
                  a = t.hiddenInput,
                  o = t.dropdownContainer,
                  c = "iti";
                e && (c += " iti--allow-dropdown"), n && (c += " iti--separate-dial-code"), i && (c += " iti--show-flags"), r && (c += " ".concat(r));
                var l = this._createEl("div", {
                  class: c
                });
                this.telInput.parentNode.insertBefore(l, this.telInput);
                var u = e || i || n;
                if (u && (this.flagsContainer = this._createEl("div", {
                    class: "iti__flag-container"
                  }, l)), l.appendChild(this.telInput), u && (this.selectedFlag = this._createEl("div", function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? Object(arguments[e]) : {},
                        i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                      })), i.forEach(function(e) {
                        s(t, e, n[e])
                      })
                    }
                    return t
                  }({
                    class: "iti__selected-flag"
                  }, e && {
                    role: "combobox",
                    "aria-haspopup": "listbox",
                    "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                    "aria-expanded": "false",
                    "aria-label": "Telephone country code"
                  }), this.flagsContainer)), i && (this.selectedFlagInner = this._createEl("div", {
                    class: "iti__flag"
                  }, this.selectedFlag)), this.selectedFlag && this.telInput.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), n && (this.selectedDialCode = this._createEl("div", {
                    class: "iti__selected-dial-code"
                  }, this.selectedFlag)), e && (this.telInput.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
                    class: "iti__arrow"
                  }, this.selectedFlag), this.countryList = this._createEl("ul", {
                    class: "iti__country-list iti__hide",
                    id: "iti-".concat(this.id, "__country-listbox"),
                    role: "listbox",
                    "aria-label": "List of countries"
                  }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
                    class: "iti__divider",
                    role: "separator",
                    "aria-disabled": "true"
                  }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), o ? (this.dropdown = this._createEl("div", {
                    class: "iti iti--container"
                  }), this.dropdown.appendChild(this.countryList)) : this.flagsContainer.appendChild(this.countryList)), a) {
                  var d = a,
                    h = this.telInput.getAttribute("name");
                  if (h) {
                    var p = h.lastIndexOf("["); - 1 !== p && (d = "".concat(h.substr(0, p), "[").concat(d, "]"))
                  }
                  this.hiddenInput = this._createEl("input", {
                    type: "hidden",
                    name: d
                  }), l.appendChild(this.hiddenInput)
                }
              }
            }, {
              key: "_appendListItems",
              value: function(t, e, n) {
                for (var i = "", s = 0; s < t.length; s++) {
                  var r = t[s],
                    a = n ? "-preferred" : "";
                  i += "<li class='iti__country ".concat(e, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(r.iso2).concat(a, "' role='option' data-dial-code='").concat(r.dialCode, "' data-country-code='").concat(r.iso2, "' aria-selected='false'>"), this.options.showFlags && (i += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(r.iso2, "'></div></div>")), i += "<span class='iti__country-name'>".concat(r.name, "</span>"), i += "<span class='iti__dial-code'>+".concat(r.dialCode, "</span>"), i += "</li>"
                }
                this.countryList.insertAdjacentHTML("beforeend", i)
              }
            }, {
              key: "_setInitialState",
              value: function() {
                var t = this.telInput.getAttribute("value"),
                  e = this.telInput.value,
                  n = t && "+" === t.charAt(0) && (!e || "+" !== e.charAt(0)) ? t : e,
                  i = this._getDialCode(n),
                  s = this._isRegionlessNanp(n),
                  r = this.options,
                  a = r.initialCountry,
                  o = r.autoInsertDialCode;
                i && !s ? this._updateFlagFromNumber(n) : "auto" !== a && (a ? this._setFlag(a.toLowerCase()) : i && s ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, n || this._setFlag(this.defaultCountry)), !n && o && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode))), n && this._updateValFromNumber(n)
              }
            }, {
              key: "_initListeners",
              value: function() {
                this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener()
              }
            }, {
              key: "_initHiddenInputListener",
              value: function() {
                var t = this;
                this._handleHiddenInputSubmit = function() {
                  t.hiddenInput.value = t.getNumber()
                }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit)
              }
            }, {
              key: "_getClosestLabel",
              value: function() {
                for (var t = this.telInput; t && "LABEL" !== t.tagName;) t = t.parentNode;
                return t
              }
            }, {
              key: "_initDropdownListeners",
              value: function() {
                var t = this;
                this._handleLabelClick = function(e) {
                  t.countryList.classList.contains("iti__hide") ? t.telInput.focus() : e.preventDefault()
                };
                var e = this._getClosestLabel();
                e && e.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {
                  !t.countryList.classList.contains("iti__hide") || t.telInput.disabled || t.telInput.readOnly || t._showDropdown()
                }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(e) {
                  t.countryList.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(e.key) && (e.preventDefault(), e.stopPropagation(), t._showDropdown()), "Tab" === e.key && t._closeDropdown()
                }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown)
              }
            }, {
              key: "_initRequests",
              value: function() {
                var t = this;
                this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
                  window.intlTelInputGlobals.loadUtils(t.options.utilsScript)
                }) : this.resolveUtilsScriptPromise(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
              }
            }, {
              key: "_loadAutoCountry",
              value: function() {
                window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(t) {
                  window.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout(function() {
                    return h("handleAutoCountry")
                  })
                }, function() {
                  return h("rejectAutoCountryPromise")
                }))
              }
            }, {
              key: "_initKeyListeners",
              value: function() {
                var t = this;
                this._handleKeyupEvent = function() {
                  t._updateFlagFromNumber(t.telInput.value) && t._triggerCountryChange()
                }, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function() {
                  setTimeout(t._handleKeyupEvent)
                }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent)
              }
            }, {
              key: "_cap",
              value: function(t) {
                var e = this.telInput.getAttribute("maxlength");
                return e && t.length > e ? t.substr(0, e) : t
              }
            }, {
              key: "_initBlurListeners",
              value: function() {
                var t = this;
                this._handleSubmitOrBlurEvent = function() {
                  t._removeEmptyDialCode()
                }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent)
              }
            }, {
              key: "_removeEmptyDialCode",
              value: function() {
                if ("+" === this.telInput.value.charAt(0)) {
                  var t = this._getNumeric(this.telInput.value);
                  t && this.selectedCountryData.dialCode !== t || (this.telInput.value = "")
                }
              }
            }, {
              key: "_getNumeric",
              value: function(t) {
                return t.replace(/\D/g, "")
              }
            }, {
              key: "_trigger",
              value: function(t) {
                var e = document.createEvent("Event");
                e.initEvent(t, !0, !0), this.telInput.dispatchEvent(e)
              }
            }, {
              key: "_showDropdown",
              value: function() {
                this.countryList.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown")
              }
            }, {
              key: "_toggleClass",
              value: function(t, e, n) {
                n && !t.classList.contains(e) ? t.classList.add(e) : !n && t.classList.contains(e) && t.classList.remove(e)
              }
            }, {
              key: "_setDropdownPosition",
              value: function() {
                var t = this;
                if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.isMobile) {
                  var e = this.telInput.getBoundingClientRect(),
                    n = window.pageYOffset || document.documentElement.scrollTop,
                    i = e.top + n,
                    s = this.countryList.offsetHeight,
                    r = i + this.telInput.offsetHeight + s < n + window.innerHeight,
                    a = i - s > n;
                  if (this._toggleClass(this.countryList, "iti__country-list--dropup", !r && a), this.options.dropdownContainer) {
                    var o = !r && a ? 0 : this.telInput.offsetHeight;
                    this.dropdown.style.top = "".concat(i + o, "px"), this.dropdown.style.left = "".concat(e.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function() {
                      return t._closeDropdown()
                    }, window.addEventListener("scroll", this._handleWindowScroll)
                  }
                }
              }
            }, {
              key: "_getClosestListItem",
              value: function(t) {
                for (var e = t; e && e !== this.countryList && !e.classList.contains("iti__country");) e = e.parentNode;
                return e === this.countryList ? null : e
              }
            }, {
              key: "_bindDropdownListeners",
              value: function() {
                var t = this;
                this._handleMouseoverCountryList = function(e) {
                  var n = t._getClosestListItem(e.target);
                  n && t._highlightListItem(n, !1)
                }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function(e) {
                  var n = t._getClosestListItem(e.target);
                  n && t._selectListItem(n)
                }, this.countryList.addEventListener("click", this._handleClickCountryList);
                var e = !0;
                this._handleClickOffToClose = function() {
                  e || t._closeDropdown(), e = !1
                }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
                var n = "",
                  i = null;
                this._handleKeydownOnDropdown = function(e) {
                  e.preventDefault(), "ArrowUp" === e.key || "Up" === e.key || "ArrowDown" === e.key || "Down" === e.key ? t._handleUpDownKey(e.key) : "Enter" === e.key ? t._handleEnterKey() : "Escape" === e.key ? t._closeDropdown() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key) && (i && clearTimeout(i), n += e.key.toLowerCase(), t._searchForCountry(n), i = setTimeout(function() {
                    n = ""
                  }, 1e3))
                }, document.addEventListener("keydown", this._handleKeydownOnDropdown)
              }
            }, {
              key: "_handleUpDownKey",
              value: function(t) {
                var e = "ArrowUp" === t || "Up" === t ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                e && (e.classList.contains("iti__divider") && (e = "ArrowUp" === t || "Up" === t ? e.previousElementSibling : e.nextElementSibling), this._highlightListItem(e, !0))
              }
            }, {
              key: "_handleEnterKey",
              value: function() {
                this.highlightedItem && this._selectListItem(this.highlightedItem)
              }
            }, {
              key: "_searchForCountry",
              value: function(t) {
                for (var e = 0; e < this.countries.length; e++)
                  if (this._startsWith(this.countries[e].name, t)) {
                    var n = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[e].iso2));
                    this._highlightListItem(n, !1), this._scrollTo(n, !0);
                    break
                  }
              }
            }, {
              key: "_startsWith",
              value: function(t, e) {
                return t.substr(0, e.length).toLowerCase() === e
              }
            }, {
              key: "_updateValFromNumber",
              value: function(t) {
                var e = t;
                if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                  var n = this.options.nationalMode || "+" !== e.charAt(0) && !this.options.separateDialCode,
                    i = intlTelInputUtils.numberFormat,
                    s = i.NATIONAL,
                    r = i.INTERNATIONAL,
                    a = n ? s : r;
                  e = intlTelInputUtils.formatNumber(e, this.selectedCountryData.iso2, a)
                }
                e = this._beforeSetNumber(e), this.telInput.value = e
              }
            }, {
              key: "_updateFlagFromNumber",
              value: function(t) {
                var e = t,
                  n = this.selectedCountryData.dialCode;
                e && "1" === n && "+" !== e.charAt(0) && ("1" !== e.charAt(0) && (e = "1".concat(e)), e = "+".concat(e)), this.options.separateDialCode && n && "+" !== e.charAt(0) && (e = "+".concat(n).concat(e));
                var i = this._getDialCode(e, !0),
                  s = this._getNumeric(e),
                  r = null;
                if (i) {
                  var a = this.countryCodes[this._getNumeric(i)],
                    o = -1 !== a.indexOf(this.selectedCountryData.iso2) && s.length <= i.length - 1;
                  if (!("1" === n && this._isRegionlessNanp(s)) && !o)
                    for (var c = 0; c < a.length; c++)
                      if (a[c]) {
                        r = a[c];
                        break
                      }
                } else "+" === e.charAt(0) && s.length ? r = "" : e && "+" !== e || (r = this.defaultCountry);
                return null !== r && this._setFlag(r)
              }
            }, {
              key: "_isRegionlessNanp",
              value: function(t) {
                var e = this._getNumeric(t);
                if ("1" === e.charAt(0)) {
                  var n = e.substr(1, 3);
                  return -1 !== u.indexOf(n)
                }
                return !1
              }
            }, {
              key: "_highlightListItem",
              value: function(t, e) {
                var n = this.highlightedItem;
                n && n.classList.remove("iti__highlight"), this.highlightedItem = t, this.highlightedItem.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", t.getAttribute("id")), e && this.highlightedItem.focus()
              }
            }, {
              key: "_getCountryData",
              value: function(t, n, i) {
                for (var s = n ? e : this.countries, r = 0; r < s.length; r++)
                  if (s[r].iso2 === t) return s[r];
                if (i) return null;
                throw new Error("No country data for '".concat(t, "'"))
              }
            }, {
              key: "_setFlag",
              value: function(t) {
                var e = this.options,
                  n = e.allowDropdown,
                  i = e.separateDialCode,
                  s = e.showFlags,
                  r = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                if (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), s && this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(t)), this._setSelectedCountryFlagTitleAttribute(t, i), i) {
                  var a = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                  this.selectedDialCode.innerHTML = a;
                  var o = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                  this.telInput.style.paddingLeft = "".concat(o + 6, "px")
                }
                if (this._updatePlaceholder(), n) {
                  var c = this.activeItem;
                  if (c && (c.classList.remove("iti__active"), c.setAttribute("aria-selected", "false")), t) {
                    var l = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t));
                    l.setAttribute("aria-selected", "true"), l.classList.add("iti__active"), this.activeItem = l
                  }
                }
                return r.iso2 !== t
              }
            }, {
              key: "_setSelectedCountryFlagTitleAttribute",
              value: function(t, e) {
                var n;
                this.selectedFlag && (n = t && !e ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : t ? this.selectedCountryData.name : "Unknown", this.selectedFlag.setAttribute("title", n))
              }
            }, {
              key: "_getHiddenSelectedFlagWidth",
              value: function() {
                var t = this.telInput.parentNode.cloneNode();
                t.style.visibility = "hidden", document.body.appendChild(t);
                var e = this.flagsContainer.cloneNode();
                t.appendChild(e);
                var n = this.selectedFlag.cloneNode(!0);
                e.appendChild(n);
                var i = n.offsetWidth;
                return t.parentNode.removeChild(t), i
              }
            }, {
              key: "_updatePlaceholder",
              value: function() {
                var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && "polite" === this.options.autoPlaceholder;
                if (window.intlTelInputUtils && t) {
                  var e = intlTelInputUtils.numberType[this.options.placeholderNumberType],
                    n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, e) : "";
                  n = this._beforeSetNumber(n), "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.setAttribute("placeholder", n)
                }
              }
            }, {
              key: "_selectListItem",
              value: function(t) {
                var e = this._setFlag(t.getAttribute("data-country-code"));
                this._closeDropdown(), this._updateDialCode(t.getAttribute("data-dial-code")), this.telInput.focus();
                var n = this.telInput.value.length;
                this.telInput.setSelectionRange(n, n), e && this._triggerCountryChange()
              }
            }, {
              key: "_closeDropdown",
              value: function() {
                this.countryList.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.isMobile || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown")
              }
            }, {
              key: "_scrollTo",
              value: function(t, e) {
                var n = this.countryList,
                  i = window.pageYOffset || document.documentElement.scrollTop,
                  s = n.offsetHeight,
                  r = n.getBoundingClientRect().top + i,
                  a = r + s,
                  o = t.offsetHeight,
                  c = t.getBoundingClientRect().top + i,
                  l = c + o,
                  u = c - r + n.scrollTop,
                  d = s / 2 - o / 2;
                if (c < r) e && (u -= d), n.scrollTop = u;
                else if (l > a) {
                  e && (u += d);
                  var h = s - o;
                  n.scrollTop = u - h
                }
              }
            }, {
              key: "_updateDialCode",
              value: function(t) {
                var e, n = this.telInput.value,
                  i = "+".concat(t);
                if ("+" === n.charAt(0)) {
                  var s = this._getDialCode(n);
                  e = s ? n.replace(s, i) : i, this.telInput.value = e
                } else this.options.autoInsertDialCode && (e = n ? i + n : i, this.telInput.value = e)
              }
            }, {
              key: "_getDialCode",
              value: function(t, e) {
                var n = "";
                if ("+" === t.charAt(0))
                  for (var i = "", s = 0; s < t.length; s++) {
                    var r = t.charAt(s);
                    if (!isNaN(parseInt(r, 10))) {
                      if (i += r, e) this.countryCodes[i] && (n = t.substr(0, s + 1));
                      else if (this.dialCodes[i]) {
                        n = t.substr(0, s + 1);
                        break
                      }
                      if (i.length === this.countryCodeMaxLen) break
                    }
                  }
                return n
              }
            }, {
              key: "_getFullNumber",
              value: function() {
                var t = this.telInput.value.trim(),
                  e = this.selectedCountryData.dialCode,
                  n = this._getNumeric(t);
                return (this.options.separateDialCode && "+" !== t.charAt(0) && e && n ? "+".concat(e) : "") + t
              }
            }, {
              key: "_beforeSetNumber",
              value: function(t) {
                var e = t;
                if (this.options.separateDialCode) {
                  var n = this._getDialCode(e);
                  if (n) {
                    var i = " " === e[(n = "+".concat(this.selectedCountryData.dialCode)).length] || "-" === e[n.length] ? n.length + 1 : n.length;
                    e = e.substr(i)
                  }
                }
                return this._cap(e)
              }
            }, {
              key: "_triggerCountryChange",
              value: function() {
                this._trigger("countrychange")
              }
            }, {
              key: "handleAutoCountry",
              value: function() {
                "auto" === this.options.initialCountry && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
              }
            }, {
              key: "handleUtils",
              value: function() {
                window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise()
              }
            }, {
              key: "destroy",
              value: function() {
                var t = this.telInput.form;
                if (this.options.allowDropdown) {
                  this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                  var e = this._getClosestLabel();
                  e && e.removeEventListener("click", this._handleLabelClick)
                }
                this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoInsertDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
                var n = this.telInput.parentNode;
                n.parentNode.insertBefore(this.telInput, n), n.parentNode.removeChild(n), delete window.intlTelInputGlobals.instances[this.id]
              }
            }, {
              key: "getExtension",
              value: function() {
                return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
              }
            }, {
              key: "getNumber",
              value: function(t) {
                if (window.intlTelInputUtils) {
                  var e = this.selectedCountryData.iso2;
                  return intlTelInputUtils.formatNumber(this._getFullNumber(), e, t)
                }
                return ""
              }
            }, {
              key: "getNumberType",
              value: function() {
                return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
              }
            }, {
              key: "getSelectedCountryData",
              value: function() {
                return this.selectedCountryData
              }
            }, {
              key: "getValidationError",
              value: function() {
                if (window.intlTelInputUtils) {
                  var t = this.selectedCountryData.iso2;
                  return intlTelInputUtils.getValidationError(this._getFullNumber(), t)
                }
                return -99
              }
            }, {
              key: "isValidNumber",
              value: function() {
                var t = this._getFullNumber().trim();
                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, this.selectedCountryData.iso2) : null
              }
            }, {
              key: "setCountry",
              value: function(t) {
                var e = t.toLowerCase();
                this.selectedCountryData.iso2 !== e && (this._setFlag(e), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange())
              }
            }, {
              key: "setNumber",
              value: function(t) {
                var e = this._updateFlagFromNumber(t);
                this._updateValFromNumber(t), e && this._triggerCountryChange()
              }
            }, {
              key: "setPlaceholderNumberType",
              value: function(t) {
                this.options.placeholderNumberType = t, this._updatePlaceholder()
              }
            }]) && r(i.prototype, a), o && r(i, o), Object.defineProperty(i, "prototype", {
              writable: !1
            }), n
          }();
        o.getCountryData = function() {
          return e
        };
        var f = function(t, e, n) {
          var i = document.createElement("script");
          i.onload = function() {
            h("handleUtils"), e && e()
          }, i.onerror = function() {
            h("rejectUtilsScriptPromise"), n && n()
          }, i.className = "iti-load-utils", i.async = !0, i.src = t, document.body.appendChild(i)
        };
        return o.loadUtils = function(t) {
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
              if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function(e, n) {
                return f(t, e, n)
              });
              f(t)
            }
            return null
          }, o.defaults = l, o.version = "18.1.6",
          function(t, e) {
            var n = new p(t, e);
            return n._init(), t.setAttribute("data-intl-tel-input-id", n.id), window.intlTelInputGlobals.instances[n.id] = n, n
          }
      }()
    }, t.exports ? t.exports = e() : window.intlTelInput = e()
  });
  const Ps = (t, e, n, i) => {
      ge("intlTelInputInit formId, j, fieldElement, input ", t, e, n, i), Rs[t][e] = Ys(i, {
        defaultCountry: "auto",
        initialCountry: "auto",
        placeholder: "agressive",
        nationalMode: !0,
        autoHideDialCode: !0,
        formatOnDisplay: !1,
        preferredCountries: ["ua"],
        dropdownContainer: document.body,
        geoIpLookup: function(t) {
          ! function(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const i = Ue(t, e, n),
              s = new("onload" in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest);
            s.open(i.method, i.url, !0), s.setRequestHeader("Content-Type", i.type), s.onerror = n.onError || Ge, s.onload = function() {
              n.onSuccess && n.onSuccess(this)
            }, s.send(i.query)
          }("https://geo.ringostat.com/ipinfo", "", {
            forceGet: !0,
            jsonRpc: !1,
            onSuccess: function(e) {
              const n = JSON.parse(e.response);
              var i = n && n.country ? n.country : "";
              ge("geoIpLookup: ", n, i), t(i)
            }
          })
        },
        customPlaceholder: function(t, e) {
          let i = "";
          return void 0 !== n && (i = n.getAttribute("placeholder")), i
        }
      }), i.addEventListener("open:countrydropdown", () => {
        if (document.querySelector(".iti__country[data-country-code='ru'] .iti__country-name")) {
          const t = document.querySelector(".iti__country[data-country-code='ru'] .iti__country-name");
          t.textContent = t.textContent.replace("Russia (Россия)", "russia terrorist state (россия страна-террорист)")
        }
      })
    },
    Gs = {
      old_data: js.old_data,
      language: js.language,
      formType: js.formType,
      form: js.form,
      button: js.button,
      icon: js.icon,
      overlay: js.overlay,
      formStatus: js.formStatus,
      buttonStatus: js.buttonStatus,
      iframeDocument: js.iframeDocument,
      tooltipText: js.tooltipText,
      recaptcha_token: js.recaptcha_token,
      user_has_recaptcha: js.user_has_recaptcha
    },
    Fs = (t, e) => {
      let n = Je({
        xPath: t.submitFormXpath.xpath
      });
      const i = js.old_data.inactive_project;
      let s = n.length;
      for (; s--;) {
        const r = n[s].closest("form");
        if (!1 === t.trackFormManually) {
          let i = n[s];
          if (!1 === i.hasAttribute("ringostat-origin-btn-copied")) {
            let r = i.cloneNode(!0);
            r.addEventListener("click", n => {
              n.preventDefault(), ge("newElement click", n), Bs(n, t, e, n.target, i)
            }, !1), r.setAttribute("data-ringostat-form-id", e), r.setAttribute("data-ringostat-index", s), r.setAttribute("ringostat-form-element", "true"), r.setAttribute("ringostat-origin-btn-copied", "true"), i.parentElement.appendChild(r), i.style = "display:none!important", i.setAttribute("ringostat-origin-btn-copied", "true"), i.parentNode.replaceChild(n[s], i)
          }
        }
        let a = t.fields.length;
        for (; a--;) {
          const n = Je({
              xPath: t.fields[a].fieldXpath.xpath
            }, r),
            s = !0 === t.fields[a].useIntlTelInput && "tel" === t.fields[a].type && !1 === i || !0 === t.fields[a].useIntlTelInput && "phone" === t.fields[a].type && !1 === i;
          let o = n.length;
          for (; o--;) {
            if (!0 === t.fields[a].required && void 0 !== n[o] && !1 === i && n[o].setAttribute("required", !0), !0 === s && void 0 === Rs[e] && (Rs[e] = {}), !0 === s) {
              const i = Je({
                xPath: t.fields[a].fieldXpath.xpath
              });
              for (let t = 0; t <= i.length; t++) {
                const s = i[t],
                  r = oe();
                void 0 !== s && !1 === s.hasAttribute("ringostat-form-element") && (s.setAttribute("ringostat-form-element", "true"), s.setAttribute("ringostat-input-id", r), Ps(e, r, n[o], s))
              }
            }
            void 0 !== n[o] && !1 === n[o].hasAttribute("ringostat-form-element") && n[o].setAttribute("ringostat-form-element", "true")
          }
        }
      }
    },
    Qs = {
      forms: {},
      isDynamic: !1,
      callback: null
    };
  let $s = dn(ee.xpaths);
  const Hs = function() {
      let t;
      return {
        getInstance: e => (t || (t = function(t) {
          let e = null,
            n = null;
          const i = {
              attributes: !0,
              childList: !0,
              subtree: !0
            },
            s = new MutationObserver(function(s) {
              const r = this;
              r.disconnect(), clearTimeout(e), clearTimeout(n), e = setTimeout(() => {
                if (void 0 !== Qs)
                  for (let t in Qs.forms) Fs(ee.userFormsSettings.forms[t], t, Qs.callback, !0);
                ee.isAdvanced ? hn(t, $s, "observeDOM") : rn(t, "observeDOM"), ge("MutationObserver complete after 100 ms")
              }, 100), n = setTimeout(() => {
                if (void 0 !== Qs)
                  for (let t in Qs.forms) Fs(ee.userFormsSettings.forms[t], t, Qs.callback, !0);
                ee.isAdvanced ? hn(t, $s, "observeDOM") : rn(t, "observeDOM"), r.observe(document.body, i), ge("MutationObserver complete after 2500 ms")
              }, 2500)
            });
          return s.observe(document.body, i), {
            disconnect() {
              s.disconnect()
            }
          }
        }(e)), t)
      }
    }(),
    qs = t => {
      if (ee.observeDOM && Hs.getInstance(t), 0 !== ee.substitutionStatus) {
        if (!1 !== ee.substitutionEnabled) return ue(ee.cookies.rngst1, !1) ? (Ye.numbersData = ue(ee.cookies.rngst1, !0), de(ee.cookies.rngst1, ee.sessionLength, ee.cookieDomain), void(ee.isAdvanced && Ye.numbersData && Ye.numbersData.numbers ? hn(t, $s) : rn(t))) : void(t => {
          const e = ye({
            clientId: Ye.clientId,
            cookie: ue(ee.cookies.rngst2, !1),
            firstRequest: Ye.firstRequest,
            forceNumber: !1,
            geoLocation: Ye.geoLocation,
            pageViewId: Ye.pageViewId,
            projectHash: ee.ringostatProjectHash,
            sl: Ye.sl
          });
          Ye.firstRequest = !1, Fe(ee.urls.changedNumber, e, {
            onError: t => {
              ge(t), ee.changedNumberCallback({
                cnr: !1
              })
            },
            onSuccess: t
          })
        })(e => {
          let {
            responseText: n,
            status: i,
            statusText: s
          } = e;
          const r = JSON.parse(n);
          if (r && "inactiveProject" === r.msg && console.log("Ringostat: Inactive project"), Ye.numbersData = r && r.numbers ? r.numbers : null, null !== Ye.numbersData && void 0 !== Ye.numbersData.callMe && Ye.numbersData.callMe.length > 0) {
            let t = null,
              e = [];
            for (let n in r.numbers)
              if (cn(n)) {
                for (let i = 0; i < r.numbers[n].length; i++)
                  if ("1" === ee.xpaths[r.numbers[n][i]].callMeAll) {
                    t = dn(ee.xpaths);
                    for (let n in t) e.push(parseInt(t[n].xpathId, 10))
                  } Ye.numbersData[n] = pn(Ye.numbersData[n], e), Ye.numbersData.callMe = fn(Ye.numbersData[n], Ye.numbersData.callMe)
              }
          }
          const a = Ye.numbersData,
            o = {
              utmz: r && r.utmz ? r.utmz : null
            };
          r && r.sl && (o.sl = r.sl, Ye.sl = r.sl), ce(ee.cookies.rngst1, a, ee.sessionLength, ee.cookieDomain), ue(ee.cookies.rngst2, !1) && !Ye.sl || ce(ee.cookies.rngst2, o, 31536e3, ee.cookieDomain), ge(`getChangedNumber Success : ${i} - ${s}`), ee.isAdvanced && Ye.numbersData && Ye.numbersData.numbers ? hn(t, $s) : rn(t), ee.observeDOM && Hs.getInstance(t)
        });
        console.log("Ringostat: Substitution is disabled by initChangeNumber() on changeNumbers()")
      } else console.log("Ringostat: Insertion status is OFF")
    },
    Vs = function() {};
  Vs.prototype.notify = function() {
    console.error("Observer.notify() must be implemented")
  };
  const Ws = function() {};
  (Ws.prototype = Object.create(Vs.prototype)).constructor = Ws, Ws.prototype.notify = function(t) {
    let e = !1;
    if (t)
      for (const n in t)
        if (t.hasOwnProperty(n) && cn(n)) {
          e = !0;
          break
        } ee.changedNumberCallback({
      cnr: e
    })
  };
  const Zs = function() {
    const t = [];
    return {
      subscribeObserver(e, n) {
        t[e] || (t[e] = []), t[e].push(n)
      },
      unsubscribeObserver(e, n) {
        if (!t[e]) return;
        const i = t[e].indexOf(n);
        i > -1 && t[e].splice(i, 1)
      },
      notifyAllObservers(e, n) {
        if (t[e])
          for (let i = 0; i < t[e].length; i += 1) t[e][i].notify(n)
      }
    }
  };
  var Js = "[object Number]";
  var Ks = function(t) {
    return "number" == typeof t || b(t) && v(t) == Js
  };
  var Xs = function(t) {
    return Ks(t) && t != +t
  };
  var tr = function(t, e) {
    for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
    return t
  };
  var er = function(t) {
    return "function" == typeof t ? t : cs
  };
  var nr = function(t, e) {
    return (n(t) ? tr : vs)(t, er(e))
  };
  var ir = function(t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
  };
  var sr = function(t, e, n) {
    return t = Rt(t), n = null == n ? 0 : ir(gs(n), 0, t.length), e = Lt(e), t.slice(n, n + e.length) == e
  };
  var rr = function(t) {
    return t && t.length ? t[0] : void 0
  };
  var ar = function(t) {
    return null === t
  };
  const or = (t, e) => {
      ((t, e) => {
        let n = ye({
          clientId: Ye.clientId,
          cookie: ue(ee.cookies.rngst2, !1),
          firstRequest: Ye.firstRequest,
          forceNumber: null,
          geoLocation: Ye.geoLocation,
          pageViewId: Ye.pageViewId,
          projectHash: ee.ringostatProjectHash,
          adId: Ye.adId,
          xPathId: t,
          sl: Ye.sl
        });
        Ye.firstRequest = !1, Ye.customAdNumber && (n += `&r_can=${Ye.customAdNumber}`), Fe(ee.urls.changedNumber, n, {
          onSuccess: e
        })
      })(t, n => {
        let {
          status: i,
          readyState: s,
          responseText: r
        } = n;
        if (200 === i || 4 === s) try {
          const n = JSON.parse(r);
          n && "inactiveProject" === n.msg && console.log("Ringostat: Inactive project"), Ye.numbersData = n && n.numbers ? n.numbers : null;
          const i = {
            utmz: n && n.utmz ? n.utmz : null
          };
          if (n && n.sl && (i.sl = n.sl, Ye.sl = n.sl), ue(ee.cookies.rngst2, !1) && !Ye.sl || ce(ee.cookies.rngst2, i, 31536e3, ee.cookieDomain), ar(Ye.numbersData)) return ge("Numbers not found");
          let s = rr(Object.keys(Ye.numbersData));
          s = sr(s, "+") ? s : "+" + s, e(We(ee.xpaths[t].mask.replace("<t>", s), s), s)
        } catch (t) {}
      })
    },
    cr = function() {
      let t;
      return {
        getInstance: e => (t || (t = function(t) {
          const e = new MutationObserver((e, n) => {
            nr(e, e => {
              "childList" === e.type && (null !== e.target.getAttribute("rngstbtn") && !1 !== e.target.getAttribute("rngstbtn") || lr(t, "observeDOM"))
            })
          });
          return e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
          }), {
            disconnect() {
              e.disconnect()
            }
          }
        }(e)), t)
      }
    }(),
    lr = (t, e) => {
      "observeDOM" !== e && t.notifyAllObservers("xpath.beforeSetWithoutObserve", "beforeSetWithoutObserve"), ee.xpaths.forEach((t, e) => (function(t, e, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          r = t.length;
        for (; r--;) ! function(a) {
          let o = t[r],
            c = null,
            l = o;
          if ("true" !== l.getAttribute("rngstbtn"))
            if (!0 === s) {
              l.innerHTML = e;
              let t = l.firstChild;
              t.setAttribute("rngstbtn", "true"), o.parentNode.replaceChild(t, o), (c = t).addEventListener("click", function(e) {
                i(n, function(e, n) {
                  const i = -1 !== n.indexOf("+380800") ? n.replace("+380", "0") : -1 !== n.indexOf("380800") ? n.replace("380", "0") : `+${n}`;
                  t.innerHTML = e, t.parentNode.replaceChild(t.firstChild, t), "A" === t.nodeName && t.setAttribute("href", "tel:" + i), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + i)
                })
              })
            } else(l = o).innerHTML = e, l.setAttribute("rngstbtn", "true"), o.parentNode.replaceChild(l, o), (c = l.firstChild).addEventListener("click", function(t) {
              i(n, function(t, e) {
                const n = -1 !== e.indexOf("+380800") ? e.replace("+380", "0") : -1 !== e.indexOf("380800") ? e.replace("380", "0") : `+${e}`;
                l.innerHTML = t, "A" === l.nodeName && l.setAttribute("href", "tel:" + n), /iphone|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()) && (location.href = "tel:" + n)
              })
            })
        }()
      })(Je(t), t.callMeHTML, e, or, ee.userSettings.replaceXpaths))
    },
    ur = function() {};
  (ur.prototype = Object.create(Vs.prototype)).constructor = ur, ur.prototype.notify = function(t) {
    console.log(t)
  };
  var dr, hr = Object.freeze({
    basic: () => {
      const t = (() => {
          const t = new Zs;
          return t.subscribeObserver("numbers.beforeSetWithoutObserve", new Ws), t
        })(),
        e = () => {
          if (Date.now() - Ye.lastInteractionTime < ee.pingInterval) {
            qe();
            const t = JSON.parse(localStorage.getItem("rngst_online_chat_action"));
            null !== t && t.value.achieve > 0 && (t.value.achieve = t.value.achieve - 10, localStorage.setItem("rngst_online_chat_action", JSON.stringify(t))), ee.substitutionEnabled && de(ee.cookies.rngst1, ee.sessionLength, ee.cookieDomain)
          }
        };
      sn(() => {
        if (Ye.lastInteractionTime = Date.now(), Ve(document, ee.interactionEvents, () => {
            const e = Date.now();
            e - Ye.lastInteractionTime > ee.sessionLengthMS && qs(t), Ye.lastInteractionTime = e
          }), setInterval(e, ee.pingInterval), ee.crossDomainTracking && Ke("_ga") && (ge(`Found GET parameter "_ga". Remove ${ee.cookies.rngst1} & ${ee.cookies.rngst2} cookies`), le(ee.cookies.rngst1, ee.cookieDomain), le(ee.cookies.rngst2, ee.cookieDomain)), !1 === ee.substitutionEnabled) return void ge("Substitution is disabled by initChangeNumber() on initGaPlugin()");
        let n = ue(ee.cookies.rngst2, !0);
        if (n)
          if (Ye.sl = n.sl, (() => {
              const t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_keyword", "gclid", "yclid", "dclid", "openstat"];
              for (let e = 0; e <= t.length; e++) {
                const i = t[e];
                if (void 0 !== i) {
                  const t = Ke(i);
                  if (t && n.utmz[i] !== t) return !0
                }
              }
              return !1
            })()) le(ee.cookies.rngst1, ee.cookieDomain), le(ee.cookies.rngst2, ee.cookieDomain), qs(t);
          else {
            const e = ee.disableChangingNumber;
            !0 !== navigator.cookieEnabled || e && ue(e, !1) || (ue(ee.cookies.rngst1, !1) || ((t, e) => {
              navigator.geolocation && t.browserGeolocation && navigator.geolocation.getCurrentPosition(function(t) {
                Ye.geoLocation.latitude = t.coords.latitude, Ye.geoLocation.longitude = t.coords.longitude, Ye.geoLocation.accuracy = t.coords.accuracy;
                const n = `language=en&latlng=${t.coords.latitude},${t.coords.longitude}`;
                Fe("//maps.googleapis.com/maps/api/geocode/json", n, {
                  forceGet: !0,
                  onSuccess: t => {
                    let {
                      responseText: n
                    } = t;
                    const i = JSON.parse(n);
                    if ("OK" === i.status) {
                      const t = i.results[0].address_components;
                      for (let e = 0; e < t.length; ++e) "country" === t[e].types[0] && (Ye.geoLocation.country = t[e].long_name), "locality" === t[e].types[0] && (Ye.geoLocation.city = t[e].long_name)
                    }
                    e()
                  }
                })
              }, Ge)
            })(ee, () => {
              le(ee.cookies.rngst1, ee.cookieDomain), qs(t)
            }), qs(t))
          }
        else le(ee.cookies.rngst1, ee.cookieDomain), qs(t)
      }), window.ringostatAnalytics = {
        sendPayload: Qe,
        sendHit: $e
      }, window.ringostatRestartSubstitution = function() {
        ee.isAdvanced ? hn(t, "client") : rn(t, "client")
      }
    },
    classified: () => {
      const t = (() => {
          const t = new Zs;
          return t.subscribeObserver("xpath.beforeSetWithoutObserve", new ur), t
        })(),
        e = t => {
          Date.now() - Ye.lastInteractionTime < ee.pingInterval && qe(t)
        };
      let n = null;
      sn(() => {
        const {
          adId: i,
          adNumber: s
        } = ee.trackedEntities;
        if (te(i)) console.log('Project is not configured correctly, missing "adId"');
        else {
          if (!1 !== ee.userSettings.manualMode && void 0 !== ee.userSettings.manualMode || (Ye.adId = me(i.value, i.type)), Ye.lastInteractionTime = Date.now(), s) {
            let t = me(s.value, s.type);
            if (t) {
              let e = (t => t ? parseInt(t.replace(/[^0-9]+/g, ""), 10) : NaN)(t.toString().split(",", 1)[0]);
              Xs(e) || (Ye.customAdNumber = e)
            }
          }
          if (Ve(document, ee.interactionEvents, () => {
              Ye.lastInteractionTime = Date.now()
            }), n = setInterval(e, ee.pingInterval), ee.crossDomainTracking && Ke("_ga") && (console.log(`Ringostat: Found GET parameter "_ga". Remove ${ee.cookies.rngst2} cookies`), le(ee.cookies.rngst2, ee.cookieDomain)), 0 !== ee.substitutionStatus) {
            if (!1 !== ee.substitutionEnabled) return fe(Ye.adId) ? ee.userSettings.manualMode ? ge('Not found "adId"') : console.log('Not found "adId"') : void(!1 !== ee.userSettings.manualMode && void 0 !== ee.userSettings.manualMode || (lr(t = t), ee.observeDOM && cr.getInstance(t)));
            console.log("Ringostat: Substitution is disabled by initChangeNumber() on initGa()")
          } else console.log("Ringostat: Insertion status is OFF")
        }
      }), window.ringostatAnalytics = {
        sendPayload: Qe
      }, window.getManualClassifiedNumber = function(t, i) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        0 !== ee.substitutionStatus ? (Ye.href = `${window.location.host}${window.location.pathname}`, void 0 === ee.userSettings.isCacheAdId || !0 === ee.userSettings.isCacheAdId ? null !== n && (clearInterval(n), n = setInterval(() => e(t), ee.pingInterval)) : null !== n && (clearInterval(n), e(t), n = setInterval(() => {
          e()
        }, ee.pingInterval)), Ye.adId = me(t, "simple", !0), window.ringostatAnalytics.sendPayload("pageview", "", {}, t), Ye.customAdNumber = null !== r ? r : null, console.log(r || "null"), or(s, function(t, e) {
          ge(`Returned numbers from getManualClassifiedNumber: number: ${t}, numberWithoutMask: ${e}`), i({
            number: t,
            numberWithoutMask: e
          })
        })) : console.log("Ringostat: Insertion status is OFF")
      }
    }
  });
  const pr = t => {
    const e = oe();
    if (Ye.pageViewId = e, sessionStorage.setItem("vid_id", e), ce("rngstHash", {
        hash: ee.ringostatProjectHash
      }, 63072e3, ee.cookieDomain), window[ee.ga] || !0 === ee.userSettings.noGa || (window[ee.ga] = function() {
        window[ee.ga].q = window[ee.ga].q || [], window[ee.ga].q.push(arguments)
      }), !1 === te(document.evaluate)) return hr[t]();
    tn(`${ee.urls.backend}static/js/vendors/wgxpath.install.js`, () => {
      wgxpath.install(), hr[t]()
    })
  };
  var fr = function(t, e) {
    var n = -1,
      i = Ne(t) ? Array(t.length) : [];
    return vs(t, function(t, s, r) {
      i[++n] = e(t, s, r)
    }), i
  };
  var gr = function(t, e) {
    return (n(t) ? At : fr)(t, hs(e, 3))
  };
  const mr = t => {
      const e = t.customFormDataTracking;
      if (!(t => {
          if (t.pagesWhiteList.length) {
            for (let e = 0; e < t.pagesWhiteList.length; e++) {
              let n = t.pagesWhiteList[e];
              if (-1 != window.location.pathname.search(n)) return !0
            }
            return console.log("The pagesWhiteList is not empty and doesn't contain this page"), !1
          }
          if (t.pagesBlackList.length)
            for (let e = 0; e < t.pagesBlackList.length; e++) {
              let n = t.pagesBlackList[e];
              if (-1 != window.location.pathname.search(n)) return console.log("The pagesBlackList is not empty and contains this page"), !1
            }
          return !0
        })(e)) return;
      let n = [];
      for (let t = 0; t < e.phoneInputName.length; t++) n.push("input[name=" + e.phoneInputName[t] + "]");
      var i = n.join(", "),
        s = !1;

      function r(t) {
        setTimeout(function() {
          t.defaultPrevented || (t.preventDefault(), s = !0);
          let n = t.target,
            r = {};
          for (var a = 0; a < n.elements.length; a++)
            if ("BUTTON" !== n.elements[a].tagName && "submit" !== n.elements[a].type && -1 === e.fieldsBlackList.indexOf(n.elements[a].name))
              if ("SELECT" === n.elements[a].tagName && n.elements[a].multiple) r[n.elements[a].name] = [], gr(n.elements[a].options, (t, e) => {
                t.selected && r[n.elements[a].name].push(t.value)
              });
              else {
                if ("INPUT" === n.elements[a].tagName && "file" === n.elements[a].type) continue;
                if ("INPUT" === n.elements[a].tagName && "radio" === n.elements[a].type && !n.elements[a].checked) continue;
                r[n.elements[a].name] = n.elements[a].value
              } ge("Stored data:" + JSON.stringify(r));
          let o = oe();
          sessionStorage.setItem("hit_id", o);
          let c = {
            hid: o,
            vid: Ye.pageViewId,
            r_cl: Ye.clientId,
            r_cu: window.location.href,
            r_pd: _e(ee.trackedEntities, pe),
            dt: document.title,
            formData: r,
            formId: n.id.length ? n.id : "",
            formName: n.name.length ? n.name : ""
          };
          Fe(ee.urls.apiV2, c, {
            jsonRpc: !0,
            method: "saveFormData",
            onSuccess: function(n) {
              ge(n), !0 === e.startCallbackOnSubmitForm && null !== t.target.querySelector(i) && function(t) {
                let n = t.target.querySelector(i).value.replace(/^(380|\+380)0/, "$1");
                n = n.replace(/^(7|\+7)8/, "$1");
                try {
                  void 0 !== e.callbackDuringBusinessHours && e.callbackDuringBusinessHours ? void 0 !== js.old_data && void 0 !== js.old_data.is_working_time && js.old_data.is_working_time && Os({
                    num_to_call: n
                  }, null).then(() => {}).catch(() => {}) : Os({
                    num_to_call: n
                  }, null).then(() => {}).catch(() => {})
                } catch (t) {
                  ge(t)
                }
              }(t), s && t.target.submit()
            }
          })
        }, 3)
      }
      if (e.isActive)
        for (let t = 0; t < document.forms.length; t++) {
          let e = document.forms[t];
          e.attachEvent ? e.attachEvent("submit", r) : e.onsubmit = r, ge("Tracked form: #" + e.id)
        }
    },
    _r = t => {
      const e = window.location.href,
        n = ["*", ".*", e];
      let i = [];
      if (t)
        for (let e = 0; e < t.length; e++) {
          if (!0 === n.includes(t[e]) || 0 === t.length) return !0;
          {
            let n = "";
            n = (n = t[e].replace(/\*/gi, ".*")).replace(/\.\.\*/gi, ".*"), i.push(n)
          }
        }
      for (let t = 0; t < i.length; t++) {
        if (!0 === new RegExp(i[t]).test(e)) return !0
      }
      return console.log("The pagesWhiteList is not empty and doesn't contain this page"), !1
    },
    yr = (t, e) => {
      const {
        forms: n
      } = t, {
        connectIntlTelInputPlugin: i
      } = t;
      if (!0 === i) {
        const t = document.createElement("link");
        t.id = "intlLink", t.rel = "stylesheet", t.type = "text/css", t.href = `${e}static/js/vendors/phone_input/v18/css/intlTelInput.css`;
        const n = document.createElement("script");
        n.type = "text/javascript", n.src = `${e}static/js/vendors/phone_input/v18/js/utils.js`, n.async = !1, document.head.appendChild(t), document.head.appendChild(n)
      }
      for (let t in n) n.hasOwnProperty(t) && !0 === _r(n[t].pagesWhiteList) && (!1 === n[t].dynamicForm ? (Fs(n[t], t, Gs), !0 === n[t].trackFormManually && (window.ringostatAPI.sendFormDataToRingostat = ((t, e) => {
        Bs(e, n[t], t, e.target)
      }))) : (Qs.forms[t] = t, Qs.isDynamic = !0, Qs.callback = Gs))
    };

  function vr(t) {
    if ("string" == typeof t) return document.evaluate(t, document, null, 0, null);
    if (!t || 1 != t.nodeType) return "";
    if (t.id) return "//*[@id='" + t.id + "']";
    var e = [].filter.call(t.parentNode.children, function(e) {
      return e.tagName == t.tagName
    });
    return vr(t.parentNode) + "/" + t.tagName.toLowerCase() + (e.length > 1 ? "[" + ([].indexOf.call(e, t) + 1) + "]" : "")
  }
  const br = {
    callback: null,
    interval: null,
    achieveTime: 0,
    guid: function() {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return `${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`
    }(),
    isLocalStorageNameSupported() {
      let t = window.sessionStorage;
      try {
        return t.setItem("test", "1"), t.removeItem("test"), !0
      } catch (t) {
        return !1
      }
    },
    init(t, e) {
      br.callback = e, br.achieveTime = t;
      const n = {
        guid: "",
        achiev: 0
      };
      let i = br.readFromStorage();
      if (i && i.achiev) {
        if (-1 === i.achiev) {
          if (!xs.isLanding) return;
          i.achiev = 0
        }
        n.achiev = i.achiev
      }
      br.writeToStorage(n);
      Ve(document, ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend", "keydown", "keyup"], ks(br.eventFired, 500)), null === br.interval && (br.interval = setInterval(() => {
        (i = br.readFromStorage()) && i.guid === br.guid && (i.achiev >= br.achieveTime || -1 === i.achiev ? (clearInterval(br.interval), br.writeToStorage({
          guid: "",
          achiev: -1
        }), br.callback()) : br.writeToStorage({
          guid: "",
          achiev: i.achiev + 10
        }))
      }, 1e4))
    },
    eventFired() {
      const t = br.readFromStorage();
      t && (t.guid = br.guid, br.writeToStorage(t))
    },
    writeToStorage(t) {
      const e = {
        value: t,
        expires_at: (new Date).getTime() + 18e5
      };
      br.isLocalStorageNameSupported() ? localStorage.setItem("rngst_action", JSON.stringify(e)) : ce("rngst_action", JSON.stringify(e))
    },
    readFromStorage() {
      if (br.isLocalStorageNameSupported()) var t = JSON.parse(localStorage.getItem("rngst_action"));
      else ue("rngst_action", !0);
      if (null !== t) {
        if (!(null !== t.expires_at && t.expires_at < (new Date).getTime())) return t.value;
        localStorage.removeItem("rngst_action")
      }
      return null
    }
  };
  let Mr = null;
  const Nr = () => {
    br.callback = function() {}, br.writeToStorage({
      achiev: -1
    })
  };
  var Dr = ["ab", "aa", "af", "ak", "sq", "am", "ar", "an", "hy", "as", "av", "ae", "ay", "az", "bm", "ba", "eu", "be", "bn", "bh", "bi", "bs", "br", "bg", "my", "ca", "ch", "ce", "ny", "zh", "cv", "kw", "co", "cr", "hr", "cs", "da", "dv", "nl", "dz", "en", "eo", "et", "ee", "fo", "fj", "fi", "fr", "ff", "gl", "ka", "de", "el", "gn", "gu", "ht", "ha", "he", "hz", "hi", "ho", "hu", "ia", "id", "ie", "ga", "ig", "ik", "io", "is", "it", "iu", "ja", "jv", "kl", "kn", "kr", "ks", "kk", "km", "ki", "rw", "ky", "kv", "kg", "ko", "ku", "kj", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "gv", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mh", "mn", "na", "nv", "nd", "ne", "ng", "nb", "nn", "no", "ii", "nr", "oc", "oj", "cu", "om", "or", "os", "pa", "pi", "fa", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "sa", "sc", "sd", "se", "sm", "sg", "sr", "gd", "sn", "si", "sk", "sl", "so", "st", "es", "su", "sw", "ss", "sv", "ta", "te", "tg", "th", "ti", "bo", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "cy", "wo", "fy", "xh", "yi", "yo", "za", "zu"];
  const Ir = t => {
    let e = oe();
    Ns(`${ee.urls.analytics}callback_form/v1`, {
      "data[ua_id]": xs.uaId,
      "data[client_id]": xs.clientId,
      "data[avg_time_to_call]": js.old_data.avg_time_to_call,
      "data[flag]": t,
      "data[hid]": e,
      "data[vid]": Ye.pageViewId
    }, function() {
      sessionStorage.setItem("hit_id", e), ge(`callbackLog  Success : ${this.status} - ${this.statusText}`)
    }, function() {
      ge(`callbackLog  Error : ${this.status} - ${this.statusText}`)
    })
  };
  var Sr = function(t) {
    return t != t
  };
  var wr = function(t, e, n) {
    for (var i = n - 1, s = t.length; ++i < s;)
      if (t[i] === e) return i;
    return -1
  };
  var Er = function(t, e, n) {
      return e == e ? wr(t, e, n) : fs(t, Sr, n)
    },
    kr = "[object String]";
  var Tr = function(t) {
    return "string" == typeof t || !n(t) && b(t) && v(t) == kr
  };
  var xr = function(t, e) {
    return At(e, function(e) {
      return t[e]
    })
  };
  var Cr = function(t) {
      return null == t ? [] : xr(t, Li(t))
    },
    Ar = Math.max;
  var jr = function(t, e, n, i) {
    t = Ne(t) ? t : Cr(t), n = n && !i ? gs(n) : 0;
    var s = t.length;
    return n < 0 && (n = Ar(s + n, 0)), Tr(t) ? n <= s && t.indexOf(e, n) > -1 : !!s && Er(t, e, n) > -1
  };
  var zr = function(t, e, n) {
    var i = -1,
      s = t.length;
    e < 0 && (e = -e > s ? 0 : s + e), (n = n > s ? s : n) < 0 && (n += s), s = e > n ? 0 : n - e >>> 0, e >>>= 0;
    for (var r = Array(s); ++i < s;) r[i] = t[i + e];
    return r
  };
  var Or = function(t, e, n) {
    var i = t.length;
    return n = void 0 === n ? i : n, !e && n >= i ? t : zr(t, e, n)
  };
  var Lr = function(t, e) {
    for (var n = t.length; n-- && Er(e, t[n], 0) > -1;);
    return n
  };
  var Rr = function(t, e) {
    for (var n = -1, i = t.length; ++n < i && Er(e, t[n], 0) > -1;);
    return n
  };
  var Ur = function(t) {
      return t.split("")
    },
    Br = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  var Yr = function(t) {
      return Br.test(t)
    },
    Pr = "[\\ud800-\\udfff]",
    Gr = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    Fr = "\\ud83c[\\udffb-\\udfff]",
    Qr = "[^\\ud800-\\udfff]",
    $r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Hr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    qr = "(?:" + Gr + "|" + Fr + ")" + "?",
    Vr = "[\\ufe0e\\ufe0f]?" + qr + ("(?:\\u200d(?:" + [Qr, $r, Hr].join("|") + ")[\\ufe0e\\ufe0f]?" + qr + ")*"),
    Wr = "(?:" + [Qr + Gr + "?", Gr, $r, Hr, Pr].join("|") + ")",
    Zr = RegExp(Fr + "(?=" + Fr + ")|" + Wr + Vr, "g");
  var Jr = function(t) {
    return t.match(Zr) || []
  };
  var Kr = function(t) {
      return Yr(t) ? Jr(t) : Ur(t)
    },
    Xr = /^\s+|\s+$/g;
  var ta = function(t, e, n) {
      if ((t = Rt(t)) && (n || void 0 === e)) return t.replace(Xr, "");
      if (!t || !(e = Lt(e))) return t;
      var i = Kr(t),
        s = Kr(e),
        r = Rr(i, s),
        a = Lr(i, s) + 1;
      return Or(i, r, a).join("")
    },
    ea = s(function(t, e) {
      var n;
      n = function(t) {
        function e(t, e) {
          return t.hasOwnProperty(e) && (!0 === t[e] || t[e].length)
        }

        function n(t, e, n) {
          t.parentNode ? t.parentNode.parentNode || e.appendChild(t.parentNode) : e.appendChild(t), s.removeClass(t, "excluded"), n || (t.innerHTML = t.textContent)
        }
        var i = function() {};
        i.prototype = {
          on: function(t, e) {
            this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
          },
          off: function(t, e) {
            this._events = this._events || {}, !1 != t in this._events && this._events[t].splice(this._events[t].indexOf(e), 1)
          },
          emit: function(t) {
            if (this._events = this._events || {}, !1 != t in this._events)
              for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
          }
        }, i.mixin = function(t) {
          for (var e = ["on", "off", "emit"], n = 0; n < e.length; n++) "function" == typeof t ? t.prototype[e[n]] = i.prototype[e[n]] : t[e[n]] = i.prototype[e[n]];
          return t
        };
        var s = {
            extend: function(t, e) {
              for (var n in e)
                if (e.hasOwnProperty(n)) {
                  var i = e[n];
                  i && "[object Object]" === Object.prototype.toString.call(i) ? (t[n] = t[n] || {}, s.extend(t[n], i)) : t[n] = i
                } return t
            },
            each: function(t, e, n) {
              if ("[object Object]" === Object.prototype.toString.call(t))
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, i, t[i], t);
              else {
                i = 0;
                for (var s = t.length; i < s; i++) e.call(n, i, t[i], t)
              }
            },
            createElement: function(t, e) {
              var n = document,
                i = n.createElement(t);
              if (e && "[object Object]" === Object.prototype.toString.call(e))
                for (var s in e)
                  if (s in i) i[s] = e[s];
                  else if ("html" === s) i.innerHTML = e[s];
              else if ("text" === s) {
                var r = n.createTextNode(e[s]);
                i.appendChild(r)
              } else i.setAttribute(s, e[s]);
              return i
            },
            hasClass: function(t, e) {
              if (t) return t.classList ? t.classList.contains(e) : !!t.className && !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
            },
            addClass: function(t, e) {
              s.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className = t.className.trim() + " " + e)
            },
            removeClass: function(t, e) {
              s.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " "))
            },
            closest: function(t, e) {
              return t && t !== document.body && (e(t) ? t : s.closest(t.parentNode, e))
            },
            isInt: function(t) {
              return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            },
            debounce: function(t, e, n) {
              var i;
              return function() {
                var s = this,
                  r = arguments,
                  a = n && !i;
                clearTimeout(i), i = setTimeout(function() {
                  i = null, n || t.apply(s, r)
                }, e), a && t.apply(s, r)
              }
            },
            rect: function(t, e) {
              var n = window,
                i = t.getBoundingClientRect(),
                s = e ? n.pageXOffset : 0;
              return n = e ? n.pageYOffset : 0, {
                bottom: i.bottom + n,
                height: i.height,
                left: i.left + s,
                right: i.right + s,
                top: i.top + n,
                width: i.width
              }
            },
            includes: function(t, e) {
              return -1 < t.indexOf(e)
            },
            startsWith: function(t, e) {
              return t.substr(0, e.length) === e
            },
            truncate: function(t) {
              for (; t.firstChild;) t.removeChild(t.firstChild)
            }
          },
          r = function() {
            if (this.items.length) {
              var t = document.createDocumentFragment();
              if (this.config.pagination) {
                var e = this.pages.slice(0, this.pageIndex);
                s.each(e, function(e, i) {
                  s.each(i, function(e, i) {
                    n(i, t, this.customOption)
                  }, this)
                }, this)
              } else s.each(this.items, function(e, i) {
                n(i, t, this.customOption)
              }, this);
              t.childElementCount && (s.removeClass(this.items[this.navIndex], "active"), this.navIndex = (t.querySelector(".selectr-option.selected") || t.querySelector(".selectr-option")).idx, s.addClass(this.items[this.navIndex], "active")), this.tree.appendChild(t)
            }
          },
          a = function(t, e) {
            var n = this.customOption ? this.config.renderOption(e || t) : t.textContent;
            return (n = s.createElement("li", {
              class: "selectr-option",
              html: n,
              role: "treeitem",
              "aria-selected": !1
            })).idx = t.idx, this.items.push(n), t.defaultSelected && this.defaultSelected.push(t.idx), t.disabled && (n.disabled = !0, s.addClass(n, "disabled")), n
          },
          o = function() {
            var t = this.tree;
            if (t.scrollTop >= t.scrollHeight - t.offsetHeight && this.pageIndex < this.pages.length) {
              var e = document.createDocumentFragment();
              s.each(this.pages[this.pageIndex], function(t, i) {
                n(i, e, this.customOption)
              }, this), t.appendChild(e), this.pageIndex++, this.emit("selectr.paginate", {
                items: this.items.length,
                total: this.data.length,
                page: this.pageIndex,
                pages: this.pages.length
              })
            }
          },
          c = function() {
            (this.config.searchable || this.config.taggable) && (this.input.value = null, this.searching = !1, this.config.searchable && s.removeClass(this.inputContainer, "active"), s.hasClass(this.container, "notice") && (s.removeClass(this.container, "notice"), s.addClass(this.container, "open"), this.input.focus()), s.each(this.items, function(t, e) {
              s.removeClass(e, "excluded"), this.customOption || (e.innerHTML = e.textContent)
            }, this))
          };
        return (t = function(t, e) {
          if (this.defaultConfig = {
              defaultSelected: !0,
              width: "auto",
              disabled: !1,
              searchable: !0,
              clearable: !1,
              sortSelected: !1,
              allowDeselect: !1,
              closeOnScroll: !1,
              nativeDropdown: !1,
              nativeKeyboard: !1,
              placeholder: "Select an option...",
              taggable: !1,
              tagPlaceholder: "Enter a tag...",
              messages: {
                noResults: "No results.",
                noOptions: "No options available.",
                maxSelections: "A maximum of {max} items can be selected.",
                tagDuplicate: "That tag is already in use."
              }
            }, !t) throw Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");
          if (this.el = t, "string" == typeof t && (this.el = document.querySelector(t)), null === this.el) throw Error("The element you passed to Selectr can not be found.");
          if ("select" !== this.el.nodeName.toLowerCase()) throw Error("The element you passed to Selectr is not a HTMLSelectElement.");
          this.render(e)
        }).prototype.render = function(t) {
          if (!this.rendered) {
            this.el.selectr = this, this.config = s.extend(this.defaultConfig, t), this.originalType = this.el.type, this.originalIndex = this.el.tabIndex, this.defaultSelected = [], this.originalOptionCount = this.el.options.length, (this.config.multiple || this.config.taggable) && (this.el.multiple = !0), this.disabled = e(this.config, "disabled"), this.opened = !1, this.config.taggable && (this.config.searchable = !1), this.mobileDevice = this.navigating = !1, /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) && (this.mobileDevice = !0), this.customOption = this.config.hasOwnProperty("renderOption") && "function" == typeof this.config.renderOption, this.customSelected = this.config.hasOwnProperty("renderSelection") && "function" == typeof this.config.renderSelection, this.supportsEventPassiveOption = this.detectEventPassiveOption(), i.mixin(this),
              function() {
                this.requiresPagination = this.config.pagination && 0 < this.config.pagination, e(this.config, "width") && (s.isInt(this.config.width) ? this.width = this.config.width + "px" : "auto" === this.config.width ? this.width = "100%" : s.includes(this.config.width, "%") && (this.width = this.config.width)), this.container = s.createElement("div", {
                  class: "selectr-container"
                }), this.config.customClass && s.addClass(this.container, this.config.customClass), this.mobileDevice ? s.addClass(this.container, "selectr-mobile") : s.addClass(this.container, "selectr-desktop"), this.el.tabIndex = -1, this.config.nativeDropdown || this.mobileDevice ? s.addClass(this.el, "selectr-visible") : s.addClass(this.el, "selectr-hidden"), this.selected = s.createElement("div", {
                  class: "selectr-selected",
                  disabled: this.disabled,
                  tabIndex: 0,
                  "aria-expanded": !1
                }), this.label = s.createElement(this.el.multiple ? "ul" : "span", {
                  class: "selectr-label"
                });
                var t = s.createElement("div", {
                  class: "selectr-options-container"
                });
                if (this.tree = s.createElement("ul", {
                    class: "selectr-options",
                    role: "tree",
                    "aria-hidden": !0,
                    "aria-expanded": !1
                  }), this.notice = s.createElement("div", {
                    class: "selectr-notice"
                  }), this.el.setAttribute("aria-hidden", !0), this.disabled && (this.el.disabled = !0), this.el.multiple && (s.addClass(this.label, "selectr-tags"), s.addClass(this.container, "multiple"), this.tags = [], this.selectedValues = this.getSelectedProperties("value"), this.selectedIndexes = this.getSelectedProperties("idx")), this.selected.appendChild(this.label), this.config.clearable && (this.selectClear = s.createElement("button", {
                    class: "selectr-clear",
                    type: "button"
                  }), this.container.appendChild(this.selectClear), s.addClass(this.container, "clearable")), this.config.taggable) {
                  var n = s.createElement("li", {
                    class: "input-tag"
                  });
                  this.input = s.createElement("input", {
                    class: "selectr-tag-input",
                    placeholder: this.config.tagPlaceholder,
                    tagIndex: 0,
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off",
                    spellcheck: "false",
                    role: "textbox",
                    type: "search"
                  }), n.appendChild(this.input), this.label.appendChild(n), s.addClass(this.container, "taggable"), this.tagSeperators = [","], this.config.tagSeperators && (this.tagSeperators = this.tagSeperators.concat(this.config.tagSeperators))
                }
                this.config.searchable && (this.input = s.createElement("input", {
                  class: "selectr-input",
                  tagIndex: -1,
                  autocomplete: "off",
                  autocorrect: "off",
                  autocapitalize: "off",
                  spellcheck: "false",
                  role: "textbox",
                  type: "search"
                }), this.inputClear = s.createElement("button", {
                  class: "selectr-input-clear",
                  type: "button"
                }), this.inputContainer = s.createElement("div", {
                  class: "selectr-input-container"
                }), this.inputContainer.appendChild(this.input), this.inputContainer.appendChild(this.inputClear), t.appendChild(this.inputContainer)), t.appendChild(this.notice), t.appendChild(this.tree), this.items = [], this.options = [], this.el.options.length && (this.options = [].slice.call(this.el.options));
                var i = !1,
                  r = 0;
                if (this.el.children.length && s.each(this.el.children, function(t, e) {
                    "OPTGROUP" === e.nodeName ? (i = s.createElement("ul", {
                      class: "selectr-optgroup",
                      role: "group",
                      html: "<li class='selectr-optgroup--label'>" + e.label + "</li>"
                    }), s.each(e.children, function(t, e) {
                      e.idx = r, i.appendChild(a.call(this, e, i)), r++
                    }, this)) : (e.idx = r, a.call(this, e), r++)
                  }, this), this.config.data && Array.isArray(this.config.data)) {
                  this.data = [];
                  var o, c = !1;
                  i = !1, r = 0, s.each(this.config.data, function(t, n) {
                    e(n, "children") ? (c = s.createElement("optgroup", {
                      label: n.text
                    }), i = s.createElement("ul", {
                      class: "selectr-optgroup",
                      role: "group",
                      html: "<li class='selectr-optgroup--label'>" + n.text + "</li>"
                    }), s.each(n.children, function(t, n) {
                      (o = new Option(n.text, n.value, !1, n.hasOwnProperty("selected") && !0 === n.selected)).disabled = e(n, "disabled"), this.options.push(o), c.appendChild(o), o.idx = r, i.appendChild(a.call(this, o, n)), this.data[r] = n, r++
                    }, this), this.el.appendChild(c)) : ((o = new Option(n.text, n.value, !1, n.hasOwnProperty("selected") && !0 === n.selected)).disabled = e(n, "disabled"), this.options.push(o), o.idx = r, a.call(this, o, n), this.data[r] = n, r++)
                  }, this)
                }
                this.setSelected(!0);
                for (var l = this.navIndex = 0; l < this.items.length; l++)
                  if (n = this.items[l], !s.hasClass(n, "disabled")) {
                    s.addClass(n, "active"), this.navIndex = l;
                    break
                  } this.requiresPagination && (this.pageIndex = 1, this.paginate()), this.container.appendChild(this.selected), this.container.appendChild(t), this.placeEl = s.createElement("div", {
                  class: "selectr-placeholder"
                }), this.setPlaceholder(), this.selected.appendChild(this.placeEl), this.disabled && this.disable(), this.el.parentNode.insertBefore(this.container, this.el), this.container.appendChild(this.el)
              }.call(this), this.bindEvents(), this.update(), this.optsRect = s.rect(this.tree), this.rendered = !0, this.el.multiple || (this.el.selectedIndex = this.selectedIndex);
            var n = this;
            setTimeout(function() {
              n.emit("selectr.init")
            }, 20)
          }
        }, t.prototype.getSelected = function() {
          return this.el.querySelectorAll("option:checked")
        }, t.prototype.getSelectedProperties = function(t) {
          var e = this.getSelected();
          return [].slice.call(e).map(function(e) {
            return e[t]
          }).filter(function(t) {
            return null !== t && void 0 !== t
          })
        }, t.prototype.detectEventPassiveOption = function() {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function() {
                t = !0
              }
            });
            window.addEventListener("test", null, e)
          } catch (t) {}
          return t
        }, t.prototype.bindEvents = function() {
          var t = this;
          if (this.events = {}, this.events.dismiss = function(t) {
              this.container.contains(t.target) || !this.opened && !s.hasClass(this.container, "notice") || this.close()
            }.bind(this), this.events.navigate = function(t) {
              if (t = t || window.event, this.items.length && this.opened && s.includes([13, 38, 40], t.which)) {
                if (t.preventDefault(), 13 === t.which) return !(this.noResults || this.config.taggable && 0 < this.input.value.length) && this.change(this.navIndex);
                var e = this.items[this.navIndex],
                  n = this.navIndex;
                switch (t.which) {
                  case 38:
                    var i = 0;
                    0 < this.navIndex && this.navIndex--;
                    break;
                  case 40:
                    i = 1, this.navIndex < this.items.length - 1 && this.navIndex++
                }
                for (this.navigating = !0; s.hasClass(this.items[this.navIndex], "disabled") || s.hasClass(this.items[this.navIndex], "excluded");) {
                  if (!(0 < this.navIndex && this.navIndex < this.items.length - 1)) {
                    this.navIndex = n;
                    break
                  }
                  if (i ? this.navIndex++ : this.navIndex--, this.searching) {
                    if (this.navIndex > this.tree.lastElementChild.idx) {
                      this.navIndex = this.tree.lastElementChild.idx;
                      break
                    }
                    if (this.navIndex < this.tree.firstElementChild.idx) {
                      this.navIndex = this.tree.firstElementChild.idx;
                      break
                    }
                  }
                }
                t = s.rect(this.items[this.navIndex]), i ? (0 === this.navIndex ? this.tree.scrollTop = 0 : t.top + t.height > this.optsRect.top + this.optsRect.height && (this.tree.scrollTop += t.top + t.height - (this.optsRect.top + this.optsRect.height)), this.navIndex === this.tree.childElementCount - 1 && this.requiresPagination && o.call(this)) : 0 === this.navIndex ? this.tree.scrollTop = 0 : 0 > t.top - this.optsRect.top && (this.tree.scrollTop += t.top - this.optsRect.top), e && s.removeClass(e, "active"), s.addClass(this.items[this.navIndex], "active")
              } else this.navigating = !1
            }.bind(this), this.events.reset = this.reset.bind(this), this.config.nativeDropdown || this.mobileDevice) {
            this.container.addEventListener("touchstart", function(e) {
              e.changedTouches[0].target === t.el && t.toggle()
            }, !!this.supportsEventPassiveOption && {
              passive: !0
            }), this.container.addEventListener("click", function(e) {
              e.target === t.el && t.toggle()
            });
            this.el.addEventListener("change", function(e) {
              t.el.multiple ? (e = t.getSelectedProperties("idx"), e = function(t, e) {
                for (var n, i = [], s = t.slice(0), r = 0; r < e.length; r++) - 1 < (n = s.indexOf(e[r])) ? s.splice(n, 1) : i.push(e[r]);
                return [i, s]
              }(t.selectedIndexes, e), s.each(e[0], function(e, n) {
                t.select(n)
              }, t), s.each(e[1], function(e, n) {
                t.deselect(n)
              }, t)) : -1 < t.el.selectedIndex && t.select(t.el.selectedIndex)
            })
          }
          if (this.container.addEventListener("keydown", function(e) {
              "Escape" === e.key && t.close(), "Enter" === e.key && t.selected === document.activeElement && void 0 !== t.el.form.submit && t.el.form.submit(), " " !== e.key && "ArrowUp" !== e.key && "ArrowDown" !== e.key || t.selected !== document.activeElement || (setTimeout(function() {
                t.toggle()
              }, 200), t.config.nativeDropdown && setTimeout(function() {
                t.el.focus()
              }, 200))
            }), this.selected.addEventListener("click", function(e) {
              t.disabled || t.toggle(), e.preventDefault()
            }), this.config.nativeKeyboard) {
            var e = "";
            this.selected.addEventListener("keydown", function(n) {
              if (!(t.disabled || t.selected !== document.activeElement || n.altKey || n.ctrlKey || n.metaKey))
                if (" " === n.key || !t.opened && -1 < ["Enter", "ArrowUp", "ArrowDown"].indexOf(n.key)) t.toggle(), n.preventDefault(), n.stopPropagation();
                else if (2 >= n.key.length && String[String.fromCodePoint ? "fromCodePoint" : "fromCharCode"](n.key[String.codePointAt ? "codePointAt" : "charCodeAt"](0)) === n.key) {
                if (t.config.multiple) t.open(), t.config.searchable && (t.input.value = n.key, t.input.focus(), t.search(null, !0));
                else {
                  e += n.key;
                  var i = t.search(e, !0);
                  i && i.length && (t.clear(), t.setValue(i[0].value)), setTimeout(function() {
                    e = ""
                  }, 1e3)
                }
                n.preventDefault(), n.stopPropagation()
              }
            }), this.container.addEventListener("keyup", function(e) {
              t.opened && "Escape" === e.key && (t.close(), e.stopPropagation(), t.selected.focus())
            })
          }
          this.label.addEventListener("click", function(e) {
            s.hasClass(e.target, "selectr-tag-remove") && t.deselect(e.target.parentNode.idx)
          }), this.selectClear && this.selectClear.addEventListener("click", this.clear.bind(this)), this.tree.addEventListener("mousedown", function(t) {
            t.preventDefault()
          }), this.tree.addEventListener("click", function(e) {
            var n = s.closest(e.target, function(t) {
              return t && s.hasClass(t, "selectr-option")
            });
            n && !s.hasClass(n, "disabled") && (s.hasClass(n, "selected") ? (t.el.multiple || !t.el.multiple && t.config.allowDeselect) && t.deselect(n.idx) : t.select(n.idx), t.opened && !t.el.multiple && t.close()), e.preventDefault(), e.stopPropagation()
          }), this.tree.addEventListener("mouseover", function(e) {
            s.hasClass(e.target, "selectr-option") && !s.hasClass(e.target, "disabled") && (s.removeClass(t.items[t.navIndex], "active"), s.addClass(e.target, "active"), t.navIndex = [].slice.call(t.items).indexOf(e.target))
          }), this.config.searchable && (this.input.addEventListener("focus", function(e) {
            t.searching = !0
          }), this.input.addEventListener("blur", function(e) {
            t.searching = !1
          }), this.input.addEventListener("keyup", function(e) {
            t.search(), t.config.taggable || (this.value.length ? s.addClass(this.parentNode, "active") : s.removeClass(this.parentNode, "active"))
          }), this.inputClear.addEventListener("click", function(e) {
            t.input.value = null, c.call(t), t.tree.childElementCount || r.call(t)
          })), this.config.taggable && this.input.addEventListener("keyup", function(e) {
            if (t.search(), t.config.taggable && this.value.length) {
              var n = this.value.trim();
              (13 === e.which || s.includes(t.tagSeperators, e.key)) && (s.each(t.tagSeperators, function(t, e) {
                n = n.replace(e, "")
              }), t.add({
                value: n,
                text: n,
                selected: !0
              }, !0) ? (t.close(), c.call(t)) : (this.value = "", t.setMessage(t.config.messages.tagDuplicate)))
            }
          }), this.update = s.debounce(function() {
            t.opened && t.config.closeOnScroll && t.close(), t.width && (t.container.style.width = t.width), t.invert()
          }, 50), this.requiresPagination && (this.paginateItems = s.debounce(function() {
            o.call(this)
          }, 50), this.tree.addEventListener("scroll", this.paginateItems.bind(this))), document.addEventListener("click", this.events.dismiss), window.addEventListener("keydown", this.events.navigate), window.addEventListener("resize", this.update), window.addEventListener("scroll", this.update), this.on("selectr.destroy", function() {
            document.removeEventListener("click", this.events.dismiss), window.removeEventListener("keydown", this.events.navigate), window.removeEventListener("resize", this.update), window.removeEventListener("scroll", this.update)
          }), this.el.form && (this.el.form.addEventListener("reset", this.events.reset), this.on("selectr.destroy", function() {
            this.el.form.removeEventListener("reset", this.events.reset)
          }))
        }, t.prototype.setSelected = function(t) {
          if (this.config.data || this.el.multiple || !this.el.options.length || (0 !== this.el.selectedIndex || this.el.options[0].defaultSelected || this.config.defaultSelected || (this.el.selectedIndex = -1), this.selectedIndex = this.el.selectedIndex, -1 < this.selectedIndex && this.select(this.selectedIndex)), this.config.multiple && "select-one" === this.originalType && !this.config.data && this.el.options[0].selected && !this.el.options[0].defaultSelected && (this.el.options[0].selected = !1), s.each(this.options, function(t, e) {
              e.selected && e.defaultSelected && this.select(e.idx)
            }, this), this.config.selectedValue && this.setValue(this.config.selectedValue), this.config.data) {
            !this.el.multiple && this.config.defaultSelected && 0 > this.el.selectedIndex && this.select(0);
            var n = 0;
            s.each(this.config.data, function(t, i) {
              e(i, "children") ? s.each(i.children, function(t, e) {
                e.hasOwnProperty("selected") && !0 === e.selected && this.select(n), n++
              }, this) : (i.hasOwnProperty("selected") && !0 === i.selected && this.select(n), n++)
            }, this)
          }
        }, t.prototype.destroy = function() {
          this.rendered && (this.emit("selectr.destroy"), "select-one" === this.originalType && (this.el.multiple = !1), this.config.data && (this.el.innerHTML = ""), s.removeClass(this.el, "selectr-hidden"), this.container.parentNode.replaceChild(this.el, this.container), this.rendered = !1, delete this.el.selectr)
        }, t.prototype.change = function(t) {
          var e = this.items[t],
            n = this.options[t];
          n.disabled || (n.selected && s.hasClass(e, "selected") ? this.deselect(t) : this.select(t), this.opened && !this.el.multiple && this.close())
        }, t.prototype.select = function(t) {
          var e = this.items[t],
            n = [].slice.call(this.el.options),
            i = this.options[t];
          if (this.el.multiple) {
            if (s.includes(this.selectedIndexes, t)) return !1;
            if (this.config.maxSelections && this.tags.length === this.config.maxSelections) return this.setMessage(this.config.messages.maxSelections.replace("{max}", this.config.maxSelections), !0), !1;
            this.selectedValues.push(i.value), this.selectedIndexes.push(t),
              function(t) {
                var e = this,
                  n = document.createDocumentFragment(),
                  i = this.options[t.idx],
                  r = this.data ? this.data[t.idx] : i;
                r = this.customSelected ? this.config.renderSelection(r) : i.textContent, r = s.createElement("li", {
                  class: "selectr-tag",
                  html: r
                });
                var a = s.createElement("button", {
                  class: "selectr-tag-remove",
                  type: "button"
                });
                if (r.appendChild(a), r.idx = t.idx, r.tag = i.value, this.tags.push(r), this.config.sortSelected) {
                  var o = function(t, e) {
                    t.replace(/(\d+)|(\D+)/g, function(t, n, i) {
                      e.push([n || 1 / 0, i || ""])
                    })
                  };
                  (t = this.tags.slice()).sort(function(t, n) {
                    var i = [],
                      s = [];
                    if (!0 === e.config.sortSelected) var r = t.tag,
                      a = n.tag;
                    else "text" === e.config.sortSelected && (r = t.textContent, a = n.textContent);
                    for (o(r, i), o(a, s); i.length && s.length;)
                      if (r = i.shift(), a = s.shift(), r = r[0] - a[0] || r[1].localeCompare(a[1])) return r;
                    return i.length - s.length
                  }), s.each(t, function(t, e) {
                    n.appendChild(e)
                  }), this.label.innerHTML = ""
                } else n.appendChild(r);
                this.config.taggable ? this.label.insertBefore(n, this.input.parentNode) : this.label.appendChild(n)
              }.call(this, e)
          } else {
            var r = this.data ? this.data[t] : i;
            this.label.innerHTML = this.customSelected ? this.config.renderSelection(r) : i.textContent, this.selectedValue = i.value, this.selectedIndex = t, s.each(this.options, function(e, n) {
              var i = this.items[e];
              e !== t && (i && s.removeClass(i, "selected"), n.selected = !1, n.removeAttribute("selected"))
            }, this)
          }
          s.includes(n, i) || this.el.add(i), e.setAttribute("aria-selected", !0), s.addClass(e, "selected"), s.addClass(this.container, "has-selected"), i.selected = !0, i.setAttribute("selected", ""), this.emit("selectr.change", i), this.emit("selectr.select", i), "createEvent" in document ? ((e = document.createEvent("HTMLEvents")).initEvent("change", !0, !0), this.el.dispatchEvent(e)) : this.el.fireEvent("onchange")
        }, t.prototype.deselect = function(t, e) {
          var n = this.items[t],
            i = this.options[t];
          if (this.el.multiple) {
            var r = this.selectedIndexes.indexOf(t);
            this.selectedIndexes.splice(r, 1), r = this.selectedValues.indexOf(i.value), this.selectedValues.splice(r, 1),
              function(t) {
                var e = !1;
                s.each(this.tags, function(n, i) {
                  i.idx === t.idx && (e = i)
                }, this), e && (this.label.removeChild(e), this.tags.splice(this.tags.indexOf(e), 1))
              }.call(this, n), this.tags.length || s.removeClass(this.container, "has-selected")
          } else {
            if (!e && !this.config.clearable && !this.config.allowDeselect) return !1;
            this.label.innerHTML = "", this.selectedValue = null, this.el.selectedIndex = this.selectedIndex = -1, s.removeClass(this.container, "has-selected")
          }
          this.items[t].setAttribute("aria-selected", !1), s.removeClass(this.items[t], "selected"), i.selected = !1, i.removeAttribute("selected"), this.emit("selectr.change", null), this.emit("selectr.deselect", i), "createEvent" in document ? ((n = document.createEvent("HTMLEvents")).initEvent("change", !0, !0), this.el.dispatchEvent(n)) : this.el.fireEvent("onchange")
        }, t.prototype.setValue = function(t) {
          var e = Array.isArray(t);
          if (e || (t = t.toString().trim()), !this.el.multiple && e) return !1;
          s.each(this.options, function(n, i) {
            (e && -1 < t.indexOf(i.value) || i.value === t) && this.change(i.idx)
          }, this)
        }, t.prototype.getValue = function(t, e) {
          if (this.el.multiple)
            if (t) {
              if (this.selectedIndexes.length) {
                var n = {
                  values: []
                };
                s.each(this.selectedIndexes, function(t, e) {
                  var i = this.options[e];
                  n.values[t] = {
                    value: i.value,
                    text: i.textContent
                  }
                }, this)
              }
            } else n = this.selectedValues.slice();
          else if (t) {
            var i = this.options[this.selectedIndex];
            n = {
              value: i.value,
              text: i.textContent
            }
          } else n = this.selectedValue;
          return t && e && (n = JSON.stringify(n)), n
        }, t.prototype.add = function(t, e) {
          if (t) {
            if (this.data = this.data || [], this.items = this.items || [], this.options = this.options || [], Array.isArray(t)) s.each(t, function(t, n) {
              this.add(n, e)
            }, this);
            else if ("[object Object]" === Object.prototype.toString.call(t)) {
              if (e) {
                var n = !1;
                if (s.each(this.options, function(e, i) {
                    i.value.toLowerCase() === t.value.toLowerCase() && (n = !0)
                  }), n) return !1
              }
              var i = s.createElement("option", t);
              return this.data.push(t), this.options.push(i), i.idx = 0 < this.options.length ? this.options.length - 1 : 0, a.call(this, i), t.selected && this.select(i.idx), this.setPlaceholder(), i
            }
            return this.config.pagination && this.paginate(), !0
          }
        }, t.prototype.remove = function(t) {
          var e, n = [];
          (Array.isArray(t) ? s.each(t, function(t, e) {
            s.isInt(e) ? n.push(this.getOptionByIndex(e)) : "string" == typeof e && n.push(this.getOptionByValue(e))
          }, this) : s.isInt(t) ? n.push(this.getOptionByIndex(t)) : "string" == typeof t && n.push(this.getOptionByValue(t)), n.length) && (s.each(n, function(t, n) {
            e = n.idx, this.el.remove(n), this.options.splice(e, 1);
            var i = this.items[e].parentNode;
            i && i.removeChild(this.items[e]), this.items.splice(e, 1), s.each(this.options, function(t, e) {
              e.idx = t, this.items[t].idx = t
            }, this)
          }, this), this.setPlaceholder(), this.config.pagination && this.paginate())
        }, t.prototype.removeAll = function() {
          this.clear(!0), s.each(this.el.options, function(t, e) {
            this.el.remove(e)
          }, this), s.truncate(this.tree), this.items = [], this.options = [], this.data = [], this.navIndex = 0, this.requiresPagination && (this.requiresPagination = !1, this.pageIndex = 1, this.pages = []), this.setPlaceholder()
        }, t.prototype.search = function(t, e) {
          if (!this.navigating) {
            var i = !1;
            t || (t = this.input.value, i = !0, this.removeMessage(), s.truncate(this.tree));
            var a = [],
              o = document.createDocumentFragment();
            if (0 < (t = t.trim().toLowerCase()).length) {
              var c = e ? s.startsWith : s.includes;
              if (s.each(this.options, function(e, r) {
                  var l = this.items[r.idx];
                  if (c(r.textContent.trim().toLowerCase(), t) && !r.disabled) {
                    if (a.push({
                        text: r.textContent,
                        value: r.value
                      }), i && (n(l, o, this.customOption), s.removeClass(l, "excluded"), !this.customOption)) {
                      var u = !!(u = new RegExp(t, "i").exec(r.textContent)) && r.textContent.replace(u[0], "<span class='selectr-match'>" + u[0] + "</span>");
                      l.innerHTML = u
                    }
                  } else i && s.addClass(l, "excluded")
                }, this), i) {
                if (o.childElementCount) {
                  var l = this.items[this.navIndex],
                    u = o.querySelector(".selectr-option:not(.excluded)");
                  this.noResults = !1, s.removeClass(l, "active"), this.navIndex = u.idx, s.addClass(u, "active")
                } else this.config.taggable || (this.noResults = !0, this.setMessage(this.config.messages.noResults));
                this.tree.appendChild(o)
              }
            } else r.call(this);
            return a
          }
        }, t.prototype.toggle = function() {
          this.disabled || (this.opened ? this.close() : this.open())
        }, t.prototype.open = function() {
          var t = this;
          if (!this.options.length) return !1;
          this.opened || this.emit("selectr.open"), this.opened = !0, this.mobileDevice || this.config.nativeDropdown ? (s.addClass(this.container, "native-open"), this.config.data && s.each(this.options, function(t, e) {
            this.el.add(e)
          }, this)) : (s.addClass(this.container, "open"), r.call(this), this.invert(), this.tree.scrollTop = 0, s.removeClass(this.container, "notice"), this.selected.setAttribute("aria-expanded", !0), this.tree.setAttribute("aria-hidden", !1), this.tree.setAttribute("aria-expanded", !0), this.config.searchable && !this.config.taggable && setTimeout(function() {
            t.input.focus(), t.input.tabIndex = 0
          }, 10))
        }, t.prototype.close = function() {
          if (this.opened && this.emit("selectr.close"), this.navigating = this.opened = !1, this.mobileDevice || this.config.nativeDropdown) s.removeClass(this.container, "native-open");
          else {
            var t = s.hasClass(this.container, "notice");
            this.config.searchable && !t && (this.input.blur(), this.input.tabIndex = -1, this.searching = !1), t && (s.removeClass(this.container, "notice"), this.notice.textContent = ""), s.removeClass(this.container, "open"), s.removeClass(this.container, "native-open"), this.selected.setAttribute("aria-expanded", !1), this.tree.setAttribute("aria-hidden", !0), this.tree.setAttribute("aria-expanded", !1), s.truncate(this.tree), c.call(this), this.selected.focus()
          }
        }, t.prototype.enable = function() {
          this.disabled = !1, this.el.disabled = !1, this.selected.tabIndex = this.originalIndex, this.el.multiple && s.each(this.tags, function(t, e) {
            e.lastElementChild.tabIndex = 0
          }), s.removeClass(this.container, "selectr-disabled")
        }, t.prototype.disable = function(t) {
          t || (this.el.disabled = !0), this.selected.tabIndex = -1, this.el.multiple && s.each(this.tags, function(t, e) {
            e.lastElementChild.tabIndex = -1
          }), this.disabled = !0, s.addClass(this.container, "selectr-disabled")
        }, t.prototype.reset = function() {
          this.disabled || (this.clear(), this.setSelected(!0), s.each(this.defaultSelected, function(t, e) {
            this.select(e)
          }, this), this.emit("selectr.reset"))
        }, t.prototype.clear = function(t) {
          this.el.multiple ? this.selectedIndexes.length && (t = this.selectedIndexes.slice(), s.each(t, function(t, e) {
            this.deselect(e)
          }, this)) : -1 < this.selectedIndex && this.deselect(this.selectedIndex, t), this.emit("selectr.clear")
        }, t.prototype.serialise = function(t) {
          var e = [];
          return s.each(this.options, function(t, n) {
            var i = {
              value: n.value,
              text: n.textContent
            };
            n.selected && (i.selected = !0), n.disabled && (i.disabled = !0), e[t] = i
          }), t ? JSON.stringify(e) : e
        }, t.prototype.serialize = function(t) {
          return this.serialise(t)
        }, t.prototype.setPlaceholder = function(t) {
          t = t || this.config.placeholder || this.el.getAttribute("placeholder"), this.options.length || (t = this.config.messages.noOptions), this.placeEl.innerHTML = t
        }, t.prototype.paginate = function() {
          if (this.items.length) {
            var t = this;
            return this.pages = this.items.map(function(e, n) {
              return 0 == n % t.config.pagination ? t.items.slice(n, n + t.config.pagination) : null
            }).filter(function(t) {
              return t
            })
          }
        }, t.prototype.setMessage = function(t, e) {
          e && this.close(), s.addClass(this.container, "notice"), this.notice.textContent = t
        }, t.prototype.removeMessage = function() {
          s.removeClass(this.container, "notice"), this.notice.innerHTML = ""
        }, t.prototype.invert = function() {
          var t = s.rect(this.selected);
          t.top + t.height + this.tree.parentNode.offsetHeight > window.innerHeight ? (s.addClass(this.container, "inverted"), this.isInverted = !0) : (s.removeClass(this.container, "inverted"), this.isInverted = !1), this.optsRect = s.rect(this.tree)
        }, t.prototype.getOptionByIndex = function(t) {
          return this.options[t]
        }, t.prototype.getOptionByValue = function(t) {
          for (var e = !1, n = 0, i = this.options.length; n < i; n++)
            if (this.options[n].value.trim() === t.toString().trim()) {
              e = this.options[n];
              break
            } return e
        }, t
      }, t.exports = n("Selectr")
    }),
    na = ls("length"),
    ia = "[\\ud800-\\udfff]",
    sa = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    ra = "\\ud83c[\\udffb-\\udfff]",
    aa = "[^\\ud800-\\udfff]",
    oa = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    ca = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    la = "(?:" + sa + "|" + ra + ")" + "?",
    ua = "[\\ufe0e\\ufe0f]?" + la + ("(?:\\u200d(?:" + [aa, oa, ca].join("|") + ")[\\ufe0e\\ufe0f]?" + la + ")*"),
    da = "(?:" + [aa + sa + "?", sa, oa, ca, ia].join("|") + ")",
    ha = RegExp(ra + "(?=" + ra + ")|" + da + ua, "g");
  var pa = function(t) {
    for (var e = ha.lastIndex = 0; ha.test(t);) ++e;
    return e
  };
  var fa = function(t) {
      return Yr(t) ? pa(t) : na(t)
    },
    ga = "[object Map]",
    ma = "[object Set]";
  var _a = function(t) {
    if (null == t) return 0;
    if (Ne(t)) return Tr(t) ? fa(t) : t.length;
    var e = xn(t);
    return e == ga || e == ma ? t.size : vn(t).length
  };
  const ya = t => {
      let e = js.iframeDocument.querySelectorAll("[data-screen]"),
        n = js.iframeDocument.getElementsByClassName("callback-element");
      for (let t = 0; t < _a(n); t++) !1 === n[t].classList.contains("hide") && n[t].classList.add("hide");
      let i = Ms(e, function(e) {
        return jr(e.getAttribute("data-screen"), `${t}`)
      });
      for (let t = 0; t < _a(i); t++) i[t].classList.remove("hide");
      window.callbackScreen = t
    },
    va = t => {
      const e = t;
      if (("transmitNumToCall" === e.messageType || "transmitNumToCallDelayed" === e.messageType || "dontChangeCallback" === e.messageType || "transmitNumToCallDelayedChange" === e.messageType) && !("transmitNumToCall" === e.messageType && js.iframeDocument.getElementById("rngst_send_callback").disabled || "transmitNumToCallDelayed" === e.messageType && js.iframeDocument.getElementById("rngst_send_callback_delayed").disabled)) {
        if ("transmitNumToCall" === e.messageType && (e.delayed_callback = !1), "dontChangeCallback" === e.messageType) {
          const t = Ms(js.old_data.ordered_calls, function(t) {
            return !0 === jr(e.num_to_call, t.num_to_call)
          });
          return js.iframeDocument.getElementById("rngst_dont_change_time_from").innerHTML = `${t[0].call_date} ${t[0].call_time}`, void ya("DONT_CHANGE_CALL")
        }
        if (e.num_to_call = e.num_to_call.replace(/^(380|\+380)0/, "$1"), e.num_to_call = e.num_to_call.replace(/^(7|\+7)8/, "$1"), "transmitNumToCallDelayed" === e.messageType) {
          const t = Ms(js.old_data.ordered_calls, function(t) {
            return !0 === jr(e.num_to_call, t.num_to_call)
          })[0];
          !0 === Gn(t) && (js.old_data.ordered_calls.push({
            call_date: e.call_date,
            call_time: e.call_time,
            change_allowed: !0,
            num_to_call: e.num_to_call
          }), js.iframeDocument.getElementById("rngst_change_before_time_from").innerHTML = `${e.call_date} ${e.call_time}`, js.iframeDocument.getElementById("rngst_change_after_time_from").innerHTML = `${e.call_date} ${e.call_time}`, ya("ORDERED_NEW_CALL"))
        }
        if ("transmitNumToCallDelayedChange" === e.messageType) {
          const t = Ms(js.old_data.ordered_calls, function(t) {
              return !0 === jr(e.num_to_call, t.num_to_call)
            })[0],
            n = Ms(js.old_data.ordered_calls, function(t) {
              return !1 === jr(e.num_to_call, t.num_to_call)
            });
          t.call_date = e.call_date, t.call_time = e.call_time, n.push(t), js.old_data.ordered_calls = n, ce("rngst_callback", js.old_data, 1800, ee.cookieDomain), js.iframeDocument.getElementById("rngst_change_after_time_from").innerHTML = `${e.call_date} ${e.call_time}`, ya("AFTER_CHANGE_CALLBACK_TIME")
        }
        zs(!0), Os(e, null).then(function() {
          if (js.form.removeChild(js.iframeDocument.getElementById("rngst_callback_form")), "transmitNumToCall" === e.messageType) {
            let e = 0;
            if (e = void 0 === js.old_data.timer ? 30 : parseFloat(js.old_data.timer)) {
              ya("TIMER"), js.iframeDocument.getElementsByClassName("rngst__header")[0].classList.add("hide");
              var t = window.setInterval(() => {
                js.iframeDocument.getElementById("rngst_timer").innerHTML = e.toFixed(2), e <= 0 && (js.iframeDocument.getElementById("rngst_timer").innerHTML = "", ya("WITHOUT_TIME"), clearInterval(t)), e -= .01
              }, 10)
            } else js.iframeDocument.getElementById("rngst_timer").innerHTML = "", ya("WITHOUT_TIME");
            Ve(js.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], () => {
              clearInterval(t)
            }), Ve(js.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], () => {
              clearInterval(t)
            })
          }
          zs(!1)
        }).catch(function() {
          document.addEventListener("DOMContentLoaded", function(t) {
            zs(!1)
          })
        })
      }
    };
  Object.defineProperty(ea.prototype, "mobileDevice", {
    get: () => !1,
    set() {},
    enumerable: !0,
    configurable: !0
  });
  const ba = () => {
      const t = document.getElementById("wrapper_id"),
        e = void 0 !== ee.userSettings.messengers && void 0 !== ee.userSettings.messengers.chat && 1 === ee.userSettings.messengers.chat.enabled;
      ws(js.overlay), ws(js.form, () => {
        t && t.parentNode && t.parentNode.removeChild(t), e || null !== js.button && (void 0 !== ee.callbackSettings.hideCallbackButton && !1 !== ee.callbackSettings.hideCallbackButton || (js.button.style.display = "block"))
      }), Ir(0)
    },
    Ma = () => {
      Ns(`${ee.urls.callback}api/getCallbackForm/`, {
        "data[ua_id]": xs.uaId,
        "data[hash]": ee.ringostatProjectHash,
        "data[form_type]": js.old_data.form_type,
        "data[language]": (() => {
          const t = null === js.old_data || void 0 === js.old_data.language ? js.language : js.old_data.language;
          return Dr.includes(t) ? t : js.old_data.default_language
        })()
      }, function() {
        if (!this.responseText) return;
        const t = document.createElement("iframe"),
          e = document.createElement("div");
        t.src = "", t.title = "title", t.setAttribute("name", "name"), t.setAttribute("id", "id"), t.setAttribute("frameborder", "no"), (t.frameElement || t).style.cssText = "width: 100%; height: 100%; border: 0; display: block; color-scheme: none !important;", e.style.cssText = "width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 2147483646;", e.setAttribute("id", "wrapper_id"), e.appendChild(t);
        const n = document.body.lastChild;
        n.parentNode.insertBefore(e, n.nextSibling), js.iframeDocument = t.contentWindow.document, js.iframeDocument.write(this.responseText), js.iframeDocument.close();
        const i = this.responseText.match(new RegExp('<span class="hide" id="rngst_form_design">(.*)</span>'))[1],
          s = document.createElement("link");
        s.rel = "stylesheet", s.type = "text/css", -1 === ["light", "kyivstar", "classic", "modern", "standard"].indexOf(i) ? s.href = `${ee.urls.backend}callback/css/callback.css` : s.href = `${ee.urls.backend}callback/css/callback_${i}.css?v.20240826`;
        const r = document.createElement("link");
        r.id = "intlLink", r.rel = "stylesheet", r.type = "text/css", r.href = `${ee.urls.backend}static/js/vendors/phone_input/v18/css/intlTelInput.css`;
        const a = document.createElement("link");
        a.id = "intlLinkHead", a.rel = "stylesheet", a.type = "text/css", a.href = `${ee.urls.backend}static/js/vendors/phone_input/v18/css/intlTelInput.css`;
        const o = document.createElement("script");
        o.type = "text/javascript", o.src = `${ee.urls.backend}static/js/vendors/phone_input/v18/js/utils.js`, o.async = !1;
        const c = document.createElement("link");
        c.id = "selectLink", c.rel = "stylesheet", c.type = "text/css", c.href = "https://cdn.jsdelivr.net/gh/mobius1/selectr@latest/dist/selectr.min.css";
        const l = document.createElement("script");
        if (l.type = "text/javascript", l.text = 'var spamModalPopup = document.querySelector(".spam_modal_popup");\nvar closeButton = document.querySelector(".spam_modal_popup_close_button");\nfunction toggleModal() {\n    spamModalPopup.classList.toggle("show_spam_modal_popup");\n}\nfunction windowOnClick(event) {\n    if (event.target === spamModalPopup) {\n        toggleModal();\n    }\n} closeButton.addEventListener("click", toggleModal);\nwindow.addEventListener("click", windowOnClick);', 1 === js.old_data.recaptcha && 0 === js.user_has_recaptcha && (l.text += "\n            var recaptchaPolicyWrapper = document.getElementById('recaptcha_policy');\n            if (recaptchaPolicyWrapper) {\n              recaptchaPolicyWrapper.style.display = 'block';\n            }\n            "), l.async = !1, js.iframeDocument.head.appendChild(s), !!/iphone|ipod|android|ie|blackberry|fennec|nokia|opera mini|windows mobile|windows phone|iemobile/.test(navigator.userAgent.toLowerCase())) {
          document.head.appendChild(a);
          const t = document.createElement("style");
          t.textContent = ".iti--container {z-index: 2147483648;} .iti {width: auto;}", document.head.appendChild(t)
        }
        js.overlay = js.iframeDocument.body.firstElementChild, js.form = js.iframeDocument.body.lastElementChild, js.overlay.style.display = "none", js.form.style.display = "none", s.onload = function() {
          js.overlay.style.display = "flex", js.form.style.display = "flex", Ss(js.overlay), Ss(js.form), Ir(1), js.iframeDocument.head.appendChild(r), document.head.appendChild(o), js.iframeDocument.head.appendChild(c), js.iframeDocument.head.appendChild(l), (() => {
            let t = "",
              e = "",
              n = !0,
              i = js.old_data.is_working_time,
              s = {},
              r = [],
              a = [],
              o = null,
              c = null,
              l = null,
              u = null;
            const d = !!/iphone|ipod|android|ie|blackberry|fennec|nokia|opera mini|windows mobile|windows phone|iemobile/.test(navigator.userAgent.toLowerCase()),
              h = "modern" === js.iframeDocument.getElementById("rngst_form_design").innerHTML,
              p = !!js.iframeDocument.getElementById("rngst_form_departments");
            let f = "";
            if (null !== js.iframeDocument.getElementById("dataForSelect") ? (n = !0, a = JSON.parse(js.iframeDocument.getElementById("dataForSelect").getAttribute("data-datetime"))) : n = !1, d && js.iframeDocument.getElementById("rngst_modalDialog").classList.add("rngst_modal--mobile"), !1 === n && !0 === i ? ya("START_NOT_DELAYED_WORKING") : !1 === n && !1 === i ? ya("START_NOT_DELAYED_NOT_WORKING") : !0 === n && !0 === i ? ya("START_DELAYED_WORKING") : !0 === n && !1 === i && ya("START_DELAYED_NOT_WORKING"), window.itiRngst = Ys(js.iframeDocument.getElementById("rngst_phone_input"), {
                defaultCountry: "auto",
                initialCountry: "auto",
                placeholder: "agressive",
                nationalMode: !0,
                autoHideDialCode: !0,
                formatOnDisplay: !1,
                preferredCountries: ["ua"],
                geoIpLookup: function(t) {
                  fetch("https://geo.ringostat.com/ipinfo").then(t => t.json()).then(e => {
                    var n = e && e.country ? e.country : "ua";
                    t(n)
                  })
                },
                customPlaceholder: function(t, e) {
                  return -1 !== window.location.host.indexOf("peugeot.bg") || -1 !== window.location.host.indexOf("qatest13") ? t = "Номер за връзка" : "ua" === e.iso2 ? t = "067 123 4567" : "ru" === e.iso2 ? t = "8 912 345 67 89" : "by" === e.iso2 && (t = "8 029 345 67 89"), t.replace(/\d( ?)\d( ?)\d( ?)\d$/i, "X$1X$2X$3X")
                }
              }), js.iframeDocument.getElementById("rngst_phone_input").addEventListener("open:countrydropdown", () => {
                if (js.iframeDocument.querySelector(".iti__country[data-country-code='ru'] .iti__country-name")) {
                  const t = js.iframeDocument.querySelector(".iti__country[data-country-code='ru'] .iti__country-name");
                  t.textContent = t.textContent.replace("Russia (Россия)", "russia terrorist state (россия страна-террорист)")
                }
              }), h && d) {
              document.getElementsByTagName("body")[0].style.overflowY = "auto", document.getElementsByTagName("body")[0].style.display = "block";
              const t = js.iframeDocument.getElementById("rngst_phone_input");
              t.style = "pointer-events: none;", t.addEventListener("focus", function(t) {
                t.target.blur()
              });
              const e = js.iframeDocument.getElementsByClassName("rngst_dialpad__item");
              for (let t = 0; t < e.length; t++) Ve(e[t], ["keypress", "touchstart", "click"], t => {
                t.preventDefault(), t.stopPropagation();
                let e = t.target.closest(".rngst_dialpad__item");
                if (e.classList.add("animation-rngst"), setTimeout(function() {
                    e.classList.remove("animation-rngst")
                  }, 100), e.classList.contains("rngst_dialpad__delete")) f = f.slice(0, -1), window.itiRngst.setNumber(f);
                else {
                  let t = e.innerHTML.toString();
                  f += t, window.itiRngst.setNumber(f)
                }
              })
            }
            if (p) {
              const n = null !== js.iframeDocument.querySelector("#regionDepartments") ? JSON.parse(js.iframeDocument.querySelector("#regionDepartments").dataset.regiondepartments) : {},
                i = (t, e) => {
                  let n = e || "";
                  if (void 0 === window.external_dep) {
                    var i = document.createElement("script");
                    i.text = `var external_dep ='${n}';`, document.getElementsByTagName("body")[0].appendChild(i)
                  } else {
                    window.external_dep = n;
                    const t = document.getElementsByTagName("script");
                    for (let e = 0; e < t.length; e++) t[e].innerHTML.includes("external_dep") && (t[e].innerHTML = `var external_dep ='${n}';`)
                  }
                  window.ga("send", "event")
                };
              l = new ea(js.iframeDocument.getElementById("rngst_form_external_departments"), {
                searchable: !1,
                width: "100%",
                defaultSelected: !0,
                customClass: "departments-select"
              }), null !== js.iframeDocument.getElementById("rngst_form_external_region") && ((u = new ea(js.iframeDocument.getElementById("rngst_form_external_region"), {
                searchable: !1,
                width: "100%",
                defaultSelected: !0,
                customClass: "departments-select"
              })).on("selectr.select", function(s) {
                const r = e;
                e = s.value, "" !== s.value && (js.iframeDocument.querySelector(".wrapper-input-region .selectr-selected").style.backgroundColor = "#fff"), t.length > 0 && (i(s.value, ""), l.setValue(""), t = ""), l.close();
                let a = [];
                "" !== e && Object.entries(n[e]).forEach(t => {
                  let [e, n] = t;
                  a.push({
                    value: n,
                    text: e
                  })
                });
                const o = "" === r ? 0 : Object.keys(n[r]).length;
                if (o > 1) {
                  const t = Array.from(Array(o + 1).keys()).slice(1);
                  l.remove(t)
                }
                l.add(a)
              }), u.on("selectr.open", function() {
                d && l && l.close()
              })), l.on("selectr.select", function(n) {
                if (t = n.value, "" !== n.value) {
                  const t = js.iframeDocument.querySelector(".wrapper-input-departments .selectr-selected");
                  t && (t.style.backgroundColor = "#fff")
                }
                i(e, n.value)
              }), l.on("selectr.open", function() {
                d && u && u.close()
              })
            }
            if (!0 === n) {
              !0 === h && !1 === d && (js.iframeDocument.getElementById("for-select-mobile").innerHTML = ""), h && d && (js.iframeDocument.getElementById("select-modern").innerHTML = "");
              for (let t = 0; t <= a.length; t++)
                if (void 0 !== a[t]) {
                  let e = [];
                  for (let n = 0; n <= a[t].availableTime.length; n++) void 0 !== a[t].availableTime[n] && e.push({
                    id: n,
                    text: a[t].availableTime[n],
                    value: a[t].availableTime[n]
                  });
                  s[a[t].fullDate] = e, r.push({
                    text: a[t].title,
                    value: a[t].fullDate
                  })
                } o = new ea(js.iframeDocument.getElementById("selectDelayedDay"), {
                searchable: !1,
                width: "50%",
                data: r,
                defaultSelected: !0,
                customClass: "day-select"
              }), c = new ea(js.iframeDocument.getElementById("selectDelayedTime"), {
                searchable: !1,
                width: "50%",
                data: s[`${a[0].fullDate}`],
                defaultSelected: !0,
                customClass: "time-select"
              }), o.on("selectr.select", function(t) {
                c.removeAll(), c.add(s[t.value]), c.setValue(s[t.value][0].value)
              })
            }
            Ve(js.iframeDocument.getElementById("rngst_delayed_button"), ["keypress", "touchstart", "click"], t => {
              t.preventDefault(), ya("DELAYED_WORKING_CHOICE")
            }), Ve(js.iframeDocument.getElementById("rngst_send_callback_now"), ["keypress", "touchstart", "click"], t => {
              if (t.preventDefault(), "keypress" !== t.type || 13 === t.which)
                if (p)
                  if (!ta(js.iframeDocument.getElementById("rngst_phone_input").value) || u && u.getValue && "" === u.getValue() || l && l.getValue && "" === l.getValue()) {
                    if (ta(js.iframeDocument.getElementById("rngst_phone_input").value) || js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide"), u && u.getValue && "" === u.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-region .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                    if (l && l.getValue && "" === l.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-departments .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                  } else if (window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/)) {
                var e = {
                  num_to_call: window.itiRngst.getNumber(),
                  messageType: "transmitNumToCall",
                  name: js.iframeDocument.getElementById("rngst_name_field").value || ""
                };
                va(e)
              } else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide");
              else ta(js.iframeDocument.getElementById("rngst_phone_input").value) && window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/) ? (e = {
                num_to_call: window.itiRngst.getNumber(),
                messageType: "transmitNumToCall",
                name: js.iframeDocument.getElementById("rngst_name_field").value || ""
              }, va(e)) : js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide")
            }), Ve(js.iframeDocument.getElementById("rngst_send_callback"), ["keypress", "touchstart", "click"], t => {
              if (t.preventDefault(), "keypress" !== t.type || 13 === t.which)
                if (p)
                  if (!ta(js.iframeDocument.getElementById("rngst_phone_input").value) || u && u.getValue && "" === u.getValue() || l && l.getValue && "" === l.getValue()) {
                    if (ta(js.iframeDocument.getElementById("rngst_phone_input").value) || js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide"), u && u.getValue && "" === u.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-region .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                    if (l && l.getValue && "" === l.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-departments .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                  } else if (window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/)) {
                var e = {
                  num_to_call: window.itiRngst.getNumber(),
                  messageType: "transmitNumToCall",
                  name: js.iframeDocument.getElementById("rngst_name_field").value || ""
                };
                va(e)
              } else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide");
              else if (ta(js.iframeDocument.getElementById("rngst_phone_input").value))
                if (window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/))
                  if ("DELAYED_WORKING_CHOICE" === window.callbackScreen || "START_DELAYED_NOT_WORKING" === window.callbackScreen) va({
                    num_to_call: window.itiRngst.getNumber(),
                    messageType: "transmitNumToCallDelayed",
                    name: js.iframeDocument.getElementById("rngst_name_field").value || "",
                    delayed_callback: n,
                    call_date: o.getValue(),
                    call_time: c.getValue()
                  });
                  else {
                    if (!1 === i && !1 === n) return;
                    va({
                      num_to_call: window.itiRngst.getNumber(),
                      messageType: "transmitNumToCall",
                      name: js.iframeDocument.getElementById("rngst_name_field").value || ""
                    })
                  }
              else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide");
              else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide")
            }), Ve(js.iframeDocument.getElementById("rngst_send_callback_delayed"), ["keypress", "touchstart", "click"], t => {
              if (t.preventDefault(), "keypress" !== t.type || 13 === t.which)
                if (p)
                  if (!ta(js.iframeDocument.getElementById("rngst_phone_input").value) || u && u.getValue && "" === u.getValue() || l && l.getValue && "" === l.getValue()) {
                    if (ta(js.iframeDocument.getElementById("rngst_phone_input").value) || js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide"), u && u.getValue && "" === u.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-region .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                    if (l && l.getValue && "" === l.getValue()) {
                      const t = js.iframeDocument.querySelector(".wrapper-input-departments .selectr-selected");
                      t && (t.style.backgroundColor = "#f95252")
                    }
                  } else if (window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/)) {
                var e = {
                  num_to_call: window.itiRngst.getNumber(),
                  messageType: "transmitNumToCallDelayed",
                  name: js.iframeDocument.getElementById("rngst_name_field").value || "",
                  delayed_callback: n,
                  call_date: o.getValue(),
                  call_time: c.getValue()
                };
                const t = Ms(js.old_data.ordered_calls, function(t) {
                  return !0 === jr(window.itiRngst.getNumber(), t.num_to_call)
                })[0];
                !1 === Gn(t) && !1 === t.change_allowed ? ya("REORDER_CALL_DENIED") : !1 === Gn(t) && !0 === t.change_allowed ? (js.iframeDocument.getElementById("rngst_change_before_time_from").innerHTML = `${t.call_date} ${t.call_time}`, js.iframeDocument.getElementById("rngst_change_after_time_from").innerHTML = `${t.call_date} ${t.call_time}`, js.iframeDocument.getElementById("rngst_change_time_to").innerHTML = `${e.call_date} ${e.call_time}`, ya("ORDERED_CALL")) : va(e)
              } else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide");
              else if (ta(js.iframeDocument.getElementById("rngst_phone_input").value))
                if (window.itiRngst.isValidNumber() && -1 === js.iframeDocument.getElementById("rngst_phone_input").value.search(/[a-zA-Zа-яА-Я]/)) {
                  e = {
                    num_to_call: window.itiRngst.getNumber(),
                    messageType: "transmitNumToCallDelayed",
                    name: js.iframeDocument.getElementById("rngst_name_field").value || "",
                    delayed_callback: n,
                    call_date: o.getValue(),
                    call_time: c.getValue()
                  };
                  const t = Ms(js.old_data.ordered_calls, function(t) {
                    return !0 === jr(window.itiRngst.getNumber(), t.num_to_call)
                  })[0];
                  !1 === Gn(t) && !1 === t.change_allowed ? ya("REORDER_CALL_DENIED") : !1 === Gn(t) && !0 === t.change_allowed ? (js.iframeDocument.getElementById("rngst_change_before_time_from").innerHTML = `${t.call_date} ${t.call_time}`, js.iframeDocument.getElementById("rngst_change_after_time_from").innerHTML = `${t.call_date} ${t.call_time}`, js.iframeDocument.getElementById("rngst_change_time_to").innerHTML = `${e.call_date} ${e.call_time}`, ya("ORDERED_CALL")) : va(e)
                } else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide");
              else js.iframeDocument.getElementsByClassName("rngst_error_text")[0].classList.remove("hide")
            }), Ve(js.iframeDocument.getElementById("rngst_change_callback"), ["keypress", "touchstart", "click"], t => {
              t.preventDefault();
              var e = {
                num_to_call: window.itiRngst.getNumber(),
                messageType: "transmitNumToCallDelayedChange",
                name: js.iframeDocument.getElementById("rngst_name_field").value || "",
                delayed_callback: n,
                call_date: o.getValue(),
                call_time: c.getValue()
              };
              va(e)
            }), Ve(js.iframeDocument.getElementById("rngst_dont_change_callback"), ["keypress", "touchstart", "click"], t => {
              t.preventDefault();
              var e = {
                num_to_call: window.itiRngst.getNumber(),
                messageType: "dontChangeCallback"
              };
              va(e)
            })
          })()
        }, Ve(js.iframeDocument.getElementById("rngst_close"), ["mousedown", "touchstart", "keydown"], ba), Ve(js.iframeDocument.getElementById("rngst_overlay"), ["mousedown", "touchstart", "keydown"], ba), ge(`getCallbackForm  Success : ${this.status} - ${this.statusText}`)
      }, function() {
        ge(`getCallbackForm  Error : ${this.status} - ${this.statusText}`)
      })
    },
    Na = () => {
      clearTimeout(br.interval)
    },
    Da = () => {
      let t = !0;
      const e = Ds(),
        n = js.old_data.default_language,
        i = 0 === _a(js.old_data.forms) ? [] : js.old_data.forms,
        s = t => Ms(i, e => e.language === t && !0 === e.delayed_callback_enabled && "forced" === e.form_type),
        r = s(e),
        a = s(n);
      return (() => {
        const t = document.getElementsByClassName("rngst_phone_button")[0];
        null !== t && void 0 !== t && document.body.removeChild(t)
      })(), Gn(r) && Gn(a) && !1 === js.old_data.is_working_time && (t = !1), !0 === js.old_data.ip_is_blocked && !0 === js.old_data.inactive_project && (t = !1), !0 === ee.callbackSettings.CallbackOff && (Nr(), t = !1), !0 === ee.callbackSettings.CallbackOffOnPage && (Na(), t = !1), ee.callbackSettings.hideCallbackButton && (() => {
        const t = document.getElementsByClassName("rngst_phone_button")[0];
        t && !t.classList.contains("dropdown") && document.body.removeChild(t)
      })(), !1 === js.old_data.callbackNumber && (t = !1), ge(`isNeedCallback result: ${t}`), t
    };
  let Ia = null;
  const Sa = () => {
      null === document.body || void 0 === document.body ? (ge("No document.body. Start interval to check"), Ia = setTimeout(() => {
        Sa()
      }, 200)) : (ge("There is a document.body. Stopping interval and adding callback button"), clearTimeout(Ia), Ia = null, document.body.insertAdjacentHTML("beforeend", '<div class="rngst_phone_button"><div class="rngst_phone_icon"></div><div class="rngst_phone_circle"></div><div class="rngst_phone_circle2"></div><div class="rngst_phone_fill"></div><div class="rngst_phone_body"></div></div>'))
    },
    wa = ["mousedown", "click"],
    Ea = ["mousedown", "mouseup", "touchstart", "touchend", "keydown", "keyup", "click", "contextmenu", "dblclick"];
  let ka = null,
    Ta = null;
  const xa = void 0 !== ee.userSettings.messengers && void 0 !== ee.userSettings.messengers.chat && 1 === ee.userSettings.messengers.chat.enabled,
    Ca = () => {
      !0 === Gn(document.getElementsByClassName("rngst_phone_button")[0]) && null === ka ? (ge("No callback button. Start interval to check"), ka = setTimeout(() => {
        Ca()
      }, 200)) : (clearTimeout(ka), ka = null, ge("There is a callback button. Stopping interval and set button to options"), js.button = document.getElementsByClassName("rngst_phone_button")[0], js.icon = document.getElementsByClassName("rngst_phone_icon")[0])
    },
    Aa = () => {
      xa || (!0 === Gn(js.icon) && null === Ta ? (ge("No callback button in options. Start interval to check"), Ta = setTimeout(() => {
        Aa()
      }, 200)) : (clearTimeout(Ta), Ta = null, ge("There is a callback button. Stopping interval and addEvents"), Ve(js.icon, wa, t => {
        if ("click" === t.type || "mousedown" === t.type)
          if (nn(ee, js.old_data, "all")) {
            document.getElementsByClassName("dropdownMessengers")[0].classList.add("dropdownMessengers-show")
          } else js.old_data.form_type = "forced", js.button.style.display = "none", Nr(), Ma()
      })))
    },
    ja = () => {
      const t = !0 === nn(ee, js.old_data, "all"),
        {
          is_callback_by_duration: e,
          is_working_time: n,
          default_language: i,
          forms: s
        } = js.old_data,
        r = !1 === js.old_data.ip_is_blocked && !1 === js.old_data.inactive_project,
        a = void 0 !== ee.callbackSettings.hideCallbackButton && ee.callbackSettings.hideCallbackButton,
        o = void 0 !== ee.callbackSettings.CallbackOffOnPage && ee.callbackSettings.CallbackOffOnPage,
        c = void 0 !== ee.callbackSettings.CallbackOff && ee.callbackSettings.CallbackOff,
        l = void 0 === js.old_data.is_callback_by_click || !0 === js.old_data.is_callback_by_click,
        u = !0 === Da() && !1 === o && !1 === c,
        d = Ms(s, t => (null === t || void 0 === t ? void 0 : t.language) === i),
        h = _s(d, t => (null === t || void 0 === t ? void 0 : t.delayed_callback_enabled) && "default" === (null === t || void 0 === t ? void 0 : t.form_type)),
        p = e && (n || h);
      if (xa || !0 === t && !0 === r && (() => {
          const t = document.getElementsByTagName("head")[0],
            e = document.createElement("style");
          if (e.innerHTML = '.dropdown-content-rngst {    display: none;    position: absolute;    background-color: transparent;    z-index: 1;}.dropdown-content-rngst a {    color: black;    text-decoration: none;    display: block;}.messengers-icon {   width:100%;   height: 100%;}.messengers-icon-btn {   width: 50px;   height: 50px;   cursor: pointer;   padding: 0;   border: none;   background: none;   margin: 5px 0;}.dropdownMessengers.dropdownMessengers-show .dropdown-content-rngst {   background: #EDEDED;   padding: 20px 17px;   border-radius: 60px;   bottom: 0;    left: 57px;   z-index: 99999999;   display: flex;   align-items: flex-end;   flex-direction: column;   justify-content: space-around;}.dropdownMessengers.dropdownMessengers-show .dropbtn { display: none; }.messengers-icon-btn.messengers-icon-btn--tel {   padding: 0;   background: transparent;   border: none;}.messengers-icon-btn.messengers-icon-btn--tel:active, .messengers-icon-btn.messengers-icon-btn--tel:focus {   outline: none;}.rngst_phone_button.dropdownMessengers .rngst_phone_icon {    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzOSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48cGF0aCBkPSJNMjMuNDQ1MiAyNC4yMjcxTDIwLjcxMDIgMjEuNDkyMUMxOS45NTYxIDIwLjczODEgMTguNzI5MSAyMC43MzgxIDE3Ljk3NTEgMjEuNDkyMUwxNi43MzE5IDIyLjczNTNDMTYuMTYwNyAyMy4zMDY1IDE1LjIzMTIgMjMuMzA2NCAxNC42NjAxIDIyLjczNTVMOS4yNzE1OSAxNy4zNDI0QzguNjk5MDEgMTYuNzY5OCA4LjY5ODkyIDE1Ljg0MyA5LjI3MTU5IDE1LjI3MDRDOS40NzE4NCAxNS4wNzAxIDEwLjA0NjggMTQuNDk1MSAxMC41MTQ4IDE0LjAyNzJDMTEuMjY1NSAxMy4yNzY1IDExLjI3NiAxMi4wNTMzIDEwLjUxNCAxMS4yOTE1TDcuNzc5NzQgOC41NjU3NUM3LjAyNTY5IDcuODExNzUgNS43OTg3NSA3LjgxMTc1IDUuMDQ2NzIgOC41NjM3OEM0LjQ4Mzk4IDkuMTIxNjIgNC4zMDI0NyA5LjMwMTU4IDQuMDUwMTUgOS41NTE3MUMxLjMzMDk2IDEyLjI3MDkgMS4zMzA5NiAxNi42OTUyIDQuMDUwMDIgMTkuNDE0M0wxMi41ODc5IDI3Ljk1NjdDMTUuMzEzNSAzMC42ODIzIDE5LjcyNDggMzAuNjgyNSAyMi40NTA2IDI3Ljk1NjdMMjMuNDQ1MiAyNi45NjIxQzI0LjE5OTMgMjYuMjA4MSAyNC4xOTkzIDI0Ljk4MTIgMjMuNDQ1MiAyNC4yMjcxWk01Ljk1NjQxIDkuNDc3NDJDNi4yMDc3NCA5LjIyNjA4IDYuNjE2NjUgOS4yMjYwNCA2Ljg2ODggOS40NzgxTDkuNjAzMTEgMTIuMjAzOEM5Ljg1NTA1IDEyLjQ1NTggOS44NTUwNSAxMi44NjM1IDkuNjAzMTEgMTMuMTE1NUw5LjE0NzI0IDEzLjU3MTNMNS41MDI5IDkuOTI2OThMNS45NTY0MSA5LjQ3NzQyWk0xMy40OTk4IDI3LjA0NTFMNC45NjE4MSAxOC41MDI3QzIuODU4MDUgMTYuMzk4OSAyLjc0MjQyIDEzLjA5NTUgNC42MDYxOSAxMC44NTM2TDguMjM5OTYgMTQuNDg3NEM3LjI4NTE1IDE1LjU2OTggNy4zMjQ5NCAxNy4yMTkxIDguMzU5NzEgMTguMjUzOUwxMy43NDgxIDIzLjY0NjhDMTMuNzQ4MSAyMy42NDY4IDEzLjc0ODIgMjMuNjQ2OSAxMy43NDgyIDIzLjY0NjlDMTQuNzgxOSAyNC42ODA2IDE2LjQzMTEgMjQuNzIzIDE3LjUxNDkgMjMuNzY2OUwyMS4xNDg3IDI3LjQwMDhDMTguOTEzOSAyOS4yNjEzIDE1LjYxOCAyOS4xNjM0IDEzLjQ5OTggMjcuMDQ1MVpNMjIuNTMzNiAyNi4wNTA1TDIyLjA3NzcgMjYuNTA2M0wxOC40MzEgMjIuODU5NkwxOC44ODY4IDIyLjQwMzhDMTkuMTM4MiAyMi4xNTI0IDE5LjU0NzEgMjIuMTUyNCAxOS43OTg1IDIyLjQwMzhMMjIuNTMzNSAyNS4xMzg4QzIyLjc4NDkgMjUuMzkwMiAyMi43ODQ5IDI1Ljc5OTIgMjIuNTMzNiAyNi4wNTA1WiIgZmlsbD0id2hpdGUiLz48L2c+PHBhdGggZD0iTTMyLjA2NjQgNi40ODc5MUgyNy41NTQ3VjMuMjY1MjVDMjcuNTU0NyAyLjE5OTA2IDI2LjY4NzMgMS4zMzE2NSAyNS42MjExIDEuMzMxNjVIMTMuOTMzNkMxMi44Njc0IDEuMzMxNjUgMTIgMi4xOTkwNiAxMiAzLjI2NTI1VjEwLjk5OTZDMTIgMTIuMDY1OCAxMi44Njc0IDEyLjkzMzIgMTMuOTMzNiAxMi45MzMySDE0LjU3ODFWMTQuODY2OEMxNC41NzgxIDE1LjM4MyAxNS4xNTQ3IDE1LjY4NjcgMTUuNTgwMiAxNS40MDMxTDE4LjQ0NTMgMTMuNDkzVjE2LjE1NTlDMTguNDQ1MyAxNy4yMjIxIDE5LjMxMjcgMTguMDg5NSAyMC4zNzg5IDE4LjA4OTVIMjYuNzE1TDMwLjQxOTggMjAuNTU5NEMzMC44NDU5IDIwLjg0MzUgMzEuNDIxOSAyMC41Mzk0IDMxLjQyMTkgMjAuMDIzMVYxOC4wODk1SDMyLjA2NjRDMzMuMTMyNiAxOC4wODk1IDM0IDE3LjIyMjEgMzQgMTYuMTU1OVY4LjQyMTUxQzM0IDcuMzU1MzIgMzMuMTMyNiA2LjQ4NzkxIDMyLjA2NjQgNi40ODc5MVpNMTguNzMwNiAxMS43NTM2QzE4LjczIDExLjc1NCAxOC43MjkzIDExLjc1NDQgMTguNzI4NyAxMS43NTQ4TDE1Ljg2NzIgMTMuNjYyNVYxMi4yODg3QzE1Ljg2NzIgMTEuOTMyNyAxNS41Nzg2IDExLjY0NDIgMTUuMjIyNyAxMS42NDQySDEzLjkzMzZDMTMuNTc4MiAxMS42NDQyIDEzLjI4OTEgMTEuMzU1IDEzLjI4OTEgMTAuOTk5NlYzLjI2NTI1QzEzLjI4OTEgMi45MDk4NSAxMy41NzgyIDIuNjIwNzIgMTMuOTMzNiAyLjYyMDcySDI1LjYyMTFDMjUuOTc2NSAyLjYyMDcyIDI2LjI2NTcgMi45MDk4NSAyNi4yNjU3IDMuMjY1MjVWMTAuOTk5NkMyNi4yNjU3IDExLjM1NSAyNS45NzY1IDExLjY0NDIgMjUuNjIxMSAxMS42NDQySDE5LjA4OTlDMTguOTY1MSAxMS42NDQyIDE4LjgzNjIgMTEuNjgyOCAxOC43MzA2IDExLjc1MzZaTTMyLjcxMSAxNi4xNTU5QzMyLjcxMSAxNi41MTEzIDMyLjQyMTggMTYuODAwNCAzMi4wNjY0IDE2LjgwMDRIMzAuNzc3NEMzMC40MjE0IDE2LjgwMDQgMzAuMTMyOCAxNy4wODkgMzAuMTMyOCAxNy40NDVWMTguODE4OEwyNy4yNjc3IDE2LjkwODdDMjcuMTYxOCAxNi44MzgxIDI3LjAzNzQgMTYuODAwNCAyNi45MTAyIDE2LjgwMDRIMjAuMzc4OUMyMC4wMjM1IDE2LjgwMDQgMTkuNzM0NCAxNi41MTEzIDE5LjczNDQgMTYuMTU1OVYxMi45MzMySDI1LjYyMTFDMjYuNjg3MyAxMi45MzMyIDI3LjU1NDcgMTIuMDY1OCAyNy41NTQ3IDEwLjk5OTZWNy43NzY5OEgzMi4wNjY0QzMyLjQyMTggNy43NzY5OCAzMi43MTEgOC4wNjYxMSAzMi43MTEgOC40MjE1MVYxNi4xNTU5WiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMjAuMzc4OSA3Ljc3Njk4SDE1LjIyMjdDMTQuODY2NyA3Ljc3Njk4IDE0LjU3ODEgOC4wNjU1NiAxNC41NzgxIDguNDIxNTFDMTQuNTc4MSA4Ljc3NzQ2IDE0Ljg2NjcgOS4wNjYwNCAxNS4yMjI3IDkuMDY2MDRIMjAuMzc4OUMyMC43MzQ5IDkuMDY2MDQgMjEuMDIzNCA4Ljc3NzQ2IDIxLjAyMzQgOC40MjE1MUMyMS4wMjM0IDguMDY1NTYgMjAuNzM0OSA3Ljc3Njk4IDIwLjM3ODkgNy43NzY5OFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTI0LjMzMjEgNS4xOTg4NEgxNS4yMjI3QzE0Ljg2NjcgNS4xOTg4NCAxNC41NzgxIDUuNDg3NDIgMTQuNTc4MSA1Ljg0MzM3QzE0LjU3ODEgNi4xOTkzMiAxNC44NjY3IDYuNDg3OSAxNS4yMjI3IDYuNDg3OUgyNC4zMzIxQzI0LjY4OCA2LjQ4NzkgMjQuOTc2NiA2LjE5OTMyIDI0Ljk3NjYgNS44NDMzN0MyNC45NzY2IDUuNDg3NDIgMjQuNjg4IDUuMTk4ODQgMjQuMzMyMSA1LjE5ODg0WiIgZmlsbD0id2hpdGUiLz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cmVjdCB4PSIyIiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");}.messengers-icon-btn {  position: relative!important;  display: inline-block!important;  padding: 0!important;}.messengers-icon-btn .tooltiptext, .rngst_phone_body--tooltip .tooltiptext {   visibility: hidden;    position: absolute;    width: 120px;    background-color: #fff;    color: #424242;    font-size: 14px;    text-align: center;    font-family: "Open Sans", sans-serif;    font-style: normal;    padding: 5px 0;    border-radius: 6px;    z-index: 1;    opacity: 0;    transition: opacity 0.3s;    bottom: 11px;    right: 125%;    white-space: pre-wrap;}.rngst_phone_body--tooltip .tooltiptext {   width: 200px;}.messengers-icon-btn .tooltiptext::after, .rngst_phone_body--tooltip .tooltiptext::after {content: "";    position: absolute;    top: 50%;    left: 100%;    margin-top: -5px;    border-width: 5px;    border-style: solid;    border-color: transparent transparent transparent #fff;    white-space: normal;}.messengers-icon-btn:hover .tooltiptext, .rngst_phone_body--tooltip:hover .tooltiptext {  visibility: visible;  opacity: 1;}', t.append(e), nn(ee, js.old_data)) {
            let t = document.createElement("div"),
              e = document.createElement("div"),
              n = document.createElement("div"),
              i = document.createElement("div"),
              s = document.createElement("div"),
              r = document.createElement("div"),
              a = document.createElement("div"),
              o = document.createElement("div"),
              c = js.language && "ru" === js.language || js.language && "uk" === js.language || js.language && "bg" === js.language || js.language && "pl" === js.language ? js.tooltipText[js.language] : js.tooltipText.en;
            n.innerHTML = '<span class="tooltiptext">' + c + "</span>", t.appendChild(e), n.classList.add("rngst_phone_body--tooltip"), e.classList.add("dropbtn"), t.classList.add("rngst_phone_button"), t.classList.add("dropdownMessengers"), o.classList.add("rngst_phone_button_inner"), n.classList.add("rngst_phone_icon"), i.classList.add("rngst_phone_circle"), s.classList.add("rngst_phone_circle2"), r.classList.add("rngst_phone_fill"), a.classList.add("rngst_phone_body"), o.appendChild(n), o.appendChild(i), o.appendChild(s), o.appendChild(r), o.appendChild(a), js.button = o, js.icon = n, e.appendChild(o);
            let l = document.createElement("div");
            if (t.appendChild(l), l.classList.add("dropdown-content-rngst"), nn(ee, js.old_data, "telegram")) {
              let t = document.createElement("a");
              t.classList.add("messengers-icon-btn"), t.href = "https://telegram.me/" + ee.userSettings.messengers.telegram.bot_name + "?start=u" + Ts(`${xs.clientId}`) + "vid" + Ts(Ye.pageViewId), t.target = "_blank", t.innerHTML = '<img alt="Telegram" class="messengers-icon messengers-icon-telegram" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEMxMy40Mjk3IDAgMCAxMy40Mjk3IDAgMzBDMCA0Ni41NzAzIDEzLjQyOTcgNjAgMzAgNjBDNDYuNTcwMyA2MCA2MCA0Ni41NzAzIDYwIDMwQzYwIDEzLjQyOTcgNDYuNTcwMyAwIDMwIDBaIiBmaWxsPSIjMjlCNkY2Ii8+PHBhdGggZD0iTTQ0Ljc1ODMgMTYuNDkwN0wzOS4wOTggNDVDMzkuMDk4IDQ1IDM4Ljg1NiA0Ni4zMDQ0IDM3LjIyMTEgNDYuMzA0NEMzNi4zNDc1IDQ2LjMwNDQgMzUuODk4OSA0NS44OTY3IDM1Ljg5ODkgNDUuODk2N0wyMy42Mzk5IDM1Ljg1NzlMMTcuNjQzMSAzMi44NzY2TDkuOTQwNjIgMzAuODU2QzkuOTQwNjIgMzAuODU2IDguNTcxMjkgMzAuNDY1OCA4LjU3MTI5IDI5LjM0NzhDOC41NzEyOSAyOC40MTYyIDkuOTgxOTQgMjcuOTczNiA5Ljk4MTk0IDI3Ljk3MzZMNDIuMTkwOCAxNS4zNDk0QzQyLjE4NDkgMTUuMzQ5NCA0My4xNzA2IDE1IDQzLjg5MDcgMTVDNDQuMzMzMyAxNSA0NC44MzUgMTUuMTg2MyA0NC44MzUgMTUuNzQ1M0M0NC44MzUgMTYuMTE4IDQ0Ljc1ODMgMTYuNDkwNyA0NC43NTgzIDE2LjQ5MDdaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yOC4zNTIgMzkuNjg2OEwyMy4yNTk5IDQ0LjgxNkMyMy4yNTk5IDQ0LjgxNiAyMy4wMzkyIDQ0Ljk4ODIgMjIuNzQzMSA0NS4wMDAxQzIyLjYzODYgNDUuMDAwMSAyMi41MjgzIDQ0Ljk4MjMgMjIuNDE4IDQ0LjkzNDhMMjMuODUyMSAzNS44Njk2TDI4LjM1MiAzOS42ODY4WiIgZmlsbD0iI0IwQkVDNSIvPjxwYXRoIGQ9Ik0zOC43NDg1IDIxLjE2NDFDMzguNDg5NCAyMC44MzMzIDM4LjAxODUgMjAuNzc0MiAzNy42ODg4IDIxLjAyMjNMMTcuODAxOCAzMi45NjY5QzE3LjgwMTggMzIuOTY2OSAyMC45NzUgNDEuODc1MSAyMS40NTc3IDQzLjQxNjlDMjEuOTQ2NCA0NC45NjQ2IDIyLjMzNDkgNDUuMDAwMSAyMi4zMzQ5IDQ1LjAwMDFMMjMuNzg5MSAzNS45Nzk2TDM4LjYwNzIgMjIuMjIxNUMzOC45MzY5IDIxLjk3MzQgMzguOTk1NyAyMS40OTQ5IDM4Ljc0ODUgMjEuMTY0MVoiIGZpbGw9IiNDRkQ4REMiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMzAgMEMxMy40Mjk3IDAgMCAxMy40Mjk3IDAgMzBDMCA0Ni41NzAzIDEzLjQyOTcgNjAgMzAgNjBDNDYuNTcwMyA2MCA2MCA0Ni41NzAzIDYwIDMwQzYwIDEzLjQyOTcgNDYuNTcwMyAwIDMwIDBaIiBmaWxsPSIjMjlCNkY2Ii8+PHBhdGggZD0iTTQ0Ljc1ODMgMTYuNDkwN0wzOS4wOTggNDVDMzkuMDk4IDQ1IDM4Ljg1NiA0Ni4zMDQ0IDM3LjIyMTEgNDYuMzA0NEMzNi4zNDc1IDQ2LjMwNDQgMzUuODk4OSA0NS44OTY3IDM1Ljg5ODkgNDUuODk2N0wyMy42Mzk5IDM1Ljg1NzlMMTcuNjQzMSAzMi44NzY2TDkuOTQwNjIgMzAuODU2QzkuOTQwNjIgMzAuODU2IDguNTcxMjkgMzAuNDY1OCA4LjU3MTI5IDI5LjM0NzhDOC41NzEyOSAyOC40MTYyIDkuOTgxOTQgMjcuOTczNiA5Ljk4MTk0IDI3Ljk3MzZMNDIuMTkwOCAxNS4zNDk0QzQyLjE4NDkgMTUuMzQ5NCA0My4xNzA2IDE1IDQzLjg5MDcgMTVDNDQuMzMzMyAxNSA0NC44MzUgMTUuMTg2MyA0NC44MzUgMTUuNzQ1M0M0NC44MzUgMTYuMTE4IDQ0Ljc1ODMgMTYuNDkwNyA0NC43NTgzIDE2LjQ5MDdaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yOC4zNTExIDM5LjY4NjhMMjMuMjU4OSA0NC44MTZDMjMuMjU4OSA0NC44MTYgMjMuMDM4MyA0NC45ODgyIDIyLjc0MjEgNDUuMDAwMUMyMi42Mzc2IDQ1LjAwMDEgMjIuNTI3MyA0NC45ODIzIDIyLjQxNyA0NC45MzQ4TDIzLjg1MTIgMzUuODY5NkwyOC4zNTExIDM5LjY4NjhaIiBmaWxsPSIjQjBCRUM1Ii8+PHBhdGggZD0iTTM4Ljc0OTQgMjEuMTY0MUMzOC40OTA0IDIwLjgzMzMgMzguMDE5NCAyMC43NzQyIDM3LjY4OTcgMjEuMDIyM0wxNy44MDI3IDMyLjk2NjlDMTcuODAyNyAzMi45NjY5IDIwLjk3NTkgNDEuODc1MSAyMS40NTg3IDQzLjQxNjlDMjEuOTQ3MyA0NC45NjQ2IDIyLjMzNTkgNDUuMDAwMSAyMi4zMzU5IDQ1LjAwMDFMMjMuNzkgMzUuOTc5NkwzOC42MDgyIDIyLjIyMTVDMzguOTM3OCAyMS45NzM0IDM4Ljk5NjcgMjEuNDk0OSAzOC43NDk0IDIxLjE2NDFaIiBmaWxsPSIjQ0ZEOERDIi8+PC9zdmc+" /><span class="tooltiptext">Telegram</span>', l.appendChild(t)
            }
            if (nn(ee, js.old_data, "viber")) {
              let t = document.createElement("a");
              t.classList.add("messengers-icon-btn"), t.href = "viber://pa?chatURI=" + ee.userSettings.messengers.viber.bot_name + "&context=u" + Ts(`${xs.clientId}`) + "vid" + Ts(Ye.pageViewId), t.target = "_blank", t.innerHTML = '<img alt="Viber" class="messengers-icon messengers-icon-viber" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAzMEMwIDQ2LjU2ODUgMTMuNDMxNSA2MCAzMCA2MEM0Ni41Njg1IDYwIDYwIDQ2LjU2ODUgNjAgMzBDNjAgMTMuNDMxNSA0Ni41Njg1IDAgMzAgMEMxMy40MzE1IDAgMCAxMy40MzE1IDAgMzBaIiBmaWxsPSIjN0QzREFGIi8+PHBhdGggZD0iTTQ4Ljk3NTggMTkuMzQwNUw0OC45NjM5IDE5LjI5MzFDNDguMDA1NSAxNS40MTg1IDQzLjY4NDUgMTEuMjYwOCAzOS43MTY0IDEwLjM5NThMMzkuNjcxNiAxMC4zODY2QzMzLjI1MzMgOS4xNjIxNiAyNi43NDU1IDkuMTYyMTYgMjAuMzI4NiAxMC4zODY2TDIwLjI4MjUgMTAuMzk1OEMxNi4zMTU3IDExLjI2MDggMTEuOTk0NyAxNS40MTg1IDExLjAzNSAxOS4yOTMxTDExLjAyNDQgMTkuMzQwNUM5LjgzOTUxIDI0Ljc1MTYgOS44Mzk1MSAzMC4yMzkxIDExLjAyNDQgMzUuNjUwMkwxMS4wMzUgMzUuNjk3NUMxMS45NTM4IDM5LjQwNjggMTUuOTUzIDQzLjM3MzUgMTkuNzczIDQ0LjQ2NDRWNDguNzg5NkMxOS43NzMgNTAuMzU1IDIxLjY4MDcgNTEuMTIzOSAyMi43NjU2IDQ5Ljk5NDNMMjcuMTQ3OCA0NS40MzkxQzI4LjA5ODIgNDUuNDkyMyAyOS4wNDkxIDQ1LjUyMTkgMzAuMDAwMSA0NS41MjE5QzMzLjIzMDkgNDUuNTIxOSAzNi40NjMxIDQ1LjIxNjUgMzkuNjcxNiA0NC42MDQzTDM5LjcxNjQgNDQuNTk1QzQzLjY4NDUgNDMuNzMgNDguMDA1NSAzOS41NzIzIDQ4Ljk2MzkgMzUuNjk3N0w0OC45NzU4IDM1LjY1MDNDNTAuMTYwNyAzMC4yMzkxIDUwLjE2MDcgMjQuNzUxNiA0OC45NzU4IDE5LjM0MDVaTTQ1LjUwNzkgMzQuODY1NUM0NC44NjgxIDM3LjM5MzMgNDEuNTg3MiA0MC41MzU5IDM4Ljk4MDQgNDEuMTE2NUMzNS41Njc3IDQxLjc2NTUgMzIuMTI4MSA0Mi4wNDI5IDI4LjY5MTggNDEuOTQ3N0MyOC42MjM1IDQxLjk0NTggMjguNTU3OCA0MS45NzIzIDI4LjUxMDEgNDIuMDIxM0MyOC4wMjI1IDQyLjUyMTggMjUuMzEwNSA0NS4zMDU5IDI1LjMxMDUgNDUuMzA1OUwyMS45MDcyIDQ4Ljc5ODdDMjEuNjU4MyA0OS4wNTgxIDIxLjIyMTIgNDguODgxNiAyMS4yMjEyIDQ4LjUyMzVWNDEuMzU4NUMyMS4yMjEyIDQxLjI0MDIgMjEuMTM2NyA0MS4xMzk2IDIxLjAyMDUgNDEuMTE2OEMyMS4wMTk4IDQxLjExNjcgMjEuMDE5MSA0MS4xMTY1IDIxLjAxODUgNDEuMTE2NEMxOC40MTE3IDQwLjUzNTggMTUuMTMyMSAzNy4zOTMyIDE0LjQ5MDkgMzQuODY1M0MxMy40MjQ1IDI5Ljk3NDMgMTMuNDI0NSAyNS4wMTYxIDE0LjQ5MDkgMjAuMTI1MUMxNS4xMzIxIDE3LjU5NzMgMTguNDExNyAxNC40NTQ2IDIxLjAxODUgMTMuODc0QzI2Ljk3ODYgMTIuNzQwNSAzMy4wMjE2IDEyLjc0MDUgMzguOTgwNCAxMy44NzRDNDEuNTg4NSAxNC40NTQ2IDQ0Ljg2ODEgMTcuNTk3MyA0NS41MDc5IDIwLjEyNTFDNDYuNTc1NSAyNS4wMTYyIDQ2LjU3NTUgMjkuOTc0NCA0NS41MDc5IDM0Ljg2NTVaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0zNS42NzEgMzguMTcyOEMzNS4yNzAyIDM4LjA1MTEgMzQuODg4MyAzNy45Njk0IDM0LjUzMzYgMzcuODIyMkMzMC44NTgzIDM2LjI5NzMgMjcuNDc1NyAzNC4zMzAxIDI0Ljc5NjQgMzEuMzE0NUMyMy4yNzI3IDI5LjU5OTcgMjIuMDgwMiAyNy42NjM3IDIxLjA3MjEgMjUuNjE0OUMyMC41OTQgMjQuNjQzMiAyMC4xOTEyIDIzLjYzMzYgMTkuNzgwNSAyMi42MzA1QzE5LjQwNjEgMjEuNzE1NyAxOS45NTc2IDIwLjc3MDcgMjAuNTM4NCAyMC4wODE1QzIxLjA4MzMgMTkuNDM0NiAyMS43ODQ1IDE4LjkzOTYgMjIuNTQzOSAxOC41NzQ4QzIzLjEzNjYgMTguMjkgMjMuNzIxMyAxOC40NTQyIDI0LjE1NDIgMTguOTU2NkMyNS4wOSAyMC4wNDI4IDI1Ljk0OTYgMjEuMTg0NSAyNi42NDU3IDIyLjQ0MzVDMjcuMDczNyAyMy4yMTc5IDI2Ljk1NjIgMjQuMTY0NSAyNi4xODA1IDI0LjY5MTVDMjUuOTkyIDI0LjgxOTYgMjUuODIwMiAyNC45NyAyNS42NDQ1IDI1LjExNDdDMjUuNDkwNSAyNS4yNDE1IDI1LjM0NTUgMjUuMzY5NiAyNS4yNCAyNS41NDEzQzI1LjA0NjkgMjUuODU1NCAyNS4wMzc3IDI2LjIyNTkgMjUuMTYyIDI2LjU2NzRDMjYuMTE4NiAyOS4xOTYzIDI3LjczMSAzMS4yNDA1IDMwLjM3NzEgMzIuMzQxNkMzMC44MDA1IDMyLjUxNzcgMzEuMjI1NyAzMi43MjI5IDMxLjcxMzUgMzIuNjY2QzMyLjUzMDQgMzIuNTcwNSAzMi43OTQ5IDMxLjY3NDUgMzMuMzY3NCAzMS4yMDYzQzMzLjkyNjkgMzAuNzQ4OCAzNC42NDIgMzAuNzQyNyAzNS4yNDQ3IDMxLjEyNDJDMzUuODQ3NSAzMS41MDU3IDM2LjQzMiAzMS45MTUzIDM3LjAxMjggMzIuMzI5MkMzNy41ODMgMzIuNzM1NSAzOC4xNTA3IDMzLjEzMyAzOC42NzY3IDMzLjU5NjFDMzkuMTgyNCAzNC4wNDE1IDM5LjM1NjYgMzQuNjI1OCAzOS4wNzE4IDM1LjIzMDNDMzguNTUwNSAzNi4zMzcyIDM3Ljc5MTggMzcuMjU4MiAzNi42OTc1IDM3Ljg0NkMzNi4zODg1IDM4LjAxMTggMzYuMDE5NSAzOC4wNjU1IDM1LjY3MSAzOC4xNzI4QzM1LjI3MDIgMzguMDUxIDM2LjAxOTUgMzguMDY1NSAzNS42NzEgMzguMTcyOFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMwLjAxMDMgMTcuMzA5MUMzNC44MTc3IDE3LjQ0MzggMzguNzY2MiAyMC42MzQyIDM5LjYxMjQgMjUuMzg3MUMzOS43NTY2IDI2LjE5NjkgMzkuODA3OSAyNy4wMjQ5IDM5Ljg3MiAyNy44NDY4QzM5Ljg5OSAyOC4xOTI1IDM5LjcwMzIgMjguNTIxIDM5LjMzMDEgMjguNTI1NUMzOC45NDQ4IDI4LjUzMDEgMzguNzcxNCAyOC4yMDc3IDM4Ljc0NjQgMjcuODYyMUMzOC42OTY5IDI3LjE3OCAzOC42NjI1IDI2LjQ5MDkgMzguNTY4MiAyNS44MTI0QzM4LjA3MDYgMjIuMjMxMiAzNS4yMTQ5IDE5LjI2ODQgMzEuNjUwMyAxOC42MzI3QzMxLjExNCAxOC41MzcgMzAuNTY1IDE4LjUxMTggMzAuMDIxNiAxOC40NTQ4QzI5LjY3ODEgMTguNDE4NyAyOS4yMjgyIDE4LjM5NzkgMjkuMTUyMSAxNy45NzFDMjkuMDg4MyAxNy42MTMgMjkuMzkwNCAxNy4zMjggMjkuNzMxMyAxNy4zMDk3QzI5LjgyNCAxNy4zMDQ1IDI5LjkxNzIgMTcuMzA4NyAzMC4wMTAzIDE3LjMwOTFDMzQuODE3NyAxNy40NDM4IDI5LjkxNzIgMTcuMzA4NyAzMC4wMTAzIDE3LjMwOTFaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0zNy4zMTYgMjYuNzhDMzcuMzA4MSAyNi44NCAzNy4zMDM5IDI2Ljk4MTEgMzcuMjY4NyAyNy4xMTQxQzM3LjE0MTEgMjcuNTk2OCAzNi40MDk0IDI3LjY1NzIgMzYuMjQwOSAyNy4xNzAxQzM2LjE5MSAyNy4wMjU1IDM2LjE4MzUgMjYuODYxMSAzNi4xODMyIDI2LjcwNTRDMzYuMTgxNSAyNS42ODcyIDM1Ljk2MDIgMjQuNjcgMzUuNDQ2NyAyMy43ODQxQzM0LjkxODkgMjIuODczNiAzNC4xMTI1IDIyLjEwODEgMzMuMTY2NyAyMS42NDVDMzIuNTk0OCAyMS4zNjQ5IDMxLjk3NjIgMjEuMTkwOSAzMS4zNDk0IDIxLjA4NzFDMzEuMDc1NSAyMS4wNDE4IDMwLjc5ODYgMjEuMDE0MyAzMC41MjMzIDIwLjk3NkMzMC4xODk3IDIwLjkyOTcgMzAuMDExNSAyMC43MTcgMzAuMDI3MyAyMC4zODgzQzMwLjA0MjEgMjAuMDgwMiAzMC4yNjcyIDE5Ljg1ODYgMzAuNjAyOSAxOS44Nzc2QzMxLjcwNjIgMTkuOTQwMyAzMi43NzE4IDIwLjE3ODcgMzMuNzUyNyAyMC42OTgxQzM1Ljc0NzMgMjEuNzU0NCAzNi44ODY2IDIzLjQyMTcgMzcuMjE5MiAyNS42NDhDMzcuMjM0MiAyNS43NDg4IDM3LjI1ODQgMjUuODQ4NyAzNy4yNjYxIDI1Ljk1QzM3LjI4NDkgMjYuMiAzNy4yOTY4IDI2LjQ1MDMgMzcuMzE2IDI2Ljc4QzM3LjMwODEgMjYuODQgMzcuMjk2OCAyNi40NTAzIDM3LjMxNiAyNi43OFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTM0LjMyNiAyNi42NjMyQzMzLjkyMzcgMjYuNjcwNCAzMy43MDg1IDI2LjQ0NzggMzMuNjY3IDI2LjA3OUMzMy42MzgyIDI1LjgyMTkgMzMuNjE1NCAyNS41NjE0IDMzLjU1NDEgMjUuMzExMkMzMy40MzMyIDI0LjgxODYgMzMuMTcxMyAyNC4zNjIgMzIuNzU2OSAyNC4wNjAxQzMyLjU2MTIgMjMuOTE3NSAzMi4zMzk1IDIzLjgxMzYgMzIuMTA3MyAyMy43NDY2QzMxLjgxMjIgMjMuNjYxNCAzMS41MDU5IDIzLjY4NDkgMzEuMjExNSAyMy42MTI3QzMwLjg5MTggMjMuNTM0NCAzMC43MTUgMjMuMjc1NSAzMC43NjUzIDIyLjk3NTZDMzAuODExIDIyLjcwMjcgMzEuMDc2NSAyMi40ODk3IDMxLjM3NDcgMjIuNTExM0MzMy4yMzg2IDIyLjY0NTggMzQuNTcwNyAyMy42MDk0IDM0Ljc2MDggMjUuODAzNkMzNC43NzQzIDI1Ljk1ODQgMzQuNzkwMSAyNi4xMjIxIDM0Ljc1NTcgMjYuMjcwMkMzNC42OTY4IDI2LjUyMzggMzQuNTA5MSAyNi42NTA4IDM0LjMyNiAyNi42NjMyQzMzLjkyMzcgMjYuNjcwNCAzNC41MDkxIDI2LjY1MDggMzQuMzI2IDI2LjY2MzJaIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0wIDMwQzAgNDYuNTY4NSAxMy40MzE1IDYwIDMwIDYwQzQ2LjU2ODUgNjAgNjAgNDYuNTY4NSA2MCAzMEM2MCAxMy40MzE1IDQ2LjU2ODUgMCAzMCAwQzEzLjQzMTUgMCAwIDEzLjQzMTUgMCAzMFoiIGZpbGw9IiM3RDNEQUYiLz48cGF0aCBkPSJNNDguOTc0OCAxOS4zNDA1TDQ4Ljk2MjkgMTkuMjkzMUM0OC4wMDQ1IDE1LjQxODUgNDMuNjgzNSAxMS4yNjA4IDM5LjcxNTQgMTAuMzk1OEwzOS42NzA2IDEwLjM4NjZDMzMuMjUyNCA5LjE2MjE2IDI2Ljc0NDYgOS4xNjIxNiAyMC4zMjc2IDEwLjM4NjZMMjAuMjgxNSAxMC4zOTU4QzE2LjMxNDcgMTEuMjYwOCAxMS45OTM4IDE1LjQxODUgMTEuMDM0IDE5LjI5MzFMMTEuMDIzNCAxOS4zNDA1QzkuODM4NTQgMjQuNzUxNiA5LjgzODU0IDMwLjIzOTEgMTEuMDIzNCAzNS42NTAyTDExLjAzNCAzNS42OTc1QzExLjk1MjggMzkuNDA2OCAxNS45NTIgNDMuMzczNSAxOS43NzIgNDQuNDY0NFY0OC43ODk2QzE5Ljc3MiA1MC4zNTUgMjEuNjc5NyA1MS4xMjM5IDIyLjc2NDYgNDkuOTk0M0wyNy4xNDY4IDQ1LjQzOTFDMjguMDk3MiA0NS40OTIzIDI5LjA0ODIgNDUuNTIxOSAyOS45OTkxIDQ1LjUyMTlDMzMuMjMgNDUuNTIxOSAzNi40NjIxIDQ1LjIxNjUgMzkuNjcwNiA0NC42MDQzTDM5LjcxNTQgNDQuNTk1QzQzLjY4MzUgNDMuNzMgNDguMDA0NSAzOS41NzIzIDQ4Ljk2MjkgMzUuNjk3N0w0OC45NzQ4IDM1LjY1MDNDNTAuMTU5NyAzMC4yMzkxIDUwLjE1OTcgMjQuNzUxNiA0OC45NzQ4IDE5LjM0MDVaTTQ1LjUwNyAzNC44NjU1QzQ0Ljg2NzEgMzcuMzkzMyA0MS41ODYyIDQwLjUzNTkgMzguOTc5NCA0MS4xMTY1QzM1LjU2NjcgNDEuNzY1NSAzMi4xMjcxIDQyLjA0MjkgMjguNjkwOCA0MS45NDc3QzI4LjYyMjUgNDEuOTQ1OCAyOC41NTY4IDQxLjk3MjMgMjguNTA5MiA0Mi4wMjEzQzI4LjAyMTUgNDIuNTIxOCAyNS4zMDk1IDQ1LjMwNTkgMjUuMzA5NSA0NS4zMDU5TDIxLjkwNjIgNDguNzk4N0MyMS42NTc0IDQ5LjA1ODEgMjEuMjIwMyA0OC44ODE2IDIxLjIyMDMgNDguNTIzNVY0MS4zNTg1QzIxLjIyMDMgNDEuMjQwMiAyMS4xMzU3IDQxLjEzOTYgMjEuMDE5NSA0MS4xMTY4QzIxLjAxODggNDEuMTE2NyAyMS4wMTgyIDQxLjExNjUgMjEuMDE3NSA0MS4xMTY0QzE4LjQxMDcgNDAuNTM1OCAxNS4xMzExIDM3LjM5MzIgMTQuNDkgMzQuODY1M0MxMy40MjM1IDI5Ljk3NDMgMTMuNDIzNSAyNS4wMTYxIDE0LjQ5IDIwLjEyNTFDMTUuMTMxMSAxNy41OTczIDE4LjQxMDcgMTQuNDU0NiAyMS4wMTc1IDEzLjg3NEMyNi45Nzc2IDEyLjc0MDUgMzMuMDIwNiAxMi43NDA1IDM4Ljk3OTQgMTMuODc0QzQxLjU4NzUgMTQuNDU0NiA0NC44NjcxIDE3LjU5NzMgNDUuNTA3IDIwLjEyNTFDNDYuNTc0NiAyNS4wMTYyIDQ2LjU3NDYgMjkuOTc0NCA0NS41MDcgMzQuODY1NVoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTM1LjY3IDM4LjE3MjhDMzUuMjY5MiAzOC4wNTExIDM0Ljg4NzMgMzcuOTY5NCAzNC41MzI2IDM3LjgyMjJDMzAuODU3MyAzNi4yOTczIDI3LjQ3NDggMzQuMzMwMSAyNC43OTU0IDMxLjMxNDVDMjMuMjcxOCAyOS41OTk3IDIyLjA3OTIgMjcuNjYzNyAyMS4wNzExIDI1LjYxNDlDMjAuNTkzMSAyNC42NDMyIDIwLjE5MDIgMjMuNjMzNiAxOS43Nzk2IDIyLjYzMDVDMTkuNDA1MSAyMS43MTU3IDE5Ljk1NjYgMjAuNzcwNyAyMC41Mzc0IDIwLjA4MTVDMjEuMDgyMyAxOS40MzQ2IDIxLjc4MzUgMTguOTM5NiAyMi41NDI5IDE4LjU3NDhDMjMuMTM1NiAxOC4yOSAyMy43MjAzIDE4LjQ1NDIgMjQuMTUzMiAxOC45NTY2QzI1LjA4OSAyMC4wNDI4IDI1Ljk0ODYgMjEuMTg0NSAyNi42NDQ3IDIyLjQ0MzVDMjcuMDcyNyAyMy4yMTc5IDI2Ljk1NTMgMjQuMTY0NSAyNi4xNzk1IDI0LjY5MTVDMjUuOTkxIDI0LjgxOTYgMjUuODE5MiAyNC45NyAyNS42NDM2IDI1LjExNDdDMjUuNDg5NSAyNS4yNDE1IDI1LjM0NDYgMjUuMzY5NiAyNS4yMzkgMjUuNTQxM0MyNS4wNDYgMjUuODU1NCAyNS4wMzY4IDI2LjIyNTkgMjUuMTYxIDI2LjU2NzRDMjYuMTE3NyAyOS4xOTYzIDI3LjczMDEgMzEuMjQwNSAzMC4zNzYxIDMyLjM0MTZDMzAuNzk5NSAzMi41MTc3IDMxLjIyNDggMzIuNzIyOSAzMS43MTI1IDMyLjY2NkMzMi41Mjk1IDMyLjU3MDUgMzIuNzk0IDMxLjY3NDUgMzMuMzY2NCAzMS4yMDYzQzMzLjkyNiAzMC43NDg4IDM0LjY0MSAzMC43NDI3IDM1LjI0MzcgMzEuMTI0MkMzNS44NDY2IDMxLjUwNTcgMzYuNDMxIDMxLjkxNTMgMzcuMDExOSAzMi4zMjkyQzM3LjU4MjEgMzIuNzM1NSAzOC4xNDk4IDMzLjEzMyAzOC42NzU3IDMzLjU5NjFDMzkuMTgxNCAzNC4wNDE1IDM5LjM1NTYgMzQuNjI1OCAzOS4wNzA4IDM1LjIzMDNDMzguNTQ5NSAzNi4zMzcyIDM3Ljc5MDkgMzcuMjU4MiAzNi42OTY1IDM3Ljg0NkMzNi4zODc1IDM4LjAxMTggMzYuMDE4NSAzOC4wNjU1IDM1LjY3IDM4LjE3MjhDMzUuMjY5MiAzOC4wNTEgMzYuMDE4NSAzOC4wNjU1IDM1LjY3IDM4LjE3MjhaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0zMC4wMDkzIDE3LjMwOTFDMzQuODE2OCAxNy40NDM4IDM4Ljc2NTMgMjAuNjM0MiAzOS42MTE0IDI1LjM4NzFDMzkuNzU1NiAyNi4xOTY5IDM5LjgwNjkgMjcuMDI0OSAzOS44NzExIDI3Ljg0NjhDMzkuODk4IDI4LjE5MjUgMzkuNzAyMyAyOC41MjEgMzkuMzI5MiAyOC41MjU1QzM4Ljk0MzggMjguNTMwMSAzOC43NzA0IDI4LjIwNzcgMzguNzQ1NCAyNy44NjIxQzM4LjY5NTkgMjcuMTc4IDM4LjY2MTUgMjYuNDkwOSAzOC41NjczIDI1LjgxMjRDMzguMDY5NiAyMi4yMzEyIDM1LjIxNCAxOS4yNjg0IDMxLjY0OTQgMTguNjMyN0MzMS4xMTMgMTguNTM3IDMwLjU2NCAxOC41MTE4IDMwLjAyMDYgMTguNDU0OEMyOS42NzcxIDE4LjQxODcgMjkuMjI3MyAxOC4zOTc5IDI5LjE1MTIgMTcuOTcxQzI5LjA4NzMgMTcuNjEzIDI5LjM4OTUgMTcuMzI4IDI5LjczMDMgMTcuMzA5N0MyOS44MjMgMTcuMzA0NSAyOS45MTYyIDE3LjMwODcgMzAuMDA5MyAxNy4zMDkxQzM0LjgxNjggMTcuNDQzOCAyOS45MTYyIDE3LjMwODcgMzAuMDA5MyAxNy4zMDkxWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMzcuMzE1IDI2Ljc4QzM3LjMwNzEgMjYuODQgMzcuMzAyOSAyNi45ODExIDM3LjI2NzcgMjcuMTE0MUMzNy4xNDAyIDI3LjU5NjggMzYuNDA4NCAyNy42NTcyIDM2LjIzOTkgMjcuMTcwMUMzNi4xOSAyNy4wMjU1IDM2LjE4MjUgMjYuODYxMSAzNi4xODIyIDI2LjcwNTRDMzYuMTgwNSAyNS42ODcyIDM1Ljk1OTIgMjQuNjcgMzUuNDQ1NyAyMy43ODQxQzM0LjkxNzkgMjIuODczNiAzNC4xMTE1IDIyLjEwODEgMzMuMTY1NyAyMS42NDVDMzIuNTkzOCAyMS4zNjQ5IDMxLjk3NTMgMjEuMTkwOSAzMS4zNDg1IDIxLjA4NzFDMzEuMDc0NSAyMS4wNDE4IDMwLjc5NzYgMjEuMDE0MyAzMC41MjIzIDIwLjk3NkMzMC4xODg3IDIwLjkyOTcgMzAuMDEwNiAyMC43MTcgMzAuMDI2NCAyMC4zODgzQzMwLjA0MTEgMjAuMDgwMiAzMC4yNjYyIDE5Ljg1ODYgMzAuNjAyIDE5Ljg3NzZDMzEuNzA1MiAxOS45NDAzIDMyLjc3MDkgMjAuMTc4NyAzMy43NTE3IDIwLjY5ODFDMzUuNzQ2MyAyMS43NTQ0IDM2Ljg4NTcgMjMuNDIxNyAzNy4yMTgyIDI1LjY0OEMzNy4yMzMyIDI1Ljc0ODggMzcuMjU3NSAyNS44NDg3IDM3LjI2NTEgMjUuOTVDMzcuMjgzOSAyNi4yIDM3LjI5NTggMjYuNDUwMyAzNy4zMTUgMjYuNzhDMzcuMzA3MSAyNi44NCAzNy4yOTU4IDI2LjQ1MDMgMzcuMzE1IDI2Ljc4WiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMzQuMzI1IDI2LjY2MzdDMzMuOTIyOCAyNi42NzA5IDMzLjcwNzUgMjYuNDQ4MyAzMy42NjYgMjYuMDc5NUMzMy42MzcyIDI1LjgyMjQgMzMuNjE0NCAyNS41NjE5IDMzLjU1MzEgMjUuMzExN0MzMy40MzIyIDI0LjgxOSAzMy4xNzA0IDI0LjM2MjUgMzIuNzU1OSAyNC4wNjA2QzMyLjU2MDMgMjMuOTE4IDMyLjMzODUgMjMuODE0MSAzMi4xMDYzIDIzLjc0NzFDMzEuODExMyAyMy42NjE5IDMxLjUwNDkgMjMuNjg1MyAzMS4yMTA1IDIzLjYxMzJDMzAuODkwOSAyMy41MzQ5IDMwLjcxNCAyMy4yNzYgMzAuNzY0MyAyMi45NzYxQzMwLjgxIDIyLjcwMzIgMzEuMDc1NiAyMi40OTAyIDMxLjM3MzggMjIuNTExOEMzMy4yMzc2IDIyLjY0NjMgMzQuNTY5NyAyMy42MDk5IDM0Ljc1OTggMjUuODA0MUMzNC43NzMzIDI1Ljk1ODkgMzQuNzg5MSAyNi4xMjI2IDM0Ljc1NDcgMjYuMjcwN0MzNC42OTU5IDI2LjUyNDMgMzQuNTA4MSAyNi42NTEzIDM0LjMyNSAyNi42NjM3QzMzLjkyMjggMjYuNjcwOSAzNC41MDgxIDI2LjY1MTMgMzQuMzI1IDI2LjY2MzdaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==" /><span class="tooltiptext">Viber</span>', l.appendChild(t)
            }
            if (nn(ee, js.old_data, "facebookMessenger")) {
              let t = document.createElement("a");
              t.classList.add("messengers-icon-btn"), t.href = "https://m.me/" + ee.userSettings.messengers.facebookMessenger.bot_id + "?ref=u" + Ts(`${xs.clientId}`) + "vid" + Ts(Ye.pageViewId), t.target = "_blank", t.innerHTML = '<img alt="Messenger" class="messengers-icon messengers-icon-facebook" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEMxMy40MzI1IDAgMCAxMi40MzUgMCAyNy43NzYzQzAgMzYuNTE3NSA0LjM2MTI1IDQ0LjMxMzggMTEuMTc4NyA0OS40MDYzVjYwTDIxLjM5MzcgNTQuMzkzOEMyNC4xMiA1NS4xNDc1IDI3LjAwNzUgNTUuNTU2MiAzMCA1NS41NTYyQzQ2LjU2NzUgNTUuNTU2MiA2MCA0My4xMjEzIDYwIDI3Ljc4QzYwIDEyLjQzNSA0Ni41Njc1IDAgMzAgMFoiIGZpbGw9IiMxRTg4RTUiLz48cGF0aCBkPSJNMzIuOTgxMiAzNy40MDY1TDI1LjM0MjUgMjkuMjU3OEwxMC40MzYyIDM3LjQwNjVMMjYuODMxMiAxOS45OTlMMzQuNjU3NSAyOC4xNDc4TDQ5LjM4IDE5Ljk5OUwzMi45ODEyIDM3LjQwNjVaIiBmaWxsPSIjRkFGQUZBIi8+PC9zdmc+" /><span class="tooltiptext">Messenger</span>', l.appendChild(t)
            }
            if (nn(ee, "all")) {
              let t = document.createElement("button");
              t.classList.add("messengers-icon-btn"), t.innerHTML = '<img alt="Close" class="messengers-icon messengers-icon-close" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA2MiA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTcuNzM1OCIgcng9IjI4Ljg2NzkiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTMxLjQ3MjggMjkuNDk5OUwzNS43OTg0IDI1LjE3NDNDMzYuMDY3MiAyNC45MDU4IDM2LjA2NzIgMjQuNDcwMSAzNS43OTg0IDI0LjIwMTZDMzUuNTI5NyAyMy45MzI4IDM1LjA5NDUgMjMuOTMyOCAzNC44MjU3IDI0LjIwMTZMMzAuNTAwMSAyOC41MjcyTDI2LjE3NDMgMjQuMjAxNkMyNS45MDU1IDIzLjkzMjggMjUuNDcwMyAyMy45MzI4IDI1LjIwMTYgMjQuMjAxNkMyNC45MzI4IDI0LjQ3MDEgMjQuOTMyOCAyNC45MDU4IDI1LjIwMTYgMjUuMTc0M0wyOS41Mjc0IDI5LjQ5OTlMMjUuMjAxNiAzMy44MjU1QzI0LjkzMjggMzQuMDk0IDI0LjkzMjggMzQuNTI5NyAyNS4yMDE2IDM0Ljc5ODJDMjUuMzM1OSAzNC45MzI0IDI1LjUxMiAzNC45OTk1IDI1LjY4NzkgMzQuOTk5NUMyNS44NjM4IDM0Ljk5OTUgMjYuMDM5OSAzNC45MzI0IDI2LjE3NDMgMzQuNzk4TDMwLjUwMDEgMzAuNDcyNEwzNC44MjU3IDM0Ljc5OEMzNC45NjAxIDM0LjkzMjQgMzUuMTM2MiAzNC45OTk1IDM1LjMxMjEgMzQuOTk5NUMzNS40ODggMzQuOTk5NSAzNS42NjQxIDM0LjkzMjQgMzUuNzk4NCAzNC43OThDMzYuMDY3MiAzNC41Mjk1IDM2LjA2NzIgMzQuMDkzOCAzNS43OTg0IDMzLjgyNTNMMzEuNDcyOCAyOS40OTk5WiIgZmlsbD0iIzYzNjM2MyIvPjwvc3ZnPg==" />', l.appendChild(t)
            }! function e() {
              null === document.body || void 0 === document.body ? Mr = setTimeout(() => {
                e()
              }, 200) : (clearTimeout(Mr), document.body.insertAdjacentElement("beforeend", t))
            }()
          }
        })(), (() => {
          const t = document.getElementsByTagName("head")[0],
            e = document.createElement("link");
          e.rel = "stylesheet", e.type = "text/css", e.href = `${ee.urls.callback}api/getCallbackButtonCSS/?ua_id=${xs.uaId}&hash=${ee.ringostatProjectHash}`, t.appendChild(e)
        })(), !1 !== ee.callbackSettings.delay && (js.old_data.avg_time_to_call = +js.old_data.avg_time_to_call + ee.callbackSettings.delay, ce("rngst_callback", js.old_data, 1800, ee.cookieDomain)), js.old_data.language = js.language, xa || !1 === a && !0 === l && (!1 === t && Sa(), !0 === t && !0 === u && (() => {
          let t = document.createElement("button");
          t.classList.add("messengers-icon-btn"), t.classList.add("messengers-icon-btn--tel"), t.innerHTML = '<img alt="Telephone" class="messengers-icon messengers-icon-tel" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEMxMy40Mjk3IDAgMCAxMy40Mjk3IDAgMzBDMCA0Ni41NzAzIDEzLjQyOTcgNjAgMzAgNjBDNDYuNTcwMyA2MCA2MCA0Ni41NzAzIDYwIDMwQzYwIDEzLjQyOTcgNDYuNTcwMyAwIDMwIDBaIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBmaWxsPSIjNENBRjUwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOC4xNTEgMzMuNTIzOEMyNC4wNjI3IDMwLjY0OTcgMjAuMDM0MiAyNy4yIDIxLjM0ODIgMjUuMzI4NUMyMy4yMzAzIDIyLjY0ODYgMjQuOTcyMyAyMC44OTY3IDIwLjA1NDggMTYuNTcyN0MxNS4xMzQ5IDEyLjI0OTIgMTMuMTE1NSAxNi41ODE4IDExLjI4OTQgMTkuMTc2NEM5LjE4NTUyIDIyLjE3MTggMTMuMjU2MSAzMS4yNTUzIDI0LjI5MDMgMzkuMDEyNUMzNS4zMjQgNDYuNzY3NSA0NS4yNTAxIDQ3LjUyNzcgNDcuMzU2MyA0NC41MzJDNDkuMTgyNCA0MS45Mzc1IDUyLjU3MzYgMzguNTcxMSA0Ni44Mzc3IDM1LjQwNTVDNDEuMTA2MyAzMi4yMzkzIDQwLjA0NzQgMzQuNDcxMyAzOC4xNjMxIDM3LjE1MTZDMzYuODQ4OCAzOS4wMjEgMzIuMjM5MiAzNi4zOTggMjguMTUxIDMzLjUyMzhaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIvPjwvc3ZnPg==" /><span class="tooltiptext">Callback</span>', document.getElementsByClassName("dropdown-content-rngst")[0].prepend(t)
        })(), Ca()), (!0 === l || !1 === l && !0 === t) && (ge(`Callback options: ${JSON.stringify(js)}`), Aa(), !0 === t && !xa)) {
        document.getElementsByClassName("messengers-icon-btn--tel").length > 0 && Ve(document.getElementsByClassName("messengers-icon-btn--tel")[0], wa, t => {
          js.old_data.form_type = "forced", js.button.style.display = "none", Nr(), Ma(), document.getElementsByClassName("dropdownMessengers")[0].classList.remove("dropdownMessengers-show")
        }), Ve(document.getElementsByClassName("messengers-icon-close")[0], wa, t => {
          if (!1 === t.target.classList.contains("rngst_phone_icon")) {
            document.getElementsByClassName("dropdownMessengers")[0].classList.remove("dropdownMessengers-show")
          }
        });
        const t = document.getElementsByClassName("dropdown-content-rngst")[0];
        Ve(void 0 !== t ? t : js.button, Ea, t => {
          t.stopPropagation()
        })
      }
      if (ee.callbackSettings.autoFormOffOnPage) return Na(), void Nr();
      p && br.init(js.old_data.avg_time_to_call, () => {
        js.old_data.form_type = "default", null != js.button && (js.button.style.display = "none"), Ma()
      }), ee.callbackSettings.autoFormOff && Nr(), js.old_data.recaptcha && !window.grecaptcha ? tn(`https://www.google.com/recaptcha/api.js?render=${ee.ringostatRecaptchaKey}`, function() {
        const t = document.createElement("style");
        t.innerHTML = ".grecaptcha-badge { visibility: hidden; }", document.getElementsByTagName("head")[0].append(t), grecaptcha.ready(function() {
          grecaptcha.execute(ee.ringostatRecaptchaKey, {
            action: "client_page"
          }).then(function(t) {
            js.recaptcha_token = t
          })
        })
      }) : js.old_data.recaptcha && window.grecaptcha && (js.user_has_recaptcha = 1, console.log("Google reCaptcha script already loaded. Ringostat reCaptcha script skipped!"))
    },
    za = () => {
      1 === ee.classified && ee.userSettings && !0 !== ee.userSettings.enableCallbackForClassified ? ge("checkCallback  return : cause classified") : Ns(`${ee.urls.callback}api/checkCallback/`, {
        "data[client_id]": Ye.clientId,
        "data[current_url]": xs.currentUrl,
        "data[language]": Ds(),
        "data[referrer]": xs.referrer,
        "data[ua_id]": xs.uaId,
        "data[hash]": ee.ringostatProjectHash,
        "data[utmz]": ue(ee.cookies.rngst2, !1) && ue(ee.cookies.rngst2, !0).utmz || ""
      }, function() {
        js.old_data = JSON.parse(this.responseText), ce("rngst_callback", JSON.parse(this.responseText), 1800, ee.cookieDomain), yr(ee.userFormsSettings, ee.urls.backend), !0 === Da() || !0 === nn(ee, JSON.parse(this.responseText), "all") ? ja() : ge("No callback number"), ge(`checkCallback  Success : ${this.status} - ${this.statusText}`)
      }, function() {
        ge(`checkCallback  Error : ${this.status} - ${this.statusText}`)
      })
    };
  let Oa = null;
  const La = () => {
      !0 === Gn(js.icon) && null === Oa ? (ge("No callback button. Start interval to check"), Oa = setTimeout(() => {
        La()
      }, 200)) : (clearTimeout(Oa), Oa = null, ge("There is a callback button. Stopping interval and init callback"), ja())
    },
    Ra = () => {
      ue("rngst_callback", !1) ? (js.old_data = ue("rngst_callback", !0), !0 === Da() || !0 === nn(ee, js.old_data, "all") ? La() : ge("No callback number")) : za()
    },
    Ua = t => {
      ee.callbackSettings = Is({
        CallbackOffOnPage: !1,
        autoFormOffOnPage: !1,
        CallbackOff: !1,
        autoFormOff: !1,
        delay: 0
      }, t), Ra()
    };
  (() => {
    const t = document.cookie;
    let e;
    const n = document.location.hostname.split(".");
    let i = n.length;
    for (; i--;)
      if (e = `.${n.slice(i).join(".")}`, ce("CookieTLD", e, 30, e), t !== document.cookie) return le("CookieTLD", e), e
  })();
  const Ba = t => {
    const e = {
        cookieLifeTime: 300,
        crossDomain: !1,
        linkedDomains: [""],
        numbers: {},
        callbackFunction() {
          ge("default callbackFunction")
        },
        subDomain: !1,
        callbackSettings: {
          CallbackOffOnPage: !1,
          autoFormOffOnPage: !1,
          CallbackOff: !1,
          autoFormOff: !1,
          delay: 0
        },
        roistatTracking: !1,
        callbackFunctionBehavior: !1
      },
      n = void 0 !== t.userSettings.messengers && void 0 !== t.userSettings.messengers.chat && 1 === t.userSettings.messengers.chat.enabled,
      i = JSON.parse(JSON.stringify(e));
    t = Is(i, t), ge(`config: ${JSON.stringify(t,null,2)}`), xs.uaId = t.uaId, ge(JSON.stringify(Ye)), xs.clientId = Ye.clientId, Ra(), window.ringostatAPI = {}, window.ringostatAPI.setCallbackSettings = function(t) {
      Ua(t)
    }, window.ringostatAPI.openCallbackForm = function() {
      js.old_data.form_type = "forced", Nr(), Ma()
    }, window.ringostatAPI.getForms = function() {
      ! function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        null !== t && document.querySelectorAll(t);
        const e = document.querySelectorAll("form");
        let n = e.length,
          i = [];
        for (; n--;) {
          let t = {
            fields: []
          };
          t.formElement = e[n], t.formName = e[n].name.length > 0 ? e[n].name : "no name", t.formAction = e[n].action.length > 0 ? e[n].action : "no action", t.needSendSubmitAndReloadPage = "no action" !== t.formAction;
          let s = e[n].length;
          for (; s--;) {
            let i = {};
            "INPUT" === e[n][s].tagName && "submit" === e[n][s].type || "BUTTON" === e[n][s].tagName ? (t.xpathToSubmitButton = vr(e[n][s]).replaceAll("/", "\\/"), t.elementSubmitButton = e[n][s]) : (i = {
              tagName: e[n][s].tagName,
              typeOfElement: e[n][s].type,
              xpathToElement: vr(e[n][s]).replaceAll("/", "\\/"),
              element: e[n][s],
              isRequired: e[n][s].required
            }, t.fields.push(i))
          }
          i.push(t)
        }
        console.log(i)
      }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
    }, !1 === Gn(t.userFormsSettings.forms) ? null !== js.old_data && yr(t.userFormsSettings, t.urls.backend) : t.userSettings.customFormDataTracking.isActive && mr(t.userSettings), n && tn(`${t.urls.clientsScriptService}`, () => {})
  };
  var Ya = s(function(t, e) {
    t.exports = function() {
      function t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n) t[i] = n[i]
        }
        return t
      }
      return function e(n, i) {
        function s(e, s, r) {
          if ("undefined" != typeof document) {
            "number" == typeof(r = t({}, i, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var o in r) r[o] && (a += "; " + o, !0 !== r[o] && (a += "=" + r[o].split(";")[0]));
            return document.cookie = e + "=" + n.write(s, e) + a
          }
        }
        return Object.create({
          set: s,
          get: function(t) {
            if ("undefined" != typeof document && (!arguments.length || t)) {
              for (var e = document.cookie ? document.cookie.split("; ") : [], i = {}, s = 0; s < e.length; s++) {
                var r = e[s].split("="),
                  a = r.slice(1).join("=");
                try {
                  var o = decodeURIComponent(r[0]);
                  if (i[o] = n.read(a, o), t === o) break
                } catch (t) {}
              }
              return t ? i[t] : i
            }
          },
          remove: function(e, n) {
            s(e, "", t({}, n, {
              expires: -1
            }))
          },
          withAttributes: function(n) {
            return e(this.converter, t({}, this.attributes, n))
          },
          withConverter: function(n) {
            return e(t({}, this.converter, n), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(i)
          },
          converter: {
            value: Object.freeze(n)
          }
        })
      }({
        read: function(t) {
          return '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(t) {
          return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    }()
  });
  const Pa = Object.prototype.toString;

  function Ga(t) {
    switch (Pa.call(t)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return Xa(t, Error)
    }
  }

  function Fa(t, e) {
    return Pa.call(t) === `[object ${e}]`
  }

  function Qa(t) {
    return Fa(t, "ErrorEvent")
  }

  function $a(t) {
    return Fa(t, "DOMError")
  }

  function Ha(t) {
    return Fa(t, "String")
  }

  function qa(t) {
    return null === t || "object" != typeof t && "function" != typeof t
  }

  function Va(t) {
    return Fa(t, "Object")
  }

  function Wa(t) {
    return "undefined" != typeof Event && Xa(t, Event)
  }

  function Za(t) {
    return Fa(t, "RegExp")
  }

  function Ja(t) {
    return Boolean(t && t.then && "function" == typeof t.then)
  }

  function Ka(t) {
    return "number" == typeof t && t != t
  }

  function Xa(t, e) {
    try {
      return t instanceof e
    } catch (t) {
      return !1
    }
  }

  function to(t) {
    return t && t.Math == Math ? t : void 0
  }
  const eo = "object" == typeof globalThis && to(globalThis) || "object" == typeof window && to(window) || "object" == typeof self && to(self) || "object" == typeof global && to(global) || function() {
    return this
  }() || {};

  function no() {
    return eo
  }

  function io(t, e, n) {
    const i = n || eo,
      s = i.__SENTRY__ = i.__SENTRY__ || {};
    return s[t] || (s[t] = e())
  }
  const so = no(),
    ro = 80;

  function ao(t, e = {}) {
    try {
      let n = t;
      const i = 5,
        s = [];
      let r = 0,
        a = 0;
      const o = " > ",
        c = o.length;
      let l;
      const u = Array.isArray(e) ? e : e.keyAttrs,
        d = !Array.isArray(e) && e.maxStringLength || ro;
      for (; n && r++ < i && !("html" === (l = oo(n, u)) || r > 1 && a + s.length * c + l.length >= d);) s.push(l), a += l.length, n = n.parentNode;
      return s.reverse().join(o)
    } catch (t) {
      return "<unknown>"
    }
  }

  function oo(t, e) {
    const n = t,
      i = [];
    let s, r, a, o, c;
    if (!n || !n.tagName) return "";
    i.push(n.tagName.toLowerCase());
    const l = e && e.length ? e.filter(t => n.getAttribute(t)).map(t => [t, n.getAttribute(t)]) : null;
    if (l && l.length) l.forEach(t => {
      i.push(`[${t[0]}="${t[1]}"]`)
    });
    else if (n.id && i.push(`#${n.id}`), (s = n.className) && Ha(s))
      for (r = s.split(/\s+/), c = 0; c < r.length; c++) i.push(`.${r[c]}`);
    const u = ["aria-label", "type", "name", "title", "alt"];
    for (c = 0; c < u.length; c++) a = u[c], (o = n.getAttribute(a)) && i.push(`[${a}="${o}"]`);
    return i.join("")
  }
  const co = "Sentry Logger ",
    lo = ["debug", "info", "warn", "error", "log", "assert", "trace"];

  function uo(t) {
    if (!("console" in eo)) return t();
    const e = eo.console,
      n = {};
    lo.forEach(t => {
      const i = e[t] && e[t].__sentry_original__;
      t in e && i && (n[t] = e[t], e[t] = i)
    });
    try {
      return t()
    } finally {
      Object.keys(n).forEach(t => {
        e[t] = n[t]
      })
    }
  }

  function ho() {
    let t = !1;
    const e = {
      enable: () => {
        t = !0
      },
      disable: () => {
        t = !1
      }
    };
    return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? lo.forEach(n => {
      e[n] = ((...e) => {
        t && uo(() => {
          eo.console[n](`${co}[${n}]:`, ...e)
        })
      })
    }) : lo.forEach(t => {
      e[t] = (() => void 0)
    }), e
  }
  let po;
  po = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? io("logger", ho) : ho();
  const fo = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

  function go(t, e = !1) {
    const {
      host: n,
      path: i,
      pass: s,
      port: r,
      projectId: a,
      protocol: o,
      publicKey: c
    } = t;
    return `${o}://${c}${e&&s?`:${s}`:""}` + `@${n}${r?`:${r}`:""}/${i?`${i}/`:i}${a}`
  }

  function mo(t) {
    return {
      protocol: t.protocol,
      publicKey: t.publicKey || "",
      pass: t.pass || "",
      host: t.host,
      port: t.port || "",
      path: t.path || "",
      projectId: t.projectId
    }
  }

  function _o(t) {
    const e = "string" == typeof t ? function(t) {
      const e = fo.exec(t);
      if (!e) return void console.error(`Invalid Sentry Dsn: ${t}`);
      const [n, i, s = "", r, a = "", o] = e.slice(1);
      let c = "",
        l = o;
      const u = l.split("/");
      if (u.length > 1 && (c = u.slice(0, -1).join("/"), l = u.pop()), l) {
        const t = l.match(/^\d+/);
        t && (l = t[0])
      }
      return mo({
        host: r,
        pass: s,
        path: c,
        projectId: l,
        port: a,
        protocol: n,
        publicKey: i
      })
    }(t) : mo(t);
    if (e && function(t) {
        if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return !0;
        const {
          port: e,
          projectId: n,
          protocol: i
        } = t;
        return !(["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (po.error(`Invalid Sentry Dsn: ${e} missing`), !0)) || (n.match(/^\d+$/) ? function(t) {
          return "http" === t || "https" === t
        }(i) ? e && isNaN(parseInt(e, 10)) && (po.error(`Invalid Sentry Dsn: Invalid port ${e}`), 1) : (po.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), 1) : (po.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 1)))
      }(e)) return e
  }
  class yo extends Error {
    constructor(t, e = "warn") {
      super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
    }
  }

  function vo(t, e = 0) {
    return "string" != typeof t || 0 === e ? t : t.length <= e ? t : `${t.slice(0,e)}...`
  }

  function bo(t, e) {
    if (!Array.isArray(t)) return "";
    const n = [];
    for (let e = 0; e < t.length; e++) {
      const i = t[e];
      try {
        n.push(String(i))
      } catch (t) {
        n.push("[value cannot be serialized]")
      }
    }
    return n.join(e)
  }

  function Mo(t, e = [], n = !1) {
    return e.some(e => (function(t, e, n = !1) {
      return !!Ha(t) && (Za(e) ? e.test(t) : !!Ha(e) && (n ? t === e : t.includes(e)))
    })(t, e, n))
  }

  function No(t, e, n) {
    if (!(e in t)) return;
    const i = t[e],
      s = n(i);
    if ("function" == typeof s) try {
      Io(s, i)
    } catch (t) {}
    t[e] = s
  }

  function Do(t, e, n) {
    Object.defineProperty(t, e, {
      value: n,
      writable: !0,
      configurable: !0
    })
  }

  function Io(t, e) {
    const n = e.prototype || {};
    t.prototype = e.prototype = n, Do(t, "__sentry_original__", e)
  }

  function So(t) {
    return t.__sentry_original__
  }

  function wo(t) {
    if (Ga(t)) return {
      message: t.message,
      name: t.name,
      stack: t.stack,
      ...ko(t)
    };
    if (Wa(t)) {
      const e = {
        type: t.type,
        target: Eo(t.target),
        currentTarget: Eo(t.currentTarget),
        ...ko(t)
      };
      return "undefined" != typeof CustomEvent && Xa(t, CustomEvent) && (e.detail = t.detail), e
    }
    return t
  }

  function Eo(t) {
    try {
      return "undefined" != typeof Element && Xa(t, Element) ? ao(t) : Object.prototype.toString.call(t)
    } catch (t) {
      return "<unknown>"
    }
  }

  function ko(t) {
    if ("object" == typeof t && null !== t) {
      const e = {};
      for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    }
    return {}
  }

  function To(t) {
    return function t(e, n) {
      if (Va(e)) {
        const i = n.get(e);
        if (void 0 !== i) return i;
        const s = {};
        n.set(e, s);
        for (const i of Object.keys(e)) void 0 !== e[i] && (s[i] = t(e[i], n));
        return s
      }
      if (Array.isArray(e)) {
        const i = n.get(e);
        if (void 0 !== i) return i;
        const s = [];
        return n.set(e, s), e.forEach(e => {
          s.push(t(e, n))
        }), s
      }
      return e
    }(t, new Map)
  }
  const xo = 50,
    Co = /\(error: (.*)\)/;

  function Ao(...t) {
    const e = t.sort((t, e) => t[0] - e[0]).map(t => t[1]);
    return (t, n = 0) => {
      const i = [],
        s = t.split("\n");
      for (let t = n; t < s.length; t++) {
        const n = s[t];
        if (n.length > 1024) continue;
        const r = Co.test(n) ? n.replace(Co, "$1") : n;
        if (!r.match(/\S*Error: /)) {
          for (const t of e) {
            const e = t(r);
            if (e) {
              i.push(e);
              break
            }
          }
          if (i.length >= xo) break
        }
      }
      return function(t) {
        if (!t.length) return [];
        const e = t.slice(0, xo),
          n = e[e.length - 1].function;
        n && /sentryWrapped/.test(n) && e.pop();
        e.reverse();
        const i = e[e.length - 1].function;
        i && /captureMessage|captureException/.test(i) && e.pop();
        return e.map(t => ({
          ...t,
          filename: t.filename || e[e.length - 1].filename,
          function: t.function || "?"
        }))
      }(i)
    }
  }
  const jo = "<anonymous>";

  function zo(t) {
    try {
      return t && "function" == typeof t && t.name || jo
    } catch (t) {
      return jo
    }
  }
  const Oo = no();

  function Lo() {
    if (!("fetch" in Oo)) return !1;
    try {
      return new Headers, new Request("http://www.example.com"), new Response, !0
    } catch (t) {
      return !1
    }
  }

  function Ro(t) {
    return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
  }
  const Uo = no();
  const Bo = no(),
    Yo = "__sentry_xhr_v2__",
    Po = {},
    Go = {};

  function Fo(t) {
    if (!Go[t]) switch (Go[t] = !0, t) {
      case "console":
        ! function() {
          if (!("console" in Bo)) return;
          lo.forEach(function(t) {
            t in Bo.console && No(Bo.console, t, function(e) {
              return function(...n) {
                $o("console", {
                  args: n,
                  level: t
                }), e && e.apply(Bo.console, n)
              }
            })
          })
        }();
        break;
      case "dom":
        ! function() {
          if (!("document" in Bo)) return;
          const t = $o.bind(null, "dom"),
            e = Ko(t, !0);
          Bo.document.addEventListener("click", e, !1), Bo.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
            const n = Bo[e] && Bo[e].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (No(n, "addEventListener", function(e) {
              return function(n, i, s) {
                if ("click" === n || "keypress" == n) try {
                  const i = this,
                    r = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
                    a = r[n] = r[n] || {
                      refCount: 0
                    };
                  if (!a.handler) {
                    const i = Ko(t);
                    a.handler = i, e.call(this, n, i, s)
                  }
                  a.refCount++
                } catch (t) {}
                return e.call(this, n, i, s)
              }
            }), No(n, "removeEventListener", function(t) {
              return function(e, n, i) {
                if ("click" === e || "keypress" == e) try {
                  const n = this,
                    s = n.__sentry_instrumentation_handlers__ || {},
                    r = s[e];
                  r && (r.refCount--, r.refCount <= 0 && (t.call(this, e, r.handler, i), r.handler = void 0, delete s[e]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
                } catch (t) {}
                return t.call(this, e, n, i)
              }
            }))
          })
        }();
        break;
      case "xhr":
        ! function() {
          if (!("XMLHttpRequest" in Bo)) return;
          const t = XMLHttpRequest.prototype;
          No(t, "open", function(t) {
            return function(...e) {
              const n = e[1],
                i = this[Yo] = {
                  method: Ha(e[0]) ? e[0].toUpperCase() : e[0],
                  url: e[1],
                  request_headers: {}
                };
              Ha(n) && "POST" === i.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
              const s = () => {
                const t = this[Yo];
                if (t && 4 === this.readyState) {
                  try {
                    t.status_code = this.status
                  } catch (t) {}
                  $o("xhr", {
                    args: e,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: this
                  })
                }
              };
              return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? No(this, "onreadystatechange", function(t) {
                return function(...e) {
                  return s(), t.apply(this, e)
                }
              }) : this.addEventListener("readystatechange", s), No(this, "setRequestHeader", function(t) {
                return function(...e) {
                  const [n, i] = e, s = this[Yo];
                  return s && (s.request_headers[n.toLowerCase()] = i), t.apply(this, e)
                }
              }), t.apply(this, e)
            }
          }), No(t, "send", function(t) {
            return function(...e) {
              const n = this[Yo];
              return n && void 0 !== e[0] && (n.body = e[0]), $o("xhr", {
                args: e,
                startTimestamp: Date.now(),
                xhr: this
              }), t.apply(this, e)
            }
          })
        }();
        break;
      case "fetch":
        ! function() {
          if (! function() {
              if (!Lo()) return !1;
              if (Ro(Oo.fetch)) return !0;
              let t = !1;
              const e = Oo.document;
              if (e && "function" == typeof e.createElement) try {
                const n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = Ro(n.contentWindow.fetch)), e.head.removeChild(n)
              } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
              }
              return t
            }()) return;
          No(Bo, "fetch", function(t) {
            return function(...e) {
              const {
                method: n,
                url: i
              } = function(t) {
                if (0 === t.length) return {
                  method: "GET",
                  url: ""
                };
                if (2 === t.length) {
                  const [e, n] = t;
                  return {
                    url: qo(e),
                    method: Ho(n, "method") ? String(n.method).toUpperCase() : "GET"
                  }
                }
                const e = t[0];
                return {
                  url: qo(e),
                  method: Ho(e, "method") ? String(e.method).toUpperCase() : "GET"
                }
              }(e), s = {
                args: e,
                fetchData: {
                  method: n,
                  url: i
                },
                startTimestamp: Date.now()
              };
              return $o("fetch", {
                ...s
              }), t.apply(Bo, e).then(t => ($o("fetch", {
                ...s,
                endTimestamp: Date.now(),
                response: t
              }), t), t => {
                throw $o("fetch", {
                  ...s,
                  endTimestamp: Date.now(),
                  error: t
                }), t
              })
            }
          })
        }();
        break;
      case "history":
        ! function() {
          if (! function() {
              const t = Uo.chrome,
                e = t && t.app && t.app.runtime,
                n = "history" in Uo && !!Uo.history.pushState && !!Uo.history.replaceState;
              return !e && n
            }()) return;
          const t = Bo.onpopstate;

          function e(t) {
            return function(...e) {
              const n = e.length > 2 ? e[2] : void 0;
              if (n) {
                const t = Vo,
                  e = String(n);
                Vo = e, $o("history", {
                  from: t,
                  to: e
                })
              }
              return t.apply(this, e)
            }
          }
          Bo.onpopstate = function(...e) {
            const n = Bo.location.href,
              i = Vo;
            if (Vo = n, $o("history", {
                from: i,
                to: n
              }), t) try {
              return t.apply(this, e)
            } catch (t) {}
          }, No(Bo.history, "pushState", e), No(Bo.history, "replaceState", e)
        }();
        break;
      case "error":
        Xo = Bo.onerror, Bo.onerror = function(t, e, n, i, s) {
          return $o("error", {
            column: i,
            error: s,
            line: n,
            msg: t,
            url: e
          }), !(!Xo || Xo.__SENTRY_LOADER__) && Xo.apply(this, arguments)
        }, Bo.onerror.__SENTRY_INSTRUMENTED__ = !0;
        break;
      case "unhandledrejection":
        tc = Bo.onunhandledrejection, Bo.onunhandledrejection = function(t) {
          return $o("unhandledrejection", t), !(tc && !tc.__SENTRY_LOADER__) || tc.apply(this, arguments)
        }, Bo.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
        break;
      default:
        return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("unknown instrumentation type:", t))
    }
  }

  function Qo(t, e) {
    Po[t] = Po[t] || [], Po[t].push(e), Fo(t)
  }

  function $o(t, e) {
    if (t && Po[t])
      for (const n of Po[t] || []) try {
        n(e)
      } catch (e) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${zo(n)}\nError:`, e)
      }
  }

  function Ho(t, e) {
    return !!t && "object" == typeof t && !!t[e]
  }

  function qo(t) {
    return "string" == typeof t ? t : t ? Ho(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
  }
  let Vo;
  const Wo = 1e3;
  let Zo, Jo;

  function Ko(t, e = !1) {
    return n => {
      if (!n || Jo === n) return;
      if (function(t) {
          if ("keypress" !== t.type) return !1;
          try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
          } catch (t) {}
          return !0
        }(n)) return;
      const i = "keypress" === n.type ? "input" : n.type;
      void 0 === Zo ? (t({
        event: n,
        name: i,
        global: e
      }), Jo = n) : function(t, e) {
        if (!t) return !0;
        if (t.type !== e.type) return !0;
        try {
          if (t.target !== e.target) return !0
        } catch (t) {}
        return !1
      }(Jo, n) && (t({
        event: n,
        name: i,
        global: e
      }), Jo = n), clearTimeout(Zo), Zo = Bo.setTimeout(() => {
        Zo = void 0
      }, Wo)
    }
  }
  let Xo = null;
  let tc = null;

  function ec() {
    const t = eo,
      e = t.crypto || t.msCrypto;
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    const n = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => 16 * Math.random();
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, t => (t ^ (15 & n()) >> t / 4).toString(16))
  }

  function nc(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
  }

  function ic(t) {
    const {
      message: e,
      event_id: n
    } = t;
    if (e) return e;
    const i = nc(t);
    return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || n || "<unknown>" : n || "<unknown>"
  }

  function sc(t, e, n) {
    const i = t.exception = t.exception || {},
      s = i.values = i.values || [],
      r = s[0] = s[0] || {};
    r.value || (r.value = e || ""), r.type || (r.type = n || "Error")
  }

  function rc(t, e) {
    const n = nc(t);
    if (!n) return;
    const i = n.mechanism;
    if (n.mechanism = {
        ...{
          type: "generic",
          handled: !0
        },
        ...i,
        ...e
      }, e && "data" in e) {
      const t = {
        ...i && i.data,
        ...e.data
      };
      n.mechanism.data = t
    }
  }

  function ac(t) {
    if (t && t.__sentry_captured__) return !0;
    try {
      Do(t, "__sentry_captured__", !0)
    } catch (t) {}
    return !1
  }

  function oc(t) {
    return Array.isArray(t) ? t : [t]
  }

  function cc() {
    return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
  }

  function lc(t, e) {
    return t.require(e)
  }

  function uc(t) {
    let e;
    try {
      e = lc(module, t)
    } catch (t) {}
    try {
      const {
        cwd: n
      } = lc(module, "process");
      e = lc(module, `${n()}/node_modules/${t}`)
    } catch (t) {}
    return e
  }

  function dc(t, e = 100, n = 1 / 0) {
    try {
      return function t(e, n, i = 1 / 0, s = 1 / 0, r = function() {
        const t = "function" == typeof WeakSet,
          e = t ? new WeakSet : [];
        return [function(n) {
          if (t) return !!e.has(n) || (e.add(n), !1);
          for (let t = 0; t < e.length; t++)
            if (e[t] === n) return !0;
          return e.push(n), !1
        }, function(n) {
          if (t) e.delete(n);
          else
            for (let t = 0; t < e.length; t++)
              if (e[t] === n) {
                e.splice(t, 1);
                break
              }
        }]
      }()) {
        const [a, o] = r;
        if (null == n || ["number", "boolean", "string"].includes(typeof n) && !Ka(n)) return n;
        const c = function(t, e) {
          try {
            if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
            if ("domainEmitter" === t) return "[DomainEmitter]";
            if ("undefined" != typeof global && e === global) return "[Global]";
            if ("undefined" != typeof window && e === window) return "[Window]";
            if ("undefined" != typeof document && e === document) return "[Document]";
            if (Va(n = e) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n) return "[SyntheticEvent]";
            if ("number" == typeof e && e != e) return "[NaN]";
            if ("function" == typeof e) return `[Function: ${zo(e)}]`;
            if ("symbol" == typeof e) return `[${String(e)}]`;
            if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
            const i = function(t) {
              const e = Object.getPrototypeOf(t);
              return e ? e.constructor.name : "null prototype"
            }(e);
            return /^HTML(\w*)Element$/.test(i) ? `[HTMLElement: ${i}]` : `[object ${i}]`
          } catch (t) {
            return `**non-serializable** (${t})`
          }
          var n
        }(e, n);
        if (!c.startsWith("[object ")) return c;
        if (n.__sentry_skip_normalization__) return n;
        const l = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : i;
        if (0 === l) return c.replace("object ", "");
        if (a(n)) return "[Circular ~]";
        const u = n;
        if (u && "function" == typeof u.toJSON) try {
          const e = u.toJSON();
          return t("", e, l - 1, s, r)
        } catch (t) {}
        const d = Array.isArray(n) ? [] : {};
        let h = 0;
        const p = wo(n);
        for (const e in p) {
          if (!Object.prototype.hasOwnProperty.call(p, e)) continue;
          if (h >= s) {
            d[e] = "[MaxProperties ~]";
            break
          }
          const n = p[e];
          d[e] = t(e, n, l - 1, s, r), h++
        }
        o(n);
        return d
      }("", t, e, n)
    } catch (t) {
      return {
        ERROR: `**non-serializable** (${t})`
      }
    }
  }

  function hc(t, e = 3, n = 102400) {
    const i = dc(t, e);
    return s = i,
      function(t) {
        return ~-encodeURI(t).split(/%..|./).length
      }(JSON.stringify(s)) > n ? hc(t, e - 1, n) : i;
    var s
  }
  var pc;

  function fc(t) {
    return new mc(e => {
      e(t)
    })
  }

  function gc(t) {
    return new mc((e, n) => {
      n(t)
    })
  }! function(t) {
    t[t.PENDING = 0] = "PENDING";
    t[t.RESOLVED = 1] = "RESOLVED";
    t[t.REJECTED = 2] = "REJECTED"
  }(pc || (pc = {}));
  class mc {
    __init() {
      this._state = pc.PENDING
    }
    __init2() {
      this._handlers = []
    }
    constructor(t) {
      mc.prototype.__init.call(this), mc.prototype.__init2.call(this), mc.prototype.__init3.call(this), mc.prototype.__init4.call(this), mc.prototype.__init5.call(this), mc.prototype.__init6.call(this);
      try {
        t(this._resolve, this._reject)
      } catch (t) {
        this._reject(t)
      }
    }
    then(t, e) {
      return new mc((n, i) => {
        this._handlers.push([!1, e => {
          if (t) try {
            n(t(e))
          } catch (t) {
            i(t)
          } else n(e)
        }, t => {
          if (e) try {
            n(e(t))
          } catch (t) {
            i(t)
          } else i(t)
        }]), this._executeHandlers()
      })
    } catch (t) {
      return this.then(t => t, t)
    } finally(t) {
      return new mc((e, n) => {
        let i, s;
        return this.then(e => {
          s = !1, i = e, t && t()
        }, e => {
          s = !0, i = e, t && t()
        }).then(() => {
          s ? n(i) : e(i)
        })
      })
    }
    __init3() {
      this._resolve = (t => {
        this._setResult(pc.RESOLVED, t)
      })
    }
    __init4() {
      this._reject = (t => {
        this._setResult(pc.REJECTED, t)
      })
    }
    __init5() {
      this._setResult = ((t, e) => {
        this._state === pc.PENDING && (Ja(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()))
      })
    }
    __init6() {
      this._executeHandlers = (() => {
        if (this._state === pc.PENDING) return;
        const t = this._handlers.slice();
        this._handlers = [], t.forEach(t => {
          t[0] || (this._state === pc.RESOLVED && t[1](this._value), this._state === pc.REJECTED && t[2](this._value), t[0] = !0)
        })
      })
    }
  }

  function _c(t) {
    const e = [];

    function n(t) {
      return e.splice(e.indexOf(t), 1)[0]
    }
    return {
      $: e,
      add: function(i) {
        if (!(void 0 === t || e.length < t)) return gc(new yo("Not adding Promise because buffer limit was reached."));
        const s = i();
        return -1 === e.indexOf(s) && e.push(s), s.then(() => n(s)).then(null, () => n(s).then(null, () => {})), s
      },
      drain: function(t) {
        return new mc((n, i) => {
          let s = e.length;
          if (!s) return n(!0);
          const r = setTimeout(() => {
            t && t > 0 && n(!1)
          }, t);
          e.forEach(t => {
            fc(t).then(() => {
              --s || (clearTimeout(r), n(!0))
            }, i)
          })
        })
      }
    }
  }

  function yc(t) {
    if (!t) return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e) return {};
    const n = e[6] || "",
      i = e[8] || "";
    return {
      host: e[4],
      path: e[5],
      protocol: e[2],
      search: n,
      hash: i,
      relative: e[5] + n + i
    }
  }

  function vc(t) {
    return t.split(/[\?#]/, 1)[0]
  }

  function bc(t) {
    return t.split(/\\?\//).filter(t => t.length > 0 && "," !== t).length
  }
  const Mc = ["fatal", "error", "warning", "log", "info", "debug"];
  const Nc = no(),
    Dc = {
      nowSeconds: () => Date.now() / 1e3
    };
  const Ic = cc() ? function() {
      try {
        return lc(module, "perf_hooks").performance
      } catch (t) {
        return
      }
    }() : function() {
      const {
        performance: t
      } = Nc;
      if (t && t.now) return {
        now: () => t.now(),
        timeOrigin: Date.now() - t.now()
      }
    }(),
    Sc = void 0 === Ic ? Dc : {
      nowSeconds: () => (Ic.timeOrigin + Ic.now()) / 1e3
    },
    wc = Dc.nowSeconds.bind(Dc),
    Ec = Sc.nowSeconds.bind(Sc),
    kc = (() => {
      const {
        performance: t
      } = Nc;
      if (!t || !t.now) return;
      const e = t.now(),
        n = Date.now(),
        i = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
        s = i < 36e5,
        r = t.timing && t.timing.navigationStart,
        a = "number" == typeof r ? Math.abs(r + e - n) : 36e5;
      return s || a < 36e5 ? i <= a ? t.timeOrigin : r : n
    })(),
    Tc = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

  function xc(t, e = []) {
    return [t, e]
  }

  function Cc(t, e) {
    const [n, i] = t;
    return [n, [...i, e]]
  }

  function Ac(t, e) {
    const n = t[1];
    for (const t of n) {
      if (e(t, t[0].type)) return !0
    }
    return !1
  }

  function jc(t, e) {
    return (e || new TextEncoder).encode(t)
  }

  function zc(t, e) {
    const [n, i] = t;
    let s = JSON.stringify(n);

    function r(t) {
      "string" == typeof s ? s = "string" == typeof t ? s + t : [jc(s, e), t] : s.push("string" == typeof t ? jc(t, e) : t)
    }
    for (const t of i) {
      const [e, n] = t;
      if (r(`\n${JSON.stringify(e)}\n`), "string" == typeof n || n instanceof Uint8Array) r(n);
      else {
        let t;
        try {
          t = JSON.stringify(n)
        } catch (e) {
          t = JSON.stringify(dc(n))
        }
        r(t)
      }
    }
    return "string" == typeof s ? s : function(t) {
      const e = t.reduce((t, e) => t + e.length, 0),
        n = new Uint8Array(e);
      let i = 0;
      for (const e of t) n.set(e, i), i += e.length;
      return n
    }(s)
  }

  function Oc(t, e) {
    const n = "string" == typeof t.data ? jc(t.data, e) : t.data;
    return [To({
      type: "attachment",
      length: n.length,
      filename: t.filename,
      content_type: t.contentType,
      attachment_type: t.attachmentType
    }), n]
  }
  const Lc = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor"
  };

  function Rc(t) {
    return Lc[t]
  }

  function Uc(t) {
    if (!t || !t.sdk) return;
    const {
      name: e,
      version: n
    } = t.sdk;
    return {
      name: e,
      version: n
    }
  }

  function Bc(t, e, n, i) {
    const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: t.event_id,
      sent_at: (new Date).toISOString(),
      ...e && {
        sdk: e
      },
      ...!!n && {
        dsn: go(i)
      },
      ...s && {
        trace: To({
          ...s
        })
      }
    }
  }
  const Yc = 6e4;

  function Pc(t, {
    statusCode: e,
    headers: n
  }, i = Date.now()) {
    const s = {
        ...t
      },
      r = n && n["x-sentry-rate-limits"],
      a = n && n["retry-after"];
    if (r)
      for (const t of r.trim().split(",")) {
        const [e, n] = t.split(":", 2), r = parseInt(e, 10), a = 1e3 * (isNaN(r) ? 60 : r);
        if (n)
          for (const t of n.split(";")) s[t] = i + a;
        else s.all = i + a
      } else a ? s.all = i + function(t, e = Date.now()) {
        const n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        const i = Date.parse(`${t}`);
        return isNaN(i) ? Yc : i - e
      }(a, i) : 429 === e && (s.all = i + 6e4);
    return s
  }
  const Gc = "baggage",
    Fc = "sentry-",
    Qc = /^sentry-/,
    $c = 8192;

  function Hc(t) {
    return function(t) {
      if (0 === Object.keys(t).length) return;
      return Object.entries(t).reduce((t, [e, n], i) => {
        const s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
          r = 0 === i ? s : `${t},${s}`;
        return r.length > $c ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : r
      }, "")
    }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${Fc}${e}`] = n), t), {}))
  }

  function qc(t) {
    return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
  }
  const Vc = "production";

  function Wc(t) {
    const e = Ec(),
      n = {
        sid: ec(),
        init: !0,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => (function(t) {
          return To({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(1e3 * t.started).toISOString(),
            timestamp: new Date(1e3 * t.timestamp).toISOString(),
            status: t.status,
            errors: t.errors,
            did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
            duration: t.duration,
            attrs: {
              release: t.release,
              environment: t.environment,
              ip_address: t.ipAddress,
              user_agent: t.userAgent
            }
          })
        })(n)
      };
    return t && Zc(n, t), n
  }

  function Zc(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Ec(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : ec()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
    else if ("number" == typeof e.duration) t.duration = e.duration;
    else {
      const e = t.timestamp - t.started;
      t.duration = e >= 0 ? e : 0
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
  }
  const Jc = 100;
  class Kc {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
    }
    static clone(t) {
      const e = new Kc;
      return t && (e._breadcrumbs = [...t._breadcrumbs], e._tags = {
        ...t._tags
      }, e._extra = {
        ...t._extra
      }, e._contexts = {
        ...t._contexts
      }, e._user = t._user, e._level = t._level, e._span = t._span, e._session = t._session, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = [...t._eventProcessors], e._requestSession = t._requestSession, e._attachments = [...t._attachments], e._sdkProcessingMetadata = {
        ...t._sdkProcessingMetadata
      }), e
    }
    addScopeListener(t) {
      this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
      return this._eventProcessors.push(t), this
    }
    setUser(t) {
      return this._user = t || {}, this._session && Zc(this._session, {
        user: t
      }), this._notifyScopeListeners(), this
    }
    getUser() {
      return this._user
    }
    getRequestSession() {
      return this._requestSession
    }
    setRequestSession(t) {
      return this._requestSession = t, this
    }
    setTags(t) {
      return this._tags = {
        ...this._tags,
        ...t
      }, this._notifyScopeListeners(), this
    }
    setTag(t, e) {
      return this._tags = {
        ...this._tags,
        [t]: e
      }, this._notifyScopeListeners(), this
    }
    setExtras(t) {
      return this._extra = {
        ...this._extra,
        ...t
      }, this._notifyScopeListeners(), this
    }
    setExtra(t, e) {
      return this._extra = {
        ...this._extra,
        [t]: e
      }, this._notifyScopeListeners(), this
    }
    setFingerprint(t) {
      return this._fingerprint = t, this._notifyScopeListeners(), this
    }
    setLevel(t) {
      return this._level = t, this._notifyScopeListeners(), this
    }
    setTransactionName(t) {
      return this._transactionName = t, this._notifyScopeListeners(), this
    }
    setContext(t, e) {
      return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
    }
    setSpan(t) {
      return this._span = t, this._notifyScopeListeners(), this
    }
    getSpan() {
      return this._span
    }
    getTransaction() {
      const t = this.getSpan();
      return t && t.transaction
    }
    setSession(t) {
      return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
      return this._session
    }
    update(t) {
      if (!t) return this;
      if ("function" == typeof t) {
        const e = t(this);
        return e instanceof Kc ? e : this
      }
      return t instanceof Kc ? (this._tags = {
        ...this._tags,
        ...t._tags
      }, this._extra = {
        ...this._extra,
        ...t._extra
      }, this._contexts = {
        ...this._contexts,
        ...t._contexts
      }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : Va(t) && (t = t, this._tags = {
        ...this._tags,
        ...t.tags
      }, this._extra = {
        ...this._extra,
        ...t.extra
      }, this._contexts = {
        ...this._contexts,
        ...t.contexts
      }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
    }
    addBreadcrumb(t, e) {
      const n = "number" == typeof e ? e : Jc;
      if (n <= 0) return this;
      const i = {
        timestamp: wc(),
        ...t
      };
      return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(t) {
      return this._attachments.push(t), this
    }
    getAttachments() {
      return this._attachments
    }
    clearAttachments() {
      return this._attachments = [], this
    }
    applyToEvent(t, e = {}) {
      if (this._extra && Object.keys(this._extra).length && (t.extra = {
          ...this._extra,
          ...t.extra
        }), this._tags && Object.keys(this._tags).length && (t.tags = {
          ...this._tags,
          ...t.tags
        }), this._user && Object.keys(this._user).length && (t.user = {
          ...this._user,
          ...t.user
        }), this._contexts && Object.keys(this._contexts).length && (t.contexts = {
          ...this._contexts,
          ...t.contexts
        }), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
        t.contexts = {
          trace: this._span.getTraceContext(),
          ...t.contexts
        };
        const e = this._span.transaction;
        if (e) {
          t.sdkProcessingMetadata = {
            dynamicSamplingContext: e.getDynamicSamplingContext(),
            ...t.sdkProcessingMetadata
          };
          const n = e.name;
          n && (t.tags = {
            transaction: n,
            ...t.tags
          })
        }
      }
      return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        ...this._sdkProcessingMetadata
      }, this._notifyEventProcessors([...Xc(), ...this._eventProcessors], t, e)
    }
    setSDKProcessingMetadata(t) {
      return this._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata,
        ...t
      }, this
    }
    _notifyEventProcessors(t, e, n, i = 0) {
      return new mc((s, r) => {
        const a = t[i];
        if (null === e || "function" != typeof a) s(e);
        else {
          const o = a({
            ...e
          }, n);
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.id && null === o && po.log(`Event processor "${a.id}" dropped event`), Ja(o) ? o.then(e => this._notifyEventProcessors(t, e, n, i + 1).then(s)).then(null, r) : this._notifyEventProcessors(t, o, n, i + 1).then(s).then(null, r)
        }
      })
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
        t(this)
      }), this._notifyingListeners = !1)
    }
    _applyFingerprint(t) {
      t.fingerprint = t.fingerprint ? oc(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
    }
  }

  function Xc() {
    return io("globalEventProcessors", () => [])
  }

  function tl(t) {
    Xc().push(t)
  }
  const el = 4,
    nl = 100;
  class il {
    constructor(t, e = new Kc, n = el) {
      this._version = n, this._stack = [{
        scope: e
      }], t && this.bindClient(t)
    }
    isOlderThan(t) {
      return this._version < t
    }
    bindClient(t) {
      this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
    }
    pushScope() {
      const t = Kc.clone(this.getScope());
      return this.getStack().push({
        client: this.getClient(),
        scope: t
      }), t
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop()
    }
    withScope(t) {
      const e = this.pushScope();
      try {
        t(e)
      } finally {
        this.popScope()
      }
    }
    getClient() {
      return this.getStackTop().client
    }
    getScope() {
      return this.getStackTop().scope
    }
    getStack() {
      return this._stack
    }
    getStackTop() {
      return this._stack[this._stack.length - 1]
    }
    captureException(t, e) {
      const n = this._lastEventId = e && e.event_id ? e.event_id : ec(),
        i = new Error("Sentry syntheticException");
      return this._withClient((s, r) => {
        s.captureException(t, {
          originalException: t,
          syntheticException: i,
          ...e,
          event_id: n
        }, r)
      }), n
    }
    captureMessage(t, e, n) {
      const i = this._lastEventId = n && n.event_id ? n.event_id : ec(),
        s = new Error(t);
      return this._withClient((r, a) => {
        r.captureMessage(t, e, {
          originalException: t,
          syntheticException: s,
          ...n,
          event_id: i
        }, a)
      }), i
    }
    captureEvent(t, e) {
      const n = e && e.event_id ? e.event_id : ec();
      return t.type || (this._lastEventId = n), this._withClient((i, s) => {
        i.captureEvent(t, {
          ...e,
          event_id: n
        }, s)
      }), n
    }
    lastEventId() {
      return this._lastEventId
    }
    addBreadcrumb(t, e) {
      const {
        scope: n,
        client: i
      } = this.getStackTop();
      if (!i) return;
      const {
        beforeBreadcrumb: s = null,
        maxBreadcrumbs: r = nl
      } = i.getOptions && i.getOptions() || {};
      if (r <= 0) return;
      const a = {
          timestamp: wc(),
          ...t
        },
        o = s ? uo(() => s(a, e)) : a;
      null !== o && (i.emit && i.emit("beforeAddBreadcrumb", o, e), n.addBreadcrumb(o, r))
    }
    setUser(t) {
      this.getScope().setUser(t)
    }
    setTags(t) {
      this.getScope().setTags(t)
    }
    setExtras(t) {
      this.getScope().setExtras(t)
    }
    setTag(t, e) {
      this.getScope().setTag(t, e)
    }
    setExtra(t, e) {
      this.getScope().setExtra(t, e)
    }
    setContext(t, e) {
      this.getScope().setContext(t, e)
    }
    configureScope(t) {
      const {
        scope: e,
        client: n
      } = this.getStackTop();
      n && t(e)
    }
    run(t) {
      const e = rl(this);
      try {
        t(this)
      } finally {
        rl(e)
      }
    }
    getIntegration(t) {
      const e = this.getClient();
      if (!e) return null;
      try {
        return e.getIntegration(t)
      } catch (e) {
        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
      }
    }
    startTransaction(t, e) {
      const n = this._callExtensionMethod("startTransaction", t, e);
      return "undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || n || console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"), n
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders")
    }
    captureSession(t = !1) {
      if (t) return this.endSession();
      this._sendSessionUpdate()
    }
    endSession() {
      const t = this.getStackTop().scope,
        e = t.getSession();
      e && function(t, e) {
        let n = {};
        e ? n = {
          status: e
        } : "ok" === t.status && (n = {
          status: "exited"
        }), Zc(t, n)
      }(e), this._sendSessionUpdate(), t.setSession()
    }
    startSession(t) {
      const {
        scope: e,
        client: n
      } = this.getStackTop(), {
        release: i,
        environment: s = Vc
      } = n && n.getOptions() || {}, {
        userAgent: r
      } = eo.navigator || {}, a = Wc({
        release: i,
        environment: s,
        user: e.getUser(),
        ...r && {
          userAgent: r
        },
        ...t
      }), o = e.getSession && e.getSession();
      return o && "ok" === o.status && Zc(o, {
        status: "exited"
      }), this.endSession(), e.setSession(a), a
    }
    shouldSendDefaultPii() {
      const t = this.getClient(),
        e = t && t.getOptions();
      return Boolean(e && e.sendDefaultPii)
    }
    _sendSessionUpdate() {
      const {
        scope: t,
        client: e
      } = this.getStackTop(), n = t.getSession();
      n && e && e.captureSession && e.captureSession(n)
    }
    _withClient(t) {
      const {
        scope: e,
        client: n
      } = this.getStackTop();
      n && t(n, e)
    }
    _callExtensionMethod(t, ...e) {
      const n = sl().__SENTRY__;
      if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Extension method ${t} couldn't be found, doing nothing.`)
    }
  }

  function sl() {
    return eo.__SENTRY__ = eo.__SENTRY__ || {
      extensions: {},
      hub: void 0
    }, eo
  }

  function rl(t) {
    const e = sl(),
      n = ol(e);
    return cl(e, t), n
  }

  function al() {
    const t = sl();
    if (t.__SENTRY__ && t.__SENTRY__.acs) {
      const e = t.__SENTRY__.acs.getCurrentHub();
      if (e) return e
    }
    return function(t = sl()) {
      e = t, e && e.__SENTRY__ && e.__SENTRY__.hub && !ol(t).isOlderThan(el) || cl(t, new il);
      var e;
      return ol(t)
    }(t)
  }

  function ol(t) {
    return io("hub", () => new il, t)
  }

  function cl(t, e) {
    if (!t) return !1;
    return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0
  }

  function ll(t) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    const e = al().getClient(),
      n = t || e && e.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  }

  function ul(t) {
    return (t || al()).getScope().getTransaction()
  }
  let dl = !1;

  function hl() {
    const t = ul();
    if (t) {
      const e = "internal_error";
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
    }
  }
  hl.tag = "sentry_tracingErrorCallback";
  class pl {
    __init() {
      this.spans = []
    }
    constructor(t = 1e3) {
      pl.prototype.__init.call(this), this._maxlen = t
    }
    add(t) {
      this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
    }
  }
  class fl {
    __init2() {
      this.traceId = ec()
    }
    __init3() {
      this.spanId = ec().substring(16)
    }
    __init4() {
      this.startTimestamp = Ec()
    }
    __init5() {
      this.tags = {}
    }
    __init6() {
      this.data = {}
    }
    __init7() {
      this.instrumenter = "sentry"
    }
    constructor(t) {
      if (fl.prototype.__init2.call(this), fl.prototype.__init3.call(this), fl.prototype.__init4.call(this), fl.prototype.__init5.call(this), fl.prototype.__init6.call(this), fl.prototype.__init7.call(this), !t) return this;
      t.traceId && (this.traceId = t.traceId), t.spanId && (this.spanId = t.spanId), t.parentSpanId && (this.parentSpanId = t.parentSpanId), "sampled" in t && (this.sampled = t.sampled), t.op && (this.op = t.op), t.description && (this.description = t.description), t.data && (this.data = t.data), t.tags && (this.tags = t.tags), t.status && (this.status = t.status), t.startTimestamp && (this.startTimestamp = t.startTimestamp), t.endTimestamp && (this.endTimestamp = t.endTimestamp), t.instrumenter && (this.instrumenter = t.instrumenter)
    }
    startChild(t) {
      const e = new fl({
        ...t,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId
      });
      if (e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e), e.transaction = this.transaction, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
        const n = `[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`;
        e.transaction.metadata.spanMetadata[e.spanId] = {
          logMessage: n
        }, po.log(n)
      }
      return e
    }
    setTag(t, e) {
      return this.tags = {
        ...this.tags,
        [t]: e
      }, this
    }
    setData(t, e) {
      return this.data = {
        ...this.data,
        [t]: e
      }, this
    }
    setStatus(t) {
      return this.status = t, this
    }
    setHttpStatus(t) {
      this.setTag("http.status_code", String(t));
      const e = function(t) {
        if (t < 400 && t >= 100) return "ok";
        if (t >= 400 && t < 500) switch (t) {
          case 401:
            return "unauthenticated";
          case 403:
            return "permission_denied";
          case 404:
            return "not_found";
          case 409:
            return "already_exists";
          case 413:
            return "failed_precondition";
          case 429:
            return "resource_exhausted";
          default:
            return "invalid_argument"
        }
        if (t >= 500 && t < 600) switch (t) {
          case 501:
            return "unimplemented";
          case 503:
            return "unavailable";
          case 504:
            return "deadline_exceeded";
          default:
            return "internal_error"
        }
        return "unknown_error"
      }(t);
      return "unknown_error" !== e && this.setStatus(e), this
    }
    isSuccess() {
      return "ok" === this.status
    }
    finish(t) {
      if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
        const {
          logMessage: t
        } = this.transaction.metadata.spanMetadata[this.spanId];
        t && po.log(t.replace("Starting", "Finishing"))
      }
      this.endTimestamp = "number" == typeof t ? t : Ec()
    }
    toTraceparent() {
      let t = "";
      return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"), `${this.traceId}-${this.spanId}${t}`
    }
    toContext() {
      return To({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId
      })
    }
    updateWithContext(t) {
      return this.data = t.data || {}, this.description = t.description, this.endTimestamp = t.endTimestamp, this.op = t.op, this.parentSpanId = t.parentSpanId, this.sampled = t.sampled, this.spanId = t.spanId || this.spanId, this.startTimestamp = t.startTimestamp || this.startTimestamp, this.status = t.status, this.tags = t.tags || {}, this.traceId = t.traceId || this.traceId, this
    }
    getTraceContext() {
      return To({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        trace_id: this.traceId
      })
    }
    toJSON() {
      return To({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this.endTimestamp,
        trace_id: this.traceId
      })
    }
  }
  class gl extends fl {
    __init() {
      this._measurements = {}
    }
    __init2() {
      this._contexts = {}
    }
    __init3() {
      this._frozenDynamicSamplingContext = void 0
    }
    constructor(t, e) {
      super(t), gl.prototype.__init.call(this), gl.prototype.__init2.call(this), gl.prototype.__init3.call(this), this._hub = e || al(), this._name = t.name || "", this.metadata = {
        source: "custom",
        ...t.metadata,
        spanMetadata: {}
      }, this._trimEnd = t.trimEnd, this.transaction = this;
      const n = this.metadata.dynamicSamplingContext;
      n && (this._frozenDynamicSamplingContext = {
        ...n
      })
    }
    get name() {
      return this._name
    }
    set name(t) {
      this.setName(t)
    }
    setName(t, e = "custom") {
      this._name = t, this.metadata.source = e
    }
    initSpanRecorder(t = 1e3) {
      this.spanRecorder || (this.spanRecorder = new pl(t)), this.spanRecorder.add(this)
    }
    setContext(t, e) {
      null === e ? delete this._contexts[t] : this._contexts[t] = e
    }
    setMeasurement(t, e, n = "") {
      this._measurements[t] = {
        value: e,
        unit: n
      }
    }
    setMetadata(t) {
      this.metadata = {
        ...this.metadata,
        ...t
      }
    }
    finish(t) {
      if (void 0 !== this.endTimestamp) return;
      this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
      const e = this._hub.getClient();
      if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(e && e.recordDroppedEvent("sample_rate", "transaction"));
      const n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
      this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
      const i = this.metadata,
        s = {
          contexts: {
            ...this._contexts,
            trace: this.getTraceContext()
          },
          spans: n,
          start_timestamp: this.startTimestamp,
          tags: this.tags,
          timestamp: this.endTimestamp,
          transaction: this.name,
          type: "transaction",
          sdkProcessingMetadata: {
            ...i,
            dynamicSamplingContext: this.getDynamicSamplingContext()
          },
          ...i.source && {
            transaction_info: {
              source: i.source
            }
          }
        };
      return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), s.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(s)
    }
    toContext() {
      return To({
        ...super.toContext(),
        name: this.name,
        trimEnd: this._trimEnd
      })
    }
    updateWithContext(t) {
      return super.updateWithContext(t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
    }
    getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
      const t = this._hub || al(),
        e = t && t.getClient();
      if (!e) return {};
      const {
        environment: n,
        release: i
      } = e.getOptions() || {}, {
        publicKey: s
      } = e.getDsn() || {}, r = this.metadata.sampleRate, a = void 0 !== r ? r.toString() : void 0, {
        segment: o
      } = t.getScope().getUser() || {}, c = this.metadata.source, l = c && "url" !== c ? this.name : void 0, u = To({
        environment: n || Vc,
        release: i,
        transaction: l,
        user_segment: o,
        public_key: s,
        trace_id: this.traceId,
        sample_rate: a
      });
      return e.emit && e.emit("createDsc", u), u
    }
    setHub(t) {
      this._hub = t
    }
  }
  const ml = {
      idleTimeout: 1e3,
      finalTimeout: 3e4,
      heartbeatInterval: 5e3
    },
    _l = "finishReason",
    yl = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
  class vl extends pl {
    constructor(t, e, n, i) {
      super(i), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
    }
    add(t) {
      t.spanId !== this.transactionSpanId && (t.finish = (e => {
        t.endTimestamp = "number" == typeof e ? e : Ec(), this._popActivity(t.spanId)
      }), void 0 === t.endTimestamp && this._pushActivity(t.spanId)), super.add(t)
    }
  }
  class bl extends gl {
    __init() {
      this.activities = {}
    }
    __init2() {
      this._heartbeatCounter = 0
    }
    __init3() {
      this._finished = !1
    }
    __init4() {
      this._idleTimeoutCanceledPermanently = !1
    }
    __init5() {
      this._beforeFinishCallbacks = []
    }
    __init6() {
      this._finishReason = yl[4]
    }
    constructor(t, e, n = ml.idleTimeout, i = ml.finalTimeout, s = ml.heartbeatInterval, r = !1) {
      super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = i, this._heartbeatInterval = s, this._onScope = r, bl.prototype.__init.call(this), bl.prototype.__init2.call(this), bl.prototype.__init3.call(this), bl.prototype.__init4.call(this), bl.prototype.__init5.call(this), bl.prototype.__init6.call(this), r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), e.configureScope(t => t.setSpan(this))), this._restartIdleTimeout(), setTimeout(() => {
        this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = yl[3], this.finish())
      }, this._finalTimeout)
    }
    finish(t = Ec()) {
      if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setTag(_l, this._finishReason), this.spanRecorder) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
        for (const e of this._beforeFinishCallbacks) e(this, t);
        this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
          if (e.spanId === this.spanId) return !0;
          e.endTimestamp || (e.endTimestamp = t, e.setStatus("cancelled"), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
          const n = e.startTimestamp < t;
          return n || ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)), n
        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] flushing IdleTransaction")
      } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        const t = this._idleHub.getScope();
        t.getTransaction() === this && t.setSpan(void 0)
      }
      return super.finish(t)
    }
    registerBeforeFinishCallback(t) {
      this._beforeFinishCallbacks.push(t)
    }
    initSpanRecorder(t) {
      if (!this.spanRecorder) {
        const e = t => {
            this._finished || this._pushActivity(t)
          },
          n = t => {
            this._finished || this._popActivity(t)
          };
        this.spanRecorder = new vl(e, n, this.spanId, t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Starting heartbeat"), this._pingHeartbeat()
      }
      this.spanRecorder.add(this)
    }
    cancelIdleTimeout(t, {
      restartOnChildSpanChange: e
    } = {
      restartOnChildSpanChange: !0
    }) {
      this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = yl[5], this.finish(t)))
    }
    setFinishReason(t) {
      this._finishReason = t
    }
    _restartIdleTimeout(t) {
      this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
        this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = yl[1], this.finish(t))
      }, this._idleTimeout)
    }
    _pushActivity(t) {
      this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
      }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] new activities count", Object.keys(this.activities).length)
    }
    _popActivity(t) {
      if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] popActivity ${t}`), delete this.activities[t], ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
        const t = Ec();
        this._idleTimeoutCanceledPermanently ? (this._finishReason = yl[5], this.finish(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
      }
    }
    _beat() {
      if (this._finished) return;
      const t = Object.keys(this.activities).join("");
      t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = yl[0], this.finish()) : this._pingHeartbeat()
    }
    _pingHeartbeat() {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
        this._beat()
      }, this._heartbeatInterval)
    }
  }

  function Ml() {
    const t = this.getScope().getSpan();
    return t ? {
      "sentry-trace": t.toTraceparent()
    } : {}
  }

  function Nl(t, e, n) {
    if (!ll(e)) return t.sampled = !1, t;
    if (void 0 !== t.sampled) return t.setMetadata({
      sampleRate: Number(t.sampled)
    }), t;
    let i;
    return "function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
        sampleRate: Number(i)
      })) : void 0 !== n.parentSampled ? i = n.parentSampled : void 0 !== e.tracesSampleRate ? (i = e.tracesSampleRate, t.setMetadata({
        sampleRate: Number(i)
      })) : (i = 1, t.setMetadata({
        sampleRate: i
      })),
      function(t) {
        if (Ka(t) || "number" != typeof t && "boolean" != typeof t) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1;
        if (t < 0 || t > 1) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1;
        return !0
      }(i) ? i ? (t.sampled = Math.random() < i, t.sampled ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), t)) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)
  }

  function Dl(t, e) {
    const n = this.getClient(),
      i = n && n.getOptions() || {},
      s = i.instrumenter || "sentry",
      r = t.instrumenter || "sentry";
    s !== r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`), t.sampled = !1);
    let a = new gl(t, this);
    return (a = Nl(a, i, {
      parentSampled: t.parentSampled,
      transactionContext: t,
      ...e
    })).sampled && a.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", a), a
  }

  function Il(t, e, n, i, s, r, a) {
    const o = t.getClient(),
      c = o && o.getOptions() || {};
    let l = new bl(e, t, n, i, a, s);
    return (l = Nl(l, c, {
      parentSampled: e.parentSampled,
      transactionContext: e,
      ...r
    })).sampled && l.initSpanRecorder(c._experiments && c._experiments.maxSpans), o && o.emit && o.emit("startTransaction", l), l
  }

  function Sl() {
    const t = sl();
    t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = Dl), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = Ml), dl || (dl = !0, Qo("error", hl), Qo("unhandledrejection", hl)))
  }
  var wl;

  function El(t, e) {
    return al().captureException(t, {
      captureContext: e
    })
  }! function(t) {
    t.Ok = "ok";
    t.DeadlineExceeded = "deadline_exceeded";
    t.Unauthenticated = "unauthenticated";
    t.PermissionDenied = "permission_denied";
    t.NotFound = "not_found";
    t.ResourceExhausted = "resource_exhausted";
    t.InvalidArgument = "invalid_argument";
    t.Unimplemented = "unimplemented";
    t.Unavailable = "unavailable";
    t.InternalError = "internal_error";
    t.UnknownError = "unknown_error";
    t.Cancelled = "cancelled";
    t.AlreadyExists = "already_exists";
    t.FailedPrecondition = "failed_precondition";
    t.Aborted = "aborted";
    t.OutOfRange = "out_of_range";
    t.DataLoss = "data_loss"
  }(wl || (wl = {}));
  const kl = "7";

  function Tl(t, e) {
    return n = {
      sentry_key: t.publicKey,
      sentry_version: kl,
      ...e && {
        sentry_client: `${e.name}/${e.version}`
      }
    }, Object.keys(n).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`).join("&");
    var n
  }
  const xl = [];

  function Cl(t) {
    const e = t.defaultIntegrations || [],
      n = t.integrations;
    let i;
    e.forEach(t => {
      t.isDefaultInstance = !0
    });
    const s = function(t) {
        const e = {};
        return t.forEach(t => {
          const {
            name: n
          } = t, i = e[n];
          i && !i.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
        }), Object.keys(e).map(t => e[t])
      }(i = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? oc(n(e)) : e),
      r = function(t, e) {
        for (let n = 0; n < t.length; n++)
          if (!0 === e(t[n])) return n;
        return -1
      }(s, t => "Debug" === t.name);
    if (-1 !== r) {
      const [t] = s.splice(r, 1);
      s.push(t)
    }
    return s
  }

  function Al(t, e) {
    e[t.name] = t, -1 === xl.indexOf(t.name) && (t.setupOnce(tl, al), xl.push(t.name), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`Integration installed: ${t.name}`))
  }

  function jl(t, e, n, i) {
    const {
      normalizeDepth: s = 3,
      normalizeMaxBreadth: r = 1e3
    } = t, a = {
      ...e,
      event_id: e.event_id || n.event_id || ec(),
      timestamp: e.timestamp || wc()
    }, o = n.integrations || t.integrations.map(t => t.name);
    ! function(t, e) {
      const {
        environment: n,
        release: i,
        dist: s,
        maxValueLength: r = 250
      } = e;
      "environment" in t || (t.environment = "environment" in e ? n : Vc);
      void 0 === t.release && void 0 !== i && (t.release = i);
      void 0 === t.dist && void 0 !== s && (t.dist = s);
      t.message && (t.message = vo(t.message, r));
      const a = t.exception && t.exception.values && t.exception.values[0];
      a && a.value && (a.value = vo(a.value, r));
      const o = t.request;
      o && o.url && (o.url = vo(o.url, r))
    }(a, t),
    function(t, e) {
      e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }(a, o), void 0 === e.type && function(t, e) {
      const n = eo._sentryDebugIds;
      if (!n) return;
      let i;
      const s = zl.get(e);
      s ? i = s : (i = new Map, zl.set(e, i));
      const r = Object.keys(n).reduce((t, s) => {
        let r;
        const a = i.get(s);
        a ? r = a : (r = e(s), i.set(s, r));
        for (let e = r.length - 1; e >= 0; e--) {
          const i = r[e];
          if (i.filename) {
            t[i.filename] = n[s];
            break
          }
        }
        return t
      }, {});
      try {
        t.exception.values.forEach(t => {
          t.stacktrace.frames.forEach(t => {
            t.filename && (t.debug_id = r[t.filename])
          })
        })
      } catch (t) {}
    }(a, t.stackParser);
    let c = i;
    n.captureContext && (c = Kc.clone(c).update(n.captureContext));
    let l = fc(a);
    if (c) {
      if (c.getAttachments) {
        const t = [...n.attachments || [], ...c.getAttachments()];
        t.length && (n.attachments = t)
      }
      l = c.applyToEvent(a, n)
    }
    return l.then(t => (t && function(t) {
      const e = {};
      try {
        t.exception.values.forEach(t => {
          t.stacktrace.frames.forEach(t => {
            t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
          })
        })
      } catch (t) {}
      if (0 === Object.keys(e).length) return;
      t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
      const n = t.debug_meta.images;
      Object.keys(e).forEach(t => {
        n.push({
          type: "sourcemap",
          code_file: t,
          debug_id: e[t]
        })
      })
    }(t), "number" == typeof s && s > 0 ? function(t, e, n) {
      if (!t) return null;
      const i = {
        ...t,
        ...t.breadcrumbs && {
          breadcrumbs: t.breadcrumbs.map(t => ({
            ...t,
            ...t.data && {
              data: dc(t.data, e, n)
            }
          }))
        },
        ...t.user && {
          user: dc(t.user, e, n)
        },
        ...t.contexts && {
          contexts: dc(t.contexts, e, n)
        },
        ...t.extra && {
          extra: dc(t.extra, e, n)
        }
      };
      t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = dc(t.contexts.trace.data, e, n)));
      t.spans && (i.spans = t.spans.map(t => (t.data && (t.data = dc(t.data, e, n)), t)));
      return i
    }(t, s, r) : t))
  }
  const zl = new WeakMap;
  const Ol = "Not capturing exception because it's already been captured.";
  class Ll {
    __init() {
      this._integrations = {}
    }
    __init2() {
      this._integrationsInitialized = !1
    }
    __init3() {
      this._numProcessing = 0
    }
    __init4() {
      this._outcomes = {}
    }
    __init5() {
      this._hooks = {}
    }
    constructor(t) {
      if (Ll.prototype.__init.call(this), Ll.prototype.__init2.call(this), Ll.prototype.__init3.call(this), Ll.prototype.__init4.call(this), Ll.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = _o(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("No DSN provided, client will not do anything."), this._dsn) {
        const e = function(t, e = {}) {
          const n = "string" == typeof e ? e : e.tunnel,
            i = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
          return n || `${function(t){return`${function(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}(t)}${t.projectId}/envelope/`}(t)}?${Tl(t,i)}`
        }(this._dsn, t);
        this._transport = t.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...t.transportOptions,
          url: e
        })
      }
    }
    captureException(t, e, n) {
      if (ac(t)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(Ol));
      let i = e && e.event_id;
      return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
        i = t
      })), i
    }
    captureMessage(t, e, n, i) {
      let s = n && n.event_id;
      const r = qa(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
      return this._process(r.then(t => this._captureEvent(t, n, i)).then(t => {
        s = t
      })), s
    }
    captureEvent(t, e, n) {
      if (e && e.originalException && ac(e.originalException)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(Ol));
      let i = e && e.event_id;
      return this._process(this._captureEvent(t, e, n).then(t => {
        i = t
      })), i
    }
    captureSession(t) {
      this._isEnabled() ? "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), Zc(t, {
        init: !1
      })) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("SDK not enabled, will not capture session.")
    }
    getDsn() {
      return this._dsn
    }
    getOptions() {
      return this._options
    }
    getSdkMetadata() {
      return this._options._metadata
    }
    getTransport() {
      return this._transport
    }
    flush(t) {
      const e = this._transport;
      return e ? this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t)) : fc(!0)
    }
    close(t) {
      return this.flush(t).then(t => (this.getOptions().enabled = !1, t))
    }
    setupIntegrations() {
      this._isEnabled() && !this._integrationsInitialized && (this._integrations = function(t) {
        const e = {};
        return t.forEach(t => {
          t && Al(t, e)
        }), e
      }(this._options.integrations), this._integrationsInitialized = !0)
    }
    getIntegrationById(t) {
      return this._integrations[t]
    }
    getIntegration(t) {
      try {
        return this._integrations[t.id] || null
      } catch (e) {
        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
      }
    }
    addIntegration(t) {
      Al(t, this._integrations)
    }
    sendEvent(t, e = {}) {
      if (this._dsn) {
        let n = function(t, e, n, i) {
          const s = Uc(n),
            r = t.type && "replay_event" !== t.type ? t.type : "event";
          ! function(t, e) {
            e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
          }(t, n && n.sdk);
          const a = Bc(t, s, i, e);
          return delete t.sdkProcessingMetadata, xc(a, [
            [{
              type: r
            }, t]
          ])
        }(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const t of e.attachments || []) n = Cc(n, Oc(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
        const i = this._sendEnvelope(n);
        i && i.then(e => this.emit("afterSendEvent", t, e), null)
      }
    }
    sendSession(t) {
      if (this._dsn) {
        const e = function(t, e, n, i) {
          const s = Uc(n);
          return xc({
            sent_at: (new Date).toISOString(),
            ...s && {
              sdk: s
            },
            ...!!i && {
              dsn: go(e)
            }
          }, ["aggregates" in t ? [{
            type: "sessions"
          }, t] : [{
            type: "session"
          }, t.toJSON()]])
        }(t, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(e)
      }
    }
    recordDroppedEvent(t, e, n) {
      if (this._options.sendClientReports) {
        const n = `${t}:${e}`;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
      }
    }
    on(t, e) {
      this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
    }
    emit(t, ...e) {
      this._hooks[t] && this._hooks[t].forEach(t => t(...e))
    }
    _updateSessionFromEvent(t, e) {
      let n = !1,
        i = !1;
      const s = e.exception && e.exception.values;
      if (s) {
        i = !0;
        for (const t of s) {
          const e = t.mechanism;
          if (e && !1 === e.handled) {
            n = !0;
            break
          }
        }
      }
      const r = "ok" === t.status;
      (r && 0 === t.errors || r && n) && (Zc(t, {
        ...n && {
          status: "crashed"
        },
        errors: t.errors || Number(i || n)
      }), this.captureSession(t))
    }
    _isClientDoneProcessing(t) {
      return new mc(e => {
        let n = 0;
        const i = setInterval(() => {
          0 == this._numProcessing ? (clearInterval(i), e(!0)) : t && (n += 1) >= t && (clearInterval(i), e(!1))
        }, 1)
      })
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._dsn
    }
    _prepareEvent(t, e, n) {
      const i = this.getOptions(),
        s = Object.keys(this._integrations);
      return !e.integrations && s.length > 0 && (e.integrations = s), jl(i, t, e, n)
    }
    _captureEvent(t, e = {}, n) {
      return this._processEvent(t, e, n).then(t => t.event_id, t => {
        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
          const e = t;
          "log" === e.logLevel ? po.log(e.message) : po.warn(e)
        }
      })
    }
    _processEvent(t, e, n) {
      const i = this.getOptions(),
        {
          sampleRate: s
        } = i;
      if (!this._isEnabled()) return gc(new yo("SDK not enabled, will not capture event.", "log"));
      const r = Ul(t),
        a = Rl(t),
        o = t.type || "error",
        c = `before send for type \`${o}\``;
      if (a && "number" == typeof s && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", t), gc(new yo(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
      const l = "replay_event" === o ? "replay" : o;
      return this._prepareEvent(t, e, n).then(n => {
        if (null === n) throw this.recordDroppedEvent("event_processor", l, t), new yo("An event processor returned `null`, will not send event.", "log");
        return e.data && !0 === e.data.__sentry__ ? n : function(t, e) {
          const n = `${e} must return \`null\` or a valid event.`;
          if (Ja(t)) return t.then(t => {
            if (!Va(t) && null !== t) throw new yo(n);
            return t
          }, t => {
            throw new yo(`${e} rejected with ${t}`)
          });
          if (!Va(t) && null !== t) throw new yo(n);
          return t
        }(function(t, e, n) {
          const {
            beforeSend: i,
            beforeSendTransaction: s
          } = t;
          if (Rl(e) && i) return i(e, n);
          if (Ul(e) && s) return s(e, n);
          return e
        }(i, n, e), c)
      }).then(i => {
        if (null === i) throw this.recordDroppedEvent("before_send", l, t), new yo(`${c} returned \`null\`, will not send event.`, "log");
        const s = n && n.getSession();
        !r && s && this._updateSessionFromEvent(s, i);
        const a = i.transaction_info;
        if (r && a && i.transaction !== t.transaction) {
          const t = "custom";
          i.transaction_info = {
            ...a,
            source: t
          }
        }
        return this.sendEvent(i, e), i
      }).then(null, t => {
        if (t instanceof yo) throw t;
        throw this.captureException(t, {
          data: {
            __sentry__: !0
          },
          originalException: t
        }), new yo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
      })
    }
    _process(t) {
      this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
    }
    _sendEnvelope(t) {
      if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, t => {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Error while sending event:", t)
      });
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Transport disabled")
    }
    _clearOutcomes() {
      const t = this._outcomes;
      return this._outcomes = {}, Object.keys(t).map(e => {
        const [n, i] = e.split(":");
        return {
          reason: n,
          category: i,
          quantity: t[e]
        }
      })
    }
  }

  function Rl(t) {
    return void 0 === t.type
  }

  function Ul(t) {
    return "transaction" === t.type
  }
  const Bl = 30;

  function Yl(t, e, n = _c(t.bufferSize || Bl)) {
    let i = {};

    function s(s) {
      const r = [];
      if (Ac(s, (e, n) => {
          const s = Rc(n);
          if (function(t, e, n = Date.now()) {
              return function(t, e) {
                return t[e] || t.all || 0
              }(t, e) > n
            }(i, s)) {
            const i = Pl(e, n);
            t.recordDroppedEvent("ratelimit_backoff", s, i)
          } else r.push(e)
        }), 0 === r.length) return fc();
      const a = xc(s[0], r),
        o = e => {
          Ac(a, (n, i) => {
            const s = Pl(n, i);
            t.recordDroppedEvent(e, Rc(i), s)
          })
        };
      return n.add(() => e({
        body: zc(a, t.textEncoder)
      }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), i = Pc(i, t), t), t => {
        throw o("network_error"), t
      })).then(t => t, t => {
        if (t instanceof yo) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Skipped sending event because buffer is full."), o("queue_overflow"), fc();
        throw t
      })
    }
    return s.__sentry__baseTransport__ = !0, {
      send: s,
      flush: t => n.drain(t)
    }
  }

  function Pl(t, e) {
    if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
  }
  const Gl = "7.56.0";
  let Fl;
  class Ql {
    constructor() {
      Ql.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "FunctionToString"
    }
    __init() {
      this.name = Ql.id
    }
    setupOnce() {
      Fl = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...t) {
          const e = So(this) || this;
          return Fl.apply(e, t)
        }
      } catch (t) {}
    }
  }
  Ql.__initStatic();
  const $l = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
    Hl = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
  class ql {
    static __initStatic() {
      this.id = "InboundFilters"
    }
    __init() {
      this.name = ql.id
    }
    constructor(t = {}) {
      this._options = t, ql.prototype.__init.call(this)
    }
    setupOnce(t, e) {
      const n = t => {
        const n = e();
        if (n) {
          const e = n.getIntegration(ql);
          if (e) {
            const i = n.getClient(),
              s = i ? i.getOptions() : {};
            return function(t, e) {
              if (e.ignoreInternal && function(t) {
                  try {
                    return "SentryError" === t.exception.values[0].type
                  } catch (t) {}
                  return !1
                }(t)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${ic(t)}`), !0;
              if (function(t, e) {
                  if (t.type || !e || !e.length) return !1;
                  return function(t) {
                    if (t.message) return [t.message];
                    if (t.exception) {
                      const {
                        values: e
                      } = t.exception;
                      try {
                        const {
                          type: n = "",
                          value: i = ""
                        } = e && e[e.length - 1] || {};
                        return [`${i}`, `${n}: ${i}`]
                      } catch (e) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(`Cannot extract message for event ${ic(t)}`), []
                      }
                    }
                    return []
                  }(t).some(t => Mo(t, e))
                }(t, e.ignoreErrors)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${ic(t)}`), !0;
              if (function(t, e) {
                  if ("transaction" !== t.type || !e || !e.length) return !1;
                  const n = t.transaction;
                  return !!n && Mo(n, e)
                }(t, e.ignoreTransactions)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${ic(t)}`), !0;
              if (function(t, e) {
                  if (!e || !e.length) return !1;
                  const n = Vl(t);
                  return !!n && Mo(n, e)
                }(t, e.denyUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${ic(t)}.\nUrl: ${Vl(t)}`), !0;
              if (! function(t, e) {
                  if (!e || !e.length) return !0;
                  const n = Vl(t);
                  return !n || Mo(n, e)
                }(t, e.allowUrls)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${ic(t)}.\nUrl: ${Vl(t)}`), !0;
              return !1
            }(t, function(t = {}, e = {}) {
              return {
                allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : $l],
                ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : Hl],
                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
              }
            }(e._options, s)) ? null : t
          }
        }
        return t
      };
      n.id = this.name, t(n)
    }
  }

  function Vl(t) {
    try {
      let e;
      try {
        e = t.exception.values[0].stacktrace.frames
      } catch (t) {}
      return e ? function(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
        }
        return null
      }(e) : null
    } catch (e) {
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(`Cannot extract url for event ${ic(t)}`), null
    }
  }
  ql.__initStatic();
  var Wl = Object.freeze({
    FunctionToString: Ql,
    InboundFilters: ql
  });
  const Zl = eo;
  let Jl = 0;

  function Kl() {
    return Jl > 0
  }

  function Xl(t, e = {}, n) {
    if ("function" != typeof t) return t;
    try {
      const e = t.__sentry_wrapped__;
      if (e) return e;
      if (So(t)) return t
    } catch (e) {
      return t
    }
    const i = function() {
      const i = Array.prototype.slice.call(arguments);
      try {
        n && "function" == typeof n && n.apply(this, arguments);
        const r = i.map(t => Xl(t, e));
        return t.apply(this, r)
      } catch (t) {
        throw Jl++, setTimeout(() => {
          Jl--
        }), s = (n => {
          n.addEventProcessor(t => (e.mechanism && (sc(t, void 0, void 0), rc(t, e.mechanism)), t.extra = {
            ...t.extra,
            arguments: i
          }, t)), El(t)
        }), al().withScope(s), t
      }
      var s
    };
    try {
      for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e])
    } catch (t) {}
    Io(i, t), Do(t, "__sentry_wrapped__", i);
    try {
      Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
        get: () => t.name
      })
    } catch (t) {}
    return i
  }

  function tu(t, e) {
    const n = iu(t, e),
      i = {
        type: e && e.name,
        value: function(t) {
          const e = t && t.message;
          if (!e) return "No error message";
          if (e.error && "string" == typeof e.error.message) return e.error.message;
          return e
        }(e)
      };
    return n.length && (i.stacktrace = {
      frames: n
    }), void 0 === i.type && "" === i.value && (i.value = "Unrecoverable error caught"), i
  }

  function eu(t, e, n, i) {
    const s = al().getClient(),
      r = s && s.getOptions().normalizeDepth,
      a = {
        exception: {
          values: [{
            type: Wa(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
            value: `Non-Error ${i?"promise rejection":"exception"} captured with keys: ${function(t,e=40){const n=Object.keys(wo(t));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=e)return vo(n[0],e);for(let t=n.length;t>0;t--){const i=n.slice(0,t).join(", ");if(!(i.length>e))return t===n.length?i:vo(i,e)}return""}(e)}`
          }]
        },
        extra: {
          __serialized__: hc(e, r)
        }
      };
    if (n) {
      const e = iu(t, n);
      e.length && (a.exception.values[0].stacktrace = {
        frames: e
      })
    }
    return a
  }

  function nu(t, e) {
    return {
      exception: {
        values: [tu(t, e)]
      }
    }
  }

  function iu(t, e) {
    const n = e.stacktrace || e.stack || "",
      i = function(t) {
        if (t) {
          if ("number" == typeof t.framesToPop) return t.framesToPop;
          if (su.test(t.message)) return 1
        }
        return 0
      }(e);
    try {
      return t(n, i)
    } catch (t) {}
    return []
  }
  const su = /Minified React error #\d+;/i;

  function ru(t, e, n, i, s) {
    let r;
    if (Qa(e) && e.error) {
      return nu(t, e.error)
    }
    if ($a(e) || Fa(e, "DOMException")) {
      const s = e;
      if ("stack" in e) r = nu(t, e);
      else {
        const e = s.name || ($a(s) ? "DOMError" : "DOMException"),
          a = s.message ? `${e}: ${s.message}` : e;
        sc(r = au(t, a, n, i), a)
      }
      return "code" in s && (r.tags = {
        ...r.tags,
        "DOMException.code": `${s.code}`
      }), r
    }
    if (Ga(e)) return nu(t, e);
    if (Va(e) || Wa(e)) {
      return rc(r = eu(t, e, n, s), {
        synthetic: !0
      }), r
    }
    return sc(r = au(t, e, n, i), `${e}`, void 0), rc(r, {
      synthetic: !0
    }), r
  }

  function au(t, e, n, i) {
    const s = {
      message: e
    };
    if (i && n) {
      const i = iu(t, n);
      i.length && (s.exception = {
        values: [{
          value: e,
          stacktrace: {
            frames: i
          }
        }]
      })
    }
    return s
  }
  const ou = 1024,
    cu = "Breadcrumbs";
  class lu {
    static __initStatic() {
      this.id = cu
    }
    __init() {
      this.name = lu.id
    }
    constructor(t) {
      lu.prototype.__init.call(this), this.options = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t
      }
    }
    setupOnce() {
      this.options.console && Qo("console", uu), this.options.dom && Qo("dom", function(t) {
        return function(e) {
          let n, i = "object" == typeof t ? t.serializeAttribute : void 0,
            s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
          s && s > ou && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`\`dom.maxStringLength\` cannot exceed ${ou}, but a value of ${s} was configured. Sentry will use ${ou} instead.`), s = ou);
          "string" == typeof i && (i = [i]);
          try {
            const t = e.event;
            n = (t = t) && t.target ? ao(t.target, {
              keyAttrs: i,
              maxStringLength: s
            }) : ao(t, {
              keyAttrs: i,
              maxStringLength: s
            })
          } catch (t) {
            n = "<unknown>"
          }
          var r;
          if (0 === n.length) return;
          al().addBreadcrumb({
            category: `ui.${e.name}`,
            message: n
          }, {
            event: e.event,
            name: e.name,
            global: e.global
          })
        }
      }(this.options.dom)), this.options.xhr && Qo("xhr", du), this.options.fetch && Qo("fetch", hu), this.options.history && Qo("history", pu)
    }
    addSentryBreadcrumb(t) {
      this.options.sentry && al().addBreadcrumb({
        category: `sentry.${"transaction"===t.type?"transaction":"event"}`,
        event_id: t.event_id,
        level: t.level,
        message: ic(t)
      }, {
        event: t
      })
    }
  }

  function uu(t) {
    for (let e = 0; e < t.args.length; e++)
      if ("ref=Ref<" === t.args[e]) {
        t.args[e + 1] = "viewRef";
        break
      } const e = {
      category: "console",
      data: {
        arguments: t.args,
        logger: "console"
      },
      level: (n = t.level, "warn" === n ? "warning" : Mc.includes(n) ? n : "log"),
      message: bo(t.args, " ")
    };
    var n;
    if ("assert" === t.level) {
      if (!1 !== t.args[0]) return;
      e.message = `Assertion failed: ${bo(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1)
    }
    al().addBreadcrumb(e, {
      input: t.args,
      level: t.level
    })
  }

  function du(t) {
    const {
      startTimestamp: e,
      endTimestamp: n
    } = t, i = t.xhr[Yo];
    if (!e || !n || !i) return;
    const {
      method: s,
      url: r,
      status_code: a,
      body: o
    } = i, c = {
      method: s,
      url: r,
      status_code: a
    }, l = {
      xhr: t.xhr,
      input: o,
      startTimestamp: e,
      endTimestamp: n
    };
    al().addBreadcrumb({
      category: "xhr",
      data: c,
      type: "http"
    }, l)
  }

  function hu(t) {
    const {
      startTimestamp: e,
      endTimestamp: n
    } = t;
    if (n && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
      if (t.error) {
        const i = t.fetchData,
          s = {
            data: t.error,
            input: t.args,
            startTimestamp: e,
            endTimestamp: n
          };
        al().addBreadcrumb({
          category: "fetch",
          data: i,
          level: "error",
          type: "http"
        }, s)
      } else {
        const i = {
            ...t.fetchData,
            status_code: t.response && t.response.status
          },
          s = {
            input: t.args,
            response: t.response,
            startTimestamp: e,
            endTimestamp: n
          };
        al().addBreadcrumb({
          category: "fetch",
          data: i,
          type: "http"
        }, s)
      }
  }

  function pu(t) {
    let e = t.from,
      n = t.to;
    const i = yc(Zl.location.href);
    let s = yc(e);
    const r = yc(n);
    s.path || (s = i), i.protocol === r.protocol && i.host === r.host && (n = r.relative), i.protocol === s.protocol && i.host === s.host && (e = s.relative), al().addBreadcrumb({
      category: "navigation",
      data: {
        from: e,
        to: n
      }
    })
  }
  lu.__initStatic();
  class fu extends Ll {
    constructor(t) {
      const e = Zl.SENTRY_SDK_SOURCE || "npm";
      t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{
          name: `${e}:@sentry/browser`,
          version: Gl
        }],
        version: Gl
      }, super(t), t.sendClientReports && Zl.document && Zl.document.addEventListener("visibilitychange", () => {
        "hidden" === Zl.document.visibilityState && this._flushOutcomes()
      })
    }
    eventFromException(t, e) {
      return function(t, e, n, i) {
        const s = ru(t, e, n && n.syntheticException || void 0, i);
        return rc(s), s.level = "error", n && n.event_id && (s.event_id = n.event_id), fc(s)
      }(this._options.stackParser, t, e, this._options.attachStacktrace)
    }
    eventFromMessage(t, e = "info", n) {
      return function(t, e, n = "info", i, s) {
        const r = au(t, e, i && i.syntheticException || void 0, s);
        return r.level = n, i && i.event_id && (r.event_id = i.event_id), fc(r)
      }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
    }
    sendEvent(t, e) {
      const n = this.getIntegrationById(cu);
      n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
    }
    captureUserFeedback(t) {
      if (!this._isEnabled()) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("SDK not enabled, will not capture user feedback."));
      const e = function(t, {
        metadata: e,
        tunnel: n,
        dsn: i
      }) {
        return xc({
          event_id: t.event_id,
          sent_at: (new Date).toISOString(),
          ...e && e.sdk && {
            sdk: {
              name: e.sdk.name,
              version: e.sdk.version
            }
          },
          ...!!n && !!i && {
            dsn: go(i)
          }
        }, [function(t) {
          return [{
            type: "user_report"
          }, t]
        }(t)])
      }(t, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel
      });
      this._sendEnvelope(e)
    }
    _prepareEvent(t, e, n) {
      return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
    }
    _flushOutcomes() {
      const t = this._clearOutcomes();
      if (0 === t.length) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("No outcomes to send"));
      if (!this._dsn) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("No dsn provided, will not send outcomes"));
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Sending outcomes:", t);
      const e = function(t, e, n) {
        const i = [{
          type: "client_report"
        }, {
          timestamp: n || wc(),
          discarded_events: t
        }];
        return xc(e ? {
          dsn: e
        } : {}, [i])
      }(t, this._options.tunnel && go(this._dsn));
      this._sendEnvelope(e)
    }
  }
  let gu = void 0;

  function mu(t, e = function() {
    if (gu) return gu;
    if (Ro(Zl.fetch)) return gu = Zl.fetch.bind(Zl);
    const t = Zl.document;
    let e = Zl.fetch;
    if (t && "function" == typeof t.createElement) try {
      const n = t.createElement("iframe");
      n.hidden = !0, t.head.appendChild(n);
      const i = n.contentWindow;
      i && i.fetch && (e = i.fetch), t.head.removeChild(n)
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
    }
    return gu = e.bind(Zl)
  }()) {
    let n = 0,
      i = 0;
    return Yl(t, function(s) {
      const r = s.body.length;
      n += r, i++;
      const a = {
        body: s.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: t.headers,
        keepalive: n <= 6e4 && i < 15,
        ...t.fetchOptions
      };
      try {
        return e(t.url, a).then(t => (n -= r, i--, {
          statusCode: t.status,
          headers: {
            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": t.headers.get("Retry-After")
          }
        }))
      } catch (t) {
        return gu = void 0, n -= r, i--, gc(t)
      }
    })
  }
  const _u = 4;

  function yu(t) {
    return Yl(t, function(e) {
      return new mc((n, i) => {
        const s = new XMLHttpRequest;
        s.onerror = i, s.onreadystatechange = (() => {
          s.readyState === _u && n({
            statusCode: s.status,
            headers: {
              "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": s.getResponseHeader("Retry-After")
            }
          })
        }), s.open("POST", t.url);
        for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && s.setRequestHeader(e, t.headers[e]);
        s.send(e.body)
      })
    })
  }

  function vu(t, e, n, i) {
    const s = {
      filename: t,
      function: e,
      in_app: !0
    };
    return void 0 !== n && (s.lineno = n), void 0 !== i && (s.colno = i), s
  }
  const bu = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Mu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    Nu = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Du = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Iu = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    Su = Ao(...[
      [30, t => {
        const e = bu.exec(t);
        if (e) {
          if (e[2] && 0 === e[2].indexOf("eval")) {
            const t = Mu.exec(e[2]);
            t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
          }
          const [t, n] = wu(e[1] || "?", e[2]);
          return vu(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
        }
      }],
      [50, t => {
        const e = Nu.exec(t);
        if (e) {
          if (e[3] && e[3].indexOf(" > eval") > -1) {
            const t = Du.exec(e[3]);
            t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
          }
          let t = e[3],
            n = e[1] || "?";
          return [n, t] = wu(n, t), vu(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
      }],
      [40, t => {
        const e = Iu.exec(t);
        return e ? vu(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
      }]
    ]),
    wu = (t, e) => {
      const n = -1 !== t.indexOf("safari-extension"),
        i = -1 !== t.indexOf("safari-web-extension");
      return n || i ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    };
  class Eu {
    static __initStatic() {
      this.id = "GlobalHandlers"
    }
    __init() {
      this.name = Eu.id
    }
    __init2() {
      this._installFunc = {
        onerror: ku,
        onunhandledrejection: Tu
      }
    }
    constructor(t) {
      Eu.prototype.__init.call(this), Eu.prototype.__init2.call(this), this._options = {
        onerror: !0,
        onunhandledrejection: !0,
        ...t
      }
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const t = this._options;
      for (const n in t) {
        const i = this._installFunc[n];
        i && t[n] && (e = n, ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`Global Handler attached: ${e}`), i(), this._installFunc[n] = void 0)
      }
      var e
    }
  }

  function ku() {
    Qo("error", t => {
      const [e, n, i] = Au();
      if (!e.getIntegration(Eu)) return;
      const {
        msg: s,
        url: r,
        line: a,
        column: o,
        error: c
      } = t;
      if (Kl() || c && c.__sentry_own_request__) return;
      const l = void 0 === c && Ha(s) ? function(t, e, n, i) {
        let s = Qa(t) ? t.message : t,
          r = "Error";
        const a = s.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
        a && (r = a[1], s = a[2]);
        return xu({
          exception: {
            values: [{
              type: r,
              value: s
            }]
          }
        }, e, n, i)
      }(s, r, a, o) : xu(ru(n, c || s, void 0, i, !1), r, a, o);
      l.level = "error", Cu(e, c, l, "onerror")
    })
  }

  function Tu() {
    Qo("unhandledrejection", t => {
      const [e, n, i] = Au();
      if (!e.getIntegration(Eu)) return;
      let s = t;
      try {
        "reason" in t ? s = t.reason : "detail" in t && "reason" in t.detail && (s = t.detail.reason)
      } catch (t) {}
      if (Kl() || s && s.__sentry_own_request__) return !0;
      const r = qa(s) ? {
        exception: {
          values: [{
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(s)}`
          }]
        }
      } : ru(n, s, void 0, i, !0);
      r.level = "error", Cu(e, s, r, "onunhandledrejection")
    })
  }

  function xu(t, e, n, i) {
    const s = t.exception = t.exception || {},
      r = s.values = s.values || [],
      a = r[0] = r[0] || {},
      o = a.stacktrace = a.stacktrace || {},
      c = o.frames = o.frames || [],
      l = isNaN(parseInt(i, 10)) ? void 0 : i,
      u = isNaN(parseInt(n, 10)) ? void 0 : n,
      d = Ha(e) && e.length > 0 ? e : function() {
        try {
          return so.document.location.href
        } catch (t) {
          return ""
        }
      }();
    return 0 === c.length && c.push({
      colno: l,
      filename: d,
      function: "?",
      in_app: !0,
      lineno: u
    }), t
  }

  function Cu(t, e, n, i) {
    rc(n, {
      handled: !1,
      type: i
    }), t.captureEvent(n, {
      originalException: e
    })
  }

  function Au() {
    const t = al(),
      e = t.getClient(),
      n = e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
      };
    return [t, n.stackParser, n.attachStacktrace]
  }
  Eu.__initStatic();
  const ju = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
  class zu {
    static __initStatic() {
      this.id = "TryCatch"
    }
    __init() {
      this.name = zu.id
    }
    constructor(t) {
      zu.prototype.__init.call(this), this._options = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...t
      }
    }
    setupOnce() {
      this._options.setTimeout && No(Zl, "setTimeout", Ou), this._options.setInterval && No(Zl, "setInterval", Ou), this._options.requestAnimationFrame && No(Zl, "requestAnimationFrame", Lu), this._options.XMLHttpRequest && "XMLHttpRequest" in Zl && No(XMLHttpRequest.prototype, "send", Ru);
      const t = this._options.eventTarget;
      if (t) {
        (Array.isArray(t) ? t : ju).forEach(Uu)
      }
    }
  }

  function Ou(t) {
    return function(...e) {
      const n = e[0];
      return e[0] = Xl(n, {
        mechanism: {
          data: {
            function: zo(t)
          },
          handled: !0,
          type: "instrument"
        }
      }), t.apply(this, e)
    }
  }

  function Lu(t) {
    return function(e) {
      return t.apply(this, [Xl(e, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: zo(t)
          },
          handled: !0,
          type: "instrument"
        }
      })])
    }
  }

  function Ru(t) {
    return function(...e) {
      const n = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t => {
        t in n && "function" == typeof n[t] && No(n, t, function(e) {
          const n = {
              mechanism: {
                data: {
                  function: t,
                  handler: zo(e)
                },
                handled: !0,
                type: "instrument"
              }
            },
            i = So(e);
          return i && (n.mechanism.data.handler = zo(i)), Xl(e, n)
        })
      }), t.apply(this, e)
    }
  }

  function Uu(t) {
    const e = Zl,
      n = e[t] && e[t].prototype;
    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (No(n, "addEventListener", function(e) {
      return function(n, i, s) {
        try {
          "function" == typeof i.handleEvent && (i.handleEvent = Xl(i.handleEvent, {
            mechanism: {
              data: {
                function: "handleEvent",
                handler: zo(i),
                target: t
              },
              handled: !0,
              type: "instrument"
            }
          }))
        } catch (t) {}
        return e.apply(this, [n, Xl(i, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: zo(i),
              target: t
            },
            handled: !0,
            type: "instrument"
          }
        }), s])
      }
    }), No(n, "removeEventListener", function(t) {
      return function(e, n, i) {
        const s = n;
        try {
          const n = s && s.__sentry_wrapped__;
          n && t.call(this, e, n, i)
        } catch (t) {}
        return t.call(this, e, s, i)
      }
    }))
  }
  zu.__initStatic();
  const Bu = "cause",
    Yu = 5;
  class Pu {
    static __initStatic() {
      this.id = "LinkedErrors"
    }
    __init() {
      this.name = Pu.id
    }
    constructor(t = {}) {
      Pu.prototype.__init.call(this), this._key = t.key || Bu, this._limit = t.limit || Yu
    }
    setupOnce() {
      const t = al().getClient();
      t && tl((e, n) => {
        const i = al().getIntegration(Pu);
        return i ? function(t, e, n, i, s) {
          if (!(i.exception && i.exception.values && s && Xa(s.originalException, Error))) return i;
          const r = function t(e, n, i, s, r = []) {
            if (!Xa(i[s], Error) || r.length + 1 >= n) return r;
            const a = tu(e, i[s]);
            return t(e, n, i[s], s, [a, ...r])
          }(t, n, s.originalException, e);
          return i.exception.values = [...r, ...i.exception.values], i
        }(t.getOptions().stackParser, i._key, i._limit, e, n) : e
      })
    }
  }
  Pu.__initStatic();
  class Gu {
    constructor() {
      Gu.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "HttpContext"
    }
    __init() {
      this.name = Gu.id
    }
    setupOnce() {
      tl(t => {
        if (al().getIntegration(Gu)) {
          if (!Zl.navigator && !Zl.location && !Zl.document) return t;
          const e = t.request && t.request.url || Zl.location && Zl.location.href,
            {
              referrer: n
            } = Zl.document || {},
            {
              userAgent: i
            } = Zl.navigator || {},
            s = {
              ...t.request && t.request.headers,
              ...n && {
                Referer: n
              },
              ...i && {
                "User-Agent": i
              }
            },
            r = {
              ...t.request,
              ...e && {
                url: e
              },
              headers: s
            };
          return {
            ...t,
            request: r
          }
        }
        return t
      })
    }
  }
  Gu.__initStatic();
  class Fu {
    constructor() {
      Fu.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "Dedupe"
    }
    __init() {
      this.name = Fu.id
    }
    setupOnce(t, e) {
      const n = t => {
        if (t.type) return t;
        const n = e().getIntegration(Fu);
        if (n) {
          try {
            if (function(t, e) {
                if (!e) return !1;
                if (function(t, e) {
                    const n = t.message,
                      i = e.message;
                    if (!n && !i) return !1;
                    if (n && !i || !n && i) return !1;
                    if (n !== i) return !1;
                    if (!$u(t, e)) return !1;
                    if (!Qu(t, e)) return !1;
                    return !0
                  }(t, e)) return !0;
                if (function(t, e) {
                    const n = Hu(e),
                      i = Hu(t);
                    if (!n || !i) return !1;
                    if (n.type !== i.type || n.value !== i.value) return !1;
                    if (!$u(t, e)) return !1;
                    if (!Qu(t, e)) return !1;
                    return !0
                  }(t, e)) return !0;
                return !1
              }(t, n._previousEvent)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Event dropped due to being a duplicate of previously captured event."), null
          } catch (e) {
            return n._previousEvent = t
          }
          return n._previousEvent = t
        }
        return t
      };
      n.id = this.name, t(n)
    }
  }

  function Qu(t, e) {
    let n = qu(t),
      i = qu(e);
    if (!n && !i) return !0;
    if (n && !i || !n && i) return !1;
    if (n = n, (i = i).length !== n.length) return !1;
    for (let t = 0; t < i.length; t++) {
      const e = i[t],
        s = n[t];
      if (e.filename !== s.filename || e.lineno !== s.lineno || e.colno !== s.colno || e.function !== s.function) return !1
    }
    return !0
  }

  function $u(t, e) {
    let n = t.fingerprint,
      i = e.fingerprint;
    if (!n && !i) return !0;
    if (n && !i || !n && i) return !1;
    n = n, i = i;
    try {
      return !(n.join("") !== i.join(""))
    } catch (t) {
      return !1
    }
  }

  function Hu(t) {
    return t.exception && t.exception.values && t.exception.values[0]
  }

  function qu(t) {
    const e = t.exception;
    if (e) try {
      return e.values[0].stacktrace.frames
    } catch (t) {
      return
    }
  }
  Fu.__initStatic();
  const Vu = [new ql, new Ql, new zu, new lu, new Eu, new Pu, new Fu, new Gu];

  function Wu(t = {}) {
    void 0 === t.defaultIntegrations && (t.defaultIntegrations = Vu), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), Zl.SENTRY_RELEASE && Zl.SENTRY_RELEASE.id && (t.release = Zl.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
    const e = {
      ...t,
      stackParser: (n = t.stackParser || Su, Array.isArray(n) ? Ao(...n) : n),
      integrations: Cl(t),
      transport: t.transport || (Lo() ? mu : yu)
    };
    var n;
    ! function(t, e) {
      !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? po.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
      const n = al();
      n.getScope().update(e.initialScope);
      const i = new t(e);
      n.bindClient(i)
    }(fu, e), t.autoSessionTracking && function() {
      if (void 0 === Zl.document) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
      const t = al();
      if (!t.captureSession) return;
      Zu(t), Qo("history", ({
        from: t,
        to: e
      }) => {
        void 0 !== t && t !== e && Zu(al())
      })
    }()
  }

  function Zu(t) {
    t.startSession({
      ignoreDuration: !0
    }), t.captureSession()
  }
  var Ju = Object.freeze({
    GlobalHandlers: Eu,
    TryCatch: zu,
    Breadcrumbs: lu,
    LinkedErrors: Pu,
    HttpContext: Gu,
    Dedupe: Fu
  });
  const Ku = eo,
    Xu = "sentryReplaySession",
    td = "replay_event",
    ed = "Unable to send Replay",
    nd = 3e5,
    id = 9e5,
    sd = 36e5,
    rd = 5e3,
    ad = 5500,
    od = 6e4,
    cd = 5e3,
    ld = 3,
    ud = 15e4,
    dd = 5e3,
    hd = 3e3,
    pd = 300,
    fd = 1e3,
    gd = 2e7;
  var md;

  function _d(t) {
    const e = null === t || void 0 === t ? void 0 : t.host;
    return Boolean(e && e.shadowRoot && e.shadowRoot === t)
  }

  function yd({
    maskInputOptions: t,
    tagName: e,
    type: n
  }) {
    "option" === e.toLowerCase() && (e = "select");
    const i = "string" == typeof n ? n.toLowerCase() : void 0;
    return t[e.toLowerCase()] || i && t[i] || "password" === i || "input" === e && !n && t.text
  }

  function vd({
    input: t,
    maskInputSelector: e,
    unmaskInputSelector: n,
    maskInputOptions: i,
    tagName: s,
    type: r,
    value: a,
    maskInputFn: o
  }) {
    let c = a || "";
    return n && t.matches(n) ? c : (t.hasAttribute("data-rr-is-password") && (r = "password"), (yd({
      maskInputOptions: i,
      tagName: s,
      type: r
    }) || e && t.matches(e)) && (c = o ? o(c) : "*".repeat(c.length)), c)
  }! function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
  }(md || (md = {}));
  const bd = "__rrweb_original__";

  function Md(t) {
    const e = t.type;
    return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
  }

  function Nd(t, e, n) {
    return "string" == typeof n && n.toLowerCase(), "INPUT" !== e || "radio" !== n && "checkbox" !== n ? t.value : t.getAttribute("value") || ""
  }
  let Dd = 1;
  const Id = new RegExp("[^a-z0-9-_:]"),
    Sd = -2;

  function wd(t) {
    return t ? t.replace(/[\S]/g, "*") : ""
  }

  function Ed(t) {
    try {
      const e = t.rules || t.cssRules;
      return e ? Array.from(e).map(kd).join("") : null
    } catch (t) {
      return null
    }
  }

  function kd(t) {
    let e = t.cssText;
    if (function(t) {
        return "styleSheet" in t
      }(t)) try {
      e = Ed(t.styleSheet) || e
    } catch (t) {}
    return Td(e)
  }

  function Td(t) {
    if (t.indexOf(":") > -1) {
      const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
      return t.replace(e, "$1\\$2")
    }
    return t
  }
  let xd, Cd;
  const Ad = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    jd = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
    zd = /^(data:)([^,]*),(.*)/i;

  function Od(t, e) {
    return (t || "").replace(Ad, (t, n, i, s, r, a) => {
      const o = i || r || a,
        c = n || s || "";
      if (!o) return t;
      if (!jd.test(o)) return `url(${c}${o}${c})`;
      if (zd.test(o)) return `url(${c}${o}${c})`;
      if ("/" === o[0]) return `url(${c}${function(t){let e="";return e=(e=t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]}(e)+o}${c})`;
      const l = e.split("/"),
        u = o.split("/");
      l.pop();
      for (const t of u) "." !== t && (".." === t ? l.pop() : l.push(t));
      return `url(${c}${l.join("/")}${c})`
    })
  }
  const Ld = /^[^ \t\n\r\u000c]+/,
    Rd = /^[, \t\n\r\u000c]+/;

  function Ud(t, e) {
    if (!e || "" === e.trim()) return e;
    const n = t.createElement("a");
    return n.href = e, n.href
  }

  function Bd() {
    const t = document.createElement("a");
    return t.href = "", t.href
  }

  function Yd(t, e, n, i, s, r, a, o) {
    if (!s) return s;
    const c = i.toLowerCase(),
      l = n.toLowerCase();
    return "src" === c || "href" === c ? Ud(t, s) : "xlink:href" === c && "#" !== s[0] ? Ud(t, s) : "background" !== c || "table" !== l && "td" !== l && "th" !== l ? "srcset" === c ? function(t, e) {
      if ("" === e.trim()) return e;
      let n = 0;

      function i(t) {
        let i, s = t.exec(e.substring(n));
        return s ? (i = s[0], n += i.length, i) : ""
      }
      let s = [];
      for (; i(Rd), !(n >= e.length);) {
        let r = i(Ld);
        if ("," === r.slice(-1)) r = Ud(t, r.substring(0, r.length - 1)), s.push(r);
        else {
          let i = "";
          r = Ud(t, r);
          let a = !1;
          for (;;) {
            let t = e.charAt(n);
            if ("" === t) {
              s.push((r + i).trim());
              break
            }
            if (a) ")" === t && (a = !1);
            else {
              if ("," === t) {
                n += 1, s.push((r + i).trim());
                break
              }
              "(" === t && (a = !0)
            }
            i += t, n += 1
          }
        }
      }
      return s.join(", ")
    }(t, s) : "style" === c ? Od(s, Bd()) : "object" === l && "data" === c ? Ud(t, s) : r && function(t, e, n, i) {
      if (i && t.matches(i)) return !1;
      return ["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1
    }(e, c, l, a) ? o ? o(s) : wd(s) : s : Ud(t, s)
  }

  function Pd(t, e, n, i, s) {
    if (!t) return !1;
    if (t.nodeType !== t.ELEMENT_NODE) return Pd(t.parentNode, e, n, i, s);
    if (i && (t.matches(i) || t.closest(i))) return !1;
    if (s) return !0;
    if ("string" == typeof e) {
      if (t.classList.contains(e)) return !0
    } else
      for (let n = 0; n < t.classList.length; n++) {
        const i = t.classList[n];
        if (e.test(i)) return !0
      }
    return !(!n || !t.matches(n)) || Pd(t.parentNode, e, n, i, s)
  }

  function Gd(t, e) {
    var n;
    const {
      doc: i,
      blockClass: s,
      blockSelector: r,
      unblockSelector: a,
      maskTextClass: o,
      maskTextSelector: c,
      unmaskTextSelector: l,
      inlineStylesheet: u,
      maskInputSelector: d,
      unmaskInputSelector: h,
      maskAllText: p,
      maskInputOptions: f = {},
      maskTextFn: g,
      maskInputFn: m,
      dataURLOptions: _ = {},
      inlineImages: y,
      recordCanvas: v,
      keepIframeSrcFn: b
    } = e;
    let M;
    if (i.__sn) {
      const t = i.__sn.id;
      M = 1 === t ? void 0 : t
    }
    switch (t.nodeType) {
      case t.DOCUMENT_NODE:
        return "CSS1Compat" !== t.compatMode ? {
          type: md.Document,
          childNodes: [],
          compatMode: t.compatMode,
          rootId: M
        } : {
          type: md.Document,
          childNodes: [],
          rootId: M
        };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: md.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: M
        };
      case t.ELEMENT_NODE:
        const e = function(t, e, n, i) {
            if (i && t.matches(i)) return !1;
            if ("string" == typeof e) {
              if (t.classList.contains(e)) return !0
            } else
              for (let n = 0; n < t.classList.length; n++) {
                const i = t.classList[n];
                if (e.test(i)) return !0
              }
            return !!n && t.matches(n)
          }(t, s, r, a),
          I = function(t) {
            if (t instanceof HTMLFormElement) return "form";
            const e = t.tagName.toLowerCase().trim();
            return Id.test(e) ? "div" : e
          }(t);
        let S = {};
        for (const {
            name: e,
            value: n
          }
          of Array.from(t.attributes)) void 0, ("video" !== (I = I) && "audio" !== I || "autoplay" !== e) && (S[e] = Yd(i, t, I, e, n, p, l, g));
        if ("link" === I && u) {
          const e = Array.from(i.styleSheets).find(e => e.href === t.href);
          let n = null;
          e && (n = Ed(e)), n && (delete S.rel, delete S.href, S._cssText = Od(n, e.href))
        }
        if ("style" === I && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
          const e = Ed(t.sheet);
          e && (S._cssText = Od(e, Bd()))
        }
        if ("input" === I || "textarea" === I || "select" === I || "option" === I) {
          const e = t,
            n = Md(e),
            i = Nd(e, I.toUpperCase(), n),
            s = t.checked;
          "submit" !== n && "button" !== n && i && (S.value = vd({
            input: e,
            type: n,
            tagName: I,
            value: i,
            maskInputSelector: d,
            unmaskInputSelector: h,
            maskInputOptions: f,
            maskInputFn: m
          })), s && (S.checked = s)
        }
        if ("option" === I && (t.selected && !f.select ? S.selected = !0 : delete S.selected), "canvas" === I && v)
          if ("2d" === t.__context)(function(t) {
            const e = t.getContext("2d");
            if (!e) return !0;
            for (let n = 0; n < t.width; n += 50)
              for (let i = 0; i < t.height; i += 50) {
                const s = e.getImageData,
                  r = bd in s ? s[bd] : s;
                if (new Uint32Array(r.call(e, n, i, Math.min(50, t.width - n), Math.min(50, t.height - i)).data.buffer).some(t => 0 !== t)) return !1
              }
            return !0
          })(t) || (S.rr_dataURL = t.toDataURL(_.type, _.quality));
          else if (!("__context" in t)) {
          const e = t.toDataURL(_.type, _.quality),
            n = document.createElement("canvas");
          n.width = t.width, n.height = t.height, e !== n.toDataURL(_.type, _.quality) && (S.rr_dataURL = e)
        }
        if ("img" === I && y) {
          xd || (xd = i.createElement("canvas"), Cd = xd.getContext("2d"));
          const e = t,
            n = e.crossOrigin;
          e.crossOrigin = "anonymous";
          const s = () => {
            try {
              xd.width = e.naturalWidth, xd.height = e.naturalHeight, Cd.drawImage(e, 0, 0), S.rr_dataURL = xd.toDataURL(_.type, _.quality)
            } catch (t) {
              console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
            }
            n ? S.crossOrigin = n : delete S.crossOrigin
          };
          e.complete && 0 !== e.naturalWidth ? s() : e.onload = s
        }
        if ("audio" !== I && "video" !== I || (S.rr_mediaState = t.paused ? "paused" : "played", S.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (S.rr_scrollLeft = t.scrollLeft), t.scrollTop && (S.rr_scrollTop = t.scrollTop), e) {
          const {
            width: e,
            height: n
          } = t.getBoundingClientRect();
          S = {
            class: S.class,
            rr_width: `${e}px`,
            rr_height: `${n}px`
          }
        }
        return "iframe" !== I || b(S.src) || (t.contentDocument || (S.rr_src = S.src), delete S.src), {
          type: md.Element,
          tagName: I,
          attributes: S,
          childNodes: [],
          isSVG: (D = t, Boolean("svg" === D.tagName || D.ownerSVGElement) || void 0),
          needBlock: e,
          rootId: M
        };
      case t.TEXT_NODE:
        const w = t.parentNode && t.parentNode.tagName;
        let E = t.textContent;
        const k = "STYLE" === w || void 0,
          T = "SCRIPT" === w || void 0;
        if (k && E) {
          try {
            t.nextSibling || t.previousSibling || (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) && (E = (N = t.parentNode.sheet).cssRules ? Array.from(N.cssRules).map(t => t.cssText ? Td(t.cssText) : "").join("") : "")
          } catch (e) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
          }
          E = Od(E, Bd())
        }
        if (T && (E = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === w && E) E = "";
        else if ("OPTION" === w && E) {
          E = vd({
            input: t.parentNode,
            type: null,
            tagName: w,
            value: E,
            maskInputSelector: d,
            unmaskInputSelector: h,
            maskInputOptions: f,
            maskInputFn: m
          })
        } else !k && !T && Pd(t, o, c, l, p) && E && (E = g ? g(E) : wd(E));
        return {
          type: md.Text, textContent: E || "", isStyle: k, rootId: M
        };
      case t.CDATA_SECTION_NODE:
        return {
          type: md.CDATA, textContent: "", rootId: M
        };
      case t.COMMENT_NODE:
        return {
          type: md.Comment, textContent: t.textContent || "", rootId: M
        };
      default:
        return !1
    }
    var N, D, I
  }

  function Fd(t) {
    return void 0 === t || null === t ? "" : t.toLowerCase()
  }

  function Qd(t, e) {
    const {
      doc: n,
      map: i,
      blockClass: s,
      blockSelector: r,
      unblockSelector: a,
      maskTextClass: o,
      maskTextSelector: c,
      unmaskTextSelector: l,
      skipChild: u = !1,
      inlineStylesheet: d = !0,
      maskInputSelector: h,
      unmaskInputSelector: p,
      maskAllText: f,
      maskInputOptions: g = {},
      maskTextFn: m,
      maskInputFn: _,
      slimDOMOptions: y,
      dataURLOptions: v = {},
      inlineImages: b = !1,
      recordCanvas: M = !1,
      onSerialize: N,
      onIframeLoad: D,
      iframeLoadTimeout: I = 5e3,
      keepIframeSrcFn: S = (() => !1)
    } = e;
    let {
      preserveWhiteSpace: w = !0
    } = e;
    const E = Gd(t, {
      doc: n,
      blockClass: s,
      blockSelector: r,
      unblockSelector: a,
      maskTextClass: o,
      maskTextSelector: c,
      unmaskTextSelector: l,
      inlineStylesheet: d,
      maskInputSelector: h,
      unmaskInputSelector: p,
      maskAllText: f,
      maskInputOptions: g,
      maskTextFn: m,
      maskInputFn: _,
      dataURLOptions: v,
      inlineImages: b,
      recordCanvas: M,
      keepIframeSrcFn: S
    });
    if (!E) return console.warn(t, "not serialized"), null;
    let k;
    k = "__sn" in t ? t.__sn.id : ! function(t, e) {
      if (e.comment && t.type === md.Comment) return !0;
      if (t.type === md.Element) {
        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (Fd(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Fd(t.attributes.name) || "icon" === Fd(t.attributes.rel) || "apple-touch-icon" === Fd(t.attributes.rel) || "shortcut icon" === Fd(t.attributes.rel)))) return !0;
        if ("meta" === t.tagName) {
          if (e.headMetaDescKeywords && Fd(t.attributes.name).match(/^description|keywords$/)) return !0;
          if (e.headMetaSocial && (Fd(t.attributes.property).match(/^(og|twitter|fb):/) || Fd(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === Fd(t.attributes.name))) return !0;
          if (e.headMetaRobots && ("robots" === Fd(t.attributes.name) || "googlebot" === Fd(t.attributes.name) || "bingbot" === Fd(t.attributes.name))) return !0;
          if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
          if (e.headMetaAuthorship && ("author" === Fd(t.attributes.name) || "generator" === Fd(t.attributes.name) || "framework" === Fd(t.attributes.name) || "publisher" === Fd(t.attributes.name) || "progid" === Fd(t.attributes.name) || Fd(t.attributes.property).match(/^article:/) || Fd(t.attributes.property).match(/^product:/))) return !0;
          if (e.headMetaVerification && ("google-site-verification" === Fd(t.attributes.name) || "yandex-verification" === Fd(t.attributes.name) || "csrf-token" === Fd(t.attributes.name) || "p:domain_verify" === Fd(t.attributes.name) || "verify-v1" === Fd(t.attributes.name) || "verification" === Fd(t.attributes.name) || "shopify-checkout-api-token" === Fd(t.attributes.name))) return !0
        }
      }
      return !1
    }(E, y) && (w || E.type !== md.Text || E.isStyle || E.textContent.replace(/^\s+|\s+$/gm, "").length) ? Dd++ : Sd;
    const T = Object.assign(E, {
      id: k
    });
    if (t.__sn = T, k === Sd) return null;
    i[k] = t, N && N(t);
    let x = !u;
    if (T.type === md.Element && (x = x && !T.needBlock, delete T.needBlock, t.shadowRoot && (T.isShadowHost = !0)), (T.type === md.Document || T.type === md.Element) && x) {
      y.headWhitespace && E.type === md.Element && "head" === E.tagName && (w = !1);
      const e = {
        doc: n,
        map: i,
        blockClass: s,
        blockSelector: r,
        unblockSelector: a,
        maskTextClass: o,
        maskTextSelector: c,
        unmaskTextSelector: l,
        skipChild: u,
        inlineStylesheet: d,
        maskInputSelector: h,
        unmaskInputSelector: p,
        maskAllText: f,
        maskInputOptions: g,
        maskTextFn: m,
        maskInputFn: _,
        slimDOMOptions: y,
        dataURLOptions: v,
        inlineImages: b,
        recordCanvas: M,
        preserveWhiteSpace: w,
        onSerialize: N,
        onIframeLoad: D,
        iframeLoadTimeout: I,
        keepIframeSrcFn: S
      };
      for (const n of Array.from(t.childNodes)) {
        const t = Qd(n, e);
        t && T.childNodes.push(t)
      }
      if (function(t) {
          return t.nodeType === t.ELEMENT_NODE
        }(t) && t.shadowRoot)
        for (const n of Array.from(t.shadowRoot.childNodes)) {
          const t = Qd(n, e);
          t && (t.isShadow = !0, T.childNodes.push(t))
        }
    }
    return t.parentNode && _d(t.parentNode) && (T.isShadow = !0), T.type === md.Element && "iframe" === T.tagName && function(t, e, n) {
      const i = t.contentWindow;
      if (!i) return;
      let s, r = !1;
      try {
        s = i.document.readyState
      } catch (t) {
        return
      }
      if ("complete" !== s) {
        const i = setTimeout(() => {
          r || (e(), r = !0)
        }, n);
        return void t.addEventListener("load", () => {
          clearTimeout(i), r = !0, e()
        })
      }
      "about:blank" === i.location.href && "about:blank" !== t.src && "" !== t.src ? t.addEventListener("load", e) : setTimeout(e, 0)
    }(t, () => {
      const e = t.contentDocument;
      if (e && D) {
        const n = Qd(e, {
          doc: e,
          map: i,
          blockClass: s,
          blockSelector: r,
          unblockSelector: a,
          maskTextClass: o,
          maskTextSelector: c,
          unmaskTextSelector: l,
          skipChild: !1,
          inlineStylesheet: d,
          maskInputSelector: h,
          unmaskInputSelector: p,
          maskAllText: f,
          maskInputOptions: g,
          maskTextFn: m,
          maskInputFn: _,
          slimDOMOptions: y,
          dataURLOptions: v,
          inlineImages: b,
          recordCanvas: M,
          preserveWhiteSpace: w,
          onSerialize: N,
          onIframeLoad: D,
          iframeLoadTimeout: I,
          keepIframeSrcFn: S
        });
        n && D(t, n)
      }
    }, I), T
  }
  var $d, Hd, qd, Vd, Wd, Zd;

  function Jd(t, e, n = document) {
    const i = {
      capture: !0,
      passive: !0
    };
    return n.addEventListener(t, e, i), () => n.removeEventListener(t, e, i)
  }! function(t) {
    t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin"
  }($d || ($d = {})),
  function(t) {
    t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration"
  }(Hd || (Hd = {})),
  function(t) {
    t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel"
  }(qd || (qd = {})),
  function(t) {
    t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2"
  }(Vd || (Vd = {})),
  function(t) {
    t[t.Play = 0] = "Play", t[t.Pause = 1] = "Pause", t[t.Seeked = 2] = "Seeked", t[t.VolumeChange = 3] = "VolumeChange"
  }(Wd || (Wd = {})),
  function(t) {
    t.Start = "start", t.Pause = "pause", t.Resume = "resume", t.Resize = "resize", t.Finish = "finish", t.FullsnapshotRebuilded = "fullsnapshot-rebuilded", t.LoadStylesheetStart = "load-stylesheet-start", t.LoadStylesheetEnd = "load-stylesheet-end", t.SkipStart = "skip-start", t.SkipEnd = "skip-end", t.MouseInteraction = "mouse-interaction", t.EventCast = "event-cast", t.CustomEvent = "custom-event", t.Flush = "flush", t.StateChange = "state-change", t.PlayBack = "play-back"
  }(Zd || (Zd = {}));
  const Kd = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
  let Xd = {
    map: {},
    getId: () => (console.error(Kd), -1),
    getNode: () => (console.error(Kd), null),
    removeNodeFromMap() {
      console.error(Kd)
    },
    has: () => (console.error(Kd), !1),
    reset() {
      console.error(Kd)
    }
  };

  function th(t, e, n = {}) {
    let i = null,
      s = 0;
    return function(r) {
      let a = Date.now();
      s || !1 !== n.leading || (s = a);
      let o = e - (a - s),
        c = this,
        l = arguments;
      o <= 0 || o > e ? (i && (clearTimeout(i), i = null), s = a, t.apply(c, l)) : i || !1 === n.trailing || (i = setTimeout(() => {
        s = !1 === n.leading ? 0 : Date.now(), i = null, t.apply(c, l)
      }, o))
    }
  }

  function eh(t, e, n, i, s = window) {
    const r = s.Object.getOwnPropertyDescriptor(t, e);
    return s.Object.defineProperty(t, e, i ? n : {
      set(t) {
        setTimeout(() => {
          n.set.call(this, t)
        }, 0), r && r.set && r.set.call(this, t)
      }
    }), () => eh(t, e, r || {}, !0)
  }

  function nh(t, e, n) {
    try {
      if (!(e in t)) return () => {};
      const i = t[e],
        s = n(i);
      return "function" == typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
        __rrweb_original__: {
          enumerable: !1,
          value: i
        }
      })), t[e] = s, () => {
        t[e] = i
      }
    } catch (t) {
      return () => {}
    }
  }

  function ih() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
  }

  function sh() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
  }

  function rh(t, e, n, i) {
    if (!t) return !1;
    if (t.nodeType === t.ELEMENT_NODE) {
      let s = !1;
      const r = i && t.matches(i);
      return "string" == typeof e ? s = void 0 !== t.closest ? !r && null !== t.closest("." + e) : !r && t.classList.contains(e) : !r && t.classList.forEach(t => {
        e.test(t) && (s = !0)
      }), !s && n && (s = t.matches(n)), !r && s || rh(t.parentNode, e, n, i)
    }
    return t.nodeType, t.TEXT_NODE, rh(t.parentNode, e, n, i)
  }

  function ah(t) {
    return "__sn" in t && t.__sn.id === Sd
  }

  function oh(t) {
    return Boolean(t.changedTouches)
  }

  function ch(t) {
    return "__sn" in t && (t.__sn.type === md.Element && "iframe" === t.__sn.tagName)
  }

  function lh(t) {
    return Boolean(null === t || void 0 === t ? void 0 : t.shadowRoot)
  }

  function uh(t) {
    return "__ln" in t
  }
  "undefined" != typeof window && window.Proxy && window.Reflect && (Xd = new Proxy(Xd, {
    get: (t, e, n) => ("map" === e && console.error(Kd), Reflect.get(t, e, n))
  }));
  class dh {
    constructor() {
      this.length = 0, this.head = null
    }
    get(t) {
      if (t >= this.length) throw new Error("Position outside of list range");
      let e = this.head;
      for (let n = 0; n < t; n++) e = (null === e || void 0 === e ? void 0 : e.next) || null;
      return e
    }
    addNode(t) {
      const e = {
        value: t,
        previous: null,
        next: null
      };
      if (t.__ln = e, t.previousSibling && uh(t.previousSibling)) {
        const n = t.previousSibling.__ln.next;
        e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
      } else if (t.nextSibling && uh(t.nextSibling) && t.nextSibling.__ln.previous) {
        const n = t.nextSibling.__ln.previous;
        e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
      } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
      this.length++
    }
    removeNode(t) {
      const e = t.__ln;
      this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
    }
  }
  const hh = (t, e) => `${t}@${e}`;

  function ph(t) {
    return "__sn" in t
  }
  class fh {
    constructor() {
      this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = (t => {
        t.forEach(this.processMutation), this.emit()
      }), this.emit = (() => {
        if (this.frozen || this.locked) return;
        const t = [],
          e = new dh,
          n = t => {
            let e = t,
              n = Sd;
            for (; n === Sd;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
            return n
          },
          i = i => {
            var s, r, a, o, c;
            const l = i.getRootNode ? null === (s = i.getRootNode()) || void 0 === s ? void 0 : s.host : null;
            let u = l;
            for (; null === (a = null === (r = null === u || void 0 === u ? void 0 : u.getRootNode) || void 0 === r ? void 0 : r.call(u)) || void 0 === a ? void 0 : a.host;) u = (null === (c = null === (o = null === u || void 0 === u ? void 0 : u.getRootNode) || void 0 === o ? void 0 : o.call(u)) || void 0 === c ? void 0 : c.host) || null;
            const d = !(this.doc.contains(i) || u && this.doc.contains(u));
            if (!i.parentNode || d) return;
            const h = _d(i.parentNode) ? this.mirror.getId(l) : this.mirror.getId(i.parentNode),
              p = n(i);
            if (-1 === h || -1 === p) return e.addNode(i);
            let f = Qd(i, {
              doc: this.doc,
              map: this.mirror.map,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              maskInputSelector: this.maskInputSelector,
              unmaskInputSelector: this.unmaskInputSelector,
              skipChild: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskAllText: this.maskAllText,
              maskInputOptions: this.maskInputOptions,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: t => {
                ch(t) && this.iframeManager.addIframe(t), lh(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, document)
              },
              onIframeLoad: (t, e) => {
                this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
              }
            });
            f && t.push({
              parentId: h,
              nextId: p,
              node: f
            })
          };
        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const t of this.movedSet) mh(this.removes, t, this.mirror) && !this.movedSet.has(t.parentNode) || i(t);
        for (const t of this.addedSet) _h(this.droppedSet, t) || mh(this.removes, t, this.mirror) ? _h(this.movedSet, t) ? i(t) : this.droppedSet.add(t) : i(t);
        let s = null;
        for (; e.length;) {
          let t = null;
          if (s) {
            const e = this.mirror.getId(s.value.parentNode),
              i = n(s.value); - 1 !== e && -1 !== i && (t = s)
          }
          if (!t)
            for (let i = e.length - 1; i >= 0; i--) {
              const s = e.get(i);
              if (s) {
                const e = this.mirror.getId(s.value.parentNode),
                  i = n(s.value);
                if (-1 !== e && -1 !== i) {
                  t = s;
                  break
                }
              }
            }
          if (!t) {
            for (; e.head;) e.removeNode(e.head.value);
            break
          }
          s = t.previous, e.removeNode(t.value), i(t.value)
        }
        const r = {
          texts: this.texts.map(t => ({
            id: this.mirror.getId(t.node),
            value: t.value
          })).filter(t => this.mirror.has(t.id)),
          attributes: this.attributes.map(t => ({
            id: this.mirror.getId(t.node),
            attributes: t.attributes
          })).filter(t => this.mirror.has(t.id)),
          removes: this.removes,
          adds: t
        };
        (r.texts.length || r.attributes.length || r.removes.length || r.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(r))
      }), this.processMutation = (t => {
        if (!ah(t.target)) switch (t.type) {
          case "characterData": {
            const e = t.target.textContent;
            rh(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || e === t.oldValue || this.texts.push({
              value: Pd(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
              node: t.target
            });
            break
          }
          case "attributes": {
            const e = t.target;
            let n = e.getAttribute(t.attributeName);
            if ("value" === t.attributeName && (n = vd({
                input: e,
                maskInputSelector: this.maskInputSelector,
                unmaskInputSelector: this.unmaskInputSelector,
                maskInputOptions: this.maskInputOptions,
                tagName: e.tagName,
                type: e.getAttribute("type"),
                value: n,
                maskInputFn: this.maskInputFn
              })), rh(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
            let i = this.attributes.find(e => e.node === t.target);
            if (i || (i = {
                node: t.target,
                attributes: {}
              }, this.attributes.push(i)), "type" === t.attributeName && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
              const n = this.doc.createElement("span");
              t.oldValue && n.setAttribute("style", t.oldValue), void 0 !== i.attributes.style && null !== i.attributes.style || (i.attributes.style = {});
              try {
                const t = i.attributes.style;
                for (const i of Array.from(e.style)) {
                  const s = e.style.getPropertyValue(i),
                    r = e.style.getPropertyPriority(i);
                  s === n.style.getPropertyValue(i) && r === n.style.getPropertyPriority(i) || (t[i] = "" === r ? s : [s, r])
                }
                for (const i of Array.from(n.style)) "" === e.style.getPropertyValue(i) && (t[i] = !1)
              } catch (t) {
                console.warn("[rrweb] Error when parsing update to style attribute:", t)
              }
            } else {
              const e = t.target;
              i.attributes[t.attributeName] = Yd(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
            }
            break
          }
          case "childList":
            t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
              const n = this.mirror.getId(e),
                i = _d(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
              rh(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || ah(e) || (this.addedSet.has(e) ? (gh(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
                if (_d(e)) return !1;
                const i = n.getId(e);
                return !n.has(i) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
              }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[hh(n, i)] ? gh(this.movedSet, e) : this.removes.push({
                parentId: i,
                id: n,
                isShadow: !!_d(t.target) || void 0
              })), this.mapRemoves.push(e))
            })
        }
      }), this.genAdds = ((t, e) => {
        if (!e || !rh(e, this.blockClass, this.blockSelector, this.unblockSelector)) {
          if (ph(t)) {
            if (ah(t)) return;
            this.movedSet.add(t);
            let n = null;
            e && ph(e) && (n = e.__sn.id), n && (this.movedMap[hh(t.__sn.id, n)] = !0)
          } else this.addedSet.add(t), this.droppedSet.delete(t);
          rh(t, this.blockClass, this.blockSelector, this.unblockSelector) || t.childNodes.forEach(t => this.genAdds(t))
        }
      })
    }
    init(t) {
      ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(e => {
        this[e] = t[e]
      })
    }
    freeze() {
      this.frozen = !0, this.canvasManager.freeze()
    }
    unfreeze() {
      this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
    }
    isFrozen() {
      return this.frozen
    }
    lock() {
      this.locked = !0, this.canvasManager.lock()
    }
    unlock() {
      this.locked = !1, this.canvasManager.unlock(), this.emit()
    }
    reset() {
      this.shadowDomManager.reset(), this.canvasManager.reset()
    }
  }

  function gh(t, e) {
    t.delete(e), e.childNodes.forEach(e => gh(t, e))
  }

  function mh(t, e, n) {
    const {
      parentNode: i
    } = e;
    if (!i) return !1;
    const s = n.getId(i);
    return !!t.some(t => t.id === s) || mh(t, i, n)
  }

  function _h(t, e) {
    const {
      parentNode: n
    } = e;
    return !!n && (!!t.has(n) || _h(t, n))
  }
  const yh = t => {
      return (...e) => {
        try {
          return t(...e)
        } catch (t) {
          try {
            t.__rrweb__ = !0
          } catch (t) {}
          throw t
        }
      }
    },
    vh = [];

  function bh(t) {
    try {
      if ("composedPath" in t) {
        const e = t.composedPath();
        if (e.length) return e[0]
      } else if ("path" in t && t.path.length) return t.path[0]
    } catch (t) {}
    return t && t.target
  }

  function Mh(t, e) {
    var n, i;
    const s = new fh;
    vh.push(s), s.init(t);
    let r = window.MutationObserver || window.__rrMutationObserver;
    const a = null === (i = null === (n = null === window || void 0 === window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === i ? void 0 : i.call(n, "MutationObserver");
    a && window[a] && (r = window[a]);
    const o = new r(yh(e => {
      t.onMutation && !1 === t.onMutation(e) || s.processMutations(e)
    }));
    return o.observe(e, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0
    }), o
  }

  function Nh({
    mouseInteractionCb: t,
    doc: e,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    unblockSelector: r,
    sampling: a
  }) {
    if (!1 === a.mouseInteraction) return () => {};
    const o = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
      c = [];
    return Object.keys(qd).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== o[t]).forEach(a => {
      const o = a.toLowerCase(),
        l = yh((e => a => {
          const o = bh(a);
          if (rh(o, i, s, r)) return;
          const c = oh(a) ? a.changedTouches[0] : a;
          if (!c) return;
          const l = n.getId(o),
            {
              clientX: u,
              clientY: d
            } = c;
          yh(t)({
            type: qd[e],
            id: l,
            x: u,
            y: d
          })
        })(a));
      c.push(Jd(o, l, e))
    }), yh(() => {
      c.forEach(t => t())
    })
  }

  function Dh({
    scrollCb: t,
    doc: e,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    unblockSelector: r,
    sampling: a
  }) {
    const o = th(a => {
      const o = bh(a);
      if (!o || rh(o, i, s, r)) return;
      const c = n.getId(o);
      if (o === e) {
        const n = e.scrollingElement || e.documentElement;
        yh(t)({
          id: c,
          x: n.scrollLeft,
          y: n.scrollTop
        })
      } else yh(t)({
        id: c,
        x: o.scrollLeft,
        y: o.scrollTop
      })
    }, a.scroll || 100);
    return Jd("scroll", yh(o), e)
  }

  function Ih(t, e) {
    const n = Object.assign({}, t);
    return e || delete n.userTriggered, n
  }
  const Sh = ["INPUT", "TEXTAREA", "SELECT"],
    wh = new WeakMap;

  function Eh({
    inputCb: t,
    doc: e,
    mirror: n,
    blockClass: i,
    blockSelector: s,
    unblockSelector: r,
    ignoreClass: a,
    ignoreSelector: o,
    maskInputSelector: c,
    unmaskInputSelector: l,
    maskInputOptions: u,
    maskInputFn: d,
    sampling: h,
    userTriggeredOnInput: p
  }) {
    function f(t) {
      let n = bh(t);
      const h = n && n.tagName,
        f = t.isTrusted;
      if ("OPTION" === h && (n = n.parentElement), !n || !h || Sh.indexOf(h) < 0 || rh(n, i, s, r)) return;
      const m = n,
        _ = Md(m);
      if (m.classList.contains(a) || o && m.matches(o)) return;
      let y = Nd(m, h, _),
        v = !1;
      "radio" !== _ && "checkbox" !== _ || (v = n.checked),
        function({
          tagName: t,
          type: e,
          maskInputOptions: n,
          maskInputSelector: i
        }) {
          return i || yd({
            maskInputOptions: n,
            tagName: t,
            type: e
          })
        }({
          maskInputOptions: u,
          maskInputSelector: c,
          tagName: h,
          type: _
        }) && (y = vd({
          input: m,
          maskInputOptions: u,
          maskInputSelector: c,
          unmaskInputSelector: l,
          tagName: h,
          type: _,
          value: y,
          maskInputFn: d
        })), g(n, yh(Ih)({
          text: y,
          isChecked: v,
          userTriggered: f
        }, p));
      const b = n.name;
      "radio" === _ && b && v && e.querySelectorAll(`input[type="radio"][name="${b}"]`).forEach(t => {
        if (t !== n) {
          const e = vd({
            input: t,
            maskInputOptions: u,
            maskInputSelector: c,
            unmaskInputSelector: l,
            tagName: h,
            type: _,
            value: Nd(t, h, _),
            maskInputFn: d
          });
          g(t, yh(Ih)({
            text: e,
            isChecked: !v,
            userTriggered: !1
          }, p))
        }
      })
    }

    function g(e, i) {
      const s = wh.get(e);
      if (!s || s.text !== i.text || s.isChecked !== i.isChecked) {
        wh.set(e, i);
        const s = n.getId(e);
        t(Object.assign(Object.assign({}, i), {
          id: s
        }))
      }
    }
    const m = ("last" === h.input ? ["change"] : ["input", "change"]).map(t => Jd(t, yh(f), e)),
      _ = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
      y = [
        [HTMLInputElement.prototype, "value"],
        [HTMLInputElement.prototype, "checked"],
        [HTMLSelectElement.prototype, "value"],
        [HTMLTextAreaElement.prototype, "value"],
        [HTMLSelectElement.prototype, "selectedIndex"],
        [HTMLOptionElement.prototype, "selected"]
      ];
    return _ && _.set && m.push(...y.map(t => eh(t[0], t[1], {
      set() {
        yh(f)({
          target: this
        })
      }
    }))), yh(() => {
      m.forEach(t => t())
    })
  }

  function kh(t) {
    return function(t, e) {
      if (xh("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || xh("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || xh("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || xh("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
        const n = Array.from(t.parentRule.cssRules).indexOf(t);
        e.unshift(n)
      } else {
        const n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
        e.unshift(n)
      }
      return e
    }(t, [])
  }

  function Th(t, e = {}) {
    const n = t.doc.defaultView;
    if (!n) return () => {};
    ! function(t, e) {
      const {
        mutationCb: n,
        mousemoveCb: i,
        mouseInteractionCb: s,
        scrollCb: r,
        viewportResizeCb: a,
        inputCb: o,
        mediaInteractionCb: c,
        styleSheetRuleCb: l,
        styleDeclarationCb: u,
        canvasMutationCb: d,
        fontCb: h
      } = t;
      t.mutationCb = ((...t) => {
        e.mutation && e.mutation(...t), n(...t)
      }), t.mousemoveCb = ((...t) => {
        e.mousemove && e.mousemove(...t), i(...t)
      }), t.mouseInteractionCb = ((...t) => {
        e.mouseInteraction && e.mouseInteraction(...t), s(...t)
      }), t.scrollCb = ((...t) => {
        e.scroll && e.scroll(...t), r(...t)
      }), t.viewportResizeCb = ((...t) => {
        e.viewportResize && e.viewportResize(...t), a(...t)
      }), t.inputCb = ((...t) => {
        e.input && e.input(...t), o(...t)
      }), t.mediaInteractionCb = ((...t) => {
        e.mediaInteaction && e.mediaInteaction(...t), c(...t)
      }), t.styleSheetRuleCb = ((...t) => {
        e.styleSheetRule && e.styleSheetRule(...t), l(...t)
      }), t.styleDeclarationCb = ((...t) => {
        e.styleDeclaration && e.styleDeclaration(...t), u(...t)
      }), t.canvasMutationCb = ((...t) => {
        e.canvasMutation && e.canvasMutation(...t), d(...t)
      }), t.fontCb = ((...t) => {
        e.font && e.font(...t), h(...t)
      })
    }(t, e);
    const i = Mh(t, t.doc),
      s = function({
        mousemoveCb: t,
        sampling: e,
        doc: n,
        mirror: i
      }) {
        if (!1 === e.mousemove) return () => {};
        const s = "number" == typeof e.mousemove ? e.mousemove : 50;
        let r, a = [];
        const o = th(e => {
            const n = Date.now() - r;
            yh(t)(a.map(t => (t.timeOffset -= n, t)), e), a = [], r = null
          }, "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500),
          c = th(t => {
            const e = bh(t),
              {
                clientX: n,
                clientY: s
              } = oh(t) ? t.changedTouches[0] : t;
            r || (r = Date.now()), a.push({
              x: n,
              y: s,
              id: i.getId(e),
              timeOffset: Date.now() - r
            }), o("undefined" != typeof DragEvent && t instanceof DragEvent ? Hd.Drag : t instanceof MouseEvent ? Hd.MouseMove : Hd.TouchMove)
          }, s, {
            trailing: !1
          }),
          l = [Jd("mousemove", yh(c), n), Jd("touchmove", yh(c), n), Jd("drag", yh(c), n)];
        return yh(() => {
          l.forEach(t => t())
        })
      }(t),
      r = Nh(t),
      a = Dh(t),
      o = function({
        viewportResizeCb: t
      }) {
        let e = -1,
          n = -1;
        const i = th(() => {
          const i = ih(),
            s = sh();
          e === i && n === s || (yh(t)({
            width: Number(s),
            height: Number(i)
          }), e = i, n = s)
        }, 200);
        return Jd("resize", yh(i), window)
      }(t),
      c = Eh(t),
      l = function({
        mediaInteractionCb: t,
        blockClass: e,
        blockSelector: n,
        unblockSelector: i,
        mirror: s,
        sampling: r
      }) {
        const a = a => th(yh(r => {
            const o = bh(r);
            if (!o || rh(o, e, n, i)) return;
            const {
              currentTime: c,
              volume: l,
              muted: u
            } = o;
            t({
              type: a,
              id: s.getId(o),
              currentTime: c,
              volume: l,
              muted: u
            })
          }), r.media || 500),
          o = [Jd("play", a(0)), Jd("pause", a(1)), Jd("seeked", a(2)), Jd("volumechange", a(3))];
        return yh(() => {
          o.forEach(t => t())
        })
      }(t),
      u = function({
        styleSheetRuleCb: t,
        mirror: e
      }, {
        win: n
      }) {
        if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
        const i = n.CSSStyleSheet.prototype.insertRule;
        n.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
          apply: yh((n, i, s) => {
            const [r, a] = s, o = e.getId(i.ownerNode);
            return -1 !== o && t({
              id: o,
              adds: [{
                rule: r,
                index: a
              }]
            }), n.apply(i, s)
          })
        });
        const s = n.CSSStyleSheet.prototype.deleteRule;
        n.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
          apply: yh((n, i, s) => {
            const [r] = s, a = e.getId(i.ownerNode);
            return -1 !== a && t({
              id: a,
              removes: [{
                index: r
              }]
            }), n.apply(i, s)
          })
        });
        const r = {};
        Ch("CSSGroupingRule") ? r.CSSGroupingRule = n.CSSGroupingRule : (Ch("CSSMediaRule") && (r.CSSMediaRule = n.CSSMediaRule), Ch("CSSConditionRule") && (r.CSSConditionRule = n.CSSConditionRule), Ch("CSSSupportsRule") && (r.CSSSupportsRule = n.CSSSupportsRule));
        const a = {};
        return Object.entries(r).forEach(([n, i]) => {
          a[n] = {
            insertRule: i.prototype.insertRule,
            deleteRule: i.prototype.deleteRule
          }, i.prototype.insertRule = new Proxy(a[n].insertRule, {
            apply: yh((n, i, s) => {
              const [r, a] = s, o = e.getId(i.parentStyleSheet.ownerNode);
              return -1 !== o && t({
                id: o,
                adds: [{
                  rule: r,
                  index: [...kh(i), a || 0]
                }]
              }), n.apply(i, s)
            })
          }), i.prototype.deleteRule = new Proxy(a[n].deleteRule, {
            apply: yh((n, i, s) => {
              const [r] = s, a = e.getId(i.parentStyleSheet.ownerNode);
              return -1 !== a && t({
                id: a,
                removes: [{
                  index: [...kh(i), r]
                }]
              }), n.apply(i, s)
            })
          })
        }), yh(() => {
          n.CSSStyleSheet.prototype.insertRule = i, n.CSSStyleSheet.prototype.deleteRule = s, Object.entries(r).forEach(([t, e]) => {
            e.prototype.insertRule = a[t].insertRule, e.prototype.deleteRule = a[t].deleteRule
          })
        })
      }(t, {
        win: n
      }),
      d = function({
        styleDeclarationCb: t,
        mirror: e
      }, {
        win: n
      }) {
        const i = n.CSSStyleDeclaration.prototype.setProperty;
        n.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
          apply: yh((n, i, s) => {
            var r, a;
            const [o, c, l] = s, u = e.getId(null === (a = null === (r = i.parentRule) || void 0 === r ? void 0 : r.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
            return -1 !== u && t({
              id: u,
              set: {
                property: o,
                value: c,
                priority: l
              },
              index: kh(i.parentRule)
            }), n.apply(i, s)
          })
        });
        const s = n.CSSStyleDeclaration.prototype.removeProperty;
        return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
          apply: yh((n, i, s) => {
            var r, a;
            const [o] = s, c = e.getId(null === (a = null === (r = i.parentRule) || void 0 === r ? void 0 : r.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
            return -1 !== c && t({
              id: c,
              remove: {
                property: o
              },
              index: kh(i.parentRule)
            }), n.apply(i, s)
          })
        }), yh(() => {
          n.CSSStyleDeclaration.prototype.setProperty = i, n.CSSStyleDeclaration.prototype.removeProperty = s
        })
      }(t, {
        win: n
      }),
      h = t.collectFonts ? function({
        fontCb: t,
        doc: e
      }) {
        const n = e.defaultView;
        if (!n) return () => {};
        const i = [],
          s = new WeakMap,
          r = n.FontFace;
        n.FontFace = function(t, e, n) {
          const i = new r(t, e, n);
          return s.set(i, {
            family: t,
            buffer: "string" != typeof e,
            descriptors: n,
            fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
          }), i
        };
        const a = nh(e.fonts, "add", function(e) {
          return function(n) {
            return setTimeout(() => {
              const e = s.get(n);
              e && (t(e), s.delete(n))
            }, 0), e.apply(this, [n])
          }
        });
        return i.push(() => {
          n.FontFace = r
        }), i.push(a), yh(() => {
          i.forEach(t => t())
        })
      }(t) : () => {},
      p = [];
    for (const e of t.plugins) p.push(e.observer(e.callback, n, e.options));
    return yh(() => {
      vh.forEach(t => t.reset()), i.disconnect(), s(), r(), a(), o(), c(), l();
      try {
        u(), d()
      } catch (t) {}
      h(), p.forEach(t => t())
    })
  }

  function xh(t) {
    return void 0 !== window[t]
  }

  function Ch(t) {
    return Boolean(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
  }
  class Ah {
    constructor(t) {
      this.iframes = new WeakMap, this.mutationCb = t.mutationCb
    }
    addIframe(t) {
      this.iframes.set(t, !0)
    }
    addLoadListener(t) {
      this.loadListener = t
    }
    attachIframe(t, e) {
      var n;
      this.mutationCb({
        adds: [{
          parentId: t.__sn.id,
          nextId: null,
          node: e
        }],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: !0
      }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
    }
  }
  class jh {
    constructor(t) {
      this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
      const e = this;
      this.restorePatches.push(nh(HTMLElement.prototype, "attachShadow", function(t) {
        return function() {
          const n = t.apply(this, arguments);
          return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
        }
      }))
    }
    addShadowRoot(t, e) {
      Mh(Object.assign(Object.assign({}, this.bypassOptions), {
        doc: e,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      }), t), Dh(Object.assign(Object.assign({}, this.bypassOptions), {
        scrollCb: this.scrollCb,
        doc: t,
        mirror: this.mirror
      }))
    }
    observeAttachShadow(t) {
      if (t.contentWindow) {
        const e = this;
        this.restorePatches.push(nh(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
          return function() {
            const i = n.apply(this, arguments);
            return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), i
          }
        }))
      }
    }
    reset() {
      this.restorePatches.forEach(t => t())
    }
  }
  for (var zh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Oh = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Lh = 0; Lh < zh.length; Lh++) Oh[zh.charCodeAt(Lh)] = Lh;
  var Rh = function(t) {
    var e, n = new Uint8Array(t),
      i = n.length,
      s = "";
    for (e = 0; e < i; e += 3) s += zh[n[e] >> 2], s += zh[(3 & n[e]) << 4 | n[e + 1] >> 4], s += zh[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], s += zh[63 & n[e + 2]];
    return i % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : i % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s
  };
  const Uh = new Map;
  const Bh = (t, e, n) => {
    if (!t || !Ph(t, e) && "object" != typeof t) return;
    const i = function(t, e) {
      let n = Uh.get(t);
      return n || (n = new Map, Uh.set(t, n)), n.has(e) || n.set(e, []), n.get(e)
    }(n, t.constructor.name);
    let s = i.indexOf(t);
    return -1 === s && (s = i.length, i.push(t)), s
  };
  const Yh = (t, e, n) => [...t].map(t => (function t(e, n, i) {
      if (e instanceof Array) return e.map(e => t(e, n, i));
      if (null === e) return e;
      if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
        rr_type: e.constructor.name,
        args: [Object.values(e)]
      };
      if (e instanceof ArrayBuffer) return {
        rr_type: e.constructor.name,
        base64: Rh(e)
      };
      if (e instanceof DataView) return {
        rr_type: e.constructor.name,
        args: [t(e.buffer, n, i), e.byteOffset, e.byteLength]
      };
      if (e instanceof HTMLImageElement) {
        const t = e.constructor.name,
          {
            src: n
          } = e;
        return {
          rr_type: t,
          src: n
        }
      }
      if (e instanceof ImageData) return {
        rr_type: e.constructor.name,
        args: [t(e.data, n, i), e.width, e.height]
      };
      if (Ph(e, n) || "object" == typeof e) return {
        rr_type: e.constructor.name,
        index: Bh(e, n, i)
      };
      return e
    })(t, e, n)),
    Ph = (t, e) => {
      const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]);
      return Boolean(n.find(n => t instanceof e[n]))
    };

  function Gh(t, e, n, i, s, r, a, o) {
    const c = [],
      l = Object.getOwnPropertyNames(t);
    for (const u of l) try {
      if ("function" != typeof t[u]) continue;
      const l = nh(t, u, function(c) {
        return function(...l) {
          const d = c.apply(this, l);
          if (Bh(d, o, t), !rh(this.canvas, i, r, s)) {
            a.getId(this.canvas);
            const i = Yh([...l], o, t),
              s = {
                type: e,
                property: u,
                args: i
              };
            n(this.canvas, s)
          }
          return d
        }
      });
      c.push(l)
    } catch (i) {
      const s = eh(t, u, {
        set(t) {
          n(this.canvas, {
            type: e,
            property: u,
            args: [t],
            setter: !0
          })
        }
      });
      c.push(s)
    }
    return c
  }
  class Fh {
    reset() {
      this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
    }
    freeze() {
      this.frozen = !0
    }
    unfreeze() {
      this.frozen = !1
    }
    lock() {
      this.locked = !0
    }
    unlock() {
      this.locked = !1
    }
    constructor(t) {
      this.pendingCanvasMutations = new Map, this.rafStamps = {
        latestId: 0,
        invokeId: null
      }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
        !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
      }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
    }
    initCanvasMutationObserver(t, e, n, i) {
      this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
      const s = function(t, e, n, i) {
          const s = [];
          try {
            const r = nh(t.HTMLCanvasElement.prototype, "getContext", function(t) {
              return function(s, ...r) {
                return rh(this, e, n, i) || "__context" in this || (this.__context = s), t.apply(this, [s, ...r])
              }
            });
            s.push(r)
          } catch (t) {
            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
          }
          return () => {
            s.forEach(t => t())
          }
        }(t, e, i, n),
        r = function(t, e, n, i, s, r) {
          const a = [],
            o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
          for (const r of o) try {
            if ("function" != typeof e.CanvasRenderingContext2D.prototype[r]) continue;
            const o = nh(e.CanvasRenderingContext2D.prototype, r, function(e) {
              return function(...a) {
                return rh(this.canvas, n, s, i) || setTimeout(() => {
                  const e = [...a];
                  if ("drawImage" === r && e[0] && e[0] instanceof HTMLCanvasElement) {
                    const t = e[0],
                      n = t.getContext("2d");
                    let i = null === n || void 0 === n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                      s = null === i || void 0 === i ? void 0 : i.data;
                    e[0] = JSON.stringify(s)
                  }
                  t(this.canvas, {
                    type: Vd["2D"],
                    property: r,
                    args: e
                  })
                }, 0), e.apply(this, a)
              }
            });
            a.push(o)
          } catch (n) {
            const i = eh(e.CanvasRenderingContext2D.prototype, r, {
              set(e) {
                t(this.canvas, {
                  type: Vd["2D"],
                  property: r,
                  args: [e],
                  setter: !0
                })
              }
            });
            a.push(i)
          }
          return () => {
            a.forEach(t => t())
          }
        }(this.processMutation.bind(this), t, e, i, n, this.mirror),
        a = function(t, e, n, i, s, r) {
          const a = [];
          return a.push(...Gh(e.WebGLRenderingContext.prototype, Vd.WebGL, t, n, i, s, r, e)), void 0 !== e.WebGL2RenderingContext && a.push(...Gh(e.WebGL2RenderingContext.prototype, Vd.WebGL2, t, n, i, s, r, e)), () => {
            a.forEach(t => t())
          }
        }(this.processMutation.bind(this), t, e, i, n, this.mirror);
      this.resetObservers = (() => {
        s(), r(), a()
      })
    }
    startPendingCanvasMutationFlusher() {
      requestAnimationFrame(() => this.flushPendingCanvasMutations())
    }
    startRAFTimestamping() {
      const t = e => {
        this.rafStamps.latestId = e, requestAnimationFrame(t)
      };
      requestAnimationFrame(t)
    }
    flushPendingCanvasMutations() {
      this.pendingCanvasMutations.forEach((t, e) => {
        const n = this.mirror.getId(e);
        this.flushPendingCanvasMutationFor(e, n)
      }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
    }
    flushPendingCanvasMutationFor(t, e) {
      if (this.frozen || this.locked) return;
      const n = this.pendingCanvasMutations.get(t);
      if (!n || -1 === e) return;
      const i = n.map(t => {
          return function(t, e) {
            var n = {};
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
              var s = 0;
              for (i = Object.getOwnPropertySymbols(t); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]])
            }
            return n
          }(t, ["type"])
        }),
        {
          type: s
        } = n[0];
      this.mutationCb({
        id: e,
        type: s,
        commands: i
      }), this.pendingCanvasMutations.delete(t)
    }
  }

  function Qh(t) {
    return Object.assign(Object.assign({}, t), {
      timestamp: Date.now()
    })
  }
  let $h, Hh;
  const qh = {
    map: {},
    getId: t => t && t.__sn ? t.__sn.id : -1,
    getNode(t) {
      return this.map[t] || null
    },
    removeNodeFromMap(t) {
      const e = t.__sn && t.__sn.id;
      delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
    },
    has(t) {
      return this.map.hasOwnProperty(t)
    },
    reset() {
      this.map = {}
    }
  };

  function Vh(t = {}) {
    const {
      emit: e,
      checkoutEveryNms: n,
      checkoutEveryNth: i,
      blockClass: s = "rr-block",
      blockSelector: r = null,
      unblockSelector: a = null,
      ignoreClass: o = "rr-ignore",
      ignoreSelector: c = null,
      maskTextClass: l = "rr-mask",
      maskTextSelector: u = null,
      maskInputSelector: d = null,
      unmaskTextSelector: h = null,
      unmaskInputSelector: p = null,
      inlineStylesheet: f = !0,
      maskAllText: g = !1,
      maskAllInputs: m,
      maskInputOptions: _,
      slimDOMOptions: y,
      maskInputFn: v,
      maskTextFn: b,
      hooks: M,
      packFn: N,
      sampling: D = {},
      mousemoveWait: I,
      recordCanvas: S = !1,
      userTriggeredOnInput: w = !1,
      collectFonts: E = !1,
      inlineImages: k = !1,
      plugins: T,
      keepIframeSrcFn: x = (() => !1),
      onMutation: C
    } = t;
    if (!e) throw new Error("emit function is required");
    void 0 !== I && void 0 === D.mousemove && (D.mousemove = I);
    const A = !0 === m ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0,
        radio: !0,
        checkbox: !0
      } : void 0 !== _ ? _ : {},
      j = !0 === y || "all" === y ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === y,
        headMetaDescKeywords: "all" === y
      } : y || {};
    let z;
    ! function(t = window) {
      "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function(t) {
        if (!(0 in arguments)) throw new TypeError("1 argument is required");
        do {
          if (this === t) return !0
        } while (t = t && t.parentNode);
        return !1
      })
    }();
    let O = 0;
    $h = ((t, s) => {
      var r;
      if ((null === (r = vh[0]) || void 0 === r ? void 0 : r.isFrozen()) && t.type !== $d.FullSnapshot && (t.type !== $d.IncrementalSnapshot || t.data.source !== Hd.Mutation) && vh.forEach(t => t.unfreeze()), e((t => {
          for (const e of T || []) e.eventProcessor && (t = e.eventProcessor(t));
          return N && (t = N(t)), t
        })(t), s), t.type === $d.FullSnapshot) z = t, O = 0;
      else if (t.type === $d.IncrementalSnapshot) {
        if (t.data.source === Hd.Mutation && t.data.isAttachIframe) return;
        O++;
        const e = i && O >= i,
          s = n && t.timestamp - z.timestamp > n;
        (e || s) && Hh(!0)
      }
    });
    const L = t => {
        $h(Qh({
          type: $d.IncrementalSnapshot,
          data: Object.assign({
            source: Hd.Mutation
          }, t)
        }))
      },
      R = t => $h(Qh({
        type: $d.IncrementalSnapshot,
        data: Object.assign({
          source: Hd.Scroll
        }, t)
      })),
      U = t => $h(Qh({
        type: $d.IncrementalSnapshot,
        data: Object.assign({
          source: Hd.CanvasMutation
        }, t)
      })),
      B = new Ah({
        mutationCb: L
      }),
      Y = new Fh({
        recordCanvas: S,
        mutationCb: U,
        win: window,
        blockClass: s,
        blockSelector: r,
        unblockSelector: a,
        mirror: qh
      }),
      P = new jh({
        mutationCb: L,
        scrollCb: R,
        bypassOptions: {
          onMutation: C,
          blockClass: s,
          blockSelector: r,
          unblockSelector: a,
          maskTextClass: l,
          maskTextSelector: u,
          unmaskTextSelector: h,
          maskInputSelector: d,
          unmaskInputSelector: p,
          inlineStylesheet: f,
          maskAllText: g,
          maskInputOptions: A,
          maskTextFn: b,
          maskInputFn: v,
          recordCanvas: S,
          inlineImages: k,
          sampling: D,
          slimDOMOptions: j,
          iframeManager: B,
          canvasManager: Y
        },
        mirror: qh
      });
    Hh = ((t = !1) => {
      var e, n, i, o;
      $h(Qh({
        type: $d.Meta,
        data: {
          href: window.location.href,
          width: sh(),
          height: ih()
        }
      }), t), vh.forEach(t => t.lock());
      const [c, m] = function(t, e) {
        const {
          blockClass: n = "rr-block",
          blockSelector: i = null,
          unblockSelector: s = null,
          maskTextClass: r = "rr-mask",
          maskTextSelector: a = null,
          unmaskTextSelector: o = null,
          inlineStylesheet: c = !0,
          inlineImages: l = !1,
          recordCanvas: u = !1,
          maskInputSelector: d = null,
          unmaskInputSelector: h = null,
          maskAllText: p = !1,
          maskAllInputs: f = !1,
          maskTextFn: g,
          maskInputFn: m,
          slimDOM: _ = !1,
          dataURLOptions: y,
          preserveWhiteSpace: v,
          onSerialize: b,
          onIframeLoad: M,
          iframeLoadTimeout: N,
          keepIframeSrcFn: D = (() => !1)
        } = e || {}, I = {};
        return [Qd(t, {
          doc: t,
          map: I,
          blockClass: n,
          blockSelector: i,
          unblockSelector: s,
          maskTextClass: r,
          maskTextSelector: a,
          unmaskTextSelector: o,
          skipChild: !1,
          inlineStylesheet: c,
          maskInputSelector: d,
          unmaskInputSelector: h,
          maskAllText: p,
          maskInputOptions: !0 === f ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
          } : !1 === f ? {} : f,
          maskTextFn: g,
          maskInputFn: m,
          slimDOMOptions: !0 === _ || "all" === _ ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: "all" === _,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
          } : !1 === _ ? {} : _,
          dataURLOptions: y,
          inlineImages: l,
          recordCanvas: u,
          preserveWhiteSpace: v,
          onSerialize: b,
          onIframeLoad: M,
          iframeLoadTimeout: N,
          keepIframeSrcFn: D
        }), I]
      }(document, {
        blockClass: s,
        blockSelector: r,
        unblockSelector: a,
        maskTextClass: l,
        maskTextSelector: u,
        unmaskTextSelector: h,
        maskInputSelector: d,
        unmaskInputSelector: p,
        inlineStylesheet: f,
        maskAllText: g,
        maskAllInputs: A,
        maskTextFn: b,
        slimDOM: j,
        recordCanvas: S,
        inlineImages: k,
        onSerialize: t => {
          ch(t) && B.addIframe(t), lh(t) && P.addShadowRoot(t.shadowRoot, document)
        },
        onIframeLoad: (t, e) => {
          B.attachIframe(t, e), P.observeAttachShadow(t)
        },
        keepIframeSrcFn: x
      });
      if (!c) return console.warn("Failed to snapshot the document");
      qh.map = m, $h(Qh({
        type: $d.FullSnapshot,
        data: {
          node: c,
          initialOffset: {
            left: void 0 !== window.pageXOffset ? window.pageXOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (e = null === document || void 0 === document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null === document || void 0 === document ? void 0 : document.body.scrollLeft) || 0,
            top: void 0 !== window.pageYOffset ? window.pageYOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollTop) || (null === (o = null === (i = null === document || void 0 === document ? void 0 : document.body) || void 0 === i ? void 0 : i.parentElement) || void 0 === o ? void 0 : o.scrollTop) || (null === document || void 0 === document ? void 0 : document.body.scrollTop) || 0
          }
        }
      })), vh.forEach(t => t.unlock())
    });
    try {
      const t = [];
      t.push(Jd("DOMContentLoaded", () => {
        $h(Qh({
          type: $d.DomContentLoaded,
          data: {}
        }))
      }));
      const e = t => {
        var e;
        return yh(Th)({
          onMutation: C,
          mutationCb: L,
          mousemoveCb: (t, e) => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: {
              source: e,
              positions: t
            }
          })),
          mouseInteractionCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.MouseInteraction
            }, t)
          })),
          scrollCb: R,
          viewportResizeCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.ViewportResize
            }, t)
          })),
          inputCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.Input
            }, t)
          })),
          mediaInteractionCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.MediaInteraction
            }, t)
          })),
          styleSheetRuleCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.StyleSheetRule
            }, t)
          })),
          styleDeclarationCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.StyleDeclaration
            }, t)
          })),
          canvasMutationCb: U,
          fontCb: t => $h(Qh({
            type: $d.IncrementalSnapshot,
            data: Object.assign({
              source: Hd.Font
            }, t)
          })),
          blockClass: s,
          ignoreClass: o,
          ignoreSelector: c,
          maskTextClass: l,
          maskTextSelector: u,
          unmaskTextSelector: h,
          maskInputSelector: d,
          unmaskInputSelector: p,
          maskInputOptions: A,
          inlineStylesheet: f,
          sampling: D,
          recordCanvas: S,
          inlineImages: k,
          userTriggeredOnInput: w,
          collectFonts: E,
          doc: t,
          maskAllText: g,
          maskInputFn: v,
          maskTextFn: b,
          blockSelector: r,
          unblockSelector: a,
          slimDOMOptions: j,
          mirror: qh,
          iframeManager: B,
          shadowDomManager: P,
          canvasManager: Y,
          plugins: (null === (e = null === T || void 0 === T ? void 0 : T.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
            observer: t.observer,
            options: t.options,
            callback: e => $h(Qh({
              type: $d.Plugin,
              data: {
                plugin: t.name,
                payload: e
              }
            }))
          }))) || []
        }, M)
      };
      B.addLoadListener(n => {
        try {
          t.push(e(n.contentDocument))
        } catch (t) {
          console.warn(t)
        }
      });
      const n = () => {
        Hh(), t.push(e(document))
      };
      return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(Jd("load", () => {
        $h(Qh({
          type: $d.Load,
          data: {}
        })), n()
      }, window)), () => {
        t.forEach(t => t())
      }
    } catch (t) {
      console.warn(t)
    }
  }

  function Wh(t, e) {
    "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
      type: $d.Custom,
      timestamp: 1e3 * (e.timestamp || 0),
      data: {
        tag: "breadcrumb",
        payload: dc(e, 10, 1e3)
      }
    }), "console" === e.category)))
  }
  Vh.addCustomEvent = ((t, e) => {
    if (!$h) throw new Error("please add custom event after start recording");
    $h(Qh({
      type: $d.Custom,
      data: {
        tag: t,
        payload: e
      }
    }))
  }), Vh.freezePage = (() => {
    vh.forEach(t => t.freeze())
  }), Vh.takeFullSnapshot = (t => {
    if (!Hh) throw new Error("please take full snapshot after start recording");
    Hh(t)
  }), Vh.mirror = qh;
  const Zh = "button,a";

  function Jh(t) {
    const e = Kh(t);
    return e && e instanceof Element && e.closest(Zh) || e
  }

  function Kh(t) {
    return function(t) {
      return "object" == typeof t && !!t && "target" in t
    }(t) ? t.target : t
  }
  let Xh;

  function tp(t) {
    return Xh || (Xh = [], No(Ku, "open", function(t) {
      return function(...e) {
        if (Xh) try {
          Xh.forEach(t => t())
        } catch (t) {}
        return t.apply(Ku, e)
      }
    })), Xh.push(t), () => {
      const e = Xh ? Xh.indexOf(t) : -1;
      e > -1 && Xh.splice(e, 1)
    }
  }
  class ep {
    __init() {
      this._lastMutation = 0
    }
    __init2() {
      this._lastScroll = 0
    }
    __init3() {
      this._clicks = []
    }
    constructor(t, e, n = Wh) {
      ep.prototype.__init.call(this), ep.prototype.__init2.call(this), ep.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._multiClickTimeout = e.multiClickTimeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
    }
    addListeners() {
      const t = () => {
          this._lastScroll = ip()
        },
        e = tp(() => {
          this._lastMutation = ip()
        }),
        n = t => {
          if (!t.target) return;
          const e = Jh(t);
          e && this._handleMultiClick(e)
        },
        i = new MutationObserver(() => {
          this._lastMutation = ip()
        });
      i.observe(Ku.document.documentElement, {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
      }), Ku.addEventListener("scroll", t, {
        passive: !0
      }), Ku.addEventListener("click", n, {
        passive: !0
      }), this._teardown = (() => {
        Ku.removeEventListener("scroll", t), Ku.removeEventListener("click", n), e(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
      })
    }
    removeListeners() {
      this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(t, e) {
      if (function(t, e) {
          if (!np.includes(t.tagName)) return !0;
          if ("INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "")) return !0;
          if ("A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target"))) return !0;
          if (e && t.matches(e)) return !0;
          return !1
        }(e, this._ignoreSelector) || ! function(t) {
          return !(!t.data || "number" != typeof t.data.nodeId || !t.timestamp)
        }(t)) return;
      if (this._getClick(e)) return;
      const n = {
        timestamp: t.timestamp,
        clickBreadcrumb: t,
        clickCount: 0,
        node: e
      };
      this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks()
    }
    _handleMultiClick(t) {
      const e = this._getClick(t);
      e && e.clickCount++
    }
    _getClick(t) {
      const e = ip();
      return this._clicks.find(n => n.node === t && e - n.timestamp < this._multiClickTimeout)
    }
    _checkClicks() {
      const t = [],
        e = ip();
      this._clicks.forEach(n => {
        !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0);
        const i = n.scrollAfter || n.mutationAfter || 0;
        i && i >= this._multiClickTimeout ? t.push(n) : n.timestamp + this._timeout <= e && t.push(n)
      });
      for (const e of t) {
        this._generateBreadcrumbs(e);
        const t = this._clicks.indexOf(e); - 1 !== t && this._clicks.splice(t, 1)
      }
      this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(t) {
      const e = this._replay,
        n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
        i = t.mutationAfter && t.mutationAfter <= this._threshold,
        s = !n && !i,
        {
          clickCount: r,
          clickBreadcrumb: a
        } = t;
      if (s) {
        const n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
          i = n < 1e3 * this._timeout ? "mutation" : "timeout",
          s = {
            type: "default",
            message: a.message,
            timestamp: a.timestamp,
            category: "ui.slowClickDetected",
            data: {
              ...a.data,
              url: Ku.location.href,
              route: e.getCurrentRoute(),
              timeAfterClickMs: n,
              endReason: i,
              clickCount: r || 1
            }
          };
        this._addBreadcrumbEvent(e, s)
      } else if (r > 1) {
        const t = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.multiClick",
          data: {
            ...a.data,
            url: Ku.location.href,
            route: e.getCurrentRoute(),
            clickCount: r,
            metric: !0
          }
        };
        this._addBreadcrumbEvent(e, t)
      }
    }
    _scheduleCheckClicks() {
      this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
    }
  }
  const np = ["A", "BUTTON", "INPUT"];

  function ip() {
    return Date.now() / 1e3
  }

  function sp(t) {
    return {
      timestamp: Date.now() / 1e3,
      type: "default",
      ...t
    }
  }
  var rp;
  ! function(t) {
    t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
  }(rp || (rp = {}));
  const ap = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]);
  const op = t => e => {
    if (!t.isEnabled()) return;
    const n = function(t) {
      const {
        target: e,
        message: n
      } = function(t) {
        const e = "click" === t.name;
        let n, i = null;
        try {
          i = e ? Jh(t.event) : Kh(t.event), n = ao(i, {
            maxStringLength: 200
          }) || "<unknown>"
        } catch (t) {
          n = "<unknown>"
        }
        return {
          target: i,
          message: n
        }
      }(t);
      return sp({
        category: `ui.${t.name}`,
        ...dp(e, n)
      })
    }(e);
    if (!n) return;
    const i = "click" === e.name,
      s = i && e.event;
    i && t.clickDetector && s && !s.altKey && !s.metaKey && !s.ctrlKey && (cp = t.clickDetector, lp = n, up = Jh(e.event), cp.handleClick(lp, up)), Wh(t, n)
  };
  var cp, lp, up;

  function dp(t, e) {
    const n = t && "__sn" in t && t.__sn.type === rp.Element ? t.__sn : null;
    return {
      message: e,
      data: n ? {
        nodeId: n.id,
        node: {
          id: n.id,
          tagName: n.tagName,
          textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === rp.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
          attributes: function(t) {
            const e = {};
            for (const n in t)
              if (ap.has(n)) {
                let i = n;
                "data-testid" !== n && "data-test-id" !== n || (i = "testId"), e[i] = t[n]
              } return e
          }(n.attributes)
        }
      } : {}
    }
  }

  function hp(t, e) {
    if (!t.isEnabled()) return;
    t.updateUserActivity();
    const n = function(t) {
      const {
        metaKey: e,
        shiftKey: n,
        ctrlKey: i,
        altKey: s,
        key: r,
        target: a
      } = t;
      if (!a || function(t) {
          return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
        }(a) || !r) return null;
      const o = e || i || s,
        c = 1 === r.length;
      if (!o && c) return null;
      const l = ao(a, {
          maxStringLength: 200
        }) || "<unknown>",
        u = dp(a, l);
      return sp({
        category: "ui.keyDown",
        message: l,
        data: {
          ...u.data,
          metaKey: e,
          shiftKey: n,
          ctrlKey: i,
          altKey: s,
          key: r
        }
      })
    }(e);
    n && Wh(t, n)
  }
  const pp = ["name", "type", "startTime", "transferSize", "duration"];

  function fp(t) {
    return function(e) {
      return pp.every(n => t[n] === e[n])
    }
  }

  function gp(t) {
    const e = new PerformanceObserver(e => {
      const n = function(t, e) {
        const [n, i, s] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
          [],
          [],
          []
        ]), r = [], a = [];
        let o = i.length ? i[i.length - 1] : void 0;
        return e.forEach(t => {
          if ("largest-contentful-paint" !== t.entryType)
            if ("navigation" !== t.entryType) r.push(t);
            else {
              const e = t;
              t.duration > 0 && !n.find(fp(e)) && !a.find(fp(e)) && a.push(e)
            }
          else(!o || o.startTime < t.startTime) && (o = t)
        }), [...o ? [o] : [], ...n, ...s, ...r, ...a].sort((t, e) => t.startTime - e.startTime)
      }(t.performanceEvents, e.getEntries());
      t.performanceEvents = n
    });
    return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(t => {
      try {
        e.observe({
          type: t,
          buffered: !0
        })
      } catch (t) {}
    }), e
  }
  const mp = '/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';

  function _p(t) {
    return t > 9999999999 ? t : 1e3 * t
  }
  class yp {
    __init() {
      this._totalSize = 0
    }
    constructor() {
      yp.prototype.__init.call(this), this.events = []
    }
    get hasEvents() {
      return this.events.length > 0
    }
    get type() {
      return "sync"
    }
    destroy() {
      this.events = []
    }
    async addEvent(t) {
      const e = JSON.stringify(t).length;
      if (this._totalSize += e, this._totalSize > gd) throw new Dp;
      this.events.push(t)
    }
    finish() {
      return new Promise(t => {
        const e = this.events;
        this.clear(), t(JSON.stringify(e))
      })
    }
    clear() {
      this.events = [], this._totalSize = 0
    }
    getEarliestTimestamp() {
      const t = this.events.map(t => t.timestamp).sort()[0];
      return t ? _p(t) : null
    }
  }
  class vp {
    constructor(t) {
      this._worker = t, this._id = 0
    }
    ensureReady() {
      return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
        this._worker.addEventListener("message", ({
          data: n
        }) => {
          n.success ? t() : e()
        }, {
          once: !0
        }), this._worker.addEventListener("error", t => {
          e(t)
        }, {
          once: !0
        })
      }), this._ensureReadyPromise)
    }
    destroy() {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Destroying compression worker"), this._worker.terminate()
    }
    postMessage(t, e) {
      const n = this._getAndIncrementId();
      return new Promise((i, s) => {
        const r = ({
          data: e
        }) => {
          const a = e;
          if (a.method === t && a.id === n) {
            if (this._worker.removeEventListener("message", r), !a.success) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay]", a.response), void s(new Error("Error in compression worker"));
            i(a.response)
          }
        };
        this._worker.addEventListener("message", r), this._worker.postMessage({
          id: n,
          method: t,
          arg: e
        })
      })
    }
    _getAndIncrementId() {
      return this._id++
    }
  }
  class bp {
    __init() {
      this._totalSize = 0
    }
    constructor(t) {
      bp.prototype.__init.call(this), this._worker = new vp(t), this._earliestTimestamp = null
    }
    get hasEvents() {
      return !!this._earliestTimestamp
    }
    get type() {
      return "worker"
    }
    ensureReady() {
      return this._worker.ensureReady()
    }
    destroy() {
      this._worker.destroy()
    }
    addEvent(t) {
      const e = _p(t.timestamp);
      (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
      const n = JSON.stringify(t);
      return this._totalSize += n.length, this._totalSize > gd ? Promise.reject(new Dp) : this._sendEventToWorker(n)
    }
    finish() {
      return this._finishRequest()
    }
    clear() {
      this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
    }
    getEarliestTimestamp() {
      return this._earliestTimestamp
    }
    _sendEventToWorker(t) {
      return this._worker.postMessage("addEvent", t)
    }
    async _finishRequest() {
      const t = await this._worker.postMessage("finish");
      return this._earliestTimestamp = null, this._totalSize = 0, t
    }
  }
  class Mp {
    constructor(t) {
      this._fallback = new yp, this._compression = new bp(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
    get type() {
      return this._used.type
    }
    get hasEvents() {
      return this._used.hasEvents
    }
    destroy() {
      this._fallback.destroy(), this._compression.destroy()
    }
    clear() {
      return this._used.clear()
    }
    getEarliestTimestamp() {
      return this._used.getEarliestTimestamp()
    }
    addEvent(t) {
      return this._used.addEvent(t)
    }
    async finish() {
      return await this.ensureWorkerIsLoaded(), this._used.finish()
    }
    ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
      try {
        await this._compression.ensureReady()
      } catch (t) {
        return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Failed to load the compression worker, falling back to simple buffer"))
      }
      await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
      const {
        events: t
      } = this._fallback, e = [];
      for (const n of t) e.push(this._compression.addEvent(n));
      this._used = this._compression;
      try {
        await Promise.all(e)
      } catch (t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("[Replay] Failed to add events when switching buffers.", t)
      }
    }
  }

  function Np({
    useCompression: t
  }) {
    if (t && window.Worker) try {
      const t = function() {
        const t = new Blob([mp]);
        return URL.createObjectURL(t)
      }();
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Using compression worker");
      const e = new Worker(t);
      return new Mp(e)
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Failed to create compression worker")
    }
    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Using simple buffer"), new yp
  }
  class Dp extends Error {
    constructor() {
      super(`Event buffer exceeded maximum size of ${gd}.`)
    }
  }

  function Ip(t) {
    ! function() {
      if (!("sessionStorage" in Ku)) return;
      try {
        Ku.sessionStorage.removeItem(Xu)
      } catch (t) {}
    }(), t.session = void 0
  }

  function Sp(t, e, n = +new Date) {
    return null === t || void 0 === e || e < 0 || 0 !== e && t + e <= n
  }

  function wp(t, e, n = +new Date) {
    return Sp(t.started, e.maxSessionLife, n) || Sp(t.lastActivity, e.sessionIdleExpire, n)
  }

  function Ep(t) {
    return void 0 !== t && Math.random() < t
  }

  function kp(t) {
    if ("sessionStorage" in Ku) try {
      Ku.sessionStorage.setItem(Xu, JSON.stringify(t))
    } catch (t) {}
  }

  function Tp(t) {
    const e = Date.now();
    return {
      id: t.id || ec(),
      started: t.started || e,
      lastActivity: t.lastActivity || e,
      segmentId: t.segmentId || 0,
      sampled: t.sampled,
      shouldRefresh: !0
    }
  }

  function xp({
    sessionSampleRate: t,
    allowBuffering: e,
    stickySession: n = !1
  }) {
    const i = Tp({
      sampled: function(t, e) {
        return Ep(t) ? "session" : !!e && "buffer"
      }(t, e)
    });
    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Replay] Creating new session: ${i.id}`), n && kp(i), i
  }

  function Cp({
    timeouts: t,
    currentSession: e,
    stickySession: n,
    sessionSampleRate: i,
    allowBuffering: s
  }) {
    const r = e || n && function() {
      if (!("sessionStorage" in Ku)) return null;
      try {
        const t = Ku.sessionStorage.getItem(Xu);
        return t ? Tp(JSON.parse(t)) : null
      } catch (t) {
        return null
      }
    }();
    if (r) {
      if (!wp(r, t) || s && r.shouldRefresh) return {
        type: "saved",
        session: r
      };
      if (!r.shouldRefresh) {
        return {
          type: "new",
          session: Tp({
            sampled: !1
          })
        }
      }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Session has expired")
    }
    return {
      type: "new",
      session: xp({
        stickySession: n,
        sessionSampleRate: i,
        allowBuffering: s
      })
    }
  }
  async function Ap(t, e, n) {
    if (!t.eventBuffer) return null;
    if (t.isPaused()) return null;
    if (_p(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return null;
    try {
      n && t.eventBuffer.clear();
      const i = t.getOptions(),
        s = "function" == typeof i.beforeAddRecordingEvent && function(t) {
          return t.type === $d.Custom
        }(e) ? i.beforeAddRecordingEvent(e) : e;
      if (!s) return;
      return await t.eventBuffer.addEvent(s)
    } catch (e) {
      const n = e && e instanceof Dp ? "addEventSizeExceeded" : "addEvent";
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(e), await t.stop(n);
      const i = al().getClient();
      i && i.recordDroppedEvent("internal_sdk_error", "replay")
    }
  }

  function jp(t) {
    return !t.type
  }

  function zp(t) {
    return "transaction" === t.type
  }

  function Op(t) {
    const e = function() {
      const t = al().getClient();
      if (!t) return !1;
      const e = t.getTransport();
      if (!e) return !1;
      return e.send.__sentry__baseTransport__ || !1
    }();
    return (n, i) => {
      if (!jp(n) && !zp(n)) return;
      const s = i && i.statusCode;
      e && (!s || s < 200 || s >= 300) || (zp(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id ? t.getContext().traceIds.add(n.contexts.trace.trace_id) : jp(n) && (n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
        t.sendBufferedReplayOrFlush()
      })))
    }
  }

  function Lp(t, e = !1) {
    const n = e ? Op(t) : void 0;
    return (e, i) => {
      if ("replay_event" === e.type) return delete e.breadcrumbs, e;
      if (!jp(e) && !zp(e)) return e;
      if (function(t, e) {
          return !(t.type || !t.exception || !t.exception.values || !t.exception.values.length) && (!(!e.originalException || !e.originalException.__rrweb__) || t.exception.values.some(t => !!(t.stacktrace && t.stacktrace.frames && t.stacktrace.frames.length) && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/"))))
        }(e, i) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Ignoring error from rrweb internals", e), null;
      return (function(t, e) {
        return "buffer" === t.recordingMode && e.message !== ed && !(!e.exception || e.type) && Ep(t.getOptions().errorSampleRate)
      }(t, e) || "session" === t.recordingMode) && (e.tags = {
        ...e.tags,
        replayId: t.getSessionId()
      }), n && n(e, {
        statusCode: 200
      }), e
    }
  }

  function Rp(t, e) {
    return e.map(({
      type: e,
      start: n,
      end: i,
      name: s,
      data: r
    }) => {
      const a = t.throttledAddEvent({
        type: $d.Custom,
        timestamp: n,
        data: {
          tag: "performanceSpan",
          payload: {
            op: e,
            description: s,
            startTimestamp: n,
            endTimestamp: i,
            data: r
          }
        }
      });
      return "string" == typeof a ? Promise.resolve(null) : a
    })
  }

  function Up(t) {
    return e => {
      if (!t.isEnabled()) return;
      const n = function(t) {
        const {
          from: e,
          to: n
        } = t, i = Date.now() / 1e3;
        return {
          type: "navigation.push",
          start: i,
          end: i,
          name: n,
          data: {
            previous: e
          }
        }
      }(e);
      null !== n && (t.getContext().urls.push(n.name), t.triggerUserActivity(), t.addUpdate(() => (Rp(t, [n]), !1)))
    }
  }

  function Bp(t, e) {
    return ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || !t.getOptions()._experiments.traceInternals) && function(t) {
      const e = al().getClient(),
        n = e && e.getDsn();
      return !!n && t.includes(n.host)
    }(e)
  }

  function Yp(t, e) {
    t.isEnabled() && null !== e && (Bp(t, e.name) || t.addUpdate(() => (Rp(t, [e]), !0)))
  }

  function Pp(t) {
    return e => {
      if (!t.isEnabled()) return;
      const n = function(t) {
        const {
          startTimestamp: e,
          endTimestamp: n,
          xhr: i
        } = t, s = i[Yo];
        if (!e || !n || !s) return null;
        const {
          method: r,
          url: a,
          status_code: o
        } = s;
        return void 0 === a ? null : {
          type: "resource.xhr",
          name: a,
          start: e / 1e3,
          end: n / 1e3,
          data: {
            method: r,
            statusCode: o
          }
        }
      }(e);
      Yp(t, n)
    }
  }
  const Gp = 10,
    Fp = 11,
    Qp = 12,
    $p = 13,
    Hp = 14,
    qp = 15,
    Vp = 20,
    Wp = 21,
    Zp = 22,
    Jp = 23,
    Kp = ["true", "false", "null"];

  function Xp(t, e) {
    if (!e.length) return t;
    let n = t;
    const i = e.length - 1;
    n = function(t, e) {
      switch (e) {
        case Gp:
          return `${t}"~~":"~~"`;
        case Fp:
          return `${t}:"~~"`;
        case Qp:
          return `${t}~~":"~~"`;
        case $p:
          return function(t) {
            const e = t.lastIndexOf(":"),
              n = t.slice(e + 1);
            if (Kp.includes(n.trim())) return `${t},"~~":"~~"`;
            return `${t.slice(0,e+1)}"~~"`
          }(t);
        case Hp:
          return `${t}~~"`;
        case qp:
          return `${t},"~~":"~~"`;
        case Vp:
          return `${t}"~~"`;
        case Wp:
          return function(t) {
            const e = function(t) {
              for (let e = t.length - 1; e >= 0; e--) {
                const n = t[e];
                if ("," === n || "[" === n) return e
              }
              return -1
            }(t);
            if (e > -1) {
              const n = t.slice(e + 1);
              return Kp.includes(n.trim()) ? `${t},"~~"` : `${t.slice(0,e+1)}"~~"`
            }
            return t
          }(t);
        case Zp:
          return `${t}~~"`;
        case Jp:
          return `${t},"~~"`
      }
      return t
    }(n, e[i]);
    for (let t = i; t >= 0; t--) {
      switch (e[t]) {
        case Gp:
          n = `${n}}`;
          break;
        case Vp:
          n = `${n}]`
      }
    }
    return n
  }

  function tf(t, e, n) {
    const i = t[t.length - 1],
      s = e[n];
    if (!/\s/.test(s))
      if ('"' !== s || function t(e, n) {
          const i = e[n - 1];
          return "\\" === i && !t(e, n - 1)
        }(e, n)) switch (s) {
        case "{":
          ! function(t, e) {
            if (!e) return void t.push(Gp);
            if (e === $p) return void t.push(Gp);
            e === Wp && t.push(Gp);
            if (e === Vp) t.push(Gp)
          }(t, i);
          break;
        case "[":
          ! function(t, e) {
            if (!e) return t.push(Vp), void t.push(Wp);
            if (e === $p) return t.push(Vp), void t.push(Wp);
            e === Wp && (t.push(Vp), t.push(Wp));
            if (e === Vp) t.push(Vp), t.push(Wp)
          }(t, i);
          break;
        case ":":
          ! function(t, e) {
            e === Fp && (t.pop(), t.push($p))
          }(t, i);
          break;
        case ",":
          ! function(t, e) {
            if (e === $p) return void t.pop();
            if (e === qp) return t.pop(), void t.pop();
            if (e === Wp) return;
            if (e === Jp) t.pop()
          }(t, i);
          break;
        case "}":
          ! function(t, e) {
            e === Gp && t.pop();
            e === $p && (t.pop(), t.pop());
            e === qp && (t.pop(), t.pop(), t.pop());
            t[t.length - 1] === $p && t.push(qp);
            t[t.length - 1] === Wp && t.push(Jp)
          }(t, i);
          break;
        case "]":
          ! function(t, e) {
            e === Vp && t.pop();
            e === Wp && (t.pop(), t.pop());
            e === Jp && (t.pop(), t.pop(), t.pop());
            t[t.length - 1] === $p && t.push(qp);
            t[t.length - 1] === Wp && t.push(Jp)
          }(t, i)
      } else ! function(t, e) {
        if (e === Hp) return t.pop(), void t.push(qp);
        if (e === Zp) return t.pop(), void t.push(Jp);
        if (e === $p) return void t.push(Hp);
        if (e === Wp) return void t.push(Zp);
        if (e === Gp) return void t.push(Qp);
        if (e === Qp) t.pop(), t.push(Fp)
      }(t, i)
  }

  function ef(t) {
    return Xp(t, function(t) {
      const e = [];
      for (let n = 0; n < t.length; n++) tf(e, t, n);
      return e
    }(t))
  }

  function nf(t, e) {
    if (t) try {
      if ("string" == typeof t) return e.encode(t).length;
      if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
      if (t instanceof FormData) {
        const n = uf(t);
        return e.encode(n).length
      }
      if (t instanceof Blob) return t.size;
      if (t instanceof ArrayBuffer) return t.byteLength
    } catch (t) {}
  }

  function sf(t) {
    if (!t) return;
    const e = parseInt(t, 10);
    return isNaN(e) ? void 0 : e
  }

  function rf(t) {
    return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? uf(t) : void 0
  }

  function af(t, e) {
    if (!e) return null;
    const {
      startTimestamp: n,
      endTimestamp: i,
      url: s,
      method: r,
      statusCode: a,
      request: o,
      response: c
    } = e;
    return {
      type: t,
      start: n / 1e3,
      end: i / 1e3,
      name: s,
      data: To({
        method: r,
        statusCode: a,
        request: o,
        response: c
      })
    }
  }

  function of(t) {
    return {
      headers: {},
      size: t,
      _meta: {
        warnings: ["URL_SKIPPED"]
      }
    }
  }

  function cf(t, e, n) {
    if (!e && 0 === Object.keys(t).length) return;
    if (!e) return {
      headers: t
    };
    if (!n) return {
      headers: t,
      size: e
    };
    const i = {
        headers: t,
        size: e
      },
      {
        body: s,
        warnings: r
      } = function(t) {
        if (!t || "string" != typeof t) return {
          body: t,
          warnings: []
        };
        const e = t.length > ud;
        if (function(t) {
            const e = t[0],
              n = t[t.length - 1];
            return "[" === e && "]" === n || "{" === e && "}" === n
          }(t)) try {
          const n = e ? ef(t.slice(0, ud)) : t,
            i = JSON.parse(n);
          return {
            body: i,
            warnings: e ? ["JSON_TRUNCATED"] : []
          }
        } catch (n) {
          return {
            body: e ? `${t.slice(0,ud)}…` : t,
            warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
          }
        }
        return {
          body: e ? `${t.slice(0,ud)}…` : t,
          warnings: e ? ["TEXT_TRUNCATED"] : []
        }
      }(n);
    return i.body = s, r.length > 0 && (i._meta = {
      warnings: r
    }), i
  }

  function lf(t, e) {
    return Object.keys(t).reduce((n, i) => {
      const s = i.toLowerCase();
      return e.includes(s) && t[i] && (n[s] = t[i]), n
    }, {})
  }

  function uf(t) {
    return new URLSearchParams(t).toString()
  }

  function df(t, e) {
    return Mo(function(t, e = Ku.document.baseURI) {
      if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(Ku.location.origin)) return t;
      const n = new URL(t, e);
      if (n.origin !== new URL(e).origin) return t;
      const i = n.href;
      if (!t.endsWith("/") && i.endsWith("/")) return i.slice(0, -1);
      return i
    }(t), e)
  }
  async function hf(t, e, n) {
    try {
      const i = af("resource.fetch", await async function(t, e, n) {
        const {
          startTimestamp: i,
          endTimestamp: s
        } = e, {
          url: r,
          method: a,
          status_code: o = 0,
          request_body_size: c,
          response_body_size: l
        } = t.data, u = df(r, n.networkDetailAllowUrls), d = u ? function({
          networkCaptureBodies: t,
          networkRequestHeaders: e
        }, n, i) {
          const s = function(t, e) {
            if (1 === t.length && "string" != typeof t[0]) return gf(t[0], e);
            if (2 === t.length) return gf(t[1], e);
            return {}
          }(n, e);
          if (!t) return cf(s, i, void 0);
          const r = rf(pf(n));
          return cf(s, i, r)
        }(n, e.input, c) : of(c), h = await async function(t, {
          networkCaptureBodies: e,
          textEncoder: n,
          networkResponseHeaders: i
        }, s, r) {
          if (!t && void 0 !== r) return of(r);
          const a = ff(s.headers, i);
          if (!e && void 0 !== r) return cf(a, r, void 0);
          try {
            const i = s.clone(),
              o = await async function(t) {
                try {
                  return await t.text()
                } catch (t) {
                  return
                }
              }(i), c = o && o.length && void 0 === r ? nf(o, n) : r;
            return t ? cf(a, c, e ? o : void 0) : of(c)
          } catch (t) {
            return cf(a, r, void 0)
          }
        }(u, n, e.response, l);
        return {
          startTimestamp: i,
          endTimestamp: s,
          url: r,
          method: a,
          statusCode: o,
          request: d,
          response: h
        }
      }(t, e, n));
      Yp(n.replay, i)
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay] Failed to capture fetch breadcrumb", t)
    }
  }

  function pf(t = []) {
    if (2 === t.length && "object" == typeof t[1]) return t[1].body
  }

  function ff(t, e) {
    const n = {};
    return e.forEach(e => {
      t.get(e) && (n[e] = t.get(e))
    }), n
  }

  function gf(t, e) {
    if (!t) return {};
    const n = t.headers;
    return n ? n instanceof Headers ? ff(n, e) : Array.isArray(n) ? {} : lf(n, e) : {}
  }
  async function mf(t, e, n) {
    try {
      const i = af("resource.xhr", function(t, e, n) {
        const {
          startTimestamp: i,
          endTimestamp: s,
          input: r,
          xhr: a
        } = e, {
          url: o,
          method: c,
          status_code: l = 0,
          request_body_size: u,
          response_body_size: d
        } = t.data;
        if (!o) return null;
        if (!df(o, n.networkDetailAllowUrls)) {
          const t = of(u),
            e = of(d);
          return {
            startTimestamp: i,
            endTimestamp: s,
            url: o,
            method: c,
            statusCode: l,
            request: t,
            response: e
          }
        }
        const h = a[Yo],
          p = h ? lf(h.request_headers, n.networkRequestHeaders) : {},
          f = lf(function(t) {
            const e = t.getAllResponseHeaders();
            if (!e) return {};
            return e.split("\r\n").reduce((t, e) => {
              const [n, i] = e.split(": ");
              return t[n.toLowerCase()] = i, t
            }, {})
          }(a), n.networkResponseHeaders),
          g = cf(p, u, n.networkCaptureBodies ? rf(r) : void 0),
          m = cf(f, d, n.networkCaptureBodies ? e.xhr.responseText : void 0);
        return {
          startTimestamp: i,
          endTimestamp: s,
          url: o,
          method: c,
          statusCode: l,
          request: g,
          response: m
        }
      }(t, e, n));
      Yp(n.replay, i)
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay] Failed to capture fetch breadcrumb", t)
    }
  }

  function _f(t) {
    const e = al().getClient();
    try {
      const n = new TextEncoder,
        {
          networkDetailAllowUrls: i,
          networkCaptureBodies: s,
          networkRequestHeaders: r,
          networkResponseHeaders: a
        } = t.getOptions(),
        o = {
          replay: t,
          textEncoder: n,
          networkDetailAllowUrls: i,
          networkCaptureBodies: s,
          networkRequestHeaders: r,
          networkResponseHeaders: a
        };
      e && e.on ? e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
        if (!e.data) return;
        try {
          (function(t) {
            return "xhr" === t.category
          })(e) && function(t) {
            return t && t.xhr
          }(n) && (! function(t, e, n) {
            const {
              xhr: i,
              input: s
            } = e, r = nf(s, n.textEncoder), a = i.getResponseHeader("content-length") ? sf(i.getResponseHeader("content-length")) : nf(i.response, n.textEncoder);
            void 0 !== r && (t.data.request_body_size = r), void 0 !== a && (t.data.response_body_size = a)
          }(e, n, t), mf(e, n, t)),
          function(t) {
            return "fetch" === t.category
          }(e) && function(t) {
            return t && t.response
          }(n) && (! function(t, e, n) {
            const {
              input: i,
              response: s
            } = e, r = nf(pf(i), n.textEncoder), a = s ? sf(s.headers.get("content-length")) : void 0;
            void 0 !== r && (t.data.request_body_size = r), void 0 !== a && (t.data.response_body_size = a)
          }(e, n, t), hf(e, n, t))
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Error when enriching network breadcrumb")
        }
      })(o, t, e)) : (Qo("fetch", function(t) {
        return e => {
          if (!t.isEnabled()) return;
          const n = function(t) {
            const {
              startTimestamp: e,
              endTimestamp: n,
              fetchData: i,
              response: s
            } = t;
            if (!n) return null;
            const {
              method: r,
              url: a
            } = i;
            return {
              type: "resource.fetch",
              start: e / 1e3,
              end: n / 1e3,
              name: a,
              data: {
                method: r,
                statusCode: s && s.status
              }
            }
          }(e);
          Yp(t, n)
        }
      }(t)), Qo("xhr", Pp(t)))
    } catch (t) {}
  }
  let yf = null;
  const vf = t => e => {
    if (!t.isEnabled()) return;
    const n = function(t) {
      const e = t.getLastBreadcrumb && t.getLastBreadcrumb();
      if (yf === e || !e) return null;
      if (yf = e, n = e, !n.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) return null;
      var n;
      if ("console" === e.category) return function(t) {
        const e = t.data && t.data.arguments;
        if (!Array.isArray(e) || 0 === e.length) return sp(t);
        let n = !1;
        const i = e.map(t => {
          if (!t) return t;
          if ("string" == typeof t) return t.length > dd ? (n = !0, `${t.slice(0,dd)}…`) : t;
          if ("object" == typeof t) try {
            const e = dc(t, 7),
              i = JSON.stringify(e);
            if (i.length > dd) {
              const t = ef(i.slice(0, dd)),
                e = JSON.parse(t);
              return n = !0, e
            }
            return e
          } catch (t) {}
          return t
        });
        return sp({
          ...t,
          data: {
            ...t.data,
            arguments: i,
            ...n ? {
              _meta: {
                warnings: ["CONSOLE_ARG_TRUNCATED"]
              }
            } : {}
          }
        })
      }(e);
      return sp(e)
    }(e);
    n && Wh(t, n)
  };

  function bf(t) {
    return !(!t || !t.on)
  }
  async function Mf(t) {
    try {
      return Promise.all(Rp(t, [function(t) {
        const {
          jsHeapSizeLimit: e,
          totalJSHeapSize: n,
          usedJSHeapSize: i
        } = t, s = Date.now() / 1e3;
        return {
          type: "memory",
          name: "memory",
          start: s,
          end: s,
          data: {
            memory: {
              jsHeapSizeLimit: e,
              totalJSHeapSize: n,
              usedJSHeapSize: i
            }
          }
        }
      }(Ku.performance.memory)]))
    } catch (t) {
      return []
    }
  }
  const Nf = {
    resource: function(t) {
      const {
        entryType: e,
        initiatorType: n,
        name: i,
        responseEnd: s,
        startTime: r,
        decodedBodySize: a,
        encodedBodySize: o,
        responseStatus: c,
        transferSize: l
      } = t;
      if (["fetch", "xmlhttprequest"].includes(n)) return null;
      return {
        type: `${e}.${n}`,
        start: If(r),
        end: If(s),
        name: i,
        data: {
          size: l,
          statusCode: c,
          decodedBodySize: a,
          encodedBodySize: o
        }
      }
    },
    paint: function(t) {
      const {
        duration: e,
        entryType: n,
        name: i,
        startTime: s
      } = t, r = If(s);
      return {
        type: n,
        name: i,
        start: r,
        end: r + e,
        data: void 0
      }
    },
    navigation: function(t) {
      const {
        entryType: e,
        name: n,
        decodedBodySize: i,
        duration: s,
        domComplete: r,
        encodedBodySize: a,
        domContentLoadedEventStart: o,
        domContentLoadedEventEnd: c,
        domInteractive: l,
        loadEventStart: u,
        loadEventEnd: d,
        redirectCount: h,
        startTime: p,
        transferSize: f,
        type: g
      } = t;
      if (0 === s) return null;
      return {
        type: `${e}.${g}`,
        start: If(p),
        end: If(r),
        name: n,
        data: {
          size: f,
          decodedBodySize: i,
          encodedBodySize: a,
          duration: s,
          domInteractive: l,
          domContentLoadedEventStart: o,
          domContentLoadedEventEnd: c,
          loadEventStart: u,
          loadEventEnd: d,
          domComplete: r,
          redirectCount: h
        }
      }
    },
    "largest-contentful-paint": function(t) {
      const {
        entryType: e,
        startTime: n,
        size: i
      } = t;
      let s = 0;
      if (Ku.performance) {
        const t = Ku.performance.getEntriesByType("navigation")[0];
        s = t && t.activationStart || 0
      }
      const r = Math.max(n - s, 0),
        a = If(s) + r / 1e3;
      return {
        type: e,
        name: e,
        start: a,
        end: a,
        data: {
          value: r,
          size: i,
          nodeId: Vh.mirror.getId(t.element)
        }
      }
    }
  };

  function Df(t) {
    return void 0 === Nf[t.entryType] ? null : Nf[t.entryType](t)
  }

  function If(t) {
    return ((kc || Ku.performance.timeOrigin) + t) / 1e3
  }

  function Sf(t) {
    let e = !1;
    return (n, i) => {
      if (!t.checkAndHandleExpiredSession()) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("[Replay] Received replay event after session expired."));
      const s = i || !e;
      e = !0, t.addUpdate(() => {
        if ("buffer" === t.recordingMode && s && t.setInitialState(), Ap(t, n, s), !s) return !1;
        if (function(t, e) {
            if (!e || !t.session || 0 !== t.session.segmentId) return Promise.resolve(null);
            Ap(t, function(t) {
              const e = t.getOptions();
              return {
                type: $d.Custom,
                timestamp: Date.now(),
                data: {
                  tag: "options",
                  payload: {
                    sessionSampleRate: e.sessionSampleRate,
                    errorSampleRate: e.errorSampleRate,
                    useCompressionOption: e.useCompression,
                    blockAllMedia: e.blockAllMedia,
                    maskAllText: e.maskAllText,
                    maskAllInputs: e.maskAllInputs,
                    useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                    networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                    networkCaptureBodies: e.networkCaptureBodies,
                    networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                    networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                  }
                }
              }
            }(t), !1)
          }(t, s), t.session && t.session.previousSessionId) return !0;
        if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
          const e = t.eventBuffer.getEarliestTimestamp();
          e && (t.session.started = e, t.getOptions().stickySession && kp(t.session))
        }
        const e = t.getOptions();
        return e._experiments.delayFlushOnCheckout ? (setTimeout(() => t.conditionalFlush(), e._experiments.delayFlushOnCheckout), t.cancelFlush(), !0) : ("session" === t.recordingMode && t.flushImmediate(), !0)
      })
    }
  }
  async function wf({
    recordingData: t,
    replayId: e,
    segmentId: n,
    eventContext: i,
    timestamp: s,
    session: r
  }) {
    const a = function({
        recordingData: t,
        headers: e
      }) {
        let n;
        const i = `${JSON.stringify(e)}\n`;
        if ("string" == typeof t) n = `${i}${t}`;
        else {
          const e = (new TextEncoder).encode(i);
          (n = new Uint8Array(e.length + t.length)).set(e), n.set(t, e.length)
        }
        return n
      }({
        recordingData: t,
        headers: {
          segment_id: n
        }
      }),
      {
        urls: o,
        errorIds: c,
        traceIds: l,
        initialTimestamp: u
      } = i,
      d = al(),
      h = d.getClient(),
      p = d.getScope(),
      f = h && h.getTransport(),
      g = h && h.getDsn();
    if (!(h && p && f && g && r.sampled)) return;
    const m = {
        type: td,
        replay_start_timestamp: u / 1e3,
        timestamp: s / 1e3,
        error_ids: c,
        trace_ids: l,
        urls: o,
        replay_id: e,
        segment_id: n,
        replay_type: r.sampled
      },
      _ = await async function({
        client: t,
        scope: e,
        replayId: n,
        event: i
      }) {
        const s = "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
          r = await jl(t.getOptions(), i, {
            event_id: n,
            integrations: s
          }, e);
        if (!r) return null;
        r.platform = r.platform || "javascript";
        const a = t.getSdkMetadata && t.getSdkMetadata(),
          {
            name: o,
            version: c
          } = a && a.sdk || {};
        return r.sdk = {
          ...r.sdk,
          name: o || "sentry.javascript.unknown",
          version: c || "0.0.0"
        }, r
      }({
        scope: p,
        client: h,
        replayId: e,
        event: m
      });
    if (!_) return h.recordDroppedEvent("event_processor", "replay", m), void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("An event processor returned `null`, will not send event."));
    const y = function(t, e, n, i) {
      return xc(Bc(t, Uc(t), i, n), [
        [{
          type: "replay_event"
        }, t],
        [{
          type: "replay_recording",
          length: "string" == typeof e ? (new TextEncoder).encode(e).length : e.length
        }, e]
      ])
    }(_, a, g, h.getOptions().tunnel);
    let v;
    try {
      v = await f.send(y)
    } catch (t) {
      const e = new Error(ed);
      try {
        e.cause = t
      } catch (t) {}
      throw e
    }
    if (!v) return v;
    if ("number" == typeof v.statusCode && (v.statusCode < 200 || v.statusCode >= 300)) throw new Ef(v.statusCode);
    return v
  }
  class Ef extends Error {
    constructor(t) {
      super(`Transport returned status code ${t}`)
    }
  }
  async function kf(t, e = {
    count: 0,
    interval: cd
  }) {
    const {
      recordingData: n,
      options: i
    } = t;
    var s, r;
    if (n.length) try {
      return await wf(t), !0
    } catch (n) {
      if (n instanceof Ef) throw n;
      if (s = "Replays", r = {
          _retryCount: e.count
        }, al().setContext(s, r), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i._experiments && i._experiments.captureExceptions && El(n), e.count >= ld) {
        const t = new Error(`${ed} - max retries exceeded`);
        try {
          t.cause = n
        } catch (t) {}
        throw t
      }
      return e.interval *= ++e.count, await new Promise((n, i) => {
        setTimeout(async () => {
          try {
            await kf(t, e), n(!0)
          } catch (t) {
            i(t)
          }
        }, e.interval)
      })
    }
  }
  const Tf = "__THROTTLED",
    xf = "__SKIPPED";

  function Cf(t, e, n) {
    const i = new Map;
    let s = !1;
    return (...r) => {
      const a = Math.floor(Date.now() / 1e3);
      if ((t => {
          const e = t - n;
          i.forEach((t, n) => {
            n < e && i.delete(n)
          })
        })(a), (() => [...i.values()].reduce((t, e) => t + e, 0))() >= e) {
        const t = s;
        return s = !0, t ? xf : Tf
      }
      s = !1;
      const o = i.get(a) || 0;
      return i.set(a, o + 1), t(...r)
    }
  }
  class Af {
    __init() {
      this.eventBuffer = null
    }
    __init2() {
      this.performanceEvents = []
    }
    __init3() {
      this.recordingMode = "session"
    }
    __init4() {
      this.timeouts = {
        sessionIdlePause: nd,
        sessionIdleExpire: id,
        maxSessionLife: sd
      }
    }
    __init5() {
      this._performanceObserver = null
    }
    __init6() {
      this._flushLock = null
    }
    __init7() {
      this._lastActivity = Date.now()
    }
    __init8() {
      this._isEnabled = !1
    }
    __init9() {
      this._isPaused = !1
    }
    __init10() {
      this._hasInitializedCoreListeners = !1
    }
    __init11() {
      this._stopRecording = null
    }
    __init12() {
      this._context = {
        errorIds: new Set,
        traceIds: new Set,
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: ""
      }
    }
    constructor({
      options: t,
      recordingOptions: e
    }) {
      Af.prototype.__init.call(this), Af.prototype.__init2.call(this), Af.prototype.__init3.call(this), Af.prototype.__init4.call(this), Af.prototype.__init5.call(this), Af.prototype.__init6.call(this), Af.prototype.__init7.call(this), Af.prototype.__init8.call(this), Af.prototype.__init9.call(this), Af.prototype.__init10.call(this), Af.prototype.__init11.call(this), Af.prototype.__init12.call(this), Af.prototype.__init13.call(this), Af.prototype.__init14.call(this), Af.prototype.__init15.call(this), Af.prototype.__init16.call(this), Af.prototype.__init17.call(this), Af.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
        let i, s, r;
        const a = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

        function o() {
          return c(), i = t()
        }

        function c() {
          void 0 !== s && clearTimeout(s), void 0 !== r && clearTimeout(r), s = r = void 0
        }

        function l() {
          return s && clearTimeout(s), s = setTimeout(o, e), a && void 0 === r && (r = setTimeout(o, a)), i
        }
        return l.cancel = c, l.flush = function() {
          return void 0 !== s || void 0 !== r ? o() : i
        }, l
      }(() => this._flush(), this._options.flushMinDelay, {
        maxWait: this._options.flushMaxDelay
      }), this._throttledAddEvent = Cf((t, e) => Ap(this, t, e), 300, 5);
      const {
        slowClickTimeout: n,
        slowClickIgnoreSelectors: i
      } = this.getOptions(), s = n ? {
        threshold: Math.min(hd, n),
        timeout: n,
        scrollTimeout: pd,
        ignoreSelector: i ? i.join(",") : "",
        multiClickTimeout: fd
      } : void 0;
      s && (this.clickDetector = new ep(this, s))
    }
    getContext() {
      return this._context
    }
    isEnabled() {
      return this._isEnabled
    }
    isPaused() {
      return this._isPaused
    }
    getOptions() {
      return this._options
    }
    initializeSampling() {
      const {
        errorSampleRate: t,
        sessionSampleRate: e
      } = this._options;
      t <= 0 && e <= 0 || this._loadAndCheckSession() && (this.session ? (this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
    }
    start() {
      if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
      if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
      const t = this.session && this.session.id,
        {
          session: e
        } = Cp({
          timeouts: this.timeouts,
          stickySession: Boolean(this._options.stickySession),
          currentSession: this.session,
          sessionSampleRate: 1,
          allowBuffering: !1
        });
      e.previousSessionId = t, this.session = e, this._initializeRecording()
    }
    startBuffering() {
      if (this._isEnabled) throw new Error("Replay recording is already in progress");
      const t = this.session && this.session.id,
        {
          session: e
        } = Cp({
          timeouts: this.timeouts,
          stickySession: Boolean(this._options.stickySession),
          currentSession: this.session,
          sessionSampleRate: 0,
          allowBuffering: !0
        });
      e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
    }
    startRecording() {
      try {
        this._stopRecording = Vh({
          ...this._recordingOptions,
          ..."buffer" === this.recordingMode && {
            checkoutEveryNms: od
          },
          emit: Sf(this),
          onMutation: this._onMutationHandler
        })
      } catch (t) {
        this._handleException(t)
      }
    }
    stopRecording() {
      try {
        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
      } catch (t) {
        return this._handleException(t), !1
      }
    }
    async stop(t) {
      if (this._isEnabled) try {
        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
          const e = `[Replay] Stopping Replay${t?` triggered by ${t}`:""}`;
          (this.getOptions()._experiments.traceInternals ? console.warn : po.log)(e)
        }
        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
          force: !0
        }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, Ip(this)
      } catch (t) {
        this._handleException(t)
      }
    }
    pause() {
      this._isPaused = !0, this.stopRecording()
    }
    resume() {
      this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
    }
    async sendBufferedReplayOrFlush({
      continueRecording: t = !0
    } = {}) {
      if ("session" === this.recordingMode) return this.flushImmediate();
      const e = Date.now();
      await this.flushImmediate();
      const n = this.stopRecording();
      t && n && (this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording())
    }
    addUpdate(t) {
      const e = t();
      "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush()
    }
    triggerUserActivity() {
      if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity();
      else {
        if (!this._loadAndCheckSession()) return;
        this.resume()
      }
    }
    updateUserActivity() {
      this._updateUserActivity(), this._updateSessionActivity()
    }
    conditionalFlush() {
      return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
    }
    flushImmediate() {
      return this._debouncedFlush(), this._debouncedFlush.flush()
    }
    cancelFlush() {
      this._debouncedFlush.cancel()
    }
    getSessionId() {
      return this.session && this.session.id
    }
    checkAndHandleExpiredSession() {
      const t = this.getSessionId();
      if (this._lastActivity && Sp(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) this.pause();
      else if (this._loadAndCheckSession()) return t === this.getSessionId() || (this._triggerFullSnapshot(), !1)
    }
    setInitialState() {
      const t = `${Ku.location.pathname}${Ku.location.hash}${Ku.location.search}`,
        e = `${Ku.location.origin}${t}`;
      this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
    }
    throttledAddEvent(t, e) {
      const n = this._throttledAddEvent(t, e);
      if (n === Tf) {
        const t = sp({
          category: "replay.throttled"
        });
        this.addUpdate(() => {
          Ap(this, {
            type: $d.Custom,
            timestamp: t.timestamp || 0,
            data: {
              tag: "breadcrumb",
              payload: t,
              metric: !0
            }
          })
        })
      }
      return n
    }
    getCurrentRoute() {
      const t = this.lastTransaction || al().getScope().getTransaction();
      if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
    }
    _initializeRecording() {
      this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = Np({
        useCompression: this._options.useCompression
      }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
    }
    _handleException(t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && El(t)
    }
    _loadAndCheckSession() {
      const {
        type: t,
        session: e
      } = Cp({
        timeouts: this.timeouts,
        stickySession: Boolean(this._options.stickySession),
        currentSession: this.session,
        sessionSampleRate: this._options.sessionSampleRate,
        allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
      });
      "new" === t && this.setInitialState();
      const n = this.getSessionId();
      return e.id !== n && (e.previousSessionId = n), this.session = e, !!this.session.sampled || (this.stop("session unsampled"), !1)
    }
    _addListeners() {
      try {
        Ku.document.addEventListener("visibilitychange", this._handleVisibilityChange), Ku.addEventListener("blur", this._handleWindowBlur), Ku.addEventListener("focus", this._handleWindowFocus), Ku.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(t) {
          const e = al().getScope(),
            n = al().getClient();
          e && e.addScopeListener(vf(t)), Qo("dom", op(t)), Qo("history", Up(t)), _f(t), tl(Lp(t, !bf(n))), bf(n) && (n.on("afterSendEvent", Op(t)), n.on("createDsc", e => {
            const n = t.getSessionId();
            n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
          }), n.on("startTransaction", e => {
            t.lastTransaction = e
          }), n.on("finishTransaction", e => {
            t.lastTransaction = e
          }))
        }(this), this._hasInitializedCoreListeners = !0)
      } catch (t) {
        this._handleException(t)
      }
      "PerformanceObserver" in Ku && (this._performanceObserver = gp(this))
    }
    _removeListeners() {
      try {
        Ku.document.removeEventListener("visibilitychange", this._handleVisibilityChange), Ku.removeEventListener("blur", this._handleWindowBlur), Ku.removeEventListener("focus", this._handleWindowFocus), Ku.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
      } catch (t) {
        this._handleException(t)
      }
    }
    __init13() {
      this._handleVisibilityChange = (() => {
        "visible" === Ku.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
      })
    }
    __init14() {
      this._handleWindowBlur = (() => {
        const t = sp({
          category: "ui.blur"
        });
        this._doChangeToBackgroundTasks(t)
      })
    }
    __init15() {
      this._handleWindowFocus = (() => {
        const t = sp({
          category: "ui.focus"
        });
        this._doChangeToForegroundTasks(t)
      })
    }
    __init16() {
      this._handleKeyboardEvent = (t => {
        hp(this, t)
      })
    }
    _doChangeToBackgroundTasks(t) {
      if (!this.session) return;
      const e = wp(this.session, this.timeouts);
      t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
    }
    _doChangeToForegroundTasks(t) {
      if (!this.session) return;
      this.checkAndHandleExpiredSession() ? t && this._createCustomBreadcrumb(t) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Document has become active, but session has expired")
    }
    _triggerFullSnapshot(t = !0) {
      try {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Replay] Taking full rrweb snapshot"), Vh.takeFullSnapshot(t)
      } catch (t) {
        this._handleException(t)
      }
    }
    _updateUserActivity(t = Date.now()) {
      this._lastActivity = t
    }
    _updateSessionActivity(t = Date.now()) {
      this.session && (this.session.lastActivity = t, this._maybeSaveSession())
    }
    _createCustomBreadcrumb(t) {
      this.addUpdate(() => {
        this.throttledAddEvent({
          type: $d.Custom,
          timestamp: t.timestamp || 0,
          data: {
            tag: "breadcrumb",
            payload: t
          }
        })
      })
    }
    _addPerformanceEntries() {
      const t = [...this.performanceEvents];
      return this.performanceEvents = [], Promise.all(Rp(this, function(t) {
        return t.map(Df).filter(Boolean)
      }(t)))
    }
    _clearContext() {
      this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
      const {
        session: t,
        eventBuffer: e
      } = this;
      if (!t || !e) return;
      if (t.segmentId) return;
      const n = e.getEarliestTimestamp();
      n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
    }
    _popEventContext() {
      const t = {
        initialTimestamp: this._context.initialTimestamp,
        initialUrl: this._context.initialUrl,
        errorIds: Array.from(this._context.errorIds),
        traceIds: Array.from(this._context.traceIds),
        urls: this._context.urls
      };
      return this._clearContext(), t
    }
    async _runFlush() {
      if (this.session && this.eventBuffer) {
        if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await Mf(this), this.eventBuffer)) try {
          this._updateInitialTimestampFromEventBuffer();
          const t = await this.eventBuffer.finish(),
            e = this.session.id,
            n = this._popEventContext(),
            i = this.session.segmentId++;
          this._maybeSaveSession(), await kf({
            replayId: e,
            recordingData: t,
            segmentId: i,
            eventContext: n,
            session: this.session,
            options: this.getOptions(),
            timestamp: Date.now()
          })
        } catch (t) {
          this._handleException(t), this.stop("sendReplay");
          const e = al().getClient();
          e && e.recordDroppedEvent("send_error", "replay")
        }
      } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay] No session or eventBuffer found to flush.")
    }
    __init17() {
      this._flush = (async ({
        force: t = !1
      } = {}) => {
        if (this._isEnabled || t)
          if (this.checkAndHandleExpiredSession())
            if (this.session) {
              if (this._debouncedFlush.cancel(), !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, void(this._flushLock = null);
              try {
                await this._flushLock
              } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(t)
              } finally {
                this._debouncedFlush()
              }
            } else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay] No session found to flush.");
        else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("[Replay] Attempting to finish replay event after session expired.")
      })
    }
    _maybeSaveSession() {
      this.session && this._options.stickySession && kp(this.session)
    }
    __init18() {
      this._onMutationHandler = (t => {
        const e = t.length,
          n = this._options.mutationLimit,
          i = this._options.mutationBreadcrumbLimit,
          s = n && e > n;
        if (e > i || s) {
          const t = sp({
            category: "replay.mutations",
            data: {
              count: e,
              limit: s
            }
          });
          this._createCustomBreadcrumb(t)
        }
        return !s || (this.stop("mutationLimit"), !1)
      })
    }
  }

  function jf(t, e, n, i) {
    const s = "string" == typeof i ? i.split(",") : [],
      r = [...t, ...s, ...e];
    return void 0 !== n && ("string" == typeof n && r.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), r.join(",")
  }

  function zf() {
    return "undefined" != typeof window && (!cc() || "undefined" != typeof process && "renderer" === process.type)
  }
  const Of = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    Lf = ["content-length", "content-type", "accept"];
  let Rf = !1;
  class Uf {
    static __initStatic() {
      this.id = "Replay"
    }
    __init() {
      this.name = Uf.id
    }
    constructor({
      flushMinDelay: t = rd,
      flushMaxDelay: e = ad,
      stickySession: n = !0,
      useCompression: i = !0,
      _experiments: s = {},
      sessionSampleRate: r,
      errorSampleRate: a,
      maskAllText: o = !0,
      maskAllInputs: c = !0,
      blockAllMedia: l = !0,
      mutationBreadcrumbLimit: u = 750,
      mutationLimit: d = 1e4,
      slowClickTimeout: h = 7e3,
      slowClickIgnoreSelectors: p = [],
      networkDetailAllowUrls: f = [],
      networkCaptureBodies: g = !0,
      networkRequestHeaders: m = [],
      networkResponseHeaders: _ = [],
      mask: y = [],
      unmask: v = [],
      block: b = [],
      unblock: M = [],
      ignore: N = [],
      maskFn: D,
      beforeAddRecordingEvent: I,
      blockClass: S,
      blockSelector: w,
      maskInputOptions: E,
      maskTextClass: k,
      maskTextSelector: T,
      ignoreClass: x
    } = {}) {
      if (Uf.prototype.__init.call(this), this._recordingOptions = {
          maskAllInputs: c,
          maskAllText: o,
          maskInputOptions: {
            ...E || {},
            password: !0
          },
          maskTextFn: D,
          maskInputFn: D,
          ... function({
            mask: t,
            unmask: e,
            block: n,
            unblock: i,
            ignore: s,
            blockClass: r,
            blockSelector: a,
            maskTextClass: o,
            maskTextSelector: c,
            ignoreClass: l
          }) {
            const u = jf(t, [".sentry-mask", "[data-sentry-mask]"], o, c),
              d = jf(e, [".sentry-unmask", "[data-sentry-unmask]"]),
              h = {
                maskTextSelector: u,
                unmaskTextSelector: d,
                maskInputSelector: u,
                unmaskInputSelector: d,
                blockSelector: jf(n, [".sentry-block", "[data-sentry-block]", ...['base[href="/"]']], r, a),
                unblockSelector: jf(i, [".sentry-unblock", "[data-sentry-unblock]"]),
                ignoreSelector: jf(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
              };
            return r instanceof RegExp && (h.blockClass = r), o instanceof RegExp && (h.maskTextClass = o), h
          }({
            mask: y,
            unmask: v,
            block: b,
            unblock: M,
            ignore: N,
            blockClass: S,
            blockSelector: w,
            maskTextClass: k,
            maskTextSelector: T,
            ignoreClass: x
          }),
          slimDOMOptions: "all",
          inlineStylesheet: !0,
          inlineImages: !1,
          collectFonts: !0
        }, this._initialOptions = {
          flushMinDelay: t,
          flushMaxDelay: e,
          stickySession: n,
          sessionSampleRate: r,
          errorSampleRate: a,
          useCompression: i,
          blockAllMedia: l,
          maskAllInputs: c,
          maskAllText: o,
          mutationBreadcrumbLimit: u,
          mutationLimit: d,
          slowClickTimeout: h,
          slowClickIgnoreSelectors: p,
          networkDetailAllowUrls: f,
          networkCaptureBodies: g,
          networkRequestHeaders: Bf(m),
          networkResponseHeaders: Bf(_),
          beforeAddRecordingEvent: I,
          _experiments: s
        }, "number" == typeof r && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${r} })`), this._initialOptions.sessionSampleRate = r), "number" == typeof a && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${a} })`), this._initialOptions.errorSampleRate = a), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${Of}` : Of), this._isInitialized && zf()) throw new Error("Multiple Sentry Session Replay instances are not supported");
      this._isInitialized = !0
    }
    get _isInitialized() {
      return Rf
    }
    set _isInitialized(t) {
      Rf = t
    }
    setupOnce() {
      zf() && (this._setup(), setTimeout(() => this._initialize()))
    }
    start() {
      this._replay && this._replay.start()
    }
    startBuffering() {
      this._replay && this._replay.startBuffering()
    }
    stop() {
      return this._replay ? this._replay.stop() : Promise.resolve()
    }
    flush(t) {
      return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
    }
    getReplayId() {
      if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
    }
    _initialize() {
      this._replay && this._replay.initializeSampling()
    }
    _setup() {
      const t = function(t) {
        const e = al().getClient(),
          n = e && e.getOptions(),
          i = {
            sessionSampleRate: 0,
            errorSampleRate: 0,
            ...To(t)
          };
        if (!n) return console.warn("SDK client is not available."), i;
        null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.");
        "number" == typeof n.replaysSessionSampleRate && (i.sessionSampleRate = n.replaysSessionSampleRate);
        "number" == typeof n.replaysOnErrorSampleRate && (i.errorSampleRate = n.replaysOnErrorSampleRate);
        return i
      }(this._initialOptions);
      this._replay = new Af({
        options: t,
        recordingOptions: this._recordingOptions
      })
    }
  }

  function Bf(t) {
    return [...Lf, ...t.map(t => t.toLowerCase())]
  }

  function Yf(t) {
    let e = void 0,
      n = t[0],
      i = 1;
    for (; i < t.length;) {
      const s = t[i],
        r = t[i + 1];
      if (i += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
      "access" === s || "optionalAccess" === s ? (e = n, n = r(n)) : "call" !== s && "optionalCall" !== s || (n = r((...t) => n.call(e, ...t)), e = void 0)
    }
    return n
  }

  function Pf(t) {
    return "sentry" !== (Yf([Yf([t, "call", t => t(), "access", t => t.getClient, "call", t => t(), "optionalAccess", t => t.getOptions, "call", t => t()]), "optionalAccess", t => t.instrumenter]) || "sentry")
  }
  Uf.__initStatic();
  class Gf {
    static __initStatic() {
      this.id = "Express"
    }
    __init() {
      this.name = Gf.id
    }
    constructor(t = {}) {
      Gf.prototype.__init.call(this), this._router = t.router || t.app, this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use")
    }
    setupOnce(t, e) {
      this._router ? Pf(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Express Integration is skipped because of instrumenter configuration.") : (function(t, e = []) {
        e.forEach(e => (function(t, e) {
          const n = t[e];
          return t[e] = function(...t) {
            return n.call(this, ... function(t, e) {
              return t.map(t => "function" == typeof t ? Ff(t, e) : Array.isArray(t) ? t.map(t => "function" == typeof t ? Ff(t, e) : t) : t)
            }(t, e))
          }, t
        })(t, e))
      }(this._router, this._methods), function(t) {
        const e = "settings" in t;
        e && void 0 === t._router && t.lazyrouter && t.lazyrouter();
        const n = e ? t._router : t;
        if (!n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.debug("Routing instrumentation is currently only supported in Express 4."));
        const i = Object.getPrototypeOf(n),
          s = i.process_params;
        i.process_params = function(t, e, n, i, r) {
          n._reconstructedRoute || (n._reconstructedRoute = "");
          const {
            layerRoutePath: a,
            isRegex: o,
            isArray: c,
            numExtraSegments: l
          } = function(t) {
            const e = Yf([t, "access", t => t.route, "optionalAccess", t => t.path]),
              n = Za(e),
              i = Array.isArray(e);
            if (!e) return {
              isRegex: n,
              isArray: i,
              numExtraSegments: 0
            };
            const s = i ? Math.max((r = e, r.reduce((t, e) => t + bc(e.toString()), 0) - bc(t.path || "")), 0) : 0;
            var r;
            return {
              layerRoutePath: function(t, e) {
                if (t) return e.map(t => t.toString()).join(",");
                return e && e.toString()
              }(i, e),
              isRegex: n,
              isArray: i,
              numExtraSegments: s
            }
          }(t);
          (a || o || c) && (n._hasParameters = !0);
          const u = a || t.path || "",
            d = u.split("/").filter(t => t.length > 0 && (o || c || !t.includes("*"))).join("/");
          d && d.length > 0 && (n._reconstructedRoute += `/${d}${o?"/":""}`);
          const h = bc(n.originalUrl || "") + l,
            p = bc(n._reconstructedRoute);
          if (h === p) {
            n._hasParameters || n._reconstructedRoute !== n.originalUrl && (n._reconstructedRoute = n.originalUrl ? vc(n.originalUrl) : n.originalUrl);
            const t = i.__sentry_transaction;
            if (t && "custom" !== t.metadata.source) {
              const e = n._reconstructedRoute || "/";
              t.setName(... function(t, e = {}) {
                const n = t.method && t.method.toUpperCase();
                let i = "",
                  s = "url";
                e.customRoute || t.route ? (i = e.customRoute || `${t.baseUrl||""}${t.route&&t.route.path}`, s = "route") : (t.originalUrl || t.url) && (i = vc(t.originalUrl || t.url || ""));
                let r = "";
                return e.method && n && (r += n), e.method && e.path && (r += " "), e.path && i && (r += i), [r, s]
              }(n, {
                path: !0,
                method: !0,
                customRoute: e
              }))
            }
          }
          return s.call(this, t, e, n, i, r)
        }
      }(this._router)) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("ExpressIntegration is missing an Express instance")
    }
  }

  function Ff(t, e) {
    const n = t.length;
    switch (n) {
      case 2:
        return function(n, i) {
          const s = i.__sentry_transaction;
          if (s) {
            const n = s.startChild({
              description: t.name,
              op: `middleware.express.${e}`
            });
            i.once("finish", () => {
              n.finish()
            })
          }
          return t.call(this, n, i)
        };
      case 3:
        return function(n, i, s) {
          const r = Yf([i.__sentry_transaction, "optionalAccess", t => t.startChild, "call", n => n({
            description: t.name,
            op: `middleware.express.${e}`
          })]);
          t.call(this, n, i, function(...t) {
            Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), s.call(this, ...t)
          })
        };
      case 4:
        return function(n, i, s, r) {
          const a = Yf([s.__sentry_transaction, "optionalAccess", t => t.startChild, "call", n => n({
            description: t.name,
            op: `middleware.express.${e}`
          })]);
          t.call(this, n, i, s, function(...t) {
            Yf([a, "optionalAccess", t => t.finish, "call", t => t()]), r.call(this, ...t)
          })
        };
      default:
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)
    }
  }
  Gf.__initStatic();
  class Qf {
    static __initStatic() {
      this.id = "Postgres"
    }
    __init() {
      this.name = Qf.id
    }
    constructor(t = {}) {
      Qf.prototype.__init.call(this), this._usePgNative = !!t.usePgNative
    }
    loadDependency() {
      return this._module = this._module || uc("pg")
    }
    setupOnce(t, e) {
      if (Pf(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Postgres Integration is skipped because of instrumenter configuration."));
      const n = this.loadDependency();
      if (!n) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Postgres Integration was unable to require `pg` package."));
      if (this._usePgNative && !Yf([n, "access", t => t.native, "optionalAccess", t => t.Client])) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Postgres Integration was unable to access 'pg-native' bindings."));
      const {
        Client: i
      } = this._usePgNative ? n.native : n;
      No(i.prototype, "query", function(t) {
        return function(n, i, s) {
          const r = Yf([Yf([e().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]), "optionalAccess", t => t.startChild, "call", t => t({
            description: "string" == typeof n ? n : n.text,
            op: "db",
            data: {
              "db.system": "postgresql"
            }
          })]);
          if ("function" == typeof s) return t.call(this, n, i, function(t, e) {
            Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), s(t, e)
          });
          if ("function" == typeof i) return t.call(this, n, function(t, e) {
            Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), i(t, e)
          });
          const a = void 0 !== i ? t.call(this, n, i) : t.call(this, n);
          return Ja(a) ? a.then(t => (Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), t)) : (Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), a)
        }
      })
    }
  }
  Qf.__initStatic();
  class $f {
    constructor() {
      $f.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "Mysql"
    }
    __init() {
      this.name = $f.id
    }
    loadDependency() {
      return this._module = this._module || uc("mysql/lib/Connection.js")
    }
    setupOnce(t, e) {
      if (Pf(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Mysql Integration is skipped because of instrumenter configuration."));
      const n = this.loadDependency();
      n ? No(n, "createQuery", function(t) {
        return function(n, i, s) {
          const r = Yf([Yf([e().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]), "optionalAccess", t => t.startChild, "call", t => t({
            description: "string" == typeof n ? n : n.sql,
            op: "db",
            data: {
              "db.system": "mysql"
            }
          })]);
          return "function" == typeof s ? t.call(this, n, i, function(t, e, n) {
            Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), s(t, e, n)
          }) : "function" == typeof i ? t.call(this, n, function(t, e, n) {
            Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), i(t, e, n)
          }) : t.call(this, n, i, s)
        }
      }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  $f.__initStatic();
  const Hf = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
    qf = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"]
    };
  class Vf {
    static __initStatic() {
      this.id = "Mongo"
    }
    __init() {
      this.name = Vf.id
    }
    constructor(t = {}) {
      Vf.prototype.__init.call(this), this._operations = Array.isArray(t.operations) ? t.operations : Hf, this._describeOperations = !("describeOperations" in t) || t.describeOperations, this._useMongoose = !!t.useMongoose
    }
    loadDependency() {
      const t = this._useMongoose ? "mongoose" : "mongodb";
      return this._module = this._module || uc(t)
    }
    setupOnce(t, e) {
      if (Pf(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Mongo Integration is skipped because of instrumenter configuration."));
      const n = this.loadDependency();
      if (n) this._instrumentOperations(n.Collection, this._operations, e);
      else {
        const t = this._useMongoose ? "mongoose" : "mongodb";
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error(`Mongo Integration was unable to require \`${t}\` package.`)
      }
    }
    _instrumentOperations(t, e, n) {
      e.forEach(e => this._patchOperation(t, e, n))
    }
    _patchOperation(t, e, n) {
      if (!(e in t.prototype)) return;
      const i = this._getSpanContextFromOperationArguments.bind(this);
      No(t.prototype, e, function(t) {
        return function(...s) {
          const r = s[s.length - 1],
            a = Yf([n().getScope(), "optionalAccess", t => t.getSpan, "call", t => t()]);
          if ("function" != typeof r || "mapReduce" === e && 2 === s.length) {
            const n = Yf([a, "optionalAccess", t => t.startChild, "call", t => t(i(this, e, s))]),
              r = t.call(this, ...s);
            if (Ja(r)) return r.then(t => (Yf([n, "optionalAccess", t => t.finish, "call", t => t()]), t));
            if ((o = r) && "object" == typeof o && o.once && "function" == typeof o.once) {
              const t = r;
              try {
                t.once("close", () => {
                  Yf([n, "optionalAccess", t => t.finish, "call", t => t()])
                })
              } catch (t) {
                Yf([n, "optionalAccess", t => t.finish, "call", t => t()])
              }
              return t
            }
            return Yf([n, "optionalAccess", t => t.finish, "call", t => t()]), r
          }
          var o;
          const c = Yf([a, "optionalAccess", t => t.startChild, "call", t => t(i(this, e, s.slice(0, -1)))]);
          return t.call(this, ...s.slice(0, -1), function(t, e) {
            Yf([c, "optionalAccess", t => t.finish, "call", t => t()]), r(t, e)
          })
        }
      })
    }
    _getSpanContextFromOperationArguments(t, e, n) {
      const i = {
          collectionName: t.collectionName,
          dbName: t.dbName,
          namespace: t.namespace,
          "db.system": "mongodb"
        },
        s = {
          op: "db",
          description: e,
          data: i
        },
        r = qf[e],
        a = Array.isArray(this._describeOperations) ? this._describeOperations.includes(e) : this._describeOperations;
      if (!r || !a) return s;
      try {
        if ("mapReduce" === e) {
          const [t, e] = n;
          i[r[0]] = "string" == typeof t ? t : t.name || "<anonymous>", i[r[1]] = "string" == typeof e ? e : e.name || "<anonymous>"
        } else
          for (let t = 0; t < r.length; t++) i[r[t]] = JSON.stringify(n[t])
      } catch (t) {}
      return s
    }
  }
  Vf.__initStatic();
  class Wf {
    static __initStatic() {
      this.id = "Prisma"
    }
    __init() {
      this.name = Wf.id
    }
    constructor(t = {}) {
      var e;
      Wf.prototype.__init.call(this), (e = t.client) && e.$use ? this._client = t.client : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)
    }
    setupOnce(t, e) {
      this._client ? Pf(e) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Prisma Integration is skipped because of instrumenter configuration.") : this._client.$use((t, e) => {
        const n = t.action,
          i = t.model;
        return function(t, e, n = (() => {})) {
          const i = {
            ...t
          };
          void 0 !== i.name && void 0 === i.description && (i.description = i.name);
          const s = al(),
            r = s.getScope(),
            a = r.getSpan(),
            o = a ? a.startChild(i) : s.startTransaction(i);

          function c() {
            o && o.finish(), s.getScope().setSpan(a)
          }
          let l;
          r.setSpan(o);
          try {
            l = e(o)
          } catch (t) {
            throw o && o.setStatus("internal_error"), n(t), c(), t
          }
          return Ja(l) ? Promise.resolve(l).then(() => {
            c()
          }, t => {
            o && o.setStatus("internal_error"), n(t), c()
          }) : c(), l
        }({
          name: i ? `${i} ${n}` : n,
          op: "db.sql.prisma",
          data: {
            "db.system": "prisma"
          }
        }, () => e(t))
      }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("PrismaIntegration is missing a Prisma Client Instance")
    }
  }
  Wf.__initStatic();
  class Zf {
    constructor() {
      Zf.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "GraphQL"
    }
    __init() {
      this.name = Zf.id
    }
    loadDependency() {
      return this._module = this._module || uc("graphql/execution/execute.js")
    }
    setupOnce(t, e) {
      if (Pf(e)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("GraphQL Integration is skipped because of instrumenter configuration."));
      const n = this.loadDependency();
      n ? No(n, "execute", function(t) {
        return function(...n) {
          const i = e().getScope(),
            s = Yf([i, "optionalAccess", t => t.getSpan, "call", t => t()]),
            r = Yf([s, "optionalAccess", t => t.startChild, "call", t => t({
              description: "execute",
              op: "graphql.execute"
            })]);
          Yf([i, "optionalAccess", t => t.setSpan, "call", t => t(r)]);
          const a = t.call(this, ...n);
          return Ja(a) ? a.then(t => (Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), Yf([i, "optionalAccess", t => t.setSpan, "call", t => t(s)]), t)) : (Yf([r, "optionalAccess", t => t.finish, "call", t => t()]), Yf([i, "optionalAccess", t => t.setSpan, "call", t => t(s)]), a)
        }
      }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("GraphQL Integration was unable to require graphql/execution package.")
    }
  }
  Zf.__initStatic();
  class Jf {
    static __initStatic() {
      this.id = "Apollo"
    }
    __init() {
      this.name = Jf.id
    }
    constructor(t = {
      useNestjs: !1
    }) {
      Jf.prototype.__init.call(this), this._useNest = !!t.useNestjs
    }
    loadDependency() {
      return this._useNest ? this._module = this._module || uc("@nestjs/graphql") : this._module = this._module || uc("apollo-server-core"), this._module
    }
    setupOnce(t, e) {
      if (Pf(e))("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("Apollo Integration is skipped because of instrumenter configuration.");
      else if (this._useNest) {
        const t = this.loadDependency();
        if (!t) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package."));
        No(t.GraphQLFactory.prototype, "mergeWithSchema", function(t) {
          return function(...n) {
            return No(this.resolversExplorerService, "explore", function(t) {
              return function() {
                return Kf(oc(t.call(this)), e)
              }
            }), t.call(this, ...n)
          }
        })
      } else {
        const t = this.loadDependency();
        if (!t) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.error("Apollo Integration was unable to require apollo-server-core package."));
        No(t.ApolloServerBase.prototype, "constructSchema", function(t) {
          return function() {
            if (!this.config.resolvers) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this.config.schema ? (po.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), po.warn()) : this.config.modules && po.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."), po.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")), t.call(this);
            const n = oc(this.config.resolvers);
            return this.config.resolvers = Kf(n, e), t.call(this)
          }
        })
      }
    }
  }

  function Kf(t, e) {
    return t.map(t => (Object.keys(t).forEach(n => {
      Object.keys(t[n]).forEach(i => {
        "function" == typeof t[n][i] && function(t, e, n, i) {
          No(t[e], n, function(t) {
            return function(...s) {
              const r = i().getScope(),
                a = Yf([r, "optionalAccess", t => t.getSpan, "call", t => t()]),
                o = Yf([a, "optionalAccess", t => t.startChild, "call", t => t({
                  description: `${e}.${n}`,
                  op: "graphql.resolve"
                })]),
                c = t.call(this, ...s);
              return Ja(c) ? c.then(t => (Yf([o, "optionalAccess", t => t.finish, "call", t => t()]), t)) : (Yf([o, "optionalAccess", t => t.finish, "call", t => t()]), c)
            }
          })
        }(t, n, i, e)
      })
    }), t))
  }
  Jf.__initStatic();
  const Xf = eo;
  const tg = (t, e, n) => {
      let i, s;
      return r => {
        e.value >= 0 && (r || n) && ((s = e.value - (i || 0)) || void 0 === i) && (i = e.value, e.delta = s, t(e))
      }
    },
    eg = () => Xf.__WEB_VITALS_POLYFILL__ ? Xf.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
      const t = Xf.performance.timing,
        e = Xf.performance.navigation.type,
        n = {
          entryType: "navigation",
          startTime: 0,
          type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
        };
      for (const e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
      return n
    })()) : Xf.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
    ng = () => {
      const t = eg();
      return t && t.activationStart || 0
    },
    ig = (t, e) => {
      const n = eg();
      let i = "navigate";
      return n && (i = Xf.document.prerendering || ng() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
        name: t,
        value: void 0 === e ? -1 : e,
        rating: "good",
        delta: 0,
        entries: [],
        id: (() => `v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`)(),
        navigationType: i
      }
    },
    sg = (t, e, n) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
          const i = new PerformanceObserver(t => {
            e(t.getEntries())
          });
          return i.observe(Object.assign({
            type: t,
            buffered: !0
          }, n || {})), i
        }
      } catch (t) {}
    },
    rg = (t, e) => {
      const n = i => {
        "pagehide" !== i.type && "hidden" !== Xf.document.visibilityState || (t(i), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
      };
      addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    ag = t => {
      const e = ig("CLS", 0);
      let n, i = 0,
        s = [];
      const r = t => {
          t.forEach(t => {
            if (!t.hadRecentInput) {
              const r = s[0],
                a = s[s.length - 1];
              i && 0 !== s.length && t.startTime - a.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (i += t.value, s.push(t)) : (i = t.value, s = [t]), i > e.value && (e.value = i, e.entries = s, n && n())
            }
          })
        },
        a = sg("layout-shift", r);
      if (a) {
        n = tg(t, e);
        const i = () => {
          r(a.takeRecords()), n(!0)
        };
        return rg(i), i
      }
    };
  let og = -1;
  const cg = () => (og < 0 && (og = (() => "hidden" !== Xf.document.visibilityState || Xf.document.prerendering ? 1 / 0 : 0)(), rg(({
      timeStamp: t
    }) => {
      og = t
    }, !0)), {
      get firstHiddenTime() {
        return og
      }
    }),
    lg = t => {
      const e = cg(),
        n = ig("FID");
      let i;
      const s = t => {
          t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), i(!0))
        },
        r = t => {
          t.forEach(s)
        },
        a = sg("first-input", r);
      i = tg(t, n), a && rg(() => {
        r(a.takeRecords()), a.disconnect()
      }, !0)
    },
    ug = {},
    dg = t => {
      const e = cg(),
        n = ig("LCP");
      let i;
      const s = t => {
          const s = t[t.length - 1];
          if (s) {
            const t = Math.max(s.startTime - ng(), 0);
            t < e.firstHiddenTime && (n.value = t, n.entries = [s], i())
          }
        },
        r = sg("largest-contentful-paint", s);
      if (r) {
        i = tg(t, n);
        const e = () => {
          ug[n.id] || (s(r.takeRecords()), r.disconnect(), ug[n.id] = !0, i(!0))
        };
        return ["keydown", "click"].forEach(t => {
          addEventListener(t, e, {
            once: !0,
            capture: !0
          })
        }), rg(e, !0), e
      }
    };

  function hg(t) {
    return "number" == typeof t && isFinite(t)
  }

  function pg(t, {
    startTimestamp: e,
    ...n
  }) {
    return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
      startTimestamp: e,
      ...n
    })
  }

  function fg(t) {
    return t / 1e3
  }

  function gg() {
    return Xf && Xf.addEventListener && Xf.performance
  }
  let mg, _g, yg = 0,
    vg = {};

  function bg() {
    const t = gg();
    if (t && kc) {
      t.mark && Xf.performance.mark("sentry-tracing-init"), lg(t => {
        const e = t.entries.pop();
        if (!e) return;
        const n = fg(kc),
          i = fg(e.startTime);
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding FID"), vg.fid = {
          value: t.value,
          unit: "millisecond"
        }, vg["mark.fid"] = {
          value: n + i,
          unit: "second"
        }
      });
      const e = ag(t => {
          const e = t.entries.pop();
          e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding CLS"), vg.cls = {
            value: t.value,
            unit: ""
          }, _g = e)
        }),
        n = dg(t => {
          const e = t.entries.pop();
          e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding LCP"), vg.lcp = {
            value: t.value,
            unit: "millisecond"
          }, mg = e)
        });
      return () => {
        e && e(), n && n()
      }
    }
    return () => void 0
  }

  function Mg(t) {
    const e = gg();
    if (!e || !Xf.performance.getEntries || !kc) return;
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Tracing] Adding & adjusting spans using Performance API");
    const n = fg(kc),
      i = e.getEntries();
    let s, r;
    if (i.slice(yg).forEach(e => {
        const i = fg(e.startTime),
          a = fg(e.duration);
        if (!("navigation" === t.op && n + i < t.startTimestamp)) switch (e.entryType) {
          case "navigation":
            ! function(t, e, n) {
              ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(i => {
                  Ng(t, e, i, n)
                }), Ng(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), Ng(t, e, "fetch", n, "cache", "domainLookupStart"), Ng(t, e, "domainLookup", n, "DNS"),
                function(t, e, n) {
                  pg(t, {
                    op: "browser",
                    description: "request",
                    startTimestamp: n + fg(e.requestStart),
                    endTimestamp: n + fg(e.responseEnd)
                  }), pg(t, {
                    op: "browser",
                    description: "response",
                    startTimestamp: n + fg(e.responseStart),
                    endTimestamp: n + fg(e.responseEnd)
                  })
                }(t, e, n)
            }(t, e, n), s = n + fg(e.responseStart), r = n + fg(e.requestStart);
            break;
          case "mark":
          case "paint":
          case "measure": {
            ! function(t, e, n, i, s) {
              const r = s + n,
                a = r + i;
              pg(t, {
                description: e.name,
                endTimestamp: a,
                op: e.entryType,
                startTimestamp: r
              })
            }(t, e, i, a, n);
            const s = cg(),
              r = e.startTime < s.firstHiddenTime;
            "first-paint" === e.name && r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding FP"), vg.fp = {
              value: e.startTime,
              unit: "millisecond"
            }), "first-contentful-paint" === e.name && r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding FCP"), vg.fcp = {
              value: e.startTime,
              unit: "millisecond"
            });
            break
          }
          case "resource": {
            const s = e.name.replace(Xf.location.origin, "");
            ! function(t, e, n, i, s, r) {
              if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
              const a = {};
              "transferSize" in e && (a["http.response_transfer_size"] = e.transferSize);
              "encodedBodySize" in e && (a["http.response_content_length"] = e.encodedBodySize);
              "decodedBodySize" in e && (a["http.decoded_response_content_length"] = e.decodedBodySize);
              "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus);
              const o = r + i;
              pg(t, {
                description: n,
                endTimestamp: o + s,
                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                startTimestamp: o,
                data: a
              })
            }(t, e, s, i, a, n);
            break
          }
        }
      }), yg = Math.max(i.length - 1, 0), function(t) {
        const e = Xf.navigator;
        if (!e) return;
        const n = e.connection;
        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), hg(n.rtt) && (vg["connection.rtt"] = {
          value: n.rtt,
          unit: "millisecond"
        }));
        hg(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`);
        hg(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
      }(t), "pageload" === t.op) {
      "number" == typeof s && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding TTFB"), vg.ttfb = {
        value: 1e3 * (s - t.startTimestamp),
        unit: "millisecond"
      }, "number" == typeof r && r <= s && (vg["ttfb.requestTime"] = {
        value: 1e3 * (s - r),
        unit: "millisecond"
      })), ["fcp", "fp", "lcp"].forEach(e => {
        if (!vg[e] || n >= t.startTimestamp) return;
        const i = vg[e].value,
          s = n + fg(i),
          r = Math.abs(1e3 * (s - t.startTimestamp)),
          a = r - i;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Measurements] Normalized ${e} from ${i} to ${r} (${a})`), vg[e].value = r
      });
      const e = vg["mark.fid"];
      e && vg.fid && (pg(t, {
          description: "first input delay",
          endTimestamp: e.value + fg(vg.fid.value),
          op: "ui.action",
          startTimestamp: e.value
        }), delete vg["mark.fid"]), "fcp" in vg || delete vg.cls, Object.keys(vg).forEach(e => {
          t.setMeasurement(e, vg[e].value, vg[e].unit)
        }),
        function(t) {
          mg && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding LCP Data"), mg.element && t.setTag("lcp.element", ao(mg.element)), mg.id && t.setTag("lcp.id", mg.id), mg.url && t.setTag("lcp.url", mg.url.trim().slice(0, 200)), t.setTag("lcp.size", mg.size));
          _g && _g.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log("[Measurements] Adding CLS Data"), _g.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, ao(e.node))))
        }(t)
    }
    mg = void 0, _g = void 0, vg = {}
  }

  function Ng(t, e, n, i, s, r) {
    const a = r ? e[r] : e[`${n}End`],
      o = e[`${n}Start`];
    o && a && pg(t, {
      op: "browser",
      description: s || n,
      startTimestamp: i + fg(o),
      endTimestamp: i + fg(a)
    })
  }
  const Dg = ["localhost", /^\/(?!\/)/],
    Ig = {
      traceFetch: !0,
      traceXHR: !0,
      tracingOrigins: Dg,
      tracePropagationTargets: Dg
    };

  function Sg(t) {
    const {
      traceFetch: e,
      traceXHR: n,
      tracePropagationTargets: i,
      tracingOrigins: s,
      shouldCreateSpanForRequest: r
    } = {
      traceFetch: Ig.traceFetch,
      traceXHR: Ig.traceXHR,
      ...t
    }, a = "function" == typeof r ? r : t => !0, o = t => (function(t, e) {
      return Mo(t, e || Dg)
    })(t, i || s), c = {};
    e && Qo("fetch", t => {
      ! function(t, e, n, i) {
        if (!ll() || !t.fetchData || !e(t.fetchData.url)) return;
        if (t.endTimestamp) {
          const e = t.fetchData.__span;
          if (!e) return;
          const n = i[e];
          if (n) {
            if (t.response) {
              n.setHttpStatus(t.response.status);
              const e = t.response && t.response.headers && t.response.headers.get("content-length"),
                i = parseInt(e);
              i > 0 && n.setData("http.response_content_length", i)
            } else t.error && n.setStatus("internal_error");
            n.finish(), delete i[e]
          }
          return
        }
        const s = al().getScope(),
          r = s && s.getSpan(),
          a = r && r.transaction;
        if (r && a) {
          const {
            method: e,
            url: s
          } = t.fetchData, o = r.startChild({
            data: {
              url: s,
              type: "fetch",
              "http.method": e
            },
            description: `${e} ${s}`,
            op: "http.client"
          });
          t.fetchData.__span = o.spanId, i[o.spanId] = o;
          const c = t.args[0];
          t.args[1] = t.args[1] || {};
          const l = t.args[1];
          n(t.fetchData.url) && (l.headers = function(t, e, n, i) {
            const s = Hc(e),
              r = n.toTraceparent(),
              a = "undefined" != typeof Request && Xa(t, Request) ? t.headers : i.headers;
            if (a) {
              if ("undefined" != typeof Headers && Xa(a, Headers)) {
                const t = new Headers(a);
                return t.append("sentry-trace", r), s && t.append(Gc, s), t
              }
              if (Array.isArray(a)) {
                const t = [...a, ["sentry-trace", r]];
                return s && t.push([Gc, s]), t
              } {
                const t = "baggage" in a ? a.baggage : void 0,
                  e = [];
                return Array.isArray(t) ? e.push(...t) : t && e.push(t), s && e.push(s), {
                  ...a,
                  "sentry-trace": r,
                  baggage: e.length > 0 ? e.join(",") : void 0
                }
              }
            }
            return {
              "sentry-trace": r,
              baggage: s
            }
          }(c, a.getDynamicSamplingContext(), o, l))
        }
      }(t, a, o, c)
    }), n && Qo("xhr", t => {
      ! function(t, e, n, i) {
        const s = t.xhr,
          r = s && s[Yo];
        if (!ll() || s && s.__sentry_own_request__ || !(s && r && e(r.url))) return;
        if (t.endTimestamp) {
          const t = s.__sentry_xhr_span_id__;
          if (!t) return;
          const e = i[t];
          return void(e && (e.setHttpStatus(r.status_code), e.finish(), delete i[t]))
        }
        const a = al().getScope(),
          o = a && a.getSpan(),
          c = o && o.transaction;
        if (o && c) {
          const t = o.startChild({
            data: {
              ...r.data,
              type: "xhr",
              "http.method": r.method,
              url: r.url
            },
            description: `${r.method} ${r.url}`,
            op: "http.client"
          });
          if (s.__sentry_xhr_span_id__ = t.spanId, i[s.__sentry_xhr_span_id__] = t, s.setRequestHeader && n(r.url)) try {
            s.setRequestHeader("sentry-trace", t.toTraceparent());
            const e = c.getDynamicSamplingContext(),
              n = Hc(e);
            n && s.setRequestHeader(Gc, n)
          } catch (t) {}
        }
      }(t, a, o, c)
    })
  }
  const wg = "BrowserTracing",
    Eg = {
      ...ml,
      markBackgroundTransactions: !0,
      routingInstrumentation: function(t, e = !0, n = !0) {
        if (!Xf || !Xf.location) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("Could not initialize routing instrumentation due to invalid location"));
        let i, s = Xf.location.href;
        e && (i = t({
          name: Xf.location.pathname,
          startTimestamp: kc ? kc / 1e3 : void 0,
          op: "pageload",
          metadata: {
            source: "url"
          }
        })), n && Qo("history", ({
          to: e,
          from: n
        }) => {
          void 0 === n && s && -1 !== s.indexOf(e) ? s = void 0 : n !== e && (s = void 0, i && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Finishing current transaction with op: ${i.op}`), i.finish()), i = t({
            name: Xf.location.pathname,
            op: "navigation",
            metadata: {
              source: "url"
            }
          }))
        })
      },
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      _experiments: {},
      ...Ig
    };
  class kg {
    __init() {
      this.name = wg
    }
    constructor(t) {
      kg.prototype.__init.call(this), Sl(), this.options = {
        ...Eg,
        ...t
      }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = bg(), this.options.enableLongTask && sg("longtask", t => {
        for (const e of t) {
          const t = ul();
          if (!t) return;
          const n = fg(kc + e.startTime),
            i = fg(e.duration);
          t.startChild({
            description: "Main UI thread blocked",
            op: "ui.long-task",
            startTimestamp: n,
            endTimestamp: n + i
          })
        }
      }), this.options._experiments.enableInteractions && sg("event", t => {
        for (const e of t) {
          const t = ul();
          if (!t) return;
          if ("click" === e.name) {
            const n = fg(kc + e.startTime),
              i = fg(e.duration);
            t.startChild({
              description: ao(e.target),
              op: `ui.interaction.${e.name}`,
              startTimestamp: n,
              endTimestamp: n + i
            })
          }
        }
      }, {
        durationThreshold: 0
      })
    }
    setupOnce(t, e) {
      this._getCurrentHub = e;
      const {
        routingInstrumentation: n,
        startTransactionOnLocationChange: i,
        startTransactionOnPageLoad: s,
        markBackgroundTransactions: r,
        traceFetch: a,
        traceXHR: o,
        tracePropagationTargets: c,
        shouldCreateSpanForRequest: l,
        _experiments: u
      } = this.options;
      n(t => {
        const n = this._createRouteTransaction(t);
        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
      }, s, i), r && (Xf && Xf.document ? Xf.document.addEventListener("visibilitychange", () => {
        const t = ul();
        if (Xf.document.hidden && t) {
          const e = "cancelled";
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), t.status || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
        }
      }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn("[Tracing] Could not set up background tab detection due to lack of global document")), u.enableInteractions && this._registerInteractionListener(), Sg({
        traceFetch: a,
        traceXHR: o,
        tracePropagationTargets: c,
        shouldCreateSpanForRequest: l
      })
    }
    _createRouteTransaction(t) {
      if (!this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
      const {
        beforeNavigate: e,
        idleTimeout: n,
        finalTimeout: i,
        heartbeatInterval: s
      } = this.options, r = "pageload" === t.op, a = r ? Tg("sentry-trace") : null, o = r ? Tg("baggage") : null, c = a ? function(t) {
        const e = t.match(Tc);
        if (!t || !e) return;
        let n;
        return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
          traceId: e[1],
          parentSampled: n,
          parentSpanId: e[2]
        }
      }(a) : void 0, l = o ? function(t) {
        if (!Ha(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t)) e = t.reduce((t, e) => {
          const n = qc(e);
          return {
            ...t,
            ...n
          }
        }, {});
        else {
          if (!t) return;
          e = qc(t)
        }
        const n = Object.entries(e).reduce((t, [e, n]) => (e.match(Qc) && (t[e.slice(Fc.length)] = n), t), {});
        return Object.keys(n).length > 0 ? n : void 0
      }(o) : void 0, u = {
        ...t,
        ...c,
        metadata: {
          ...t.metadata,
          dynamicSamplingContext: c && !l ? {} : l
        },
        trimEnd: !0
      }, d = "function" == typeof e ? e(u) : u, h = void 0 === d ? {
        ...u,
        sampled: !1
      } : d;
      h.metadata = h.name !== u.name ? {
        ...h.metadata,
        source: "custom"
      } : h.metadata, this._latestRouteName = h.name, this._latestRouteSource = h.metadata && h.metadata.source, !1 === h.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.log(`[Tracing] Starting ${h.op} transaction on scope`);
      const p = this._getCurrentHub(),
        {
          location: f
        } = Xf,
        g = Il(p, h, n, i, !0, {
          location: f
        }, s);
      return g.registerBeforeFinishCallback(t => {
        this._collectWebVitals(), Mg(t)
      }), g
    }
    _registerInteractionListener() {
      let t;
      const e = () => {
        const {
          idleTimeout: e,
          finalTimeout: n,
          heartbeatInterval: i
        } = this.options, s = "ui.action.click", r = ul();
        if (r && r.op && ["navigation", "pageload"].includes(r.op)) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`));
        if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`));
        if (!this._latestRouteName) return void(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && po.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
        const a = this._getCurrentHub(),
          {
            location: o
          } = Xf,
          c = {
            name: this._latestRouteName,
            op: s,
            trimEnd: !0,
            metadata: {
              source: this._latestRouteSource || "url"
            }
          };
        t = Il(a, c, e, n, !0, {
          location: o
        }, i)
      };
      ["click"].forEach(t => {
        addEventListener(t, e, {
          once: !1,
          capture: !0
        })
      })
    }
  }

  function Tg(t) {
    const e = (n = `meta[name=${t}]`, so.document && so.document.querySelector ? so.document.querySelector(n) : null);
    var n;
    return e ? e.getAttribute("content") : null
  }
  let xg = "",
    Cg = "",
    Ag = "",
    jg = Zl.navigator && Zl.navigator.userAgent || "",
    zg = "";
  Zl.navigator && Zl.navigator.language || Zl.navigator && Zl.navigator.languages && Zl.navigator.languages[0];
  const Og = Zl.navigator && Zl.navigator.userAgentData;
  var Lg;
  "object" == typeof(Lg = Og) && null !== Lg && "getHighEntropyValues" in Lg && Og.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
    if (xg = t.platform || "", Ag = t.architecture || "", zg = t.model || "", Cg = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
      const e = t.fullVersionList[t.fullVersionList.length - 1];
      jg = `${e.brand} ${e.version}`
    }
  }).catch(t => void 0);
  let Rg = {};
  Zl.Sentry && Zl.Sentry.Integrations && (Rg = Zl.Sentry.Integrations);
  const Ug = {
      ...Rg,
      ...Wl,
      ...Ju
    },
    Bg = async () => {
      try {
        const t = Ya.get("_ga");
        let e = await (async () => {
          try {
            return await new Promise((t, e) => {
              gtag("get", ee.gtmGaId, "client_id", t)
            })
          } catch (t) {
            return null
          }
        })();
        !e && null !== t && void 0 !== t && t.trim() && (e = t.split(".").slice(2).join(".")), e && Ya.set("rngst", JSON.stringify({
          clientId: e
        }), {
          expires: 365,
          domain: ee.cookieDomain
        })
      } catch (t) {}
    }, Yg = t => {
      const e = Xt(t, "classified") && 1 === t.classified ? "classified" : "basic";
      pr(e), Ba(t)
    };
  (async () => {
    var t;
    if (!1 !== ee.noGa && null !== (t = ee.gtmGaId) && void 0 !== t && t.trim() && await Bg(), !0 === ee.userSettings.sentry) {
      Wu({
        dsn: "https://a4915f03dfb6495d85243479584da14c@o1420602.ingest.sentry.io/4505011623493632",
        debug: !0 === ee.userSettings.sentryDebug,
        enabled: !1 !== ee.userSettings.sentry,
        attachStacktrace: !0,
        integrations: [new Ug.GlobalHandlers({
          onerror: !1,
          onunhandledrejection: !1
        }), new kg({
          tracePropagationTargets: [/\/script.ringostat.com\/.+\.js/, /\/backend.ringostat.net\/.+\.js/]
        })]
      });
      try {
        Yg(ee)
      } catch (t) {
        ! function(t, e) {
          const n = "string" == typeof e ? e : void 0,
            i = "string" != typeof e ? {
              captureContext: e
            } : void 0;
          al().captureMessage(t, n, i)
        }(t)
      }
    } else Yg(ee)
  })().catch(t => {
    console.error("Initialization failed")
  })
}();