/* https://coevalstudio.com/_nuxt/effect-creative.2b3e219c.js */
function te(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}

function U(t = {}, e = {}) {
  Object.keys(e).forEach(s => {
    typeof t[s] > "u" ? t[s] = e[s] : te(e[s]) && te(t[s]) && Object.keys(e[s]).length > 0 && U(t[s], e[s])
  })
}
const de = {
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

function V() {
  const t = typeof document < "u" ? document : {};
  return U(t, de), t
}
const Se = {
  document: de,
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

function L() {
  const t = typeof window < "u" ? window : {};
  return U(t, Se), t
}

function Te(t) {
  const e = t;
  Object.keys(e).forEach(s => {
    try {
      e[s] = null
    } catch {}
    try {
      delete e[s]
    } catch {}
  })
}

function Y(t, e = 0) {
  return setTimeout(t, e)
}

function B() {
  return Date.now()
}

function be(t) {
  const e = L();
  let s;
  return e.getComputedStyle && (s = e.getComputedStyle(t, null)), !s && t.currentStyle && (s = t.currentStyle), s || (s = t.style), s
}

function ye(t, e = "x") {
  const s = L();
  let i, n, r;
  const l = be(t);
  return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(a => a.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), e === "x" && (s.WebKitCSSMatrix ? n = r.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), e === "y" && (s.WebKitCSSMatrix ? n = r.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0
}

function D(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}

function xe(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}

function I(...t) {
  const e = Object(t[0]),
    s = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < t.length; i += 1) {
    const n = t[i];
    if (n != null && !xe(n)) {
      const r = Object.keys(Object(n)).filter(l => s.indexOf(l) < 0);
      for (let l = 0, a = r.length; l < a; l += 1) {
        const o = r[l],
          d = Object.getOwnPropertyDescriptor(n, o);
        d !== void 0 && d.enumerable && (D(e[o]) && D(n[o]) ? n[o].__swiper__ ? e[o] = n[o] : I(e[o], n[o]) : !D(e[o]) && D(n[o]) ? (e[o] = {}, n[o].__swiper__ ? e[o] = n[o] : I(e[o], n[o])) : e[o] = n[o])
      }
    }
  }
  return e
}

function $(t, e, s) {
  t.style.setProperty(e, s)
}

function ce({
  swiper: t,
  targetPosition: e,
  side: s
}) {
  const i = L(),
    n = -t.translate;
  let r = null,
    l;
  const a = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
  const o = e > n ? "next" : "prev",
    d = (f, u) => o === "next" && f >= u || o === "prev" && f <= u,
    p = () => {
      l = new Date().getTime(), r === null && (r = l);
      const f = Math.max(Math.min((l - r) / a, 1), 0),
        u = .5 - Math.cos(f * Math.PI) / 2;
      let c = n + u * (e - n);
      if (d(c, e) && (c = e), t.wrapperEl.scrollTo({
          [s]: c
        }), d(c, e)) {
        t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [s]: c
          })
        }), i.cancelAnimationFrame(t.cssModeFrameID);
        return
      }
      t.cssModeFrameID = i.requestAnimationFrame(p)
    };
  p()
}

function K(t) {
  return t.querySelector(".swiper-slide-transform") || t.shadowEl && t.shadowEl.querySelector(".swiper-slide-transform") || t
}

function A(t, e = "") {
  return [...t.children].filter(s => s.matches(e))
}

function fe(t, e = []) {
  const s = document.createElement(t);
  return s.classList.add(...Array.isArray(e) ? e : [e]), s
}

function Ee(t, e) {
  const s = [];
  for (; t.previousElementSibling;) {
    const i = t.previousElementSibling;
    e ? i.matches(e) && s.push(i) : s.push(i), t = i
  }
  return s
}

function Me(t, e) {
  const s = [];
  for (; t.nextElementSibling;) {
    const i = t.nextElementSibling;
    e ? i.matches(e) && s.push(i) : s.push(i), t = i
  }
  return s
}

function G(t, e) {
  return L().getComputedStyle(t, null).getPropertyValue(e)
}

function se(t) {
  let e = t,
    s;
  if (e) {
    for (s = 0;
      (e = e.previousSibling) !== null;) e.nodeType === 1 && (s += 1);
    return s
  }
}

function Pe(t, e) {
  const s = [];
  let i = t.parentElement;
  for (; i;) e ? i.matches(e) && s.push(i) : s.push(i), i = i.parentElement;
  return s
}

function Ce(t, e) {
  function s(i) {
    i.target === t && (e.call(t, i), t.removeEventListener("transitionend", s))
  }
  e && t.addEventListener("transitionend", s)
}

function ie(t, e, s) {
  const i = L();
  return s ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth
}
let H;

function Ie() {
  const t = L(),
    e = V();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
  }
}

function ue() {
  return H || (H = Ie()), H
}
let j;

function Le({
  userAgent: t
} = {}) {
  const e = ue(),
    s = L(),
    i = s.navigator.platform,
    n = t || s.navigator.userAgent,
    r = {
      ios: !1,
      android: !1
    },
    l = s.screen.width,
    a = s.screen.height,
    o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    u = i === "Win32";
  let c = i === "MacIntel";
  const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && c && e.touch && h.indexOf(`${l}x${a}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), c = !1), o && !u && (r.os = "android", r.android = !0), (d || f || p) && (r.os = "ios", r.ios = !0), r
}

function Oe(t = {}) {
  return j || (j = Le(t)), j
}
let W;

function ze() {
  const t = L();
  let e = !1;

  function s() {
    const i = t.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
  }
  if (s()) {
    const i = String(t.navigator.userAgent);
    if (i.includes("Version/")) {
      const [n, r] = i.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
      e = n < 16 || n === 16 && r < 2
    }
  }
  return {
    isSafari: e || s(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  }
}

function ke() {
  return W || (W = ze()), W
}

function Ae({
  swiper: t,
  on: e,
  emit: s
}) {
  const i = L();
  let n = null,
    r = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    a = () => {
      !t || t.destroyed || !t.initialized || (n = new ResizeObserver(p => {
        r = i.requestAnimationFrame(() => {
          const {
            width: f,
            height: u
          } = t;
          let c = f,
            h = u;
          p.forEach(({
            contentBoxSize: m,
            contentRect: T,
            target: g
          }) => {
            g && g !== t.el || (c = T ? T.width : (m[0] || m).inlineSize, h = T ? T.height : (m[0] || m).blockSize)
          }), (c !== f || h !== u) && l()
        })
      }), n.observe(t.el))
    },
    o = () => {
      r && i.cancelAnimationFrame(r), n && n.unobserve && t.el && (n.unobserve(t.el), n = null)
    },
    d = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    };
  e("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
  }), e("destroy", () => {
    o(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
  })
}

function Ge({
  swiper: t,
  extendParams: e,
  on: s,
  emit: i
}) {
  const n = [],
    r = L(),
    l = (d, p = {}) => {
      const f = r.MutationObserver || r.WebkitMutationObserver,
        u = new f(c => {
          if (t.__preventObserver__) return;
          if (c.length === 1) {
            i("observerUpdate", c[0]);
            return
          }
          const h = function() {
            i("observerUpdate", c[0])
          };
          r.requestAnimationFrame ? r.requestAnimationFrame(h) : r.setTimeout(h, 0)
        });
      u.observe(d, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData
      }), n.push(u)
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = Pe(t.el);
          for (let p = 0; p < d.length; p += 1) l(d[p])
        }
        l(t.el, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        })
      }
    },
    o = () => {
      n.forEach(d => {
        d.disconnect()
      }), n.splice(0, n.length)
    };
  e({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", o)
}
const Ve = {
  on(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const n = s ? "unshift" : "push";
    return t.split(" ").forEach(r => {
      i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](e)
    }), i
  },
  once(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;

    function n(...r) {
      i.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(i, r)
    }
    return n.__emitterProxy = e, i.on(t, n, s)
  },
  onAny(t, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const i = e ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t), s
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const s = e.eventsAnyListeners.indexOf(t);
    return s >= 0 && e.eventsAnyListeners.splice(s, 1), e
  },
  off(t, e) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || t.split(" ").forEach(i => {
      typeof e > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && s.eventsListeners[i].splice(r, 1)
      })
    }), s
  },
  emit(...t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let s, i, n;
    return typeof t[0] == "string" || Array.isArray(t[0]) ? (s = t[0], i = t.slice(1, t.length), n = e) : (s = t[0].events, i = t[0].data, n = t[0].context || e), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(l => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(a => {
        a.apply(n, [l, ...i])
      }), e.eventsListeners && e.eventsListeners[l] && e.eventsListeners[l].forEach(a => {
        a.apply(n, i)
      })
    }), e
  }
};

function De() {
  const t = this;
  let e, s;
  const i = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = i.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? s = t.params.height : s = i.clientHeight, !(e === 0 && t.isHorizontal() || s === 0 && t.isVertical()) && (e = e - parseInt(G(i, "padding-left") || 0, 10) - parseInt(G(i, "padding-right") || 0, 10), s = s - parseInt(G(i, "padding-top") || 0, 10) - parseInt(G(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(s) && (s = 0), Object.assign(t, {
    width: e,
    height: s,
    size: t.isHorizontal() ? e : s
  }))
}

function $e() {
  const t = this;

  function e(v) {
    return t.isHorizontal() ? v : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [v]
  }

  function s(v, y) {
    return parseFloat(v.getPropertyValue(e(y)) || 0)
  }
  const i = t.params,
    {
      wrapperEl: n,
      slidesEl: r,
      size: l,
      rtlTranslate: a,
      wrongRTL: o
    } = t,
    d = t.virtual && i.virtual.enabled,
    p = d ? t.virtual.slides.length : t.slides.length,
    f = A(r, `.${t.params.slideClass}, swiper-slide`),
    u = d ? t.virtual.slides.length : f.length;
  let c = [];
  const h = [],
    m = [];
  let T = i.slidesOffsetBefore;
  typeof T == "function" && (T = i.slidesOffsetBefore.call(t));
  let g = i.slidesOffsetAfter;
  typeof g == "function" && (g = i.slidesOffsetAfter.call(t));
  const E = t.snapGrid.length,
    w = t.slidesGrid.length;
  let S = i.spaceBetween,
    b = -T,
    x = 0,
    C = 0;
  if (typeof l > "u") return;
  typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : typeof S == "string" && (S = parseFloat(S)), t.virtualSize = -S, f.forEach(v => {
    a ? v.style.marginLeft = "" : v.style.marginRight = "", v.style.marginBottom = "", v.style.marginTop = ""
  }), i.centeredSlides && i.cssMode && ($(n, "--swiper-centered-offset-before", ""), $(n, "--swiper-centered-offset-after", ""));
  const O = i.grid && i.grid.rows > 1 && t.grid;
  O && t.grid.initSlides(u);
  let P;
  const F = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(v => typeof i.breakpoints[v].slidesPerView < "u").length > 0;
  for (let v = 0; v < u; v += 1) {
    P = 0;
    let y;
    if (f[v] && (y = f[v]), O && t.grid.updateSlide(v, y, u, e), !(f[v] && G(y, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        F && (f[v].style[e("width")] = "");
        const M = getComputedStyle(y),
          k = y.style.transform,
          N = y.style.webkitTransform;
        if (k && (y.style.transform = "none"), N && (y.style.webkitTransform = "none"), i.roundLengths) P = t.isHorizontal() ? ie(y, "width", !0) : ie(y, "height", !0);
        else {
          const Z = s(M, "width"),
            he = s(M, "padding-left"),
            ge = s(M, "padding-right"),
            J = s(M, "margin-left"),
            Q = s(M, "margin-right"),
            ee = M.getPropertyValue("box-sizing");
          if (ee && ee === "border-box") P = Z + J + Q;
          else {
            const {
              clientWidth: ve,
              offsetWidth: we
            } = y;
            P = Z + he + ge + J + Q + (we - ve)
          }
        }
        k && (y.style.transform = k), N && (y.style.webkitTransform = N), i.roundLengths && (P = Math.floor(P))
      } else P = (l - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (P = Math.floor(P)), f[v] && (f[v].style[e("width")] = `${P}px`);
      f[v] && (f[v].swiperSlideSize = P), m.push(P), i.centeredSlides ? (b = b + P / 2 + x / 2 + S, x === 0 && v !== 0 && (b = b - l / 2 - S), v === 0 && (b = b - l / 2 - S), Math.abs(b) < 1 / 1e3 && (b = 0), i.roundLengths && (b = Math.floor(b)), C % i.slidesPerGroup === 0 && c.push(b), h.push(b)) : (i.roundLengths && (b = Math.floor(b)), (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup === 0 && c.push(b), h.push(b), b = b + P + S), t.virtualSize += P + S, x = P, C += 1
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, l) + g, a && o && (i.effect === "slide" || i.effect === "coverflow") && (n.style.width = `${t.virtualSize+S}px`), i.setWrapperSize && (n.style[e("width")] = `${t.virtualSize+S}px`), O && t.grid.updateWrapperSize(P, c, e), !i.centeredSlides) {
    const v = [];
    for (let y = 0; y < c.length; y += 1) {
      let M = c[y];
      i.roundLengths && (M = Math.floor(M)), c[y] <= t.virtualSize - l && v.push(M)
    }
    c = v, Math.floor(t.virtualSize - l) - Math.floor(c[c.length - 1]) > 1 && c.push(t.virtualSize - l)
  }
  if (d && i.loop) {
    const v = m[0] + S;
    if (i.slidesPerGroup > 1) {
      const y = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
        M = v * i.slidesPerGroup;
      for (let k = 0; k < y; k += 1) c.push(c[c.length - 1] + M)
    }
    for (let y = 0; y < t.virtual.slidesBefore + t.virtual.slidesAfter; y += 1) i.slidesPerGroup === 1 && c.push(c[c.length - 1] + v), h.push(h[h.length - 1] + v), t.virtualSize += v
  }
  if (c.length === 0 && (c = [0]), S !== 0) {
    const v = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
    f.filter((y, M) => !i.cssMode || i.loop ? !0 : M !== f.length - 1).forEach(y => {
      y.style[v] = `${S}px`
    })
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let v = 0;
    m.forEach(M => {
      v += M + (S || 0)
    }), v -= S;
    const y = v - l;
    c = c.map(M => M < 0 ? -T : M > y ? y + g : M)
  }
  if (i.centerInsufficientSlides) {
    let v = 0;
    if (m.forEach(y => {
        v += y + (S || 0)
      }), v -= S, v < l) {
      const y = (l - v) / 2;
      c.forEach((M, k) => {
        c[k] = M - y
      }), h.forEach((M, k) => {
        h[k] = M + y
      })
    }
  }
  if (Object.assign(t, {
      slides: f,
      snapGrid: c,
      slidesGrid: h,
      slidesSizesGrid: m
    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    $(n, "--swiper-centered-offset-before", `${-c[0]}px`), $(n, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
    const v = -t.snapGrid[0],
      y = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map(M => M + v), t.slidesGrid = t.slidesGrid.map(M => M + y)
  }
  if (u !== p && t.emit("slidesLengthChange"), c.length !== E && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !d && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const v = `${i.containerModifierClass}backface-hidden`,
      y = t.el.classList.contains(v);
    u <= i.maxBackfaceHiddenSlides ? y || t.el.classList.add(v) : y && t.el.classList.remove(v)
  }
}

function _e(t) {
  const e = this,
    s = [],
    i = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const l = a => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)(e.visibleSlides || []).forEach(a => {
      s.push(a)
    });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const a = e.activeIndex + r;
        if (a > e.slides.length && !i) break;
        s.push(l(a))
      } else s.push(l(e.activeIndex));
  for (r = 0; r < s.length; r += 1)
    if (typeof s[r] < "u") {
      const a = s[r].offsetHeight;
      n = a > n ? a : n
    }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function Be() {
  const t = this,
    e = t.slides,
    s = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - s - t.cssOverflowAdjustment()
}

function Fe(t = this && this.translate || 0) {
  const e = this,
    s = e.params,
    {
      slides: i,
      rtlTranslate: n,
      snapGrid: r
    } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -t;
  n && (l = t), i.forEach(o => {
    o.classList.remove(s.slideVisibleClass)
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = s.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < i.length; o += 1) {
    const d = i[o];
    let p = d.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (p -= i[0].swiperSlideOffset);
    const f = (l + (s.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + a),
      u = (l - r[0] + (s.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + a),
      c = -(l - p),
      h = c + e.slidesSizesGrid[o];
    (c >= 0 && c < e.size - 1 || h > 1 && h <= e.size || c <= 0 && h >= e.size) && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(o), i[o].classList.add(s.slideVisibleClass)), d.progress = n ? -f : f, d.originalProgress = n ? -u : u
  }
}

function Ne(t) {
  const e = this;
  if (typeof t > "u") {
    const p = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * p || 0
  }
  const s = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: l,
    progressLoop: a
  } = e;
  const o = r,
    d = l;
  if (i === 0) n = 0, r = !0, l = !0;
  else {
    n = (t - e.minTranslate()) / i;
    const p = Math.abs(t - e.minTranslate()) < 1,
      f = Math.abs(t - e.maxTranslate()) < 1;
    r = p || n <= 0, l = f || n >= 1, p && (n = 0), f && (n = 1)
  }
  if (s.loop) {
    const p = e.getSlideIndexByData(0),
      f = e.getSlideIndexByData(e.slides.length - 1),
      u = e.slidesGrid[p],
      c = e.slidesGrid[f],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      m = Math.abs(t);
    m >= u ? a = (m - u) / h : a = (m + h - c) / h, a > 1 && (a -= 1)
  }
  Object.assign(e, {
    progress: n,
    progressLoop: a,
    isBeginning: r,
    isEnd: l
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && e.updateSlidesProgress(t), r && !o && e.emit("reachBeginning toEdge"), l && !d && e.emit("reachEnd toEdge"), (o && !r || d && !l) && e.emit("fromEdge"), e.emit("progress", n)
}

function He() {
  const t = this,
    {
      slides: e,
      params: s,
      slidesEl: i,
      activeIndex: n
    } = t,
    r = t.virtual && s.virtual.enabled,
    l = o => A(i, `.${s.slideClass}${o}, swiper-slide${o}`)[0];
  e.forEach(o => {
    o.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
  });
  let a;
  if (r)
    if (s.loop) {
      let o = n - t.virtual.slidesBefore;
      o < 0 && (o = t.virtual.slides.length + o), o >= t.virtual.slides.length && (o -= t.virtual.slides.length), a = l(`[data-swiper-slide-index="${o}"]`)
    } else a = l(`[data-swiper-slide-index="${n}"]`);
  else a = e[n];
  if (a) {
    a.classList.add(s.slideActiveClass);
    let o = Me(a, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !o && (o = e[0]), o && o.classList.add(s.slideNextClass);
    let d = Ee(a, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !d === 0 && (d = e[e.length - 1]), d && d.classList.add(s.slidePrevClass)
  }
  t.emitSlidesClasses()
}
const _ = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const s = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`,
      i = e.closest(s());
    if (i) {
      const n = i.querySelector(`.${t.params.lazyPreloaderClass}`);
      n && n.remove()
    }
  },
  re = (t, e) => {
    if (!t.slides[e]) return;
    const s = t.slides[e].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading")
  },
  q = t => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const s = t.slides.length;
    if (!s || !e || e < 0) return;
    e = Math.min(e, s);
    const i = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
      n = t.activeIndex,
      r = n + i - 1;
    if (t.params.rewind)
      for (let l = n - e; l <= r + e; l += 1) {
        const a = (l % s + s) % s;
        a !== n && a > r && re(t, a)
      } else
        for (let l = Math.max(r - e, 0); l <= Math.min(r + e, s - 1); l += 1) l !== n && l > r && re(t, l)
  };

function je(t) {
  const {
    slidesGrid: e,
    params: s
  } = t, i = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : i >= e[r] && i < e[r + 1] && (n = r + 1) : i >= e[r] && (n = r);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function We(t) {
  const e = this,
    s = e.rtlTranslate ? e.translate : -e.translate,
    {
      snapGrid: i,
      params: n,
      activeIndex: r,
      realIndex: l,
      snapIndex: a
    } = e;
  let o = t,
    d;
  const p = u => {
    let c = u - e.virtual.slidesBefore;
    return c < 0 && (c = e.virtual.slides.length + c), c >= e.virtual.slides.length && (c -= e.virtual.slides.length), c
  };
  if (typeof o > "u" && (o = je(e)), i.indexOf(s) >= 0) d = i.indexOf(s);
  else {
    const u = Math.min(n.slidesPerGroupSkip, o);
    d = u + Math.floor((o - u) / n.slidesPerGroup)
  }
  if (d >= i.length && (d = i.length - 1), o === r) {
    d !== a && (e.snapIndex = d, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = p(o));
    return
  }
  let f;
  e.virtual && n.virtual.enabled && n.loop ? f = p(o) : e.slides[o] ? f = parseInt(e.slides[o].getAttribute("data-swiper-slide-index") || o, 10) : f = o, Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: d,
    previousRealIndex: l,
    realIndex: f,
    previousIndex: r,
    activeIndex: o
  }), e.initialized && q(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), l !== f && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
}

function Re(t) {
  const e = this,
    s = e.params,
    i = t.closest(`.${s.slideClass}, swiper-slide`);
  let n = !1,
    r;
  if (i) {
    for (let l = 0; l < e.slides.length; l += 1)
      if (e.slides[l] === i) {
        n = !0, r = l;
        break
      }
  }
  if (i && n) e.clickedSlide = i, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = r;
  else {
    e.clickedSlide = void 0, e.clickedIndex = void 0;
    return
  }
  s.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
const Xe = {
  updateSize: De,
  updateSlides: $e,
  updateAutoHeight: _e,
  updateSlidesOffset: Be,
  updateSlidesProgress: Fe,
  updateProgress: Ne,
  updateSlidesClasses: He,
  updateActiveIndex: We,
  updateClickedSlide: Re
};

function Ye(t = this.isHorizontal() ? "x" : "y") {
  const e = this,
    {
      params: s,
      rtlTranslate: i,
      translate: n,
      wrapperEl: r
    } = e;
  if (s.virtualTranslate) return i ? -n : n;
  if (s.cssMode) return n;
  let l = ye(r, t);
  return l += e.cssOverflowAdjustment(), i && (l = -l), l || 0
}

function qe(t, e) {
  const s = this,
    {
      rtlTranslate: i,
      params: n,
      wrapperEl: r,
      progress: l
    } = s;
  let a = 0,
    o = 0;
  const d = 0;
  s.isHorizontal() ? a = i ? -t : t : o = t, n.roundLengths && (a = Math.floor(a), o = Math.floor(o)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? a : o, n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -a : -o : n.virtualTranslate || (s.isHorizontal() ? a -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`);
  let p;
  const f = s.maxTranslate() - s.minTranslate();
  f === 0 ? p = 0 : p = (t - s.minTranslate()) / f, p !== l && s.updateProgress(t), s.emit("setTranslate", s.translate, e)
}

function Ue() {
  return -this.snapGrid[0]
}

function Ke() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function Ze(t = 0, e = this.params.speed, s = !0, i = !0, n) {
  const r = this,
    {
      params: l,
      wrapperEl: a
    } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const o = r.minTranslate(),
    d = r.maxTranslate();
  let p;
  if (i && t > o ? p = o : i && t < d ? p = d : p = t, r.updateProgress(p), l.cssMode) {
    const f = r.isHorizontal();
    if (e === 0) a[f ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!r.support.smoothScroll) return ce({
        swiper: r,
        targetPosition: -p,
        side: f ? "left" : "top"
      }), !0;
      a.scrollTo({
        [f ? "left" : "top"]: -p,
        behavior: "smooth"
      })
    }
    return !0
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(p), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
    !r || r.destroyed || u.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
const Je = {
  getTranslate: Ye,
  setTranslate: qe,
  minTranslate: Ue,
  maxTranslate: Ke,
  translateTo: Ze
};

function Qe(t, e) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${t}ms`), s.emit("setTransition", t, e)
}

function pe({
  swiper: t,
  runCallbacks: e,
  direction: s,
  step: i
}) {
  const {
    activeIndex: n,
    previousIndex: r
  } = t;
  let l = s;
  if (l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"), t.emit(`transition${i}`), e && n !== r) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return
    }
    t.emit(`slideChangeTransition${i}`), l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
  }
}

function et(t = !0, e) {
  const s = this,
    {
      params: i
    } = s;
  i.cssMode || (i.autoHeight && s.updateAutoHeight(), pe({
    swiper: s,
    runCallbacks: t,
    direction: e,
    step: "Start"
  }))
}

function tt(t = !0, e) {
  const s = this,
    {
      params: i
    } = s;
  s.animating = !1, !i.cssMode && (s.setTransition(0), pe({
    swiper: s,
    runCallbacks: t,
    direction: e,
    step: "End"
  }))
}
const st = {
  setTransition: Qe,
  transitionStart: et,
  transitionEnd: tt
};

function it(t = 0, e = this.params.speed, s = !0, i, n) {
  typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let l = t;
  l < 0 && (l = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: f,
    rtlTranslate: u,
    wrapperEl: c,
    enabled: h
  } = r;
  if (r.animating && a.preventInteractionOnTransition || !h && !i && !n) return !1;
  const m = Math.min(r.params.slidesPerGroupSkip, l);
  let T = m + Math.floor((l - m) / r.params.slidesPerGroup);
  T >= o.length && (T = o.length - 1);
  const g = -o[T];
  if (a.normalizeSlideIndex)
    for (let w = 0; w < d.length; w += 1) {
      const S = -Math.floor(g * 100),
        b = Math.floor(d[w] * 100),
        x = Math.floor(d[w + 1] * 100);
      typeof d[w + 1] < "u" ? S >= b && S < x - (x - b) / 2 ? l = w : S >= b && S < x && (l = w + 1) : S >= b && (l = w)
    }
  if (r.initialized && l !== f && (!r.allowSlideNext && g < r.translate && g < r.minTranslate() || !r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (f || 0) !== l)) return !1;
  l !== (p || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(g);
  let E;
  if (l > f ? E = "next" : l < f ? E = "prev" : E = "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(l), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), a.effect !== "slide" && r.setTranslate(g), E !== "reset" && (r.transitionStart(s, E), r.transitionEnd(s, E)), !1;
  if (a.cssMode) {
    const w = r.isHorizontal(),
      S = u ? g : -g;
    if (e === 0) {
      const b = r.virtual && r.params.virtual.enabled;
      b && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), b && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        c[w ? "scrollLeft" : "scrollTop"] = S
      })) : c[w ? "scrollLeft" : "scrollTop"] = S, b && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
      })
    } else {
      if (!r.support.smoothScroll) return ce({
        swiper: r,
        targetPosition: S,
        side: w ? "left" : "top"
      }), !0;
      c.scrollTo({
        [w ? "left" : "top"]: S,
        behavior: "smooth"
      })
    }
    return !0
  }
  return r.setTransition(e), r.setTranslate(g), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(s, E), e === 0 ? r.transitionEnd(s, E) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(S) {
    !r || r.destroyed || S.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, E))
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function rt(t = 0, e = this.params.speed, s = !0, i) {
  typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  let r = t;
  return n.params.loop && (n.virtual && n.params.virtual.enabled ? r = r + n.virtual.slidesBefore : r = n.getSlideIndexByData(r)), n.slideTo(r, e, s, i)
}

function nt(t = this.params.speed, e = !0, s) {
  const i = this,
    {
      enabled: n,
      params: r,
      animating: l
    } = i;
  if (!n) return i;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    d = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !d && r.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft
  }
  return r.rewind && i.isEnd ? i.slideTo(0, t, e, s) : i.slideTo(i.activeIndex + o, t, e, s)
}

function at(t = this.params.speed, e = !0, s) {
  const i = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: a,
      enabled: o,
      animating: d
    } = i;
  if (!o) return i;
  const p = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !p && n.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft
  }
  const f = a ? i.translate : -i.translate;

  function u(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
  }
  const c = u(f),
    h = r.map(g => u(g));
  let m = r[h.indexOf(c) - 1];
  if (typeof m > "u" && n.cssMode) {
    let g;
    r.forEach((E, w) => {
      c >= E && (g = w)
    }), typeof g < "u" && (m = r[g > 0 ? g - 1 : g])
  }
  let T = 0;
  if (typeof m < "u" && (T = l.indexOf(m), T < 0 && (T = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (T = T - i.slidesPerViewDynamic("previous", !0) + 1, T = Math.max(T, 0))), n.rewind && i.isBeginning) {
    const g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(g, t, e, s)
  }
  return i.slideTo(T, t, e, s)
}

function lt(t = this.params.speed, e = !0, s) {
  const i = this;
  return i.slideTo(i.activeIndex, t, e, s)
}

function ot(t = this.params.speed, e = !0, s, i = .5) {
  const n = this;
  let r = n.activeIndex;
  const l = Math.min(n.params.slidesPerGroupSkip, r),
    a = l + Math.floor((r - l) / n.params.slidesPerGroup),
    o = n.rtlTranslate ? n.translate : -n.translate;
  if (o >= n.snapGrid[a]) {
    const d = n.snapGrid[a],
      p = n.snapGrid[a + 1];
    o - d > (p - d) * i && (r += n.params.slidesPerGroup)
  } else {
    const d = n.snapGrid[a - 1],
      p = n.snapGrid[a];
    o - d <= (p - d) * i && (r -= n.params.slidesPerGroup)
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, s)
}

function dt() {
  const t = this,
    {
      params: e,
      slidesEl: s
    } = t,
    i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex,
    r;
  const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - i / 2 || n > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), n = t.getSlideIndex(A(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), Y(() => {
      t.slideTo(n)
    })) : t.slideTo(n) : n > t.slides.length - i ? (t.loopFix(), n = t.getSlideIndex(A(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), Y(() => {
      t.slideTo(n)
    })) : t.slideTo(n)
  } else t.slideTo(n)
}
const ct = {
  slideTo: it,
  slideToLoop: rt,
  slideNext: nt,
  slidePrev: at,
  slideReset: lt,
  slideToClosest: ot,
  slideToClickedSlide: dt
};

function ft(t) {
  const e = this,
    {
      params: s,
      slidesEl: i
    } = e;
  if (!s.loop || e.virtual && e.params.virtual.enabled) return;
  A(i, `.${s.slideClass}, swiper-slide`).forEach((r, l) => {
    r.setAttribute("data-swiper-slide-index", l)
  }), e.loopFix({
    slideRealIndex: t,
    direction: s.centeredSlides ? void 0 : "next"
  })
}

function ut({
  slideRealIndex: t,
  slideTo: e = !0,
  direction: s,
  setTranslate: i,
  activeSlideIndex: n,
  byController: r,
  byMousewheel: l
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: o,
    allowSlidePrev: d,
    allowSlideNext: p,
    slidesEl: f,
    params: u
  } = a;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && u.virtual.enabled) {
    e && (!u.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : u.centeredSlides && a.snapIndex < u.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = p, a.emit("loopFix");
    return
  }
  const c = u.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
  let h = u.loopedSlides || c;
  h % u.slidesPerGroup !== 0 && (h += u.slidesPerGroup - h % u.slidesPerGroup), a.loopedSlides = h;
  const m = [],
    T = [];
  let g = a.activeIndex;
  typeof n > "u" ? n = a.getSlideIndex(a.slides.filter(x => x.classList.contains(u.slideActiveClass))[0]) : g = n;
  const E = s === "next" || !s,
    w = s === "prev" || !s;
  let S = 0,
    b = 0;
  if (n < h) {
    S = Math.max(h - n, u.slidesPerGroup);
    for (let x = 0; x < h - n; x += 1) {
      const C = x - Math.floor(x / o.length) * o.length;
      m.push(o.length - C - 1)
    }
  } else if (n > a.slides.length - h * 2) {
    b = Math.max(n - (a.slides.length - h * 2), u.slidesPerGroup);
    for (let x = 0; x < b; x += 1) {
      const C = x - Math.floor(x / o.length) * o.length;
      T.push(C)
    }
  }
  if (w && m.forEach(x => {
      a.slides[x].swiperLoopMoveDOM = !0, f.prepend(a.slides[x]), a.slides[x].swiperLoopMoveDOM = !1
    }), E && T.forEach(x => {
      a.slides[x].swiperLoopMoveDOM = !0, f.append(a.slides[x]), a.slides[x].swiperLoopMoveDOM = !1
    }), a.recalcSlides(), u.slidesPerView === "auto" && a.updateSlides(), u.watchSlidesProgress && a.updateSlidesOffset(), e) {
    if (m.length > 0 && w)
      if (typeof t > "u") {
        const x = a.slidesGrid[g],
          O = a.slidesGrid[g + S] - x;
        l ? a.setTranslate(a.translate - O) : (a.slideTo(g + S, 0, !1, !0), i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O))
      } else i && a.slideToLoop(t, 0, !1, !0);
    else if (T.length > 0 && E)
      if (typeof t > "u") {
        const x = a.slidesGrid[g],
          O = a.slidesGrid[g - b] - x;
        l ? a.setTranslate(a.translate - O) : (a.slideTo(g - b, 0, !1, !0), i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O))
      } else a.slideToLoop(t, 0, !1, !0)
  }
  if (a.allowSlidePrev = d, a.allowSlideNext = p, a.controller && a.controller.control && !r) {
    const x = {
      slideRealIndex: t,
      slideTo: !1,
      direction: s,
      setTranslate: i,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach(C => {
      !C.destroyed && C.params.loop && C.loopFix(x)
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(x)
  }
  a.emit("loopFix")
}

function pt() {
  const t = this,
    {
      params: e,
      slidesEl: s
    } = t;
  if (!e.loop || t.virtual && t.params.virtual.enabled) return;
  t.recalcSlides();
  const i = [];
  t.slides.forEach(n => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    i[r] = n
  }), t.slides.forEach(n => {
    n.removeAttribute("data-swiper-slide-index")
  }), i.forEach(n => {
    s.append(n)
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0)
}
const mt = {
  loopCreate: ft,
  loopFix: ut,
  loopDestroy: pt
};

function ht(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  })
}

function gt() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1
  }))
}
const vt = {
  setGrabCursor: ht,
  unsetGrabCursor: gt
};

function wt(t, e = this) {
  function s(i) {
    if (!i || i === V() || i === L()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const n = i.closest(t);
    return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
  }
  return s(e)
}

function St(t) {
  const e = this,
    s = V(),
    i = L(),
    n = e.touchEventsData;
  n.evCache.push(t);
  const {
    params: r,
    touches: l,
    enabled: a
  } = e;
  if (!a || !r.simulateTouch && t.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let o = t;
  o.originalEvent && (o = o.originalEvent);
  let d = o.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(d) || "which" in o && o.which === 3 || "button" in o && o.button > 0 || n.isTouched && n.isMoved) return;
  const p = !!r.noSwipingClass && r.noSwipingClass !== "",
    f = t.composedPath ? t.composedPath() : t.path;
  p && o.target && o.target.shadowRoot && f && (d = f[0]);
  const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    c = !!(o.target && o.target.shadowRoot);
  if (r.noSwiping && (c ? wt(u, d) : d.closest(u))) {
    e.allowClick = !0;
    return
  }
  if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
  l.currentX = o.pageX, l.currentY = o.pageY;
  const h = l.currentX,
    m = l.currentY,
    T = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (T && (h <= g || h >= i.innerWidth - g))
    if (T === "prevent") t.preventDefault();
    else return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = h, l.startY = m, n.touchStartTime = B(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let E = !0;
  d.matches(n.focusableElements) && (E = !1, d.nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== d && s.activeElement.blur();
  const w = E && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) && !d.isContentEditable && o.preventDefault(), e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", o)
}

function Tt(t) {
  const e = V(),
    s = this,
    i = s.touchEventsData,
    {
      params: n,
      touches: r,
      rtlTranslate: l,
      enabled: a
    } = s;
  if (!a || !n.simulateTouch && t.pointerType === "mouse") return;
  let o = t;
  if (o.originalEvent && (o = o.originalEvent), !i.isTouched) {
    i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", o);
    return
  }
  const d = i.evCache.findIndex(x => x.pointerId === o.pointerId);
  d >= 0 && (i.evCache[d] = o);
  const p = i.evCache.length > 1 ? i.evCache[0] : o,
    f = p.pageX,
    u = p.pageY;
  if (o.preventedByNestedSwiper) {
    r.startX = f, r.startY = u;
    return
  }
  if (!s.allowTouchMove) {
    o.target.matches(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(r, {
      startX: f,
      startY: u,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: f,
      currentY: u
    }), i.touchStartTime = B());
    return
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (s.isVertical()) {
      if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return
      }
    } else if (f < r.startX && s.translate <= s.maxTranslate() || f > r.startX && s.translate >= s.minTranslate()) return
  }
  if (e.activeElement && o.target === e.activeElement && o.target.matches(i.focusableElements)) {
    i.isMoved = !0, s.allowClick = !1;
    return
  }
  if (i.allowTouchCallbacks && s.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
  r.currentX = f, r.currentY = u;
  const c = r.currentX - r.startX,
    h = r.currentY - r.startY;
  if (s.params.threshold && Math.sqrt(c ** 2 + h ** 2) < s.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let x;
    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (x = Math.atan2(Math.abs(h), Math.abs(c)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? x > n.touchAngle : 90 - x > n.touchAngle)
  }
  if (i.isScrolling && s.emit("touchMoveOpposite", o), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) {
    i.isTouched = !1;
    return
  }
  if (!i.startMoving) return;
  s.allowClick = !1, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation();
  let m = s.isHorizontal() ? c : h,
    T = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), T = Math.abs(T) * (l ? 1 : -1)), r.diff = m, m *= n.touchRatio, l && (m = -m, T = -T);
  const g = s.touchesDirection;
  s.swipeDirection = m > 0 ? "prev" : "next", s.touchesDirection = T > 0 ? "prev" : "next";
  const E = s.params.loop && !n.cssMode;
  if (!i.isMoved) {
    if (E && s.loopFix({
        direction: s.swipeDirection
      }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
      const x = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      s.wrapperEl.dispatchEvent(x)
    }
    i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", o)
  }
  let w;
  i.isMoved && g !== s.touchesDirection && E && Math.abs(m) >= 1 && (s.loopFix({
    direction: s.swipeDirection,
    setTranslate: !0
  }), w = !0), s.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
  let S = !0,
    b = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (b = 0), m > 0 ? (E && !w && i.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (S = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** b))) : m < 0 && (E && !w && i.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - (n.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (S = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** b))), S && (o.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
    if (Math.abs(m) > n.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return
    }! n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
}

function bt(t) {
  const e = this,
    s = e.touchEventsData,
    i = s.evCache.findIndex(w => w.pointerId === t.pointerId);
  if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(t.type) && !(t.type === "pointercancel" && (e.browser.isSafari || e.browser.isWebView))) return;
  const {
    params: n,
    touches: r,
    rtlTranslate: l,
    slidesGrid: a,
    enabled: o
  } = e;
  if (!o || !n.simulateTouch && t.pointerType === "mouse") return;
  let d = t;
  if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && e.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && n.grabCursor && e.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return
  }
  n.grabCursor && s.isMoved && s.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const p = B(),
    f = p - s.touchStartTime;
  if (e.allowClick) {
    const w = d.path || d.composedPath && d.composedPath();
    e.updateClickedSlide(w && w[0] || d.target), e.emit("tap click", d), f < 300 && p - s.lastClickTime < 300 && e.emit("doubleTap doubleClick", d)
  }
  if (s.lastClickTime = B(), Y(() => {
      e.destroyed || (e.allowClick = !0)
    }), !s.isTouched || !s.isMoved || !e.swipeDirection || r.diff === 0 || s.currentTranslate === s.startTranslate) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let u;
  if (n.followFinger ? u = l ? e.translate : -e.translate : u = -s.currentTranslate, n.cssMode) return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: u
    });
    return
  }
  let c = 0,
    h = e.slidesSizesGrid[0];
  for (let w = 0; w < a.length; w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const S = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof a[w + S] < "u" ? u >= a[w] && u < a[w + S] && (c = w, h = a[w + S] - a[w]) : u >= a[w] && (c = w, h = a[a.length - 1] - a[a.length - 2])
  }
  let m = null,
    T = null;
  n.rewind && (e.isBeginning ? T = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (m = 0));
  const g = (u - a[c]) / h,
    E = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (f > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.swipeDirection === "next" && (g >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? m : c + E) : e.slideTo(c)), e.swipeDirection === "prev" && (g > 1 - n.longSwipesRatio ? e.slideTo(c + E) : T !== null && g < 0 && Math.abs(g) > n.longSwipesRatio ? e.slideTo(T) : e.slideTo(c))
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.navigation && (d.target === e.navigation.nextEl || d.target === e.navigation.prevEl) ? d.target === e.navigation.nextEl ? e.slideTo(c + E) : e.slideTo(c) : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : c + E), e.swipeDirection === "prev" && e.slideTo(T !== null ? T : c))
  }
}

function ne() {
  const t = this,
    {
      params: e,
      el: s
    } = t;
  if (s && s.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: n,
    snapGrid: r
  } = t, l = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const a = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !a ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = i, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}

function yt(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}

function xt() {
  const t = this,
    {
      wrapperEl: e,
      rtlTranslate: s,
      enabled: i
    } = t;
  if (!i) return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(s ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
}

function Et(t) {
  const e = this;
  _(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
let ae = !1;

function Mt() {}
const me = (t, e) => {
  const s = V(),
    {
      params: i,
      el: n,
      wrapperEl: r,
      device: l
    } = t,
    a = !!i.nested,
    o = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  n[o]("pointerdown", t.onTouchStart, {
    passive: !1
  }), s[o]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: a
  }), s[o]("pointerup", t.onTouchEnd, {
    passive: !0
  }), s[o]("pointercancel", t.onTouchEnd, {
    passive: !0
  }), s[o]("pointerout", t.onTouchEnd, {
    passive: !0
  }), s[o]("pointerleave", t.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && n[o]("click", t.onClick, !0), i.cssMode && r[o]("scroll", t.onScroll), i.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ne, !0) : t[d]("observerUpdate", ne, !0), n[o]("load", t.onLoad, {
    capture: !0
  })
};

function Pt() {
  const t = this,
    e = V(),
    {
      params: s
    } = t;
  t.onTouchStart = St.bind(t), t.onTouchMove = Tt.bind(t), t.onTouchEnd = bt.bind(t), s.cssMode && (t.onScroll = xt.bind(t)), t.onClick = yt.bind(t), t.onLoad = Et.bind(t), ae || (e.addEventListener("touchstart", Mt), ae = !0), me(t, "on")
}

function Ct() {
  me(this, "off")
}
const It = {
    attachEvents: Pt,
    detachEvents: Ct
  },
  le = (t, e) => t.grid && e.grid && e.grid.rows > 1;

function Lt() {
  const t = this,
    {
      realIndex: e,
      initialized: s,
      params: i,
      el: n
    } = t,
    r = i.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const l = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!l || t.currentBreakpoint === l) return;
  const o = (l in r ? r[l] : void 0) || t.originalParams,
    d = le(t, i),
    p = le(t, o),
    f = i.enabled;
  d && !p ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !d && p && (n.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && i.grid.fill === "column") && n.classList.add(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(m => {
    const T = i[m] && i[m].enabled,
      g = o[m] && o[m].enabled;
    T && !g && t[m].disable(), !T && g && t[m].enable()
  });
  const u = o.direction && o.direction !== i.direction,
    c = i.loop && (o.slidesPerView !== i.slidesPerView || u);
  u && s && t.changeDirection(), I(t.params, o);
  const h = t.params.enabled;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), f && !h ? t.disable() : !f && h && t.enable(), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", o), c && s && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()), t.emit("breakpoint", o)
}

function Ot(t, e = "window", s) {
  if (!t || e === "container" && !s) return;
  let i = !1;
  const n = L(),
    r = e === "window" ? n.innerHeight : s.clientHeight,
    l = Object.keys(t).map(a => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return {
          value: r * o,
          point: a
        }
      }
      return {
        value: a,
        point: a
      }
    });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const {
      point: o,
      value: d
    } = l[a];
    e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (i = o) : d <= s.clientWidth && (i = o)
  }
  return i || "max"
}
const zt = {
  setBreakpoint: Lt,
  getBreakpoint: Ot
};

function kt(t, e) {
  const s = [];
  return t.forEach(i => {
    typeof i == "object" ? Object.keys(i).forEach(n => {
      i[n] && s.push(e + n)
    }) : typeof i == "string" && s.push(e + i)
  }), s
}

function At() {
  const t = this,
    {
      classNames: e,
      params: s,
      rtl: i,
      el: n,
      device: r
    } = t,
    l = kt(["initialized", s.direction, {
      "free-mode": t.params.freeMode && s.freeMode.enabled
    }, {
      autoheight: s.autoHeight
    }, {
      rtl: i
    }, {
      grid: s.grid && s.grid.rows > 1
    }, {
      "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": s.cssMode
    }, {
      centered: s.cssMode && s.centeredSlides
    }, {
      "watch-progress": s.watchSlidesProgress
    }], s.containerModifierClass);
  e.push(...l), n.classList.add(...e), t.emitContainerClasses()
}

function Gt() {
  const t = this,
    {
      el: e,
      classNames: s
    } = t;
  e.classList.remove(...s), t.emitContainerClasses()
}
const Vt = {
  addClasses: At,
  removeClasses: Gt
};

function Dt() {
  const t = this,
    {
      isLocked: e,
      params: s
    } = t,
    {
      slidesOffsetBefore: i
    } = s;
  if (i) {
    const n = t.slides.length - 1,
      r = t.slidesGrid[n] + t.slidesSizesGrid[n] + i * 2;
    t.isLocked = t.size > r
  } else t.isLocked = t.snapGrid.length === 1;
  s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
const $t = {
    checkOverflow: Dt
  },
  oe = {
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

function _t(t, e) {
  return function(i = {}) {
    const n = Object.keys(i)[0],
      r = i[n];
    if (typeof r != "object" || r === null) {
      I(e, i);
      return
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && t[n] === !0 && (t[n] = {
        auto: !0
      }), !(n in t && "enabled" in r)) {
      I(e, i);
      return
    }
    t[n] === !0 && (t[n] = {
      enabled: !0
    }), typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
      enabled: !1
    }), I(e, i)
  }
}
const R = {
    eventsEmitter: Ve,
    update: Xe,
    translate: Je,
    transition: st,
    slide: ct,
    loop: mt,
    grabCursor: vt,
    events: It,
    breakpoints: zt,
    checkOverflow: $t,
    classes: Vt
  },
  X = {};
class z {
  constructor(...e) {
    let s, i;
    e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [s, i] = e, i || (i = {}), i = I({}, i), s && !i.el && (i.el = s);
    const n = V();
    if (i.el && typeof i.el == "string" && n.querySelectorAll(i.el).length > 1) {
      const o = [];
      return n.querySelectorAll(i.el).forEach(d => {
        const p = I({}, i, {
          el: d
        });
        o.push(new z(p))
      }), o
    }
    const r = this;
    r.__swiper__ = !0, r.support = ue(), r.device = Oe({
      userAgent: i.userAgent
    }), r.browser = ke(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
    const l = {};
    r.modules.forEach(o => {
      o({
        params: i,
        swiper: r,
        extendParams: _t(i, l),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r)
      })
    });
    const a = I({}, oe, l);
    return r.params = I({}, a, X, i), r.originalParams = I({}, r.params), r.passedParams = I({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(o => {
      r.on(o, r.params.on[o])
    }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
      enabled: r.params.enabled,
      el: s,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return r.params.direction === "horizontal"
      },
      isVertical() {
        return r.params.direction === "vertical"
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
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: r.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: !0,
      allowTouchMove: r.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), r.emit("_swiper"), r.params.init && r.init(), r
  }
  getSlideIndex(e) {
    const {
      slidesEl: s,
      params: i
    } = this, n = A(s, `.${i.slideClass}, swiper-slide`), r = se(n[0]);
    return se(e) - r
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter(s => s.getAttribute("data-swiper-slide-index") * 1 === e)[0])
  }
  recalcSlides() {
    const e = this,
      {
        slidesEl: s,
        params: i
      } = e;
    e.slides = A(s, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
  }
  setProgress(e, s) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = i.minTranslate(),
      l = (i.maxTranslate() - n) * e + n;
    i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", s.join(" "))
  }
  getSlideClasses(e) {
    const s = this;
    return s.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = [];
    e.slides.forEach(i => {
      const n = e.getSlideClasses(i);
      s.push({
        slideEl: i,
        classNames: n
      }), e.emit("_slideClass", i, n)
    }), e.emit("_slideClasses", s)
  }
  slidesPerViewDynamic(e = "current", s = !1) {
    const i = this,
      {
        params: n,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: a,
        size: o,
        activeIndex: d
      } = i;
    let p = 1;
    if (n.centeredSlides) {
      let f = r[d].swiperSlideSize,
        u;
      for (let c = d + 1; c < r.length; c += 1) r[c] && !u && (f += r[c].swiperSlideSize, p += 1, f > o && (u = !0));
      for (let c = d - 1; c >= 0; c -= 1) r[c] && !u && (f += r[c].swiperSlideSize, p += 1, f > o && (u = !0))
    } else if (e === "current")
      for (let f = d + 1; f < r.length; f += 1)(s ? l[f] + a[f] - l[d] < o : l[f] - l[d] < o) && (p += 1);
    else
      for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < o && (p += 1);
    return p
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: s,
      params: i
    } = e;
    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
      l.complete && _(e, l)
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

    function n() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let r;
    if (e.params.freeMode && e.params.freeMode.enabled) n(), e.params.autoHeight && e.updateAutoHeight();
    else {
      if ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
        const l = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(l.length - 1, 0, !1, !0)
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n()
    }
    i.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update")
  }
  changeDirection(e, s = !0) {
    const i = this,
      n = i.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(r => {
      e === "vertical" ? r.style.width = "" : r.style.height = ""
    }), i.emit("changeDirection"), s && i.update()), i
  }
  changeLanguageDirection(e) {
    const s = this;
    s.rtl && e === "rtl" || !s.rtl && e === "ltr" || (s.rtl = e === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
  }
  mount(e) {
    const s = this;
    if (s.mounted) return !0;
    let i = e || s.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
    i.swiper = s, i.shadowEl && (s.isElement = !0);
    const n = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let l = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(n()) : A(i, n())[0])();
    return !l && s.params.createElements && (l = fe("div", s.params.wrapperClass), i.append(l), A(i, `.${s.params.slideClass}`).forEach(a => {
      l.append(a)
    })), Object.assign(s, {
      el: i,
      wrapperEl: l,
      slidesEl: s.isElement ? i : l,
      mounted: !0,
      rtl: i.dir.toLowerCase() === "rtl" || G(i, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || G(i, "direction") === "rtl"),
      wrongRTL: G(l, "display") === "-webkit-box"
    }), !0
  }
  init(e) {
    const s = this;
    return s.initialized || s.mount(e) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents(), [...s.el.querySelectorAll('[loading="lazy"]')].forEach(n => {
      n.complete ? _(s, n) : n.addEventListener("load", r => {
        _(s, r.target)
      })
    }), q(s), s.initialized = !0, q(s), s.emit("init"), s.emit("afterInit")), s
  }
  destroy(e = !0, s = !0) {
    const i = this,
      {
        params: n,
        el: r,
        wrapperEl: l,
        slides: a
      } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), a && a.length && a.forEach(o => {
      o.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index")
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(o => {
      i.off(o)
    }), e !== !1 && (i.el.swiper = null, Te(i)), i.destroyed = !0), null
  }
  static extendDefaults(e) {
    I(X, e)
  }
  static get extendedDefaults() {
    return X
  }
  static get defaults() {
    return oe
  }
  static installModule(e) {
    z.prototype.__modules__ || (z.prototype.__modules__ = []);
    const s = z.prototype.__modules__;
    typeof e == "function" && s.indexOf(e) < 0 && s.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach(s => z.installModule(s)), z) : (z.installModule(e), z)
  }
}
Object.keys(R).forEach(t => {
  Object.keys(R[t]).forEach(e => {
    z.prototype[e] = R[t][e]
  })
});
z.use([Ae, Ge]);

function Bt(t) {
  const {
    effect: e,
    swiper: s,
    on: i,
    setTranslate: n,
    setTransition: r,
    overwriteParams: l,
    perspective: a,
    recreateShadows: o,
    getEffectParams: d
  } = t;
  i("beforeInit", () => {
    if (s.params.effect !== e) return;
    s.classNames.push(`${s.params.containerModifierClass}${e}`), a && a() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const f = l ? l() : {};
    Object.assign(s.params, f), Object.assign(s.originalParams, f)
  }), i("setTranslate", () => {
    s.params.effect === e && n()
  }), i("setTransition", (f, u) => {
    s.params.effect === e && r(u)
  }), i("transitionEnd", () => {
    if (s.params.effect === e && o) {
      if (!d || !d().slideShadows) return;
      s.slides.forEach(f => {
        f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u => u.remove())
      }), o()
    }
  });
  let p;
  i("virtualUpdate", () => {
    s.params.effect === e && (s.slides.length || (p = !0), requestAnimationFrame(() => {
      p && s.slides && s.slides.length && (n(), p = !1)
    }))
  })
}

function Ft(t, e) {
  const s = K(e);
  return s !== e && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
}

function Nt({
  swiper: t,
  duration: e,
  transformElements: s,
  allSlides: i
}) {
  const {
    activeIndex: n
  } = t, r = l => l.parentElement ? l.parentElement : t.slides.filter(o => o.shadowEl && o.shadowEl === l.parentNode)[0];
  if (t.params.virtualTranslate && e !== 0) {
    let l = !1,
      a;
    i ? a = s : a = s.filter(o => {
      const d = o.classList.contains("swiper-slide-transform") ? r(o) : o;
      return t.getSlideIndex(d) === n
    }), a.forEach(o => {
      Ce(o, () => {
        if (l || !t || t.destroyed) return;
        l = !0, t.animating = !1;
        const d = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(d)
      })
    })
  }
}

function Ht(t, e, s) {
  const i = `swiper-slide-shadow${s?`-${s}`:""}`,
    n = K(e);
  let r = n.querySelector(`.${i}`);
  return r || (r = fe("div", `swiper-slide-shadow${s?`-${s}`:""}`), n.append(r)), r
}

function jt({
  swiper: t,
  extendParams: e,
  on: s
}) {
  e({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const i = l => typeof l == "string" ? l : `${l}px`;
  Bt({
    effect: "creative",
    swiper: t,
    on: s,
    setTranslate: () => {
      const {
        slides: l,
        wrapperEl: a,
        slidesSizesGrid: o
      } = t, d = t.params.creativeEffect, {
        progressMultiplier: p
      } = d, f = t.params.centeredSlides;
      if (f) {
        const u = o[0] / 2 - t.params.slidesOffsetBefore || 0;
        a.style.transform = `translateX(calc(50% - ${u}px))`
      }
      for (let u = 0; u < l.length; u += 1) {
        const c = l[u],
          h = c.progress,
          m = Math.min(Math.max(c.progress, -d.limitProgress), d.limitProgress);
        let T = m;
        f || (T = Math.min(Math.max(c.originalProgress, -d.limitProgress), d.limitProgress));
        const g = c.swiperSlideOffset,
          E = [t.params.cssMode ? -g - t.translate : -g, 0, 0],
          w = [0, 0, 0];
        let S = !1;
        t.isHorizontal() || (E[1] = E[0], E[0] = 0);
        let b = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        m < 0 ? (b = d.next, S = !0) : m > 0 && (b = d.prev, S = !0), E.forEach((y, M) => {
          E[M] = `calc(${y}px + (${i(b.translate[M])} * ${Math.abs(m*p)}))`
        }), w.forEach((y, M) => {
          w[M] = b.rotate[M] * Math.abs(m * p)
        }), c.style.zIndex = -Math.abs(Math.round(h)) + l.length;
        const x = E.join(", "),
          C = `rotateX(${w[0]}deg) rotateY(${w[1]}deg) rotateZ(${w[2]}deg)`,
          O = T < 0 ? `scale(${1+(1-b.scale)*T*p})` : `scale(${1-(1-b.scale)*T*p})`,
          P = T < 0 ? 1 + (1 - b.opacity) * T * p : 1 - (1 - b.opacity) * T * p,
          F = `translate3d(${x}) ${C} ${O}`;
        if (S && b.shadow || !S) {
          let y = c.querySelector(".swiper-slide-shadow");
          if (!y && b.shadow && (y = Ht(d, c)), y) {
            const M = d.shadowPerProgress ? m * (1 / d.limitProgress) : m;
            y.style.opacity = Math.min(Math.max(Math.abs(M), 0), 1)
          }
        }
        const v = Ft(d, c);
        v.style.transform = F, v.style.opacity = P, b.origin && (v.style.transformOrigin = b.origin)
      }
    },
    setTransition: l => {
      const a = t.slides.map(o => K(o));
      a.forEach(o => {
        o.style.transitionDuration = `${l}ms`, o.querySelectorAll(".swiper-slide-shadow").forEach(d => {
          d.style.transitionDuration = `${l}ms`
        })
      }), Nt({
        swiper: t,
        duration: l,
        transformElements: a,
        allSlides: !0
      })
    },
    perspective: () => t.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !t.params.cssMode
    })
  })
}
export {
  jt as E, z as S
};