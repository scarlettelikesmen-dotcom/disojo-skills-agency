/* https://pictoric.com.ua/_nuxt/useResize.e6421d34.js */
import {
  o as s,
  a as r
} from "./entry.6cb2d70d.js";
const e = [];
let i = null;

function t() {
  i && clearTimeout(i), i = setTimeout(() => {
    e.forEach(n => n())
  }, 200)
}

function f(n) {
  s(() => {
    e.length === 0 && window.addEventListener("resize", t), e.push(n)
  }), r(() => {
    const o = e.indexOf(n);
    o !== -1 && e.splice(o, 1), e.length === 0 && window.removeEventListener("resize", t)
  })
}
export {
  f as u
};