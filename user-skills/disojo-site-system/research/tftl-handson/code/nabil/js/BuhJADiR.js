/* https://nabilissa.com/_nuxt/BuhJADiR.js */
import {
  p as publicAssetsURL,
  d as defineComponent,
  u as useState,
  o as openBlock,
  c as createElementBlock,
  n as normalizeClass,
  a as unref,
  b as createBaseVNode,
  g as gsapWithCSS,
  _ as _export_sfc,
  e as nextTick,
  f as createVNode,
  h as __nuxt_component_1$h,
  i as onMounted,
  j as onBeforeUnmount,
  r as ref,
  S as SplitText,
  t as toDisplayString,
  F as Fragment,
  k as renderList,
  l as ScrollTrigger,
  m as createTextVNode,
  q as createCommentVNode,
  s as createBlock,
  v as resolveDynamicComponent,
  w as withCtx,
  x as h,
  y as toRef,
  z as computed,
  A as toValue,
  B as isRef,
  C as watch,
  D as reactive,
  E as readonly,
  G as inject,
  H as watchEffect,
  I as shallowRef,
  J as getCurrentInstance,
  K as provide,
  L as mergeProps,
  M as resolveDirective,
  N as withDirectives,
  O as withModifiers,
  P as __nuxt_component_2$8,
  Q as __nuxt_component_0$i,
  R as createStaticVNode,
  T as useRouter,
  U as useNuxtApp,
  V as onNuxtReady,
  W as requestIdleCallback,
  X as cancelIdleCallback,
  Y as resolveComponent,
  Z as parseQuery,
  $ as encodeRoutePath,
  a0 as resolveRouteObject,
  a1 as preloadRouteComponents,
  a2 as navigateTo,
  a3 as hashMode,
  a4 as hasProtocol,
  a5 as joinURL,
  a6 as nuxtLinkDefaults,
  a7 as withTrailingSlash,
  a8 as withoutTrailingSlash,
  a9 as useRuntimeConfig,
  aa as onUnmounted
} from "./Ct55yWcp.js";
const _imports_0$c = publicAssetsURL("/white.svg"),
  _imports_1$1 = publicAssetsURL("/black.svg"),
  _sfc_main$W = defineComponent({
    __name: "logo",
    setup(e) {
      const t = useState("header-black"),
        r = () => {
          gsapWithCSS.to(window, {
            scrollTo: 0,
            duration: 1
          })
        };
      return (i, s) => (openBlock(), createElementBlock("div", {
        class: normalizeClass(["logo", {
          black: unref(t)
        }]),
        onClick: r
      }, [...s[0] || (s[0] = [createBaseVNode("img", {
        class: "logo-white",
        src: _imports_0$c,
        alt: ""
      }, null, -1), createBaseVNode("img", {
        class: "logo-black",
        src: _imports_1$1,
        alt: ""
      }, null, -1)])], 2))
    }
  }),
  __nuxt_component_0$h = _export_sfc(_sfc_main$W, [
    ["__scopeId", "data-v-0261d1e5"]
  ]);

function useLockScroll(e = !0) {
  const t = useState("lenis");
  e ? t.value.stop() : t.value.start()
}
async function useOpenForm() {
  const e = useState("open-form");
  e.value = !0, useLockScroll(!0), await nextTick();
  const t = gsapWithCSS.timeline();
  t.set(".form-wrap", {
    display: "block"
  }), t.to(".form-wrap .blur", {
    opacity: 1
  }), t.to(".form-wrap .form-container", {
    yPercent: 0,
    y: 0,
    duration: 1
  }, "<")
}
const _hoisted_1$S = {
    class: "header-btn"
  },
  _sfc_main$V = defineComponent({
    __name: "btn",
    setup(e) {
      const t = useState("open-menu"),
        r = useState("header-black");
      return (i, s) => {
        const n = __nuxt_component_1$h;
        return openBlock(), createElementBlock("div", _hoisted_1$S, [createVNode(n, {
          text: "Get in Touch",
          "is-black": unref(t) || unref(r),
          onClick: "useOpenForm" in i ? i.useOpenForm : unref(useOpenForm)
        }, null, 8, ["is-black", "onClick"])])
      }
    }
  }),
  __nuxt_component_1$g = _export_sfc(_sfc_main$V, [
    ["__scopeId", "data-v-f763b775"]
  ]);

function useViewport() {
  const e = {
      desktop: 1024
    },
    t = ref(!0),
    r = ref(!1);

  function i() {
    t.value = window.innerWidth >= e.desktop, r.value = window.innerWidth < e.desktop
  }
  return onMounted(() => {
    i(), window.addEventListener("resize", i)
  }), onBeforeUnmount(() => {
    window.removeEventListener("resize", i)
  }), {
    isDesktop: t,
    isMobile: r
  }
}
const _sfc_main$U = defineComponent({
    __name: "burger",
    setup(e) {
      const t = useState("open-menu"),
        r = useState("header-black"),
        i = useState("was-header-black"),
        {
          isMobile: s
        } = useViewport(),
        n = () => {
          if (t.value) {
            t.value = !1, s.value && (r.value = i.value), useLockScroll(!1);
            const a = gsapWithCSS.timeline({
              onComplete() {
                gsapWithCSS.set(".burger-wrap", {
                  pointerEvents: "auto"
                })
              }
            });
            a.set(".burger-wrap", {
              pointerEvents: "none"
            }), a.to("menu.menu", {
              xPercent: 105,
              duration: 1
            }), a.to(".menu-wrap .blur", {
              opacity: 0,
              duration: 1
            }, "<"), a.set(".menu .nav-item, .menu .contact", {
              opacity: 0,
              y: "2rem"
            }), a.set(".menu-wrap", {
              display: "none"
            })
          } else {
            t.value = !0, s.value && (i.value = r.value, r.value = !0), useLockScroll(!0);
            const a = gsapWithCSS.timeline({
              onComplete() {
                gsapWithCSS.set(".burger-wrap", {
                  pointerEvents: "auto"
                })
              }
            });
            a.set(".burger-wrap", {
              pointerEvents: "none"
            }), a.set(".menu-wrap", {
              display: "block"
            }), a.set(".menu .nav-item, .menu .contact", {
              opacity: 0,
              y: "2rem"
            }), a.to(".menu-wrap .blur", {
              opacity: 1,
              duration: 1
            }), a.to("menu.menu", {
              xPercent: 0,
              x: 0,
              duration: 1
            }, "<"), a.to(".menu .nav-item", {
              opacity: 1,
              y: 0,
              stagger: .1,
              duration: .6,
              ease: "power2.out"
            }), a.to(".menu .contact", {
              opacity: 1,
              y: 0,
              duration: .6,
              ease: "power2.out"
            }, "<50%")
          }
        };
      return (a, l) => (openBlock(), createElementBlock("div", {
        class: normalizeClass(["burger-wrap", {
          open: unref(t),
          black: unref(r)
        }])
      }, [createBaseVNode("button", {
        class: "burger",
        onClick: n
      }, [...l[0] || (l[0] = [createBaseVNode("span", null, null, -1), createBaseVNode("span", null, null, -1)])])], 2))
    }
  }),
  __nuxt_component_2$7 = _export_sfc(_sfc_main$U, [
    ["__scopeId", "data-v-66c93a80"]
  ]),
  _hoisted_1$R = {
    class: "header"
  },
  _sfc_main$T = defineComponent({
    __name: "index",
    setup(e) {
      return useState("header-black", () => !1), (t, r) => {
        const i = __nuxt_component_0$h,
          s = __nuxt_component_1$g,
          n = __nuxt_component_2$7;
        return openBlock(), createElementBlock("header", _hoisted_1$R, [createVNode(i), createVNode(s), createVNode(n)])
      }
    }
  }),
  __nuxt_component_0$g = _export_sfc(_sfc_main$T, [
    ["__scopeId", "data-v-3406ae5c"]
  ]),
  _hoisted_1$Q = {
    class: "animation-container"
  },
  _hoisted_2$w = {
    class: "link-text"
  },
  _hoisted_3$p = {
    class: "link-text"
  },
  _sfc_main$S = defineComponent({
    __name: "Link",
    props: {
      text: {}
    },
    setup(e, {
      expose: t
    }) {
      const r = {
          duration: 500,
          easing: "0.83, 0, 0.17, 1"
        },
        {
          isMobile: i
        } = useViewport(),
        s = ref(null);
      let n = null,
        a;
      onMounted(() => {
        !s.value || i.value || (n = new SplitText(s.value.querySelectorAll(".link-text"), {
          type: "chars"
        }), a = gsapWithCSS.timeline({
          paused: !0
        }), a.to(n.chars, {
          y: "-100%",
          duration: r.duration / 1e3,
          stagger: {
            each: r.duration / n.chars.length / 5e3,
            axis: "x"
          },
          ease: `cubic-bezier(${r.easing})`,
          force3D: !0
        }), n || (n = new SplitText(s.value, {
          type: "chars, words"
        })))
      });
      const l = () => a?.play(),
        o = () => a?.reverse();
      return t({
        onEnter: l,
        onLeave: o
      }), onBeforeUnmount(() => {
        n && (n.revert(), n = null)
      }), (c, f) => (openBlock(), createElementBlock("div", _hoisted_1$Q, [createBaseVNode("div", {
        ref_key: "link",
        ref: s,
        class: "link",
        onMouseenter: l,
        onMouseleave: o
      }, [createBaseVNode("div", _hoisted_2$w, toDisplayString(e.text), 1), createBaseVNode("div", _hoisted_3$p, toDisplayString(e.text), 1)], 544)]))
    }
  }),
  __nuxt_component_2$6 = _export_sfc(_sfc_main$S, [
    ["__scopeId", "data-v-22443bec"]
  ]),
  _sfc_main$R = {},
  _hoisted_1$P = {
    class: "icon",
    viewBox: "0 0 20 20",
    fill: "none"
  };

function _sfc_render$r(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$P, [...t[0] || (t[0] = [createBaseVNode("path", {
    d: "M0 10H20",
    stroke: "#0B0B0B"
  }, null, -1), createBaseVNode("path", {
    d: "M10 0L10 20",
    stroke: "#0B0B0B"
  }, null, -1)])])
}
const __nuxt_component_1$f = _export_sfc(_sfc_main$R, [
  ["render", _sfc_render$r]
]);

function getViewport(e) {
  const t = window.innerWidth;
  let r = "mobile";
  return t >= 1024 ? r = "desktop" : r = "mobile", e === void 0 ? r : e === r
}
async function useCloseMenu() {
  const e = useState("open-menu"),
    t = useState("header-black"),
    r = useState("was-header-black");
  e.value = !1, getViewport("mobile") && (t.value = r.value), useLockScroll(!1), await nextTick();
  const i = gsapWithCSS.timeline({
    onComplete() {
      gsapWithCSS.set(".burger-wrap", {
        pointerEvents: "auto"
      })
    }
  });
  i.set(".burger-wrap", {
    pointerEvents: "none"
  }), i.to("menu.menu", {
    xPercent: 105,
    duration: 1
  }), i.to(".menu-wrap .blur", {
    opacity: 0,
    duration: 1
  }, "<"), i.set(".menu .nav-item, .menu .contact", {
    opacity: 0,
    y: "2rem"
  }), i.set(".menu-wrap", {
    display: "none"
  })
}
const _hoisted_1$O = {
    class: "nav"
  },
  _hoisted_2$v = ["href"],
  _hoisted_3$o = {
    class: "item-chapter l1-bold"
  },
  _hoisted_4$l = {
    class: "item-chapter l1-bold"
  },
  _hoisted_5$f = {
    class: "item-chapter-text"
  },
  _hoisted_6$d = {
    class: "submenu"
  },
  _hoisted_7$a = ["href", "onMouseenter", "onMouseleave", "onClick"],
  _hoisted_8$8 = {
    class: "item-chapter l1-bold"
  },
  _hoisted_9$5 = {
    class: "item-chapter-text"
  },
  _hoisted_10$5 = {
    class: "item-chapter l1-bold"
  },
  _sfc_main$Q = defineComponent({
    __name: "nav",
    setup(e) {
      const t = [{
          chapter: "chapter I",
          name: "About",
          link: "stChapterOne"
        }, {
          chapter: "chapter II-IV",
          name: "works",
          submenu: [{
            chapter: "chapter II",
            name: "interior",
            link: "stChapterTwo"
          }, {
            chapter: "chapter III",
            name: "object",
            link: "stChapterThree"
          }, {
            chapter: "chapter IV",
            name: "architect",
            link: "stChapterFour"
          }]
        }, {
          chapter: "chapter v",
          name: "contact",
          link: "stChapterFive"
        }],
        r = ref(),
        i = ref(),
        s = ref(),
        n = ref([]),
        a = ref(!1),
        {
          isDesktop: l
        } = useViewport(),
        o = () => {
          a.value ? (a.value = !1, gsapWithCSS.to(".menu .submenu", {
            height: 0
          })) : (a.value = !0, gsapWithCSS.to(".menu .submenu", {
            height: "auto"
          }))
        },
        c = f => {
          useCloseMenu();
          const b = ScrollTrigger.getById(f),
            u = l.value ? window.innerHeight : window.innerHeight / 2;
          b && gsapWithCSS.to(window, {
            scrollTo: b.start + u,
            duration: 1,
            ease: "power1.out"
          })
        };
      return (f, b) => {
        const u = __nuxt_component_2$6,
          y = __nuxt_component_1$f;
        return openBlock(), createElementBlock("nav", _hoisted_1$O, [createBaseVNode("button", {
          href: t[0].link,
          class: "item nav-item",
          onMouseenter: b[0] || (b[0] = g => unref(r)?.onEnter()),
          onMouseleave: b[1] || (b[1] = g => unref(r)?.onLeave()),
          onClick: b[2] || (b[2] = g => c(t[0].link))
        }, [createBaseVNode("span", _hoisted_3$o, toDisplayString(t[0].chapter), 1), createVNode(u, {
          ref_key: "link0",
          ref: r,
          class: "item-name h2-thin",
          text: t[0].name
        }, null, 8, ["text"]), b[8] || (b[8] = createBaseVNode("span", {
          class: "item-line"
        }, [createBaseVNode("span", {
          class: "item-line-hover"
        })], -1))], 40, _hoisted_2$v), createBaseVNode("div", {
          class: normalizeClass(["item-wrap nav-item", {
            open: unref(a)
          }])
        }, [createBaseVNode("div", {
          class: "item",
          onMouseenter: b[3] || (b[3] = g => unref(i)?.onEnter()),
          onMouseleave: b[4] || (b[4] = g => unref(i)?.onLeave()),
          onClick: o
        }, [createBaseVNode("span", _hoisted_4$l, [createBaseVNode("span", _hoisted_5$f, toDisplayString(t[1].chapter), 1)]), createVNode(u, {
          ref_key: "link1",
          ref: i,
          class: "item-name h2-thin",
          text: t[1].name
        }, null, 8, ["text"]), createVNode(y, {
          class: "item-plus"
        })], 32), createBaseVNode("div", _hoisted_6$d, [(openBlock(!0), createElementBlock(Fragment, null, renderList(t[1].submenu, (g, v) => (openBlock(), createElementBlock("button", {
          key: v,
          class: "submenu-item",
          href: g.link,
          onMouseenter: E => unref(n)[v].onEnter(),
          onMouseleave: E => unref(n)[v].onLeave(),
          onClick: E => c(g.link)
        }, [createBaseVNode("span", _hoisted_8$8, [createBaseVNode("span", _hoisted_9$5, toDisplayString(g.chapter), 1)]), createVNode(u, {
          ref_for: !0,
          ref: E => unref(n)[v] = E,
          class: "item-name h2-thin",
          text: g.name
        }, null, 8, ["text"])], 40, _hoisted_7$a))), 128))]), b[9] || (b[9] = createBaseVNode("span", {
          class: "item-line"
        }, [createBaseVNode("span", {
          class: "item-line-hover"
        })], -1))], 2), createBaseVNode("button", {
          class: "item nav-item",
          onMouseenter: b[5] || (b[5] = g => unref(s)?.onEnter()),
          onMouseleave: b[6] || (b[6] = g => unref(s)?.onLeave()),
          onClick: b[7] || (b[7] = g => c(t[2].link))
        }, [createBaseVNode("span", _hoisted_10$5, toDisplayString(t[2].chapter), 1), createVNode(u, {
          ref_key: "link2",
          ref: s,
          class: "item-name h2-thin",
          text: t[2].name
        }, null, 8, ["text"]), b[10] || (b[10] = createBaseVNode("span", {
          class: "item-line"
        }, [createBaseVNode("span", {
          class: "item-line-hover"
        })], -1))], 32)])
      }
    }
  }),
  __nuxt_component_0$f = _export_sfc(_sfc_main$Q, [
    ["__scopeId", "data-v-590d5973"]
  ]),
  _sfc_main$P = defineComponent({
    __name: "LinkWithLine",
    props: {
      text: {},
      isWhite: {
        type: Boolean
      }
    },
    setup(e) {
      const t = ref(null),
        r = () => {
          t.value && gsapWithCSS.set(t.value, {
            "--duration": "1000ms",
            "--easing": "0.83, 0, 0.17, 1"
          })
        };
      return onMounted(() => {
        r()
      }), (i, s) => (openBlock(), createElementBlock("div", {
        class: normalizeClass(["animation-container", {
          white: e.isWhite
        }])
      }, [createBaseVNode("div", {
        ref_key: "link",
        ref: t,
        class: "link"
      }, toDisplayString(e.text), 513)], 2))
    }
  }),
  __nuxt_component_5$2 = _export_sfc(_sfc_main$P, [
    ["__scopeId", "data-v-6170e157"]
  ]),
  _hoisted_1$N = {
    class: "contact"
  },
  _hoisted_2$u = {
    class: "col-1"
  },
  _hoisted_3$n = {
    class: "item phone"
  },
  _hoisted_4$k = {
    class: "b1-bold",
    href: "tel:+13056801920"
  },
  _hoisted_5$e = {
    class: "item mail"
  },
  _hoisted_6$c = {
    class: "b1-bold",
    href: "mailTo:info@nabilissa.com"
  },
  _hoisted_7$9 = {
    class: "col-2"
  },
  _hoisted_8$7 = {
    class: "item socials"
  },
  _hoisted_9$4 = ["href"],
  _hoisted_10$4 = {
    class: "foot"
  },
  _hoisted_11$2 = {
    class: "b1-light",
    href: "/privacy-policy.pdf",
    target: "_blank"
  },
  _hoisted_12$2 = {
    class: "b1-light",
    href: "/NI profile .pdf",
    target: "_blank"
  },
  _hoisted_13$1 = {
    class: "copy b1-light"
  },
  _sfc_main$O = defineComponent({
    __name: "contact",
    setup(e) {
      const t = [{
        text: "Instagram",
        link: "https://www.instagram.com/nabilissadesign/"
      }, {
        text: "Facebook",
        link: "https://www.facebook.com/nabilissadesign"
      }, {
        text: "Youtube",
        link: "https://www.youtube.com/@NabilIssa"
      }, {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/nabil-issa-8702894"
      }, {
        text: "Pinterest",
        link: "https://pin.it/5t4HmLENl"
      }];
      return (r, i) => {
        const s = __nuxt_component_2$6,
          n = __nuxt_component_5$2;
        return openBlock(), createElementBlock("div", _hoisted_1$N, [createBaseVNode("div", _hoisted_2$u, [createBaseVNode("div", _hoisted_3$n, [i[1] || (i[1] = createBaseVNode("p", {
          class: "item-title b1-light"
        }, "Phone", -1)), createBaseVNode("a", _hoisted_4$k, [createVNode(s, {
          text: "+1-305-680-1920"
        }), i[0] || (i[0] = createBaseVNode("span", {
          class: "whatsapp b1-light"
        }, "(whatsapp)", -1))])]), createBaseVNode("div", _hoisted_5$e, [i[2] || (i[2] = createBaseVNode("p", {
          class: "item-title b1-light"
        }, "Mail", -1)), createBaseVNode("a", _hoisted_6$c, [createVNode(s, {
          text: "info@nabilissa.com"
        })])]), i[3] || (i[3] = createBaseVNode("div", {
          class: "item offices"
        }, [createBaseVNode("p", {
          class: "item-title b1-light"
        }, "Offices"), createBaseVNode("p", {
          class: "b1-bold"
        }, "HQ in Miami")], -1))]), createBaseVNode("div", _hoisted_7$9, [createBaseVNode("div", _hoisted_8$7, [i[4] || (i[4] = createBaseVNode("p", {
          class: "item-title b1-light"
        }, "Socials", -1)), (openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          text: a,
          link: l
        }, o) => createBaseVNode("a", {
          key: o,
          target: "_blank",
          href: l,
          class: "b1-bold"
        }, [createVNode(s, {
          text: a
        }, null, 8, ["text"])], 8, _hoisted_9$4)), 64))]), createBaseVNode("div", _hoisted_10$4, [createBaseVNode("a", _hoisted_11$2, [createVNode(n, {
          text: "Privacy Policy"
        })]), createBaseVNode("a", _hoisted_12$2, [createVNode(n, {
          text: "Presentation"
        })]), createBaseVNode("p", _hoisted_13$1, "© " + toDisplayString(new Date().getFullYear()) + " N.I.", 1)])])])
      }
    }
  }),
  __nuxt_component_1$e = _export_sfc(_sfc_main$O, [
    ["__scopeId", "data-v-ef714544"]
  ]),
  _sfc_main$N = {},
  _hoisted_1$M = {
    class: "menu-wrap"
  },
  _hoisted_2$t = {
    class: "menu",
    "data-lenis-prevent": ""
  };

function _sfc_render$q(e, t) {
  const r = __nuxt_component_0$f,
    i = __nuxt_component_1$e;
  return openBlock(), createElementBlock("div", _hoisted_1$M, [createBaseVNode("div", {
    class: "blur",
    onClick: t[0] || (t[0] = (...s) => ("useCloseMenu" in e ? e.useCloseMenu : unref(useCloseMenu)) && ("useCloseMenu" in e ? e.useCloseMenu : unref(useCloseMenu))(...s))
  }), createBaseVNode("menu", _hoisted_2$t, [createVNode(r), createVNode(i)])])
}
const __nuxt_component_1$d = _export_sfc(_sfc_main$N, [
    ["render", _sfc_render$q],
    ["__scopeId", "data-v-2093fdf1"]
  ]),
  _hoisted_1$L = {
    key: 0,
    class: "cookie"
  },
  _sfc_main$M = defineComponent({
    __name: "TheCookie",
    setup(e) {
      const t = useState("show-cookie", () => !1);
      onMounted(() => {
        localStorage.getItem("cookie-consent") !== "granted" && (t.value = !0)
      });

      function r() {
        localStorage.setItem("cookie-consent", "granted"), gsapWithCSS.to(".cookie", {
          yPercent: 200,
          onComplete() {
            t.value = !1
          }
        })
      }
      return (i, s) => unref(t) ? (openBlock(), createElementBlock("div", _hoisted_1$L, [s[0] || (s[0] = createBaseVNode("p", {
        class: "text l1-thin"
      }, [createTextVNode(" We use "), createBaseVNode("a", {
        href: "#",
        class: "l1-bold",
        target: "_blank"
      }, "cookies"), createTextVNode(" for analytics. ")], -1)), createBaseVNode("button", {
        class: "btn l1-bold",
        onClick: r
      }, "ok")])) : createCommentVNode("", !0)
    }
  }),
  __nuxt_component_2$5 = _export_sfc(_sfc_main$M, [
    ["__scopeId", "data-v-16c5a4cb"]
  ]),
  _sfc_main$L = {},
  _hoisted_1$K = {
    class: "icon",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function _sfc_render$p(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, [...t[0] || (t[0] = [createBaseVNode("path", {
    d: "M13 1L1 13M1 1L13 13",
    stroke: "#0B0B0B"
  }, null, -1)])])
}
const __nuxt_component_0$e = _export_sfc(_sfc_main$L, [
    ["render", _sfc_render$p]
  ]),
  _hoisted_1$J = {
    class: "text-shine"
  },
  _sfc_main$K = defineComponent({
    __name: "TextShine",
    props: {
      text: {}
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("div", _hoisted_1$J, toDisplayString(e.text), 1))
    }
  }),
  __nuxt_component_0$d = _export_sfc(_sfc_main$K, [
    ["__scopeId", "data-v-0235e11e"]
  ]),
  _sfc_main$J = {},
  _hoisted_1$I = {
    class: "form-head"
  },
  _hoisted_2$s = {
    class: "form-title"
  };

function _sfc_render$o(e, t) {
  const r = __nuxt_component_0$d;
  return openBlock(), createElementBlock("div", _hoisted_1$I, [createBaseVNode("div", _hoisted_2$s, [t[0] || (t[0] = createBaseVNode("h2", {
    class: "h1-thin"
  }, "Let", -1)), createVNode(r, {
    text: "Ideas",
    class: "h1-book"
  }), t[1] || (t[1] = createBaseVNode("h2", {
    class: "h1-thin"
  }, "Take", -1)), t[2] || (t[2] = createBaseVNode("h2", {
    class: "h1-thin"
  }, "Shape", -1))]), t[3] || (t[3] = createBaseVNode("div", {
    class: "form-descr basic-descr b1-light"
  }, null, -1))])
}
const __nuxt_component_1$c = _export_sfc(_sfc_main$J, [
    ["render", _sfc_render$o],
    ["__scopeId", "data-v-56cb6319"]
  ]),
  _hoisted_1$H = {
    class: "form-contact"
  },
  _hoisted_2$r = {
    class: "form-contact-item phone"
  },
  _hoisted_3$m = {
    class: "b1-bold",
    href: "tel:+13056801920"
  },
  _hoisted_4$j = {
    class: "form-contact-item form-contact-mail"
  },
  _hoisted_5$d = {
    class: "b1-bold",
    href: "mailTo:info@nabilissa.com"
  },
  _hoisted_6$b = {
    class: "form-contact-item form-contact-socials"
  },
  _hoisted_7$8 = ["href"],
  _sfc_main$I = defineComponent({
    __name: "contact",
    setup(e) {
      const t = [{
        text: "Instagram",
        link: "https://www.instagram.com/nabilissadesign/"
      }, {
        text: "Facebook",
        link: "https://www.facebook.com/nabilissadesign"
      }, {
        text: "Youtube",
        link: "https://www.youtube.com/@NabilIssa"
      }, {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/nabil-issa-8702894"
      }, {
        text: "Pinterest",
        link: "https://pin.it/5t4HmLENl"
      }];
      return (r, i) => {
        const s = __nuxt_component_2$6;
        return openBlock(), createElementBlock("div", _hoisted_1$H, [createBaseVNode("div", _hoisted_2$r, [i[1] || (i[1] = createBaseVNode("p", {
          class: "form-contact-item-title b1-light"
        }, "Phone", -1)), createBaseVNode("a", _hoisted_3$m, [createVNode(s, {
          text: "+1-305-680-1920"
        }), i[0] || (i[0] = createBaseVNode("span", {
          class: "whatsapp b1-light"
        }, "(whatsapp)", -1))])]), createBaseVNode("div", _hoisted_4$j, [i[2] || (i[2] = createBaseVNode("p", {
          class: "form-contact-item-title b1-light"
        }, "Mail", -1)), createBaseVNode("a", _hoisted_5$d, [createVNode(s, {
          text: "info@nabilissa.com"
        })])]), i[4] || (i[4] = createBaseVNode("div", {
          class: "form-contact-item form-contact-offices"
        }, [createBaseVNode("p", {
          class: "form-contact-item-title b1-light"
        }, "Offices"), createBaseVNode("p", {
          class: "b1-bold"
        }, "HQ in Miami")], -1)), createBaseVNode("div", _hoisted_6$b, [i[3] || (i[3] = createBaseVNode("p", {
          class: "form-contact-item-title b1-light"
        }, "Socials", -1)), (openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          text: n,
          link: a
        }, l) => createBaseVNode("a", {
          key: l,
          target: "_blank",
          href: a,
          class: "b1-bold"
        }, [createVNode(s, {
          text: n
        }, null, 8, ["text"])], 8, _hoisted_7$8)), 64))])])
      }
    }
  }),
  __nuxt_component_0$c = _export_sfc(_sfc_main$I, [
    ["__scopeId", "data-v-9dd7bffa"]
  ]),
  _sfc_main$H = defineComponent({
    __name: "label",
    props: {
      text: {},
      forId: {},
      active: {
        type: Boolean
      }
    },
    setup(e) {
      return (t, r) => (openBlock(), createBlock(resolveDynamicComponent(e.forId ? "label" : "div"), {
        for: e.forId,
        class: normalizeClass(["label b1-light", {
          active: e.active
        }])
      }, {
        default: withCtx(() => [createBaseVNode("span", null, toDisplayString(e.text), 1)]),
        _: 1
      }, 8, ["for", "class"]))
    }
  }),
  __nuxt_component_0$b = _export_sfc(_sfc_main$H, [
    ["__scopeId", "data-v-d49c2eb6"]
  ]);

function isCallable(e) {
  return typeof e == "function"
}

function isNullOrUndefined(e) {
  return e == null
}
const isObject$1 = e => e !== null && !!e && typeof e == "object" && !Array.isArray(e);

function isIndex(e) {
  return Number(e) >= 0
}

function toNumber$1(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t
}

function isObjectLike(e) {
  return typeof e == "object" && e !== null
}

function getTag(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}

function isPlainObject(e) {
  if (!isObjectLike(e) || getTag(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t
}

function merge(e, t) {
  return Object.keys(t).forEach(r => {
    if (isPlainObject(t[r]) && isPlainObject(e[r])) {
      e[r] || (e[r] = {}), merge(e[r], t[r]);
      return
    }
    e[r] = t[r]
  }), e
}

function normalizeFormPath(e) {
  const t = e.split(".");
  if (!t.length) return "";
  let r = String(t[0]);
  for (let i = 1; i < t.length; i++) {
    if (isIndex(t[i])) {
      r += `[${t[i]}]`;
      continue
    }
    r += `.${t[i]}`
  }
  return r
}
const RULES = {};

function resolveRule(e) {
  return RULES[e]
}

function set(e, t, r) {
  typeof r.value == "object" && (r.value = klona(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value
}

function klona(e) {
  if (typeof e != "object") return e;
  var t = 0,
    r, i, s, n = Object.prototype.toString.call(e);
  if (n === "[object Object]" ? s = Object.create(e.__proto__ || null) : n === "[object Array]" ? s = Array(e.length) : n === "[object Set]" ? (s = new Set, e.forEach(function(a) {
      s.add(klona(a))
    })) : n === "[object Map]" ? (s = new Map, e.forEach(function(a, l) {
      s.set(klona(l), klona(a))
    })) : n === "[object Date]" ? s = new Date(+e) : n === "[object RegExp]" ? s = new RegExp(e.source, e.flags) : n === "[object DataView]" ? s = new e.constructor(klona(e.buffer)) : n === "[object ArrayBuffer]" ? s = e.slice(0) : n.slice(-6) === "Array]" && (s = new e.constructor(e)), s) {
    for (i = Object.getOwnPropertySymbols(e); t < i.length; t++) set(s, i[t], Object.getOwnPropertyDescriptor(e, i[t]));
    for (t = 0, i = Object.getOwnPropertyNames(e); t < i.length; t++) Object.hasOwnProperty.call(s, r = i[t]) && s[r] === e[r] || set(s, r, Object.getOwnPropertyDescriptor(e, r))
  }
  return s || e
}
const FormContextKey = Symbol("vee-validate-form"),
  PublicFormContextKey = Symbol("vee-validate-form-context"),
  FieldContextKey = Symbol("vee-validate-field-instance"),
  IS_ABSENT = Symbol("Default empty value"),
  isClient = typeof window < "u";

function isLocator(e) {
  return isCallable(e) && !!e.__locatorRef
}

function isTypedSchema(e) {
  return !!e && isCallable(e.parse) && e.__type === "VVTypedSchema"
}

function isYupValidator(e) {
  return !!e && isCallable(e.validate)
}

function hasCheckedAttr(e) {
  return e === "checkbox" || e === "radio"
}

function isContainerValue(e) {
  return isObject$1(e) || Array.isArray(e)
}

function isEmptyContainer(e) {
  return Array.isArray(e) ? e.length === 0 : isObject$1(e) && Object.keys(e).length === 0
}

function isNotNestedPath(e) {
  return /^\[.+\]$/i.test(e)
}

function isNativeMultiSelect(e) {
  return isNativeSelect(e) && e.multiple
}

function isNativeSelect(e) {
  return e.tagName === "SELECT"
}

function isNativeMultiSelectNode(e, t) {
  const r = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && r
}

function shouldHaveValueBinding(e, t) {
  return !isNativeMultiSelectNode(e, t) && t.type !== "file" && !hasCheckedAttr(t.type)
}

function isFormSubmitEvent(e) {
  return isEvent(e) && e.target && "submit" in e.target
}

function isEvent(e) {
  return e ? !!(typeof Event < "u" && isCallable(Event) && e instanceof Event || e && e.srcElement) : !1
}

function isPropPresent(e, t) {
  return t in e && e[t] !== IS_ABSENT
}

function isEqual(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, i, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0;)
        if (!isEqual(e[i], t[i])) return !1;
      return !0
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      for (i of e.entries())
        if (!isEqual(i[1], t.get(i[0]))) return !1;
      return !0
    }
    if (isFile(e) && isFile(t)) return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      return !0
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0;)
        if (e[i] !== t[i]) return !1;
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    if (e = normalizeObject(e), t = normalizeObject(t), s = Object.keys(e), r = s.length, r !== Object.keys(t).length) return !1;
    for (i = r; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(t, s[i])) return !1;
    for (i = r; i-- !== 0;) {
      var n = s[i];
      if (!isEqual(e[n], t[n])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}

function normalizeObject(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0))
}

function isFile(e) {
  return isClient ? e instanceof File : !1
}

function cleanupNonNestedPath(e) {
  return isNotNestedPath(e) ? e.replace(/\[|\]/gi, "") : e
}

function getFromPath(e, t, r) {
  return e ? isNotNestedPath(t) ? e[cleanupNonNestedPath(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s, n) => isContainerValue(s) && n in s ? s[n] : r, e) : r
}

function setInPath(e, t, r) {
  if (isNotNestedPath(t)) {
    e[cleanupNonNestedPath(t)] = r;
    return
  }
  const i = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = e;
  for (let n = 0; n < i.length; n++) {
    if (n === i.length - 1) {
      s[i[n]] = r;
      return
    }(!(i[n] in s) || isNullOrUndefined(s[i[n]])) && (s[i[n]] = isIndex(i[n + 1]) ? [] : {}), s = s[i[n]]
  }
}

function unset(e, t) {
  if (Array.isArray(e) && isIndex(t)) {
    e.splice(Number(t), 1);
    return
  }
  isObject$1(e) && delete e[t]
}

function unsetPath(e, t) {
  if (isNotNestedPath(t)) {
    delete e[cleanupNonNestedPath(t)];
    return
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let i = e;
  for (let n = 0; n < r.length; n++) {
    if (n === r.length - 1) {
      unset(i, r[n]);
      break
    }
    if (!(r[n] in i) || isNullOrUndefined(i[r[n]])) break;
    i = i[r[n]]
  }
  const s = r.map((n, a) => getFromPath(e, r.slice(0, a).join(".")));
  for (let n = s.length - 1; n >= 0; n--)
    if (isEmptyContainer(s[n])) {
      if (n === 0) {
        unset(e, r[0]);
        continue
      }
      unset(s[n - 1], r[n - 1])
    }
}

function keysOf(e) {
  return Object.keys(e)
}

function injectWithSelf(e, t = void 0) {
  const r = getCurrentInstance();
  return r?.provides[e] || inject(e, t)
}

function resolveNextCheckboxValue(e, t, r) {
  if (Array.isArray(e)) {
    const i = [...e],
      s = i.findIndex(n => isEqual(n, t));
    return s >= 0 ? i.splice(s, 1) : i.push(t), i
  }
  return isEqual(e, t) ? r : t
}

function debounceAsync(e, t = 0) {
  let r = null,
    i = [];
  return function(...s) {
    return r && clearTimeout(r), r = setTimeout(() => {
      const n = e(...s);
      i.forEach(a => a(n)), i = []
    }, t), new Promise(n => i.push(n))
  }
}

function applyModelModifiers(e, t) {
  return isObject$1(t) && t.number ? toNumber$1(e) : e
}

function withLatest(e, t) {
  let r;
  return async function(...s) {
    const n = e(...s);
    r = n;
    const a = await n;
    return n !== r ? a : (r = void 0, t(a, s))
  }
}

function normalizeErrorItem(e) {
  return Array.isArray(e) ? e : e ? [e] : []
}

function omit(e, t) {
  const r = {};
  for (const i in e) t.includes(i) || (r[i] = e[i]);
  return r
}

function debounceNextTick(e) {
  let t = null,
    r = [];
  return function(...i) {
    const s = nextTick(() => {
      if (t !== s) return;
      const n = e(...i);
      r.forEach(a => a(n)), r = [], t = null
    });
    return t = s, new Promise(n => r.push(n))
  }
}

function normalizeChildren(e, t, r) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(r()) : {
    default: () => {
      var i, s;
      return (s = (i = t.slots).default) === null || s === void 0 ? void 0 : s.call(i, r())
    }
  } : t.slots.default
}

function getBoundValue(e) {
  if (hasValueBinding(e)) return e._value
}

function hasValueBinding(e) {
  return "_value" in e
}

function parseInputValue(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value
}

function normalizeEventValue(e) {
  if (!isEvent(e)) return e;
  const t = e.target;
  if (hasCheckedAttr(t.type) && hasValueBinding(t)) return getBoundValue(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0]
  }
  if (isNativeMultiSelect(t)) return Array.from(t.options).filter(r => r.selected && !r.disabled).map(getBoundValue);
  if (isNativeSelect(t)) {
    const r = Array.from(t.options).find(i => i.selected);
    return r ? getBoundValue(r) : t.value
  }
  return parseInputValue(t)
}

function normalizeRules(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? isObject$1(e) && e._$$isNormalized ? e : isObject$1(e) ? Object.keys(e).reduce((r, i) => {
    const s = normalizeParams(e[i]);
    return e[i] !== !1 && (r[i] = buildParams(s)), r
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, i) => {
    const s = parseRule(i);
    return s.name && (r[s.name] = buildParams(s.params)), r
  }, t) : t
}

function normalizeParams(e) {
  return e === !0 ? [] : Array.isArray(e) || isObject$1(e) ? e : [e]
}

function buildParams(e) {
  const t = r => typeof r == "string" && r[0] === "@" ? createLocator(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, i) => (r[i] = t(e[i]), r), {})
}
const parseRule = e => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), {
    name: r,
    params: t
  }
};

function createLocator(e) {
  const t = r => {
    var i;
    return (i = getFromPath(r, e)) !== null && i !== void 0 ? i : r[e]
  };
  return t.__locatorRef = e, t
}

function extractLocators(e) {
  return Array.isArray(e) ? e.filter(isLocator) : keysOf(e).filter(t => isLocator(e[t])).map(t => e[t])
}
const DEFAULT_CONFIG = {
  generateMessage: ({
    field: e
  }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
async function validate(e, t, r = {}) {
  const i = r?.bails,
    s = {
      name: r?.name || "{field}",
      rules: t,
      label: r?.label,
      bails: i ?? !0,
      formData: r?.values || {}
    },
    n = await _validate(s, e);
  return Object.assign(Object.assign({}, n), {
    valid: !n.errors.length
  })
}
async function _validate(e, t) {
  const r = e.rules;
  if (isTypedSchema(r) || isYupValidator(r)) return validateFieldWithTypedSchema(t, Object.assign(Object.assign({}, e), {
    rules: r
  }));
  if (isCallable(r) || Array.isArray(r)) {
    const l = {
        field: e.label || e.name,
        name: e.name,
        label: e.label,
        form: e.formData,
        value: t
      },
      o = Array.isArray(r) ? r : [r],
      c = o.length,
      f = [];
    for (let b = 0; b < c; b++) {
      const u = o[b],
        y = await u(t, l);
      if (!(typeof y != "string" && !Array.isArray(y) && y)) {
        if (Array.isArray(y)) f.push(...y);
        else {
          const v = typeof y == "string" ? y : _generateFieldError(l);
          f.push(v)
        }
        if (e.bails) return {
          errors: f
        }
      }
    }
    return {
      errors: f
    }
  }
  const i = Object.assign(Object.assign({}, e), {
      rules: normalizeRules(r)
    }),
    s = [],
    n = Object.keys(i.rules),
    a = n.length;
  for (let l = 0; l < a; l++) {
    const o = n[l],
      c = await _test(i, t, {
        name: o,
        params: i.rules[o]
      });
    if (c.error && (s.push(c.error), e.bails)) return {
      errors: s
    }
  }
  return {
    errors: s
  }
}

function isYupError(e) {
  return !!e && e.name === "ValidationError"
}

function yupToTypedSchema(e) {
  return {
    __type: "VVTypedSchema",
    async parse(r, i) {
      var s;
      try {
        return {
          output: await e.validate(r, {
            abortEarly: !1,
            context: i?.formData || {}
          }),
          errors: []
        }
      } catch (n) {
        if (!isYupError(n)) throw n;
        if (!(!((s = n.inner) === null || s === void 0) && s.length) && n.errors.length) return {
          errors: [{
            path: n.path,
            errors: n.errors
          }]
        };
        const a = n.inner.reduce((l, o) => {
          const c = o.path || "";
          return l[c] || (l[c] = {
            errors: [],
            path: c
          }), l[c].errors.push(...o.errors), l
        }, {});
        return {
          errors: Object.values(a)
        }
      }
    }
  }
}
async function validateFieldWithTypedSchema(e, t) {
  const i = await (isTypedSchema(t.rules) ? t.rules : yupToTypedSchema(t.rules)).parse(e, {
      formData: t.formData
    }),
    s = [];
  for (const n of i.errors) n.errors.length && s.push(...n.errors);
  return {
    value: i.value,
    errors: s
  }
}
async function _test(e, t, r) {
  const i = resolveRule(r.name);
  if (!i) throw new Error(`No such validator '${r.name}' exists.`);
  const s = fillTargetValues(r.params, e.formData),
    n = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      value: t,
      form: e.formData,
      rule: Object.assign(Object.assign({}, r), {
        params: s
      })
    },
    a = await i(t, s, n);
  return typeof a == "string" ? {
    error: a
  } : {
    error: a ? void 0 : _generateFieldError(n)
  }
}

function _generateFieldError(e) {
  const t = getConfig().generateMessage;
  return t ? t(e) : "Field is invalid"
}

function fillTargetValues(e, t) {
  const r = i => isLocator(i) ? i(t) : i;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((i, s) => (i[s] = r(e[s]), i), {})
}
async function validateTypedSchema(e, t) {
  const i = await (isTypedSchema(e) ? e : yupToTypedSchema(e)).parse(klona(t), {
      formData: klona(t)
    }),
    s = {},
    n = {};
  for (const a of i.errors) {
    const l = a.errors,
      o = (a.path || "").replace(/\["(\d+)"\]/g, (c, f) => `[${f}]`);
    s[o] = {
      valid: !l.length,
      errors: l
    }, l.length && (n[o] = l[0])
  }
  return {
    valid: !i.errors.length,
    results: s,
    errors: n,
    values: i.value,
    source: "schema"
  }
}
async function validateObjectSchema(e, t, r) {
  const s = keysOf(e).map(async c => {
    var f, b, u;
    const y = (f = r?.names) === null || f === void 0 ? void 0 : f[c],
      g = await validate(getFromPath(t, c), e[c], {
        name: y?.name || c,
        label: y?.label,
        values: t,
        bails: (u = (b = r?.bailsMap) === null || b === void 0 ? void 0 : b[c]) !== null && u !== void 0 ? u : !0
      });
    return Object.assign(Object.assign({}, g), {
      path: c
    })
  });
  let n = !0;
  const a = await Promise.all(s),
    l = {},
    o = {};
  for (const c of a) l[c.path] = {
    valid: c.valid,
    errors: c.errors
  }, c.valid || (n = !1, o[c.path] = c.errors[0]);
  return {
    valid: n,
    results: l,
    errors: o,
    source: "schema"
  }
}
let ID_COUNTER = 0;

function useFieldState(e, t) {
  const {
    value: r,
    initialValue: i,
    setInitialValue: s
  } = _useFieldValue(e, t.modelValue, t.form);
  if (!t.form) {
    let o = function(y) {
      var g;
      "value" in y && (r.value = y.value), "errors" in y && f(y.errors), "touched" in y && (u.touched = (g = y.touched) !== null && g !== void 0 ? g : u.touched), "initialValue" in y && s(y.initialValue)
    };
    const {
      errors: c,
      setErrors: f
    } = createFieldErrors(), b = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER, u = createFieldMeta(r, i, c, t.schema);
    return {
      id: b,
      path: e,
      value: r,
      initialValue: i,
      meta: u,
      flags: {
        pendingUnmount: {
          [b]: !1
        },
        pendingReset: !1
      },
      errors: c,
      setState: o
    }
  }
  const n = t.form.createPathState(e, {
      bails: t.bails,
      label: t.label,
      type: t.type,
      validate: t.validate,
      schema: t.schema
    }),
    a = computed(() => n.errors);

  function l(o) {
    var c, f, b;
    "value" in o && (r.value = o.value), "errors" in o && ((c = t.form) === null || c === void 0 || c.setFieldError(unref(e), o.errors)), "touched" in o && ((f = t.form) === null || f === void 0 || f.setFieldTouched(unref(e), (b = o.touched) !== null && b !== void 0 ? b : !1)), "initialValue" in o && s(o.initialValue)
  }
  return {
    id: Array.isArray(n.id) ? n.id[n.id.length - 1] : n.id,
    path: e,
    value: r,
    errors: a,
    meta: n,
    initialValue: i,
    flags: n.__flags,
    setState: l
  }
}

function _useFieldValue(e, t, r) {
  const i = ref(unref(t));

  function s() {
    return r ? getFromPath(r.initialValues.value, unref(e), unref(i)) : unref(i)
  }

  function n(c) {
    if (!r) {
      i.value = c;
      return
    }
    r.setFieldInitialValue(unref(e), c, !0)
  }
  const a = computed(s);
  if (!r) return {
    value: ref(s()),
    initialValue: a,
    setInitialValue: n
  };
  const l = resolveModelValue(t, r, a, e);
  return r.stageInitialValue(unref(e), l, !0), {
    value: computed({
      get() {
        return getFromPath(r.values, unref(e))
      },
      set(c) {
        r.setFieldValue(unref(e), c, !1)
      }
    }),
    initialValue: a,
    setInitialValue: n
  }
}

function resolveModelValue(e, t, r, i) {
  return isRef(e) ? unref(e) : e !== void 0 ? e : getFromPath(t.values, unref(i), unref(r))
}

function createFieldMeta(e, t, r, i) {
  const s = computed(() => {
      var a, l, o;
      return (o = (l = (a = toValue(i)) === null || a === void 0 ? void 0 : a.describe) === null || l === void 0 ? void 0 : l.call(a).required) !== null && o !== void 0 ? o : !1
    }),
    n = reactive({
      touched: !1,
      pending: !1,
      valid: !0,
      required: s,
      validated: !!unref(r).length,
      initialValue: computed(() => unref(t)),
      dirty: computed(() => !isEqual(unref(e), unref(t)))
    });
  return watch(r, a => {
    n.valid = !a.length
  }, {
    immediate: !0,
    flush: "sync"
  }), n
}

function createFieldErrors() {
  const e = ref([]);
  return {
    errors: e,
    setErrors: t => {
      e.value = normalizeErrorItem(t)
    }
  }
}

function useField(e, t, r) {
  return hasCheckedAttr(r?.type) ? useFieldWithChecked(e, t, r) : _useField(e, t, r)
}

function _useField(e, t, r) {
  const {
    initialValue: i,
    validateOnMount: s,
    bails: n,
    type: a,
    checkedValue: l,
    label: o,
    validateOnValueUpdate: c,
    uncheckedValue: f,
    controlled: b,
    keepValueOnUnmount: u,
    syncVModel: y,
    form: g
  } = normalizeOptions(r), v = b ? injectWithSelf(FormContextKey) : void 0, E = g || v, p = computed(() => normalizeFormPath(toValue(e))), m = computed(() => {
    if (toValue(E?.schema)) return;
    const U = unref(t);
    return isYupValidator(U) || isTypedSchema(U) || isCallable(U) || Array.isArray(U) ? U : normalizeRules(U)
  }), d = !isCallable(m.value) && isTypedSchema(toValue(t)), {
    id: _,
    value: x,
    initialValue: P,
    meta: T,
    setState: V,
    errors: B,
    flags: D
  } = useFieldState(p, {
    modelValue: i,
    form: E,
    bails: n,
    label: o,
    type: a,
    validate: m.value ? k : void 0,
    schema: d ? t : void 0
  }), L = computed(() => B.value[0]);
  y && useVModel({
    value: x,
    prop: y,
    handleChange: w,
    shouldValidate: () => c && !D.pendingReset
  });
  const N = (R, U = !1) => {
    T.touched = !0, U && G()
  };
  async function z(R) {
    var U, X;
    if (E?.validateSchema) {
      const {
        results: Q
      } = await E.validateSchema(R);
      return (U = Q[toValue(p)]) !== null && U !== void 0 ? U : {
        valid: !0,
        errors: []
      }
    }
    return m.value ? validate(x.value, m.value, {
      name: toValue(p),
      label: toValue(o),
      values: (X = E?.values) !== null && X !== void 0 ? X : {},
      bails: n
    }) : {
      valid: !0,
      errors: []
    }
  }
  const G = withLatest(async () => (T.pending = !0, T.validated = !0, z("validated-only")), R => (D.pendingUnmount[q.id] || (V({
      errors: R.errors
    }), T.pending = !1, T.valid = R.valid), R)),
    $ = withLatest(async () => z("silent"), R => (T.valid = R.valid, R));

  function k(R) {
    return R?.mode === "silent" ? $() : G()
  }

  function w(R, U = !0) {
    const X = normalizeEventValue(R);
    A(X, U)
  }
  onMounted(() => {
    if (s) return G();
    (!E || !E.validateSchema) && $()
  });

  function C(R) {
    T.touched = R
  }

  function S(R) {
    var U;
    const X = R && "value" in R ? R.value : P.value;
    V({
      value: klona(X),
      initialValue: klona(X),
      touched: (U = R?.touched) !== null && U !== void 0 ? U : !1,
      errors: R?.errors || []
    }), T.pending = !1, T.validated = !1, $()
  }
  const F = getCurrentInstance();

  function A(R, U = !0) {
    x.value = F && y ? applyModelModifiers(R, F.props.modelModifiers) : R, (U ? G : $)()
  }

  function j(R) {
    V({
      errors: Array.isArray(R) ? R : [R]
    })
  }
  const Z = computed({
      get() {
        return x.value
      },
      set(R) {
        A(R, c)
      }
    }),
    q = {
      id: _,
      name: p,
      label: o,
      value: Z,
      meta: T,
      errors: B,
      errorMessage: L,
      type: a,
      checkedValue: l,
      uncheckedValue: f,
      bails: n,
      keepValueOnUnmount: u,
      resetField: S,
      handleReset: () => S(),
      validate: k,
      handleChange: w,
      handleBlur: N,
      setState: V,
      setTouched: C,
      setErrors: j,
      setValue: A
    };
  if (provide(FieldContextKey, q), isRef(t) && typeof unref(t) != "function" && watch(t, (R, U) => {
      isEqual(R, U) || (T.validated ? G() : $())
    }, {
      deep: !0
    }), !E) return q;
  const ee = computed(() => {
    const R = m.value;
    return !R || isCallable(R) || isYupValidator(R) || isTypedSchema(R) || Array.isArray(R) ? {} : Object.keys(R).reduce((U, X) => {
      const Q = extractLocators(R[X]).map(ne => ne.__locatorRef).reduce((ne, re) => {
        const ie = getFromPath(E.values, re) || E.values[re];
        return ie !== void 0 && (ne[re] = ie), ne
      }, {});
      return Object.assign(U, Q), U
    }, {})
  });
  return watch(ee, (R, U) => {
    if (!Object.keys(R).length) return;
    !isEqual(R, U) && (T.validated ? G() : $())
  }), onBeforeUnmount(() => {
    var R;
    const U = (R = toValue(q.keepValueOnUnmount)) !== null && R !== void 0 ? R : toValue(E.keepValuesOnUnmount),
      X = toValue(p);
    if (U || !E || D.pendingUnmount[q.id]) {
      E?.removePathState(X, _);
      return
    }
    D.pendingUnmount[q.id] = !0;
    const Q = E.getPathState(X);
    if (Array.isArray(Q?.id) && Q?.multiple ? Q?.id.includes(q.id) : Q?.id === q.id) {
      if (Q?.multiple && Array.isArray(Q.value)) {
        const re = Q.value.findIndex(ie => isEqual(ie, toValue(q.checkedValue)));
        if (re > -1) {
          const ie = [...Q.value];
          ie.splice(re, 1), E.setFieldValue(X, ie)
        }
        Array.isArray(Q.id) && Q.id.splice(Q.id.indexOf(q.id), 1)
      } else E.unsetPathValue(toValue(p));
      E.removePathState(X, _)
    }
  }), q
}

function normalizeOptions(e) {
  const t = () => ({
      initialValue: void 0,
      validateOnMount: !1,
      bails: !0,
      label: void 0,
      validateOnValueUpdate: !0,
      keepValueOnUnmount: void 0,
      syncVModel: !1,
      controlled: !0
    }),
    r = !!e?.syncVModel,
    i = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue",
    s = r && !("initialValue" in (e || {})) ? getCurrentModelValue(getCurrentInstance(), i) : e?.initialValue;
  if (!e) return Object.assign(Object.assign({}, t()), {
    initialValue: s
  });
  const n = "valueProp" in e ? e.valueProp : e.checkedValue,
    a = "standalone" in e ? !e.standalone : e.controlled,
    l = e?.modelPropName || e?.syncVModel || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: s,
    controlled: a ?? !0,
    checkedValue: n,
    syncVModel: l
  })
}

function useFieldWithChecked(e, t, r) {
  const i = r?.standalone ? void 0 : injectWithSelf(FormContextKey),
    s = r?.checkedValue,
    n = r?.uncheckedValue;

  function a(l) {
    const o = l.handleChange,
      c = computed(() => {
        const b = toValue(l.value),
          u = toValue(s);
        return Array.isArray(b) ? b.findIndex(y => isEqual(y, u)) >= 0 : isEqual(u, b)
      });

    function f(b, u = !0) {
      var y, g;
      if (c.value === ((y = b?.target) === null || y === void 0 ? void 0 : y.checked)) {
        u && l.validate();
        return
      }
      const v = toValue(e),
        E = i?.getPathState(v),
        p = normalizeEventValue(b);
      let m = (g = toValue(s)) !== null && g !== void 0 ? g : p;
      i && E?.multiple && E.type === "checkbox" ? m = resolveNextCheckboxValue(getFromPath(i.values, v) || [], m, void 0) : r?.type === "checkbox" && (m = resolveNextCheckboxValue(toValue(l.value), m, toValue(n))), o(m, u)
    }
    return Object.assign(Object.assign({}, l), {
      checked: c,
      checkedValue: s,
      uncheckedValue: n,
      handleChange: f
    })
  }
  return a(_useField(e, t, r))
}

function useVModel({
  prop: e,
  value: t,
  handleChange: r,
  shouldValidate: i
}) {
  const s = getCurrentInstance();
  if (!s || !e) return;
  const n = typeof e == "string" ? e : "modelValue",
    a = `update:${n}`;
  n in s.props && (watch(t, l => {
    isEqual(l, getCurrentModelValue(s, n)) || s.emit(a, l)
  }), watch(() => getCurrentModelValue(s, n), l => {
    if (l === IS_ABSENT && t.value === void 0) return;
    const o = l === IS_ABSENT ? void 0 : l;
    isEqual(o, t.value) || r(o, i())
  }))
}

function getCurrentModelValue(e, t) {
  if (e) return e.props[t]
}
const FieldImpl = defineComponent({
  name: "Field",
  inheritAttrs: !1,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: !0
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => getConfig().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: IS_ABSENT
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    "onUpdate:modelValue": {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: !1
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    const r = toRef(e, "rules"),
      i = toRef(e, "name"),
      s = toRef(e, "label"),
      n = toRef(e, "uncheckedValue"),
      a = toRef(e, "keepValue"),
      {
        errors: l,
        value: o,
        errorMessage: c,
        validate: f,
        handleChange: b,
        handleBlur: u,
        setTouched: y,
        resetField: g,
        handleReset: v,
        meta: E,
        checked: p,
        setErrors: m,
        setValue: d
      } = useField(i, r, {
        validateOnMount: e.validateOnMount,
        bails: e.bails,
        standalone: e.standalone,
        type: t.attrs.type,
        initialValue: resolveInitialValue(e, t),
        checkedValue: t.attrs.value,
        uncheckedValue: n,
        label: s,
        validateOnValueUpdate: e.validateOnModelUpdate,
        keepValueOnUnmount: a,
        syncVModel: !0
      }),
      _ = function(D, L = !0) {
        b(D, L)
      },
      x = computed(() => {
        const {
          validateOnInput: B,
          validateOnChange: D,
          validateOnBlur: L,
          validateOnModelUpdate: N
        } = resolveValidationTriggers(e);

        function z(w) {
          u(w, L), isCallable(t.attrs.onBlur) && t.attrs.onBlur(w)
        }

        function G(w) {
          _(w, B), isCallable(t.attrs.onInput) && t.attrs.onInput(w)
        }

        function $(w) {
          _(w, D), isCallable(t.attrs.onChange) && t.attrs.onChange(w)
        }
        const k = {
          name: e.name,
          onBlur: z,
          onInput: G,
          onChange: $
        };
        return k["onUpdate:modelValue"] = w => _(w, N), k
      }),
      P = computed(() => {
        const B = Object.assign({}, x.value);
        hasCheckedAttr(t.attrs.type) && p && (B.checked = p.value);
        const D = resolveTag(e, t);
        return shouldHaveValueBinding(D, t.attrs) && (B.value = o.value), B
      }),
      T = computed(() => Object.assign(Object.assign({}, x.value), {
        modelValue: o.value
      }));

    function V() {
      return {
        field: P.value,
        componentField: T.value,
        value: o.value,
        meta: E,
        errors: l.value,
        errorMessage: c.value,
        validate: f,
        resetField: g,
        handleChange: _,
        handleInput: B => _(B, !1),
        handleReset: v,
        handleBlur: x.value.onBlur,
        setTouched: y,
        setErrors: m,
        setValue: d
      }
    }
    return t.expose({
      value: o,
      meta: E,
      errors: l,
      errorMessage: c,
      setErrors: m,
      setTouched: y,
      setValue: d,
      reset: g,
      validate: f,
      handleChange: b
    }), () => {
      const B = resolveDynamicComponent(resolveTag(e, t)),
        D = normalizeChildren(B, t, V);
      return B ? h(B, Object.assign(Object.assign({}, t.attrs), P.value), D) : D
    }
  }
});

function resolveTag(e, t) {
  let r = e.as || "";
  return !e.as && !t.slots.default && (r = "input"), r
}

function resolveValidationTriggers(e) {
  var t, r, i, s;
  const {
    validateOnInput: n,
    validateOnChange: a,
    validateOnBlur: l,
    validateOnModelUpdate: o
  } = getConfig();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : n,
    validateOnChange: (r = e.validateOnChange) !== null && r !== void 0 ? r : a,
    validateOnBlur: (i = e.validateOnBlur) !== null && i !== void 0 ? i : l,
    validateOnModelUpdate: (s = e.validateOnModelUpdate) !== null && s !== void 0 ? s : o
  }
}

function resolveInitialValue(e, t) {
  return hasCheckedAttr(t.attrs.type) ? isPropPresent(e, "modelValue") ? e.modelValue : void 0 : isPropPresent(e, "modelValue") ? e.modelValue : t.attrs.value
}
const Field = FieldImpl;
let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];

function resolveInitialValues(e) {
  const t = e?.initialValues || {},
    r = Object.assign({}, toValue(t)),
    i = unref(e?.validationSchema);
  return i && isTypedSchema(i) && isCallable(i.cast) ? klona(i.cast(r) || {}) : klona(r)
}

function useForm(e) {
  var t;
  const r = FORM_COUNTER++,
    i = e?.name || "Form";
  let s = 0;
  const n = ref(!1),
    a = ref(!1),
    l = ref(0),
    o = [],
    c = reactive(resolveInitialValues(e)),
    f = ref([]),
    b = ref({}),
    u = ref({}),
    y = debounceNextTick(() => {
      u.value = f.value.reduce((I, M) => (I[normalizeFormPath(toValue(M.path))] = M, I), {})
    });

  function g(I, M) {
    const O = w(I);
    if (!O) {
      typeof I == "string" && (b.value[normalizeFormPath(I)] = normalizeErrorItem(M));
      return
    }
    if (typeof I == "string") {
      const H = normalizeFormPath(I);
      b.value[H] && delete b.value[H]
    }
    O.errors = normalizeErrorItem(M), O.valid = !O.errors.length
  }

  function v(I) {
    keysOf(I).forEach(M => {
      g(M, I[M])
    })
  }
  e?.initialErrors && v(e.initialErrors);
  const E = computed(() => {
      const I = f.value.reduce((M, O) => (O.errors.length && (M[toValue(O.path)] = O.errors), M), {});
      return Object.assign(Object.assign({}, b.value), I)
    }),
    p = computed(() => keysOf(E.value).reduce((I, M) => {
      const O = E.value[M];
      return O?.length && (I[M] = O[0]), I
    }, {})),
    m = computed(() => f.value.reduce((I, M) => (I[toValue(M.path)] = {
      name: toValue(M.path) || "",
      label: M.label || ""
    }, I), {})),
    d = computed(() => f.value.reduce((I, M) => {
      var O;
      return I[toValue(M.path)] = (O = M.bails) !== null && O !== void 0 ? O : !0, I
    }, {})),
    _ = Object.assign({}, e?.initialErrors || {}),
    x = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1,
    {
      initialValues: P,
      originalInitialValues: T,
      setInitialValues: V
    } = useFormInitialValues(f, c, e),
    B = useFormMeta(f, c, T, p),
    D = computed(() => f.value.reduce((I, M) => {
      const O = getFromPath(c, toValue(M.path));
      return setInPath(I, toValue(M.path), O), I
    }, {})),
    L = e?.validationSchema;

  function N(I, M) {
    var O, H;
    const K = computed(() => getFromPath(P.value, toValue(I))),
      J = u.value[toValue(I)],
      Y = M?.type === "checkbox" || M?.type === "radio";
    if (J && Y) {
      J.multiple = !0;
      const be = s++;
      return Array.isArray(J.id) ? J.id.push(be) : J.id = [J.id, be], J.fieldsCount++, J.__flags.pendingUnmount[be] = !1, J
    }
    const ae = computed(() => getFromPath(c, toValue(I))),
      oe = toValue(I),
      fe = S.findIndex(be => be === oe);
    fe !== -1 && S.splice(fe, 1);
    const se = computed(() => {
        var be, Te, Ve, Ae;
        const Fe = toValue(L);
        if (isTypedSchema(Fe)) return (Te = (be = Fe.describe) === null || be === void 0 ? void 0 : be.call(Fe, toValue(I)).required) !== null && Te !== void 0 ? Te : !1;
        const Me = toValue(M?.schema);
        return isTypedSchema(Me) && (Ae = (Ve = Me.describe) === null || Ve === void 0 ? void 0 : Ve.call(Me).required) !== null && Ae !== void 0 ? Ae : !1
      }),
      ue = s++,
      ve = reactive({
        id: ue,
        path: I,
        touched: !1,
        pending: !1,
        valid: !0,
        validated: !!(!((O = _[oe]) === null || O === void 0) && O.length),
        required: se,
        initialValue: K,
        errors: shallowRef([]),
        bails: (H = M?.bails) !== null && H !== void 0 ? H : !1,
        label: M?.label,
        type: M?.type || "default",
        value: ae,
        multiple: !1,
        __flags: {
          pendingUnmount: {
            [ue]: !1
          },
          pendingReset: !1
        },
        fieldsCount: 1,
        validate: M?.validate,
        dirty: computed(() => !isEqual(unref(ae), unref(K)))
      });
    return f.value.push(ve), u.value[oe] = ve, y(), p.value[oe] && !_[oe] && nextTick(() => {
      le(oe, {
        mode: "silent"
      })
    }), isRef(I) && watch(I, be => {
      y();
      const Te = klona(ae.value);
      u.value[be] = ve, nextTick(() => {
        setInPath(c, be, Te)
      })
    }), ve
  }
  const z = debounceAsync(me, 5),
    G = debounceAsync(me, 5),
    $ = withLatest(async I => await (I === "silent" ? z() : G()), (I, [M]) => {
      const O = keysOf(U.errorBag.value),
        K = [...new Set([...keysOf(I.results), ...f.value.map(J => J.path), ...O])].sort().reduce((J, Y) => {
          var ae;
          const oe = Y,
            fe = w(oe) || C(oe),
            se = ((ae = I.results[oe]) === null || ae === void 0 ? void 0 : ae.errors) || [],
            ue = toValue(fe?.path) || oe,
            ve = mergeValidationResults({
              errors: se,
              valid: !se.length
            }, J.results[ue]);
          return J.results[ue] = ve, ve.valid || (J.errors[ue] = ve.errors[0]), fe && b.value[ue] && delete b.value[ue], fe ? (fe.valid = ve.valid, M === "silent" || M === "validated-only" && !fe.validated || g(fe, ve.errors), J) : (g(ue, se), J)
        }, {
          valid: I.valid,
          results: {},
          errors: {},
          source: I.source
        });
      return I.values && (K.values = I.values, K.source = I.source), keysOf(K.results).forEach(J => {
        var Y;
        const ae = w(J);
        ae && M !== "silent" && (M === "validated-only" && !ae.validated || g(ae, (Y = K.results[J]) === null || Y === void 0 ? void 0 : Y.errors))
      }), K
    });

  function k(I) {
    f.value.forEach(I)
  }

  function w(I) {
    const M = typeof I == "string" ? normalizeFormPath(I) : I;
    return typeof M == "string" ? u.value[M] : M
  }

  function C(I) {
    return f.value.filter(O => I.startsWith(toValue(O.path))).reduce((O, H) => O ? H.path.length > O.path.length ? H : O : H, void 0)
  }
  let S = [],
    F;

  function A(I) {
    return S.push(I), F || (F = nextTick(() => {
      [...S].sort().reverse().forEach(O => {
        unsetPath(c, O)
      }), S = [], F = null
    })), F
  }

  function j(I) {
    return function(O, H) {
      return function(J) {
        return J instanceof Event && (J.preventDefault(), J.stopPropagation()), k(Y => Y.touched = !0), n.value = !0, l.value++, ce().then(Y => {
          const ae = klona(c);
          if (Y.valid && typeof O == "function") {
            const oe = klona(D.value);
            let fe = I ? oe : ae;
            return Y.values && (fe = Y.source === "schema" ? Y.values : Object.assign({}, fe, Y.values)), O(fe, {
              evt: J,
              controlledValues: oe,
              setErrors: v,
              setFieldError: g,
              setTouched: ge,
              setFieldTouched: ie,
              setValues: ne,
              setFieldValue: X,
              resetForm: de,
              resetField: ye
            })
          }!Y.valid && typeof H == "function" && H({
            values: ae,
            evt: J,
            errors: Y.errors,
            results: Y.results
          })
        }).then(Y => (n.value = !1, Y), Y => {
          throw n.value = !1, Y
        })
      }
    }
  }
  const q = j(!1);
  q.withControlled = j(!0);

  function ee(I, M) {
    const O = f.value.findIndex(K => K.path === I && (Array.isArray(K.id) ? K.id.includes(M) : K.id === M)),
      H = f.value[O];
    if (!(O === -1 || !H)) {
      if (nextTick(() => {
          le(I, {
            mode: "silent",
            warn: !1
          })
        }), H.multiple && H.fieldsCount && H.fieldsCount--, Array.isArray(H.id)) {
        const K = H.id.indexOf(M);
        K >= 0 && H.id.splice(K, 1), delete H.__flags.pendingUnmount[M]
      }(!H.multiple || H.fieldsCount <= 0) && (f.value.splice(O, 1), he(I), y(), delete u.value[I])
    }
  }

  function R(I) {
    keysOf(u.value).forEach(M => {
      M.startsWith(I) && delete u.value[M]
    }), f.value = f.value.filter(M => !M.path.startsWith(I)), nextTick(() => {
      y()
    })
  }
  const U = {
    name: i,
    formId: r,
    values: c,
    controlledValues: D,
    errorBag: E,
    errors: p,
    schema: L,
    submitCount: l,
    meta: B,
    isSubmitting: n,
    isValidating: a,
    fieldArrays: o,
    keepValuesOnUnmount: x,
    validateSchema: unref(L) ? $ : void 0,
    validate: ce,
    setFieldError: g,
    validateField: le,
    setFieldValue: X,
    setValues: ne,
    setErrors: v,
    setFieldTouched: ie,
    setTouched: ge,
    resetForm: de,
    resetField: ye,
    handleSubmit: q,
    useFieldModel: Ee,
    defineInputBinds: Pe,
    defineComponentBinds: we,
    defineField: pe,
    stageInitialValue: xe,
    unsetInitialValue: he,
    setFieldInitialValue: _e,
    createPathState: N,
    getPathState: w,
    unsetPathValue: A,
    removePathState: ee,
    initialValues: P,
    getAllPathStates: () => f.value,
    destroyPath: R,
    isFieldTouched: te,
    isFieldDirty: W,
    isFieldValid: Ce
  };

  function X(I, M, O = !0) {
    const H = klona(M),
      K = typeof I == "string" ? I : I.path;
    w(K) || N(K), setInPath(c, K, H), O && le(K)
  }

  function Q(I, M = !0) {
    keysOf(c).forEach(O => {
      delete c[O]
    }), keysOf(I).forEach(O => {
      X(O, I[O], !1)
    }), M && ce()
  }

  function ne(I, M = !0) {
    merge(c, I), o.forEach(O => O && O.reset()), M && ce()
  }

  function re(I, M) {
    const O = w(toValue(I)) || N(I);
    return computed({
      get() {
        return O.value
      },
      set(H) {
        var K;
        const J = toValue(I);
        X(J, H, (K = toValue(M)) !== null && K !== void 0 ? K : !1)
      }
    })
  }

  function ie(I, M) {
    const O = w(I);
    O && (O.touched = M)
  }

  function te(I) {
    const M = w(I);
    return M ? M.touched : f.value.filter(O => O.path.startsWith(I)).some(O => O.touched)
  }

  function W(I) {
    const M = w(I);
    return M ? M.dirty : f.value.filter(O => O.path.startsWith(I)).some(O => O.dirty)
  }

  function Ce(I) {
    const M = w(I);
    return M ? M.valid : f.value.filter(O => O.path.startsWith(I)).every(O => O.valid)
  }

  function ge(I) {
    if (typeof I == "boolean") {
      k(M => {
        M.touched = I
      });
      return
    }
    keysOf(I).forEach(M => {
      ie(M, !!I[M])
    })
  }

  function ye(I, M) {
    var O;
    const H = M && "value" in M ? M.value : getFromPath(P.value, I),
      K = w(I);
    K && (K.__flags.pendingReset = !0), _e(I, klona(H), !0), X(I, H, !1), ie(I, (O = M?.touched) !== null && O !== void 0 ? O : !1), g(I, M?.errors || []), nextTick(() => {
      K && (K.__flags.pendingReset = !1)
    })
  }

  function de(I, M) {
    let O = klona(I?.values ? I.values : T.value);
    O = M?.force ? O : merge(T.value, O), O = isTypedSchema(L) && isCallable(L.cast) ? L.cast(O) : O, V(O, {
      force: M?.force
    }), k(H => {
      var K;
      H.__flags.pendingReset = !0, H.validated = !1, H.touched = ((K = I?.touched) === null || K === void 0 ? void 0 : K[toValue(H.path)]) || !1, X(toValue(H.path), getFromPath(O, toValue(H.path)), !1), g(toValue(H.path), void 0)
    }), M?.force ? Q(O, !1) : ne(O, !1), v(I?.errors || {}), l.value = I?.submitCount || 0, nextTick(() => {
      ce({
        mode: "silent"
      }), k(H => {
        H.__flags.pendingReset = !1
      })
    })
  }
  async function ce(I) {
    const M = I?.mode || "force";
    if (M === "force" && k(Y => Y.validated = !0), U.validateSchema) return U.validateSchema(M);
    a.value = !0;
    const O = await Promise.all(f.value.map(Y => Y.validate ? Y.validate(I).then(ae => ({
      key: toValue(Y.path),
      valid: ae.valid,
      errors: ae.errors,
      value: ae.value
    })) : Promise.resolve({
      key: toValue(Y.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    a.value = !1;
    const H = {},
      K = {},
      J = {};
    for (const Y of O) H[Y.key] = {
      valid: Y.valid,
      errors: Y.errors
    }, Y.value && setInPath(J, Y.key, Y.value), Y.errors.length && (K[Y.key] = Y.errors[0]);
    return {
      valid: O.every(Y => Y.valid),
      results: H,
      errors: K,
      values: J,
      source: "fields"
    }
  }
  async function le(I, M) {
    var O;
    const H = w(I);
    if (H && M?.mode !== "silent" && (H.validated = !0), L) {
      const {
        results: K
      } = await $(M?.mode || "validated-only");
      return K[I] || {
        errors: [],
        valid: !0
      }
    }
    return H?.validate ? H.validate(M) : (!H && (O = M?.warn), Promise.resolve({
      errors: [],
      valid: !0
    }))
  }

  function he(I) {
    unsetPath(P.value, I)
  }

  function xe(I, M, O = !1) {
    _e(I, M), setInPath(c, I, M), O && !e?.initialValues && setInPath(T.value, I, klona(M))
  }

  function _e(I, M, O = !1) {
    setInPath(P.value, I, klona(M)), O && setInPath(T.value, I, klona(M))
  }
  async function me() {
    const I = unref(L);
    if (!I) return {
      valid: !0,
      results: {},
      errors: {},
      source: "none"
    };
    a.value = !0;
    const M = isYupValidator(I) || isTypedSchema(I) ? await validateTypedSchema(I, c) : await validateObjectSchema(I, c, {
      names: m.value,
      bailsMap: d.value
    });
    return a.value = !1, M
  }
  const Se = q((I, {
    evt: M
  }) => {
    isFormSubmitEvent(M) && M.target.submit()
  });
  onMounted(() => {
    if (e?.initialErrors && v(e.initialErrors), e?.initialTouched && ge(e.initialTouched), e?.validateOnMount) {
      ce();
      return
    }
    U.validateSchema && U.validateSchema("silent")
  }), isRef(L) && watch(L, () => {
    var I;
    (I = U.validateSchema) === null || I === void 0 || I.call(U, "validated-only")
  }), provide(FormContextKey, U);

  function pe(I, M) {
    const O = isCallable(M) ? void 0 : M?.label,
      H = w(toValue(I)) || N(I, {
        label: O
      }),
      K = () => isCallable(M) ? M(omit(H, PRIVATE_PATH_STATE_KEYS)) : M || {};

    function J() {
      var se;
      H.touched = !0, ((se = K().validateOnBlur) !== null && se !== void 0 ? se : getConfig().validateOnBlur) && le(toValue(H.path))
    }

    function Y() {
      var se;
      ((se = K().validateOnInput) !== null && se !== void 0 ? se : getConfig().validateOnInput) && nextTick(() => {
        le(toValue(H.path))
      })
    }

    function ae() {
      var se;
      ((se = K().validateOnChange) !== null && se !== void 0 ? se : getConfig().validateOnChange) && nextTick(() => {
        le(toValue(H.path))
      })
    }
    const oe = computed(() => {
      const se = {
        onChange: ae,
        onInput: Y,
        onBlur: J
      };
      return isCallable(M) ? Object.assign(Object.assign({}, se), M(omit(H, PRIVATE_PATH_STATE_KEYS)).props || {}) : M?.props ? Object.assign(Object.assign({}, se), M.props(omit(H, PRIVATE_PATH_STATE_KEYS))) : se
    });
    return [re(I, () => {
      var se, ue, ve;
      return (ve = (se = K().validateOnModelUpdate) !== null && se !== void 0 ? se : (ue = getConfig()) === null || ue === void 0 ? void 0 : ue.validateOnModelUpdate) !== null && ve !== void 0 ? ve : !0
    }), oe]
  }

  function Ee(I) {
    return Array.isArray(I) ? I.map(M => re(M, !0)) : re(I)
  }

  function Pe(I, M) {
    const [O, H] = pe(I, M);

    function K() {
      H.value.onBlur()
    }

    function J(ae) {
      const oe = normalizeEventValue(ae);
      X(toValue(I), oe, !1), H.value.onInput()
    }

    function Y(ae) {
      const oe = normalizeEventValue(ae);
      X(toValue(I), oe, !1), H.value.onChange()
    }
    return computed(() => Object.assign(Object.assign({}, H.value), {
      onBlur: K,
      onInput: J,
      onChange: Y,
      value: O.value
    }))
  }

  function we(I, M) {
    const [O, H] = pe(I, M), K = w(toValue(I));

    function J(Y) {
      O.value = Y
    }
    return computed(() => {
      const Y = isCallable(M) ? M(omit(K, PRIVATE_PATH_STATE_KEYS)) : M || {};
      return Object.assign({
        [Y.model || "modelValue"]: O.value,
        [`onUpdate:${Y.model||"modelValue"}`]: J
      }, H.value)
    })
  }
  const ke = Object.assign(Object.assign({}, U), {
    values: readonly(c),
    handleReset: () => de(),
    submitForm: Se
  });
  return provide(PublicFormContextKey, ke), ke
}

function useFormMeta(e, t, r, i) {
  const s = {
      touched: "some",
      pending: "some",
      valid: "every"
    },
    n = computed(() => !isEqual(t, unref(r)));

  function a() {
    const o = e.value;
    return keysOf(s).reduce((c, f) => {
      const b = s[f];
      return c[f] = o[b](u => u[f]), c
    }, {})
  }
  const l = reactive(a());
  return watchEffect(() => {
    const o = a();
    l.touched = o.touched, l.valid = o.valid, l.pending = o.pending
  }), computed(() => Object.assign(Object.assign({
    initialValues: unref(r)
  }, l), {
    valid: l.valid && !keysOf(i.value).length,
    dirty: n.value
  }))
}

function useFormInitialValues(e, t, r) {
  const i = resolveInitialValues(r),
    s = ref(i),
    n = ref(klona(i));

  function a(l, o) {
    o?.force ? (s.value = klona(l), n.value = klona(l)) : (s.value = merge(klona(s.value) || {}, klona(l)), n.value = merge(klona(n.value) || {}, klona(l))), o?.updateFields && e.value.forEach(c => {
      if (c.touched) return;
      const b = getFromPath(s.value, toValue(c.path));
      setInPath(t, toValue(c.path), klona(b))
    })
  }
  return {
    initialValues: s,
    originalInitialValues: n,
    setInitialValues: a
  }
}

function mergeValidationResults(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e
}
const FormImpl = defineComponent({
    name: "Form",
    inheritAttrs: !1,
    props: {
      as: {
        type: null,
        default: "form"
      },
      validationSchema: {
        type: Object,
        default: void 0
      },
      initialValues: {
        type: Object,
        default: void 0
      },
      initialErrors: {
        type: Object,
        default: void 0
      },
      initialTouched: {
        type: Object,
        default: void 0
      },
      validateOnMount: {
        type: Boolean,
        default: !1
      },
      onSubmit: {
        type: Function,
        default: void 0
      },
      onInvalidSubmit: {
        type: Function,
        default: void 0
      },
      keepValues: {
        type: Boolean,
        default: !1
      },
      name: {
        type: String,
        default: "Form"
      }
    },
    setup(e, t) {
      const r = toRef(e, "validationSchema"),
        i = toRef(e, "keepValues"),
        {
          errors: s,
          errorBag: n,
          values: a,
          meta: l,
          isSubmitting: o,
          isValidating: c,
          submitCount: f,
          controlledValues: b,
          validate: u,
          validateField: y,
          handleReset: g,
          resetForm: v,
          handleSubmit: E,
          setErrors: p,
          setFieldError: m,
          setFieldValue: d,
          setValues: _,
          setFieldTouched: x,
          setTouched: P,
          resetField: T
        } = useForm({
          validationSchema: r.value ? r : void 0,
          initialValues: e.initialValues,
          initialErrors: e.initialErrors,
          initialTouched: e.initialTouched,
          validateOnMount: e.validateOnMount,
          keepValuesOnUnmount: i,
          name: e.name
        }),
        V = E((k, {
          evt: w
        }) => {
          isFormSubmitEvent(w) && w.target.submit()
        }, e.onInvalidSubmit),
        B = e.onSubmit ? E(e.onSubmit, e.onInvalidSubmit) : V;

      function D(k) {
        isEvent(k) && k.preventDefault(), g(), typeof t.attrs.onReset == "function" && t.attrs.onReset()
      }

      function L(k, w) {
        return E(typeof k == "function" && !w ? k : w, e.onInvalidSubmit)(k)
      }

      function N() {
        return klona(a)
      }

      function z() {
        return klona(l.value)
      }

      function G() {
        return klona(s.value)
      }

      function $() {
        return {
          meta: l.value,
          errors: s.value,
          errorBag: n.value,
          values: a,
          isSubmitting: o.value,
          isValidating: c.value,
          submitCount: f.value,
          controlledValues: b.value,
          validate: u,
          validateField: y,
          handleSubmit: L,
          handleReset: g,
          submitForm: V,
          setErrors: p,
          setFieldError: m,
          setFieldValue: d,
          setValues: _,
          setFieldTouched: x,
          setTouched: P,
          resetForm: v,
          resetField: T,
          getValues: N,
          getMeta: z,
          getErrors: G
        }
      }
      return t.expose({
          setFieldError: m,
          setErrors: p,
          setFieldValue: d,
          setValues: _,
          setFieldTouched: x,
          setTouched: P,
          resetForm: v,
          validate: u,
          validateField: y,
          resetField: T,
          getValues: N,
          getMeta: z,
          getErrors: G,
          values: a,
          meta: l,
          errors: s
        }),
        function() {
          const w = e.as === "form" ? e.as : e.as ? resolveDynamicComponent(e.as) : null,
            C = normalizeChildren(w, t, $);
          return w ? h(w, Object.assign(Object.assign(Object.assign({}, w === "form" ? {
            novalidate: !0
          } : {}), t.attrs), {
            onSubmit: B,
            onReset: D
          }), C) : C
        }
    }
  }),
  Form = FormImpl,
  _hoisted_1$G = ["id", "type"],
  _sfc_main$G = defineComponent({
    __name: "input",
    props: {
      name: {},
      type: {},
      label: {}
    },
    setup(e) {
      const t = ref(!1);
      return (r, i) => {
        const s = __nuxt_component_0$b;
        return openBlock(), createBlock(unref(Field), {
          name: e.name
        }, {
          default: withCtx(({
            field: n,
            meta: a
          }) => [createBaseVNode("div", {
            class: normalizeClass(["field", {
              error: a.touched && !a.valid
            }])
          }, [createVNode(s, {
            "for-id": e.name,
            text: e.label,
            active: unref(t) || !!n.value
          }, null, 8, ["for-id", "text", "active"]), createBaseVNode("input", mergeProps(n, {
            id: e.name,
            type: e.type,
            autocomplete: "on",
            class: "input b1-light",
            onFocus: i[0] || (i[0] = l => t.value = !0),
            onBlur: i[1] || (i[1] = l => t.value = !1)
          }), null, 16, _hoisted_1$G)], 2)]),
          _: 1
        }, 8, ["name"])
      }
    }
  }),
  __nuxt_component_0$a = _export_sfc(_sfc_main$G, [
    ["__scopeId", "data-v-cab4b47d"]
  ]),
  _sfc_main$F = {},
  _hoisted_1$F = {
    class: "icon",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function _sfc_render$n(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, [...t[0] || (t[0] = [createBaseVNode("path", {
    d: "M5 8L10 13L15 8",
    stroke: "#0B0B0B"
  }, null, -1)])])
}
const __nuxt_component_1$b = _export_sfc(_sfc_main$F, [
    ["render", _sfc_render$n]
  ]),
  _hoisted_1$E = {
    class: "dropdown"
  },
  _hoisted_2$q = ["onClick"],
  _sfc_main$E = defineComponent({
    __name: "select",
    props: {
      name: {},
      label: {},
      options: {}
    },
    setup(e) {
      const t = e,
        r = ref(!1),
        i = () => r.value = !r.value,
        s = () => r.value = !1,
        {
          value: n,
          meta: a
        } = useField(t.name),
        l = computed(() => t.options.find(c => c.value === n.value)?.text || "");

      function o(c) {
        n.value = c, s()
      }
      return (c, f) => {
        const b = __nuxt_component_0$b,
          u = __nuxt_component_1$b,
          y = resolveDirective("click-outside");
        return withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass(["field", {
            error: unref(a).touched && !unref(a).valid
          }])
        }, [createVNode(b, {
          text: e.label,
          active: !!unref(l) || unref(r)
        }, null, 8, ["text", "active"]), createBaseVNode("div", {
          class: normalizeClass(["select b1-light", {
            open: unref(r)
          }]),
          onClick: i
        }, [createVNode(u), createBaseVNode("span", null, toDisplayString(unref(l)), 1), createBaseVNode("ul", _hoisted_1$E, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.options, g => (openBlock(), createElementBlock("li", {
          key: g.value,
          class: normalizeClass({
            selected: unref(n) === g.value
          }),
          onClick: withModifiers(v => o(g.value), ["stop"])
        }, toDisplayString(g.text), 11, _hoisted_2$q))), 128))])], 2)], 2)), [
          [y, s]
        ])
      }
    }
  }),
  __nuxt_component_1$a = _export_sfc(_sfc_main$E, [
    ["__scopeId", "data-v-d758c70f"]
  ]),
  _hoisted_1$D = {
    class: "field"
  },
  _hoisted_2$p = ["id"],
  _sfc_main$D = defineComponent({
    __name: "textarea",
    props: {
      name: {},
      label: {}
    },
    setup(e) {
      const t = ref(!1);
      return (r, i) => {
        const s = __nuxt_component_0$b;
        return openBlock(), createBlock(unref(Field), {
          name: e.name
        }, {
          default: withCtx(({
            field: n
          }) => [createBaseVNode("div", _hoisted_1$D, [createVNode(s, {
            "for-id": e.name,
            text: e.label,
            active: unref(t) || !!n.value
          }, null, 8, ["for-id", "text", "active"]), createBaseVNode("textarea", mergeProps(n, {
            id: e.name,
            class: "textarea b1-light",
            onFocus: i[0] || (i[0] = a => t.value = !0),
            onBlur: i[1] || (i[1] = a => t.value = !1)
          }), null, 16, _hoisted_2$p)])]),
          _: 1
        }, 8, ["name"])
      }
    }
  }),
  __nuxt_component_3$5 = _export_sfc(_sfc_main$D, [
    ["__scopeId", "data-v-bf8b2973"]
  ]),
  _sfc_main$C = {},
  _hoisted_1$C = {
    class: "icon",
    viewBox: "0 0 14 14",
    fill: "none"
  };

function _sfc_render$m(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, [...t[0] || (t[0] = [createBaseVNode("path", {
    d: "M12.8332 7.78248C12.4682 7.65351 12.0756 7.58333 11.6665 7.58333C9.73351 7.58333 8.1665 9.15034 8.1665 11.0833C8.1665 11.4924 8.23668 11.8851 8.36565 12.25H1.74984C1.42767 12.25 1.1665 11.9888 1.1665 11.6667V2.33333C1.1665 2.01117 1.42767 1.75 1.74984 1.75H12.2498C12.572 1.75 12.8332 2.01117 12.8332 2.33333V7.78248ZM7.03519 6.81502L3.29405 3.63866L2.53896 4.52801L7.04248 8.35164L11.4649 4.52443L10.7014 3.64224L7.03519 6.81502ZM11.0832 12.8333L9.0208 10.771L9.84575 9.94601L11.0832 11.1834L13.1455 9.121L13.9705 9.94601L11.0832 12.8333Z",
    fill: "#F1F1F1"
  }, null, -1)])])
}
const __nuxt_component_5$1 = _export_sfc(_sfc_main$C, [
    ["render", _sfc_render$m]
  ]),
  emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var propertyExpr, hasRequiredPropertyExpr;

function requirePropertyExpr() {
  if (hasRequiredPropertyExpr) return propertyExpr;
  hasRequiredPropertyExpr = 1;

  function e(p) {
    this._maxSize = p, this.clear()
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = Object.create(null)
  }, e.prototype.get = function(p) {
    return this._values[p]
  }, e.prototype.set = function(p, m) {
    return this._size >= this._maxSize && this.clear(), p in this._values || this._size++, this._values[p] = m
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    r = /^\d+$/,
    i = /^\d/,
    s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    n = /^\s*(['"]?)(.*?)(\1)\s*$/,
    a = 512,
    l = new e(a),
    o = new e(a),
    c = new e(a);
  propertyExpr = {
    Cache: e,
    split: b,
    normalizePath: f,
    setter: function(p) {
      var m = f(p);
      return o.get(p) || o.set(p, function(_, x) {
        for (var P = 0, T = m.length, V = _; P < T - 1;) {
          var B = m[P];
          if (B === "__proto__" || B === "constructor" || B === "prototype") return _;
          V = V[m[P++]]
        }
        V[m[P]] = x
      })
    },
    getter: function(p, m) {
      var d = f(p);
      return c.get(p) || c.set(p, function(x) {
        for (var P = 0, T = d.length; P < T;)
          if (x != null || !m) x = x[d[P++]];
          else return;
        return x
      })
    },
    join: function(p) {
      return p.reduce(function(m, d) {
        return m + (y(d) || r.test(d) ? "[" + d + "]" : (m ? "." : "") + d)
      }, "")
    },
    forEach: function(p, m, d) {
      u(Array.isArray(p) ? p : b(p), m, d)
    }
  };

  function f(p) {
    return l.get(p) || l.set(p, b(p).map(function(m) {
      return m.replace(n, "$2")
    }))
  }

  function b(p) {
    return p.match(t) || [""]
  }

  function u(p, m, d) {
    var _ = p.length,
      x, P, T, V;
    for (P = 0; P < _; P++) x = p[P], x && (E(x) && (x = '"' + x + '"'), V = y(x), T = !V && /^\d+$/.test(x), m.call(d, x, V, T, P, p))
  }

  function y(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1
  }

  function g(p) {
    return p.match(i) && !p.match(r)
  }

  function v(p) {
    return s.test(p)
  }

  function E(p) {
    return !y(p) && (g(p) || v(p))
  }
  return propertyExpr
}
var propertyExprExports = requirePropertyExpr(),
  tinyCase, hasRequiredTinyCase;

function requireTinyCase() {
  if (hasRequiredTinyCase) return tinyCase;
  hasRequiredTinyCase = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    t = f => f.match(e) || [],
    r = f => f[0].toUpperCase() + f.slice(1),
    i = (f, b) => t(f).join(b).toLowerCase(),
    s = f => t(f).reduce((b, u) => `${b}${b?u[0].toUpperCase()+u.slice(1).toLowerCase():u.toLowerCase()}`, "");
  return tinyCase = {
    words: t,
    upperFirst: r,
    camelCase: s,
    pascalCase: f => r(s(f)),
    snakeCase: f => i(f, "_"),
    kebabCase: f => i(f, "-"),
    sentenceCase: f => r(i(f, " ")),
    titleCase: f => t(f).map(r).join(" ")
  }, tinyCase
}
var tinyCaseExports = requireTinyCase(),
  toposort$1 = {
    exports: {}
  },
  hasRequiredToposort;

function requireToposort() {
  if (hasRequiredToposort) return toposort$1.exports;
  hasRequiredToposort = 1, toposort$1.exports = function(s) {
    return e(t(s), s)
  }, toposort$1.exports.array = e;

  function e(s, n) {
    var a = s.length,
      l = new Array(a),
      o = {},
      c = a,
      f = r(n),
      b = i(s);
    for (n.forEach(function(y) {
        if (!b.has(y[0]) || !b.has(y[1])) throw new Error("Unknown node. There is an unknown node in the supplied edges.")
      }); c--;) o[c] || u(s[c], c, new Set);
    return l;

    function u(y, g, v) {
      if (v.has(y)) {
        var E;
        try {
          E = ", node was:" + JSON.stringify(y)
        } catch {
          E = ""
        }
        throw new Error("Cyclic dependency" + E)
      }
      if (!b.has(y)) throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(y));
      if (!o[g]) {
        o[g] = !0;
        var p = f.get(y) || new Set;
        if (p = Array.from(p), g = p.length) {
          v.add(y);
          do {
            var m = p[--g];
            u(m, b.get(m), v)
          } while (g);
          v.delete(y)
        }
        l[--a] = y
      }
    }
  }

  function t(s) {
    for (var n = new Set, a = 0, l = s.length; a < l; a++) {
      var o = s[a];
      n.add(o[0]), n.add(o[1])
    }
    return Array.from(n)
  }

  function r(s) {
    for (var n = new Map, a = 0, l = s.length; a < l; a++) {
      var o = s[a];
      n.has(o[0]) || n.set(o[0], new Set), n.has(o[1]) || n.set(o[1], new Set), n.get(o[0]).add(o[1])
    }
    return n
  }

  function i(s) {
    for (var n = new Map, a = 0, l = s.length; a < l; a++) n.set(s[a], a);
    return n
  }
  return toposort$1.exports
}
var toposortExports = requireToposort();
const toposort = getDefaultExportFromCjs(toposortExports),
  toString = Object.prototype.toString,
  errorToString = Error.prototype.toString,
  regExpToString = RegExp.prototype.toString,
  symbolToString = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
  SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;

function printNumber(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e
}

function printSimpleValue(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return printNumber(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return symbolToString.call(e).replace(SYMBOL_REGEXP, "Symbol($1)");
  const i = toString.call(e).slice(8, -1);
  return i === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : i === "Error" || e instanceof Error ? "[" + errorToString.call(e) + "]" : i === "RegExp" ? regExpToString.call(e) : null
}

function printValue(e, t) {
  let r = printSimpleValue(e, t);
  return r !== null ? r : JSON.stringify(e, function(i, s) {
    let n = printSimpleValue(this[i], t);
    return n !== null ? n : s
  }, 2)
}

function toArray(e) {
  return e == null ? [] : [].concat(e)
}
let _Symbol$toStringTag, _Symbol$hasInstance, _Symbol$toStringTag2, strReg = /\$\{\s*(\w+)\s*\}/g;
_Symbol$toStringTag = Symbol.toStringTag;
class ValidationErrorNoStack {
  constructor(t, r, i, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[_Symbol$toStringTag] = "Error", this.name = "ValidationError", this.value = r, this.path = i, this.type = s, this.errors = [], this.inner = [], toArray(t).forEach(n => {
      if (ValidationError.isError(n)) {
        this.errors.push(...n.errors);
        const a = n.inner.length ? n.inner : [n];
        this.inner.push(...a)
      } else this.errors.push(n)
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]
  }
}
_Symbol$hasInstance = Symbol.hasInstance;
_Symbol$toStringTag2 = Symbol.toStringTag;
class ValidationError extends Error {
  static formatError(t, r) {
    const i = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: i,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(strReg, (s, n) => printValue(r[n])) : typeof t == "function" ? t(r) : t
  }
  static isError(t) {
    return t && t.name === "ValidationError"
  }
  constructor(t, r, i, s, n) {
    const a = new ValidationErrorNoStack(t, r, i, s);
    if (n) return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[_Symbol$toStringTag2] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, ValidationError)
  }
  static[_Symbol$hasInstance](t) {
    return ValidationErrorNoStack[Symbol.hasInstance](t) || super[Symbol.hasInstance](t)
  }
}
let mixed = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({
      path: e,
      type: t,
      value: r,
      originalValue: i
    }) => {
      const s = i != null && i !== r ? ` (cast from the value \`${printValue(i,!0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${printValue(r,!0)}\`` + s : `${e} must match the configured type. The validated value was: \`${printValue(r,!0)}\`` + s
    }
  },
  string = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
  },
  number = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  },
  date = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  },
  boolean = {
    isValue: "${path} field must be ${value}"
  },
  object = {
    noUnknown: "${path} field has unspecified keys: ${unknown}",
    exact: "${path} object contains unknown properties: ${properties}"
  },
  array = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  },
  tuple = {
    notType: e => {
      const {
        path: t,
        value: r,
        spec: i
      } = e, s = i.types.length;
      if (Array.isArray(r)) {
        if (r.length < s) return `${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${printValue(r,!0)}\``;
        if (r.length > s) return `${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${printValue(r,!0)}\``
      }
      return ValidationError.formatError(mixed.notType, e)
    }
  };
Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
  tuple
});
const isSchema = e => e && e.__isYupSchema__;
class Condition {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: i,
      then: s,
      otherwise: n
    } = r, a = typeof i == "function" ? i : (...l) => l.every(o => o === i);
    return new Condition(t, (l, o) => {
      var c;
      let f = a(...l) ? s : n;
      return (c = f?.(o)) != null ? c : o
    })
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r
  }
  resolve(t, r) {
    let i = this.refs.map(n => n.getValue(r?.value, r?.parent, r?.context)),
      s = this.fn(i, t, r);
    if (s === void 0 || s === t) return t;
    if (!isSchema(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(r)
  }
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context, this.isValue = this.key[0] === prefixes.value, this.isSibling = !this.isContext && !this.isValue;
    let i = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(i.length), this.getter = this.path && propertyExprExports.getter(this.path, !0), this.map = r.map
  }
  getValue(t, r, i) {
    let s = this.isContext ? i : this.isValue ? t : r;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s
  }
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context)
  }
  resolve() {
    return this
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    }
  }
  toString() {
    return `Ref(${this.key})`
  }
  static isRef(t) {
    return t && t.__isYupRef
  }
}
Reference.prototype.__isYupRef = !0;
const isAbsent = e => e == null;

function createValidation(e) {
  function t({
    value: r,
    path: i = "",
    options: s,
    originalValue: n,
    schema: a
  }, l, o) {
    const {
      name: c,
      test: f,
      params: b,
      message: u,
      skipAbsent: y
    } = e;
    let {
      parent: g,
      context: v,
      abortEarly: E = a.spec.abortEarly,
      disableStackTrace: p = a.spec.disableStackTrace
    } = s;
    const m = {
      value: r,
      parent: g,
      context: v
    };

    function d(L = {}) {
      const N = resolveParams(Object.assign({
          value: r,
          originalValue: n,
          label: a.spec.label,
          path: L.path || i,
          spec: a.spec,
          disableStackTrace: L.disableStackTrace || p
        }, b, L.params), m),
        z = new ValidationError(ValidationError.formatError(L.message || u, N), r, N.path, L.type || c, N.disableStackTrace);
      return z.params = N, z
    }
    const _ = E ? l : o;
    let x = {
      path: i,
      parent: g,
      type: c,
      from: s.from,
      createError: d,
      resolve(L) {
        return resolveMaybeRef(L, m)
      },
      options: s,
      originalValue: n,
      schema: a
    };
    const P = L => {
        ValidationError.isError(L) ? _(L) : L ? o(null) : _(d())
      },
      T = L => {
        ValidationError.isError(L) ? _(L) : l(L)
      };
    if (y && isAbsent(r)) return P(!0);
    let B;
    try {
      var D;
      if (B = f.call(x, r, x), typeof((D = B) == null ? void 0 : D.then) == "function") {
        if (s.sync) throw new Error(`Validation test of type: "${x.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(B).then(P, T)
      }
    } catch (L) {
      T(L);
      return
    }
    P(B)
  }
  return t.OPTIONS = e, t
}

function resolveParams(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e)) e[r] = resolveMaybeRef(e[r], t);
  return e
}

function resolveMaybeRef(e, t) {
  return Reference.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e
}

function getIn(e, t, r, i = r) {
  let s, n, a;
  return t ? (propertyExprExports.forEach(t, (l, o, c) => {
    let f = o ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: i,
      parent: s,
      value: r
    });
    let b = e.type === "tuple",
      u = c ? parseInt(f, 10) : 0;
    if (e.innerType || b) {
      if (b && !c) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (r && u >= r.length) throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      s = r, r = r && r[u], e = b ? e.spec.types[u] : e.innerType
    }
    if (!c) {
      if (!e.fields || !e.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
      s = r, r = r && r[f], e = e.fields[f]
    }
    n = f, a = o ? "[" + l + "]" : "." + l
  }), {
    schema: e,
    parent: s,
    parentPath: n
  }) : {
    parent: s,
    parentPath: t,
    schema: e
  }
}
class ReferenceSet extends Set {
  describe() {
    const t = [];
    for (const r of this.values()) t.push(Reference.isRef(r) ? r.describe() : r);
    return t
  }
  resolveAll(t) {
    let r = [];
    for (const i of this.values()) r.push(t(i));
    return r
  }
  clone() {
    return new ReferenceSet(this.values())
  }
  merge(t, r) {
    const i = this.clone();
    return t.forEach(s => i.add(s)), r.forEach(s => i.delete(s)), i
  }
}

function clone(e, t = new Map) {
  if (isSchema(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date) r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp) r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let i = 0; i < e.length; i++) r[i] = clone(e[i], t)
  } else if (e instanceof Map) {
    r = new Map, t.set(e, r);
    for (const [i, s] of e.entries()) r.set(i, clone(s, t))
  } else if (e instanceof Set) {
    r = new Set, t.set(e, r);
    for (const i of e) r.add(clone(i, t))
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [i, s] of Object.entries(e)) r[i] = clone(s, t)
  } else throw Error(`Unable to clone ${e}`);
  return r
}

function createStandardPath(e) {
  if (!(e != null && e.length)) return;
  const t = [];
  let r = "",
    i = !1,
    s = !1;
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    if (a === "[" && !s) {
      r && (t.push(...r.split(".").filter(Boolean)), r = ""), i = !0;
      continue
    }
    if (a === "]" && !s) {
      r && (/^\d+$/.test(r) ? t.push(r) : t.push(r.replace(/^"|"$/g, "")), r = ""), i = !1;
      continue
    }
    if (a === '"') {
      s = !s;
      continue
    }
    if (a === "." && !i && !s) {
      r && (t.push(r), r = "");
      continue
    }
    r += a
  }
  return r && t.push(...r.split(".").filter(Boolean)), t
}

function createStandardIssues(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map(i => ({
    message: i,
    path: createStandardPath(r)
  }))
}

function issuesFromValidationError(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length) return createStandardIssues(e, t);
  const i = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap(s => issuesFromValidationError(s, i))
}
class Schema {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ReferenceSet, this._blacklist = new ReferenceSet, this.exclusiveTests = Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(mixed.notType)
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation(r => {
      r.nonNullable()
    })
  }
  get _type() {
    return this.type
  }
  clone(t) {
    if (this._mutate) return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = clone(Object.assign({}, this.spec, t)), r
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let i = t(this);
    return this._mutate = r, i
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this,
      i = t.clone();
    const s = Object.assign({}, r.spec, i.spec);
    return i.spec = s, i.internalTests = Object.assign({}, r.internalTests, i.internalTests), i._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), i._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), i.tests = r.tests, i.exclusiveTests = r.exclusiveTests, i.withMutation(n => {
      t.tests.forEach(a => {
        n.test(a.OPTIONS)
      })
    }), i.transforms = [...r.transforms, ...i.transforms], i
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t)
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let i = r.conditions;
      r = r.clone(), r.conditions = [], r = i.reduce((s, n) => n.resolve(s, t), r), r = r.resolve(t)
    }
    return r
  }
  resolveOptions(t) {
    var r, i, s, n;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (i = t.abortEarly) != null ? i : this.spec.abortEarly,
      recursive: (s = t.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (n = t.disableStackTrace) != null ? n : this.spec.disableStackTrace
    })
  }
  cast(t, r = {}) {
    let i = this.resolve(Object.assign({}, r, {
        value: t
      })),
      s = r.assert === "ignore-optionality",
      n = i._cast(t, r);
    if (r.assert !== !1 && !i.isType(n)) {
      if (s && isAbsent(n)) return n;
      let a = printValue(t),
        l = printValue(n);
      throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : ""))
    }
    return n
  }
  _cast(t, r) {
    let i = t === void 0 ? t : this.transforms.reduce((s, n) => n.call(this, s, t, this, r), t);
    return i === void 0 && (i = this.getDefault(r)), i
  }
  _validate(t, r = {}, i, s) {
    let {
      path: n,
      originalValue: a = t,
      strict: l = this.spec.strict
    } = r, o = t;
    l || (o = this._cast(o, Object.assign({
      assert: !1
    }, r)));
    let c = [];
    for (let f of Object.values(this.internalTests)) f && c.push(f);
    this.runTests({
      path: n,
      value: o,
      originalValue: a,
      options: r,
      tests: c
    }, i, f => {
      if (f.length) return s(f, o);
      this.runTests({
        path: n,
        value: o,
        originalValue: a,
        options: r,
        tests: this.tests
      }, i, s)
    })
  }
  runTests(t, r, i) {
    let s = !1,
      {
        tests: n,
        value: a,
        originalValue: l,
        path: o,
        options: c
      } = t,
      f = v => {
        s || (s = !0, r(v, a))
      },
      b = v => {
        s || (s = !0, i(v, a))
      },
      u = n.length,
      y = [];
    if (!u) return b([]);
    let g = {
      value: a,
      originalValue: l,
      path: o,
      options: c,
      schema: this
    };
    for (let v = 0; v < n.length; v++) {
      const E = n[v];
      E(g, f, function(m) {
        m && (Array.isArray(m) ? y.push(...m) : y.push(m)), --u <= 0 && b(y)
      })
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: i,
    parentPath: s,
    originalParent: n,
    options: a
  }) {
    const l = t ?? r;
    if (l == null) throw TypeError("Must include `key` or `index` for nested validations");
    const o = typeof l == "number";
    let c = i[l];
    const f = Object.assign({}, a, {
      strict: !0,
      parent: i,
      value: c,
      originalValue: n[l],
      key: void 0,
      [o ? "index" : "key"]: l,
      path: o || l.includes(".") ? `${s||""}[${o?l:`"${l}"`}]` : (s ? `${s}.` : "") + t
    });
    return (b, u, y) => this.resolve(f)._validate(c, f, u, y)
  }
  validate(t, r) {
    var i;
    let s = this.resolve(Object.assign({}, r, {
        value: t
      })),
      n = (i = r?.disableStackTrace) != null ? i : s.spec.disableStackTrace;
    return new Promise((a, l) => s._validate(t, r, (o, c) => {
      ValidationError.isError(o) && (o.value = c), l(o)
    }, (o, c) => {
      o.length ? l(new ValidationError(o, c, void 0, void 0, n)) : a(c)
    }))
  }
  validateSync(t, r) {
    var i;
    let s = this.resolve(Object.assign({}, r, {
        value: t
      })),
      n, a = (i = r?.disableStackTrace) != null ? i : s.spec.disableStackTrace;
    return s._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, o) => {
      throw ValidationError.isError(l) && (l.value = o), l
    }, (l, o) => {
      if (l.length) throw new ValidationError(l, t, void 0, void 0, a);
      n = o
    }), n
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, i => {
      if (ValidationError.isError(i)) return !1;
      throw i
    })
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0
    } catch (i) {
      if (ValidationError.isError(i)) return !1;
      throw i
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : clone(r)
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t)
  }
  default (t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    })
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    })
  }
  nullability(t, r) {
    const i = this.clone({
      nullable: t
    });
    return i.internalTests.nullable = createValidation({
      message: r,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0
      }
    }), i
  }
  optionality(t, r) {
    const i = this.clone({
      optional: t
    });
    return i.internalTests.optionality = createValidation({
      message: r,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0
      }
    }), i
  }
  optional() {
    return this.optionality(!0)
  }
  defined(t = mixed.defined) {
    return this.optionality(!1, t)
  }
  nullable() {
    return this.nullability(!0)
  }
  nonNullable(t = mixed.notNull) {
    return this.nullability(!1, t)
  }
  required(t = mixed.required) {
    return this.clone().withMutation(r => r.nonNullable(t).defined(t))
  }
  notRequired() {
    return this.clone().withMutation(t => t.nullable().optional())
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r
  }
  test(...t) {
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
        test: t[0]
      } : r = t[0] : t.length === 2 ? r = {
        name: t[0],
        test: t[1]
      } : r = {
        name: t[0],
        message: t[1],
        test: t[2]
      }, r.message === void 0 && (r.message = mixed.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let i = this.clone(),
      s = createValidation(r),
      n = r.exclusive || r.name && i.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (i.exclusiveTests[r.name] = !!r.exclusive), i.tests = i.tests.filter(a => !(a.OPTIONS.name === r.name && (n || a.OPTIONS.test === s.OPTIONS.test))), i.tests.push(s), i
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let i = this.clone(),
      s = toArray(t).map(n => new Reference(n));
    return s.forEach(n => {
      n.isSibling && i.deps.push(n.key)
    }), i.conditions.push(typeof r == "function" ? new Condition(s, r) : Condition.fromOptions(s, r)), i
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = createValidation({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(i) {
        return this.schema._typeCheck(i) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        })
      }
    }), r
  }
  oneOf(t, r = mixed.oneOf) {
    let i = this.clone();
    return t.forEach(s => {
      i._whitelist.add(s), i._blacklist.delete(s)
    }), i.internalTests.whiteList = createValidation({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let n = this.schema._whitelist,
          a = n.resolveAll(this.resolve);
        return a.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(n).join(", "),
            resolved: a
          }
        })
      }
    }), i
  }
  notOneOf(t, r = mixed.notOneOf) {
    let i = this.clone();
    return t.forEach(s => {
      i._blacklist.add(s), i._whitelist.delete(s)
    }), i.internalTests.blacklist = createValidation({
      message: r,
      name: "notOneOf",
      test(s) {
        let n = this.schema._blacklist,
          a = n.resolveAll(this.resolve);
        return a.includes(s) ? this.createError({
          params: {
            values: Array.from(n).join(", "),
            resolved: a
          }
        }) : !0
      }
    }), i
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(),
      {
        label: i,
        meta: s,
        optional: n,
        nullable: a
      } = r.spec;
    return {
      meta: s,
      label: i,
      optional: n,
      nullable: a,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.filter((o, c, f) => f.findIndex(b => b.OPTIONS.name === o.OPTIONS.name) === c).map(o => {
        const c = o.OPTIONS.params && t ? resolveParams(Object.assign({}, o.OPTIONS.params), t) : o.OPTIONS.params;
        return {
          name: o.OPTIONS.name,
          params: c
        }
      })
    }
  }
  get "~standard"() {
    const t = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(i) {
        try {
          return {
            value: await t.validate(i, {
              abortEarly: !1
            })
          }
        } catch (s) {
          if (s instanceof ValidationError) return {
            issues: issuesFromValidationError(s)
          };
          throw s
        }
      }
    }
  }
}
Schema.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Schema.prototype[`${e}At`] = function(t, r, i = {}) {
  const {
    parent: s,
    parentPath: n,
    schema: a
  } = getIn(this, t, r, i.context);
  return a[e](s && s[n], Object.assign({}, i, {
    parent: s,
    path: t
  }))
};
for (const e of ["equals", "is"]) Schema.prototype[e] = Schema.prototype.oneOf;
for (const e of ["not", "nope"]) Schema.prototype[e] = Schema.prototype.notOneOf;
const isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;

function parseIsoDate(e) {
  const t = parseDateStruct(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0) return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond)
}

function parseDateStruct(e) {
  var t, r;
  const i = isoReg.exec(e);
  return i ? {
    year: toNumber(i[1]),
    month: toNumber(i[2], 1) - 1,
    day: toNumber(i[3], 1),
    hour: toNumber(i[4]),
    minute: toNumber(i[5]),
    second: toNumber(i[6]),
    millisecond: i[7] ? toNumber(i[7].substring(0, 3)) : 0,
    precision: (t = (r = i[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: i[8] || void 0,
    plusMinus: i[9] || void 0,
    hourOffset: toNumber(i[10]),
    minuteOffset: toNumber(i[11])
  } : null
}

function toNumber(e, t = 0) {
  return Number(e) || t
}
let rEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  yearMonthDay = "^\\d{4}-\\d{2}-\\d{2}",
  hourMinuteSecond = "\\d{2}:\\d{2}:\\d{2}",
  zOrOffset = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
  rIsoDateTime = new RegExp(`${yearMonthDay}T${hourMinuteSecond}(\\.\\d+)?${zOrOffset}$`),
  isTrimmed = e => isAbsent(e) || e === e.trim(),
  objStringTag = {}.toString();

function create$6() {
  return new StringSchema
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string"
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce || this.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === objStringTag ? t : i
      })
    })
  }
  required(t) {
    return super.required(t).withMutation(r => r.test({
      message: t || mixed.required,
      name: "required",
      skipAbsent: !0,
      test: i => !!i.length
    }))
  }
  notRequired() {
    return super.notRequired().withMutation(t => (t.tests = t.tests.filter(r => r.OPTIONS.name !== "required"), t))
  }
  length(t, r = string.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length === this.resolve(t)
      }
    })
  }
  min(t, r = string.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length >= this.resolve(t)
      }
    })
  }
  max(t, r = string.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length <= this.resolve(t)
      }
    })
  }
  matches(t, r) {
    let i = !1,
      s, n;
    return r && (typeof r == "object" ? {
      excludeEmptyString: i = !1,
      message: s,
      name: n
    } = r : s = r), this.test({
      name: n || "matches",
      message: s || string.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: a => a === "" && i || a.search(t) !== -1
    })
  }
  email(t = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    })
  }
  url(t = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    })
  }
  uuid(t = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    })
  }
  datetime(t) {
    let r = "",
      i, s;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: i = !1,
      precision: s = void 0
    } = t : r = t), this.matches(rIsoDateTime, {
      name: "datetime",
      message: r || string.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || string.datetime_offset,
      params: {
        allowOffset: i
      },
      skipAbsent: !0,
      test: n => {
        if (!n || i) return !0;
        const a = parseDateStruct(n);
        return a ? !!a.z : !1
      }
    }).test({
      name: "datetime_precision",
      message: r || string.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: n => {
        if (!n || s == null) return !0;
        const a = parseDateStruct(n);
        return a ? a.precision === s : !1
      }
    })
  }
  ensure() {
    return this.default("").transform(t => t === null ? "" : t)
  }
  trim(t = string.trim) {
    return this.transform(r => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: isTrimmed
    })
  }
  lowercase(t = string.lowercase) {
    return this.transform(r => isAbsent(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: r => isAbsent(r) || r === r.toLowerCase()
    })
  }
  uppercase(t = string.uppercase) {
    return this.transform(r => isAbsent(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: r => isAbsent(r) || r === r.toUpperCase()
    })
  }
}
create$6.prototype = StringSchema.prototype;
let invalidDate = new Date(""),
  isDate = e => Object.prototype.toString.call(e) === "[object Date]";
class DateSchema extends Schema {
  constructor() {
    super({
      type: "date",
      check(t) {
        return isDate(t) && !isNaN(t.getTime())
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = parseIsoDate(t), isNaN(t) ? DateSchema.INVALID_DATE : new Date(t)))
    })
  }
  prepareParam(t, r) {
    let i;
    if (Reference.isRef(t)) i = t;
    else {
      let s = this.cast(t);
      if (!this._typeCheck(s)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      i = s
    }
    return i
  }
  min(t, r = date.min) {
    let i = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(i)
      }
    })
  }
  max(t, r = date.max) {
    let i = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(i)
      }
    })
  }
}
DateSchema.INVALID_DATE = invalidDate;

function sortFields(e, t = []) {
  let r = [],
    i = new Set,
    s = new Set(t.map(([a, l]) => `${a}-${l}`));

  function n(a, l) {
    let o = propertyExprExports.split(a)[0];
    i.add(o), s.has(`${l}-${o}`) || r.push([l, o])
  }
  for (const a of Object.keys(e)) {
    let l = e[a];
    i.add(a), Reference.isRef(l) && l.isSibling ? n(l.path, a) : isSchema(l) && "deps" in l && l.deps.forEach(o => n(o, a))
  }
  return toposort.array(Array.from(i), r).reverse()
}

function findIndex(e, t) {
  let r = 1 / 0;
  return e.some((i, s) => {
    var n;
    if ((n = t.path) != null && n.includes(i)) return r = s, !0
  }), r
}

function sortByKeyOrder(e) {
  return (t, r) => findIndex(e, t) - findIndex(e, r)
}
const parseJson = (e, t, r) => {
  if (typeof e != "string") return e;
  let i = e;
  try {
    i = JSON.parse(e)
  } catch {}
  return r.isType(i) ? i : e
};

function deepPartial(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, i] of Object.entries(e.fields)) t[r] = deepPartial(i);
    return e.setFields(t)
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = deepPartial(t.innerType)), t
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(deepPartial)
  }) : "optional" in e ? e.optional() : e
}
const deepHas = (e, t) => {
  const r = [...propertyExprExports.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let i = r.pop(),
    s = propertyExprExports.getter(propertyExprExports.join(r), !0)(e);
  return !!(s && i in s)
};
let isObject = e => Object.prototype.toString.call(e) === "[object Object]";

function unknown(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter(i => r.indexOf(i) === -1)
}
const defaultSort = sortByKeyOrder([]);

function create$3(e) {
  return new ObjectSchema(e)
}
class ObjectSchema extends Schema {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return isObject(r) || typeof r == "function"
      }
    }), this.fields = Object.create(null), this._sortErrors = defaultSort, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t)
    })
  }
  _cast(t, r = {}) {
    var i;
    let s = super._cast(t, r);
    if (s === void 0) return this.getDefault(r);
    if (!this._typeCheck(s)) return s;
    let n = this.fields,
      a = (i = r.stripUnknown) != null ? i : this.spec.noUnknown,
      l = [].concat(this._nodes, Object.keys(s).filter(b => !this._nodes.includes(b))),
      o = {},
      c = Object.assign({}, r, {
        parent: o,
        __validating: r.__validating || !1
      }),
      f = !1;
    for (const b of l) {
      let u = n[b],
        y = b in s,
        g = s[b];
      if (u) {
        let v;
        c.path = (r.path ? `${r.path}.` : "") + b, u = u.resolve({
          value: g,
          context: r.context,
          parent: o
        });
        let E = u instanceof Schema ? u.spec : void 0,
          p = E?.strict;
        if (E != null && E.strip) {
          f = f || b in s;
          continue
        }
        v = !r.__validating || !p ? u.cast(g, c) : g, v !== void 0 && (o[b] = v)
      } else y && !a && (o[b] = g);
      (y !== b in o || o[b] !== g) && (f = !0)
    }
    return f ? o : s
  }
  _validate(t, r = {}, i, s) {
    let {
      from: n = [],
      originalValue: a = t,
      recursive: l = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: a
    }, ...n], r.__validating = !0, r.originalValue = a, super._validate(t, r, i, (o, c) => {
      if (!l || !isObject(c)) {
        s(o, c);
        return
      }
      a = a || c;
      let f = [];
      for (let b of this._nodes) {
        let u = this.fields[b];
        !u || Reference.isRef(u) || f.push(u.asNestedTest({
          options: r,
          key: b,
          parent: c,
          parentPath: r.path,
          originalParent: a
        }))
      }
      this.runTests({
        tests: f,
        value: c,
        originalValue: a,
        options: r
      }, i, b => {
        s(b.sort(this._sortErrors).concat(o), c)
      })
    })
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r
  }
  concat(t) {
    let r = super.concat(t),
      i = r.fields;
    for (let [s, n] of Object.entries(this.fields)) {
      const a = i[s];
      i[s] = a === void 0 ? n : a
    }
    return r.withMutation(s => s.setFields(i, [...this._excludedEdges, ...t._excludedEdges]))
  }
  _getDefault(t) {
    if ("default" in this.spec) return super._getDefault(t);
    if (!this._nodes.length) return;
    let r = {};
    return this._nodes.forEach(i => {
      var s;
      const n = this.fields[i];
      let a = t;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[i]
      })), r[i] = n && "getDefault" in n ? n.getDefault(a) : void 0
    }), r
  }
  setFields(t, r) {
    let i = this.clone();
    return i.fields = t, i._nodes = sortFields(t, r), i._sortErrors = sortByKeyOrder(Object.keys(t)), r && (i._excludedEdges = r), i
  }
  shape(t, r = []) {
    return this.clone().withMutation(i => {
      let s = i._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), s = [...i._excludedEdges, ...r]), i.setFields(Object.assign(i.fields, t), s)
    })
  }
  partial() {
    const t = {};
    for (const [r, i] of Object.entries(this.fields)) t[r] = "optional" in i && i.optional instanceof Function ? i.optional() : i;
    return this.setFields(t)
  }
  deepPartial() {
    return deepPartial(this)
  }
  pick(t) {
    const r = {};
    for (const i of t) this.fields[i] && (r[i] = this.fields[i]);
    return this.setFields(r, this._excludedEdges.filter(([i, s]) => t.includes(i) && t.includes(s)))
  }
  omit(t) {
    const r = [];
    for (const i of Object.keys(this.fields)) t.includes(i) || r.push(i);
    return this.pick(r)
  }
  from(t, r, i) {
    let s = propertyExprExports.getter(t, !0);
    return this.transform(n => {
      if (!n) return n;
      let a = n;
      return deepHas(n, t) && (a = Object.assign({}, n), i || delete a[t], a[r] = s(n)), a
    })
  }
  json() {
    return this.transform(parseJson)
  }
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || object.exact,
      test(r) {
        if (r == null) return !0;
        const i = unknown(this.schema, r);
        return i.length === 0 || this.createError({
          params: {
            properties: i.join(", ")
          }
        })
      }
    })
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    })
  }
  noUnknown(t = !0, r = object.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let i = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(s) {
        if (s == null) return !0;
        const n = unknown(this.schema, s);
        return !t || n.length === 0 || this.createError({
          params: {
            unknown: n.join(", ")
          }
        })
      }
    });
    return i.spec.noUnknown = t, i
  }
  unknown(t = !0, r = object.noUnknown) {
    return this.noUnknown(!t, r)
  }
  transformKeys(t) {
    return this.transform(r => {
      if (!r) return r;
      const i = {};
      for (const s of Object.keys(r)) i[t(s)] = r[s];
      return i
    })
  }
  camelCase() {
    return this.transformKeys(tinyCaseExports.camelCase)
  }
  snakeCase() {
    return this.transformKeys(tinyCaseExports.snakeCase)
  }
  constantCase() {
    return this.transformKeys(t => tinyCaseExports.snakeCase(t).toUpperCase())
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(),
      i = super.describe(t);
    i.fields = {};
    for (const [n, a] of Object.entries(r.fields)) {
      var s;
      let l = t;
      (s = l) != null && s.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[n]
      })), i.fields[n] = a.describe(l)
    }
    return i
  }
}
create$3.prototype = ObjectSchema.prototype;
const _hoisted_1$B = {
    class: "form-fields"
  },
  _hoisted_2$o = {
    key: 0,
    class: "form-error l1-bold"
  },
  _hoisted_3$l = {
    class: "form-btn"
  },
  _hoisted_4$i = {
    class: "form-sent-btn"
  },
  _hoisted_5$c = {
    class: "form-policy b1-light"
  },
  _hoisted_6$a = {
    href: "/privacy-policy.pdf",
    target: "_blank"
  },
  _sfc_main$B = defineComponent({
    __name: "box",
    setup(e) {
      const t = ref(!1),
        r = ref(!1),
        i = [{
          value: "Purpose 1",
          text: "Purpose 1"
        }, {
          value: "Purpose 2",
          text: "Purpose 2"
        }, {
          value: "Purpose 3",
          text: "Purpose 3"
        }],
        s = create$3({
          name: create$6().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format"),
          email: create$6().required("Is a required field").matches(emailRegex, "Enter a valid e-mail (e.g. test@gmail.com)"),
          purpose: create$6().required("Is a required field"),
          message: create$6()
        }),
        n = async a => {
          t.value = !0, r.value = !0;
          const l = await $fetch("/api/form", {
              method: "POST",
              body: JSON.stringify(a)
            }),
            o = await $fetch("/api/gmail", {
              method: "POST",
              body: JSON.stringify(a)
            });
          console.log("telegram", l), console.log("gmail", o), setTimeout(() => {
            t.value = !1
          }, 3e3)
        };
      return (a, l) => {
        const o = __nuxt_component_0$a,
          c = __nuxt_component_1$a,
          f = __nuxt_component_2$8,
          b = __nuxt_component_3$5,
          u = __nuxt_component_1$h,
          y = __nuxt_component_5$1,
          g = __nuxt_component_5$2;
        return openBlock(), createBlock(unref(Form), {
          "validation-schema": unref(s),
          class: "form",
          onSubmit: n
        }, {
          default: withCtx(({
            errors: v
          }) => [createBaseVNode("div", _hoisted_1$B, [createVNode(o, {
            name: "name",
            type: "text",
            label: "Name"
          }), createVNode(o, {
            name: "email",
            type: "email",
            label: "Email"
          }), createVNode(f, null, {
            default: withCtx(() => [createVNode(c, {
              name: "purpose",
              label: "Purpose",
              options: i
            })]),
            _: 1
          }), createVNode(b, {
            name: "message",
            label: "Message"
          })]), Object.keys(v).length ? (openBlock(), createElementBlock("div", _hoisted_2$o, " Please fill in all required fields ")) : createCommentVNode("", !0), createBaseVNode("div", {
            class: normalizeClass(["form-btns", {
              sent: unref(t)
            }])
          }, [createBaseVNode("div", _hoisted_3$l, [createVNode(u, {
            text: unref(r) ? "re-submit" : "submit",
            "is-black": ""
          }, null, 8, ["text"])]), createBaseVNode("div", _hoisted_4$i, [createVNode(y), l[0] || (l[0] = createBaseVNode("span", {
            class: "l1-bold"
          }, "sent", -1))])], 2), createBaseVNode("div", _hoisted_5$c, [l[1] || (l[1] = createTextVNode(' By clicking "Submit", I acknowledge that ', -1)), l[2] || (l[2] = createBaseVNode("br", null, null, -1)), l[3] || (l[3] = createTextVNode("I have read and agree to the ", -1)), createBaseVNode("a", _hoisted_6$a, [createVNode(g, {
            text: "Privacy Policy"
          })]), l[4] || (l[4] = createTextVNode(". ", -1))])]),
          _: 1
        }, 8, ["validation-schema"])
      }
    }
  }),
  __nuxt_component_1$9 = _export_sfc(_sfc_main$B, [
    ["__scopeId", "data-v-27b4ea75"]
  ]),
  _sfc_main$A = {},
  _hoisted_1$A = {
    class: "form-body"
  };

function _sfc_render$l(e, t) {
  const r = __nuxt_component_0$c,
    i = __nuxt_component_1$9;
  return openBlock(), createElementBlock("div", _hoisted_1$A, [createVNode(r), createVNode(i)])
}
const __nuxt_component_2$4 = _export_sfc(_sfc_main$A, [
    ["render", _sfc_render$l],
    ["__scopeId", "data-v-1b7c5ab8"]
  ]),
  _hoisted_1$z = {
    class: "form-container",
    "data-lenis-prevent": ""
  },
  _hoisted_2$n = {
    class: "form-close-wrap"
  },
  _hoisted_3$k = {
    class: "form-box"
  },
  _sfc_main$z = defineComponent({
    __name: "index",
    setup(e) {
      const t = useState("open-form"),
        r = () => {
          t.value = !1, useLockScroll(!1);
          const s = gsapWithCSS.timeline();
          s.to(".form-wrap .form-container", {
            yPercent: 105,
            duration: 1
          }), s.to(".form-wrap .blur", {
            opacity: 0,
            duration: 1
          }, "<"), s.set(".form-wrap", {
            display: "none"
          })
        },
        i = s => {
          const n = document.querySelector(".form-wrap .form-box");
          n && !n.contains(s.target) && r()
        };
      return (s, n) => {
        const a = __nuxt_component_0$e,
          l = __nuxt_component_1$c,
          o = __nuxt_component_2$4;
        return openBlock(), createElementBlock("div", {
          class: "form-wrap",
          onClick: i
        }, [n[0] || (n[0] = createBaseVNode("div", {
          class: "blur"
        }, null, -1)), createBaseVNode("div", _hoisted_1$z, [createBaseVNode("div", _hoisted_2$n, [createBaseVNode("button", {
          class: "form-close",
          onClick: withModifiers(r, ["stop"])
        }, [createVNode(a)])]), createBaseVNode("div", _hoisted_3$k, [createVNode(l), createVNode(o)])])])
      }
    }
  }),
  __nuxt_component_3$4 = _export_sfc(_sfc_main$z, [
    ["__scopeId", "data-v-9b118723"]
  ]),
  _hoisted_1$y = {
    class: "chapter-nav"
  },
  _hoisted_2$m = ["onClick"],
  _hoisted_3$j = {
    class: "chapter-text"
  },
  _hoisted_4$h = {
    class: "chapter-text-wrap"
  },
  _hoisted_5$b = {
    key: 0,
    class: "chapter-decor-wrap chapter-decor-wrap-last"
  },
  _sfc_main$y = defineComponent({
    __name: "Nav",
    setup(e) {
      const t = [{
          text: "I",
          stId: "stChapterOne"
        }, {
          text: "II",
          stId: "stChapterTwo"
        }, {
          text: "III",
          stId: "stChapterThree"
        }, {
          text: "IV",
          stId: "stChapterFour"
        }, {
          text: "V",
          stId: "stChapterFive"
        }],
        {
          isDesktop: r
        } = useViewport(),
        i = s => {
          if (s) {
            const n = ScrollTrigger.getById(s),
              a = r.value ? window.innerHeight : window.innerHeight / 2;
            n && gsapWithCSS.to(window, {
              scrollTo: n.start + a,
              duration: 1,
              ease: "power1.out"
            })
          } else gsapWithCSS.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: "power1.out"
          })
        };
      return (s, n) => (openBlock(), createElementBlock("div", _hoisted_1$y, [(openBlock(), createElementBlock(Fragment, null, renderList(t, ({
        text: a,
        stId: l
      }, o) => createBaseVNode("div", {
        key: o,
        class: normalizeClass(["chapter-item l1-thin", {
          _active: o === 0
        }])
      }, [createBaseVNode("div", {
        class: "chapter-wrap",
        onClick: c => i(l)
      }, [createBaseVNode("div", _hoisted_3$j, [createBaseVNode("div", _hoisted_4$h, [n[1] || (n[1] = createBaseVNode("span", null, "Chapter", -1)), createTextVNode(" " + toDisplayString(a), 1)])]), n[3] || (n[3] = createBaseVNode("div", {
        class: "chapter-decor-wrap"
      }, [createBaseVNode("div", {
        class: "chapter-decor"
      })], -1)), o === 4 ? (openBlock(), createElementBlock("div", _hoisted_5$b, [...n[2] || (n[2] = [createBaseVNode("div", {
        class: "chapter-decor"
      }, null, -1)])])) : createCommentVNode("", !0), n[4] || (n[4] = createBaseVNode("div", {
        class: "chapter-line"
      }, [createBaseVNode("div", {
        class: "chapter-line-progress"
      })], -1)), n[5] || (n[5] = createBaseVNode("div", {
        class: "white-bg"
      }, null, -1))], 8, _hoisted_2$m), o === 4 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "chapter-text-last",
        onClick: n[0] || (n[0] = c => i())
      }, [...n[6] || (n[6] = [createTextVNode(" back to ", -1), createBaseVNode("span", {
        class: "l1-bold"
      }, "start", -1)])])) : createCommentVNode("", !0)], 2)), 64))]))
    }
  }),
  __nuxt_component_4$1 = _export_sfc(_sfc_main$y, [
    ["__scopeId", "data-v-499ae8a0"]
  ]),
  _imports_0$b = publicAssetsURL("/images/hero.webp"),
  _sfc_main$x = {},
  _hoisted_1$x = {
    class: "hero-wrap"
  },
  _hoisted_2$l = {
    class: "hero-sticky"
  },
  _hoisted_3$i = {
    class: "hero"
  },
  _hoisted_4$g = {
    ref: "logoRef",
    class: "preloader-logo"
  },
  _hoisted_5$a = {
    class: "scroll"
  },
  _hoisted_6$9 = {
    class: "scroll-wrap"
  },
  _hoisted_7$7 = {
    class: "scroll-arrow"
  },
  _hoisted_8$6 = {
    class: "scroll-arrow"
  };

function _sfc_render$k(e, t) {
  const r = __nuxt_component_0$i;
  return openBlock(), createElementBlock("div", _hoisted_1$x, [createBaseVNode("div", _hoisted_2$l, [createBaseVNode("section", _hoisted_3$i, [createBaseVNode("div", _hoisted_4$g, null, 512), (openBlock(), createElementBlock(Fragment, null, renderList(3, (i, s) => createBaseVNode("div", {
    key: s,
    class: normalizeClass(`img img-${s+1}`)
  }, [...t[0] || (t[0] = [createBaseVNode("img", {
    class: "inner-img",
    src: _imports_0$b,
    alt: ""
  }, null, -1)])], 2)), 64)), t[3] || (t[3] = createBaseVNode("div", {
    class: "content"
  }, [createBaseVNode("p", {
    class: "subtitle l1-bold"
  }, "nabil issa"), createBaseVNode("h1", {
    class: "title h1-thin"
  }, "Can design shape how we feel?"), createBaseVNode("p", {
    class: "descr l1-thin"
  }, [createTextVNode(" Architect "), createBaseVNode("br"), createTextVNode("Interior Designer Product Designer Creative Director ")])], -1)), createBaseVNode("div", _hoisted_5$a, [createBaseVNode("div", _hoisted_6$9, [createBaseVNode("div", _hoisted_7$7, [createVNode(r)]), t[1] || (t[1] = createBaseVNode("div", {
    class: "l1-bold"
  }, [createBaseVNode("span", {
    class: "scroll-word-1"
  }, "Scroll"), createTextVNode(" down ")], -1)), t[2] || (t[2] = createBaseVNode("div", {
    class: "l1-thin"
  }, "to begin the story", -1)), createBaseVNode("div", _hoisted_8$6, [createVNode(r)])])])])])])
}
const __nuxt_component_5 = _export_sfc(_sfc_main$x, [
    ["render", _sfc_render$k],
    ["__scopeId", "data-v-828729d2"]
  ]),
  _hoisted_1$w = {
    class: "chapter-title"
  },
  _hoisted_2$k = ["innerHTML"],
  _sfc_main$w = defineComponent({
    __name: "Title",
    props: {
      text: {}
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("div", _hoisted_1$w, [r[0] || (r[0] = createBaseVNode("div", {
        class: "decor"
      }, null, -1)), createBaseVNode("div", {
        class: "title-text l1-thin",
        innerHTML: e.text
      }, null, 8, _hoisted_2$k)]))
    }
  }),
  __nuxt_component_0$9 = _export_sfc(_sfc_main$w, [
    ["__scopeId", "data-v-8c7a0c4d"]
  ]),
  _hoisted_1$v = {
    class: "chapter-count l1-thin"
  },
  _sfc_main$v = defineComponent({
    __name: "Count",
    props: {
      count: {}
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("div", _hoisted_1$v, " chapter " + toDisplayString(e.count), 1))
    }
  }),
  __nuxt_component_1$8 = _export_sfc(_sfc_main$v, [
    ["__scopeId", "data-v-25e4460d"]
  ]),
  _imports_0$a = publicAssetsURL("/images/photo1.webp"),
  _sfc_main$u = {},
  _hoisted_1$u = {
    class: "sect-1-wrap"
  },
  _hoisted_2$j = {
    class: "sect-1-sticky"
  },
  _hoisted_3$h = {
    class: "sect-1"
  },
  _hoisted_4$f = {
    class: "sect-1-content"
  };

function _sfc_render$j(e, t) {
  const r = __nuxt_component_0$9,
    i = __nuxt_component_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$u, [createBaseVNode("div", _hoisted_2$j, [createBaseVNode("section", _hoisted_3$h, [createBaseVNode("div", _hoisted_4$f, [t[0] || (t[0] = createBaseVNode("div", {
    class: "img-wrap"
  }, [createBaseVNode("img", {
    class: "img",
    src: _imports_0$a,
    alt: ""
  })], -1)), createVNode(r, {
    text: "nabil <strong>issa</strong>"
  }), createVNode(i, {
    count: "I"
  })])])])])
}
const __nuxt_component_0$8 = _export_sfc(_sfc_main$u, [
    ["render", _sfc_render$j],
    ["__scopeId", "data-v-938bb7c7"]
  ]),
  _sfc_main$t = {},
  _hoisted_1$t = {
    class: "svg",
    viewBox: "0 0 122 58",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function _sfc_render$i(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, [...t[0] || (t[0] = [createBaseVNode("path", {
    d: "M29.9608 25.7171C29.74 27.428 29.5031 29.0822 29.5696 30.6505C29.6134 32.4337 30.0411 34.0709 30.0292 36.1901C29.9735 37.3948 29.7703 38.6724 29.6784 39.7081C29.5528 42.1336 29.4778 44.5785 29.4508 47.0509C29.4444 47.6502 29.4394 48.249 29.4383 48.8495C29.4458 50.3444 29.4187 52.2359 29.646 53.2431C29.6006 53.2345 29.9865 53.5398 30.4367 53.8083C30.5301 53.8309 30.2417 53.7852 30.3255 53.7912C30.2582 53.8213 30.3806 53.7561 30.4707 53.6617C30.5685 53.5673 30.6776 53.4431 30.7827 53.3125C30.9951 53.0483 31.2042 52.7483 31.4076 52.4406C31.8138 51.8237 32.2024 51.1696 32.587 50.5099C33.469 49.0294 34.3157 47.6712 35.0375 46.1922C36.1951 43.9004 37.0665 41.5069 38.2814 39.0692C39.091 37.5125 39.8921 35.9647 40.7295 34.4177C41.0693 33.7932 41.415 33.1669 41.7952 32.5398C42.2102 31.8506 42.5124 31.1765 42.7648 30.3278C42.8008 30.2224 42.825 30.1517 42.8593 30.0539C42.8639 30.0408 42.8786 29.9988 42.8913 29.9652C42.8931 29.9604 42.8951 29.9553 42.8975 29.9492C42.8981 29.9477 42.8988 29.9461 42.8994 29.9444C42.8998 29.9436 42.9001 29.9427 42.9005 29.9418C42.904 29.937 42.8865 29.963 42.9485 29.8384C42.9592 29.8189 42.972 29.7946 43.0022 29.7502C43.0403 29.7043 43.0573 29.641 43.2633 29.4927C43.3677 29.4266 43.5743 29.3025 43.9155 29.3407C44.2643 29.377 44.5368 29.647 44.6184 29.8047C44.7869 30.1348 44.7388 30.2132 44.7509 30.2869C44.7417 30.5065 44.7292 30.4758 44.7254 30.5117C44.7153 30.5534 44.7217 30.5266 44.7199 30.534C44.7194 30.5359 44.719 30.5377 44.7185 30.5395C44.7149 30.5533 44.7122 30.5627 44.7096 30.572C44.7045 30.5897 44.699 30.6083 44.6939 30.6249C44.6832 30.6601 44.6618 30.7288 44.6515 30.7614C44.5932 30.9466 44.5411 31.1093 44.4822 31.2939C44.3704 31.6438 44.258 31.9949 44.147 32.3427C43.9231 33.0448 43.7013 33.7437 43.4822 34.4438C43.0616 35.8099 42.5568 37.358 42.3008 38.527C42.213 39.1487 42.2586 39.9512 42.3932 40.3242C42.5601 40.7794 43.3149 41.2652 44.0886 41.4579C45.8356 41.9673 47.4891 40.6789 49.8003 39.7013C50.8149 39.3392 51.8876 38.6372 53.1667 38.1139C53.2745 38.0731 53.3916 38.0312 53.5817 38.0167C53.7892 37.9798 54.2866 38.1176 54.483 38.4268C54.6779 38.7093 54.6819 38.8983 54.6997 39.0378C54.7176 39.3124 54.6854 39.4757 54.6584 39.6417C54.5992 39.962 54.5207 40.2287 54.4431 40.491C54.2906 41.0026 54.1053 41.5288 54.032 41.9038C53.7618 43.3716 53.5262 44.7658 53.6162 46.1405C53.6154 46.227 53.6578 46.2739 53.5919 46.172C53.5137 46.0461 53.2851 46.0229 53.393 46.0351C54.9024 45.9651 56.7396 45.061 58.3841 44.2631C60.8521 43.0075 63.4558 42.0186 65.9324 40.9496C66.6253 40.566 67.7039 40.8664 68.1081 41.1256C68.4758 41.3046 68.7114 41.5222 68.934 41.8177C69.8465 43.3792 69.1044 44.6579 68.7771 45.7212C68.6515 46.0636 68.5182 46.3954 68.3778 46.7269C68.0471 47.4948 67.706 48.2492 67.2159 48.9997C67.1927 49.0341 67.174 49.0652 67.174 49.0649C67.1745 49.0633 67.177 49.0606 67.1887 49.03C67.1943 49.0146 67.2019 48.9932 67.2097 48.9566C67.2137 48.9351 67.23 48.8662 67.2172 48.7622C67.2073 48.6614 67.1418 48.4743 66.9801 48.356C66.6542 48.147 66.4818 48.2604 66.4227 48.2686C66.3744 48.2867 66.3682 48.2918 66.3526 48.2996C66.3272 48.3137 66.3238 48.3172 66.3231 48.3177C66.3345 48.3116 66.4195 48.2402 66.4767 48.1887C66.6062 48.073 66.7406 47.9464 66.8747 47.82C67.1444 47.5653 67.4154 47.3065 67.6907 47.0496C68.2549 46.5352 68.7669 46.0234 69.5052 45.5458C70.2339 45.1124 71.0475 44.9211 71.8676 44.9189C72.933 44.9899 73.4024 45.6352 73.9194 45.9957C74.4211 46.3953 74.9136 46.7084 75.4562 46.835C77.2899 47.2235 79.3629 46.4597 81.3428 45.8447C83.9013 45.0392 86.4468 44.2862 88.907 43.3011C89.5246 43.0544 90.1489 42.8342 90.7685 42.6202C91.716 42.294 92.6499 41.9719 93.5574 41.585C94.8854 41.0126 96.2581 40.5662 97.5609 40.0285C99.2252 39.3247 100.952 38.7171 102.574 38.013C104.71 36.9889 107.042 36.4405 109.313 35.9897C109.391 35.9722 109.47 35.9557 109.548 35.9406C111.788 35.5457 114.012 35.8321 116.208 35.9925C116.917 36.0469 117.629 36.1669 118.306 36.4089C118.75 36.5672 119.176 36.7807 119.565 37.0461C120.438 37.6636 120.724 38.7021 121.051 39.6159C121.052 39.6203 121.055 39.6333 121.055 39.638C121.076 40.367 121.085 41.096 121.004 41.8259C120.98 42.0186 120.949 42.2076 120.876 42.368C120.827 42.4546 120.777 42.5278 120.73 42.5905C120.599 42.7618 120.51 42.8457 120.49 42.8321C120.468 42.8178 120.52 42.7038 120.616 42.5169C120.65 42.4496 120.687 42.3746 120.723 42.2939C120.762 42.1741 120.785 41.9856 120.804 41.8003C120.868 41.0933 120.847 40.3681 120.812 39.6483L120.821 39.6956C120.485 38.789 120.159 37.7968 119.4 37.294C119.011 37.0393 118.589 36.8408 118.146 36.6969C117.517 36.492 116.853 36.3933 116.184 36.3547C114.434 36.2521 112.69 36.1037 110.973 36.2331C110.63 36.1696 110.165 36.1184 109.376 36.2559C109.288 36.2722 109.194 36.2897 109.096 36.3081C108.601 36.401 107.881 36.5436 107.361 36.6884C106.894 36.8171 106.548 36.9402 106.224 37.062C105.885 37.1901 105.566 37.3171 105.153 37.467C104.453 37.723 103.809 38.0252 103.155 38.3745C103.047 38.4323 102.941 38.4898 102.832 38.5506C102.692 38.6274 102.55 38.7003 102.406 38.7721C100.872 39.4316 99.3479 40.024 97.8423 40.6879C97.2127 40.9632 96.5768 41.2081 95.9496 41.454C95.171 41.7391 94.4629 42.014 93.86 42.2798C93.8099 42.3018 93.7607 42.3233 93.7123 42.3443C93.1268 42.5989 92.5893 42.8267 92.0559 43.0496C91.7161 43.1766 91.3765 43.2998 91.0393 43.4231C90.4303 43.6456 89.8292 43.87 89.2409 44.1171C87.6815 44.7708 86.0922 45.3382 84.4993 45.8723C83.5888 46.155 82.6526 46.4322 81.6416 46.7516C80.7172 47.0419 79.7146 47.3808 78.532 47.6481C77.4665 47.8811 76.3378 48.0196 75.2451 47.7611C75.2435 47.7607 75.2418 47.7603 75.2402 47.7599C73.6275 47.3893 72.6992 45.8627 71.8694 45.8748C71.8295 45.8753 71.7891 45.8766 71.7486 45.8787C71.156 45.91 70.5339 46.0606 70.007 46.3696C69.8809 46.4435 69.7474 46.5392 69.6159 46.6392C68.733 47.3268 67.9194 48.1443 67.1646 48.8991C67.0878 48.9733 67.0206 49.0427 66.9101 49.1301C66.8939 49.1422 66.8849 49.1497 66.8527 49.17C66.8384 49.1789 66.8224 49.1882 66.8016 49.1982C66.7847 49.2023 66.7536 49.2355 66.6141 49.2409C66.5455 49.2402 66.4343 49.2223 66.3343 49.1247C66.2362 49.0266 66.2174 48.9124 66.2155 48.8511C66.2206 48.709 66.2309 48.7328 66.2371 48.6991C66.2503 48.6567 66.2686 48.6196 66.2738 48.608C66.3104 48.5334 66.3337 48.4952 66.3667 48.4405C66.5719 48.0921 66.7378 47.7283 66.886 47.381C67.2032 46.6278 67.4433 45.9343 67.6584 45.3218C67.6714 45.2843 67.6854 45.2444 67.6982 45.2079C68.1224 44.0881 68.276 42.9713 67.9042 42.5707C67.8834 42.5452 67.8591 42.5186 67.833 42.493C67.7482 42.4088 67.6365 42.335 67.5688 42.3108C66.9593 42.0239 66.815 42.0474 66.4803 42.1772C66.1994 42.3029 65.9293 42.4168 65.6681 42.519C65.5408 42.5688 65.3945 42.6247 65.2298 42.6871C64.364 43.0213 62.9704 43.506 61.0774 44.4108C60.404 44.7346 59.7869 45.0677 59.1873 45.4031C59.1294 45.4356 59.0712 45.4683 59.0126 45.5012C58.1793 45.9678 57.3543 46.4033 56.4044 46.7662C56.2539 46.8233 56.0901 46.8739 55.9405 46.9177C55.75 46.9736 55.5834 47.0183 55.4883 47.061C55.2106 47.1847 54.7624 47.366 54.2149 47.502C53.9611 47.5637 53.6878 47.6154 53.3871 47.6328C53.1974 47.6488 52.747 47.6135 52.425 47.3107C52.0137 46.884 52.0127 46.5158 51.9796 46.2537C51.8542 44.6444 52.113 43.0688 52.361 41.6154C52.4883 40.9537 52.6643 40.4918 52.8008 39.9986C52.8689 39.7607 52.9319 39.5211 52.9623 39.334C52.9786 39.2465 52.9779 39.1501 52.9782 39.1905C52.9874 39.2105 52.9647 39.3038 53.1382 39.5124C53.3321 39.7388 53.6632 39.7614 53.7279 39.7428C53.7929 39.734 53.8058 39.7255 53.8074 39.726C52.8251 40.1331 51.8148 40.8019 50.5687 41.3111C50.5072 41.3305 50.443 41.3499 50.379 41.368C49.933 41.4796 49.3978 41.7319 48.8266 42.0034C48.0018 42.3646 46.9053 43.073 45.136 43.1793C44.6789 43.1962 44.1872 43.1509 43.689 43.0173C42.827 42.7636 41.8203 42.3839 41.1096 41.2813C41.0451 41.1725 40.9873 41.0575 40.9383 40.937C40.6115 39.9492 40.6617 39.1701 40.7497 38.3367C41.2032 36.3118 41.7455 34.7603 42.0931 33.5145C42.2028 33.1404 42.3121 32.7689 42.4304 32.3681C42.5401 31.9968 42.656 31.6061 42.7849 31.1733C42.8471 30.9643 42.918 30.7275 42.9879 30.4924C43.0219 30.3774 43.0601 30.2501 43.0926 30.1356C43.0952 30.1266 43.0971 30.1197 43.0979 30.1164C43.0983 30.1148 43.0984 30.1141 43.0981 30.1151C43.0979 30.1156 43.0976 30.1165 43.0972 30.1181C43.097 30.1189 43.0967 30.1199 43.0964 30.1211C43.0962 30.1215 43.0963 30.1211 43.096 30.1225C43.0947 30.1277 43.0929 30.1344 43.0892 30.153C43.0882 30.1844 43.0698 30.1611 43.0796 30.3658C43.0921 30.4267 43.08 30.5196 43.2205 30.7231C43.2914 30.821 43.4396 30.9453 43.623 30.9877C43.8059 31.0327 43.9693 30.9947 44.0653 30.9544C44.4118 30.7686 44.3536 30.7125 44.3994 30.6739C44.4415 30.6043 44.4414 30.5958 44.4486 30.5815C44.4592 30.5566 44.4552 30.5657 44.4561 30.5636C44.4619 30.5493 44.4569 30.5628 44.451 30.5805C44.4416 30.6085 44.4345 30.6306 44.4222 30.668C44.4001 30.7357 44.3845 30.7848 44.3583 30.8655C44.1647 31.5681 43.8266 32.4893 43.2723 33.4298C42.987 33.9158 42.6884 34.4647 42.3655 35.0751C41.443 36.8292 40.6145 38.4585 39.8676 39.8987C39.3244 40.9631 38.8908 42.0082 38.4948 42.9098C38.0347 43.9706 37.6394 44.8559 37.3266 45.5314C37.1164 45.9866 36.8817 46.48 36.624 46.996C36.2261 47.7947 35.7669 48.6402 35.2775 49.4649C34.8796 50.1387 34.4672 50.7923 34.1057 51.4103C33.283 52.7999 32.5581 54.0367 31.7511 54.8801C31.5498 55.0667 31.3769 55.2855 30.8694 55.4768C30.6913 55.5357 30.4414 55.5913 30.1525 55.5552C29.8629 55.5207 29.6155 55.3941 29.459 55.2916C29.395 55.2509 29.3235 55.2071 29.2465 55.1596C28.9322 54.9289 28.4331 54.7903 27.9964 53.9374C27.5107 52.1063 27.6665 50.8278 27.6129 48.8157C27.6103 48.1678 27.6121 47.5808 27.615 47.0376C27.6251 45.2986 27.6602 44.0096 27.7116 42.6807C27.7394 41.9725 27.7972 41.3452 27.8596 40.7038C27.8933 40.357 27.9283 40.0067 27.9618 39.6362C28.0313 38.9357 28.1497 38.3123 28.2105 37.5244C28.2341 37.2319 28.2507 36.9198 28.2614 36.5953C28.2666 36.4378 28.2705 36.2769 28.2733 36.1133C28.2781 35.7241 28.2305 35.2653 28.1815 34.7837C28.1581 34.5549 28.1423 34.3492 28.1262 34.1462C28.1085 33.9226 28.0901 33.7015 28.0581 33.4507C27.9367 32.5141 27.8363 31.5791 27.7929 30.7437C27.7928 30.7428 27.7928 30.7419 27.7927 30.7409C27.7364 29.6311 27.8128 28.7271 27.8687 28.1724C27.9729 27.1821 28.1077 26.1195 28.2301 25.0609C28.2794 24.6325 28.3261 24.2047 28.3662 23.7834C28.405 23.3835 28.4537 23.0014 28.5038 22.6265C28.7461 20.8553 29.023 18.5928 29.1663 16.1546C29.2078 15.4672 29.2343 14.761 29.2682 14.0369C29.3215 12.9458 29.4124 11.9695 29.6591 10.8132C29.6917 10.6623 29.7257 10.5098 29.7605 10.3544C29.9405 9.54336 30.152 8.65214 30.2795 7.54071C30.3076 7.29106 30.3238 7.05616 30.3316 6.8328C30.3467 6.44187 30.375 6.09436 30.4062 5.76851C30.4548 5.2718 30.5131 4.82447 30.5928 4.38052C30.6633 3.98854 30.7336 3.75213 30.7961 3.52824C30.8637 3.2813 30.9302 3.04174 30.9302 2.67241C30.9288 2.48103 30.8999 2.24076 30.8282 2.07C30.8011 2.00486 30.7673 1.95868 30.7473 1.94751C30.7539 1.94408 30.7595 1.94059 30.7636 1.93772C30.7795 1.92379 30.7815 1.89573 30.7658 1.87335C30.7157 1.8369 30.6141 1.79112 30.4979 1.75714C30.3779 1.72125 30.243 1.6958 30.1289 1.67817C29.946 1.64905 29.6767 1.63673 29.3748 1.66072C28.9749 1.69071 28.5325 1.77333 28.166 1.87728C27.8906 1.95501 27.6417 2.02815 27.3579 2.1324C27.1066 2.22601 26.8265 2.34338 26.4974 2.53698C26.3107 2.64761 26.1703 2.73643 26.0572 2.81267C26.013 2.8425 25.9724 2.87106 25.9357 2.89829C25.8978 2.92703 25.8612 2.95457 25.8272 2.98058C25.7626 3.0301 25.7175 3.07718 25.6663 3.12983C25.6302 3.16713 25.5899 3.20805 25.5389 3.25253C25.4159 3.35966 25.2534 3.48081 25.138 3.55896C25.0839 3.59552 25.0416 3.62145 24.9981 3.64846C24.9492 3.67862 24.8983 3.71033 24.8345 3.75594C24.5381 3.96765 24.2704 4.19648 24.0063 4.44384C23.7147 4.71692 23.4236 5.01463 23.0959 5.34676C22.9925 5.45164 22.881 5.56242 22.775 5.67074C22.6628 5.78537 22.5568 5.89724 22.4696 5.99726C22.3001 6.19187 22.1481 6.38559 22.0031 6.58285C21.8424 6.80125 21.692 7.01426 21.549 7.2179C21.3667 7.47754 21.1959 7.72257 21.0308 7.94416C20.7281 8.35085 20.5925 8.58503 20.4922 8.75861C20.44 8.84908 20.3991 8.92125 20.3495 8.9946C20.3023 9.05841 20.253 9.12534 20.2068 9.18838C20.1619 9.24761 20.1179 9.30609 20.0775 9.36518C20.0744 9.36961 20.0715 9.374 20.0686 9.37837C19.8099 9.73679 19.5639 10.091 19.3582 10.4403C19.2824 10.5694 19.2125 10.6979 19.1531 10.8226C18.6484 11.7634 18.1623 12.2649 17.7523 13.0303C17.6444 13.2206 17.5474 13.4192 17.4509 13.6245C17.3323 13.877 17.2167 14.1359 17.0871 14.3952C16.7771 15.0155 16.4699 15.6501 16.1821 16.2811C16.0894 16.4846 16.003 16.6773 15.9138 16.8824C15.5795 17.6508 15.249 18.3906 14.9852 19.0928C14.8754 19.3855 14.7773 19.6727 14.6852 19.9593C14.634 20.1186 14.5847 20.278 14.5376 20.4365C14.5338 20.3981 14.5259 20.3744 14.5181 20.3534C14.5024 20.3097 14.4887 20.2714 14.5256 20.1121C14.6132 19.7354 14.7185 19.2968 14.6519 19.3234C14.6339 19.3306 14.6236 19.3147 14.6136 19.2978C14.5888 19.2556 14.5623 19.2115 14.4091 19.5434C14.306 19.7659 14.0502 20.3445 13.9672 20.7278C13.9488 20.8105 13.9472 20.8633 13.9458 20.9224C13.945 20.9841 13.9435 21.0536 13.9308 21.1695C13.9203 21.2578 13.9018 21.3719 13.8687 21.5265C13.855 21.5904 13.8397 21.6598 13.8235 21.7312C13.7592 22.0166 13.6833 22.333 13.6734 22.456C13.6621 22.5975 13.696 22.5753 13.7356 22.5495C13.7872 22.5157 13.8486 22.4759 13.8315 22.7826C13.8281 22.8433 13.8037 22.9544 13.7854 23.0381C13.7725 23.0968 13.7627 23.1422 13.765 23.1475C13.7676 23.1535 13.7806 23.137 13.7971 23.1159C13.8554 23.0414 13.9559 22.9135 13.8041 23.5195C13.7633 23.6834 13.7133 23.869 13.6692 24.0359C13.6605 24.0684 13.6521 24.1005 13.6439 24.1316C13.5916 24.3308 13.5533 24.4879 13.5569 24.5135C13.5584 24.5246 13.561 24.5329 13.5641 24.54C13.5166 24.7358 13.47 24.9326 13.424 25.13C13.3539 25.3809 13.2757 25.7384 13.178 26.1879C13.1543 26.2971 13.1292 26.4121 13.1028 26.532C13.0124 26.9267 12.9204 27.3239 12.8235 27.7217C12.7432 28.0368 12.6519 28.3718 12.5431 28.7254C12.4323 29.0849 12.3154 29.4205 12.1893 29.7402C12.0686 30.0449 11.9459 30.3295 11.8253 30.6078C11.722 30.8457 11.6196 31.0803 11.5187 31.3184C11.5496 31.2225 11.577 31.136 11.5967 31.0688C11.7321 30.6083 11.7515 30.41 11.7688 30.2269C11.7804 30.1042 11.7908 29.9906 11.8333 29.8074C11.85 29.735 11.861 29.6781 11.867 29.6357C11.8893 29.4804 11.8548 29.4959 11.8283 29.5084C11.8106 29.5166 11.7964 29.5225 11.8035 29.4767C11.8094 29.4395 11.8319 29.3585 11.8546 29.2735C11.8742 29.2004 11.8942 29.1231 11.9037 29.0742C12.0165 28.4723 11.9345 28.6418 11.8195 28.8843C11.7554 29.0182 11.6782 29.1735 11.6166 29.236C11.5553 29.2877 11.552 29.2627 11.6235 28.9554C11.5548 29.1343 11.4837 29.3118 11.4094 29.4873C11.3884 29.5369 11.3666 29.5881 11.345 29.638C11.3161 29.7296 11.3055 29.8026 11.2932 29.9077C11.2724 30.0936 11.0878 30.6639 10.945 31.1097C10.8792 31.3155 10.8218 31.4975 10.7938 31.5988C10.6426 32.1468 10.739 32.0035 10.822 31.879C10.8682 31.8099 10.9104 31.7479 10.9069 31.8065C10.9054 31.8315 10.9227 31.8008 10.9402 31.7701C10.9538 31.746 10.9678 31.721 10.9733 31.7217C11.0124 31.7287 10.9333 32.0521 10.8626 32.3551C10.8223 32.5276 10.7848 32.6927 10.7712 32.787C10.7669 32.8159 10.7648 32.8387 10.7629 32.8601C10.7602 32.8914 10.7575 32.9219 10.7486 32.9687C10.7279 33.0766 10.6708 33.2875 10.6088 33.5238C10.5778 33.6421 10.5445 33.7703 10.5157 33.8882C10.4775 34.0443 10.477 34.1016 10.4755 34.1646C10.4747 34.2084 10.4729 34.2569 10.4599 34.3369C10.4358 34.4839 10.3592 34.7763 10.2915 35.0456C10.2615 35.1643 10.2339 35.276 10.2109 35.3742C10.2017 35.4138 10.1994 35.4324 10.2019 35.4375C10.1307 35.7353 10.0652 36.0209 10.0017 36.3058C9.96771 36.4571 9.93116 36.6037 9.89344 36.7474C9.51002 38.1557 9.08704 39.3647 8.61288 40.7922C8.35957 41.5468 8.06087 42.3453 7.70203 43.2324C7.50373 43.7225 7.29528 44.2508 7.08706 44.7836C6.78155 45.5259 6.46888 46.2657 6.17329 46.9981C5.8305 47.8686 5.61464 48.8702 5.38951 49.8615C5.30594 50.123 5.21648 50.4323 5.1187 50.7891C5.08802 50.9006 5.05693 51.0171 5.02536 51.1385C4.77834 52.0861 4.57057 53.0833 4.25969 54.25C4.23491 54.3427 4.20949 54.4364 4.18319 54.5315C3.90896 55.2614 3.99744 56.2935 2.90457 57.188C2.89268 57.1959 2.88067 57.2036 2.86854 57.2112C2.56907 57.4064 2.18323 57.4338 1.88704 57.3636C1.39273 57.2869 0.934047 56.8082 0.823249 56.3599C0.634982 55.674 0.602302 55.0426 0.700437 54.323C0.829371 53.5678 0.993621 52.7964 1.15149 52.0001C1.21355 51.6844 1.27386 51.3633 1.32721 51.0384C1.53961 49.7577 1.86819 48.447 2.29683 47.3022C2.51711 46.7161 2.71264 46.1575 2.89472 45.6585C3.06077 45.204 3.2435 44.7382 3.45894 44.2839C3.69191 43.8101 3.94248 43.3861 4.15736 42.955C4.5396 42.2015 4.82773 41.4579 4.88666 40.8287C4.92693 40.4308 5.02571 40.1054 5.08601 39.8411C5.1412 39.6086 5.18527 39.3829 5.22515 39.1647C5.25368 39.0093 5.28139 38.855 5.31103 38.7073C5.43332 38.3256 5.54575 37.9412 5.64863 37.5529C5.74305 37.2452 5.84964 36.8636 5.94953 36.4308C6.07324 35.8944 6.20306 35.299 6.3125 34.7083C6.40896 34.2989 6.5076 33.8907 6.60296 33.4974C6.69528 33.1156 6.78647 32.7388 6.873 32.363C6.98246 31.8879 7.09982 31.4192 7.21073 30.9496C7.27602 30.6737 7.34002 30.3942 7.40015 30.1147C7.40072 30.112 7.4013 30.1094 7.40188 30.1067C7.52328 29.543 7.62946 28.9721 7.7162 28.4078C7.75352 28.1654 7.78752 27.9237 7.81863 27.681C7.87632 27.2308 7.92353 26.7816 7.96222 26.3297C7.97687 26.1585 7.99117 25.9897 8.0053 25.8211C8.03271 25.4942 8.05967 25.1644 8.08599 24.834C8.12859 24.2996 8.16991 23.7567 8.20826 23.2206C8.26981 22.3513 8.32786 21.4845 8.36464 20.6178C8.37047 20.4756 8.37915 20.3393 8.38934 20.2399C8.39956 20.1417 8.41074 20.0832 8.42249 20.0847C8.43419 20.0836 8.44579 20.1426 8.45366 20.2418C8.46152 20.3421 8.46463 20.4791 8.46254 20.6216C8.44836 21.4919 8.41266 22.3616 8.37324 23.2338C8.3486 23.7713 8.32103 24.3153 8.29196 24.8513C8.27397 25.1827 8.25526 25.513 8.23612 25.8409C8.22631 26.0089 8.21633 26.1769 8.206 26.3475C8.17829 26.8049 8.14179 27.2607 8.09457 27.7176C8.0692 27.9634 8.04092 28.2079 8.00923 28.4538C7.93551 29.0275 7.84162 29.6094 7.73242 30.1831C7.73176 30.1865 7.73111 30.19 7.73045 30.1934C7.67691 30.475 7.61944 30.757 7.56098 31.0339C7.46119 31.5069 7.35556 31.9765 7.25892 32.4469C7.18029 32.8299 7.09723 33.2124 7.01327 33.5988C6.91635 34.0454 6.81567 34.5092 6.71865 34.9715C6.66484 35.2278 6.61153 35.486 6.56057 35.7374C6.53238 35.8761 6.50446 36.0148 6.47629 36.1559C6.45188 36.2785 6.42769 36.401 6.40336 36.5251C6.15969 38.0093 5.54275 39.5035 5.29634 40.868C5.15646 42.2228 4.47779 43.3881 3.95814 44.5069C3.80784 44.8536 3.67322 45.2116 3.54335 45.5742C3.31529 46.2131 3.10045 46.8646 2.86687 47.5135C2.4521 48.6813 2.17215 49.9107 1.98804 51.142C1.82175 52.2644 1.58461 53.349 1.42719 54.4379C1.40059 54.6227 1.39502 54.8318 1.4015 55.0377C1.41462 55.4086 1.46402 55.8002 1.56856 56.1146C1.66738 56.3896 1.7995 56.5131 2.04954 56.5624C2.20814 56.5915 2.31941 56.5698 2.41114 56.5079C2.93015 56.1768 3.07172 55.1764 3.30918 54.2985C3.62448 53.0772 3.85816 51.8327 4.1179 50.5721C4.13383 50.4953 4.14966 50.4185 4.16547 50.3416C4.42823 49.1044 4.62944 47.8517 5.09582 46.5762C5.90108 44.5009 6.74194 42.464 7.43514 40.3889C7.9169 38.9156 8.48232 37.4369 8.85447 36.0159C9.39335 33.7439 10.146 31.473 10.8772 29.3147C11.4177 27.5594 11.7273 25.6615 12.1787 23.7715C12.4064 22.8081 12.6637 21.8616 12.8612 20.9342C13.3117 19.1918 14.0206 17.8352 14.5873 16.3453C15.3873 14.2219 16.6757 11.8565 17.7812 10.2126C18.6719 8.40491 19.8096 7.12678 20.8771 5.70078C21.9897 4.18705 23.6526 2.76715 25.0303 1.80021C26.2637 0.797318 27.7256 0.289384 29.23 0.130206C29.9364 0.0812231 30.6237 0.0257437 31.5224 0.443631C32.1461 0.764057 32.4022 1.41324 32.4799 1.82506C32.567 2.26637 32.5606 2.63501 32.5452 2.98856C32.5069 3.6899 32.4004 4.32262 32.3061 4.94109C32.1998 5.6272 32.0931 6.30051 32.0622 6.9243C31.9975 8.38456 31.7025 9.82732 31.4429 11.1578C31.2779 12.0262 31.1962 12.9186 31.1393 13.8332C31.0891 14.6382 31.0536 15.459 30.9964 16.2864C30.8472 18.5005 30.5895 20.7006 30.2987 22.8965C30.2524 23.2584 30.2056 23.622 30.1694 23.9726C30.1099 24.554 30.0361 25.1346 29.9608 25.7171Z",
    fill: "#F1F1F1"
  }, null, -1), createBaseVNode("path", {
    d: "M43.6472 24.1117C43.6155 24.0407 43.6401 24.0632 43.6537 24.0753C43.6539 24.0755 43.6541 24.0757 43.6544 24.0759C43.6576 24.0788 43.6592 24.0791 43.661 24.0794C43.6653 24.08 43.6707 24.0812 43.7042 24.1186C43.7054 24.1157 43.7069 24.1135 43.709 24.1122C43.7301 24.0986 43.7832 24.1397 43.8583 24.177C43.8584 24.1765 43.8584 24.1759 43.8585 24.1753C43.8594 24.164 43.86 24.1501 43.8841 24.1663C43.9148 24.187 43.9425 24.2066 43.9664 24.2235C43.9774 24.2272 43.9883 24.2307 43.9992 24.2336C44.0535 24.2492 44.1075 24.2527 44.1457 24.2387C44.16 24.2333 44.1721 24.2255 44.1812 24.2149C44.1897 24.2051 44.1964 24.1934 44.2013 24.1804C44.1933 24.1636 44.1827 24.1452 44.1727 24.1281C44.1587 24.1042 44.1462 24.0829 44.1448 24.0727C44.1414 24.0482 44.1758 24.0512 44.2017 24.053C44.2059 24.0533 44.2099 24.0536 44.2135 24.0537C44.2125 24.038 44.211 24.0217 44.2092 24.0053C44.2147 24.0087 44.2205 24.0122 44.2264 24.0158C44.3001 24.0609 44.3071 24.0501 44.3182 24.0333C44.323 24.026 44.3287 24.0174 44.3409 24.0116C44.3488 24.0079 44.3783 24.0255 44.4023 24.0397C44.4094 24.0439 44.416 24.0478 44.4215 24.0508C44.4402 24.0612 44.4241 24.0446 44.405 24.0251C44.3803 23.9998 44.3505 23.9695 44.3857 23.9861C44.4977 24.0387 44.4393 23.9797 44.3948 23.9355C44.3818 23.9225 44.37 23.9108 44.3642 23.9034C44.3451 23.8795 44.375 23.8885 44.4123 23.906C44.4418 23.9199 44.4243 23.8904 44.3979 23.8583C44.388 23.8462 44.3907 23.8419 44.394 23.8368C44.3974 23.8316 44.4015 23.8256 44.3923 23.8092C44.3693 23.7678 44.3586 23.7469 44.3501 23.7303C44.3477 23.7255 44.3455 23.7211 44.3432 23.7166C44.3358 23.7025 44.3315 23.6884 44.3272 23.6742C44.322 23.6572 44.3167 23.64 44.306 23.6219C44.3351 23.6169 44.3682 23.6146 44.4013 23.6122C44.4185 23.611 44.4843 23.6462 44.5871 23.7119C44.69 23.7777 44.8207 23.8682 44.9534 23.9657C45.0861 24.0632 45.2115 24.1609 45.305 24.2394C45.3985 24.3179 45.4518 24.3703 45.4557 24.3871C45.4634 24.4208 45.471 24.4546 45.4742 24.4854C45.4781 24.5228 45.4755 24.5558 45.4586 24.5785C45.4468 24.5944 45.4318 24.6081 45.4142 24.6199C45.4124 24.6211 45.4105 24.6223 45.4086 24.6234C45.4311 24.6611 45.4504 24.6969 45.4537 24.7144C45.4564 24.7288 45.4347 24.7216 45.4162 24.7154C45.4035 24.7111 45.3922 24.7074 45.3913 24.7115C45.3909 24.7137 45.3912 24.7175 45.3915 24.722C45.3929 24.7404 45.3951 24.772 45.3505 24.7652C45.3306 24.7622 45.2964 24.75 45.2637 24.7383C45.2169 24.7216 45.1735 24.7057 45.1797 24.7197C45.1907 24.7443 45.1658 24.7434 45.1439 24.7425C45.123 24.7416 45.1046 24.7409 45.1223 24.7627C45.1434 24.7889 45.129 24.7855 45.1077 24.7805C45.0929 24.777 45.0749 24.7726 45.0628 24.7769C45.0488 24.7818 45.0255 24.7741 45.0055 24.7677C44.9775 24.7585 44.9567 24.7513 44.9783 24.7848C45.0024 24.822 45.014 24.8501 44.9965 24.8501C44.9886 24.8501 44.986 24.8554 44.9832 24.8611C44.9796 24.8687 44.9756 24.8765 44.9591 24.8725C44.9454 24.8693 44.9177 24.8525 44.8933 24.8375C44.8856 24.8328 44.8784 24.8283 44.8719 24.8245C44.8689 24.8285 44.8661 24.8327 44.8634 24.8372C44.8668 24.8412 44.8705 24.8456 44.8743 24.8501C44.8935 24.873 44.917 24.9011 44.9258 24.9184C44.9397 24.9458 44.9196 24.9415 44.8985 24.9365C44.8819 24.9328 44.8648 24.9287 44.8623 24.9396C44.8605 24.9471 44.8649 24.9617 44.8691 24.9761C44.8754 24.9976 44.881 25.0192 44.8667 25.0167C44.8613 25.0158 44.8451 25.0038 44.8289 24.9918C44.8288 24.9918 44.8287 24.9917 44.8286 24.9916C44.8275 24.9908 44.8264 24.99 44.8253 24.9892C44.823 25.0113 44.8212 25.0347 44.8192 25.0588C44.819 25.0616 44.8188 25.0644 44.8185 25.0672C44.8209 25.0721 44.8232 25.077 44.8254 25.0818C44.8363 25.1055 44.8467 25.1285 44.8659 25.1569C44.8867 25.1877 44.8898 25.2142 44.8922 25.2426C44.8939 25.2611 44.8952 25.2805 44.9015 25.3022C44.9051 25.3149 44.8871 25.3032 44.8687 25.2911C44.8515 25.2798 44.834 25.268 44.833 25.2756C44.8324 25.2794 44.8358 25.2879 44.8391 25.2971C44.8422 25.3052 44.8453 25.3138 44.8462 25.3199C44.847 25.3257 44.8344 25.3217 44.8183 25.3165C44.8084 25.3133 44.7971 25.3096 44.7869 25.3075C44.782 25.3283 44.7763 25.3489 44.7696 25.3689C44.778 25.3854 44.79 25.4059 44.8066 25.4312C44.8186 25.4494 44.8333 25.4708 44.8483 25.4928C44.8686 25.5226 44.8896 25.5535 44.9051 25.5791C44.9172 25.5991 44.9203 25.6084 44.9127 25.6021C44.9092 25.5991 44.9034 25.5929 44.8982 25.5872C44.8922 25.5807 44.8869 25.575 44.8863 25.5757C44.886 25.5762 44.8892 25.5815 44.8932 25.588C44.8995 25.5983 44.9076 25.6116 44.9059 25.6136C44.8995 25.621 44.8879 25.6236 44.8765 25.6259C44.8638 25.6286 44.8515 25.631 44.8468 25.6401C44.8415 25.6504 44.8163 25.64 44.7914 25.6293C44.774 25.6218 44.7569 25.6142 44.7463 25.6135C44.7358 25.6128 44.736 25.6281 44.7359 25.6431C44.7359 25.661 44.7357 25.6784 44.7178 25.6659C44.7142 25.6633 44.6989 25.6434 44.6799 25.6184C44.6664 25.6007 44.6511 25.5804 44.6366 25.562C44.6285 25.5672 44.6197 25.5715 44.6106 25.5749C44.6121 25.5779 44.6136 25.5811 44.6152 25.5842C44.6152 25.5843 44.6153 25.5844 44.6153 25.5845C44.6508 25.6562 44.6977 25.7552 44.6505 25.7078C44.6386 25.6957 44.6208 25.6708 44.6048 25.6483C44.5892 25.6263 44.5752 25.6065 44.5703 25.6036C44.5647 25.6002 44.57 25.6163 44.5758 25.6338C44.5838 25.6584 44.5925 25.686 44.5739 25.6664C44.5726 25.6651 44.5713 25.6636 44.5699 25.6621C44.5566 25.6482 44.5371 25.6275 44.504 25.5823C44.4804 25.5786 44.4563 25.5721 44.4321 25.5637C44.3917 25.5497 44.3514 25.5302 44.3129 25.5096C44.294 25.4994 44.2493 25.4372 44.1864 25.333C44.1235 25.2288 44.0477 25.0921 43.9734 24.9486C43.899 24.8052 43.831 24.6646 43.7818 24.5532C43.7326 24.442 43.7064 24.3702 43.7067 24.3499C43.7075 24.3172 43.7068 24.2851 43.7056 24.2558C43.7046 24.2525 43.7036 24.2493 43.7028 24.2463C43.6964 24.224 43.6784 24.182 43.6599 24.1403C43.6556 24.1307 43.6513 24.1211 43.6472 24.1117Z",
    fill: "#F1F1F1"
  }, null, -1)])])
}
const __nuxt_component_1$7 = _export_sfc(_sfc_main$t, [
    ["render", _sfc_render$i]
  ]),
  _imports_0$9 = publicAssetsURL("/images/ni.svg"),
  _imports_1 = publicAssetsURL("/images/ni-mob.svg"),
  _imports_2 = publicAssetsURL("/images/photo2.webp"),
  _sfc_main$s = {},
  _hoisted_1$s = {
    class: "bio"
  },
  _hoisted_2$i = {
    class: "sect-2-texts"
  },
  _hoisted_3$g = {
    class: "sect-2-titles title-anim"
  },
  _hoisted_4$e = {
    class: "sect-2-text"
  },
  _hoisted_5$9 = {
    class: "sect-2-signature"
  };

function _sfc_render$h(e, t) {
  const r = __nuxt_component_0$d,
    i = __nuxt_component_1$7;
  return openBlock(), createElementBlock("section", _hoisted_1$s, [t[2] || (t[2] = createBaseVNode("img", {
    class: "ni-svg",
    src: _imports_0$9,
    alt: ""
  }, null, -1)), t[3] || (t[3] = createBaseVNode("img", {
    class: "ni-svg-mob",
    src: _imports_1,
    alt: ""
  }, null, -1)), t[4] || (t[4] = createBaseVNode("div", {
    class: "photo-wrap"
  }, [createBaseVNode("img", {
    class: "photo inner-img",
    src: _imports_2,
    alt: ""
  })], -1)), createBaseVNode("div", _hoisted_2$i, [createBaseVNode("div", _hoisted_3$g, [t[0] || (t[0] = createBaseVNode("h2", {
    class: "h1-thin title-thin"
  }, "Stone Light &", -1)), createVNode(r, {
    text: "silence",
    class: "h1-book title-book"
  })]), createBaseVNode("div", _hoisted_4$e, [t[1] || (t[1] = createBaseVNode("div", {
    class: "sect-2-text-info text-anim b1-light"
  }, [createTextVNode(" Nabil Issa is a globally recognized multidisciplinary creative whose work spans architecture, interior design, With over 25 years of experience across continents, he brings a rare synthesis of clarity, culture, and craft. "), createBaseVNode("br"), createBaseVNode("br"), createTextVNode(" His approach is rooted in spatial storytelling — designing environments that are not only functional, but emotionally "), createBaseVNode("br"), createBaseVNode("br"), createTextVNode(" HQ in Miami with offices in Milan and Dubai, he leads projects that reinterpret minimalism with soul. Nabil’s spaces are immersive yet restrained, bold yet contemplative. His signa cadence. ")], -1)), createBaseVNode("div", _hoisted_5$9, [createVNode(i)])])]), t[5] || (t[5] = createBaseVNode("div", {
    class: "gradient"
  }, null, -1))])
}
const __nuxt_component_0$7 = _export_sfc(_sfc_main$s, [
    ["render", _sfc_render$h],
    ["__scopeId", "data-v-9ba93177"]
  ]),
  _hoisted_1$r = {
    class: "brands"
  },
  _hoisted_2$h = ["src"],
  _sfc_main$r = defineComponent({
    __name: "brands",
    setup(e) {
      const t = ["/images/brand-1.svg", "/images/brand-2.svg", "/images/brand-3.svg", "/images/brand-4.svg", "/images/brand-5.svg", "/images/brand-6.svg", "/images/brand-7.svg", "/images/brand-8.svg", "/images/brand-9.svg", "/images/brand-10.svg", "/images/brand-11.svg", "/images/brand-12.svg", "/images/brand-13.svg", "/images/brand-14.svg"];
      return (r, i) => (openBlock(), createElementBlock("section", _hoisted_1$r, [(openBlock(), createElementBlock(Fragment, null, renderList(2, (s, n) => createBaseVNode("div", {
        key: n,
        class: "track"
      }, [(openBlock(), createElementBlock(Fragment, null, renderList(t, (a, l) => createBaseVNode("div", {
        key: l,
        class: "brand"
      }, [createBaseVNode("img", {
        src: a,
        alt: ""
      }, null, 8, _hoisted_2$h)])), 64))])), 64))]))
    }
  }),
  __nuxt_component_1$6 = _export_sfc(_sfc_main$r, [
    ["__scopeId", "data-v-efbace0c"]
  ]),
  _sfc_main$q = {},
  _hoisted_1$q = {
    class: "based"
  },
  _hoisted_2$g = {
    class: "titles desk"
  },
  _hoisted_3$f = {
    class: "subtitles"
  };

function _sfc_render$g(e, t) {
  const r = __nuxt_component_0$d;
  return openBlock(), createElementBlock("section", _hoisted_1$q, [t[4] || (t[4] = createBaseVNode("div", {
    class: "titles-parallax-trigger"
  }, null, -1)), createBaseVNode("div", _hoisted_2$g, [createVNode(r, {
    class: "title1",
    text: "MIAMI"
  }), t[0] || (t[0] = createBaseVNode("p", {
    class: "title title2"
  }, "MILAN", -1)), t[1] || (t[1] = createBaseVNode("p", {
    class: "title title3"
  }, "DUBAI", -1))]), createBaseVNode("div", _hoisted_3$f, [t[2] || (t[2] = createBaseVNode("p", {
    class: "text text1 l1-thin"
  }, "HQ in", -1)), createVNode(r, {
    class: "title1 mob",
    text: "MIAMI"
  }), t[3] || (t[3] = createStaticVNode('<p class="text text2 l1-thin" data-v-43bc8c0e>with offices in</p><p class="title title2 mob" data-v-43bc8c0e>MILAN</p><p class="title title3 mob" data-v-43bc8c0e>DUBAI</p><p class="text text3 l1-thin" data-v-43bc8c0e> Nabil’s reach is <span class="l1-bold" data-v-43bc8c0e>GLOBAL</span></p><p class="text text4 l1-bold" data-v-43bc8c0e>GLOBAL</p>', 5))]), t[5] || (t[5] = createBaseVNode("div", {
    class: "descr b1-light text-anim"
  }, [createTextVNode(" From boutique hotels and private villas to furniture collections and experiential installations, Nabil crafts cohesive worlds. "), createBaseVNode("br"), createBaseVNode("br"), createTextVNode(" His creative direction fuses timeless form with global context a balance of intuition and discipline. Light, texture, and silence are his primary materials. ")], -1))])
}
const __nuxt_component_2$3 = _export_sfc(_sfc_main$q, [
    ["render", _sfc_render$g],
    ["__scopeId", "data-v-43bc8c0e"]
  ]),
  _sfc_main$p = {},
  _hoisted_1$p = {
    class: "sect-2"
  },
  _hoisted_2$f = {
    class: "sect-2-content"
  },
  _hoisted_3$e = {
    class: "sect-2-wrap"
  },
  _hoisted_4$d = {
    class: "bio-sect"
  },
  _hoisted_5$8 = {
    class: "brands-sect"
  },
  _hoisted_6$8 = {
    class: "based-sect"
  };

function _sfc_render$f(e, t) {
  const r = __nuxt_component_0$7,
    i = __nuxt_component_1$6,
    s = __nuxt_component_2$3;
  return openBlock(), createElementBlock("section", _hoisted_1$p, [createBaseVNode("div", _hoisted_2$f, [createBaseVNode("div", _hoisted_3$e, [createBaseVNode("div", _hoisted_4$d, [createVNode(r)]), createBaseVNode("div", _hoisted_5$8, [createVNode(i)]), createBaseVNode("div", _hoisted_6$8, [createVNode(s)])])])])
}
const __nuxt_component_1$5 = _export_sfc(_sfc_main$p, [
    ["render", _sfc_render$f],
    ["__scopeId", "data-v-f14f76b5"]
  ]),
  _sfc_main$o = {},
  _hoisted_1$o = {
    class: "chapter-1"
  };

function _sfc_render$e(e, t) {
  const r = __nuxt_component_0$8,
    i = __nuxt_component_1$5;
  return openBlock(), createElementBlock("section", _hoisted_1$o, [createVNode(r), createVNode(i)])
}
const __nuxt_component_6 = _export_sfc(_sfc_main$o, [
    ["render", _sfc_render$e]
  ]),
  _imports_0$8 = publicAssetsURL("/images/photo3.webp"),
  _sfc_main$n = {},
  _hoisted_1$n = {
    class: "sect-1-wrap"
  },
  _hoisted_2$e = {
    class: "sect-1-sticky"
  },
  _hoisted_3$d = {
    class: "sect-1"
  },
  _hoisted_4$c = {
    class: "sect-1-content"
  };

function _sfc_render$d(e, t) {
  const r = __nuxt_component_0$9,
    i = __nuxt_component_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$n, [createBaseVNode("div", _hoisted_2$e, [createBaseVNode("section", _hoisted_3$d, [createBaseVNode("div", _hoisted_4$c, [t[0] || (t[0] = createBaseVNode("img", {
    class: "img",
    src: _imports_0$8,
    alt: ""
  }, null, -1)), createVNode(r, {
    text: "spaces that tell <strong>your story</strong>"
  }), createVNode(i, {
    count: "II"
  })])])])])
}
const __nuxt_component_0$6 = _export_sfc(_sfc_main$n, [
  ["render", _sfc_render$d],
  ["__scopeId", "data-v-71e7c738"]
]);

function animateTitle(e) {
  const t = typeof e == "string" ? document.querySelectorAll(e) : e,
    r = gsapWithCSS.timeline(),
    {
      lines: i,
      chars: s
    } = new SplitText(t, {
      type: "lines, words, chars",
      linesClass: "text-line",
      wordsClass: "text-word"
    });
  return gsapWithCSS.set(i, {
    overflow: "hidden",
    paddingBottom: "0.4rem",
    marginBottom: "-0.4rem"
  }), gsapWithCSS.set(s, {
    rotateY: "90%",
    autoAlpha: 0
  }), i.forEach(n => {
    const a = Array.from(n.querySelectorAll(".text-word")).reverse();
    a.forEach((l, o) => {
      const c = l.querySelectorAll("*"),
        f = o / 10 * (50 / (1e3 * a.length));
      r.to(c, {
        rotateY: 0,
        autoAlpha: 1,
        stagger: {
          each: .075,
          from: "end"
        },
        duration: .64
      }, f)
    })
  }), r
}

function animateTitleOut(e) {
  const t = gsapWithCSS.utils.toArray(document.querySelectorAll(e)),
    r = gsapWithCSS.timeline();
  return t.forEach(i => {
    i.querySelectorAll(".text-line").forEach(n => {
      const a = Array.from(n.querySelectorAll(".text-word"));
      a.forEach((l, o) => {
        const c = l.querySelectorAll("*"),
          f = o / 10 * (50 / (1e3 * a.length));
        r.to(c, {
          rotateY: "90%",
          autoAlpha: 0,
          stagger: {
            each: .075,
            from: "start"
          },
          duration: .64
        }, f)
      })
    })
  }), r
}
const _hoisted_1$m = {
    ref: "sectPhotos",
    class: "photos"
  },
  _hoisted_2$d = {
    class: "title"
  },
  _hoisted_3$c = {
    class: "items"
  },
  _hoisted_4$b = {
    class: "items-wrap"
  },
  _hoisted_5$7 = {
    key: 0,
    class: "item-info"
  },
  _hoisted_6$7 = {
    class: "item-photo parallax-image"
  },
  _hoisted_7$6 = ["src"],
  _hoisted_8$5 = {
    key: 1,
    class: "item-text title-anim"
  },
  _hoisted_9$3 = {
    class: "h2-thin title-thin"
  },
  _hoisted_10$3 = {
    class: "h2-thin title-thin"
  },
  _hoisted_11$1 = {
    key: 0,
    class: "photos-btn"
  },
  _hoisted_12$1 = {
    class: "additional-count l1-thin"
  },
  _sfc_main$m = defineComponent({
    __name: "photos",
    setup(e) {
      const t = [{
          photo: "/images/photos1.webp"
        }, {
          photo: "/images/photos2.webp"
        }, {
          photo: "/images/photos3.webp",
          text1: "bold",
          text2: "when",
          text3: "needed"
        }, {
          photo: "/images/photos4.webp"
        }, {
          photo: "/images/photos5.webp"
        }, {
          photo: "/images/photos6.webp",
          text1: "quiet",
          text2: "when",
          text3: "called"
        }, {
          photo: "/images/photos7.webp"
        }, {
          photo: "/images/photos8.webp"
        }, {
          photo: "/images/photos9.webp",
          text1: "FEARLESS,",
          text2: "TIMELESS &",
          text3: "RELENTLESS"
        }, {
          photo: "/images/photos1.webp"
        }, {
          photo: "/images/photos2.webp"
        }, {
          photo: "/images/photos3.webp",
          text1: "bold",
          text2: "when",
          text3: "needed"
        }, {
          photo: "/images/photos4.webp"
        }, {
          photo: "/images/photos5.webp"
        }, {
          photo: "/images/photos6.webp",
          text1: "quiet",
          text2: "when",
          text3: "called"
        }, {
          photo: "/images/photos7.webp"
        }, {
          photo: "/images/photos8.webp"
        }, {
          photo: "/images/photos9.webp",
          text1: "FEARLESS,",
          text2: "TIMELESS &",
          text3: "RELENTLESS"
        }],
        r = ref(t.slice(0, 9)),
        i = computed(() => r.value.length < t.length),
        s = computed(() => t.length - r.value.length),
        n = async () => {
          const c = t.slice(r.value.length);
          r.value.push(...c), await nextTick();
          const f = document.querySelectorAll(".chapter-2 .photos .item:nth-last-child(-n+" + c.length + ")");
          a(f), ScrollTrigger.refresh()
        }, a = c => {
          c.length && (c.forEach(f => {
            const b = f.querySelector(".parallax-image"),
              u = f.querySelector(".item-text"),
              y = f.querySelectorAll(".h2-thin"),
              g = f.querySelectorAll(".h2-book");
            gsapWithCSS.timeline({
              scrollTrigger: {
                trigger: f,
                start: "top bottom",
                end: "top bottom",
                toggleActions: "play none reverse none"
              }
            }).from(b, {
              y: "8rem",
              opacity: 0,
              ease: "power2.out"
            });
            const E = gsapWithCSS.timeline({
              scrollTrigger: {
                trigger: u,
                start: "top bottom",
                end: "top bottom",
                toggleActions: "play none reverse none"
              }
            });
            E.add(animateTitle(y), "<"), E.from(g, {
              opacity: 0
            }, "<"), E.to(g, {
              animation: "shine 1s ease 1"
            }, "<"), E.to(g, {
              duration: 1,
              clearProps: "animation"
            })
          }), c.forEach(f => {
            const b = f.querySelector(".parallax-image"),
              u = f.querySelector("img");
            if (!u) return;
            gsapWithCSS.set(u, {
              scale: 1.2
            }), gsapWithCSS.set(b, {
              overflow: "hidden"
            });
            const y = () => {
              gsapWithCSS.fromTo(u, {
                y: "-5rem",
                ease: "none"
              }, {
                y: "5rem",
                ease: "none",
                scrollTrigger: {
                  trigger: f,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: !0
                }
              })
            };
            u.complete && u.naturalHeight !== 0 ? y() : u.onload = () => y()
          }))
        }, l = () => {
          document.querySelector(".additional-count-decor")?.classList.add("hovered")
        }, o = () => {
          document.querySelector(".additional-count-decor")?.classList.remove("hovered")
        };
      return (c, f) => {
        const b = __nuxt_component_0$d,
          u = __nuxt_component_1$h;
        return openBlock(), createElementBlock("section", _hoisted_1$m, [createBaseVNode("div", _hoisted_2$d, [f[0] || (f[0] = createBaseVNode("div", {
          class: "h1-thin"
        }, [createBaseVNode("div", null, "Where"), createBaseVNode("div", null, "space"), createBaseVNode("div", null, "becomes")], -1)), createVNode(b, {
          text: "narrative",
          class: "h1-book"
        })]), createBaseVNode("div", _hoisted_3$c, [createBaseVNode("div", _hoisted_4$b, [(openBlock(!0), createElementBlock(Fragment, null, renderList(unref(r), (y, g) => (openBlock(), createElementBlock("div", {
          key: g,
          class: "item"
        }, [g === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$7, [f[1] || (f[1] = createBaseVNode("p", {
          class: "b1-light selected-text"
        }, [createBaseVNode("span", {
          class: "b1-bold"
        }, "Selected"), createTextVNode(" works ")], -1)), createVNode(b, {
          text: `${unref(r).length}`,
          class: "h1-book"
        }, null, 8, ["text"])])) : createCommentVNode("", !0), createBaseVNode("div", _hoisted_6$7, [createBaseVNode("img", {
          class: "inner-img",
          src: y.photo,
          alt: "",
          loading: "lazy"
        }, null, 8, _hoisted_7$6)]), y.text1 ? (openBlock(), createElementBlock("div", _hoisted_8$5, [createVNode(b, {
          text: y.text1,
          class: "h2-book title-book"
        }, null, 8, ["text"]), createBaseVNode("h2", _hoisted_9$3, toDisplayString(y.text2), 1), createBaseVNode("h2", _hoisted_10$3, toDisplayString(y.text3), 1)])) : createCommentVNode("", !0)]))), 128))])]), unref(i) ? (openBlock(), createElementBlock("div", _hoisted_11$1, [createVNode(u, {
          text: "load all works",
          onClick: n,
          onMouseenter: l,
          onMouseleave: o
        }), createBaseVNode("p", _hoisted_12$1, [f[2] || (f[2] = createBaseVNode("span", {
          class: "additional-count-decor"
        }, null, -1)), createTextVNode(" +" + toDisplayString(unref(s)) + " additional works ", 1)])])) : createCommentVNode("", !0)], 512)
      }
    }
  }),
  __nuxt_component_0$5 = _export_sfc(_sfc_main$m, [
    ["__scopeId", "data-v-806052e6"]
  ]),
  _imports_0$7 = publicAssetsURL("/images/image1.webp"),
  _sfc_main$l = {},
  _hoisted_1$l = {
    class: "quote"
  };

function _sfc_render$c(e, t) {
  return openBlock(), createElementBlock("section", _hoisted_1$l, [...t[0] || (t[0] = [createStaticVNode('<div class="left" data-v-23795bb5><div class="left-text" data-v-23795bb5><div class="l1-thin text-anim" data-v-23795bb5>Designed</div><div class="l1-thin text-anim" data-v-23795bb5> to endure <br data-v-23795bb5>shaped <br data-v-23795bb5>to speak </div></div><div class="quote-photo" data-v-23795bb5><img class="inner-img" src="' + _imports_0$7 + '" alt="" data-v-23795bb5></div></div><div class="right" data-v-23795bb5><div class="quote-text bd-thin" data-v-23795bb5> Every piece serves as a profound declaration, striking in its design, intentional in its meaning, and undeniably his. </div></div>', 2)])])
}
const __nuxt_component_1$4 = _export_sfc(_sfc_main$l, [
    ["render", _sfc_render$c],
    ["__scopeId", "data-v-23795bb5"]
  ]),
  _sfc_main$k = {},
  _hoisted_1$k = {
    class: "sect-2"
  },
  _hoisted_2$c = {
    class: "sect-2-content"
  },
  _hoisted_3$b = {
    class: "sect-2-wrap"
  };

function _sfc_render$b(e, t) {
  const r = __nuxt_component_0$5,
    i = __nuxt_component_1$4;
  return openBlock(), createElementBlock("section", _hoisted_1$k, [createBaseVNode("div", _hoisted_2$c, [createBaseVNode("div", _hoisted_3$b, [createVNode(r), createVNode(i)])])])
}
const __nuxt_component_1$3 = _export_sfc(_sfc_main$k, [
    ["render", _sfc_render$b],
    ["__scopeId", "data-v-000cd9a6"]
  ]),
  _sfc_main$j = {},
  _hoisted_1$j = {
    class: "chapter-2"
  };

function _sfc_render$a(e, t) {
  const r = __nuxt_component_0$6,
    i = __nuxt_component_1$3;
  return openBlock(), createElementBlock("section", _hoisted_1$j, [createVNode(r), createVNode(i)])
}
const __nuxt_component_7 = _export_sfc(_sfc_main$j, [
    ["render", _sfc_render$a],
    ["__scopeId", "data-v-40e94b45"]
  ]),
  _imports_0$6 = publicAssetsURL("/images/image_176.webp"),
  _sfc_main$i = {},
  _hoisted_1$i = {
    class: "sect-1-wrap"
  },
  _hoisted_2$b = {
    class: "sect-1-sticky"
  },
  _hoisted_3$a = {
    class: "sect-1"
  },
  _hoisted_4$a = {
    class: "sect-1-content"
  };

function _sfc_render$9(e, t) {
  const r = __nuxt_component_0$9,
    i = __nuxt_component_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$i, [createBaseVNode("div", _hoisted_2$b, [createBaseVNode("section", _hoisted_3$a, [createBaseVNode("div", _hoisted_4$a, [t[0] || (t[0] = createBaseVNode("img", {
    class: "img",
    src: _imports_0$6,
    alt: ""
  }, null, -1)), createVNode(r, {
    text: "OBJECTS OF <strong>DESIRE</strong>"
  }), createVNode(i, {
    count: "III"
  })])])])])
}
const __nuxt_component_0$4 = _export_sfc(_sfc_main$i, [
    ["render", _sfc_render$9],
    ["__scopeId", "data-v-61e9ac12"]
  ]),
  _sfc_main$h = {},
  _hoisted_1$h = {
    class: "icon",
    viewBox: "0 0 1143 700",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function _sfc_render$8(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, [...t[0] || (t[0] = [createStaticVNode('<rect opacity="0.5" x="0.375928" y="493.376" width="112.248" height="204.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="0.375928" y="383.376" width="112.248" height="109.248" rx="54.6241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="113.376" y="588.376" width="112.248" height="109.248" rx="54.6241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="113.376" y="479.376" width="112.248" height="108.248" rx="54.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="0.375928" y="0.375928" width="112.248" height="382.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="113.376" y="152.376" width="112.248" height="326.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="113.376" y="0.375928" width="112.248" height="151.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="228.376" y="0.375928" width="112.248" height="270.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="343.376" y="0.375928" width="112.248" height="108.248" rx="54.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="458.376" y="0.375928" width="112.248" height="232.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="573.376" y="0.375928" width="112.248" height="382.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="688.376" y="0.375928" width="112.248" height="151.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="803.376" y="0.375928" width="112.248" height="271.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="918.376" y="0.375928" width="112.248" height="108.248" rx="54.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="1030.38" y="0.375928" width="112.248" height="232.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="1030.38" y="233.376" width="112.248" height="110.248" rx="55.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="1030.38" y="344.376" width="112.248" height="355.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="916.376" y="494.376" width="112.248" height="205.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="916.376" y="383.376" width="112.248" height="110.248" rx="55.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="916.376" y="109.376" width="112.248" height="273.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="803.376" y="548.376" width="112.248" height="151.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="803.376" y="272.376" width="112.248" height="275.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="686.376" y="589.376" width="112.248" height="110.248" rx="55.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="686.376" y="479.376" width="112.248" height="110.248" rx="55.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="686.376" y="152.376" width="112.248" height="326.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="573.376" y="494.376" width="112.248" height="205.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="573.376" y="383.376" width="112.248" height="109.248" rx="54.6241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="458.376" y="344.376" width="112.248" height="355.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="343.376" y="493.376" width="112.248" height="206.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="343.376" y="383.376" width="112.248" height="110.248" rx="55.1241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="343.376" y="109.376" width="112.248" height="273.248" rx="56.1241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="458.376" y="233.376" width="112.248" height="109.248" rx="54.6241" stroke="#F1F1F1" stroke-width="0.751856" class="small"></rect><rect opacity="0.5" x="229.376" y="548.376" width="111.248" height="151.248" rx="55.6241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect><rect opacity="0.5" x="229.376" y="272.376" width="111.248" height="275.248" rx="55.6241" stroke="#F1F1F1" stroke-width="0.751856" class="big"></rect>', 34)])])
}
const __nuxt_component_0$3 = _export_sfc(_sfc_main$h, [
    ["render", _sfc_render$8]
  ]),
  _hoisted_1$g = {
    class: "sect-2-wrap"
  },
  _hoisted_2$a = {
    class: "sect-2-sticky"
  },
  _hoisted_3$9 = {
    class: "circles"
  },
  _hoisted_4$9 = {
    class: "items"
  },
  _hoisted_5$6 = {
    class: "item-photo"
  },
  _hoisted_6$6 = ["src"],
  _hoisted_7$5 = {
    key: 0,
    class: "item-text"
  },
  _hoisted_8$4 = ["innerHTML"],
  _sfc_main$g = defineComponent({
    __name: "sect2",
    setup(e) {
      const t = [{
        photo: "/images/desire-1.webp"
      }, {
        photo: "/images/desire-2.webp",
        text1: "bold",
        text2: "WHEN <br />NEEDED"
      }, {
        photo: "/images/desire-3.webp"
      }, {
        photo: "/images/desire-4.webp",
        text1: "QUIET",
        text2: "WHEN <br />CALLED"
      }, {
        photo: "/images/desire-5.webp",
        text1: "RELENTLESS",
        text2: "FEARLESS, <br />TIMELESS &"
      }];
      return (r, i) => {
        const s = __nuxt_component_0$3,
          n = __nuxt_component_0$d;
        return openBlock(), createElementBlock("div", _hoisted_1$g, [i[0] || (i[0] = createBaseVNode("div", {
          class: "triggers-for-text"
        }, [createBaseVNode("div", {
          class: "trigger trigger-1"
        }), createBaseVNode("div", {
          class: "trigger trigger-2"
        }), createBaseVNode("div", {
          class: "trigger trigger-3"
        })], -1)), createBaseVNode("div", _hoisted_2$a, [createBaseVNode("div", _hoisted_3$9, [createVNode(s)]), createBaseVNode("div", _hoisted_4$9, [(openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          photo: a,
          text1: l,
          text2: o
        }, c) => createBaseVNode("div", {
          key: c,
          class: "item"
        }, [createBaseVNode("div", _hoisted_5$6, [createBaseVNode("img", {
          src: a,
          class: "inner-img",
          alt: ""
        }, null, 8, _hoisted_6$6)]), l && o ? (openBlock(), createElementBlock("div", _hoisted_7$5, [createVNode(n, {
          text: l,
          class: "h2-book"
        }, null, 8, ["text"]), createBaseVNode("div", {
          class: "h2-thin",
          innerHTML: o
        }, null, 8, _hoisted_8$4)])) : createCommentVNode("", !0)])), 64))])])])
      }
    }
  }),
  __nuxt_component_1$2 = _export_sfc(_sfc_main$g, [
    ["__scopeId", "data-v-ebc3b246"]
  ]),
  _hoisted_1$f = {
    class: "sect-2-wrap-mob"
  },
  _hoisted_2$9 = {
    class: "main-title title-anim"
  },
  _hoisted_3$8 = {
    class: "items"
  },
  _hoisted_4$8 = {
    class: "item-photo parallax-image"
  },
  _hoisted_5$5 = ["src"],
  _hoisted_6$5 = {
    key: 0,
    class: "item-text title-anim"
  },
  _hoisted_7$4 = ["innerHTML"],
  _sfc_main$f = defineComponent({
    __name: "sect2Mobile",
    setup(e) {
      const t = [{
        photo: "/images/desire-1.webp"
      }, {
        photo: "/images/desire-2.webp",
        text1: "QUIET",
        text2: "WHEN <br />CALLED"
      }, {
        photo: "/images/desire-3.webp"
      }, {
        photo: "/images/desire-4.webp",
        text1: "RELENTLESS",
        text2: "FEARLESS, <br />TIMELESS &"
      }, {
        photo: "/images/desire-5.webp"
      }];
      return (r, i) => {
        const s = __nuxt_component_0$d;
        return openBlock(), createElementBlock("div", _hoisted_1$f, [createBaseVNode("div", _hoisted_2$9, [createVNode(s, {
          text: "BOLD",
          class: "h1-book title-book"
        }), i[0] || (i[0] = createBaseVNode("div", {
          class: "h1-thin title-thin",
          innerHTML: "when<br />needed"
        }, null, -1))]), createBaseVNode("div", _hoisted_3$8, [(openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          photo: n,
          text1: a,
          text2: l
        }, o) => createBaseVNode("div", {
          key: o,
          class: "item"
        }, [createBaseVNode("div", _hoisted_4$8, [createBaseVNode("img", {
          src: n,
          class: "inner-img",
          alt: ""
        }, null, 8, _hoisted_5$5)]), a && l ? (openBlock(), createElementBlock("div", _hoisted_6$5, [createVNode(s, {
          text: a,
          class: "h2-book title-book"
        }, null, 8, ["text"]), createBaseVNode("div", {
          class: "h2-thin title-thin",
          innerHTML: l
        }, null, 8, _hoisted_7$4)])) : createCommentVNode("", !0)])), 64))])])
      }
    }
  }),
  __nuxt_component_2$2 = _export_sfc(_sfc_main$f, [
    ["__scopeId", "data-v-7a9c6173"]
  ]),
  _hoisted_1$e = {
    class: "sect-3-container"
  },
  _hoisted_2$8 = {
    class: "sect-3-sticky"
  },
  _hoisted_3$7 = {
    class: "sect-3"
  },
  _hoisted_4$7 = {
    class: "sect-3-wrap"
  },
  _hoisted_5$4 = {
    class: "sect-3-text"
  },
  _hoisted_6$4 = {
    class: "sect-3-title"
  },
  _hoisted_7$3 = {
    class: "title-anim"
  },
  _hoisted_8$3 = {
    class: "sect-3-images"
  },
  _hoisted_9$2 = {
    class: "sect-3-photos"
  },
  _hoisted_10$2 = ["src"],
  _sfc_main$e = defineComponent({
    __name: "sect3",
    setup(e) {
      const t = ["/images/info-img-1.webp", "/images/info-img-2.webp", "/images/info-img-3.webp", "/images/info-img-4.webp"];
      return (r, i) => {
        const s = __nuxt_component_0$d;
        return openBlock(), createElementBlock("div", _hoisted_1$e, [createBaseVNode("div", _hoisted_2$8, [createBaseVNode("section", _hoisted_3$7, [createBaseVNode("div", _hoisted_4$7, [i[3] || (i[3] = createBaseVNode("div", {
          class: "sect-3-decor2"
        }, null, -1)), createBaseVNode("div", _hoisted_5$4, [i[2] || (i[2] = createBaseVNode("div", {
          class: "sect-3-descr l1-thin"
        }, [createBaseVNode("div", {
          class: "sect-3-descr-wrap text-anim"
        }, [createTextVNode(" Where "), createBaseVNode("span", {
          class: "l1-bold"
        }, "bold ideas"), createTextVNode(" find their audience. ")])], -1)), createBaseVNode("div", _hoisted_6$4, [i[1] || (i[1] = createBaseVNode("div", {
          class: "sect-3-decor"
        }, null, -1)), createBaseVNode("div", _hoisted_7$3, [i[0] || (i[0] = createBaseVNode("div", {
          class: "h1-thin title-thin"
        }, [createTextVNode(" Featured "), createBaseVNode("br"), createTextVNode(" In the "), createBaseVNode("br"), createTextVNode(" World’s ")], -1)), createVNode(s, {
          text: "Leading",
          class: "h1-book title-book"
        }), createVNode(s, {
          text: "Voices",
          class: "h1-book title-book"
        })])])]), i[4] || (i[4] = createBaseVNode("div", {
          class: "sect-3-desc2 b1-light"
        }, [createTextVNode(" Nabil Issa’s work is recognized by top publications like "), createBaseVNode("span", {
          class: "b1-bold"
        }, "Architectural Digest, ELLE Decoration, and VOGUE"), createTextVNode(", highlighting a vision of refined originality. ")], -1)), createBaseVNode("div", _hoisted_8$3, [createBaseVNode("div", _hoisted_9$2, [(openBlock(), createElementBlock(Fragment, null, renderList(t, (n, a) => createBaseVNode("div", {
          key: a,
          class: "sect-3-img"
        }, [createBaseVNode("img", {
          src: n,
          class: "inner-img",
          alt: ""
        }, null, 8, _hoisted_10$2)])), 64))])])])])])])
      }
    }
  }),
  __nuxt_component_3$3 = _export_sfc(_sfc_main$e, [
    ["__scopeId", "data-v-2b312de3"]
  ]),
  _sfc_main$d = {},
  _hoisted_1$d = {
    class: "chapter-3"
  };

function _sfc_render$7(e, t) {
  const r = __nuxt_component_0$4,
    i = __nuxt_component_1$2,
    s = __nuxt_component_2$2,
    n = __nuxt_component_3$3;
  return openBlock(), createElementBlock("section", _hoisted_1$d, [createVNode(r), createVNode(i), createVNode(s), createVNode(n)])
}
const __nuxt_component_8 = _export_sfc(_sfc_main$d, [
    ["render", _sfc_render$7],
    ["__scopeId", "data-v-da1c79fb"]
  ]),
  _imports_0$5 = publicAssetsURL("/images/image_5.webp"),
  _sfc_main$c = {},
  _hoisted_1$c = {
    class: "sect-1-wrap"
  },
  _hoisted_2$7 = {
    class: "sect-1-sticky"
  },
  _hoisted_3$6 = {
    class: "sect-1"
  },
  _hoisted_4$6 = {
    class: "sect-1-content"
  };

function _sfc_render$6(e, t) {
  const r = __nuxt_component_0$9,
    i = __nuxt_component_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$c, [createBaseVNode("div", _hoisted_2$7, [createBaseVNode("section", _hoisted_3$6, [createBaseVNode("div", _hoisted_4$6, [t[0] || (t[0] = createBaseVNode("img", {
    class: "img",
    src: _imports_0$5,
    alt: ""
  }, null, -1)), createVNode(r, {
    text: "archi<strong>tecture</strong>"
  }), createVNode(i, {
    count: "IV"
  })])])])])
}
const __nuxt_component_0$2 = _export_sfc(_sfc_main$c, [
    ["render", _sfc_render$6],
    ["__scopeId", "data-v-bb33267c"]
  ]),
  _imports_0$4 = publicAssetsURL("/images/circle-bg.webp"),
  _sfc_main$b = {},
  _hoisted_1$b = {
    class: "sect-2-wrap"
  };

function _sfc_render$5(e, t) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [...t[0] || (t[0] = [createBaseVNode("div", {
    class: "sect-2-sticky"
  }, [createBaseVNode("section", {
    class: "sect-2"
  }, [createBaseVNode("div", {
    class: "circle-bg"
  }, [createBaseVNode("img", {
    class: "inner-img",
    src: _imports_0$4,
    alt: ""
  })])])], -1)])])
}
const __nuxt_component_1$1 = _export_sfc(_sfc_main$b, [
    ["render", _sfc_render$5],
    ["__scopeId", "data-v-61c28f0c"]
  ]),
  _hoisted_1$a = {
    class: "sect-3"
  },
  _hoisted_2$6 = {
    class: "sect-3-content"
  },
  _hoisted_3$5 = {
    class: "sect-3-title"
  },
  _hoisted_4$5 = {
    class: "sect-3-photos-wrap"
  },
  _hoisted_5$3 = {
    class: "sect-3-sticky"
  },
  _hoisted_6$3 = {
    class: "sect-3-photos"
  },
  _hoisted_7$2 = {
    class: "sect-3-photo-wrap"
  },
  _hoisted_8$2 = ["src"],
  _hoisted_9$1 = {
    key: 0,
    class: "sect-3-texts"
  },
  _hoisted_10$1 = {
    class: "sect-3-texts-row"
  },
  _sfc_main$a = defineComponent({
    __name: "sect3",
    setup(e) {
      const t = ["/images/image_51.webp", "/images/image_52.webp", "/images/image_53.webp", "/images/image_54.webp", "/images/image_55.webp", "/images/image_56.webp", "/images/image_57.webp"];
      return (r, i) => {
        const s = __nuxt_component_0$d;
        return openBlock(), createElementBlock("div", _hoisted_1$a, [createBaseVNode("div", _hoisted_2$6, [i[1] || (i[1] = createBaseVNode("p", {
          class: "sect-3-text1 l1-thin text-anim"
        }, "Where form dares", -1)), createBaseVNode("div", _hoisted_3$5, [i[0] || (i[0] = createBaseVNode("h2", {
          class: "h1-thin"
        }, [createTextVNode(" SHAPING "), createBaseVNode("br"), createTextVNode(" bold"), createBaseVNode("br"), createTextVNode(" FORM & ")], -1)), createVNode(s, {
          text: "feel",
          class: "h1-book"
        })]), i[2] || (i[2] = createBaseVNode("p", {
          class: "sect-3-text2 l1-thin text-anim"
        }, "and function", -1)), i[3] || (i[3] = createBaseVNode("p", {
          class: "sect-3-text3 l1-bold text-anim"
        }, "obeys.", -1))]), createBaseVNode("div", _hoisted_4$5, [createBaseVNode("div", _hoisted_5$3, [createBaseVNode("div", _hoisted_6$3, [(openBlock(), createElementBlock(Fragment, null, renderList(t, (n, a) => createBaseVNode("div", {
          key: a,
          class: "sect-3-photo"
        }, [createBaseVNode("div", _hoisted_7$2, [createBaseVNode("img", {
          src: n,
          alt: ""
        }, null, 8, _hoisted_8$2)]), a === 1 ? (openBlock(), createElementBlock("div", _hoisted_9$1, [i[5] || (i[5] = createBaseVNode("h2", {
          class: "h1-thin"
        }, "WITH", -1)), createVNode(s, {
          text: "REFINED",
          class: "h1-book"
        }), createBaseVNode("div", _hoisted_10$1, [i[4] || (i[4] = createBaseVNode("h2", {
          class: "h1-thin"
        }, "&", -1)), createVNode(s, {
          text: "DIGNIFIED",
          class: "h1-book"
        })]), i[6] || (i[6] = createBaseVNode("h2", {
          class: "h1-thin"
        }, "MATERIALS.", -1))])) : createCommentVNode("", !0)])), 64))])])])])
      }
    }
  }),
  __nuxt_component_2$1 = _export_sfc(_sfc_main$a, [
    ["__scopeId", "data-v-731b5d83"]
  ]),
  _hoisted_1$9 = {
    class: "sect-3-mob"
  },
  _hoisted_2$5 = {
    class: "sect-3-content"
  },
  _hoisted_3$4 = {
    class: "sect-3-title title-anim"
  },
  _hoisted_4$4 = {
    class: "sect-3-photos"
  },
  _hoisted_5$2 = {
    class: "sect-3-photo-wrap parallax-image"
  },
  _hoisted_6$2 = ["src"],
  _hoisted_7$1 = {
    key: 0,
    class: "sect-3-texts title-anim"
  },
  _hoisted_8$1 = {
    class: "sect-3-texts-row"
  },
  _sfc_main$9 = defineComponent({
    __name: "sect3Mob",
    setup(e) {
      const t = ["/images/image_51.webp", "/images/image_52.webp", "/images/image_53.webp", "/images/image_54.webp", "/images/image_55.webp", "/images/image_56.webp", "/images/image_57.webp"];
      return (r, i) => {
        const s = __nuxt_component_0$d;
        return openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("div", _hoisted_2$5, [createBaseVNode("div", _hoisted_3$4, [i[0] || (i[0] = createBaseVNode("h2", {
          class: "h1-thin title-thin"
        }, [createTextVNode(" SHAPING "), createBaseVNode("br"), createTextVNode(" bold"), createBaseVNode("br"), createTextVNode(" FORM & ")], -1)), createVNode(s, {
          text: "feel",
          class: "h1-book title-book"
        })]), i[1] || (i[1] = createStaticVNode('<div class="sect-3-text" data-v-77c2d94d><p class="sect-3-text1 l1-thin text-anim" data-v-77c2d94d>Where form dares</p><p class="sect-3-text1 l1-thin text-anim" data-v-77c2d94d>and</p><p class="sect-3-text1 l1-thin text-anim" data-v-77c2d94d>function <span class="l1-bold" data-v-77c2d94d>obeys</span>.</p></div>', 1))]), createBaseVNode("div", _hoisted_4$4, [(openBlock(), createElementBlock(Fragment, null, renderList(t, (n, a) => createBaseVNode("div", {
          key: a,
          class: "sect-3-photo"
        }, [createBaseVNode("div", _hoisted_5$2, [createBaseVNode("img", {
          src: n,
          alt: ""
        }, null, 8, _hoisted_6$2)]), a === 1 ? (openBlock(), createElementBlock("div", _hoisted_7$1, [i[3] || (i[3] = createBaseVNode("h2", {
          class: "h1-thin title-thin"
        }, "WITH", -1)), createVNode(s, {
          text: "REFINED",
          class: "h1-book title-book"
        }), createBaseVNode("div", _hoisted_8$1, [i[2] || (i[2] = createBaseVNode("h2", {
          class: "h1-thin title-thin"
        }, "&", -1)), createVNode(s, {
          text: "DIGNIFIED",
          class: "h1-book title-book"
        })]), i[4] || (i[4] = createBaseVNode("h2", {
          class: "h1-thin title-thin"
        }, "MATERIALS.", -1))])) : createCommentVNode("", !0)])), 64))])])
      }
    }
  }),
  __nuxt_component_3$2 = _export_sfc(_sfc_main$9, [
    ["__scopeId", "data-v-77c2d94d"]
  ]),
  _sfc_main$8 = {},
  _hoisted_1$8 = {
    class: "chapter-4"
  };

function _sfc_render$4(e, t) {
  const r = __nuxt_component_0$2,
    i = __nuxt_component_1$1,
    s = __nuxt_component_2$1,
    n = __nuxt_component_3$2;
  return openBlock(), createElementBlock("section", _hoisted_1$8, [createVNode(r), createVNode(i), createVNode(s), createVNode(n)])
}
const __nuxt_component_9 = _export_sfc(_sfc_main$8, [
    ["render", _sfc_render$4],
    ["__scopeId", "data-v-75a837c1"]
  ]),
  _imports_0$3 = publicAssetsURL("/images/image_178.webp"),
  _sfc_main$7 = {},
  _hoisted_1$7 = {
    class: "sect-1-wrap"
  },
  _hoisted_2$4 = {
    class: "sect-1-sticky"
  },
  _hoisted_3$3 = {
    class: "sect-1"
  },
  _hoisted_4$3 = {
    class: "sect-1-content"
  };

function _sfc_render$3(e, t) {
  const r = __nuxt_component_0$9,
    i = __nuxt_component_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$4, [createBaseVNode("section", _hoisted_3$3, [createBaseVNode("div", _hoisted_4$3, [t[0] || (t[0] = createBaseVNode("img", {
    class: "img",
    src: _imports_0$3,
    alt: ""
  }, null, -1)), createVNode(r, {
    text: "Where <string>Dialogue</strong> Takes Shape"
  }), createVNode(i, {
    count: "V"
  })])])])])
}
const __nuxt_component_0$1 = _export_sfc(_sfc_main$7, [
    ["render", _sfc_render$3],
    ["__scopeId", "data-v-3c024d84"]
  ]),
  _imports_0$2 = publicAssetsURL("/images/image_200.webp"),
  _hoisted_1$6 = {
    class: "sect-2"
  },
  _hoisted_2$3 = {
    class: "sect-2-wrap"
  },
  _hoisted_3$2 = {
    class: "sect-2-title"
  },
  _hoisted_4$2 = {
    class: "sect-2-title-row"
  },
  descr$1 = "<strong>Modernism</strong> with soul, <strong>award-winning</strong> precision, and <strong>minimalism</strong> that <strong>holds</strong> <strong>meaning</strong> — each project is a pursuit of timeless impact through <strong>thoughtful</strong> <strong>design.</strong>",
  _sfc_main$6 = defineComponent({
    __name: "sect2",
    setup(e) {
      return (t, r) => {
        const i = __nuxt_component_0$d;
        return openBlock(), createElementBlock("section", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$3, [r[2] || (r[2] = createBaseVNode("div", {
          class: "sect-2-image parallax-image"
        }, [createBaseVNode("img", {
          class: "inner-img",
          src: _imports_0$2,
          alt: ""
        })], -1)), createBaseVNode("div", _hoisted_3$2, [r[1] || (r[1] = createBaseVNode("h2", {
          class: "h1-thin"
        }, [createTextVNode(" Design "), createBaseVNode("br"), createTextVNode(" that "), createBaseVNode("br"), createTextVNode(" Wins, ")], -1)), createVNode(i, {
          class: "h1-book",
          text: "Speaks"
        }), createBaseVNode("div", _hoisted_4$2, [r[0] || (r[0] = createBaseVNode("h2", {
          class: "h1-thin"
        }, "&", -1)), createVNode(i, {
          class: "h1-book",
          text: "Lasts"
        })])]), createBaseVNode("div", {
          class: "sect-2-descr b1-light text-anim",
          innerHTML: descr$1
        })])])
      }
    }
  }),
  __nuxt_component_1 = _export_sfc(_sfc_main$6, [
    ["__scopeId", "data-v-a2cb93bb"]
  ]),
  _imports_0$1 = publicAssetsURL("/images/overlay.png"),
  _sfc_main$5 = {},
  _hoisted_1$5 = {
    class: "union-wrap"
  };

function _sfc_render$2(e, t) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [...t[0] || (t[0] = [createStaticVNode('<div class="union-overlay" data-v-31668ef6><img src="' + _imports_0$1 + '" alt="" data-v-31668ef6></div><svg class="union-svg" viewBox="0 0 1440 856" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-31668ef6><path id="unionPath" d="M170 0C252.843 0 320 67.1573 320 150V253C320 335.843 387.157 403 470 403H970C1052.84 403 1120 335.843 1120 253V150C1120 67.1573 1187.16 0 1270 0H1440V856H1430V10H1270C1192.68 10 1130 72.6801 1130 150V253C1130 341.366 1058.37 413 970 413H470C382.325 413 311.12 342.481 310.013 255.068L310 253V150C310 72.6801 247.32 10 170 10H10V856H0V0H170Z" fill="#F1F1F1" data-v-31668ef6></path><rect x="1430" width="10" height="856" fill="url(#paint1_linear_310_11480)" data-v-31668ef6></rect><rect width="10" height="856" fill="url(#paint2_linear_310_11480)" data-v-31668ef6></rect></svg>', 2)])])
}
const __nuxt_component_0 = _export_sfc(_sfc_main$5, [
    ["render", _sfc_render$2],
    ["__scopeId", "data-v-31668ef6"]
  ]),
  _hoisted_1$4 = {
    class: "sect-3"
  },
  _hoisted_2$2 = {
    class: "sect-3-wrap"
  },
  _hoisted_3$1 = {
    class: "items"
  },
  _hoisted_4$1 = {
    class: "item-title"
  },
  _hoisted_5$1 = {
    class: "item-text"
  },
  _hoisted_6$1 = ["innerHTML"],
  descr = `
<strong>Over</strong> <strong>two</strong> <strong>decades</strong> <strong>of</strong> <strong>dedicated</strong> <strong>practice,</strong> trusted by nearly a hundred clients, over a hundred projects brought to fruition — and counting. <strong>These</strong> <strong>numbers</strong> <strong>reflect</strong> <strong>a</strong> <strong>vision</strong> grounded in consistency, craft, <strong>and</strong> <strong>meaningful</strong> <strong>impact.</strong>
`,
  _sfc_main$4 = defineComponent({
    __name: "sect3",
    setup(e) {
      const t = [{
        number: "25",
        text: "<strong>Years</strong> <br />shaping <br />excellence"
      }, {
        number: "97",
        text: "<strong>Clients</strong> <br />who <br />believed"
      }, {
        number: "120",
        text: "<strong>Projects </strong> <br />brought <br />to life"
      }, {
        number: "10",
        text: "<strong>Accolades</strong> <br />received"
      }];
      return (r, i) => {
        const s = __nuxt_component_0,
          n = __nuxt_component_0$d;
        return openBlock(), createElementBlock("section", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$2, [createVNode(s, {
          class: "union-svg"
        }), createBaseVNode("div", _hoisted_3$1, [(openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          number: a,
          text: l
        }, o) => createBaseVNode("div", {
          key: o,
          class: "item"
        }, [createBaseVNode("div", _hoisted_4$1, [createVNode(n, {
          text: a
        }, null, 8, ["text"])]), createBaseVNode("div", _hoisted_5$1, [createBaseVNode("div", {
          class: "item-info b1-light basic-descr text-anim",
          innerHTML: l
        }, null, 8, _hoisted_6$1)])])), 64))]), createBaseVNode("div", {
          class: "sect-3-descr b1-light basic-descr text-anim",
          innerHTML: descr
        })])])
      }
    }
  }),
  __nuxt_component_2 = _export_sfc(_sfc_main$4, [
    ["__scopeId", "data-v-b5283828"]
  ]),
  _sfc_main$3 = {},
  _hoisted_1$3 = {
    class: "icon",
    viewBox: "0 0 139 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function _sfc_render$1(e, t) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [...t[0] || (t[0] = [createStaticVNode('<path d="M57.1232 16.4216C55.6712 16.4216 54.6076 15.6148 54.5232 14.1357H52.2102C52.4128 16.9763 54.4894 18.2873 57.1232 18.2873C59.3517 18.2873 61.5297 17.1948 61.5297 14.7408C61.5297 12.2094 59.5573 11.6417 57.534 11.0592L57.4777 11.043C55.9245 10.5892 54.9453 10.1354 54.9453 9.14371C54.9453 8.03437 55.8401 7.58055 56.9712 7.58055C58.2712 7.58055 58.9466 8.18564 59.166 9.49668H61.4284C61.1751 6.84099 59.4362 5.71484 57.0219 5.71484C54.8102 5.71484 52.6829 6.80737 52.7167 9.11009C52.7336 11.4968 54.7089 12.1692 56.7011 12.7743L56.8032 12.8044C58.2844 13.2413 59.3011 13.5412 59.3011 14.7408C59.3011 15.867 58.4401 16.4216 57.1232 16.4216Z" fill="white" data-v-ef62df86></path><path d="M122.495 14.1357C122.579 15.6148 123.643 16.4216 125.095 16.4216C126.412 16.4216 127.273 15.867 127.273 14.7408C127.273 13.5412 126.256 13.2413 124.775 12.8044L124.673 12.7743C122.68 12.1692 120.705 11.4968 120.688 9.11009C120.654 6.80737 122.782 5.71484 124.993 5.71484C127.408 5.71484 129.147 6.84099 129.4 9.49668H127.137C126.918 8.18564 126.243 7.58055 124.943 7.58055C123.812 7.58055 122.917 8.03437 122.917 9.14371C122.917 10.1354 123.896 10.5892 125.449 11.043L125.505 11.0592C127.529 11.6417 129.501 12.2094 129.501 14.7408C129.501 17.1948 127.323 18.2873 125.095 18.2873C122.461 18.2873 120.384 16.9763 120.182 14.1357H122.495Z" fill="white" data-v-ef62df86></path><path d="M129.546 7.9167V6.00057H138.849V7.9167H135.337V18.0016H133.075V7.9167H129.546Z" fill="white" data-v-ef62df86></path><path fill-rule="evenodd" clip-rule="evenodd" d="M109.034 18.0016H111.381L112.512 14.8585H117.138L118.235 18.0016H120.616L116.26 6.00057H113.407L109.034 18.0016ZM116.513 13.06H113.12L114.791 8.06798H114.825L116.513 13.06Z" fill="white" data-v-ef62df86></path><path d="M100.659 6.00057H102.921V16.0855H108.51V18.0016H100.659V6.00057Z" fill="white" data-v-ef62df86></path><path d="M99.4086 7.9167V6.00057H91.5748V18.0016H99.4592V16.0855H93.8372V12.8751H99.054V11.0094H93.8372V7.9167H99.4086Z" fill="white" data-v-ef62df86></path><path d="M88.113 6.00057H90.3753V18.0016H88.113V12.9423H83.0312V18.0016H80.7689V6.00057H83.0312V11.0262H88.113V6.00057Z" fill="white" data-v-ef62df86></path><path d="M73.8182 7.91674V18.0016H76.0805V7.91674H79.5922V6.00061H61.5749V7.91674H65.1034V18.0016H67.3658V7.91674H73.8182Z" fill="white" data-v-ef62df86></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.6196 17.9848V6.00061H47.2624C50.0312 6.00061 51.6014 7.4125 51.6014 9.41267C51.6014 11.1943 50.504 12.2532 49.2209 12.5894C50.3351 12.9088 50.7234 13.8332 51.1286 15.1442L51.1558 15.2322C51.481 16.2847 51.7478 17.1485 52.1585 17.9008V18.0016H49.8455C49.5705 17.5015 49.3462 16.8243 49.1128 16.1193C49.0167 15.8292 48.919 15.5342 48.8157 15.2451C48.4105 14.1358 47.8702 13.3794 46.3845 13.3794H44.8819V17.9848H42.6196ZM44.8819 11.5641H47.1442C48.5624 11.5641 49.3728 10.8077 49.3728 9.63118C49.3728 8.60588 48.6637 7.8327 47.0936 7.8327H44.8819V11.5641Z" fill="white" data-v-ef62df86></path><path d="M41.4265 6.00057H39.1642V18.0016H41.4265V6.00057Z" fill="white" data-v-ef62df86></path><path d="M30.3031 18.0016V6.00057H37.9849V7.9167H32.5654V11.0094H37.5797V12.8751H32.5654V18.0016H30.3031Z" fill="white" data-v-ef62df86></path><path d="M29.0926 7.9167V6.00057H21.2589V18.0016H29.1433V16.0855H23.5212V12.8751H28.7381V11.0094H23.5212V7.9167H29.0926Z" fill="white" data-v-ef62df86></path><path d="M17.8003 6.00057H20.0626V18.0016H17.8003V12.9423H12.7185V18.0016H10.4561V6.00057H12.7185V11.0262H17.8003V6.00057Z" fill="white" data-v-ef62df86></path><path d="M0 6.00057V7.9167H3.52856V18.0016H5.7909V7.9167H9.30258V6.00057H0Z" fill="white" data-v-ef62df86></path>', 14)])])
}
const __nuxt_component_3$1 = _export_sfc(_sfc_main$3, [
    ["render", _sfc_render$1],
    ["__scopeId", "data-v-ef62df86"]
  ]),
  firstNonUndefined = (...e) => e.find(t => t !== void 0);

function defineNuxtLink(e) {
  const t = e.componentName || "NuxtLink";

  function r(n) {
    return !hashMode && typeof n == "string" && n.startsWith("#")
  }

  function i(n, a, l) {
    const o = l ?? e.trailingSlash;
    if (!n || o !== "append" && o !== "remove") return n;
    if (typeof n == "string") return applyTrailingSlashBehavior(n, o);
    const c = "path" in n && n.path !== void 0 ? n.path : a(n).path;
    return {
      ...n,
      name: void 0,
      path: applyTrailingSlashBehavior(c, o)
    }
  }

  function s(n) {
    const a = useRouter(),
      l = useRuntimeConfig(),
      o = computed(() => !!n.target && n.target !== "_self"),
      c = computed(() => {
        const E = n.to || n.href || "";
        return typeof E == "string" && hasProtocol(E, {
          acceptRelative: !0
        })
      }),
      f = resolveComponent("RouterLink"),
      b = f && typeof f != "string" ? f.useLink : void 0,
      u = computed(() => {
        if (n.external) return !0;
        const E = n.to || n.href || "";
        return typeof E == "object" ? !1 : E === "" || c.value
      }),
      y = computed(() => {
        const E = n.to || n.href || "";
        return u.value ? E : i(E, a.resolve, n.trailingSlash)
      }),
      g = u.value ? void 0 : b?.({
        ...n,
        to: y
      }),
      v = computed(() => {
        const E = n.trailingSlash ?? e.trailingSlash;
        if (!y.value || c.value || r(y.value)) return y.value;
        if (u.value) {
          const p = typeof y.value == "object" && "path" in y.value ? resolveRouteObject(y.value) : y.value,
            m = typeof p == "object" ? a.resolve(p).href : p;
          return applyTrailingSlashBehavior(m, E)
        }
        return typeof y.value == "object" ? a.resolve(y.value)?.href ?? null : applyTrailingSlashBehavior(joinURL(l.app.baseURL, y.value), E)
      });
    return {
      to: y,
      hasTarget: o,
      isAbsoluteUrl: c,
      isExternal: u,
      href: v,
      isActive: g?.isActive ?? computed(() => y.value === a.currentRoute.value.path),
      isExactActive: g?.isExactActive ?? computed(() => y.value === a.currentRoute.value.path),
      route: g?.route ?? computed(() => a.resolve(y.value)),
      async navigate(E) {
        await navigateTo(v.value, {
          replace: n.replace,
          external: u.value || o.value
        })
      }
    }
  }
  return defineComponent({
    name: t,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      target: {
        type: String,
        default: void 0,
        required: !1
      },
      rel: {
        type: String,
        default: void 0,
        required: !1
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      activeClass: {
        type: String,
        default: void 0,
        required: !1
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: !1
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: !1
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: !1
      },
      external: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      trailingSlash: {
        type: String,
        default: void 0,
        required: !1
      }
    },
    useLink: s,
    setup(n, {
      slots: a
    }) {
      const l = useRouter(),
        {
          to: o,
          href: c,
          navigate: f,
          isExternal: b,
          hasTarget: u,
          isAbsoluteUrl: y
        } = s(n),
        g = shallowRef(!1),
        v = ref(null),
        E = d => {
          v.value = n.custom ? d?.$el?.nextElementSibling : d?.$el
        };

      function p(d) {
        return !g.value && (typeof n.prefetchOn == "string" ? n.prefetchOn === d : n.prefetchOn?.[d] ?? e.prefetchOn?.[d]) && (n.prefetch ?? e.prefetch) !== !1 && n.noPrefetch !== !0 && n.target !== "_blank" && !isSlowConnection()
      }
      async function m(d = useNuxtApp()) {
        if (g.value) return;
        g.value = !0;
        const _ = typeof o.value == "string" ? o.value : b.value ? resolveRouteObject(o.value) : l.resolve(o.value).fullPath,
          x = b.value ? new URL(_, window.location.href).href : _;
        await Promise.all([d.hooks.callHook("link:prefetch", x).catch(() => {}), !b.value && !u.value && preloadRouteComponents(o.value, l).catch(() => {})])
      }
      if (p("visibility")) {
        const d = useNuxtApp();
        let _, x = null;
        onMounted(() => {
          const P = useObserver();
          onNuxtReady(() => {
            _ = requestIdleCallback(() => {
              v?.value?.tagName && (x = P.observe(v.value, async () => {
                x?.(), x = null, await m(d)
              }))
            })
          })
        }), onBeforeUnmount(() => {
          _ && cancelIdleCallback(_), x?.(), x = null
        })
      }
      return () => {
        if (!b.value && !u.value && !r(o.value)) {
          const x = {
            ref: E,
            to: o.value,
            activeClass: n.activeClass || e.activeClass,
            exactActiveClass: n.exactActiveClass || e.exactActiveClass,
            replace: n.replace,
            ariaCurrentValue: n.ariaCurrentValue,
            custom: n.custom
          };
          return n.custom || (p("interaction") && (x.onPointerenter = m.bind(null, void 0), x.onFocus = m.bind(null, void 0)), g.value && (x.class = n.prefetchedClass || e.prefetchedClass), x.rel = n.rel || void 0), h(resolveComponent("RouterLink"), x, a.default)
        }
        const d = n.target || null,
          _ = firstNonUndefined(n.noRel ? "" : n.rel, e.externalRelAttribute, y.value || u.value ? "noopener noreferrer" : "") || null;
        return n.custom ? a.default ? a.default({
          href: c.value,
          navigate: f,
          prefetch: m,
          get route() {
            if (!c.value) return;
            const x = new URL(c.value, window.location.href);
            return {
              path: x.pathname,
              fullPath: x.pathname,
              get query() {
                return parseQuery(x.search)
              },
              hash: x.hash,
              params: {},
              name: void 0,
              matched: [],
              redirectedFrom: void 0,
              meta: {},
              href: c.value
            }
          },
          rel: _,
          target: d,
          isExternal: b.value || u.value,
          isActive: !1,
          isExactActive: !1
        }) : null : h("a", {
          ref: v,
          href: c.value || null,
          rel: _,
          target: d,
          onClick: async x => {
            if (!(b.value || u.value)) {
              x.preventDefault();
              try {
                const P = encodeRoutePath(c.value);
                return await (n.replace ? l.replace(P) : l.push(P))
              } finally {
                if (r(o.value)) {
                  const P = o.value.slice(1);
                  let T = P;
                  try {
                    T = decodeURIComponent(P)
                  } catch {}
                  document.getElementById(T)?.focus()
                }
              }
            }
          }
        }, a.default?.())
      }
    }
  })
}
const __nuxt_component_4 = defineNuxtLink(nuxtLinkDefaults);

function applyTrailingSlashBehavior(e, t) {
  const r = t === "append" ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e) && !e.startsWith("http") ? e : r(e, !0)
}

function useObserver() {
  const e = useNuxtApp();
  if (e._observer) return e._observer;
  let t = null;
  const r = new Map,
    i = (n, a) => (t ||= new IntersectionObserver(l => {
      for (const o of l) {
        const c = r.get(o.target);
        (o.isIntersecting || o.intersectionRatio > 0) && c && c()
      }
    }), r.set(n, a), t.observe(n), () => {
      r.delete(n), t?.unobserve(n), r.size === 0 && (t?.disconnect(), t = null)
    });
  return e._observer = {
    observe: i
  }
}
const IS_2G_RE = /2g/;

function isSlowConnection() {
  const e = navigator.connection;
  return !!(e && (e.saveData || IS_2G_RE.test(e.effectiveType)))
}
const _imports_0 = publicAssetsURL("/images/image_106.webp");
var lottie$2 = {
    exports: {}
  },
  lottie$1 = lottie$2.exports,
  hasRequiredLottie;

function requireLottie() {
  return hasRequiredLottie || (hasRequiredLottie = 1, (function(module, exports$1) {
    typeof document < "u" && typeof navigator < "u" && (function(e, t) {
      module.exports = t()
    })(lottie$1, (function() {
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function(t) {
          _useWebWorker = !!t
        },
        getWebWorker = function() {
          return _useWebWorker
        },
        setLocationHref = function(t) {
          locationHref = t
        },
        getLocationHref = function() {
          return locationHref
        };

      function createTag(e) {
        return document.createElement(e)
      }

      function extendPrototype(e, t) {
        var r, i = e.length,
          s;
        for (r = 0; r < i; r += 1) {
          s = e[r].prototype;
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t.prototype[n] = s[n])
        }
      }

      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t)
      }

      function createProxyFunction(e) {
        function t() {}
        return t.prototype = e, t
      }
      var audioControllerFactory = (function() {
          function e(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }
          return e.prototype = {
              addAudio: function(r) {
                this.audios.push(r)
              },
              pause: function() {
                var r, i = this.audios.length;
                for (r = 0; r < i; r += 1) this.audios[r].pause()
              },
              resume: function() {
                var r, i = this.audios.length;
                for (r = 0; r < i; r += 1) this.audios[r].resume()
              },
              setRate: function(r) {
                var i, s = this.audios.length;
                for (i = 0; i < s; i += 1) this.audios[i].setRate(r)
              },
              createAudio: function(r) {
                return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                  src: [r]
                }) : {
                  isPlaying: !1,
                  play: function() {
                    this.isPlaying = !0
                  },
                  seek: function() {
                    this.isPlaying = !1
                  },
                  playing: function() {},
                  rate: function() {},
                  setVolume: function() {}
                }
              },
              setAudioFactory: function(r) {
                this.audioFactory = r
              },
              setVolume: function(r) {
                this._volume = r, this._updateVolume()
              },
              mute: function() {
                this._isMuted = !0, this._updateVolume()
              },
              unmute: function() {
                this._isMuted = !1, this._updateVolume()
              },
              getVolume: function() {
                return this._volume
              },
              _updateVolume: function() {
                var r, i = this.audios.length;
                for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
              }
            },
            function() {
              return new e
            }
        })(),
        createTypedArray = (function() {
          function e(r, i) {
            var s = 0,
              n = [],
              a;
            switch (r) {
              case "int16":
              case "uint8c":
                a = 1;
                break;
              default:
                a = 1.1;
                break
            }
            for (s = 0; s < i; s += 1) n.push(a);
            return n
          }

          function t(r, i) {
            return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : e(r, i)
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? t : e
        })();

      function createSizedArray(e) {
        return Array.apply(null, {
          length: e
        })
      }

      function _typeof$6(e) {
        "@babel/helpers - typeof";
        return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$6(e)
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
      (function() {
        var e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          t, r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
      })(), BMMath.random = Math.random, BMMath.abs = function(e) {
        var t = _typeof$6(e);
        if (t === "object" && e.length) {
          var r = createSizedArray(e.length),
            i, s = e.length;
          for (i = 0; i < s; i += 1) r[i] = Math.abs(e[i]);
          return r
        }
        return Math.abs(e)
      };
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

      function styleDiv(e) {
        e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
      }

      function BMEnterFrameEvent(e, t, r, i) {
        this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1
      }

      function BMCompleteEvent(e, t) {
        this.type = e, this.direction = t < 0 ? -1 : 1
      }

      function BMCompleteLoopEvent(e, t, r, i) {
        this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1
      }

      function BMSegmentStartEvent(e, t, r) {
        this.type = e, this.firstFrame = t, this.totalFrames = r
      }

      function BMDestroyEvent(e, t) {
        this.type = e, this.target = t
      }

      function BMRenderFrameErrorEvent(e, t) {
        this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
      }

      function BMConfigErrorEvent(e) {
        this.type = "configError", this.nativeError = e
      }
      var createElementID = (function() {
        var e = 0;
        return function() {
          return e += 1, idPrefix$1 + "__lottie_element_" + e
        }
      })();

      function HSVtoRGB(e, t, r) {
        var i, s, n, a, l, o, c, f;
        switch (a = Math.floor(e * 6), l = e * 6 - a, o = r * (1 - t), c = r * (1 - l * t), f = r * (1 - (1 - l) * t), a % 6) {
          case 0:
            i = r, s = f, n = o;
            break;
          case 1:
            i = c, s = r, n = o;
            break;
          case 2:
            i = o, s = r, n = f;
            break;
          case 3:
            i = o, s = c, n = r;
            break;
          case 4:
            i = f, s = o, n = r;
            break;
          case 5:
            i = r, s = o, n = c;
            break
        }
        return [i, s, n]
      }

      function RGBtoHSV(e, t, r) {
        var i = Math.max(e, t, r),
          s = Math.min(e, t, r),
          n = i - s,
          a, l = i === 0 ? 0 : n / i,
          o = i / 255;
        switch (i) {
          case s:
            a = 0;
            break;
          case e:
            a = t - r + n * (t < r ? 6 : 0), a /= 6 * n;
            break;
          case t:
            a = r - e + n * 2, a /= 6 * n;
            break;
          case r:
            a = e - t + n * 4, a /= 6 * n;
            break
        }
        return [a, l, o]
      }

      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addHueToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
      }
      var rgbToHex = (function() {
          var e = [],
            t, r;
          for (t = 0; t < 256; t += 1) r = t.toString(16), e[t] = r.length === 1 ? "0" + r : r;
          return function(i, s, n) {
            return i < 0 && (i = 0), s < 0 && (s = 0), n < 0 && (n = 0), "#" + e[i] + e[s] + e[n]
          }
        })(),
        setSubframeEnabled = function(t) {
          subframeEnabled = !!t
        },
        getSubframeEnabled = function() {
          return subframeEnabled
        },
        setExpressionsPlugin = function(t) {
          expressionsPlugin = t
        },
        getExpressionsPlugin = function() {
          return expressionsPlugin
        },
        setExpressionInterfaces = function(t) {
          expressionsInterfaces = t
        },
        getExpressionInterfaces = function() {
          return expressionsInterfaces
        },
        setDefaultCurveSegments = function(t) {
          defaultCurveSegments = t
        },
        getDefaultCurveSegments = function() {
          return defaultCurveSegments
        },
        setIdPrefix = function(t) {
          idPrefix$1 = t
        };

      function createNS(e) {
        return document.createElementNS(svgNS, e)
      }

      function _typeof$5(e) {
        "@babel/helpers - typeof";
        return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$5(e)
      }
      var dataManager = (function() {
          var e = 1,
            t = [],
            r, i, s = {
              onmessage: function() {},
              postMessage: function(y) {
                r({
                  data: y
                })
              }
            },
            n = {
              postMessage: function(y) {
                s.onmessage({
                  data: y
                })
              }
            };

          function a(u) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var y = new Blob(["var _workerSelf = self; self.onmessage = ", u.toString()], {
                  type: "text/javascript"
                }),
                g = URL.createObjectURL(y);
              return new Worker(g)
            }
            return r = u, s
          }

          function l() {
            i || (i = a(function(y) {
              function g() {
                function E($, k) {
                  var w, C, S = $.length,
                    F, A, j, Z;
                  for (C = 0; C < S; C += 1)
                    if (w = $[C], "ks" in w && !w.completed) {
                      if (w.completed = !0, w.hasMask) {
                        var q = w.masksProperties;
                        for (A = q.length, F = 0; F < A; F += 1)
                          if (q[F].pt.k.i) x(q[F].pt.k);
                          else
                            for (Z = q[F].pt.k.length, j = 0; j < Z; j += 1) q[F].pt.k[j].s && x(q[F].pt.k[j].s[0]), q[F].pt.k[j].e && x(q[F].pt.k[j].e[0])
                      }
                      w.ty === 0 ? (w.layers = d(w.refId, k), E(w.layers, k)) : w.ty === 4 ? _(w.shapes) : w.ty === 5 && z(w)
                    }
                }

                function p($, k) {
                  if ($) {
                    var w = 0,
                      C = $.length;
                    for (w = 0; w < C; w += 1) $[w].t === 1 && ($[w].data.layers = d($[w].data.refId, k), E($[w].data.layers, k))
                  }
                }

                function m($, k) {
                  for (var w = 0, C = k.length; w < C;) {
                    if (k[w].id === $) return k[w];
                    w += 1
                  }
                  return null
                }

                function d($, k) {
                  var w = m($, k);
                  return w ? w.layers.__used ? JSON.parse(JSON.stringify(w.layers)) : (w.layers.__used = !0, w.layers) : null
                }

                function _($) {
                  var k, w = $.length,
                    C, S;
                  for (k = w - 1; k >= 0; k -= 1)
                    if ($[k].ty === "sh")
                      if ($[k].ks.k.i) x($[k].ks.k);
                      else
                        for (S = $[k].ks.k.length, C = 0; C < S; C += 1) $[k].ks.k[C].s && x($[k].ks.k[C].s[0]), $[k].ks.k[C].e && x($[k].ks.k[C].e[0]);
                  else $[k].ty === "gr" && _($[k].it)
                }

                function x($) {
                  var k, w = $.i.length;
                  for (k = 0; k < w; k += 1) $.i[k][0] += $.v[k][0], $.i[k][1] += $.v[k][1], $.o[k][0] += $.v[k][0], $.o[k][1] += $.v[k][1]
                }

                function P($, k) {
                  var w = k ? k.split(".") : [100, 100, 100];
                  return $[0] > w[0] ? !0 : w[0] > $[0] ? !1 : $[1] > w[1] ? !0 : w[1] > $[1] ? !1 : $[2] > w[2] ? !0 : w[2] > $[2] ? !1 : null
                }
                var T = (function() {
                    var $ = [4, 4, 14];

                    function k(C) {
                      var S = C.t.d;
                      C.t.d = {
                        k: [{
                          s: S,
                          t: 0
                        }]
                      }
                    }

                    function w(C) {
                      var S, F = C.length;
                      for (S = 0; S < F; S += 1) C[S].ty === 5 && k(C[S])
                    }
                    return function(C) {
                      if (P($, C.v) && (w(C.layers), C.assets)) {
                        var S, F = C.assets.length;
                        for (S = 0; S < F; S += 1) C.assets[S].layers && w(C.assets[S].layers)
                      }
                    }
                  })(),
                  V = (function() {
                    var $ = [4, 7, 99];
                    return function(k) {
                      if (k.chars && !P($, k.v)) {
                        var w, C = k.chars.length;
                        for (w = 0; w < C; w += 1) {
                          var S = k.chars[w];
                          S.data && S.data.shapes && (_(S.data.shapes), S.data.ip = 0, S.data.op = 99999, S.data.st = 0, S.data.sr = 1, S.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          }, k.chars[w].t || (S.data.shapes.push({
                            ty: "no"
                          }), S.data.shapes[0].it.push({
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            },
                            sk: {
                              k: 0,
                              a: 0
                            },
                            sa: {
                              k: 0,
                              a: 0
                            },
                            ty: "tr"
                          })))
                        }
                      }
                    }
                  })(),
                  B = (function() {
                    var $ = [5, 7, 15];

                    function k(C) {
                      var S = C.t.p;
                      typeof S.a == "number" && (S.a = {
                        a: 0,
                        k: S.a
                      }), typeof S.p == "number" && (S.p = {
                        a: 0,
                        k: S.p
                      }), typeof S.r == "number" && (S.r = {
                        a: 0,
                        k: S.r
                      })
                    }

                    function w(C) {
                      var S, F = C.length;
                      for (S = 0; S < F; S += 1) C[S].ty === 5 && k(C[S])
                    }
                    return function(C) {
                      if (P($, C.v) && (w(C.layers), C.assets)) {
                        var S, F = C.assets.length;
                        for (S = 0; S < F; S += 1) C.assets[S].layers && w(C.assets[S].layers)
                      }
                    }
                  })(),
                  D = (function() {
                    var $ = [4, 1, 9];

                    function k(C) {
                      var S, F = C.length,
                        A, j;
                      for (S = 0; S < F; S += 1)
                        if (C[S].ty === "gr") k(C[S].it);
                        else if (C[S].ty === "fl" || C[S].ty === "st")
                        if (C[S].c.k && C[S].c.k[0].i)
                          for (j = C[S].c.k.length, A = 0; A < j; A += 1) C[S].c.k[A].s && (C[S].c.k[A].s[0] /= 255, C[S].c.k[A].s[1] /= 255, C[S].c.k[A].s[2] /= 255, C[S].c.k[A].s[3] /= 255), C[S].c.k[A].e && (C[S].c.k[A].e[0] /= 255, C[S].c.k[A].e[1] /= 255, C[S].c.k[A].e[2] /= 255, C[S].c.k[A].e[3] /= 255);
                        else C[S].c.k[0] /= 255, C[S].c.k[1] /= 255, C[S].c.k[2] /= 255, C[S].c.k[3] /= 255
                    }

                    function w(C) {
                      var S, F = C.length;
                      for (S = 0; S < F; S += 1) C[S].ty === 4 && k(C[S].shapes)
                    }
                    return function(C) {
                      if (P($, C.v) && (w(C.layers), C.assets)) {
                        var S, F = C.assets.length;
                        for (S = 0; S < F; S += 1) C.assets[S].layers && w(C.assets[S].layers)
                      }
                    }
                  })(),
                  L = (function() {
                    var $ = [4, 4, 18];

                    function k(C) {
                      var S, F = C.length,
                        A, j;
                      for (S = F - 1; S >= 0; S -= 1)
                        if (C[S].ty === "sh")
                          if (C[S].ks.k.i) C[S].ks.k.c = C[S].closed;
                          else
                            for (j = C[S].ks.k.length, A = 0; A < j; A += 1) C[S].ks.k[A].s && (C[S].ks.k[A].s[0].c = C[S].closed), C[S].ks.k[A].e && (C[S].ks.k[A].e[0].c = C[S].closed);
                      else C[S].ty === "gr" && k(C[S].it)
                    }

                    function w(C) {
                      var S, F, A = C.length,
                        j, Z, q, ee;
                      for (F = 0; F < A; F += 1) {
                        if (S = C[F], S.hasMask) {
                          var R = S.masksProperties;
                          for (Z = R.length, j = 0; j < Z; j += 1)
                            if (R[j].pt.k.i) R[j].pt.k.c = R[j].cl;
                            else
                              for (ee = R[j].pt.k.length, q = 0; q < ee; q += 1) R[j].pt.k[q].s && (R[j].pt.k[q].s[0].c = R[j].cl), R[j].pt.k[q].e && (R[j].pt.k[q].e[0].c = R[j].cl)
                        }
                        S.ty === 4 && k(S.shapes)
                      }
                    }
                    return function(C) {
                      if (P($, C.v) && (w(C.layers), C.assets)) {
                        var S, F = C.assets.length;
                        for (S = 0; S < F; S += 1) C.assets[S].layers && w(C.assets[S].layers)
                      }
                    }
                  })();

                function N($) {
                  $.__complete || (D($), T($), V($), B($), L($), E($.layers, $.assets), p($.chars, $.assets), $.__complete = !0)
                }

                function z($) {
                  $.t.a.length === 0 && "m" in $.t.p
                }
                var G = {};
                return G.completeData = N, G.checkColors = D, G.checkChars = V, G.checkPathProperties = B, G.checkShapes = L, G.completeLayers = E, G
              }
              if (n.dataManager || (n.dataManager = g()), n.assetLoader || (n.assetLoader = (function() {
                  function E(m) {
                    var d = m.getResponseHeader("content-type");
                    return d && m.responseType === "json" && d.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null
                  }

                  function p(m, d, _, x) {
                    var P, T = new XMLHttpRequest;
                    try {
                      T.responseType = "json"
                    } catch {}
                    T.onreadystatechange = function() {
                      if (T.readyState === 4)
                        if (T.status === 200) P = E(T), _(P);
                        else try {
                          P = E(T), _(P)
                        } catch (V) {
                          x && x(V)
                        }
                    };
                    try {
                      T.open(["G", "E", "T"].join(""), m, !0)
                    } catch {
                      T.open(["G", "E", "T"].join(""), d + "/" + m, !0)
                    }
                    T.send()
                  }
                  return {
                    load: p
                  }
                })()), y.data.type === "loadAnimation") n.assetLoader.load(y.data.path, y.data.fullPath, function(E) {
                n.dataManager.completeData(E), n.postMessage({
                  id: y.data.id,
                  payload: E,
                  status: "success"
                })
              }, function() {
                n.postMessage({
                  id: y.data.id,
                  status: "error"
                })
              });
              else if (y.data.type === "complete") {
                var v = y.data.animation;
                n.dataManager.completeData(v), n.postMessage({
                  id: y.data.id,
                  payload: v,
                  status: "success"
                })
              } else y.data.type === "loadData" && n.assetLoader.load(y.data.path, y.data.fullPath, function(E) {
                n.postMessage({
                  id: y.data.id,
                  payload: E,
                  status: "success"
                })
              }, function() {
                n.postMessage({
                  id: y.data.id,
                  status: "error"
                })
              })
            }), i.onmessage = function(u) {
              var y = u.data,
                g = y.id,
                v = t[g];
              t[g] = null, y.status === "success" ? v.onComplete(y.payload) : v.onError && v.onError()
            })
          }

          function o(u, y) {
            e += 1;
            var g = "processId_" + e;
            return t[g] = {
              onComplete: u,
              onError: y
            }, g
          }

          function c(u, y, g) {
            l();
            var v = o(y, g);
            i.postMessage({
              type: "loadAnimation",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: v
            })
          }

          function f(u, y, g) {
            l();
            var v = o(y, g);
            i.postMessage({
              type: "loadData",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: v
            })
          }

          function b(u, y, g) {
            l();
            var v = o(y, g);
            i.postMessage({
              type: "complete",
              animation: u,
              id: v
            })
          }
          return {
            loadAnimation: c,
            loadData: f,
            completeAnimation: b
          }
        })(),
        ImagePreloader = (function() {
          var e = (function() {
            var p = createTag("canvas");
            p.width = 1, p.height = 1;
            var m = p.getContext("2d");
            return m.fillStyle = "rgba(0,0,0,0)", m.fillRect(0, 0, 1, 1), p
          })();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function i(p, m, d) {
            var _ = "";
            if (p.e) _ = p.p;
            else if (m) {
              var x = p.p;
              x.indexOf("images/") !== -1 && (x = x.split("/")[1]), _ = m + x
            } else _ = d, _ += p.u ? p.u : "", _ += p.p;
            return _
          }

          function s(p) {
            var m = 0,
              d = setInterval((function() {
                var _ = p.getBBox();
                (_.width || m > 500) && (this._imageLoaded(), clearInterval(d)), m += 1
              }).bind(this), 50)
          }

          function n(p) {
            var m = i(p, this.assetsPath, this.path),
              d = createNS("image");
            isSafari ? this.testImageLoaded(d) : d.addEventListener("load", this._imageLoaded, !1), d.addEventListener("error", (function() {
              _.img = e, this._imageLoaded()
            }).bind(this), !1), d.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this._elementHelper.append ? this._elementHelper.append(d) : this._elementHelper.appendChild(d);
            var _ = {
              img: d,
              assetData: p
            };
            return _
          }

          function a(p) {
            var m = i(p, this.assetsPath, this.path),
              d = createTag("img");
            d.crossOrigin = "anonymous", d.addEventListener("load", this._imageLoaded, !1), d.addEventListener("error", (function() {
              _.img = e, this._imageLoaded()
            }).bind(this), !1), d.src = m;
            var _ = {
              img: d,
              assetData: p
            };
            return _
          }

          function l(p) {
            var m = {
                assetData: p
              },
              d = i(p, this.assetsPath, this.path);
            return dataManager.loadData(d, (function(_) {
              m.img = _, this._footageLoaded()
            }).bind(this), (function() {
              m.img = {}, this._footageLoaded()
            }).bind(this)), m
          }

          function o(p, m) {
            this.imagesLoadedCb = m;
            var d, _ = p.length;
            for (d = 0; d < _; d += 1) p[d].layers || (!p[d].t || p[d].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[d]))) : p[d].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[d]))))
          }

          function c(p) {
            this.path = p || ""
          }

          function f(p) {
            this.assetsPath = p || ""
          }

          function b(p) {
            for (var m = 0, d = this.images.length; m < d;) {
              if (this.images[m].assetData === p) return this.images[m].img;
              m += 1
            }
            return null
          }

          function u() {
            this.imagesLoadedCb = null, this.images.length = 0
          }

          function y() {
            return this.totalImages === this.loadedAssets
          }

          function g() {
            return this.totalFootages === this.loadedFootagesCount
          }

          function v(p, m) {
            p === "svg" ? (this._elementHelper = m, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
          }

          function E() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return E.prototype = {
            loadAssets: o,
            setAssetsPath: f,
            setPath: c,
            loadedImages: y,
            loadedFootages: g,
            destroy: u,
            getAsset: b,
            createImgData: a,
            createImageData: n,
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: v
          }, E
        })();

      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function(t, r) {
          if (this._cbs[t])
            for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](r)
        },
        addEventListener: function(t, r) {
          return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(r), (function() {
            this.removeEventListener(t, r)
          }).bind(this)
        },
        removeEventListener: function(t, r) {
          if (!r) this._cbs[t] = null;
          else if (this._cbs[t]) {
            for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === r && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
            this._cbs[t].length || (this._cbs[t] = null)
          }
        }
      };
      var markerParser = (function() {
          function e(t) {
            for (var r = t.split(`\r
`), i = {}, s, n = 0, a = 0; a < r.length; a += 1) s = r[a].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), n += 1);
            if (n === 0) throw new Error;
            return i
          }
          return function(t) {
            for (var r = [], i = 0; i < t.length; i += 1) {
              var s = t[i],
                n = {
                  time: s.tm,
                  duration: s.dr
                };
              try {
                n.payload = JSON.parse(t[i].cm)
              } catch {
                try {
                  n.payload = e(t[i].cm)
                } catch {
                  n.payload = {
                    name: t[i].cm
                  }
                }
              }
              r.push(n)
            }
            return r
          }
        })(),
        ProjectInterface = (function() {
          function e(t) {
            this.compositions.push(t)
          }
          return function() {
            function t(r) {
              for (var i = 0, s = this.compositions.length; i < s;) {
                if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                i += 1
              }
              return null
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
          }
        })(),
        renderers = {},
        registerRenderer = function(t, r) {
          renderers[t] = r
        };

      function getRenderer(e) {
        return renderers[e]
      }

      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var e in renderers)
          if (renderers[e]) return e;
        return ""
      }

      function _typeof$4(e) {
        "@babel/helpers - typeof";
        return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$4(e)
      }
      var AnimationItem = function() {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
      };
      extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
        (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
        var t = "svg";
        e.animType ? t = e.animType : e.renderer && (t = e.renderer);
        var r = getRenderer(t);
        this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = "autoplay" in e ? e.autoplay : !0, this.name = e.name ? e.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(e, "autoloadSegments") ? e.autoloadSegments : !0, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
      }, AnimationItem.prototype.onSetupError = function() {
        this.trigger("data_failed")
      }, AnimationItem.prototype.setupAnimation = function(e) {
        dataManager.completeAnimation(e, this.configAnimation)
      }, AnimationItem.prototype.setData = function(e, t) {
        t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
        var r = {
            wrapper: e,
            animationData: t
          },
          i = e.attributes;
        r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
        s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
        var n = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
        r.autoplay = n !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
        var a = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
        a === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
      }, AnimationItem.prototype.includeLayers = function(e) {
        e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
        var t = this.animationData.layers,
          r, i = t.length,
          s = e.layers,
          n, a = s.length;
        for (n = 0; n < a; n += 1)
          for (r = 0; r < i;) {
            if (t[r].id === s[n].id) {
              t[r] = s[n];
              break
            }
            r += 1
          }
        if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
          for (i = e.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(e.assets[r]);
        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
      }, AnimationItem.prototype.onSegmentComplete = function(e) {
        this.animationData = e;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.loadNextSegment()
      }, AnimationItem.prototype.loadNextSegment = function() {
        var e = this.animationData.segments;
        if (!e || e.length === 0 || !this.autoloadSegments) {
          this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
          return
        }
        var t = e.shift();
        this.timeCompleted = t.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
          this.trigger("data_failed")
        }).bind(this))
      }, AnimationItem.prototype.loadSegments = function() {
        var e = this.animationData.segments;
        e || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
      }, AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images"), this.checkLoaded()
      }, AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
      }, AnimationItem.prototype.configAnimation = function(e) {
        if (this.renderer) try {
          this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
        } catch (t) {
          this.triggerConfigError(t)
        }
      }, AnimationItem.prototype.waitForFontsLoaded = function() {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
      }, AnimationItem.prototype.checkLoaded = function() {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = !0;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
            this.trigger("DOMLoaded")
          }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
        }
      }, AnimationItem.prototype.resize = function(e, t) {
        var r = typeof e == "number" ? e : void 0,
          i = typeof t == "number" ? t : void 0;
        this.renderer.updateContainerSize(r, i)
      }, AnimationItem.prototype.setSubframe = function(e) {
        this.isSubframeEnabled = !!e
      }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
      }, AnimationItem.prototype.renderFrame = function() {
        if (!(this.isLoaded === !1 || !this.renderer)) try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        } catch (e) {
          this.triggerRenderFrameError(e)
        }
      }, AnimationItem.prototype.play = function(e) {
        e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
      }, AnimationItem.prototype.pause = function(e) {
        e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
      }, AnimationItem.prototype.togglePause = function(e) {
        e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
      }, AnimationItem.prototype.stop = function(e) {
        e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
      }, AnimationItem.prototype.getMarkerData = function(e) {
        for (var t, r = 0; r < this.markers.length; r += 1)
          if (t = this.markers[r], t.payload && t.payload.name === e) return t;
        return null
      }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
        if (!(r && this.name !== r)) {
          var i = Number(e);
          if (isNaN(i)) {
            var s = this.getMarkerData(e);
            s && this.goToAndStop(s.time, !0)
          } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
          this.pause()
        }
      }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
        if (!(r && this.name !== r)) {
          var i = Number(e);
          if (isNaN(i)) {
            var s = this.getMarkerData(e);
            s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
          } else this.goToAndStop(i, t, r);
          this.play()
        }
      }, AnimationItem.prototype.advanceTime = function(e) {
        if (!(this.isPaused === !0 || this.isLoaded === !1)) {
          var t = this.currentRawFrame + e * this.frameModifier,
            r = !1;
          t >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : t < 0 ? this.checkSegments(t % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, t = 0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
        }
      }, AnimationItem.prototype.adjustSegment = function(e, t) {
        this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
      }, AnimationItem.prototype.setSegment = function(e, t) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
      }, AnimationItem.prototype.playSegments = function(e, t) {
        if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) this.segments.push(e[r])
        } else this.segments.push(e);
        this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
      }, AnimationItem.prototype.resetSegments = function(e) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
      }, AnimationItem.prototype.checkSegments = function(e) {
        return this.segments.length ? (this.adjustSegment(this.segments.shift(), e), !0) : !1
      }, AnimationItem.prototype.destroy = function(e) {
        e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
      }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
        this.currentRawFrame = e, this.gotoFrame()
      }, AnimationItem.prototype.setSpeed = function(e) {
        this.playSpeed = e, this.updaFrameModifier()
      }, AnimationItem.prototype.setDirection = function(e) {
        this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
      }, AnimationItem.prototype.setLoop = function(e) {
        this.loop = e
      }, AnimationItem.prototype.setVolume = function(e, t) {
        t && this.name !== t || this.audioController.setVolume(e)
      }, AnimationItem.prototype.getVolume = function() {
        return this.audioController.getVolume()
      }, AnimationItem.prototype.mute = function(e) {
        e && this.name !== e || this.audioController.mute()
      }, AnimationItem.prototype.unmute = function(e) {
        e && this.name !== e || this.audioController.unmute()
      }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
      }, AnimationItem.prototype.getPath = function() {
        return this.path
      }, AnimationItem.prototype.getAssetsPath = function(e) {
        var t = "";
        if (e.e) t = e.p;
        else if (this.assetsPath) {
          var r = e.p;
          r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
        } else t = this.path, t += e.u ? e.u : "", t += e.p;
        return t
      }, AnimationItem.prototype.getAssetData = function(e) {
        for (var t = 0, r = this.assets.length; t < r;) {
          if (e === this.assets[t].id) return this.assets[t];
          t += 1
        }
        return null
      }, AnimationItem.prototype.hide = function() {
        this.renderer.hide()
      }, AnimationItem.prototype.show = function() {
        this.renderer.show()
      }, AnimationItem.prototype.getDuration = function(e) {
        return e ? this.totalFrames : this.totalFrames / this.frameRate
      }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
        try {
          var i = this.renderer.getElementByPath(e);
          i.updateDocumentData(t, r)
        } catch {}
      }, AnimationItem.prototype.trigger = function(e) {
        if (this._cbs && this._cbs[e]) switch (e) {
          case "enterFrame":
            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(e, new BMDestroyEvent(e, this));
            break;
          default:
            this.triggerEvent(e)
        }
        e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
      }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
        var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      }, AnimationItem.prototype.triggerConfigError = function(e) {
        var t = new BMConfigErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      };
      var animationManager = (function() {
          var e = {},
            t = [],
            r = 0,
            i = 0,
            s = 0,
            n = !0,
            a = !1;

          function l(k) {
            for (var w = 0, C = k.target; w < i;) t[w].animation === C && (t.splice(w, 1), w -= 1, i -= 1, C.isPaused || b()), w += 1
          }

          function o(k, w) {
            if (!k) return null;
            for (var C = 0; C < i;) {
              if (t[C].elem === k && t[C].elem !== null) return t[C].animation;
              C += 1
            }
            var S = new AnimationItem;
            return u(S, k), S.setData(k, w), S
          }

          function c() {
            var k, w = t.length,
              C = [];
            for (k = 0; k < w; k += 1) C.push(t[k].animation);
            return C
          }

          function f() {
            s += 1, D()
          }

          function b() {
            s -= 1
          }

          function u(k, w) {
            k.addEventListener("destroy", l), k.addEventListener("_active", f), k.addEventListener("_idle", b), t.push({
              elem: w,
              animation: k
            }), i += 1
          }

          function y(k) {
            var w = new AnimationItem;
            return u(w, null), w.setParams(k), w
          }

          function g(k, w) {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.setSpeed(k, w)
          }

          function v(k, w) {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.setDirection(k, w)
          }

          function E(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.play(k)
          }

          function p(k) {
            var w = k - r,
              C;
            for (C = 0; C < i; C += 1) t[C].animation.advanceTime(w);
            r = k, s && !a ? window.requestAnimationFrame(p) : n = !0
          }

          function m(k) {
            r = k, window.requestAnimationFrame(p)
          }

          function d(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.pause(k)
          }

          function _(k, w, C) {
            var S;
            for (S = 0; S < i; S += 1) t[S].animation.goToAndStop(k, w, C)
          }

          function x(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.stop(k)
          }

          function P(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.togglePause(k)
          }

          function T(k) {
            var w;
            for (w = i - 1; w >= 0; w -= 1) t[w].animation.destroy(k)
          }

          function V(k, w, C) {
            var S = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              F, A = S.length;
            for (F = 0; F < A; F += 1) C && S[F].setAttribute("data-bm-type", C), o(S[F], k);
            if (w && A === 0) {
              C || (C = "svg");
              var j = document.getElementsByTagName("body")[0];
              j.innerText = "";
              var Z = createTag("div");
              Z.style.width = "100%", Z.style.height = "100%", Z.setAttribute("data-bm-type", C), j.appendChild(Z), o(Z, k)
            }
          }

          function B() {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.resize()
          }

          function D() {
            !a && s && n && (window.requestAnimationFrame(m), n = !1)
          }

          function L() {
            a = !0
          }

          function N() {
            a = !1, D()
          }

          function z(k, w) {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.setVolume(k, w)
          }

          function G(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.mute(k)
          }

          function $(k) {
            var w;
            for (w = 0; w < i; w += 1) t[w].animation.unmute(k)
          }
          return e.registerAnimation = o, e.loadAnimation = y, e.setSpeed = g, e.setDirection = v, e.play = E, e.pause = d, e.stop = x, e.togglePause = P, e.searchAnimations = V, e.resize = B, e.goToAndStop = _, e.destroy = T, e.freeze = L, e.unfreeze = N, e.setVolume = z, e.mute = G, e.unmute = $, e.getRegisteredAnimations = c, e
        })(),
        BezierFactory = (function() {
          var e = {};
          e.getBezierEasing = r;
          var t = {};

          function r(m, d, _, x, P) {
            var T = P || ("bez_" + m + "_" + d + "_" + _ + "_" + x).replace(/\./g, "p");
            if (t[T]) return t[T];
            var V = new p([m, d, _, x]);
            return t[T] = V, V
          }
          var i = 4,
            s = .001,
            n = 1e-7,
            a = 10,
            l = 11,
            o = 1 / (l - 1),
            c = typeof Float32Array == "function";

          function f(m, d) {
            return 1 - 3 * d + 3 * m
          }

          function b(m, d) {
            return 3 * d - 6 * m
          }

          function u(m) {
            return 3 * m
          }

          function y(m, d, _) {
            return ((f(d, _) * m + b(d, _)) * m + u(d)) * m
          }

          function g(m, d, _) {
            return 3 * f(d, _) * m * m + 2 * b(d, _) * m + u(d)
          }

          function v(m, d, _, x, P) {
            var T, V, B = 0;
            do V = d + (_ - d) / 2, T = y(V, x, P) - m, T > 0 ? _ = V : d = V; while (Math.abs(T) > n && ++B < a);
            return V
          }

          function E(m, d, _, x) {
            for (var P = 0; P < i; ++P) {
              var T = g(d, _, x);
              if (T === 0) return d;
              var V = y(d, _, x) - m;
              d -= V / T
            }
            return d
          }

          function p(m) {
            this._p = m, this._mSampleValues = c ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return p.prototype = {
            get: function(d) {
              var _ = this._p[0],
                x = this._p[1],
                P = this._p[2],
                T = this._p[3];
              return this._precomputed || this._precompute(), _ === x && P === T ? d : d === 0 ? 0 : d === 1 ? 1 : y(this._getTForX(d), x, T)
            },
            _precompute: function() {
              var d = this._p[0],
                _ = this._p[1],
                x = this._p[2],
                P = this._p[3];
              this._precomputed = !0, (d !== _ || x !== P) && this._calcSampleValues()
            },
            _calcSampleValues: function() {
              for (var d = this._p[0], _ = this._p[2], x = 0; x < l; ++x) this._mSampleValues[x] = y(x * o, d, _)
            },
            _getTForX: function(d) {
              for (var _ = this._p[0], x = this._p[2], P = this._mSampleValues, T = 0, V = 1, B = l - 1; V !== B && P[V] <= d; ++V) T += o;
              --V;
              var D = (d - P[V]) / (P[V + 1] - P[V]),
                L = T + D * o,
                N = g(L, _, x);
              return N >= s ? E(d, L, _, x) : N === 0 ? L : v(d, T, T + o, _, x)
            }
          }, e
        })(),
        pooling = (function() {
          function e(t) {
            return t.concat(createSizedArray(t.length))
          }
          return {
            double: e
          }
        })(),
        poolFactory = (function() {
          return function(e, t, r) {
            var i = 0,
              s = e,
              n = createSizedArray(s),
              a = {
                newElement: l,
                release: o
              };

            function l() {
              var c;
              return i ? (i -= 1, c = n[i]) : c = t(), c
            }

            function o(c) {
              i === s && (n = pooling.double(n), s *= 2), r && r(c), n[i] = c, i += 1
            }
            return a
          }
        })(),
        bezierLengthPool = (function() {
          function e() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          }
          return poolFactory(8, e)
        })(),
        segmentsLengthPool = (function() {
          function e() {
            return {
              lengths: [],
              totalLength: 0
            }
          }

          function t(r) {
            var i, s = r.lengths.length;
            for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
            r.lengths.length = 0
          }
          return poolFactory(8, e, t)
        })();

      function bezFunction() {
        var e = Math;

        function t(u, y, g, v, E, p) {
          var m = u * v + y * E + g * p - E * v - p * u - g * y;
          return m > -.001 && m < .001
        }

        function r(u, y, g, v, E, p, m, d, _) {
          if (g === 0 && p === 0 && _ === 0) return t(u, y, v, E, m, d);
          var x = e.sqrt(e.pow(v - u, 2) + e.pow(E - y, 2) + e.pow(p - g, 2)),
            P = e.sqrt(e.pow(m - u, 2) + e.pow(d - y, 2) + e.pow(_ - g, 2)),
            T = e.sqrt(e.pow(m - v, 2) + e.pow(d - E, 2) + e.pow(_ - p, 2)),
            V;
          return x > P ? x > T ? V = x - P - T : V = T - P - x : T > P ? V = T - P - x : V = P - x - T, V > -1e-4 && V < 1e-4
        }
        var i = (function() {
          return function(u, y, g, v) {
            var E = getDefaultCurveSegments(),
              p, m, d, _, x, P = 0,
              T, V = [],
              B = [],
              D = bezierLengthPool.newElement();
            for (d = g.length, p = 0; p < E; p += 1) {
              for (x = p / (E - 1), T = 0, m = 0; m < d; m += 1) _ = bmPow(1 - x, 3) * u[m] + 3 * bmPow(1 - x, 2) * x * g[m] + 3 * (1 - x) * bmPow(x, 2) * v[m] + bmPow(x, 3) * y[m], V[m] = _, B[m] !== null && (T += bmPow(V[m] - B[m], 2)), B[m] = V[m];
              T && (T = bmSqrt(T), P += T), D.percents[p] = x, D.lengths[p] = P
            }
            return D.addedLength = P, D
          }
        })();

        function s(u) {
          var y = segmentsLengthPool.newElement(),
            g = u.c,
            v = u.v,
            E = u.o,
            p = u.i,
            m, d = u._length,
            _ = y.lengths,
            x = 0;
          for (m = 0; m < d - 1; m += 1) _[m] = i(v[m], v[m + 1], E[m], p[m + 1]), x += _[m].addedLength;
          return g && d && (_[m] = i(v[m], v[0], E[m], p[0]), x += _[m].addedLength), y.totalLength = x, y
        }

        function n(u) {
          this.segmentLength = 0, this.points = new Array(u)
        }

        function a(u, y) {
          this.partialLength = u, this.point = y
        }
        var l = (function() {
          var u = {};
          return function(y, g, v, E) {
            var p = (y[0] + "_" + y[1] + "_" + g[0] + "_" + g[1] + "_" + v[0] + "_" + v[1] + "_" + E[0] + "_" + E[1]).replace(/\./g, "p");
            if (!u[p]) {
              var m = getDefaultCurveSegments(),
                d, _, x, P, T, V = 0,
                B, D, L = null;
              y.length === 2 && (y[0] !== g[0] || y[1] !== g[1]) && t(y[0], y[1], g[0], g[1], y[0] + v[0], y[1] + v[1]) && t(y[0], y[1], g[0], g[1], g[0] + E[0], g[1] + E[1]) && (m = 2);
              var N = new n(m);
              for (x = v.length, d = 0; d < m; d += 1) {
                for (D = createSizedArray(x), T = d / (m - 1), B = 0, _ = 0; _ < x; _ += 1) P = bmPow(1 - T, 3) * y[_] + 3 * bmPow(1 - T, 2) * T * (y[_] + v[_]) + 3 * (1 - T) * bmPow(T, 2) * (g[_] + E[_]) + bmPow(T, 3) * g[_], D[_] = P, L !== null && (B += bmPow(D[_] - L[_], 2));
                B = bmSqrt(B), V += B, N.points[d] = new a(B, D), L = D
              }
              N.segmentLength = V, u[p] = N
            }
            return u[p]
          }
        })();

        function o(u, y) {
          var g = y.percents,
            v = y.lengths,
            E = g.length,
            p = bmFloor((E - 1) * u),
            m = u * y.addedLength,
            d = 0;
          if (p === E - 1 || p === 0 || m === v[p]) return g[p];
          for (var _ = v[p] > m ? -1 : 1, x = !0; x;)
            if (v[p] <= m && v[p + 1] > m ? (d = (m - v[p]) / (v[p + 1] - v[p]), x = !1) : p += _, p < 0 || p >= E - 1) {
              if (p === E - 1) return g[p];
              x = !1
            } return g[p] + (g[p + 1] - g[p]) * d
        }

        function c(u, y, g, v, E, p) {
          var m = o(E, p),
            d = 1 - m,
            _ = e.round((d * d * d * u[0] + (m * d * d + d * m * d + d * d * m) * g[0] + (m * m * d + d * m * m + m * d * m) * v[0] + m * m * m * y[0]) * 1e3) / 1e3,
            x = e.round((d * d * d * u[1] + (m * d * d + d * m * d + d * d * m) * g[1] + (m * m * d + d * m * m + m * d * m) * v[1] + m * m * m * y[1]) * 1e3) / 1e3;
          return [_, x]
        }
        var f = createTypedArray("float32", 8);

        function b(u, y, g, v, E, p, m) {
          E < 0 ? E = 0 : E > 1 && (E = 1);
          var d = o(E, m);
          p = p > 1 ? 1 : p;
          var _ = o(p, m),
            x, P = u.length,
            T = 1 - d,
            V = 1 - _,
            B = T * T * T,
            D = d * T * T * 3,
            L = d * d * T * 3,
            N = d * d * d,
            z = T * T * V,
            G = d * T * V + T * d * V + T * T * _,
            $ = d * d * V + T * d * _ + d * T * _,
            k = d * d * _,
            w = T * V * V,
            C = d * V * V + T * _ * V + T * V * _,
            S = d * _ * V + T * _ * _ + d * V * _,
            F = d * _ * _,
            A = V * V * V,
            j = _ * V * V + V * _ * V + V * V * _,
            Z = _ * _ * V + V * _ * _ + _ * V * _,
            q = _ * _ * _;
          for (x = 0; x < P; x += 1) f[x * 4] = e.round((B * u[x] + D * g[x] + L * v[x] + N * y[x]) * 1e3) / 1e3, f[x * 4 + 1] = e.round((z * u[x] + G * g[x] + $ * v[x] + k * y[x]) * 1e3) / 1e3, f[x * 4 + 2] = e.round((w * u[x] + C * g[x] + S * v[x] + F * y[x]) * 1e3) / 1e3, f[x * 4 + 3] = e.round((A * u[x] + j * g[x] + Z * v[x] + q * y[x]) * 1e3) / 1e3;
          return f
        }
        return {
          getSegmentsLength: s,
          getNewSegment: b,
          getPointInSegment: c,
          buildBezierData: l,
          pointOnLine2D: t,
          pointOnLine3D: r
        }
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

      function interpolateValue(e, t) {
        var r = this.offsetTime,
          i;
        this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
        for (var s = t.lastIndex, n = s, a = this.keyframes.length - 1, l = !0, o, c, f; l;) {
          if (o = this.keyframes[n], c = this.keyframes[n + 1], n === a - 1 && e >= c.t - r) {
            o.h && (o = c), s = 0;
            break
          }
          if (c.t - r > e) {
            s = n;
            break
          }
          n < a - 1 ? n += 1 : (s = 0, l = !1)
        }
        f = this.keyframesMetadata[n] || {};
        var b, u, y, g, v, E, p = c.t - r,
          m = o.t - r,
          d;
        if (o.to) {
          f.bezierData || (f.bezierData = bez.buildBezierData(o.s, c.s || o.e, o.to, o.ti));
          var _ = f.bezierData;
          if (e >= p || e < m) {
            var x = e >= p ? _.points.length - 1 : 0;
            for (u = _.points[x].point.length, b = 0; b < u; b += 1) i[b] = _.points[x].point[b]
          } else {
            f.__fnct ? E = f.__fnct : (E = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, f.__fnct = E), y = E((e - m) / (p - m));
            var P = _.segmentLength * y,
              T, V = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastAddedLength : 0;
            for (v = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastPoint : 0, l = !0, g = _.points.length; l;) {
              if (V += _.points[v].partialLength, P === 0 || y === 0 || v === _.points.length - 1) {
                for (u = _.points[v].point.length, b = 0; b < u; b += 1) i[b] = _.points[v].point[b];
                break
              } else if (P >= V && P < V + _.points[v + 1].partialLength) {
                for (T = (P - V) / _.points[v + 1].partialLength, u = _.points[v].point.length, b = 0; b < u; b += 1) i[b] = _.points[v].point[b] + (_.points[v + 1].point[b] - _.points[v].point[b]) * T;
                break
              }
              v < g - 1 ? v += 1 : l = !1
            }
            t._lastPoint = v, t._lastAddedLength = V - _.points[v].partialLength, t._lastKeyframeIndex = n
          }
        } else {
          var B, D, L, N, z;
          if (a = o.s.length, d = c.s || o.e, this.sh && o.h !== 1)
            if (e >= p) i[0] = d[0], i[1] = d[1], i[2] = d[2];
            else if (e <= m) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
          else {
            var G = createQuaternion(o.s),
              $ = createQuaternion(d),
              k = (e - m) / (p - m);
            quaternionToEuler(i, slerp(G, $, k))
          } else
            for (n = 0; n < a; n += 1) o.h !== 1 && (e >= p ? y = 1 : e < m ? y = 0 : (o.o.x.constructor === Array ? (f.__fnct || (f.__fnct = []), f.__fnct[n] ? E = f.__fnct[n] : (B = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], D = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], L = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], N = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], E = BezierFactory.getBezierEasing(B, D, L, N).get, f.__fnct[n] = E)) : f.__fnct ? E = f.__fnct : (B = o.o.x, D = o.o.y, L = o.i.x, N = o.i.y, E = BezierFactory.getBezierEasing(B, D, L, N).get, o.keyframeMetadata = E), y = E((e - m) / (p - m)))), d = c.s || o.e, z = o.h === 1 ? o.s[n] : o.s[n] + (d[n] - o.s[n]) * y, this.propType === "multidimensional" ? i[n] = z : i = z
        }
        return t.lastIndex = s, i
      }

      function slerp(e, t, r) {
        var i = [],
          s = e[0],
          n = e[1],
          a = e[2],
          l = e[3],
          o = t[0],
          c = t[1],
          f = t[2],
          b = t[3],
          u, y, g, v, E;
        return y = s * o + n * c + a * f + l * b, y < 0 && (y = -y, o = -o, c = -c, f = -f, b = -b), 1 - y > 1e-6 ? (u = Math.acos(y), g = Math.sin(u), v = Math.sin((1 - r) * u) / g, E = Math.sin(r * u) / g) : (v = 1 - r, E = r), i[0] = v * s + E * o, i[1] = v * n + E * c, i[2] = v * a + E * f, i[3] = v * l + E * b, i
      }

      function quaternionToEuler(e, t) {
        var r = t[0],
          i = t[1],
          s = t[2],
          n = t[3],
          a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
          l = Math.asin(2 * r * i + 2 * s * n),
          o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
        e[0] = a / degToRads, e[1] = l / degToRads, e[2] = o / degToRads
      }

      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          i = e[2] * degToRads,
          s = Math.cos(t / 2),
          n = Math.cos(r / 2),
          a = Math.cos(i / 2),
          l = Math.sin(t / 2),
          o = Math.sin(r / 2),
          c = Math.sin(i / 2),
          f = s * n * a - l * o * c,
          b = l * o * a + s * n * c,
          u = l * n * a + s * o * c,
          y = s * o * a - l * n * c;
        return [b, u, y, f]
      }

      function getValueAtCurrentTime() {
        var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
          this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var i = this.interpolateValue(e, this._caching);
          this.pv = i
        }
        return this._caching.lastFrame = e, this.pv
      }

      function setVValue(e) {
        var t;
        if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
        else
          for (var r = 0, i = this.v.length; r < i;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
      }

      function processEffectsSequence() {
        if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
          if (this.lock) {
            this.setVValue(this.pv);
            return
          }
          this.lock = !0, this._mdf = this._isFirstFrame;
          var e, t = this.effectsSequence.length,
            r = this.kf ? this.pv : this.data.k;
          for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
          this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
        }
      }

      function addEffect(e) {
        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
      }

      function ValueProperty(e, t, r, i) {
        this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function MultiDimensionalProperty(e, t, r, i) {
        this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var s, n = t.k.length;
        for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1) this.v[s] = t.k[s] * this.mult, this.pv[s] = t.k[s];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function KeyframedValueProperty(e, t, r, i) {
        this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
      }

      function KeyframedMultidimensionalProperty(e, t, r, i) {
        this.propType = "multidimensional";
        var s, n = t.k.length,
          a, l, o, c;
        for (s = 0; s < n - 1; s += 1) t.k[s].to && t.k[s].s && t.k[s + 1] && t.k[s + 1].s && (a = t.k[s].s, l = t.k[s + 1].s, o = t.k[s].to, c = t.k[s].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + c[0], l[1] + c[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + c[0], l[1] + c[1], l[2] + c[2])) && (t.k[s].to = null, t.k[s].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && c[0] === 0 && c[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && c[2] === 0) && (t.k[s].to = null, t.k[s].ti = null));
        this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
        var f = t.k[0].s.length;
        for (this.v = createTypedArray("float32", f), this.pv = createTypedArray("float32", f), s = 0; s < f; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", f)
        }, this.addEffect = addEffect
      }
      var PropertyFactory = (function() {
        function e(r, i, s, n, a) {
          i.sid && (i = r.globalData.slotManager.getProp(i));
          var l;
          if (!i.k.length) l = new ValueProperty(r, i, n, a);
          else if (typeof i.k[0] == "number") l = new MultiDimensionalProperty(r, i, n, a);
          else switch (s) {
            case 0:
              l = new KeyframedValueProperty(r, i, n, a);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, i, n, a);
              break
          }
          return l.effectsSequence.length && a.addDynamicProperty(l), l
        }
        var t = {
          getProp: e
        };
        return t
      })();

      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(t) {
          this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
        },
        iterateDynamicProperties: function() {
          this._mdf = !1;
          var t, r = this.dynamicProperties.length;
          for (t = 0; t < r; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function(t) {
          this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
        }
      };
      var pointPool = (function() {
        function e() {
          return createTypedArray("float32", 2)
        }
        return poolFactory(8, e)
      })();

      function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
      }
      ShapePath.prototype.setPathData = function(e, t) {
        this.c = e, this.setLength(t);
        for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
      }, ShapePath.prototype.setLength = function(e) {
        for (; this._maxLength < e;) this.doubleArrayLength();
        this._length = e
      }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
      }, ShapePath.prototype.setXYAt = function(e, t, r, i, s) {
        var n;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
          case "v":
            n = this.v;
            break;
          case "i":
            n = this.i;
            break;
          case "o":
            n = this.o;
            break;
          default:
            n = [];
            break
        }(!n[i] || n[i] && !s) && (n[i] = pointPool.newElement()), n[i][0] = e, n[i][1] = t
      }, ShapePath.prototype.setTripleAt = function(e, t, r, i, s, n, a, l) {
        this.setXYAt(e, t, "v", a, l), this.setXYAt(r, i, "o", a, l), this.setXYAt(s, n, "i", a, l)
      }, ShapePath.prototype.reverse = function() {
        var e = new ShapePath;
        e.setPathData(this.c, this._length);
        var t = this.v,
          r = this.o,
          i = this.i,
          s = 0;
        this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
        var n = this._length - 1,
          a = this._length,
          l;
        for (l = s; l < a; l += 1) e.setTripleAt(t[n][0], t[n][1], i[n][0], i[n][1], r[n][0], r[n][1], l, !1), n -= 1;
        return e
      }, ShapePath.prototype.length = function() {
        return this._length
      };
      var shapePool = (function() {
        function e() {
          return new ShapePath
        }

        function t(s) {
          var n = s._length,
            a;
          for (a = 0; a < n; a += 1) pointPool.release(s.v[a]), pointPool.release(s.i[a]), pointPool.release(s.o[a]), s.v[a] = null, s.i[a] = null, s.o[a] = null;
          s._length = 0, s.c = !1
        }

        function r(s) {
          var n = i.newElement(),
            a, l = s._length === void 0 ? s.v.length : s._length;
          for (n.setLength(l), n.c = s.c, a = 0; a < l; a += 1) n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
          return n
        }
        var i = poolFactory(4, e, t);
        return i.clone = r, i
      })();

      function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
      }
      ShapeCollection.prototype.addShape = function(e) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
      }, ShapeCollection.prototype.releaseShapes = function() {
        var e;
        for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
        this._length = 0
      };
      var shapeCollectionPool = (function() {
          var e = {
              newShapeCollection: s,
              release: n
            },
            t = 0,
            r = 4,
            i = createSizedArray(r);

          function s() {
            var a;
            return t ? (t -= 1, a = i[t]) : a = new ShapeCollection, a
          }

          function n(a) {
            var l, o = a._length;
            for (l = 0; l < o; l += 1) shapePool.release(a.shapes[l]);
            a._length = 0, t === r && (i = pooling.double(i), r *= 2), i[t] = a, t += 1
          }
          return e
        })(),
        ShapePropertyFactory = (function() {
          var e = -999999;

          function t(p, m, d) {
            var _ = d.lastIndex,
              x, P, T, V, B, D, L, N, z, G = this.keyframes;
            if (p < G[0].t - this.offsetTime) x = G[0].s[0], T = !0, _ = 0;
            else if (p >= G[G.length - 1].t - this.offsetTime) x = G[G.length - 1].s ? G[G.length - 1].s[0] : G[G.length - 2].e[0], T = !0;
            else {
              for (var $ = _, k = G.length - 1, w = !0, C, S, F; w && (C = G[$], S = G[$ + 1], !(S.t - this.offsetTime > p));) $ < k - 1 ? $ += 1 : w = !1;
              if (F = this.keyframesMetadata[$] || {}, T = C.h === 1, _ = $, !T) {
                if (p >= S.t - this.offsetTime) N = 1;
                else if (p < C.t - this.offsetTime) N = 0;
                else {
                  var A;
                  F.__fnct ? A = F.__fnct : (A = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, F.__fnct = A), N = A((p - (C.t - this.offsetTime)) / (S.t - this.offsetTime - (C.t - this.offsetTime)))
                }
                P = S.s ? S.s[0] : C.e[0]
              }
              x = C.s[0]
            }
            for (D = m._length, L = x.i[0].length, d.lastIndex = _, V = 0; V < D; V += 1)
              for (B = 0; B < L; B += 1) z = T ? x.i[V][B] : x.i[V][B] + (P.i[V][B] - x.i[V][B]) * N, m.i[V][B] = z, z = T ? x.o[V][B] : x.o[V][B] + (P.o[V][B] - x.o[V][B]) * N, m.o[V][B] = z, z = T ? x.v[V][B] : x.v[V][B] + (P.v[V][B] - x.v[V][B]) * N, m.v[V][B] = z
          }

          function r() {
            var p = this.comp.renderedFrame - this.offsetTime,
              m = this.keyframes[0].t - this.offsetTime,
              d = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              _ = this._caching.lastFrame;
            return _ !== e && (_ < m && p < m || _ > d && p > d) || (this._caching.lastIndex = _ < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv
          }

          function i() {
            this.paths = this.localShapeCollection
          }

          function s(p, m) {
            if (p._length !== m._length || p.c !== m.c) return !1;
            var d, _ = p._length;
            for (d = 0; d < _; d += 1)
              if (p.v[d][0] !== m.v[d][0] || p.v[d][1] !== m.v[d][1] || p.o[d][0] !== m.o[d][0] || p.o[d][1] !== m.o[d][1] || p.i[d][0] !== m.i[d][0] || p.i[d][1] !== m.i[d][1]) return !1;
            return !0
          }

          function n(p) {
            s(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (!this.effectsSequence.length) {
                this._mdf = !1;
                return
              }
              if (this.lock) {
                this.setVValue(this.pv);
                return
              }
              this.lock = !0, this._mdf = !1;
              var p;
              this.kf ? p = this.pv : this.data.ks ? p = this.data.ks.k : p = this.data.pt.k;
              var m, d = this.effectsSequence.length;
              for (m = 0; m < d; m += 1) p = this.effectsSequence[m](p);
              this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }

          function l(p, m, d) {
            this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = m, this.k = !1, this.kf = !1, this._mdf = !1;
            var _ = d === 3 ? m.pt.k : m.ks.k;
            this.v = shapePool.clone(_), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
          }

          function o(p) {
            this.effectsSequence.push(p), this.container.addDynamicProperty(this)
          }
          l.prototype.interpolateShape = t, l.prototype.getValue = a, l.prototype.setVValue = n, l.prototype.addEffect = o;

          function c(p, m, d) {
            this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = d === 3 ? m.pt.k : m.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var _ = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, _), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          c.prototype.getValue = a, c.prototype.interpolateShape = t, c.prototype.setVValue = n, c.prototype.addEffect = o;
          var f = (function() {
              var p = roundCorner;

              function m(d, _) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = _.d, this.elem = d, this.comp = d.comp, this.frameId = -1, this.initDynamicPropertyContainer(d), this.p = PropertyFactory.getProp(d, _.p, 1, 0, this), this.s = PropertyFactory.getProp(d, _.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
              }
              return m.prototype = {
                reset: i,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function() {
                  var _ = this.p.v[0],
                    x = this.p.v[1],
                    P = this.s.v[0] / 2,
                    T = this.s.v[1] / 2,
                    V = this.d !== 3,
                    B = this.v;
                  B.v[0][0] = _, B.v[0][1] = x - T, B.v[1][0] = V ? _ + P : _ - P, B.v[1][1] = x, B.v[2][0] = _, B.v[2][1] = x + T, B.v[3][0] = V ? _ - P : _ + P, B.v[3][1] = x, B.i[0][0] = V ? _ - P * p : _ + P * p, B.i[0][1] = x - T, B.i[1][0] = V ? _ + P : _ - P, B.i[1][1] = x - T * p, B.i[2][0] = V ? _ + P * p : _ - P * p, B.i[2][1] = x + T, B.i[3][0] = V ? _ - P : _ + P, B.i[3][1] = x + T * p, B.o[0][0] = V ? _ + P * p : _ - P * p, B.o[0][1] = x - T, B.o[1][0] = V ? _ + P : _ - P, B.o[1][1] = x + T * p, B.o[2][0] = V ? _ - P * p : _ + P * p, B.o[2][1] = x + T, B.o[3][0] = V ? _ - P : _ + P, B.o[3][1] = x - T * p
                }
              }, extendPrototype([DynamicPropertyContainer], m), m
            })(),
            b = (function() {
              function p(m, d) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = m, this.comp = m.comp, this.data = d, this.frameId = -1, this.d = d.d, this.initDynamicPropertyContainer(m), d.sy === 1 ? (this.ir = PropertyFactory.getProp(m, d.ir, 0, 0, this), this.is = PropertyFactory.getProp(m, d.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(m, d.pt, 0, 0, this), this.p = PropertyFactory.getProp(m, d.p, 1, 0, this), this.r = PropertyFactory.getProp(m, d.r, 0, degToRads, this), this.or = PropertyFactory.getProp(m, d.or, 0, 0, this), this.os = PropertyFactory.getProp(m, d.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
              }
              return p.prototype = {
                reset: i,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                },
                convertStarToPath: function() {
                  var d = Math.floor(this.pt.v) * 2,
                    _ = Math.PI * 2 / d,
                    x = !0,
                    P = this.or.v,
                    T = this.ir.v,
                    V = this.os.v,
                    B = this.is.v,
                    D = 2 * Math.PI * P / (d * 2),
                    L = 2 * Math.PI * T / (d * 2),
                    N, z, G, $, k = -Math.PI / 2;
                  k += this.r.v;
                  var w = this.data.d === 3 ? -1 : 1;
                  for (this.v._length = 0, N = 0; N < d; N += 1) {
                    z = x ? P : T, G = x ? V : B, $ = x ? D : L;
                    var C = z * Math.cos(k),
                      S = z * Math.sin(k),
                      F = C === 0 && S === 0 ? 0 : S / Math.sqrt(C * C + S * S),
                      A = C === 0 && S === 0 ? 0 : -C / Math.sqrt(C * C + S * S);
                    C += +this.p.v[0], S += +this.p.v[1], this.v.setTripleAt(C, S, C - F * $ * G * w, S - A * $ * G * w, C + F * $ * G * w, S + A * $ * G * w, N, !0), x = !x, k += _ * w
                  }
                },
                convertPolygonToPath: function() {
                  var d = Math.floor(this.pt.v),
                    _ = Math.PI * 2 / d,
                    x = this.or.v,
                    P = this.os.v,
                    T = 2 * Math.PI * x / (d * 4),
                    V, B = -Math.PI * .5,
                    D = this.data.d === 3 ? -1 : 1;
                  for (B += this.r.v, this.v._length = 0, V = 0; V < d; V += 1) {
                    var L = x * Math.cos(B),
                      N = x * Math.sin(B),
                      z = L === 0 && N === 0 ? 0 : N / Math.sqrt(L * L + N * N),
                      G = L === 0 && N === 0 ? 0 : -L / Math.sqrt(L * L + N * N);
                    L += +this.p.v[0], N += +this.p.v[1], this.v.setTripleAt(L, N, L - z * T * P * D, N - G * T * P * D, L + z * T * P * D, N + G * T * P * D, V, !0), B += _ * D
                  }
                  this.paths.length = 0, this.paths[0] = this.v
                }
              }, extendPrototype([DynamicPropertyContainer], p), p
            })(),
            u = (function() {
              function p(m, d) {
                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = m, this.comp = m.comp, this.frameId = -1, this.d = d.d, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, d.p, 1, 0, this), this.s = PropertyFactory.getProp(m, d.s, 1, 0, this), this.r = PropertyFactory.getProp(m, d.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
              }
              return p.prototype = {
                convertRectToPath: function() {
                  var d = this.p.v[0],
                    _ = this.p.v[1],
                    x = this.s.v[0] / 2,
                    P = this.s.v[1] / 2,
                    T = bmMin(x, P, this.r.v),
                    V = T * (1 - roundCorner);
                  this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(d + x, _ - P + T, d + x, _ - P + T, d + x, _ - P + V, 0, !0), this.v.setTripleAt(d + x, _ + P - T, d + x, _ + P - V, d + x, _ + P - T, 1, !0), T !== 0 ? (this.v.setTripleAt(d + x - T, _ + P, d + x - T, _ + P, d + x - V, _ + P, 2, !0), this.v.setTripleAt(d - x + T, _ + P, d - x + V, _ + P, d - x + T, _ + P, 3, !0), this.v.setTripleAt(d - x, _ + P - T, d - x, _ + P - T, d - x, _ + P - V, 4, !0), this.v.setTripleAt(d - x, _ - P + T, d - x, _ - P + V, d - x, _ - P + T, 5, !0), this.v.setTripleAt(d - x + T, _ - P, d - x + T, _ - P, d - x + V, _ - P, 6, !0), this.v.setTripleAt(d + x - T, _ - P, d + x - V, _ - P, d + x - T, _ - P, 7, !0)) : (this.v.setTripleAt(d - x, _ + P, d - x + V, _ + P, d - x, _ + P, 2), this.v.setTripleAt(d - x, _ - P, d - x, _ - P + V, d - x, _ - P, 3))) : (this.v.setTripleAt(d + x, _ - P + T, d + x, _ - P + V, d + x, _ - P + T, 0, !0), T !== 0 ? (this.v.setTripleAt(d + x - T, _ - P, d + x - T, _ - P, d + x - V, _ - P, 1, !0), this.v.setTripleAt(d - x + T, _ - P, d - x + V, _ - P, d - x + T, _ - P, 2, !0), this.v.setTripleAt(d - x, _ - P + T, d - x, _ - P + T, d - x, _ - P + V, 3, !0), this.v.setTripleAt(d - x, _ + P - T, d - x, _ + P - V, d - x, _ + P - T, 4, !0), this.v.setTripleAt(d - x + T, _ + P, d - x + T, _ + P, d - x + V, _ + P, 5, !0), this.v.setTripleAt(d + x - T, _ + P, d + x - V, _ + P, d + x - T, _ + P, 6, !0), this.v.setTripleAt(d + x, _ + P - T, d + x, _ + P - T, d + x, _ + P - V, 7, !0)) : (this.v.setTripleAt(d - x, _ - P, d - x + V, _ - P, d - x, _ - P, 1, !0), this.v.setTripleAt(d - x, _ + P, d - x, _ + P - V, d - x, _ + P, 2, !0), this.v.setTripleAt(d + x, _ + P, d + x - V, _ + P, d + x, _ + P, 3, !0)))
                },
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                },
                reset: i
              }, extendPrototype([DynamicPropertyContainer], p), p
            })();

          function y(p, m, d) {
            var _;
            if (d === 3 || d === 4) {
              var x = d === 3 ? m.pt : m.ks,
                P = x.k;
              P.length ? _ = new c(p, m, d) : _ = new l(p, m, d)
            } else d === 5 ? _ = new u(p, m) : d === 6 ? _ = new f(p, m) : d === 7 && (_ = new b(p, m));
            return _.k && p.addDynamicProperty(_), _
          }

          function g() {
            return l
          }

          function v() {
            return c
          }
          var E = {};
          return E.getShapeProp = y, E.getConstructorFunction = g, E.getKeyframedConstructorFunction = v, E
        })();
      var Matrix = (function() {
        var e = Math.cos,
          t = Math.sin,
          r = Math.tan,
          i = Math.round;

        function s() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
        }

        function n(C) {
          if (C === 0) return this;
          var S = e(C),
            F = t(C);
          return this._t(S, -F, 0, 0, F, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function a(C) {
          if (C === 0) return this;
          var S = e(C),
            F = t(C);
          return this._t(1, 0, 0, 0, 0, S, -F, 0, 0, F, S, 0, 0, 0, 0, 1)
        }

        function l(C) {
          if (C === 0) return this;
          var S = e(C),
            F = t(C);
          return this._t(S, 0, F, 0, 0, 1, 0, 0, -F, 0, S, 0, 0, 0, 0, 1)
        }

        function o(C) {
          if (C === 0) return this;
          var S = e(C),
            F = t(C);
          return this._t(S, -F, 0, 0, F, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function c(C, S) {
          return this._t(1, S, C, 1, 0, 0)
        }

        function f(C, S) {
          return this.shear(r(C), r(S))
        }

        function b(C, S) {
          var F = e(S),
            A = t(S);
          return this._t(F, A, 0, 0, -A, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(C), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F, -A, 0, 0, A, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function u(C, S, F) {
          return !F && F !== 0 && (F = 1), C === 1 && S === 1 && F === 1 ? this : this._t(C, 0, 0, 0, 0, S, 0, 0, 0, 0, F, 0, 0, 0, 0, 1)
        }

        function y(C, S, F, A, j, Z, q, ee, R, U, X, Q, ne, re, ie, te) {
          return this.props[0] = C, this.props[1] = S, this.props[2] = F, this.props[3] = A, this.props[4] = j, this.props[5] = Z, this.props[6] = q, this.props[7] = ee, this.props[8] = R, this.props[9] = U, this.props[10] = X, this.props[11] = Q, this.props[12] = ne, this.props[13] = re, this.props[14] = ie, this.props[15] = te, this
        }

        function g(C, S, F) {
          return F = F || 0, C !== 0 || S !== 0 || F !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, C, S, F, 1) : this
        }

        function v(C, S, F, A, j, Z, q, ee, R, U, X, Q, ne, re, ie, te) {
          var W = this.props;
          if (C === 1 && S === 0 && F === 0 && A === 0 && j === 0 && Z === 1 && q === 0 && ee === 0 && R === 0 && U === 0 && X === 1 && Q === 0) return W[12] = W[12] * C + W[15] * ne, W[13] = W[13] * Z + W[15] * re, W[14] = W[14] * X + W[15] * ie, W[15] *= te, this._identityCalculated = !1, this;
          var Ce = W[0],
            ge = W[1],
            ye = W[2],
            de = W[3],
            ce = W[4],
            le = W[5],
            he = W[6],
            xe = W[7],
            _e = W[8],
            me = W[9],
            Se = W[10],
            pe = W[11],
            Ee = W[12],
            Pe = W[13],
            we = W[14],
            ke = W[15];
          return W[0] = Ce * C + ge * j + ye * R + de * ne, W[1] = Ce * S + ge * Z + ye * U + de * re, W[2] = Ce * F + ge * q + ye * X + de * ie, W[3] = Ce * A + ge * ee + ye * Q + de * te, W[4] = ce * C + le * j + he * R + xe * ne, W[5] = ce * S + le * Z + he * U + xe * re, W[6] = ce * F + le * q + he * X + xe * ie, W[7] = ce * A + le * ee + he * Q + xe * te, W[8] = _e * C + me * j + Se * R + pe * ne, W[9] = _e * S + me * Z + Se * U + pe * re, W[10] = _e * F + me * q + Se * X + pe * ie, W[11] = _e * A + me * ee + Se * Q + pe * te, W[12] = Ee * C + Pe * j + we * R + ke * ne, W[13] = Ee * S + Pe * Z + we * U + ke * re, W[14] = Ee * F + Pe * q + we * X + ke * ie, W[15] = Ee * A + Pe * ee + we * Q + ke * te, this._identityCalculated = !1, this
        }

        function E(C) {
          var S = C.props;
          return this.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15])
        }

        function p() {
          return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
        }

        function m(C) {
          for (var S = 0; S < 16;) {
            if (C.props[S] !== this.props[S]) return !1;
            S += 1
          }
          return !0
        }

        function d(C) {
          var S;
          for (S = 0; S < 16; S += 1) C.props[S] = this.props[S];
          return C
        }

        function _(C) {
          var S;
          for (S = 0; S < 16; S += 1) this.props[S] = C[S]
        }

        function x(C, S, F) {
          return {
            x: C * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12],
            y: C * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13],
            z: C * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14]
          }
        }

        function P(C, S, F) {
          return C * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12]
        }

        function T(C, S, F) {
          return C * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13]
        }

        function V(C, S, F) {
          return C * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14]
        }

        function B() {
          var C = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            S = this.props[5] / C,
            F = -this.props[1] / C,
            A = -this.props[4] / C,
            j = this.props[0] / C,
            Z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / C,
            q = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / C,
            ee = new Matrix;
          return ee.props[0] = S, ee.props[1] = F, ee.props[4] = A, ee.props[5] = j, ee.props[12] = Z, ee.props[13] = q, ee
        }

        function D(C) {
          var S = this.getInverseMatrix();
          return S.applyToPointArray(C[0], C[1], C[2] || 0)
        }

        function L(C) {
          var S, F = C.length,
            A = [];
          for (S = 0; S < F; S += 1) A[S] = D(C[S]);
          return A
        }

        function N(C, S, F) {
          var A = createTypedArray("float32", 6);
          if (this.isIdentity()) A[0] = C[0], A[1] = C[1], A[2] = S[0], A[3] = S[1], A[4] = F[0], A[5] = F[1];
          else {
            var j = this.props[0],
              Z = this.props[1],
              q = this.props[4],
              ee = this.props[5],
              R = this.props[12],
              U = this.props[13];
            A[0] = C[0] * j + C[1] * q + R, A[1] = C[0] * Z + C[1] * ee + U, A[2] = S[0] * j + S[1] * q + R, A[3] = S[0] * Z + S[1] * ee + U, A[4] = F[0] * j + F[1] * q + R, A[5] = F[0] * Z + F[1] * ee + U
          }
          return A
        }

        function z(C, S, F) {
          var A;
          return this.isIdentity() ? A = [C, S, F] : A = [C * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12], C * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13], C * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14]], A
        }

        function G(C, S) {
          if (this.isIdentity()) return C + "," + S;
          var F = this.props;
          return Math.round((C * F[0] + S * F[4] + F[12]) * 100) / 100 + "," + Math.round((C * F[1] + S * F[5] + F[13]) * 100) / 100
        }

        function $() {
          for (var C = 0, S = this.props, F = "matrix3d(", A = 1e4; C < 16;) F += i(S[C] * A) / A, F += C === 15 ? ")" : ",", C += 1;
          return F
        }

        function k(C) {
          var S = 1e4;
          return C < 1e-6 && C > 0 || C > -1e-6 && C < 0 ? i(C * S) / S : C
        }

        function w() {
          var C = this.props,
            S = k(C[0]),
            F = k(C[1]),
            A = k(C[4]),
            j = k(C[5]),
            Z = k(C[12]),
            q = k(C[13]);
          return "matrix(" + S + "," + F + "," + A + "," + j + "," + Z + "," + q + ")"
        }
        return function() {
          this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = f, this.skewFromAxis = b, this.shear = c, this.scale = u, this.setTransform = y, this.translate = g, this.transform = v, this.multiply = E, this.applyToPoint = x, this.applyToX = P, this.applyToY = T, this.applyToZ = V, this.applyToPointArray = z, this.applyToTriplePoints = N, this.applyToPointStringified = G, this.toCSS = $, this.to2dCSS = w, this.clone = d, this.cloneFromProps = _, this.equals = m, this.inversePoints = L, this.inversePoint = D, this.getInverseMatrix = B, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
        }
      })();

      function _typeof$3(e) {
        "@babel/helpers - typeof";
        return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$3(e)
      }
      var lottie = {};

      function setLocation(e) {
        setLocationHref(e)
      }

      function searchAnimations() {
        animationManager.searchAnimations()
      }

      function setSubframeRendering(e) {
        setSubframeEnabled(e)
      }

      function setPrefix(e) {
        setIdPrefix(e)
      }

      function loadAnimation(e) {
        return animationManager.loadAnimation(e)
      }

      function setQuality(e) {
        if (typeof e == "string") switch (e) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
            break
        } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e)
      }

      function inBrowser() {
        return typeof navigator < "u"
      }

      function installPlugin(e, t) {
        e === "expressions" && setExpressionsPlugin(t)
      }

      function getFactory(e) {
        switch (e) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null
        }
      }
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.13.0";

      function checkReady() {
        document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
      }

      function getQueryVariable(e) {
        for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
          var i = t[r].split("=");
          if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
        }
        return null
      }
      var queryString = "";
      {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        _typeof$3(exports$1) !== "object" && (window.bodymovin = lottie)
      } catch (e) {}
      var ShapeModifiers = (function() {
        var e = {},
          t = {};
        e.registerModifier = r, e.getModifier = i;

        function r(s, n) {
          t[s] || (t[s] = n)
        }

        function i(s, n, a) {
          return new t[s](n, a)
        }
        return e
      })();

      function ShapeModifier() {}
      ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
        if (!this.closed) {
          e.sh.container.addDynamicProperty(e.sh);
          var t = {
            shape: e.sh,
            data: e,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
        }
      }, ShapeModifier.prototype.init = function(e, t) {
        this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, ShapeModifier.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
      }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

      function TrimModifier() {}
      extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
        this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
      }, TrimModifier.prototype.addShapeToModifier = function(e) {
        e.pathsData = []
      }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, i, s) {
        var n = [];
        t <= 1 ? n.push({
          s: e,
          e: t
        }) : e >= 1 ? n.push({
          s: e - 1,
          e: t - 1
        }) : (n.push({
          s: e,
          e: 1
        }), n.push({
          s: 0,
          e: t - 1
        }));
        var a = [],
          l, o = n.length,
          c;
        for (l = 0; l < o; l += 1)
          if (c = n[l], !(c.e * s < i || c.s * s > i + r)) {
            var f, b;
            c.s * s <= i ? f = 0 : f = (c.s * s - i) / r, c.e * s >= i + r ? b = 1 : b = (c.e * s - i) / r, a.push([f, b])
          } return a.length || a.push([0, 0]), a
      }, TrimModifier.prototype.releasePathsData = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
        return e.length = 0, e
      }, TrimModifier.prototype.processShapes = function(e) {
        var t, r;
        if (this._mdf || e) {
          var i = this.o.v % 360 / 360;
          if (i < 0 && (i += 1), this.s.v > 1 ? t = 1 + i : this.s.v < 0 ? t = 0 + i : t = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, t > r) {
            var s = t;
            t = r, r = s
          }
          t = Math.round(t * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = t, this.eValue = r
        } else t = this.sValue, r = this.eValue;
        var n, a, l = this.shapes.length,
          o, c, f, b, u, y = 0;
        if (r === t)
          for (a = 0; a < l; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
        else if (r === 1 && t === 0 || r === 0 && t === 1) {
          if (this._mdf)
            for (a = 0; a < l; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
        } else {
          var g = [],
            v, E;
          for (a = 0; a < l; a += 1)
            if (v = this.shapes[a], !v.shape._mdf && !this._mdf && !e && this.m !== 2) v.shape.paths = v.localShapeCollection;
            else {
              if (n = v.shape.paths, c = n._length, u = 0, !v.shape._mdf && v.pathsData.length) u = v.totalShapeLength;
              else {
                for (f = this.releasePathsData(v.pathsData), o = 0; o < c; o += 1) b = bez.getSegmentsLength(n.shapes[o]), f.push(b), u += b.totalLength;
                v.totalShapeLength = u, v.pathsData = f
              }
              y += u, v.shape._mdf = !0
            } var p = t,
            m = r,
            d = 0,
            _;
          for (a = l - 1; a >= 0; a -= 1)
            if (v = this.shapes[a], v.shape._mdf) {
              for (E = v.localShapeCollection, E.releaseShapes(), this.m === 2 && l > 1 ? (_ = this.calculateShapeEdges(t, r, v.totalShapeLength, d, y), d += v.totalShapeLength) : _ = [
                  [p, m]
                ], c = _.length, o = 0; o < c; o += 1) {
                p = _[o][0], m = _[o][1], g.length = 0, m <= 1 ? g.push({
                  s: v.totalShapeLength * p,
                  e: v.totalShapeLength * m
                }) : p >= 1 ? g.push({
                  s: v.totalShapeLength * (p - 1),
                  e: v.totalShapeLength * (m - 1)
                }) : (g.push({
                  s: v.totalShapeLength * p,
                  e: v.totalShapeLength
                }), g.push({
                  s: 0,
                  e: v.totalShapeLength * (m - 1)
                }));
                var x = this.addShapes(v, g[0]);
                if (g[0].s !== g[0].e) {
                  if (g.length > 1) {
                    var P = v.shape.paths.shapes[v.shape.paths._length - 1];
                    if (P.c) {
                      var T = x.pop();
                      this.addPaths(x, E), x = this.addShapes(v, g[1], T)
                    } else this.addPaths(x, E), x = this.addShapes(v, g[1])
                  }
                  this.addPaths(x, E)
                }
              }
              v.shape.paths = E
            }
        }
      }, TrimModifier.prototype.addPaths = function(e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) t.addShape(e[r])
      }, TrimModifier.prototype.addSegment = function(e, t, r, i, s, n, a) {
        s.setXYAt(t[0], t[1], "o", n), s.setXYAt(r[0], r[1], "i", n + 1), a && s.setXYAt(e[0], e[1], "v", n), s.setXYAt(i[0], i[1], "v", n + 1)
      }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
        t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
      }, TrimModifier.prototype.addShapes = function(e, t, r) {
        var i = e.pathsData,
          s = e.shape.paths.shapes,
          n, a = e.shape.paths._length,
          l, o, c = 0,
          f, b, u, y, g = [],
          v, E = !0;
        for (r ? (b = r._length, v = r._length) : (r = shapePool.newElement(), b = 0, v = 0), g.push(r), n = 0; n < a; n += 1) {
          for (u = i[n].lengths, r.c = s[n].c, o = s[n].c ? u.length : u.length + 1, l = 1; l < o; l += 1)
            if (f = u[l - 1], c + f.addedLength < t.s) c += f.addedLength, r.c = !1;
            else if (c > t.e) {
            r.c = !1;
            break
          } else t.s <= c && t.e >= c + f.addedLength ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[l], s[n].v[l], r, b, E), E = !1) : (y = bez.getNewSegment(s[n].v[l - 1], s[n].v[l], s[n].o[l - 1], s[n].i[l], (t.s - c) / f.addedLength, (t.e - c) / f.addedLength, u[l - 1]), this.addSegmentFromArray(y, r, b, E), E = !1, r.c = !1), c += f.addedLength, b += 1;
          if (s[n].c && u.length) {
            if (f = u[l - 1], c <= t.e) {
              var p = u[l - 1].addedLength;
              t.s <= c && t.e >= c + p ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[0], s[n].v[0], r, b, E), E = !1) : (y = bez.getNewSegment(s[n].v[l - 1], s[n].v[0], s[n].o[l - 1], s[n].i[0], (t.s - c) / p, (t.e - c) / p, u[l - 1]), this.addSegmentFromArray(y, r, b, E), E = !1, r.c = !1)
            } else r.c = !1;
            c += f.addedLength, b += 1
          }
          if (r._length && (r.setXYAt(r.v[v][0], r.v[v][1], "i", v), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), c > t.e) break;
          n < a - 1 && (r = shapePool.newElement(), E = !0, g.push(r), b = 0)
        }
        return g
      };

      function PuckerAndBloatModifier() {}
      extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
      }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
        var r = t / 100,
          i = [0, 0],
          s = e._length,
          n = 0;
        for (n = 0; n < s; n += 1) i[0] += e.v[n][0], i[1] += e.v[n][1];
        i[0] /= s, i[1] /= s;
        var a = shapePool.newElement();
        a.c = e.c;
        var l, o, c, f, b, u;
        for (n = 0; n < s; n += 1) l = e.v[n][0] + (i[0] - e.v[n][0]) * r, o = e.v[n][1] + (i[1] - e.v[n][1]) * r, c = e.o[n][0] + (i[0] - e.o[n][0]) * -r, f = e.o[n][1] + (i[1] - e.o[n][1]) * -r, b = e.i[n][0] + (i[0] - e.i[n][0]) * -r, u = e.i[n][1] + (i[1] - e.i[n][1]) * -r, a.setTripleAt(l, o, c, f, b, u, n);
        return a
      }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, n, a = this.amount.v;
        if (a !== 0) {
          var l, o;
          for (r = 0; r < i; r += 1) {
            if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
              for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(t[s], a));
            l.shape.paths = l.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var TransformPropertyFactory = (function() {
        var e = [0, 0];

        function t(o) {
          var c = this._mdf;
          this.iterateDynamicProperties(), this._mdf = this._mdf || c, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
        }

        function r(o) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
              var c;
              if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                var f, b;
                if (c = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (f = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / c, 0), b = this.p.getValueAtTime(this.p.keyframes[0].t / c, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (f = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / c, 0), b = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / c, 0)) : (f = this.p.pv, b = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / c, this.p.offsetTime));
                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                  f = [], b = [];
                  var u = this.px,
                    y = this.py;
                  u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t ? (f[0] = u.getValueAtTime((u.keyframes[0].t + .01) / c, 0), f[1] = y.getValueAtTime((y.keyframes[0].t + .01) / c, 0), b[0] = u.getValueAtTime(u.keyframes[0].t / c, 0), b[1] = y.getValueAtTime(y.keyframes[0].t / c, 0)) : u._caching.lastFrame + u.offsetTime >= u.keyframes[u.keyframes.length - 1].t ? (f[0] = u.getValueAtTime(u.keyframes[u.keyframes.length - 1].t / c, 0), f[1] = y.getValueAtTime(y.keyframes[y.keyframes.length - 1].t / c, 0), b[0] = u.getValueAtTime((u.keyframes[u.keyframes.length - 1].t - .01) / c, 0), b[1] = y.getValueAtTime((y.keyframes[y.keyframes.length - 1].t - .01) / c, 0)) : (f = [u.pv, y.pv], b[0] = u.getValueAtTime((u._caching.lastFrame + u.offsetTime - .01) / c, u.offsetTime), b[1] = y.getValueAtTime((y._caching.lastFrame + y.offsetTime - .01) / c, y.offsetTime))
                } else b = e, f = b;
                this.v.rotate(-Math.atan2(f[1] - b[1], f[0] - b[0]))
              }
              this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }
            this.frameId = this.elem.globalData.frameId
          }
        }

        function i() {
          if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
          else return;
          if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
          else return;
          if (this.sk)
            if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
            else return;
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
        }

        function s() {}

        function n(o) {
          this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0
        }

        function a(o, c, f) {
          if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = c, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(f || o), c.p && c.p.s ? (this.px = PropertyFactory.getProp(o, c.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, c.p.y, 0, 0, this), c.p.z && (this.pz = PropertyFactory.getProp(o, c.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, c.p || {
              k: [0, 0, 0]
            }, 1, 0, this), c.rx) {
            if (this.rx = PropertyFactory.getProp(o, c.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, c.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, c.rz, 0, degToRads, this), c.or.k[0].ti) {
              var b, u = c.or.k.length;
              for (b = 0; b < u; b += 1) c.or.k[b].to = null, c.or.k[b].ti = null
            }
            this.or = PropertyFactory.getProp(o, c.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(o, c.r || {
            k: 0
          }, 0, degToRads, this);
          c.sk && (this.sk = PropertyFactory.getProp(o, c.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, c.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, c.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(o, c.s || {
            k: [100, 100, 100]
          }, 1, .01, this), c.o ? this.o = PropertyFactory.getProp(o, c.o, 0, .01, o) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        a.prototype = {
          applyToMatrix: t,
          getValue: r,
          precalculateMatrix: i,
          autoOrient: s
        }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

        function l(o, c, f) {
          return new a(o, c, f)
        }
        return {
          getTransformProperty: l
        }
      })();

      function RepeaterModifier() {}
      extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
      }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, s, n) {
        var a = n ? -1 : 1,
          l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
          o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
        e.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * a * s), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / l : l, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
      }, RepeaterModifier.prototype.init = function(e, t, r, i) {
        for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, RepeaterModifier.prototype.resetElements = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
      }, RepeaterModifier.prototype.cloneElements = function(e) {
        var t = JSON.parse(JSON.stringify(e));
        return this.resetElements(t), t
      }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
      }, RepeaterModifier.prototype.processShapes = function(e) {
        var t, r, i, s, n, a = !1;
        if (this._mdf || e) {
          var l = Math.ceil(this.c.v);
          if (this._groups.length < l) {
            for (; this._groups.length < l;) {
              var o = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              o.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
            }
            this.elem.reloadShapes(), a = !0
          }
          n = 0;
          var c;
          for (i = 0; i <= this._groups.length - 1; i += 1) {
            if (c = n < l, this._groups[i]._render = c, this.changeGroupRender(this._groups[i].it, c), !c) {
              var f = this.elemsData[i].it,
                b = f[f.length - 1];
              b.transform.op.v !== 0 ? (b.transform.op._mdf = !0, b.transform.op.v = 0) : b.transform.op._mdf = !1
            }
            n += 1
          }
          this._currentCopies = l;
          var u = this.o.v,
            y = u % 1,
            g = u > 0 ? Math.floor(u) : Math.ceil(u),
            v = this.pMatrix.props,
            E = this.rMatrix.props,
            p = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var m = 0;
          if (u > 0) {
            for (; m < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), m += 1;
            y && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, y, !1), m += y)
          } else if (u < 0) {
            for (; m > g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), m -= 1;
            y && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -y, !0), m -= y)
          }
          i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
          for (var d, _; n;) {
            if (t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, _ = r.length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), m !== 0) {
              for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), d = 0; d < _; d += 1) r[d] = this.matrix.props[d];
              this.matrix.reset()
            } else
              for (this.matrix.reset(), d = 0; d < _; d += 1) r[d] = this.matrix.props[d];
            m += 1, n -= 1, i += s
          }
        } else
          for (n = this._currentCopies, i = 0, s = 1; n;) t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, n -= 1, i += s;
        return a
      }, RepeaterModifier.prototype.addShape = function() {};

      function RoundCornersModifier() {}
      extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
      }, RoundCornersModifier.prototype.processPath = function(e, t) {
        var r = shapePool.newElement();
        r.c = e.c;
        var i, s = e._length,
          n, a, l, o, c, f, b = 0,
          u, y, g, v, E, p;
        for (i = 0; i < s; i += 1) n = e.v[i], l = e.o[i], a = e.i[i], n[0] === l[0] && n[1] === l[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !e.c ? (r.setTripleAt(n[0], n[1], l[0], l[1], a[0], a[1], b), b += 1) : (i === 0 ? o = e.v[s - 1] : o = e.v[i - 1], c = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), f = c ? Math.min(c / 2, t) / c : 0, E = n[0] + (o[0] - n[0]) * f, u = E, p = n[1] - (n[1] - o[1]) * f, y = p, g = u - (u - n[0]) * roundCorner, v = y - (y - n[1]) * roundCorner, r.setTripleAt(u, y, g, v, E, p, b), b += 1, i === s - 1 ? o = e.v[0] : o = e.v[i + 1], c = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), f = c ? Math.min(c / 2, t) / c : 0, g = n[0] + (o[0] - n[0]) * f, u = g, v = n[1] + (o[1] - n[1]) * f, y = v, E = u - (u - n[0]) * roundCorner, p = y - (y - n[1]) * roundCorner, r.setTripleAt(u, y, g, v, E, p, b), b += 1) : (r.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], b), b += 1);
        return r
      }, RoundCornersModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, n, a = this.rd.v;
        if (a !== 0) {
          var l, o;
          for (r = 0; r < i; r += 1) {
            if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
              for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(t[s], a));
            l.shape.paths = l.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };

      function floatEqual(e, t) {
        return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t))
      }

      function floatZero(e) {
        return Math.abs(e) <= 1e-5
      }

      function lerp(e, t, r) {
        return e * (1 - r) + t * r
      }

      function lerpPoint(e, t, r) {
        return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
      }

      function quadRoots(e, t, r) {
        if (e === 0) return [];
        var i = t * t - 4 * e * r;
        if (i < 0) return [];
        var s = -t / (2 * e);
        if (i === 0) return [s];
        var n = Math.sqrt(i) / (2 * e);
        return [s - n, s + n]
      }

      function polynomialCoefficients(e, t, r, i) {
        return [-e + 3 * t - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
      }

      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1)
      }

      function PolynomialBezier(e, t, r, i, s) {
        s && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
        var n = polynomialCoefficients(e[0], t[0], r[0], i[0]),
          a = polynomialCoefficients(e[1], t[1], r[1], i[1]);
        this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [e, t, r, i]
      }
      PolynomialBezier.prototype.point = function(e) {
        return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
      }, PolynomialBezier.prototype.derivative = function(e) {
        return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
      }, PolynomialBezier.prototype.tangentAngle = function(e) {
        var t = this.derivative(e);
        return Math.atan2(t[1], t[0])
      }, PolynomialBezier.prototype.normalAngle = function(e) {
        var t = this.derivative(e);
        return Math.atan2(t[0], t[1])
      }, PolynomialBezier.prototype.inflectionPoints = function() {
        var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(e)) return [];
        var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
          r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
        if (r < 0) return [];
        var i = Math.sqrt(r);
        return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter(function(s) {
          return s > 0 && s < 1
        })
      }, PolynomialBezier.prototype.split = function(e) {
        if (e <= 0) return [singlePoint(this.points[0]), this];
        if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
        var t = lerpPoint(this.points[0], this.points[1], e),
          r = lerpPoint(this.points[1], this.points[2], e),
          i = lerpPoint(this.points[2], this.points[3], e),
          s = lerpPoint(t, r, e),
          n = lerpPoint(r, i, e),
          a = lerpPoint(s, n, e);
        return [new PolynomialBezier(this.points[0], t, s, a, !0), new PolynomialBezier(a, n, i, this.points[3], !0)]
      };

      function extrema(e, t) {
        var r = e.points[0][t],
          i = e.points[e.points.length - 1][t];
        if (r > i) {
          var s = i;
          i = r, r = s
        }
        for (var n = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), a = 0; a < n.length; a += 1)
          if (n[a] > 0 && n[a] < 1) {
            var l = e.point(n[a])[t];
            l < r ? r = l : l > i && (i = l)
          } return {
          min: r,
          max: i
        }
      }
      PolynomialBezier.prototype.bounds = function() {
        return {
          x: extrema(this, 0),
          y: extrema(this, 1)
        }
      }, PolynomialBezier.prototype.boundingBox = function() {
        var e = this.bounds();
        return {
          left: e.x.min,
          right: e.x.max,
          top: e.y.min,
          bottom: e.y.max,
          width: e.x.max - e.x.min,
          height: e.y.max - e.y.min,
          cx: (e.x.max + e.x.min) / 2,
          cy: (e.y.max + e.y.min) / 2
        }
      };

      function intersectData(e, t, r) {
        var i = e.boundingBox();
        return {
          cx: i.cx,
          cy: i.cy,
          width: i.width,
          height: i.height,
          bez: e,
          t: (t + r) / 2,
          t1: t,
          t2: r
        }
      }

      function splitData(e) {
        var t = e.bez.split(.5);
        return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
      }

      function boxIntersect(e, t) {
        return Math.abs(e.cx - t.cx) * 2 < e.width + t.width && Math.abs(e.cy - t.cy) * 2 < e.height + t.height
      }

      function intersectsImpl(e, t, r, i, s, n) {
        if (boxIntersect(e, t)) {
          if (r >= n || e.width <= i && e.height <= i && t.width <= i && t.height <= i) {
            s.push([e.t, t.t]);
            return
          }
          var a = splitData(e),
            l = splitData(t);
          intersectsImpl(a[0], l[0], r + 1, i, s, n), intersectsImpl(a[0], l[1], r + 1, i, s, n), intersectsImpl(a[1], l[0], r + 1, i, s, n), intersectsImpl(a[1], l[1], r + 1, i, s, n)
        }
      }
      PolynomialBezier.prototype.intersections = function(e, t, r) {
        t === void 0 && (t = 2), r === void 0 && (r = 7);
        var i = [];
        return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i
      }, PolynomialBezier.shapeSegment = function(e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
      }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
      };

      function crossProduct(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      }

      function lineIntersection(e, t, r, i) {
        var s = [e[0], e[1], 1],
          n = [t[0], t[1], 1],
          a = [r[0], r[1], 1],
          l = [i[0], i[1], 1],
          o = crossProduct(crossProduct(s, n), crossProduct(a, l));
        return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
      }

      function polarOffset(e, t, r) {
        return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
      }

      function pointDistance(e, t) {
        return Math.hypot(e[0] - t[0], e[1] - t[1])
      }

      function pointEqual(e, t) {
        return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
      }

      function ZigZagModifier() {}
      extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
      };

      function setPoint(e, t, r, i, s, n, a) {
        var l = r - Math.PI / 2,
          o = r + Math.PI / 2,
          c = t[0] + Math.cos(r) * i * s,
          f = t[1] - Math.sin(r) * i * s;
        e.setTripleAt(c, f, c + Math.cos(l) * n, f - Math.sin(l) * n, c + Math.cos(o) * a, f - Math.sin(o) * a, e.length())
      }

      function getPerpendicularVector(e, t) {
        var r = [t[0] - e[0], t[1] - e[1]],
          i = -Math.PI * .5,
          s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
        return s
      }

      function getProjectingAngle(e, t) {
        var r = t === 0 ? e.length() - 1 : t - 1,
          i = (t + 1) % e.length(),
          s = e.v[r],
          n = e.v[i],
          a = getPerpendicularVector(s, n);
        return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
      }

      function zigZagCorner(e, t, r, i, s, n, a) {
        var l = getProjectingAngle(t, r),
          o = t.v[r % t._length],
          c = t.v[r === 0 ? t._length - 1 : r - 1],
          f = t.v[(r + 1) % t._length],
          b = n === 2 ? Math.sqrt(Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)) : 0,
          u = n === 2 ? Math.sqrt(Math.pow(o[0] - f[0], 2) + Math.pow(o[1] - f[1], 2)) : 0;
        setPoint(e, t.v[r % t._length], l, a, i, u / ((s + 1) * 2), b / ((s + 1) * 2))
      }

      function zigZagSegment(e, t, r, i, s, n) {
        for (var a = 0; a < i; a += 1) {
          var l = (a + 1) / (i + 1),
            o = s === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            c = t.normalAngle(l),
            f = t.point(l);
          setPoint(e, f, c, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n
        }
        return n
      }
      ZigZagModifier.prototype.processPath = function(e, t, r, i) {
        var s = e._length,
          n = shapePool.newElement();
        if (n.c = e.c, e.c || (s -= 1), s === 0) return n;
        var a = -1,
          l = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(n, e, 0, t, r, i, a);
        for (var o = 0; o < s; o += 1) a = zigZagSegment(n, l, t, r, i, -a), o === s - 1 && !e.c ? l = null : l = PolynomialBezier.shapeSegment(e, (o + 1) % s), zigZagCorner(n, e, o + 1, t, r, i, a);
        return n
      }, ZigZagModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, n, a = this.amplitude.v,
          l = Math.max(0, Math.round(this.frequency.v)),
          o = this.pointsType.v;
        if (a !== 0) {
          var c, f;
          for (r = 0; r < i; r += 1) {
            if (c = this.shapes[r], f = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !e))
              for (f.releaseShapes(), c.shape._mdf = !0, t = c.shape.paths.shapes, n = c.shape.paths._length, s = 0; s < n; s += 1) f.addShape(this.processPath(t[s], a, l, o));
            c.shape.paths = c.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };

      function linearOffset(e, t, r) {
        var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, i, r), polarOffset(t, i, r)]
      }

      function offsetSegment(e, t) {
        var r, i, s, n, a, l, o;
        o = linearOffset(e.points[0], e.points[1], t), r = o[0], i = o[1], o = linearOffset(e.points[1], e.points[2], t), s = o[0], n = o[1], o = linearOffset(e.points[2], e.points[3], t), a = o[0], l = o[1];
        var c = lineIntersection(r, i, s, n);
        c === null && (c = i);
        var f = lineIntersection(a, l, s, n);
        return f === null && (f = a), new PolynomialBezier(r, c, f, l)
      }

      function joinLines(e, t, r, i, s) {
        var n = t.points[3],
          a = r.points[0];
        if (i === 3 || pointEqual(n, a)) return n;
        if (i === 2) {
          var l = -t.tangentAngle(1),
            o = -r.tangentAngle(0) + Math.PI,
            c = lineIntersection(n, polarOffset(n, l + Math.PI / 2, 100), a, polarOffset(a, l + Math.PI / 2, 100)),
            f = c ? pointDistance(c, n) : pointDistance(n, a) / 2,
            b = polarOffset(n, l, 2 * f * roundCorner);
          return e.setXYAt(b[0], b[1], "o", e.length() - 1), b = polarOffset(a, o, 2 * f * roundCorner), e.setTripleAt(a[0], a[1], a[0], a[1], b[0], b[1], e.length()), a
        }
        var u = pointEqual(n, t.points[2]) ? t.points[0] : t.points[2],
          y = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1],
          g = lineIntersection(u, n, a, y);
        return g && pointDistance(g, n) < s ? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g) : n
      }

      function getIntersection(e, t) {
        var r = e.intersections(t);
        return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
      }

      function pruneSegmentIntersection(e, t) {
        var r = e.slice(),
          i = t.slice(),
          s = getIntersection(e[e.length - 1], t[0]);
        return s && (r[e.length - 1] = e[e.length - 1].split(s[0])[0], i[0] = t[0].split(s[1])[1]), e.length > 1 && t.length > 1 && (s = getIntersection(e[0], t[t.length - 1]), s) ? [
          [e[0].split(s[0])[0]],
          [t[t.length - 1].split(s[1])[1]]
        ] : [r, i]
      }

      function pruneIntersections(e) {
        for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
        return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
      }

      function offsetSegmentSplit(e, t) {
        var r = e.inflectionPoints(),
          i, s, n, a;
        if (r.length === 0) return [offsetSegment(e, t)];
        if (r.length === 1 || floatEqual(r[1], 1)) return n = e.split(r[0]), i = n[0], s = n[1], [offsetSegment(i, t), offsetSegment(s, t)];
        n = e.split(r[0]), i = n[0];
        var l = (r[1] - r[0]) / (1 - r[0]);
        return n = n[1].split(l), a = n[0], s = n[1], [offsetSegment(i, t), offsetSegment(a, t), offsetSegment(s, t)]
      }

      function OffsetPathModifier() {}
      extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
      }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
        var s = shapePool.newElement();
        s.c = e.c;
        var n = e.length();
        e.c || (n -= 1);
        var a, l, o, c = [];
        for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(e, a), c.push(offsetSegmentSplit(o, t));
        if (!e.c)
          for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), c.push(offsetSegmentSplit(o, t));
        c = pruneIntersections(c);
        var f = null,
          b = null;
        for (a = 0; a < c.length; a += 1) {
          var u = c[a];
          for (b && (f = joinLines(s, b, u[0], r, i)), b = u[u.length - 1], l = 0; l < u.length; l += 1) o = u[l], f && pointEqual(o.points[0], f) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), f = o.points[3]
        }
        return c.length && joinLines(s, b, c[0][0], r, i), s
      }, OffsetPathModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, n, a = this.amount.v,
          l = this.miterLimit.v,
          o = this.lineJoin;
        if (a !== 0) {
          var c, f;
          for (r = 0; r < i; r += 1) {
            if (c = this.shapes[r], f = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !e))
              for (f.releaseShapes(), c.shape._mdf = !0, t = c.shape.paths.shapes, n = c.shape.paths._length, s = 0; s < n; s += 1) f.addShape(this.processPath(t[s], a, o, l));
            c.shape.paths = c.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };

      function getFontProperties(e) {
        for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", s = t.length, n, a = 0; a < s; a += 1) switch (n = t[a].toLowerCase(), n) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200";
            break
        }
        return {
          style: i,
          weight: e.fWeight || r
        }
      }
      var FontManager = (function() {
        var e = 5e3,
          t = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          },
          r = [];
        r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var i = 127988,
          s = 917631,
          n = 917601,
          a = 917626,
          l = 65039,
          o = 8205,
          c = 127462,
          f = 127487,
          b = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

        function u(k) {
          var w = k.split(","),
            C, S = w.length,
            F = [];
          for (C = 0; C < S; C += 1) w[C] !== "sans-serif" && w[C] !== "monospace" && F.push(w[C]);
          return F.join(",")
        }

        function y(k, w) {
          var C = createTag("span");
          C.setAttribute("aria-hidden", !0), C.style.fontFamily = w;
          var S = createTag("span");
          S.innerText = "giItT1WQy@!-/#", C.style.position = "absolute", C.style.left = "-10000px", C.style.top = "-10000px", C.style.fontSize = "300px", C.style.fontVariant = "normal", C.style.fontStyle = "normal", C.style.fontWeight = "normal", C.style.letterSpacing = "0", C.appendChild(S), document.body.appendChild(C);
          var F = S.offsetWidth;
          return S.style.fontFamily = u(k) + ", " + w, {
            node: S,
            w: F,
            parent: C
          }
        }

        function g() {
          var k, w = this.fonts.length,
            C, S, F = w;
          for (k = 0; k < w; k += 1) this.fonts[k].loaded ? F -= 1 : this.fonts[k].fOrigin === "n" || this.fonts[k].origin === 0 ? this.fonts[k].loaded = !0 : (C = this.fonts[k].monoCase.node, S = this.fonts[k].monoCase.w, C.offsetWidth !== S ? (F -= 1, this.fonts[k].loaded = !0) : (C = this.fonts[k].sansCase.node, S = this.fonts[k].sansCase.w, C.offsetWidth !== S && (F -= 1, this.fonts[k].loaded = !0)), this.fonts[k].loaded && (this.fonts[k].sansCase.parent.parentNode.removeChild(this.fonts[k].sansCase.parent), this.fonts[k].monoCase.parent.parentNode.removeChild(this.fonts[k].monoCase.parent)));
          F !== 0 && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
        }

        function v(k, w) {
          var C = document.body && w ? "svg" : "canvas",
            S, F = getFontProperties(k);
          if (C === "svg") {
            var A = createNS("text");
            A.style.fontSize = "100px", A.setAttribute("font-family", k.fFamily), A.setAttribute("font-style", F.style), A.setAttribute("font-weight", F.weight), A.textContent = "1", k.fClass ? (A.style.fontFamily = "inherit", A.setAttribute("class", k.fClass)) : A.style.fontFamily = k.fFamily, w.appendChild(A), S = A
          } else {
            var j = new OffscreenCanvas(500, 500).getContext("2d");
            j.font = F.style + " " + F.weight + " 100px " + k.fFamily, S = j
          }

          function Z(q) {
            return C === "svg" ? (S.textContent = q, S.getComputedTextLength()) : S.measureText(q).width
          }
          return {
            measureText: Z
          }
        }

        function E(k, w) {
          if (!k) {
            this.isLoaded = !0;
            return
          }
          if (this.chars) {
            this.isLoaded = !0, this.fonts = k.list;
            return
          }
          if (!document.body) {
            this.isLoaded = !0, k.list.forEach(function(X) {
              X.helper = v(X), X.cache = {}
            }), this.fonts = k.list;
            return
          }
          var C = k.list,
            S, F = C.length,
            A = F;
          for (S = 0; S < F; S += 1) {
            var j = !0,
              Z, q;
            if (C[S].loaded = !1, C[S].monoCase = y(C[S].fFamily, "monospace"), C[S].sansCase = y(C[S].fFamily, "sans-serif"), !C[S].fPath) C[S].loaded = !0, A -= 1;
            else if (C[S].fOrigin === "p" || C[S].origin === 3) {
              if (Z = document.querySelectorAll('style[f-forigin="p"][f-family="' + C[S].fFamily + '"], style[f-origin="3"][f-family="' + C[S].fFamily + '"]'), Z.length > 0 && (j = !1), j) {
                var ee = createTag("style");
                ee.setAttribute("f-forigin", C[S].fOrigin), ee.setAttribute("f-origin", C[S].origin), ee.setAttribute("f-family", C[S].fFamily), ee.type = "text/css", ee.innerText = "@font-face {font-family: " + C[S].fFamily + "; font-style: normal; src: url('" + C[S].fPath + "');}", w.appendChild(ee)
              }
            } else if (C[S].fOrigin === "g" || C[S].origin === 1) {
              for (Z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), q = 0; q < Z.length; q += 1) Z[q].href.indexOf(C[S].fPath) !== -1 && (j = !1);
              if (j) {
                var R = createTag("link");
                R.setAttribute("f-forigin", C[S].fOrigin), R.setAttribute("f-origin", C[S].origin), R.type = "text/css", R.rel = "stylesheet", R.href = C[S].fPath, document.body.appendChild(R)
              }
            } else if (C[S].fOrigin === "t" || C[S].origin === 2) {
              for (Z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), q = 0; q < Z.length; q += 1) C[S].fPath === Z[q].src && (j = !1);
              if (j) {
                var U = createTag("link");
                U.setAttribute("f-forigin", C[S].fOrigin), U.setAttribute("f-origin", C[S].origin), U.setAttribute("rel", "stylesheet"), U.setAttribute("href", C[S].fPath), w.appendChild(U)
              }
            }
            C[S].helper = v(C[S], w), C[S].cache = {}, this.fonts.push(C[S])
          }
          A === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
        }

        function p(k) {
          if (k) {
            this.chars || (this.chars = []);
            var w, C = k.length,
              S, F = this.chars.length,
              A;
            for (w = 0; w < C; w += 1) {
              for (S = 0, A = !1; S < F;) this.chars[S].style === k[w].style && this.chars[S].fFamily === k[w].fFamily && this.chars[S].ch === k[w].ch && (A = !0), S += 1;
              A || (this.chars.push(k[w]), F += 1)
            }
          }
        }

        function m(k, w, C) {
          for (var S = 0, F = this.chars.length; S < F;) {
            if (this.chars[S].ch === k && this.chars[S].style === w && this.chars[S].fFamily === C) return this.chars[S];
            S += 1
          }
          return (typeof k == "string" && k.charCodeAt(0) !== 13 || !k) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", k, w, C)), t
        }

        function d(k, w, C) {
          var S = this.getFontByName(w),
            F = k;
          if (!S.cache[F]) {
            var A = S.helper;
            if (k === " ") {
              var j = A.measureText("|" + k + "|"),
                Z = A.measureText("||");
              S.cache[F] = (j - Z) / 100
            } else S.cache[F] = A.measureText(k) / 100
          }
          return S.cache[F] * C
        }

        function _(k) {
          for (var w = 0, C = this.fonts.length; w < C;) {
            if (this.fonts[w].fName === k) return this.fonts[w];
            w += 1
          }
          return this.fonts[0]
        }

        function x(k) {
          var w = 0,
            C = k.charCodeAt(0);
          if (C >= 55296 && C <= 56319) {
            var S = k.charCodeAt(1);
            S >= 56320 && S <= 57343 && (w = (C - 55296) * 1024 + S - 56320 + 65536)
          }
          return w
        }

        function P(k, w) {
          var C = k.toString(16) + w.toString(16);
          return b.indexOf(C) !== -1
        }

        function T(k) {
          return k === o
        }

        function V(k) {
          return k === l
        }

        function B(k) {
          var w = x(k);
          return w >= c && w <= f
        }

        function D(k) {
          return B(k.substr(0, 2)) && B(k.substr(2, 2))
        }

        function L(k) {
          return r.indexOf(k) !== -1
        }

        function N(k, w) {
          var C = x(k.substr(w, 2));
          if (C !== i) return !1;
          var S = 0;
          for (w += 2; S < 5;) {
            if (C = x(k.substr(w, 2)), C < n || C > a) return !1;
            S += 1, w += 2
          }
          return x(k.substr(w, 2)) === s
        }

        function z() {
          this.isLoaded = !0
        }
        var G = function() {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        G.isModifier = P, G.isZeroWidthJoiner = T, G.isFlagEmoji = D, G.isRegionalCode = B, G.isCombinedCharacter = L, G.isRegionalFlag = N, G.isVariationSelector = V, G.BLACK_FLAG_CODE_POINT = i;
        var $ = {
          addChars: p,
          addFonts: E,
          getCharData: m,
          getFontByName: _,
          measureText: d,
          checkLoadedFonts: g,
          setIsLoaded: z
        };
        return G.prototype = $, G
      })();

      function SlotManager(e) {
        this.animationData = e
      }
      SlotManager.prototype.getProp = function(e) {
        return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
      };

      function slotFactory(e) {
        return new SlotManager(e)
      }

      function RenderableElement() {}
      RenderableElement.prototype = {
        initRenderable: function() {
          this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
        },
        addRenderableComponent: function(t) {
          this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t)
        },
        removeRenderableComponent: function(t) {
          this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
        },
        prepareRenderableFrame: function(t) {
          this.checkLayerLimits(t)
        },
        checkTransparency: function() {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
        },
        checkLayerLimits: function(t) {
          this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
        },
        renderRenderable: function() {
          var t, r = this.renderableComponents.length;
          for (t = 0; t < r; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function() {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          }
        },
        getLayerSize: function() {
          return this.data.ty === 5 ? {
            w: this.data.textData.width,
            h: this.data.textData.height
          } : {
            w: this.data.width,
            h: this.data.height
          }
        }
      };
      var getBlendMode = (function() {
        var e = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        };
        return function(t) {
          return e[t] || ""
        }
      })();

      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function NoValueEffect() {
        this.p = {}
      }

      function EffectsManager(e, t) {
        var r = e.ef || [];
        this.effectElements = [];
        var i, s = r.length,
          n;
        for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], t), this.effectElements.push(n)
      }

      function GroupEffect(e, t) {
        this.init(e, t)
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
        this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
        var r, i = this.data.ef.length,
          s, n = this.data.ef;
        for (r = 0; r < i; r += 1) {
          switch (s = null, n[r].ty) {
            case 0:
              s = new SliderEffect(n[r], t, this);
              break;
            case 1:
              s = new AngleEffect(n[r], t, this);
              break;
            case 2:
              s = new ColorEffect(n[r], t, this);
              break;
            case 3:
              s = new PointEffect(n[r], t, this);
              break;
            case 4:
            case 7:
              s = new CheckboxEffect(n[r], t, this);
              break;
            case 10:
              s = new LayerIndexEffect(n[r], t, this);
              break;
            case 11:
              s = new MaskIndexEffect(n[r], t, this);
              break;
            case 5:
              s = new EffectsManager(n[r], t);
              break;
            default:
              s = new NoValueEffect(n[r]);
              break
          }
          s && this.effectElements.push(s)
        }
      };

      function BaseElement() {}
      BaseElement.prototype = {
        checkMasks: function() {
          if (!this.data.hasMask) return !1;
          for (var t = 0, r = this.data.masksProperties.length; t < r;) {
            if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
            t += 1
          }
          return !1
        },
        initExpressions: function() {
          var t = getExpressionInterfaces();
          if (t) {
            var r = t("layer"),
              i = t("effects"),
              s = t("shape"),
              n = t("text"),
              a = t("comp");
            this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var l = i.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
          }
        },
        setBlendMode: function() {
          var t = getBlendMode(this.data.bm),
            r = this.baseElement || this.layerElement;
          r.style["mix-blend-mode"] = t
        },
        initBaseData: function(t, r, i) {
          this.globalData = r, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function() {
          return this.type
        },
        sourceRectAtTime: function() {}
      };

      function FrameElement() {}
      FrameElement.prototype = {
        initFrame: function() {
          this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
        },
        prepareProperties: function(t, r) {
          var i, s = this.dynamicProperties.length;
          for (i = 0; i < s; i += 1)(r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
        },
        addDynamicProperty: function(t) {
          this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t)
        }
      };

      function FootageElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
      }
      FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
        return null
      }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
        var e = getExpressionInterfaces();
        if (e) {
          var t = e("footage");
          this.layerInterface = t(this)
        }
      }, FootageElement.prototype.getFootageData = function() {
        return this.footageData
      };

      function AudioElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
        var i = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
          k: [100]
        }, 1, .01, this)
      }
      AudioElement.prototype.prepareFrame = function(e) {
        if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t
        }
        this._volume = this.lv.v[0];
        var r = this._volume * this._volumeMultiplier;
        this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
      }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
      }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
        this.audio.pause(), this._isPlaying = !1
      }, AudioElement.prototype.pause = function() {
        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
      }, AudioElement.prototype.resume = function() {
        this._canPlay = !0
      }, AudioElement.prototype.setRate = function(e) {
        this.audio.rate(e)
      }, AudioElement.prototype.volume = function(e) {
        this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
      }, AudioElement.prototype.getBaseElement = function() {
        return null
      }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};

      function BaseRenderer() {}
      BaseRenderer.prototype.checkLayers = function(e) {
        var t, r = this.layers.length,
          i;
        for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1) this.elements[t] || (i = this.layers[t], i.ip - i.st <= e - this.layers[t].st && i.op - i.st > e - this.layers[t].st && this.buildItem(t)), this.completeLayers = this.elements[t] ? this.completeLayers : !1;
        this.checkPendingElements()
      }, BaseRenderer.prototype.createItem = function(e) {
        switch (e.ty) {
          case 2:
            return this.createImage(e);
          case 0:
            return this.createComp(e);
          case 1:
            return this.createSolid(e);
          case 3:
            return this.createNull(e);
          case 4:
            return this.createShape(e);
          case 5:
            return this.createText(e);
          case 6:
            return this.createAudio(e);
          case 13:
            return this.createCamera(e);
          case 15:
            return this.createFootage(e);
          default:
            return this.createNull(e)
        }
      }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
      }, BaseRenderer.prototype.createAudio = function(e) {
        return new AudioElement(e, this.globalData, this)
      }, BaseRenderer.prototype.createFootage = function(e) {
        return new FootageElement(e, this.globalData, this)
      }, BaseRenderer.prototype.buildAllItems = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.buildItem(e);
        this.checkPendingElements()
      }, BaseRenderer.prototype.includeLayers = function(e) {
        this.completeLayers = !1;
        var t, r = e.length,
          i, s = this.layers.length;
        for (t = 0; t < r; t += 1)
          for (i = 0; i < s;) {
            if (this.layers[i].id === e[t].id) {
              this.layers[i] = e[t];
              break
            }
            i += 1
          }
      }, BaseRenderer.prototype.setProjectInterface = function(e) {
        this.globalData.projectInterface = e
      }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
      }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
        for (var i = this.elements, s = this.layers, n = 0, a = s.length; n < a;) s[n].ind == t && (!i[n] || i[n] === !0 ? (this.buildItem(n), this.addPendingElement(e)) : (r.push(i[n]), i[n].setAsParent(), s[n].parent !== void 0 ? this.buildElementParenting(e, s[n].parent, r) : e.setHierarchy(r))), n += 1
      }, BaseRenderer.prototype.addPendingElement = function(e) {
        this.pendingElements.push(e)
      }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var i = this.createComp(e[t]);
            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
          }
      }, BaseRenderer.prototype.getElementById = function(e) {
        var t, r = this.elements.length;
        for (t = 0; t < r; t += 1)
          if (this.elements[t].data.ind === e) return this.elements[t];
        return null
      }, BaseRenderer.prototype.getElementByPath = function(e) {
        var t = e.shift(),
          r;
        if (typeof t == "number") r = this.elements[t];
        else {
          var i, s = this.elements.length;
          for (i = 0; i < s; i += 1)
            if (this.elements[i].data.nm === t) {
              r = this.elements[i];
              break
            }
        }
        return e.length === 0 ? r : r.getElementByPath(e)
      }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
        this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
          w: e.w,
          h: e.h
        }
      };
      var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
      };

      function TransformElement() {}
      TransformElement.prototype = {
        initTransform: function() {
          var t = new Matrix;
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: t,
            localMat: t,
            localOpacity: 1
          }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
        },
        renderTransform: function() {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var t, r = this.finalTransform.mat,
              i = 0,
              s = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; i < s;) {
                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break
                }
                i += 1
              }
            if (this.finalTransform._matMdf)
              for (t = this.finalTransform.mProp.v.props, r.cloneFromProps(t), i = 0; i < s; i += 1) r.multiply(this.hierarchy[i].finalTransform.mProp.v)
          }(!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
        },
        renderLocalTransform: function() {
          if (this.localTransforms) {
            var t = 0,
              r = this.localTransforms.length;
            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
              for (; t < r;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
            if (this.finalTransform._localMatMdf) {
              var i = this.finalTransform.localMat;
              for (this.localTransforms[0].matrix.clone(i), t = 1; t < r; t += 1) {
                var s = this.localTransforms[t].matrix;
                i.multiply(s)
              }
              i.multiply(this.finalTransform.mat)
            }
            if (this.finalTransform._opMdf) {
              var n = this.finalTransform.localOpacity;
              for (t = 0; t < r; t += 1) n *= this.localTransforms[t].opacity * .01;
              this.finalTransform.localOpacity = n
            }
          }
        },
        searchEffectTransforms: function() {
          if (this.renderableEffectsManager) {
            var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (t.length) {
              this.localTransforms = [], this.finalTransform.localMat = new Matrix;
              var r = 0,
                i = t.length;
              for (r = 0; r < i; r += 1) this.localTransforms.push(t[r])
            }
          }
        },
        globalToLocal: function(t) {
          var r = [];
          r.push(this.finalTransform);
          for (var i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
          var n, a = r.length,
            l;
          for (n = 0; n < a; n += 1) l = r[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - l[0], t[1] - l[1], 0];
          return t
        },
        mHelper: new Matrix
      };

      function MaskElement(e, t, r) {
        this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var i = this.globalData.defs,
          s, n = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(n), this.solidPath = "";
        var a, l = this.masksProperties,
          o = 0,
          c = [],
          f, b, u = createElementID(),
          y, g, v, E, p = "clipPath",
          m = "clip-path";
        for (s = 0; s < n; s += 1)
          if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (p = "mask", m = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (y = createNS("rect"), y.setAttribute("fill", "#ffffff"), y.setAttribute("width", this.element.comp.data.w || 0), y.setAttribute("height", this.element.comp.data.h || 0), c.push(y)) : y = null, a = createNS("path"), l[s].mode === "n") this.viewData[s] = {
            op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            elem: a,
            lastPath: ""
          }, i.appendChild(a);
          else {
            o += 1, a.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
            var d;
            if (l[s].x.k !== 0 ? (p = "mask", m = "mask", E = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), d = createElementID(), g = createNS("filter"), g.setAttribute("id", d), v = createNS("feMorphology"), v.setAttribute("operator", "erode"), v.setAttribute("in", "SourceGraphic"), v.setAttribute("radius", "0"), g.appendChild(v), i.appendChild(g), a.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (v = null, E = null), this.storedData[s] = {
                elem: a,
                x: E,
                expan: v,
                lastPath: "",
                lastOperator: "",
                filterId: d,
                lastRadius: 0
              }, l[s].mode === "i") {
              b = c.length;
              var _ = createNS("g");
              for (f = 0; f < b; f += 1) _.appendChild(c[f]);
              var x = createNS("mask");
              x.setAttribute("mask-type", "alpha"), x.setAttribute("id", u + "_" + o), x.appendChild(a), i.appendChild(x), _.setAttribute("mask", "url(" + getLocationHref() + "#" + u + "_" + o + ")"), c.length = 0, c.push(_)
            } else c.push(a);
            l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
              elem: a,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
              invRect: y
            }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s])
          } for (this.maskElement = createNS(p), n = c.length, s = 0; s < n; s += 1) this.maskElement.appendChild(c[s]);
        o > 0 && (this.maskElement.setAttribute("id", u), this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + u + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
      }
      MaskElement.prototype.getMaskProperty = function(e) {
        return this.viewData[e].prop
      }, MaskElement.prototype.renderFrame = function(e) {
        var t = this.element.finalTransform.mat,
          r, i = this.masksProperties.length;
        for (r = 0; r < i; r += 1)
          if ((this.viewData[r].prop._mdf || e) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || e) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[r].invRect.setAttribute("transform", t.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || e))) {
            var s = this.storedData[r].expan;
            this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
          }
      }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
      }, MaskElement.prototype.createLayerSolidPath = function() {
        var e = "M0,0 ";
        return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " ", e
      }, MaskElement.prototype.drawPath = function(e, t, r) {
        var i = " M" + t.v[0][0] + "," + t.v[0][1],
          s, n;
        for (n = t._length, s = 1; s < n; s += 1) i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[s][0] + "," + t.i[s][1] + " " + t.v[s][0] + "," + t.v[s][1];
        if (t.c && n > 1 && (i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== i) {
          var a = "";
          r.elem && (t.c && (a = e.inv ? this.solidPath + i : i), r.elem.setAttribute("d", a)), r.lastPath = i
        }
      }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
      };
      var filtersFactory = (function() {
          var e = {};
          e.createFilter = t, e.createAlphaToLuminanceFilter = r;

          function t(i, s) {
            var n = createNS("filter");
            return n.setAttribute("id", i), s !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
          }

          function r() {
            var i = createNS("feColorMatrix");
            return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
          }
          return e
        })(),
        featureSupport = (function() {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        })(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

      function SVGEffects(e) {
        var t, r = "SourceGraphic",
          i = e.data.ef ? e.data.ef.length : 0,
          s = createElementID(),
          n = filtersFactory.createFilter(s, !0),
          a = 0;
        this.filters = [];
        var l;
        for (t = 0; t < i; t += 1) {
          l = null;
          var o = e.data.ef[t].ty;
          if (registeredEffects$1[o]) {
            var c = registeredEffects$1[o].effect;
            l = new c(n, e.effectsManager.effectElements[t], e, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1)
          }
          l && this.filters.push(l)
        }
        a && (e.globalData.defs.appendChild(n), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && e.addRenderableComponent(this)
      }
      SVGEffects.prototype.renderFrame = function(e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, SVGEffects.prototype.getEffects = function(e) {
        var t, r = this.filters.length,
          i = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
        return i
      };

      function registerEffect$1(e, t, r) {
        registeredEffects$1[e] = {
          effect: t,
          countsAsEffect: r
        }
      }

      function SVGBaseElement() {}
      SVGBaseElement.prototype = {
        initRendererElement: function() {
          this.layerElement = createNS("g")
        },
        createContainerElements: function() {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
          var t = null;
          if (this.data.td) {
            this.matteMasks = {};
            var r = createNS("g");
            r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), t = r, this.globalData.defs.appendChild(r)
          } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
            var i = createNS("clipPath"),
              s = createNS("path");
            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var n = createElementID();
            if (i.setAttribute("id", n), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
          }
          this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function() {
          this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
        },
        destroyBaseElement: function() {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
        },
        getBaseElement: function() {
          return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function() {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
        },
        getMatte: function(t) {
          if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
            var r = this.layerId + "_" + t,
              i, s, n, a;
            if (t === 1 || t === 3) {
              var l = createNS("mask");
              l.setAttribute("id", r), l.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), !featureSupport.maskType && t === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
            } else if (t === 2) {
              var o = createNS("mask");
              o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
              var c = createNS("g");
              o.appendChild(c), i = createElementID(), s = filtersFactory.createFilter(i);
              var f = createNS("feComponentTransfer");
              f.setAttribute("in", "SourceGraphic"), s.appendChild(f);
              var b = createNS("feFuncA");
              b.setAttribute("type", "table"), b.setAttribute("tableValues", "1.0 0.0"), f.appendChild(b), this.globalData.defs.appendChild(s);
              var u = createNS("rect");
              u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), c.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), c.appendChild(u), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), c.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), c.appendChild(u), a.appendChild(this.layerElement), c.appendChild(a)), this.globalData.defs.appendChild(o)
            }
            this.matteMasks[t] = r
          }
          return this.matteMasks[t]
        },
        setMatte: function(t) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
        }
      };

      function HierarchyElement() {}
      HierarchyElement.prototype = {
        initHierarchy: function() {
          this.hierarchy = [], this._isParent = !1, this.checkParenting()
        },
        setHierarchy: function(t) {
          this.hierarchy = t
        },
        setAsParent: function() {
          this._isParent = !0
        },
        checkParenting: function() {
          this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
        }
      };

      function RenderableDOMElement() {}(function() {
        var e = {
          initElement: function(r, i, s) {
            this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var r = this.baseElement || this.layerElement;
              r.style.display = "none", this.hidden = !0
            }
          },
          show: function() {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var r = this.baseElement || this.layerElement;
                r.style.display = "block"
              }
              this.hidden = !1, this._isFirstFrame = !0
            }
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(r) {
            this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        };
        extendPrototype([RenderableElement, createProxyFunction(e)], RenderableDOMElement)
      })();

      function IImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        }
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
        var e = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
      }, IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect
      };

      function ProcessedElement(e, t) {
        this.elem = e, this.pos = t
      }

      function IShapeElement() {}
      IShapeElement.prototype = {
        addShapeToModifiers: function(t) {
          var r, i = this.shapeModifiers.length;
          for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(t)
        },
        isShapeInAnimatedModifiers: function(t) {
          for (var r = 0, i = this.shapeModifiers.length; r < i;)
            if (this.shapeModifiers[r].isAnimatedWithShape(t)) return !0;
          return !1
        },
        renderModifiers: function() {
          if (this.shapeModifiers.length) {
            var t, r = this.shapes.length;
            for (t = 0; t < r; t += 1) this.shapes[t].sh.reset();
            r = this.shapeModifiers.length;
            var i;
            for (t = r - 1; t >= 0 && (i = this.shapeModifiers[t].processShapes(this._isFirstFrame), !i); t -= 1);
          }
        },
        searchProcessedElement: function(t) {
          for (var r = this.processedElements, i = 0, s = r.length; i < s;) {
            if (r[i].elem === t) return r[i].pos;
            i += 1
          }
          return 0
        },
        addProcessedElement: function(t, r) {
          for (var i = this.processedElements, s = i.length; s;)
            if (s -= 1, i[s].elem === t) {
              i[s].pos = r;
              return
            } i.push(new ProcessedElement(t, r))
        },
        prepareFrame: function(t) {
          this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }
      };
      var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        },
        lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };

      function SVGShapeData(e, t, r) {
        this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
        for (var i = 0, s = e.length; i < s;) {
          if (e[i].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break
          }
          i += 1
        }
      }
      SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = !0
      };

      function SVGStyleData(e, t) {
        this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
      }
      SVGStyleData.prototype.reset = function() {
        this.d = "", this._mdf = !1
      };

      function DashProperty(e, t, r, i) {
        this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
        var s, n = t.length || 0,
          a;
        for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(e, t[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
          n: t[s].n,
          p: a
        };
        this.k || this.getValue(!0), this._isAnimated = this.k
      }
      DashProperty.prototype.getValue = function(e) {
        if (!(this.elem.globalData.frameId === this.frameId && !e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
          var t = 0,
            r = this.dataProps.length;
          for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
        }
      }, extendPrototype([DynamicPropertyContainer], DashProperty);

      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
      }
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
      }
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

      function SVGNoStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
      }
      extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

      function GradientProperty(e, t, r) {
        this.data = t, this.c = createTypedArray("uint8c", t.p * 4);
        var i = t.k.k[0].s ? t.k.k[0].s.length - t.p * 4 : t.k.k.length - t.p * 4;
        this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
      }
      GradientProperty.prototype.comparePoints = function(e, t) {
        for (var r = 0, i = this.o.length / 2, s; r < i;) {
          if (s = Math.abs(e[r * 4] - e[t * 4 + r * 2]), s > .01) return !1;
          r += 1
        }
        return !0
      }, GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 !== this.c.length / 4) return !1;
        if (this.data.k.k[0].s)
          for (var e = 0, t = this.data.k.k.length; e < t;) {
            if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
            e += 1
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0
      }, GradientProperty.prototype.getValue = function(e) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
          var t, r = this.data.p * 4,
            i, s;
          for (t = 0; t < r; t += 1) i = t % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[t] * i), this.c[t] !== s && (this.c[t] = s, this._cmdf = !e);
          if (this.o.length)
            for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1) i = t % 2 === 0 ? 100 : 1, s = t % 2 === 0 ? Math.round(this.prop.v[t] * 100) : this.prop.v[t], this.o[t - this.data.p * 4] !== s && (this.o[t - this.data.p * 4] = s, this._omdf = !e);
          this._mdf = !e
        }
      }, extendPrototype([DynamicPropertyContainer], GradientProperty);

      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
      }
      SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
        this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
          k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
          k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
      }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
        var r = createElementID(),
          i = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
        var s = [],
          n, a, l;
        for (l = t.g.p * 4, a = 0; a < l; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
        e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var r, i, s, n = createNS("mask"),
            a = createNS("path");
          n.appendChild(a);
          var l = createElementID(),
            o = createElementID();
          n.setAttribute("id", o);
          var c = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          c.setAttribute("id", l), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), s = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
          var f = this.stops;
          for (i = e.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(r), f.push(r);
          a.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), e.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && a.setAttribute("stroke-miterlimit", e.ml)), this.of = c, this.ms = n, this.ost = f, this.maskId = o, t.msElem = a
        }
      }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
      }
      extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

      function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g")
      }

      function SVGTransformData(e, t, r) {
        this.transform = {
          mProps: e,
          op: t,
          container: r
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
      }
      var buildShapeString = function(t, r, i, s) {
          if (r === 0) return "";
          var n = t.o,
            a = t.i,
            l = t.v,
            o, c = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
          for (o = 1; o < r; o += 1) c += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
          return i && r && (c += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), c += "z"), c
        },
        SVGElementsRenderer = (function() {
          var e = new Matrix,
            t = new Matrix,
            r = {
              createRenderFunction: i
            };

          function i(b) {
            switch (b.ty) {
              case "fl":
                return l;
              case "gf":
                return c;
              case "gs":
                return o;
              case "st":
                return f;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return a;
              case "tr":
                return s;
              case "no":
                return n;
              default:
                return null
            }
          }

          function s(b, u, y) {
            (y || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (y || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
          }

          function n() {}

          function a(b, u, y) {
            var g, v, E, p, m, d, _ = u.styles.length,
              x = u.lvl,
              P, T, V, B;
            for (d = 0; d < _; d += 1) {
              if (p = u.sh._mdf || y, u.styles[d].lvl < x) {
                for (T = t.reset(), V = x - u.styles[d].lvl, B = u.transformers.length - 1; !p && V > 0;) p = u.transformers[B].mProps._mdf || p, V -= 1, B -= 1;
                if (p)
                  for (V = x - u.styles[d].lvl, B = u.transformers.length - 1; V > 0;) T.multiply(u.transformers[B].mProps.v), V -= 1, B -= 1
              } else T = e;
              if (P = u.sh.paths, v = P._length, p) {
                for (E = "", g = 0; g < v; g += 1) m = P.shapes[g], m && m._length && (E += buildShapeString(m, m._length, m.c, T));
                u.caches[d] = E
              } else E = u.caches[d];
              u.styles[d].d += b.hd === !0 ? "" : E, u.styles[d]._mdf = p || u.styles[d]._mdf
            }
          }

          function l(b, u, y) {
            var g = u.style;
            (u.c._mdf || y) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || y) && g.pElem.setAttribute("fill-opacity", u.o.v)
          }

          function o(b, u, y) {
            c(b, u, y), f(b, u, y)
          }

          function c(b, u, y) {
            var g = u.gf,
              v = u.g._hasOpacity,
              E = u.s.v,
              p = u.e.v;
            if (u.o._mdf || y) {
              var m = b.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              u.style.pElem.setAttribute(m, u.o.v)
            }
            if (u.s._mdf || y) {
              var d = b.t === 1 ? "x1" : "cx",
                _ = d === "x1" ? "y1" : "cy";
              g.setAttribute(d, E[0]), g.setAttribute(_, E[1]), v && !u.g._collapsable && (u.of.setAttribute(d, E[0]), u.of.setAttribute(_, E[1]))
            }
            var x, P, T, V;
            if (u.g._cmdf || y) {
              x = u.cst;
              var B = u.g.c;
              for (T = x.length, P = 0; P < T; P += 1) V = x[P], V.setAttribute("offset", B[P * 4] + "%"), V.setAttribute("stop-color", "rgb(" + B[P * 4 + 1] + "," + B[P * 4 + 2] + "," + B[P * 4 + 3] + ")")
            }
            if (v && (u.g._omdf || y)) {
              var D = u.g.o;
              for (u.g._collapsable ? x = u.cst : x = u.ost, T = x.length, P = 0; P < T; P += 1) V = x[P], u.g._collapsable || V.setAttribute("offset", D[P * 2] + "%"), V.setAttribute("stop-opacity", D[P * 2 + 1])
            }
            if (b.t === 1)(u.e._mdf || y) && (g.setAttribute("x2", p[0]), g.setAttribute("y2", p[1]), v && !u.g._collapsable && (u.of.setAttribute("x2", p[0]), u.of.setAttribute("y2", p[1])));
            else {
              var L;
              if ((u.s._mdf || u.e._mdf || y) && (L = Math.sqrt(Math.pow(E[0] - p[0], 2) + Math.pow(E[1] - p[1], 2)), g.setAttribute("r", L), v && !u.g._collapsable && u.of.setAttribute("r", L)), u.s._mdf || u.e._mdf || u.h._mdf || u.a._mdf || y) {
                L || (L = Math.sqrt(Math.pow(E[0] - p[0], 2) + Math.pow(E[1] - p[1], 2)));
                var N = Math.atan2(p[1] - E[1], p[0] - E[0]),
                  z = u.h.v;
                z >= 1 ? z = .99 : z <= -1 && (z = -.99);
                var G = L * z,
                  $ = Math.cos(N + u.a.v) * G + E[0],
                  k = Math.sin(N + u.a.v) * G + E[1];
                g.setAttribute("fx", $), g.setAttribute("fy", k), v && !u.g._collapsable && (u.of.setAttribute("fx", $), u.of.setAttribute("fy", k))
              }
            }
          }

          function f(b, u, y) {
            var g = u.style,
              v = u.d;
            v && (v._mdf || y) && v.dashStr && (g.pElem.setAttribute("stroke-dasharray", v.dashStr), g.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0])), u.c && (u.c._mdf || y) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || y) && g.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || y) && (g.pElem.setAttribute("stroke-width", u.w.v), g.msElem && g.msElem.setAttribute("stroke-width", u.w.v))
          }
          return r
        })();

      function SVGShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
      }, SVGShapeElement.prototype.filterUniqueShapes = function() {
        var e, t = this.shapes.length,
          r, i, s = this.stylesList.length,
          n, a = [],
          l = !1;
        for (i = 0; i < s; i += 1) {
          for (n = this.stylesList[i], l = !1, a.length = 0, e = 0; e < t; e += 1) r = this.shapes[e], r.styles.indexOf(n) !== -1 && (a.push(r), l = r._isAnimated || l);
          a.length > 1 && l && this.setShapesAsAnimated(a)
        }
      }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].setAsAnimated()
      }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
        var r, i = new SVGStyleData(e, t),
          s = i.pElem;
        if (e.ty === "st") r = new SVGStrokeStyleData(this, e, i);
        else if (e.ty === "fl") r = new SVGFillStyleData(this, e, i);
        else if (e.ty === "gf" || e.ty === "gs") {
          var n = e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
          r = new n(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
        } else e.ty === "no" && (r = new SVGNoStyleData(this, e, i));
        return (e.ty === "st" || e.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), s.setAttribute("fill-opacity", "0"), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && s.setAttribute("fill-rule", "evenodd"), e.ln && s.setAttribute("id", e.ln), e.cl && s.setAttribute("class", e.cl), e.bm && (s.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r
      }, SVGShapeElement.prototype.createGroupElement = function(e) {
        var t = new ShapeGroupData;
        return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
      }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
        var r = TransformPropertyFactory.getTransformProperty(this, e, this),
          i = new SVGTransformData(r, r.o, t);
        return this.addToAnimatedContents(e, i), i
      }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
        var i = 4;
        e.ty === "rc" ? i = 5 : e.ty === "el" ? i = 6 : e.ty === "sr" && (i = 7);
        var s = ShapePropertyFactory.getShapeProp(this, e, i, this),
          n = new SVGShapeData(t, r, s);
        return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
      }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
        for (var r = 0, i = this.animatedContents.length; r < i;) {
          if (this.animatedContents[r].element === t) return;
          r += 1
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(e),
          element: t,
          data: e
        })
      }, SVGShapeElement.prototype.setElementStyles = function(e) {
        var t = e.styles,
          r, i = this.stylesList.length;
        for (r = 0; r < i; r += 1) t.indexOf(this.stylesList[r]) === -1 && !this.stylesList[r].closed && t.push(this.stylesList[r])
      }, SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var e, t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers()
      }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, s, n, a) {
        var l = [].concat(n),
          o, c = e.length - 1,
          f, b, u = [],
          y = [],
          g, v, E;
        for (o = c; o >= 0; o -= 1) {
          if (E = this.searchProcessedElement(e[o]), E ? t[o] = r[E - 1] : e[o]._render = a, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") E ? t[o].style.closed = e[o].hd : t[o] = this.createStyleElement(e[o], s), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), u.push(t[o].style);
          else if (e[o].ty === "gr") {
            if (!E) t[o] = this.createGroupElement(e[o]);
            else
              for (b = t[o].it.length, f = 0; f < b; f += 1) t[o].prevViewData[f] = t[o].it[f];
            this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, s + 1, l, a), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr)
          } else e[o].ty === "tr" ? (E || (t[o] = this.createTransformElement(e[o], i)), g = t[o].transform, l.push(g)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (E || (t[o] = this.createShapeElement(e[o], l, s)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (E ? (v = t[o], v.closed = !1) : (v = ShapeModifiers.getModifier(e[o].ty), v.init(this, e[o]), t[o] = v, this.shapeModifiers.push(v)), y.push(v)) : e[o].ty === "rp" && (E ? (v = t[o], v.closed = !0) : (v = ShapeModifiers.getModifier(e[o].ty), t[o] = v, v.init(this, e, o, t), this.shapeModifiers.push(v), a = !1), y.push(v));
          this.addProcessedElement(e[o], o + 1)
        }
        for (c = u.length, o = 0; o < c; o += 1) u[o].closed = !0;
        for (c = y.length, o = 0; o < c; o += 1) y[o].closed = !0
      }, SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var e, t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].reset();
        for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
      }, SVGShapeElement.prototype.renderShape = function() {
        var e, t = this.animatedContents.length,
          r;
        for (e = 0; e < t; e += 1) r = this.animatedContents[e], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
      }, SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
      };

      function LetterProps(e, t, r, i, s, n) {
        this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = s, this.p = n, this._mdf = {
          o: !0,
          sw: !!t,
          sc: !!r,
          fc: !!i,
          m: !0,
          p: !0
        }
      }
      LetterProps.prototype.update = function(e, t, r, i, s, n) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
        var a = !1;
        return this.o !== e && (this.o = e, this._mdf.o = !0, a = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, a = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, a = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = !0, a = !0), a
      };

      function TextProperty(e, t) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
      }
      TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      }, TextProperty.prototype.setCurrentData = function(e) {
        e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
      }, TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes()
      }, TextProperty.prototype.searchKeyframes = function() {
        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
      }, TextProperty.prototype.addEffect = function(e) {
        this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.getValue = function(e) {
        if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !e)) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var t = this.currentData,
            r = this.keysIndex;
          if (this.lock) {
            this.setCurrentData(this.currentData);
            return
          }
          this.lock = !0, this._mdf = !1;
          var i, s = this.effectsSequence.length,
            n = e || this.data.d.k[this.keysIndex].s;
          for (i = 0; i < s; i += 1) r !== this.keysIndex ? n = this.effectsSequence[i](n, n.t) : n = this.effectsSequence[i](this.currentData, n.t);
          t !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
        }
      }, TextProperty.prototype.getKeyframeValue = function() {
        for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
      }, TextProperty.prototype.buildFinalText = function(e) {
        for (var t = [], r = 0, i = e.length, s, n, a = !1, l = !1, o = ""; r < i;) a = l, l = !1, s = e.charCodeAt(r), o = e.charAt(r), FontManager.isCombinedCharacter(s) ? a = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(e, r) ? o = e.substr(r, 14) : (n = e.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = e.substr(r, 2), a = !0) : FontManager.isFlagEmoji(e.substr(r, 4)) ? o = e.substr(r, 4) : o = e.substr(r, 2))) : s > 56319 ? (n = e.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = !0)) : FontManager.isZeroWidthJoiner(s) && (a = !0, l = !0), a ? (t[t.length - 1] += o, a = !1) : t.push(o), r += o.length;
        return t
      }, TextProperty.prototype.completeTextData = function(e) {
        e.__complete = !0;
        var t = this.elem.globalData.fontManager,
          r = this.data,
          i = [],
          s, n, a, l = 0,
          o, c = r.m.g,
          f = 0,
          b = 0,
          u = 0,
          y = [],
          g = 0,
          v = 0,
          E, p, m = t.getFontByName(e.f),
          d, _ = 0,
          x = getFontProperties(m);
        e.fWeight = x.weight, e.fStyle = x.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), n = e.finalText.length, e.finalLineHeight = e.lh;
        var P = e.tr / 1e3 * e.finalSize,
          T;
        if (e.sz)
          for (var V = !0, B = e.sz[0], D = e.sz[1], L, N; V;) {
            N = this.buildFinalText(e.t), L = 0, g = 0, n = N.length, P = e.tr / 1e3 * e.finalSize;
            var z = -1;
            for (s = 0; s < n; s += 1) T = N[s].charCodeAt(0), a = !1, N[s] === " " ? z = s : (T === 13 || T === 3) && (g = 0, a = !0, L += e.finalLineHeight || e.finalSize * 1.2), t.chars ? (d = t.getCharData(N[s], m.fStyle, m.fFamily), _ = a ? 0 : d.w * e.finalSize / 100) : _ = t.measureText(N[s], e.f, e.finalSize), g + _ > B && N[s] !== " " ? (z === -1 ? n += 1 : s = z, L += e.finalLineHeight || e.finalSize * 1.2, N.splice(s, z === s ? 1 : 0, "\r"), z = -1, g = 0) : (g += _, g += P);
            L += m.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && D < L ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = N, n = e.finalText.length, V = !1)
          }
        g = -P, _ = 0;
        var G = 0,
          $;
        for (s = 0; s < n; s += 1)
          if (a = !1, $ = e.finalText[s], T = $.charCodeAt(0), T === 13 || T === 3 ? (G = 0, y.push(g), v = g > v ? g : v, g = -2 * P, o = "", a = !0, u += 1) : o = $, t.chars ? (d = t.getCharData($, m.fStyle, t.getFontByName(e.f).fFamily), _ = a ? 0 : d.w * e.finalSize / 100) : _ = t.measureText(o, e.f, e.finalSize), $ === " " ? G += _ + P : (g += _ + P + G, G = 0), i.push({
              l: _,
              an: _,
              add: f,
              n: a,
              anIndexes: [],
              val: o,
              line: u,
              animatorJustifyOffset: 0
            }), c == 2) {
            if (f += _, o === "" || o === " " || s === n - 1) {
              for ((o === "" || o === " ") && (f -= _); b <= s;) i[b].an = f, i[b].ind = l, i[b].extra = _, b += 1;
              l += 1, f = 0
            }
          } else if (c == 3) {
          if (f += _, o === "" || s === n - 1) {
            for (o === "" && (f -= _); b <= s;) i[b].an = f, i[b].ind = l, i[b].extra = _, b += 1;
            f = 0, l += 1
          }
        } else i[l].ind = l, i[l].extra = 0, l += 1;
        if (e.l = i, v = g > v ? g : v, y.push(g), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
        else switch (e.boxWidth = v, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0
        }
        e.lineWidths = y;
        var k = r.a,
          w, C;
        p = k.length;
        var S, F, A = [];
        for (E = 0; E < p; E += 1) {
          for (w = k[E], w.a.sc && (e.strokeColorAnim = !0), w.a.sw && (e.strokeWidthAnim = !0), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (e.fillColorAnim = !0), F = 0, S = w.s.b, s = 0; s < n; s += 1) C = i[s], C.anIndexes[E] = F, (S == 1 && C.val !== "" || S == 2 && C.val !== "" && C.val !== " " || S == 3 && (C.n || C.val == " " || s == n - 1) || S == 4 && (C.n || s == n - 1)) && (w.s.rn === 1 && A.push(F), F += 1);
          r.a[E].s.totalChars = F;
          var j = -1,
            Z;
          if (w.s.rn === 1)
            for (s = 0; s < n; s += 1) C = i[s], j != C.anIndexes[E] && (j = C.anIndexes[E], Z = A.splice(Math.floor(Math.random() * A.length), 1)[0]), C.anIndexes[E] = Z
        }
        e.yOffset = e.finalLineHeight || e.finalSize * 1.2, e.ls = e.ls || 0, e.ascent = m.ascent * e.finalSize / 100
      }, TextProperty.prototype.updateDocumentData = function(e, t) {
        t = t === void 0 ? this.keysIndex : t;
        var r = this.copyData({}, this.data.d.k[t].s);
        r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.recalculate = function(e) {
        var t = this.data.d.k[e].s;
        t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
      }, TextProperty.prototype.canResizeFont = function(e) {
        this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.setMinimumFontSize = function(e) {
        this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      };
      var TextSelectorProp = (function() {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;

        function i(n, a) {
          this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || {
            k: 0
          }, 0, 0, this), "e" in a ? this.e = PropertyFactory.getProp(n, a.e, 0, 0, this) : this.e = {
            v: 100
          }, this.o = PropertyFactory.getProp(n, a.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        i.prototype = {
          getMult: function(a) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var l = 0,
              o = 0,
              c = 1,
              f = 1;
            this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? c = 1 - this.xe.v / 100 : f = 1 + this.xe.v / 100;
            var b = BezierFactory.getBezierEasing(l, o, c, f).get,
              u = 0,
              y = this.finalS,
              g = this.finalE,
              v = this.data.sh;
            if (v === 2) g === y ? u = a >= g ? 1 : 0 : u = e(0, t(.5 / (g - y) + (a - y) / (g - y), 1)), u = b(u);
            else if (v === 3) g === y ? u = a >= g ? 0 : 1 : u = 1 - e(0, t(.5 / (g - y) + (a - y) / (g - y), 1)), u = b(u);
            else if (v === 4) g === y ? u = 0 : (u = e(0, t(.5 / (g - y) + (a - y) / (g - y), 1)), u < .5 ? u *= 2 : u = 1 - 2 * (u - .5)), u = b(u);
            else if (v === 5) {
              if (g === y) u = 0;
              else {
                var E = g - y;
                a = t(e(0, a + .5 - y), g - y);
                var p = -E / 2 + a,
                  m = E / 2;
                u = Math.sqrt(1 - p * p / (m * m))
              }
              u = b(u)
            } else v === 6 ? (g === y ? u = 0 : (a = t(e(0, a + .5 - y), g - y), u = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (g - y))) / 2), u = b(u)) : (a >= r(y) && (a - y < 0 ? u = e(0, t(t(g, 1) - (y - a), 1)) : u = e(0, t(g - a, 1))), u = b(u));
            if (this.sm.v !== 100) {
              var d = this.sm.v * .01;
              d === 0 && (d = 1e-8);
              var _ = .5 - d * .5;
              u < _ ? u = 0 : (u = (u - _) / d, u > 1 && (u = 1))
            }
            return u * this.a.v
          },
          getValue: function(a) {
            this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              o = this.o.v / l,
              c = this.s.v / l + o,
              f = this.e.v / l + o;
            if (c > f) {
              var b = c;
              c = f, f = b
            }
            this.finalS = c, this.finalE = f
          }
        }, extendPrototype([DynamicPropertyContainer], i);

        function s(n, a, l) {
          return new i(n, a)
        }
        return {
          getTextSelectorProp: s
        }
      })();

      function TextAnimatorDataProperty(e, t, r) {
        var i = {
            propType: !1
          },
          s = PropertyFactory.getProp,
          n = t.a;
        this.a = {
          r: n.r ? s(e, n.r, 0, degToRads, r) : i,
          rx: n.rx ? s(e, n.rx, 0, degToRads, r) : i,
          ry: n.ry ? s(e, n.ry, 0, degToRads, r) : i,
          sk: n.sk ? s(e, n.sk, 0, degToRads, r) : i,
          sa: n.sa ? s(e, n.sa, 0, degToRads, r) : i,
          s: n.s ? s(e, n.s, 1, .01, r) : i,
          a: n.a ? s(e, n.a, 1, 0, r) : i,
          o: n.o ? s(e, n.o, 0, .01, r) : i,
          p: n.p ? s(e, n.p, 1, 0, r) : i,
          sw: n.sw ? s(e, n.sw, 0, 0, r) : i,
          sc: n.sc ? s(e, n.sc, 1, 0, r) : i,
          fc: n.fc ? s(e, n.fc, 1, 0, r) : i,
          fh: n.fh ? s(e, n.fh, 0, 0, r) : i,
          fs: n.fs ? s(e, n.fs, 0, .01, r) : i,
          fb: n.fb ? s(e, n.fb, 0, .01, r) : i,
          t: n.t ? s(e, n.t, 0, 0, r) : i
        }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
      }

      function TextAnimatorProperty(e, t, r) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
          alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
      }
      TextAnimatorProperty.prototype.searchProperties = function() {
        var e, t = this._textData.a.length,
          r, i = PropertyFactory.getProp;
        for (e = 0; e < t; e += 1) r = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, r, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
          a: i(this._elem, this._textData.p.a, 0, 0, this),
          f: i(this._elem, this._textData.p.f, 0, 0, this),
          l: i(this._elem, this._textData.p.l, 0, 0, this),
          r: i(this._elem, this._textData.p.r, 0, 0, this),
          p: i(this._elem, this._textData.p.p, 0, 0, this),
          m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
      }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
        if (this.lettersChangedFlag = t, !(!this._mdf && !this._isFirstFrame && !t && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
          this._isFirstFrame = !1;
          var r = this._moreOptions.alignment.v,
            i = this._animatorsData,
            s = this._textData,
            n = this.mHelper,
            a = this._renderType,
            l = this.renderedLetters.length,
            o, c, f, b, u = e.l,
            y, g, v, E, p, m, d, _, x, P, T, V, B, D, L;
          if (this._hasMaskedPath) {
            if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var N = L.v;
              this._pathData.r.v && (N = N.reverse()), y = {
                tLength: 0,
                segments: []
              }, b = N._length - 1;
              var z;
              for (V = 0, f = 0; f < b; f += 1) z = bez.buildBezierData(N.v[f], N.v[f + 1], [N.o[f][0] - N.v[f][0], N.o[f][1] - N.v[f][1]], [N.i[f + 1][0] - N.v[f + 1][0], N.i[f + 1][1] - N.v[f + 1][1]]), y.tLength += z.segmentLength, y.segments.push(z), V += z.segmentLength;
              f = b, L.v.c && (z = bez.buildBezierData(N.v[f], N.v[0], [N.o[f][0] - N.v[f][0], N.o[f][1] - N.v[f][1]], [N.i[0][0] - N.v[0][0], N.i[0][1] - N.v[0][1]]), y.tLength += z.segmentLength, y.segments.push(z), V += z.segmentLength), this._pathData.pi = y
            }
            if (y = this._pathData.pi, g = this._pathData.f.v, d = 0, m = 1, E = 0, p = !0, P = y.segments, g < 0 && L.v.c)
              for (y.tLength < Math.abs(g) && (g = -Math.abs(g) % y.tLength), d = P.length - 1, x = P[d].points, m = x.length - 1; g < 0;) g += x[m].partialLength, m -= 1, m < 0 && (d -= 1, x = P[d].points, m = x.length - 1);
            x = P[d].points, _ = x[m - 1], v = x[m], T = v.partialLength
          }
          b = u.length, o = 0, c = 0;
          var G = e.finalSize * 1.2 * .714,
            $ = !0,
            k, w, C, S, F;
          S = i.length;
          var A, j = -1,
            Z, q, ee, R = g,
            U = d,
            X = m,
            Q = -1,
            ne, re, ie, te, W, Ce, ge, ye, de = "",
            ce = this.defaultPropsArray,
            le;
          if (e.j === 2 || e.j === 1) {
            var he = 0,
              xe = 0,
              _e = e.j === 2 ? -.5 : -1,
              me = 0,
              Se = !0;
            for (f = 0; f < b; f += 1)
              if (u[f].n) {
                for (he && (he += xe); me < f;) u[me].animatorJustifyOffset = he, me += 1;
                he = 0, Se = !0
              } else {
                for (C = 0; C < S; C += 1) k = i[C].a, k.t.propType && (Se && e.j === 2 && (xe += k.t.v * _e), w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), A.length ? he += k.t.v * A[0] * _e : he += k.t.v * A * _e);
                Se = !1
              } for (he && (he += xe); me < f;) u[me].animatorJustifyOffset = he, me += 1
          }
          for (f = 0; f < b; f += 1) {
            if (n.reset(), ne = 1, u[f].n) o = 0, c += e.yOffset, c += $ ? 1 : 0, g = R, $ = !1, this._hasMaskedPath && (d = U, m = X, x = P[d].points, _ = x[m - 1], v = x[m], T = v.partialLength, E = 0), de = "", ye = "", Ce = "", le = "", ce = this.defaultPropsArray;
            else {
              if (this._hasMaskedPath) {
                if (Q !== u[f].line) {
                  switch (e.j) {
                    case 1:
                      g += V - e.lineWidths[u[f].line];
                      break;
                    case 2:
                      g += (V - e.lineWidths[u[f].line]) / 2;
                      break
                  }
                  Q = u[f].line
                }
                j !== u[f].ind && (u[j] && (g += u[j].extra), g += u[f].an / 2, j = u[f].ind), g += r[0] * u[f].an * .005;
                var pe = 0;
                for (C = 0; C < S; C += 1) k = i[C].a, k.p.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), A.length ? pe += k.p.v[0] * A[0] : pe += k.p.v[0] * A), k.a.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), A.length ? pe += k.a.v[0] * A[0] : pe += k.a.v[0] * A);
                for (p = !0, this._pathData.a.v && (g = u[0].an * .5 + (V - this._pathData.f.v - u[0].an * .5 - u[u.length - 1].an * .5) * j / (b - 1), g += this._pathData.f.v); p;) E + T >= g + pe || !x ? (B = (g + pe - E) / v.partialLength, q = _.point[0] + (v.point[0] - _.point[0]) * B, ee = _.point[1] + (v.point[1] - _.point[1]) * B, n.translate(-r[0] * u[f].an * .005, -(r[1] * G) * .01), p = !1) : x && (E += v.partialLength, m += 1, m >= x.length && (m = 0, d += 1, P[d] ? x = P[d].points : L.v.c ? (m = 0, d = 0, x = P[d].points) : (E -= v.partialLength, x = null)), x && (_ = v, v = x[m], T = v.partialLength));
                Z = u[f].an / 2 - u[f].add, n.translate(-Z, 0, 0)
              } else Z = u[f].an / 2 - u[f].add, n.translate(-Z, 0, 0), n.translate(-r[0] * u[f].an * .005, -r[1] * G * .01, 0);
              for (C = 0; C < S; C += 1) k = i[C].a, k.t.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), (o !== 0 || e.j !== 0) && (this._hasMaskedPath ? A.length ? g += k.t.v * A[0] : g += k.t.v * A : A.length ? o += k.t.v * A[0] : o += k.t.v * A));
              for (e.strokeWidthAnim && (ie = e.sw || 0), e.strokeColorAnim && (e.sc ? re = [e.sc[0], e.sc[1], e.sc[2]] : re = [0, 0, 0]), e.fillColorAnim && e.fc && (te = [e.fc[0], e.fc[1], e.fc[2]]), C = 0; C < S; C += 1) k = i[C].a, k.a.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), A.length ? n.translate(-k.a.v[0] * A[0], -k.a.v[1] * A[1], k.a.v[2] * A[2]) : n.translate(-k.a.v[0] * A, -k.a.v[1] * A, k.a.v[2] * A));
              for (C = 0; C < S; C += 1) k = i[C].a, k.s.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), A.length ? n.scale(1 + (k.s.v[0] - 1) * A[0], 1 + (k.s.v[1] - 1) * A[1], 1) : n.scale(1 + (k.s.v[0] - 1) * A, 1 + (k.s.v[1] - 1) * A, 1));
              for (C = 0; C < S; C += 1) {
                if (k = i[C].a, w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), k.sk.propType && (A.length ? n.skewFromAxis(-k.sk.v * A[0], k.sa.v * A[1]) : n.skewFromAxis(-k.sk.v * A, k.sa.v * A)), k.r.propType && (A.length ? n.rotateZ(-k.r.v * A[2]) : n.rotateZ(-k.r.v * A)), k.ry.propType && (A.length ? n.rotateY(k.ry.v * A[1]) : n.rotateY(k.ry.v * A)), k.rx.propType && (A.length ? n.rotateX(k.rx.v * A[0]) : n.rotateX(k.rx.v * A)), k.o.propType && (A.length ? ne += (k.o.v * A[0] - ne) * A[0] : ne += (k.o.v * A - ne) * A), e.strokeWidthAnim && k.sw.propType && (A.length ? ie += k.sw.v * A[0] : ie += k.sw.v * A), e.strokeColorAnim && k.sc.propType)
                  for (W = 0; W < 3; W += 1) A.length ? re[W] += (k.sc.v[W] - re[W]) * A[0] : re[W] += (k.sc.v[W] - re[W]) * A;
                if (e.fillColorAnim && e.fc) {
                  if (k.fc.propType)
                    for (W = 0; W < 3; W += 1) A.length ? te[W] += (k.fc.v[W] - te[W]) * A[0] : te[W] += (k.fc.v[W] - te[W]) * A;
                  k.fh.propType && (A.length ? te = addHueToRGB(te, k.fh.v * A[0]) : te = addHueToRGB(te, k.fh.v * A)), k.fs.propType && (A.length ? te = addSaturationToRGB(te, k.fs.v * A[0]) : te = addSaturationToRGB(te, k.fs.v * A)), k.fb.propType && (A.length ? te = addBrightnessToRGB(te, k.fb.v * A[0]) : te = addBrightnessToRGB(te, k.fb.v * A))
                }
              }
              for (C = 0; C < S; C += 1) k = i[C].a, k.p.propType && (w = i[C].s, A = w.getMult(u[f].anIndexes[C], s.a[C].s.totalChars), this._hasMaskedPath ? A.length ? n.translate(0, k.p.v[1] * A[0], -k.p.v[2] * A[1]) : n.translate(0, k.p.v[1] * A, -k.p.v[2] * A) : A.length ? n.translate(k.p.v[0] * A[0], k.p.v[1] * A[1], -k.p.v[2] * A[2]) : n.translate(k.p.v[0] * A, k.p.v[1] * A, -k.p.v[2] * A));
              if (e.strokeWidthAnim && (Ce = ie < 0 ? 0 : ie), e.strokeColorAnim && (ge = "rgb(" + Math.round(re[0] * 255) + "," + Math.round(re[1] * 255) + "," + Math.round(re[2] * 255) + ")"), e.fillColorAnim && e.fc && (ye = "rgb(" + Math.round(te[0] * 255) + "," + Math.round(te[1] * 255) + "," + Math.round(te[2] * 255) + ")"), this._hasMaskedPath) {
                if (n.translate(0, -e.ls), n.translate(0, r[1] * G * .01 + c, 0), this._pathData.p.v) {
                  D = (v.point[1] - _.point[1]) / (v.point[0] - _.point[0]);
                  var Ee = Math.atan(D) * 180 / Math.PI;
                  v.point[0] < _.point[0] && (Ee += 180), n.rotate(-Ee * Math.PI / 180)
                }
                n.translate(q, ee, 0), g -= r[0] * u[f].an * .005, u[f + 1] && j !== u[f + 1].ind && (g += u[f].an / 2, g += e.tr * .001 * e.finalSize)
              } else {
                switch (n.translate(o, c, 0), e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                  case 1:
                    n.translate(u[f].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[u[f].line]), 0, 0);
                    break;
                  case 2:
                    n.translate(u[f].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[u[f].line]) / 2, 0, 0);
                    break
                }
                n.translate(0, -e.ls), n.translate(Z, 0, 0), n.translate(r[0] * u[f].an * .005, r[1] * G * .01, 0), o += u[f].l + e.tr * .001 * e.finalSize
              }
              a === "html" ? de = n.toCSS() : a === "svg" ? de = n.to2dCSS() : ce = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], le = ne
            }
            l <= f ? (F = new LetterProps(le, Ce, ge, ye, de, ce), this.renderedLetters.push(F), l += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[f], this.lettersChangedFlag = F.update(le, Ce, ge, ye, de, ce) || this.lettersChangedFlag)
          }
        }
      }, TextAnimatorProperty.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
      }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

      function ITextElement() {}
      ITextElement.prototype.initElement = function(e, t, r) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
      }, ITextElement.prototype.prepareFrame = function(e) {
        this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
      }, ITextElement.prototype.createPathShape = function(e, t) {
        var r, i = t.length,
          s, n = "";
        for (r = 0; r < i; r += 1) t[r].ty === "sh" && (s = t[r].ks.k, n += buildShapeString(s, s.i.length, !0, e));
        return n
      }, ITextElement.prototype.updateDocumentData = function(e, t) {
        this.textProperty.updateDocumentData(e, t)
      }, ITextElement.prototype.canResizeFont = function(e) {
        this.textProperty.canResizeFont(e)
      }, ITextElement.prototype.setMinimumFontSize = function(e) {
        this.textProperty.setMinimumFontSize(e)
      }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, i, s) {
        switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
          case 1:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
            break;
          case 2:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0);
            break
        }
        t.translate(i, s, 0)
      }, ITextElement.prototype.buildColor = function(e) {
        return "rgb(" + Math.round(e[0] * 255) + "," + Math.round(e[1] * 255) + "," + Math.round(e[2] * 255) + ")"
      }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
      };
      var emptyShapeData = {
        shapes: []
      };

      function SVGTextLottieElement(e, t, r) {
        this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
      }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
        for (var t = 0, r = e.length, i = [], s = ""; t < r;) e[t] === "\r" || e[t] === "" ? (i.push(s), s = "") : s += e[t], t += 1;
        return i.push(s), i
      }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
        if (e.shapes && e.shapes.length) {
          var r = e.shapes[0];
          if (r.it) {
            var i = r.it[r.it.length - 1];
            i.s && (i.s.k[0] = t, i.s.k[1] = t)
          }
        }
        return e
      }, SVGTextLottieElement.prototype.buildNewText = function() {
        this.addDynamicProperty(this);
        var e, t, r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
        var i = this.globalData.fontManager.getFontByName(r.f);
        if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
        else {
          this.layerElement.setAttribute("font-family", i.fFamily);
          var s = r.fWeight,
            n = r.fStyle;
          this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var a = r.l || [],
          l = !!this.globalData.fontManager.chars;
        t = a.length;
        var o, c = this.mHelper,
          f = "",
          b = this.data.singleShape,
          u = 0,
          y = 0,
          g = !0,
          v = r.tr * .001 * r.finalSize;
        if (b && !l && !r.sz) {
          var E = this.textContainer,
            p = "start";
          switch (r.j) {
            case 1:
              p = "end";
              break;
            case 2:
              p = "middle";
              break;
            default:
              p = "start";
              break
          }
          E.setAttribute("text-anchor", p), E.setAttribute("letter-spacing", v);
          var m = this.buildTextContents(r.finalText);
          for (t = m.length, y = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1) o = this.textSpans[e].span || createNS("tspan"), o.textContent = m[e], o.setAttribute("x", 0), o.setAttribute("y", y), o.style.display = "inherit", E.appendChild(o), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = o, y += r.finalLineHeight;
          this.layerElement.appendChild(E)
        } else {
          var d = this.textSpans.length,
            _;
          for (e = 0; e < t; e += 1) {
            if (this.textSpans[e] || (this.textSpans[e] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !l || !b || e === 0) {
              if (o = d > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), d <= e) {
                if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = o, l) {
                  var x = createNS("g");
                  o.appendChild(x), this.textSpans[e].childSpan = x
                }
                this.textSpans[e].span = o, this.layerElement.appendChild(o)
              }
              o.style.display = "inherit"
            }
            if (c.reset(), b && (a[e].n && (u = -v, y += r.yOffset, y += g ? 1 : 0, g = !1), this.applyTextPropertiesToMatrix(r, c, a[e].line, u, y), u += a[e].l || 0, u += v), l) {
              _ = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
              var P;
              if (_.t === 1) P = new SVGCompElement(_.data, this.globalData, this);
              else {
                var T = emptyShapeData;
                _.data && _.data.shapes && (T = this.buildShapeData(_.data, r.finalSize)), P = new SVGShapeElement(T, this.globalData, this)
              }
              if (this.textSpans[e].glyph) {
                var V = this.textSpans[e].glyph;
                this.textSpans[e].childSpan.removeChild(V.layerElement), V.destroy()
              }
              this.textSpans[e].glyph = P, P._debug = !0, P.prepareFrame(0), P.renderFrame(), this.textSpans[e].childSpan.appendChild(P.layerElement), _.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
            } else b && o.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), o.textContent = a[e].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }
          b && o && o.setAttribute("d", f)
        }
        for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
        this._sizeChanged = !0
      }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
          this._sizeChanged = !1;
          var e = this.layerElement.getBBox();
          this.bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height
          }
        }
        return this.bbox
      }, SVGTextLottieElement.prototype.getValue = function() {
        var e, t = this.textSpans.length,
          r;
        for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < t; e += 1) r = this.textSpans[e].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
      }, SVGTextLottieElement.prototype.renderInnerContent = function() {
        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          this._sizeChanged = !0;
          var e, t, r = this.textAnimator.renderedLetters,
            i = this.textProperty.currentData.l;
          t = i.length;
          var s, n, a;
          for (e = 0; e < t; e += 1) i[e].n || (s = r[e], n = this.textSpans[e].span, a = this.textSpans[e].glyph, a && a.renderFrame(), s._mdf.m && n.setAttribute("transform", s.m), s._mdf.o && n.setAttribute("opacity", s.o), s._mdf.sw && n.setAttribute("stroke-width", s.sw), s._mdf.sc && n.setAttribute("stroke", s.sc), s._mdf.fc && n.setAttribute("fill", s.fc))
        }
      };

      function ISolidElement(e, t, r) {
        this.initElement(e, t, r)
      }
      extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
        var e = createNS("rect");
        e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
      };

      function NullElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
      }
      NullElement.prototype.prepareFrame = function(e) {
        this.prepareProperties(e, !0)
      }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
        return null
      }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

      function SVGRendererBase() {}
      extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
        return new NullElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createShape = function(e) {
        return new SVGShapeElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createText = function(e) {
        return new SVGTextLottieElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createImage = function(e) {
        return new IImageElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createSolid = function(e) {
        return new ISolidElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.configAnimation = function(e) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var t = this.globalData.defs;
        this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
        var r = createNS("clipPath"),
          i = createNS("rect");
        i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
        var s = createElementID();
        r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
      }, SVGRendererBase.prototype.destroy = function() {
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
        var e, t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
        var t = 0,
          r = this.layers.length;
        for (t = 0; t < r; t += 1)
          if (this.layers[t].ind === e) return t;
        return -1
      }, SVGRendererBase.prototype.buildItem = function(e) {
        var t = this.elements;
        if (!(t[e] || this.layers[e].ty === 99)) {
          t[e] = !0;
          var r = this.createItem(this.layers[e]);
          if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
            var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
            if (i === -1) return;
            if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(r);
            else {
              var s = t[i],
                n = s.getMatte(this.layers[e].tt);
              r.setMatte(n)
            }
          }
        }
      }, SVGRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          if (e.checkParenting(), e.data.tt)
            for (var t = 0, r = this.elements.length; t < r;) {
              if (this.elements[t] === e) {
                var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                  s = this.elements[i],
                  n = s.getMatte(this.layers[t].tt);
                e.setMatte(n);
                break
              }
              t += 1
            }
        }
      }, SVGRendererBase.prototype.renderFrame = function(e) {
        if (!(this.renderedFrame === e || this.destroyed)) {
          e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
          var t, r = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
          if (this.globalData._mdf)
            for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
      }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
        var r = e.getBaseElement();
        if (r) {
          for (var i = 0, s; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
          s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
        }
      }, SVGRendererBase.prototype.hide = function() {
        this.layerElement.style.display = "none"
      }, SVGRendererBase.prototype.show = function() {
        this.layerElement.style.display = "block"
      };

      function ICompElement() {}
      extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !t.progressiveLoad) && this.buildAllItems(), this.hide()
      }, ICompElement.prototype.prepareFrame = function(e) {
        if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), !(!this.isInRange && !this.data.xt)) {
          if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
          else {
            var t = this.tm.v;
            t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
          }
          var r, i = this.elements.length;
          for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
        }
      }, ICompElement.prototype.renderInnerContent = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, ICompElement.prototype.setElements = function(e) {
        this.elements = e
      }, ICompElement.prototype.getElements = function() {
        return this.elements
      }, ICompElement.prototype.destroyElements = function() {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
      }, ICompElement.prototype.destroy = function() {
        this.destroyElements(), this.destroyBaseElement()
      };

      function SVGCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }
      extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
        return new SVGCompElement(e, this.globalData, this)
      };

      function SVGRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r = "";
        if (t && t.title) {
          var i = createNS("title"),
            s = createElementID();
          i.setAttribute("id", s), i.textContent = t.title, this.svgElement.appendChild(i), r += s
        }
        if (t && t.description) {
          var n = createNS("desc"),
            a = createElementID();
          n.setAttribute("id", a), n.textContent = t.description, this.svgElement.appendChild(n), r += " " + a
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var l = createNS("defs");
        this.svgElement.appendChild(l);
        var o = createNS("g");
        this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          progressiveLoad: t && t.progressiveLoad || !1,
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          viewBoxOnly: t && t.viewBoxOnly || !1,
          viewBoxSize: t && t.viewBoxSize || !1,
          className: t && t.className || "",
          id: t && t.id || "",
          focusable: t && t.focusable,
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "100%",
            height: t && t.filterSize && t.filterSize.height || "100%",
            x: t && t.filterSize && t.filterSize.x || "0%",
            y: t && t.filterSize && t.filterSize.y || "0%"
          },
          width: t && t.width,
          height: t && t.height,
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: l,
          renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
      }
      extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
        return new SVGCompElement(e, this.globalData, this)
      };

      function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function(t) {
          var r, i = t.length,
            s = "_";
          for (r = 0; r < i; r += 1) s += t[r].transform.key + "_";
          var n = this.sequences[s];
          return n || (n = {
            transforms: [].concat(t),
            finalTransform: new Matrix,
            _mdf: !1
          }, this.sequences[s] = n, this.sequenceList.push(n)), n
        },
        processSequence: function(t, r) {
          for (var i = 0, s = t.transforms.length, n = r; i < s && !r;) {
            if (t.transforms[i].transform.mProps._mdf) {
              n = !0;
              break
            }
            i += 1
          }
          if (n)
            for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
          t._mdf = n
        },
        processSequences: function(t) {
          var r, i = this.sequenceList.length;
          for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], t)
        },
        getNewKey: function() {
          return this.transform_key_count += 1, "_" + this.transform_key_count
        }
      };
      var lumaLoader = function() {
        var t = "__lottie_element_luma_buffer",
          r = null,
          i = null,
          s = null;

        function n() {
          var o = createNS("svg"),
            c = createNS("filter"),
            f = createNS("feColorMatrix");
          return c.setAttribute("id", t), f.setAttribute("type", "matrix"), f.setAttribute("color-interpolation-filters", "sRGB"), f.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), c.appendChild(f), o.appendChild(c), o.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o
        }

        function a() {
          r || (s = n(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
        }

        function l(o) {
          return r || a(), r.width = o.width, r.height = o.height, i.filter = "url(#" + t + ")", r
        }
        return {
          load: a,
          get: l
        }
      };

      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return r.width = e, r.height = t, r
      }
      var assetLoader = (function() {
          return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          }
        })(),
        registeredEffects = {};

      function CVEffects(e) {
        var t, r = e.data.ef ? e.data.ef.length : 0;
        this.filters = [];
        var i;
        for (t = 0; t < r; t += 1) {
          i = null;
          var s = e.data.ef[t].ty;
          if (registeredEffects[s]) {
            var n = registeredEffects[s].effect;
            i = new n(e.effectsManager.effectElements[t], e)
          }
          i && this.filters.push(i)
        }
        this.filters.length && e.addRenderableComponent(this)
      }
      CVEffects.prototype.renderFrame = function(e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, CVEffects.prototype.getEffects = function(e) {
        var t, r = this.filters.length,
          i = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
        return i
      };

      function registerEffect(e, t) {
        registeredEffects[e] = {
          effect: t
        }
      }

      function CVMaskElement(e, t) {
        this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var r, i = this.masksProperties.length,
          s = !1;
        for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        this.hasMasks = s, s && this.element.addRenderableComponent(this)
      }
      CVMaskElement.prototype.renderFrame = function() {
        if (this.hasMasks) {
          var e = this.element.finalTransform.mat,
            t = this.element.canvasContext,
            r, i = this.masksProperties.length,
            s, n, a;
          for (t.beginPath(), r = 0; r < i; r += 1)
            if (this.masksProperties[r].mode !== "n") {
              this.masksProperties[r].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), a = this.viewData[r].v, s = e.applyToPointArray(a.v[0][0], a.v[0][1], 0), t.moveTo(s[0], s[1]);
              var l, o = a._length;
              for (l = 1; l < o; l += 1) n = e.applyToTriplePoints(a.o[l - 1], a.i[l], a.v[l]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
              n = e.applyToTriplePoints(a.o[l - 1], a.i[0], a.v[0]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
            } this.element.globalData.renderer.save(!0), t.clip()
        }
      }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
        this.element = null
      };

      function CVBaseElement() {}
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
      };
      CVBaseElement.prototype = {
        createElements: function() {},
        initRendererElement: function() {},
        createContainerElements: function() {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var t = this.globalData.canvasContext,
              r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(r);
            var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
          }
          this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
        },
        createContent: function() {},
        setBlendMode: function() {
          var t = this.globalData;
          if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var r = getBlendMode(this.data.bm);
            t.canvasContext.globalCompositeOperation = r
          }
        },
        createRenderableComponents: function() {
          this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
        },
        hideElement: function() {
          !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
        },
        showElement: function() {
          this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
        },
        clearCanvas: function(t) {
          t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
        },
        prepareLayer: function() {
          if (this.data.tt >= 1) {
            var t = this.buffers[0],
              r = t.getContext("2d");
            this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
          }
        },
        exitLayer: function() {
          if (this.data.tt >= 1) {
            var t = this.buffers[1],
              r = t.getContext("2d");
            this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
            var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
            if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
              var s = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                n = s.getContext("2d");
              n.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
            }
            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
          }
        },
        renderFrame: function(t) {
          if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
            var r = this.data.ty === 0;
            this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
          }
        },
        destroy: function() {
          this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
        },
        mHelper: new Matrix
      }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

      function CVShapeData(e, t, r, i) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var s = 4;
        t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, s, e);
        var n, a = r.length,
          l;
        for (n = 0; n < a; n += 1) r[n].closed || (l = {
          transforms: i.addTransformSequence(r[n].transforms),
          trNodes: []
        }, this.styledShapes.push(l), r[n].elements.push(l))
      }
      CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

      function CVShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
      }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
      }, CVShapeElement.prototype.createStyleElement = function(e, t) {
        var r = {
            data: e,
            type: e.ty,
            preTransforms: this.transformsManager.addTransformSequence(t),
            transforms: [],
            elements: [],
            closed: e.hd === !0
          },
          i = {};
        if (e.ty === "fl" || e.ty === "st" ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (e.ty === "gf" || e.ty === "gs") && (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
            k: 0
          }, 0, .01, this), i.a = PropertyFactory.getProp(this, e.a || {
            k: 0
          }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
          if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
            var s = new DashProperty(this, e.d, "canvas", this);
            i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
          }
        } else r.r = e.r === 2 ? "evenodd" : "nonzero";
        return this.stylesList.push(r), i.style = r, i
      }, CVShapeElement.prototype.createGroupElement = function() {
        var e = {
          it: [],
          prevViewData: []
        };
        return e
      }, CVShapeElement.prototype.createTransformElement = function(e) {
        var t = {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, e.o, 0, .01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
          }
        };
        return t
      }, CVShapeElement.prototype.createShapeElement = function(e) {
        var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
        return this.shapes.push(t), this.addShapeToModifiers(t), t
      }, CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var e, t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
      }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
        var t, r = this.stylesList.length;
        for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
      }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var e, t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
      }, CVShapeElement.prototype.closeStyles = function(e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].closed = !0
      }, CVShapeElement.prototype.searchShapes = function(e, t, r, i, s) {
        var n, a = e.length - 1,
          l, o, c = [],
          f = [],
          b, u, y, g = [].concat(s);
        for (n = a; n >= 0; n -= 1) {
          if (b = this.searchProcessedElement(e[n]), b ? t[n] = r[b - 1] : e[n]._shouldRender = i, e[n].ty === "fl" || e[n].ty === "st" || e[n].ty === "gf" || e[n].ty === "gs") b ? t[n].style.closed = !1 : t[n] = this.createStyleElement(e[n], g), c.push(t[n].style);
          else if (e[n].ty === "gr") {
            if (!b) t[n] = this.createGroupElement(e[n]);
            else
              for (o = t[n].it.length, l = 0; l < o; l += 1) t[n].prevViewData[l] = t[n].it[l];
            this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, i, g)
          } else e[n].ty === "tr" ? (b || (y = this.createTransformElement(e[n]), t[n] = y), g.push(t[n]), this.addTransformToStyleList(t[n])) : e[n].ty === "sh" || e[n].ty === "rc" || e[n].ty === "el" || e[n].ty === "sr" ? b || (t[n] = this.createShapeElement(e[n])) : e[n].ty === "tm" || e[n].ty === "rd" || e[n].ty === "pb" || e[n].ty === "zz" || e[n].ty === "op" ? (b ? (u = t[n], u.closed = !1) : (u = ShapeModifiers.getModifier(e[n].ty), u.init(this, e[n]), t[n] = u, this.shapeModifiers.push(u)), f.push(u)) : e[n].ty === "rp" && (b ? (u = t[n], u.closed = !0) : (u = ShapeModifiers.getModifier(e[n].ty), t[n] = u, u.init(this, e, n, t), this.shapeModifiers.push(u), i = !1), f.push(u));
          this.addProcessedElement(e[n], n + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(c), a = f.length, n = 0; n < a; n += 1) f[n].closed = !0
      }, CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
      }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
        (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
      }, CVShapeElement.prototype.drawLayer = function() {
        var e, t = this.stylesList.length,
          r, i, s, n, a, l, o = this.globalData.renderer,
          c = this.globalData.canvasContext,
          f, b;
        for (e = 0; e < t; e += 1)
          if (b = this.stylesList[e], f = b.type, !((f === "st" || f === "gs") && b.wi === 0 || !b.data._shouldRender || b.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
            for (o.save(), a = b.elements, f === "st" || f === "gs" ? (o.ctxStrokeStyle(f === "st" ? b.co : b.grd), o.ctxLineWidth(b.wi), o.ctxLineCap(b.lc), o.ctxLineJoin(b.lj), o.ctxMiterLimit(b.ml || 0)) : o.ctxFillStyle(f === "fl" ? b.co : b.grd), o.ctxOpacity(b.coOp), f !== "st" && f !== "gs" && c.beginPath(), o.ctxTransform(b.preTransforms.finalTransform.props), i = a.length, r = 0; r < i; r += 1) {
              for ((f === "st" || f === "gs") && (c.beginPath(), b.da && (c.setLineDash(b.da), c.lineDashOffset = b.do)), l = a[r].trNodes, n = l.length, s = 0; s < n; s += 1) l[s].t === "m" ? c.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? c.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : c.closePath();
              (f === "st" || f === "gs") && (o.ctxStroke(), b.da && c.setLineDash(this.dashResetter))
            }
            f !== "st" && f !== "gs" && this.globalData.renderer.ctxFill(b.r), o.restore()
          }
      }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
        var s, n = t.length - 1,
          a;
        for (a = e, s = n; s >= 0; s -= 1) t[s].ty === "tr" ? (a = r[s].transform, this.renderShapeTransform(e, a)) : t[s].ty === "sh" || t[s].ty === "el" || t[s].ty === "rc" || t[s].ty === "sr" ? this.renderPath(t[s], r[s]) : t[s].ty === "fl" ? this.renderFill(t[s], r[s], a) : t[s].ty === "st" ? this.renderStroke(t[s], r[s], a) : t[s].ty === "gf" || t[s].ty === "gs" ? this.renderGradientFill(t[s], r[s], a) : t[s].ty === "gr" ? this.renderShape(a, t[s].it, r[s].it) : t[s].ty;
        i && this.drawLayer()
      }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
        if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
          var r = e.trNodes,
            i = t.paths,
            s, n, a, l = i._length;
          r.length = 0;
          var o = e.transforms.finalTransform;
          for (a = 0; a < l; a += 1) {
            var c = i.shapes[a];
            if (c && c.v) {
              for (n = c._length, s = 1; s < n; s += 1) s === 1 && r.push({
                t: "m",
                p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0)
              }), r.push({
                t: "c",
                pts: o.applyToTriplePoints(c.o[s - 1], c.i[s], c.v[s])
              });
              n === 1 && r.push({
                t: "m",
                p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0)
              }), c.c && n && (r.push({
                t: "c",
                pts: o.applyToTriplePoints(c.o[s - 1], c.i[0], c.v[0])
              }), r.push({
                t: "z"
              }))
            }
          }
          e.trNodes = r
        }
      }, CVShapeElement.prototype.renderPath = function(e, t) {
        if (e.hd !== !0 && e._shouldRender) {
          var r, i = t.styledShapes.length;
          for (r = 0; r < i; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
        }
      }, CVShapeElement.prototype.renderFill = function(e, t, r) {
        var i = t.style;
        (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity)
      }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
        var i = t.style,
          s;
        if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
          var n = this.globalData.canvasContext,
            a = t.s.v,
            l = t.e.v;
          if (e.t === 1) s = n.createLinearGradient(a[0], a[1], l[0], l[1]);
          else {
            var o = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)),
              c = Math.atan2(l[1] - a[1], l[0] - a[0]),
              f = t.h.v;
            f >= 1 ? f = .99 : f <= -1 && (f = -.99);
            var b = o * f,
              u = Math.cos(c + t.a.v) * b + a[0],
              y = Math.sin(c + t.a.v) * b + a[1];
            s = n.createRadialGradient(u, y, 0, a[0], a[1], o)
          }
          var g, v = e.g.p,
            E = t.g.c,
            p = 1;
          for (g = 0; g < v; g += 1) t.g._hasOpacity && t.g._collapsable && (p = t.g.o[g * 2 + 1]), s.addColorStop(E[g * 4] / 100, "rgba(" + E[g * 4 + 1] + "," + E[g * 4 + 2] + "," + E[g * 4 + 3] + "," + p + ")");
          i.grd = s
        }
        i.coOp = t.o.v * r.opacity
      }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
        var i = t.style,
          s = t.d;
        s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v)
      }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
      };

      function CVTextElement(e, t, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        }, this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = !1;
        e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
        var r = !1;
        e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
        var i = this.globalData.fontManager.getFontByName(e.f),
          s, n, a = e.l,
          l = this.mHelper;
        this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
        var o, c, f, b, u, y, g, v, E, p, m = this.data.singleShape,
          d = e.tr * .001 * e.finalSize,
          _ = 0,
          x = 0,
          P = !0,
          T = 0;
        for (s = 0; s < n; s += 1) {
          o = this.globalData.fontManager.getCharData(e.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), c = o && o.data || {}, l.reset(), m && a[s].n && (_ = -d, x += e.yOffset, x += P ? 1 : 0, P = !1), u = c.shapes ? c.shapes[0].it : [], g = u.length, l.scale(e.finalSize / 100, e.finalSize / 100), m && this.applyTextPropertiesToMatrix(e, l, a[s].line, _, x), E = createSizedArray(g - 1);
          var V = 0;
          for (y = 0; y < g; y += 1)
            if (u[y].ty === "sh") {
              for (b = u[y].ks.k.i.length, v = u[y].ks.k, p = [], f = 1; f < b; f += 1) f === 1 && p.push(l.applyToX(v.v[0][0], v.v[0][1], 0), l.applyToY(v.v[0][0], v.v[0][1], 0)), p.push(l.applyToX(v.o[f - 1][0], v.o[f - 1][1], 0), l.applyToY(v.o[f - 1][0], v.o[f - 1][1], 0), l.applyToX(v.i[f][0], v.i[f][1], 0), l.applyToY(v.i[f][0], v.i[f][1], 0), l.applyToX(v.v[f][0], v.v[f][1], 0), l.applyToY(v.v[f][0], v.v[f][1], 0));
              p.push(l.applyToX(v.o[f - 1][0], v.o[f - 1][1], 0), l.applyToY(v.o[f - 1][0], v.o[f - 1][1], 0), l.applyToX(v.i[0][0], v.i[0][1], 0), l.applyToY(v.i[0][0], v.i[0][1], 0), l.applyToX(v.v[0][0], v.v[0][1], 0), l.applyToY(v.v[0][0], v.v[0][1], 0)), E[V] = p, V += 1
            } m && (_ += a[s].l, _ += d), this.textSpans[T] ? this.textSpans[T].elem = E : this.textSpans[T] = {
            elem: E
          }, T += 1
        }
      }, CVTextElement.prototype.renderInnerContent = function() {
        this.validateText();
        var e = this.canvasContext;
        e.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var t, r, i, s, n, a, l = this.textAnimator.renderedLetters,
          o = this.textProperty.currentData.l;
        r = o.length;
        var c, f = null,
          b = null,
          u = null,
          y, g, v = this.globalData.renderer;
        for (t = 0; t < r; t += 1)
          if (!o[t].n) {
            if (c = l[t], c && (v.save(), v.ctxTransform(c.p), v.ctxOpacity(c.o)), this.fill) {
              for (c && c.fc ? f !== c.fc && (v.ctxFillStyle(c.fc), f = c.fc) : f !== this.values.fill && (f = this.values.fill, v.ctxFillStyle(this.values.fill)), y = this.textSpans[t].elem, s = y.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                for (g = y[i], a = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(g[n], g[n + 1], g[n + 2], g[n + 3], g[n + 4], g[n + 5]);
              this.globalData.canvasContext.closePath(), v.ctxFill()
            }
            if (this.stroke) {
              for (c && c.sw ? u !== c.sw && (u = c.sw, v.ctxLineWidth(c.sw)) : u !== this.values.sWidth && (u = this.values.sWidth, v.ctxLineWidth(this.values.sWidth)), c && c.sc ? b !== c.sc && (b = c.sc, v.ctxStrokeStyle(c.sc)) : b !== this.values.stroke && (b = this.values.stroke, v.ctxStrokeStyle(this.values.stroke)), y = this.textSpans[t].elem, s = y.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                for (g = y[i], a = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(g[n], g[n + 1], g[n + 2], g[n + 3], g[n + 4], g[n + 5]);
              this.globalData.canvasContext.closePath(), v.ctxStroke()
            }
            c && this.globalData.renderer.restore()
          }
      };

      function CVImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var e = createTag("canvas");
          e.width = this.assetData.w, e.height = this.assetData.h;
          var t = e.getContext("2d"),
            r = this.img.width,
            i = this.img.height,
            s = r / i,
            n = this.assetData.w / this.assetData.h,
            a, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          s > n && o === "xMidYMid slice" || s < n && o !== "xMidYMid slice" ? (l = i, a = l * n) : (a = r, l = a / n), t.drawImage(this.img, (r - a) / 2, (i - l) / 2, a, l, 0, 0, this.assetData.w, this.assetData.h), this.img = e
        }
      }, CVImageElement.prototype.renderInnerContent = function() {
        this.canvasContext.drawImage(this.img, 0, 0)
      }, CVImageElement.prototype.destroy = function() {
        this.img = null
      };

      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
      };

      function CanvasRendererBase() {}
      extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
        return new CVShapeElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createText = function(e) {
        return new CVTextElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createImage = function(e) {
        return new CVImageElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createSolid = function(e) {
        return new CVSolidElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
        e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
      }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
        this.canvasContext.globalAlpha *= e < 0 ? 0 : e
      }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
        this.canvasContext.fillStyle = e
      }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
        this.canvasContext.strokeStyle = e
      }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
        this.canvasContext.lineWidth = e
      }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
        this.canvasContext.lineCap = e
      }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
        this.canvasContext.lineJoin = e
      }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
        this.canvasContext.miterLimit = e
      }, CanvasRendererBase.prototype.ctxFill = function(e) {
        this.canvasContext.fill(e)
      }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, i) {
        this.canvasContext.fillRect(e, t, r, i)
      }, CanvasRendererBase.prototype.ctxStroke = function() {
        this.canvasContext.stroke()
      }, CanvasRendererBase.prototype.reset = function() {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return
        }
        this.contextData.reset()
      }, CanvasRendererBase.prototype.save = function() {
        this.canvasContext.save()
      }, CanvasRendererBase.prototype.restore = function(e) {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return
        }
        e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)
      }, CanvasRendererBase.prototype.configAnimation = function(e) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var t = this.animationItem.container.style;
          t.width = "100%", t.height = "100%";
          var r = "0px 0px 0px";
          t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
        } else this.canvasContext = this.renderConfig.context;
        this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
          w: e.w,
          h: e.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
      }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
        this.reset();
        var r, i;
        e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
        var s, n;
        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var a = this.renderConfig.preserveAspectRatio.split(" "),
            l = a[1] || "meet",
            o = a[0] || "xMidYMid",
            c = o.substr(0, 4),
            f = o.substr(4);
          s = r / i, n = this.transformCanvas.w / this.transformCanvas.h, n > s && l === "meet" || n < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), c === "xMid" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, f === "YMid" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : f === "YMax" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
      }, CanvasRendererBase.prototype.destroy = function() {
        this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
        var e, t = this.layers ? this.layers.length : 0;
        for (e = t - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
      }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
        if (!(this.renderedFrame === e && this.renderConfig.clearCanvas === !0 && !t || this.destroyed || e === -1)) {
          this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
          var r, i = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
          if (this.globalData._mdf) {
            for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
            this.renderConfig.clearCanvas !== !0 && this.restore()
          }
        }
      }, CanvasRendererBase.prototype.buildItem = function(e) {
        var t = this.elements;
        if (!(t[e] || this.layers[e].ty === 99)) {
          var r = this.createItem(this.layers[e], this, this.globalData);
          t[e] = r, r.initExpressions()
        }
      }, CanvasRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          e.checkParenting()
        }
      }, CanvasRendererBase.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
      }, CanvasRendererBase.prototype.show = function() {
        this.animationItem.container.style.display = "block"
      };

      function CanvasContext() {
        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
      }

      function CVContextData() {
        this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
        var e, t = 15;
        for (e = 0; e < t; e += 1) {
          var r = new CanvasContext;
          this.stack[e] = r
        }
        this._length = t, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
      }
      CVContextData.prototype.duplicate = function() {
        var e = this._length * 2,
          t = 0;
        for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
        this._length = e
      }, CVContextData.prototype.reset = function() {
        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
      }, CVContextData.prototype.restore = function(e) {
        this.cArrPos -= 1;
        var t = this.stack[this.cArrPos],
          r = t.transform,
          i, s = this.cTr.props;
        for (i = 0; i < 16; i += 1) s[i] = r[i];
        if (e) {
          this.nativeContext.restore();
          var n = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit
        }
        this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (e || t.opacity !== -1 && this.currentOpacity !== t.opacity) && (this.nativeContext.globalAlpha = t.opacity, this.currentOpacity = t.opacity), this.currentFillStyle = t.fillStyle, this.currentStrokeStyle = t.strokeStyle, this.currentLineWidth = t.lineWidth, this.currentLineCap = t.lineCap, this.currentLineJoin = t.lineJoin, this.currentMiterLimit = t.miterLimit
      }, CVContextData.prototype.save = function(e) {
        e && this.nativeContext.save();
        var t = this.cTr.props;
        this._length <= this.cArrPos && this.duplicate();
        var r = this.stack[this.cArrPos],
          i;
        for (i = 0; i < 16; i += 1) r.transform[i] = t[i];
        this.cArrPos += 1;
        var s = this.stack[this.cArrPos];
        s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit
      }, CVContextData.prototype.setOpacity = function(e) {
        this.stack[this.cArrPos].opacity = e
      }, CVContextData.prototype.setContext = function(e) {
        this.nativeContext = e
      }, CVContextData.prototype.fillStyle = function(e) {
        this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
      }, CVContextData.prototype.strokeStyle = function(e) {
        this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
      }, CVContextData.prototype.lineWidth = function(e) {
        this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
      }, CVContextData.prototype.lineCap = function(e) {
        this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
      }, CVContextData.prototype.lineJoin = function(e) {
        this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
      }, CVContextData.prototype.miterLimit = function(e) {
        this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
      }, CVContextData.prototype.transform = function(e) {
        this.transformMat.cloneFromProps(e);
        var t = this.cTr;
        this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
        var r = t.props;
        this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
      }, CVContextData.prototype.opacity = function(e) {
        var t = this.stack[this.cArrPos].opacity;
        t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
      }, CVContextData.prototype.fill = function(e) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
      }, CVContextData.prototype.fillRect = function(e, t, r, i) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i)
      }, CVContextData.prototype.stroke = function() {
        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
      };

      function CVCompElement(e, t, r) {
        this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }
      extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
        var e = this.canvasContext;
        e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip();
        var t, r = this.layers.length;
        for (t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
      }, CVCompElement.prototype.destroy = function() {
        var e, t = this.layers.length;
        for (e = t - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
        this.layers = null, this.elements = null
      }, CVCompElement.prototype.createComp = function(e) {
        return new CVCompElement(e, this.globalData, this)
      };

      function CanvasRenderer(e, t) {
        this.animationItem = e, this.renderConfig = {
          clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
          context: t && t.context || null,
          progressiveLoad: t && t.progressiveLoad || !1,
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          className: t && t.className || "",
          id: t && t.id || "",
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
      }
      extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
        return new CVCompElement(e, this.globalData, this)
      };

      function HBaseElement() {}
      HBaseElement.prototype = {
        checkBlendMode: function() {},
        initRendererElement: function() {
          this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
        },
        createContainerElements: function() {
          this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function() {
          var t = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var r = this.finalTransform.mat.toCSS();
            t.transform = r, t.webkitTransform = r
          }
          this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function() {
          this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        },
        createRenderableComponents: function() {
          this.maskManager = new MaskElement(this.data, this, this.globalData)
        },
        addEffects: function() {},
        setMatte: function() {}
      }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

      function HSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
        var e;
        this.data.hasMask ? (e = createNS("rect"), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (e = createTag("div"), e.style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
      };

      function HShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }
      }
      extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
        var e;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
        else {
          e = createNS("svg");
          var t = this.comp.data ? this.comp.data : this.globalData.compSize;
          e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
      }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
        return t
      }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
        var r = e.sh.v,
          i = e.transformers,
          s, n = r._length,
          a, l, o, c;
        if (!(n <= 1)) {
          for (s = 0; s < n - 1; s += 1) a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), c = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(a, l, o, c, t);
          r.c && (a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), c = this.getTransformedPoint(i, r.v[0]), this.checkBounds(a, l, o, c, t))
        }
      }, HShapeElement.prototype.checkBounds = function(e, t, r, i, s) {
        this.getBoundsOfCurve(e, t, r, i);
        var n = this.shapeBoundingBox;
        s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax)
      }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, i) {
        for (var s = [
            [e[0], i[0]],
            [e[1], i[1]]
          ], n, a, l, o, c, f, b, u = 0; u < 2; ++u) a = 6 * e[u] - 12 * t[u] + 6 * r[u], n = -3 * e[u] + 9 * t[u] - 9 * r[u] + 3 * i[u], l = 3 * t[u] - 3 * e[u], a |= 0, n |= 0, l |= 0, n === 0 && a === 0 || (n === 0 ? (o = -l / a, o > 0 && o < 1 && s[u].push(this.calculateF(o, e, t, r, i, u))) : (c = a * a - 4 * l * n, c >= 0 && (f = (-a + bmSqrt(c)) / (2 * n), f > 0 && f < 1 && s[u].push(this.calculateF(f, e, t, r, i, u)), b = (-a - bmSqrt(c)) / (2 * n), b > 0 && b < 1 && s[u].push(this.calculateF(b, e, t, r, i, u)))));
        this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
      }, HShapeElement.prototype.calculateF = function(e, t, r, i, s, n) {
        return bmPow(1 - e, 3) * t[n] + 3 * bmPow(1 - e, 2) * e * r[n] + 3 * (1 - e) * bmPow(e, 2) * i[n] + bmPow(e, 3) * s[n]
      }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
      }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
        var r = 0;
        if (e.keyframes) {
          for (var i = 0; i < e.keyframes.length; i += 1) {
            var s = e.keyframes[i].s;
            s > r && (r = s)
          }
          r *= e.mult
        } else r = e.v * e.mult;
        t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
      }, HShapeElement.prototype.currentBoxContains = function(e) {
        return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
      }, HShapeElement.prototype.renderInnerContent = function() {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
          var e = this.tempBoundingBox,
            t = 999999;
          if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
          var r = !1;
          if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
            this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var i = this.shapeCont.style,
              s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            i.transform = s, i.webkitTransform = s
          }
        }
      };

      function HTextElement(e, t, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
          this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
          var e = createNS("g");
          this.maskedElement.appendChild(e), this.innerElem = e
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting()
      }, HTextElement.prototype.buildNewText = function() {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = this.innerElem.style,
          r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
        t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
        var i = this.globalData.fontManager.getFontByName(e.f);
        if (!this.globalData.fontManager.chars)
          if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
          else {
            t.fontFamily = i.fFamily;
            var s = e.fWeight,
              n = e.fStyle;
            t.fontStyle = n, t.fontWeight = s
          } var a, l, o = e.l;
        l = o.length;
        var c, f, b, u = this.mHelper,
          y, g = "",
          v = 0;
        for (a = 0; a < l; a += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[v] ? c = this.textPaths[v] : (c = createNS("path"), c.setAttribute("stroke-linecap", lineCapEnum[1]), c.setAttribute("stroke-linejoin", lineJoinEnum[2]), c.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[v] ? (f = this.textSpans[v], b = f.children[0]) : (f = createTag("div"), f.style.lineHeight = 0, b = createNS("svg"), b.appendChild(c), styleDiv(f)))) : this.isMasked ? c = this.textPaths[v] ? this.textPaths[v] : createNS("text") : this.textSpans[v] ? (f = this.textSpans[v], c = this.textPaths[v]) : (f = createTag("span"), styleDiv(f), c = createTag("span"), styleDiv(c), f.appendChild(c)), this.globalData.fontManager.chars) {
            var E = this.globalData.fontManager.getCharData(e.finalText[a], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily),
              p;
            if (E ? p = E.data : p = null, u.reset(), p && p.shapes && p.shapes.length && (y = p.shapes[0].it, u.scale(e.finalSize / 100, e.finalSize / 100), g = this.createPathShape(u, y), c.setAttribute("d", g)), this.isMasked) this.innerElem.appendChild(c);
            else {
              if (this.innerElem.appendChild(f), p && p.shapes) {
                document.body.appendChild(b);
                var m = b.getBBox();
                b.setAttribute("width", m.width + 2), b.setAttribute("height", m.height + 2), b.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2));
                var d = b.style,
                  _ = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)";
                d.transform = _, d.webkitTransform = _, o[a].yOffset = m.y - 1
              } else b.setAttribute("width", 1), b.setAttribute("height", 1);
              f.appendChild(b)
            }
          } else if (c.textContent = o[a].val, c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(c);
          else {
            this.innerElem.appendChild(f);
            var x = c.style,
              P = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            x.transform = P, x.webkitTransform = P
          }
          this.isMasked ? this.textSpans[v] = c : this.textSpans[v] = f, this.textSpans[v].style.display = "block", this.textPaths[v] = c, v += 1
        }
        for (; v < this.textSpans.length;) this.textSpans[v].style.display = "none", v += 1
      }, HTextElement.prototype.renderInnerContent = function() {
        this.validateText();
        var e;
        if (this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) return;
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
            var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            e.transform = t, e.webkitTransform = t
          }
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
          var r, i, s = 0,
            n = this.textAnimator.renderedLetters,
            a = this.textProperty.currentData.l;
          i = a.length;
          var l, o, c;
          for (r = 0; r < i; r += 1) a[r].n ? s += 1 : (o = this.textSpans[r], c = this.textPaths[r], l = n[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && c.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && c.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (c.setAttribute("fill", l.fc), c.style.color = l.fc));
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var f = this.innerElem.getBBox();
            this.currentBBox.w !== f.width && (this.currentBBox.w = f.width, this.svgElement.setAttribute("width", f.width)), this.currentBBox.h !== f.height && (this.currentBBox.h = f.height, this.svgElement.setAttribute("height", f.height));
            var b = 1;
            if (this.currentBBox.w !== f.width + b * 2 || this.currentBBox.h !== f.height + b * 2 || this.currentBBox.x !== f.x - b || this.currentBBox.y !== f.y - b) {
              this.currentBBox.w = f.width + b * 2, this.currentBBox.h = f.height + b * 2, this.currentBBox.x = f.x - b, this.currentBBox.y = f.y - b, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
              var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              e.transform = u, e.webkitTransform = u
            }
          }
        }
      };

      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
          var s, n = e.ks.or.k.length;
          for (s = 0; s < n; s += 1) e.ks.or.k[s].to = null, e.ks.or.k[s].ti = null
        }
        this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
          mProp: this
        }
      }
      extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
        var e, t = this.comp.threeDElements.length,
          r, i, s;
        for (e = 0; e < t; e += 1)
          if (r = this.comp.threeDElements[e], r.type === "3d") {
            i = r.perspectiveElem.style, s = r.container.style;
            var n = this.pe.v + "px",
              a = "0px 0px 0px",
              l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            i.perspective = n, i.webkitPerspective = n, s.transformOrigin = a, s.mozTransformOrigin = a, s.webkitTransformOrigin = a, i.transform = l, i.webkitTransform = l
          }
      }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var e = this._isFirstFrame,
          t, r;
        if (this.hierarchy)
          for (r = this.hierarchy.length, t = 0; t < r; t += 1) e = this.hierarchy[t].finalTransform.mProp._mdf || e;
        if (e || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          if (this.mat.reset(), this.hierarchy)
            for (r = this.hierarchy.length - 1, t = r; t >= 0; t -= 1) {
              var i = this.hierarchy[t].finalTransform.mProp;
              this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
            }
          if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
            var s;
            this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
              a = [s[0] / n, s[1] / n, s[2] / n],
              l = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
              o = Math.atan2(a[1], l),
              c = Math.atan2(a[0], -a[2]);
            this.mat.rotateY(c).rotateX(-o)
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var f = !this._prevMat.equals(this.mat);
          if ((f || this.pe._mdf) && this.comp.threeDElements) {
            r = this.comp.threeDElements.length;
            var b, u, y;
            for (t = 0; t < r; t += 1)
              if (b = this.comp.threeDElements[t], b.type === "3d") {
                if (f) {
                  var g = this.mat.toCSS();
                  y = b.container.style, y.transform = g, y.webkitTransform = g
                }
                this.pe._mdf && (u = b.perspectiveElem.style, u.perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
              } this.mat.clone(this._prevMat)
          }
        }
        this._isFirstFrame = !1
      }, HCameraElement.prototype.prepareFrame = function(e) {
        this.prepareProperties(e, !0)
      }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
        return null
      };

      function HImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
        var e = this.globalData.getAssetsPath(this.assetData),
          t = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
      };

      function HybridRendererBase(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }
      extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          e.checkParenting()
        }
      }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
        var r = e.getBaseElement();
        if (r) {
          var i = this.layers[t];
          if (!i.ddd || !this.supports3d)
            if (this.threeDElements) this.addTo3dContainer(r, t);
            else {
              for (var s = 0, n, a, l; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement(), n = l || n), s += 1;
              n ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, n) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
            }
          else this.addTo3dContainer(r, t)
        }
      }, HybridRendererBase.prototype.createShape = function(e) {
        return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createText = function(e) {
        return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createCamera = function(e) {
        return this.camera = new HCameraElement(e, this.globalData, this), this.camera
      }, HybridRendererBase.prototype.createImage = function(e) {
        return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createSolid = function(e) {
        return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
        for (var t = 0, r = this.threeDElements.length; t < r;) {
          if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
          t += 1
        }
        return null
      }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
        var r = createTag("div"),
          i, s;
        styleDiv(r);
        var n = createTag("div");
        if (styleDiv(n), t === "3d") {
          i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
          var a = "50% 50%";
          i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a, s = n.style;
          var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          s.transform = l, s.webkitTransform = l
        }
        r.appendChild(n);
        var o = {
          container: n,
          perspectiveElem: r,
          startPos: e,
          endPos: e,
          type: t
        };
        return this.threeDElements.push(o), o
      }, HybridRendererBase.prototype.build3dContainers = function() {
        var e, t = this.layers.length,
          r, i = "";
        for (e = 0; e < t; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(e, "3d")), r.endPos = Math.max(r.endPos, e)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(e, "2d")), r.endPos = Math.max(r.endPos, e));
        for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
      }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
        for (var r = 0, i = this.threeDElements.length; r < i;) {
          if (t <= this.threeDElements[r].endPos) {
            for (var s = this.threeDElements[r].startPos, n; s < t;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
            n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
            break
          }
          r += 1
        }
      }, HybridRendererBase.prototype.configAnimation = function(e) {
        var t = createTag("div"),
          r = this.animationItem.wrapper,
          i = t.style;
        i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
        var s = createNS("svg");
        s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
        var n = createNS("defs");
        s.appendChild(n), this.data = e, this.setupGlobalData(e, s), this.globalData.defs = n, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
      }, HybridRendererBase.prototype.destroy = function() {
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
        var e, t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, HybridRendererBase.prototype.updateContainerSize = function() {
        var e = this.animationItem.wrapper.offsetWidth,
          t = this.animationItem.wrapper.offsetHeight,
          r = e / t,
          i = this.globalData.compSize.w / this.globalData.compSize.h,
          s, n, a, l;
        i > r ? (s = e / this.globalData.compSize.w, n = e / this.globalData.compSize.w, a = 0, l = (t - this.globalData.compSize.h * (e / this.globalData.compSize.w)) / 2) : (s = t / this.globalData.compSize.h, n = t / this.globalData.compSize.h, a = (e - this.globalData.compSize.w * (t / this.globalData.compSize.h)) / 2, l = 0);
        var o = this.resizerElem.style;
        o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + l + ",0,1)", o.transform = o.webkitTransform
      }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
        this.resizerElem.style.display = "none"
      }, HybridRendererBase.prototype.show = function() {
        this.resizerElem.style.display = "block"
      }, HybridRendererBase.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
          var e = this.globalData.compSize.w,
            t = this.globalData.compSize.h,
            r, i = this.threeDElements.length;
          for (r = 0; r < i; r += 1) {
            var s = this.threeDElements[r].perspectiveElem.style;
            s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) + "px", s.perspective = s.webkitPerspective
          }
        }
      }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
        var t, r = e.length,
          i = createTag("div");
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var s = this.createComp(e[t], i, this.globalData.comp, null);
            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
          }
      };

      function HCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }
      extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
      }, HCompElement.prototype.addTo3dContainer = function(e, t) {
        for (var r = 0, i; r < t;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
        i ? this.layerElement.insertBefore(e, i) : this.layerElement.appendChild(e)
      }, HCompElement.prototype.createComp = function(e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      };

      function HybridRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          },
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }
      extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      };
      var CompExpressionInterface = (function() {
        return function(e) {
          function t(r) {
            for (var i = 0, s = e.layers.length; i < s;) {
              if (e.layers[i].nm === r || e.layers[i].ind === r) return e.elements[i].layerInterface;
              i += 1
            }
            return null
          }
          return Object.defineProperty(t, "_name", {
            value: e.data.nm
          }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
        }
      })();

      function _typeof$2(e) {
        "@babel/helpers - typeof";
        return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$2(e)
      }

      function seedRandom(e, t) {
        var r = this,
          i = 256,
          s = 6,
          n = 52,
          a = "random",
          l = t.pow(i, s),
          o = t.pow(2, n),
          c = o * 2,
          f = i - 1,
          b;

        function u(d, _, x) {
          var P = [];
          _ = _ === !0 ? {
            entropy: !0
          } : _ || {};
          var T = E(v(_.entropy ? [d, m(e)] : d === null ? p() : d, 3), P),
            V = new y(P),
            B = function() {
              for (var L = V.g(s), N = l, z = 0; L < o;) L = (L + z) * i, N *= i, z = V.g(1);
              for (; L >= c;) L /= 2, N /= 2, z >>>= 1;
              return (L + z) / N
            };
          return B.int32 = function() {
            return V.g(4) | 0
          }, B.quick = function() {
            return V.g(4) / 4294967296
          }, B.double = B, E(m(V.S), e), (_.pass || x || function(D, L, N, z) {
            return z && (z.S && g(z, V), D.state = function() {
              return g(V, {})
            }), N ? (t[a] = D, L) : D
          })(B, T, "global" in _ ? _.global : this == t, _.state)
        }
        t["seed" + a] = u;

        function y(d) {
          var _, x = d.length,
            P = this,
            T = 0,
            V = P.i = P.j = 0,
            B = P.S = [];
          for (x || (d = [x++]); T < i;) B[T] = T++;
          for (T = 0; T < i; T++) B[T] = B[V = f & V + d[T % x] + (_ = B[T])], B[V] = _;
          P.g = function(D) {
            for (var L, N = 0, z = P.i, G = P.j, $ = P.S; D--;) L = $[z = f & z + 1], N = N * i + $[f & ($[z] = $[G = f & G + L]) + ($[G] = L)];
            return P.i = z, P.j = G, N
          }
        }

        function g(d, _) {
          return _.i = d.i, _.j = d.j, _.S = d.S.slice(), _
        }

        function v(d, _) {
          var x = [],
            P = _typeof$2(d),
            T;
          if (_ && P == "object")
            for (T in d) try {
              x.push(v(d[T], _ - 1))
            } catch {}
          return x.length ? x : P == "string" ? d : d + "\0"
        }

        function E(d, _) {
          for (var x = d + "", P, T = 0; T < x.length;) _[f & T] = f & (P ^= _[f & T] * 19) + x.charCodeAt(T++);
          return m(_)
        }

        function p() {
          try {
            var d = new Uint8Array(i);
            return (r.crypto || r.msCrypto).getRandomValues(d), m(d)
          } catch {
            var _ = r.navigator,
              x = _ && _.plugins;
            return [+new Date, r, x, r.screen, m(e)]
          }
        }

        function m(d) {
          return String.fromCharCode.apply(0, d)
        }
        E(t.random(), e)
      }

      function initialize$2(e) {
        seedRandom([], e)
      }
      var propTypes = {
        SHAPE: "shape"
      };

      function _typeof$1(e) {
        "@babel/helpers - typeof";
        return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$1(e)
      }
      var ExpressionManager = (function() {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};
          initialize$2(BMMath);

          function resetFrame() {
            _lottieGlobal = {}
          }

          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array
          }

          function isNumerable(e, t) {
            return e === "number" || t instanceof Number || e === "boolean" || e === "string"
          }

          function $bm_neg(e) {
            var t = _typeof$1(e);
            if (t === "number" || e instanceof Number || t === "boolean") return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r, i = e.length,
                s = [];
              for (r = 0; r < i; r += 1) s[r] = -e[r];
              return s
            }
            return e.propType ? e.v : -e
          }
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

          function sum(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(i, t) || r === "string" || i === "string") return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return e = e.slice(0), e[0] += t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e + t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var s = 0, n = e.length, a = t.length, l = []; s < n || s < a;)(typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] + t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
              return l
            }
            return 0
          }
          var add = sum;

          function sub(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(i, t)) return r === "string" && (e = parseInt(e, 10)), i === "string" && (t = parseInt(t, 10)), e - t;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return e = e.slice(0), e[0] -= t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e - t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var s = 0, n = e.length, a = t.length, l = []; s < n || s < a;)(typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] - t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
              return l
            }
            return 0
          }

          function mul(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t),
              s;
            if (isNumerable(r, e) && isNumerable(i, t)) return e * t;
            var n, a;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
              for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = e[n] * t;
              return s
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = e * t[n];
              return s
            }
            return 0
          }

          function div(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t),
              s;
            if (isNumerable(r, e) && isNumerable(i, t)) return e / t;
            var n, a;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
              for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = e[n] / t;
              return s
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = e / t[n];
              return s
            }
            return 0
          }

          function mod(e, t) {
            return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;

          function clamp(e, t, r) {
            if (t > r) {
              var i = r;
              r = t, t = i
            }
            return Math.min(Math.max(e, t), r)
          }

          function radiansToDegrees(e) {
            return e / degToRads
          }
          var radians_to_degrees = radiansToDegrees;

          function degreesToRadians(e) {
            return e * degToRads
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];

          function length(e, t) {
            if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
            t || (t = helperLengthArray);
            var r, i = Math.min(e.length, t.length),
              s = 0;
            for (r = 0; r < i; r += 1) s += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(s)
          }

          function normalize(e) {
            return div(e, length(e))
          }

          function rgbToHsl(e) {
            var t = e[0],
              r = e[1],
              i = e[2],
              s = Math.max(t, r, i),
              n = Math.min(t, r, i),
              a, l, o = (s + n) / 2;
            if (s === n) a = 0, l = 0;
            else {
              var c = s - n;
              switch (l = o > .5 ? c / (2 - s - n) : c / (s + n), s) {
                case t:
                  a = (r - i) / c + (r < i ? 6 : 0);
                  break;
                case r:
                  a = (i - t) / c + 2;
                  break;
                case i:
                  a = (t - r) / c + 4;
                  break
              }
              a /= 6
            }
            return [a, l, o, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t = e[0],
              r = e[1],
              i = e[2],
              s, n, a;
            if (r === 0) s = i, a = i, n = i;
            else {
              var l = i < .5 ? i * (1 + r) : i + r - i * r,
                o = 2 * i - l;
              s = hue2rgb(o, l, t + 1 / 3), n = hue2rgb(o, l, t), a = hue2rgb(o, l, t - 1 / 3)
            }
            return [s, n, a, e[3]]
          }

          function linear(e, t, r, i, s) {
            if ((i === void 0 || s === void 0) && (i = t, s = r, t = 0, r = 1), r < t) {
              var n = r;
              r = t, t = n
            }
            if (e <= t) return i;
            if (e >= r) return s;
            var a = r === t ? 0 : (e - t) / (r - t);
            if (!i.length) return i + (s - i) * a;
            var l, o = i.length,
              c = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1) c[l] = i[l] + (s[l] - i[l]) * a;
            return c
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, i = t.length;
              e || (e = createTypedArray("float32", i));
              var s = createTypedArray("float32", i),
                n = BMMath.random();
              for (r = 0; r < i; r += 1) s[r] = e[r] + n * (t[r] - e[r]);
              return s
            }
            e === void 0 && (e = 0);
            var a = BMMath.random();
            return e + a * (t - e)
          }

          function createPath(e, t, r, i) {
            var s, n = e.length,
              a = shapePool.newElement();
            a.setPathData(!!i, n);
            var l = [0, 0],
              o, c;
            for (s = 0; s < n; s += 1) o = t && t[s] ? t[s] : l, c = r && r[s] ? r[s] : l, a.setTripleAt(e[s][0], e[s][1], c[0] + e[s][0], c[1] + e[s][1], o[0] + e[s][0], o[1] + e[s][1], s, !0);
            return a
          }

          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty._name = elem.data.nm, thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function() {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = (function e(t, r) {
                var i, s, n = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray("float32", n);
                t = 5;
                var l = Math.floor(time * t);
                for (i = 0, s = 0; i < l;) {
                  for (s = 0; s < n; s += 1) a[s] += -r + r * 2 * BMMath.random();
                  i += 1
                }
                var o = time * t,
                  c = o - Math.floor(o),
                  f = createTypedArray("float32", n);
                if (n > 1) {
                  for (s = 0; s < n; s += 1) f[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * c;
                  return f
                }
                return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * c
              }).bind(this);
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

            function loopInDuration(e, t) {
              return loopIn(e, t, !0)
            }

            function loopOutDuration(e, t) {
              return loopOut(e, t, !0)
            }
            this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads,
                s = -Math.atan2(r[1], r[2]) / degToRads;
              return [s, i, 0]
            }

            function easeOut(e, t, r, i, s) {
              return applyEase(easeOutBez, e, t, r, i, s)
            }

            function easeIn(e, t, r, i, s) {
              return applyEase(easeInBez, e, t, r, i, s)
            }

            function ease(e, t, r, i, s) {
              return applyEase(easeInOutBez, e, t, r, i, s)
            }

            function applyEase(e, t, r, i, s, n) {
              s === void 0 ? (s = r, n = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var a = e(t);
              if ($bm_isInstanceOfArray(s)) {
                var l, o = s.length,
                  c = createTypedArray("float32", o);
                for (l = 0; l < o; l += 1) c[l] = (n[l] - s[l]) * a + s[l];
                return c
              }
              return (n - s) * a + s
            }

            function nearestKey(e) {
              var t, r = data.k.length,
                i, s;
              if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0;
              else if (i = -1, e *= elem.comp.globalData.frameRate, e < data.k[0].t) i = 1, s = data.k[0].t;
              else {
                for (t = 0; t < r - 1; t += 1)
                  if (e === data.k[t].t) {
                    i = t + 1, s = data.k[t].t;
                    break
                  } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                  e - data.k[t].t > data.k[t + 1].t - e ? (i = t + 2, s = data.k[t + 1].t) : (i = t + 1, s = data.k[t].t);
                  break
                }
                i === -1 && (i = t + 1, s = data.k[t].t)
              }
              var n = {};
              return n.index = i, n.time = s / elem.comp.globalData.frameRate, n
            }

            function key(e) {
              var t, r, i;
              if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
              e -= 1, t = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: []
              };
              var s = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
              for (i = s.length, r = 0; r < i; r += 1) t[r] = s[r], t.value[r] = s[r];
              return t
            }

            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t
            }

            function timeToFrames(e, t) {
              return !e && e !== 0 && (e = time), t || (t = elem.comp.globalData.frameRate), e * t
            }

            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e)
            }

            function sourceRectAtTime() {
              return elem.sourceRectAtTime()
            }

            function substring(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
            }

            function substr(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
            }

            function posterizeTime(e) {
              time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
            }
            var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
              hasParent = !!(elem.hierarchy && elem.hierarchy.length),
              parent, randSeed = Math.floor(Math.random() * 1e6),
              globalData = elem.globalData;

            function executeExpression(e) {
              return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
            }
            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }
          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        })(),
        Expressions = (function() {
          var e = {};
          e.initExpressions = t, e.resetFrame = ExpressionManager.resetFrame;

          function t(r) {
            var i = 0,
              s = [];

            function n() {
              i += 1
            }

            function a() {
              i -= 1, i === 0 && o()
            }

            function l(c) {
              s.indexOf(c) === -1 && s.push(c)
            }

            function o() {
              var c, f = s.length;
              for (c = 0; c < f; c += 1) s[c].release();
              s.length = 0
            }
            r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = l
          }
          return e
        })(),
        MaskManagerInterface = (function() {
          function e(r, i) {
            this._mask = r, this._data = i
          }
          Object.defineProperty(e.prototype, "maskPath", {
            get: function() {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
            }
          }), Object.defineProperty(e.prototype, "maskOpacity", {
            get: function() {
              return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
            }
          });
          var t = function(i) {
            var s = createSizedArray(i.viewData.length),
              n, a = i.viewData.length;
            for (n = 0; n < a; n += 1) s[n] = new e(i.viewData[n], i.masksProperties[n]);
            var l = function(c) {
              for (n = 0; n < a;) {
                if (i.masksProperties[n].nm === c) return s[n];
                n += 1
              }
              return null
            };
            return l
          };
          return t
        })(),
        ExpressionPropertyInterface = (function() {
          var e = {
              pv: 0,
              v: 0,
              mult: 1
            },
            t = {
              pv: [0, 0, 0],
              v: [0, 0, 0],
              mult: 1
            };

          function r(a, l, o) {
            Object.defineProperty(a, "velocity", {
              get: function() {
                return l.getVelocityAtTime(l.comp.currentFrame)
              }
            }), a.numKeys = l.keyframes ? l.keyframes.length : 0, a.key = function(c) {
              if (!a.numKeys) return 0;
              var f = "";
              "s" in l.keyframes[c - 1] ? f = l.keyframes[c - 1].s : "e" in l.keyframes[c - 2] ? f = l.keyframes[c - 2].e : f = l.keyframes[c - 2].s;
              var b = o === "unidimensional" ? new Number(f) : Object.assign({}, f);
              return b.time = l.keyframes[c - 1].t / l.elem.comp.globalData.frameRate, b.value = o === "unidimensional" ? f[0] : f, b
            }, a.valueAtTime = l.getValueAtTime, a.speedAtTime = l.getSpeedAtTime, a.velocityAtTime = l.getVelocityAtTime, a.propertyGroup = l.propertyGroup
          }

          function i(a) {
            (!a || !("pv" in a)) && (a = e);
            var l = 1 / a.mult,
              o = a.pv * l,
              c = new Number(o);
            return c.value = o, r(c, a, "unidimensional"),
              function() {
                return a.k && a.getValue(), o = a.v * l, c.value !== o && (c = new Number(o), c.value = o, c[0] = o, r(c, a, "unidimensional")), c
              }
          }

          function s(a) {
            (!a || !("pv" in a)) && (a = t);
            var l = 1 / a.mult,
              o = a.data && a.data.l || a.pv.length,
              c = createTypedArray("float32", o),
              f = createTypedArray("float32", o);
            return c.value = f, r(c, a, "multidimensional"),
              function() {
                a.k && a.getValue();
                for (var b = 0; b < o; b += 1) f[b] = a.v[b] * l, c[b] = f[b];
                return c
              }
          }

          function n() {
            return e
          }
          return function(a) {
            return a ? a.propType === "unidimensional" ? i(a) : s(a) : n
          }
        })(),
        TransformExpressionInterface = (function() {
          return function(e) {
            function t(a) {
              switch (a) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null
              }
            }
            Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz)
            }), Object.defineProperty(t, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r)
            }), Object.defineProperty(t, "xRotation", {
              get: ExpressionPropertyInterface(e.rx)
            }), Object.defineProperty(t, "yRotation", {
              get: ExpressionPropertyInterface(e.ry)
            }), Object.defineProperty(t, "scale", {
              get: ExpressionPropertyInterface(e.s)
            });
            var r, i, s, n;
            return e.p ? n = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (s = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? n() : [r(), i(), s ? s() : 0]
              }
            }), Object.defineProperty(t, "xPosition", {
              get: ExpressionPropertyInterface(e.px)
            }), Object.defineProperty(t, "yPosition", {
              get: ExpressionPropertyInterface(e.py)
            }), Object.defineProperty(t, "zPosition", {
              get: ExpressionPropertyInterface(e.pz)
            }), Object.defineProperty(t, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a)
            }), Object.defineProperty(t, "opacity", {
              get: ExpressionPropertyInterface(e.o)
            }), Object.defineProperty(t, "skew", {
              get: ExpressionPropertyInterface(e.sk)
            }), Object.defineProperty(t, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa)
            }), Object.defineProperty(t, "orientation", {
              get: ExpressionPropertyInterface(e.or)
            }), t
          }
        })(),
        LayerExpressionInterface = (function() {
          function e(c) {
            var f = new Matrix;
            if (c !== void 0) {
              var b = this._elem.finalTransform.mProp.getValueAtTime(c);
              b.clone(f)
            } else {
              var u = this._elem.finalTransform.mProp;
              u.applyToMatrix(f)
            }
            return f
          }

          function t(c, f) {
            var b = this.getMatrix(f);
            return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.applyPoint(b, c)
          }

          function r(c, f) {
            var b = this.getMatrix(f);
            return this.applyPoint(b, c)
          }

          function i(c, f) {
            var b = this.getMatrix(f);
            return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.invertPoint(b, c)
          }

          function s(c, f) {
            var b = this.getMatrix(f);
            return this.invertPoint(b, c)
          }

          function n(c, f) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var b, u = this._elem.hierarchy.length;
              for (b = 0; b < u; b += 1) this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(c)
            }
            return c.applyToPointArray(f[0], f[1], f[2] || 0)
          }

          function a(c, f) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var b, u = this._elem.hierarchy.length;
              for (b = 0; b < u; b += 1) this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(c)
            }
            return c.inversePoint(f)
          }

          function l(c) {
            var f = new Matrix;
            if (f.reset(), this._elem.finalTransform.mProp.applyToMatrix(f), this._elem.hierarchy && this._elem.hierarchy.length) {
              var b, u = this._elem.hierarchy.length;
              for (b = 0; b < u; b += 1) this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(f);
              return f.inversePoint(c)
            }
            return f.inversePoint(c)
          }

          function o() {
            return [1, 1, 1, 1]
          }
          return function(c) {
            var f;

            function b(v) {
              y.mask = new MaskManagerInterface(v, c)
            }

            function u(v) {
              y.effect = v
            }

            function y(v) {
              switch (v) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return y.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return f;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return y.effect;
                case "ADBE Text Properties":
                  return y.textInterface;
                default:
                  return null
              }
            }
            y.getMatrix = e, y.invertPoint = a, y.applyPoint = n, y.toWorld = r, y.toWorldVec = t, y.fromWorld = s, y.fromWorldVec = i, y.toComp = r, y.fromComp = l, y.sampleImage = o, y.sourceRectAtTime = c.sourceRectAtTime.bind(c), y._elem = c, f = TransformExpressionInterface(c.finalTransform.mProp);
            var g = getDescriptor(f, "anchorPoint");
            return Object.defineProperties(y, {
              hasParent: {
                get: function() {
                  return c.hierarchy.length
                }
              },
              parent: {
                get: function() {
                  return c.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(f, "rotation"),
              scale: getDescriptor(f, "scale"),
              position: getDescriptor(f, "position"),
              opacity: getDescriptor(f, "opacity"),
              anchorPoint: g,
              anchor_point: g,
              transform: {
                get: function() {
                  return f
                }
              },
              active: {
                get: function() {
                  return c.isInRange
                }
              }
            }), y.startTime = c.data.st, y.index = c.data.ind, y.source = c.data.refId, y.height = c.data.ty === 0 ? c.data.h : 100, y.width = c.data.ty === 0 ? c.data.w : 100, y.inPoint = c.data.ip / c.comp.globalData.frameRate, y.outPoint = c.data.op / c.comp.globalData.frameRate, y._name = c.data.nm, y.registerMaskInterface = b, y.registerEffectsInterface = u, y
          }
        })(),
        propertyGroupFactory = (function() {
          return function(e, t) {
            return function(r) {
              return r = r === void 0 ? 1 : r, r <= 0 ? e : t(r - 1)
            }
          }
        })(),
        PropertyInterface = (function() {
          return function(e, t) {
            var r = {
              _name: e
            };

            function i(s) {
              return s = s === void 0 ? 1 : s, s <= 0 ? r : t(s - 1)
            }
            return i
          }
        })(),
        EffectsExpressionInterface = (function() {
          var e = {
            createEffectsInterface: t
          };

          function t(s, n) {
            if (s.effectsManager) {
              var a = [],
                l = s.data.ef,
                o, c = s.effectsManager.effectElements.length;
              for (o = 0; o < c; o += 1) a.push(r(l[o], s.effectsManager.effectElements[o], n, s));
              var f = s.data.ef || [],
                b = function(y) {
                  for (o = 0, c = f.length; o < c;) {
                    if (y === f[o].nm || y === f[o].mn || y === f[o].ix) return a[o];
                    o += 1
                  }
                  return null
                };
              return Object.defineProperty(b, "numProperties", {
                get: function() {
                  return f.length
                }
              }), b
            }
            return null
          }

          function r(s, n, a, l) {
            function o(y) {
              for (var g = s.ef, v = 0, E = g.length; v < E;) {
                if (y === g[v].nm || y === g[v].mn || y === g[v].ix) return g[v].ty === 5 ? f[v] : f[v]();
                v += 1
              }
              throw new Error
            }
            var c = propertyGroupFactory(o, a),
              f = [],
              b, u = s.ef.length;
            for (b = 0; b < u; b += 1) s.ef[b].ty === 5 ? f.push(r(s.ef[b], n.effectElements[b], n.effectElements[b].propertyGroup, l)) : f.push(i(n.effectElements[b], s.ef[b].ty, l, c));
            return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
              get: function() {
                return f[0]()
              }
            }), Object.defineProperties(o, {
              numProperties: {
                get: function() {
                  return s.np
                }
              },
              _name: {
                value: s.nm
              },
              propertyGroup: {
                value: c
              }
            }), o.enabled = s.en !== 0, o.active = o.enabled, o
          }

          function i(s, n, a, l) {
            var o = ExpressionPropertyInterface(s.p);

            function c() {
              return n === 10 ? a.comp.compInterface(s.p.v) : o()
            }
            return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), c
          }
          return e
        })(),
        ShapePathInterface = (function() {
          return function(t, r, i) {
            var s = r.sh;

            function n(l) {
              return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? n.path : null
            }
            var a = propertyGroupFactory(n, i);
            return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return s.k && s.getValue(), s
                }
              },
              shape: {
                get: function() {
                  return s.k && s.getValue(), s
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: i
              }
            }), n
          }
        })(),
        ShapeExpressionInterface = (function() {
          function e(g, v, E) {
            var p = [],
              m, d = g ? g.length : 0;
            for (m = 0; m < d; m += 1) g[m].ty === "gr" ? p.push(r(g[m], v[m], E)) : g[m].ty === "fl" ? p.push(i(g[m], v[m], E)) : g[m].ty === "st" ? p.push(a(g[m], v[m], E)) : g[m].ty === "tm" ? p.push(l(g[m], v[m], E)) : g[m].ty === "tr" || (g[m].ty === "el" ? p.push(c(g[m], v[m], E)) : g[m].ty === "sr" ? p.push(f(g[m], v[m], E)) : g[m].ty === "sh" ? p.push(ShapePathInterface(g[m], v[m], E)) : g[m].ty === "rc" ? p.push(b(g[m], v[m], E)) : g[m].ty === "rd" ? p.push(u(g[m], v[m], E)) : g[m].ty === "rp" ? p.push(y(g[m], v[m], E)) : g[m].ty === "gf" ? p.push(s(g[m], v[m], E)) : p.push(n(g[m], v[m])));
            return p
          }

          function t(g, v, E) {
            var p, m = function(x) {
              for (var P = 0, T = p.length; P < T;) {
                if (p[P]._name === x || p[P].mn === x || p[P].propertyIndex === x || p[P].ix === x || p[P].ind === x) return p[P];
                P += 1
              }
              return typeof x == "number" ? p[x - 1] : null
            };
            m.propertyGroup = propertyGroupFactory(m, E), p = e(g.it, v.it, m.propertyGroup), m.numProperties = p.length;
            var d = o(g.it[g.it.length - 1], v.it[v.it.length - 1], m.propertyGroup);
            return m.transform = d, m.propertyIndex = g.cix, m._name = g.nm, m
          }

          function r(g, v, E) {
            var p = function(x) {
              switch (x) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return p.content;
                default:
                  return p.transform
              }
            };
            p.propertyGroup = propertyGroupFactory(p, E);
            var m = t(g, v, p.propertyGroup),
              d = o(g.it[g.it.length - 1], v.it[v.it.length - 1], p.propertyGroup);
            return p.content = m, p.transform = d, Object.defineProperty(p, "_name", {
              get: function() {
                return g.nm
              }
            }), p.numProperties = g.np, p.propertyIndex = g.ix, p.nm = g.nm, p.mn = g.mn, p
          }

          function i(g, v, E) {
            function p(m) {
              return m === "Color" || m === "color" ? p.color : m === "Opacity" || m === "opacity" ? p.opacity : null
            }
            return Object.defineProperties(p, {
              color: {
                get: ExpressionPropertyInterface(v.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(v.o)
              },
              _name: {
                value: g.nm
              },
              mn: {
                value: g.mn
              }
            }), v.c.setGroupProperty(PropertyInterface("Color", E)), v.o.setGroupProperty(PropertyInterface("Opacity", E)), p
          }

          function s(g, v, E) {
            function p(m) {
              return m === "Start Point" || m === "start point" ? p.startPoint : m === "End Point" || m === "end point" ? p.endPoint : m === "Opacity" || m === "opacity" ? p.opacity : null
            }
            return Object.defineProperties(p, {
              startPoint: {
                get: ExpressionPropertyInterface(v.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(v.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(v.o)
              },
              type: {
                get: function() {
                  return "a"
                }
              },
              _name: {
                value: g.nm
              },
              mn: {
                value: g.mn
              }
            }), v.s.setGroupProperty(PropertyInterface("Start Point", E)), v.e.setGroupProperty(PropertyInterface("End Point", E)), v.o.setGroupProperty(PropertyInterface("Opacity", E)), p
          }

          function n() {
            function g() {
              return null
            }
            return g
          }

          function a(g, v, E) {
            var p = propertyGroupFactory(T, E),
              m = propertyGroupFactory(P, p);

            function d(V) {
              Object.defineProperty(P, g.d[V].nm, {
                get: ExpressionPropertyInterface(v.d.dataProps[V].p)
              })
            }
            var _, x = g.d ? g.d.length : 0,
              P = {};
            for (_ = 0; _ < x; _ += 1) d(_), v.d.dataProps[_].p.setGroupProperty(m);

            function T(V) {
              return V === "Color" || V === "color" ? T.color : V === "Opacity" || V === "opacity" ? T.opacity : V === "Stroke Width" || V === "stroke width" ? T.strokeWidth : null
            }
            return Object.defineProperties(T, {
              color: {
                get: ExpressionPropertyInterface(v.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(v.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(v.w)
              },
              dash: {
                get: function() {
                  return P
                }
              },
              _name: {
                value: g.nm
              },
              mn: {
                value: g.mn
              }
            }), v.c.setGroupProperty(PropertyInterface("Color", p)), v.o.setGroupProperty(PropertyInterface("Opacity", p)), v.w.setGroupProperty(PropertyInterface("Stroke Width", p)), T
          }

          function l(g, v, E) {
            function p(d) {
              return d === g.e.ix || d === "End" || d === "end" ? p.end : d === g.s.ix ? p.start : d === g.o.ix ? p.offset : null
            }
            var m = propertyGroupFactory(p, E);
            return p.propertyIndex = g.ix, v.s.setGroupProperty(PropertyInterface("Start", m)), v.e.setGroupProperty(PropertyInterface("End", m)), v.o.setGroupProperty(PropertyInterface("Offset", m)), p.propertyIndex = g.ix, p.propertyGroup = E, Object.defineProperties(p, {
              start: {
                get: ExpressionPropertyInterface(v.s)
              },
              end: {
                get: ExpressionPropertyInterface(v.e)
              },
              offset: {
                get: ExpressionPropertyInterface(v.o)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }

          function o(g, v, E) {
            function p(d) {
              return g.a.ix === d || d === "Anchor Point" ? p.anchorPoint : g.o.ix === d || d === "Opacity" ? p.opacity : g.p.ix === d || d === "Position" ? p.position : g.r.ix === d || d === "Rotation" || d === "ADBE Vector Rotation" ? p.rotation : g.s.ix === d || d === "Scale" ? p.scale : g.sk && g.sk.ix === d || d === "Skew" ? p.skew : g.sa && g.sa.ix === d || d === "Skew Axis" ? p.skewAxis : null
            }
            var m = propertyGroupFactory(p, E);
            return v.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", m)), v.transform.mProps.p.setGroupProperty(PropertyInterface("Position", m)), v.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", m)), v.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", m)), v.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", m)), v.transform.mProps.sk && (v.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", m)), v.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", m))), v.transform.op.setGroupProperty(PropertyInterface("Opacity", m)), Object.defineProperties(p, {
              opacity: {
                get: ExpressionPropertyInterface(v.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(v.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(v.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(v.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(v.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(v.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(v.transform.mProps.sa)
              },
              _name: {
                value: g.nm
              }
            }), p.ty = "tr", p.mn = g.mn, p.propertyGroup = E, p
          }

          function c(g, v, E) {
            function p(_) {
              return g.p.ix === _ ? p.position : g.s.ix === _ ? p.size : null
            }
            var m = propertyGroupFactory(p, E);
            p.propertyIndex = g.ix;
            var d = v.sh.ty === "tm" ? v.sh.prop : v.sh;
            return d.s.setGroupProperty(PropertyInterface("Size", m)), d.p.setGroupProperty(PropertyInterface("Position", m)), Object.defineProperties(p, {
              size: {
                get: ExpressionPropertyInterface(d.s)
              },
              position: {
                get: ExpressionPropertyInterface(d.p)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }

          function f(g, v, E) {
            function p(_) {
              return g.p.ix === _ ? p.position : g.r.ix === _ ? p.rotation : g.pt.ix === _ ? p.points : g.or.ix === _ || _ === "ADBE Vector Star Outer Radius" ? p.outerRadius : g.os.ix === _ ? p.outerRoundness : g.ir && (g.ir.ix === _ || _ === "ADBE Vector Star Inner Radius") ? p.innerRadius : g.is && g.is.ix === _ ? p.innerRoundness : null
            }
            var m = propertyGroupFactory(p, E),
              d = v.sh.ty === "tm" ? v.sh.prop : v.sh;
            return p.propertyIndex = g.ix, d.or.setGroupProperty(PropertyInterface("Outer Radius", m)), d.os.setGroupProperty(PropertyInterface("Outer Roundness", m)), d.pt.setGroupProperty(PropertyInterface("Points", m)), d.p.setGroupProperty(PropertyInterface("Position", m)), d.r.setGroupProperty(PropertyInterface("Rotation", m)), g.ir && (d.ir.setGroupProperty(PropertyInterface("Inner Radius", m)), d.is.setGroupProperty(PropertyInterface("Inner Roundness", m))), Object.defineProperties(p, {
              position: {
                get: ExpressionPropertyInterface(d.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(d.r)
              },
              points: {
                get: ExpressionPropertyInterface(d.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(d.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(d.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(d.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(d.is)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }

          function b(g, v, E) {
            function p(_) {
              return g.p.ix === _ ? p.position : g.r.ix === _ ? p.roundness : g.s.ix === _ || _ === "Size" || _ === "ADBE Vector Rect Size" ? p.size : null
            }
            var m = propertyGroupFactory(p, E),
              d = v.sh.ty === "tm" ? v.sh.prop : v.sh;
            return p.propertyIndex = g.ix, d.p.setGroupProperty(PropertyInterface("Position", m)), d.s.setGroupProperty(PropertyInterface("Size", m)), d.r.setGroupProperty(PropertyInterface("Rotation", m)), Object.defineProperties(p, {
              position: {
                get: ExpressionPropertyInterface(d.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(d.r)
              },
              size: {
                get: ExpressionPropertyInterface(d.s)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }

          function u(g, v, E) {
            function p(_) {
              return g.r.ix === _ || _ === "Round Corners 1" ? p.radius : null
            }
            var m = propertyGroupFactory(p, E),
              d = v;
            return p.propertyIndex = g.ix, d.rd.setGroupProperty(PropertyInterface("Radius", m)), Object.defineProperties(p, {
              radius: {
                get: ExpressionPropertyInterface(d.rd)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }

          function y(g, v, E) {
            function p(_) {
              return g.c.ix === _ || _ === "Copies" ? p.copies : g.o.ix === _ || _ === "Offset" ? p.offset : null
            }
            var m = propertyGroupFactory(p, E),
              d = v;
            return p.propertyIndex = g.ix, d.c.setGroupProperty(PropertyInterface("Copies", m)), d.o.setGroupProperty(PropertyInterface("Offset", m)), Object.defineProperties(p, {
              copies: {
                get: ExpressionPropertyInterface(d.c)
              },
              offset: {
                get: ExpressionPropertyInterface(d.o)
              },
              _name: {
                value: g.nm
              }
            }), p.mn = g.mn, p
          }
          return function(g, v, E) {
            var p;

            function m(_) {
              if (typeof _ == "number") return _ = _ === void 0 ? 1 : _, _ === 0 ? E : p[_ - 1];
              for (var x = 0, P = p.length; x < P;) {
                if (p[x]._name === _) return p[x];
                x += 1
              }
              return null
            }

            function d() {
              return E
            }
            return m.propertyGroup = propertyGroupFactory(m, d), p = e(g, v, m.propertyGroup), m.numProperties = p.length, m._name = "Contents", m
          }
        })(),
        TextExpressionInterface = (function() {
          return function(e) {
            var t;

            function r(i) {
              return i === "ADBE Text Document" ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                e.textProperty.getValue();
                var s = e.textProperty.currentData.t;
                return (!t || s !== t.value) && (t = new String(s), t.value = s || new String(s), Object.defineProperty(t, "style", {
                  get: function() {
                    return {
                      fillColor: e.textProperty.currentData.fc
                    }
                  }
                })), t
              }
            }), r
          }
        })();

      function _typeof(e) {
        "@babel/helpers - typeof";
        return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof(e)
      }
      var FootageInterface = (function() {
          var e = function(i) {
              var s = "",
                n = i.getFootageData();

              function a() {
                return s = "", n = i.getFootageData(), l
              }

              function l(o) {
                if (n[o]) return s = o, n = n[o], _typeof(n) === "object" ? l : n;
                var c = o.indexOf(s);
                if (c !== -1) {
                  var f = parseInt(o.substr(c + s.length), 10);
                  return n = n[f], _typeof(n) === "object" ? l : n
                }
                return ""
              }
              return a
            },
            t = function(i) {
              function s(n) {
                return n === "Outline" ? s.outlineInterface() : null
              }
              return s._name = "Outline", s.outlineInterface = e(i), s
            };
          return function(r) {
            function i(s) {
              return s === "Data" ? i.dataInterface : null
            }
            return i._name = "Data", i.dataInterface = t(r), i
          }
        })(),
        interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };

      function getInterface(e) {
        return interfaces[e] || null
      }
      var expressionHelpers = (function() {
        function e(a, l, o) {
          l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, l, o).bind(o)))
        }

        function t(a) {
          return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value
        }

        function r(a) {
          var l = -.01,
            o = this.getValueAtTime(a),
            c = this.getValueAtTime(a + l),
            f = 0;
          if (o.length) {
            var b;
            for (b = 0; b < o.length; b += 1) f += Math.pow(c[b] - o[b], 2);
            f = Math.sqrt(f) * 100
          } else f = 0;
          return f
        }

        function i(a) {
          if (this.vel !== void 0) return this.vel;
          var l = -.001,
            o = this.getValueAtTime(a),
            c = this.getValueAtTime(a + l),
            f;
          if (o.length) {
            f = createTypedArray("float32", o.length);
            var b;
            for (b = 0; b < o.length; b += 1) f[b] = (c[b] - o[b]) / l
          } else f = (c - o) / l;
          return f
        }

        function s() {
          return this.pv
        }

        function n(a) {
          this.propertyGroup = a
        }
        return {
          searchExpressions: e,
          getSpeedAtTime: r,
          getVelocityAtTime: i,
          getValueAtTime: t,
          getStaticValueAtTime: s,
          setGroupProperty: n
        }
      })();

      function addPropertyDecorator() {
        function e(u, y, g) {
          if (!this.k || !this.keyframes) return this.pv;
          u = u ? u.toLowerCase() : "";
          var v = this.comp.renderedFrame,
            E = this.keyframes,
            p = E[E.length - 1].t;
          if (v <= p) return this.pv;
          var m, d;
          g ? (y ? m = Math.abs(p - this.elem.comp.globalData.frameRate * y) : m = Math.max(0, p - this.elem.data.ip), d = p - m) : ((!y || y > E.length - 1) && (y = E.length - 1), d = E[E.length - 1 - y].t, m = p - d);
          var _, x, P;
          if (u === "pingpong") {
            var T = Math.floor((v - d) / m);
            if (T % 2 !== 0) return this.getValueAtTime((m - (v - d) % m + d) / this.comp.globalData.frameRate, 0)
          } else if (u === "offset") {
            var V = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              D = this.getValueAtTime(((v - d) % m + d) / this.comp.globalData.frameRate, 0),
              L = Math.floor((v - d) / m);
            if (this.pv.length) {
              for (P = new Array(V.length), x = P.length, _ = 0; _ < x; _ += 1) P[_] = (B[_] - V[_]) * L + D[_];
              return P
            }
            return (B - V) * L + D
          } else if (u === "continue") {
            var N = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (P = new Array(N.length), x = P.length, _ = 0; _ < x; _ += 1) P[_] = N[_] + (N[_] - z[_]) * ((v - p) / this.comp.globalData.frameRate) / 5e-4;
              return P
            }
            return N + (N - z) * ((v - p) / .001)
          }
          return this.getValueAtTime(((v - d) % m + d) / this.comp.globalData.frameRate, 0)
        }

        function t(u, y, g) {
          if (!this.k) return this.pv;
          u = u ? u.toLowerCase() : "";
          var v = this.comp.renderedFrame,
            E = this.keyframes,
            p = E[0].t;
          if (v >= p) return this.pv;
          var m, d;
          g ? (y ? m = Math.abs(this.elem.comp.globalData.frameRate * y) : m = Math.max(0, this.elem.data.op - p), d = p + m) : ((!y || y > E.length - 1) && (y = E.length - 1), d = E[y].t, m = d - p);
          var _, x, P;
          if (u === "pingpong") {
            var T = Math.floor((p - v) / m);
            if (T % 2 === 0) return this.getValueAtTime(((p - v) % m + p) / this.comp.globalData.frameRate, 0)
          } else if (u === "offset") {
            var V = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              B = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              D = this.getValueAtTime((m - (p - v) % m + p) / this.comp.globalData.frameRate, 0),
              L = Math.floor((p - v) / m) + 1;
            if (this.pv.length) {
              for (P = new Array(V.length), x = P.length, _ = 0; _ < x; _ += 1) P[_] = D[_] - (B[_] - V[_]) * L;
              return P
            }
            return D - (B - V) * L
          } else if (u === "continue") {
            var N = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (P = new Array(N.length), x = P.length, _ = 0; _ < x; _ += 1) P[_] = N[_] + (N[_] - z[_]) * (p - v) / .001;
              return P
            }
            return N + (N - z) * (p - v) / .001
          }
          return this.getValueAtTime((m - ((p - v) % m + p)) / this.comp.globalData.frameRate, 0)
        }

        function r(u, y) {
          if (!this.k) return this.pv;
          if (u = (u || .4) * .5, y = Math.floor(y || 5), y <= 1) return this.pv;
          var g = this.comp.renderedFrame / this.comp.globalData.frameRate,
            v = g - u,
            E = g + u,
            p = y > 1 ? (E - v) / (y - 1) : 1,
            m = 0,
            d = 0,
            _;
          this.pv.length ? _ = createTypedArray("float32", this.pv.length) : _ = 0;
          for (var x; m < y;) {
            if (x = this.getValueAtTime(v + m * p), this.pv.length)
              for (d = 0; d < this.pv.length; d += 1) _[d] += x[d];
            else _ += x;
            m += 1
          }
          if (this.pv.length)
            for (d = 0; d < this.pv.length; d += 1) _[d] /= y;
          else _ /= y;
          return _
        }

        function i(u) {
          this._transformCachingAtTime || (this._transformCachingAtTime = {
            v: new Matrix
          });
          var y = this._transformCachingAtTime.v;
          if (y.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
            var g = this.a.getValueAtTime(u);
            y.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult)
          }
          if (this.appliedTransformations < 2) {
            var v = this.s.getValueAtTime(u);
            y.scale(v[0] * this.s.mult, v[1] * this.s.mult, v[2] * this.s.mult)
          }
          if (this.sk && this.appliedTransformations < 3) {
            var E = this.sk.getValueAtTime(u),
              p = this.sa.getValueAtTime(u);
            y.skewFromAxis(-E * this.sk.mult, p * this.sa.mult)
          }
          if (this.r && this.appliedTransformations < 4) {
            var m = this.r.getValueAtTime(u);
            y.rotate(-m * this.r.mult)
          } else if (!this.r && this.appliedTransformations < 4) {
            var d = this.rz.getValueAtTime(u),
              _ = this.ry.getValueAtTime(u),
              x = this.rx.getValueAtTime(u),
              P = this.or.getValueAtTime(u);
            y.rotateZ(-d * this.rz.mult).rotateY(_ * this.ry.mult).rotateX(x * this.rx.mult).rotateZ(-P[2] * this.or.mult).rotateY(P[1] * this.or.mult).rotateX(P[0] * this.or.mult)
          }
          if (this.data.p && this.data.p.s) {
            var T = this.px.getValueAtTime(u),
              V = this.py.getValueAtTime(u);
            if (this.data.p.z) {
              var B = this.pz.getValueAtTime(u);
              y.translate(T * this.px.mult, V * this.py.mult, -B * this.pz.mult)
            } else y.translate(T * this.px.mult, V * this.py.mult, 0)
          } else {
            var D = this.p.getValueAtTime(u);
            y.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult)
          }
          return y
        }

        function s() {
          return this.v.clone(new Matrix)
        }
        var n = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(u, y, g) {
          var v = n(u, y, g);
          return v.dynamicProperties.length ? v.getValueAtTime = i.bind(v) : v.getValueAtTime = s.bind(v), v.setGroupProperty = expressionHelpers.setGroupProperty, v
        };
        var a = PropertyFactory.getProp;
        PropertyFactory.getProp = function(u, y, g, v, E) {
          var p = a(u, y, g, v, E);
          p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = e, p.loopIn = t, p.smooth = r, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = y.a === 1 ? y.k.length : 0, p.propertyIndex = y.ix;
          var m = 0;
          return g !== 0 && (m = createTypedArray("float32", y.a === 1 ? y.k[0].s.length : y.k.length)), p._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: m
          }, expressionHelpers.searchExpressions(u, y, p), p.k && E.addDynamicProperty(p), p
        };

        function l(u) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), u *= this.elem.globalData.frameRate, u -= this.offsetTime, u !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }
        var o = ShapePropertyFactory.getConstructorFunction(),
          c = ShapePropertyFactory.getKeyframedConstructorFunction();

        function f() {}
        f.prototype = {
          vertices: function(y, g) {
            this.k && this.getValue();
            var v = this.v;
            g !== void 0 && (v = this.getValueAtTime(g, 0));
            var E, p = v._length,
              m = v[y],
              d = v.v,
              _ = createSizedArray(p);
            for (E = 0; E < p; E += 1) y === "i" || y === "o" ? _[E] = [m[E][0] - d[E][0], m[E][1] - d[E][1]] : _[E] = [m[E][0], m[E][1]];
            return _
          },
          points: function(y) {
            return this.vertices("v", y)
          },
          inTangents: function(y) {
            return this.vertices("i", y)
          },
          outTangents: function(y) {
            return this.vertices("o", y)
          },
          isClosed: function() {
            return this.v.c
          },
          pointOnPath: function(y, g) {
            var v = this.v;
            g !== void 0 && (v = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(v));
            for (var E = this._segmentsLength, p = E.lengths, m = E.totalLength * y, d = 0, _ = p.length, x = 0, P; d < _;) {
              if (x + p[d].addedLength > m) {
                var T = d,
                  V = v.c && d === _ - 1 ? 0 : d + 1,
                  B = (m - x) / p[d].addedLength;
                P = bez.getPointInSegment(v.v[T], v.v[V], v.o[T], v.i[V], B, p[d]);
                break
              } else x += p[d].addedLength;
              d += 1
            }
            return P || (P = v.c ? [v.v[0][0], v.v[0][1]] : [v.v[v._length - 1][0], v.v[v._length - 1][1]]), P
          },
          vectorOnPath: function(y, g, v) {
            y == 1 ? y = this.v.c : y == 0 && (y = .999);
            var E = this.pointOnPath(y, g),
              p = this.pointOnPath(y + .001, g),
              m = p[0] - E[0],
              d = p[1] - E[1],
              _ = Math.sqrt(Math.pow(m, 2) + Math.pow(d, 2));
            if (_ === 0) return [0, 0];
            var x = v === "tangent" ? [m / _, d / _] : [-d / _, m / _];
            return x
          },
          tangentOnPath: function(y, g) {
            return this.vectorOnPath(y, g, "tangent")
          },
          normalOnPath: function(y, g) {
            return this.vectorOnPath(y, g, "normal")
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([f], o), extendPrototype([f], c), c.prototype.getValueAtTime = l, c.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var b = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(u, y, g, v, E) {
          var p = b(u, y, g, v, E);
          return p.propertyIndex = y.ix, p.lock = !1, g === 3 ? expressionHelpers.searchExpressions(u, y.pt, p) : g === 4 && expressionHelpers.searchExpressions(u, y.ks, p), p.k && u.addDynamicProperty(p), p
        }
      }

      function initialize$1() {
        addPropertyDecorator()
      }

      function addDecorator() {
        function e() {
          return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        }
        TextProperty.prototype.getExpressionValue = function(t, r) {
          var i = this.calculateExpression(r);
          if (t.t !== i) {
            var s = {};
            return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s
          }
          return t
        }, TextProperty.prototype.searchProperty = function() {
          var t = this.searchKeyframes(),
            r = this.searchExpressions();
          return this.kf = t || r, this.kf
        }, TextProperty.prototype.searchExpressions = e
      }

      function initialize() {
        addDecorator()
      }

      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function e(t, r) {
          var i = createNS("feMerge");
          i.setAttribute("result", t);
          var s, n;
          for (n = 0; n < r.length; n += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[n]), i.appendChild(s), i.appendChild(s);
          return i
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

      function SVGTintFilter(e, t, r, i, s) {
        this.filterManager = t;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", i + "_tint_1"), e.appendChild(n), n = createNS("feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i + "_tint_2"), e.appendChild(n), this.matrixFilter = n;
        var a = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
        e.appendChild(a)
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v / 100;
          this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
        }
      };

      function SVGFillFilter(e, t, r, i) {
        this.filterManager = t;
        var s = createNS("feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), e.appendChild(s), this.matrixFilter = s
      }
      SVGFillFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
        }
      };

      function SVGStrokeEffect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
      }
      SVGStrokeEffect.prototype.initialize = function() {
        var e = this.elem.layerElement.children || this.elem.layerElement.childNodes,
          t, r, i, s;
        for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1) t = createNS("path"), r.appendChild(t), this.paths.push({
          p: t,
          m: i
        });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var n = createNS("mask"),
            a = createElementID();
          n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(r), this.elem.globalData.defs.appendChild(n);
          var l = createNS("g");
          for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); e[0];) l.appendChild(e[0]);
          this.elem.layerElement.appendChild(l), this.masker = n, r.setAttribute("stroke", "#fff")
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (e = this.elem.layerElement.children || this.elem.layerElement.childNodes; e.length;) this.elem.layerElement.removeChild(e[0]);
          this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = r
      }, SVGStrokeEffect.prototype.renderFrame = function(e) {
        this.initialized || this.initialize();
        var t, r = this.paths.length,
          i, s;
        for (t = 0; t < r; t += 1)
          if (this.paths[t].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[t].m], s = this.paths[t].p, (e || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
            var n;
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                o = s.getTotalLength();
              n = "0 0 0 " + o * a + " ";
              var c = o * (l - a),
                f = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                b = Math.floor(c / f),
                u;
              for (u = 0; u < b; u += 1) n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
              n += "0 " + o * 10 + " 0 0"
            } else n = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
            s.setAttribute("stroke-dasharray", n)
          } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
          var y = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(y[0] * 255) + "," + bmFloor(y[1] * 255) + "," + bmFloor(y[2] * 255) + ")")
        }
      };

      function SVGTritoneFilter(e, t, r, i) {
        this.filterManager = t;
        var s = createNS("feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(s);
        var n = createNS("feComponentTransfer");
        n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), this.matrixFilter = n;
        var a = createNS("feFuncR");
        a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
        var l = createNS("feFuncG");
        l.setAttribute("type", "table"), n.appendChild(l), this.feFuncG = l;
        var o = createNS("feFuncB");
        o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o, e.appendChild(n)
      }
      SVGTritoneFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v,
            s = i[0] + " " + r[0] + " " + t[0],
            n = i[1] + " " + r[1] + " " + t[1],
            a = i[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
        }
      };

      function SVGProLevelsFilter(e, t, r, i) {
        this.filterManager = t;
        var s = this.filterManager.effectElements,
          n = createNS("feComponentTransfer");
        (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (n = createNS("feComponentTransfer"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), e.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
      }
      SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r
      }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, s) {
        for (var n = 0, a = 256, l, o = Math.min(e, t), c = Math.max(e, t), f = Array.call(null, {
            length: a
          }), b, u = 0, y = s - i, g = t - e; n <= 256;) l = n / 256, l <= o ? b = g < 0 ? s : i : l >= c ? b = g < 0 ? i : s : b = i + y * Math.pow((l - e) / g, 1 / r), f[u] = b, u += 1, n += 256 / (a - 1);
        return f.join(" ")
      }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t, r = this.filterManager.effectElements;
          this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
        }
      };

      function SVGDropShadowEffect(e, t, r, i, s) {
        var n = t.container.globalData.renderConfig.filterSize,
          a = t.data.fs || n;
        e.setAttribute("x", a.x || n.x), e.setAttribute("y", a.y || n.y), e.setAttribute("width", a.width || n.width), e.setAttribute("height", a.height || n.height), this.filterManager = t;
        var l = createNS("feGaussianBlur");
        l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, e.appendChild(l);
        var o = createNS("feOffset");
        o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, e.appendChild(o);
        var c = createNS("feFlood");
        c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = c, e.appendChild(c);
        var f = createNS("feComposite");
        f.setAttribute("in", i + "_drop_shadow_3"), f.setAttribute("in2", i + "_drop_shadow_2"), f.setAttribute("operator", "in"), f.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(f);
        var b = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
        e.appendChild(b)
      }
      extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
            var t = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)))
          }
          if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var r = this.filterManager.effectElements[3].p.v,
              i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              s = r * Math.cos(i),
              n = r * Math.sin(i);
            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n)
          }
        }
      };
      var _svgMatteSymbols = [];

      function SVGMatte3Effect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
      }
      SVGMatte3Effect.prototype.findSymbol = function(e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1
        }
        return null
      }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
        var r = e.layerElement.parentNode;
        if (r) {
          for (var i = r.children, s = 0, n = i.length; s < n && i[s] !== e.layerElement;) s += 1;
          var a;
          s <= n - 2 && (a = i[s + 1]);
          var l = createNS("use");
          l.setAttribute("href", "#" + t), a ? r.insertBefore(l, a) : r.appendChild(l)
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
        if (!this.findSymbol(t)) {
          var r = createElementID(),
            i = createNS("mask");
          i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
          var s = e.globalData.defs;
          s.appendChild(i);
          var n = createNS("symbol");
          n.setAttribute("id", r), this.replaceInParent(t, r), n.appendChild(t.layerElement), s.appendChild(n);
          var a = createNS("use");
          a.setAttribute("href", "#" + r), i.appendChild(a), t.data.hd = !1, t.show()
        }
        e.setMatte(t.layerId)
      }, SVGMatte3Effect.prototype.initialize = function() {
        for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
        this.initialized = !0
      }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
      };

      function SVGGaussianBlurEffect(e, t, r, i) {
        e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
        var s = createNS("feGaussianBlur");
        s.setAttribute("result", i), e.appendChild(s), this.feGaussianBlur = s
      }
      SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = .3,
            r = this.filterManager.effectElements[0].p.v * t,
            i = this.filterManager.effectElements[1].p.v,
            s = i == 3 ? 0 : r,
            n = i == 2 ? 0 : r;
          this.feGaussianBlur.setAttribute("stdDeviation", s + " " + n);
          var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", a)
        }
      };

      function TransformEffect() {}
      TransformEffect.prototype.init = function(e) {
        this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
      }, TransformEffect.prototype.renderFrame = function(e) {
        if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
          var t = this.effectsManager.effectElements,
            r = t[0].p.v,
            i = t[1].p.v,
            s = t[2].p.v === 1,
            n = t[3].p.v,
            a = s ? n : t[4].p.v,
            l = t[5].p.v,
            o = t[6].p.v,
            c = t[7].p.v;
          this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * .01, n * .01, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
        }
      };

      function SVGTransformEffect(e, t) {
        this.init(t)
      }
      extendPrototype([TransformEffect], SVGTransformEffect);

      function CVTransformEffect(e) {
        this.init(e)
      }
      return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    }))
  })(lottie$2, lottie$2.exports)), lottie$2.exports
}
var lottieExports = requireLottie();
const lottie = getDefaultExportFromCjs(lottieExports),
  _hoisted_1$2 = {
    class: "sect-4"
  },
  _hoisted_2$1 = {
    class: "sect-4-wrap"
  },
  _hoisted_3 = {
    class: "sect-4-title title-anim"
  },
  _hoisted_4 = {
    class: "sect-4-title-row"
  },
  _hoisted_5 = {
    class: "sect-4-btn"
  },
  _hoisted_6 = {
    class: "sect-4-info"
  },
  _hoisted_7 = {
    class: "sect-4-item phone"
  },
  _hoisted_8 = {
    class: "b1-bold",
    href: "tel:+13056801920"
  },
  _hoisted_9 = {
    class: "sect-4-item sect-4-mail"
  },
  _hoisted_10 = {
    class: "b1-bold",
    href: "mailTo:info@nabilissa.com"
  },
  _hoisted_11 = {
    class: "sect-4-item sect-4-socials"
  },
  _hoisted_12 = ["href"],
  _hoisted_13 = {
    class: "sect-4-footer"
  },
  _hoisted_14 = {
    class: "sect-4-copy b1-light"
  },
  _hoisted_15 = {
    class: "sect-4-made"
  },
  _hoisted_16 = {
    class: "sect-4-privacy b1-light"
  },
  _hoisted_17 = {
    href: "/NI profile .pdf",
    target: "_blank"
  },
  _hoisted_18 = {
    href: "/privacy-policy.pdf",
    target: "_blank"
  },
  _sfc_main$2 = defineComponent({
    __name: "sect4",
    setup(e) {
      const t = [{
          text: "Instagram",
          link: "https://www.instagram.com/nabilissadesign/"
        }, {
          text: "Facebook",
          link: "https://www.facebook.com/nabilissadesign"
        }, {
          text: "Youtube",
          link: "https://www.youtube.com/@NabilIssa"
        }, {
          text: "Linkedin",
          link: "https://www.linkedin.com/in/nabil-issa-8702894"
        }, {
          text: "Pinterest",
          link: "https://pin.it/5t4HmLENl"
        }],
        r = ref(),
        i = ref();
      onMounted(async () => {
        await nextTick(), s()
      }), onUnmounted(() => {
        n()
      });
      const s = () => {
          r.value && r.value.destroy(), r.value = lottie.loadAnimation({
            container: i.value,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: "/logo_hover_white_half.json"
          }), r.value.addEventListener("DOMLoaded", () => {
            r.value.setSpeed(2)
          })
        },
        n = () => {
          r.value && r.value.destroy()
        },
        a = () => {
          r.value && (r.value.setDirection(1), r.value.play())
        },
        l = () => {
          r.value && (r.value.setDirection(-1), r.value.play())
        };
      return (o, c) => {
        const f = __nuxt_component_0$d,
          b = __nuxt_component_1$h,
          u = __nuxt_component_2$6,
          y = __nuxt_component_3$1,
          g = __nuxt_component_4,
          v = __nuxt_component_5$2;
        return openBlock(), createElementBlock("section", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$1, [c[8] || (c[8] = createBaseVNode("div", {
          class: "sect-4-image"
        }, [createBaseVNode("span", {
          class: "sect-4-letter"
        }, [createBaseVNode("span", {
          class: "sect-4-letter-text"
        }, "t")]), createBaseVNode("img", {
          class: "inner-img",
          src: _imports_0,
          alt: ""
        })], -1)), createBaseVNode("div", _hoisted_3, [c[1] || (c[1] = createBaseVNode("h2", {
          class: "h2-thin title-thin"
        }, [createTextVNode(" Contact "), createBaseVNode("br"), createTextVNode("Is the "), createBaseVNode("br"), createTextVNode("First "), createBaseVNode("br"), createTextVNode("Gesture ")], -1)), createBaseVNode("div", _hoisted_4, [c[0] || (c[0] = createBaseVNode("h2", {
          class: "h2-thin title-thin"
        }, "of", -1)), createVNode(f, {
          text: "Trust",
          class: "h2-book title-book"
        })])]), createBaseVNode("div", _hoisted_5, [createVNode(b, {
          text: "Get in Touch",
          onClick: "useOpenForm" in o ? o.useOpenForm : unref(useOpenForm)
        }, null, 8, ["onClick"])]), c[9] || (c[9] = createBaseVNode("div", {
          class: "sect-4-name"
        }, [createBaseVNode("span", null, "c"), createBaseVNode("span", null, "o"), createBaseVNode("span", null, "n"), createBaseVNode("span", {
          class: "char-4"
        }, "n"), createBaseVNode("span", {
          class: "char-5"
        }, "e"), createBaseVNode("span", {
          class: "char-6"
        }, "c")], -1)), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [c[3] || (c[3] = createBaseVNode("p", {
          class: "sect-4-item-title b1-light"
        }, "Phone", -1)), createBaseVNode("a", _hoisted_8, [createVNode(u, {
          text: "+1-305-680-1920"
        }), c[2] || (c[2] = createBaseVNode("span", {
          class: "whatsapp b1-light"
        }, "(whatsapp)", -1))])]), createBaseVNode("div", _hoisted_9, [c[4] || (c[4] = createBaseVNode("p", {
          class: "item-title b1-light"
        }, "Mail", -1)), createBaseVNode("a", _hoisted_10, [createVNode(u, {
          text: "info@nabilissa.com"
        })])]), c[6] || (c[6] = createBaseVNode("div", {
          class: "sect-4-item sect-4-offices"
        }, [createBaseVNode("p", {
          class: "sect-4-item-title b1-light"
        }, "Offices"), createBaseVNode("p", {
          class: "b1-bold"
        }, "HQ in Miami")], -1)), createBaseVNode("div", _hoisted_11, [c[5] || (c[5] = createBaseVNode("p", {
          class: "sect-4-item-title b1-light"
        }, "Socials", -1)), (openBlock(), createElementBlock(Fragment, null, renderList(t, ({
          text: E,
          link: p
        }, m) => createBaseVNode("a", {
          key: m,
          target: "_blank",
          href: p,
          class: "b1-bold"
        }, [createVNode(u, {
          text: E
        }, null, 8, ["text"])], 8, _hoisted_12)), 64))])]), createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, " © " + toDisplayString(new Date().getFullYear()) + " Nabil Issa. All Right Reserved. ", 1), createBaseVNode("div", _hoisted_15, [c[7] || (c[7] = createBaseVNode("p", {
          class: "b1-light"
        }, "Made by", -1)), createVNode(g, {
          external: "",
          target: "_blank",
          class: "made-by-link",
          to: "https://thefirstthelast.agency/?utm_source=nabil&utm_medium=article&utm_campaign=promo",
          onMouseenter: a,
          onMouseleave: l
        }, {
          default: withCtx(() => [createVNode(y), createBaseVNode("span", {
            ref_key: "commonLogoRef",
            ref: i,
            class: "icon-developed",
            "aria-label": "logo"
          }, null, 512)]),
          _: 1
        })]), createBaseVNode("div", _hoisted_16, [createBaseVNode("a", _hoisted_17, [createVNode(v, {
          text: "Presentation",
          "is-white": ""
        })]), createBaseVNode("a", _hoisted_18, [createVNode(v, {
          text: "Privacy Policy",
          "is-white": ""
        })])])])])])
      }
    }
  }),
  __nuxt_component_3 = _export_sfc(_sfc_main$2, [
    ["__scopeId", "data-v-c961ddc2"]
  ]),
  _sfc_main$1 = {},
  _hoisted_1$1 = {
    class: "chapter-5"
  };

function _sfc_render(e, t) {
  const r = __nuxt_component_0$1,
    i = __nuxt_component_1,
    s = __nuxt_component_2,
    n = __nuxt_component_3;
  return openBlock(), createElementBlock("section", _hoisted_1$1, [createVNode(r), createVNode(i), createVNode(s), createVNode(n)])
}
const __nuxt_component_10 = _export_sfc(_sfc_main$1, [
  ["render", _sfc_render],
  ["__scopeId", "data-v-2a40bfe3"]
]);

function animateText(e) {
  const t = typeof e == "string" ? document.querySelectorAll(e) : e,
    r = gsapWithCSS.timeline(),
    {
      lines: i
    } = new SplitText(t, {
      type: "lines",
      linesClass: "split-line"
    });
  return gsapWithCSS.set(i, {
    "will-change": "filter",
    "--blur": "0.75rem",
    filter: "blur(var(--blur)) ",
    autoAlpha: 0
  }), r.to(i, {
    "--blur": "0px",
    autoAlpha: 1,
    stagger: {
      each: .1
    },
    duration: .6
  }), r
}

function animateTextOut(e) {
  const t = gsapWithCSS.utils.toArray(typeof e == "string" ? document.querySelectorAll(e) : e),
    r = gsapWithCSS.timeline(),
    i = t.flatMap(s => Array.from(s.querySelectorAll(".split-line")));
  return i.length && r.to(i, {
    "--blur": "0.75rem",
    autoAlpha: 0,
    stagger: {
      each: .1
    },
    duration: .6
  }), r
}
class animatePage {
  desktop;
  mobile;
  constructor() {
    this.desktop = getViewport("desktop"), this.mobile = getViewport("mobile"), this.firstScreen(), this.showChapters(), this.progressLineChapter(), this.navChaptersInEnd()
  }
  otherSections() {
    this.chapter1Sect1(), this.chapter1Sect2(), this.chapter2Sect1(), this.chapter2Sect2(), this.chapter3Sect1(), this.chapter3Sect2(), this.chapter3Sect3(), this.chapter4Sect1(), this.chapter4Sect2(), this.chapter4Sect3(), this.chapter5Sect1(), this.chapter5Sect2(), this.chapter5Sect3(), this.chapter5Sect4(), this.parallaxPhotos(), this.titlesAnim(), this.textAnim(), this.initNav()
  }
  firstScreen() {
    const t = useState("show-cookie", () => !1),
      r = useState("lenis");
    "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), r.value?.scrollTo(0, {
      immediate: !0
    });
    const i = document.querySelector(".hero-wrap .preloader-logo");
    gsapWithCSS.set(".page", {
      opacity: 1
    });
    const s = lottie.loadAnimation({
        container: i,
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "/logo.json"
      }),
      n = gsapWithCSS.timeline({
        paused: !0,
        onComplete() {
          useLockScroll(!1)
        }
      });
    let a = !1,
      l = 0;
    const o = () => {
      a || (a = !0, window.clearTimeout(l), this.otherSections(), n.play())
    };
    s.addEventListener("complete", o), s.addEventListener("data_failed", o), l = window.setTimeout(o, 8e3), n.to(i, {
      filter: "blur(5px)",
      autoAlpha: 0,
      duration: 1
    }), this.desktop ? n.to("section.hero .img", {
      y: 0,
      stagger: .1,
      ease: "power4.inOut",
      duration: 1.5
    }, "<") : n.to("section.hero .img-1", {
      x: 0,
      xPercent: 0,
      ease: "power4.inOut",
      duration: 1.5
    }, "<"), n.to("section.hero .img img", {
      scale: 1,
      duration: 1,
      ease: "power4.inOut"
    }), this.desktop ? n.to("section.hero .img", {
      clipPath: "polygon(0rem 0%, 90rem 0%, 90rem 100%, 0rem 100%)",
      duration: 1,
      ease: "power4.inOut"
    }, "<") : n.to("section.hero .img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut"
    }, "<"), this.desktop ? n.from("header.header .logo", {
      opacity: 0,
      xPercent: -5
    }) : n.from("header.header", {
      yPercent: 25,
      opacity: 0
    }), n.add(animateText("section.hero .subtitle"), "<10%"), n.add(animateTitle("section.hero .title"), "<10%"), n.add(animateText("section.hero .descr"), "<10%"), this.desktop && n.from("header.header .header-btn", {
      opacity: 0,
      xPercent: -5
    }, "<10%"), n.add(animateText("section.hero .scroll"), "<10%"), t.value && n.to(".cookie", {
      yPercent: 0,
      y: 0
    })
  }
  showChapters() {
    const t = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-1 .sect-1-wrap",
        start: this.desktop ? "top top" : "100px top",
        end: this.desktop ? "top top" : "100px top",
        toggleActions: "play none reverse none"
      }
    });
    t.add(animateTextOut("section.hero .subtitle")), t.add(animateTitleOut("section.hero .title"), "<10%"), t.add(animateTextOut("section.hero .descr"), "<10%"), t.add(animateTextOut("section.hero .scroll"), "<10%"), t.set(".chapter-nav", {
      pointerEvents: "auto"
    }), t.from(".chapter-nav .chapter-text-wrap", {
      yPercent: 200,
      stagger: .1
    }, "<"), t.fromTo(".chapter-nav .chapter-line", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      stagger: .1
    }, "<"), t.from(".chapter-nav .chapter-decor-wrap", {
      opacity: 0,
      stagger: .1
    }, "<")
  }
  progressLineChapter() {
    const t = document.querySelectorAll(".chapter-item");
    t.forEach((r, i) => {
      const s = r.querySelector(".chapter-line-progress"),
        n = gsapWithCSS.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: `.chapter-${i+1}`,
            start: "top top",
            end: "bottom bottom",
            scrub: !0,
            onEnter() {
              t.forEach(a => a.classList.remove("_active")), r.classList.add("_active")
            },
            onEnterBack() {
              t.forEach(a => a.classList.remove("_active")), r.classList.add("_active")
            }
          }
        });
      n.to(s, {
        width: "100%"
      }), n.set(s, {
        width: 0
      })
    })
  }
  chapter1Sect1() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".hero-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0
      }
    });
    this.desktop && t.to("header.header", {
      y: 0,
      yPercent: 0,
      top: 0,
      duration: .3
    }), t.to("section.hero", {
      opacity: 0
    }, "<");
    const r = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-1 .sect-1-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
        id: "stChapterOne"
      }
    });
    r.to(".chapter-1 .sect-1-wrap", {
      opacity: 1,
      duration: .25
    }), r.fromTo(".chapter-1 .sect-1", {
      "--mx": this.desktop ? "-20%" : "0%"
    }, {
      "--mx": "120%"
    }), this.desktop && gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-1 .sect-1-wrap",
        start: "top top",
        end: "top top",
        toggleActions: "play none reverse none"
      }
    }).to("header.header .burger-wrap", {
      width: "auto"
    })
  }
  chapter1Sect2() {
    gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-1 .sect-2",
        start: this.desktop ? "top top" : "top center",
        end: this.desktop ? "300px top" : "top top",
        scrub: !0
      }
    }).from(".chapter-1 .sect-2", {
      opacity: 0
    });
    const r = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-1 .based .subtitles",
        start: this.desktop ? "bottom bottom" : "top center",
        end: this.desktop ? "bottom bottom" : "top center",
        toggleActions: "play none reverse none"
      }
    });
    if (r.from(".chapter-1 .based .subtitles", {
        filter: "blur(0.75rem)",
        autoAlpha: 0
      }), this.desktop ? (r.add(animateTitle(".chapter-1 .based .titles .title2, .chapter-1 .based .titles .title3"), "<"), r.from(".chapter-1 .based .titles .title1", {
        opacity: 0
      }, "<"), r.to(".chapter-1 .based .titles .title1", {
        animation: "shine 1s ease 1"
      }, "<"), r.to(".chapter-1 .based .titles .title1", {
        duration: 1,
        clearProps: "animation"
      })) : (r.add(animateTitle(".chapter-1 .based .subtitles .title2, .chapter-1 .based .subtitles .title3"), "<"), r.from(".chapter-1 .based .subtitles .title1", {
        opacity: 0
      }, "<"), r.to(".chapter-1 .based .subtitles .title1", {
        animation: "shine 1s ease 1"
      }, "<"), r.to(".chapter-1 .based .subtitles .title1", {
        duration: 1,
        clearProps: "animation"
      })), this.desktop) {
      const i = gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-1 .based .titles-parallax-trigger",
          start: "top bottom",
          end: "bottom top",
          scrub: !0
        }
      });
      i.to(".chapter-1 .based .title1", {
        y: "8rem"
      }), i.from(".chapter-1 .based .title2", {
        y: "5rem"
      }, "<"), i.from(".chapter-1 .based .title3", {
        y: "11rem"
      }, "<")
    }
  }
  chapter2Sect1() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-2 .sect-1-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
        id: "stChapterTwo"
      }
    });
    t.set(".chapter-2", {
      pointerEvents: "auto"
    }), t.to(".chapter-2 .sect-1-wrap", {
      opacity: 1,
      duration: .25
    }), t.fromTo(".chapter-2 .sect-1", {
      "--mx": "0%"
    }, {
      "--mx": "120%"
    }, "<")
  }
  chapter2Sect2() {
    gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-2 .sect-2",
        start: "top top",
        end: "300px top",
        scrub: !0
      }
    }).from(".chapter-2 .sect-2", {
      opacity: 0
    });
    const r = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-2 .sect-2",
        start: "top top",
        end: "top top",
        toggleActions: "play none reverse none"
      }
    });
    r.add(animateTitle(".chapter-2 .photos .h1-thin")), r.from(".chapter-2 .photos .h1-book", {
      opacity: 0
    }, "<"), r.to(".chapter-2 .photos .h1-book", {
      animation: "shine 1s ease 1"
    }, "<"), r.to(".chapter-2 .photos .h1-book", {
      duration: 1,
      clearProps: "animation"
    }), document.querySelectorAll(".chapter-2 .photos .item-photo").forEach(a => {
      gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: a,
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none reverse none"
        }
      }).from(a, {
        y: "8rem",
        opacity: 0,
        ease: "power2.out"
      })
    }), gsapWithCSS.from(".chapter-2 .quote-photo", {
      y: "8rem",
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".chapter-2 .quote-photo",
        start: "top bottom",
        end: "top bottom",
        toggleActions: "play none reverse none"
      }
    });
    const s = gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-2 .quote-text",
          start: "top bottom",
          end: "bottom center",
          scrub: !0
        }
      }),
      {
        chars: n
      } = new SplitText(".chapter-2 .quote-text", {
        type: "chars, lines"
      });
    s.from(n, {
      opacity: .1,
      stagger: .05,
      duration: .05
    })
  }
  chapter3Sect1() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-3 .sect-1-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
        id: "stChapterThree"
      }
    });
    t.set(".chapter-3", {
      pointerEvents: "auto"
    }), t.to(".chapter-3 .sect-1-wrap", {
      opacity: 1,
      duration: .25
    }), t.fromTo(".chapter-3 .sect-1", {
      "--mx": "0%"
    }, {
      "--mx": "120%"
    }, "<")
  }
  chapter3Sect2() {
    if (this.desktop) {
      gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-3 .sect-2-wrap",
          start: "top top",
          end: "10px top",
          scrub: !0
        }
      }).from(".chapter-3 .sect-2-wrap", {
        opacity: 0
      });
      const r = document.querySelectorAll(".chapter-3 .sect-2-wrap .trigger"),
        i = document.querySelectorAll(".chapter-3 .sect-2-wrap .item-text");
      r.forEach((l, o) => {
        const c = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: l,
            start: "top top",
            end: "top top",
            toggleActions: "play none reverse none"
          }
        });
        c.add(animateTitle(i[o].querySelector(".h2-thin"))), c.from(i[o].querySelector(".h2-book"), {
          opacity: 0
        }, "<"), c.to(i[o].querySelector(".h2-book"), {
          animation: "shine 1s ease 1"
        }, "<"), c.to(i[o].querySelector(".h2-book"), {
          duration: 1,
          clearProps: "animation"
        })
      });
      const s = gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-3 .sect-2-wrap",
          start: "top top",
          end: "bottom bottom",
          scrub: !0
        }
      });
      s.from(".chapter-3 .sect-2-wrap .circles", {
        scale: 1.5,
        duration: .5
      }), s.fromTo(".chapter-3 .sect-2-wrap .circles rect.small", {
        drawSVG: 0
      }, {
        drawSVG: "100%",
        duration: .6
      }, "<"), s.fromTo(".chapter-3 .sect-2-wrap .circles rect.big", {
        drawSVG: 0
      }, {
        drawSVG: "100%",
        duration: .7
      }, "<"), s.from(".chapter-3 .sect-2-wrap .items", {
        opacity: 0,
        duration: .25
      }, "<70%"), document.querySelectorAll(".chapter-3 .sect-2-wrap .item").forEach((l, o) => {
        const c = l.querySelector("img");
        o && (s.fromTo(l, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }), s.from(c, {
          scale: 1.2
        }, "<"))
      }), gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-3 .sect-2-wrap",
          start: "bottom bottom",
          end: "bottom top",
          scrub: !0
        }
      }).to(".chapter-3 .sect-2-sticky", {
        yPercent: 100
      })
    } else gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-3 .sect-2-wrap-mob",
        start: "top top",
        end: "100px top",
        scrub: !0
      }
    }).from(".chapter-3 .sect-2-wrap-mob", {
      opacity: 0
    }), document.querySelectorAll(".chapter-3 .sect-2-wrap-mob .item-photo").forEach(i => {
      gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: i,
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none reverse none"
        }
      }).from(i, {
        y: "8rem",
        opacity: 0,
        ease: "power2.out"
      })
    })
  }
  chapter3Sect3() {
    const t = document.querySelector(".chapter-3 .sect-3-container"),
      r = document.querySelectorAll(".chapter-3 .sect-3-img"),
      s = document.querySelector(".sect-3-images").querySelector(".sect-3-photos"),
      n = s.clientWidth - window.innerWidth,
      a = gsapWithCSS.to(s, {
        x: -n,
        ease: "none",
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "top top",
          end: "bottom center"
        }
      });
    r.forEach(o => {
      const c = {
        x: (Math.random() * 20 + 30) * (Math.random() < .5 ? 1 : -1),
        y: Math.random() * 40 + 50,
        rotation: (Math.random() * 10 + 10) * (Math.random() < .5 ? 1 : -1)
      };
      gsapWithCSS.fromTo(o, {
        rotation: c.rotation,
        xPercent: c.x,
        yPercent: c.y
      }, {
        rotation: -c.rotation,
        xPercent: -c.x,
        yPercent: -c.y,
        ease: "none",
        scrollTrigger: {
          trigger: o,
          containerAnimation: a,
          start: "left 120%",
          end: "right -20%",
          scrub: !0
        }
      })
    });
    const l = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: t,
        start: "top top",
        end: "bottom top",
        scrub: !0
      }
    });
    l.to(".chapter-3 .sect-3-title, .chapter-3 .sect-3-descr", {
      yPercent: -105,
      duration: 2
    }), l.fromTo(".chapter-3 .sect-3-desc2", {
      yPercent: 105
    }, {
      yPercent: -100,
      duration: 2
    }), l.from(".chapter-3 .sect-3-decor2", {
      scaleY: 0,
      duration: 2
    }, "<")
  }
  chapter4Sect1() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-4 .sect-1-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
        id: "stChapterFour"
      }
    });
    t.set(".chapter-4", {
      pointerEvents: "auto"
    }), t.to(".chapter-4 .sect-1-wrap", {
      opacity: 1,
      duration: .25
    }), t.fromTo(".chapter-4 .sect-1", {
      "--mx": "0%"
    }, {
      "--mx": "120%"
    }, "<")
  }
  chapter4Sect2() {
    if (this.mobile) return;
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-4 .sect-2-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0
      }
    });
    t.from(".chapter-4 .sect-2-wrap", {
      opacity: 0
    }), t.to(".chapter-4 .sect-2-wrap .circle-bg", {
      scale: 3.5
    }, "<")
  }
  chapter4Sect3() {
    if (this.desktop) {
      const t = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: ".chapter-4 .sect-3-text1",
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none reverse none"
        }
      });
      t.add(animateTitle(".chapter-4 .sect-3-title .h1-thin")), t.from(".chapter-4 .sect-3-title .h1-book", {
        opacity: 0
      }, "<"), t.to(".chapter-4 .sect-3-title .h1-book", {
        animation: "shine 1s ease 1"
      }, "<"), t.to(".chapter-4 .sect-3-title .h1-book", {
        duration: 1,
        clearProps: "animation"
      });
      const r = gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".chapter-4 .sect-3",
          start: "top center",
          end: `${window.innerHeight/2} top`,
          scrub: !0
        }
      });
      r.from(".chapter-4 .sect-3-content", {
        yPercent: 25
      }), r.from(".chapter-4 .sect-3-photo:nth-child(1) img", {
        scale: 1.1
      }, "<");
      const i = document.querySelector(".chapter-4 .sect-3-photos");
      if (i) {
        const s = i.scrollWidth - window.innerWidth,
          n = gsapWithCSS.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: ".chapter-4 .sect-3-photos-wrap",
              start: "top top",
              end: "bottom bottom",
              scrub: !0
            }
          });
        n.to(".chapter-4 .sect-3-photos", {
          x: -s
        }), n.to(".chapter-4 .sect-3-sticky", {
          background: "rgb(11, 11, 11)"
        }, "<"), document.querySelectorAll(".chapter-4 .sect-3-photo:not(:first-child)").forEach(f => {
          gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: f,
              containerAnimation: n,
              start: "left right",
              end: "left right",
              toggleActions: "play none reverse none"
            }
          }).fromTo(f, {
            x: "8rem",
            opacity: 0
          }, {
            x: "0rem",
            opacity: 1,
            ease: "power2.out"
          }), gsapWithCSS.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: f,
              containerAnimation: n,
              start: "left right",
              end: "right left",
              scrub: !0
            }
          }).fromTo(f.querySelector("img"), {
            x: "-5rem"
          }, {
            x: "5rem"
          })
        });
        const l = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: ".chapter-4 .sect-3-texts",
            containerAnimation: n,
            start: "left right",
            end: "left right",
            toggleActions: "play none reverse none",
            once: !0
          }
        });
        l.add(animateTitle(".chapter-4 .sect-3-texts .h1-thin")), l.from(".chapter-4 .sect-3-texts .h1-book", {
          opacity: 0
        }, "<"), l.to(".chapter-4 .sect-3-texts .h1-book", {
          animation: "shine 1s ease 1"
        }, "<"), l.to(".chapter-4 .sect-3-texts .h1-book", {
          duration: 1,
          clearProps: "animation"
        });
        const o = document.querySelector(".chapter-4 .sect-3-photo:first-child"),
          c = gsapWithCSS.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: o,
              containerAnimation: n,
              start: "left left",
              end: "right left",
              scrub: !0
            }
          });
        o && c.to(o.querySelector("img"), {
          x: "5rem"
        })
      }
    } else document.querySelectorAll(".chapter-4 .sect-3-mob .sect-3-photo-wrap").forEach(r => {
      gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: r,
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none reverse none"
        }
      }).from(r, {
        y: "8rem",
        opacity: 0,
        ease: "power2.out"
      })
    })
  }
  chapter5Sect1() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-5 .sect-1-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
        id: "stChapterFive"
      }
    });
    t.set(".chapter-5", {
      pointerEvents: "auto"
    }), t.to(".chapter-5 .sect-1-wrap", {
      opacity: 1,
      duration: .25
    }), t.fromTo(".chapter-5 .sect-1", {
      "--mx": "0%"
    }, {
      "--mx": "120%"
    }, "<")
  }
  chapter5Sect2() {
    gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-5 .sect-2",
        start: "top top",
        end: "300px top",
        scrub: !0
      }
    }).from(".chapter-5 .sect-2", {
      opacity: 0
    });
    const r = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-5 .sect-2",
        start: "top top",
        end: "top top",
        toggleActions: "play none reverse none"
      }
    });
    r.add(animateTitle(".chapter-5 .sect-2-title .h1-thin")), r.from(".chapter-5 .sect-2-title .h1-book", {
      opacity: 0
    }, "<"), r.to(".chapter-5 .sect-2-title .h1-book", {
      animation: "shine 1s ease 1"
    }, "<"), r.to(".chapter-5 .sect-2-title .h1-book", {
      duration: 1,
      clearProps: "animation"
    }), r.from(".chapter-5 .sect-2 .sect-2-image", {
      x: "8rem",
      opacity: 0,
      ease: "power2.out"
    }, "<")
  }
  chapter5Sect3() {
    if (document.querySelectorAll(".chapter-5 .sect-3 .item").forEach((r, i) => {
        const s = r.querySelector(".item-title"),
          n = gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: s,
              start: "top bottom",
              end: "top bottom",
              toggleActions: "play none reverse none"
            }
          });
        n.from(s, {
          opacity: 0
        }), s && n.to(s.querySelector(".text-shine"), {
          animation: "shine 1s ease 1"
        }, "<"), s && n.to(s.querySelector(".text-shine"), {
          duration: 1,
          clearProps: "animation"
        }), gsapWithCSS.to(r, {
          ease: "none",
          y: (i + 1) * 50,
          scrollTrigger: {
            trigger: r,
            start: "top bottom",
            end: `${r.clientHeight*2} top`,
            scrub: !0
          }
        })
      }), this.desktop) {
      const r = gsapWithCSS.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: ".union-wrap",
          start: "top bottom",
          end: "bottom center",
          scrub: 1.2
        }
      });
      r.to(".union-overlay", {
        background: "rgba(0,0,0,0)"
      }), r.to(".union-overlay", {
        duration: 2.5,
        motionPath: {
          path: "#unionPath",
          align: "#unionPath",
          start: -.13,
          end: .36
        }
      }, "<"), r.to(".union-overlay", {
        background: "rgb(11, 11, 11)"
      }, "<75%"), r.to(".union-overlay img", {
        opacity: 0
      })
    }
  }
  chapter5Sect4() {
    gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: ".chapter-5 .sect-4-name",
        start: "top bottom",
        end: "top bottom",
        toggleActions: "play none reverse none"
      }
    }).from(".chapter-5 .sect-4-name, .chapter-5 .sect-4-letter-text", {
      opacity: 0
    }).from(".chapter-5 .sect-4-image", {
      opacity: 0,
      x: "-4rem",
      ease: "power2.out"
    }, "<"), gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-5 .sect-4-name",
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    }).to(".chapter-5 .sect-4-name span, .chapter-5 .sect-4-letter", {
      y: 0
    })
  }
  navChaptersInEnd() {
    const t = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: ".chapter-5 .sect-4-footer",
          start: "bottom bottom",
          end: "bottom bottom",
          toggleActions: "play none reverse none",
          onEnter() {
            r?.classList.add("hovered")
          },
          onEnterBack() {
            r?.classList.remove("hovered")
          }
        }
      }),
      r = document.querySelector(".chapter-item:last-child"),
      i = document.querySelector(".chapter-item:last-child .chapter-text-wrap"),
      s = document.querySelectorAll(".chapter-item:not(:last-child)"),
      n = document.querySelectorAll(".chapter-item:not(:last-child) .chapter-text-wrap"),
      a = document.querySelectorAll(".chapter-item:not(:last-child) .chapter-line"),
      l = document.querySelectorAll(".chapter-item:not(:last-child) .chapter-decor-wrap");
    t.to([n, i], {
      yPercent: 200,
      stagger: .1
    }), t.to(a, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      stagger: .1
    }, "<"), t.to(l, {
      opacity: 0,
      stagger: .1
    }, "<"), t.set(s, {
      maxWidth: 0,
      minWidth: 0,
      overflow: "hidden"
    }), t.set(".chapter-nav", {
      gap: 0
    }), t.to(".chapter-decor-wrap-last", {
      opacity: 1
    }), t.to(".chapter-text-last", {
      y: 0,
      yPercent: 0,
      pointerEvents: "auto"
    }, "<")
  }
  parallaxPhotos() {
    const t = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".chapter-1 .bio .photo-wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: !0
      }
    });
    this.desktop ? t.to(".chapter-1 .bio .photo-wrap .photo", {
      y: "20rem"
    }) : t.to(".chapter-1 .bio .photo-wrap .photo", {
      y: "10rem"
    });
    const r = document.querySelectorAll(".parallax-image");
    r.length !== 0 && r.forEach(i => {
      const s = i.querySelector("img");
      if (!s) return;
      gsapWithCSS.set(s, {
        scale: 1.2
      });
      const n = () => {
        i.style.overflow = "hidden", gsapWithCSS.fromTo(s, {
          y: this.desktop ? "-5rem" : "-2.5rem",
          ease: "none"
        }, {
          y: this.desktop ? "5rem" : "2.5rem",
          ease: "none",
          scrollTrigger: {
            trigger: i,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          }
        })
      };
      s.complete && s.naturalHeight !== 0 ? n() : s.onload = () => n()
    })
  }
  titlesAnim() {
    document.querySelectorAll(".title-anim").forEach(r => {
      const i = r.querySelectorAll(".title-book"),
        s = r.querySelectorAll(".title-thin"),
        n = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: r,
            start: "top bottom",
            end: "top bottom",
            toggleActions: "play none reverse none"
          }
        });
      n.add(animateTitle(s)), n.from(i, {
        opacity: 0
      }, "<"), n.to(i, {
        animation: "shine 1s ease 1"
      }, "<"), n.to(i, {
        duration: 1,
        clearProps: "animation"
      })
    })
  }
  textAnim() {
    document.querySelectorAll(".text-anim").forEach(r => {
      gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: r,
          start: "top bottom",
          end: "top bottom",
          toggleActions: "play none reverse none"
        }
      }).add(animateText(r))
    })
  }
  headerNormal(t) {
    const r = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: t,
        start: "top top",
        end: `${window.innerHeight/4} top`,
        scrub: !0
      }
    });
    return this.desktop ? (r.to("header.header", {
      padding: "1.25rem 1.25rem 0"
    }), r.to(".chapter-nav", {
      padding: "0 1.25rem 1.25rem"
    }, "<")) : (r.to("header.header", {
      padding: "1rem 1rem 0"
    }), r.to(".chapter-nav", {
      padding: "0 1rem 1rem"
    }, "<")), r
  }
  headerShorter(t) {
    const r = gsapWithCSS.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: t,
        start: "top top",
        end: `${window.innerHeight/4} top`,
        scrub: !0
      }
    });
    return this.desktop ? (r.to("header.header", {
      padding: "2.5rem 2.5rem 0"
    }), r.to(".chapter-nav", {
      padding: "0 2.5rem 2.5rem"
    }, "<")) : (r.to("header.header", {
      padding: "1.5rem 1.5rem 0"
    }), r.to(".chapter-nav", {
      padding: "0 1.5rem 1.5rem"
    }, "<")), r
  }
  headerColor(t, r) {
    const i = useState("header-black");
    ScrollTrigger.create({
      trigger: t,
      start: "top top",
      onEnter() {
        i.value = r
      },
      onLeaveBack() {
        i.value = !r
      }
    })
  }
  navColor(t, r, i) {
    const s = document.querySelector(".chapter-nav");
    ScrollTrigger.create({
      trigger: t,
      start: `top ${i?"top":"bottom"}`,
      onEnter() {
        r ? s?.classList.add("_black") : s?.classList.remove("_black")
      },
      onLeaveBack() {
        r ? s?.classList.remove("_black") : s?.classList.add("_black")
      }
    })
  }
  initNav() {
    this.headerShorter(".chapter-1 .bio-sect"), this.headerNormal(".chapter-1 .brands-sect"), this.headerShorter(".chapter-3 .sect-3-container"), this.headerNormal(".chapter-4 .sect-1"), this.headerShorter(".chapter-4 .sect-3-photos-wrap"), this.headerNormal(".chapter-5 .sect-1"), this.headerColor(".chapter-1 .bio-sect", !0), this.headerColor(".chapter-1 .brands-sect", !1), this.headerColor(".chapter-3 .sect-3-container", !0), this.headerColor(".chapter-4 .sect-1", !1), this.navColor(".chapter-3 .sect-3-container", !0), this.navColor(".chapter-4 .sect-1-wrap", !1)
  }
}
const _hoisted_1 = {
    class: "page"
  },
  _hoisted_2 = {
    class: "page-wrap"
  },
  _sfc_main = defineComponent({
    __name: "index",
    setup(e) {
      return onMounted(() => {
        setTimeout(() => {
          new animatePage
        }, 500)
      }), (t, r) => {
        const i = __nuxt_component_0$g,
          s = __nuxt_component_1$d,
          n = __nuxt_component_2$5,
          a = __nuxt_component_3$4,
          l = __nuxt_component_4$1,
          o = __nuxt_component_5,
          c = __nuxt_component_6,
          f = __nuxt_component_7,
          b = __nuxt_component_8,
          u = __nuxt_component_9,
          y = __nuxt_component_10;
        return openBlock(), createElementBlock("main", _hoisted_1, [createVNode(i), createVNode(s), createVNode(n), createVNode(a), createVNode(l), createBaseVNode("div", _hoisted_2, [createVNode(o), createVNode(c), createVNode(f), createVNode(b), createVNode(u), createVNode(y)])])
      }
    }
  }),
  index = _export_sfc(_sfc_main, [
    ["__scopeId", "data-v-0441ea5a"]
  ]);
export {
  index as
  default
};