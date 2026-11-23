/* https://13322566869.com/_nuxt/delay.7101e9ce.js */
var o = Object.defineProperty;
var a = (t, e, n) => e in t ? o(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var s = (t, e, n) => (a(t, typeof e != "symbol" ? e + "" : e, n), n);
class c {
  constructor(e) {
    s(this, "parent");
    this.parent = typeof e == "string" ? document.querySelector(e) : e
  }
}
async function i(t = 0) {
  return new Promise(e => setTimeout(() => {
    e(null)
  }, t))
}
export {
  c as B, i as a
};