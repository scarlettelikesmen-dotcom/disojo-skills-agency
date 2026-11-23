/* https://pictoric.com.ua/_nuxt/useDefaultAnim.bde1a832.js */
import {
  ao as c,
  v as i,
  ap as u,
  ah as f
} from "./entry.6cb2d70d.js";

function p({
  targets: t,
  options: s
}) {
  (typeof t == "string" ? document.querySelectorAll(t) : Array.isArray(t) ? t : [t]).forEach(n => {
    const {
      lines: a
    } = new c(n, {
      type: "lines"
    }), {
      lines: o
    } = new c(a, {
      type: "lines",
      linesClass: "anim-line"
    });
    i.set(a, {
      overflow: "hidden",
      paddingBottom: "0.15em",
      marginBottom: "-0.15em"
    }), i.set(n, {
      opacity: 1
    });
    const e = n.classList.contains("instant");
    i.fromTo(o, {
      opacity: 0,
      yPercent: 100,
      rotation: -5,
      ...s == null ? void 0 : s.from
    }, {
      opacity: 1,
      yPercent: 0,
      rotation: 0,
      stagger: .2,
      duration: 1,
      clearProps: "all",
      ease: "power1.inOut",
      ...!e && {
        scrollTrigger: {
          trigger: n,
          start: "top bottom",
          end: "bottom bottom"
        }
      },
      ...s == null ? void 0 : s.to
    })
  })
}
const g = .8;

function h({
  targets: t,
  options: s
}) {
  (typeof t == "string" ? document.querySelectorAll(t) : Array.isArray(t) ? t : [t]).forEach(n => {
    const a = n.classList.contains("delay"),
      o = n.classList.contains("center"),
      e = n.classList.contains("bottom"),
      l = n.classList.contains("instant"),
      d = a ? g : 0,
      m = o ? "-50%" : "top",
      y = e ? "150%" : "bottom";
    i.fromTo(n, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: d,
      ...!l && {
        scrollTrigger: {
          trigger: n,
          start: `${m} ${y}`,
          end: "bottom bottom"
        }
      },
      ...s
    })
  })
}

function T(t) {
  const r = document.querySelectorAll(t);
  if (!r.length) return;

  function n(a) {
    const o = (a.clientX - window.innerWidth / 2) / 25,
      e = (a.clientY - window.innerHeight / 2) / 25;
    u.to(r, {
      duration: 2,
      x: o,
      y: e
    })
  }
  window.addEventListener("mousemove", n)
}

function A() {
  f(() => {
    p({
      targets: ".anim-title"
    }), h({
      targets: ".anim-text"
    }), T(".default-parallax")
  })
}
export {
  p as a, A as u
};