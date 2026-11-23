/* https://fame-estate.com/_nuxt/Cnghhg3X.js */
import {
  ac as u,
  r as c,
  ad as f,
  s as v,
  h as d,
  ae as l,
  af as i,
  ag as h,
  W as p
} from "./BGG7sC63.js";

function g(a, t = {}) {
  const e = t.head || u();
  if (e) return e.ssr ? e.push(a, t) : m(e, a, t)
}

function m(a, t, e = {}) {
  const s = c(!1),
    n = c({});
  f(() => {
    n.value = s.value ? {} : h(t)
  });
  const r = a.push(n.value, e);
  return v(n, o => {
    r.patch(o)
  }), p() && (d(() => {
    r.dispose()
  }), l(() => {
    s.value = !0
  }), i(() => {
    s.value = !1
  })), r
}
const I = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [s, n] of t) e[s] = n;
  return e
};
export {
  I as _, g as u
};