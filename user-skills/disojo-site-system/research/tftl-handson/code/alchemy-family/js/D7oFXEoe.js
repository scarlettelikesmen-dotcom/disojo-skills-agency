/* https://alchemy.family/_nuxt/D7oFXEoe.js */
import {
  a as m
} from "./B8g4Zq01.js";

function f(n = "0000-00-00", o = "0000-00-00") {
  var a, s;
  const t = n.split("-"),
    r = o.split("-"),
    e = ((a = t[2]) == null ? void 0 : a.padStart(2, "0")) ?? "",
    c = ((s = r[2]) == null ? void 0 : s.padStart(2, "0")) ?? "",
    d = m[+t[1] - 1] ?? "",
    p = t[0];
  return `${d} ${e}-${c}, ${p}`
}
export {
  f
};