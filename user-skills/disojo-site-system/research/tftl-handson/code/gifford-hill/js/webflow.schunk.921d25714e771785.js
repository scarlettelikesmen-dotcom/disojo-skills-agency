/* https://cdn.prod.website-files.com/6687edf28965e189a78dfdfa/js/webflow.schunk.921d25714e771785.js */
(self.webpackChunk = self.webpackChunk || []).push([
  ["642"], {
    5487: function() {
      "use strict";
      window.tram = function(e) {
        function t(e, t) {
          return (new G.Bare).init(e, t)
        }

        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }

        function i(e, t, n) {
          return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function r(e, t, n) {
          if (void 0 !== t && (n = t), void 0 === e) return n;
          var i = n;
          return $.test(e) || !q.test(e) ? i = parseInt(e, 10) : q.test(e) && (i = 1e3 * parseFloat(e)), 0 > i && (i = 0), i == i ? i : n
        }

        function o(e) {
          B.debug && window && window.console.warn(e)
        }
        var u, c, l, s = function(e, t, n) {
            function i(e) {
              return "object" == typeof e
            }

            function a(e) {
              return "function" == typeof e
            }

            function r() {}
            return function o(u, c) {
              function l() {
                var e = new s;
                return a(e.init) && e.init.apply(e, arguments), e
              }

              function s() {}
              c === n && (c = u, u = Object), l.Bare = s;
              var d, f = r[e] = u[e],
                p = s[e] = l[e] = new r;
              return p.constructor = l, l.mixin = function(t) {
                return s[e] = l[e] = o(l, t)[e], l
              }, l.open = function(e) {
                if (d = {}, a(e) ? d = e.call(l, p, f, l, u) : i(e) && (d = e), i(d))
                  for (var n in d) t.call(d, n) && (p[n] = d[n]);
                return a(p.init) || (p.init = u), l
              }, l.open(c)
            }
          }("prototype", {}.hasOwnProperty),
          d = {
            ease: ["ease", function(e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + .25 * e)
            }],
            "ease-in": ["ease-in", function(e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a)
            }],
            "ease-out": ["ease-out", function(e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
            }],
            "ease-in-out": ["ease-in-out", function(e, t, n, i) {
              var a = (e /= i) * e,
                r = a * e;
              return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a)
            }],
            linear: ["linear", function(e, t, n, i) {
              return n * e / i + t
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, i) {
              return n * (e /= i) * e + t
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, i) {
              return -n * (e /= i) * (e - 2) + t
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, i) {
              return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, i) {
              return n * (e /= i) * e * e + t
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, i) {
              return n * ((e = e / i - 1) * e * e + 1) + t
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, i) {
              return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, i) {
              return n * (e /= i) * e * e * e + t
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, i) {
              return -n * ((e = e / i - 1) * e * e * e - 1) + t
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, i) {
              return (e /= i / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, i) {
              return n * (e /= i) * e * e * e * e + t
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, i) {
              return n * ((e = e / i - 1) * e * e * e * e + 1) + t
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, i) {
              return (e /= i / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, i) {
              return -n * Math.cos(e / i * (Math.PI / 2)) + n + t
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, i) {
              return n * Math.sin(e / i * (Math.PI / 2)) + t
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, i) {
              return -n / 2 * (Math.cos(Math.PI * e / i) - 1) + t
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, i) {
              return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, i) {
              return e === i ? t + n : n * (-Math.pow(2, -10 * e / i) + 1) + t
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, i) {
              return 0 === e ? t : e === i ? t + n : (e /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
            }],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, i) {
              return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, i) {
              return n * Math.sqrt(1 - (e = e / i - 1) * e) + t
            }],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, i) {
              return (e /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, i, a) {
              return void 0 === a && (a = 1.70158), n * (e /= i) * e * ((a + 1) * e - a) + t
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, i, a) {
              return void 0 === a && (a = 1.70158), n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, i, a) {
              return void 0 === a && (a = 1.70158), (e /= i / 2) < 1 ? n / 2 * e * e * (((a *= 1.525) + 1) * e - a) + t : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + t
            }]
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          I = /[A-Z]/,
          y = "number",
          m = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          h = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          _ = "unitless",
          O = /(all|none) 0s ease 0s/,
          v = /^(width|height)$/,
          S = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function(e) {
            if (e in S.style) return {
              dom: e,
              css: e
            };
            var t, n, i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++) i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((n = A[t] + i) in S.style) return {
                dom: n,
                css: R[t] + e
              }
          },
          C = t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function")
          };
        if (C.transition) {
          var w = C.timing.dom;
          if (S.style[w] = d["ease-in-back"][0], !S.style[w])
            for (var N in f) d[N][0] = f[N]
        }
        var P = t.frame = (u = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && C.bind ? u.bind(p) : function(e) {
            p.setTimeout(e, 16)
          },
          F = t.now = (l = (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) && C.bind ? l.bind(c) : Date.now || function() {
            return +new Date
          },
          M = s(function(t) {
            function n(e, t) {
              var n = function(e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var a = e[t];
                    a && i.push(a)
                  }
                  return i
                }(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  u = this.props[i];
                return u || (u = this.props[i] = new r.Bare), u.init(this.$el, n, a, t), u
              }
            }

            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && t) return this.timer = new X({
                  duration: e,
                  context: this,
                  complete: a
                }), void(this.active = !0);
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      u.call(this);
                      break;
                    case "redraw":
                      l.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1])
                  }
                  return a.call(this)
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(this, e, function(e, t) {
                    e.span > f && (f = e.span), e.stop(), e.animate(t)
                  }, function(e) {
                    "wait" in e && (f = r(e.wait, 0))
                  }), s.call(this), f > 0 && (this.timer = new X({
                    duration: f,
                    context: this
                  }), this.active = !0, t && (this.timer.complete = a));
                  var p = this,
                    g = !1,
                    E = {};
                  P(function() {
                    d.call(p, e, function(e) {
                      e.active && (g = !0, E[e.name] = e.nextStyle)
                    }), g && p.$el.css(E)
                  })
                }
              }
            }

            function a() {
              if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args)
              }
            }

            function u(e) {
              var t;
              this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, d.call(this, t, f), s.call(this)
            }

            function c() {
              u.call(this), this.el.style.display = "none"
            }

            function l() {
              this.el.offsetHeight
            }

            function s() {
              var e, t, n = [];
              for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
              n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
            }

            function d(e, t, i) {
              var a, r, o, u, c = t !== f,
                l = {};
              for (a in e) o = e[a], a in z ? (l.transform || (l.transform = {}), l.transform[a] = o) : (I.test(a) && (a = a.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
              })), a in Q ? l[a] = o : (u || (u = {}), u[a] = o));
              for (a in l) {
                if (o = l[a], !(r = this.props[a])) {
                  if (!c) continue;
                  r = n.call(this, a)
                }
                t.call(this, r, o)
              }
              i && u && i.call(this, u)
            }

            function f(e) {
              e.stop()
            }

            function p(e, t) {
              e.set(t)
            }

            function E(e) {
              this.$el.css(e)
            }

            function y(e, n) {
              t[e] = function() {
                return this.children ? m.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
              }
            }

            function m(e, t) {
              var n, i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this
            }
            t.init = function(t) {
              if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, B.keepInherited && !B.fallback) {
                var n = H(this.el, "transition");
                n && !O.test(n) && (this.upstream = n)
              }
              C.backface && B.hideBackface && Y(this.el, C.backface.css, "hidden")
            }, y("add", n), y("start", i), y("wait", function(e) {
              e = r(e, 0), this.active ? this.queue.push({
                options: e
              }) : (this.timer = new X({
                duration: e,
                context: this,
                complete: a
              }), this.active = !0)
            }), y("then", function(e) {
              return this.active ? (this.queue.push({
                options: e,
                args: arguments
              }), void(this.timer.complete = a)) : o("No active transition timer. Use start() or wait() before then().")
            }), y("next", a), y("stop", u), y("set", function(e) {
              u.call(this, e), d.call(this, e, p, E)
            }), y("show", function(e) {
              "string" != typeof e && (e = "block"), this.el.style.display = e
            }), y("hide", c), y("redraw", l), y("destroy", function() {
              u.call(this), e.removeData(this.el, g), this.$el = this.el = null
            })
          }),
          G = s(M, function(t) {
            function n(t, n) {
              var i = e.data(t, g) || e.data(t, g, new M.Bare);
              return i.el || i.init(t), n ? i.start(n) : i
            }
            t.init = function(t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return a.each(function(e, t) {
                r.push(n(t, i))
              }), this.children = r, this
            }
          }),
          D = s(function(e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t
            }
            e.init = function(e, t, n, i) {
              this.$el = e, this.el = e[0];
              var a, o, u, c = t[0];
              n[2] && (c = n[2]), W[c] && (c = W[c]), this.name = c, this.type = n[1], this.duration = r(t[1], this.duration, 500), this.ease = (a = t[2], o = this.ease, u = "ease", void 0 !== o && (u = o), a in d ? a : u), this.delay = r(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = v.test(this.name), this.unit = i.unit || this.unit || B.defaultUnit, this.angle = i.angle || this.angle || B.defaultAngle, B.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + d[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
            }, e.set = function(e) {
              e = this.convert(e, this.type), this.update(e), this.redraw()
            }, e.transition = function(e) {
              this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
            }, e.fallback = function(e) {
              var n = this.el.style[this.name] || this.convert(this.get(), this.type);
              e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new k({
                from: n,
                to: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              })
            }, e.get = function() {
              return H(this.el, this.name)
            }, e.update = function(e) {
              Y(this.el, this.name, e)
            }, e.stop = function() {
              (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
              var e = this.tween;
              e && e.context && e.destroy()
            }, e.convert = function(e, t) {
              if ("auto" == e && this.auto) return e;
              var n, a, r = "number" == typeof e,
                u = "string" == typeof e;
              switch (t) {
                case y:
                  if (r) return e;
                  if (u && "" === e.replace(E, "")) return +e;
                  a = "number(unitless)";
                  break;
                case m:
                  if (u) {
                    if ("" === e && this.original) return this.original;
                    if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? i(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                  }
                  a = "hex or rgb string";
                  break;
                case T:
                  if (r) return e + this.unit;
                  if (u && t.test(e)) return e;
                  a = "number(px) or string(unit)";
                  break;
                case h:
                  if (r) return e + this.unit;
                  if (u && t.test(e)) return e;
                  a = "number(px) or string(unit or %)";
                  break;
                case b:
                  if (r) return e + this.angle;
                  if (u && t.test(e)) return e;
                  a = "number(deg) or string(angle)";
                  break;
                case _:
                  if (r || u && h.test(e)) return e;
                  a = "number(unitless) or string(unit or %)"
              }
              return o("Type warning: Expected: [" + a + "] Got: [" + typeof e + "] " + e), e
            }, e.redraw = function() {
              this.el.offsetHeight
            }
          }),
          U = s(D, function(e, t) {
            e.init = function() {
              t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), m))
            }
          }),
          x = s(D, function(e, t) {
            e.init = function() {
              t.init.apply(this, arguments), this.animate = this.fallback
            }, e.get = function() {
              return this.$el[this.name]()
            }, e.update = function(e) {
              this.$el[this.name](e)
            }
          }),
          V = s(D, function(e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e) a = (r = z[n])[0], i = r[1] || n, o = this.convert(e[n], a), t.call(this, i, o, a)
            }
            e.init = function() {
              t.init.apply(this, arguments), this.current || (this.current = {}, z.perspective && B.perspective && (this.current.perspective = B.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
            }, e.set = function(e) {
              n.call(this, e, function(e, t) {
                this.current[e] = t
              }), Y(this.el, this.name, this.style(this.current)), this.redraw()
            }, e.transition = function(e) {
              var t = this.values(e);
              this.tween = new j({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var n, i = {};
              for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
              this.active = !0, this.nextStyle = this.style(i)
            }, e.fallback = function(e) {
              var t = this.values(e);
              this.tween = new j({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              })
            }, e.update = function() {
              Y(this.el, this.name, this.style(this.current))
            }, e.style = function(e) {
              var t, n = "";
              for (t in e) n += t + "(" + e[t] + ") ";
              return n
            }, e.values = function(e) {
              var t, i = {};
              return n.call(this, e, function(e, n, a) {
                i[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, a))
              }), i
            }
          }),
          k = s(function(t) {
            function r() {
              var e, t, n, i = c.length;
              if (i)
                for (P(r), t = F(), e = i; e--;)(n = c[e]) && n.render(t)
            }
            var u = {
              ease: d.ease[1],
              from: 0,
              to: 1
            };
            t.init = function(e) {
              this.duration = e.duration || 0, this.delay = e.delay || 0;
              var t = e.ease || u.ease;
              d[t] && (t = d[t][1]), "function" != typeof t && (t = u.ease), this.ease = t, this.update = e.update || a, this.complete = e.complete || a, this.context = e.context || this, this.name = e.name;
              var n = e.from,
                i = e.to;
              void 0 === n && (n = u.from), void 0 === i && (i = u.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = F(), !1 !== e.autoplay && this.play()
            }, t.play = function() {
              this.active || (this.start || (this.start = F()), this.active = !0, 1 === c.push(this) && P(r))
            }, t.stop = function() {
              var t, n;
              this.active && (this.active = !1, (n = e.inArray(this, c)) >= 0 && (t = c.slice(n + 1), c.length = n, t.length && (c = c.concat(t))))
            }, t.render = function(e) {
              var t, n = e - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay
              }
              if (n < this.duration) {
                var a, r, o = this.ease(n, 0, 1, this.duration);
                return t = this.startRGB ? (a = this.startRGB, r = this.endRGB, i(a[0] + o * (r[0] - a[0]), a[1] + o * (r[1] - a[1]), a[2] + o * (r[2] - a[2]))) : Math.round((this.begin + o * this.change) * l) / l, this.value = t + this.unit, void this.update.call(this.context, this.value)
              }
              t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
            }, t.format = function(e, t) {
              if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
              if (!this.unit) {
                var i = t.replace(E, "");
                i !== e.replace(E, "") && o("Units do not match [tween]: " + t + ", " + e), this.unit = i
              }
              t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
            }, t.destroy = function() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = a
            };
            var c = [],
              l = 1e3
          }),
          X = s(k, function(e) {
            e.init = function(e) {
              this.duration = e.duration || 0, this.complete = e.complete || a, this.context = e.context, this.play()
            }, e.render = function(e) {
              e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
            }
          }),
          j = s(k, function(e, t) {
            e.init = function(e) {
              var t, n;
              for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new k({
                name: t,
                from: this.current[t],
                to: n,
                duration: e.duration,
                delay: e.delay,
                ease: e.ease,
                autoplay: !1
              }));
              this.play()
            }, e.render = function(e) {
              var t, n, i = this.tweens.length,
                a = !1;
              for (t = i; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, a = !0);
              return a ? void(this.update && this.update.call(this.context)) : this.destroy()
            }, e.destroy = function() {
              if (t.destroy.call(this), this.tweens) {
                var e;
                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                this.tweens = null, this.current = null
              }
            }
          }),
          B = t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !C.transition,
            agentTests: []
          };
        t.fallback = function(e) {
          if (!C.transition) return B.fallback = !0;
          B.agentTests.push("(" + e + ")");
          var t = RegExp(B.agentTests.join("|"), "i");
          B.fallback = t.test(navigator.userAgent)
        }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
          return new k(e)
        }, t.delay = function(e, t, n) {
          return new X({
            complete: t,
            duration: e,
            context: n
          })
        }, e.fn.tram = function(e) {
          return t.call(null, this, e)
        };
        var Y = e.style,
          H = e.css,
          W = {
            transform: C.transform && C.transform.css
          },
          Q = {
            color: [U, m],
            background: [U, m, "background-color"],
            "outline-color": [U, m],
            "border-color": [U, m],
            "border-top-color": [U, m],
            "border-right-color": [U, m],
            "border-bottom-color": [U, m],
            "border-left-color": [U, m],
            "border-width": [D, T],
            "border-top-width": [D, T],
            "border-right-width": [D, T],
            "border-bottom-width": [D, T],
            "border-left-width": [D, T],
            "border-spacing": [D, T],
            "letter-spacing": [D, T],
            margin: [D, T],
            "margin-top": [D, T],
            "margin-right": [D, T],
            "margin-bottom": [D, T],
            "margin-left": [D, T],
            padding: [D, T],
            "padding-top": [D, T],
            "padding-right": [D, T],
            "padding-bottom": [D, T],
            "padding-left": [D, T],
            "outline-width": [D, T],
            opacity: [D, y],
            top: [D, h],
            right: [D, h],
            bottom: [D, h],
            left: [D, h],
            "font-size": [D, h],
            "text-indent": [D, h],
            "word-spacing": [D, h],
            width: [D, h],
            "min-width": [D, h],
            "max-width": [D, h],
            height: [D, h],
            "min-height": [D, h],
            "max-height": [D, h],
            "line-height": [D, _],
            "scroll-top": [x, y, "scrollTop"],
            "scroll-left": [x, y, "scrollLeft"]
          },
          z = {};
        C.transform && (Q.transform = [V], z = {
          x: [h, "translateX"],
          y: [h, "translateY"],
          rotate: [b],
          rotateX: [b],
          rotateY: [b],
          scale: [y],
          scaleX: [y],
          scaleY: [y],
          skew: [b],
          skewX: [b],
          skewY: [b]
        }), C.transform && C.backface && (z.z = [h, "translateZ"], z.rotateZ = [b], z.scaleZ = [y], z.perspective = [T]);
        var $ = /ms/,
          q = /s|\./;
        return e.tram = t
      }(window.jQuery)
    },
    5756: function(e, t, n) {
      "use strict";
      var i, a, r, o, u, c, l, s, d, f, p, g, E, I, y, m, T, h, b, _, O = window.$,
        v = n(5487) && O.tram;
      (i = {}).VERSION = "1.6.0-Webflow", a = {}, r = Array.prototype, o = Object.prototype, u = Function.prototype, r.push, c = r.slice, r.concat, o.toString, l = o.hasOwnProperty, s = r.forEach, d = r.map, r.reduce, r.reduceRight, f = r.filter, r.every, p = r.some, g = r.indexOf, r.lastIndexOf, E = Object.keys, u.bind, I = i.each = i.forEach = function(e, t, n) {
        if (null == e) return e;
        if (s && e.forEach === s) e.forEach(t, n);
        else if (e.length === +e.length) {
          for (var r = 0, o = e.length; r < o; r++)
            if (t.call(n, e[r], r, e) === a) return
        } else
          for (var u = i.keys(e), r = 0, o = u.length; r < o; r++)
            if (t.call(n, e[u[r]], u[r], e) === a) return;
        return e
      }, i.map = i.collect = function(e, t, n) {
        var i = [];
        return null == e ? i : d && e.map === d ? e.map(t, n) : (I(e, function(e, a, r) {
          i.push(t.call(n, e, a, r))
        }), i)
      }, i.find = i.detect = function(e, t, n) {
        var i;
        return y(e, function(e, a, r) {
          if (t.call(n, e, a, r)) return i = e, !0
        }), i
      }, i.filter = i.select = function(e, t, n) {
        var i = [];
        return null == e ? i : f && e.filter === f ? e.filter(t, n) : (I(e, function(e, a, r) {
          t.call(n, e, a, r) && i.push(e)
        }), i)
      }, y = i.some = i.any = function(e, t, n) {
        t || (t = i.identity);
        var r = !1;
        return null == e ? r : p && e.some === p ? e.some(t, n) : (I(e, function(e, i, o) {
          if (r || (r = t.call(n, e, i, o))) return a
        }), !!r)
      }, i.contains = i.include = function(e, t) {
        return null != e && (g && e.indexOf === g ? -1 != e.indexOf(t) : y(e, function(e) {
          return e === t
        }))
      }, i.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
          return e.apply(null, n)
        }, t)
      }, i.defer = function(e) {
        return i.delay.apply(i, [e, 1].concat(c.call(arguments, 1)))
      }, i.throttle = function(e) {
        var t, n, i;
        return function() {
          t || (t = !0, n = arguments, i = this, v.frame(function() {
            t = !1, e.apply(i, n)
          }))
        }
      }, i.debounce = function(e, t, n) {
        var a, r, o, u, c, l = function() {
          var s = i.now() - u;
          s < t ? a = setTimeout(l, t - s) : (a = null, n || (c = e.apply(o, r), o = r = null))
        };
        return function() {
          o = this, r = arguments, u = i.now();
          var s = n && !a;
          return a || (a = setTimeout(l, t)), s && (c = e.apply(o, r), o = r = null), c
        }
      }, i.defaults = function(e) {
        if (!i.isObject(e)) return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
          var a = arguments[t];
          for (var r in a) void 0 === e[r] && (e[r] = a[r])
        }
        return e
      }, i.keys = function(e) {
        if (!i.isObject(e)) return [];
        if (E) return E(e);
        var t = [];
        for (var n in e) i.has(e, n) && t.push(n);
        return t
      }, i.has = function(e, t) {
        return l.call(e, t)
      }, i.isObject = function(e) {
        return e === Object(e)
      }, i.now = Date.now || function() {
        return new Date().getTime()
      }, i.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      }, m = /(.)^/, T = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, h = /\\|'|\r|\n|\u2028|\u2029/g, b = function(e) {
        return "\\" + T[e]
      }, _ = /^\s*(\w|\$)+\s*$/, i.template = function(e, t, n) {
        !t && n && (t = n);
        var a, r = RegExp([((t = i.defaults({}, t, i.templateSettings)).escape || m).source, (t.interpolate || m).source, (t.evaluate || m).source].join("|") + "|$", "g"),
          o = 0,
          u = "__p+='";
        e.replace(r, function(t, n, i, a, r) {
          return u += e.slice(o, r).replace(h, b), o = r + t.length, n ? u += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (u += "';\n" + a + "\n__p+='"), t
        }), u += "';\n";
        var c = t.variable;
        if (c) {
          if (!_.test(c)) throw Error("variable is not a bare identifier: " + c)
        } else u = "with(obj||{}){\n" + u + "}\n", c = "obj";
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
          a = Function(t.variable || "obj", "_", u)
        } catch (e) {
          throw e.source = u, e
        }
        var l = function(e) {
          return a.call(this, e, i)
        };
        return l.source = "function(" + c + "){\n" + u + "}", l
      }, e.exports = i
    },
    9461: function(e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("brand", e.exports = function(e) {
        var t, n = {},
          a = document,
          r = e("html"),
          o = e("body"),
          u = window.location,
          c = /PhantomJS/i.test(navigator.userAgent),
          l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function s() {
          var n = a.fullScreen || a.mozFullScreen || a.webkitIsFullScreen || a.msFullscreenElement || !!a.webkitFullscreenElement;
          e(t).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
          var e = o.children(".w-webflow-badge"),
            n = e.length && e.get(0) === t,
            a = i.env("editor");
          if (n) {
            a && e.remove();
            return
          }
          e.length && e.remove(), a || o.append(t)
        }
        return n.ready = function() {
          var n, i, o, f = r.attr("data-wf-status"),
            p = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(p) && u.hostname !== p && (f = !0), f && !c && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), i = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          }), o = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(i, o), n[0]), d(), setTimeout(d, 500), e(a).off(l, s).on(l, s))
        }, n
      })
    },
    322: function(e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("edit", e.exports = function(e, t, n) {
        if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture && ! function() {
            try {
              return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
            } catch (e) {
              return !1
            }
          }()) return {
          exit: 1
        };
        var a, r = e(window),
          o = e(document.documentElement),
          u = document.location,
          c = "hashchange",
          l = n.load || function() {
            var t, n, i;
            a = !0, window.WebflowEditor = !0, r.off(c, d), t = function(t) {
              var n;
              e.ajax({
                url: p("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: o.attr("data-wf-site")
                },
                xhrFields: {
                  withCredentials: !0
                },
                dataType: "json",
                crossDomain: !0,
                success: (n = t, function(t) {
                  var i, a, r;
                  if (!t) return void console.error("Could not load editor data");
                  t.thirdPartyCookiesSupported = n, a = (i = t.scriptPath).indexOf("//") >= 0 ? i : p("https://editor-api.webflow.com" + i), r = function() {
                    window.WebflowEditor(t)
                  }, e.ajax({
                    type: "GET",
                    url: a,
                    dataType: "script",
                    cache: !0
                  }).then(r, f)
                })
              })
            }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", i = function(e) {
              "WF_third_party_cookies_unsupported" === e.data ? (g(n, i), t(!1)) : "WF_third_party_cookies_supported" === e.data && (g(n, i), t(!0))
            }, n.onerror = function() {
              g(n, i), t(!1)
            }, window.addEventListener("message", i, !1), window.document.body.appendChild(n)
          },
          s = !1;
        try {
          s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (e) {}

        function d() {
          !a && /\?edit/.test(u.hash) && l()
        }

        function f(e, t, n) {
          throw console.error("Could not load editor script: " + t), n
        }

        function p(e) {
          return e.replace(/([^:])\/\//g, "$1/")
        }

        function g(e, t) {
          window.removeEventListener("message", t, !1), e.remove()
        }
        return s ? l() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && l() : r.on(c, d).triggerHandler(c), {}
      })
    },
    2338: function(e, t, n) {
      "use strict";
      n(3949).define("focus-visible", e.exports = function() {
        return {
          ready: function() {
            if ("undefined" != typeof document) try {
              document.querySelector(":focus-visible")
            } catch (e) {
              ! function(e) {
                var t = !0,
                  n = !1,
                  i = null,
                  a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                  };

                function r(e) {
                  return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                }

                function o(e) {
                  e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                }

                function u() {
                  t = !1
                }

                function c() {
                  document.addEventListener("mousemove", l), document.addEventListener("mousedown", l), document.addEventListener("mouseup", l), document.addEventListener("pointermove", l), document.addEventListener("pointerdown", l), document.addEventListener("pointerup", l), document.addEventListener("touchmove", l), document.addEventListener("touchstart", l), document.addEventListener("touchend", l)
                }

                function l(e) {
                  e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", l), document.removeEventListener("mousedown", l), document.removeEventListener("mouseup", l), document.removeEventListener("pointermove", l), document.removeEventListener("pointerdown", l), document.removeEventListener("pointerup", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchstart", l), document.removeEventListener("touchend", l))
                }
                document.addEventListener("keydown", function(n) {
                  n.metaKey || n.altKey || n.ctrlKey || (r(e.activeElement) && o(e.activeElement), t = !0)
                }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function() {
                  "hidden" === document.visibilityState && (n && (t = !0), c())
                }, !0), c(), e.addEventListener("focus", function(e) {
                  if (r(e.target)) {
                    var n, i, u;
                    (t || (i = (n = e.target).type, "INPUT" === (u = n.tagName) && a[i] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable || 0)) && o(e.target)
                  }
                }, !0), e.addEventListener("blur", function(e) {
                  if (r(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                    var t;
                    n = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                      n = !1
                    }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                  }
                }, !0)
              }(document)
            }
          }
        }
      })
    },
    8334: function(e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("focus", e.exports = function() {
        var e = [],
          t = !1;

        function n(n) {
          t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
        }

        function a(n) {
          var i, a;
          a = (i = n.target).tagName, (/^a$/i.test(a) && null != i.href || /^(button|textarea)$/i.test(a) && !0 !== i.disabled || /^input$/i.test(a) && /^(button|reset|submit|radio|checkbox)$/i.test(i.type) && !i.disabled || !/^(button|input|textarea|select|a)$/i.test(a) && !Number.isNaN(Number.parseFloat(i.tabIndex)) || /^audio$/i.test(a) || /^video$/i.test(a) && !0 === i.controls) && (t = !0, setTimeout(() => {
            for (t = !1, n.target.focus(); e.length > 0;) {
              var i = e.pop();
              i.target.dispatchEvent(new MouseEvent(i.type, i))
            }
          }, 0))
        }
        return {
          ready: function() {
            "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && i.env.safari && (document.addEventListener("mousedown", a, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
          }
        }
      })
    },
    7199: function(e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function(e, t) {
            t.__wf_intro = null
          },
          intro: function(e, i) {
            i.__wf_intro || (i.__wf_intro = !0, t(i).triggerHandler(n.types.INTRO))
          },
          outro: function(e, i) {
            i.__wf_intro && (i.__wf_intro = null, t(i).triggerHandler(n.types.OUTRO))
          }
        };
      n.triggers = {}, n.types = {
        INTRO: "w-ix-intro" + a,
        OUTRO: "w-ix-outro" + a
      }, n.init = function() {
        for (var e = i.length, a = 0; a < e; a++) {
          var o = i[a];
          o[0](0, o[1])
        }
        i = [], t.extend(n.triggers, r)
      }, n.async = function() {
        for (var e in r) {
          var t = r[e];
          r.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
            i.push([t, n])
          })
        }
      }, n.async(), e.exports = n
    },
    5134: function(e, t, n) {
      "use strict";
      var i = n(7199);

      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
      }
      var r = window.jQuery,
        o = {},
        u = ".w-ix";
      o.triggers = {}, o.types = {
        INTRO: "w-ix-intro" + u,
        OUTRO: "w-ix-outro" + u
      }, r.extend(o.triggers, {
        reset: function(e, t) {
          i.triggers.reset(e, t)
        },
        intro: function(e, t) {
          i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE")
        },
        outro: function(e, t) {
          i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE")
        }
      }), e.exports = o
    },
    941: function(e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env), i.define("ix2", e.exports = function() {
        return a
      })
    },
    3949: function(e, t, n) {
      "use strict";
      var i, a, r = {},
        o = {},
        u = [],
        c = window.Webflow || [],
        l = window.jQuery,
        s = l(window),
        d = l(document),
        f = l.isFunction,
        p = r._ = n(5756),
        g = r.tram = n(5487) && l.tram,
        E = !1,
        I = !1;

      function y(e) {
        r.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
          if (E) return e.ready();
          p.contains(u, e.ready) || u.push(e.ready)
        }(e)
      }

      function m(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, u = p.filter(u, function(e) {
          return e !== t.ready
        }))
      }
      g.config.hideBackface = !1, g.config.keepInherited = !0, r.define = function(e, t, n) {
        o[e] && m(o[e]);
        var i = o[e] = t(l, p, n) || {};
        return y(i), i
      }, r.require = function(e) {
        return o[e]
      }, r.push = function(e) {
        if (E) {
          f(e) && e();
          return
        }
        c.push(e)
      }, r.env = function(e) {
        var t = window.__wf_design,
          n = void 0 !== t;
        return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
      };
      var T = navigator.userAgent.toLowerCase(),
        h = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        b = r.env.chrome = /chrome/.test(T) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10),
        _ = r.env.ios = /(ipod|iphone|ipad)/.test(T);
      r.env.safari = /safari/.test(T) && !b && !_, h && d.on("touchstart mousedown", function(e) {
        i = e.target
      }), r.validClick = h ? function(e) {
        return e === i || l.contains(e, i)
      } : function() {
        return !0
      };
      var O = "resize.webflow orientationchange.webflow load.webflow",
        v = "scroll.webflow " + O;

      function S(e, t) {
        var n = [],
          i = {};
        return i.up = p.throttle(function(e) {
          p.each(n, function(t) {
            t(e)
          })
        }), e && t && e.on(t, i.up), i.on = function(e) {
          "function" == typeof e && (p.contains(n, e) || n.push(e))
        }, i.off = function(e) {
          if (!arguments.length) {
            n = [];
            return
          }
          n = p.filter(n, function(t) {
            return t !== e
          })
        }, i
      }

      function A(e) {
        f(e) && e()
      }

      function R() {
        a && (a.reject(), s.off("load", a.resolve)), a = new l.Deferred, s.on("load", a.resolve)
      }
      r.resize = S(s, O), r.scroll = S(s, v), r.redraw = S(), r.location = function(e) {
        window.location = e
      }, r.env() && (r.location = function() {}), r.ready = function() {
        E = !0, I ? (I = !1, p.each(o, y)) : p.each(u, A), p.each(c, A), r.resize.up()
      }, r.load = function(e) {
        a.then(e)
      }, r.destroy = function(e) {
        e = e || {}, I = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (E = e.domready), p.each(o, m), r.resize.off(), r.scroll.off(), r.redraw.off(), u = [], c = [], "pending" === a.state() && R()
      }, l(r.ready), R(), e.exports = window.Webflow = r
    },
    7624: function(e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("links", e.exports = function(e, t) {
        var n, a, r, o = {},
          u = e(window),
          c = i.env(),
          l = window.location,
          s = document.createElement("a"),
          d = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/;

        function g() {
          var e = u.scrollTop(),
            n = u.height();
          t.each(a, function(t) {
            if (!t.link.attr("hreflang")) {
              var i = t.link,
                a = t.sec,
                r = a.offset().top,
                o = a.outerHeight(),
                u = .5 * n,
                c = a.is(":visible") && r + o - u >= e && r + u <= e + n;
              t.active !== c && (t.active = c, E(i, d, c))
            }
          })
        }

        function E(e, t, n) {
          var i = e.hasClass(t);
          (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t))
        }
        return o.ready = o.design = o.preview = function() {
          n = c && i.env("design"), r = i.env("slug") || l.pathname || "", i.scroll.off(g), a = [];
          for (var t = document.links, o = 0; o < t.length; ++o) ! function(t) {
            if (!t.getAttribute("hreflang")) {
              var i = n && t.getAttribute("href-disabled") || t.getAttribute("href");
              if (s.href = i, !(i.indexOf(":") >= 0)) {
                var o = e(t);
                if (s.hash.length > 1 && s.host + s.pathname === l.host + l.pathname) {
                  if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                  var u = e(s.hash);
                  u.length && a.push({
                    link: o,
                    sec: u,
                    active: !1
                  });
                  return
                }
                "#" !== i && "" !== i && E(o, d, s.href === l.href || i === r || f.test(i) && p.test(r))
              }
            }
          }(t[o]);
          a.length && (i.scroll.on(g), g())
        }, o
      })
    },
    286: function(e, t, n) {
      "use strict";
      var i = n(3949);
      i.define("scroll", e.exports = function(e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          },
          n = window.location,
          a = ! function() {
            try {
              return !!window.frameElement
            } catch (e) {
              return !0
            }
          }() ? window.history : null,
          r = e(window),
          o = e(document),
          u = e(document.body),
          c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
            window.setTimeout(e, 15)
          },
          l = i.env("editor") ? ".w-editor-body" : "body",
          s = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
          d = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
          p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var g = /^#[a-zA-Z0-9][\w:.-]*$/;
        let E = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function I(e, t) {
          var n;
          switch (t) {
            case "add":
              (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
              break;
            case "remove":
              (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
          }
          e.toggleClass("wf-force-outline-none", "add" === t)
        }

        function y(t) {
          var o = t.currentTarget;
          if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))) {
            var l = g.test(o.hash) && o.host + o.pathname === n.host + n.pathname ? o.hash : "";
            if ("" !== l) {
              var d, f = e(l);
              f.length && (t && (t.preventDefault(), t.stopPropagation()), d = l, n.hash !== d && a && a.pushState && !(i.env.chrome && "file:" === n.protocol) && (a.state && a.state.hash) !== d && a.pushState({
                hash: d
              }, "", d), window.setTimeout(function() {
                ! function(t, n) {
                  var i = r.scrollTop(),
                    a = function(t) {
                      var n = e(s),
                        i = "fixed" === n.css("position") ? n.outerHeight() : 0,
                        a = t.offset().top - i;
                      if ("mid" === t.data("scroll")) {
                        var o = r.height() - i,
                          u = t.outerHeight();
                        u < o && (a -= Math.round((o - u) / 2))
                      }
                      return a
                    }(t);
                  if (i !== a) {
                    var o = function(e, t, n) {
                        if ("none" === document.body.getAttribute("data-wf-scroll-motion") || E.matches) return 0;
                        var i = 1;
                        return u.add(e).each(function(e, t) {
                          var n = parseFloat(t.getAttribute("data-scroll-time"));
                          !isNaN(n) && n >= 0 && (i = n)
                        }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * i
                      }(t, i, a),
                      l = Date.now(),
                      d = function() {
                        var e, t, r, u, s, f = Date.now() - l;
                        window.scroll(0, (e = i, t = a, (r = f) > (u = o) ? t : e + (t - e) * ((s = r / u) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= o ? c(d) : "function" == typeof n && n()
                      };
                    c(d)
                  }
                }(f, function() {
                  I(f, "add"), f.get(0).focus({
                    preventScroll: !0
                  }), I(f, "remove")
                })
              }, 300 * !t))
            }
          }
        }
        return {
          ready: function() {
            var {
              WF_CLICK_EMPTY: e,
              WF_CLICK_SCROLL: n
            } = t;
            o.on(n, f, y), o.on(e, d, function(e) {
              e.preventDefault()
            }), document.head.insertBefore(p, document.head.firstChild)
          }
        }
      })
    },
    3695: function(e, t, n) {
      "use strict";
      n(3949).define("touch", e.exports = function(e) {
        var t = {},
          n = window.getSelection;

        function i(t) {
          var i, a, r = !1,
            o = !1,
            u = Math.min(Math.round(.04 * window.innerWidth), 40);

          function c(e) {
            var t = e.touches;
            t && t.length > 1 || (r = !0, t ? (o = !0, i = t[0].clientX) : i = e.clientX, a = i)
          }

          function l(t) {
            if (r) {
              if (o && "mousemove" === t.type) {
                t.preventDefault(), t.stopPropagation();
                return
              }
              var i, c, l, s, f = t.touches,
                p = f ? f[0].clientX : t.clientX,
                g = p - a;
              a = p, Math.abs(g) > u && n && "" === String(n()) && (i = "swipe", c = t, l = {
                direction: g > 0 ? "right" : "left"
              }, s = e.Event(i, {
                originalEvent: c
              }), e(c.target).trigger(s, l), d())
            }
          }

          function s(e) {
            if (r && (r = !1, o && "mouseup" === e.type)) {
              e.preventDefault(), e.stopPropagation(), o = !1;
              return
            }
          }

          function d() {
            r = !1
          }
          t.addEventListener("touchstart", c, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", d, !1), t.addEventListener("mousedown", c, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", d, !1), this.destroy = function() {
            t.removeEventListener("touchstart", c, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", d, !1), t.removeEventListener("mousedown", c, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", d, !1), t = null
          }
        }
        return e.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        }, t.init = function(t) {
          return (t = "string" == typeof t ? e(t).get(0) : t) ? new i(t) : null
        }, t.instance = t.init(document), t
      })
    },
    3946: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        actionListPlaybackChanged: function() {
          return H
        },
        animationFrameChanged: function() {
          return V
        },
        clearRequested: function() {
          return G
        },
        elementStateChanged: function() {
          return Y
        },
        eventListenerAdded: function() {
          return D
        },
        eventStateChanged: function() {
          return x
        },
        instanceAdded: function() {
          return X
        },
        instanceRemoved: function() {
          return B
        },
        instanceStarted: function() {
          return j
        },
        mediaQueriesDefined: function() {
          return Q
        },
        parameterChanged: function() {
          return k
        },
        playbackRequested: function() {
          return F
        },
        previewRequested: function() {
          return P
        },
        rawDataImported: function() {
          return L
        },
        sessionInitialized: function() {
          return C
        },
        sessionStarted: function() {
          return w
        },
        sessionStopped: function() {
          return N
        },
        stopRequested: function() {
          return M
        },
        testFrameRendered: function() {
          return U
        },
        viewportWidthChanged: function() {
          return W
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: u,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: l,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: I,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: h,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: _,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: S,
          IX2_MEDIA_QUERIES_DEFINED: A
        } = r.IX2EngineActionTypes,
        {
          reifyState: R
        } = o.IX2VanillaUtils,
        L = e => ({
          type: u,
          payload: {
            ...R(e)
          }
        }),
        C = ({
          hasBoundaryNodes: e,
          reducedMotion: t
        }) => ({
          type: c,
          payload: {
            hasBoundaryNodes: e,
            reducedMotion: t
          }
        }),
        w = () => ({
          type: l
        }),
        N = () => ({
          type: s
        }),
        P = ({
          rawData: e,
          defer: t
        }) => ({
          type: d,
          payload: {
            defer: t,
            rawData: e
          }
        }),
        F = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: u,
          verbose: c,
          rawData: l
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: u,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: c,
            rawData: l
          }
        }),
        M = e => ({
          type: p,
          payload: {
            actionListId: e
          }
        }),
        G = () => ({
          type: g
        }),
        D = (e, t) => ({
          type: E,
          payload: {
            target: e,
            listenerParams: t
          }
        }),
        U = (e = 1) => ({
          type: I,
          payload: {
            step: e
          }
        }),
        x = (e, t) => ({
          type: y,
          payload: {
            stateKey: e,
            newState: t
          }
        }),
        V = (e, t) => ({
          type: m,
          payload: {
            now: e,
            parameters: t
          }
        }),
        k = (e, t) => ({
          type: T,
          payload: {
            key: e,
            value: t
          }
        }),
        X = e => ({
          type: h,
          payload: {
            ...e
          }
        }),
        j = (e, t) => ({
          type: b,
          payload: {
            instanceId: e,
            time: t
          }
        }),
        B = e => ({
          type: _,
          payload: {
            instanceId: e
          }
        }),
        Y = (e, t, n, i) => ({
          type: O,
          payload: {
            elementId: e,
            actionTypeId: t,
            current: n,
            actionItem: i
          }
        }),
        H = ({
          actionListId: e,
          isPlaying: t
        }) => ({
          type: v,
          payload: {
            actionListId: e,
            isPlaying: t
          }
        }),
        W = ({
          width: e,
          mediaQueries: t
        }) => ({
          type: S,
          payload: {
            width: e,
            mediaQueries: t
          }
        }),
        Q = () => ({
          type: A
        })
    },
    6011: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, a = {
        actions: function() {
          return l
        },
        destroy: function() {
          return g
        },
        init: function() {
          return p
        },
        setEnv: function() {
          return f
        },
        store: function() {
          return d
        }
      };
      for (var r in a) Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
      });
      let o = n(9516),
        u = (i = n(7243)) && i.__esModule ? i : {
          default: i
        },
        c = n(1970),
        l = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
            } return i.default = e, n && n.set(e, i), i
        }(n(3946));

      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (s = function(e) {
          return e ? n : t
        })(e)
      }
      let d = (0, o.createStore)(u.default);

      function f(e) {
        e() && (0, c.observeRequests)(d)
      }

      function p(e) {
        g(), (0, c.startEngine)({
          store: d,
          rawData: e,
          allowEvents: !0
        })
      }

      function g() {
        (0, c.stopEngine)(d)
      }
    },
    5012: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        elementContains: function() {
          return T
        },
        getChildElements: function() {
          return b
        },
        getClosestElement: function() {
          return O
        },
        getProperty: function() {
          return g
        },
        getQuerySelector: function() {
          return I
        },
        getRefType: function() {
          return v
        },
        getSiblingElements: function() {
          return _
        },
        getStyle: function() {
          return p
        },
        getValidDocument: function() {
          return y
        },
        isSiblingNode: function() {
          return h
        },
        matchSelector: function() {
          return E
        },
        queryDocument: function() {
          return m
        },
        setStyle: function() {
          return f
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = n(9468),
        o = n(7087),
        {
          ELEMENT_MATCHES: u
        } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: l,
          PLAIN_OBJECT: s,
          WF_PAGE: d
        } = o.IX2EngineConstants;

      function f(e, t, n) {
        e.style[t] = n
      }

      function p(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
      }

      function g(e, t) {
        return e[t]
      }

      function E(e) {
        return t => t[u](e)
      }

      function I({
        id: e,
        selector: t
      }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              i = n[0];
            if (t = n[1], i !== document.documentElement.getAttribute(d)) return null
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
        }
        return t
      }

      function y(e) {
        return null == e || e === document.documentElement.getAttribute(d) ? document : null
      }

      function m(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
      }

      function T(e, t) {
        return e.contains(t)
      }

      function h(e, t) {
        return e !== t && e.parentNode === t.parentNode
      }

      function b(e) {
        let t = [];
        for (let n = 0, {
            length: i
          } = e || []; n < i; n++) {
          let {
            children: i
          } = e[n], {
            length: a
          } = i;
          if (a)
            for (let e = 0; e < a; e++) t.push(i[e])
        }
        return t
      }

      function _(e = []) {
        let t = [],
          n = [];
        for (let i = 0, {
            length: a
          } = e; i < a; i++) {
          let {
            parentNode: a
          } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a)) continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r;) - 1 === e.indexOf(r) && t.push(r), r = r.nextElementSibling
        }
        return t
      }
      let O = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
        if (!document.documentElement.contains(e)) return null;
        let n = e;
        do {
          if (n[u] && n[u](t)) return n;
          n = n.parentNode
        } while (null != n);
        return null
      };

      function v(e) {
        return null != e && "object" == typeof e ? e instanceof Element ? l : s : null
      }
    },
    1970: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        observeRequests: function() {
          return K
        },
        startActionGroup: function() {
          return eg
        },
        startEngine: function() {
          return ei
        },
        stopActionGroup: function() {
          return ep
        },
        stopAllActionGroups: function() {
          return ef
        },
        stopEngine: function() {
          return ea
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = m(n(9777)),
        o = m(n(4738)),
        u = m(n(4659)),
        c = m(n(3452)),
        l = m(n(6633)),
        s = m(n(3729)),
        d = m(n(2397)),
        f = m(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        I = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
            } return i.default = e, n && n.set(e, i), i
        }(n(5012)),
        y = m(n(8955));

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (T = function(e) {
          return e ? n : t
        })(e)
      }
      let h = Object.keys(p.QuickEffectIds),
        b = e => h.includes(e),
        {
          COLON_DELIMITER: _,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: v,
          RENDER_GENERAL: S,
          W_MOD_IX: A
        } = p.IX2EngineConstants,
        {
          getAffectedElements: R,
          getElementId: L,
          getDestinationValues: C,
          observeStore: w,
          getInstanceId: N,
          renderHTMLElement: P,
          clearAllStyles: F,
          getMaxDurationItemIndex: M,
          getComputedStyle: G,
          getInstanceOrigin: D,
          reduceListToGroup: U,
          shouldNamespaceEventParameter: x,
          getNamespacedParameterId: V,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: X,
          clearObjectCache: j,
          stringifyTarget: B,
          mediaQueriesEqual: Y,
          shallowEqual: H
        } = g.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: Q,
          getPluginDuration: z
        } = g.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);

      function K(e) {
        w({
          store: e,
          select: ({
            ixRequest: e
          }) => e.preview,
          onChange: Z
        }), w({
          store: e,
          select: ({
            ixRequest: e
          }) => e.playback,
          onChange: ee
        }), w({
          store: e,
          select: ({
            ixRequest: e
          }) => e.stop,
          onChange: et
        }), w({
          store: e,
          select: ({
            ixRequest: e
          }) => e.clear,
          onChange: en
        })
      }

      function Z({
        rawData: e,
        defer: t
      }, n) {
        let i = () => {
          ei({
            store: n,
            rawData: e,
            allowEvents: !0
          }), J()
        };
        t ? setTimeout(i, 0) : i()
      }

      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
      }

      function ee(e, t) {
        let {
          actionTypeId: n,
          actionListId: i,
          actionItemId: a,
          eventId: r,
          allowEvents: o,
          immediate: u,
          testManual: c,
          verbose: l = !0
        } = e, {
          rawData: s
        } = e;
        if (i && a && s && u) {
          let e = s.actionLists[i];
          e && (s = U({
            actionList: e,
            actionItemId: a,
            rawData: s
          }))
        }
        if (ei({
            store: t,
            rawData: s,
            allowEvents: o,
            testManual: c
          }), i && n === p.ActionTypeConsts.GENERAL_START_ACTION || b(n)) {
          ep({
            store: t,
            actionListId: i
          }), ed({
            store: t,
            actionListId: i,
            eventId: r
          });
          let e = eg({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: u,
            verbose: l
          });
          l && e && t.dispatch((0, E.actionListPlaybackChanged)({
            actionListId: i,
            isPlaying: !u
          }))
        }
      }

      function et({
        actionListId: e
      }, t) {
        e ? ep({
          store: t,
          actionListId: e
        }) : ef({
          store: t
        }), ea(t)
      }

      function en(e, t) {
        ea(t), F({
          store: t,
          elementApi: I
        })
      }

      function ei({
        store: e,
        rawData: t,
        allowEvents: n,
        testManual: i
      }) {
        let {
          ixSession: a
        } = e.getState();
        if (t && e.dispatch((0, E.rawDataImported)(t)), !a.active) {
          (e.dispatch((0, E.sessionInitialized)({
            hasBoundaryNodes: !!document.querySelector(O),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
          })), n) && (function(e) {
            let {
              ixData: t
            } = e.getState(), {
              eventTypeMap: n
            } = t;
            eu(e), (0, d.default)(n, (t, n) => {
              let i = y.default[n];
              if (!i) return void console.warn(`IX2 event type not configured: ${n}`);
              ! function({
                logic: e,
                store: t,
                events: n
              }) {
                ! function(e) {
                  if (!q) return;
                  let t = {},
                    n = "";
                  for (let i in e) {
                    let {
                      eventTypeId: a,
                      target: r
                    } = e[i], o = I.getQuerySelector(r);
                    t[o] || (a === p.EventTypeConsts.MOUSE_CLICK || a === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[o] = !0, n += o + "{cursor: pointer;touch-action: manipulation;}")
                  }
                  if (n) {
                    let e = document.createElement("style");
                    e.textContent = n, document.body.appendChild(e)
                  }
                }(n);
                let {
                  types: i,
                  handler: a
                } = e, {
                  ixData: c
                } = t.getState(), {
                  actionLists: l
                } = c, s = ec(n, es);
                if (!(0, u.default)(s)) return;
                (0, d.default)(s, (e, i) => {
                  let a = n[i],
                    {
                      action: u,
                      id: s,
                      mediaQueries: d = c.mediaQueryKeys
                    } = a,
                    {
                      actionListId: f
                    } = u.config;
                  Y(d, c.mediaQueryKeys) || t.dispatch((0, E.mediaQueriesDefined)()), u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(a.config) ? a.config : [a.config]).forEach(n => {
                    let {
                      continuousParameterGroupId: i
                    } = n, a = (0, o.default)(l, `${f}.continuousParameterGroups`, []), u = (0, r.default)(a, ({
                      id: e
                    }) => e === i), c = (n.smoothing || 0) / 100, d = (n.restingState || 0) / 100;
                    u && e.forEach((e, i) => {
                      ! function({
                        store: e,
                        eventStateKey: t,
                        eventTarget: n,
                        eventId: i,
                        eventConfig: a,
                        actionListId: r,
                        parameterGroup: u,
                        smoothing: c,
                        restingValue: l
                      }) {
                        let {
                          ixData: s,
                          ixSession: d
                        } = e.getState(), {
                          events: f
                        } = s, g = f[i], {
                          eventTypeId: E
                        } = g, y = {}, m = {}, T = [], {
                          continuousActionGroups: h
                        } = u, {
                          id: b
                        } = u;
                        x(E, a) && (b = V(t, b));
                        let v = d.hasBoundaryNodes && n ? I.getClosestElement(n, O) : null;
                        h.forEach(e => {
                          let {
                            keyframe: t,
                            actionItems: i
                          } = e;
                          i.forEach(e => {
                            let {
                              actionTypeId: i
                            } = e, {
                              target: a
                            } = e.config;
                            if (!a) return;
                            let r = a.boundaryMode ? v : null,
                              o = B(a) + _ + i;
                            if (m[o] = function(e = [], t, n) {
                                let i, a = [...e];
                                return a.some((e, n) => e.keyframe === t && (i = n, !0)), null == i && (i = a.length, a.push({
                                  keyframe: t,
                                  actionItems: []
                                })), a[i].actionItems.push(n), a
                              }(m[o], t, e), !y[o]) {
                              y[o] = !0;
                              let {
                                config: t
                              } = e;
                              R({
                                config: t,
                                event: g,
                                eventTarget: n,
                                elementRoot: r,
                                elementApi: I
                              }).forEach(e => {
                                T.push({
                                  element: e,
                                  key: o
                                })
                              })
                            }
                          })
                        }), T.forEach(({
                          element: t,
                          key: n
                        }) => {
                          let a = m[n],
                            u = (0, o.default)(a, "[0].actionItems[0]", {}),
                            {
                              actionTypeId: s
                            } = u,
                            d = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (u.config?.target?.selectorGuids || []).length : W(s)) ? Q(s)?.(t, u) : null,
                            f = C({
                              element: t,
                              actionItem: u,
                              elementApi: I
                            }, d);
                          eE({
                            store: e,
                            element: t,
                            eventId: i,
                            actionListId: r,
                            actionItem: u,
                            destination: f,
                            continuous: !0,
                            parameterId: b,
                            actionGroups: a,
                            smoothing: c,
                            restingValue: l,
                            pluginInstance: d
                          })
                        })
                      }({
                        store: t,
                        eventStateKey: s + _ + i,
                        eventTarget: e,
                        eventId: s,
                        eventConfig: n,
                        actionListId: f,
                        parameterGroup: u,
                        smoothing: c,
                        restingValue: d
                      })
                    })
                  }), (u.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || b(u.actionTypeId)) && ed({
                    store: t,
                    actionListId: f,
                    eventId: s
                  })
                });
                let g = e => {
                    let {
                      ixSession: i
                    } = t.getState();
                    el(s, (r, o, u) => {
                      let l = n[o],
                        s = i.eventState[u],
                        {
                          action: d,
                          mediaQueries: f = c.mediaQueryKeys
                        } = l;
                      if (!k(f, i.mediaQueryKey)) return;
                      let g = (n = {}) => {
                        let i = a({
                          store: t,
                          element: r,
                          event: l,
                          eventConfig: n,
                          nativeEvent: e,
                          eventStateKey: u
                        }, s);
                        H(i, s) || t.dispatch((0, E.eventStateChanged)(u, i))
                      };
                      d.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(g) : g()
                    })
                  },
                  y = (0, f.default)(g, 12),
                  m = ({
                    target: e = document,
                    types: n,
                    throttle: i
                  }) => {
                    n.split(" ").filter(Boolean).forEach(n => {
                      let a = i ? y : g;
                      e.addEventListener(n, a), t.dispatch((0, E.eventListenerAdded)(e, [n, a]))
                    })
                  };
                Array.isArray(i) ? i.forEach(m) : "string" == typeof i && m(e)
              }({
                logic: i,
                store: e,
                events: t
              })
            });
            let {
              ixSession: i
            } = e.getState();
            i.eventListeners.length && function(e) {
              let t = () => {
                eu(e)
              };
              eo.forEach(n => {
                window.addEventListener(n, t), e.dispatch((0, E.eventListenerAdded)(window, [n, t]))
              }), t()
            }(e)
          }(e), function() {
            let {
              documentElement: e
            } = document; - 1 === e.className.indexOf(A) && (e.className += ` ${A}`)
          }(), e.getState().ixSession.hasDefinedMediaQueries && w({
            store: e,
            select: ({
              ixSession: e
            }) => e.mediaQueryKey,
            onChange: () => {
              ea(e), F({
                store: e,
                elementApi: I
              }), ei({
                store: e,
                allowEvents: !0
              }), J()
            }
          }));
          e.dispatch((0, E.sessionStarted)()),
            function(e, t) {
              let n = i => {
                let {
                  ixSession: a,
                  ixParameters: r
                } = e.getState();
                if (a.active)
                  if (e.dispatch((0, E.animationFrameChanged)(i, r)), t) {
                    let t = w({
                      store: e,
                      select: ({
                        ixSession: e
                      }) => e.tick,
                      onChange: e => {
                        n(e), t()
                      }
                    })
                  } else requestAnimationFrame(n)
              };
              n(window.performance.now())
            }(e, i)
        }
      }

      function ea(e) {
        let {
          ixSession: t
        } = e.getState();
        if (t.active) {
          let {
            eventListeners: n
          } = t;
          n.forEach(er), j(), e.dispatch((0, E.sessionStopped)())
        }
      }

      function er({
        target: e,
        listenerParams: t
      }) {
        e.removeEventListener.apply(e, t)
      }
      let eo = ["resize", "orientationchange"];

      function eu(e) {
        let {
          ixSession: t,
          ixData: n
        } = e.getState(), i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let {
            mediaQueries: t
          } = n;
          e.dispatch((0, E.viewportWidthChanged)({
            width: i,
            mediaQueries: t
          }))
        }
      }
      let ec = (e, t) => (0, c.default)((0, s.default)(e, t), l.default),
        el = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + _ + i)
            })
          })
        },
        es = e => R({
          config: {
            target: e.target,
            targets: e.targets
          },
          elementApi: I
        });

      function ed({
        store: e,
        actionListId: t,
        eventId: n
      }) {
        let {
          ixData: i,
          ixSession: a
        } = e.getState(), {
          actionLists: r,
          events: u
        } = i, c = u[n], l = r[t];
        if (l && l.useFirstGroupAsInitialState) {
          let r = (0, o.default)(l, "actionItemGroups[0].actionItems", []);
          if (!k((0, o.default)(c, "mediaQueries", i.mediaQueryKeys), a.mediaQueryKey)) return;
          r.forEach(i => {
            let {
              config: a,
              actionTypeId: r
            } = i, o = R({
              config: a?.target?.useEventTarget === !0 && a?.target?.objectId == null ? {
                target: c.target,
                targets: c.targets
              } : a,
              event: c,
              elementApi: I
            }), u = W(r);
            o.forEach(a => {
              let o = u ? Q(r)?.(a, i) : null;
              eE({
                destination: C({
                  element: a,
                  actionItem: i,
                  elementApi: I
                }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o
              })
            })
          })
        }
      }

      function ef({
        store: e
      }) {
        let {
          ixInstances: t
        } = e.getState();
        (0, d.default)(t, t => {
          if (!t.continuous) {
            let {
              actionListId: n,
              verbose: i
            } = t;
            eI(t, e), i && e.dispatch((0, E.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !1
            }))
          }
        })
      }

      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a
      }) {
        let {
          ixInstances: r,
          ixSession: u
        } = e.getState(), c = u.hasBoundaryNodes && n ? I.getClosestElement(n, O) : null;
        (0, d.default)(r, n => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            u = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && u) {
            if (c && r && !I.elementContains(c, n.element)) return;
            eI(n, e), n.verbose && e.dispatch((0, E.actionListPlaybackChanged)({
              actionListId: a,
              isPlaying: !1
            }))
          }
        })
      }

      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: u,
        verbose: c
      }) {
        let {
          ixData: l,
          ixSession: s
        } = e.getState(), {
          events: d
        } = l, f = d[t] || {}, {
          mediaQueries: p = l.mediaQueryKeys
        } = f, {
          actionItemGroups: g,
          useFirstGroupAsInitialState: E
        } = (0, o.default)(l, `actionLists.${a}`, {});
        if (!g || !g.length) return !1;
        r >= g.length && (0, o.default)(f, "config.loop") && (r = 0), 0 === r && E && r++;
        let y = (0 === r || 1 === r && E) && b(f.action?.actionTypeId) ? f.config.delay : void 0,
          m = (0, o.default)(g, [r, "actionItems"], []);
        if (!m.length || !k(p, s.mediaQueryKey)) return !1;
        let T = s.hasBoundaryNodes && n ? I.getClosestElement(n, O) : null,
          h = M(m),
          _ = !1;
        return m.forEach((o, l) => {
          let {
            config: s,
            actionTypeId: d
          } = o, p = W(d), {
            target: g
          } = s;
          g && R({
            config: s,
            event: f,
            eventTarget: n,
            elementRoot: g.boundaryMode ? T : null,
            elementApi: I
          }).forEach((s, f) => {
            let g = p ? Q(d)?.(s, o) : null,
              E = p ? z(d)(s, o) : null;
            _ = !0;
            let m = G({
                element: s,
                actionItem: o
              }),
              T = C({
                element: s,
                actionItem: o,
                elementApi: I
              }, g);
            eE({
              store: e,
              element: s,
              actionItem: o,
              eventId: t,
              eventTarget: n,
              eventStateKey: i,
              actionListId: a,
              groupIndex: r,
              isCarrier: h === l && 0 === f,
              computedStyle: m,
              destination: T,
              immediate: u,
              verbose: c,
              pluginInstance: g,
              pluginDuration: E,
              instanceDelay: y
            })
          })
        }), _
      }

      function eE(e) {
        let t, {
            store: n,
            computedStyle: i,
            ...a
          } = e,
          {
            element: r,
            actionItem: o,
            immediate: u,
            pluginInstance: c,
            continuous: l,
            restingValue: s,
            eventId: d
          } = a,
          f = N(),
          {
            ixElements: g,
            ixSession: y,
            ixData: m
          } = n.getState(),
          T = L(g, r),
          {
            refState: h
          } = g[T] || {},
          b = I.getRefType(r),
          _ = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (_ && l) switch (m.events[d]?.eventTypeId) {
          case p.EventTypeConsts.MOUSE_MOVE:
          case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            t = s;
            break;
          default:
            t = .5
        }
        let O = D(r, h, i, o, I, c);
        if (n.dispatch((0, E.instanceAdded)({
            instanceId: f,
            elementId: T,
            origin: O,
            refType: b,
            skipMotion: _,
            skipToValue: t,
            ...a
          })), ey(document.body, "ix2-animation-started", f), u) return void
        function(e, t) {
          let {
            ixParameters: n
          } = e.getState();
          e.dispatch((0, E.instanceStarted)(t, 0)), e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
          let {
            ixInstances: i
          } = e.getState();
          em(i[t], e)
        }(n, f);
        w({
          store: n,
          select: ({
            ixInstances: e
          }) => e[f],
          onChange: em
        }), l || n.dispatch((0, E.instanceStarted)(f, y.tick))
      }

      function eI(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
        });
        let {
          elementId: n,
          actionItem: i
        } = e, {
          ixElements: a
        } = t.getState(), {
          ref: r,
          refType: o
        } = a[n] || {};
        o === v && X(r, i, I), t.dispatch((0, E.instanceRemoved)(e.id))
      }

      function ey(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i)
      }

      function em(e, t) {
        let {
          active: n,
          continuous: i,
          complete: a,
          elementId: r,
          actionItem: o,
          actionTypeId: u,
          renderType: c,
          current: l,
          groupIndex: s,
          eventId: d,
          eventTarget: f,
          eventStateKey: p,
          actionListId: g,
          isCarrier: y,
          styleProp: m,
          verbose: T,
          pluginInstance: h
        } = e, {
          ixData: b,
          ixSession: _
        } = t.getState(), {
          events: O
        } = b, {
          mediaQueries: A = b.mediaQueryKeys
        } = O && O[d] ? O[d] : {};
        if (k(A, _.mediaQueryKey) && (i || n || a)) {
          if (l || c === S && a) {
            t.dispatch((0, E.elementStateChanged)(r, u, l, o));
            let {
              ixElements: e
            } = t.getState(), {
              ref: n,
              refType: i,
              refState: a
            } = e[r] || {}, s = a && a[u];
            (i === v || W(u)) && P(n, a, s, d, o, m, I, c, h)
          }
          if (a) {
            if (y) {
              let e = eg({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: s + 1,
                verbose: T
              });
              T && !e && t.dispatch((0, E.actionListPlaybackChanged)({
                actionListId: g,
                isPlaying: !1
              }))
            }
            eI(e, t)
          }
        }
      }
    },
    8955: function(e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return ep
        }
      });
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        u = n(7087),
        c = n(1970),
        l = n(3946),
        s = n(9468);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      let {
        MOUSE_CLICK: f,
        MOUSE_SECOND_CLICK: p,
        MOUSE_DOWN: g,
        MOUSE_UP: E,
        MOUSE_OVER: I,
        MOUSE_OUT: y,
        DROPDOWN_CLOSE: m,
        DROPDOWN_OPEN: T,
        SLIDER_ACTIVE: h,
        SLIDER_INACTIVE: b,
        TAB_ACTIVE: _,
        TAB_INACTIVE: O,
        NAVBAR_CLOSE: v,
        NAVBAR_OPEN: S,
        MOUSE_MOVE: A,
        PAGE_SCROLL_DOWN: R,
        SCROLL_INTO_VIEW: L,
        SCROLL_OUT_OF_VIEW: C,
        PAGE_SCROLL_UP: w,
        SCROLLING_IN_VIEW: N,
        PAGE_FINISH: P,
        ECOMMERCE_CART_CLOSE: F,
        ECOMMERCE_CART_OPEN: M,
        PAGE_START: G,
        PAGE_SCROLL: D
      } = u.EventTypeConsts, U = "COMPONENT_ACTIVE", x = "COMPONENT_INACTIVE", {
        COLON_DELIMITER: V
      } = u.IX2EngineConstants, {
        getNamespacedParameterId: k
      } = s.IX2VanillaUtils, X = e => t => !!("object" == typeof t && e(t)) || t, j = X(({
        element: e,
        nativeEvent: t
      }) => e === t.target), B = X(({
        element: e,
        nativeEvent: t
      }) => e.contains(t.target)), Y = (0, a.default)([j, B]), H = (e, t) => {
        if (t) {
          let {
            ixData: n
          } = e.getState(), {
            events: i
          } = n, a = i[t];
          if (a && !ee[a.eventTypeId]) return a
        }
        return null
      }, W = ({
        store: e,
        event: t
      }) => {
        let {
          action: n
        } = t, {
          autoStopEventId: i
        } = n.config;
        return !!H(e, i)
      }, Q = ({
        store: e,
        event: t,
        element: n,
        eventStateKey: i
      }, a) => {
        let {
          action: o,
          id: u
        } = t, {
          actionListId: l,
          autoStopEventId: s
        } = o.config, d = H(e, s);
        return d && (0, c.stopActionGroup)({
          store: e,
          eventId: s,
          eventTarget: n,
          eventStateKey: s + V + i.split(V)[1],
          actionListId: (0, r.default)(d, "action.config.actionListId")
        }), (0, c.stopActionGroup)({
          store: e,
          eventId: u,
          eventTarget: n,
          eventStateKey: i,
          actionListId: l
        }), (0, c.startActionGroup)({
          store: e,
          eventId: u,
          eventTarget: n,
          eventStateKey: i,
          actionListId: l
        }), a
      }, z = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i, $ = {
        handler: z(Y, Q)
      }, q = {
        ...$,
        types: [U, x].join(" ")
      }, K = [{
        target: window,
        types: "resize orientationchange",
        throttle: !0
      }, {
        target: document,
        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
        throttle: !0
      }], Z = "mouseover mouseout", J = {
        types: K
      }, ee = {
        PAGE_START: G,
        PAGE_FINISH: P
      }, et = (() => {
        let e = void 0 !== window.pageXOffset,
          t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : t.scrollLeft,
          scrollTop: e ? window.pageYOffset : t.scrollTop,
          stiffScrollTop: (0, o.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
          scrollWidth: t.scrollWidth,
          scrollHeight: t.scrollHeight,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        })
      })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ei = ({
        element: e,
        nativeEvent: t
      }) => {
        let {
          type: n,
          target: i,
          relatedTarget: a
        } = t, r = e.contains(i);
        if ("mouseover" === n && r) return !0;
        let o = e.contains(a);
        return "mouseout" === n && !!r && !!o
      }, ea = e => {
        let {
          element: t,
          event: {
            config: n
          }
        } = e, {
          clientWidth: i,
          clientHeight: a
        } = et(), r = n.scrollOffsetValue, o = "PX" === n.scrollOffsetUnit ? r : a * (r || 0) / 100;
        return en(t.getBoundingClientRect(), {
          left: 0,
          top: o,
          right: i,
          bottom: a - o
        })
      }, er = e => (t, n) => {
        let {
          type: i
        } = t.nativeEvent, a = -1 !== [U, x].indexOf(i) ? i === U : n.isActive, r = {
          ...n,
          isActive: a
        };
        return (!n || r.isActive !== n.isActive) && e(t, r) || r
      }, eo = e => (t, n) => {
        let i = {
          elementHovered: ei(t)
        };
        return (n ? i.elementHovered !== n.elementHovered : i.elementHovered) && e(t, i) || i
      }, eu = e => (t, n = {}) => {
        let i, a, {
            stiffScrollTop: r,
            scrollHeight: o,
            innerHeight: u
          } = et(),
          {
            event: {
              config: c,
              eventTypeId: l
            }
          } = t,
          {
            scrollOffsetValue: s,
            scrollOffsetUnit: d
          } = c,
          f = o - u,
          p = Number((r / f).toFixed(2));
        if (n && n.percentTop === p) return n;
        let g = ("PX" === d ? s : u * (s || 0) / 100) / f,
          E = 0;
        n && (i = p > n.percentTop, E = (a = n.scrollingDown !== i) ? p : n.anchorTop);
        let I = l === R ? p >= E + g : p <= E - g,
          y = {
            ...n,
            percentTop: p,
            inBounds: I,
            anchorTop: E,
            scrollingDown: i
          };
        return n && I && (a || y.inBounds !== n.inBounds) && e(t, y) || y
      }, ec = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, el = e => (t, n = {
        clickCount: 0
      }) => {
        let i = {
          clickCount: n.clickCount % 2 + 1
        };
        return i.clickCount !== n.clickCount && e(t, i) || i
      }, es = (e = !0) => ({
        ...q,
        handler: z(e ? Y : j, er((e, t) => t.isActive ? $.handler(e, t) : t))
      }), ed = (e = !0) => ({
        ...q,
        handler: z(e ? Y : j, er((e, t) => t.isActive ? t : $.handler(e, t)))
      }), ef = {
        ...J,
        handler: (i = (e, t) => {
          let {
            elementVisible: n
          } = t, {
            event: i,
            store: a
          } = e, {
            ixData: r
          } = a.getState(), {
            events: o
          } = r;
          return !o[i.action.config.autoStopEventId] && t.triggered ? t : i.eventTypeId === L === n ? (Q(e), {
            ...t,
            triggered: !0
          }) : t
        }, (e, t) => {
          let n = {
            ...t,
            elementVisible: ea(e)
          };
          return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && i(e, n) || n
        })
      }, ep = {
        [h]: es(),
        [b]: ed(),
        [T]: es(),
        [m]: ed(),
        [S]: es(!1),
        [v]: ed(!1),
        [_]: es(),
        [O]: ed(),
        [M]: {
          types: "ecommerce-cart-open",
          handler: z(Y, Q)
        },
        [F]: {
          types: "ecommerce-cart-close",
          handler: z(Y, Q)
        },
        [f]: {
          types: "click",
          handler: z(Y, el((e, {
            clickCount: t
          }) => {
            W(e) ? 1 === t && Q(e) : Q(e)
          }))
        },
        [p]: {
          types: "click",
          handler: z(Y, el((e, {
            clickCount: t
          }) => {
            2 === t && Q(e)
          }))
        },
        [g]: {
          ...$,
          types: "mousedown"
        },
        [E]: {
          ...$,
          types: "mouseup"
        },
        [I]: {
          types: Z,
          handler: z(Y, eo((e, t) => {
            t.elementHovered && Q(e)
          }))
        },
        [y]: {
          types: Z,
          handler: z(Y, eo((e, t) => {
            t.elementHovered || Q(e)
          }))
        },
        [A]: {
          types: "mousemove mouseout scroll",
          handler: ({
            store: e,
            element: t,
            eventConfig: n,
            nativeEvent: i,
            eventStateKey: a
          }, r = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            let {
              basedOn: o,
              selectedAxis: c,
              continuousParameterGroupId: s,
              reverse: d,
              restingState: f = 0
            } = n, {
              clientX: p = r.clientX,
              clientY: g = r.clientY,
              pageX: E = r.pageX,
              pageY: I = r.pageY
            } = i, y = "X_AXIS" === c, m = "mouseout" === i.type, T = f / 100, h = s, b = !1;
            switch (o) {
              case u.EventBasedOn.VIEWPORT:
                T = y ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case u.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: n,
                  scrollHeight: i
                } = et();
                T = y ? Math.min(e + E, n) / n : Math.min(t + I, i) / i;
                break
              }
              case u.EventBasedOn.ELEMENT:
              default: {
                h = k(a, s);
                let e = 0 === i.type.indexOf("mouse");
                if (e && !0 !== Y({
                    element: t,
                    nativeEvent: i
                  })) break;
                let n = t.getBoundingClientRect(),
                  {
                    left: r,
                    top: o,
                    width: u,
                    height: c
                  } = n;
                if (!e && !ec({
                    left: p,
                    top: g
                  }, n)) break;
                b = !0, T = y ? (p - r) / u : (g - o) / c
              }
            }
            return m && (T > .95 || T < .05) && (T = Math.round(T)), (o !== u.EventBasedOn.ELEMENT || b || b !== r.elementHovered) && (T = d ? 1 - T : T, e.dispatch((0, l.parameterChanged)(h, T))), {
              elementHovered: b,
              clientX: p,
              clientY: g,
              pageX: E,
              pageY: I
            }
          }
        },
        [D]: {
          types: K,
          handler: ({
            store: e,
            eventConfig: t
          }) => {
            let {
              continuousParameterGroupId: n,
              reverse: i
            } = t, {
              scrollTop: a,
              scrollHeight: r,
              clientHeight: o
            } = et(), u = a / (r - o);
            u = i ? 1 - u : u, e.dispatch((0, l.parameterChanged)(n, u))
          }
        },
        [N]: {
          types: K,
          handler: ({
            element: e,
            store: t,
            eventConfig: n,
            eventStateKey: i
          }, a = {
            scrollPercent: 0
          }) => {
            let {
              scrollLeft: r,
              scrollTop: o,
              scrollWidth: c,
              scrollHeight: s,
              clientHeight: d
            } = et(), {
              basedOn: f,
              selectedAxis: p,
              continuousParameterGroupId: g,
              startsEntering: E,
              startsExiting: I,
              addEndOffset: y,
              addStartOffset: m,
              addOffsetValue: T = 0,
              endOffsetValue: h = 0
            } = n;
            if (f === u.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? r / c : o / s;
              return e !== a.scrollPercent && t.dispatch((0, l.parameterChanged)(g, e)), {
                scrollPercent: e
              }
            } {
              let n = k(i, g),
                r = e.getBoundingClientRect(),
                o = (m ? T : 0) / 100,
                u = (y ? h : 0) / 100;
              o = E ? o : 1 - o, u = I ? u : 1 - u;
              let c = r.top + Math.min(r.height * o, d),
                f = Math.min(d + (r.top + r.height * u - c), s),
                p = Math.min(Math.max(0, d - c), f) / f;
              return p !== a.scrollPercent && t.dispatch((0, l.parameterChanged)(n, p)), {
                scrollPercent: p
              }
            }
          }
        },
        [L]: ef,
        [C]: ef,
        [R]: {
          ...J,
          handler: eu((e, t) => {
            t.scrollingDown && Q(e)
          })
        },
        [w]: {
          ...J,
          handler: eu((e, t) => {
            t.scrollingDown || Q(e)
          })
        },
        [P]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: z(j, (e, t) => {
            let n = {
              finished: "complete" === document.readyState
            };
            return n.finished && !(t && t.finshed) && Q(e), n
          })
        },
        [G]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: z(j, (e, t) => (t || Q(e), {
            started: !0
          }))
        }
      }
    },
    4609: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixData", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let {
        IX2_RAW_DATA_IMPORTED: i
      } = n(7087).IX2EngineActionTypes, a = (e = Object.freeze({}), t) => t.type === i ? t.payload.ixData || Object.freeze({}) : e
    },
    7718: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixInstances", {
        enumerable: !0,
        get: function() {
          return b
        }
      });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: u,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: l,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g
        } = a.IX2EasingUtils,
        {
          RENDER_GENERAL: E
        } = i.IX2EngineConstants,
        {
          getItemConfigByKey: I,
          getRenderType: y,
          getStyleProp: m
        } = a.IX2VanillaUtils,
        T = (e, t) => {
          let n, i, a, o, {
              position: u,
              parameterId: c,
              actionGroups: l,
              destinationKeys: s,
              smoothing: d,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: y,
              skipMotion: m,
              skipToValue: T
            } = e,
            {
              parameters: h
            } = t.payload,
            b = Math.max(1 - d, .01),
            _ = h[c];
          null == _ && (b = 1, _ = g);
          let O = f((Math.max(_, 0) || 0) - u),
            v = m ? T : f(u + O * b),
            S = 100 * v;
          if (v === u && e.current) return e;
          for (let e = 0, {
              length: t
            } = l; e < t; e++) {
            let {
              keyframe: t,
              actionItems: r
            } = l[e];
            if (0 === e && (n = r[0]), S >= t) {
              n = r[0];
              let u = l[e + 1],
                c = u && S !== t;
              i = c ? u.actionItems[0] : null, c && (a = t / 100, o = (u.keyframe - t) / 100)
            }
          }
          let A = {};
          if (n && !i)
            for (let e = 0, {
                length: t
              } = s; e < t; e++) {
              let t = s[e];
              A[t] = I(E, t, n.config)
            } else if (n && i && void 0 !== a && void 0 !== o) {
              let e = (v - a) / o,
                t = p(n.config.easing, e, y);
              for (let e = 0, {
                  length: a
                } = s; e < a; e++) {
                let a = s[e],
                  r = I(E, a, n.config),
                  o = (I(E, a, i.config) - r) * t + r;
                A[a] = o
              }
            } return (0, r.merge)(e, {
            position: v,
            current: A
          })
        },
        h = (e, t) => {
          let {
            active: n,
            origin: i,
            start: a,
            immediate: o,
            renderType: u,
            verbose: c,
            actionItem: l,
            destination: s,
            destinationKeys: d,
            pluginDuration: g,
            instanceDelay: I,
            customEasingFn: y,
            skipMotion: m
          } = e, T = l.config.easing, {
            duration: h,
            delay: b
          } = l.config;
          null != g && (h = g), b = null != I ? I : b, u === E ? h = 0 : (o || m) && (h = b = 0);
          let {
            now: _
          } = t.payload;
          if (n && i) {
            let t = _ - (a + b);
            if (c) {
              let t = h + b,
                n = f(Math.min(Math.max(0, (_ - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n)
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / h), 1)),
              o = p(T, n, y),
              u = {},
              l = null;
            return d.length && (l = d.reduce((e, t) => {
              let n = s[t],
                a = parseFloat(i[t]) || 0,
                r = parseFloat(n) - a;
              return e[t] = r * o + a, e
            }, {})), u.current = l, u.position = n, 1 === n && (u.active = !1, u.complete = !0), (0, r.merge)(e, u)
          }
          return e
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case u:
              return Object.freeze({});
            case c: {
              let {
                instanceId: n,
                elementId: i,
                actionItem: a,
                eventId: o,
                eventTarget: u,
                eventStateKey: c,
                actionListId: l,
                groupIndex: s,
                isCarrier: d,
                origin: f,
                destination: p,
                immediate: E,
                verbose: I,
                continuous: T,
                parameterId: h,
                actionGroups: b,
                smoothing: _,
                restingValue: O,
                pluginInstance: v,
                pluginDuration: S,
                instanceDelay: A,
                skipMotion: R,
                skipToValue: L
              } = t.payload, {
                actionTypeId: C
              } = a, w = y(C), N = m(w, C), P = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]), {
                easing: F
              } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: I,
                current: null,
                actionItem: a,
                actionTypeId: C,
                eventId: o,
                eventTarget: u,
                eventStateKey: c,
                actionListId: l,
                groupIndex: s,
                renderType: w,
                isCarrier: d,
                styleProp: N,
                continuous: T,
                parameterId: h,
                actionGroups: b,
                smoothing: _,
                restingValue: O,
                pluginInstance: v,
                pluginDuration: S,
                instanceDelay: A,
                skipMotion: R,
                skipToValue: L,
                customEasingFn: Array.isArray(F) && 4 === F.length ? g(F) : void 0
              })
            }
            case l: {
              let {
                instanceId: n,
                time: i
              } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i
              })
            }
            case s: {
              let {
                instanceId: n
              } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                {
                  length: r
                } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r])
              }
              return i
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                {
                  length: a
                } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  u = e[a],
                  c = u.continuous ? T : h;
                n = (0, r.set)(n, a, c(u, t))
              }
              return n
            }
            default:
              return e
          }
        }
    },
    1540: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixParameters", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let {
        IX2_RAW_DATA_IMPORTED: i,
        IX2_SESSION_STOPPED: a,
        IX2_PARAMETER_CHANGED: r
      } = n(7087).IX2EngineActionTypes, o = (e = {}, t) => {
        switch (t.type) {
          case i:
            return t.payload.ixParameters || {};
          case a:
            return {};
          case r: {
            let {
              key: n,
              value: i
            } = t.payload;
            return e[n] = i, e
          }
          default:
            return e
        }
      }
    },
    7243: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return d
        }
      });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        u = n(9468),
        c = n(7718),
        l = n(1540),
        {
          ixElements: s
        } = u.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: l.ixParameters
        })
    },
    628: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixRequest", {
        enumerable: !0,
        get: function() {
          return d
        }
      });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: c
        } = i.IX2EngineActionTypes,
        l = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
        },
        s = Object.create(null, {
          [r]: {
            value: "preview"
          },
          [o]: {
            value: "playback"
          },
          [u]: {
            value: "stop"
          },
          [c]: {
            value: "clear"
          }
        }),
        d = (e = l, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, a.setIn)(e, [n], {
              ...t.payload
            })
          }
          return e
        }
    },
    5862: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixSession", {
        enumerable: !0,
        get: function() {
          return I
        }
      });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: u,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: l,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g
        } = i.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
        },
        I = (e = E, t) => {
          switch (t.type) {
            case r: {
              let {
                hasBoundaryNodes: n,
                reducedMotion: i
              } = t.payload;
              return (0, a.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: i
              })
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case u: {
              let {
                payload: {
                  step: n = 20
                }
              } = t;
              return (0, a.set)(e, "tick", e.tick + n)
            }
            case c:
              return E;
            case d: {
              let {
                payload: {
                  now: n
                }
              } = t;
              return (0, a.set)(e, "tick", n)
            }
            case l: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n)
            }
            case s: {
              let {
                stateKey: n,
                newState: i
              } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i)
            }
            case f: {
              let {
                actionListId: n,
                isPlaying: i
              } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i)
            }
            case p: {
              let {
                width: n,
                mediaQueries: i
              } = t.payload, r = i.length, o = null;
              for (let e = 0; e < r; e++) {
                let {
                  key: t,
                  min: a,
                  max: r
                } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break
                }
              }
              return (0, a.merge)(e, {
                viewportWidth: n,
                mediaQueryKey: o
              })
            }
            case g:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e
          }
        }
    },
    7377: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return s
        },
        createPluginInstance: function() {
          return c
        },
        getPluginConfig: function() {
          return a
        },
        getPluginDestination: function() {
          return u
        },
        getPluginDuration: function() {
          return r
        },
        getPluginOrigin: function() {
          return o
        },
        renderPlugin: function() {
          return l
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = e => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
        },
        o = e => e || {
          value: 0
        },
        u = e => ({
          value: e.value
        }),
        c = e => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n
        },
        l = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i)
        },
        s = e => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop()
        }
    },
    2570: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return g
        },
        createPluginInstance: function() {
          return f
        },
        getPluginConfig: function() {
          return c
        },
        getPluginDestination: function() {
          return d
        },
        getPluginDuration: function() {
          return l
        },
        getPluginOrigin: function() {
          return s
        },
        renderPlugin: function() {
          return p
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = e => document.querySelector(`[data-w-id="${e}"]`),
        u = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        l = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            {
              inputs: i = {}
            } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n
        },
        d = e => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null
        },
        p = (e, {
          PLUGIN_RIVE: t
        }, n) => {
          let i = u();
          if (!i) return;
          let o = i.getInstance(e),
            c = i.rive.StateMachineInputType,
            {
              name: l,
              inputs: s = {}
            } = n.config.value || {};

          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t)
              };
              e?.on("load", t)
            }

            function n() {
              let n = e.stateMachineInputs(l);
              if (null != n) {
                if (e.isPlaying || e.play(l, !1), a in s || r in s) {
                  let t = e.layout,
                    n = s[a] ?? t.fit,
                    i = s[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) && (e.layout = t.copyWith({
                    fit: n,
                    alignment: i
                  }))
                }
                for (let e in s) {
                  if (e === a || e === r) continue;
                  let i = n.find(t => t.name === e);
                  if (null != i) switch (i.type) {
                    case c.Boolean:
                      null != s[e] && (i.value = !!s[e]);
                      break;
                    case c.Number: {
                      let n = t[e];
                      null != n && (i.value = n);
                      break
                    }
                    case c.Trigger:
                      s[e] && i.fire()
                  }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d)
        },
        g = (e, t) => null
    },
    2866: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return g
        },
        createPluginInstance: function() {
          return f
        },
        getPluginConfig: function() {
          return u
        },
        getPluginDestination: function() {
          return d
        },
        getPluginDuration: function() {
          return c
        },
        getPluginOrigin: function() {
          return s
        },
        renderPlugin: function() {
          return p
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = e => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter(e => !t.includes(e)),
        u = (e, t) => e.value[t],
        c = () => null,
        l = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => (e[t] = l[t], e), e) : e
          }
          return n.reduce((e, t) => (e[t] = l[t], e), {})
        },
        d = e => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            u = e => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let {
                PLUGIN_SPLINE: i
              } = t;
              null != i.positionX && (n.position.x = i.positionX), null != i.positionY && (n.position.y = i.positionY), null != i.positionZ && (n.position.z = i.positionZ), null != i.rotationX && (n.rotation.x = i.rotationX), null != i.rotationY && (n.rotation.y = i.rotationY), null != i.rotationZ && (n.rotation.z = i.rotationZ), null != i.scaleX && (n.scale.x = i.scaleX), null != i.scaleY && (n.scale.y = i.scaleY), null != i.scaleZ && (n.scale.z = i.scaleZ)
            };
          a ? u(a.spline) : i.setLoadHandler(e, u)
        },
        g = () => null
    },
    1407: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        clearPlugin: function() {
          return p
        },
        createPluginInstance: function() {
          return s
        },
        getPluginConfig: function() {
          return o
        },
        getPluginDestination: function() {
          return l
        },
        getPluginDuration: function() {
          return u
        },
        getPluginOrigin: function() {
          return c
        },
        renderPlugin: function() {
          return f
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = n(380),
        o = (e, t) => e.value[t],
        u = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size ? {
            size: parseInt(a, 10)
          } : "%" === n.unit || "-" === n.unit ? {
            size: parseFloat(a)
          } : null != n.red && null != n.green && null != n.blue ? (0, r.normalizeColor)(a) : void 0
        },
        l = e => e.value,
        s = () => null,
        d = {
          color: {
            match: ({
              red: e,
              green: t,
              blue: n,
              alpha: i
            }) => [e, t, n, i].every(e => null != e),
            getValue: ({
              red: e,
              green: t,
              blue: n,
              alpha: i
            }) => `rgba(${e}, ${t}, ${n}, ${i})`
          },
          size: {
            match: ({
              size: e
            }) => null != e,
            getValue: ({
              size: e
            }, t) => "-" === t ? e : `${e}${t}`
          }
        },
        f = (e, t, n) => {
          let {
            target: {
              objectId: i
            },
            value: {
              unit: a
            }
          } = n.config, r = t.PLUGIN_VARIABLE, o = Object.values(d).find(e => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a))
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n)
        }
    },
    3690: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "pluginMethodMap", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let i = n(7087),
        a = l(n(7377)),
        r = l(n(2866)),
        o = l(n(2570)),
        u = l(n(1407));

      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (c = function(e) {
          return e ? n : t
        })(e)
      }

      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
          } return i.default = e, n && n.set(e, i), i
      }
      let s = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...a
        }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, {
          ...r
        }],
        [i.ActionTypeConsts.PLUGIN_RIVE, {
          ...o
        }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...u
        }]
      ])
    },
    8023: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
          return h
        },
        IX2_ANIMATION_FRAME_CHANGED: function() {
          return g
        },
        IX2_CLEAR_REQUESTED: function() {
          return d
        },
        IX2_ELEMENT_STATE_CHANGED: function() {
          return T
        },
        IX2_EVENT_LISTENER_ADDED: function() {
          return f
        },
        IX2_EVENT_STATE_CHANGED: function() {
          return p
        },
        IX2_INSTANCE_ADDED: function() {
          return I
        },
        IX2_INSTANCE_REMOVED: function() {
          return m
        },
        IX2_INSTANCE_STARTED: function() {
          return y
        },
        IX2_MEDIA_QUERIES_DEFINED: function() {
          return _
        },
        IX2_PARAMETER_CHANGED: function() {
          return E
        },
        IX2_PLAYBACK_REQUESTED: function() {
          return l
        },
        IX2_PREVIEW_REQUESTED: function() {
          return c
        },
        IX2_RAW_DATA_IMPORTED: function() {
          return a
        },
        IX2_SESSION_INITIALIZED: function() {
          return r
        },
        IX2_SESSION_STARTED: function() {
          return o
        },
        IX2_SESSION_STOPPED: function() {
          return u
        },
        IX2_STOP_REQUESTED: function() {
          return s
        },
        IX2_TEST_FRAME_RENDERED: function() {
          return O
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function() {
          return b
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        u = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        l = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        I = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        h = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        _ = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED"
    },
    2686: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        ABSTRACT_NODE: function() {
          return et
        },
        AUTO: function() {
          return Y
        },
        BACKGROUND: function() {
          return x
        },
        BACKGROUND_COLOR: function() {
          return U
        },
        BAR_DELIMITER: function() {
          return Q
        },
        BORDER_COLOR: function() {
          return V
        },
        BOUNDARY_SELECTOR: function() {
          return c
        },
        CHILDREN: function() {
          return z
        },
        COLON_DELIMITER: function() {
          return W
        },
        COLOR: function() {
          return k
        },
        COMMA_DELIMITER: function() {
          return H
        },
        CONFIG_UNIT: function() {
          return I
        },
        CONFIG_VALUE: function() {
          return f
        },
        CONFIG_X_UNIT: function() {
          return p
        },
        CONFIG_X_VALUE: function() {
          return l
        },
        CONFIG_Y_UNIT: function() {
          return g
        },
        CONFIG_Y_VALUE: function() {
          return s
        },
        CONFIG_Z_UNIT: function() {
          return E
        },
        CONFIG_Z_VALUE: function() {
          return d
        },
        DISPLAY: function() {
          return X
        },
        FILTER: function() {
          return F
        },
        FLEX: function() {
          return j
        },
        FONT_VARIATION_SETTINGS: function() {
          return M
        },
        HEIGHT: function() {
          return D
        },
        HTML_ELEMENT: function() {
          return J
        },
        IMMEDIATE_CHILDREN: function() {
          return $
        },
        IX2_ID_DELIMITER: function() {
          return a
        },
        OPACITY: function() {
          return P
        },
        PARENT: function() {
          return K
        },
        PLAIN_OBJECT: function() {
          return ee
        },
        PRESERVE_3D: function() {
          return Z
        },
        RENDER_GENERAL: function() {
          return ei
        },
        RENDER_PLUGIN: function() {
          return er
        },
        RENDER_STYLE: function() {
          return ea
        },
        RENDER_TRANSFORM: function() {
          return en
        },
        ROTATE_X: function() {
          return A
        },
        ROTATE_Y: function() {
          return R
        },
        ROTATE_Z: function() {
          return L
        },
        SCALE_3D: function() {
          return S
        },
        SCALE_X: function() {
          return _
        },
        SCALE_Y: function() {
          return O
        },
        SCALE_Z: function() {
          return v
        },
        SIBLINGS: function() {
          return q
        },
        SKEW: function() {
          return C
        },
        SKEW_X: function() {
          return w
        },
        SKEW_Y: function() {
          return N
        },
        TRANSFORM: function() {
          return y
        },
        TRANSLATE_3D: function() {
          return b
        },
        TRANSLATE_X: function() {
          return m
        },
        TRANSLATE_Y: function() {
          return T
        },
        TRANSLATE_Z: function() {
          return h
        },
        WF_PAGE: function() {
          return r
        },
        WIDTH: function() {
          return G
        },
        WILL_CHANGE: function() {
          return B
        },
        W_MOD_IX: function() {
          return u
        },
        W_MOD_JS: function() {
          return o
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        u = "w-mod-ix",
        c = ".w-dyn-item",
        l = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        I = "unit",
        y = "transform",
        m = "translateX",
        T = "translateY",
        h = "translateZ",
        b = "translate3d",
        _ = "scaleX",
        O = "scaleY",
        v = "scaleZ",
        S = "scale3d",
        A = "rotateX",
        R = "rotateY",
        L = "rotateZ",
        C = "skew",
        w = "skewX",
        N = "skewY",
        P = "opacity",
        F = "filter",
        M = "font-variation-settings",
        G = "width",
        D = "height",
        U = "backgroundColor",
        x = "background",
        V = "borderColor",
        k = "color",
        X = "display",
        j = "flex",
        B = "willChange",
        Y = "AUTO",
        H = ",",
        W = ":",
        Q = "|",
        z = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN"
    },
    262: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        ActionAppliesTo: function() {
          return r
        },
        ActionTypeConsts: function() {
          return a
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    },
    7087: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        ActionTypeConsts: function() {
          return o.ActionTypeConsts
        },
        IX2EngineActionTypes: function() {
          return u
        },
        IX2EngineConstants: function() {
          return c
        },
        QuickEffectIds: function() {
          return r.QuickEffectIds
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = l(n(1833), t),
        o = l(n(262), t);
      l(n(8704), t), l(n(3213), t);
      let u = d(n(8023)),
        c = d(n(2686));

      function l(e, t) {
        return Object.keys(e).forEach(function(n) {
          "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
              return e[n]
            }
          })
        }), e
      }

      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (s = function(e) {
          return e ? n : t
        })(e)
      }

      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
          } return i.default = e, n && n.set(e, i), i
      }
    },
    3213: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ReducedMotionTypes", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let {
        TRANSFORM_MOVE: i,
        TRANSFORM_SCALE: a,
        TRANSFORM_ROTATE: r,
        TRANSFORM_SKEW: o,
        STYLE_SIZE: u,
        STYLE_FILTER: c,
        STYLE_FONT_VARIATION: l
      } = n(262).ActionTypeConsts, s = {
        [i]: !0,
        [a]: !0,
        [r]: !0,
        [o]: !0,
        [u]: !0,
        [c]: !0,
        [l]: !0
      }
    },
    1833: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        EventAppliesTo: function() {
          return r
        },
        EventBasedOn: function() {
          return o
        },
        EventContinuousMouseAxes: function() {
          return u
        },
        EventLimitAffectedElements: function() {
          return c
        },
        EventTypeConsts: function() {
          return a
        },
        QuickEffectDirectionConsts: function() {
          return s
        },
        QuickEffectIds: function() {
          return l
        }
      };
      for (var i in n) Object.defineProperty(t, i, {
        enumerable: !0,
        get: n[i]
      });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
        },
        r = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
        },
        o = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
        },
        u = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
        },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        l = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    },
    8704: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "InteractionTypeConsts", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
    },
    380: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "normalizeColor", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };

      function i(e) {
        let t, i, a, r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          u = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (u.startsWith("#")) {
          let e = u.substring(1);
          3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), i = parseInt(e[1] + e[1], 16), a = parseInt(e[2] + e[2], 16), 4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), i = parseInt(e.substring(2, 4), 16), a = parseInt(e.substring(4, 6), 16), 8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255))
        } else if (u.startsWith("rgba")) {
          let e = u.match(/rgba\(([^)]+)\)/)[1].split(",");
          t = parseInt(e[0], 10), i = parseInt(e[1], 10), a = parseInt(e[2], 10), r = parseFloat(e[3])
        } else if (u.startsWith("rgb")) {
          let e = u.match(/rgb\(([^)]+)\)/)[1].split(",");
          t = parseInt(e[0], 10), i = parseInt(e[1], 10), a = parseInt(e[2], 10)
        } else if (u.startsWith("hsla")) {
          let e, n, o, c = u.match(/hsla\(([^)]+)\)/)[1].split(","),
            l = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            d = parseFloat(c[2].replace("%", "")) / 100;
          r = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            p = f * (1 - Math.abs(l / 60 % 2 - 1)),
            g = d - f / 2;
          l >= 0 && l < 60 ? (e = f, n = p, o = 0) : l >= 60 && l < 120 ? (e = p, n = f, o = 0) : l >= 120 && l < 180 ? (e = 0, n = f, o = p) : l >= 180 && l < 240 ? (e = 0, n = p, o = f) : l >= 240 && l < 300 ? (e = p, n = 0, o = f) : (e = f, n = 0, o = p), t = Math.round((e + g) * 255), i = Math.round((n + g) * 255), a = Math.round((o + g) * 255)
        } else if (u.startsWith("hsl")) {
          let e, n, r, o = u.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(o[0]),
            l = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * l,
            f = d * (1 - Math.abs(c / 60 % 2 - 1)),
            p = s - d / 2;
          c >= 0 && c < 60 ? (e = d, n = f, r = 0) : c >= 60 && c < 120 ? (e = f, n = d, r = 0) : c >= 120 && c < 180 ? (e = 0, n = d, r = f) : c >= 180 && c < 240 ? (e = 0, n = f, r = d) : c >= 240 && c < 300 ? (e = f, n = 0, r = d) : (e = d, n = 0, r = f), t = Math.round((e + p) * 255), i = Math.round((n + p) * 255), a = Math.round((r + p) * 255)
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
        return {
          red: t,
          green: i,
          blue: a,
          alpha: r
        }
      }
    },
    9468: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        IX2BrowserSupport: function() {
          return r
        },
        IX2EasingUtils: function() {
          return u
        },
        IX2Easings: function() {
          return o
        },
        IX2ElementsReducer: function() {
          return c
        },
        IX2VanillaPlugins: function() {
          return l
        },
        IX2VanillaUtils: function() {
          return s
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = f(n(2662)),
        o = f(n(8686)),
        u = f(n(3767)),
        c = f(n(5861)),
        l = f(n(1799)),
        s = f(n(4124));

      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (d = function(e) {
          return e ? n : t
        })(e)
      }

      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = {
            __proto__: null
          },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
          } return i.default = e, n && n.set(e, i), i
      }
    },
    2662: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, a = {
        ELEMENT_MATCHES: function() {
          return l
        },
        FLEX_PREFIXED: function() {
          return s
        },
        IS_BROWSER_ENV: function() {
          return u
        },
        TRANSFORM_PREFIXED: function() {
          return d
        },
        TRANSFORM_STYLE_PREFIXED: function() {
          return p
        },
        withBrowser: function() {
          return c
        }
      };
      for (var r in a) Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
      });
      let o = (i = n(9777)) && i.__esModule ? i : {
          default: i
        },
        u = "undefined" != typeof window,
        c = (e, t) => u ? e() : t,
        l = c(() => (0, o.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        s = c(() => {
          let e = document.createElement("i"),
            t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
          try {
            let {
              length: n
            } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (e.style.display = n, e.style.display === n) return n
            }
            return ""
          } catch (e) {
            return ""
          }
        }, "flex"),
        d = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              {
                length: n
              } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n
            }
          }
          return "transform"
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle"
    },
    3767: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, a = {
        applyEasing: function() {
          return d
        },
        createBezierEasing: function() {
          return s
        },
        optimizeFloat: function() {
          return l
        }
      };
      for (var r in a) Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
      });
      let o = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var i = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = e[r]
            } return i.default = e, n && n.set(e, i), i
        }(n(8686)),
        u = (i = n(1361)) && i.__esModule ? i : {
          default: i
        };

      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (c = function(e) {
          return e ? n : t
        })(e)
      }

      function l(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0
      }

      function s(e) {
        return (0, u.default)(...e)
      }

      function d(e, t, n) {
        return 0 === t ? 0 : 1 === t ? 1 : n ? l(t > 0 ? n(t) : t) : l(t > 0 && e && o[e] ? o[e](t) : t)
      }
    },
    8686: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i, a = {
        bounce: function() {
          return j
        },
        bouncePast: function() {
          return B
        },
        ease: function() {
          return u
        },
        easeIn: function() {
          return c
        },
        easeInOut: function() {
          return s
        },
        easeOut: function() {
          return l
        },
        inBack: function() {
          return F
        },
        inCirc: function() {
          return C
        },
        inCubic: function() {
          return g
        },
        inElastic: function() {
          return D
        },
        inExpo: function() {
          return A
        },
        inOutBack: function() {
          return G
        },
        inOutCirc: function() {
          return N
        },
        inOutCubic: function() {
          return I
        },
        inOutElastic: function() {
          return x
        },
        inOutExpo: function() {
          return L
        },
        inOutQuad: function() {
          return p
        },
        inOutQuart: function() {
          return T
        },
        inOutQuint: function() {
          return _
        },
        inOutSine: function() {
          return S
        },
        inQuad: function() {
          return d
        },
        inQuart: function() {
          return y
        },
        inQuint: function() {
          return h
        },
        inSine: function() {
          return O
        },
        outBack: function() {
          return M
        },
        outBounce: function() {
          return P
        },
        outCirc: function() {
          return w
        },
        outCubic: function() {
          return E
        },
        outElastic: function() {
          return U
        },
        outExpo: function() {
          return R
        },
        outQuad: function() {
          return f
        },
        outQuart: function() {
          return m
        },
        outQuint: function() {
          return b
        },
        outSine: function() {
          return v
        },
        swingFrom: function() {
          return k
        },
        swingFromTo: function() {
          return V
        },
        swingTo: function() {
          return X
        }
      };
      for (var r in a) Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
      });
      let o = (i = n(1361)) && i.__esModule ? i : {
          default: i
        },
        u = (0, o.default)(.25, .1, .25, 1),
        c = (0, o.default)(.42, 0, 1, 1),
        l = (0, o.default)(0, 0, .58, 1),
        s = (0, o.default)(.42, 0, .58, 1);

      function d(e) {
        return Math.pow(e, 2)
      }

      function f(e) {
        return -(Math.pow(e - 1, 2) - 1)
      }

      function p(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
      }

      function g(e) {
        return Math.pow(e, 3)
      }

      function E(e) {
        return Math.pow(e - 1, 3) + 1
      }

      function I(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
      }

      function y(e) {
        return Math.pow(e, 4)
      }

      function m(e) {
        return -(Math.pow(e - 1, 4) - 1)
      }

      function T(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
      }

      function h(e) {
        return Math.pow(e, 5)
      }

      function b(e) {
        return Math.pow(e - 1, 5) + 1
      }

      function _(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
      }

      function O(e) {
        return -Math.cos(Math.PI / 2 * e) + 1
      }

      function v(e) {
        return Math.sin(Math.PI / 2 * e)
      }

      function S(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
      }

      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
      }

      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
      }

      function L(e) {
        return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
      }

      function C(e) {
        return -(Math.sqrt(1 - e * e) - 1)
      }

      function w(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
      }

      function N(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
      }

      function P(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      }

      function F(e) {
        return e * e * (2.70158 * e - 1.70158)
      }

      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }

      function G(e) {
        let t = 1.70158;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }

      function D(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
      }

      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
      }

      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1) ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
      }

      function V(e) {
        let t = 1.70158;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }

      function k(e) {
        return e * e * (2.70158 * e - 1.70158)
      }

      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }

      function j(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      }

      function B(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
      }
    },
    1799: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        clearPlugin: function() {
          return E
        },
        createPluginInstance: function() {
          return p
        },
        getPluginConfig: function() {
          return l
        },
        getPluginDestination: function() {
          return f
        },
        getPluginDuration: function() {
          return d
        },
        getPluginOrigin: function() {
          return s
        },
        isPluginType: function() {
          return u
        },
        renderPlugin: function() {
          return g
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = n(2662),
        o = n(3690);

      function u(e) {
        return o.pluginMethodMap.has(e)
      }
      let c = e => t => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i
        },
        l = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        d = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        g = c("renderPlugin"),
        E = c("clearPlugin")
    },
    4124: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        cleanupHTMLElement: function() {
          return eH
        },
        clearAllStyles: function() {
          return ej
        },
        clearObjectCache: function() {
          return ed
        },
        getActionListProgress: function() {
          return e$
        },
        getAffectedElements: function() {
          return eh
        },
        getComputedStyle: function() {
          return eb
        },
        getDestinationValues: function() {
          return eC
        },
        getElementId: function() {
          return eE
        },
        getInstanceId: function() {
          return ep
        },
        getInstanceOrigin: function() {
          return eS
        },
        getItemConfigByKey: function() {
          return eL
        },
        getMaxDurationItemIndex: function() {
          return ez
        },
        getNamespacedParameterId: function() {
          return eZ
        },
        getRenderType: function() {
          return ew
        },
        getStyleProp: function() {
          return eN
        },
        mediaQueriesEqual: function() {
          return e0
        },
        observeStore: function() {
          return em
        },
        reduceListToGroup: function() {
          return eq
        },
        reifyState: function() {
          return eI
        },
        renderHTMLElement: function() {
          return eP
        },
        shallowEqual: function() {
          return s.default
        },
        shouldAllowMediaQuery: function() {
          return eJ
        },
        shouldNamespaceEventParameter: function() {
          return eK
        },
        stringifyTarget: function() {
          return e1
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = E(n(4075)),
        o = E(n(1455)),
        u = E(n(5720)),
        c = n(1185),
        l = n(7087),
        s = E(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);

      function E(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      let {
        BACKGROUND: I,
        TRANSFORM: y,
        TRANSLATE_3D: m,
        SCALE_3D: T,
        ROTATE_X: h,
        ROTATE_Y: b,
        ROTATE_Z: _,
        SKEW: O,
        PRESERVE_3D: v,
        FLEX: S,
        OPACITY: A,
        FILTER: R,
        FONT_VARIATION_SETTINGS: L,
        WIDTH: C,
        HEIGHT: w,
        BACKGROUND_COLOR: N,
        BORDER_COLOR: P,
        COLOR: F,
        CHILDREN: M,
        IMMEDIATE_CHILDREN: G,
        SIBLINGS: D,
        PARENT: U,
        DISPLAY: x,
        WILL_CHANGE: V,
        AUTO: k,
        COMMA_DELIMITER: X,
        COLON_DELIMITER: j,
        BAR_DELIMITER: B,
        RENDER_TRANSFORM: Y,
        RENDER_GENERAL: H,
        RENDER_STYLE: W,
        RENDER_PLUGIN: Q
      } = l.IX2EngineConstants, {
        TRANSFORM_MOVE: z,
        TRANSFORM_SCALE: $,
        TRANSFORM_ROTATE: q,
        TRANSFORM_SKEW: K,
        STYLE_OPACITY: Z,
        STYLE_FILTER: J,
        STYLE_FONT_VARIATION: ee,
        STYLE_SIZE: et,
        STYLE_BACKGROUND_COLOR: en,
        STYLE_BORDER: ei,
        STYLE_TEXT_COLOR: ea,
        GENERAL_DISPLAY: er,
        OBJECT_VALUE: eo
      } = l.ActionTypeConsts, eu = e => e.trim(), ec = Object.freeze({
        [en]: N,
        [ei]: P,
        [ea]: F
      }), el = Object.freeze({
        [g.TRANSFORM_PREFIXED]: y,
        [N]: I,
        [A]: A,
        [R]: R,
        [C]: C,
        [w]: w,
        [L]: L
      }), es = new Map;

      function ed() {
        es.clear()
      }
      let ef = 1;

      function ep() {
        return "i" + ef++
      }
      let eg = 1;

      function eE(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id
        }
        return "e" + eg++
      }

      function eI({
        events: e,
        actionLists: t,
        site: n
      } = {}) {
        let i = (0, o.default)(e, (e, t) => {
            let {
              eventTypeId: n
            } = t;
            return e[n] || (e[n] = {}), e[n][t.id] = t, e
          }, {}),
          a = n && n.mediaQueries,
          r = [];
        return a ? r = a.map(e => e.key) : (a = [], console.warn("IX2 missing mediaQueries in site data")), {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: i,
            mediaQueries: a,
            mediaQueryKeys: r
          }
        }
      }
      let ey = (e, t) => e === t;

      function em({
        store: e,
        select: t,
        onChange: n,
        comparator: i = ey
      }) {
        let {
          getState: a,
          subscribe: r
        } = e, o = r(function() {
          let r = t(a());
          if (null == r) return void o();
          i(r, u) || n(u = r, e)
        }), u = t(a());
        return o
      }

      function eT(e) {
        let t = typeof e;
        if ("string" === t) return {
          id: e
        };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o
          }
        }
        return {}
      }

      function eh({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a
      }) {
        let r, o, u;
        if (!a) throw Error("IX2 missing elementApi");
        let {
          targets: c
        } = e;
        if (Array.isArray(c) && c.length > 0) return c.reduce((e, r) => e.concat(eh({
          config: {
            target: r
          },
          event: t,
          eventTarget: n,
          elementRoot: i,
          elementApi: a
        })), []);
        let {
          getValidDocument: s,
          getQuerySelector: d,
          queryDocument: f,
          getChildElements: p,
          getSiblingElements: E,
          matchSelector: I,
          elementContains: y,
          isSiblingNode: m
        } = a, {
          target: T
        } = e;
        if (!T) return [];
        let {
          id: h,
          objectId: b,
          selector: _,
          selectorGuids: O,
          appliesTo: v,
          useEventTarget: S
        } = eT(T);
        if (b) return [es.has(b) ? es.get(b) : es.set(b, {}).get(b)];
        if (v === l.EventAppliesTo.PAGE) {
          let e = s(h);
          return e ? [e] : []
        }
        let A = (t?.action?.config?.affectedElements ?? {})[h || _] || {},
          R = !!(A.id || A.selector),
          L = t && d(eT(t.target));
        if (R ? (r = A.limitAffectedElements, o = L, u = d(A)) : o = u = d({
            id: h,
            selector: _,
            selectorGuids: O
          }), t && S) {
          let e = n && (u || !0 === S) ? [n] : f(L);
          if (u) {
            if (S === U) return f(u).filter(t => e.some(e => y(t, e)));
            if (S === M) return f(u).filter(t => e.some(e => y(e, t)));
            if (S === D) return f(u).filter(t => e.some(e => m(e, t)))
          }
          return e
        }
        return null == o || null == u ? [] : g.IS_BROWSER_ENV && i ? f(u).filter(e => i.contains(e)) : r === M ? f(o, u) : r === G ? p(f(o)).filter(I(u)) : r === D ? E(f(o)).filter(I(u)) : f(u)
      }

      function eb({
        element: e,
        actionItem: t
      }) {
        if (!g.IS_BROWSER_ENV) return {};
        let {
          actionTypeId: n
        } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {}
        }
      }
      let e_ = /px/,
        eO = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e), e || {}),
        ev = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eG[t.type] || t.defaultValue || 0), e), e || {});

      function eS(e, t = {}, n = {}, i, a) {
        let {
          getStyle: o
        } = a, {
          actionTypeId: u
        } = i;
        if ((0, p.isPluginType)(u)) return (0, p.getPluginOrigin)(u)(t[u], i);
        switch (i.actionTypeId) {
          case z:
          case $:
          case q:
          case K:
            return t[i.actionTypeId] || eF[i.actionTypeId];
          case J:
            return eO(t[i.actionTypeId], i.config.filters);
          case ee:
            return ev(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return {
              value: (0, r.default)(parseFloat(o(e, A)), 1)
            };
          case et: {
            let t, a = o(e, C),
              u = o(e, w);
            return {
              widthValue: i.config.widthUnit === k ? e_.test(a) ? parseFloat(a) : parseFloat(n.width) : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue: i.config.heightUnit === k ? e_.test(u) ? parseFloat(u) : parseFloat(n.height) : (0, r.default)(parseFloat(u), parseFloat(n.height))
            }
          }
          case en:
          case ei:
          case ea:
            return function({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i
            }) {
              let a = ec[t],
                o = i(e, a),
                u = (function(e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : ""
                })(eV, ex.test(o) ? o : n[a]).split(X);
              return {
                rValue: (0, r.default)(parseInt(u[0], 10), 255),
                gValue: (0, r.default)(parseInt(u[1], 10), 255),
                bValue: (0, r.default)(parseInt(u[2], 10), 255),
                aValue: (0, r.default)(parseFloat(u[3]), 1)
              }
            }({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o
            });
          case er:
            return {
              value: (0, r.default)(o(e, x), n.display)
            };
          case eo:
            return t[i.actionTypeId] || {
              value: 0
            };
          default:
            return
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, u.default)(n.filters, ({
                type: e
              }) => e === t);
              return e ? e.value : 0
            }
            case ee: {
              let e = (0, u.default)(n.fontVariations, ({
                type: e
              }) => e === t);
              return e ? e.value : 0
            }
            default:
              return n[t]
          }
        };

      function eC({
        element: e,
        actionItem: t,
        elementApi: n
      }) {
        if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case z:
          case $:
          case q:
          case K: {
            let {
              xValue: e,
              yValue: n,
              zValue: i
            } = t.config;
            return {
              xValue: e,
              yValue: n,
              zValue: i
            }
          }
          case et: {
            let {
              getStyle: i,
              setStyle: a,
              getProperty: r
            } = n, {
              widthUnit: o,
              heightUnit: u
            } = t.config, {
              widthValue: c,
              heightValue: l
            } = t.config;
            if (!g.IS_BROWSER_ENV) return {
              widthValue: c,
              heightValue: l
            };
            if (o === k) {
              let t = i(e, C);
              a(e, C, ""), c = r(e, "offsetWidth"), a(e, C, t)
            }
            if (u === k) {
              let t = i(e, w);
              a(e, w, ""), l = r(e, "offsetHeight"), a(e, w, t)
            }
            return {
              widthValue: c,
              heightValue: l
            }
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: u
            } = t.config;
            if (u && u.startsWith("--")) {
              let {
                getStyle: t
              } = n, i = t(e, u), a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha
              }
            }
            return {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o
            }
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(eR, {});
          default: {
            let {
              value: e
            } = t.config;
            return {
              value: e
            }
          }
        }
      }

      function ew(e) {
        return /^TRANSFORM_/.test(e) ? Y : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? H : /^PLUGIN_/.test(e) ? Q : void 0
      }

      function eN(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null
      }

      function eP(e, t, n, i, a, r, u, c, l) {
        switch (c) {
          case Y:
            var s = e,
              d = t,
              f = n,
              E = a,
              I = u;
            let y = eU.map(e => {
                let t = eF[e],
                  {
                    xValue: n = t.xValue,
                    yValue: i = t.yValue,
                    zValue: a = t.zValue,
                    xUnit: r = "",
                    yUnit: o = "",
                    zUnit: u = ""
                  } = d[e] || {};
                switch (e) {
                  case z:
                    return `${m}(${n}${r}, ${i}${o}, ${a}${u})`;
                  case $:
                    return `${T}(${n}${r}, ${i}${o}, ${a}${u})`;
                  case q:
                    return `${h}(${n}${r}) ${b}(${i}${o}) ${_}(${a}${u})`;
                  case K:
                    return `${O}(${n}${r}, ${i}${o})`;
                  default:
                    return ""
                }
              }).join(" "),
              {
                setStyle: A
              } = I;
            ek(s, g.TRANSFORM_PREFIXED, I), A(s, g.TRANSFORM_PREFIXED, y),
              function({
                actionTypeId: e
              }, {
                xValue: t,
                yValue: n,
                zValue: i
              }) {
                return e === z && void 0 !== i || e === $ && void 0 !== i || e === q && (void 0 !== t || void 0 !== n)
              }(E, f) && A(s, g.TRANSFORM_STYLE_PREFIXED, v);
            return;
          case W:
            return function(e, t, n, i, a, r) {
              let {
                setStyle: u
              } = r;
              switch (i.actionTypeId) {
                case et: {
                  let {
                    widthUnit: t = "",
                    heightUnit: a = ""
                  } = i.config, {
                    widthValue: o,
                    heightValue: c
                  } = n;
                  void 0 !== o && (t === k && (t = "px"), ek(e, C, r), u(e, C, o + t)), void 0 !== c && (a === k && (a = "px"), ek(e, w, r), u(e, w, c + a));
                  break
                }
                case J:
                  var c = i.config;
                  let l = (0, o.default)(n, (e, t, n) => `${e} ${n}(${t}${eD(n,c)})`, ""),
                    {
                      setStyle: s
                    } = r;
                  ek(e, R, r), s(e, R, l);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                    {
                      setStyle: f
                    } = r;
                  ek(e, L, r), f(e, L, d);
                  break;
                case en:
                case ei:
                case ea: {
                  let t = ec[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    l = n.aValue;
                  ek(e, t, r), u(e, t, l >= 1 ? `rgb(${a},${o},${c})` : `rgba(${a},${o},${c},${l})`);
                  break
                }
                default: {
                  let {
                    unit: t = ""
                  } = i.config;
                  ek(e, a, r), u(e, a, n.value + t)
                }
              }
            }(e, 0, n, a, r, u);
          case H:
            var N = e,
              P = a,
              F = u;
            let {
              setStyle: M
            } = F;
            if (P.actionTypeId === er) {
              let {
                value: e
              } = P.config;
              M(N, x, e === S && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let {
              actionTypeId: e
            } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(l, t, a)
          }
        }
      }
      let eF = {
          [z]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [$]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
          }),
          [q]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [K]: Object.freeze({
            xValue: 0,
            yValue: 0
          })
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
        }),
        eG = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
        }),
        eD = (e, t) => {
          let n = (0, u.default)(t.filters, ({
            type: t
          }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%"
          }
        },
        eU = Object.keys(eF),
        ex = /^rgb/,
        eV = RegExp("rgba?\\(([^)]+)\\)");

      function ek(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = el[t];
        if (!i) return;
        let {
          getStyle: a,
          setStyle: r
        } = n, o = a(e, V);
        if (!o) return void r(e, V, i);
        let u = o.split(X).map(eu); - 1 === u.indexOf(i) && r(e, V, u.concat(i).join(X))
      }

      function eX(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let i = el[t];
        if (!i) return;
        let {
          getStyle: a,
          setStyle: r
        } = n, o = a(e, V);
        o && -1 !== o.indexOf(i) && r(e, V, o.split(X).map(eu).filter(e => e !== i).join(X))
      }

      function ej({
        store: e,
        elementApi: t
      }) {
        let {
          ixData: n
        } = e.getState(), {
          events: i = {},
          actionLists: a = {}
        } = n;
        Object.keys(i).forEach(e => {
          let n = i[e],
            {
              config: r
            } = n.action,
            {
              actionListId: o
            } = r,
            u = a[o];
          u && eB({
            actionList: u,
            event: n,
            elementApi: t
          })
        }), Object.keys(a).forEach(e => {
          eB({
            actionList: a[e],
            elementApi: t
          })
        })
      }

      function eB({
        actionList: e = {},
        event: t,
        elementApi: n
      }) {
        let {
          actionItemGroups: i,
          continuousParameterGroups: a
        } = e;
        i && i.forEach(e => {
          eY({
            actionGroup: e,
            event: t,
            elementApi: n
          })
        }), a && a.forEach(e => {
          let {
            continuousActionGroups: i
          } = e;
          i.forEach(e => {
            eY({
              actionGroup: e,
              event: t,
              elementApi: n
            })
          })
        })
      }

      function eY({
        actionGroup: e,
        event: t,
        elementApi: n
      }) {
        let {
          actionItems: i
        } = e;
        i.forEach(e => {
          let i, {
            actionTypeId: a,
            config: r
          } = e;
          i = (0, p.isPluginType)(a) ? t => (0, p.clearPlugin)(a)(t, e) : eW({
            effect: eQ,
            actionTypeId: a,
            elementApi: n
          }), eh({
            config: r,
            event: t,
            elementApi: n
          }).forEach(i)
        })
      }

      function eH(e, t, n) {
        let {
          setStyle: i,
          getStyle: a
        } = n, {
          actionTypeId: r
        } = t;
        if (r === et) {
          let {
            config: n
          } = t;
          n.widthUnit === k && i(e, C, ""), n.heightUnit === k && i(e, w, "")
        }
        a(e, V) && eW({
          effect: eX,
          actionTypeId: r,
          elementApi: n
        })(e)
      }
      let eW = ({
        effect: e,
        actionTypeId: t,
        elementApi: n
      }) => i => {
        switch (t) {
          case z:
          case $:
          case q:
          case K:
            e(i, g.TRANSFORM_PREFIXED, n);
            break;
          case J:
            e(i, R, n);
            break;
          case ee:
            e(i, L, n);
            break;
          case Z:
            e(i, A, n);
            break;
          case et:
            e(i, C, n), e(i, w, n);
            break;
          case en:
          case ei:
          case ea:
            e(i, ec[t], n);
            break;
          case er:
            e(i, x, n)
        }
      };

      function eQ(e, t, n) {
        let {
          setStyle: i
        } = n;
        eX(e, t, n), i(e, t, ""), t === g.TRANSFORM_PREFIXED && i(e, g.TRANSFORM_STYLE_PREFIXED, "")
      }

      function ez(e) {
        let t = 0,
          n = 0;
        return e.forEach((e, i) => {
          let {
            config: a
          } = e, r = a.delay + a.duration;
          r >= t && (t = r, n = i)
        }), n
      }

      function e$(e, t) {
        let {
          actionItemGroups: n,
          useFirstGroupAsInitialState: i
        } = e, {
          actionItem: a,
          verboseTimeElapsed: r = 0
        } = t, o = 0, u = 0;
        return n.forEach((e, t) => {
          if (i && 0 === t) return;
          let {
            actionItems: n
          } = e, c = n[ez(n)], {
            config: l,
            actionTypeId: s
          } = c;
          a.id === c.id && (u = o + r);
          let d = ew(s) === H ? 0 : l.duration;
          o += l.delay + d
        }), o > 0 ? (0, d.optimizeFloat)(u / o) : 0
      }

      function eq({
        actionList: e,
        actionItemId: t,
        rawData: n
      }) {
        let {
          actionItemGroups: i,
          continuousParameterGroups: a
        } = e, r = [], o = e => (r.push((0, c.mergeIn)(e, ["config"], {
          delay: 0,
          duration: 0
        })), e.id === t);
        return i && i.some(({
          actionItems: e
        }) => e.some(o)), a && a.some(e => {
          let {
            continuousActionGroups: t
          } = e;
          return t.some(({
            actionItems: e
          }) => e.some(o))
        }), (0, c.setIn)(n, ["actionLists"], {
          [e.id]: {
            id: e.id,
            actionItemGroups: [{
              actionItems: r
            }]
          }
        })
      }

      function eK(e, {
        basedOn: t
      }) {
        return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
      }

      function eZ(e, t) {
        return e + j + t
      }

      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t)
      }

      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort())
      }

      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + B + e.objectId;
        if (e.objectId) return e.objectId;
        let {
          id: t = "",
          selector: n = "",
          useEventTarget: i = ""
        } = e;
        return t + B + n + B + i
      }
    },
    7164: function(e, t) {
      "use strict";

      function n(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      let i = function(e, t) {
        if (n(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0
      }
    },
    5861: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        createElementState: function() {
          return O
        },
        ixElements: function() {
          return _
        },
        mergeActionState: function() {
          return v
        }
      };
      for (var a in i) Object.defineProperty(t, a, {
        enumerable: !0,
        get: i[a]
      });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: u,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: l,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: I,
          CONFIG_UNIT: y
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: h
        } = o.IX2EngineActionTypes,
        b = {},
        _ = (e = b, t = {}) => {
          switch (t.type) {
            case m:
              return b;
            case T: {
              let {
                elementId: n,
                element: i,
                origin: a,
                actionItem: o,
                refType: u
              } = t.payload, {
                actionTypeId: c
              } = o, l = e;
              return (0, r.getIn)(l, [n, i]) !== i && (l = O(l, i, u, n, o)), v(l, n, c, a, o)
            }
            case h: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r
              } = t.payload;
              return v(e, n, i, a, r)
            }
            default:
              return e
          }
        };

      function O(e, t, n, i, a) {
        let o = n === c ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], {
          id: i,
          ref: t,
          refId: o,
          refType: n
        })
      }

      function v(e, t, n, i, a) {
        let o = function(e) {
          let {
            config: t
          } = e;
          return S.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e
          }, {})
        }(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o)
      }
      let S = [
        [s, g],
        [d, E],
        [f, I],
        [p, y]
      ]
    },
    5808: function() {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".btn",
              originalId: "668e5e7b43699f2e1b95e1b3|6521b119-2b9e-6a5d-f6f5-ad34de1b1621",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".btn",
              originalId: "668e5e7b43699f2e1b95e1b3|6521b119-2b9e-6a5d-f6f5-ad34de1b1621",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cca4540
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".btn",
              originalId: "668e5e7b43699f2e1b95e1b3|6521b119-2b9e-6a5d-f6f5-ad34de1b1621",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".btn",
              originalId: "668e5e7b43699f2e1b95e1b3|6521b119-2b9e-6a5d-f6f5-ad34de1b1621",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cca4540
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cda3528
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cda3528
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cdce3e7
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-card",
              originalId: "6687edf28965e189a78dfe00|95f84b8f-6dac-429b-ae44-7e2ac2b9dd49",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cdce3e7
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-5",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-5-p",
              selectedAxis: "X_AXIS",
              basedOn: "VIEWPORT",
              reverse: !1,
              smoothing: 90,
              restingState: 50
            }, {
              continuousParameterGroupId: "a-5-p-2",
              selectedAxis: "Y_AXIS",
              basedOn: "VIEWPORT",
              reverse: !1,
              smoothing: 90,
              restingState: 50
            }],
            createdOn: 0x1909cebac36
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".news-cms",
              originalId: "6687edf28965e189a78dfe00|dae80d7e-8df4-18cc-3953-af070012415d",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-cms",
              originalId: "6687edf28965e189a78dfe00|dae80d7e-8df4-18cc-3953-af070012415d",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cf28bb7
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".news-cms",
              originalId: "6687edf28965e189a78dfe00|dae80d7e-8df4-18cc-3953-af070012415d",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-cms",
              originalId: "6687edf28965e189a78dfe00|dae80d7e-8df4-18cc-3953-af070012415d",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909cf28bb8
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".link",
              originalId: "b45d2495-44ce-5c6b-5981-b4807a5ad6e5",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".link",
              originalId: "b45d2495-44ce-5c6b-5981-b4807a5ad6e5",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909d35de8f
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".link",
              originalId: "b45d2495-44ce-5c6b-5981-b4807a5ad6e5",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".link",
              originalId: "b45d2495-44ce-5c6b-5981-b4807a5ad6e5",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909d35de8f
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".btn-ico",
              originalId: "668e5e7b43699f2e1b95e1b3|55a688bd-313b-6e50-e738-5bb871f3cd56",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".btn-ico",
              originalId: "668e5e7b43699f2e1b95e1b3|55a688bd-313b-6e50-e738-5bb871f3cd56",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909d44b3be
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".btn-ico",
              originalId: "668e5e7b43699f2e1b95e1b3|55a688bd-313b-6e50-e738-5bb871f3cd56",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".btn-ico",
              originalId: "668e5e7b43699f2e1b95e1b3|55a688bd-313b-6e50-e738-5bb871f3cd56",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1909d44b3be
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a1b926bc
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a1ed98ba
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a1ed98ba
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a25cd80b
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-card",
              originalId: "6687edf28965e189a78dfe00|e1546374-284d-b84d-9f15-6933a46b3f05",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a25cd80b
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-wrap_wrap",
              originalId: "6687edf28965e189a78dfe00|47322a8e-2043-a14e-3775-f51f7779ba6f",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-wrap_wrap",
              originalId: "6687edf28965e189a78dfe00|47322a8e-2043-a14e-3775-f51f7779ba6f",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a2618bd7
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".video-wrap_wrap",
              originalId: "6687edf28965e189a78dfe00|47322a8e-2043-a14e-3775-f51f7779ba6f",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".video-wrap_wrap",
              originalId: "6687edf28965e189a78dfe00|47322a8e-2043-a14e-3775-f51f7779ba6f",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a2618bd7
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".header-trigger",
              originalId: "6687edf28965e189a78dfe00|27a71114-b6c7-880f-ff4e-3340458e6e3e",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".header-trigger",
              originalId: "6687edf28965e189a78dfe00|27a71114-b6c7-880f-ff4e-3340458e6e3e",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a689950e
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".header-trigger",
              originalId: "6687edf28965e189a78dfe00|27a71114-b6c7-880f-ff4e-3340458e6e3e",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".header-trigger",
              originalId: "6687edf28965e189a78dfe00|27a71114-b6c7-880f-ff4e-3340458e6e3e",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a689950f
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-20",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".genplan-wrap",
              originalId: "6687edf28965e189a78dfe00|9079e5a4-9fef-8364-ef84-d5f3930f782b",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".genplan-wrap",
              originalId: "6687edf28965e189a78dfe00|9079e5a4-9fef-8364-ef84-d5f3930f782b",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-20-p",
              smoothing: 90,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: -100
            }],
            createdOn: 0x190a6f7055a
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a748182a
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a748182a
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-23",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".infra-wrap",
              originalId: "6687edf28965e189a78dfe00|771e055f-c1ad-67d2-702b-8b4f5cbcf7aa",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".infra-wrap",
              originalId: "6687edf28965e189a78dfe00|771e055f-c1ad-67d2-702b-8b4f5cbcf7aa",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-23-p",
              smoothing: 90,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x190a76737a6
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a77f7de2
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190a77f7de2
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-31",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6687edf28965e189a78dfe00|771e055f-c1ad-67d2-702b-8b4f5cbcf7a8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00|771e055f-c1ad-67d2-702b-8b4f5cbcf7a8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-31-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x190c1fd57a1
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: {
                actionListId: "fadeIn",
                autoStopEventId: "e-47"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6687edf28965e189a78dfe00|8fb96bf0-5d54-6af9-9e80-59c72b382c01",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6687edf28965e189a78dfe00|8fb96bf0-5d54-6af9-9e80-59c72b382c01",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0
            },
            createdOn: 0x190ca4d963a
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51"
              }
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190e36a8b96
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50"
              }
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".infra-card",
              originalId: "6687edf28965e189a78dfe00|59aa0fe8-0c81-215e-9459-aa91da05ed01",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x190e36a8b97
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-36",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".sticky-wrap-inner.mt-100-vh",
              originalId: "6687edf28965e189a78dfe00|b2b5edf5-3035-96ea-9e39-d86dc73a84a4",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".sticky-wrap-inner",
              originalId: "6687edf28965e189a78dfe00|b2b5edf5-3035-96ea-9e39-d86dc73a84a4",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-36-p",
              smoothing: 90,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !0,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x190f05d6e95
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-37",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".sticky-wrap-inner.mt-100-vh",
              originalId: "6687edf28965e189a78dfe00|b2b5edf5-3035-96ea-9e39-d86dc73a84a4",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".sticky-wrap-inner.mt-100-vh",
              originalId: "6687edf28965e189a78dfe00|b2b5edf5-3035-96ea-9e39-d86dc73a84a4",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-37-p",
              smoothing: 90,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !0,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x190f088bfc1
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".genplan-wrap",
              originalId: "6687edf28965e189a78dfe00|9079e5a4-9fef-8364-ef84-d5f3930f782b",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".genplan-wrap",
              originalId: "6687edf28965e189a78dfe00|9079e5a4-9fef-8364-ef84-d5f3930f782b",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-38-p",
              smoothing: 90,
              startsEntering: !1,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !0,
              endOffsetValue: 50
            }],
            createdOn: 0x190f0d1eaf1
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".img",
              originalId: "6687edf28965e189a78dfe00|e313b33a-4fa9-19e9-30a8-06e11e97a956",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".img",
              originalId: "6687edf28965e189a78dfe00|e313b33a-4fa9-19e9-30a8-06e11e97a956",
              appliesTo: "CLASS"
            }],
            config: [{
              continuousParameterGroupId: "a-12-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x190fb4b42a7
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".news-pop-up_img-trigger",
              originalId: "66aa063574c8e430da92b45b|3fc0d983-d2ef-6c43-a751-a1bec1117c8a",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-pop-up_img-trigger",
              originalId: "66aa063574c8e430da92b45b|3fc0d983-d2ef-6c43-a751-a1bec1117c8a",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x191087d4c21
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".news-pop-up_img-trigger",
              originalId: "66aa063574c8e430da92b45b|3fc0d983-d2ef-6c43-a751-a1bec1117c8a",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".news-pop-up_img-trigger",
              originalId: "66aa063574c8e430da92b45b|3fc0d983-d2ef-6c43-a751-a1bec1117c8a",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x191087d4c21
          }
        },
        actionLists: {
          a: {
            id: "a",
            title: "btn_hover-in",
            actionItemGroups: [{
              actionItems: [{
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1.text-bold",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15", "f89a6f41-77a0-e291-504d-795660d38a04"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }, {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".btn_hover-bg",
                    selectorGuids: ["ac773805-296e-434b-49ab-7c12a4586f0d"]
                  },
                  yValue: 101,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1.text-bold",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15", "f89a6f41-77a0-e291-504d-795660d38a04"]
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }, {
                id: "a-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".btn_hover-bg",
                    selectorGuids: ["ac773805-296e-434b-49ab-7c12a4586f0d"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1909cca5a61
          },
          "a-2": {
            id: "a-2",
            title: "btn_hover-out",
            actionItemGroups: [{
              actionItems: [{
                id: "a-2-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1.text-bold",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15", "f89a6f41-77a0-e291-504d-795660d38a04"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }, {
                id: "a-2-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".btn_hover-bg",
                    selectorGuids: ["ac773805-296e-434b-49ab-7c12a4586f0d"]
                  },
                  yValue: 101,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1909cca5a61
          },
          "a-3": {
            id: "a-3",
            title: "news-card_hover-in",
            actionItemGroups: [{
              actionItems: [{
                id: "a-3-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img",
                    selectorGuids: ["edcf8fda-8060-8dea-80fd-6af1f0ee1458"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-3-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img",
                    selectorGuids: ["edcf8fda-8060-8dea-80fd-6af1f0ee1458"]
                  },
                  xValue: 1.12,
                  yValue: 1.12,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1909cda4e06
          },
          "a-4": {
            id: "a-4",
            title: "news-card_hover-out",
            actionItemGroups: [{
              actionItems: [{
                id: "a-4-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".img",
                    selectorGuids: ["edcf8fda-8060-8dea-80fd-6af1f0ee1458"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1909cda4e06
          },
          "a-5": {
            id: "a-5",
            title: "drag",
            continuousParameterGroups: [{
              id: "a-5-p",
              type: "MOUSE_X",
              parameterLabel: "Mouse X",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-5-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6687edf28965e189a78dfe00|18dc4776-e8bc-11a7-9be9-dfbb34c3346a"
                    },
                    xValue: -50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-5-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6687edf28965e189a78dfe00|18dc4776-e8bc-11a7-9be9-dfbb34c3346a"
                    },
                    xValue: 50,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }]
            }, {
              id: "a-5-p-2",
              type: "MOUSE_Y",
              parameterLabel: "Mouse Y",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-5-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6687edf28965e189a78dfe00|18dc4776-e8bc-11a7-9be9-dfbb34c3346a"
                    },
                    xValue: null,
                    yValue: -50,
                    xUnit: "vw",
                    yUnit: "vh",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-5-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "6687edf28965e189a78dfe00|18dc4776-e8bc-11a7-9be9-dfbb34c3346a"
                    },
                    xValue: null,
                    yValue: 50,
                    xUnit: "vw",
                    yUnit: "vh",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x1909cebdd23
          },
          "a-6": {
            id: "a-6",
            title: "drag_show",
            actionItemGroups: [{
              actionItems: [{
                id: "a-6-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    selector: ".drag-label_wrap",
                    selectorGuids: ["2cbffc0d-608d-3e81-6d1c-54fa8bd0cbca"]
                  },
                  xValue: -110,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }, {
                id: "a-6-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".drag-wrap",
                    selectorGuids: ["b3c70045-0bc8-386d-16bd-22c51725222c"]
                  },
                  value: "none"
                }
              }]
            }, {
              actionItems: [{
                id: "a-6-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".drag-wrap",
                    selectorGuids: ["b3c70045-0bc8-386d-16bd-22c51725222c"]
                  },
                  value: "flex"
                }
              }]
            }, {
              actionItems: [{
                id: "a-6-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    selector: ".drag-label_wrap",
                    selectorGuids: ["2cbffc0d-608d-3e81-6d1c-54fa8bd0cbca"]
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1909cf2cde5
          },
          "a-7": {
            id: "a-7",
            title: "drag_hide",
            actionItemGroups: [{
              actionItems: [{
                id: "a-7-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    selector: ".drag-label_wrap",
                    selectorGuids: ["2cbffc0d-608d-3e81-6d1c-54fa8bd0cbca"]
                  },
                  xValue: -110,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-7-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".drag-wrap",
                    selectorGuids: ["b3c70045-0bc8-386d-16bd-22c51725222c"]
                  },
                  value: "none"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1909cf2cde5
          },
          "a-8": {
            id: "a-8",
            title: "link_hover-in",
            actionItemGroups: [{
              actionItems: [{
                id: "a-8-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-8-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15"]
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1909d35ee81
          },
          "a-9": {
            id: "a-9",
            title: "link_hover-out",
            actionItemGroups: [{
              actionItems: [{
                id: "a-9-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".p1",
                    selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace15"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1909d35ee81
          },
          "a-13": {
            id: "a-13",
            title: "indicator_pulsing",
            actionItemGroups: [{
              actionItems: [{
                id: "a-13-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 800,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  xValue: 0,
                  yValue: 0,
                  locked: !0
                }
              }, {
                id: "a-13-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 1600,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-13-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 1600,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  xValue: 1.5,
                  yValue: 1.5,
                  locked: !0
                }
              }, {
                id: "a-13-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outExpo",
                  duration: 1600,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-13-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  xValue: 0,
                  yValue: 0,
                  locked: !0
                }
              }, {
                id: "a-13-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".indicator_puls",
                    selectorGuids: ["f276a68e-5f92-89f8-164e-dc92e777d72b"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a1b93d55
          },
          "a-14": {
            id: "a-14",
            title: "video_hover-in",
            actionItemGroups: [{
              actionItems: [{
                id: "a-14-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video",
                    selectorGuids: ["ee697376-92df-d615-0317-5c60f7ec1f74"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-14-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video",
                    selectorGuids: ["ee697376-92df-d615-0317-5c60f7ec1f74"]
                  },
                  xValue: 1.12,
                  yValue: 1.12,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a1ee7293
          },
          "a-15": {
            id: "a-15",
            title: "video_hover-out",
            actionItemGroups: [{
              actionItems: [{
                id: "a-15-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video",
                    selectorGuids: ["ee697376-92df-d615-0317-5c60f7ec1f74"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a1ee7293
          },
          "a-16": {
            id: "a-16",
            title: "video-pop-up_open",
            actionItemGroups: [{
              actionItems: [{
                id: "a-16-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-pop-up",
                    selectorGuids: ["b2dbae4e-bd4f-c9bd-3db9-03e55f158bbb"]
                  },
                  value: "none"
                }
              }]
            }, {
              actionItems: [{
                id: "a-16-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".video-pop-up",
                    selectorGuids: ["b2dbae4e-bd4f-c9bd-3db9-03e55f158bbb"]
                  },
                  value: "block"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a25c2f67
          },
          "a-17": {
            id: "a-17",
            title: "video-pop-up_close",
            actionItemGroups: [{
              actionItems: [{
                id: "a-17-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".video-pop-up",
                    selectorGuids: ["b2dbae4e-bd4f-c9bd-3db9-03e55f158bbb"]
                  },
                  value: "none"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a25c2f67
          },
          "a-19": {
            id: "a-19",
            title: "header_expend",
            actionItemGroups: [{
              actionItems: [{
                id: "a-19-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    selector: ".header",
                    selectorGuids: ["e25babd1-b731-ac84-eae4-1540b4b41595"]
                  },
                  heightValue: 4.44,
                  widthUnit: "PX",
                  heightUnit: "em",
                  locked: !1
                }
              }, {
                id: "a-19-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    id: "6687edf28965e189a78dfe00|9ef55387-57d7-24e6-7891-09d34171969a"
                  },
                  xValue: .6,
                  yValue: .6,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-19-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    selector: ".header",
                    selectorGuids: ["e25babd1-b731-ac84-eae4-1540b4b41595"]
                  },
                  heightValue: 6.67,
                  widthUnit: "PX",
                  heightUnit: "em",
                  locked: !1
                }
              }, {
                id: "a-19-n-7",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    id: "6687edf28965e189a78dfe00|9ef55387-57d7-24e6-7891-09d34171969a"
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a689aea4
          },
          "a-18": {
            id: "a-18",
            title: "header_collaps",
            actionItemGroups: [{
              actionItems: [{
                id: "a-18-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    selector: ".header",
                    selectorGuids: ["e25babd1-b731-ac84-eae4-1540b4b41595"]
                  },
                  heightValue: 4.44,
                  widthUnit: "PX",
                  heightUnit: "em",
                  locked: !1
                }
              }, {
                id: "a-18-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    id: "6687edf28965e189a78dfe00|9ef55387-57d7-24e6-7891-09d34171969a"
                  },
                  xValue: .6,
                  yValue: .6,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a689aea4
          },
          "a-20": {
            id: "a-20",
            title: "genplan_paralax",
            continuousParameterGroups: [{
              id: "a-20-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-20-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_img-wrap",
                      selectorGuids: ["ca510eed-ef1f-ae5a-7c22-28bbe5d68615"]
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 21,
                actionItems: [{
                  id: "a-20-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".connection-wrap",
                      selectorGuids: ["e23ba571-ff6f-15e1-3c76-42c1826e7505"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".nature-wrap",
                      selectorGuids: ["7543bd28-0cce-bda8-5a26-86457e6b2b7a"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 36,
                actionItems: [{
                  id: "a-20-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".connection-wrap",
                      selectorGuids: ["e23ba571-ff6f-15e1-3c76-42c1826e7505"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".nature-wrap",
                      selectorGuids: ["7543bd28-0cce-bda8-5a26-86457e6b2b7a"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_title",
                      selectorGuids: ["6b08584d-0097-d11f-1375-83b96b0e1882"]
                    },
                    value: 1,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_loc",
                      selectorGuids: ["af5fbe9a-d3b7-1362-858b-02e58494be7b"]
                    },
                    value: 0,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_btns",
                      selectorGuids: ["14940705-a1e7-9b65-d405-7139271dea54"]
                    },
                    value: 0,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_border",
                      selectorGuids: ["ca74bc77-b902-f129-314d-66ee51d19c3a"]
                    },
                    value: 0,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_pins",
                      selectorGuids: ["d41bdba1-5121-9891-a990-ccca3e6b17d6"]
                    },
                    value: 0,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-23",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".pin",
                      selectorGuids: ["5e9f0df6-8ee9-5160-7e60-0c119991e7d7"]
                    },
                    yValue: 2,
                    xUnit: "PX",
                    yUnit: "em",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_img-wrap",
                      selectorGuids: ["ca510eed-ef1f-ae5a-7c22-28bbe5d68615"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 46,
                actionItems: [{
                  id: "a-20-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".connection-wrap",
                      selectorGuids: ["e23ba571-ff6f-15e1-3c76-42c1826e7505"]
                    },
                    xValue: -100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".nature-wrap",
                      selectorGuids: ["7543bd28-0cce-bda8-5a26-86457e6b2b7a"]
                    },
                    xValue: 100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-20-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_title",
                      selectorGuids: ["6b08584d-0097-d11f-1375-83b96b0e1882"]
                    },
                    value: 0,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_loc",
                      selectorGuids: ["af5fbe9a-d3b7-1362-858b-02e58494be7b"]
                    },
                    value: 1,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_interaction_btns",
                      selectorGuids: ["14940705-a1e7-9b65-d405-7139271dea54"]
                    },
                    value: 1,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-21",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_border",
                      selectorGuids: ["ca74bc77-b902-f129-314d-66ee51d19c3a"]
                    },
                    value: 1,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-22",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_pins",
                      selectorGuids: ["d41bdba1-5121-9891-a990-ccca3e6b17d6"]
                    },
                    value: 1,
                    unit: ""
                  }
                }, {
                  id: "a-20-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".pin",
                      selectorGuids: ["5e9f0df6-8ee9-5160-7e60-0c119991e7d7"]
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "em",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x190a6f757f3
          },
          "a-21": {
            id: "a-21",
            title: "header_show",
            actionItemGroups: [{
              actionItems: [{
                id: "a-21-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    selector: ".header",
                    selectorGuids: ["e25babd1-b731-ac84-eae4-1540b4b41595"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a7484161
          },
          "a-22": {
            id: "a-22",
            title: "header_hide",
            actionItemGroups: [{
              actionItems: [{
                id: "a-22-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    selector: ".header",
                    selectorGuids: ["e25babd1-b731-ac84-eae4-1540b4b41595"]
                  },
                  yValue: -100,
                  xUnit: "PX",
                  yUnit: "%",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a7484161
          },
          "a-23": {
            id: "a-23",
            title: "infra_paralax",
            continuousParameterGroups: [{
              id: "a-23-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-23-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".infra-cms_list",
                      selectorGuids: ["6f6092de-471c-eda5-be31-c058b1b93f30"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-23-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".infra-cms_list",
                      selectorGuids: ["6f6092de-471c-eda5-be31-c058b1b93f30"]
                    },
                    xValue: -100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x190a76753f9
          },
          "a-24": {
            id: "a-24",
            title: "infra-card_hover-in",
            actionItemGroups: [{
              actionItems: [{
                id: "a-24-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-24-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-24-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_title",
                    selectorGuids: ["69b576ff-67a9-ddc7-6411-d0dd576d285f"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-24-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-24-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-24-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_title",
                    selectorGuids: ["69b576ff-67a9-ddc7-6411-d0dd576d285f"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a77f8b73
          },
          "a-26": {
            id: "a-26",
            title: "infra-card_hover-out",
            actionItemGroups: [{
              actionItems: [{
                id: "a-26-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-26-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-26-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_title",
                    selectorGuids: ["69b576ff-67a9-ddc7-6411-d0dd576d285f"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a77f8b73
          },
          "a-31": {
            id: "a-31",
            title: "infra-in",
            continuousParameterGroups: [{
              id: "a-31-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-31-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "outQuint",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".section.sticky",
                      selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace26", "e9e9de63-2a0a-7ee5-2e70-ea439f2cb05d"]
                    },
                    value: 1,
                    unit: ""
                  }
                }]
              }, {
                keyframe: 20,
                actionItems: [{
                  id: "a-31-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "outQuint",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".section.sticky",
                      selectorGuids: ["e4ba7d6e-897f-8d71-b23a-cc16bf1ace26", "e9e9de63-2a0a-7ee5-2e70-ea439f2cb05d"]
                    },
                    value: 0,
                    unit: ""
                  }
                }]
              }]
            }],
            createdOn: 0x190c1f7f552
          },
          "a-34": {
            id: "a-34",
            title: "infra-card_open",
            actionItemGroups: [{
              actionItems: [{
                id: "a-34-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-34-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-34-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card",
                    selectorGuids: ["0fd79b32-34d0-5ab9-be29-2e541daea7c5"]
                  },
                  heightValue: 192,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1
                }
              }]
            }, {
              actionItems: [{
                id: "a-34-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 100,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-34-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-34-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card",
                    selectorGuids: ["0fd79b32-34d0-5ab9-be29-2e541daea7c5"]
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x190a77f8b73
          },
          "a-35": {
            id: "a-35",
            title: "infra-card_close",
            actionItemGroups: [{
              actionItems: [{
                id: "a-35-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 1200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc",
                    selectorGuids: ["44e6e502-ec41-be1b-9f04-cfa41bbd1a36"]
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "%",
                  locked: !1
                }
              }, {
                id: "a-35-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card_desc_content",
                    selectorGuids: ["cc947df3-c5d4-bce2-fbf6-9c407ed17b6d"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-35-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".infra-card",
                    selectorGuids: ["0fd79b32-34d0-5ab9-be29-2e541daea7c5"]
                  },
                  heightValue: 192,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190a77f8b73
          },
          "a-36": {
            id: "a-36",
            title: "araes-wrap_paralax",
            continuousParameterGroups: [{
              id: "a-36-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-36-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".areas-wrap",
                      selectorGuids: ["babd3ea2-6f9e-9bff-54d0-31f4a0499ec9"]
                    },
                    widthValue: 40,
                    heightValue: 40,
                    widthUnit: "%",
                    heightUnit: "em",
                    locked: !1
                  }
                }, {
                  id: "a-36-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".sticky-wrap-inner-1",
                      selectorGuids: ["61ffccf5-af60-b55d-535d-6aa5672f9e6d"]
                    },
                    value: 1,
                    unit: ""
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-36-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".areas-wrap",
                      selectorGuids: ["babd3ea2-6f9e-9bff-54d0-31f4a0499ec9"]
                    },
                    widthValue: 100,
                    heightValue: 70,
                    widthUnit: "%",
                    heightUnit: "em",
                    locked: !1
                  }
                }, {
                  id: "a-36-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".sticky-wrap-inner-1",
                      selectorGuids: ["61ffccf5-af60-b55d-535d-6aa5672f9e6d"]
                    },
                    value: 0,
                    unit: ""
                  }
                }]
              }]
            }],
            createdOn: 0x190f05de152
          },
          "a-37": {
            id: "a-37",
            title: "araes-wrap_paralax 2",
            continuousParameterGroups: [{
              id: "a-37-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-37-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".sticky-wrap-inner-1",
                      selectorGuids: ["61ffccf5-af60-b55d-535d-6aa5672f9e6d"]
                    },
                    value: 1,
                    unit: ""
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-37-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: [.8, 0, .6, 1],
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".sticky-wrap-inner-1",
                      selectorGuids: ["61ffccf5-af60-b55d-535d-6aa5672f9e6d"]
                    },
                    value: 0,
                    unit: ""
                  }
                }]
              }]
            }],
            createdOn: 0x190f05de152
          },
          "a-38": {
            id: "a-38",
            title: "mobile_genplan_paralax",
            continuousParameterGroups: [{
              id: "a-38-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-38-n-23",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_img-wrap",
                      selectorGuids: ["ca510eed-ef1f-ae5a-7c22-28bbe5d68615"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-38-n-25",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-pins-wrap",
                      selectorGuids: ["a4261f5d-0d1b-8971-6a15-9ecfb4098503"]
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-38-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-wrap_img-wrap",
                      selectorGuids: ["ca510eed-ef1f-ae5a-7c22-28bbe5d68615"]
                    },
                    xValue: -60,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }, {
                  id: "a-38-n-26",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".genplan-pins-wrap",
                      selectorGuids: ["a4261f5d-0d1b-8971-6a15-9ecfb4098503"]
                    },
                    xValue: -60,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x190a6f757f3
          },
          "a-12": {
            id: "a-12",
            title: "img_paralax",
            continuousParameterGroups: [{
              id: "a-12-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-12-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: !0,
                      id: "6687edf28965e189a78dfe00|b6b01074-1195-c743-7208-9f8b360adea5"
                    },
                    yValue: -25,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 100,
                actionItems: [{
                  id: "a-12-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: !0,
                      id: "6687edf28965e189a78dfe00|b6b01074-1195-c743-7208-9f8b360adea5"
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x1909d63e9a9
          },
          "a-41": {
            id: "a-41",
            title: "news-pop-up_img-hide",
            actionItemGroups: [{
              actionItems: [{
                id: "a-41-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".news-pop-up_left",
                    selectorGuids: ["d8fbd4d3-0b51-cc52-6ff0-b420e57cee01"]
                  },
                  widthValue: 0,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19108725142
          },
          "a-40": {
            id: "a-40",
            title: "news-pop-up_img-show",
            actionItemGroups: [{
              actionItems: [{
                id: "a-40-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".news-pop-up_left",
                    selectorGuids: ["d8fbd4d3-0b51-cc52-6ff0-b420e57cee01"]
                  },
                  widthValue: 0,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1
                }
              }]
            }, {
              actionItems: [{
                id: "a-40-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "outQuint",
                  duration: 800,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".news-pop-up_left",
                    selectorGuids: ["d8fbd4d3-0b51-cc52-6ff0-b420e57cee01"]
                  },
                  widthValue: 47.78,
                  widthUnit: "%",
                  heightUnit: "PX",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19108725142
          },
          fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [{
              actionItems: [{
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0
                  },
                  value: 0
                }
              }]
            }, {
              actionItems: [{
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0
                  },
                  value: 1
                }
              }]
            }]
          }
        },
        site: {
          mediaQueries: [{
            key: "main",
            min: 992,
            max: 1e4
          }, {
            key: "medium",
            min: 768,
            max: 991
          }, {
            key: "small",
            min: 480,
            max: 767
          }, {
            key: "tiny",
            min: 0,
            max: 479
          }]
        }
      })
    }
  }
]);