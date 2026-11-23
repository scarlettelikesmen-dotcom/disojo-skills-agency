/* https://hilight.design/_nuxt/4MnaQWY0.js */
import {
  N as l,
  M as m,
  aJ as p,
  aK as f,
  l as h,
  ae as b
} from "#entry";
const d = {
  projects: "projects",
  services: "services",
  about: "about",
  contact: "contact",
  "lets-talk": "lets_talk"
};

function g(u) {
  const i = l(),
    {
      t: s,
      locale: c
    } = m();
  p([f({
    itemListElement: h(() => {
      const e = i.path.split("/").filter(Boolean);
      let a = "";
      e[0] === c.value && c.value !== "en" && (a = `/${e.shift()}`);
      const o = e[0],
        n = o ? d[o] : void 0;
      if (!n) return [];
      const t = [{
        name: s("home"),
        item: a || "/"
      }];
      if (e.length > 1) {
        const r = b(u)?.trim() || e.at(-1)?.replace(/[-_]/g, " ") || "";
        return t.push({
          name: s(n),
          item: `${a}/${o}`
        }), r && t.push({
          name: r
        }), t
      }
      return t.push({
        name: s(n)
      }), t
    })
  })])
}
export {
  g as u
};