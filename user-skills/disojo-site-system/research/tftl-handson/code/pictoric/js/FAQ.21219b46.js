/* https://pictoric.com.ua/_nuxt/FAQ.21219b46.js */
import {
  _ as Q
} from "./Labels.9876e5d7.js";
import {
  d as k,
  b as i,
  c as v,
  g as a,
  n as I,
  _ as w,
  m as E,
  Y as G,
  o as T,
  y as V,
  i as g,
  z as H,
  j as n,
  t as y,
  k as $,
  a9 as X,
  s as A,
  X as F,
  v as C,
  a7 as Y,
  aa as J,
  ab as j,
  C as P,
  N as K,
  u as z,
  w as Z,
  r as M,
  F as q,
  h as B,
  B as N,
  H as ee,
  ac as te,
  a as U,
  a0 as S,
  q as O,
  ad as ae,
  l as W,
  E as ne,
  G as oe,
  ae as se
} from "./entry.6cb2d70d.js";
import {
  u as D
} from "./useResize.e6421d34.js";
import {
  _ as le
} from "./Default.49af0b27.js";
import {
  v as ce
} from "./index.a90ee2f6.js";
const ie = k({
  __name: "Plus",
  props: {
    isMinus: {
      type: Boolean
    }
  },
  setup(e) {
    return (p, l) => (i(), v("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      class: I({
        minus: e.isMinus
      })
    }, [...l[0] || (l[0] = [a("path", {
      d: "M9.99512 1V19",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }, null, -1), a("path", {
      d: "M19 9.99512L1 9.99512",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round"
    }, null, -1)])], 2))
  }
});
const re = w(ie, [
    ["__scopeId", "data-v-1e4d27ec"]
  ]),
  de = {
    class: "thumb-wrap"
  },
  ue = ["src", "alt"],
  _e = {
    key: 0,
    class: "about-wrap"
  },
  me = {
    class: "about-title t2-xb"
  },
  pe = ["innerHTML"],
  ve = k({
    __name: "Member",
    props: {
      data: {}
    },
    emits: ["hideModal"],
    setup(e, {
      emit: p
    }) {
      const {
        t: l
      } = E(), s = p, {
        lockScroll: t
      } = G(), c = A();
      let m;
      async function o() {
        var u;
        t(!0), await F();
        const [h, d] = ((u = c.value) == null ? void 0 : u.children) || [];
        !h || !d || (m = C.timeline({
          defaults: {
            ease: "default-ease",
            duration: .6
          }
        }).to(h, {
          opacity: 1
        }).to(d, {
          y: 0
        }, "<"))
      }
      let r = !1;
      async function f() {
        r || (r = !0, await m.reverse(), t(!1), s("hideModal"))
      }
      return T(o), (h, d) => {
        const u = Y,
          _ = J,
          b = j,
          L = P,
          x = K;
        return i(), V(X, {
          to: "#__nuxt"
        }, [g(x, null, {
          default: H(() => {
            var R;
            return [a("div", {
              ref_key: "modalRef",
              ref: c,
              class: "modal",
              "data-lenis-prevent": ""
            }, [a("div", de, [a("img", {
              class: "inner-img",
              src: e.data.photo.large,
              alt: e.data.photo.large || e.data.name
            }, null, 8, ue), a("button", {
              type: "button",
              class: "close-button",
              onClick: f
            }, [g(_, {
              text: n(l)("buttons.close"),
              theme: "light"
            }, {
              default: H(() => [g(u)]),
              _: 1
            }, 8, ["text"])])]), e.data.about ? (i(), v("div", _e, [a("h2", me, y((R = e.data.about) == null ? void 0 : R.title), 1), a("p", {
              class: "about-description t1_1",
              innerHTML: e.data.about.description
            }, null, 8, pe), g(L, {
              class: "about-link t2-xb",
              target: "_blank",
              to: e.data.about.social.link,
              rel: "noopener noreferrer nofollow"
            }, {
              default: H(() => [g(b, {
                text: e.data.about.social.name
              }, null, 8, ["text"])]),
              _: 1
            }, 8, ["to"])])) : $("", !0)], 512)]
          }),
          _: 1
        })])
      }
    }
  });
const fe = w(ve, [
    ["__scopeId", "data-v-a7758653"]
  ]),
  he = {
    class: "team-list__item"
  },
  ge = {
    class: "team-list__thumb"
  },
  be = ["src"],
  ye = {
    class: "about-title t2-xb"
  },
  xe = ["innerHTML"],
  $e = {
    class: "team-list__content"
  },
  ke = {
    class: "team-list__title a1"
  },
  we = {
    class: "team-list__subtitle t2-xb"
  },
  Ie = {
    key: 0,
    class: "team-list__description t2-xb"
  },
  Me = k({
    __name: "Card",
    props: {
      data: {}
    },
    setup(e) {
      const {
        isMobile: p,
        isDesktop: l
      } = z(), s = M(!1);

      function t() {
        s.value = !s.value
      }
      const c = A();

      function m(o) {
        !c.value || c.value.contains(o.target) || (s.value = !1)
      }
      return Z(s, o => {
        p.value || (o ? document.addEventListener("click", m) : document.removeEventListener("click", m))
      }), (o, r) => {
        const f = Q,
          h = j,
          d = P,
          u = re,
          _ = fe;
        return i(), v("li", he, [a("div", ge, [a("img", {
          class: "inner-img",
          src: e.data.photo.large,
          alt: "image"
        }, null, 8, be), e.data.labels ? (i(), V(f, {
          key: 0,
          labels: e.data.labels
        }, null, 8, ["labels"])) : $("", !0), e.data.about ? (i(), v("div", {
          key: 1,
          ref_key: "aboutRef",
          ref: c,
          class: I(["about-wrapper desk", {
            shown: n(s)
          }])
        }, [a("h3", ye, y(e.data.about.title), 1), a("p", {
          class: "about-description t1",
          innerHTML: e.data.about.description
        }, null, 8, xe), e.data.about.social ? (i(), V(d, {
          key: 0,
          to: e.data.about.social.link,
          external: "",
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          class: "about-link t2-xb"
        }, {
          default: H(() => [g(h, {
            text: e.data.about.social.name
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])) : $("", !0), a("button", {
          type: "button",
          class: "about-button",
          onClick: t
        }, [g(u, {
          "is-minus": n(s) && n(l)
        }, null, 8, ["is-minus"])])], 2)) : $("", !0), a("button", {
          type: "button",
          class: "about-button mob",
          onClick: t
        }, [g(u, {
          "is-minus": n(s) && n(l)
        }, null, 8, ["is-minus"])])]), a("div", $e, [a("h3", ke, y(e.data.name), 1), a("p", we, y(e.data.position), 1), e.data.description ? (i(), v("p", Ie, y(e.data.description), 1)) : $("", !0)]), n(s) && e.data.about && n(p) ? (i(), V(_, {
          key: 0,
          data: e.data,
          onHideModal: r[0] || (r[0] = b => s.value = !1)
        }, null, 8, ["data"])) : $("", !0)])
      }
    }
  });
const Ce = w(Me, [
    ["__scopeId", "data-v-befa1637"]
  ]),
  Ve = {
    class: "team-wrap"
  },
  Ae = {
    class: "team-list grid-container"
  },
  Le = k({
    __name: "Grid",
    props: {
      pageSize: {},
      data: {}
    },
    setup(e) {
      const {
        t: p
      } = E(), l = e, {
        isMobile: s
      } = z(), t = A(), c = M(1), m = N(() => l.pageSize ? l.data.slice(0, l.pageSize * c.value) : l.data), o = [];
      async function r() {
        o == null || o.forEach(_ => _ == null ? void 0 : _.kill());
        const d = Array.from(document.querySelectorAll(".team-list__item"));
        if (s.value) {
          d.forEach(_ => {
            const b = C.from(_, {
              yPercent: 30,
              opacity: 0,
              scrollTrigger: {
                trigger: _,
                start: "top 90%",
                end: "top 40%",
                scrub: .3
              }
            });
            o.push(b)
          });
          return
        }
        const u = [];
        for (let _ = 0; _ < d.length; _ += 3) u.push(d.slice(_, _ + 3));
        u.forEach(_ => {
          const b = C.from(_, {
            yPercent: 50,
            scrollTrigger: {
              trigger: _[0],
              start: "top 120%",
              end: "top 60%",
              scrub: .5
            },
            stagger: L => {
              const x = Math.floor(_.length / 2);
              return Math.abs(L - x) * .2
            }
          });
          o.push(b)
        })
      }
      let f = !1;
      async function h() {
        var u;
        const d = (u = t.value) == null ? void 0 : u.firstElementChild;
        !t.value || !d || f || (f = !0, C.set(t.value, {
          height: d.clientHeight
        }), c.value += 1, await F(), await C.to(t.value, {
          height: d.clientHeight,
          duration: .4,
          ease: "default-ease",
          onComplete: () => {
            f = !1
          }
        }))
      }
      return T(r), (d, u) => {
        const _ = Ce,
          b = ee;
        return i(), v("div", Ve, [a("div", {
          ref_key: "gridWrapRef",
          ref: t,
          class: "grid-wrap"
        }, [a("ul", Ae, [(i(!0), v(q, null, B(n(m), (L, x) => (i(), V(_, {
          key: x,
          data: L
        }, null, 8, ["data"]))), 128))])], 512), e.data.length !== n(m).length ? (i(), v("button", {
          key: 0,
          type: "button",
          class: "load-more",
          onClick: h
        }, [g(b, {
          text: n(p)("buttons.loadMore")
        }, null, 8, ["text"])])) : $("", !0)])
      }
    }
  });
const Et = w(Le, [
    ["__scopeId", "data-v-3d301a81"]
  ]),
  Se = {
    class: "accordion-title t1"
  },
  Te = {
    class: "content-wrapper"
  },
  Ee = {
    class: "pictures-wrapper grid-container"
  },
  He = {
    class: "accordion-inner"
  },
  qe = k({
    __name: "Item",
    props: {
      itemId: {}
    },
    setup(e) {
      const p = e,
        l = te("accordion");
      if (!l) throw new Error("AccordionItem must be used inside Accordion");

      function s() {
        l && l.setActive(p.itemId)
      }
      const t = N(() => l.activeId.value === p.itemId),
        c = A(),
        m = A(),
        o = M(0),
        r = C.matchMedia();

      function f() {
        !c.value || !m.value || (r.add("(max-width: 1025px)", () => o.value = m.value.clientHeight), r.add("(min-width: 1024px)", () => o.value = c.value.clientHeight))
      }
      return D(f), T(f), U(() => r == null ? void 0 : r.kill()), (h, d) => (i(), v("li", {
        class: I(["accordion-item", {
          active: n(t)
        }])
      }, [a("div", {
        class: "accordion-header grid-container",
        onClick: s
      }, [a("span", {
        class: I(["accordion-icon t1", {
          active: n(t)
        }])
      }, [a("span", null, y(n(t) ? "-" : "+"), 1)], 2), a("h4", Se, [S(h.$slots, "head", {}, void 0, !0)])]), a("div", {
        class: "accordion-body grid-container",
        style: O(`--content-height: ${n(o)}`)
      }, [a("div", Te, [a("div", {
        ref_key: "contentMobRef",
        ref: m,
        class: "content-inner grid-container"
      }, [a("div", Ee, [S(h.$slots, "media-thumb", {
        isActive: n(t)
      }, void 0, !0)]), a("div", He, [a("div", {
        ref_key: "contentRef",
        ref: c,
        class: "list-wrapper"
      }, [S(h.$slots, "body", {
        isActive: n(t)
      }, void 0, !0)], 512)])], 512)]), d[0] || (d[0] = a("div", {
        class: "line"
      }, null, -1))], 4)], 2))
    }
  });
const Ht = w(qe, [
    ["__scopeId", "data-v-7f71ded4"]
  ]),
  Be = k({
    __name: "index",
    setup(e, {
      expose: p
    }) {
      const l = M(-1);

      function s(o) {
        l.value = l.value === o ? -1 : o
      }
      ae("accordion", {
        setActive: s,
        activeId: l
      }), p({
        activeId: l
      });
      const t = A();

      function c(o) {
        const r = o.target;
        !t.value || r === t.value || t.value.contains(r) || (l.value = -1)
      }

      function m() {
        var r;
        const o = (r = t.value) == null ? void 0 : r.querySelectorAll(".line");
        !t.value || !(o != null && o.length) || C.to(o, {
          scrollTrigger: {
            trigger: t.value,
            start: "top bottom"
          },
          scaleX: 1,
          duration: 1,
          stagger: .05,
          ease: "default-ease"
        })
      }
      return T(() => {
        m(), document.addEventListener("click", c)
      }), U(() => document.removeEventListener("click", c)), (o, r) => (i(), v("ul", {
        ref_key: "listRef",
        ref: t,
        class: "accordion"
      }, [S(o.$slots, "default", {}, void 0, !0)], 512))
    }
  });
const qt = w(Be, [
    ["__scopeId", "data-v-ec1e1ed8"]
  ]),
  Re = {
    class: "agenda-wrap"
  },
  Fe = {
    key: 0,
    class: "agenda-title grid-container h4"
  },
  Ne = {
    class: "agenda-title__item"
  },
  Ue = {
    class: "agenda-title__item"
  },
  je = {
    class: "agenda-title__inner"
  },
  Pe = {
    class: "agenda-title__inner"
  },
  ze = k({
    __name: "index",
    props: {
      data: {}
    },
    setup(e) {
      return (p, l) => {
        var s, t;
        return i(), v("div", Re, [(t = (s = e.data) == null ? void 0 : s.title) != null && t.length ? (i(), v("h3", Fe, [a("span", Ne, y(e.data.title[0] + " "), 1), a("span", Ue, [a("span", je, [(i(!0), v(q, null, B(e.data.title[1].split(" "), (c, m) => (i(), v("span", {
          key: m
        }, y(c + " "), 1))), 128))]), a("span", Pe, y(e.data.title[2]), 1)])])) : $("", !0), S(p.$slots, "default", {}, void 0, !0)])
      }
    }
  });
const Bt = w(ze, [
    ["__scopeId", "data-v-eaeb3d0e"]
  ]),
  Oe = {
    key: 0,
    class: "agenda"
  },
  We = {
    class: "agenda-title-wrapper"
  },
  De = {
    key: 0,
    class: "team-title h1 anim-title"
  },
  Qe = {
    class: "description-wrapper"
  },
  Ge = {
    class: "team-icon"
  },
  Xe = ["innerHTML"],
  Ye = k({
    __name: "Section",
    props: {
      data: {}
    },
    setup(e) {
      return (p, l) => {
        const s = W;
        return e.data ? (i(), v("section", Oe, [a("div", We, [e.data.title ? (i(), v("h2", De, [(i(!0), v(q, null, B(e.data.title.split(" "), (t, c) => (i(), v("span", {
          key: c
        }, y(t), 1))), 128))])) : $("", !0), a("div", Qe, [a("span", Ge, [g(s, {
          icon: "smile",
          class: "inner-svg"
        })]), a("div", {
          class: "team-description h4 anim-text",
          innerHTML: e.data.description
        }, null, 8, Xe)])]), S(p.$slots, "default", {}, void 0, !0)])) : $("", !0)
      }
    }
  });
const Rt = w(Ye, [
    ["__scopeId", "data-v-2c7766f2"]
  ]),
  Je = {
    class: "input-wrapper"
  },
  Ke = ["id", "placeholder", "type", "name", "value", "inputmode", "autocomplete"],
  Ze = {
    class: "error"
  },
  et = k({
    __name: "Input",
    props: {
      modelValue: {},
      placeholder: {},
      type: {},
      name: {},
      error: {
        type: [String, Boolean]
      },
      errorMessage: {},
      autocomplete: {},
      inputmode: {}
    },
    emits: ["update:modelValue"],
    setup(e, {
      emit: p
    }) {
      const l = p;

      function s(t) {
        const m = t.target.value;
        l("update:modelValue", m)
      }
      return (t, c) => (i(), v("div", Je, [a("input", {
        id: e.name,
        class: "input t2-xb",
        placeholder: e.placeholder,
        type: e.type,
        name: e.name,
        value: e.modelValue,
        inputmode: e.inputmode || "text",
        autocomplete: e.autocomplete || "off",
        onInput: s
      }, null, 40, Ke), a("div", {
        class: I(["t2-xb error-wrapper", {
          show: e.error
        }])
      }, [a("p", Ze, y(e.errorMessage || e.error || "Error"), 1)], 2)]))
    }
  });
const tt = w(et, [
    ["__scopeId", "data-v-4872961c"]
  ]),
  at = {
    class: "textarea-wrap"
  },
  nt = ["name", "placeholder", "value"],
  ot = {
    key: 0,
    class: "caption t2-xb"
  },
  st = {
    class: "error"
  },
  lt = k({
    __name: "Textarea",
    props: {
      error: {
        type: [String, Boolean]
      },
      errorMessage: {},
      modelValue: {},
      placeholder: {},
      caption: {},
      name: {}
    },
    emits: ["update:modelValue"],
    setup(e, {
      emit: p
    }) {
      const l = p;

      function s(t) {
        const c = t.target;
        l("update:modelValue", c.value)
      }
      return (t, c) => (i(), v("div", at, [a("div", {
        class: I(["textarea-field", {
          alt: e.caption
        }])
      }, [a("textarea", {
        name: e.name,
        class: "textarea t2-xb",
        placeholder: e.placeholder,
        value: e.modelValue,
        onInput: s
      }, null, 40, nt), e.caption ? (i(), v("p", ot, y(e.caption), 1)) : $("", !0)], 2), a("div", {
        class: I(["t2-xb error-wrapper", {
          show: e.error
        }])
      }, [a("p", st, y(e.errorMessage || e.error || "Error"), 1)], 2)]))
    }
  });
const ct = w(lt, [
    ["__scopeId", "data-v-ed88b88e"]
  ]),
  it = {
    class: "form-fields"
  },
  rt = k({
    __name: "Application",
    emits: ["update"],
    setup(e, {
      emit: p
    }) {
      const l = p,
        {
          t: s
        } = E(),
        t = oe({
          name: {
            value: "",
            error: ""
          },
          lastName: {
            value: "",
            error: ""
          },
          email: {
            value: "",
            error: ""
          },
          portfolioLink: {
            value: "",
            error: ""
          },
          message: {
            value: "",
            error: ""
          }
        }),
        c = N(() => {
          let d = 0;
          return Object.keys(t).forEach(u => {
            t[u].error && d++
          }), d || 0
        }),
        m = M(!1),
        o = M("sending");
      async function r() {
        const d = f();
        if (await F(), l("update", c.value), d) {
          m.value = !0;
          try {
            await Promise.all([await $fetch("/api/form/strapi", {
              method: "post",
              body: t
            }), await $fetch("/api/form/mail", {
              method: "post",
              body: t
            })]), o.value = "success"
          } catch (u) {
            console.log(u), o.value = "error"
          } finally {
            setTimeout(() => {
              m.value = !1, o.value = "sending", h()
            }, 1e3)
          }
        }
      }

      function f() {
        let d = !0;
        return Object.keys(t).forEach(u => {
          const _ = u,
            b = t[_];
          b.value ? _ === "email" && !ce(b.value).isValid ? (b.error = "Invalid email", d = !1) : b.error = "" : (b.error = "Required", d = !1)
        }), d
      }

      function h() {
        Object.keys(t).forEach(d => {
          const _ = t[d];
          _.value = ""
        })
      }
      return (d, u) => {
        const _ = tt,
          b = ct,
          L = le;
        return i(), v("form", {
          class: I(["form", {
            sending: n(m)
          }])
        }, [a("div", it, [g(_, {
          modelValue: n(t).name.value,
          "onUpdate:modelValue": u[0] || (u[0] = x => n(t).name.value = x),
          placeholder: n(s)("aboutUs.form.firstName"),
          type: "text",
          name: "name",
          error: n(t).name.error
        }, null, 8, ["modelValue", "placeholder", "error"]), g(_, {
          modelValue: n(t).lastName.value,
          "onUpdate:modelValue": u[1] || (u[1] = x => n(t).lastName.value = x),
          placeholder: n(s)("aboutUs.form.lastName"),
          type: "text",
          name: "last name",
          error: n(t).lastName.error
        }, null, 8, ["modelValue", "placeholder", "error"]), g(_, {
          modelValue: n(t).email.value,
          "onUpdate:modelValue": u[2] || (u[2] = x => n(t).email.value = x),
          placeholder: n(s)("aboutUs.form.email"),
          type: "email",
          name: "email",
          error: n(t).email.error
        }, null, 8, ["modelValue", "placeholder", "error"]), g(_, {
          modelValue: n(t).portfolioLink.value,
          "onUpdate:modelValue": u[3] || (u[3] = x => n(t).portfolioLink.value = x),
          placeholder: n(s)("aboutUs.form.portfolioLink"),
          type: "text",
          name: "portfolio",
          error: n(t).portfolioLink.error
        }, null, 8, ["modelValue", "placeholder", "error"]), g(b, {
          modelValue: n(t).message.value,
          "onUpdate:modelValue": u[4] || (u[4] = x => n(t).message.value = x),
          name: "message",
          placeholder: n(s)("aboutUs.form.message"),
          error: n(t).message.error
        }, null, 8, ["modelValue", "placeholder", "error"])]), a("button", {
          class: "form-button",
          type: "submit",
          onClick: ne(r, ["prevent"])
        }, [g(L, {
          text: n(m) ? n(o) : n(s)("aboutUs.form.sendButton"),
          theme: "brown"
        }, null, 8, ["text"])])], 2)
      }
    }
  });
const dt = w(rt, [
    ["__scopeId", "data-v-85ad082b"]
  ]),
  ut = {
    class: "accordion-title t1"
  },
  _t = {
    class: "accordion-icon t1"
  },
  mt = {
    class: "accordion-body"
  },
  pt = ["innerHTML"],
  vt = k({
    __name: "Item",
    props: {
      question: {},
      answer: {},
      isActive: {
        type: Boolean
      }
    },
    emits: ["toggle"],
    setup(e, {
      emit: p
    }) {
      const l = p;
      D(m);
      const s = A(),
        t = M(0),
        c = M(0);

      function m() {
        s.value && (t.value = s.value.clientHeight)
      }

      function o(r) {
        c.value = r
      }
      return T(m), (r, f) => {
        const h = dt;
        return i(), v("li", {
          class: I(["accordion-item", {
            active: e.isActive
          }])
        }, [a("div", {
          class: "accordion-header",
          onClick: f[0] || (f[0] = d => l("toggle"))
        }, [a("h4", ut, y(e.question), 1), a("span", _t, [a("span", null, y(e.isActive ? "-" : "+"), 1)])]), a("div", mt, [a("div", {
          class: "content-wrapper",
          style: O({
            "--content-height": n(t),
            "--height-adjustment": n(c)
          })
        }, [a("div", {
          ref_key: "contentRef",
          ref: s,
          class: "accordion-content"
        }, [e.answer ? (i(), v("div", {
          key: 0,
          class: "accordion-text t1_1",
          innerHTML: e.answer
        }, null, 8, pt)) : (i(), V(h, {
          key: 1,
          onUpdate: o
        }))], 512)], 4), f[1] || (f[1] = a("div", {
          class: "line"
        }, null, -1))])], 2)
      }
    }
  });
const ft = w(vt, [
    ["__scopeId", "data-v-ccbef92c"]
  ]),
  ht = k({
    __name: "index",
    props: {
      data: {},
      hideContactFormItem: {
        type: Boolean
      }
    },
    setup(e) {
      const {
        t: p
      } = E(), l = M(-1);

      function s(o) {
        l.value = l.value !== o ? o : -1
      }
      const t = A();

      function c(o) {
        const r = o.target;
        !t.value || r === t.value || t.value.contains(r) || (l.value = -1)
      }

      function m() {
        var r;
        const o = (r = t.value) == null ? void 0 : r.querySelectorAll(".line");
        !t.value || !(o != null && o.length) || C.to(o, {
          scrollTrigger: {
            trigger: t.value,
            start: "top bottom"
          },
          scaleX: 1,
          duration: 1,
          stagger: .05,
          ease: "default-ease"
        })
      }
      return T(() => {
        document.addEventListener("click", c), m()
      }), U(() => document.removeEventListener("click", c)), (o, r) => {
        const f = ft;
        return e.data ? (i(), v("ul", {
          key: 0,
          ref_key: "listRef",
          ref: t,
          class: "accordion"
        }, [(i(!0), v(q, null, B(e.data, (h, d) => (i(), V(f, {
          key: d,
          question: h.question,
          answer: h.answer,
          "is-active": d === n(l),
          onToggle: u => s(d)
        }, null, 8, ["question", "answer", "is-active", "onToggle"]))), 128)), e.hideContactFormItem ? $("", !0) : (i(), V(f, {
          key: 0,
          question: n(p)("aboutUs.form.title"),
          "is-active": n(l) === e.data.length,
          onToggle: r[0] || (r[0] = h => s(e.data.length))
        }, null, 8, ["question", "is-active"]))], 512)) : $("", !0)
      }
    }
  }),
  gt = {
    key: 0,
    class: "faq"
  },
  bt = {
    class: "title-wrapper"
  },
  yt = {
    class: "faq-title h1 anim-title"
  },
  xt = {
    class: "faq-description h4 anim-title"
  },
  $t = {
    class: "grid-container"
  },
  kt = {
    class: "circle-wrapper"
  },
  wt = {
    class: "faq-icon"
  },
  It = {
    class: "faq-text inset"
  },
  Mt = {
    class: "accordion-wrapper"
  },
  Ct = k({
    __name: "FAQ",
    props: {
      data: {},
      hideContactFormItem: {
        type: Boolean
      }
    },
    setup(e) {
      const {
        t: p
      } = E();
      return (l, s) => {
        const t = W,
          c = se,
          m = ht;
        return e.data ? (i(), v("section", gt, [a("div", bt, [a("h2", yt, y(e.data.title), 1), a("p", xt, y(e.data.description), 1)]), a("div", $t, [a("div", kt, [a("div", wt, [g(t, {
          icon: "smile"
        })]), a("span", It, [g(c, {
          class: "inner-svg",
          text: n(p)("aboutUs.faqCircle"),
          radius: 85
        }, null, 8, ["text"])])]), a("div", Mt, [g(m, {
          data: e.data.questions,
          "hide-contact-form-item": e.hideContactFormItem
        }, null, 8, ["data", "hide-contact-form-item"])])])])) : $("", !0)
      }
    }
  });
const Ft = w(Ct, [
  ["__scopeId", "data-v-e6c4290f"]
]);
export {
  Et as _, Ht as a, qt as b, Bt as c, Rt as d, tt as e, ct as f, Ft as g
};