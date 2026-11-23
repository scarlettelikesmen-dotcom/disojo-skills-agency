/* https://coevalstudio.com/_nuxt/works.ba855da5.js */
import {
  _ as bt
} from "./CommonButton.058c734e.js";
import {
  _ as We,
  f as z,
  e as Ke,
  o as J,
  c as se,
  a as l,
  F as Xe,
  r as Ze,
  t as be,
  L as we,
  u as X,
  z as et,
  A as tt,
  R as wt,
  E as Je,
  G as it,
  b as gt,
  J as Ft,
  w as xt,
  W as St,
  g as oe,
  S as st,
  M as ct,
  af as At,
  al as kt,
  h as Ct,
  O as lt,
  N as Et,
  i as Tt,
  C as Pt,
  D as Rt,
  l as he,
  d as jt,
  K as Oe,
  $ as qe,
  H as Re
} from "./entry.7e3c7585.js";
import {
  _ as It
} from "./Popup.cd0a9f4e.js";
import {
  _ as $t
} from "./client-only.eecabb16.js";
import {
  _ as Bt
} from "./Footer.15b17ac6.js";

function ut(n, r) {
  for (var c = 0; c < r.length; c++) {
    var y = r[c];
    y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(n, y.key, y)
  }
}

function Dt(n, r, c) {
  return r && ut(n.prototype, r), c && ut(n, c), n
}
/*!
 * ScrollSmoother 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var h, Le, j, ve, je, K, _e, dt, s, Z, Ne, ft, pt, ht, _t, mt = function() {
    return typeof window < "u"
  },
  yt = function() {
    return h || mt() && (h = window.gsap) && h.registerPlugin && h
  },
  Mt = function(r) {
    return Math.round(r * 1e5) / 1e5 || 0
  },
  Ot = function(r, c) {
    var y = r.parentNode || je,
      $ = r.getBoundingClientRect(),
      S = y.getBoundingClientRect(),
      A = S.top - $.top,
      E = S.bottom - $.bottom,
      P = (Math.abs(A) > Math.abs(E) ? A : E) / (1 - c),
      v = -P * c,
      B, u;
    return P > 0 && (B = S.height / (j.innerHeight + S.height), u = B === .5 ? S.height * 2 : Math.min(S.height, -P * B / (2 * B - 1)) * 2 * (c || 1), v += c ? -u * c : -u / 2, P += u), {
      change: P,
      offset: v
    }
  },
  Lt = function(r) {
    var c = ve.querySelector(".ScrollSmoother-wrapper");
    return c || (c = ve.createElement("div"), c.classList.add("ScrollSmoother-wrapper"), r.parentNode.insertBefore(c, r), c.appendChild(r)), c
  },
  Fe = function() {
    function n(r) {
      var c = this;
      Le || n.register(h) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), r = this.vars = r || {}, Z && Z.kill(), Z = this, ht(this);
      var y = r,
        $ = y.smoothTouch,
        S = y.onUpdate,
        A = y.onStop,
        E = y.smooth,
        P = y.onFocusIn,
        v = y.normalizeScroll,
        B = y.wholePixels,
        u, b, D, _, d, I, ce, le, ne, k, N, re, ue, Ie = this,
        ge = r.effectsPrefix || "",
        me = s.getScrollFunc(j),
        M = s.isTouch === 1 ? $ === !0 ? .8 : parseFloat($) || 0 : E === 0 || E === !1 ? 0 : parseFloat(E) || .8,
        O = M && +r.speed || 1,
        C = 0,
        xe = 0,
        de = 1,
        ee = ft(0),
        Se = function() {
          return ee.update(-C)
        },
        Q = {
          y: 0
        },
        Ae = function() {
          return u.style.overflow = "visible"
        },
        ye, fe = function(e) {
          e.update();
          var i = e.getTween();
          i && (i.pause(), i._time = i._dur, i._tTime = i._tDur), ye = !1, e.animation.progress(e.progress, !0)
        },
        pe = function(e, i) {
          (e !== C && !k || i) && (B && (e = Math.round(e)), M && (u.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", u._gsap.y = e + "px"), xe = e - C, C = e, s.isUpdating || n.isRefreshing || s.update())
        },
        a = function(e) {
          return arguments.length ? (e < 0 && (e = 0), Q.y = -e, ye = !0, k ? C = -e : pe(-e), s.isRefreshing ? _.update() : me(e / O), this) : -C
        },
        o = typeof ResizeObserver < "u" && r.autoResize !== !1 && new ResizeObserver(function() {
          if (!s.isRefreshing) {
            var t = s.maxScroll(b);
            t < -C && a(t), _t.restart(!0)
          }
        }),
        w, F = function(e) {
          b.scrollTop = 0, !(e.target.contains && e.target.contains(b) || P && P(c, e) === !1) && (s.isInViewport(e.target) || e.target === w || c.scrollTo(e.target, !1, "center center"), w = e.target)
        },
        te = function(e, i) {
          var f, p, m, W;
          d.forEach(function(x) {
            f = x.pins, W = x.markers, e.forEach(function(g) {
              x.trigger && g.trigger && x !== g && (g.trigger === x.trigger || g.pinnedContainer === x.trigger || x.trigger.contains(g.trigger)) && (p = g.start, m = (p - x.start - x.offset) / x.ratio - (p - x.start), f.forEach(function(G) {
                return m -= G.distance / x.ratio - G.distance
              }), g.setPositions(p + m, g.end + m), g.markerStart && W.push(h.quickSetter([g.markerStart, g.markerEnd], "y", "px")), g.pin && g.end > 0 && (m = g.end - g.start, f.push({
                start: g.start,
                end: g.end,
                distance: m,
                trig: g
              }), x.setPositions(x.start, x.end + m), x.vars.onRefresh(x)))
            })
          })
        },
        Y = function() {
          Ae(), requestAnimationFrame(Ae), d && (d.forEach(function(e) {
            var i = e.start,
              f = e.auto ? Math.min(s.maxScroll(e.scroller), e.end) : i + (e.end - i) / e.ratio,
              p = (f - e.end) / 2;
            i -= p, f -= p, e.offset = p || 1e-4, e.pins.length = 0, e.setPositions(Math.min(i, f), Math.max(i, f)), e.vars.onRefresh(e)
          }), te(s.sort())), ee.reset()
        },
        H = function() {
          return s.addEventListener("refresh", Y)
        },
        L = function() {
          return d && d.forEach(function(e) {
            return e.vars.onRefresh(e)
          })
        },
        $e = function() {
          return d && d.forEach(function(e) {
            return e.vars.onRefreshInit(e)
          }), L
        },
        ke = function(e, i, f, p) {
          return function() {
            var m = typeof i == "function" ? i(f, p) : i;
            return m || m === 0 || (m = p.getAttribute("data-" + ge + e) || (e === "speed" ? 1 : 0)), p.setAttribute("data-" + ge + e, m), m === "auto" ? m : parseFloat(m)
          }
        },
        Ue = function(e, i, f, p, m) {
          m = (typeof m == "function" ? m(p, e) : m) || 0;
          var W = ke("speed", i, p, e),
            x = ke("lag", f, p, e),
            g = h.getProperty(e, "y"),
            G = e._gsap,
            ae, R, ie, U, Ve, ze, rt = function() {
              i = W(), f = x(), ae = parseFloat(i) || 1, ie = i === "auto", Ve = ie ? 0 : .5, U && U.kill(), U = f && h.to(e, {
                ease: Ne,
                overwrite: !1,
                y: "+=0",
                duration: f
              }), R && (R.ratio = ae, R.autoSpeed = ie)
            },
            Ye = function() {
              G.y = g + "px", G.renderTransform(1), rt()
            },
            Be = [],
            He = [],
            Ee = 0,
            at = function(T) {
              if (ie) {
                Ye();
                var V = Ot(e, dt(0, 1, -T.start / (T.end - T.start)));
                Ee = V.change, ze = V.offset
              } else Ee = (T.end - T.start) * (1 - ae), ze = 0;
              Be.forEach(function(Te) {
                return Ee -= Te.distance * (1 - ae)
              }), T.vars.onUpdate(T), U && U.progress(1)
            };
          return rt(), (ae !== 1 || ie || U) && (R = s.create({
            trigger: ie ? e.parentNode : e,
            start: "top bottom+=" + m,
            end: "bottom top-=" + m,
            scroller: b,
            scrub: !0,
            refreshPriority: -999,
            onRefreshInit: Ye,
            onRefresh: at,
            onKill: function(T) {
              var V = d.indexOf(T);
              V >= 0 && d.splice(V, 1), Ye()
            },
            onUpdate: function(T) {
              var V = g + Ee * (T.progress - Ve),
                Te = Be.length,
                Me = 0,
                q, Pe, Qe;
              if (T.offset) {
                if (Te) {
                  for (Pe = -C, Qe = T.end; Te--;) {
                    if (q = Be[Te], q.trig.isActive || Pe >= q.start && Pe <= q.end) {
                      U && (q.trig.progress += q.trig.direction < 0 ? .001 : -.001, q.trig.update(0, 0, 1), U.resetTo("y", parseFloat(G.y), -xe, !0), de && U.progress(1));
                      return
                    }
                    Pe > q.end && (Me += q.distance), Qe -= q.distance
                  }
                  V = g + Me + Ee * ((h.utils.clamp(T.start, T.end, Pe) - T.start - Me) / (Qe - T.start) - Ve)
                }
                V = Mt(V + ze), He.length && !ie && He.forEach(function(vt) {
                  return vt(V - Me)
                }), U ? (U.resetTo("y", V, -xe, !0), de && U.progress(1)) : (G.y = V + "px", G.renderTransform(1))
              }
            }
          }), at(R), h.core.getCache(R.trigger).stRevert = $e, R.startY = g, R.pins = Be, R.markers = He, R.ratio = ae, R.autoSpeed = ie, e.style.willChange = "transform"), R
        };
      H(), s.addEventListener("killAll", H), h.delayedCall(.5, function() {
        return de = 0
      }), this.scrollTop = a, this.scrollTo = function(t, e, i) {
        var f = h.utils.clamp(0, s.maxScroll(j), isNaN(t) ? c.offset(t, i) : +t);
        e ? k ? h.to(c, {
          duration: M,
          scrollTop: f,
          overwrite: "auto",
          ease: Ne
        }) : me(f) : a(f)
      }, this.offset = function(t, e) {
        t = _e(t)[0];
        var i = t.style.cssText,
          f = s.create({
            trigger: t,
            start: e || "top top"
          }),
          p;
        return d && te([f]), p = f.start / O, f.kill(!1), t.style.cssText = i, h.core.getCache(t).uncache = 1, p
      };

      function Ce() {
        return D = u.clientHeight, u.style.overflow = "visible", K.style.height = j.innerHeight + (D - j.innerHeight) / O + "px", D - j.innerHeight
      }
      this.content = function(t) {
        if (arguments.length) {
          var e = _e(t || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
          return e !== u && (u = e, ne = u.getAttribute("style") || "", o && o.observe(u), h.set(u, {
            overflow: "visible",
            width: "100%",
            boxSizing: "border-box",
            y: "+=0"
          }), M || h.set(u, {
            clearProps: "transform"
          })), this
        }
        return u
      }, this.wrapper = function(t) {
        return arguments.length ? (b = _e(t || "#smooth-wrapper")[0] || Lt(u), le = b.getAttribute("style") || "", Ce(), h.set(b, M ? {
          overflow: "hidden",
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        } : {
          overflow: "visible",
          position: "relative",
          width: "100%",
          height: "auto",
          top: "auto",
          bottom: "auto",
          left: "auto",
          right: "auto"
        }), this) : b
      }, this.effects = function(t, e) {
        var i;
        if (d || (d = []), !t) return d.slice(0);
        t = _e(t), t.forEach(function(ae) {
          for (var R = d.length; R--;) d[R].trigger === ae && d[R].kill()
        }), e = e || {};
        var f = e,
          p = f.speed,
          m = f.lag,
          W = f.effectsPadding,
          x = [],
          g, G;
        for (g = 0; g < t.length; g++) G = Ue(t[g], p, m, g, W), G && x.push(G);
        return (i = d).push.apply(i, x), x
      }, this.sections = function(t, e) {
        var i;
        if (I || (I = []), !t) return I.slice(0);
        var f = _e(t).map(function(p) {
          return s.create({
            trigger: p,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function(W) {
              p.style.opacity = W.isActive ? "1" : "0", p.style.pointerEvents = W.isActive ? "all" : "none"
            }
          })
        });
        return e && e.add ? (i = I).push.apply(i, f) : I = f.slice(0), f
      }, this.content(r.content), this.wrapper(r.wrapper), this.render = function(t) {
        return pe(t || t === 0 ? t : C)
      }, this.getVelocity = function() {
        return ee.getVelocity(-C)
      }, s.scrollerProxy(b, {
        scrollTop: a,
        scrollHeight: function() {
          return Ce() && K.scrollHeight
        },
        fixedMarkers: r.fixedMarkers !== !1 && !!M,
        content: u,
        getBoundingClientRect: function() {
          return {
            top: 0,
            left: 0,
            width: j.innerWidth,
            height: j.innerHeight
          }
        }
      }), s.defaults({
        scroller: b
      });
      var nt = s.getAll().filter(function(t) {
        return t.scroller === j || t.scroller === b
      });
      nt.forEach(function(t) {
        return t.revert(!0, !0)
      }), _ = s.create({
        animation: h.fromTo(Q, {
          y: 0
        }, {
          y: function() {
            return -Ce()
          },
          immediateRender: !1,
          ease: "none",
          data: "ScrollSmoother",
          duration: 100,
          onUpdate: function() {
            if (this._dur) {
              var e = ye;
              e && (fe(_), Q.y = C), pe(Q.y, e), Se(), S && !k && S(Ie)
            }
          }
        }),
        onRefreshInit: function(e) {
          if (n.isRefreshing = !0, d) {
            var i = s.getAll().filter(function(p) {
              return !!p.pin
            });
            d.forEach(function(p) {
              p.vars.pinnedContainer || i.forEach(function(m) {
                if (m.pin.contains(p.trigger)) {
                  var W = p.vars;
                  W.pinnedContainer = m.pin, p.vars = null, p.init(W, p.animation)
                }
              })
            })
          }
          var f = e.getTween();
          ue = f && f._end > f._dp._time, re = C, Q.y = 0, M && (s.isTouch === 1 && (b.style.position = "absolute"), b.scrollTop = 0, s.isTouch === 1 && (b.style.position = "fixed"))
        },
        onRefresh: function(e) {
          e.animation.invalidate(), e.setPositions(e.start, Ce() / O), ue || fe(e), Q.y = -me() * O, pe(Q.y), de || e.animation.progress(h.utils.clamp(0, 1, re / O / -e.end)), ue && (e.progress -= .001, e.update()), n.isRefreshing = !1
        },
        id: "ScrollSmoother",
        scroller: j,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: function() {
          return Ce() / O
        },
        onScrubComplete: function() {
          ee.reset(), A && A(c)
        },
        scrub: M || !0
      }), this.smooth = function(t) {
        return arguments.length && (M = t || 0, O = M && +r.speed || 1, _.scrubDuration(t)), _.getTween() ? _.getTween().duration() : 0
      }, _.getTween() && (_.getTween().vars.ease = r.ease || Ne), this.scrollTrigger = _, r.effects && this.effects(r.effects === !0 ? "[data-" + ge + "speed], [data-" + ge + "lag]" : r.effects, {
        effectsPadding: r.effectsPadding
      }), r.sections && this.sections(r.sections === !0 ? "[data-section]" : r.sections), nt.forEach(function(t) {
        t.vars.scroller = b, t.revert(!1, !0), t.init(t.vars, t.animation)
      }), this.paused = function(t, e) {
        return arguments.length ? (!!k !== t && (t ? (_.getTween() && _.getTween().pause(), me(-C / O), ee.reset(), N = s.normalizeScroll(), N && N.disable(), k = s.observe({
          preventDefault: !0,
          type: "wheel,touch,scroll",
          debounce: !1,
          allowClicks: !0,
          onChangeY: function() {
            return a(-C)
          }
        }), k.nested = pt(je, "wheel,touch,scroll", !0, e !== !1)) : (k.nested.kill(), k.kill(), k = 0, N && N.enable(), _.progress = (-C / O - _.start) / (_.end - _.start), fe(_))), this) : !!k
      }, this.kill = this.revert = function() {
        c.paused(!1), fe(_), _.kill();
        for (var t = (d || []).concat(I || []), e = t.length; e--;) t[e].kill();
        s.scrollerProxy(b), s.removeEventListener("killAll", H), s.removeEventListener("refresh", Y), b.style.cssText = le, u.style.cssText = ne;
        var i = s.defaults({});
        i && i.scroller === b && s.defaults({
          scroller: j
        }), c.normalizer && s.normalizeScroll(!1), clearInterval(ce), Z = null, o && o.disconnect(), K.style.removeProperty("height"), j.removeEventListener("focusin", F)
      }, this.refresh = function(t, e) {
        return _.refresh(t, e)
      }, v && (this.normalizer = s.normalizeScroll(v === !0 ? {
        debounce: !0,
        content: !M && u
      } : v)), s.config(r), "overscrollBehavior" in j.getComputedStyle(K) && h.set([K, je], {
        overscrollBehavior: "none"
      }), "scrollBehavior" in j.getComputedStyle(K) && h.set([K, je], {
        scrollBehavior: "auto"
      }), j.addEventListener("focusin", F), ce = setInterval(Se, 250), ve.readyState === "loading" || requestAnimationFrame(function() {
        return s.refresh()
      })
    }
    return n.register = function(c) {
      return Le || (h = c || yt(), mt() && window.document && (j = window, ve = document, je = ve.documentElement, K = ve.body), h && (_e = h.utils.toArray, dt = h.utils.clamp, Ne = h.parseEase("expo"), ht = h.core.context || function() {}, _t = h.delayedCall(.2, function() {
        return s.isRefreshing || Z && Z.refresh()
      }).pause(), s = h.core.globals().ScrollTrigger, h.core.globals("ScrollSmoother", n), K && s && (ft = s.core._getVelocityProp, pt = s.core._inputObserver, n.refresh = s.refresh, Le = 1))), Le
    }, Dt(n, [{
      key: "progress",
      get: function() {
        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
      }
    }]), n
  }();
Fe.version = "3.11.5";
Fe.create = function(n) {
  return Z && n && Z.content() === _e(n.content)[0] ? Z : new Fe(n)
};
Fe.get = function() {
  return Z
};
yt() && h.registerPlugin(Fe);
const Nt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB1dnLDcIwEATQdSpIB3FLlEBllEAJtEInxkYxEogo/sz+5kLIYeeJmGAUopwY40pGU21LOUgp3fNrJGMppt22fk5s2/awhD00WcKeWixgmw2a2O5uDexwpyR2uksCC+vgxMJnc2DZPgDkYPYlhSiQWPfTRWLImUJx5EixGrIHoI5sgZhB1vwDoZGBQCmgvBu/hRCu5X09fuYQIDBoScW+BwORJQs5iZtLD4nEl2k6Lm5PLm74Ln5CXWxKXGzzEEXsWGQBG5ZjMHwm56WCzZZY/NMdEsjpLknkcKcGsrtbE9lssIA8tVhC1vyaQtwf35jbjdPXv4ZLPWH+gdgLUW7G4dynidYAAAAASUVORK5CYII=";
const ot = n => (et("data-v-bc76ba33"), n = n(), tt(), n),
  Wt = {
    class: "filter"
  },
  Gt = {
    class: "filter__heading"
  },
  Ut = ot(() => l("img", {
    class: "filter__close-icon",
    src: Nt,
    alt: "close",
    role: "presentation"
  }, null, -1)),
  Vt = [Ut],
  zt = ot(() => l("h3", {
    class: "text-h3 filter__title"
  }, "Filter", -1)),
  Yt = {
    class: "filter__content"
  },
  Ht = {
    class: "text-t4 filter__category-name"
  },
  Qt = {
    class: "filter__category-filters text-t3"
  },
  qt = ["onClick"],
  Kt = ot(() => l("div", {
    class: "filter__category-icon"
  }, [l("span", null, "["), l("span", null, "]")], -1)),
  Xt = {
    class: "filter__name"
  },
  Zt = {
    class: "filter__amount"
  },
  Jt = {
    class: "filter__footer"
  },
  eo = {
    name: "FilterPopup"
  },
  to = Object.assign(eo, {
    props: {
      services: Array,
      categories: Array,
      industries: Array
    },
    emits: ["close-popup", "apply"],
    setup(n, {
      emit: r
    }) {
      const c = z(!0),
        y = Ke("filtersState");

      function $() {
        for (let S in y.value) y.value[S].forEach(E => E.active = !1);
        c.value = !0
      }
      return (S, A) => (J(), se("div", Wt, [l("div", Gt, [l("button", {
        class: "filter__close",
        onClick: A[0] || (A[0] = E => S.$emit("close-popup"))
      }, Vt), l("button", {
        class: "link filter__reset --desktop text-s1",
        onClick: $
      }, " reset all ")]), zt, l("div", Yt, [(J(!0), se(Xe, null, Ze(X(y), (E, P) => (J(), se("div", {
        class: "filter__category",
        key: P
      }, [l("p", Ht, be(P), 1), l("div", Qt, [(J(!0), se(Xe, null, Ze(E, v => {
        var B, u, b, D, _;
        return J(), se("button", {
          class: we(["filter__category-filter filter-inner text-t3", {
            active: v.active
          }]),
          key: v.id,
          onClick: d => {
            v.active = !v.active, c.value = !1
          }
        }, [Kt, l("span", Xt, be(((B = v == null ? void 0 : v.attributes) == null ? void 0 : B.Name) || ((u = v == null ? void 0 : v.attributes) == null ? void 0 : u.Name_Category)), 1), l("span", Zt, be((_ = (D = (b = v == null ? void 0 : v.attributes) == null ? void 0 : b.one_projects) == null ? void 0 : D.data) == null ? void 0 : _.length), 1)], 10, qt)
      }), 128))])]))), 128))]), l("div", Jt, [l("button", {
        class: "link filter__reset --tablet text-s1",
        onClick: $
      }, " reset all "), l("button", {
        class: "btn-main filter__apply",
        onClick: A[1] || (A[1] = E => S.$emit("apply", X(y), X(c)))
      }, " Apply ")])]))
    }
  }),
  oo = We(to, [
    ["__scopeId", "data-v-bc76ba33"]
  ]);
const no = n => (et("data-v-22dc65eb"), n = n(), tt(), n),
  ro = {
    class: "img-outer card__img"
  },
  ao = {
    class: "img-inner"
  },
  io = ["src", "alt"],
  so = {
    class: "card__descr text-t3"
  },
  co = no(() => l("span", {
    class: "card__splitter"
  }, "/", -1)),
  lo = {
    __name: "WorksCard",
    props: {
      grid: Number,
      project: Object
    },
    setup(n) {
      const c = gt().public.baseUrl;
      return (y, $) => {
        var A, E;
        const S = Ft;
        return J(), wt(S, {
          to: `/project/${(E=(A=n.project)==null?void 0:A.attributes)==null?void 0:E.Slug}`,
          class: "card"
        }, {
          default: Je(() => {
            var P, v, B, u, b, D, _, d, I, ce, le, ne, k, N, re;
            return [l("div", {
              class: we(["card__inner", {
                card__sm: n.grid === 4
              }])
            }, [l("div", ro, [l("div", ao, [l("img", {
              class: "img-parallax",
              draggable: "",
              src: X(c) + ((b = (u = (B = (v = (P = n.project) == null ? void 0 : P.attributes) == null ? void 0 : v.Main_Photo) == null ? void 0 : B.data) == null ? void 0 : u.attributes) == null ? void 0 : b.url),
              alt: (_ = (D = n.project) == null ? void 0 : D.attributes) == null ? void 0 : _.Name
            }, null, 8, io)])])], 2), l("div", {
              class: we(["card__title", [n.grid === 2 ? "text-h5" : "text-t3 text-medium mb-0"]])
            }, be((I = (d = n.project) == null ? void 0 : d.attributes) == null ? void 0 : I.Name), 3), l("div", so, [it(be((ne = (le = (ce = n.project) == null ? void 0 : ce.attributes) == null ? void 0 : le.Brief) == null ? void 0 : ne.Location) + " ", 1), co, it(" " + be((re = (N = (k = n.project) == null ? void 0 : k.attributes) == null ? void 0 : N.Brief) == null ? void 0 : re.Size), 1)])]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  },
  uo = We(lo, [
    ["__scopeId", "data-v-22dc65eb"]
  ]);
const fo = {
    __name: "WorksGrid",
    props: {
      grid: Number,
      projects: Array
    },
    setup(n) {
      return (r, c) => (J(), se("div", {
        class: we(["grid", [n.grid === 4 && "column-4", n.grid === 1 && "column-1"]])
      }, [(J(!0), se(Xe, null, Ze(n.projects, y => (J(), wt(uo, {
        key: y.id,
        grid: n.grid,
        project: y
      }, null, 8, ["grid", "project"]))), 128))], 2))
    }
  },
  po = We(fo, [
    ["__scopeId", "data-v-47935be3"]
  ]);
const Ge = n => (et("data-v-0beb329d"), n = n(), tt(), n),
  ho = {
    class: "works-wrap"
  },
  _o = {
    class: "works section"
  },
  wo = {
    class: "works__toggle toggle"
  },
  go = Ge(() => l("div", {
    class: "text-t4 toggle__label"
  }, "Grid view", -1)),
  mo = {
    class: "toggle__inner"
  },
  yo = Ge(() => l("div", {
    class: "toggle__divide"
  }, "/", -1)),
  vo = Ge(() => l("div", {
    class: "toggle__divide"
  }, "/", -1)),
  bo = Ge(() => l("div", {
    class: "page-contact__banner"
  }, [l("div", {
    class: "text-s1 index-contact__banner transparent"
  }, [l("div", {
    class: "some"
  }, [l("span", null, " Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / ")])])], -1)),
  Fo = {
    name: "WorksPage"
  },
  xo = Object.assign(Fo, {
    async setup(n) {
      var Q, Ae, ye, fe, pe;
      let r, c;
      const $ = gt().public.baseUrl,
        {
          data: S
        } = ([r, c] = xt(async () => jt("portfolioAll", async () => {
          const [a, o, w, F] = await Promise.all([$fetch($ + "/api/portfolio?populate=deep,3"), $fetch($ + "/api/one-projects?sort[0]=sort_order:asc&fields[0]=Name&fields[1]=Slug&populate[Brief]=1&populate[Main_Photo][fields][0]=name&populate[Main_Photo][fields][0]=url&pagination[limit]=100"), $fetch($ + "/api/categories?fields[0]=Name_Category&populate[one_projects][fields][1]=Name&populate[one_projects][fields][1]=Slug"), $fetch($ + "/api/one-industries?fields[0]=Name&populate[one_projects][fields][1]=Name&populate[one_projects][fields][1]=Slug")]);
          return {
            portfolioResponse: a,
            projectsResponse: o,
            categoriesResponse: w,
            industriesResponse: F
          }
        })), r = await r, c(), r);
      St(S.value.portfolioResponse.data.attributes.Seo_Block);
      const A = S.value.projectsResponse.data,
        E = S.value.categoriesResponse.data,
        P = S.value.industriesResponse.data,
        v = (Q = S.value.portfolioResponse) == null ? void 0 : Q.data,
        B = Ke("services"),
        u = Ke("filtersState"),
        b = (Ae = u == null ? void 0 : u.value) == null ? void 0 : Ae.setCategory;
      (ye = v == null ? void 0 : v.Seo_Block) != null && ye.metaTitle, (fe = u.value) != null && fe.init && (u.value = {
        Services: B.value,
        Industry: P,
        Category: E
      }), b && ((pe = u.value.Category) == null || pe.forEach(a => {
        (a == null ? void 0 : a.id) === b && (a.active = !0)
      }));
      const D = z([...A]);
      oe.registerPlugin(st, ct, Fe, At), kt({
        title: "Works"
      }), Ct();
      const _ = z(1),
        d = z(null),
        I = z(!1),
        ce = z(null),
        le = z(null),
        ne = z([]);
      z(0);
      const k = z(2),
        N = z(!1),
        re = z(A[0]);
      async function ue(a) {
        N.value || (N.value = !0, await Se(), Ie(), k.value = a, await Oe(), ct.refresh(), qe({
          selector: ".img-parallax"
        }), ee(), N.value = !1)
      }

      function Ie() {
        oe.utils.toArray(".img-parallax").forEach(o => {
          var w, F;
          o && (o != null && o._parallaxTween) && ((w = o == null ? void 0 : o._parallaxTween) != null && w.kill) && ((F = o == null ? void 0 : o._parallaxTween) == null || F.kill(), o._parallaxTween.kill = null, o.style.top = "")
        })
      }

      function ge() {
        const a = document.querySelectorAll(".btn-main");
        a && a.forEach(o => {
          new st(o, {
            type: "chars",
            charsClass: "btn-char"
          }).chars.forEach((F, te) => {
            F.setAttribute("data-char", F.textContent), F.style = `--char-index: ${te}`
          })
        })
      }

      function me(a) {
        const o = A.find(w => w.id == a);
        o !== re.value && (re.value = o)
      }

      function M() {
        I.value = !0, oe.fromTo(".modal", {
          yPercent: 100
        }, {
          yPercent: 0,
          duration: 1.2,
          ease: Re
        })
      }
      async function O() {
        const a = new Promise(w => {
            oe.to(".popup", {
              duration: 1.2,
              ease: Re,
              background: "transparent",
              transition: "unset",
              clearProps: "all",
              onComplete: w
            })
          }),
          o = new Promise(w => {
            oe.to(".modal", {
              yPercent: 100,
              duration: 1.2,
              ease: Re,
              clearProps: "all",
              onComplete: w
            })
          });
        Promise.all([a, o]).then(() => {
          I.value = !1
        })
      }

      function C() {
        var o;
        ne.value = [...document.querySelectorAll(".list__item")];
        const a = ne.value[0];
        ce.value = (o = a == null ? void 0 : a.getBoundingClientRect()) == null ? void 0 : o.height, le.value = document == null ? void 0 : document.querySelector(".list")
      }

      function xe() {
        C(), ge(), qe({
          selector: ".img-parallax"
        }), ee()
      }
      async function de(a, o) {
        await Se(), Ie();
        const w = [],
          F = new Set;
        let te = !0;
        for (const Y in a) a[Y].forEach(L => {
          L.active && (te = !1)
        });
        if (te) D.value = A;
        else {
          for (const Y in a) a[Y].forEach(L => {
            L.active && w.push(L)
          });
          A.forEach(Y => {
            w.forEach(H => {
              var $e, ke;
              const L = ($e = H == null ? void 0 : H.attributes) == null ? void 0 : $e.one_projects;
              (ke = L == null ? void 0 : L.data) == null || ke.forEach(Ue => {
                Ue.id === Y.id && F.add(Y)
              })
            })
          }), D.value = Array.from(F)
        }
        await Oe(), C(), await Oe(), _.value = 1, await Oe(), ee(), qe({
          selector: ".img-parallax"
        }), O()
      }

      function ee() {
        oe.utils.toArray(".card").forEach(o => {
          var w, F;
          o && (o != null && o._tween) && ((w = o == null ? void 0 : o._tween) != null && w.kill) && ((F = o == null ? void 0 : o._tween) == null || F.kill(), o._tween = null), o._tween = oe.fromTo(o, {
            y: 40,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: Re,
            scrollTrigger: {
              trigger: o,
              start: "top 95%"
            }
          })
        })
      }
      async function Se() {
        const a = oe.utils.toArray(".card");
        return a.forEach(o => {
          var w, F;
          o && (o != null && o._tween) && ((w = o == null ? void 0 : o._tween) != null && w.kill) && ((F = o == null ? void 0 : o._tween) == null || F.kill(), o._tween = null)
        }), new Promise(o => {
          oe.to(a, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: Re,
            stagger: .03,
            onComplete: o
          })
        })
      }
      return lt(() => _.value, () => {
        me(_.value)
      }), lt(() => I.value, () => {
        var a, o;
        !((a = d == null ? void 0 : d.value) != null && a.disable) && !((o = d == null ? void 0 : d.value) != null && o.enable) || (I.value ? d.value.disable() : d.value.enable())
      }), Et(() => [...D.value].sort((a, o) => {
        var w, F;
        return ((w = a == null ? void 0 : a.attributes) == null ? void 0 : w.sort_order) - ((F = o == null ? void 0 : o.attributes) == null ? void 0 : F.sort_order)
      })), Tt(() => {
        de(u.value)
      }), Pt(async () => {
        setTimeout(() => {
          xe()
        }, 0)
      }), Rt(() => {
        d.value && d.value.kill()
      }), (a, o) => {
        const w = bt,
          F = oo,
          te = It,
          Y = $t,
          H = Bt;
        return J(), se("div", ho, [l("div", _o, [he(po, {
          projects: X(D),
          grid: X(k)
        }, null, 8, ["projects", "grid"]), he(w, {
          class: "works__filter --desktop",
          label: "Filter",
          "no-difference": "",
          onClicked: M
        })]), l("div", wo, [go, l("div", mo, [l("button", {
          class: we(["toggle__btn text-t2", {
            active: X(k) === 1
          }]),
          onClick: o[0] || (o[0] = L => ue(1))
        }, " 1 ", 2), yo, l("button", {
          class: we(["toggle__btn text-t2", {
            active: X(k) === 2
          }]),
          onClick: o[1] || (o[1] = L => ue(2))
        }, " 2 ", 2), vo, l("button", {
          class: we(["toggle__btn text-t2", {
            active: X(k) === 4
          }]),
          onClick: o[2] || (o[2] = L => ue(4))
        }, " 4 ", 2)])]), he(w, {
          class: "works__filter --tablet",
          label: "Filter",
          onClicked: M
        }), he(Y, null, {
          default: Je(() => [he(te, {
            "data-lenis-prevent": "",
            "is-open": X(I),
            position: "right",
            "no-close": ""
          }, {
            default: Je(() => [he(F, {
              onClosePopup: O,
              onApply: de
            })]),
            _: 1
          }, 8, ["is-open"])]),
          _: 1
        }), bo, he(H, {
          class: "works__footer"
        })])
      }
    }
  }),
  To = We(xo, [
    ["__scopeId", "data-v-0beb329d"]
  ]);
export {
  To as
  default
};