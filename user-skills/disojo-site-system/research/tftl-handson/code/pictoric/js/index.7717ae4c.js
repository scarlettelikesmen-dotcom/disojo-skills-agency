/* https://pictoric.com.ua/_nuxt/index.7717ae4c.js */
import {
  aq as f,
  ar as l,
  w as d,
  a as v,
  as as i,
  at as m,
  r as c,
  au as h,
  av as p,
  aw as M
} from "./entry.6cb2d70d.js";

function w(s, a = {}) {
  const e = a.head || f();
  if (e) return e.ssr ? e.push(s, a) : H(e, s, a)
}

function H(s, a, e = {}) {
  const n = c(!1),
    r = c({});
  l(() => {
    r.value = n.value ? {} : h(a)
  });
  const t = s.push(r.value, e);
  return d(r, o => {
    t.patch(o)
  }), p() && (v(() => {
    t.dispose()
  }), i(() => {
    n.value = !0
  }), m(() => {
    n.value = !1
  })), t
}

function U(s, a) {
  const {
    title: e,
    titleTemplate: n,
    ...r
  } = s;
  return w({
    title: e,
    titleTemplate: n,
    _flatMeta: r
  }, {
    ...a,
    transform(t) {
      const u = M({
        ...t._flatMeta
      });
      return delete t._flatMeta, {
        ...t,
        meta: u
      }
    }
  })
}
export {
  U as u
};