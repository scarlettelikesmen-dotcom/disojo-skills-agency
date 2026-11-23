/* https://alchemy.family/_nuxt/D3z0VMi9.js */
var H = Object.defineProperty;
var O = (s, t, i) => t in s ? H(s, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: i
}) : s[t] = i;
var a = (s, t, i) => O(s, typeof t != "symbol" ? t + "" : t, i);
import {
  _ as $,
  o as l,
  c,
  p as x,
  l as M,
  a as e,
  d as I,
  r as f,
  e as N,
  k as b,
  t as _,
  M as k,
  z as w,
  J as z,
  j as m,
  m as F,
  O as V,
  G as j,
  u as J,
  s as K,
  K as U,
  F as P,
  i as C,
  L as W,
  B as E,
  E as A,
  H as Y,
  b as Q,
  g as L
} from "./CWeo--9S.js";
import {
  S as Z
} from "./BsTfMyAe.js";
const tt = {},
  g = s => (x("data-v-4bda398c"), s = s(), M(), s),
  et = {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg"
  },
  st = g(() => e("circle", {
    cx: "11",
    cy: "11",
    r: "11",
    fill: "#262626"
  }, null, -1)),
  it = g(() => e("path", {
    d: "M11.6475 15.4706C11.7749 13.8137 12.871 10.5 16.2357 10.5",
    stroke: "#D4CCBB",
    "stroke-width": "0.764706",
    "stroke-linecap": "round"
  }, null, -1)),
  at = g(() => e("path", {
    d: "M11.6475 5.52917C11.7749 7.18604 12.871 10.4998 16.2357 10.4998",
    stroke: "#D4CCBB",
    "stroke-width": "0.764706",
    "stroke-linecap": "round"
  }, null, -1)),
  nt = g(() => e("path", {
    d: "M15.8529 10.5L4.76465 10.5",
    stroke: "#D4CCBB",
    "stroke-width": "0.764706",
    "stroke-linecap": "round"
  }, null, -1)),
  ot = [st, it, at, nt];

function rt(s, t) {
  return l(), c("svg", et, ot)
}
const R = $(tt, [
    ["render", rt],
    ["__scopeId", "data-v-4bda398c"]
  ]),
  y = s => (x("data-v-34b45a55"), s = s(), M(), s),
  lt = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  },
  dt = y(() => e("circle", {
    cx: "24",
    cy: "24",
    r: "21",
    fill: "#D4CCBB"
  }, null, -1)),
  ct = y(() => e("circle", {
    cx: "24",
    cy: "24",
    r: "23.5",
    stroke: "#D4CCBB"
  }, null, -1)),
  ht = y(() => e("path", {
    d: "M29 23.75L18.5 23.75",
    stroke: "#262626",
    "stroke-linecap": "round"
  }, null, -1)),
  pt = {
    class: "name p2"
  },
  _t = {
    class: "date"
  },
  ut = {
    class: "details-bottom"
  },
  mt = {
    class: "location"
  },
  vt = y(() => e("br", null, null, -1)),
  ft = I({
    __name: "EventsMapMarker",
    props: {
      data: {},
      activeMarker: {}
    },
    setup(s) {
      const t = f(),
        i = f("");

      function d() {
        if (!t.value) return;
        const n = t.value.querySelector(".marker-details"),
          u = t.value.parentNode,
          {
            left: h,
            top: p
          } = n.getBoundingClientRect(),
          {
            left: S,
            top: r
          } = u.getBoundingClientRect(),
          B = h - S,
          v = p - r;
        B < 0 && (i.value = "r-c"), v < 0 && (i.value = "b-c")
      }
      return N(() => {
        d()
      }), (n, u) => {
        const h = R,
          p = V;
        return l(), c("button", {
          ref_key: "markerRef",
          ref: t,
          class: "marker",
          style: F({
            top: `${n.data.coords.y}%`,
            left: `${n.data.coords.x}%`
          })
        }, [(l(), c("svg", lt, [dt, ct, e("path", {
          d: "M23.75 18.5V29",
          stroke: "#262626",
          "stroke-linecap": "round",
          class: b(["plus-path", {
            hidden: n.data.id === n.activeMarker
          }])
        }, null, 2), ht])), e("div", {
          class: b(["marker-details", {
            active: n.data.id === n.activeMarker,
            [m(i)]: !0
          }])
        }, [e("div", null, [e("p", pt, _(n.data.name), 1), e("p", _t, _(n.data.date), 1)]), e("div", ut, [e("p", mt, [k(" location: "), vt, k(" " + _(n.data.location), 1)]), w(p, {
          to: "/upcoming-event",
          class: b(["wrap-icon", {
            "past-event": n.data.isPastEvent
          }])
        }, {
          default: z(() => [w(h, {
            class: "inner-svg"
          })]),
          _: 1
        }, 8, ["class"])])], 2)], 4)
      }
    }
  }),
  kt = $(ft, [
    ["__scopeId", "data-v-34b45a55"]
  ]),
  wt = j("/images/events/earth-map.png"),
  G = s => (x("data-v-42543fc3"), s = s(), M(), s),
  gt = {
    class: "locations"
  },
  yt = {
    class: "top-part"
  },
  St = ["innerHTML"],
  bt = Q('<div class="bg__cloud cloud--left anim-left-right" data-v-42543fc3><div class="cloud anim-top-bottom anim-delay-8" data-v-42543fc3></div></div><div class="bg__cloud-left cloud--left anim-left-right anim-delay-2" data-v-42543fc3><div class="cloud anim-top-bottom anim-delay-8" data-v-42543fc3></div></div><div class="decor-circle" data-v-42543fc3></div>', 3),
  Pt = {
    class: "bottom-part"
  },
  Ct = {
    class: "earth-map"
  },
  Et = G(() => e("img", {
    src: wt,
    alt: "earth map",
    class: "inner-img"
  }, null, -1)),
  Lt = {
    class: "markers-place"
  },
  $t = {
    class: "left-part"
  },
  xt = {
    class: "right-part"
  },
  Mt = {
    class: "markers-slider swiper"
  },
  Bt = {
    class: "swiper-wrapper"
  },
  Xt = {
    class: "name p2"
  },
  Dt = {
    class: "date"
  },
  Wt = {
    class: "slide__bottom-info"
  },
  At = {
    class: "location"
  },
  It = G(() => e("br", null, null, -1)),
  Nt = {
    key: 0,
    class: "wrap-icon"
  },
  zt = I({
    __name: "EventsMap",
    props: {
      markers: {},
      title: {
        default: "Locations of past events"
      }
    },
    setup(s) {
      const t = f(null),
        i = s,
        d = f(null),
        {
          isMobile: n
        } = J(),
        u = K(() => ({
          left: i.markers.filter(r => r.coords.earthPart === "left"),
          right: i.markers.filter(r => r.coords.earthPart === "right")
        }));

      function h(r) {
        d.value === r ? d.value = null : d.value = r
      }

      function p() {
        d.value !== null && (d.value = null)
      }

      function S() {
        i.markers.length && (t.value = new Z(".markers-slider.swiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
          centeredSlides: !0
        }))
      }
      return N(() => {
        n.value && S()
      }), (r, B) => {
        const v = kt,
          X = R,
          T = V,
          D = U("click-outside");
        return l(), c("section", gt, [e("div", yt, [e("div", {
          innerHTML: r.title,
          class: "title h3"
        }, null, 8, St), bt]), e("div", Pt, [e("div", Ct, [Et, e("div", Lt, [e("div", $t, [(l(!0), c(P, null, C(m(u).left, o => W((l(), E(v, {
          key: o.id,
          data: o,
          "active-marker": m(d),
          onClick: A(q => h(o.id), ["stop", "self"])
        }, null, 8, ["data", "active-marker", "onClick"])), [
          [D, p]
        ])), 128))]), e("div", xt, [(l(!0), c(P, null, C(m(u).right, o => W((l(), E(v, {
          key: o.id,
          data: o,
          "active-marker": m(d),
          onClick: A(q => h(o.id), ["stop", "self"])
        }, null, 8, ["data", "active-marker", "onClick"])), [
          [D, p]
        ])), 128))])]), e("div", Mt, [e("div", Bt, [(l(!0), c(P, null, C(r.markers, o => (l(), c("div", {
          key: o.id,
          class: "swiper-slide"
        }, [e("p", Xt, _(o.name), 1), e("p", Dt, _(o.date), 1), e("div", Wt, [e("p", At, [k(" location: "), It, k(" " + _(o.location), 1)]), o.isPastEvent ? (l(), c("div", Nt, [w(X)])) : (l(), E(T, {
          key: 1,
          to: "/upcoming-event",
          class: "wrap-icon"
        }, {
          default: z(() => [w(X)]),
          _: 1
        }))])]))), 128))])])])]), Y(r.$slots, "default", {}, void 0, !0)])
      }
    }
  }),
  Ot = $(zt, [
    ["__scopeId", "data-v-42543fc3"]
  ]),
  Vt = {
    desktop: 1024,
    mobile: 375
  },
  Rt = {
    desktop: 1440,
    mobile: 375
  },
  Gt = {
    design_breakpoints: Rt,
    breakpoints: Vt,
    isDesktop() {
      return window.innerWidth >= this.breakpoints.desktop
    },
    isMobile() {
      return window.innerWidth < this.breakpoints.desktop
    },
    getSize() {
      return window.innerWidth
    },
    getName() {
      return this.isDesktop() ? "desktop" : "mobile"
    },
    getBreakpointSizeByName(s) {
      return this.breakpoints[s]
    },
    getLayoutSize(s) {
      const t = this.isDesktop() ? this.design_breakpoints.desktop : this.design_breakpoints.mobile;
      return s * this.getSize() / t
    }
  };
class Ft {
  constructor(t) {
    a(this, "wrapper");
    a(this, "slides");
    a(this, "speed");
    a(this, "_default_speed");
    a(this, "desktopGap");
    a(this, "slidesParams");
    a(this, "_distance");
    a(this, "fullWidth");
    a(this, "_isDragged");
    a(this, "_lastPointerX");
    a(this, "_currentPointerX");
    a(this, "cursorEl");
    a(this, "_mouse");
    a(this, "paused");
    this.wrapper = t, this.slides = [...this.wrapper.querySelectorAll(".slide")], this.paused = !0, this._isDragged = !1, this.paused = !0, this._distance = 0, this._lastPointerX = 0, this._currentPointerX = 0, this.fullWidth = 0, this.desktopGap = 16, this._default_speed = .5, this._mouse = {
      x: 0,
      y: 0,
      last_x: 0,
      last_y: 0
    }, this.speed = this._default_speed, this.cursorEl = this.wrapper.parentElement.querySelector(".slider-cursor"), this.tick = this.tick.bind(this), this.pauseAnimation = this.pauseAnimation.bind(this), this.playAnimation = this.playAnimation.bind(this), this.changeSpeed = this.changeSpeed.bind(this), this.onPointermove = this.onPointermove.bind(this), this.calculateInitParams(), this.placeSlides(), this.init(), this.addEventListeners()
  }
  placeSlides() {
    this.slides.forEach((t, i) => {
      t.style.transform = `translateX(${this.slidesParams[i].offset}px)`
    })
  }
  init() {
    L.ticker.remove(this.tick), L.ticker.add(this.tick)
  }
  tick() {
    if (this.paused) return;
    this.moveCursor();
    let t = this._lastPointerX - this._currentPointerX;
    this._lastPointerX = this._currentPointerX, this.speed += .1 * t, this.speed *= .9, t *= .9, this.speed = this.speed > 0 ? Math.max(this._default_speed, this.speed) : Math.min(-this._default_speed, this.speed), this._distance = (this._distance + this.speed) % this.fullWidth, this._distance >= this.fullWidth && (this._distance = 0), this._distance <= -this.fullWidth && (this._distance = 0), this.slides.forEach((i, d) => {
      this._distance >= 0 ? this._distance >= i.offsetLeft + i.clientWidth ? i.style.transform = `translateX(${(this.fullWidth-this._distance+this.gap)%this.fullWidth}px)` : i.style.transform = `translateX(${-this._distance}px)` : Math.abs(this._distance) >= this.fullWidth - i.offsetLeft - i.clientWidth ? i.style.transform = `translateX(${(-this.fullWidth-this._distance-this.gap)%this.fullWidth}px)` : i.style.transform = `translateX(${-this._distance}px)`
    })
  }
  calculateInitParams() {
    this.slidesParams = this.slides.map((t, i) => ({
      offset: 0,
      width: t.getBoundingClientRect().width,
      current_offset: 0
    })), this.fullWidth = this.wrapper.clientWidth
  }
  get gap() {
    return this.desktopGap / 1440 * Gt.getSize()
  }
  moveCursor() {
    const t = {
      x: this._mouse.last_x - this._mouse.x,
      y: this._mouse.last_y - this._mouse.y
    };
    this._mouse.last_x = this._mouse.last_x - .1 * t.x, this._mouse.last_y = this._mouse.last_y - .1 * t.y, this.cursorEl.style.transform = `translate(${this._mouse.last_x}px, ${this._mouse.last_y}px)`
  }
  addEventListeners() {
    this.wrapper.addEventListener("pointerdown", this.pauseAnimation), this.wrapper.addEventListener("pointerup", this.playAnimation), this.wrapper.addEventListener("pointerleave", this.playAnimation), this.wrapper.addEventListener("pointermove", this.changeSpeed), window.addEventListener("pointermove", this.onPointermove)
  }
  removeEventListeners() {
    this.wrapper.removeEventListener("pointerdown", this.pauseAnimation), this.wrapper.removeEventListener("pointerup", this.playAnimation), this.wrapper.removeEventListener("pointerleave", this.playAnimation), this.wrapper.removeEventListener("pointermove", this.changeSpeed), window.removeEventListener("pointermove", this.onPointermove)
  }
  destroy() {
    this.removeEventListeners(), L.ticker.remove(this.tick), this.clearSlideStyles()
  }
  pauseAnimation(t) {
    this._isDragged = !0, this._lastPointerX = this._currentPointerX = t.clientX
  }
  playAnimation() {
    this._isDragged = !1, this._lastPointerX = this._currentPointerX = 0
  }
  changeSpeed(t) {
    this._isDragged && (this._currentPointerX = t.clientX)
  }
  onPointermove(t) {
    this._mouse.x = t.clientX, this._mouse.y = t.clientY
  }
  play() {
    this.paused = !1
  }
  pause() {
    this.paused = !0
  }
  clearSlideStyles() {
    this.slides.forEach(t => t.style.transform = "")
  }
  update() {
    this.clearSlideStyles(), this.calculateInitParams(), this.placeSlides(), this.init(), this.removeEventListeners(), this.addEventListeners()
  }
}
export {
  Ft as I, Ot as _
};