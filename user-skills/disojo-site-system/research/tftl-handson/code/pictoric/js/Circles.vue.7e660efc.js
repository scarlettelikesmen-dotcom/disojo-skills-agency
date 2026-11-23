/* https://pictoric.com.ua/_nuxt/Circles.vue.7e660efc.js */
var z = Object.defineProperty;
var R = (m, i, E) => i in m ? z(m, i, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: E
}) : m[i] = E;
var h = (m, i, E) => (R(m, typeof i != "symbol" ? i + "" : i, E), E);
import {
  b as q
} from "./pagination.9e265203.js";
import {
  d as W,
  m as Y,
  ai as j,
  x as G,
  f as T,
  o as U,
  ah as X,
  a as J,
  aj as K,
  b as Q,
  y as Z,
  n as $,
  G as tt
} from "./entry.6cb2d70d.js";

function lt(m) {
  let {
    swiper: i,
    extendParams: E,
    on: g,
    emit: t
  } = m;
  E({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), i.navigation = {
    nextEl: null,
    prevEl: null
  };
  const v = s => (Array.isArray(s) ? s : [s]).filter(a => !!a);

  function P(s) {
    let a;
    return s && typeof s == "string" && i.isElement && (a = i.el.querySelector(s), a) ? a : (s && (typeof s == "string" && (a = [...document.querySelectorAll(s)]), i.params.uniqueNavElements && typeof s == "string" && a.length > 1 && i.el.querySelectorAll(s).length === 1 && (a = i.el.querySelector(s))), s && !a ? s : a)
  }

  function w(s, a) {
    const o = i.params.navigation;
    s = v(s), s.forEach(n => {
      n && (n.classList[a ? "add" : "remove"](...o.disabledClass.split(" ")), n.tagName === "BUTTON" && (n.disabled = a), i.params.watchOverflow && i.enabled && n.classList[i.isLocked ? "add" : "remove"](o.lockClass))
    })
  }

  function x() {
    const {
      nextEl: s,
      prevEl: a
    } = i.navigation;
    if (i.params.loop) {
      w(a, !1), w(s, !1);
      return
    }
    w(a, i.isBeginning && !i.params.rewind), w(s, i.isEnd && !i.params.rewind)
  }

  function _(s) {
    s.preventDefault(), !(i.isBeginning && !i.params.loop && !i.params.rewind) && (i.slidePrev(), t("navigationPrev"))
  }

  function M(s) {
    s.preventDefault(), !(i.isEnd && !i.params.loop && !i.params.rewind) && (i.slideNext(), t("navigationNext"))
  }

  function l() {
    const s = i.params.navigation;
    if (i.params.navigation = q(i, i.originalParams.navigation, i.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(s.nextEl || s.prevEl)) return;
    let a = P(s.nextEl),
      o = P(s.prevEl);
    Object.assign(i.navigation, {
      nextEl: a,
      prevEl: o
    }), a = v(a), o = v(o);
    const n = (d, b) => {
      d && d.addEventListener("click", b === "next" ? M : _), !i.enabled && d && d.classList.add(...s.lockClass.split(" "))
    };
    a.forEach(d => n(d, "next")), o.forEach(d => n(d, "prev"))
  }

  function D() {
    let {
      nextEl: s,
      prevEl: a
    } = i.navigation;
    s = v(s), a = v(a);
    const o = (n, d) => {
      n.removeEventListener("click", d === "next" ? M : _), n.classList.remove(...i.params.navigation.disabledClass.split(" "))
    };
    s.forEach(n => o(n, "next")), a.forEach(n => o(n, "prev"))
  }
  g("init", () => {
    i.params.navigation.enabled === !1 ? S() : (l(), x())
  }), g("toEdge fromEdge lock unlock", () => {
    x()
  }), g("destroy", () => {
    D()
  }), g("enable disable", () => {
    let {
      nextEl: s,
      prevEl: a
    } = i.navigation;
    if (s = v(s), a = v(a), i.enabled) {
      x();
      return
    } [...s, ...a].filter(o => !!o).forEach(o => o.classList.add(i.params.navigation.lockClass))
  }), g("click", (s, a) => {
    let {
      nextEl: o,
      prevEl: n
    } = i.navigation;
    o = v(o), n = v(n);
    const d = a.target;
    if (i.params.navigation.hideOnClick && !n.includes(d) && !o.includes(d)) {
      if (i.pagination && i.params.pagination && i.params.pagination.clickable && (i.pagination.el === d || i.pagination.el.contains(d))) return;
      let b;
      o.length ? b = o[0].classList.contains(i.params.navigation.hiddenClass) : n.length && (b = n[0].classList.contains(i.params.navigation.hiddenClass)), t(b === !0 ? "navigationShow" : "navigationHide"), [...o, ...n].filter(A => !!A).forEach(A => A.classList.toggle(i.params.navigation.hiddenClass))
    }
  });
  const B = () => {
      i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")), l(), x()
    },
    S = () => {
      i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")), D()
    };
  Object.assign(i.navigation, {
    enable: B,
    disable: S,
    update: x,
    init: l,
    destroy: D
  })
}
const it = "" + new URL("Bd.4bc2a0db.woff", import.meta.url).href,
  st = 60,
  V = 5,
  F = .95,
  I = .8,
  et = .3,
  at = .7,
  ct = W({
    __name: "Circles",
    props: {
      progress: {
        default: 0
      },
      delayedDraw: {
        type: Boolean
      },
      circles: {},
      startPosY: {},
      larger: {
        type: Boolean
      }
    },
    setup(m, {
      expose: i
    }) {
      const {
        t: E
      } = Y(), g = m;
      let t, v;
      const P = {},
        w = tt({});
      let x = !g.delayedDraw;
      i({
        maskCircles: w
      });
      const _ = j(),
        M = G(),
        l = [],
        D = c => {
          t = c, t.preload = B, t.setup = S, t.draw = s, t.windowResized = a, t.mousePressed = o
        };

      function B() {
        v = t.loadFont(it), g.circles.forEach(({
          icon: c,
          hoverIcon: e
        }, r) => {
          c && (P[r] = {
            default: t.loadImage(c.src),
            rotate: c.rotate || 0,
            hover: e && t.loadImage(e.src)
          })
        })
      }

      function S() {
        t.frameRate(st), t.createCanvas(t.windowWidth, t.windowHeight * 1.5), t.noStroke(), g.circles.forEach(({
          x: c,
          y: e,
          d: r,
          color: p,
          text: f,
          hoverable: u = !1,
          cursor: y = !1,
          link: k,
          collisionDisabled: L = !1,
          useAsMask: C = !1
        }, N) => {
          const H = P[N];
          l.push(new d({
            x: c,
            y: g.startPosY ? e + g.startPosY : e,
            d: r,
            color: p,
            hoverable: u,
            cursor: y,
            link: k,
            useAsMask: C,
            collisionDisabled: L,
            text: f && {
              ...f,
              rotate: f.rotate || 0,
              spacing: f.spacing ?? 1.5
            },
            image: H,
            e: l
          }))
        })
      }

      function s() {
        x && (t.clear(), n())
      }

      function a() {
        t.resizeCanvas(t.windowWidth, t.windowHeight), l.forEach(c => c.resize())
      }

      function o() {
        for (const c of l)
          if (c.isMouseOver() && c.link) return _.push(M(c.link)), !1
      }

      function n() {
        let c = !1;
        l.forEach(e => {
          e.process(), !(!e.isHovered || !e.cursor) && (c = !0)
        }), t.cursor(c ? "pointer" : "default")
      }
      class d {
        constructor({
          x: e,
          y: r,
          d: p,
          e: f,
          hoverable: u,
          cursor: y,
          link: k,
          useAsMask: L,
          collisionDisabled: C,
          text: N,
          image: H,
          color: O = "#FFF"
        }) {
          h(this, "id");
          h(this, "radius", 0);
          h(this, "color");
          h(this, "hoverable");
          h(this, "cursor");
          h(this, "link");
          h(this, "useAsMask");
          h(this, "collisionDisabled");
          h(this, "position", t.createVector(0, 0));
          h(this, "initialPosition", t.createVector(0, 0));
          h(this, "velocity");
          h(this, "scale");
          h(this, "scaleVelocity");
          h(this, "text");
          h(this, "image");
          h(this, "isHovered");
          this.id = f.length, this.color = O, this.hoverable = u, this.cursor = y, this.link = k, this.useAsMask = L, this.collisionDisabled = C, this.isHovered = !1, this.text = N, this.image = H, this.scale = 1, this.scaleVelocity = 0, this.velocity = t.createVector(0, 0), this.updateDimensions(e, r, p)
        }
        updateDimensions(e, r, p) {
          const f = t.width / 1440;
          this.radius = p * f / 2;
          const u = e * f + this.radius,
            y = r * f + this.radius;
          this.position = t.createVector(u, y), this.initialPosition = t.createVector(u, y)
        }
        resize() {
          const {
            x: e,
            y: r,
            d: p
          } = g.circles[this.id];
          this.updateDimensions(e, r, p)
        }
        process() {
          this.update(), this.collide(), this.display()
        }
        update() {
          this.isHovered = this.isMouseOver();
          const r = ((this.isHovered ? 1.2 : 1) - this.scale) * et;
          this.scaleVelocity += r, this.scaleVelocity *= at, this.scale += this.scaleVelocity;
          const p = t.createVector(this.initialPosition.x - this.position.x, this.initialPosition.y - this.position.y - g.progress * (t.height / 3));
          p.normalize().mult(.15), this.velocity.add(p), this.position.add(this.velocity), this.useAsMask && (w[this.id] = {
            x: Math.round(this.position.x - this.radius * 2 * this.scale / 2),
            y: Math.round(this.position.y - this.radius * 2 * this.scale / 2),
            d: Math.round(this.radius * 2 * this.scale)
          })
        }
        collide() {
          if (!this.collisionDisabled)
            for (let e = 0; e < l.length; e++) {
              if (e === this.id || l[e].collisionDisabled) continue;
              const r = l[e].position.x - this.position.x,
                p = l[e].position.y - this.position.y,
                f = t.sqrt(r * r + p * p),
                u = l[e].radius + this.radius * this.scale;
              if (f < u) {
                const y = t.atan2(p, r),
                  k = this.position.x + t.cos(y) * u,
                  L = this.position.y + t.sin(y) * u,
                  C = t.createVector((k - l[e].position.x) * I * .1, (L - l[e].position.y) * I * .1);
                this.velocity.sub(C), l[e].velocity.add(C), this.velocity.mult(F), l[e].velocity.mult(F), this.velocity.limit(V), l[e].velocity.limit(V)
              }
            }
        }
        isMouseOver() {
          return this.hoverable ? t.dist(t.mouseX, t.mouseY, this.position.x, this.position.y) < this.radius * this.scale : !1
        }
        display() {
          t.fill(this.color), t.ellipse(this.position.x, this.position.y, this.radius * 2 * this.scale), this.drawImage(), this.drawText()
        }
        drawText() {
          if (!this.text) return;
          t.textFont(v), t.textSize(this.text.size / 1440 * t.width * this.scale), t.textAlign(t.LEFT, t.TOP), t.fill("#411F15");
          const e = E(this.text.value).toUpperCase(),
            r = e.split(""),
            p = 2 * Math.PI * this.radius * this.scale,
            f = this.text.spacing;
          t.push(), t.translate(this.position.x, this.position.y), t.rotate(t.radians(this.text.rotate || 0)), this.isHovered && (this.text.rotate += 1);
          for (let u = 0; u < r.length; u++) {
            const k = (r[u] === " " ? t.textWidth(e) / r.length : t.textWidth(r[u])) / p * 360 * f;
            t.text(r[u], 0, -this.radius * this.scale * .95), t.rotate(t.radians(k))
          }
          t.pop()
        }
        drawImage() {
          this.image && (this.isHovered && (this.image.rotate += 1), t.push(), t.translate(this.position.x, this.position.y), t.rotate(t.radians(this.image.rotate)), t.image(this.isHovered && this.image.hover ? this.image.hover : this.image.default, -this.radius * this.scale * .9, -this.radius * this.scale * .9, this.radius * 2 * this.scale * .9, this.radius * 2 * this.scale * .9), t.pop())
        }
      }
      const b = T("preloaderDone"),
        A = T("transitionDone");
      return U(() => {
        !b.value || !A.value || x || (x = !0)
      }), X(() => !x && (x = !0)), J(() => t.remove()), (c, e) => {
        const r = K("P5");
        return Q(), Z(r, {
          class: $(["canvas-wrapper", {
            inset: !m.larger,
            larger: m.larger
          }]),
          sketch: D
        }, null, 8, ["class"])
      }
    }
  });
export {
  lt as N, ct as _
};