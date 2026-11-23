/* https://aventuradentalarts.com/_nuxt/jnTzBd4Y.js */
function ee(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}

function K(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach(i => {
    typeof t[i] > "u" ? t[i] = e[i] : ee(e[i]) && ee(t[i]) && Object.keys(e[i]).length > 0 && K(t[i], e[i])
  })
}
const le = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return {
      initEvent() {}
    }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function D() {
  const t = typeof document < "u" ? document : {};
  return K(t, le), t
}
const we = {
  document: le,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function() {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0)
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t)
  }
};

function O() {
  const t = typeof window < "u" ? window : {};
  return K(t, we), t
}

function Se(t) {
  const e = t;
  Object.keys(e).forEach(i => {
    try {
      e[i] = null
    } catch {}
    try {
      delete e[i]
    } catch {}
  })
}

function X(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e)
}

function F() {
  return Date.now()
}

function Te(t) {
  const e = O();
  let i;
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
}

function xe(t, e) {
  e === void 0 && (e = "x");
  const i = O();
  let s, n, r;
  const o = Te(t);
  return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(l => l.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0
}

function V(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}

function be(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}

function I() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !be(s)) {
      const n = Object.keys(Object(s)).filter(r => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 && a.enumerable && (V(t[l]) && V(s[l]) ? s[l].__swiper__ ? t[l] = s[l] : I(t[l], s[l]) : !V(t[l]) && V(s[l]) ? (t[l] = {}, s[l].__swiper__ ? t[l] = s[l] : I(t[l], s[l])) : t[l] = s[l])
      }
    }
  }
  return t
}

function N(t, e, i) {
  t.style.setProperty(e, i)
}

function oe(t) {
  let {
    swiper: e,
    targetPosition: i,
    side: s
  } = t;
  const n = O(),
    r = -e.translate;
  let o = null,
    l;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const d = i > r ? "next" : "prev",
    p = (h, c) => d === "next" && h >= c || d === "prev" && h <= c,
    u = () => {
      l = new Date().getTime(), o === null && (o = l);
      const h = Math.max(Math.min((l - o) / a, 1), 0),
        c = .5 - Math.cos(h * Math.PI) / 2;
      let S = r + c * (i - r);
      if (p(S, i) && (S = i), e.wrapperEl.scrollTo({
          [s]: S
        }), p(S, i)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: S
          })
        }), n.cancelAnimationFrame(e.cssModeFrameID);
        return
      }
      e.cssModeFrameID = n.requestAnimationFrame(u)
    };
  u()
}

function G(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter(i => i.matches(e))
}

function de(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...Array.isArray(e) ? e : [e]), i
}

function ye(t, e) {
  const i = [];
  for (; t.previousElementSibling;) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s
  }
  return i
}

function Ee(t, e) {
  const i = [];
  for (; t.nextElementSibling;) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s
  }
  return i
}

function k(t, e) {
  return O().getComputedStyle(t, null).getPropertyValue(e)
}

function te(t) {
  let e = t,
    i;
  if (e) {
    for (i = 0;
      (e = e.previousSibling) !== null;) e.nodeType === 1 && (i += 1);
    return i
  }
}

function Pe(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s;) e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
  return i
}

function Bt(t, e) {
  function i(s) {
    s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i))
  }
  e && t.addEventListener("transitionend", i)
}

function ie(t, e, i) {
  const s = O();
  return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
let $;

function Me() {
  const t = O(),
    e = D();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
  }
}

function ce() {
  return $ || ($ = Me()), $
}
let H;

function Ce(t) {
  let {
    userAgent: e
  } = t === void 0 ? {} : t;
  const i = ce(),
    s = O(),
    n = s.navigator.platform,
    r = e || s.navigator.userAgent,
    o = {
      ios: !1,
      android: !1
    },
    l = s.screen.width,
    a = s.screen.height,
    d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    c = n === "Win32";
  let S = n === "MacIntel";
  const f = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !p && S && i.touch && f.indexOf(`${l}x${a}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), S = !1), d && !c && (o.os = "android", o.android = !0), (p || h || u) && (o.os = "ios", o.ios = !0), o
}

function Le(t) {
  return t === void 0 && (t = {}), H || (H = Ce(t)), H
}
let R;

function Ie() {
  const t = O();
  let e = !1;

  function i() {
    const s = t.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
  }
  if (i()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
      e = n < 16 || n === 16 && r < 2
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  }
}

function Oe() {
  return R || (R = Ie()), R
}

function ze(t) {
  let {
    swiper: e,
    on: i,
    emit: s
  } = t;
  const n = O();
  let r = null,
    o = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
    },
    a = () => {
      !e || e.destroyed || !e.initialized || (r = new ResizeObserver(u => {
        o = n.requestAnimationFrame(() => {
          const {
            width: h,
            height: c
          } = e;
          let S = h,
            f = c;
          u.forEach(g => {
            let {
              contentBoxSize: m,
              contentRect: w,
              target: v
            } = g;
            v && v !== e.el || (S = w ? w.width : (m[0] || m).inlineSize, f = w ? w.height : (m[0] || m).blockSize)
          }), (S !== h || f !== c) && l()
        })
      }), r.observe(e.el))
    },
    d = () => {
      o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
    },
    p = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange")
    };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", p)
  }), i("destroy", () => {
    d(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", p)
  })
}

function Ae(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = [],
    o = O(),
    l = function(p, u) {
      u === void 0 && (u = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        c = new h(S => {
          if (e.__preventObserver__) return;
          if (S.length === 1) {
            n("observerUpdate", S[0]);
            return
          }
          const f = function() {
            n("observerUpdate", S[0])
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(f) : o.setTimeout(f, 0)
        });
      c.observe(p, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData
      }), r.push(c)
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const p = Pe(e.hostEl);
          for (let u = 0; u < p.length; u += 1) l(p[u])
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        })
      }
    },
    d = () => {
      r.forEach(p => {
        p.disconnect()
      }), r.splice(0, r.length)
    };
  i({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", d)
}
var Ge = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = i ? "unshift" : "push";
    return t.split(" ").forEach(r => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e)
    }), s
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;

    function n() {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l];
      e.apply(s, o)
    }
    return n.__emitterProxy = e, s.on(t, n, i)
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
  },
  off(t, e) {
    const i = this;
    return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach(s => {
      typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1)
      })
    }), i
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, i, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(a => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d => {
        d.apply(s, [a, ...i])
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(d => {
        d.apply(s, i)
      })
    }), t
  }
};

function ke() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(k(s, "padding-left") || 0, 10) - parseInt(k(s, "padding-right") || 0, 10), i = i - parseInt(k(s, "padding-top") || 0, 10) - parseInt(k(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
    width: e,
    height: i,
    size: t.isHorizontal() ? e : i
  }))
}

function De() {
  const t = this;

  function e(x) {
    return t.isHorizontal() ? x : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [x]
  }

  function i(x, b) {
    return parseFloat(x.getPropertyValue(e(b)) || 0)
  }
  const s = t.params,
    {
      wrapperEl: n,
      slidesEl: r,
      size: o,
      rtlTranslate: l,
      wrongRTL: a
    } = t,
    d = t.virtual && s.virtual.enabled,
    p = d ? t.virtual.slides.length : t.slides.length,
    u = G(r, `.${t.params.slideClass}, swiper-slide`),
    h = d ? t.virtual.slides.length : u.length;
  let c = [];
  const S = [],
    f = [];
  let g = s.slidesOffsetBefore;
  typeof g == "function" && (g = s.slidesOffsetBefore.call(t));
  let m = s.slidesOffsetAfter;
  typeof m == "function" && (m = s.slidesOffsetAfter.call(t));
  const w = t.snapGrid.length,
    v = t.slidesGrid.length;
  let T = s.spaceBetween,
    y = -g,
    C = 0,
    E = 0;
  if (typeof o > "u") return;
  typeof T == "string" && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * o : typeof T == "string" && (T = parseFloat(T)), t.virtualSize = -T, u.forEach(x => {
    l ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = ""
  }), s.centeredSlides && s.cssMode && (N(n, "--swiper-centered-offset-before", ""), N(n, "--swiper-centered-offset-after", ""));
  const L = s.grid && s.grid.rows > 1 && t.grid;
  L && t.grid.initSlides(h);
  let M;
  const pe = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(x => typeof s.breakpoints[x].slidesPerView < "u").length > 0;
  for (let x = 0; x < h; x += 1) {
    M = 0;
    let b;
    if (u[x] && (b = u[x]), L && t.grid.updateSlide(x, b, h, e), !(u[x] && k(b, "display") === "none")) {
      if (s.slidesPerView === "auto") {
        pe && (u[x].style[e("width")] = "");
        const P = getComputedStyle(b),
          A = b.style.transform,
          _ = b.style.webkitTransform;
        if (A && (b.style.transform = "none"), _ && (b.style.webkitTransform = "none"), s.roundLengths) M = t.isHorizontal() ? ie(b, "width") : ie(b, "height");
        else {
          const U = i(P, "width"),
            me = i(P, "padding-left"),
            he = i(P, "padding-right"),
            J = i(P, "margin-left"),
            Q = i(P, "margin-right"),
            Z = P.getPropertyValue("box-sizing");
          if (Z && Z === "border-box") M = U + J + Q;
          else {
            const {
              clientWidth: ge,
              offsetWidth: ve
            } = b;
            M = U + me + he + J + Q + (ve - ge)
          }
        }
        A && (b.style.transform = A), _ && (b.style.webkitTransform = _), s.roundLengths && (M = Math.floor(M))
      } else M = (o - (s.slidesPerView - 1) * T) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), u[x] && (u[x].style[e("width")] = `${M}px`);
      u[x] && (u[x].swiperSlideSize = M), f.push(M), s.centeredSlides ? (y = y + M / 2 + C / 2 + T, C === 0 && x !== 0 && (y = y - o / 2 - T), x === 0 && (y = y - o / 2 - T), Math.abs(y) < 1 / 1e3 && (y = 0), s.roundLengths && (y = Math.floor(y)), E % s.slidesPerGroup === 0 && c.push(y), S.push(y)) : (s.roundLengths && (y = Math.floor(y)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup === 0 && c.push(y), S.push(y), y = y + M + T), t.virtualSize += M + T, C = M, E += 1
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, o) + m, l && a && (s.effect === "slide" || s.effect === "coverflow") && (n.style.width = `${t.virtualSize+T}px`), s.setWrapperSize && (n.style[e("width")] = `${t.virtualSize+T}px`), L && t.grid.updateWrapperSize(M, c, e), !s.centeredSlides) {
    const x = [];
    for (let b = 0; b < c.length; b += 1) {
      let P = c[b];
      s.roundLengths && (P = Math.floor(P)), c[b] <= t.virtualSize - o && x.push(P)
    }
    c = x, Math.floor(t.virtualSize - o) - Math.floor(c[c.length - 1]) > 1 && c.push(t.virtualSize - o)
  }
  if (d && s.loop) {
    const x = f[0] + T;
    if (s.slidesPerGroup > 1) {
      const b = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
        P = x * s.slidesPerGroup;
      for (let A = 0; A < b; A += 1) c.push(c[c.length - 1] + P)
    }
    for (let b = 0; b < t.virtual.slidesBefore + t.virtual.slidesAfter; b += 1) s.slidesPerGroup === 1 && c.push(c[c.length - 1] + x), S.push(S[S.length - 1] + x), t.virtualSize += x
  }
  if (c.length === 0 && (c = [0]), T !== 0) {
    const x = t.isHorizontal() && l ? "marginLeft" : e("marginRight");
    u.filter((b, P) => !s.cssMode || s.loop ? !0 : P !== u.length - 1).forEach(b => {
      b.style[x] = `${T}px`
    })
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let x = 0;
    f.forEach(P => {
      x += P + (T || 0)
    }), x -= T;
    const b = x - o;
    c = c.map(P => P <= 0 ? -g : P > b ? b + m : P)
  }
  if (s.centerInsufficientSlides) {
    let x = 0;
    if (f.forEach(b => {
        x += b + (T || 0)
      }), x -= T, x < o) {
      const b = (o - x) / 2;
      c.forEach((P, A) => {
        c[A] = P - b
      }), S.forEach((P, A) => {
        S[A] = P + b
      })
    }
  }
  if (Object.assign(t, {
      slides: u,
      snapGrid: c,
      slidesGrid: S,
      slidesSizesGrid: f
    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
    N(n, "--swiper-centered-offset-before", `${-c[0]}px`), N(n, "--swiper-centered-offset-after", `${t.size/2-f[f.length-1]/2}px`);
    const x = -t.snapGrid[0],
      b = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map(P => P + x), t.slidesGrid = t.slidesGrid.map(P => P + b)
  }
  if (h !== p && t.emit("slidesLengthChange"), c.length !== w && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), S.length !== v && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const x = `${s.containerModifierClass}backface-hidden`,
      b = t.el.classList.contains(x);
    h <= s.maxBackfaceHiddenSlides ? b || t.el.classList.add(x) : b && t.el.classList.remove(x)
  }
}

function Ve(t) {
  const e = this,
    i = [],
    s = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const o = l => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)(e.visibleSlides || []).forEach(l => {
      i.push(l)
    });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        i.push(o(l))
      } else i.push(o(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const l = i[r].offsetHeight;
      n = l > n ? l : n
    }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function Ne() {
  const t = this,
    e = t.slides,
    i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}

function Be(t) {
  t === void 0 && (t = this && this.translate || 0);
  const e = this,
    i = e.params,
    {
      slides: s,
      rtlTranslate: n,
      snapGrid: r
    } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t), s.forEach(a => {
    a.classList.remove(i.slideVisibleClass)
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = i.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const d = s[a];
    let p = d.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (p -= s[0].swiperSlideOffset);
    const u = (o + (i.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + l),
      h = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + l),
      c = -(o - p),
      S = c + e.slidesSizesGrid[a];
    (c >= 0 && c < e.size - 1 || S > 1 && S <= e.size || c <= 0 && S >= e.size) && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(a), s[a].classList.add(i.slideVisibleClass)), d.progress = n ? -u : u, d.originalProgress = n ? -h : h
  }
}

function Fe(t) {
  const e = this;
  if (typeof t > "u") {
    const p = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * p || 0
  }
  const i = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: o,
    progressLoop: l
  } = e;
  const a = r,
    d = o;
  if (s === 0) n = 0, r = !0, o = !0;
  else {
    n = (t - e.minTranslate()) / s;
    const p = Math.abs(t - e.minTranslate()) < 1,
      u = Math.abs(t - e.maxTranslate()) < 1;
    r = p || n <= 0, o = u || n >= 1, p && (n = 0), u && (n = 1)
  }
  if (i.loop) {
    const p = e.getSlideIndexByData(0),
      u = e.getSlideIndexByData(e.slides.length - 1),
      h = e.slidesGrid[p],
      c = e.slidesGrid[u],
      S = e.slidesGrid[e.slidesGrid.length - 1],
      f = Math.abs(t);
    f >= h ? l = (f - h) / S : l = (f + S - c) / S, l > 1 && (l -= 1)
  }
  Object.assign(e, {
    progress: n,
    progressLoop: l,
    isBeginning: r,
    isEnd: o
  }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !d && e.emit("reachEnd toEdge"), (a && !r || d && !o) && e.emit("fromEdge"), e.emit("progress", n)
}

function _e() {
  const t = this,
    {
      slides: e,
      params: i,
      slidesEl: s,
      activeIndex: n
    } = t,
    r = t.virtual && i.virtual.enabled,
    o = a => G(s, `.${i.slideClass}${a}, swiper-slide${a}`)[0];
  e.forEach(a => {
    a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
  });
  let l;
  if (r)
    if (i.loop) {
      let a = n - t.virtual.slidesBefore;
      a < 0 && (a = t.virtual.slides.length + a), a >= t.virtual.slides.length && (a -= t.virtual.slides.length), l = o(`[data-swiper-slide-index="${a}"]`)
    } else l = o(`[data-swiper-slide-index="${n}"]`);
  else l = e[n];
  if (l) {
    l.classList.add(i.slideActiveClass);
    let a = Ee(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !a && (a = e[0]), a && a.classList.add(i.slideNextClass);
    let d = ye(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !d === 0 && (d = e[e.length - 1]), d && d.classList.add(i.slidePrevClass)
  }
  t.emitSlidesClasses()
}
const B = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`,
      s = e.closest(i());
    if (s) {
      let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove())
      })), n && n.remove()
    }
  },
  W = (t, e) => {
    if (!t.slides[e]) return;
    const i = t.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading")
  },
  Y = t => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const i = t.slides.length;
    if (!i || !e || e < 0) return;
    e = Math.min(e, i);
    const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
      n = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = n,
        l = [o - e];
      l.push(...Array.from({
        length: e
      }).map((a, d) => o + s + d)), t.slides.forEach((a, d) => {
        l.includes(a.column) && W(t, d)
      });
      return
    }
    const r = n + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = n - e; o <= r + e; o += 1) {
        const l = (o % i + i) % i;
        (l < n || l > r) && W(t, l)
      } else
        for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1) o !== n && (o > r || o < n) && W(t, o)
  };

function $e(t) {
  const {
    slidesGrid: e,
    params: i
  } = t, s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function He(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    {
      snapGrid: s,
      params: n,
      activeIndex: r,
      realIndex: o,
      snapIndex: l
    } = e;
  let a = t,
    d;
  const p = h => {
    let c = h - e.virtual.slidesBefore;
    return c < 0 && (c = e.virtual.slides.length + c), c >= e.virtual.slides.length && (c -= e.virtual.slides.length), c
  };
  if (typeof a > "u" && (a = $e(e)), s.indexOf(i) >= 0) d = s.indexOf(i);
  else {
    const h = Math.min(n.slidesPerGroupSkip, a);
    d = h + Math.floor((a - h) / n.slidesPerGroup)
  }
  if (d >= s.length && (d = s.length - 1), a === r) {
    d !== l && (e.snapIndex = d, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = p(a));
    return
  }
  let u;
  e.virtual && n.virtual.enabled && n.loop ? u = p(a) : e.slides[a] ? u = parseInt(e.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : u = a, Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: d,
    previousRealIndex: o,
    realIndex: u,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && Y(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== u && e.emit("realIndexChange"), e.emit("slideChange"))
}

function Re(t, e) {
  const i = this,
    s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach(l => {
    !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l)
  });
  let r = !1,
    o;
  if (n) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === n) {
        r = !0, o = l;
        break
      }
  }
  if (n && r) i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = o;
  else {
    i.clickedSlide = void 0, i.clickedIndex = void 0;
    return
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var We = {
  updateSize: ke,
  updateSlides: De,
  updateAutoHeight: Ve,
  updateSlidesOffset: Ne,
  updateSlidesProgress: Be,
  updateProgress: Fe,
  updateSlidesClasses: _e,
  updateActiveIndex: He,
  updateClickedSlide: Re
};

function je(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    {
      params: i,
      rtlTranslate: s,
      translate: n,
      wrapperEl: r
    } = e;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let o = xe(r, t);
  return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0
}

function qe(t, e) {
  const i = this,
    {
      rtlTranslate: s,
      params: n,
      wrapperEl: r,
      progress: o
    } = i;
  let l = 0,
    a = 0;
  const d = 0;
  i.isHorizontal() ? l = s ? -t : t : a = t, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : a, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -a : n.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`);
  let p;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? p = 0 : p = (t - i.minTranslate()) / u, p !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
}

function Xe() {
  return -this.snapGrid[0]
}

function Ye() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function Ke(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
  const r = this,
    {
      params: o,
      wrapperEl: l
    } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    d = r.maxTranslate();
  let p;
  if (s && t > a ? p = a : s && t < d ? p = d : p = t, r.updateProgress(p), o.cssMode) {
    const u = r.isHorizontal();
    if (e === 0) l[u ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!r.support.smoothScroll) return oe({
        swiper: r,
        targetPosition: -p,
        side: u ? "left" : "top"
      }), !0;
      l.scrollTo({
        [u ? "left" : "top"]: -p,
        behavior: "smooth"
      })
    }
    return !0
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(p), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(p), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
    !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var Ue = {
  getTranslate: je,
  setTranslate: qe,
  minTranslate: Xe,
  maxTranslate: Ye,
  translateTo: Ke
};

function Je(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e)
}

function fe(t) {
  let {
    swiper: e,
    runCallbacks: i,
    direction: s,
    step: n
  } = t;
  const {
    activeIndex: r,
    previousIndex: o
  } = e;
  let l = s;
  if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit(`transition${n}`), i && r !== o) {
    if (l === "reset") {
      e.emit(`slideResetTransition${n}`);
      return
    }
    e.emit(`slideChangeTransition${n}`), l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
  }
}

function Qe(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    {
      params: s
    } = i;
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), fe({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "Start"
  }))
}

function Ze(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    {
      params: s
    } = i;
  i.animating = !1, !s.cssMode && (i.setTransition(0), fe({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "End"
  }))
}
var et = {
  setTransition: Je,
  transitionStart: Qe,
  transitionEnd: Ze
};

function tt(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: u,
    rtlTranslate: h,
    wrapperEl: c,
    enabled: S
  } = r;
  if (r.animating && l.preventInteractionOnTransition || !S && !s && !n) return !1;
  const f = Math.min(r.params.slidesPerGroupSkip, o);
  let g = f + Math.floor((o - f) / r.params.slidesPerGroup);
  g >= a.length && (g = a.length - 1);
  const m = -a[g];
  if (l.normalizeSlideIndex)
    for (let v = 0; v < d.length; v += 1) {
      const T = -Math.floor(m * 100),
        y = Math.floor(d[v] * 100),
        C = Math.floor(d[v + 1] * 100);
      typeof d[v + 1] < "u" ? T >= y && T < C - (C - y) / 2 ? o = v : T >= y && T < C && (o = v + 1) : T >= y && (o = v)
    }
  if (r.initialized && o !== u && (!r.allowSlideNext && (h ? m > r.translate && m > r.minTranslate() : m < r.translate && m < r.minTranslate()) || !r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (u || 0) !== o)) return !1;
  o !== (p || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(m);
  let w;
  if (o > u ? w = "next" : o < u ? w = "prev" : w = "reset", h && -m === r.translate || !h && m === r.translate) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(m), w !== "reset" && (r.transitionStart(i, w), r.transitionEnd(i, w)), !1;
  if (l.cssMode) {
    const v = r.isHorizontal(),
      T = h ? m : -m;
    if (e === 0) {
      const y = r.virtual && r.params.virtual.enabled;
      y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        c[v ? "scrollLeft" : "scrollTop"] = T
      })) : c[v ? "scrollLeft" : "scrollTop"] = T, y && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
      })
    } else {
      if (!r.support.smoothScroll) return oe({
        swiper: r,
        targetPosition: T,
        side: v ? "left" : "top"
      }), !0;
      c.scrollTo({
        [v ? "left" : "top"]: T,
        behavior: "smooth"
      })
    }
    return !0
  }
  return r.setTransition(e), r.setTranslate(m), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, w), e === 0 ? r.transitionEnd(i, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(T) {
    !r || r.destroyed || T.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, w))
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function it(t, e, i, s) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  let r = t;
  return n.params.loop && (n.virtual && n.params.virtual.enabled ? r = r + n.virtual.slidesBefore : r = n.getSlideIndexByData(r)), n.slideTo(r, e, i, s)
}

function st(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      enabled: n,
      params: r,
      animating: o
    } = s;
  if (!n) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !d && r.loopPreventsSliding) return !1;
    if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
      s.slideTo(s.activeIndex + a, t, e, i)
    }), !0
  }
  return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}

function rt(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: d
    } = s;
  if (!a) return s;
  const p = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !p && n.loopPreventsSliding) return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft
  }
  const u = l ? s.translate : -s.translate;

  function h(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
  }
  const c = h(u),
    S = r.map(m => h(m));
  let f = r[S.indexOf(c) - 1];
  if (typeof f > "u" && n.cssMode) {
    let m;
    r.forEach((w, v) => {
      c >= w && (m = v)
    }), typeof m < "u" && (f = r[m > 0 ? m - 1 : m])
  }
  let g = 0;
  if (typeof f < "u" && (g = o.indexOf(f), g < 0 && (g = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (g = g - s.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), n.rewind && s.isBeginning) {
    const m = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(m, t, e, i)
  } else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
    s.slideTo(g, t, e, i)
  }), !0;
  return s.slideTo(g, t, e, i)
}

function nt(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, i)
}

function at(t, e, i, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = .5);
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const d = n.snapGrid[l],
      p = n.snapGrid[l + 1];
    a - d > (p - d) * s && (r += n.params.slidesPerGroup)
  } else {
    const d = n.snapGrid[l - 1],
      p = n.snapGrid[l];
    a - d <= (p - d) * s && (r -= n.params.slidesPerGroup)
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i)
}

function lt() {
  const t = this,
    {
      params: e,
      slidesEl: i
    } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex,
    r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(G(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), X(() => {
      t.slideTo(n)
    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(G(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), X(() => {
      t.slideTo(n)
    })) : t.slideTo(n)
  } else t.slideTo(n)
}
var ot = {
  slideTo: tt,
  slideToLoop: it,
  slideNext: st,
  slidePrev: rt,
  slideReset: nt,
  slideToClosest: at,
  slideToClickedSlide: lt
};

function dt(t) {
  const e = this,
    {
      params: i,
      slidesEl: s
    } = e;
  if (!i.loop || e.virtual && e.params.virtual.enabled) return;
  G(s, `.${i.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute("data-swiper-slide-index", o)
  }), e.loopFix({
    slideRealIndex: t,
    direction: i.centeredSlides ? void 0 : "next"
  })
}

function ct(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: d,
    allowSlidePrev: p,
    allowSlideNext: u,
    slidesEl: h,
    params: c
  } = a;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && c.virtual.enabled) {
    i && (!c.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : c.centeredSlides && a.snapIndex < c.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = p, a.allowSlideNext = u, a.emit("loopFix");
    return
  }
  const S = c.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(c.slidesPerView, 10));
  let f = c.loopedSlides || S;
  f % c.slidesPerGroup !== 0 && (f += c.slidesPerGroup - f % c.slidesPerGroup), a.loopedSlides = f;
  const g = [],
    m = [];
  let w = a.activeIndex;
  typeof r > "u" ? r = a.getSlideIndex(a.slides.filter(E => E.classList.contains(c.slideActiveClass))[0]) : w = r;
  const v = s === "next" || !s,
    T = s === "prev" || !s;
  let y = 0,
    C = 0;
  if (r < f) {
    y = Math.max(f - r, c.slidesPerGroup);
    for (let E = 0; E < f - r; E += 1) {
      const L = E - Math.floor(E / d.length) * d.length;
      g.push(d.length - L - 1)
    }
  } else if (r > a.slides.length - f * 2) {
    C = Math.max(r - (a.slides.length - f * 2), c.slidesPerGroup);
    for (let E = 0; E < C; E += 1) {
      const L = E - Math.floor(E / d.length) * d.length;
      m.push(L)
    }
  }
  if (T && g.forEach(E => {
      a.slides[E].swiperLoopMoveDOM = !0, h.prepend(a.slides[E]), a.slides[E].swiperLoopMoveDOM = !1
    }), v && m.forEach(E => {
      a.slides[E].swiperLoopMoveDOM = !0, h.append(a.slides[E]), a.slides[E].swiperLoopMoveDOM = !1
    }), a.recalcSlides(), c.slidesPerView === "auto" && a.updateSlides(), c.watchSlidesProgress && a.updateSlidesOffset(), i) {
    if (g.length > 0 && T)
      if (typeof e > "u") {
        const E = a.slidesGrid[w],
          M = a.slidesGrid[w + y] - E;
        l ? a.setTranslate(a.translate - M) : (a.slideTo(w + y, 0, !1, !0), n && (a.touches[a.isHorizontal() ? "startX" : "startY"] += M, a.touchEventsData.currentTranslate = a.translate))
      } else n && (a.slideToLoop(e, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate);
    else if (m.length > 0 && v)
      if (typeof e > "u") {
        const E = a.slidesGrid[w],
          M = a.slidesGrid[w - C] - E;
        l ? a.setTranslate(a.translate - M) : (a.slideTo(w - C, 0, !1, !0), n && (a.touches[a.isHorizontal() ? "startX" : "startY"] += M, a.touchEventsData.currentTranslate = a.translate))
      } else a.slideToLoop(e, 0, !1, !0)
  }
  if (a.allowSlidePrev = p, a.allowSlideNext = u, a.controller && a.controller.control && !o) {
    const E = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach(L => {
      !L.destroyed && L.params.loop && L.loopFix({
        ...E,
        slideTo: L.params.slidesPerView === c.slidesPerView ? i : !1
      })
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...E,
      slideTo: a.controller.control.params.slidesPerView === c.slidesPerView ? i : !1
    })
  }
  a.emit("loopFix")
}

function ft() {
  const t = this,
    {
      params: e,
      slidesEl: i
    } = t;
  if (!e.loop || t.virtual && t.params.virtual.enabled) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach(n => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n
  }), t.slides.forEach(n => {
    n.removeAttribute("data-swiper-slide-index")
  }), s.forEach(n => {
    i.append(n)
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0)
}
var ut = {
  loopCreate: dt,
  loopFix: ct,
  loopDestroy: ft
};

function pt(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  })
}

function mt() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1
  }))
}
var ht = {
  setGrabCursor: pt,
  unsetGrabCursor: mt
};

function gt(t, e) {
  e === void 0 && (e = this);

  function i(s) {
    if (!s || s === D() || s === O()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host)
  }
  return i(e)
}

function vt(t) {
  const e = this,
    i = D(),
    s = O(),
    n = e.touchEventsData;
  n.evCache.push(t);
  const {
    params: r,
    touches: o,
    enabled: l
  } = e;
  if (!l || !r.simulateTouch && t.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = t;
  a.originalEvent && (a = a.originalEvent);
  let d = a.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(d) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || n.isTouched && n.isMoved) return;
  const p = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = t.composedPath ? t.composedPath() : t.path;
  p && a.target && a.target.shadowRoot && u && (d = u[0]);
  const h = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    c = !!(a.target && a.target.shadowRoot);
  if (r.noSwiping && (c ? gt(h, d) : d.closest(h))) {
    e.allowClick = !0;
    return
  }
  if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
  o.currentX = a.pageX, o.currentY = a.pageY;
  const S = o.currentX,
    f = o.currentY,
    g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (g && (S <= m || S >= s.innerWidth - m))
    if (g === "prevent") t.preventDefault();
    else return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = S, o.startY = f, n.touchStartTime = F(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let w = !0;
  d.matches(n.focusableElements) && (w = !1, d.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== d && i.activeElement.blur();
  const v = w && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || v) && !d.isContentEditable && a.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", a)
}

function wt(t) {
  const e = D(),
    i = this,
    s = i.touchEventsData,
    {
      params: n,
      touches: r,
      rtlTranslate: o,
      enabled: l
    } = i;
  if (!l || !n.simulateTouch && t.pointerType === "mouse") return;
  let a = t;
  if (a.originalEvent && (a = a.originalEvent), !s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return
  }
  const d = s.evCache.findIndex(E => E.pointerId === a.pointerId);
  d >= 0 && (s.evCache[d] = a);
  const p = s.evCache.length > 1 ? s.evCache[0] : a,
    u = p.pageX,
    h = p.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = u, r.startY = h;
    return
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: u,
      startY: h,
      prevX: i.touches.currentX,
      prevY: i.touches.currentY,
      currentX: u,
      currentY: h
    }), s.touchStartTime = F());
    return
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (h < r.startY && i.translate <= i.maxTranslate() || h > r.startY && i.translate >= i.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return
      }
    } else if (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate()) return
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, i.allowClick = !1;
    return
  }
  if (s.allowTouchCallbacks && i.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
  r.currentX = u, r.currentY = h;
  const c = r.currentX - r.startX,
    S = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(c ** 2 + S ** 2) < i.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let E;
    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : c * c + S * S >= 25 && (E = Math.atan2(Math.abs(S), Math.abs(c)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? E > n.touchAngle : 90 - E > n.touchAngle)
  }
  if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) {
    s.isTouched = !1;
    return
  }
  if (!s.startMoving) return;
  i.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let f = i.isHorizontal() ? c : S,
    g = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (f = Math.abs(f) * (o ? 1 : -1), g = Math.abs(g) * (o ? 1 : -1)), r.diff = f, f *= n.touchRatio, o && (f = -f, g = -g);
  const m = i.touchesDirection;
  i.swipeDirection = f > 0 ? "prev" : "next", i.touchesDirection = g > 0 ? "prev" : "next";
  const w = i.params.loop && !n.cssMode,
    v = i.swipeDirection === "next" && i.allowSlideNext || i.swipeDirection === "prev" && i.allowSlidePrev;
  if (!s.isMoved) {
    if (w && v && i.loopFix({
        direction: i.swipeDirection
      }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      i.wrapperEl.dispatchEvent(E)
    }
    s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", a)
  }
  let T;
  s.isMoved && m !== i.touchesDirection && w && v && Math.abs(f) >= 1 && (i.loopFix({
    direction: i.swipeDirection,
    setTranslate: !0
  }), T = !0), i.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = f + s.startTranslate;
  let y = !0,
    C = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (C = 0), f > 0 ? (w && v && !T && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > i.minTranslate() && (y = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + f) ** C))) : f < 0 && (w && v && !T && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), s.currentTranslate < i.maxTranslate() && (y = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - f) ** C))), y && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(f) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return
    }! n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
}

function St(t) {
  const e = this,
    i = e.touchEventsData,
    s = i.evCache.findIndex(v => v.pointerId === t.pointerId);
  if (s >= 0 && i.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(t.type) && !(["pointercancel", "contextmenu"].includes(t.type) && (e.browser.isSafari || e.browser.isWebView))) return;
  const {
    params: n,
    touches: r,
    rtlTranslate: o,
    slidesGrid: l,
    enabled: a
  } = e;
  if (!a || !n.simulateTouch && t.pointerType === "mouse") return;
  let d = t;
  if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) {
    i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
    return
  }
  n.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const p = F(),
    u = p - i.touchStartTime;
  if (e.allowClick) {
    const v = d.path || d.composedPath && d.composedPath();
    e.updateClickedSlide(v && v[0] || d.target, v), e.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", d)
  }
  if (i.lastClickTime = F(), X(() => {
      e.destroyed || (e.allowClick = !0)
    }), !i.isTouched || !i.isMoved || !e.swipeDirection || r.diff === 0 || i.currentTranslate === i.startTranslate) {
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    return
  }
  i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
  let h;
  if (n.followFinger ? h = o ? e.translate : -e.translate : h = -i.currentTranslate, n.cssMode) return;
  if (n.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return
  }
  let c = 0,
    S = e.slidesSizesGrid[0];
  for (let v = 0; v < l.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const T = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof l[v + T] < "u" ? h >= l[v] && h < l[v + T] && (c = v, S = l[v + T] - l[v]) : h >= l[v] && (c = v, S = l[l.length - 1] - l[l.length - 2])
  }
  let f = null,
    g = null;
  n.rewind && (e.isBeginning ? g = n.virtual && n.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (f = 0));
  const m = (h - l[c]) / S,
    w = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (u > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.swipeDirection === "next" && (m >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? f : c + w) : e.slideTo(c)), e.swipeDirection === "prev" && (m > 1 - n.longSwipesRatio ? e.slideTo(c + w) : g !== null && m < 0 && Math.abs(m) > n.longSwipesRatio ? e.slideTo(g) : e.slideTo(c))
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.navigation && (d.target === e.navigation.nextEl || d.target === e.navigation.prevEl) ? d.target === e.navigation.nextEl ? e.slideTo(c + w) : e.slideTo(c) : (e.swipeDirection === "next" && e.slideTo(f !== null ? f : c + w), e.swipeDirection === "prev" && e.slideTo(g !== null ? g : c))
  }
}

function se() {
  const t = this,
    {
      params: e,
      el: i
    } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = t, o = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}

function Tt(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}

function xt() {
  const t = this,
    {
      wrapperEl: e,
      rtlTranslate: i,
      enabled: s
    } = t;
  if (!s) return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
}

function bt(t) {
  const e = this;
  B(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
let re = !1;

function yt() {}
const ue = (t, e) => {
  const i = D(),
    {
      params: s,
      el: n,
      wrapperEl: r,
      device: o
    } = t,
    l = !!s.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  n[a]("pointerdown", t.onTouchStart, {
    passive: !1
  }), i[a]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: l
  }), i[a]("pointerup", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointercancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerout", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerleave", t.onTouchEnd, {
    passive: !0
  }), i[a]("contextmenu", t.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0), s.cssMode && r[a]("scroll", t.onScroll), s.updateOnWindowResize ? t[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", se, !0) : t[d]("observerUpdate", se, !0), n[a]("load", t.onLoad, {
    capture: !0
  })
};

function Et() {
  const t = this,
    e = D(),
    {
      params: i
    } = t;
  t.onTouchStart = vt.bind(t), t.onTouchMove = wt.bind(t), t.onTouchEnd = St.bind(t), i.cssMode && (t.onScroll = xt.bind(t)), t.onClick = Tt.bind(t), t.onLoad = bt.bind(t), re || (e.addEventListener("touchstart", yt), re = !0), ue(t, "on")
}

function Pt() {
  ue(this, "off")
}
var Mt = {
  attachEvents: Et,
  detachEvents: Pt
};
const ne = (t, e) => t.grid && e.grid && e.grid.rows > 1;

function Ct() {
  const t = this,
    {
      realIndex: e,
      initialized: i,
      params: s,
      el: n
    } = t,
    r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || t.originalParams,
    d = ne(t, s),
    p = ne(t, a),
    u = s.enabled;
  d && !p ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !d && p && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(m => {
    if (typeof a[m] > "u") return;
    const w = s[m] && s[m].enabled,
      v = a[m] && a[m].enabled;
    w && !v && t[m].disable(), !w && v && t[m].enable()
  });
  const h = a.direction && a.direction !== s.direction,
    c = s.loop && (a.slidesPerView !== s.slidesPerView || h),
    S = s.loop;
  h && i && t.changeDirection(), I(t.params, a);
  const f = t.params.enabled,
    g = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), u && !f ? t.disable() : !u && f && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", a), i && (c ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !S && g ? (t.loopCreate(e), t.updateSlides()) : S && !g && t.loopDestroy()), t.emit("breakpoint", a)
}

function Lt(t, e, i) {
  if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
  let s = !1;
  const n = O(),
    r = e === "window" ? n.innerHeight : i.clientHeight,
    o = Object.keys(t).map(l => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return {
          value: r * a,
          point: l
        }
      }
      return {
        value: l,
        point: l
      }
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: d
    } = o[l];
    e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a)
  }
  return s || "max"
}
var It = {
  setBreakpoint: Ct,
  getBreakpoint: Lt
};

function Ot(t, e) {
  const i = [];
  return t.forEach(s => {
    typeof s == "object" ? Object.keys(s).forEach(n => {
      s[n] && i.push(e + n)
    }) : typeof s == "string" && i.push(e + s)
  }), i
}

function zt() {
  const t = this,
    {
      classNames: e,
      params: i,
      rtl: s,
      el: n,
      device: r
    } = t,
    o = Ot(["initialized", i.direction, {
      "free-mode": t.params.freeMode && i.freeMode.enabled
    }, {
      autoheight: i.autoHeight
    }, {
      rtl: s
    }, {
      grid: i.grid && i.grid.rows > 1
    }, {
      "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": i.cssMode
    }, {
      centered: i.cssMode && i.centeredSlides
    }, {
      "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
  e.push(...o), n.classList.add(...e), t.emitContainerClasses()
}

function At() {
  const t = this,
    {
      el: e,
      classNames: i
    } = t;
  e.classList.remove(...i), t.emitContainerClasses()
}
var Gt = {
  addClasses: zt,
  removeClasses: At
};

function kt() {
  const t = this,
    {
      isLocked: e,
      params: i
    } = t,
    {
      slidesOffsetBefore: s
    } = i;
  if (s) {
    const n = t.slides.length - 1,
      r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r
  } else t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var Dt = {
    checkOverflow: kt
  },
  ae = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

function Vt(t, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      I(e, s);
      return
    }
    if (t[n] === !0 && (t[n] = {
        enabled: !0
      }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
      I(e, s);
      return
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
      enabled: !1
    }), I(e, s)
  }
}
const j = {
    eventsEmitter: Ge,
    update: We,
    translate: Ue,
    transition: et,
    slide: ot,
    loop: ut,
    grabCursor: ht,
    events: Mt,
    breakpoints: It,
    checkOverflow: Dt,
    classes: Gt
  },
  q = {};
class z {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = I({}, i), e && !i.el && (i.el = e);
    const o = D();
    if (i.el && typeof i.el == "string" && o.querySelectorAll(i.el).length > 1) {
      const p = [];
      return o.querySelectorAll(i.el).forEach(u => {
        const h = I({}, i, {
          el: u
        });
        p.push(new z(h))
      }), p
    }
    const l = this;
    l.__swiper__ = !0, l.support = ce(), l.device = Le({
      userAgent: i.userAgent
    }), l.browser = Oe(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const a = {};
    l.modules.forEach(p => {
      p({
        params: i,
        swiper: l,
        extendParams: Vt(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      })
    });
    const d = I({}, ae, a);
    return l.params = I({}, d, q, i), l.originalParams = I({}, l.params), l.passedParams = I({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach(p => {
      l.on(p, l.params.on[p])
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: e,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return l.params.direction === "horizontal"
      },
      isVertical() {
        return l.params.direction === "vertical"
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
      },
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: l.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: !0,
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l
  }
  getSlideIndex(e) {
    const {
      slidesEl: i,
      params: s
    } = this, n = G(i, `.${s.slideClass}, swiper-slide`), r = te(n[0]);
    return te(e) - r
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === e)[0])
  }
  recalcSlides() {
    const e = this,
      {
        slidesEl: i,
        params: s
      } = e;
    e.slides = G(i, `.${s.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", i.join(" "))
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed ? "" : e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach(s => {
      const n = e.getSlideClasses(s);
      i.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n)
    }), e.emit("_slideClasses", i)
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: d
      } = s;
    let p = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let u = r[d] ? r[d].swiperSlideSize : 0,
        h;
      for (let c = d + 1; c < r.length; c += 1) r[c] && !h && (u += r[c].swiperSlideSize, p += 1, u > a && (h = !0));
      for (let c = d - 1; c >= 0; c -= 1) r[c] && !h && (u += r[c].swiperSlideSize, p += 1, u > a && (h = !0))
    } else if (e === "current")
      for (let u = d + 1; u < r.length; u += 1)(i ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (p += 1);
    else
      for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < a && (p += 1);
    return p
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: i,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
      o.complete && B(e, o)
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0)
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n()
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update")
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const s = this,
      n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(r => {
      e === "vertical" ? r.style.width = "" : r.style.height = ""
    }), s.emit("changeDirection"), i && s.update()), s
  }
  changeLanguageDirection(e) {
    const i = this;
    i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update())
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let s = e || i.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s) return !1;
    s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (i.isElement = !0);
    const n = () => `.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : G(s, n())[0];
    return !o && i.params.createElements && (o = de("div", i.params.wrapperClass), s.append(o), G(s, `.${i.params.slideClass}`).forEach(l => {
      o.append(l)
    })), Object.assign(i, {
      el: s,
      wrapperEl: o,
      slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
      hostEl: i.isElement ? s.parentNode.host : s,
      mounted: !0,
      rtl: s.dir.toLowerCase() === "rtl" || k(s, "direction") === "rtl",
      rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || k(s, "direction") === "rtl"),
      wrongRTL: k(o, "display") === "-webkit-box"
    }), !0
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(), i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(r => {
      r.complete ? B(i, r) : r.addEventListener("load", o => {
        B(i, o.target)
      })
    }), Y(i), i.initialized = !0, Y(i), i.emit("init"), i.emit("afterInit"), i
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const s = this,
      {
        params: n,
        el: r,
        wrapperEl: o,
        slides: l
      } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(a => {
      a.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(a => {
      s.off(a)
    }), e !== !1 && (s.el.swiper = null, Se(s)), s.destroyed = !0), null
  }
  static extendDefaults(e) {
    I(q, e)
  }
  static get extendedDefaults() {
    return q
  }
  static get defaults() {
    return ae
  }
  static installModule(e) {
    z.prototype.__modules__ || (z.prototype.__modules__ = []);
    const i = z.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach(i => z.installModule(i)), z) : (z.installModule(e), z)
  }
}
Object.keys(j).forEach(t => {
  Object.keys(j[t]).forEach(e => {
    z.prototype[e] = j[t][e]
  })
});
z.use([ze, Ae]);

function Nt(t, e, i, s) {
  return t.params.createElements && Object.keys(s).forEach(n => {
    if (!i[n] && i.auto === !0) {
      let r = G(t.el, `.${s[n]}`)[0];
      r || (r = de("div", s[n]), r.className = s[n], t.el.append(r)), i[n] = r, e[n] = r
    }
  }), i
}

function Ft(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null
  };
  const r = f => (Array.isArray(f) ? f : [f]).filter(g => !!g);

  function o(f) {
    let g;
    return f && typeof f == "string" && e.isElement && (g = e.el.querySelector(f), g) ? g : (f && (typeof f == "string" && (g = [...document.querySelectorAll(f)]), e.params.uniqueNavElements && typeof f == "string" && g.length > 1 && e.el.querySelectorAll(f).length === 1 && (g = e.el.querySelector(f))), f && !g ? f : g)
  }

  function l(f, g) {
    const m = e.params.navigation;
    f = r(f), f.forEach(w => {
      w && (w.classList[g ? "add" : "remove"](...m.disabledClass.split(" ")), w.tagName === "BUTTON" && (w.disabled = g), e.params.watchOverflow && e.enabled && w.classList[e.isLocked ? "add" : "remove"](m.lockClass))
    })
  }

  function a() {
    const {
      nextEl: f,
      prevEl: g
    } = e.navigation;
    if (e.params.loop) {
      l(g, !1), l(f, !1);
      return
    }
    l(g, e.isBeginning && !e.params.rewind), l(f, e.isEnd && !e.params.rewind)
  }

  function d(f) {
    f.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"))
  }

  function p(f) {
    f.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"))
  }

  function u() {
    const f = e.params.navigation;
    if (e.params.navigation = Nt(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(f.nextEl || f.prevEl)) return;
    let g = o(f.nextEl),
      m = o(f.prevEl);
    Object.assign(e.navigation, {
      nextEl: g,
      prevEl: m
    }), g = r(g), m = r(m);
    const w = (v, T) => {
      v && v.addEventListener("click", T === "next" ? p : d), !e.enabled && v && v.classList.add(...f.lockClass.split(" "))
    };
    g.forEach(v => w(v, "next")), m.forEach(v => w(v, "prev"))
  }

  function h() {
    let {
      nextEl: f,
      prevEl: g
    } = e.navigation;
    f = r(f), g = r(g);
    const m = (w, v) => {
      w.removeEventListener("click", v === "next" ? p : d), w.classList.remove(...e.params.navigation.disabledClass.split(" "))
    };
    f.forEach(w => m(w, "next")), g.forEach(w => m(w, "prev"))
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? S() : (u(), a())
  }), s("toEdge fromEdge lock unlock", () => {
    a()
  }), s("destroy", () => {
    h()
  }), s("enable disable", () => {
    let {
      nextEl: f,
      prevEl: g
    } = e.navigation;
    if (f = r(f), g = r(g), e.enabled) {
      a();
      return
    } [...f, ...g].filter(m => !!m).forEach(m => m.classList.add(e.params.navigation.lockClass))
  }), s("click", (f, g) => {
    let {
      nextEl: m,
      prevEl: w
    } = e.navigation;
    m = r(m), w = r(w);
    const v = g.target;
    if (e.params.navigation.hideOnClick && !w.includes(v) && !m.includes(v)) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === v || e.pagination.el.contains(v))) return;
      let T;
      m.length ? T = m[0].classList.contains(e.params.navigation.hiddenClass) : w.length && (T = w[0].classList.contains(e.params.navigation.hiddenClass)), n(T === !0 ? "navigationShow" : "navigationHide"), [...m, ...w].filter(y => !!y).forEach(y => y.classList.toggle(e.params.navigation.hiddenClass))
    }
  });
  const c = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), u(), a()
    },
    S = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), h()
    };
  Object.assign(e.navigation, {
    enable: c,
    disable: S,
    update: a,
    init: u,
    destroy: h
  })
}
export {
  Ft as N, z as S, F as a, te as b, Nt as c, Pe as d, ie as e, Bt as f, O as g, D as h, X as n
};