/* https://13322566869.com/_nuxt/_slug_.a6b589b2.js */
var _r = Object.defineProperty;
var gr = (e, t, n) => t in e ? _r(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var Q = (e, t, n) => (gr(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
  v as Ut,
  o as Z,
  b as ne,
  p as Dn,
  m as Rn,
  i as W,
  d as Pn,
  t as _e,
  L as kt,
  e as Xe,
  f as On,
  M as Mn,
  I as mr,
  g as pt,
  N as Er,
  u as pr,
  w as yr,
  c as Ar,
  a as un,
  x as cn,
  r as Ce,
  K as Sr,
  C as Ir,
  h as $,
  H as Ye,
  F as $e,
  j as He,
  k as ln,
  O as Tr,
  l as Lr,
  B as wr,
  n as fn
} from "./entry.3d26c39b.js";
import {
  a as vn,
  b as br,
  _ as Cr
} from "./is-video.b47a4014.js";
import {
  _ as Nr
} from "./Link.d8229fef.js";
import {
  s as Dr
} from "./setHeaderMeta.d0135f55.js";
import {
  B as Rr,
  a as Pr
} from "./delay.7101e9ce.js";
import {
  f as dn,
  s as hn
} from "./setPhotoFormat.dfb16e11.js";
const Or = {},
  jn = e => (Dn("data-v-664473a0"), e = e(), Rn(), e),
  Mr = {
    class: "plus-icon",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  jr = jn(() => W("rect", {
    x: "20",
    width: "1",
    height: "41",
    fill: "#292929"
  }, null, -1)),
  Vr = jn(() => W("rect", {
    y: "20",
    width: "41",
    height: "1",
    fill: "#292929"
  }, null, -1)),
  kr = [jr, Vr];

function xr(e, t) {
  return Z(), ne("svg", Mr, kr)
}
const Vn = Ut(Or, [
    ["render", xr],
    ["__scopeId", "data-v-664473a0"]
  ]),
  Fr = {
    class: "header-project"
  },
  Wr = {
    class: "header-project__head _container"
  },
  zr = {
    class: "header-project__name"
  },
  Br = {
    class: "header-project__live"
  },
  Gr = ["href"],
  Ur = {
    class: "header-project__close"
  },
  Yr = {
    class: "header-project__close-button hover-fadein"
  },
  $r = Pn({
    __name: "Header",
    props: {
      name: {},
      date: {},
      url: {}
    },
    setup(e) {
      return (t, n) => {
        const r = Vn,
          a = Mn;
        return Z(), ne("div", Fr, [W("div", Wr, [W("div", zr, _e(t.name), 1), W("div", Br, _e(t.date), 1), t.url ? (Z(), ne("a", {
          key: 0,
          href: t.url,
          target: "_blank",
          class: "header-project__date hover-fadein",
          rel: "noonpener noreferrer"
        }, " Live project ", 8, Gr)) : kt("", !0), W("div", Ur, [Xe(a, {
          to: "/works"
        }, {
          default: On(() => [W("div", Yr, [Xe(r)])]),
          _: 1
        })])])])
      }
    }
  });
const Hr = Ut($r, [
  ["__scopeId", "data-v-e38dc608"]
]);
class Xr extends Rr {
  constructor(t) {
    super(t), this.initHeroSection()
  }
  async initHeroSection() {
    await Pr(), mr.timeline().to(".header-project", {
      y: 0
    })
  }
}
class Kr {
  constructor({
    slider: t,
    slides: n,
    spaceStart: r,
    itemMargin: a
  }) {
    Q(this, "projectItems");
    Q(this, "projectItem");
    Q(this, "animationFrameId");
    Q(this, "dispose");
    Q(this, "spaceStart", 0);
    Q(this, "wrapWidth", 0);
    Q(this, "distance", 0);
    Q(this, "itemsDistance", []);
    Q(this, "itemMargin", 0);
    Q(this, "scrollY", 0);
    Q(this, "y", 0);
    Q(this, "touchStart", 0);
    Q(this, "touchX", 0);
    Q(this, "isDragging", !1);
    Q(this, "scrollSpeed", 0);
    Q(this, "oldScrollY", 0);
    Q(this, "_sensitivity", .8);
    Q(this, "_scale_sensitivity", .0016);
    this.projectItems = t, this.projectItem = n, this.spaceStart = r, this.itemMargin = a, this.projectItems && (this.initCarousel(), this.setupEventListeners())
  }
  setupEventListeners() {
    this.projectItems && (this.projectItems.addEventListener("wheel", this.handleMouseWheel.bind(this)), this.projectItems.addEventListener("mousedown", this.handleTouchStart.bind(this)), this.projectItems.addEventListener("mousemove", this.handleTouchMove.bind(this)), this.projectItems.addEventListener("mouseup", this.handleTouchEnd.bind(this)), this.projectItems.addEventListener("mouseleave", this.handleTouchEnd.bind(this)))
  }
  lerp(t, n, r) {
    return t * (1 - r) + n * r
  }
  initCarousel() {
    this.projectItems && this.projectItem && (this.distance = this.spaceStart, this.projectItem.forEach(t => {
      this.distance += t.clientWidth, this.itemsDistance.push(this.distance)
    }), this.wrapWidth = this.itemsDistance[this.itemsDistance.length - 1] + (this.spaceStart || 0) + this.itemMargin * this.projectItem.length, this.dispose = t => {
      pt.set(this.projectItem, {
        x: n => n ? this.itemsDistance[n - 1] - t + this.itemMargin * n : (this.spaceStart || 0) - t + this.itemMargin * n
      })
    }, this.dispose(0), this.render())
  }
  render() {
    this.animationFrameId = requestAnimationFrame(() => this.render()), this.y = this.lerp(this.y, this.scrollY, .1), this.dispose && this.dispose(this.y), this.scrollSpeed = this.y - this.oldScrollY, this.oldScrollY = this.y, pt.set(this.projectItem, {
      scale: 1 - Math.min(100, Math.abs(this.scrollSpeed)) * this._scale_sensitivity
    })
  }
  handleTouchMove(t) {
    if (!this.isDragging) return;
    let n;
    if (t instanceof MouseEvent) n = -t.clientX;
    else if (t instanceof TouchEvent && t.touches.length > 0) n = -t.touches[0].clientX;
    else return;
    this.spaceStart && this.projectItems && (this.scrollY += (n - this.touchStart) / this._sensitivity, this.scrollY = Math.max(0, Math.min(this.scrollY, this.wrapWidth - this.projectItems.clientWidth))), this.touchStart = n
  }
  handleTouchStart(t) {
    if (this.isDragging = !0, t instanceof MouseEvent) this.touchStart = -t.clientX;
    else if (t instanceof TouchEvent && t.touches.length > 0) this.touchStart = -t.touches[0].clientX;
    else return;
    this.projectItems && this.projectItems.classList.add("is-dragging")
  }
  handleTouchEnd() {
    this.isDragging = !1, this.projectItems && this.projectItems.classList.remove("is-dragging")
  }
  handleMouseWheel(t) {
    this.spaceStart && this.projectItems && (this.scrollY += t.deltaY * .9, this.scrollY = Math.max(0, Math.min(this.scrollY, this.wrapWidth - this.projectItems.clientWidth)))
  }
}

function _n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function qr(e, t, n) {
  return t && _n(e.prototype, t), n && _n(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var gn = "(prefers-reduced-motion: reduce)",
  Ve = 1,
  Zr = 2,
  Fe = 3,
  ze = 4,
  at = 5,
  _t = 6,
  yt = 7,
  Jr = {
    CREATED: Ve,
    MOUNTED: Zr,
    IDLE: Fe,
    MOVING: ze,
    SCROLLING: at,
    DRAGGING: _t,
    DESTROYED: yt
  };

function ye(e) {
  e.length = 0
}

function Le(e, t, n) {
  return Array.prototype.slice.call(e, t, n)
}

function G(e) {
  return e.bind.apply(e, [null].concat(Le(arguments, 1)))
}
var kn = setTimeout,
  xt = function() {};

function mn(e) {
  return requestAnimationFrame(e)
}

function Tt(e, t) {
  return typeof t === e
}

function Ze(e) {
  return !$t(e) && Tt("object", e)
}
var Yt = Array.isArray,
  xn = G(Tt, "function"),
  Se = G(Tt, "string"),
  ot = G(Tt, "undefined");

function $t(e) {
  return e === null
}

function Fn(e) {
  try {
    return e instanceof(e.ownerDocument.defaultView || window).HTMLElement
  } catch {
    return !1
  }
}

function st(e) {
  return Yt(e) ? e : [e]
}

function ue(e, t) {
  st(e).forEach(t)
}

function Ht(e, t) {
  return e.indexOf(t) > -1
}

function gt(e, t) {
  return e.push.apply(e, st(t)), e
}

function me(e, t, n) {
  e && ue(t, function(r) {
    r && e.classList[n ? "add" : "remove"](r)
  })
}

function ve(e, t) {
  me(e, Se(t) ? t.split(" ") : t, !0)
}

function ut(e, t) {
  ue(t, e.appendChild.bind(e))
}

function Xt(e, t) {
  ue(e, function(n) {
    var r = (t || n).parentNode;
    r && r.insertBefore(n, t)
  })
}

function Je(e, t) {
  return Fn(e) && (e.msMatchesSelector || e.matches).call(e, t)
}

function Wn(e, t) {
  var n = e ? Le(e.children) : [];
  return t ? n.filter(function(r) {
    return Je(r, t)
  }) : n
}

function ct(e, t) {
  return t ? Wn(e, t)[0] : e.firstElementChild
}
var Qe = Object.keys;

function De(e, t, n) {
  return e && (n ? Qe(e).reverse() : Qe(e)).forEach(function(r) {
    r !== "__proto__" && t(e[r], r)
  }), e
}

function et(e) {
  return Le(arguments, 1).forEach(function(t) {
    De(t, function(n, r) {
      e[r] = t[r]
    })
  }), e
}

function Ae(e) {
  return Le(arguments, 1).forEach(function(t) {
    De(t, function(n, r) {
      Yt(n) ? e[r] = n.slice() : Ze(n) ? e[r] = Ae({}, Ze(e[r]) ? e[r] : {}, n) : e[r] = n
    })
  }), e
}

function En(e, t) {
  ue(t || Qe(e), function(n) {
    delete e[n]
  })
}

function de(e, t) {
  ue(e, function(n) {
    ue(t, function(r) {
      n && n.removeAttribute(r)
    })
  })
}

function k(e, t, n) {
  Ze(t) ? De(t, function(r, a) {
    k(e, a, r)
  }) : ue(e, function(r) {
    $t(n) || n === "" ? de(r, t) : r.setAttribute(t, String(n))
  })
}

function ke(e, t, n) {
  var r = document.createElement(e);
  return t && (Se(t) ? ve(r, t) : k(r, t)), n && ut(n, r), r
}

function ce(e, t, n) {
  if (ot(n)) return getComputedStyle(e)[t];
  $t(n) || (e.style[t] = "" + n)
}

function tt(e, t) {
  ce(e, "display", t)
}

function zn(e) {
  e.setActive && e.setActive() || e.focus({
    preventScroll: !0
  })
}

function le(e, t) {
  return e.getAttribute(t)
}

function pn(e, t) {
  return e && e.classList.contains(t)
}

function oe(e) {
  return e.getBoundingClientRect()
}

function Re(e) {
  ue(e, function(t) {
    t && t.parentNode && t.parentNode.removeChild(t)
  })
}

function Bn(e) {
  return ct(new DOMParser().parseFromString(e, "text/html").body)
}

function ge(e, t) {
  e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation())
}

function Gn(e, t) {
  return e && e.querySelector(t)
}

function Kt(e, t) {
  return t ? Le(e.querySelectorAll(t)) : []
}

function Ee(e, t) {
  me(e, t, !1)
}

function Ft(e) {
  return e.timeStamp
}

function Ne(e) {
  return Se(e) ? e : e ? e + "px" : ""
}
var lt = "splide",
  qt = "data-" + lt;

function Ke(e, t) {
  if (!e) throw new Error("[" + lt + "] " + (t || ""))
}
var Ie = Math.min,
  At = Math.max,
  St = Math.floor,
  nt = Math.ceil,
  ie = Math.abs;

function Un(e, t, n) {
  return ie(e - t) < n
}

function mt(e, t, n, r) {
  var a = Ie(t, n),
    d = At(t, n);
  return r ? a < e && e < d : a <= e && e <= d
}

function Me(e, t, n) {
  var r = Ie(t, n),
    a = At(t, n);
  return Ie(At(r, e), a)
}

function Wt(e) {
  return +(e > 0) - +(e < 0)
}

function zt(e, t) {
  return ue(t, function(n) {
    e = e.replace("%s", "" + n)
  }), e
}

function Zt(e) {
  return e < 10 ? "0" + e : "" + e
}
var yn = {};

function Qr(e) {
  return "" + e + Zt(yn[e] = (yn[e] || 0) + 1)
}

function Yn() {
  var e = [];

  function t(i, u, c, l) {
    a(i, u, function(o, m, v) {
      var h = "addEventListener" in o,
        s = h ? o.removeEventListener.bind(o, m, c, l) : o.removeListener.bind(o, c);
      h ? o.addEventListener(m, c, l) : o.addListener(c), e.push([o, m, v, c, s])
    })
  }

  function n(i, u, c) {
    a(i, u, function(l, o, m) {
      e = e.filter(function(v) {
        return v[0] === l && v[1] === o && v[2] === m && (!c || v[3] === c) ? (v[4](), !1) : !0
      })
    })
  }

  function r(i, u, c) {
    var l, o = !0;
    return typeof CustomEvent == "function" ? l = new CustomEvent(u, {
      bubbles: o,
      detail: c
    }) : (l = document.createEvent("CustomEvent"), l.initCustomEvent(u, o, !1, c)), i.dispatchEvent(l), l
  }

  function a(i, u, c) {
    ue(i, function(l) {
      l && ue(u, function(o) {
        o.split(" ").forEach(function(m) {
          var v = m.split(".");
          c(l, v[0], v[1])
        })
      })
    })
  }

  function d() {
    e.forEach(function(i) {
      i[4]()
    }), ye(e)
  }
  return {
    bind: t,
    unbind: n,
    dispatch: r,
    destroy: d
  }
}
var Oe = "mounted",
  An = "ready",
  Te = "move",
  ft = "moved",
  $n = "click",
  ei = "active",
  ti = "inactive",
  ni = "visible",
  ri = "hidden",
  ee = "refresh",
  ae = "updated",
  rt = "resize",
  Jt = "resized",
  ii = "drag",
  ai = "dragging",
  oi = "dragged",
  Qt = "scroll",
  Be = "scrolled",
  si = "overflow",
  Hn = "destroy",
  ui = "arrows:mounted",
  ci = "arrows:updated",
  li = "pagination:mounted",
  fi = "pagination:updated",
  Xn = "navigation:mounted",
  Kn = "autoplay:play",
  vi = "autoplay:playing",
  qn = "autoplay:pause",
  Zn = "lazyload:loaded",
  Jn = "sk",
  Qn = "sh",
  It = "ei";

function H(e) {
  var t = e ? e.event.bus : document.createDocumentFragment(),
    n = Yn();

  function r(d, i) {
    n.bind(t, st(d).join(" "), function(u) {
      i.apply(i, Yt(u.detail) ? u.detail : [])
    })
  }

  function a(d) {
    n.dispatch(t, d, Le(arguments, 1))
  }
  return e && e.event.on(Hn, n.destroy), et(n, {
    bus: t,
    on: r,
    off: G(n.unbind, t),
    emit: a
  })
}

function Lt(e, t, n, r) {
  var a = Date.now,
    d, i = 0,
    u, c = !0,
    l = 0;

  function o() {
    if (!c) {
      if (i = e ? Ie((a() - d) / e, 1) : 1, n && n(i), i >= 1 && (t(), d = a(), r && ++l >= r)) return v();
      u = mn(o)
    }
  }

  function m(E) {
    E || s(), d = a() - (E ? i * e : 0), c = !1, u = mn(o)
  }

  function v() {
    c = !0
  }

  function h() {
    d = a(), i = 0, n && n(i)
  }

  function s() {
    u && cancelAnimationFrame(u), i = 0, u = 0, c = !0
  }

  function f(E) {
    e = E
  }

  function y() {
    return c
  }
  return {
    start: m,
    rewind: h,
    pause: v,
    cancel: s,
    set: f,
    isPaused: y
  }
}

function di(e) {
  var t = e;

  function n(a) {
    t = a
  }

  function r(a) {
    return Ht(st(a), t)
  }
  return {
    set: n,
    is: r
  }
}

function hi(e, t) {
  var n = Lt(t || 0, e, null, 1);
  return function() {
    n.isPaused() && n.start()
  }
}

function _i(e, t, n) {
  var r = e.state,
    a = n.breakpoints || {},
    d = n.reducedMotion || {},
    i = Yn(),
    u = [];

  function c() {
    var s = n.mediaQuery === "min";
    Qe(a).sort(function(f, y) {
      return s ? +f - +y : +y - +f
    }).forEach(function(f) {
      o(a[f], "(" + (s ? "min" : "max") + "-width:" + f + "px)")
    }), o(d, gn), m()
  }

  function l(s) {
    s && i.destroy()
  }

  function o(s, f) {
    var y = matchMedia(f);
    i.bind(y, "change", m), u.push([s, y])
  }

  function m() {
    var s = r.is(yt),
      f = n.direction,
      y = u.reduce(function(E, _) {
        return Ae(E, _[1].matches ? _[0] : {})
      }, {});
    En(n), h(y), n.destroy ? e.destroy(n.destroy === "completely") : s ? (l(!0), e.mount()) : f !== n.direction && e.refresh()
  }

  function v(s) {
    matchMedia(gn).matches && (s ? Ae(n, d) : En(n, Qe(d)))
  }

  function h(s, f, y) {
    Ae(n, s), f && Ae(Object.getPrototypeOf(n), s), (y || !r.is(Ve)) && e.emit(ae, n)
  }
  return {
    setup: c,
    destroy: l,
    reduce: v,
    set: h
  }
}
var wt = "Arrow",
  bt = wt + "Left",
  Ct = wt + "Right",
  er = wt + "Up",
  tr = wt + "Down",
  Sn = "rtl",
  Nt = "ttb",
  Ot = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [er, Ct],
    ArrowRight: [tr, bt]
  };

function gi(e, t, n) {
  function r(d, i, u) {
    u = u || n.direction;
    var c = u === Sn && !i ? 1 : u === Nt ? 0 : -1;
    return Ot[d] && Ot[d][c] || d.replace(/width|left|right/i, function(l, o) {
      var m = Ot[l.toLowerCase()][c] || l;
      return o > 0 ? m.charAt(0).toUpperCase() + m.slice(1) : m
    })
  }

  function a(d) {
    return d * (n.direction === Sn ? 1 : -1)
  }
  return {
    resolve: r,
    orient: a
  }
}
var pe = "role",
  xe = "tabindex",
  mi = "disabled",
  fe = "aria-",
  vt = fe + "controls",
  nr = fe + "current",
  In = fe + "selected",
  se = fe + "label",
  en = fe + "labelledby",
  rr = fe + "hidden",
  tn = fe + "orientation",
  it = fe + "roledescription",
  Tn = fe + "live",
  Ln = fe + "busy",
  wn = fe + "atomic",
  nn = [pe, xe, mi, vt, nr, se, en, rr, tn, it],
  he = lt + "__",
  we = "is-",
  Mt = lt,
  bn = he + "track",
  Ei = he + "list",
  Dt = he + "slide",
  ir = Dt + "--clone",
  pi = Dt + "__container",
  rn = he + "arrows",
  Rt = he + "arrow",
  ar = Rt + "--prev",
  or = Rt + "--next",
  Pt = he + "pagination",
  sr = Pt + "__page",
  yi = he + "progress",
  Ai = yi + "__bar",
  Si = he + "toggle",
  Ii = he + "spinner",
  Ti = he + "sr",
  Li = we + "initialized",
  Pe = we + "active",
  ur = we + "prev",
  cr = we + "next",
  Bt = we + "visible",
  Gt = we + "loading",
  lr = we + "focus-in",
  fr = we + "overflow",
  wi = [Pe, Bt, ur, cr, Gt, lr, fr],
  bi = {
    slide: Dt,
    clone: ir,
    arrows: rn,
    arrow: Rt,
    prev: ar,
    next: or,
    pagination: Pt,
    page: sr,
    spinner: Ii
  };

function Ci(e, t) {
  if (xn(e.closest)) return e.closest(t);
  for (var n = e; n && n.nodeType === 1 && !Je(n, t);) n = n.parentElement;
  return n
}
var Ni = 5,
  Cn = 200,
  vr = "touchstart mousedown",
  jt = "touchmove mousemove",
  Vt = "touchend touchcancel mouseup click";

function Di(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.bind,
    i = e.root,
    u = n.i18n,
    c = {},
    l = [],
    o = [],
    m = [],
    v, h, s;

  function f() {
    g(), O(), _()
  }

  function y() {
    a(ee, E), a(ee, f), a(ae, _), d(document, vr + " keydown", function(p) {
      s = p.type === "keydown"
    }, {
      capture: !0
    }), d(i, "focusin", function() {
      me(i, lr, !!s)
    })
  }

  function E(p) {
    var D = nn.concat("style");
    ye(l), Ee(i, o), Ee(v, m), de([v, h], D), de(i, p ? D : ["style", it])
  }

  function _() {
    Ee(i, o), Ee(v, m), o = L(Mt), m = L(bn), ve(i, o), ve(v, m), k(i, se, n.label), k(i, en, n.labelledby)
  }

  function g() {
    v = C("." + bn), h = ct(v, "." + Ei), Ke(v && h, "A track/list element is missing."), gt(l, Wn(h, "." + Dt + ":not(." + ir + ")")), De({
      arrows: rn,
      pagination: Pt,
      prev: ar,
      next: or,
      bar: Ai,
      toggle: Si
    }, function(p, D) {
      c[D] = C("." + p)
    }), et(c, {
      root: i,
      track: v,
      list: h,
      slides: l
    })
  }

  function O() {
    var p = i.id || Qr(lt),
      D = n.role;
    i.id = p, v.id = v.id || p + "-track", h.id = h.id || p + "-list", !le(i, pe) && i.tagName !== "SECTION" && D && k(i, pe, D), k(i, it, u.carousel), k(h, pe, "presentation")
  }

  function C(p) {
    var D = Gn(i, p);
    return D && Ci(D, "." + Mt) === i ? D : void 0
  }

  function L(p) {
    return [p + "--" + n.type, p + "--" + n.direction, n.drag && p + "--draggable", n.isNavigation && p + "--nav", p === Mt && Pe]
  }
  return et(c, {
    setup: f,
    mount: y,
    destroy: E
  })
}
var We = "slide",
  Ge = "loop",
  dt = "fade";

function Ri(e, t, n, r) {
  var a = H(e),
    d = a.on,
    i = a.emit,
    u = a.bind,
    c = e.Components,
    l = e.root,
    o = e.options,
    m = o.isNavigation,
    v = o.updateOnMove,
    h = o.i18n,
    s = o.pagination,
    f = o.slideFocus,
    y = c.Direction.resolve,
    E = le(r, "style"),
    _ = le(r, se),
    g = n > -1,
    O = ct(r, "." + pi),
    C;

  function L() {
    g || (r.id = l.id + "-slide" + Zt(t + 1), k(r, pe, s ? "tabpanel" : "group"), k(r, it, h.slide), k(r, se, _ || zt(h.slideLabel, [t + 1, e.length]))), p()
  }

  function p() {
    u(r, "click", G(i, $n, M)), u(r, "keydown", G(i, Jn, M)), d([ft, Qn, Be], I), d(Xn, x), v && d(Te, P)
  }

  function D() {
    C = !0, a.destroy(), Ee(r, wi), de(r, nn), k(r, "style", E), k(r, se, _ || "")
  }

  function x() {
    var R = e.splides.map(function(A) {
      var N = A.splide.Components.Slides.getAt(t);
      return N ? N.slide.id : ""
    }).join(" ");
    k(r, se, zt(h.slideX, (g ? n : t) + 1)), k(r, vt, R), k(r, pe, f ? "button" : ""), f && de(r, it)
  }

  function P() {
    C || I()
  }

  function I() {
    if (!C) {
      var R = e.index;
      T(), w(), me(r, ur, t === R - 1), me(r, cr, t === R + 1)
    }
  }

  function T() {
    var R = V();
    R !== pn(r, Pe) && (me(r, Pe, R), k(r, nr, m && R || ""), i(R ? ei : ti, M))
  }

  function w() {
    var R = U(),
      A = !R && (!V() || g);
    if (e.state.is([ze, at]) || k(r, rr, A || ""), k(Kt(r, o.focusableNodes || ""), xe, A ? -1 : ""), f && k(r, xe, A ? -1 : 0), R !== pn(r, Bt) && (me(r, Bt, R), i(R ? ni : ri, M)), !R && document.activeElement === r) {
      var N = c.Slides.getAt(e.index);
      N && zn(N.slide)
    }
  }

  function j(R, A, N) {
    ce(N && O || r, R, A)
  }

  function V() {
    var R = e.index;
    return R === t || o.cloneStatus && R === n
  }

  function U() {
    if (e.is(dt)) return V();
    var R = oe(c.Elements.track),
      A = oe(r),
      N = y("left", !0),
      F = y("right", !0);
    return St(R[N]) <= nt(A[N]) && St(A[F]) <= nt(R[F])
  }

  function z(R, A) {
    var N = ie(R - t);
    return !g && (o.rewind || e.is(Ge)) && (N = Ie(N, e.length - N)), N <= A
  }
  var M = {
    index: t,
    slideIndex: n,
    slide: r,
    container: O,
    isClone: g,
    mount: L,
    destroy: D,
    update: I,
    style: j,
    isWithin: z
  };
  return M
}

function Pi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = r.bind,
    u = t.Elements,
    c = u.slides,
    l = u.list,
    o = [];

  function m() {
    v(), a(ee, h), a(ee, v)
  }

  function v() {
    c.forEach(function(I, T) {
      f(I, T, -1)
    })
  }

  function h() {
    C(function(I) {
      I.destroy()
    }), ye(o)
  }

  function s() {
    C(function(I) {
      I.update()
    })
  }

  function f(I, T, w) {
    var j = Ri(e, T, w, I);
    j.mount(), o.push(j), o.sort(function(V, U) {
      return V.index - U.index
    })
  }

  function y(I) {
    return I ? L(function(T) {
      return !T.isClone
    }) : o
  }

  function E(I) {
    var T = t.Controller,
      w = T.toIndex(I),
      j = T.hasFocus() ? 1 : n.perPage;
    return L(function(V) {
      return mt(V.index, w, w + j - 1)
    })
  }

  function _(I) {
    return L(I)[0]
  }

  function g(I, T) {
    ue(I, function(w) {
      if (Se(w) && (w = Bn(w)), Fn(w)) {
        var j = c[T];
        j ? Xt(w, j) : ut(l, w), ve(w, n.classes.slide), D(w, G(d, rt))
      }
    }), d(ee)
  }

  function O(I) {
    Re(L(I).map(function(T) {
      return T.slide
    })), d(ee)
  }

  function C(I, T) {
    y(T).forEach(I)
  }

  function L(I) {
    return o.filter(xn(I) ? I : function(T) {
      return Se(I) ? Je(T.slide, I) : Ht(st(I), T.index)
    })
  }

  function p(I, T, w) {
    C(function(j) {
      j.style(I, T, w)
    })
  }

  function D(I, T) {
    var w = Kt(I, "img"),
      j = w.length;
    j ? w.forEach(function(V) {
      i(V, "load error", function() {
        --j || T()
      })
    }) : T()
  }

  function x(I) {
    return I ? c.length : o.length
  }

  function P() {
    return o.length > n.perPage
  }
  return {
    mount: m,
    destroy: h,
    update: s,
    register: f,
    get: y,
    getIn: E,
    getAt: _,
    add: g,
    remove: O,
    forEach: C,
    filter: L,
    style: p,
    getLength: x,
    isEnough: P
  }
}

function Oi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.bind,
    i = r.emit,
    u = t.Slides,
    c = t.Direction.resolve,
    l = t.Elements,
    o = l.root,
    m = l.track,
    v = l.list,
    h = u.getAt,
    s = u.style,
    f, y, E;

  function _() {
    g(), d(window, "resize load", hi(G(i, rt))), a([ae, ee], g), a(rt, O)
  }

  function g() {
    f = n.direction === Nt, ce(o, "maxWidth", Ne(n.width)), ce(m, c("paddingLeft"), C(!1)), ce(m, c("paddingRight"), C(!0)), O(!0)
  }

  function O(M) {
    var R = oe(o);
    (M || y.width !== R.width || y.height !== R.height) && (ce(m, "height", L()), s(c("marginRight"), Ne(n.gap)), s("width", D()), s("height", x(), !0), y = R, i(Jt), E !== (E = z()) && (me(o, fr, E), i(si, E)))
  }

  function C(M) {
    var R = n.padding,
      A = c(M ? "right" : "left");
    return R && Ne(R[A] || (Ze(R) ? 0 : R)) || "0px"
  }

  function L() {
    var M = "";
    return f && (M = p(), Ke(M, "height or heightRatio is missing."), M = "calc(" + M + " - " + C(!1) + " - " + C(!0) + ")"), M
  }

  function p() {
    return Ne(n.height || oe(v).width * n.heightRatio)
  }

  function D() {
    return n.autoWidth ? null : Ne(n.fixedWidth) || (f ? "" : P())
  }

  function x() {
    return Ne(n.fixedHeight) || (f ? n.autoHeight ? null : P() : p())
  }

  function P() {
    var M = Ne(n.gap);
    return "calc((100%" + (M && " + " + M) + ")/" + (n.perPage || 1) + (M && " - " + M) + ")"
  }

  function I() {
    return oe(v)[c("width")]
  }

  function T(M, R) {
    var A = h(M || 0);
    return A ? oe(A.slide)[c("width")] + (R ? 0 : V()) : 0
  }

  function w(M, R) {
    var A = h(M);
    if (A) {
      var N = oe(A.slide)[c("right")],
        F = oe(v)[c("left")];
      return ie(N - F) + (R ? 0 : V())
    }
    return 0
  }

  function j(M) {
    return w(e.length - 1) - w(0) + T(0, M)
  }

  function V() {
    var M = h(0);
    return M && parseFloat(ce(M.slide, c("marginRight"))) || 0
  }

  function U(M) {
    return parseFloat(ce(m, c("padding" + (M ? "Right" : "Left")))) || 0
  }

  function z() {
    return e.is(dt) || j(!0) > I()
  }
  return {
    mount: _,
    resize: O,
    listSize: I,
    slideSize: T,
    sliderSize: j,
    totalSize: w,
    getPadding: U,
    isOverflow: z
  }
}
var Mi = 2;

function ji(e, t, n) {
  var r = H(e),
    a = r.on,
    d = t.Elements,
    i = t.Slides,
    u = t.Direction.resolve,
    c = [],
    l;

  function o() {
    a(ee, m), a([ae, rt], h), (l = y()) && (s(l), t.Layout.resize(!0))
  }

  function m() {
    v(), o()
  }

  function v() {
    Re(c), ye(c), r.destroy()
  }

  function h() {
    var E = y();
    l !== E && (l < E || !E) && r.emit(ee)
  }

  function s(E) {
    var _ = i.get().slice(),
      g = _.length;
    if (g) {
      for (; _.length < E;) gt(_, _);
      gt(_.slice(-E), _.slice(0, E)).forEach(function(O, C) {
        var L = C < E,
          p = f(O.slide, C);
        L ? Xt(p, _[0].slide) : ut(d.list, p), gt(c, p), i.register(p, C - E + (L ? 0 : g), O.index)
      })
    }
  }

  function f(E, _) {
    var g = E.cloneNode(!0);
    return ve(g, n.classes.clone), g.id = e.root.id + "-clone" + Zt(_ + 1), g
  }

  function y() {
    var E = n.clones;
    if (!e.is(Ge)) E = 0;
    else if (ot(E)) {
      var _ = n[u("fixedWidth")] && t.Layout.slideSize(0),
        g = _ && nt(oe(d.track)[u("width")] / _);
      E = g || n[u("autoWidth")] && e.length || n.perPage * Mi
    }
    return E
  }
  return {
    mount: o,
    destroy: v
  }
}

function Vi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = e.state.set,
    u = t.Layout,
    c = u.slideSize,
    l = u.getPadding,
    o = u.totalSize,
    m = u.listSize,
    v = u.sliderSize,
    h = t.Direction,
    s = h.resolve,
    f = h.orient,
    y = t.Elements,
    E = y.list,
    _ = y.track,
    g;

  function O() {
    g = t.Transition, a([Oe, Jt, ae, ee], C)
  }

  function C() {
    t.Controller.isBusy() || (t.Scroll.cancel(), p(e.index), t.Slides.update())
  }

  function L(A, N, F, J) {
    A !== N && M(A > F) && (I(), D(P(j(), A > F), !0)), i(ze), d(Te, N, F, A), g.start(N, function() {
      i(Fe), d(ft, N, F, A), J && J()
    })
  }

  function p(A) {
    D(w(A, !0))
  }

  function D(A, N) {
    if (!e.is(dt)) {
      var F = N ? A : x(A);
      ce(E, "transform", "translate" + s("X") + "(" + F + "px)"), A !== F && d(Qn)
    }
  }

  function x(A) {
    if (e.is(Ge)) {
      var N = T(A),
        F = N > t.Controller.getEnd(),
        J = N < 0;
      (J || F) && (A = P(A, F))
    }
    return A
  }

  function P(A, N) {
    var F = A - z(N),
      J = v();
    return A -= f(J * (nt(ie(F) / J) || 1)) * (N ? 1 : -1), A
  }

  function I() {
    D(j(), !0), g.cancel()
  }

  function T(A) {
    for (var N = t.Slides.get(), F = 0, J = 1 / 0, K = 0; K < N.length; K++) {
      var X = N[K].index,
        S = ie(w(X, !0) - A);
      if (S <= J) J = S, F = X;
      else break
    }
    return F
  }

  function w(A, N) {
    var F = f(o(A - 1) - U(A));
    return N ? V(F) : F
  }

  function j() {
    var A = s("left");
    return oe(E)[A] - oe(_)[A] + f(l(!1))
  }

  function V(A) {
    return n.trimSpace && e.is(We) && (A = Me(A, 0, f(v(!0) - m()))), A
  }

  function U(A) {
    var N = n.focus;
    return N === "center" ? (m() - c(A, !0)) / 2 : +N * c(A) || 0
  }

  function z(A) {
    return w(A ? t.Controller.getEnd() : 0, !!n.trimSpace)
  }

  function M(A) {
    var N = f(P(j(), A));
    return A ? N >= 0 : N <= E[s("scrollWidth")] - oe(_)[s("width")]
  }

  function R(A, N) {
    N = ot(N) ? j() : N;
    var F = A !== !0 && f(N) < f(z(!1)),
      J = A !== !1 && f(N) > f(z(!0));
    return F || J
  }
  return {
    mount: O,
    move: L,
    jump: p,
    translate: D,
    shift: P,
    cancel: I,
    toIndex: T,
    toPosition: w,
    getPosition: j,
    getLimit: z,
    exceededLimit: R,
    reposition: C
  }
}

function ki(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = t.Move,
    u = i.getPosition,
    c = i.getLimit,
    l = i.toPosition,
    o = t.Slides,
    m = o.isEnough,
    v = o.getLength,
    h = n.omitEnd,
    s = e.is(Ge),
    f = e.is(We),
    y = G(j, !1),
    E = G(j, !0),
    _ = n.start || 0,
    g, O = _,
    C, L, p;

  function D() {
    x(), a([ae, ee, It], x), a(Jt, P)
  }

  function x() {
    C = v(!0), L = n.perMove, p = n.perPage, g = M();
    var S = Me(_, 0, h ? g : C - 1);
    S !== _ && (_ = S, i.reposition())
  }

  function P() {
    g !== M() && d(It)
  }

  function I(S, B, re) {
    if (!X()) {
      var q = w(S),
        te = z(q);
      te > -1 && (B || te !== _) && (F(te), i.move(q, te, O, re))
    }
  }

  function T(S, B, re, q) {
    t.Scroll.scroll(S, B, re, function() {
      var te = z(i.toIndex(u()));
      F(h ? Ie(te, g) : te), q && q()
    })
  }

  function w(S) {
    var B = _;
    if (Se(S)) {
      var re = S.match(/([+\-<>])(\d+)?/) || [],
        q = re[1],
        te = re[2];
      q === "+" || q === "-" ? B = V(_ + +("" + q + (+te || 1)), _) : q === ">" ? B = te ? R(+te) : y(!0) : q === "<" && (B = E(!0))
    } else B = s ? S : Me(S, 0, g);
    return B
  }

  function j(S, B) {
    var re = L || (K() ? 1 : p),
      q = V(_ + re * (S ? -1 : 1), _, !(L || K()));
    return q === -1 && f && !Un(u(), c(!S), 1) ? S ? 0 : g : B ? q : z(q)
  }

  function V(S, B, re) {
    if (m() || K()) {
      var q = U(S);
      q !== S && (B = S, S = q, re = !1), S < 0 || S > g ? !L && (mt(0, S, B, !0) || mt(g, B, S, !0)) ? S = R(A(S)) : s ? S = re ? S < 0 ? -(C % p || p) : C : S : n.rewind ? S = S < 0 ? g : 0 : S = -1 : re && S !== B && (S = R(A(B) + (S < B ? -1 : 1)))
    } else S = -1;
    return S
  }

  function U(S) {
    if (f && n.trimSpace === "move" && S !== _)
      for (var B = u(); B === l(S, !0) && mt(S, 0, e.length - 1, !n.rewind);) S < _ ? --S : ++S;
    return S
  }

  function z(S) {
    return s ? (S + C) % C || 0 : S
  }

  function M() {
    for (var S = C - (K() || s && L ? 1 : p); h && S-- > 0;)
      if (l(C - 1, !0) !== l(S, !0)) {
        S++;
        break
      } return Me(S, 0, C - 1)
  }

  function R(S) {
    return Me(K() ? S : p * S, 0, g)
  }

  function A(S) {
    return K() ? Ie(S, g) : St((S >= g ? C - 1 : S) / p)
  }

  function N(S) {
    var B = i.toIndex(S);
    return f ? Me(B, 0, g) : B
  }

  function F(S) {
    S !== _ && (O = _, _ = S)
  }

  function J(S) {
    return S ? O : _
  }

  function K() {
    return !ot(n.focus) || n.isNavigation
  }

  function X() {
    return e.state.is([ze, at]) && !!n.waitForTransition
  }
  return {
    mount: D,
    go: I,
    scroll: T,
    getNext: y,
    getPrev: E,
    getAdjacent: j,
    getEnd: M,
    setIndex: F,
    getIndex: J,
    toIndex: R,
    toPage: A,
    toDest: N,
    hasFocus: K,
    isBusy: X
  }
}
var xi = "http://www.w3.org/2000/svg",
  Fi = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  ht = 40;

function Wi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.bind,
    i = r.emit,
    u = n.classes,
    c = n.i18n,
    l = t.Elements,
    o = t.Controller,
    m = l.arrows,
    v = l.track,
    h = m,
    s = l.prev,
    f = l.next,
    y, E, _ = {};

  function g() {
    C(), a(ae, O)
  }

  function O() {
    L(), g()
  }

  function C() {
    var T = n.arrows;
    T && !(s && f) && x(), s && f && (et(_, {
      prev: s,
      next: f
    }), tt(h, T ? "" : "none"), ve(h, E = rn + "--" + n.direction), T && (p(), I(), k([s, f], vt, v.id), i(ui, s, f)))
  }

  function L() {
    r.destroy(), Ee(h, E), y ? (Re(m ? [s, f] : h), s = f = null) : de([s, f], nn)
  }

  function p() {
    a([Oe, ft, ee, Be, It], I), d(f, "click", G(D, ">")), d(s, "click", G(D, "<"))
  }

  function D(T) {
    o.go(T, !0)
  }

  function x() {
    h = m || ke("div", u.arrows), s = P(!0), f = P(!1), y = !0, ut(h, [s, f]), !m && Xt(h, v)
  }

  function P(T) {
    var w = '<button class="' + u.arrow + " " + (T ? u.prev : u.next) + '" type="button"><svg xmlns="' + xi + '" viewBox="0 0 ' + ht + " " + ht + '" width="' + ht + '" height="' + ht + '" focusable="false"><path d="' + (n.arrowPath || Fi) + '" />';
    return Bn(w)
  }

  function I() {
    if (s && f) {
      var T = e.index,
        w = o.getPrev(),
        j = o.getNext(),
        V = w > -1 && T < w ? c.last : c.prev,
        U = j > -1 && T > j ? c.first : c.next;
      s.disabled = w < 0, f.disabled = j < 0, k(s, se, V), k(f, se, U), i(ci, s, f, w, j)
    }
  }
  return {
    arrows: _,
    mount: g,
    destroy: L,
    update: I
  }
}
var zi = qt + "-interval";

function Bi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.bind,
    i = r.emit,
    u = Lt(n.interval, e.go.bind(e, ">"), p),
    c = u.isPaused,
    l = t.Elements,
    o = t.Elements,
    m = o.root,
    v = o.toggle,
    h = n.autoplay,
    s, f, y = h === "pause";

  function E() {
    h && (_(), v && k(v, vt, l.track.id), y || g(), L())
  }

  function _() {
    n.pauseOnHover && d(m, "mouseenter mouseleave", function(x) {
      s = x.type === "mouseenter", C()
    }), n.pauseOnFocus && d(m, "focusin focusout", function(x) {
      f = x.type === "focusin", C()
    }), v && d(v, "click", function() {
      y ? g() : O(!0)
    }), a([Te, Qt, ee], u.rewind), a(Te, D)
  }

  function g() {
    c() && t.Slides.isEnough() && (u.start(!n.resetProgress), f = s = y = !1, L(), i(Kn))
  }

  function O(x) {
    x === void 0 && (x = !0), y = !!x, L(), c() || (u.pause(), i(qn))
  }

  function C() {
    y || (s || f ? O(!1) : g())
  }

  function L() {
    v && (me(v, Pe, !y), k(v, se, n.i18n[y ? "play" : "pause"]))
  }

  function p(x) {
    var P = l.bar;
    P && ce(P, "width", x * 100 + "%"), i(vi, x)
  }

  function D(x) {
    var P = t.Slides.getAt(x);
    u.set(P && +le(P.slide, zi) || n.interval)
  }
  return {
    mount: E,
    destroy: u.cancel,
    play: g,
    pause: O,
    isPaused: c
  }
}

function Gi(e, t, n) {
  var r = H(e),
    a = r.on;

  function d() {
    n.cover && (a(Zn, G(u, !0)), a([Oe, ae, ee], G(i, !0)))
  }

  function i(c) {
    t.Slides.forEach(function(l) {
      var o = ct(l.container || l.slide, "img");
      o && o.src && u(c, o, l)
    })
  }

  function u(c, l, o) {
    o.style("background", c ? 'center/cover no-repeat url("' + l.src + '")' : "", !0), tt(l, c ? "none" : "")
  }
  return {
    mount: d,
    destroy: G(i, !1)
  }
}
var Ui = 10,
  Yi = 600,
  $i = .6,
  Hi = 1.5,
  Xi = 800;

function Ki(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = e.state.set,
    u = t.Move,
    c = u.getPosition,
    l = u.getLimit,
    o = u.exceededLimit,
    m = u.translate,
    v = e.is(We),
    h, s, f = 1;

  function y() {
    a(Te, O), a([ae, ee], C)
  }

  function E(p, D, x, P, I) {
    var T = c();
    if (O(), x && (!v || !o())) {
      var w = t.Layout.sliderSize(),
        j = Wt(p) * w * St(ie(p) / w) || 0;
      p = u.toPosition(t.Controller.toDest(p % w)) + j
    }
    var V = Un(T, p, 1);
    f = 1, D = V ? 0 : D || At(ie(p - T) / Hi, Xi), s = P, h = Lt(D, _, G(g, T, p, I), 1), i(at), d(Qt), h.start()
  }

  function _() {
    i(Fe), s && s(), d(Be)
  }

  function g(p, D, x, P) {
    var I = c(),
      T = p + (D - p) * L(P),
      w = (T - I) * f;
    m(I + w), v && !x && o() && (f *= $i, ie(w) < Ui && E(l(o(!0)), Yi, !1, s, !0))
  }

  function O() {
    h && h.cancel()
  }

  function C() {
    h && !h.isPaused() && (O(), _())
  }

  function L(p) {
    var D = n.easingFunc;
    return D ? D(p) : 1 - Math.pow(1 - p, 4)
  }
  return {
    mount: y,
    destroy: O,
    scroll: E,
    cancel: C
  }
}
var je = {
  passive: !1,
  capture: !0
};

function qi(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = r.bind,
    u = r.unbind,
    c = e.state,
    l = t.Move,
    o = t.Scroll,
    m = t.Controller,
    v = t.Elements.track,
    h = t.Media.reduce,
    s = t.Direction,
    f = s.resolve,
    y = s.orient,
    E = l.getPosition,
    _ = l.exceededLimit,
    g, O, C, L, p, D = !1,
    x, P, I;

  function T() {
    i(v, jt, xt, je), i(v, Vt, xt, je), i(v, vr, j, je), i(v, "click", z, {
      capture: !0
    }), i(v, "dragstart", ge), a([Oe, ae], w)
  }

  function w() {
    var b = n.drag;
    sn(!b), L = b === "free"
  }

  function j(b) {
    if (x = !1, !P) {
      var Y = te(b);
      q(b.target) && (Y || !b.button) && (m.isBusy() ? ge(b, !0) : (I = Y ? v : window, p = c.is([ze, at]), C = null, i(I, jt, V, je), i(I, Vt, U, je), l.cancel(), o.cancel(), M(b)))
    }
  }

  function V(b) {
    if (c.is(_t) || (c.set(_t), d(ii)), b.cancelable)
      if (p) {
        l.translate(g + re(K(b)));
        var Y = X(b) > Cn,
          be = D !== (D = _());
        (Y || be) && M(b), x = !0, d(ai), ge(b)
      } else N(b) && (p = A(b), ge(b))
  }

  function U(b) {
    c.is(_t) && (c.set(Fe), d(oi)), p && (R(b), ge(b)), u(I, jt, V), u(I, Vt, U), p = !1
  }

  function z(b) {
    !P && x && ge(b, !0)
  }

  function M(b) {
    C = O, O = b, g = E()
  }

  function R(b) {
    var Y = F(b),
      be = J(Y),
      Ue = n.rewind && n.rewindByDrag;
    h(!1), L ? m.scroll(be, 0, n.snap) : e.is(dt) ? m.go(y(Wt(Y)) < 0 ? Ue ? "<" : "-" : Ue ? ">" : "+") : e.is(We) && D && Ue ? m.go(_(!0) ? ">" : "<") : m.go(m.toDest(be), !0), h(!0)
  }

  function A(b) {
    var Y = n.dragMinThreshold,
      be = Ze(Y),
      Ue = be && Y.mouse || 0,
      hr = (be ? Y.touch : +Y) || 10;
    return ie(K(b)) > (te(b) ? hr : Ue)
  }

  function N(b) {
    return ie(K(b)) > ie(K(b, !0))
  }

  function F(b) {
    if (e.is(Ge) || !D) {
      var Y = X(b);
      if (Y && Y < Cn) return K(b) / Y
    }
    return 0
  }

  function J(b) {
    return E() + Wt(b) * Ie(ie(b) * (n.flickPower || 600), L ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
  }

  function K(b, Y) {
    return B(b, Y) - B(S(b), Y)
  }

  function X(b) {
    return Ft(b) - Ft(S(b))
  }

  function S(b) {
    return O === b && C || O
  }

  function B(b, Y) {
    return (te(b) ? b.changedTouches[0] : b)["page" + f(Y ? "Y" : "X")]
  }

  function re(b) {
    return b / (D && e.is(We) ? Ni : 1)
  }

  function q(b) {
    var Y = n.noDrag;
    return !Je(b, "." + sr + ", ." + Rt) && (!Y || !Je(b, Y))
  }

  function te(b) {
    return typeof TouchEvent < "u" && b instanceof TouchEvent
  }

  function dr() {
    return p
  }

  function sn(b) {
    P = b
  }
  return {
    mount: T,
    disable: sn,
    isDragging: dr
  }
}
var Zi = {
  Spacebar: " ",
  Right: Ct,
  Left: bt,
  Up: er,
  Down: tr
};

function an(e) {
  return e = Se(e) ? e : e.key, Zi[e] || e
}
var Nn = "keydown";

function Ji(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.bind,
    i = r.unbind,
    u = e.root,
    c = t.Direction.resolve,
    l, o;

  function m() {
    v(), a(ae, h), a(ae, v), a(Te, f)
  }

  function v() {
    var E = n.keyboard;
    E && (l = E === "global" ? window : u, d(l, Nn, y))
  }

  function h() {
    i(l, Nn)
  }

  function s(E) {
    o = E
  }

  function f() {
    var E = o;
    o = !0, kn(function() {
      o = E
    })
  }

  function y(E) {
    if (!o) {
      var _ = an(E);
      _ === c(bt) ? e.go("<") : _ === c(Ct) && e.go(">")
    }
  }
  return {
    mount: m,
    destroy: h,
    disable: s
  }
}
var qe = qt + "-lazy",
  Et = qe + "-srcset",
  Qi = "[" + qe + "], [" + Et + "]";

function ea(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.off,
    i = r.bind,
    u = r.emit,
    c = n.lazyLoad === "sequential",
    l = [ft, Be],
    o = [];

  function m() {
    n.lazyLoad && (v(), a(ee, v))
  }

  function v() {
    ye(o), h(), c ? E() : (d(l), a(l, s), s())
  }

  function h() {
    t.Slides.forEach(function(_) {
      Kt(_.slide, Qi).forEach(function(g) {
        var O = le(g, qe),
          C = le(g, Et);
        if (O !== g.src || C !== g.srcset) {
          var L = n.classes.spinner,
            p = g.parentElement,
            D = ct(p, "." + L) || ke("span", L, p);
          o.push([g, _, D]), g.src || tt(g, "none")
        }
      })
    })
  }

  function s() {
    o = o.filter(function(_) {
      var g = n.perPage * ((n.preloadPages || 1) + 1) - 1;
      return _[1].isWithin(e.index, g) ? f(_) : !0
    }), o.length || d(l)
  }

  function f(_) {
    var g = _[0];
    ve(_[1].slide, Gt), i(g, "load error", G(y, _)), k(g, "src", le(g, qe)), k(g, "srcset", le(g, Et)), de(g, qe), de(g, Et)
  }

  function y(_, g) {
    var O = _[0],
      C = _[1];
    Ee(C.slide, Gt), g.type !== "error" && (Re(_[2]), tt(O, ""), u(Zn, O, C), u(rt)), c && E()
  }

  function E() {
    o.length && f(o.shift())
  }
  return {
    mount: m,
    destroy: G(ye, o),
    check: s
  }
}

function ta(e, t, n) {
  var r = H(e),
    a = r.on,
    d = r.emit,
    i = r.bind,
    u = t.Slides,
    c = t.Elements,
    l = t.Controller,
    o = l.hasFocus,
    m = l.getIndex,
    v = l.go,
    h = t.Direction.resolve,
    s = c.pagination,
    f = [],
    y, E;

  function _() {
    g(), a([ae, ee, It], _);
    var P = n.pagination;
    s && tt(s, P ? "" : "none"), P && (a([Te, Qt, Be], x), O(), x(), d(li, {
      list: y,
      items: f
    }, D(e.index)))
  }

  function g() {
    y && (Re(s ? Le(y.children) : y), Ee(y, E), ye(f), y = null), r.destroy()
  }

  function O() {
    var P = e.length,
      I = n.classes,
      T = n.i18n,
      w = n.perPage,
      j = o() ? l.getEnd() + 1 : nt(P / w);
    y = s || ke("ul", I.pagination, c.track.parentElement), ve(y, E = Pt + "--" + p()), k(y, pe, "tablist"), k(y, se, T.select), k(y, tn, p() === Nt ? "vertical" : "");
    for (var V = 0; V < j; V++) {
      var U = ke("li", null, y),
        z = ke("button", {
          class: I.page,
          type: "button"
        }, U),
        M = u.getIn(V).map(function(A) {
          return A.slide.id
        }),
        R = !o() && w > 1 ? T.pageX : T.slideX;
      i(z, "click", G(C, V)), n.paginationKeyboard && i(z, "keydown", G(L, V)), k(U, pe, "presentation"), k(z, pe, "tab"), k(z, vt, M.join(" ")), k(z, se, zt(R, V + 1)), k(z, xe, -1), f.push({
        li: U,
        button: z,
        page: V
      })
    }
  }

  function C(P) {
    v(">" + P, !0)
  }

  function L(P, I) {
    var T = f.length,
      w = an(I),
      j = p(),
      V = -1;
    w === h(Ct, !1, j) ? V = ++P % T : w === h(bt, !1, j) ? V = (--P + T) % T : w === "Home" ? V = 0 : w === "End" && (V = T - 1);
    var U = f[V];
    U && (zn(U.button), v(">" + V), ge(I, !0))
  }

  function p() {
    return n.paginationDirection || n.direction
  }

  function D(P) {
    return f[l.toPage(P)]
  }

  function x() {
    var P = D(m(!0)),
      I = D(m());
    if (P) {
      var T = P.button;
      Ee(T, Pe), de(T, In), k(T, xe, -1)
    }
    if (I) {
      var w = I.button;
      ve(w, Pe), k(w, In, !0), k(w, xe, "")
    }
    d(fi, {
      list: y,
      items: f
    }, P, I)
  }
  return {
    items: f,
    mount: _,
    destroy: g,
    getAt: D,
    update: x
  }
}
var na = [" ", "Enter"];

function ra(e, t, n) {
  var r = n.isNavigation,
    a = n.slideFocus,
    d = [];

  function i() {
    e.splides.forEach(function(s) {
      s.isParent || (l(e, s.splide), l(s.splide, e))
    }), r && o()
  }

  function u() {
    d.forEach(function(s) {
      s.destroy()
    }), ye(d)
  }

  function c() {
    u(), i()
  }

  function l(s, f) {
    var y = H(s);
    y.on(Te, function(E, _, g) {
      f.go(f.is(Ge) ? g : E)
    }), d.push(y)
  }

  function o() {
    var s = H(e),
      f = s.on;
    f($n, v), f(Jn, h), f([Oe, ae], m), d.push(s), s.emit(Xn, e.splides)
  }

  function m() {
    k(t.Elements.list, tn, n.direction === Nt ? "vertical" : "")
  }

  function v(s) {
    e.go(s.index)
  }

  function h(s, f) {
    Ht(na, an(f)) && (v(s), ge(f))
  }
  return {
    setup: G(t.Media.set, {
      slideFocus: ot(a) ? r : a
    }, !0),
    mount: i,
    destroy: u,
    remount: c
  }
}

function ia(e, t, n) {
  var r = H(e),
    a = r.bind,
    d = 0;

  function i() {
    n.wheel && a(t.Elements.track, "wheel", u, je)
  }

  function u(l) {
    if (l.cancelable) {
      var o = l.deltaY,
        m = o < 0,
        v = Ft(l),
        h = n.wheelMinThreshold || 0,
        s = n.wheelSleep || 0;
      ie(o) > h && v - d > s && (e.go(m ? "<" : ">"), d = v), c(m) && ge(l)
    }
  }

  function c(l) {
    return !n.releaseWheel || e.state.is(ze) || t.Controller.getAdjacent(l) !== -1
  }
  return {
    mount: i
  }
}
var aa = 90;

function oa(e, t, n) {
  var r = H(e),
    a = r.on,
    d = t.Elements.track,
    i = n.live && !n.isNavigation,
    u = ke("span", Ti),
    c = Lt(aa, G(o, !1));

  function l() {
    i && (v(!t.Autoplay.isPaused()), k(d, wn, !0), u.textContent = "…", a(Kn, G(v, !0)), a(qn, G(v, !1)), a([ft, Be], G(o, !0)))
  }

  function o(h) {
    k(d, Ln, h), h ? (ut(d, u), c.start()) : (Re(u), c.cancel())
  }

  function m() {
    de(d, [Tn, wn, Ln]), Re(u)
  }

  function v(h) {
    i && k(d, Tn, h ? "off" : "polite")
  }
  return {
    mount: l,
    disable: v,
    destroy: m
  }
}
var sa = Object.freeze({
    __proto__: null,
    Media: _i,
    Direction: gi,
    Elements: Di,
    Slides: Pi,
    Layout: Oi,
    Clones: ji,
    Move: Vi,
    Controller: ki,
    Arrows: Wi,
    Autoplay: Bi,
    Cover: Gi,
    Scroll: Ki,
    Drag: qi,
    Keyboard: Ji,
    LazyLoad: ea,
    Pagination: ta,
    Sync: ra,
    Wheel: ia,
    Live: oa
  }),
  ua = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
  },
  ca = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: bi,
    i18n: ua,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause"
    }
  };

function la(e, t, n) {
  var r = t.Slides;

  function a() {
    H(e).on([Oe, ee], d)
  }

  function d() {
    r.forEach(function(u) {
      u.style("transform", "translateX(-" + 100 * u.index + "%)")
    })
  }

  function i(u, c) {
    r.style("transition", "opacity " + n.speed + "ms " + n.easing), kn(c)
  }
  return {
    mount: a,
    start: i,
    cancel: xt
  }
}

function fa(e, t, n) {
  var r = t.Move,
    a = t.Controller,
    d = t.Scroll,
    i = t.Elements.list,
    u = G(ce, i, "transition"),
    c;

  function l() {
    H(e).bind(i, "transitionend", function(h) {
      h.target === i && c && (m(), c())
    })
  }

  function o(h, s) {
    var f = r.toPosition(h, !0),
      y = r.getPosition(),
      E = v(h);
    ie(f - y) >= 1 && E >= 1 ? n.useScroll ? d.scroll(f, E, !1, s) : (u("transform " + E + "ms " + n.easing), r.translate(f, !0), c = s) : (r.jump(h), s())
  }

  function m() {
    u(""), d.cancel()
  }

  function v(h) {
    var s = n.rewindSpeed;
    if (e.is(We) && s) {
      var f = a.getIndex(!0),
        y = a.getEnd();
      if (f === 0 && h >= y || f >= y && h === 0) return s
    }
    return n.speed
  }
  return {
    mount: l,
    start: o,
    cancel: m
  }
}
var va = function() {
    function e(n, r) {
      this.event = H(), this.Components = {}, this.state = di(Ve), this.splides = [], this._o = {}, this._E = {};
      var a = Se(n) ? Gn(document, n) : n;
      Ke(a, a + " is invalid."), this.root = a, r = Ae({
        label: le(a, se) || "",
        labelledby: le(a, en) || ""
      }, ca, e.defaults, r || {});
      try {
        Ae(r, JSON.parse(le(a, qt)))
      } catch {
        Ke(!1, "Invalid JSON")
      }
      this._o = Object.create(Ae({}, r))
    }
    var t = e.prototype;
    return t.mount = function(r, a) {
      var d = this,
        i = this.state,
        u = this.Components;
      Ke(i.is([Ve, yt]), "Already mounted!"), i.set(Ve), this._C = u, this._T = a || this._T || (this.is(dt) ? la : fa), this._E = r || this._E;
      var c = et({}, sa, this._E, {
        Transition: this._T
      });
      return De(c, function(l, o) {
        var m = l(d, u, d._o);
        u[o] = m, m.setup && m.setup()
      }), De(u, function(l) {
        l.mount && l.mount()
      }), this.emit(Oe), ve(this.root, Li), i.set(Fe), this.emit(An), this
    }, t.sync = function(r) {
      return this.splides.push({
        splide: r
      }), r.splides.push({
        splide: this,
        isParent: !0
      }), this.state.is(Fe) && (this._C.Sync.remount(), r.Components.Sync.remount()), this
    }, t.go = function(r) {
      return this._C.Controller.go(r), this
    }, t.on = function(r, a) {
      return this.event.on(r, a), this
    }, t.off = function(r) {
      return this.event.off(r), this
    }, t.emit = function(r) {
      var a;
      return (a = this.event).emit.apply(a, [r].concat(Le(arguments, 1))), this
    }, t.add = function(r, a) {
      return this._C.Slides.add(r, a), this
    }, t.remove = function(r) {
      return this._C.Slides.remove(r), this
    }, t.is = function(r) {
      return this._o.type === r
    }, t.refresh = function() {
      return this.emit(ee), this
    }, t.destroy = function(r) {
      r === void 0 && (r = !0);
      var a = this.event,
        d = this.state;
      return d.is(Ve) ? H(this).on(An, this.destroy.bind(this, r)) : (De(this._C, function(i) {
        i.destroy && i.destroy(r)
      }, !0), a.emit(Hn), a.destroy(), r && ye(this.splides), d.set(yt)), this
    }, qr(e, [{
      key: "options",
      get: function() {
        return this._o
      },
      set: function(r) {
        this._C.Media.set(r, !0, !0)
      }
    }, {
      key: "length",
      get: function() {
        return this._C.Slides.getLength(!0)
      }
    }, {
      key: "index",
      get: function() {
        return this._C.Controller.getIndex()
      }
    }]), e
  }(),
  on = va;
on.defaults = {};
on.STATES = Jr;
const da = e => (Dn("data-v-9d36a67c"), e = e(), Rn(), e),
  ha = {
    class: "project-page s_white"
  },
  _a = {
    class: "project-page__desktop"
  },
  ga = {
    class: "project__text"
  },
  ma = {
    class: "project__descr"
  },
  Ea = {
    class: "project-page__mobile"
  },
  pa = {
    class: "project-page__close"
  },
  ya = {
    class: "header-project__close-button hover-fadein"
  },
  Aa = {
    class: "project-page__content-head",
    "data-lenis-prevent": ""
  },
  Sa = {
    class: "project-page__content-name h2"
  },
  Ia = {
    class: "project-page__content"
  },
  Ta = {
    class: "project-page__content-wrap"
  },
  La = {
    class: "project-page__content-block"
  },
  wa = {
    class: "project-page__content-text"
  },
  ba = {
    class: "project-page__content-block"
  },
  Ca = {
    class: "project-page__content-footer"
  },
  Na = {
    class: "project-page__content-text"
  },
  Da = {
    key: 0,
    class: "project-page__content-link"
  },
  Ra = {
    class: "project__slider splide"
  },
  Pa = {
    class: "splide__track"
  },
  Oa = {
    class: "splide__list"
  },
  Ma = {
    class: "splide__slide",
    "data-splide-interval": "5000"
  },
  ja = ["onClick"],
  Va = ["onClick"],
  ka = da(() => W("div", null, null, -1)),
  xa = [ka],
  Fa = Pn({
    __name: "[slug]",
    async setup(e) {
      var C;
      let t, n;
      const a = Er().params.slug,
        d = pr("project-" + a),
        {
          data: i
        } = ([t, n] = yr(() => Lr("project-" + a, () => d.data.value ? Promise.resolve(d.data.value) : $fetch("/api/projects/" + a), "$uqgzHRQaYX")), t = await t, n(), t);
      if (!i.value) throw Ar({
        statusCode: 404,
        message: "Error! No data",
        fatal: !0
      });
      Dr((C = i == null ? void 0 : i.value) == null ? void 0 : C.meta), un(() => fn.isPreloaderVisible, L => {
        L || u()
      }), un(() => fn.isTransitionStart, L => {
        L || u()
      }), cn(() => {
        window.innerWidth > 1024 ? m() : f()
      });
      const u = () => {
          new Xr(".project-page")
        },
        c = Ce(),
        l = Ce(),
        o = Ce(),
        m = () => {
          l.value && o.value && (c.value = new Kr({
            slider: l.value,
            slides: o.value,
            spaceStart: window.innerWidth * .25,
            itemMargin: 8
          }))
        };
      Sr(() => {
        if (window.innerWidth > 1024) {
          const L = c.value.animationFrameId;
          L !== void 0 && cancelAnimationFrame(L)
        }
      });
      const v = Ce(),
        h = Ce(0),
        s = Ce(0);

      function f() {
        v.value = new on(".project__slider", {
          pagination: !1,
          arrows: !1,
          autoplay: !0,
          rewind: !0,
          resetProgress: !0
        }).mount(), v.value.on("autoplay:playing", L => {
          var p;
          h.value = L, s.value = ((p = v.value) == null ? void 0 : p.index) ?? 0
        }), v.value.on("active", L => {
          s.value = L.index
        })
      }

      function y() {
        v.value && v.value.go("-${i}"), v.value && v.value.Components.Autoplay.play()
      }

      function E() {
        v.value && v.value.go("+${i}"), v.value && v.value.Components.Autoplay.play()
      }
      const _ = Ce(!1);

      function g() {
        _.value ? (pt.to(".project-page__content", {
          height: 0
        }), _.value = !1) : (pt.to(".project-page__content", {
          height: "auto"
        }), _.value = !0)
      }

      function O() {
        v.value && v.value.Components.Autoplay.play()
      }
      return cn(() => {
        window.addEventListener("focus", O)
      }), Ir(() => {
        window.removeEventListener("focus", O)
      }), (L, p) => {
        var j, V, U, z, M, R, A, N, F, J, K;
        const D = Hr,
          x = br,
          P = Cr,
          I = Vn,
          T = Mn,
          w = Nr;
        return Z(), ne("div", ha, [W("div", _a, [$(i) ? (Z(), Ye(D, {
          key: 0,
          name: $(i).name,
          url: $(i).url,
          date: ("formatProjectDate" in L ? L.formatProjectDate : $(dn))($(i).date)
        }, null, 8, ["name", "url", "date"])) : kt("", !0), W("div", {
          class: "project__items",
          ref_key: "projectItems",
          ref: l
        }, [(Z(!0), ne($e, null, He((j = $(i)) == null ? void 0 : j.other_photos, X => (Z(), ne("div", {
          class: "project__item",
          ref_for: !0,
          ref_key: "projectItem",
          ref: o
        }, [("isVideo" in L ? L.isVideo : $(vn))(X.url) ? (Z(), Ye(x, {
          key: 0,
          src: X.url,
          draggable: "false"
        }, null, 8, ["src"])) : (Z(), Ye(P, {
          key: 1,
          src: ("setPhotoFormat" in L ? L.setPhotoFormat : $(hn))(X.url, "medium"),
          draggable: "false"
        }, null, 8, ["src"]))], 512))), 256))], 512), W("div", ga, [(Z(!0), ne($e, null, He((V = $(i)) == null ? void 0 : V.content, X => (Z(), ne("div", null, _e(X.title), 1))), 256))]), W("div", ma, _e((U = $(i)) == null ? void 0 : U.description), 1)]), W("div", Ea, [W("div", pa, [Xe(T, {
          to: "/works"
        }, {
          default: On(() => [W("div", ya, [Xe(I)])]),
          _: 1
        })]), W("div", Aa, [W("div", Sa, _e((z = $(i)) == null ? void 0 : z.name), 1), W("div", {
          class: "project-page__content-info",
          onClick: g
        }, _e($(_) ? "Close" : "Info"), 1)]), W("div", Ia, [W("div", Ta, [W("div", La, [(Z(!0), ne($e, null, He((M = $(i)) == null ? void 0 : M.content, X => (Z(), ne("div", wa, _e(X.title), 1))), 256))]), W("div", ba, _e((R = $(i)) == null ? void 0 : R.description), 1), W("div", Ca, [W("div", Na, _e(("formatProjectDate" in L ? L.formatProjectDate : $(dn))((A = $(i)) == null ? void 0 : A.date)), 1), (N = $(i)) != null && N.url ? (Z(), ne("div", Da, [Xe(w, {
          text: "Live project",
          link: ((F = $(i)) == null ? void 0 : F.url) ?? ""
        }, null, 8, ["link"])])) : kt("", !0)])])]), W("section", Ra, [W("div", Pa, [W("ul", Oa, [(Z(!0), ne($e, null, He((J = $(i)) == null ? void 0 : J.other_photos, X => (Z(), ne("li", Ma, [("isVideo" in L ? L.isVideo : $(vn))(X.url) ? (Z(), Ye(x, {
          key: 0,
          src: X.url
        }, null, 8, ["src"])) : (Z(), Ye(P, {
          key: 1,
          src: ("setPhotoFormat" in L ? L.setPhotoFormat : $(hn))(X.url, "medium")
        }, null, 8, ["src"]))]))), 256))])]), W("button", {
          class: "splide-cntrl-btn splide-cntrl-btn--prev",
          "aria-label": "Previous slide",
          onClick: ln(y, ["stop", "prevent"])
        }, null, 8, ja), W("button", {
          class: "splide-cntrl-btn splide-cntrl-btn--next",
          "aria-label": "Next slide",
          onClick: ln(E, ["stop", "prevent"])
        }, null, 8, Va)]), W("div", {
          class: "mobile-slide-pagination",
          style: Tr({
            "--progress": $(h)
          })
        }, [(Z(!0), ne($e, null, He((K = $(i)) == null ? void 0 : K.other_photos, (X, S) => (Z(), ne("div", {
          class: wr({
            active: $(s) === S
          })
        }, xa, 2))), 256))], 4)])])
      }
    }
  });
const Ha = Ut(Fa, [
  ["__scopeId", "data-v-9d36a67c"]
]);
export {
  Ha as
  default
};