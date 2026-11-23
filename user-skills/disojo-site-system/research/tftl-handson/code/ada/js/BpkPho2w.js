/* https://aventuradentalarts.com/_nuxt/BpkPho2w.js */
import {
  m as E,
  o as b,
  e as L,
  i as d,
  d as V,
  c as I,
  u as j,
  t as D,
  f as z,
  j as A,
  s as H
} from "./C3LIzMiL.js";
import {
  a as w,
  f as k
} from "./jnTzBd4Y.js";
const N = {},
  $ = {
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  };

function F(f, e) {
  return b(), L("svg", $, e[0] || (e[0] = [d("rect", {
    width: "80",
    height: "80",
    rx: "40",
    transform: "matrix(-1 0 0 1 80 0)",
    fill: "#D6D1D0"
  }, null, -1), d("path", {
    d: "M38.5234 44L35.2696 40.6667C34.9101 40.2985 34.9101 39.7015 35.2696 39.3333L38.5234 36M35.1333 40.0004L45 40.0004",
    stroke: "#424346",
    "stroke-width": "1.5",
    "stroke-linecap": "round"
  }, null, -1)]))
}
const U = E(N, [
  ["render", F]
]);

function W(f) {
  let {
    swiper: e,
    extendParams: M,
    emit: u,
    once: T
  } = f;
  M({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: .02
    }
  });

  function _() {
    if (e.params.cssMode) return;
    const o = e.getTranslate();
    e.setTranslate(o), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
      currentPos: e.rtl ? e.translate : -e.translate
    })
  }

  function a() {
    if (e.params.cssMode) return;
    const {
      touchEventsData: o,
      touches: r
    } = e;
    o.velocities.length === 0 && o.velocities.push({
      position: r[e.isHorizontal() ? "startX" : "startY"],
      time: o.touchStartTime
    }), o.velocities.push({
      position: r[e.isHorizontal() ? "currentX" : "currentY"],
      time: w()
    })
  }

  function p(o) {
    let {
      currentPos: r
    } = o;
    if (e.params.cssMode) return;
    const {
      params: n,
      wrapperEl: g,
      rtlTranslate: y,
      snapGrid: l,
      touchEventsData: c
    } = e, P = w() - c.touchStartTime;
    if (r < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return
    }
    if (r > -e.maxTranslate()) {
      e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
      return
    }
    if (n.freeMode.momentum) {
      if (c.velocities.length > 1) {
        const s = c.velocities.pop(),
          i = c.velocities.pop(),
          R = s.position - i.position,
          B = s.time - i.time;
        e.velocity = R / B, e.velocity /= 2, Math.abs(e.velocity) < n.freeMode.minimumVelocity && (e.velocity = 0), (B > 150 || w() - s.time > 300) && (e.velocity = 0)
      } else e.velocity = 0;
      e.velocity *= n.freeMode.momentumVelocityRatio, c.velocities.length = 0;
      let m = 1e3 * n.freeMode.momentumRatio;
      const C = e.velocity * m;
      let t = e.translate + C;
      y && (t = -t);
      let x = !1,
        h;
      const v = Math.abs(e.velocity) * 20 * n.freeMode.momentumBounceRatio;
      let S;
      if (t < e.maxTranslate()) n.freeMode.momentumBounce ? (t + e.maxTranslate() < -v && (t = e.maxTranslate() - v), h = e.maxTranslate(), x = !0, c.allowMomentumBounce = !0) : t = e.maxTranslate(), n.loop && n.centeredSlides && (S = !0);
      else if (t > e.minTranslate()) n.freeMode.momentumBounce ? (t - e.minTranslate() > v && (t = e.minTranslate() + v), h = e.minTranslate(), x = !0, c.allowMomentumBounce = !0) : t = e.minTranslate(), n.loop && n.centeredSlides && (S = !0);
      else if (n.freeMode.sticky) {
        let s;
        for (let i = 0; i < l.length; i += 1)
          if (l[i] > -t) {
            s = i;
            break
          } Math.abs(l[s] - t) < Math.abs(l[s - 1] - t) || e.swipeDirection === "next" ? t = l[s] : t = l[s - 1], t = -t
      }
      if (S && T("transitionEnd", () => {
          e.loopFix()
        }), e.velocity !== 0) {
        if (y ? m = Math.abs((-t - e.translate) / e.velocity) : m = Math.abs((t - e.translate) / e.velocity), n.freeMode.sticky) {
          const s = Math.abs((y ? -t : t) - e.translate),
            i = e.slidesSizesGrid[e.activeIndex];
          s < i ? m = n.speed : s < 2 * i ? m = n.speed * 1.5 : m = n.speed * 2.5
        }
      } else if (n.freeMode.sticky) {
        e.slideToClosest();
        return
      }
      n.freeMode.momentumBounce && x ? (e.updateProgress(h), e.setTransition(m), e.setTranslate(t), e.transitionStart(!0, e.swipeDirection), e.animating = !0, k(g, () => {
        !e || e.destroyed || !c.allowMomentumBounce || (u("momentumBounce"), e.setTransition(n.speed), setTimeout(() => {
          e.setTranslate(h), k(g, () => {
            !e || e.destroyed || e.transitionEnd()
          })
        }, 0))
      })) : e.velocity ? (u("_freeModeNoMomentumRelease"), e.updateProgress(t), e.setTransition(m), e.setTranslate(t), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, k(g, () => {
        !e || e.destroyed || e.transitionEnd()
      }))) : e.updateProgress(t), e.updateActiveIndex(), e.updateSlidesClasses()
    } else if (n.freeMode.sticky) {
      e.slideToClosest();
      return
    } else n.freeMode && u("_freeModeNoMomentumRelease");
    (!n.freeMode.momentum || P >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
  }
  Object.assign(e, {
    freeMode: {
      onTouchStart: _,
      onTouchMove: a,
      onTouchEnd: p
    }
  })
}
const G = {
    class: "job-position c2"
  },
  O = {
    class: "name h5"
  },
  X = ["src", "alt"],
  Y = ["innerHTML"],
  q = V({
    __name: "SpecialistSm",
    props: {
      data: {}
    },
    setup(f) {
      const e = f,
        {
          getLocations: M
        } = I(),
        u = j("specialist-modal"),
        T = M(e.data.locations),
        _ = a => {
          u.value.id = a, u.value.isActive = !0
        };
      return (a, p) => {
        var r;
        const o = H;
        return b(), L("article", {
          class: "specialist",
          "hover-link-container": "",
          onClick: p[0] || (p[0] = n => _(a.data.id))
        }, [d("span", G, D(a.data.position), 1), d("span", O, D(a.data.name), 1), d("img", {
          src: (r = a.data.image) == null ? void 0 : r.medium,
          alt: a.data.name,
          class: "image"
        }, null, 8, X), d("p", {
          innerHTML: z(T)[0].title,
          class: "location c3"
        }, null, 8, Y), A(o, {
          text: "Learn More",
          underline: "",
          "text-class": "c2",
          class: "link-fake"
        })])
      }
    }
  }),
  Z = E(q, [
    ["__scopeId", "data-v-12d652c9"]
  ]);
export {
  U as _, Z as a, W as f
};