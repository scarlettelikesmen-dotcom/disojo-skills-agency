/* https://pictoric.com.ua/_nuxt/Card.9c884948.js */
import {
  _ as i
} from "./Labels.9876e5d7.js";
import {
  _ as r
} from "./Play.26f66faf.js";
import {
  d as m,
  x as u,
  b as e,
  y as x,
  z as h,
  g as a,
  i as s,
  n as c,
  t as o,
  c as g,
  k as y,
  j as f,
  C as p,
  _ as C
} from "./entry.6cb2d70d.js";
const b = {
    class: "card__thumb"
  },
  k = {
    class: "card__image inset"
  },
  v = ["src", "alt"],
  B = {
    class: "card__title t2-xb"
  },
  N = {
    key: 0,
    class: "card__description t2-xb"
  },
  w = m({
    __name: "Card",
    props: {
      data: {},
      showAuthor: {
        type: Boolean
      }
    },
    setup(t) {
      const n = u();
      return (L, P) => {
        const _ = i,
          d = r,
          l = p;
        return e(), x(l, {
          class: c(["card", t.data.category]),
          to: f(n)(t.data.slug)
        }, {
          default: h(() => [a("div", b, [a("div", k, [a("img", {
            class: "inner-img",
            src: `${t.data.image.large}#t=0.01`,
            alt: t.data.title
          }, null, 8, v)]), s(_, {
            labels: [{
              text: t.data.category,
              isType: !0
            }],
            class: "card__type"
          }, null, 8, ["labels"]), s(d, {
            class: "card__icon"
          })]), a("div", {
            class: c([{
              "extra-height": !t.data.text && t.showAuthor
            }, "card__content"])
          }, [a("h3", B, o(t.data.title), 1), t.data.text ? (e(), g("p", N, o(t.data.text), 1)) : y("", !0)], 2)]),
          _: 1
        }, 8, ["class", "to"])
      }
    }
  });
const A = C(w, [
  ["__scopeId", "data-v-3ed2400a"]
]);
export {
  A as _
};