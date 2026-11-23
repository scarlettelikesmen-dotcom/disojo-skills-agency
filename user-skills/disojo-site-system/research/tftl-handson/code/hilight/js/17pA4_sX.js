/* https://hilight.design/_nuxt/17pA4_sX.js */
import {
  P as s,
  N as l,
  ai as i,
  p as u
} from "#entry";
const c = 30,
  a = new Map;

function p() {
  const o = s("navigation-is-pop", () => !1),
    e = s("lenis"),
    n = l();
  i((t, r) => {
    a.set(r.fullPath, e.value?.scroll ?? window.scrollY)
  }), u(() => {
    if (!o.value || !e.value) return;
    const t = a.get(n.fullPath);
    t && m(e.value, t)
  })
}

function m(o, e) {
  let n = 0;
  const t = () => {
    if (n++, document.documentElement.scrollHeight - window.innerHeight < e && n < c) {
      requestAnimationFrame(t);
      return
    }
    o.resize(), o.scrollTo(e, {
      immediate: !0,
      force: !0
    })
  };
  requestAnimationFrame(t)
}
export {
  p as u
};