/* https://fame-estate.com/_nuxt/C3DBThoh.js */
import {
  u as unpackMeta,
  g as gsap,
  C as CSSPlugin,
  S as SplitText,
  e as gsapWithCSS$1,
  r as ref,
  f as onMounted,
  h as onBeforeUnmount,
  i as defineComponent,
  j as useRuntimeConfig,
  k as useState,
  l as reactive,
  o as openBlock,
  c as createElementBlock,
  a as createBaseVNode,
  t as toDisplayString,
  m as unref,
  n as createStaticVNode,
  p as ScrollTrigger,
  q as nextTick$1,
  s as watch,
  v as useI18n,
  x as withModifiers,
  y as normalizeClass,
  z as provide,
  A as createCommentVNode,
  b as createVNode,
  w as withCtx,
  B as createBlock,
  F as Fragment,
  D as normalizeStyle,
  E as renderList,
  G as computed,
  T as Teleport,
  d as createTextVNode,
  H as mergeModels,
  I as useModel,
  J as withDirectives,
  K as vModelDynamic,
  L as publicAssetsURL,
  M as useNuxtApp,
  N as asyncDataDefaults,
  O as shallowRef,
  P as toRef,
  Q as onBeforeMount,
  R as onUnmounted,
  U as onScopeDispose,
  V as createError,
  W as getCurrentInstance,
  X as getCurrentScope,
  Y as useRoute,
  Z as withAsyncContext
} from "./BGG7sC63.js";
import {
  u as useHead,
  _ as _export_sfc
} from "./Cnghhg3X.js";
import {
  _ as __nuxt_component_0$4
} from "./D_ypvc1i.js";

function useSeoMeta(e, t) {
  const {
    title: r,
    titleTemplate: i,
    ...s
  } = e;
  return useHead({
    title: r,
    titleTemplate: i,
    _flatMeta: s
  }, {
    ...t,
    transform(a) {
      const o = unpackMeta({
        ...a._flatMeta
      });
      return delete a._flatMeta, {
        ...a,
        meta: o
      }
    }
  })
}
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
gsapWithCSS.core.Tween;
const animTitle = (e, t) => {
  const r = document.querySelector(e);
  if (!r) return;
  const {
    lines: i
  } = new SplitText(r, {
    linesClass: "line",
    type: "lines"
  });
  i.forEach(s => {
    s.innerHTML = `<span class='line-text'>${s.innerHTML}</span>`
  }), gsapWithCSS$1.set(r, {
    opacity: 1
  }), gsapWithCSS$1.to(r.querySelectorAll(".line .line-text"), {
    transform: "translateY(0)",
    stagger: {
      each: .08
    },
    duration: .6,
    ease: "out-quint",
    willChange: "transform",
    scrollTrigger: {
      trigger: r,
      start: "top 95%",
      end: "bottom bottom"
    },
    ...t
  })
};

function useViewport() {
  const e = {
      mobile: 375,
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

function setCssVariable(e, t) {
  document.documentElement.style.setProperty(e, t)
}

function pxInRem(e, t = 16) {
  const r = window.innerWidth >= 1024 ? 1440 : 375;
  return e / r * window.innerWidth
}

function isIOS() {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  const e = navigator.userAgent,
    t = navigator.platform,
    r = /iPhone|iPad|iPod/.test(e),
    i = t === "MacIntel" && navigator.maxTouchPoints > 1,
    s = t === "MacIntel",
    a = e.includes("Safari") && !e.includes("Chrome") && !e.includes("Chromium") && !e.includes("Firefox") && !e.includes("Edg");
  return r || i || s && a
}
const _hoisted_1$k = {
    class: "preloader"
  },
  _hoisted_2$j = {
    id: "first-heading",
    class: "first-heading h1"
  },
  _hoisted_3$i = {
    class: "loading-area"
  },
  _hoisted_4$f = {
    class: "loading-anim l2"
  },
  _sfc_main$k = defineComponent({
    __name: "Preloader",
    props: {
      title: {}
    },
    setup(e) {
      useRuntimeConfig().public;
      const t = useState("preloaderDone"),
        r = useState("activeNavMenu"),
        i = useState("init-logo-footer"),
        s = useState("lenis");
      useViewport();
      const a = reactive({
          value: 0
        }),
        o = async () => {
          var h;
          (h = s.value) == null || h.stop();
          const l = gsapWithCSS.matchMedia(),
            n = gsapWithCSS.timeline({
              defaults: {
                ease: "in-out-quint"
              }
            });
          i.value = !1, t.value = !1, ScrollTrigger.killAll(), await nextTick$1(), l.add("(min-width: 1024px)", () => {
            n.fromTo(a, {
              value: 0
            }, {
              value: 100,
              duration: 1.2,
              roundProps: "value",
              onComplete: () => {
                nextTick$1(() => {
                  gsapWithCSS.to("main.page", {
                    height: "auto",
                    maxHeight: "unset",
                    overflow: "unset"
                  })
                })
              }
            }), n.to(".preloader .loading-anim", {
              transform: "translateY(0)",
              duration: 1.2
            }, "<"), n.to(".fixed-screen .right-anim", {
              duration: 1.2,
              transform: "translate(0%, -50%)"
            }), n.to(".fixed-screen .left-anim", {
              duration: 1.2,
              transform: "translate(0%, -50%)"
            }, "<"), n.to(".fixed-screen .preloader-text", {
              y: -100,
              duration: .1
            }, "<+=0.55"), n.to(".fixed-screen .screen-main-part", {
              y: 0,
              duration: .1,
              onComplete: () => {
                nextTick$1(() => {
                  window.scrollTo(0, 0)
                }), gsapWithCSS.set([".fixed-screen .right-anim", ".fixed-screen .left-anim"], {
                  overflow: "unset"
                }), gsapWithCSS.set(".fixed-screen .preloader-text", {
                  autoAlpha: 0
                }), r.value = !0
              }
            }, "<"), n.set(".preloader-bg", {
              autoAlpha: 0
            }, "-=0.6"), n.set("#first-heading", {
              autoAlpha: 0
            }, "-=0.6"), n.set([".preloader .logo", ".preloader .center span"], {
              autoAlpha: 0
            }, "<"), n.to("section.hero .decor-circle", {
              transform: "translate(-50%, 0%)",
              duration: 1,
              top: "0.5rem"
            }, "<+=0.5"), n.to("section.hero .symbol", {
              transform: "translate(-50%, -100%)",
              top: () => window.innerHeight - pxInRem(8),
              duration: 1,
              onStart: () => {
                animTitle("section.hero .title", {
                  delay: .4
                }), gsapWithCSS.to("article.full-cycle", {
                  ease: "out-quint",
                  duration: .8,
                  transform: "translateY(0)",
                  delay: .6,
                  willChange: "transform"
                })
              }
            }, "<"), n.to(".preloader", {
              duration: 1,
              autoAlpha: 0,
              onComplete: () => {
                t.value = !0, setTimeout(() => {
                  var d;
                  (d = s.value) == null || d.start()
                }, 500)
              }
            }, "<")
          }), l.add("(max-width: 1023px)", () => {
            n.fromTo(a, {
              value: 0
            }, {
              value: 100,
              duration: 1.2,
              roundProps: "value"
            }), n.to(".preloader .loading-anim", {
              transform: "translateY(0)",
              duration: 1.2,
              onComplete: () => {
                nextTick$1(() => {
                  window.scrollTo(0, 0), gsapWithCSS.to("main.page", {
                    height: "auto",
                    maxHeight: "unset",
                    overflow: "unset"
                  })
                })
              }
            }, "<"), n.to(".preloader", {
              duration: .6,
              autoAlpha: 0,
              onComplete: () => {
                t.value = !0, animTitle("section.hero .title", {
                  delay: .1
                }), gsapWithCSS.to("article.full-cycle", {
                  ease: "out-quint",
                  duration: .8,
                  transform: "translateY(0)",
                  delay: .6,
                  willChange: "transform"
                }), gsapWithCSS.to(".mobile-menu", {
                  duration: .6,
                  y: 0,
                  opacity: 1
                }), setTimeout(() => {
                  var d;
                  (d = s.value) == null || d.start()
                }, 500)
              }
            })
          })
        };
      return onMounted(() => {
        o()
      }), (l, n) => (openBlock(), createElementBlock("div", _hoisted_1$k, [n[0] || (n[0] = createBaseVNode("div", {
        class: "preloader-bg"
      }, null, -1)), createBaseVNode("h1", _hoisted_2$j, toDisplayString(l.title), 1), createBaseVNode("div", _hoisted_3$i, [createBaseVNode("p", _hoisted_4$f, [createBaseVNode("span", null, toDisplayString(unref(a).value) + " " + toDisplayString(l.$t("percent")), 1), createBaseVNode("span", null, toDisplayString(l.$t("loading")), 1)])]), n[1] || (n[1] = createStaticVNode('<div class="center" data-v-d8316c68><div class="logo" data-v-d8316c68><svg width="176" height="42" viewBox="0 0 176 42" fill="none" class="inner-svg" xmlns="http://www.w3.org/2000/svg" data-v-d8316c68><path d="M62.2739 19.7134L74.1816 40.6402C74.3421 40.8649 74.5667 40.9612 74.9198 40.9932V41.25H68.8215V40.9932C69.3992 40.9612 69.5918 40.7044 69.3992 40.2871L66.2859 34.8308H51.297L48.2478 40.1908C48.0231 40.6723 48.2157 40.9612 48.7934 40.9932V41.25H42.984V40.9932C43.3371 40.9612 43.5618 40.8649 43.7222 40.6402L55.662 19.6492C55.8546 19.2641 55.7262 19.0394 55.2769 19.0073V18.7505H62.659V19.0073C62.1776 19.0394 62.0492 19.2641 62.2739 19.7134ZM64.5848 31.6532L58.8075 21.3182L53.0302 31.6532H64.5848Z" fill="white" data-v-d8316c68></path><path d="M128.037 18.7505V19.0073C127.395 19.1036 127.234 19.2962 127.234 19.906V40.0946C127.234 40.7044 127.395 40.897 128.037 40.9932V41.25H122.548V40.9932C123.094 40.9612 123.351 40.6402 123.351 40.0946V23.3724L112.181 41.1537H111.86L100.659 23.8218V40.0946C100.659 40.6402 100.948 40.9612 101.493 40.9932V41.25H96.0048V40.9932C96.6467 40.897 96.8393 40.6402 96.8393 40.0946V19.906C96.8393 19.3604 96.6467 19.1036 96.0048 19.0073V18.7505H102.841V19.0073C102.424 19.0394 102.296 19.232 102.456 19.5851L112.181 34.5419L121.585 19.553C121.746 19.1999 121.618 19.0394 121.2 19.0073V18.7505H128.037Z" fill="white" data-v-d8316c68></path><path d="M175.073 41.25H150.744V40.9932C151.386 40.897 151.578 40.6402 151.578 40.0946V19.906C151.578 19.3604 151.386 19.1036 150.744 19.0073V18.7505H175.073V22.7947H174.816C174.72 22.1528 174.495 21.9923 173.885 21.9923H155.558V28.251H168.846C169.456 28.251 169.649 28.0585 169.745 27.4165H170.002V32.231H169.745C169.649 31.589 169.456 31.3965 168.846 31.3965H155.558V38.0083H173.885C174.495 38.0083 174.72 37.8478 174.816 37.2059H175.073V41.25Z" fill="white" data-v-d8316c68></path><path d="M8.72504 41.25H3.0761V41.0253C3.71803 40.9291 3.9106 40.7044 3.9106 40.0946V31.6853H2.16462C1.55479 31.6853 1.36222 31.8458 1.26593 32.4877H1.00916V27.7053H1.26593C1.36222 28.3473 1.61898 28.5398 2.16462 28.5398H3.9106V19.906C3.9106 19.2962 3.71803 19.0715 3.0761 18.9752V18.7505H27.4051V22.7947H27.1483C27.052 22.1528 26.8594 21.9923 26.2496 21.9923H7.89054V28.5399H21.2105C21.7561 28.5399 22.0129 28.3473 22.1092 27.7054H22.3659V32.4877H22.1092C22.0129 31.8458 21.8203 31.6853 21.2105 31.6853H7.89054V40.0946C7.89054 40.7044 8.08312 40.9291 8.72504 41.0253V41.25Z" fill="white" data-v-d8316c68></path><path d="M61.2175 3C61.2175 4.24264 60.2102 5.25 58.9675 5.25C57.7249 5.25 56.7175 4.24264 56.7175 3C56.7175 1.75736 57.7249 0.75 58.9675 0.75C60.2102 0.75 61.2175 1.75736 61.2175 3Z" fill="white" data-v-d8316c68></path></svg></div></div>', 1))]))
    }
  }),
  __nuxt_component_0$3 = _export_sfc(_sfc_main$k, [
    ["__scopeId", "data-v-d8316c68"]
  ]);

function useLockScroll() {
  const e = useState("scroll-locked", () => !1),
    t = useState("lenis");

  function r(i) {
    var s, a;
    e.value = i, i ? (s = t.value) == null || s.stop() : (a = t.value) == null || a.start()
  }
  return {
    lockScroll: r,
    isLocked: e
  }
}

function useInitAfterPreloader(e) {
  const t = useState("preloaderDone");
  watch(() => t.value, r => {
    r && setTimeout(() => {
      e()
    }, 500)
  })
}
const _hoisted_1$j = {
    class: "left-wrap l1"
  },
  _hoisted_2$i = ["data-menu-icon"],
  _hoisted_3$h = {
    "data-form-anchor": "",
    class: "lets-discuss l1"
  },
  _hoisted_4$e = {
    class: "menu-content"
  },
  _hoisted_5$d = {
    class: "bottom-text l1"
  },
  _sfc_main$j = defineComponent({
    __name: "MobileMenu",
    props: {
      handleAnchor: {
        type: Function
      }
    },
    setup(e) {
      const t = ref(),
        {
          locale: r,
          setLocale: i
        } = useI18n(),
        s = useState("mobile-menu-state", () => !1),
        {
          lockScroll: a
        } = useLockScroll(),
        o = {
          introduction: window.innerHeight + pxInRem(100),
          about: 0,
          cases: 0,
          services: 0,
          partnership: 0,
          team: 0,
          contact: 0
        },
        l = () => {
          const g = document.getElementById("change-lang-overlap");
          g && gsapWithCSS.to(g, {
            autoAlpha: 1,
            duration: .45,
            onComplete: () => {
              i(r.value === "en" ? "ru" : "en")
            }
          })
        },
        n = g => {
          s.value = !1, h(!1), setTimeout(() => {
            const c = [...document.querySelectorAll("[data-scroll-section-mob]")];
            gsapWithCSS.to(window, {
              scrollTo: {
                y: c.find(v => v.dataset.scrollSectionMob === g),
                autoKill: !1,
                offsetY: o[g] || 0
              },
              duration: 1
            })
          }, 600)
        },
        h = g => {
          s.value = g, a(g)
        },
        d = () => {
          setTimeout(() => {
            [...document.querySelectorAll("[data-form-anchor]")].forEach(c => {
              c.addEventListener("click", () => {
                gsapWithCSS.to(window, {
                  scrollTo: {
                    y: '[data-scroll-section-mob="contact"]',
                    autoKill: !1
                  },
                  duration: 1
                })
              })
            }), ScrollTrigger.create({
              trigger: "section.about-section",
              start: "top center",
              end: "top 50.1%",
              onEnter: () => {
                var c;
                (c = t.value) == null || c.classList.add("white-plash")
              },
              onLeaveBack: () => {
                var c;
                (c = t.value) == null || c.classList.remove("white-plash")
              }
            })
          }, 500)
        };
      return watch(() => s.value, g => {
        var c, v;
        g ? (c = t.value) == null || c.classList.add("dark") : (v = t.value) == null || v.classList.remove("dark")
      }), useInitAfterPreloader(d), (g, c) => (openBlock(), createElementBlock("article", {
        ref_key: "mobMenuRef",
        ref: t,
        class: "mobile-menu"
      }, [createBaseVNode("div", _hoisted_1$j, [createBaseVNode("button", {
        class: "nav-btn",
        "data-menu-icon": unref(s) ? "[ - ]" : "[ + ]",
        onClick: c[0] || (c[0] = withModifiers(v => h(!unref(s)), ["stop"]))
      }, toDisplayString(unref(s) ? g.$t("close") : g.$t("navigation")), 9, _hoisted_2$i), createBaseVNode("button", {
        class: "lang-switcher",
        onClick: l
      }, toDisplayString(unref(r) === "en" ? "RU" : "EN"), 1)]), createBaseVNode("button", _hoisted_3$h, [createBaseVNode("span", null, toDisplayString(g.$t("discuss")), 1), c[9] || (c[9] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", {
        class: normalizeClass(["menu", {
          active: unref(s)
        }])
      }, [createBaseVNode("div", {
        class: "menu-overlay",
        onClick: c[1] || (c[1] = withModifiers(v => h(!1), ["self"]))
      }), createBaseVNode("div", _hoisted_4$e, [createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 1 ]",
        onClick: c[2] || (c[2] = v => n("introduction"))
      }, toDisplayString(g.$t("introduction")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 2 ]",
        onClick: c[3] || (c[3] = v => n("about"))
      }, toDisplayString(g.$t("about")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 3 ]",
        onClick: c[4] || (c[4] = v => n("cases"))
      }, toDisplayString(g.$t("cases")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 4 ]",
        onClick: c[5] || (c[5] = v => n("services"))
      }, toDisplayString(g.$t("services")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 5 ]",
        onClick: c[6] || (c[6] = v => n("partnership"))
      }, toDisplayString(g.$t("partnership")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 6 ]",
        onClick: c[7] || (c[7] = v => n("team"))
      }, toDisplayString(g.$t("team")), 1)]), createBaseVNode("li", null, [createBaseVNode("button", {
        class: "anchor h1",
        "data-anchor-num": "[ 7 ]",
        onClick: c[8] || (c[8] = v => n("contact"))
      }, toDisplayString(g.$t("contact")), 1)])]), createBaseVNode("p", _hoisted_5$d, " © " + toDisplayString(new Date().getFullYear()) + " fame. " + toDisplayString(g.$t("all-rights")), 1)])], 2)], 512))
    }
  }),
  __nuxt_component_0$2 = _export_sfc(_sfc_main$j, [
    ["__scopeId", "data-v-0bf8537f"]
  ]),
  clientOnlySymbol = Symbol.for("nuxt:client-only"),
  __nuxt_component_4 = defineComponent({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {
      slots: t,
      attrs: r
    }) {
      const i = ref(!1);
      return onMounted(() => {
        i.value = !0
      }), provide(clientOnlySymbol, !0), s => {
        var n;
        if (i.value) return (n = t.default) == null ? void 0 : n.call(t);
        const a = t.fallback || t.placeholder;
        if (a) return a();
        const o = s.fallback || s.placeholder || "",
          l = s.fallbackTag || s.placeholderTag || "span";
        return createElementBlock(l, r, o)
      }
    }
  }),
  _hoisted_1$i = {
    key: 0,
    class: "fixed-screen"
  },
  _hoisted_2$h = {
    class: "left-anim"
  },
  _hoisted_3$g = {
    class: "preloader-text l1"
  },
  _hoisted_4$d = {
    class: "wrap-anim-btn"
  },
  _hoisted_5$c = {
    class: "wrap-anim-btn"
  },
  _hoisted_6$b = {
    class: "right-anim"
  },
  _hoisted_7$b = {
    class: "preloader-text l1"
  },
  _hoisted_8$b = {
    class: "nav-list"
  },
  _hoisted_9$b = {
    class: "wrap-item"
  },
  _hoisted_10$b = {
    class: "wrap-item"
  },
  _hoisted_11$a = {
    class: "wrap-item"
  },
  _hoisted_12$9 = {
    class: "wrap-item"
  },
  _hoisted_13$9 = {
    class: "wrap-item"
  },
  _hoisted_14$8 = {
    class: "wrap-item"
  },
  _hoisted_15$7 = {
    class: "wrap-item"
  },
  HIDE_MENU_VALUE = 150,
  _sfc_main$i = defineComponent({
    __name: "Screen",
    setup(e) {
      const t = ref(!1),
        {
          isMobile: r
        } = useViewport(),
        {
          locale: i,
          setLocale: s
        } = useI18n(),
        a = useState("activeNavMenu"),
        o = useState("hoveredMenu", () => !1),
        l = useState("lenis");
      let n = {
        introduction: 0,
        about: 0,
        cases: 0,
        services: 0,
        partnership: 0,
        team: 0,
        contact: 0
      };
      const h = () => {
          const S = document.getElementById("change-lang-overlap");
          S && gsapWithCSS.to(S, {
            autoAlpha: 1,
            duration: .45,
            onComplete: () => {
              s(i.value === "en" ? "ru" : "en")
            }
          })
        },
        d = S => {
          if (t.value) {
            a.value = !0;
            return
          }
          S.scroll < HIDE_MENU_VALUE && !a.value && (a.value = !0), S.scroll > HIDE_MENU_VALUE && a.value && !o.value && (a.value = !1)
        },
        g = async () => {
          if (await nextTick$1(), r.value) return;
          const S = document.querySelectorAll("*[data-dark-screen]"),
            p = document.querySelectorAll("*[data-light-screen]");
          l.value.on("scroll", d), ScrollTrigger.create({
            trigger: "footer.footer",
            start: "top center",
            end: "top 49.9%",
            onEnter: () => {
              t.value = !0
            },
            onLeaveBack: () => {
              t.value = !1
            }
          }), S.forEach(m => {
            const f = m.getAttribute("data-start-trigger") || "top top";
            ScrollTrigger.create({
              trigger: m,
              start: f,
              end: "bottom bottom",
              onEnter: () => {
                document.body.classList.add("dark")
              },
              onLeaveBack: () => {
                document.body.classList.remove("dark")
              }
            })
          }), p.forEach(m => {
            ScrollTrigger.create({
              trigger: m,
              start: "top center",
              end: "bottom bottom",
              onEnter: () => {
                document.body.classList.remove("dark")
              },
              onLeaveBack: () => {
                document.body.classList.add("dark")
              }
            })
          })
        }, c = () => {
          o.value = !1
        }, v = () => {
          r.value || l.value.scroll < HIDE_MENU_VALUE || (o.value = !0, a.value = !0)
        }, _ = async () => {
          var m, f, y, w, E, P, T;
          if (g(), await nextTick$1(), r.value) return;
          const S = [...document.querySelectorAll("[data-scroll-section]")],
            p = r.value ? window.innerHeight / 2 * -1 : window.innerHeight / 100 * 75;
          n.introduction = ((m = S.find(A => A.dataset.scrollSection === "introduction")) == null ? void 0 : m.getBoundingClientRect().height) || 0, n.about = ((f = S.find(A => A.dataset.scrollSection === "about")) == null ? void 0 : f.getBoundingClientRect().top) || 0, n.cases = (((y = S.find(A => A.dataset.scrollSection === "cases")) == null ? void 0 : y.getBoundingClientRect().top) || 0) - p, n.services = ((w = S.find(A => A.dataset.scrollSection === "services")) == null ? void 0 : w.getBoundingClientRect().top) || 0, n.partnership = ((E = S.find(A => A.dataset.scrollSection === "partnership")) == null ? void 0 : E.getBoundingClientRect().top) || 0, n.team = (((P = S.find(A => A.dataset.scrollSection === "team")) == null ? void 0 : P.getBoundingClientRect().top) || 0) + pxInRem(20), n.contact = ((T = S.find(A => A.dataset.scrollSection === "contact")) == null ? void 0 : T.getBoundingClientRect().top) || 0, nextTick$1(() => {
            [...document.querySelectorAll("[data-form-anchor]")].forEach($ => {
              $.addEventListener("click", () => {
                u("contact")
              })
            })
          })
        }, u = S => {
          l.value.scrollTo(n[S])
        };
      return useInitAfterPreloader(_), (S, p) => {
        const m = __nuxt_component_0$2,
          f = __nuxt_component_4;
        return openBlock(), createElementBlock(Fragment, null, [unref(r) ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_1$i, [createBaseVNode("div", _hoisted_2$h, [createBaseVNode("p", _hoisted_3$g, toDisplayString(S.$t("in-search")), 1), createBaseVNode("button", {
          id: "lets-discuss-btn",
          class: "lets-discuss l1 screen-main-part",
          onClick: p[0] || (p[0] = withModifiers(y => u("contact"), ["stop"]))
        }, [createBaseVNode("div", _hoisted_4$d, [createBaseVNode("span", null, toDisplayString(S.$t("discuss")), 1), p[8] || (p[8] = createBaseVNode("svg", {
          width: "8",
          height: "14",
          viewBox: "0 0 8 14",
          fill: "none",
          class: "arrow-svg",
          xmlns: "http://www.w3.org/2000/svg"
        }, [createBaseVNode("path", {
          d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
          fill: "white"
        })], -1))]), createBaseVNode("div", _hoisted_5$c, [createBaseVNode("span", null, toDisplayString(S.$t("discuss")), 1), p[9] || (p[9] = createBaseVNode("svg", {
          width: "8",
          height: "14",
          viewBox: "0 0 8 14",
          fill: "none",
          class: "arrow-svg",
          xmlns: "http://www.w3.org/2000/svg"
        }, [createBaseVNode("path", {
          d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
          fill: "white"
        })], -1))])])]), createBaseVNode("div", _hoisted_6$b, [createBaseVNode("p", _hoisted_7$b, toDisplayString(S.$t("new-emotions")), 1), createBaseVNode("div", {
          class: normalizeClass(["navigation-menu l1 screen-main-part", {
            active: unref(a)
          }])
        }, [(openBlock(), createElementBlock("button", {
          key: 0,
          class: "nav-name",
          onMouseenter: withModifiers(v, ["stop"]),
          onMouseout: c
        }, toDisplayString(S.$t("navigation")), 33)), createBaseVNode("button", {
          class: "lang-switch",
          onClick: h
        }, [createBaseVNode("span", null, toDisplayString(unref(i) === "en" ? "ru" : "en"), 1), createBaseVNode("span", null, toDisplayString(unref(i) === "en" ? "ru" : "en"), 1)]), createBaseVNode("ul", _hoisted_8$b, [createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1",
          onClick: p[1] || (p[1] = withModifiers(y => u("introduction"), ["stop"]))
        }, [p[10] || (p[10] = createBaseVNode("sup", null, "[ 1 ]", -1)), createBaseVNode("p", _hoisted_9$b, [createBaseVNode("span", null, toDisplayString(S.$t("introduction")), 1), createBaseVNode("span", null, toDisplayString(S.$t("introduction")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n2",
          onClick: p[2] || (p[2] = withModifiers(y => u("about"), ["stop"]))
        }, [p[11] || (p[11] = createBaseVNode("sup", null, "[ 2 ]", -1)), createBaseVNode("p", _hoisted_10$b, [createBaseVNode("span", null, toDisplayString(S.$t("about")), 1), createBaseVNode("span", null, toDisplayString(S.$t("about")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n3",
          onClick: p[3] || (p[3] = withModifiers(y => u("cases"), ["stop"]))
        }, [p[12] || (p[12] = createBaseVNode("sup", null, "[ 3 ]", -1)), createBaseVNode("p", _hoisted_11$a, [createBaseVNode("span", null, toDisplayString(S.$t("cases")), 1), createBaseVNode("span", null, toDisplayString(S.$t("cases")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n4",
          onClick: p[4] || (p[4] = withModifiers(y => u("services"), ["stop"]))
        }, [p[13] || (p[13] = createBaseVNode("sup", null, "[ 4 ]", -1)), createBaseVNode("p", _hoisted_12$9, [createBaseVNode("span", null, toDisplayString(S.$t("services")), 1), createBaseVNode("span", null, toDisplayString(S.$t("services")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n5",
          onClick: p[5] || (p[5] = withModifiers(y => u("partnership"), ["stop"]))
        }, [p[14] || (p[14] = createBaseVNode("sup", null, "[ 5 ]", -1)), createBaseVNode("p", _hoisted_13$9, [createBaseVNode("span", null, toDisplayString(S.$t("partnership")), 1), createBaseVNode("span", null, toDisplayString(S.$t("partnership")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n6",
          onClick: p[6] || (p[6] = withModifiers(y => u("team"), ["stop"]))
        }, [p[15] || (p[15] = createBaseVNode("sup", null, "[ 6 ]", -1)), createBaseVNode("p", _hoisted_14$8, [createBaseVNode("span", null, toDisplayString(S.$t("team")), 1), createBaseVNode("span", null, toDisplayString(S.$t("team")), 1)])])]), createBaseVNode("li", null, [createBaseVNode("button", {
          class: "l1 n6",
          onClick: p[7] || (p[7] = withModifiers(y => u("contact"), ["stop"]))
        }, [p[16] || (p[16] = createBaseVNode("sup", null, "[ 7 ]", -1)), createBaseVNode("p", _hoisted_15$7, [createBaseVNode("span", null, toDisplayString(S.$t("contact")), 1), createBaseVNode("span", null, toDisplayString(S.$t("contact")), 1)])])])])], 2)])])), createVNode(f, null, {
          default: withCtx(() => [unref(r) ? (openBlock(), createBlock(m, {
            key: 0,
            handleAnchor: u
          })) : createCommentVNode("", !0)]),
          _: 1
        })], 64)
      }
    }
  }),
  __nuxt_component_1$1 = _export_sfc(_sfc_main$i, [
    ["__scopeId", "data-v-7f5ca62b"]
  ]),
  _hoisted_1$h = ["data-text"],
  _sfc_main$h = defineComponent({
    __name: "Simple",
    props: {
      text: {}
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("div", {
        class: "wrap l1",
        "data-text": t.text
      }, [createBaseVNode("span", null, toDisplayString(t.text), 1)], 8, _hoisted_1$h))
    }
  }),
  __nuxt_component_1 = _export_sfc(_sfc_main$h, [
    ["__scopeId", "data-v-3951ba5b"]
  ]),
  _hoisted_1$g = {
    class: "text l1-t"
  },
  _hoisted_2$g = {
    class: "text l1-t"
  },
  _sfc_main$g = defineComponent({
    __name: "FormNotif",
    setup(e) {
      const t = useState("successNotif");
      return (r, i) => {
        const s = __nuxt_component_1;
        return openBlock(), createElementBlock("aside", {
          class: normalizeClass(["notif", {
            active: unref(t)
          }])
        }, [createBaseVNode("div", null, [createBaseVNode("p", _hoisted_1$g, toDisplayString(r.$t("notif.first")), 1), createBaseVNode("p", _hoisted_2$g, toDisplayString(r.$t("notif.second")), 1)]), createBaseVNode("button", {
          class: "btn-close",
          onClick: i[0] || (i[0] = withModifiers(() => t.value = !1, ["stop"]))
        }, [createVNode(s, {
          text: r.$t("close")
        }, null, 8, ["text"])])], 2)
      }
    }
  }),
  _hoisted_1$f = {
    class: "full-cycle"
  },
  _hoisted_2$f = {
    class: "left-text l1-t"
  },
  _hoisted_3$f = {
    key: 0,
    class: "steps"
  },
  _hoisted_4$c = {
    class: "step l1",
    "data-form-anchor": ""
  },
  _hoisted_5$b = {
    class: "wrap-anim-line"
  },
  _hoisted_6$a = {
    class: "wrap-anim-line"
  },
  _hoisted_7$a = {
    class: "step l1",
    "data-form-anchor": ""
  },
  _hoisted_8$a = {
    class: "wrap-anim-line"
  },
  _hoisted_9$a = {
    class: "wrap-anim-line"
  },
  _hoisted_10$a = {
    class: "step l1",
    "data-form-anchor": ""
  },
  _hoisted_11$9 = {
    class: "wrap-anim-line"
  },
  _hoisted_12$8 = {
    class: "wrap-anim-line"
  },
  _hoisted_13$8 = {
    class: "step l1",
    "data-form-anchor": ""
  },
  _hoisted_14$7 = {
    class: "wrap-anim-line"
  },
  _hoisted_15$6 = {
    class: "wrap-anim-line"
  },
  _hoisted_16$5 = {
    class: "step l1",
    "data-form-anchor": ""
  },
  _hoisted_17$4 = {
    class: "wrap-anim-line"
  },
  _hoisted_18$2 = {
    class: "wrap-anim-line"
  },
  _hoisted_19$2 = {
    key: 1,
    class: "wrap-mob-links h1",
    "data-form-anchor": ""
  },
  _hoisted_20$2 = {
    class: "scroller"
  },
  _sfc_main$f = defineComponent({
    __name: "FullCycleArticle",
    setup(e) {
      const t = useState("init-logo-footer"),
        r = ref(!1),
        {
          isMobile: i
        } = useViewport(),
        s = reactive({
          hero: {
            right: 0,
            bottom: 0
          },
          other: {
            right: 0,
            bottom: 0
          }
        }),
        a = () => {
          if (i.value) return;
          const l = document.querySelector(".lottie-logo-wrap"),
            n = document.getElementById("lets-discuss-btn"),
            h = isIOS();
          l && (gsapWithCSS.fromTo(l, {
            bottom: 0,
            scale: 1
          }, {
            ...!h && {
              right: "50%",
              bottom: "60%",
              transform: "translate(50%, 0%) scale(4)"
            },
            ...h && {
              right: () => window.innerWidth / 2 - 448 / 2,
              bottom: "45%",
              width: "28rem",
              height: "28rem"
            },
            scrollTrigger: {
              trigger: "footer.footer",
              start: "top bottom",
              end: "top 10%",
              scrub: .4,
              toggleActions: "play none none reverse"
            }
          }), ScrollTrigger.create({
            trigger: "footer.footer",
            start: "top bottom",
            end: "top top",
            onEnter: () => {
              r.value = !0
            },
            onLeaveBack: () => {
              r.value = !1
            }
          }), n == null || n.addEventListener("mouseenter", () => {
            r.value || h || gsapWithCSS.to(l, {
              scale: 6,
              duration: .8,
              ease: "out-quint",
              transform: "translate(50%, 50%)",
              right: "50%",
              bottom: "55%",
              willChange: "transform, right, bottom",
              onStart: () => {
                s.hero.bottom = window.innerHeight - l.getBoundingClientRect().bottom, s.other.bottom = window.innerHeight - l.getBoundingClientRect().bottom
              }
            })
          }), n == null || n.addEventListener("mouseleave", () => {
            r.value || gsapWithCSS.to(l, {
              scale: 1,
              duration: .8,
              ease: "out-quint",
              transform: "translate(0%, 0%)",
              willChange: "transform, right, bottom",
              right: s.hero.right,
              bottom: s.other.bottom
            })
          }))
        };
      return useInitAfterPreloader(() => {
        const l = document.querySelector(".lottie-logo-wrap");
        if (!l || (setTimeout(() => {
            s.hero.right = window.innerWidth - l.getBoundingClientRect().right, s.other.right = window.innerWidth - l.getBoundingClientRect().right
          }, 1500), !i.value)) return;
        const n = gsapWithCSS.timeline({
          defaults: {
            duration: .6,
            ease: "out-quint"
          }
        });
        n.to(".wrap-mob-links .scroller", {
          y: `-=${pxInRem(28)}`,
          delay: 2
        }), n.to(".wrap-mob-links .scroller", {
          y: `-=${pxInRem(28)}`,
          delay: 2
        }), n.to(".wrap-mob-links .scroller", {
          y: `-=${pxInRem(28)}`,
          delay: 2
        }), n.to(".wrap-mob-links .scroller", {
          y: `-=${pxInRem(28)}`,
          delay: 2
        }), n.to(".wrap-mob-links .scroller", {
          y: `-=${pxInRem(28)}`,
          delay: 2,
          onComplete: () => {
            n.restart()
          }
        })
      }), watch(() => t.value, l => {
        l && a()
      }), (l, n) => (openBlock(), createElementBlock("article", _hoisted_1$f, [createBaseVNode("p", _hoisted_2$f, toDisplayString(l.$t("full-cycle-title")), 1), unref(i) ? (openBlock(), createElementBlock("div", _hoisted_19$2, [createBaseVNode("div", _hoisted_20$2, [createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("buy")), 1), n[10] || (n[10] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))]), createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("sell")), 1), n[11] || (n[11] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))]), createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("rent")), 1), n[12] || (n[12] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))]), createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("invest")), 1), n[13] || (n[13] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))]), createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("relocate")), 1), n[14] || (n[14] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))]), createBaseVNode("div", null, [createBaseVNode("p", null, toDisplayString(l.$t("buy")), 1), n[15] || (n[15] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "black"
      })], -1))])])])) : (openBlock(), createElementBlock("ul", _hoisted_3$f, [createBaseVNode("li", null, [createBaseVNode("button", _hoisted_4$c, [createBaseVNode("div", _hoisted_5$b, [createBaseVNode("span", null, toDisplayString(l.$t("buy")), 1), n[0] || (n[0] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", _hoisted_6$a, [createBaseVNode("span", null, toDisplayString(l.$t("buy")), 1), n[1] || (n[1] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))])])]), createBaseVNode("li", null, [createBaseVNode("button", _hoisted_7$a, [createBaseVNode("div", _hoisted_8$a, [createBaseVNode("span", null, toDisplayString(l.$t("sell")), 1), n[2] || (n[2] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", _hoisted_9$a, [createBaseVNode("span", null, toDisplayString(l.$t("sell")), 1), n[3] || (n[3] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))])])]), createBaseVNode("li", null, [createBaseVNode("button", _hoisted_10$a, [createBaseVNode("div", _hoisted_11$9, [createBaseVNode("span", null, toDisplayString(l.$t("rent")), 1), n[4] || (n[4] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", _hoisted_12$8, [createBaseVNode("span", null, toDisplayString(l.$t("rent")), 1), n[5] || (n[5] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))])])]), createBaseVNode("li", null, [createBaseVNode("button", _hoisted_13$8, [createBaseVNode("div", _hoisted_14$7, [createBaseVNode("span", null, toDisplayString(l.$t("invest")), 1), n[6] || (n[6] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", _hoisted_15$6, [createBaseVNode("span", null, toDisplayString(l.$t("invest")), 1), n[7] || (n[7] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))])])]), createBaseVNode("li", null, [createBaseVNode("button", _hoisted_16$5, [createBaseVNode("div", _hoisted_17$4, [createBaseVNode("span", null, toDisplayString(l.$t("relocate")), 1), n[8] || (n[8] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))]), createBaseVNode("div", _hoisted_18$2, [createBaseVNode("span", null, toDisplayString(l.$t("relocate")), 1), n[9] || (n[9] = createBaseVNode("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        class: "arrow-svg",
        xmlns: "http://www.w3.org/2000/svg"
      }, [createBaseVNode("path", {
        d: "M1.079 11.358L0 10.279L4.329 5.95L0.052 5.651L1.703 4L7.059 4.312L7.358 9.655L5.707 11.306L5.421 7.029L1.079 11.358Z",
        fill: "white"
      })], -1))])])])]))]))
    }
  }),
  __nuxt_component_3 = _export_sfc(_sfc_main$f, [
    ["__scopeId", "data-v-f551d3ac"]
  ]),
  _hoisted_1$e = {
    class: "hero"
  },
  _hoisted_2$e = {
    class: "sticky"
  },
  _hoisted_3$e = {
    "data-hide-hero": "",
    class: "title h1 ru-gap"
  },
  _hoisted_4$b = {
    class: "anim-screen"
  },
  _hoisted_5$a = ["src"],
  _hoisted_6$9 = {
    class: "scale-slide"
  },
  _hoisted_7$9 = {
    class: "scale-slide-left"
  },
  _hoisted_8$9 = {
    class: "scale-title h1"
  },
  _hoisted_9$9 = {
    class: "scale-description l1"
  },
  _hoisted_10$9 = {
    class: "scale-slide-right"
  },
  _hoisted_11$8 = {
    class: "scale-title h1"
  },
  _hoisted_12$7 = {
    class: "right-mob-desc l1"
  },
  _hoisted_13$7 = ["data-start-trigger"],
  _sfc_main$e = defineComponent({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(e) {
      const t = ref(1);
      return useInitAfterPreloader(() => {
        const i = gsapWithCSS.matchMedia(),
          s = document.querySelectorAll("section.hero .clip-slide");
        i.add("(min-width: 1024px)", () => {
          gsapWithCSS.to("section.hero .bg-image", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "bottom bottom",
              scrub: !0
            },
            ease: "none",
            scale: 1.15
          }), gsapWithCSS.to("section.hero .red-screen", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "bottom bottom",
              scrub: .4
            },
            keyframes: {
              "0%": {
                transform: "scale(0.005555555555555556, 0)"
              },
              "37.5%": {
                transform: "scale(0.005555555555555556, 1)"
              },
              "100%": {
                transform: "scale(1, 1)"
              }
            }
          }), gsapWithCSS.to("section.hero .scale-slide-left", {
            scrollTrigger: {
              trigger: "section.wrap-sticky.about-section",
              start: "top bottom",
              end: "top top",
              scrub: .4
            },
            xPercent: -100,
            willChange: "transform"
          }), gsapWithCSS.to("section.hero .scale-slide-right", {
            scrollTrigger: {
              trigger: "section.wrap-sticky.about-section",
              start: "top bottom",
              end: "top top",
              scrub: .4
            },
            xPercent: 100,
            willChange: "transform"
          }), gsapWithCSS.fromTo("section.about-section .slider-wrap.swiper", {
            xPercent: 65
          }, {
            xPercent: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
              trigger: "section.wrap-sticky.about-section",
              start: "top 20%",
              once: !0
            }
          }), ScrollTrigger.create({
            trigger: "section.hero .opening-curtain-pause",
            start: "center bottom",
            end: "bottom bottom",
            onEnter: () => {
              gsapWithCSS.set("[data-hide-hero]", {
                autoAlpha: 0
              }), gsapWithCSS.set("section.hero", {
                pointerEvents: "none"
              })
            },
            onLeaveBack: () => {
              gsapWithCSS.set("[data-hide-hero]", {
                autoAlpha: 1
              }), gsapWithCSS.set("section.hero", {
                pointerEvents: "all"
              })
            }
          }), s.forEach((a, o) => {
            gsapWithCSS.to(a, {
              scrollTrigger: {
                trigger: `section.hero .sticky-plash .plash-clip-slide.n${o+1}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              willChange: "clip-path"
            }), gsapWithCSS.to(a.querySelector("img"), {
              scrollTrigger: {
                trigger: `section.hero .sticky-plash .plash-clip-slide.n${o+1}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              scale: 1,
              willChange: "transform"
            })
          }), gsapWithCSS.to("section.hero .scale-slide", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-scale-slide",
              start: "top bottom",
              end: "bottom bottom",
              scrub: .4
            },
            scale: 1,
            willChange: "transform"
          }), ScrollTrigger.create({
            trigger: "section.wrap-sticky.about-section",
            start: "top 100.15%",
            onEnter() {
              gsapWithCSS.set("section.wrap-sticky.about-section .about", {
                autoAlpha: 1
              })
            },
            onLeaveBack() {
              gsapWithCSS.set("section.wrap-sticky.about-section .about", {
                autoAlpha: 0
              })
            }
          })
        }), i.add("(max-width: 1023px)", () => {
          gsapWithCSS.to("section.hero .bg-image", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "bottom bottom",
              scrub: !0
            },
            ease: "none",
            scale: 1.15
          }), gsapWithCSS.to("section.hero .red-screen", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "bottom bottom",
              scrub: .4
            },
            keyframes: {
              "0%": {
                transform: "scale(0.02, 0)"
              },
              "37.5%": {
                transform: "scale(0.02, 1)"
              },
              "100%": {
                transform: "scale(1, 1)"
              }
            }
          }), gsapWithCSS.to("section.hero .scale-slide-left", {
            scrollTrigger: {
              trigger: "section.wrap-sticky.about-section",
              start: "top bottom",
              end: "top top",
              scrub: .4
            },
            xPercent: -100,
            willChange: "transform"
          }), gsapWithCSS.to("section.hero .scale-slide-right", {
            scrollTrigger: {
              trigger: "section.wrap-sticky.about-section",
              start: "top bottom",
              end: "top top",
              scrub: .4
            },
            xPercent: 100,
            willChange: "transform"
          }), ScrollTrigger.create({
            trigger: "section.hero .opening-curtain-pause",
            start: "top bottom",
            end: "bottom bottom",
            onEnter: () => {
              gsapWithCSS.set("[data-hide-hero]", {
                autoAlpha: 0
              }), gsapWithCSS.set("section.hero", {
                pointerEvents: "none"
              })
            },
            onLeaveBack: () => {
              gsapWithCSS.set("[data-hide-hero]", {
                autoAlpha: 1
              }), gsapWithCSS.set("section.hero", {
                pointerEvents: "all"
              })
            }
          }), s.forEach((a, o) => {
            gsapWithCSS.to(a, {
              scrollTrigger: {
                trigger: `section.hero .sticky-plash .plash-clip-slide.n${o+1}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              willChange: "clip-path"
            }), gsapWithCSS.to(a.querySelector("img"), {
              scrollTrigger: {
                trigger: `section.hero .sticky-plash .plash-clip-slide.n${o+1}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              scale: 1,
              willChange: "transform"
            })
          }), gsapWithCSS.to("section.hero .scale-slide", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-scale-slide",
              start: "top bottom",
              end: "bottom bottom",
              scrub: .4
            },
            scale: 1,
            willChange: "transform"
          }), ScrollTrigger.create({
            trigger: "section.wrap-sticky.about-section",
            start: "top 100.15%",
            onEnter() {
              gsapWithCSS.set("section.wrap-sticky.about-section .about", {
                autoAlpha: 1
              })
            },
            onLeaveBack() {
              gsapWithCSS.set("section.wrap-sticky.about-section .about", {
                autoAlpha: 0
              })
            }
          })
        }), nextTick$1(() => {
          const o = (document.querySelector("section.hero").getBoundingClientRect().height - window.innerHeight) * -1;
          setCssVariable("--hero-sticky-top", `${o}px`)
        })
      }), onMounted(() => {
        const i = document.querySelector("section.hero"),
          s = localStorage.getItem("speedFactor") || "3";
        t.value = parseFloat(s), i.style.setProperty("--speed-factor", s)
      }), (i, s) => {
        const a = __nuxt_component_4;
        return openBlock(), createElementBlock("section", _hoisted_1$e, [createBaseVNode("div", _hoisted_2$e, [createVNode(a, null, {
          default: withCtx(() => [createBaseVNode("div", {
            "data-hide-hero": "",
            class: "bg-image side-overlay",
            style: normalizeStyle({
              "--bg-image": `url(${i.data.bgImage.normal})`
            })
          }, null, 4)]),
          _: 1
        }), s[1] || (s[1] = createBaseVNode("div", {
          "data-hide-hero": "",
          class: "decor-circle"
        }, null, -1)), s[2] || (s[2] = createBaseVNode("div", {
          "data-hide-hero": "",
          class: "symbol"
        }, null, -1)), createBaseVNode("h1", _hoisted_3$e, toDisplayString(i.data.title), 1), createVNode(a, null, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_4$b, [s[0] || (s[0] = createBaseVNode("div", {
            "data-hide-hero": "",
            class: "red-screen"
          }, null, -1)), (openBlock(!0), createElementBlock(Fragment, null, renderList(i.data.imageSlides, (o, l) => (openBlock(), createElementBlock("div", {
            "data-hide-hero": "",
            class: normalizeClass(["clip-slide side-overlay", [`n${l+1}`]])
          }, [createBaseVNode("img", {
            src: o.normal,
            role: "presentation",
            class: "inner-img"
          }, null, 8, _hoisted_5$a)], 2))), 256)), createBaseVNode("div", _hoisted_6$9, [createBaseVNode("div", _hoisted_7$9, [createBaseVNode("h2", _hoisted_8$9, toDisplayString(i.data.scaleSlide.title), 1), createBaseVNode("p", _hoisted_9$9, toDisplayString(i.data.scaleSlide.description), 1)]), createBaseVNode("div", _hoisted_10$9, [createBaseVNode("h2", _hoisted_11$8, toDisplayString(i.data.scaleSlide.title), 1), createBaseVNode("p", _hoisted_12$7, toDisplayString(i.data.scaleSlide.description), 1)])])])]),
          _: 1
        })]), createBaseVNode("div", {
          "data-dark-screen": "",
          "data-start-trigger": `top ${-55*unref(t)}%`,
          "data-scroll-section": "introduction",
          class: "sticky-plash"
        }, [s[3] || (s[3] = createBaseVNode("div", {
          class: "plash-red-anim"
        }, null, -1)), (openBlock(!0), createElementBlock(Fragment, null, renderList(i.data.imageSlides, (o, l) => (openBlock(), createElementBlock("div", {
          class: normalizeClass(["plash-clip-slide", [`n${l+1}`]])
        }, null, 2))), 256)), s[4] || (s[4] = createBaseVNode("div", {
          class: "plash-scale-slide"
        }, null, -1))], 8, _hoisted_13$7), s[5] || (s[5] = createBaseVNode("div", {
          class: "opening-curtain-pause"
        }, null, -1))])
      }
    }
  }),
  __nuxt_component_5 = _export_sfc(_sfc_main$e, [
    ["__scopeId", "data-v-5005e4ab"]
  ]);

function isObject$1(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function extend$1(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(r => {
    typeof e[r] > "u" ? e[r] = t[r] : isObject$1(t[r]) && isObject$1(e[r]) && Object.keys(t[r]).length > 0 && extend$1(e[r], t[r])
  })
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return {
      initEvent() {}
    }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function getDocument() {
  const e = typeof document < "u" ? document : {};
  return extend$1(e, ssrDocument), e
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function() {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e)
  }
};

function getWindow() {
  const e = typeof window < "u" ? window : {};
  return extend$1(e, ssrWindow), e
}

function deleteProps(e) {
  const t = e;
  Object.keys(t).forEach(r => {
    try {
      t[r] = null
    } catch {}
    try {
      delete t[r]
    } catch {}
  })
}

function nextTick(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}

function now() {
  return Date.now()
}

function getComputedStyle$1(e) {
  const t = getWindow();
  let r;
  return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
}

function getTranslate(e, t) {
  t === void 0 && (t = "x");
  const r = getWindow();
  let i, s, a;
  const o = getComputedStyle$1(e);
  return r.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(l => l.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix(s === "none" ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), t === "x" && (r.WebKitCSSMatrix ? s = a.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), t === "y" && (r.WebKitCSSMatrix ? s = a.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0
}

function isObject(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function isNode(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function extend() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < arguments.length; r += 1) {
    const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
    if (i != null && !isNode(i)) {
      const s = Object.keys(Object(i)).filter(a => t.indexOf(a) < 0);
      for (let a = 0, o = s.length; a < o; a += 1) {
        const l = s[a],
          n = Object.getOwnPropertyDescriptor(i, l);
        n !== void 0 && n.enumerable && (isObject(e[l]) && isObject(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : extend(e[l], i[l]) : !isObject(e[l]) && isObject(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : extend(e[l], i[l])) : e[l] = i[l])
      }
    }
  }
  return e
}

function setCSSProperty(e, t, r) {
  e.style.setProperty(t, r)
}

function animateCSSModeScroll(e) {
  let {
    swiper: t,
    targetPosition: r,
    side: i
  } = e;
  const s = getWindow(),
    a = -t.translate;
  let o = null,
    l;
  const n = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
  const h = r > a ? "next" : "prev",
    d = (c, v) => h === "next" && c >= v || h === "prev" && c <= v,
    g = () => {
      l = new Date().getTime(), o === null && (o = l);
      const c = Math.max(Math.min((l - o) / n, 1), 0),
        v = .5 - Math.cos(c * Math.PI) / 2;
      let _ = a + v * (r - a);
      if (d(_, r) && (_ = r), t.wrapperEl.scrollTo({
          [i]: _
        }), d(_, r)) {
        t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [i]: _
          })
        }), s.cancelAnimationFrame(t.cssModeFrameID);
        return
      }
      t.cssModeFrameID = s.requestAnimationFrame(g)
    };
  g()
}

function elementChildren(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter(r => r.matches(t))
}

function createElement(e, t) {
  t === void 0 && (t = []);
  const r = document.createElement(e);
  return r.classList.add(...Array.isArray(t) ? t : [t]), r
}

function elementPrevAll(e, t) {
  const r = [];
  for (; e.previousElementSibling;) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && r.push(i) : r.push(i), e = i
  }
  return r
}

function elementNextAll(e, t) {
  const r = [];
  for (; e.nextElementSibling;) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && r.push(i) : r.push(i), e = i
  }
  return r
}

function elementStyle(e, t) {
  return getWindow().getComputedStyle(e, null).getPropertyValue(t)
}

function elementIndex(e) {
  let t = e,
    r;
  if (t) {
    for (r = 0;
      (t = t.previousSibling) !== null;) t.nodeType === 1 && (r += 1);
    return r
  }
}

function elementParents(e, t) {
  const r = [];
  let i = e.parentElement;
  for (; i;) r.push(i), i = i.parentElement;
  return r
}

function elementTransitionEnd(e, t) {
  function r(i) {
    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", r))
  }
  e.addEventListener("transitionend", r)
}

function elementOuterSize(e, t, r) {
  const i = getWindow();
  return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"))
}
let support;

function calcSupport() {
  const e = getWindow(),
    t = getDocument();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  }
}

function getSupport() {
  return support || (support = calcSupport()), support
}
let deviceCached;

function calcDevice(e) {
  let {
    userAgent: t
  } = e === void 0 ? {} : e;
  const r = getSupport(),
    i = getWindow(),
    s = i.navigator.platform,
    a = t || i.navigator.userAgent,
    o = {
      ios: !1,
      android: !1
    },
    l = i.screen.width,
    n = i.screen.height,
    h = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = a.match(/(iPad).*OS\s([\d_]+)/);
  const g = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    c = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = s === "Win32";
  let _ = s === "MacIntel";
  const u = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && _ && r.touch && u.indexOf(`${l}x${n}`) >= 0 && (d = a.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), _ = !1), h && !v && (o.os = "android", o.android = !0), (d || c || g) && (o.os = "ios", o.ios = !0), o
}

function getDevice(e) {
  return e === void 0 && (e = {}), deviceCached || (deviceCached = calcDevice(e)), deviceCached
}
let browser;

function calcBrowser() {
  const e = getWindow();
  let t = !1;

  function r() {
    const i = e.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
  }
  if (r()) {
    const i = String(e.navigator.userAgent);
    if (i.includes("Version/")) {
      const [s, a] = i.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
      t = s < 16 || s === 16 && a < 2
    }
  }
  return {
    isSafari: t || r(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  }
}

function getBrowser() {
  return browser || (browser = calcBrowser()), browser
}

function Resize(e) {
  let {
    swiper: t,
    on: r,
    emit: i
  } = e;
  const s = getWindow();
  let a = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"))
    },
    n = () => {
      !t || t.destroyed || !t.initialized || (a = new ResizeObserver(g => {
        o = s.requestAnimationFrame(() => {
          const {
            width: c,
            height: v
          } = t;
          let _ = c,
            u = v;
          g.forEach(S => {
            let {
              contentBoxSize: p,
              contentRect: m,
              target: f
            } = S;
            f && f !== t.el || (_ = m ? m.width : (p[0] || p).inlineSize, u = m ? m.height : (p[0] || p).blockSize)
          }), (_ !== c || u !== v) && l()
        })
      }), a.observe(t.el))
    },
    h = () => {
      o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
    },
    d = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange")
    };
  r("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      n();
      return
    }
    s.addEventListener("resize", l), s.addEventListener("orientationchange", d)
  }), r("destroy", () => {
    h(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
  })
}

function Observer(e) {
  let {
    swiper: t,
    extendParams: r,
    on: i,
    emit: s
  } = e;
  const a = [],
    o = getWindow(),
    l = function(d, g) {
      g === void 0 && (g = {});
      const c = o.MutationObserver || o.WebkitMutationObserver,
        v = new c(_ => {
          if (t.__preventObserver__) return;
          if (_.length === 1) {
            s("observerUpdate", _[0]);
            return
          }
          const u = function() {
            s("observerUpdate", _[0])
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(u) : o.setTimeout(u, 0)
        });
      v.observe(d, {
        attributes: typeof g.attributes > "u" ? !0 : g.attributes,
        childList: typeof g.childList > "u" ? !0 : g.childList,
        characterData: typeof g.characterData > "u" ? !0 : g.characterData
      }), a.push(v)
    },
    n = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = elementParents(t.hostEl);
          for (let g = 0; g < d.length; g += 1) l(d[g])
        }
        l(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        })
      }
    },
    h = () => {
      a.forEach(d => {
        d.disconnect()
      }), a.splice(0, a.length)
    };
  r({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), i("init", n), i("destroy", h)
}
var eventsEmitter = {
  on(e, t, r) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = r ? "unshift" : "push";
    return e.split(" ").forEach(a => {
      i.eventsListeners[a] || (i.eventsListeners[a] = []), i.eventsListeners[a][s](t)
    }), i
  },
  once(e, t, r) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;

    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
      t.apply(i, o)
    }
    return s.__emitterProxy = t, i.on(e, s, r)
  },
  onAny(e, t) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const i = t ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const r = t.eventsAnyListeners.indexOf(e);
    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
  },
  off(e, t) {
    const r = this;
    return !r.eventsListeners || r.destroyed || !r.eventsListeners || e.split(" ").forEach(i => {
      typeof t > "u" ? r.eventsListeners[i] = [] : r.eventsListeners[i] && r.eventsListeners[i].forEach((s, a) => {
        (s === t || s.__emitterProxy && s.__emitterProxy === t) && r.eventsListeners[i].splice(a, 1)
      })
    }), r
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, r, i;
    for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++) a[o] = arguments[o];
    return typeof a[0] == "string" || Array.isArray(a[0]) ? (t = a[0], r = a.slice(1, a.length), i = e) : (t = a[0].events, r = a[0].data, i = a[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach(n => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(h => {
        h.apply(i, [n, ...r])
      }), e.eventsListeners && e.eventsListeners[n] && e.eventsListeners[n].forEach(h => {
        h.apply(i, r)
      })
    }), e
  }
};

function updateSize() {
  const e = this;
  let t, r;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? r = e.params.height : r = i.clientHeight, !(t === 0 && e.isHorizontal() || r === 0 && e.isVertical()) && (t = t - parseInt(elementStyle(i, "padding-left") || 0, 10) - parseInt(elementStyle(i, "padding-right") || 0, 10), r = r - parseInt(elementStyle(i, "padding-top") || 0, 10) - parseInt(elementStyle(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
    width: t,
    height: r,
    size: e.isHorizontal() ? t : r
  }))
}

function updateSlides() {
  const e = this;

  function t(I) {
    return e.isHorizontal() ? I : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [I]
  }

  function r(I, B) {
    return parseFloat(I.getPropertyValue(t(B)) || 0)
  }
  const i = e.params,
    {
      wrapperEl: s,
      slidesEl: a,
      size: o,
      rtlTranslate: l,
      wrongRTL: n
    } = e,
    h = e.virtual && i.virtual.enabled,
    d = h ? e.virtual.slides.length : e.slides.length,
    g = elementChildren(a, `.${e.params.slideClass}, swiper-slide`),
    c = h ? e.virtual.slides.length : g.length;
  let v = [];
  const _ = [],
    u = [];
  let S = i.slidesOffsetBefore;
  typeof S == "function" && (S = i.slidesOffsetBefore.call(e));
  let p = i.slidesOffsetAfter;
  typeof p == "function" && (p = i.slidesOffsetAfter.call(e));
  const m = e.snapGrid.length,
    f = e.slidesGrid.length;
  let y = i.spaceBetween,
    w = -S,
    E = 0,
    P = 0;
  if (typeof o > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * o : typeof y == "string" && (y = parseFloat(y)), e.virtualSize = -y, g.forEach(I => {
    l ? I.style.marginLeft = "" : I.style.marginRight = "", I.style.marginBottom = "", I.style.marginTop = ""
  }), i.centeredSlides && i.cssMode && (setCSSProperty(s, "--swiper-centered-offset-before", ""), setCSSProperty(s, "--swiper-centered-offset-after", ""));
  const T = i.grid && i.grid.rows > 1 && e.grid;
  T && e.grid.initSlides(c);
  let A;
  const $ = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(I => typeof i.breakpoints[I].slidesPerView < "u").length > 0;
  for (let I = 0; I < c; I += 1) {
    A = 0;
    let B;
    if (g[I] && (B = g[I]), T && e.grid.updateSlide(I, B, c, t), !(g[I] && elementStyle(B, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        $ && (g[I].style[t("width")] = "");
        const L = getComputedStyle(B),
          N = B.style.transform,
          F = B.style.webkitTransform;
        if (N && (B.style.transform = "none"), F && (B.style.webkitTransform = "none"), i.roundLengths) A = e.isHorizontal() ? elementOuterSize(B, "width") : elementOuterSize(B, "height");
        else {
          const C = r(L, "width"),
            k = r(L, "padding-left"),
            b = r(L, "padding-right"),
            x = r(L, "margin-left"),
            V = r(L, "margin-right"),
            M = L.getPropertyValue("box-sizing");
          if (M && M === "border-box") A = C + x + V;
          else {
            const {
              clientWidth: D,
              offsetWidth: O
            } = B;
            A = C + k + b + x + V + (O - D)
          }
        }
        N && (B.style.transform = N), F && (B.style.webkitTransform = F), i.roundLengths && (A = Math.floor(A))
      } else A = (o - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (A = Math.floor(A)), g[I] && (g[I].style[t("width")] = `${A}px`);
      g[I] && (g[I].swiperSlideSize = A), u.push(A), i.centeredSlides ? (w = w + A / 2 + E / 2 + y, E === 0 && I !== 0 && (w = w - o / 2 - y), I === 0 && (w = w - o / 2 - y), Math.abs(w) < 1 / 1e3 && (w = 0), i.roundLengths && (w = Math.floor(w)), P % i.slidesPerGroup === 0 && v.push(w), _.push(w)) : (i.roundLengths && (w = Math.floor(w)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup === 0 && v.push(w), _.push(w), w = w + A + y), e.virtualSize += A + y, E = A, P += 1
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, o) + p, l && n && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${e.virtualSize+y}px`), i.setWrapperSize && (s.style[t("width")] = `${e.virtualSize+y}px`), T && e.grid.updateWrapperSize(A, v, t), !i.centeredSlides) {
    const I = [];
    for (let B = 0; B < v.length; B += 1) {
      let L = v[B];
      i.roundLengths && (L = Math.floor(L)), v[B] <= e.virtualSize - o && I.push(L)
    }
    v = I, Math.floor(e.virtualSize - o) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - o)
  }
  if (h && i.loop) {
    const I = u[0] + y;
    if (i.slidesPerGroup > 1) {
      const B = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
        L = I * i.slidesPerGroup;
      for (let N = 0; N < B; N += 1) v.push(v[v.length - 1] + L)
    }
    for (let B = 0; B < e.virtual.slidesBefore + e.virtual.slidesAfter; B += 1) i.slidesPerGroup === 1 && v.push(v[v.length - 1] + I), _.push(_[_.length - 1] + I), e.virtualSize += I
  }
  if (v.length === 0 && (v = [0]), y !== 0) {
    const I = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
    g.filter((B, L) => !i.cssMode || i.loop ? !0 : L !== g.length - 1).forEach(B => {
      B.style[I] = `${y}px`
    })
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let I = 0;
    u.forEach(L => {
      I += L + (y || 0)
    }), I -= y;
    const B = I - o;
    v = v.map(L => L <= 0 ? -S : L > B ? B + p : L)
  }
  if (i.centerInsufficientSlides) {
    let I = 0;
    if (u.forEach(B => {
        I += B + (y || 0)
      }), I -= y, I < o) {
      const B = (o - I) / 2;
      v.forEach((L, N) => {
        v[N] = L - B
      }), _.forEach((L, N) => {
        _[N] = L + B
      })
    }
  }
  if (Object.assign(e, {
      slides: g,
      snapGrid: v,
      slidesGrid: _,
      slidesSizesGrid: u
    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    setCSSProperty(s, "--swiper-centered-offset-before", `${-v[0]}px`), setCSSProperty(s, "--swiper-centered-offset-after", `${e.size/2-u[u.length-1]/2}px`);
    const I = -e.snapGrid[0],
      B = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map(L => L + I), e.slidesGrid = e.slidesGrid.map(L => L + B)
  }
  if (c !== d && e.emit("slidesLengthChange"), v.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), _.length !== f && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !h && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const I = `${i.containerModifierClass}backface-hidden`,
      B = e.el.classList.contains(I);
    c <= i.maxBackfaceHiddenSlides ? B || e.el.classList.add(I) : B && e.el.classList.remove(I)
  }
}

function updateAutoHeight(e) {
  const t = this,
    r = [],
    i = t.virtual && t.params.virtual.enabled;
  let s = 0,
    a;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const o = l => i ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)(t.visibleSlides || []).forEach(l => {
      r.push(l)
    });
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const l = t.activeIndex + a;
        if (l > t.slides.length && !i) break;
        r.push(o(l))
      } else r.push(o(t.activeIndex));
  for (a = 0; a < r.length; a += 1)
    if (typeof r[a] < "u") {
      const l = r[a].offsetHeight;
      s = l > s ? l : s
    }(s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}

function updateSlidesOffset() {
  const e = this,
    t = e.slides,
    r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
}

function updateSlidesProgress(e) {
  e === void 0 && (e = this && this.translate || 0);
  const t = this,
    r = t.params,
    {
      slides: i,
      rtlTranslate: s,
      snapGrid: a
    } = t;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  s && (o = e), i.forEach(n => {
    n.classList.remove(r.slideVisibleClass)
  }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let l = r.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
  for (let n = 0; n < i.length; n += 1) {
    const h = i[n];
    let d = h.swiperSlideOffset;
    r.cssMode && r.centeredSlides && (d -= i[0].swiperSlideOffset);
    const g = (o + (r.centeredSlides ? t.minTranslate() : 0) - d) / (h.swiperSlideSize + l),
      c = (o - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (h.swiperSlideSize + l),
      v = -(o - d),
      _ = v + t.slidesSizesGrid[n];
    (v >= 0 && v < t.size - 1 || _ > 1 && _ <= t.size || v <= 0 && _ >= t.size) && (t.visibleSlides.push(h), t.visibleSlidesIndexes.push(n), i[n].classList.add(r.slideVisibleClass)), h.progress = s ? -g : g, h.originalProgress = s ? -c : c
  }
}

function updateProgress(e) {
  const t = this;
  if (typeof e > "u") {
    const d = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * d || 0
  }
  const r = t.params,
    i = t.maxTranslate() - t.minTranslate();
  let {
    progress: s,
    isBeginning: a,
    isEnd: o,
    progressLoop: l
  } = t;
  const n = a,
    h = o;
  if (i === 0) s = 0, a = !0, o = !0;
  else {
    s = (e - t.minTranslate()) / i;
    const d = Math.abs(e - t.minTranslate()) < 1,
      g = Math.abs(e - t.maxTranslate()) < 1;
    a = d || s <= 0, o = g || s >= 1, d && (s = 0), g && (s = 1)
  }
  if (r.loop) {
    const d = t.getSlideIndexByData(0),
      g = t.getSlideIndexByData(t.slides.length - 1),
      c = t.slidesGrid[d],
      v = t.slidesGrid[g],
      _ = t.slidesGrid[t.slidesGrid.length - 1],
      u = Math.abs(e);
    u >= c ? l = (u - c) / _ : l = (u + _ - v) / _, l > 1 && (l -= 1)
  }
  Object.assign(t, {
    progress: s,
    progressLoop: l,
    isBeginning: a,
    isEnd: o
  }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !n && t.emit("reachBeginning toEdge"), o && !h && t.emit("reachEnd toEdge"), (n && !a || h && !o) && t.emit("fromEdge"), t.emit("progress", s)
}

function updateSlidesClasses() {
  const e = this,
    {
      slides: t,
      params: r,
      slidesEl: i,
      activeIndex: s
    } = e,
    a = e.virtual && r.virtual.enabled,
    o = n => elementChildren(i, `.${r.slideClass}${n}, swiper-slide${n}`)[0];
  t.forEach(n => {
    n.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
  });
  let l;
  if (a)
    if (r.loop) {
      let n = s - e.virtual.slidesBefore;
      n < 0 && (n = e.virtual.slides.length + n), n >= e.virtual.slides.length && (n -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${n}"]`)
    } else l = o(`[data-swiper-slide-index="${s}"]`);
  else l = t[s];
  if (l) {
    l.classList.add(r.slideActiveClass);
    let n = elementNextAll(l, `.${r.slideClass}, swiper-slide`)[0];
    r.loop && !n && (n = t[0]), n && n.classList.add(r.slideNextClass);
    let h = elementPrevAll(l, `.${r.slideClass}, swiper-slide`)[0];
    r.loop && !h === 0 && (h = t[t.length - 1]), h && h.classList.add(r.slidePrevClass)
  }
  e.emitSlidesClasses()
}
const processLazyPreloader = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const r = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
      i = t.closest(r());
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      !s && e.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && s.remove())
      })), s && s.remove()
    }
  },
  unlazy = (e, t) => {
    if (!e.slides[t]) return;
    const r = e.slides[t].querySelector('[loading="lazy"]');
    r && r.removeAttribute("loading")
  },
  preload = e => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const r = e.slides.length;
    if (!r || !t || t < 0) return;
    t = Math.min(t, r);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = s,
        l = [o - t];
      l.push(...Array.from({
        length: t
      }).map((n, h) => o + i + h)), e.slides.forEach((n, h) => {
        l.includes(n.column) && unlazy(e, h)
      });
      return
    }
    const a = s + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = s - t; o <= a + t; o += 1) {
        const l = (o % r + r) % r;
        (l < s || l > a) && unlazy(e, l)
      } else
        for (let o = Math.max(s - t, 0); o <= Math.min(a + t, r - 1); o += 1) o !== s && (o > a || o < s) && unlazy(e, o)
  };

function getActiveIndexByTranslate(e) {
  const {
    slidesGrid: t,
    params: r
  } = e, i = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let a = 0; a < t.length; a += 1) typeof t[a + 1] < "u" ? i >= t[a] && i < t[a + 1] - (t[a + 1] - t[a]) / 2 ? s = a : i >= t[a] && i < t[a + 1] && (s = a + 1) : i >= t[a] && (s = a);
  return r.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s
}

function updateActiveIndex(e) {
  const t = this,
    r = t.rtlTranslate ? t.translate : -t.translate,
    {
      snapGrid: i,
      params: s,
      activeIndex: a,
      realIndex: o,
      snapIndex: l
    } = t;
  let n = e,
    h;
  const d = c => {
    let v = c - t.virtual.slidesBefore;
    return v < 0 && (v = t.virtual.slides.length + v), v >= t.virtual.slides.length && (v -= t.virtual.slides.length), v
  };
  if (typeof n > "u" && (n = getActiveIndexByTranslate(t)), i.indexOf(r) >= 0) h = i.indexOf(r);
  else {
    const c = Math.min(s.slidesPerGroupSkip, n);
    h = c + Math.floor((n - c) / s.slidesPerGroup)
  }
  if (h >= i.length && (h = i.length - 1), n === a) {
    h !== l && (t.snapIndex = h, t.emit("snapIndexChange")), t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(n));
    return
  }
  let g;
  t.virtual && s.virtual.enabled && s.loop ? g = d(n) : t.slides[n] ? g = parseInt(t.slides[n].getAttribute("data-swiper-slide-index") || n, 10) : g = n, Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: h,
    previousRealIndex: o,
    realIndex: g,
    previousIndex: a,
    activeIndex: n
  }), t.initialized && preload(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== g && t.emit("realIndexChange"), t.emit("slideChange"))
}

function updateClickedSlide(e, t) {
  const r = this,
    i = r.params;
  let s = e.closest(`.${i.slideClass}, swiper-slide`);
  !s && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(l => {
    !s && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (s = l)
  });
  let a = !1,
    o;
  if (s) {
    for (let l = 0; l < r.slides.length; l += 1)
      if (r.slides[l] === s) {
        a = !0, o = l;
        break
      }
  }
  if (s && a) r.clickedSlide = s, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = o;
  else {
    r.clickedSlide = void 0, r.clickedIndex = void 0;
    return
  }
  i.slideToClickedSlide && r.clickedIndex !== void 0 && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    {
      params: r,
      rtlTranslate: i,
      translate: s,
      wrapperEl: a
    } = t;
  if (r.virtualTranslate) return i ? -s : s;
  if (r.cssMode) return s;
  let o = getTranslate(a, e);
  return o += t.cssOverflowAdjustment(), i && (o = -o), o || 0
}

function setTranslate(e, t) {
  const r = this,
    {
      rtlTranslate: i,
      params: s,
      wrapperEl: a,
      progress: o
    } = r;
  let l = 0,
    n = 0;
  const h = 0;
  r.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : n, s.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -n : s.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : n -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${n}px, ${h}px)`);
  let d;
  const g = r.maxTranslate() - r.minTranslate();
  g === 0 ? d = 0 : d = (e - r.minTranslate()) / g, d !== o && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
}

function minTranslate() {
  return -this.snapGrid[0]
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function translateTo(e, t, r, i, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0), i === void 0 && (i = !0);
  const a = this,
    {
      params: o,
      wrapperEl: l
    } = a;
  if (a.animating && o.preventInteractionOnTransition) return !1;
  const n = a.minTranslate(),
    h = a.maxTranslate();
  let d;
  if (i && e > n ? d = n : i && e < h ? d = h : d = e, a.updateProgress(d), o.cssMode) {
    const g = a.isHorizontal();
    if (t === 0) l[g ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!a.support.smoothScroll) return animateCSSModeScroll({
        swiper: a,
        targetPosition: -d,
        side: g ? "left" : "top"
      }), !0;
      l.scrollTo({
        [g ? "left" : "top"]: -d,
        behavior: "smooth"
      })
    }
    return !0
  }
  return t === 0 ? (a.setTransition(0), a.setTranslate(d), r && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(d), r && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(c) {
    !a || a.destroyed || c.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, r && a.emit("transitionEnd"))
  }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(e, t) {
  const r = this;
  r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), r.emit("setTransition", e, t)
}

function transitionEmit(e) {
  let {
    swiper: t,
    runCallbacks: r,
    direction: i,
    step: s
  } = e;
  const {
    activeIndex: a,
    previousIndex: o
  } = t;
  let l = i;
  if (l || (a > o ? l = "next" : a < o ? l = "prev" : l = "reset"), t.emit(`transition${s}`), r && a !== o) {
    if (l === "reset") {
      t.emit(`slideResetTransition${s}`);
      return
    }
    t.emit(`slideChangeTransition${s}`), l === "next" ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
  }
}

function transitionStart(e, t) {
  e === void 0 && (e = !0);
  const r = this,
    {
      params: i
    } = r;
  i.cssMode || (i.autoHeight && r.updateAutoHeight(), transitionEmit({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }))
}

function transitionEnd(e, t) {
  e === void 0 && (e = !0);
  const r = this,
    {
      params: i
    } = r;
  r.animating = !1, !i.cssMode && (r.setTransition(0), transitionEmit({
    swiper: r,
    runCallbacks: e,
    direction: t,
    step: "End"
  }))
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(e, t, r, i, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0), typeof e == "string" && (e = parseInt(e, 10));
  const a = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: n,
    slidesGrid: h,
    previousIndex: d,
    activeIndex: g,
    rtlTranslate: c,
    wrapperEl: v,
    enabled: _
  } = a;
  if (a.animating && l.preventInteractionOnTransition || !_ && !i && !s) return !1;
  const u = Math.min(a.params.slidesPerGroupSkip, o);
  let S = u + Math.floor((o - u) / a.params.slidesPerGroup);
  S >= n.length && (S = n.length - 1);
  const p = -n[S];
  if (l.normalizeSlideIndex)
    for (let f = 0; f < h.length; f += 1) {
      const y = -Math.floor(p * 100),
        w = Math.floor(h[f] * 100),
        E = Math.floor(h[f + 1] * 100);
      typeof h[f + 1] < "u" ? y >= w && y < E - (E - w) / 2 ? o = f : y >= w && y < E && (o = f + 1) : y >= w && (o = f)
    }
  if (a.initialized && o !== g && (!a.allowSlideNext && (c ? p > a.translate && p > a.minTranslate() : p < a.translate && p < a.minTranslate()) || !a.allowSlidePrev && p > a.translate && p > a.maxTranslate() && (g || 0) !== o)) return !1;
  o !== (d || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(p);
  let m;
  if (o > g ? m = "next" : o < g ? m = "prev" : m = "reset", c && -p === a.translate || !c && p === a.translate) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), l.effect !== "slide" && a.setTranslate(p), m !== "reset" && (a.transitionStart(r, m), a.transitionEnd(r, m)), !1;
  if (l.cssMode) {
    const f = a.isHorizontal(),
      y = c ? p : -p;
    if (t === 0) {
      const w = a.virtual && a.params.virtual.enabled;
      w && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), w && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        v[f ? "scrollLeft" : "scrollTop"] = y
      })) : v[f ? "scrollLeft" : "scrollTop"] = y, w && requestAnimationFrame(() => {
        a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
      })
    } else {
      if (!a.support.smoothScroll) return animateCSSModeScroll({
        swiper: a,
        targetPosition: y,
        side: f ? "left" : "top"
      }), !0;
      v.scrollTo({
        [f ? "left" : "top"]: y,
        behavior: "smooth"
      })
    }
    return !0
  }
  return a.setTransition(t), a.setTranslate(p), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(r, m), t === 0 ? a.transitionEnd(r, m) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(y) {
    !a || a.destroyed || y.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, m))
  }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
}

function slideToLoop(e, t, r, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), r === void 0 && (r = !0), typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let a = e;
  return s.params.loop && (s.virtual && s.params.virtual.enabled ? a = a + s.virtual.slidesBefore : a = s.getSlideIndexByData(a)), s.slideTo(a, t, r, i)
}

function slideNext(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      enabled: s,
      params: a,
      animating: o
    } = i;
  if (!s) return i;
  let l = a.slidesPerGroup;
  a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const n = i.activeIndex < a.slidesPerGroupSkip ? 1 : l,
    h = i.virtual && a.virtual.enabled;
  if (a.loop) {
    if (o && !h && a.loopPreventsSliding) return !1;
    if (i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
      i.slideTo(i.activeIndex + n, e, t, r)
    }), !0
  }
  return a.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + n, e, t, r)
}

function slidePrev(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      params: s,
      snapGrid: a,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: n,
      animating: h
    } = i;
  if (!n) return i;
  const d = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (h && !d && s.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft
  }
  const g = l ? i.translate : -i.translate;

  function c(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p)
  }
  const v = c(g),
    _ = a.map(p => c(p));
  let u = a[_.indexOf(v) - 1];
  if (typeof u > "u" && s.cssMode) {
    let p;
    a.forEach((m, f) => {
      v >= m && (p = f)
    }), typeof p < "u" && (u = a[p > 0 ? p - 1 : p])
  }
  let S = 0;
  if (typeof u < "u" && (S = o.indexOf(u), S < 0 && (S = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (S = S - i.slidesPerViewDynamic("previous", !0) + 1, S = Math.max(S, 0))), s.rewind && i.isBeginning) {
    const p = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(p, e, t, r)
  } else if (s.loop && i.activeIndex === 0 && s.cssMode) return requestAnimationFrame(() => {
    i.slideTo(S, e, t, r)
  }), !0;
  return i.slideTo(S, e, t, r)
}

function slideReset(e, t, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this;
  return i.slideTo(i.activeIndex, e, t, r)
}

function slideToClosest(e, t, r, i) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = .5);
  const s = this;
  let a = s.activeIndex;
  const o = Math.min(s.params.slidesPerGroupSkip, a),
    l = o + Math.floor((a - o) / s.params.slidesPerGroup),
    n = s.rtlTranslate ? s.translate : -s.translate;
  if (n >= s.snapGrid[l]) {
    const h = s.snapGrid[l],
      d = s.snapGrid[l + 1];
    n - h > (d - h) * i && (a += s.params.slidesPerGroup)
  } else {
    const h = s.snapGrid[l - 1],
      d = s.snapGrid[l];
    n - h <= (d - h) * i && (a -= s.params.slidesPerGroup)
  }
  return a = Math.max(a, 0), a = Math.min(a, s.slidesGrid.length - 1), s.slideTo(a, e, t, r)
}

function slideToClickedSlide() {
  const e = this,
    {
      params: t,
      slidesEl: r
    } = e,
    i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex,
    a;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex(elementChildren(r, `${o}[data-swiper-slide-index="${a}"]`)[0]), nextTick(() => {
      e.slideTo(s)
    })) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex(elementChildren(r, `${o}[data-swiper-slide-index="${a}"]`)[0]), nextTick(() => {
      e.slideTo(s)
    })) : e.slideTo(s)
  } else e.slideTo(s)
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(e) {
  const t = this,
    {
      params: r,
      slidesEl: i
    } = t;
  if (!r.loop || t.virtual && t.params.virtual.enabled) return;
  elementChildren(i, `.${r.slideClass}, swiper-slide`).forEach((a, o) => {
    a.setAttribute("data-swiper-slide-index", o)
  }), t.loopFix({
    slideRealIndex: e,
    direction: r.centeredSlides ? void 0 : "next"
  })
}

function loopFix(e) {
  let {
    slideRealIndex: t,
    slideTo: r = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: a,
    byController: o,
    byMousewheel: l
  } = e === void 0 ? {} : e;
  const n = this;
  if (!n.params.loop) return;
  n.emit("beforeLoopFix");
  const {
    slides: h,
    allowSlidePrev: d,
    allowSlideNext: g,
    slidesEl: c,
    params: v
  } = n;
  if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && v.virtual.enabled) {
    r && (!v.centeredSlides && n.snapIndex === 0 ? n.slideTo(n.virtual.slides.length, 0, !1, !0) : v.centeredSlides && n.snapIndex < v.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0)), n.allowSlidePrev = d, n.allowSlideNext = g, n.emit("loopFix");
    return
  }
  const _ = v.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(v.slidesPerView, 10));
  let u = v.loopedSlides || _;
  u % v.slidesPerGroup !== 0 && (u += v.slidesPerGroup - u % v.slidesPerGroup), n.loopedSlides = u;
  const S = [],
    p = [];
  let m = n.activeIndex;
  typeof a > "u" ? a = n.getSlideIndex(n.slides.filter(P => P.classList.contains(v.slideActiveClass))[0]) : m = a;
  const f = i === "next" || !i,
    y = i === "prev" || !i;
  let w = 0,
    E = 0;
  if (a < u) {
    w = Math.max(u - a, v.slidesPerGroup);
    for (let P = 0; P < u - a; P += 1) {
      const T = P - Math.floor(P / h.length) * h.length;
      S.push(h.length - T - 1)
    }
  } else if (a > n.slides.length - u * 2) {
    E = Math.max(a - (n.slides.length - u * 2), v.slidesPerGroup);
    for (let P = 0; P < E; P += 1) {
      const T = P - Math.floor(P / h.length) * h.length;
      p.push(T)
    }
  }
  if (y && S.forEach(P => {
      n.slides[P].swiperLoopMoveDOM = !0, c.prepend(n.slides[P]), n.slides[P].swiperLoopMoveDOM = !1
    }), f && p.forEach(P => {
      n.slides[P].swiperLoopMoveDOM = !0, c.append(n.slides[P]), n.slides[P].swiperLoopMoveDOM = !1
    }), n.recalcSlides(), v.slidesPerView === "auto" && n.updateSlides(), v.watchSlidesProgress && n.updateSlidesOffset(), r) {
    if (S.length > 0 && y)
      if (typeof t > "u") {
        const P = n.slidesGrid[m],
          A = n.slidesGrid[m + w] - P;
        l ? n.setTranslate(n.translate - A) : (n.slideTo(m + w, 0, !1, !0), s && (n.touches[n.isHorizontal() ? "startX" : "startY"] += A, n.touchEventsData.currentTranslate = n.translate))
      } else s && (n.slideToLoop(t, 0, !1, !0), n.touchEventsData.currentTranslate = n.translate);
    else if (p.length > 0 && f)
      if (typeof t > "u") {
        const P = n.slidesGrid[m],
          A = n.slidesGrid[m - E] - P;
        l ? n.setTranslate(n.translate - A) : (n.slideTo(m - E, 0, !1, !0), s && (n.touches[n.isHorizontal() ? "startX" : "startY"] += A, n.touchEventsData.currentTranslate = n.translate))
      } else n.slideToLoop(t, 0, !1, !0)
  }
  if (n.allowSlidePrev = d, n.allowSlideNext = g, n.controller && n.controller.control && !o) {
    const P = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: a,
      byController: !0
    };
    Array.isArray(n.controller.control) ? n.controller.control.forEach(T => {
      !T.destroyed && T.params.loop && T.loopFix({
        ...P,
        slideTo: T.params.slidesPerView === v.slidesPerView ? r : !1
      })
    }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix({
      ...P,
      slideTo: n.controller.control.params.slidesPerView === v.slidesPerView ? r : !1
    })
  }
  n.emit("loopFix")
}

function loopDestroy() {
  const e = this,
    {
      params: t,
      slidesEl: r
    } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach(s => {
    const a = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
    i[a] = s
  }), e.slides.forEach(s => {
    s.removeAttribute("data-swiper-slide-index")
  }), i.forEach(s => {
    r.append(s)
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const r = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1
  })
}

function unsetGrabCursor() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  }))
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

function closestElement(e, t) {
  t === void 0 && (t = this);

  function r(i) {
    if (!i || i === getDocument() || i === getWindow()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || r(i.getRootNode().host)
  }
  return r(t)
}

function onTouchStart(e) {
  const t = this,
    r = getDocument(),
    i = getWindow(),
    s = t.touchEventsData;
  s.evCache.push(e);
  const {
    params: a,
    touches: o,
    enabled: l
  } = t;
  if (!l || !a.simulateTouch && e.pointerType === "mouse" || t.animating && a.preventInteractionOnTransition) return;
  !t.animating && a.cssMode && a.loop && t.loopFix();
  let n = e;
  n.originalEvent && (n = n.originalEvent);
  let h = n.target;
  if (a.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(h) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || s.isTouched && s.isMoved) return;
  const d = !!a.noSwipingClass && a.noSwipingClass !== "",
    g = e.composedPath ? e.composedPath() : e.path;
  d && n.target && n.target.shadowRoot && g && (h = g[0]);
  const c = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    v = !!(n.target && n.target.shadowRoot);
  if (a.noSwiping && (v ? closestElement(c, h) : h.closest(c))) {
    t.allowClick = !0;
    return
  }
  if (a.swipeHandler && !h.closest(a.swipeHandler)) return;
  o.currentX = n.pageX, o.currentY = n.pageY;
  const _ = o.currentX,
    u = o.currentY,
    S = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
    p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
  if (S && (_ <= p || _ >= i.innerWidth - p))
    if (S === "prevent") e.preventDefault();
    else return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = _, o.startY = u, s.touchStartTime = now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1);
  let m = !0;
  h.matches(s.focusableElements) && (m = !1, h.nodeName === "SELECT" && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== h && r.activeElement.blur();
  const f = m && t.allowTouchMove && a.touchStartPreventDefault;
  (a.touchStartForcePreventDefault || f) && !h.isContentEditable && n.preventDefault(), a.freeMode && a.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
}

function onTouchMove(e) {
  const t = getDocument(),
    r = this,
    i = r.touchEventsData,
    {
      params: s,
      touches: a,
      rtlTranslate: o,
      enabled: l
    } = r;
  if (!l || !s.simulateTouch && e.pointerType === "mouse") return;
  let n = e;
  if (n.originalEvent && (n = n.originalEvent), !i.isTouched) {
    i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", n);
    return
  }
  const h = i.evCache.findIndex(P => P.pointerId === n.pointerId);
  h >= 0 && (i.evCache[h] = n);
  const d = i.evCache.length > 1 ? i.evCache[0] : n,
    g = d.pageX,
    c = d.pageY;
  if (n.preventedByNestedSwiper) {
    a.startX = g, a.startY = c;
    return
  }
  if (!r.allowTouchMove) {
    n.target.matches(i.focusableElements) || (r.allowClick = !1), i.isTouched && (Object.assign(a, {
      startX: g,
      startY: c,
      prevX: r.touches.currentX,
      prevY: r.touches.currentY,
      currentX: g,
      currentY: c
    }), i.touchStartTime = now());
    return
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (r.isVertical()) {
      if (c < a.startY && r.translate <= r.maxTranslate() || c > a.startY && r.translate >= r.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return
      }
    } else if (g < a.startX && r.translate <= r.maxTranslate() || g > a.startX && r.translate >= r.minTranslate()) return
  }
  if (t.activeElement && n.target === t.activeElement && n.target.matches(i.focusableElements)) {
    i.isMoved = !0, r.allowClick = !1;
    return
  }
  if (i.allowTouchCallbacks && r.emit("touchMove", n), n.targetTouches && n.targetTouches.length > 1) return;
  a.currentX = g, a.currentY = c;
  const v = a.currentX - a.startX,
    _ = a.currentY - a.startY;
  if (r.params.threshold && Math.sqrt(v ** 2 + _ ** 2) < r.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let P;
    r.isHorizontal() && a.currentY === a.startY || r.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : v * v + _ * _ >= 25 && (P = Math.atan2(Math.abs(_), Math.abs(v)) * 180 / Math.PI, i.isScrolling = r.isHorizontal() ? P > s.touchAngle : 90 - P > s.touchAngle)
  }
  if (i.isScrolling && r.emit("touchMoveOpposite", n), typeof i.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (i.startMoving = !0), i.isScrolling || r.zoom && r.params.zoom && r.params.zoom.enabled && i.evCache.length > 1) {
    i.isTouched = !1;
    return
  }
  if (!i.startMoving) return;
  r.allowClick = !1, !s.cssMode && n.cancelable && n.preventDefault(), s.touchMoveStopPropagation && !s.nested && n.stopPropagation();
  let u = r.isHorizontal() ? v : _,
    S = r.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
  s.oneWayMovement && (u = Math.abs(u) * (o ? 1 : -1), S = Math.abs(S) * (o ? 1 : -1)), a.diff = u, u *= s.touchRatio, o && (u = -u, S = -S);
  const p = r.touchesDirection;
  r.swipeDirection = u > 0 ? "prev" : "next", r.touchesDirection = S > 0 ? "prev" : "next";
  const m = r.params.loop && !s.cssMode,
    f = r.swipeDirection === "next" && r.allowSlideNext || r.swipeDirection === "prev" && r.allowSlidePrev;
  if (!i.isMoved) {
    if (m && f && r.loopFix({
        direction: r.swipeDirection
      }), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
      const P = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      r.wrapperEl.dispatchEvent(P)
    }
    i.allowMomentumBounce = !1, s.grabCursor && (r.allowSlideNext === !0 || r.allowSlidePrev === !0) && r.setGrabCursor(!0), r.emit("sliderFirstMove", n)
  }
  let y;
  i.isMoved && p !== r.touchesDirection && m && f && Math.abs(u) >= 1 && (r.loopFix({
    direction: r.swipeDirection,
    setTranslate: !0
  }), y = !0), r.emit("sliderMove", n), i.isMoved = !0, i.currentTranslate = u + i.startTranslate;
  let w = !0,
    E = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (E = 0), u > 0 ? (m && f && !y && i.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.size / 2 : r.minTranslate()) && r.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > r.minTranslate() && (w = !1, s.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + u) ** E))) : u < 0 && (m && f && !y && i.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.size / 2 : r.maxTranslate()) && r.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: r.slides.length - (s.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }), i.currentTranslate < r.maxTranslate() && (w = !1, s.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - u) ** E))), w && (n.preventedByNestedSwiper = !0), !r.allowSlideNext && r.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && r.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && !r.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
    if (Math.abs(u) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, a.diff = r.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
        return
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return
    }! s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
}

function onTouchEnd(e) {
  const t = this,
    r = t.touchEventsData,
    i = r.evCache.findIndex(f => f.pointerId === e.pointerId);
  if (i >= 0 && r.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && !(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView))) return;
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: l,
    enabled: n
  } = t;
  if (!n || !s.simulateTouch && e.pointerType === "mouse") return;
  let h = e;
  if (h.originalEvent && (h = h.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", h), r.allowTouchCallbacks = !1, !r.isTouched) {
    r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
    return
  }
  s.grabCursor && r.isMoved && r.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = now(),
    g = d - r.touchStartTime;
  if (t.allowClick) {
    const f = h.path || h.composedPath && h.composedPath();
    t.updateClickedSlide(f && f[0] || h.target, f), t.emit("tap click", h), g < 300 && d - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)
  }
  if (r.lastClickTime = now(), nextTick(() => {
      t.destroyed || (t.allowClick = !0)
    }), !r.isTouched || !r.isMoved || !t.swipeDirection || a.diff === 0 || r.currentTranslate === r.startTranslate) {
    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
    return
  }
  r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
  let c;
  if (s.followFinger ? c = o ? t.translate : -t.translate : c = -r.currentTranslate, s.cssMode) return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: c
    });
    return
  }
  let v = 0,
    _ = t.slidesSizesGrid[0];
  for (let f = 0; f < l.length; f += f < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
    const y = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof l[f + y] < "u" ? c >= l[f] && c < l[f + y] && (v = f, _ = l[f + y] - l[f]) : c >= l[f] && (v = f, _ = l[l.length - 1] - l[l.length - 2])
  }
  let u = null,
    S = null;
  s.rewind && (t.isBeginning ? S = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (u = 0));
  const p = (c - l[v]) / _,
    m = v < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (g > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return
    }
    t.swipeDirection === "next" && (p >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? u : v + m) : t.slideTo(v)), t.swipeDirection === "prev" && (p > 1 - s.longSwipesRatio ? t.slideTo(v + m) : S !== null && p < 0 && Math.abs(p) > s.longSwipesRatio ? t.slideTo(S) : t.slideTo(v))
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return
    }
    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(v + m) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(u !== null ? u : v + m), t.swipeDirection === "prev" && t.slideTo(S !== null ? S : v))
  }
}

function onResize() {
  const e = this,
    {
      params: t,
      el: r
    } = e;
  if (r && r.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: s,
    snapGrid: a
  } = e, o = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
  }, 500)), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
}

function onClick(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function onScroll() {
  const e = this,
    {
      wrapperEl: t,
      rtlTranslate: r,
      enabled: i
    } = e;
  if (!i) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let s;
  const a = e.maxTranslate() - e.minTranslate();
  a === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / a, s !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}

function onLoad(e) {
  const t = this;
  processLazyPreloader(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
let dummyEventAttached = !1;

function dummyEventListener() {}
const events = (e, t) => {
  const r = getDocument(),
    {
      params: i,
      el: s,
      wrapperEl: a,
      device: o
    } = e,
    l = !!i.nested,
    n = t === "on" ? "addEventListener" : "removeEventListener",
    h = t;
  s[n]("pointerdown", e.onTouchStart, {
    passive: !1
  }), r[n]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), r[n]("pointerup", e.onTouchEnd, {
    passive: !0
  }), r[n]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), r[n]("pointerout", e.onTouchEnd, {
    passive: !0
  }), r[n]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), r[n]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && s[n]("click", e.onClick, !0), i.cssMode && a[n]("scroll", e.onScroll), i.updateOnWindowResize ? e[h](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[h]("observerUpdate", onResize, !0), s[n]("load", e.onLoad, {
    capture: !0
  })
};

function attachEvents() {
  const e = this,
    t = getDocument(),
    {
      params: r
    } = e;
  e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), r.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), e.onLoad = onLoad.bind(e), dummyEventAttached || (t.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0), events(e, "on")
}

function detachEvents() {
  events(this, "off")
}
var events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function setBreakpoint() {
  const e = this,
    {
      realIndex: t,
      initialized: r,
      params: i,
      el: s
    } = e,
    a = i.breakpoints;
  if (!a || a && Object.keys(a).length === 0) return;
  const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const n = (o in a ? a[o] : void 0) || e.originalParams,
    h = isGridEnabled(e, i),
    d = isGridEnabled(e, n),
    g = i.enabled;
  h && !d ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !h && d && (s.classList.add(`${i.containerModifierClass}grid`), (n.grid.fill && n.grid.fill === "column" || !n.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(p => {
    if (typeof n[p] > "u") return;
    const m = i[p] && i[p].enabled,
      f = n[p] && n[p].enabled;
    m && !f && e[p].disable(), !m && f && e[p].enable()
  });
  const c = n.direction && n.direction !== i.direction,
    v = i.loop && (n.slidesPerView !== i.slidesPerView || c),
    _ = i.loop;
  c && r && e.changeDirection(), extend(e.params, n);
  const u = e.params.enabled,
    S = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), g && !u ? e.disable() : !g && u && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", n), r && (v ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !_ && S ? (e.loopCreate(t), e.updateSlides()) : _ && !S && e.loopDestroy()), e.emit("breakpoint", n)
}

function getBreakpoint(e, t, r) {
  if (t === void 0 && (t = "window"), !e || t === "container" && !r) return;
  let i = !1;
  const s = getWindow(),
    a = t === "window" ? s.innerHeight : r.clientHeight,
    o = Object.keys(e).map(l => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const n = parseFloat(l.substr(1));
        return {
          value: a * n,
          point: l
        }
      }
      return {
        value: l,
        point: l
      }
    });
  o.sort((l, n) => parseInt(l.value, 10) - parseInt(n.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: n,
      value: h
    } = o[l];
    t === "window" ? s.matchMedia(`(min-width: ${h}px)`).matches && (i = n) : h <= r.clientWidth && (i = n)
  }
  return i || "max"
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(e, t) {
  const r = [];
  return e.forEach(i => {
    typeof i == "object" ? Object.keys(i).forEach(s => {
      i[s] && r.push(t + s)
    }) : typeof i == "string" && r.push(t + i)
  }), r
}

function addClasses() {
  const e = this,
    {
      classNames: t,
      params: r,
      rtl: i,
      el: s,
      device: a
    } = e,
    o = prepareClasses(["initialized", r.direction, {
      "free-mode": e.params.freeMode && r.freeMode.enabled
    }, {
      autoheight: r.autoHeight
    }, {
      rtl: i
    }, {
      grid: r.grid && r.grid.rows > 1
    }, {
      "grid-column": r.grid && r.grid.rows > 1 && r.grid.fill === "column"
    }, {
      android: a.android
    }, {
      ios: a.ios
    }, {
      "css-mode": r.cssMode
    }, {
      centered: r.cssMode && r.centeredSlides
    }, {
      "watch-progress": r.watchSlidesProgress
    }], r.containerModifierClass);
  t.push(...o), s.classList.add(...t), e.emitContainerClasses()
}

function removeClasses() {
  const e = this,
    {
      el: t,
      classNames: r
    } = e;
  t.classList.remove(...r), e.emitContainerClasses()
}
var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const e = this,
    {
      isLocked: t,
      params: r
    } = e,
    {
      slidesOffsetBefore: i
    } = r;
  if (i) {
    const s = e.slides.length - 1,
      a = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > a
  } else e.isLocked = e.snapGrid.length === 1;
  r.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), r.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var checkOverflow$1 = {
    checkOverflow
  },
  defaults = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

function moduleExtendParams(e, t) {
  return function(i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0],
      a = i[s];
    if (typeof a != "object" || a === null) {
      extend(t, i);
      return
    }
    if (e[s] === !0 && (e[s] = {
        enabled: !0
      }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in a)) {
      extend(t, i);
      return
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = {
      enabled: !1
    }), extend(t, i)
  }
}
const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  },
  extendedDefaults = {};
class Swiper {
  constructor() {
    let t, r;
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
    s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? r = s[0] : [t, r] = s, r || (r = {}), r = extend({}, r), t && !r.el && (r.el = t);
    const o = getDocument();
    if (r.el && typeof r.el == "string" && o.querySelectorAll(r.el).length > 1) {
      const d = [];
      return o.querySelectorAll(r.el).forEach(g => {
        const c = extend({}, r, {
          el: g
        });
        d.push(new Swiper(c))
      }), d
    }
    const l = this;
    l.__swiper__ = !0, l.support = getSupport(), l.device = getDevice({
      userAgent: r.userAgent
    }), l.browser = getBrowser(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], r.modules && Array.isArray(r.modules) && l.modules.push(...r.modules);
    const n = {};
    l.modules.forEach(d => {
      d({
        params: r,
        swiper: l,
        extendParams: moduleExtendParams(r, n),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      })
    });
    const h = extend({}, defaults, n);
    return l.params = extend({}, h, extendedDefaults, r), l.originalParams = extend({}, l.params), l.passedParams = extend({}, r), l.params && l.params.on && Object.keys(l.params.on).forEach(d => {
      l.on(d, l.params.on[d])
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: t,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return l.params.direction === "horizontal"
      },
      isVertical() {
        return l.params.direction === "vertical"
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
      },
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: l.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: !0,
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l
  }
  getSlideIndex(t) {
    const {
      slidesEl: r,
      params: i
    } = this, s = elementChildren(r, `.${i.slideClass}, swiper-slide`), a = elementIndex(s[0]);
    return elementIndex(t) - a
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter(r => r.getAttribute("data-swiper-slide-index") * 1 === t)[0])
  }
  recalcSlides() {
    const t = this,
      {
        slidesEl: r,
        params: i
      } = t;
    t.slides = elementChildren(r, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
  }
  setProgress(t, r) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = i.minTranslate(),
      o = (i.maxTranslate() - s) * t + s;
    i.translateTo(o, typeof r > "u" ? 0 : r), i.updateActiveIndex(), i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", r.join(" "))
  }
  getSlideClasses(t) {
    const r = this;
    return r.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(r.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const r = [];
    t.slides.forEach(i => {
      const s = t.getSlideClasses(i);
      r.push({
        slideEl: i,
        classNames: s
      }), t.emit("_slideClass", i, s)
    }), t.emit("_slideClasses", r)
  }
  slidesPerViewDynamic(t, r) {
    t === void 0 && (t = "current"), r === void 0 && (r = !1);
    const i = this,
      {
        params: s,
        slides: a,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: n,
        activeIndex: h
      } = i;
    let d = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let g = a[h] ? a[h].swiperSlideSize : 0,
        c;
      for (let v = h + 1; v < a.length; v += 1) a[v] && !c && (g += a[v].swiperSlideSize, d += 1, g > n && (c = !0));
      for (let v = h - 1; v >= 0; v -= 1) a[v] && !c && (g += a[v].swiperSlideSize, d += 1, g > n && (c = !0))
    } else if (t === "current")
      for (let g = h + 1; g < a.length; g += 1)(r ? o[g] + l[g] - o[h] < n : o[g] - o[h] < n) && (d += 1);
    else
      for (let g = h - 1; g >= 0; g -= 1) o[h] - o[g] < n && (d += 1);
    return d
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: r,
      params: i
    } = t;
    i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
      o.complete && processLazyPreloader(t, o)
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

    function s() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let a;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && t.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
        const o = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
        a = t.slideTo(o.length - 1, 0, !1, !0)
      } else a = t.slideTo(t.activeIndex, 0, !1, !0);
      a || s()
    }
    i.watchOverflow && r !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, r) {
    r === void 0 && (r = !0);
    const i = this,
      s = i.params.direction;
    return t || (t = s === "horizontal" ? "vertical" : "horizontal"), t === s || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach(a => {
      t === "vertical" ? a.style.width = "" : a.style.height = ""
    }), i.emit("changeDirection"), r && i.update()), i
  }
  changeLanguageDirection(t) {
    const r = this;
    r.rtl && t === "rtl" || !r.rtl && t === "ltr" || (r.rtl = t === "rtl", r.rtlTranslate = r.params.direction === "horizontal" && r.rtl, r.rtl ? (r.el.classList.add(`${r.params.containerModifierClass}rtl`), r.el.dir = "rtl") : (r.el.classList.remove(`${r.params.containerModifierClass}rtl`), r.el.dir = "ltr"), r.update())
  }
  mount(t) {
    const r = this;
    if (r.mounted) return !0;
    let i = t || r.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
    i.swiper = r, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (r.isElement = !0);
    const s = () => `.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let o = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : elementChildren(i, s())[0];
    return !o && r.params.createElements && (o = createElement("div", r.params.wrapperClass), i.append(o), elementChildren(i, `.${r.params.slideClass}`).forEach(l => {
      o.append(l)
    })), Object.assign(r, {
      el: i,
      wrapperEl: o,
      slidesEl: r.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
      hostEl: r.isElement ? i.parentNode.host : i,
      mounted: !0,
      rtl: i.dir.toLowerCase() === "rtl" || elementStyle(i, "direction") === "rtl",
      rtlTranslate: r.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || elementStyle(i, "direction") === "rtl"),
      wrongRTL: elementStyle(o, "display") === "-webkit-box"
    }), !0
  }
  init(t) {
    const r = this;
    if (r.initialized || r.mount(t) === !1) return r;
    r.emit("beforeInit"), r.params.breakpoints && r.setBreakpoint(), r.addClasses(), r.updateSize(), r.updateSlides(), r.params.watchOverflow && r.checkOverflow(), r.params.grabCursor && r.enabled && r.setGrabCursor(), r.params.loop && r.virtual && r.params.virtual.enabled ? r.slideTo(r.params.initialSlide + r.virtual.slidesBefore, 0, r.params.runCallbacksOnInit, !1, !0) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit, !1, !0), r.params.loop && r.loopCreate(), r.attachEvents();
    const s = [...r.el.querySelectorAll('[loading="lazy"]')];
    return r.isElement && s.push(...r.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(a => {
      a.complete ? processLazyPreloader(r, a) : a.addEventListener("load", o => {
        processLazyPreloader(r, o.target)
      })
    }), preload(r), r.initialized = !0, preload(r), r.emit("init"), r.emit("afterInit"), r
  }
  destroy(t, r) {
    t === void 0 && (t = !0), r === void 0 && (r = !0);
    const i = this,
      {
        params: s,
        el: a,
        wrapperEl: o,
        slides: l
      } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), r && (i.removeClasses(), a.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach(n => {
      n.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), n.removeAttribute("style"), n.removeAttribute("data-swiper-slide-index")
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(n => {
      i.off(n)
    }), t !== !1 && (i.el.swiper = null, deleteProps(i)), i.destroyed = !0), null
  }
  static extendDefaults(t) {
    extend(extendedDefaults, t)
  }
  static get extendedDefaults() {
    return extendedDefaults
  }
  static get defaults() {
    return defaults
  }
  static installModule(t) {
    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
    const r = Swiper.prototype.__modules__;
    typeof t == "function" && r.indexOf(t) < 0 && r.push(t)
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach(r => Swiper.installModule(r)), Swiper) : (Swiper.installModule(t), Swiper)
  }
}
Object.keys(prototypes).forEach(e => {
  Object.keys(prototypes[e]).forEach(t => {
    Swiper.prototype[t] = prototypes[e][t]
  })
});
Swiper.use([Resize, Observer]);

function usePointerMove() {
  const e = useState("pointer-position", () => ({
    x: 0,
    y: 0
  }));
  onMounted(() => {
    window.addEventListener("pointermove", t)
  }), onBeforeUnmount(() => {
    window.removeEventListener("pointermove", t)
  });

  function t(r) {
    e.value.x = r.clientX, e.value.y = r.clientY
  }
  return e
}
const _hoisted_1$d = {
    "data-dark-screen-mob": "",
    "data-start-trigger-mob": "top 70%",
    class: "wrap-sticky about-section",
    "data-scroll-section-mob": "introduction"
  },
  _hoisted_2$d = {
    class: "about",
    "data-scroll-section": "about",
    "data-scroll-section-mob": "about"
  },
  _hoisted_3$d = {
    class: "l1-t block-name"
  },
  _hoisted_4$a = {
    class: "h1-t title"
  },
  _hoisted_5$9 = {
    class: "swiper-wrapper"
  },
  _hoisted_6$8 = {
    class: "swiper-slide"
  },
  _hoisted_7$8 = ["src"],
  _hoisted_8$8 = {
    class: "honors-list"
  },
  _hoisted_9$8 = {
    class: "honor-name l1-t"
  },
  _hoisted_10$8 = {
    class: "l1"
  },
  _sfc_main$d = defineComponent({
    __name: "About",
    props: {
      data: {}
    },
    setup(e) {
      const t = useState("pointer-position"),
        {
          isMobile: r
        } = useViewport();
      usePointerMove();
      const i = () => {
          r.value || (gsapWithCSS.to("#drag-tag", {
            duration: .4,
            ease: "out-quint",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            delay: .2
          }), gsapWithCSS.to("#drag-tag span:nth-child(1)", {
            duration: .4,
            ease: "out-quint",
            transform: "translateY(0%) translateZ(10px)",
            delay: .6
          }))
        },
        s = () => {
          r.value || gsapWithCSS.to("#drag-tag", {
            duration: .4,
            ease: "out-quint",
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            delay: .4,
            onComplete: () => {
              gsapWithCSS.set("#drag-tag span:nth-child(1)", {
                transform: "translateY(100%)"
              })
            }
          })
        };
      return useInitAfterPreloader(() => {
        new Swiper("section.about-section .swiper", {
          speed: 600,
          spaceBetween: pxInRem(r ? 12 : 16),
          grabCursor: !0,
          slidesPerView: "auto",
          centeredSlides: !0,
          on: {
            touchStart: () => {
              r.value || (gsapWithCSS.to("#drag-tag span:nth-child(1)", {
                duration: .4,
                ease: "out-quint",
                transform: "translateY(-120%) translateZ(10px)",
                delay: .15
              }), gsapWithCSS.to("#drag-tag span:nth-child(2)", {
                duration: .4,
                ease: "out-quint",
                transform: "translateY(0%) translateZ(10px)",
                delay: .15
              }))
            },
            touchEnd: () => {
              r.value || (gsapWithCSS.to("#drag-tag span:nth-child(1)", {
                duration: .4,
                ease: "out-quint",
                transform: "translateY(0%)",
                delay: .15
              }), gsapWithCSS.to("#drag-tag span:nth-child(2)", {
                duration: .4,
                ease: "out-quint",
                transform: "translateY(120%)",
                delay: .15
              }))
            }
          }
        })
      }), (o, l) => {
        const n = __nuxt_component_4;
        return openBlock(), createElementBlock("section", _hoisted_1$d, [createVNode(n, null, {
          default: withCtx(() => [createBaseVNode("div", {
            id: "drag-tag",
            class: "drag-tag l1",
            style: normalizeStyle({
              transform: `translate(${unref(t).x}px, ${unref(t).y}px)`
            })
          }, l[0] || (l[0] = [createBaseVNode("span", null, "drag", -1), createBaseVNode("span", null, "drag", -1)]), 4)]),
          _: 1
        }), createBaseVNode("div", _hoisted_2$d, [createBaseVNode("span", _hoisted_3$d, toDisplayString(o.$t("about")), 1), createBaseVNode("h3", _hoisted_4$a, toDisplayString(o.data.title), 1), createBaseVNode("div", {
          class: "slider-wrap swiper",
          onMouseenter: i,
          onMouseleave: s
        }, [createBaseVNode("div", _hoisted_5$9, [(openBlock(!0), createElementBlock(Fragment, null, renderList(o.data.slides, h => (openBlock(), createElementBlock("div", _hoisted_6$8, [createBaseVNode("img", {
          src: h.normal,
          role: "presentation",
          class: "slide-image",
          loading: "lazy"
        }, null, 8, _hoisted_7$8)]))), 256))])], 32), createBaseVNode("ul", _hoisted_8$8, [(openBlock(!0), createElementBlock(Fragment, null, renderList(o.data.achievements, h => (openBlock(), createElementBlock("li", null, [createBaseVNode("span", _hoisted_9$8, toDisplayString(h.title), 1), createBaseVNode("p", _hoisted_10$8, toDisplayString(h.description), 1)]))), 256))])])])
      }
    }
  }),
  __nuxt_component_6 = _export_sfc(_sfc_main$d, [
    ["__scopeId", "data-v-f9332af4"]
  ]),
  _hoisted_1$c = {
    class: "btn"
  },
  _hoisted_2$c = {
    class: "wrap-icon hidden"
  },
  _hoisted_3$c = {
    class: "wrap-icon hover"
  },
  _sfc_main$c = defineComponent({
    __name: "CircleArrow",
    props: {
      toLeft: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("button", _hoisted_1$c, [createBaseVNode("div", _hoisted_2$c, [(openBlock(), createElementBlock("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        class: normalizeClass(["arrow", {
          "to-left": t.toLeft
        }]),
        xmlns: "http://www.w3.org/2000/svg"
      }, r[0] || (r[0] = [createBaseVNode("path", {
        d: "M10.781 8.66673L2.66659 8.66673L2.66659 7.3334L10.781 7.3334L7.20499 3.75747L8.14779 2.81467L13.3333 8.00007L8.14779 13.1855L7.20499 12.2427L10.781 8.66673Z"
      }, null, -1)]), 2))]), createBaseVNode("div", _hoisted_3$c, [(openBlock(), createElementBlock("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        class: normalizeClass(["arrow", {
          "to-left": t.toLeft
        }]),
        xmlns: "http://www.w3.org/2000/svg"
      }, r[1] || (r[1] = [createBaseVNode("path", {
        d: "M10.781 8.66673L2.66659 8.66673L2.66659 7.3334L10.781 7.3334L7.20499 3.75747L8.14779 2.81467L13.3333 8.00007L8.14779 13.1855L7.20499 12.2427L10.781 8.66673Z"
      }, null, -1)]), 2))]), r[2] || (r[2] = createBaseVNode("div", {
        class: "btn-hover-bg"
      }, null, -1))]))
    }
  }),
  __nuxt_component_0$1 = _export_sfc(_sfc_main$c, [
    ["__scopeId", "data-v-16c463fb"]
  ]),
  _hoisted_1$b = {
    class: "btn"
  },
  _hoisted_2$b = {
    class: "wrap-text l1 hidden"
  },
  _hoisted_3$b = {
    class: "wrap-text l1 hover"
  },
  _sfc_main$b = defineComponent({
    __name: "Default",
    props: {
      text: {
        default: "Button"
      }
    },
    setup(e) {
      return (t, r) => (openBlock(), createElementBlock("button", _hoisted_1$b, [createBaseVNode("p", _hoisted_2$b, toDisplayString(t.text), 1), createBaseVNode("p", _hoisted_3$b, toDisplayString(t.text), 1), r[0] || (r[0] = createBaseVNode("div", {
        class: "btn-hover-bg"
      }, null, -1))]))
    }
  }),
  __nuxt_component_2 = _export_sfc(_sfc_main$b, [
    ["__scopeId", "data-v-6f2cf927"]
  ]),
  _hoisted_1$a = {
    "data-light-screen": "",
    "data-light-screen-mob": "",
    class: "stats"
  },
  _hoisted_2$a = {
    class: "sticky"
  },
  _hoisted_3$a = {
    key: 0,
    class: "img-bg side-overlay"
  },
  _hoisted_4$9 = {
    class: "parallax-wrapper"
  },
  _hoisted_5$8 = ["src"],
  _hoisted_6$7 = {
    class: "stats-top"
  },
  _hoisted_7$7 = {
    class: "stat-column left"
  },
  _hoisted_8$7 = {
    class: "stat-value d1"
  },
  _hoisted_9$7 = {
    class: "stat-value-scroller"
  },
  _hoisted_10$7 = {
    class: "stats-details l1"
  },
  _hoisted_11$7 = {
    class: "stat-column center"
  },
  _hoisted_12$6 = {
    class: "stat-value d1"
  },
  _hoisted_13$6 = {
    class: "stat-value-scroller"
  },
  _hoisted_14$6 = {
    class: "stats-details l1"
  },
  _hoisted_15$5 = {
    class: "stat-column right"
  },
  _hoisted_16$4 = {
    class: "stat-value d1"
  },
  _hoisted_17$3 = {
    class: "stat-value-scroller"
  },
  _hoisted_18$1 = {
    class: "stats-details l1"
  },
  _hoisted_19$1 = {
    class: "center-description-wrap"
  },
  _hoisted_20$1 = {
    key: 0,
    class: "stats-mobile-content"
  },
  _hoisted_21$1 = {
    class: "wrap-slides-mob"
  },
  _hoisted_22$1 = ["src", "alt", "data-slide-idx"],
  _hoisted_23$1 = ["data-slide-idx"],
  _hoisted_24$1 = {
    class: "d1"
  },
  _hoisted_25$1 = {
    class: "l1"
  },
  _hoisted_26$1 = {
    class: "d1"
  },
  _hoisted_27$1 = {
    class: "l1"
  },
  _hoisted_28 = {
    class: "mob-slider-counter l1-t"
  },
  _hoisted_29 = {
    class: "wrap-text-slides"
  },
  _hoisted_30 = ["data-slide-idx"],
  _hoisted_31 = {
    class: "controls-mob"
  },
  _hoisted_32 = ["data-scroll-section"],
  _hoisted_33 = {
    class: "cases"
  },
  _hoisted_34 = {
    class: "cases-title h1"
  },
  _hoisted_35 = ["data-case-id", "onMouseenter"],
  _hoisted_36 = {
    class: "wrap-case-img"
  },
  _hoisted_37 = ["src", "alt"],
  _hoisted_38 = {
    class: "case-name l1"
  },
  _hoisted_39 = {
    class: "case-counter l1-t"
  },
  _hoisted_40 = {
    key: 0,
    class: "case-bg side-overlay"
  },
  _hoisted_41 = ["src", "alt"],
  _hoisted_42 = {
    class: "h1 square"
  },
  _hoisted_43 = {
    class: "case-description l1"
  },
  _hoisted_44 = {
    class: "big-title d1"
  },
  _hoisted_45 = {
    class: "small-title h1"
  },
  _hoisted_46 = {
    key: 0,
    class: "mobile-cases",
    "data-light-screen-mob": "",
    "data-scroll-section": "cases",
    "data-scroll-section-mob": "cases"
  },
  _hoisted_47 = {
    class: "bg-mob-cases"
  },
  _hoisted_48 = ["src"],
  _hoisted_49 = {
    class: "mob-cases-title h1"
  },
  _hoisted_50 = {
    class: "cases-sticky"
  },
  _hoisted_51 = ["data-case-id", "onClick"],
  _hoisted_52 = ["src", "alt"],
  _hoisted_53 = {
    class: "case-name l1"
  },
  _hoisted_54 = {
    class: "case-counter l1-t"
  },
  MIN_AVAILABLE_SPEED = 15,
  _sfc_main$a = defineComponent({
    __name: "Stats",
    props: {
      data: {}
    },
    setup(e) {
      const t = e,
        r = [],
        i = useState("lenis"),
        s = ref(0),
        {
          lockScroll: a
        } = useLockScroll(),
        {
          isMobile: o
        } = useViewport(),
        l = ref(!1),
        n = ref(0),
        h = reactive({
          status: !1,
          id: null,
          idx: 0
        }),
        d = reactive({
          top: 0,
          left: 0
        }),
        g = computed(() => h.id ? t.data.cases.list.find(m => m.id === h.id) : null),
        c = () => {
          gsapWithCSS.fromTo([".case-description"], {
            opacity: 0
          }, {
            opacity: 1,
            duration: .75,
            ease: "out-expo",
            delay: .1
          }), gsapWithCSS.fromTo(".hover-modal .case-bg img", {
            scale: 1.2
          }, {
            scale: 1,
            duration: 1,
            ease: "out-expo",
            willChange: "transform"
          }), gsapWithCSS.fromTo([".hover-modal .square span", ".hover-modal .big-title span", ".hover-modal .small-title span"], {
            y: 100
          }, {
            y: 0,
            duration: .75,
            ease: "out-expo",
            stagger: .1,
            willChange: "transform"
          })
        },
        v = (m, f) => {
          if (i.value.isScrolling && i.value.scrollSpeed > MIN_AVAILABLE_SPEED) return;
          i.value.isScrolling && i.value.stop();
          const y = document.querySelector(`.case[data-case-id="${m}"]`);
          h.status = !0, h.id = m, h.idx = f;
          const {
            top: w,
            left: E
          } = y.getBoundingClientRect();
          d.top = w, d.left = E, a(!0), nextTick$1(c)
        },
        _ = () => {
          i.value.start(), h.status = !1, a(!1)
        },
        u = m => {
          m.forEach(f => {
            fetch(f.image).then(y => y.blob()).then(y => {
              const w = URL.createObjectURL(y);
              r.push({
                id: f.id,
                image: w
              })
            }).catch(y => console.error("Image load error:", y))
          })
        },
        S = (m, f) => {
          if (l.value) return;
          l.value = !0;
          const y = [...document.querySelectorAll("section.stats .stats-mobile-content .wrap-slides-mob img")],
            w = gsapWithCSS.timeline();
          w.to(`section.stats .stats-mobile-content .mob-text-slide[data-slide-idx='${m}'] .line-text`, {
            transform: "translateY(-110%)",
            stagger: {
              each: .04
            },
            ease: "out-quint",
            willChange: "transform",
            onStart: () => {
              setTimeout(() => {
                var E;
                y.forEach(P => {
                  P.classList.remove("active")
                }), (E = y == null ? void 0 : y.find(P => P.dataset.slideIdx === String(f))) == null || E.classList.add("active")
              }, 50)
            }
          }), w.to(`section.stats .stats-mobile-content .values-slide[data-slide-idx="${m}"]`, {
            opacity: 0,
            duration: .6,
            ease: "out-quint"
          }, "<"), w.fromTo(`section.stats .stats-mobile-content .mob-text-slide[data-slide-idx='${f}'] .line-text`, {
            transform: "translateY(100%)"
          }, {
            transform: "translateY(0)",
            stagger: {
              each: .04
            },
            ease: "out-quint",
            willChange: "transform",
            onComplete: () => {
              n.value = f, l.value = !1
            }
          }), w.to(`section.stats .stats-mobile-content .values-slide[data-slide-idx="${f}"]`, {
            opacity: 1,
            duration: .6,
            ease: "out-quint"
          }, "<")
        };
      return useInitAfterPreloader(() => {
        if (u(t.data.cases.list.map(m => ({
            id: m.name,
            image: m.image.normal
          }))), o.value) {
          document.querySelectorAll("section.stats .stats-mobile-content .mob-text-slide").forEach(f => {
            const {
              lines: y
            } = new SplitText(f, {
              type: "lines",
              linesClass: "line",
              reduceWhiteSpace: !0,
              lineThreshold: .5
            });
            y.forEach(w => {
              w.innerHTML = `<span class='line-text'>${w.innerHTML}</span>`
            })
          }), gsapWithCSS.to(".mobile-cases .bg-mob-cases img", {
            scale: 1.2,
            scrollTrigger: {
              trigger: "section.mobile-cases",
              start: "top bottom",
              end: "bottom top",
              scrub: !0
            },
            ease: "none"
          }), nextTick$1(() => {
            const f = document.querySelector("section.stats .stats-mobile-content .wrap-slides-mob img[data-slide-idx='0']");
            f == null || f.classList.add("active"), gsapWithCSS.set(document.querySelectorAll("section.stats .stats-mobile-content .mob-text-slide[data-slide-idx='0'] .line-text"), {
              y: 0
            }), gsapWithCSS.set('section.stats .stats-mobile-content .values-slide[data-slide-idx="0"]', {
              opacity: 1
            })
          });
          return
        }
        gsapWithCSS.to("section.stats .parallax-wrapper", {
          y: 0,
          scrollTrigger: {
            trigger: "section.stats .sticky",
            start: "top bottom",
            end: "top top",
            scrub: !0
          },
          ease: "none"
        }), gsapWithCSS.to("section.stats .parallax-wrapper", {
          yPercent: 10,
          scrollTrigger: {
            trigger: "section.our-services",
            start: "top bottom",
            end: `+=${window.innerHeight}`,
            scrub: !0
          },
          ease: "none"
        }), gsapWithCSS.to("section.stats .stat-column.left .stat-value-scroller", {
          yPercent: -50,
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.left",
            start: "top bottom",
            end: "bottom bottom",
            scrub: .4,
            onEnterBack: () => {
              s.value = 0
            },
            onLeave: () => {
              s.value = 1
            }
          }
        }), gsapWithCSS.to("section.stats .stat-column.left .stats-details span:first-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.left",
            start: "top bottom",
            end: "center bottom",
            scrub: .4
          },
          opacity: 0
        }), gsapWithCSS.to("section.stats .stat-column.left .stats-details span:last-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.left",
            start: "center bottom",
            end: "bottom bottom",
            scrub: .4
          },
          opacity: 1
        }), gsapWithCSS.to("section.stats .stat-column.center .stat-value-scroller", {
          yPercent: -50,
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.center",
            start: "top bottom",
            end: "bottom bottom",
            scrub: .4,
            onEnterBack: () => {
              s.value = 1
            },
            onLeave: () => {
              s.value = 2
            }
          }
        }), gsapWithCSS.to("section.stats .stat-column.center .stats-details span:first-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.center",
            start: "top bottom",
            end: "center bottom",
            scrub: .4
          },
          opacity: 0
        }), gsapWithCSS.to("section.stats .stat-column.center .stats-details span:last-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.center",
            start: "center bottom",
            end: "bottom bottom",
            scrub: .4
          },
          opacity: 1
        }), gsapWithCSS.to("section.stats .stat-column.right .stat-value-scroller", {
          yPercent: -50,
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.right",
            start: "top bottom",
            end: "bottom bottom",
            scrub: .4
          }
        }), gsapWithCSS.to("section.stats .stat-column.right .stats-details span:first-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.right",
            start: "top bottom",
            end: "center bottom",
            scrub: .4
          },
          opacity: 0
        }), gsapWithCSS.to("section.stats .stat-column.right .stats-details span:last-child", {
          scrollTrigger: {
            trigger: "section.stats .scroller-stats-plash.right",
            start: "center bottom",
            end: "bottom bottom",
            scrub: .4
          },
          opacity: 1
        }), gsapWithCSS.to(["section.stats .stats-top", "section.stats .center-description-wrap"], {
          scrollTrigger: {
            trigger: ".hide-stats-plash",
            start: "top bottom",
            end: "bottom bottom",
            scrub: .4
          },
          autoAlpha: 0
        }), gsapWithCSS.to("section.stats .case", {
          y: 0,
          stagger: .15,
          scrollTrigger: {
            trigger: "section.stats .wrap-sticky",
            start: "top bottom",
            end: "top top",
            scrub: .4
          }
        }), gsapWithCSS.from("section.stats .case img", {
          scale: 1.2,
          stagger: .15,
          scrollTrigger: {
            trigger: "section.stats .wrap-sticky",
            start: "top bottom",
            end: "top top",
            scrub: !0
          },
          ease: "none"
        }), gsapWithCSS.to("section.stats .cases-overlay", {
          scrollTrigger: {
            trigger: "section.stats .wrap-sticky",
            start: "top bottom",
            end: "top center",
            scrub: .4
          },
          autoAlpha: 1
        }), gsapWithCSS.to("section.stats .cases-title span", {
          y: 0,
          scrollTrigger: {
            trigger: "section.stats .wrap-sticky",
            start: "top bottom",
            end: "+=120",
            scrub: .4
          }
        })
      }), (m, f) => {
        const y = __nuxt_component_4,
          w = __nuxt_component_0$1,
          E = __nuxt_component_2;
        return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("section", _hoisted_1$a, [createBaseVNode("div", _hoisted_2$a, [createVNode(y, null, {
          default: withCtx(() => [unref(o) ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", _hoisted_3$a, [createBaseVNode("div", _hoisted_4$9, [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.list, (P, T) => (openBlock(), createElementBlock("img", {
            src: P.bgImage.normal,
            role: "presentation",
            class: normalizeClass(["inner-img", {
              active: unref(s) === T
            }])
          }, null, 10, _hoisted_5$8))), 256))])]))]),
          _: 1
        }), createBaseVNode("div", _hoisted_6$7, [createBaseVNode("div", _hoisted_7$7, [createBaseVNode("p", _hoisted_8$7, [createBaseVNode("span", _hoisted_9$7, [createBaseVNode("span", null, toDisplayString(m.data.list[0].value1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[0].value2), 1)])]), createBaseVNode("p", _hoisted_10$7, [createBaseVNode("span", null, toDisplayString(m.data.list[0].description1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[0].description2), 1)])]), createBaseVNode("div", _hoisted_11$7, [createBaseVNode("p", _hoisted_12$6, [createBaseVNode("span", _hoisted_13$6, [createBaseVNode("span", null, toDisplayString(m.data.list[1].value1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[1].value2), 1)])]), createBaseVNode("p", _hoisted_14$6, [createBaseVNode("span", null, toDisplayString(m.data.list[1].description1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[1].description2), 1)])]), createBaseVNode("div", _hoisted_15$5, [createBaseVNode("p", _hoisted_16$4, [createBaseVNode("span", _hoisted_17$3, [createBaseVNode("span", null, toDisplayString(m.data.list[2].value1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[2].value2), 1)])]), createBaseVNode("p", _hoisted_18$1, [createBaseVNode("span", null, toDisplayString(m.data.list[2].description1), 1), createBaseVNode("span", null, toDisplayString(m.data.list[2].description2), 1)])])]), createBaseVNode("div", _hoisted_19$1, [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.list, (P, T) => (openBlock(), createElementBlock("p", {
          class: normalizeClass(["l1 center-description", {
            active: unref(s) === T
          }])
        }, toDisplayString(P.title), 3))), 256))]), createVNode(y, null, {
          default: withCtx(() => [unref(o) ? (openBlock(), createElementBlock("div", _hoisted_20$1, [createBaseVNode("div", _hoisted_21$1, [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.list, (P, T) => (openBlock(), createElementBlock("img", {
            src: P.bgImage.normal,
            alt: P.title,
            "data-slide-idx": T,
            class: "inner-img"
          }, null, 8, _hoisted_22$1))), 256)), f[2] || (f[2] = createBaseVNode("div", {
            class: "overlay"
          }, null, -1)), (openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.list, (P, T) => (openBlock(), createElementBlock("div", {
            "data-slide-idx": T,
            class: "values-slide"
          }, [createBaseVNode("div", null, [createBaseVNode("p", _hoisted_24$1, toDisplayString(P.value1), 1), createBaseVNode("p", _hoisted_25$1, toDisplayString(P.description1), 1)]), createBaseVNode("div", null, [createBaseVNode("p", _hoisted_26$1, toDisplayString(P.value2), 1), createBaseVNode("p", _hoisted_27$1, toDisplayString(P.description2), 1)])], 8, _hoisted_23$1))), 256))]), createBaseVNode("p", _hoisted_28, toDisplayString(String(unref(n) + 1).padStart(2, "0") + " / " + String(m.data.list.length).padStart(2, "0")), 1), createBaseVNode("div", _hoisted_29, [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.list, (P, T) => (openBlock(), createElementBlock("p", {
            class: "mob-text-slide l1",
            "data-slide-idx": T
          }, toDisplayString(P.title), 9, _hoisted_30))), 256))]), createBaseVNode("div", _hoisted_31, [createVNode(w, {
            "to-left": "",
            class: "swiper-button-prev",
            "aria-label": "button slider previous",
            onClick: f[0] || (f[0] = withModifiers(P => S(unref(n), (unref(n) - 1 + m.data.list.length) % m.data.list.length), ["stop"]))
          }), createVNode(w, {
            class: "swiper-button-next",
            "aria-label": "button slider next",
            onClick: f[1] || (f[1] = withModifiers(P => S(unref(n), (unref(n) + 1) % m.data.list.length), ["stop"]))
          }), createVNode(E, {
            text: m.$t("discuss"),
            "data-form-anchor": ""
          }, null, 8, ["text"])])])) : createCommentVNode("", !0)]),
          _: 1
        }), f[3] || (f[3] = createBaseVNode("div", {
          class: "cases-overlay"
        }, null, -1))]), f[5] || (f[5] = createStaticVNode('<div class="stats-anim-plash" data-v-357f0fa6><div class="scroller-stats-plash left" data-v-357f0fa6></div><div class="scroller-stats-plash center" data-v-357f0fa6></div><div class="scroller-stats-plash right" data-v-357f0fa6></div><div class="hide-stats-plash" data-v-357f0fa6></div></div>', 1)), createBaseVNode("div", {
          class: "wrap-sticky",
          "data-scroll-section": unref(o) ? "" : "cases"
        }, [createBaseVNode("div", _hoisted_33, [createBaseVNode("p", _hoisted_34, [createBaseVNode("span", null, toDisplayString(m.data.cases.title), 1)]), (openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.cases.list, (P, T) => (openBlock(), createElementBlock("article", {
          class: normalizeClass(["case", {
            "first-line": T < 4,
            "second-line": T >= 4 && T < 8
          }]),
          "data-case-id": P.id,
          onMouseenter: A => v(P.id, T)
        }, [createBaseVNode("div", _hoisted_36, [createVNode(y, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: P.image.medium,
            alt: P.name,
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_37)]),
          _: 2
        }, 1024)]), createBaseVNode("p", _hoisted_38, [createBaseVNode("span", _hoisted_39, toDisplayString(String(T + 1).padStart(3, "0")), 1), createTextVNode(" " + toDisplayString(P.name), 1)])], 42, _hoisted_35))), 256))])], 8, _hoisted_32), createVNode(y, null, {
          default: withCtx(() => {
            var P, T, A, $, I;
            return [(openBlock(), createBlock(Teleport, {
              to: "main.page"
            }, [unref(h).status ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["hover-modal", {
                active: unref(h).status
              }])
            }, [createBaseVNode("button", {
              class: "btn-close-mob",
              onClick: _
            }), unref(g) ? (openBlock(), createElementBlock("div", _hoisted_40, [createBaseVNode("img", {
              src: ((P = r.find(B => {
                var L;
                return ((L = unref(g)) == null ? void 0 : L.name) === B.id
              })) == null ? void 0 : P.image) || "",
              alt: unref(g).name,
              class: "inner-img"
            }, null, 8, _hoisted_41), f[4] || (f[4] = createBaseVNode("div", {
              class: "case-bg-overlay"
            }, null, -1))])) : createCommentVNode("", !0), createBaseVNode("div", {
              class: normalizeClass(["fake-case", {
                right: !((unref(h).idx + 1) % 4)
              }]),
              style: normalizeStyle({
                top: `${unref(d).top}px`,
                left: `${unref(d).left}px`
              }),
              onMouseleave: _
            }, [createBaseVNode("p", _hoisted_42, [createBaseVNode("span", null, toDisplayString((T = unref(g)) == null ? void 0 : T.square), 1)]), createBaseVNode("p", _hoisted_43, toDisplayString((A = unref(g)) == null ? void 0 : A.description), 1)], 38), createBaseVNode("div", _hoisted_44, [createBaseVNode("span", null, toDisplayString(($ = unref(g)) == null ? void 0 : $.name), 1)]), createBaseVNode("div", _hoisted_45, [createBaseVNode("span", null, toDisplayString((I = unref(g)) == null ? void 0 : I.name), 1)])], 2)) : createCommentVNode("", !0)]))]
          }),
          _: 1
        })]), unref(o) ? (openBlock(), createElementBlock("section", _hoisted_46, [createBaseVNode("div", _hoisted_47, [createBaseVNode("img", {
          src: m.data.list[1].bgImage.normal,
          role: "presentation",
          class: "inner-img"
        }, null, 8, _hoisted_48), createBaseVNode("p", _hoisted_49, toDisplayString(m.data.cases.title), 1)]), createBaseVNode("div", _hoisted_50, [(openBlock(!0), createElementBlock(Fragment, null, renderList(m.data.cases.list, (P, T) => (openBlock(), createElementBlock("article", {
          class: "case",
          "data-case-id": P.id,
          onClick: A => v(P.id, T)
        }, [createVNode(y, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: P.image.medium,
            alt: P.name,
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_52)]),
          _: 2
        }, 1024), createBaseVNode("p", _hoisted_53, [createBaseVNode("span", _hoisted_54, toDisplayString(String(T + 1).padStart(3, "0")), 1), createTextVNode(" " + toDisplayString(P.name), 1)])], 8, _hoisted_51))), 256))])])) : createCommentVNode("", !0)], 64)
      }
    }
  }),
  __nuxt_component_7 = _export_sfc(_sfc_main$a, [
    ["__scopeId", "data-v-357f0fa6"]
  ]);

function createElementIfNotDefined(e, t, r, i) {
  return e.params.createElements && Object.keys(i).forEach(s => {
    if (!r[s] && r.auto === !0) {
      let a = elementChildren(e.el, `.${i[s]}`)[0];
      a || (a = createElement("div", i[s]), a.className = i[s], e.el.append(a)), r[s] = a, t[s] = a
    }
  }), r
}

function Navigation(e) {
  let {
    swiper: t,
    extendParams: r,
    on: i,
    emit: s
  } = e;
  r({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {
    nextEl: null,
    prevEl: null
  };
  const a = u => (Array.isArray(u) ? u : [u]).filter(S => !!S);

  function o(u) {
    let S;
    return u && typeof u == "string" && t.isElement && (S = t.el.querySelector(u), S) ? S : (u && (typeof u == "string" && (S = [...document.querySelectorAll(u)]), t.params.uniqueNavElements && typeof u == "string" && S.length > 1 && t.el.querySelectorAll(u).length === 1 && (S = t.el.querySelector(u))), u && !S ? u : S)
  }

  function l(u, S) {
    const p = t.params.navigation;
    u = a(u), u.forEach(m => {
      m && (m.classList[S ? "add" : "remove"](...p.disabledClass.split(" ")), m.tagName === "BUTTON" && (m.disabled = S), t.params.watchOverflow && t.enabled && m.classList[t.isLocked ? "add" : "remove"](p.lockClass))
    })
  }

  function n() {
    const {
      nextEl: u,
      prevEl: S
    } = t.navigation;
    if (t.params.loop) {
      l(S, !1), l(u, !1);
      return
    }
    l(S, t.isBeginning && !t.params.rewind), l(u, t.isEnd && !t.params.rewind)
  }

  function h(u) {
    u.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
  }

  function d(u) {
    u.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), s("navigationNext"))
  }

  function g() {
    const u = t.params.navigation;
    if (t.params.navigation = createElementIfNotDefined(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(u.nextEl || u.prevEl)) return;
    let S = o(u.nextEl),
      p = o(u.prevEl);
    Object.assign(t.navigation, {
      nextEl: S,
      prevEl: p
    }), S = a(S), p = a(p);
    const m = (f, y) => {
      f && f.addEventListener("click", y === "next" ? d : h), !t.enabled && f && f.classList.add(...u.lockClass.split(" "))
    };
    S.forEach(f => m(f, "next")), p.forEach(f => m(f, "prev"))
  }

  function c() {
    let {
      nextEl: u,
      prevEl: S
    } = t.navigation;
    u = a(u), S = a(S);
    const p = (m, f) => {
      m.removeEventListener("click", f === "next" ? d : h), m.classList.remove(...t.params.navigation.disabledClass.split(" "))
    };
    u.forEach(m => p(m, "next")), S.forEach(m => p(m, "prev"))
  }
  i("init", () => {
    t.params.navigation.enabled === !1 ? _() : (g(), n())
  }), i("toEdge fromEdge lock unlock", () => {
    n()
  }), i("destroy", () => {
    c()
  }), i("enable disable", () => {
    let {
      nextEl: u,
      prevEl: S
    } = t.navigation;
    if (u = a(u), S = a(S), t.enabled) {
      n();
      return
    } [...u, ...S].filter(p => !!p).forEach(p => p.classList.add(t.params.navigation.lockClass))
  }), i("click", (u, S) => {
    let {
      nextEl: p,
      prevEl: m
    } = t.navigation;
    p = a(p), m = a(m);
    const f = S.target;
    if (t.params.navigation.hideOnClick && !m.includes(f) && !p.includes(f)) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === f || t.pagination.el.contains(f))) return;
      let y;
      p.length ? y = p[0].classList.contains(t.params.navigation.hiddenClass) : m.length && (y = m[0].classList.contains(t.params.navigation.hiddenClass)), s(y === !0 ? "navigationShow" : "navigationHide"), [...p, ...m].filter(w => !!w).forEach(w => w.classList.toggle(t.params.navigation.hiddenClass))
    }
  });
  const v = () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), g(), n()
    },
    _ = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), c()
    };
  Object.assign(t.navigation, {
    enable: v,
    disable: _,
    update: n,
    init: g,
    destroy: c
  })
}

function Controller(e) {
  let {
    swiper: t,
    extendParams: r,
    on: i
  } = e;
  r({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  }), t.controller = {
    control: void 0
  };

  function s(h, d) {
    const g = function() {
      let u, S, p;
      return (m, f) => {
        for (S = -1, u = m.length; u - S > 1;) p = u + S >> 1, m[p] <= f ? S = p : u = p;
        return u
      }
    }();
    this.x = h, this.y = d, this.lastIndex = h.length - 1;
    let c, v;
    return this.interpolate = function(u) {
      return u ? (v = g(this.x, u), c = v - 1, (u - this.x[c]) * (this.y[v] - this.y[c]) / (this.x[v] - this.x[c]) + this.y[c]) : 0
    }, this
  }

  function a(h) {
    t.controller.spline = t.params.loop ? new s(t.slidesGrid, h.slidesGrid) : new s(t.snapGrid, h.snapGrid)
  }

  function o(h, d) {
    const g = t.controller.control;
    let c, v;
    const _ = t.constructor;

    function u(S) {
      if (S.destroyed) return;
      const p = t.rtlTranslate ? -t.translate : t.translate;
      t.params.controller.by === "slide" && (a(S), v = -t.controller.spline.interpolate(-p)), (!v || t.params.controller.by === "container") && (c = (S.maxTranslate() - S.minTranslate()) / (t.maxTranslate() - t.minTranslate()), (Number.isNaN(c) || !Number.isFinite(c)) && (c = 1), v = (p - t.minTranslate()) * c + S.minTranslate()), t.params.controller.inverse && (v = S.maxTranslate() - v), S.updateProgress(v), S.setTranslate(v, t), S.updateActiveIndex(), S.updateSlidesClasses()
    }
    if (Array.isArray(g))
      for (let S = 0; S < g.length; S += 1) g[S] !== d && g[S] instanceof _ && u(g[S]);
    else g instanceof _ && d !== g && u(g)
  }

  function l(h, d) {
    const g = t.constructor,
      c = t.controller.control;
    let v;

    function _(u) {
      u.destroyed || (u.setTransition(h, t), h !== 0 && (u.transitionStart(), u.params.autoHeight && nextTick(() => {
        u.updateAutoHeight()
      }), elementTransitionEnd(u.wrapperEl, () => {
        c && u.transitionEnd()
      })))
    }
    if (Array.isArray(c))
      for (v = 0; v < c.length; v += 1) c[v] !== d && c[v] instanceof g && _(c[v]);
    else c instanceof g && d !== c && _(c)
  }

  function n() {
    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
  }
  i("beforeInit", () => {
    if (typeof window < "u" && (typeof t.params.controller.control == "string" || t.params.controller.control instanceof HTMLElement)) {
      const h = document.querySelector(t.params.controller.control);
      if (h && h.swiper) t.controller.control = h.swiper;
      else if (h) {
        const d = g => {
          t.controller.control = g.detail[0], t.update(), h.removeEventListener("init", d)
        };
        h.addEventListener("init", d)
      }
      return
    }
    t.controller.control = t.params.controller.control
  }), i("update", () => {
    n()
  }), i("resize", () => {
    n()
  }), i("observerUpdate", () => {
    n()
  }), i("setTranslate", (h, d, g) => {
    !t.controller.control || t.controller.control.destroyed || t.controller.setTranslate(d, g)
  }), i("setTransition", (h, d, g) => {
    !t.controller.control || t.controller.control.destroyed || t.controller.setTransition(d, g)
  }), Object.assign(t.controller, {
    setTranslate: o,
    setTransition: l
  })
}
const _hoisted_1$9 = {
    "data-dark-screen": "",
    "data-start-trigger": "top center",
    "data-dark-screen-mob": "",
    "data-scroll-section": "services",
    "data-scroll-section-mob": "services",
    class: "our-services"
  },
  _hoisted_2$9 = {
    class: "audio-part"
  },
  _hoisted_3$9 = {
    class: "wrap-btn"
  },
  _hoisted_4$8 = {
    class: "block-name l1-t"
  },
  _hoisted_5$7 = {
    class: "wrap-cont"
  },
  _hoisted_6$6 = {
    class: "title-slides ru-gap"
  },
  _hoisted_7$6 = ["innerHTML", "data-slide-idx", "data-test"],
  _hoisted_8$6 = {
    class: "slides-counter l1-t"
  },
  _hoisted_9$6 = {
    class: "text-slides"
  },
  _hoisted_10$6 = ["data-slide-idx"],
  _hoisted_11$6 = {
    class: "controls"
  },
  _hoisted_12$5 = {
    class: "slider-images swiper"
  },
  _hoisted_13$5 = {
    class: "swiper-slide"
  },
  _hoisted_14$5 = {
    class: "parallax-wrapper"
  },
  _hoisted_15$4 = ["src", "alt"],
  _sfc_main$9 = defineComponent({
    __name: "OurServices",
    props: {
      data: {}
    },
    setup(e) {
      const t = e,
        r = ref(!1),
        i = ref(0);
      let s = null;
      const {
        isMobile: a
      } = useViewport(), o = d => d.replace(/<(?!\/?i\b)[^>]+>/gi, "").replace(/<i>([^<]+)<\/i>/g, (g, c) => c.trim().split(/\s+/).map(v => `<i>${v}</i>`).join(" ")), l = d => {
        if (r.value) return;
        r.value = !0;
        const g = gsapWithCSS.timeline();
        g.to(`.title-slide[data-slide-idx='${i.value}'] .line-text`, {
          transform: "translateY(-150%)",
          stagger: {
            each: .08
          },
          ease: "out-quint",
          willChange: "transform"
        }), g.to(`.text-slide[data-slide-idx='${i.value}'] .line-text`, {
          transform: "translateY(-150%)",
          stagger: {
            each: .08
          },
          ease: "out-quint",
          willChange: "transform"
        }, "<"), g.fromTo(`.title-slide[data-slide-idx='${d}'] .line-text`, {
          transform: "translateY(150%)"
        }, {
          transform: "translateY(0)",
          stagger: {
            each: .08
          },
          ease: "out-quint",
          willChange: "transform",
          onComplete: () => {
            i.value = d
          }
        }), g.fromTo(`.text-slide[data-slide-idx='${d}'] .line-text`, {
          transform: "translateY(150%)"
        }, {
          transform: "translateY(0)",
          stagger: {
            each: .08
          },
          ease: "out-quint",
          willChange: "transform",
          onComplete: () => {
            i.value = d, nextTick$1(() => {
              r.value = !1
            })
          }
        }, "<")
      }, n = d => {
        r.value || (d === "next" ? s == null || s.slideNext() : d === "prev" && (s == null || s.slidePrev()))
      };
      return useInitAfterPreloader(() => {
        const d = document.querySelectorAll("section.our-services .title-slide"),
          g = document.querySelectorAll("section.our-services .text-slide");
        d.forEach((c, v) => {
          const {
            lines: _
          } = new SplitText(c, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          _.forEach(u => {
            u.innerHTML = `<span class='line-text'>${u.innerHTML}</span>`
          })
        }), g.forEach((c, v) => {
          const {
            lines: _
          } = new SplitText(c, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          _.forEach(u => {
            u.innerHTML = `<span class='line-text'>${u.innerHTML}</span>`
          })
        }), setTimeout(() => {
          a.value || gsapWithCSS.to("section.our-services .slider-images .parallax-wrapper", {
            y: "4rem",
            scrollTrigger: {
              trigger: "section.our-services",
              start: "top bottom",
              end: "bottom top",
              scrub: !0
            },
            ease: "none"
          })
        }, 1e3), nextTick$1(() => {
          gsapWithCSS.set(d[0].querySelectorAll(".line-text"), {
            y: 0
          }), gsapWithCSS.set(g[0].querySelectorAll(".line-text"), {
            y: 0
          })
        }), s = new Swiper("section.our-services .swiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: !0,
          speed: 1300,
          allowTouchMove: !0,
          modules: [Navigation],
          on: {
            slideChangeTransitionStart: c => {
              l(c.realIndex);
              const v = document.querySelector("section.our-services .slides-counter");
              setTimeout(() => {
                v.innerHTML = `${String(c.realIndex+1).padStart(2,"0")+" / "+String(t.data.list.length).padStart(2,"0")}`
              }, 600)
            }
          },
          breakpoints: {
            768: {
              allowTouchMove: !1
            }
          }
        })
      }), (d, g) => {
        const c = __nuxt_component_0$1,
          v = __nuxt_component_2;
        return openBlock(), createElementBlock("section", _hoisted_1$9, [createBaseVNode("div", _hoisted_2$9, [createBaseVNode("div", _hoisted_3$9, [createBaseVNode("span", _hoisted_4$8, toDisplayString(d.$t("our-services")), 1)])]), createBaseVNode("div", _hoisted_5$7, [createBaseVNode("div", _hoisted_6$6, [(openBlock(!0), createElementBlock(Fragment, null, renderList(d.data.list, (_, u) => (openBlock(), createElementBlock("div", {
          innerHTML: o(_.title),
          class: "h1 title-slide",
          "data-slide-idx": u,
          "data-test": o(_.title)
        }, null, 8, _hoisted_7$6))), 256))]), createBaseVNode("div", null, [createBaseVNode("p", _hoisted_8$6, " 01 / " + toDisplayString(String(d.data.list.length).padStart(2, "0")), 1), createBaseVNode("div", _hoisted_9$6, [(openBlock(!0), createElementBlock(Fragment, null, renderList(d.data.list, (_, u) => (openBlock(), createElementBlock("p", {
          class: "text-slide l1",
          "data-slide-idx": u
        }, toDisplayString(_.description), 9, _hoisted_10$6))), 256))]), createBaseVNode("div", _hoisted_11$6, [createVNode(c, {
          "to-left": "",
          class: "swiper-button-prev",
          "aria-label": "button slider previous",
          onClick: g[0] || (g[0] = withModifiers(_ => n("prev"), ["stop"]))
        }), createVNode(c, {
          class: "swiper-button-next",
          "aria-label": "button slider next",
          onClick: g[1] || (g[1] = withModifiers(_ => n("next"), ["stop"]))
        }), createVNode(v, {
          text: d.$t("discuss"),
          "data-form-anchor": ""
        }, null, 8, ["text"])])])]), createBaseVNode("div", _hoisted_12$5, [createBaseVNode("div", {
          class: normalizeClass(["swiper-wrapper", {
            disabled: unref(r)
          }])
        }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(d.data.list, _ => (openBlock(), createElementBlock("div", _hoisted_13$5, [createBaseVNode("div", _hoisted_14$5, [createBaseVNode("img", {
          src: _.image.normal,
          alt: _.title,
          class: "inner-img",
          loading: "lazy"
        }, null, 8, _hoisted_15$4)])]))), 256))], 2)])])
      }
    }
  }),
  __nuxt_component_8 = _export_sfc(_sfc_main$9, [
    ["__scopeId", "data-v-65eca1ee"]
  ]),
  _hoisted_1$8 = {
    class: "why-choose"
  },
  _hoisted_2$8 = {
    class: "bg"
  },
  _hoisted_3$8 = ["src"],
  _hoisted_4$7 = {
    class: "sub-title l1"
  },
  _hoisted_5$6 = {
    class: "title d1 ru-gap"
  },
  _hoisted_6$5 = {
    key: 0,
    class: "mob-image"
  },
  _hoisted_7$5 = ["src"],
  _hoisted_8$5 = {
    class: "benefits"
  },
  _hoisted_9$5 = {
    class: "benefit-item"
  },
  _hoisted_10$5 = {
    class: "benefit-title l1-t"
  },
  _hoisted_11$5 = {
    class: "benefit-description l1"
  },
  _sfc_main$8 = defineComponent({
    __name: "WhyChoose",
    props: {
      data: {}
    },
    setup(e) {
      const {
        isMobile: t
      } = useViewport();
      return useInitAfterPreloader(() => {
        animTitle("section.why-choose .title"), gsapWithCSS.to("section.why-choose .bg img", {
          y: "7rem",
          scrollTrigger: {
            trigger: "section.why-choose .bg img",
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          },
          ease: "none"
        })
      }), (i, s) => {
        const a = __nuxt_component_4;
        return openBlock(), createElementBlock("section", _hoisted_1$8, [createBaseVNode("div", _hoisted_2$8, [createVNode(a, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: i.data.bgImage.normal,
            role: "presentation",
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_3$8)]),
          _: 1
        })]), createBaseVNode("p", _hoisted_4$7, toDisplayString(i.data.subTitle), 1), createBaseVNode("p", _hoisted_5$6, toDisplayString(i.data.title), 1), unref(t) ? (openBlock(), createElementBlock("div", _hoisted_6$5, [createVNode(a, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: i.data.bgImage.normal,
            role: "presentation",
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_7$5)]),
          _: 1
        })])) : createCommentVNode("", !0), createBaseVNode("ul", _hoisted_8$5, [(openBlock(!0), createElementBlock(Fragment, null, renderList(i.data.list, o => (openBlock(), createElementBlock("li", _hoisted_9$5, [createBaseVNode("p", _hoisted_10$5, toDisplayString(o.name), 1), createBaseVNode("p", _hoisted_11$5, toDisplayString(o.description), 1)]))), 256))])])
      }
    }
  }),
  __nuxt_component_9 = _export_sfc(_sfc_main$8, [
    ["__scopeId", "data-v-843b9537"]
  ]),
  _hoisted_1$7 = {
    class: "wrapper"
  },
  _hoisted_2$7 = {
    class: "ticker-line"
  },
  _hoisted_3$7 = ["src"],
  _hoisted_4$6 = {
    class: "ticker-line"
  },
  _hoisted_5$5 = ["src"],
  _sfc_main$7 = defineComponent({
    __name: "TickerSection",
    props: {
      data: {}
    },
    setup(e) {
      const {
        isMobile: t
      } = useViewport(), r = useState("lenis"), i = ref(1), s = ref(), a = ref(0), o = {
        xValue: 0,
        speed: .4
      }, l = () => {
        var d;
        if (!s.value) return;
        const {
          width: h
        } = (d = s.value.querySelector(".ticker-line")) == null ? void 0 : d.getBoundingClientRect();
        i.value === 1 ? (Math.abs(o.xValue) >= h && (o.xValue = 0), s.value.querySelectorAll(".ticker-line").forEach(g => {
          g.style.transform = `translateX(${o.xValue-=o.speed}px)`
        })) : (o.xValue < 0 && s.value.querySelectorAll(".ticker-line").forEach(g => {
          g.style.transform = `translateX(${o.xValue+=o.speed}px)`
        }), o.xValue >= 0 && (o.xValue = h * -1)), a.value = requestAnimationFrame(l)
      };
      return useInitAfterPreloader(() => {
        if (t.value) {
          setTimeout(() => {
            gsapWithCSS.fromTo("section.ticker .ticker-line", {
              transform: "translate3d(0, 0, 100px)"
            }, {
              transform: "translate3d(-100%, 0, 100px)",
              ease: "none",
              duration: 15,
              repeat: -1
            })
          }, 2e3);
          return
        }
        r.value.on("scroll", ({
          direction: h
        }) => {
          h === 1 && i.value === -1 ? i.value = 1 : h === -1 && i.value === 1 && (i.value = -1)
        }), ScrollTrigger.create({
          trigger: s.value,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            l()
          },
          onLeave: () => {
            cancelAnimationFrame(a.value)
          },
          onEnterBack: () => {
            l()
          },
          onLeaveBack: () => {
            cancelAnimationFrame(a.value)
          }
        })
      }), (h, d) => (openBlock(), createElementBlock("section", {
        ref_key: "tickerRef",
        ref: s,
        class: "ticker"
      }, [createBaseVNode("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$7, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, g => (openBlock(), createElementBlock("img", {
        src: g.normal,
        role: "presentation",
        class: "ticker-item",
        loading: "lazy"
      }, null, 8, _hoisted_3$7))), 256))]), createBaseVNode("div", _hoisted_4$6, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, g => (openBlock(), createElementBlock("img", {
        src: g.normal,
        role: "presentation",
        class: "ticker-item",
        loading: "lazy"
      }, null, 8, _hoisted_5$5))), 256))])])], 512))
    }
  }),
  __nuxt_component_10 = _export_sfc(_sfc_main$7, [
    ["__scopeId", "data-v-e923025c"]
  ]),
  _hoisted_1$6 = {
    class: "investment-funds",
    "data-scroll-section": "partnership",
    "data-scroll-section-mob": "partnership"
  },
  _hoisted_2$6 = {
    class: "sticky-content"
  },
  _hoisted_3$6 = {
    class: "sub-title l1-t"
  },
  _hoisted_4$5 = {
    class: "title h1-t"
  },
  _hoisted_5$4 = {
    class: "bottom-part"
  },
  _hoisted_6$4 = {
    class: "desc l1"
  },
  _hoisted_7$4 = {
    class: "scroller-content"
  },
  _hoisted_8$4 = {
    class: "h1 mob-title"
  },
  _hoisted_9$4 = {
    class: "h1"
  },
  _hoisted_10$4 = {
    class: "info-text l1"
  },
  _hoisted_11$4 = {
    class: "swiper mob-slider"
  },
  _hoisted_12$4 = {
    class: "swiper-wrapper"
  },
  _hoisted_13$4 = {
    class: "swiper-slide"
  },
  _hoisted_14$4 = {
    class: "wrap-img"
  },
  _hoisted_15$3 = ["src", "alt"],
  _hoisted_16$3 = {
    class: "slide-title h1"
  },
  _hoisted_17$2 = {
    class: "slide-desc l1"
  },
  _sfc_main$6 = defineComponent({
    __name: "InvestmentFunds",
    props: {
      data: {},
      stickySlides: {}
    },
    setup(e) {
      const t = e,
        {
          isMobile: r
        } = useViewport(),
        i = t.data.points.map((a, o) => {
          var l;
          return {
            ...a,
            image: ((l = t.stickySlides[o]) == null ? void 0 : l.medium) || ""
          }
        });
      return useInitAfterPreloader(() => {
        r && new Swiper("section.investment-funds .swiper.mob-slider", {
          slidesPerView: "auto",
          spaceBetween: pxInRem(16),
          slidesOffsetAfter: pxInRem(8),
          slidesOffsetBefore: pxInRem(8)
        })
      }), (a, o) => {
        const l = __nuxt_component_2;
        return openBlock(), createElementBlock("section", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$6, [createBaseVNode("p", _hoisted_3$6, toDisplayString(a.$t("investment-funds")), 1), createBaseVNode("h5", _hoisted_4$5, toDisplayString(a.data.title), 1), createBaseVNode("div", _hoisted_5$4, [createBaseVNode("p", _hoisted_6$4, toDisplayString(a.data.description), 1), createVNode(l, {
          text: a.$t("discuss"),
          "data-form-anchor": ""
        }, null, 8, ["text"])])]), createBaseVNode("div", _hoisted_7$4, [createBaseVNode("p", _hoisted_8$4, [createBaseVNode("i", null, toDisplayString(a.$t("partnership")), 1), o[0] || (o[0] = createTextVNode()), o[1] || (o[1] = createBaseVNode("br", null, null, -1)), o[2] || (o[2] = createTextVNode("[NET] "))]), (openBlock(!0), createElementBlock(Fragment, null, renderList(a.data.points, (n, h) => (openBlock(), createElementBlock("div", {
          class: normalizeClass(["info-wrap", {
            right: (h + 1) % 2
          }])
        }, [createBaseVNode("p", _hoisted_9$4, toDisplayString(n.title), 1), createBaseVNode("p", _hoisted_10$4, toDisplayString(n.description), 1)], 2))), 256)), createBaseVNode("div", _hoisted_11$4, [createBaseVNode("div", _hoisted_12$4, [(openBlock(!0), createElementBlock(Fragment, null, renderList(unref(i), n => (openBlock(), createElementBlock("div", _hoisted_13$4, [createBaseVNode("div", _hoisted_14$4, [createBaseVNode("img", {
          src: n.image,
          alt: n.title,
          class: "inner-img"
        }, null, 8, _hoisted_15$3)]), createBaseVNode("p", _hoisted_16$3, toDisplayString(n.title), 1), createBaseVNode("p", _hoisted_17$2, toDisplayString(n.description), 1)]))), 256))])])])])
      }
    }
  }),
  __nuxt_component_11 = _export_sfc(_sfc_main$6, [
    ["__scopeId", "data-v-f64bd741"]
  ]),
  _hoisted_1$5 = {
    class: "team-slider",
    "data-scroll-section": "team",
    "data-scroll-section-mob": "team"
  },
  _hoisted_2$5 = {
    class: "slider-part left"
  },
  _hoisted_3$5 = {
    class: "team-names ru-gap"
  },
  _hoisted_4$4 = ["data-slide-idx"],
  _hoisted_5$3 = {
    class: "slider-left swiper"
  },
  _hoisted_6$3 = {
    class: "swiper-wrapper"
  },
  _hoisted_7$3 = {
    class: "swiper-slide"
  },
  _hoisted_8$3 = ["src", "alt"],
  _hoisted_9$3 = {
    class: "slider-part right"
  },
  _hoisted_10$3 = {
    class: "details-slides"
  },
  _hoisted_11$3 = ["data-slide-idx"],
  _hoisted_12$3 = {
    class: "l1-t"
  },
  _hoisted_13$3 = {
    class: "l1"
  },
  _hoisted_14$3 = {
    id: "person-slider",
    class: "person-slider swiper"
  },
  _hoisted_15$2 = {
    class: "swiper-slide"
  },
  _hoisted_16$2 = ["src", "alt"],
  _sfc_main$5 = defineComponent({
    __name: "TeamSlider",
    props: {
      data: {}
    },
    setup(e) {
      const {
        isMobile: t
      } = useViewport(), r = useState("activeSlideIdxTeamSlider"), i = useState("team-slider-main-place"), s = ref(!1);
      let a = null;
      const o = h => {
          s.value || (h === "next" ? a == null || a.slideNext() : h === "prev" && (a == null || a.slidePrev()))
        },
        l = h => {
          if (s.value) return;
          s.value = !0;
          const d = gsapWithCSS.timeline();
          d.to(`section.team-slider .person-name[data-slide-idx='${r.value}'] .line-text`, {
            transform: "translateY(-150%)",
            stagger: {
              each: .08
            },
            ease: "out-quint",
            willChange: "transform"
          }), d.to(`section.team-slider .wrap-detail[data-slide-idx='${r.value}'] p .line-text`, {
            transform: "translateY(-150%)",
            stagger: {
              each: .05
            },
            ease: "out-quint",
            willChange: "transform"
          }, "<"), d.fromTo(`section.team-slider .person-name[data-slide-idx='${h}'] .line-text`, {
            transform: "translateY(150%)"
          }, {
            transform: "translateY(0)",
            stagger: {
              each: .08
            },
            ease: "out-quint",
            willChange: "transform",
            onComplete: () => {
              r.value = h
            }
          }), d.fromTo(`section.team-slider .wrap-detail[data-slide-idx='${h}'] p .line-text`, {
            transform: "translateY(100%)"
          }, {
            transform: "translateY(0)",
            stagger: {
              each: .05
            },
            ease: "out-quint",
            willChange: "transform",
            onComplete: () => {
              r.value = h, setTimeout(() => {
                s.value = !1
              }, 100)
            }
          }, "<")
        };
      return useInitAfterPreloader(() => {
        const h = document.querySelectorAll("section.team-slider .person-name"),
          d = document.querySelectorAll("section.team-slider .wrap-detail p"),
          g = new Swiper("section.team-slider .slider-left.swiper", {
            slidesPerView: 1,
            speed: 1500,
            loop: !0,
            allowTouchMove: !1
          });
        a = new Swiper("#person-slider", {
          slidesPerView: 1,
          speed: 1500,
          loop: !0,
          modules: [Controller, Navigation],
          allowTouchMove: !0,
          controller: {
            control: g
          },
          on: {
            slideChangeTransitionStart: c => {
              l(c.realIndex)
            }
          },
          breakpoints: {
            1024: {
              allowTouchMove: !1
            }
          }
        }), h.forEach(c => {
          const {
            lines: v
          } = new SplitText(c, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          v.forEach(_ => {
            _.innerHTML = `<span class='line-text'>${_.innerHTML}</span>`
          })
        }), d.forEach(c => {
          const {
            lines: v
          } = new SplitText(c, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          v.forEach(_ => {
            _.innerHTML = `<span class='line-text'>${_.innerHTML}</span>`
          })
        }), nextTick$1(() => {
          gsapWithCSS.set(h[0].querySelectorAll(".line-text"), {
            y: 0
          }), gsapWithCSS.set(document.querySelectorAll("section.team-slider .wrap-detail[data-slide-idx='0'] .line-text"), {
            y: 0
          })
        }), !t.value && (gsapWithCSS.to("section.team-slider .slider-part.left", {
          scrollTrigger: {
            trigger: "section.contact",
            start: "top bottom",
            end: "top top",
            scrub: .4
          },
          xPercent: -100,
          willChange: "transform"
        }), gsapWithCSS.to("section.team-slider .slider-part.right", {
          scrollTrigger: {
            trigger: "section.contact",
            start: "top bottom",
            end: "top top",
            scrub: .4
          },
          xPercent: 100,
          willChange: "transform"
        }), gsapWithCSS.to("section.team-slider .right-decor-plash", {
          scrollTrigger: {
            trigger: "section.contact",
            start: "top bottom",
            end: "top top",
            scrub: .4
          },
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          willChange: "clip-path"
        }))
      }), (h, d) => {
        const g = __nuxt_component_4;
        return openBlock(), createElementBlock("section", _hoisted_1$5, [createBaseVNode("div", _hoisted_2$5, [createBaseVNode("button", {
          class: "btn-change-slide prev l1",
          onClick: d[0] || (d[0] = withModifiers(c => o("prev"), ["stop"]))
        }, toDisplayString(h.$t("prev")), 1), createBaseVNode("div", _hoisted_3$5, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, (c, v) => (openBlock(), createElementBlock("p", {
          "data-slide-idx": v,
          class: "person-name h1"
        }, toDisplayString(c.name), 9, _hoisted_4$4))), 256))]), createBaseVNode("div", _hoisted_5$3, [createBaseVNode("div", _hoisted_6$3, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, c => (openBlock(), createElementBlock("div", _hoisted_7$3, [createVNode(g, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: c.bgImage.normal,
            alt: c.name,
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_8$3)]),
          _: 2
        }, 1024)]))), 256))])])]), createBaseVNode("div", _hoisted_9$3, [createBaseVNode("button", {
          class: "btn-change-slide next l1",
          onClick: d[1] || (d[1] = withModifiers(c => o("next"), ["stop"]))
        }, toDisplayString(h.$t("next")), 1), createBaseVNode("div", _hoisted_10$3, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, (c, v) => (openBlock(), createElementBlock("div", {
          class: "wrap-detail",
          "data-slide-idx": v
        }, [createBaseVNode("p", _hoisted_12$3, toDisplayString(c.position), 1), createBaseVNode("p", _hoisted_13$3, toDisplayString(c.description), 1)], 8, _hoisted_11$3))), 256))]), d[2] || (d[2] = createBaseVNode("div", {
          id: "team-slider-main"
        }, null, -1)), createVNode(g, null, {
          default: withCtx(() => [(openBlock(), createBlock(Teleport, {
            to: unref(t) || unref(i) ? "#team-slider-main" : "#team-slider-place"
          }, [createBaseVNode("div", _hoisted_14$3, [createBaseVNode("div", {
            class: normalizeClass(["swiper-wrapper", {
              disabled: unref(s)
            }])
          }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(h.data, c => (openBlock(), createElementBlock("div", _hoisted_15$2, [createBaseVNode("img", {
            src: c.personImage.normal,
            alt: c.name,
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_16$2)]))), 256))], 2)])], 8, ["to"]))]),
          _: 1
        })]), d[3] || (d[3] = createBaseVNode("div", {
          class: "right-decor-plash"
        }, null, -1))])
      }
    }
  }),
  __nuxt_component_12 = _export_sfc(_sfc_main$5, [
    ["__scopeId", "data-v-0fecbaa8"]
  ]),
  _hoisted_1$4 = {
    class: "input-name l1-t"
  },
  _hoisted_2$4 = {
    class: "placeholder l1"
  },
  _hoisted_3$4 = ["id", "type", "pattern", "title"],
  _sfc_main$4 = defineComponent({
    __name: "Input",
    props: mergeModels({
      inputName: {},
      placeholder: {},
      name: {},
      type: {}
    }, {
      modelValue: {},
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const t = useModel(e, "modelValue"),
        r = ref(!1),
        i = ref();
      return useInitAfterPreloader(() => {
        ScrollTrigger.create({
          trigger: i.value,
          start: "bottom 97%",
          once: !0,
          onEnter: () => {
            r.value = !0
          }
        })
      }), (a, o) => (openBlock(), createElementBlock("label", {
        ref_key: "inputRef",
        ref: i,
        class: normalizeClass(["wrap-input", {
          "has-value": t.value,
          anim: unref(r)
        }])
      }, [createBaseVNode("span", _hoisted_1$4, toDisplayString(a.inputName), 1), createBaseVNode("span", _hoisted_2$4, toDisplayString(a.placeholder), 1), withDirectives(createBaseVNode("input", {
        id: a.name,
        type: a.type || "text",
        class: "input h1",
        "onUpdate:modelValue": o[0] || (o[0] = l => t.value = l),
        required: "",
        pattern: a.type === "phone" ? "\\+?[0-9 ]{7,15}" : void 0,
        title: a.type === "phone" ? "Enter a valid phone number (7–15 digits, optional +)" : void 0
      }, null, 8, _hoisted_3$4), [
        [vModelDynamic, t.value]
      ])], 2))
    }
  }),
  __nuxt_component_0 = _export_sfc(_sfc_main$4, [
    ["__scopeId", "data-v-eb626219"]
  ]),
  _hoisted_1$3 = {
    class: "contact",
    "data-scroll-section": "contact",
    "data-scroll-section-mob": "contact"
  },
  _hoisted_2$3 = {
    class: "title d1 ru-gap"
  },
  _hoisted_3$3 = {
    class: "sub-title l1"
  },
  _hoisted_4$3 = {
    class: "description-text l1-t"
  },
  _sfc_main$3 = defineComponent({
    __name: "Contact",
    props: {
      legal: {}
    },
    setup(e) {
      const t = ref(!1),
        {
          isMobile: r
        } = useViewport(),
        i = useState("successNotif", () => !1),
        s = reactive({
          name: "",
          phone: "",
          message: ""
        });
      async function a(n) {
        nextTick$1(() => {
          const h = n.replace("+", "").replace(/[^\d]/gi, "");
          s.phone = `${h.length?"+":""}` + h
        })
      }
      const o = async () => {
        t.value = !0, await $fetch("/api/form-user", {
          method: "POST",
          body: {
            name: s.name,
            phone: s.phone,
            message: s.message
          }
        }), t.value = !1, i.value = !0, s.name = "", s.phone = "", s.message = "", setTimeout(() => {
          i.value = !1
        }, 1e4)
      };
      return useInitAfterPreloader(() => {
        if (r.value) {
          animTitle("section.contact .title");
          return
        }
        gsapWithCSS.to("section.contact", {
          scrollTrigger: {
            trigger: "section.contact",
            start: "top bottom",
            end: "top top",
            scrub: .4
          },
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          willChange: "clip-path"
        })
      }), (n, h) => {
        const d = __nuxt_component_0,
          g = __nuxt_component_2,
          c = __nuxt_component_0$4;
        return openBlock(), createElementBlock("section", _hoisted_1$3, [createBaseVNode("h6", _hoisted_2$3, toDisplayString(n.$t("contact-title")), 1), createBaseVNode("p", _hoisted_3$3, toDisplayString(n.$t("contact-subtitle")), 1), createBaseVNode("form", {
          class: "form",
          onSubmit: withModifiers(o, ["stop", "prevent"])
        }, [createVNode(d, {
          modelValue: unref(s).name,
          "onUpdate:modelValue": h[0] || (h[0] = v => unref(s).name = v),
          "input-name": n.$t("input.name.title"),
          placeholder: n.$t("input.name.placeholder"),
          class: "form-input",
          name: "name"
        }, null, 8, ["modelValue", "input-name", "placeholder"]), createVNode(d, {
          modelValue: unref(s).phone,
          "onUpdate:modelValue": [h[1] || (h[1] = v => unref(s).phone = v), a],
          "input-name": n.$t("input.phone.title"),
          placeholder: n.$t("input.phone.placeholder"),
          class: "form-input",
          name: "phone",
          type: "phone"
        }, null, 8, ["modelValue", "input-name", "placeholder"]), createVNode(d, {
          modelValue: unref(s).message,
          "onUpdate:modelValue": h[2] || (h[2] = v => unref(s).message = v),
          "input-name": n.$t("input.message.title"),
          placeholder: n.$t("input.message.placeholder"),
          class: "form-input",
          name: "message"
        }, null, 8, ["modelValue", "input-name", "placeholder"]), createBaseVNode("div", {
          class: normalizeClass(["btn-send", {
            processing: unref(t)
          }])
        }, [createVNode(g, {
          text: n.$t("send")
        }, null, 8, ["text"])], 2)], 32), createBaseVNode("p", _hoisted_4$3, [createTextVNode(toDisplayString(n.$t("form-desc.first")) + " ", 1), createVNode(c, {
          to: n.legal.privacyPolicy,
          external: "",
          target: "_blank",
          class: "link"
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(n.$t("form-desc.middle")), 1)]),
          _: 1
        }, 8, ["to"]), createTextVNode(" " + toDisplayString(n.$t("form-desc.second")), 1)])])
      }
    }
  }),
  __nuxt_component_13 = _export_sfc(_sfc_main$3, [
    ["__scopeId", "data-v-9f7a2dcd"]
  ]),
  _hoisted_1$2 = {
    "data-light-screen": "",
    class: "locations"
  },
  _hoisted_2$2 = {
    class: "sticky"
  },
  _hoisted_3$2 = {
    class: "bg"
  },
  _hoisted_4$2 = ["src"],
  _hoisted_5$2 = {
    class: "wrap-content"
  },
  _hoisted_6$2 = {
    class: "tabs l1"
  },
  _hoisted_7$2 = ["onClick"],
  _hoisted_8$2 = {
    class: "titles-place ru-gap"
  },
  _hoisted_9$2 = ["data-slide-idx"],
  _hoisted_10$2 = {
    class: "description-slides-wrap"
  },
  _hoisted_11$2 = ["data-slide-idx"],
  _hoisted_12$2 = {
    class: "l1-t small-title"
  },
  _hoisted_13$2 = {
    class: "l1"
  },
  _hoisted_14$2 = {
    class: "mobile-contacts"
  },
  _hoisted_15$1 = {
    class: "wrap-mobile-phone l1"
  },
  _hoisted_16$1 = ["href"],
  _hoisted_17$1 = ["href"],
  _hoisted_18 = {
    class: "wrap-mobile-email l1"
  },
  _hoisted_19 = ["href"],
  _hoisted_20 = ["href"],
  _hoisted_21 = {
    key: 0,
    class: "mobile-slider swiper"
  },
  _hoisted_22 = {
    class: "swiper-wrapper"
  },
  _hoisted_23 = {
    class: "swiper-slide"
  },
  _hoisted_24 = ["src"],
  _hoisted_25 = {
    class: "images-wrap"
  },
  _hoisted_26 = {
    class: "image-wrap"
  },
  _hoisted_27 = ["src"],
  _sfc_main$2 = defineComponent({
    __name: "Locations",
    props: {
      data: {}
    },
    setup(e) {
      const {
        isMobile: t
      } = useViewport(), r = ref(!1), i = ref(0), s = l => {
        r.value || i.value === l || (a(i.value, l), nextTick$1(() => {
          i.value = l
        }))
      }, a = (l, n) => {
        r.value = !0;
        const h = gsapWithCSS.timeline();
        if (h.to(`section.locations .slide-title[data-slide-idx='${l}'] .line-text`, {
            transform: "translateY(-150%)",
            stagger: {
              each: .08
            },
            ease: "out-quint",
            willChange: "transform"
          }), h.to(`section.locations .description-slide[data-slide-idx='${l}'] p .line-text`, {
            transform: "translateY(-110%)",
            stagger: {
              each: .04
            },
            ease: "out-quint",
            willChange: "transform"
          }, "<"), h.fromTo(`section.locations .slide-title[data-slide-idx='${n}'] .line-text`, {
            transform: "translateY(150%)"
          }, {
            transform: "translateY(0)",
            stagger: {
              each: .08
            },
            ease: "out-quint",
            willChange: "transform"
          }), h.fromTo(`section.locations .description-slide[data-slide-idx='${n}'] p .line-text`, {
            transform: "translateY(100%)"
          }, {
            transform: "translateY(0)",
            stagger: {
              each: .04
            },
            ease: "out-quint",
            willChange: "transform",
            onComplete: () => {
              r.value = !1
            }
          }, "<"), t.value) {
          const d = i.value === 0 ? 1 : 0;
          h.fromTo(`.mobile-contacts .wrap-mobile-phone a[data-slide-idx='${i.value}']`, {
            transform: "translateY(0)"
          }, {
            ease: "out-quint",
            willChange: "transform",
            transform: "translateY(-110%)"
          }, "<-=0.4"), h.fromTo(`.mobile-contacts .wrap-mobile-email a[data-slide-idx='${i.value}']`, {
            transform: "translateY(0)"
          }, {
            ease: "out-quint",
            willChange: "transform",
            transform: "translateY(-110%)"
          }, "<+=0.1"), h.fromTo(`.mobile-contacts .wrap-mobile-phone a[data-slide-idx='${d}']`, {
            transform: "translateY(110%)"
          }, {
            transform: "translateY(0)",
            ease: "out-quint",
            willChange: "transform"
          }, "<+=0.35"), h.fromTo(`.mobile-contacts .wrap-mobile-email a[data-slide-idx='${d}']`, {
            transform: "translateY(110%)"
          }, {
            transform: "translateY(0)",
            ease: "out-quint",
            willChange: "transform"
          }, "<+=0.15")
        }
      };
      return useInitAfterPreloader(() => {
        const l = document.querySelectorAll("section.locations .slide-title"),
          n = document.querySelectorAll("section.locations .description-slide p");
        if (!t.value) gsapWithCSS.to("section.locations .images-wrap", {
          scrollTrigger: {
            trigger: "section.locations .anim-plash",
            start: "top bottom",
            end: "bottom top",
            scrub: .4
          },
          transform: "translateY(calc(-100% - 100vh))"
        }), gsapWithCSS.to("section.locations .sticky .bg", {
          scrollTrigger: {
            trigger: "section.locations",
            start: "top bottom",
            endTrigger: "footer.footer",
            end: "top top",
            scrub: !0
          },
          ease: "none",
          y: "-14rem"
        });
        else {
          const h = document.querySelector("section.locations .sticky"),
            d = window.innerHeight - h.clientHeight;
          setCssVariable("--mob-location-sticky-top", `${d>=0?0:d}px`)
        }
        l.forEach(h => {
          const {
            lines: d
          } = new SplitText(h, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          d.forEach(g => {
            g.innerHTML = `<span class='line-text'>${g.innerHTML}</span>`
          })
        }), n.forEach(h => {
          const {
            lines: d
          } = new SplitText(h, {
            type: "lines",
            linesClass: "line",
            reduceWhiteSpace: !0,
            lineThreshold: .5
          });
          d.forEach(g => {
            g.innerHTML = `<span class='line-text'>${g.innerHTML}</span>`
          })
        }), nextTick$1(() => {
          gsapWithCSS.set(l[0].querySelectorAll(".line-text"), {
            y: 0
          }), gsapWithCSS.set(document.querySelectorAll("section.locations .description-slide[data-slide-idx='0'] .line-text"), {
            y: 0
          }), setTimeout(() => {
            new Swiper(".mobile-slider.swiper", {
              slidesPerView: "auto",
              spaceBetween: pxInRem(16),
              slidesOffsetAfter: pxInRem(8),
              slidesOffsetBefore: pxInRem(8)
            })
          }, 200)
        })
      }), (l, n) => {
        const h = __nuxt_component_4,
          d = __nuxt_component_1,
          g = __nuxt_component_2,
          c = __nuxt_component_0$4;
        return openBlock(), createElementBlock("section", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", _hoisted_3$2, [createVNode(h, null, {
          default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.list, (v, _) => (openBlock(), createElementBlock("img", {
            src: v.bgImage.normal,
            role: "presentation",
            class: normalizeClass(["inner-img", {
              active: _ === unref(i)
            }]),
            loading: "lazy"
          }, null, 10, _hoisted_4$2))), 256))]),
          _: 1
        })]), createBaseVNode("div", _hoisted_5$2, [createBaseVNode("ul", _hoisted_6$2, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.list, ({
          tab: v
        }, _) => (openBlock(), createElementBlock("li", null, [createBaseVNode("button", {
          class: normalizeClass(["tab", {
            active: _ === unref(i)
          }]),
          onClick: u => s(_)
        }, [createVNode(d, {
          text: v,
          class: "l1"
        }, null, 8, ["text"])], 10, _hoisted_7$2)]))), 256))]), createBaseVNode("div", _hoisted_8$2, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.list, (v, _) => (openBlock(), createElementBlock("p", {
          class: "slide-title h1",
          "data-slide-idx": _
        }, toDisplayString(v.title), 9, _hoisted_9$2))), 256))]), createVNode(c, {
          external: "",
          to: l.data.list[unref(i)].link,
          target: "_blank",
          class: "desktop-link"
        }, {
          default: withCtx(() => [createVNode(g, {
            text: l.$t("show-on-map"),
            class: "btn-show-map"
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])]), createBaseVNode("div", _hoisted_10$2, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.list, (v, _) => (openBlock(), createElementBlock("div", {
          class: "description-slide",
          "data-slide-idx": _
        }, [createBaseVNode("p", _hoisted_12$2, toDisplayString(v.officeName), 1), createBaseVNode("p", _hoisted_13$2, toDisplayString(v.description), 1)], 8, _hoisted_11$2))), 256))]), createBaseVNode("div", _hoisted_14$2, [createBaseVNode("div", _hoisted_15$1, [createBaseVNode("a", {
          "data-slide-idx": "0",
          href: `tel:${l.data.list[0].phone}`
        }, toDisplayString(l.data.list[0].phone), 9, _hoisted_16$1), createBaseVNode("a", {
          "data-slide-idx": "1",
          href: `tel:${l.data.list[1].phone}`
        }, toDisplayString(l.data.list[1].phone), 9, _hoisted_17$1)]), createBaseVNode("div", _hoisted_18, [createBaseVNode("a", {
          "data-slide-idx": "0",
          href: `mailto:${l.data.list[0].email}`
        }, toDisplayString(l.data.list[0].email), 9, _hoisted_19), createBaseVNode("a", {
          "data-slide-idx": "1",
          href: `mailto:${l.data.list[1].email}`
        }, toDisplayString(l.data.list[1].email), 9, _hoisted_20)])]), createVNode(c, {
          external: "",
          to: l.data.list[unref(i)].link,
          target: "_blank",
          class: "mobile-link"
        }, {
          default: withCtx(() => [createVNode(g, {
            text: l.$t("show-on-map"),
            class: "btn-show-map"
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createVNode(h, null, {
          default: withCtx(() => [unref(t) ? (openBlock(), createElementBlock("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.commonSlides, v => (openBlock(), createElementBlock("div", _hoisted_23, [createBaseVNode("img", {
            src: v.normal,
            role: "presentation",
            class: "inner-img"
          }, null, 8, _hoisted_24)]))), 256))])])) : createCommentVNode("", !0)]),
          _: 1
        }), createBaseVNode("div", _hoisted_25, [(openBlock(!0), createElementBlock(Fragment, null, renderList(l.data.commonSlides, v => (openBlock(), createElementBlock("div", _hoisted_26, [createVNode(h, null, {
          default: withCtx(() => [createBaseVNode("img", {
            src: v.medium,
            role: "presentation",
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_27)]),
          _: 2
        }, 1024)]))), 256))])]), createBaseVNode("div", {
          class: "anim-plash",
          style: normalizeStyle({
            height: `${l.data.commonSlides.length*50}vh`
          })
        }, null, 4)])
      }
    }
  }),
  __nuxt_component_14 = _export_sfc(_sfc_main$2, [
    ["__scopeId", "data-v-63763dcd"]
  ]),
  _imports_0 = publicAssetsURL("/lottie/static-logo.png"),
  _imports_1 = publicAssetsURL("/lottie/logo.webm");

function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var lottie$1 = {
    exports: {}
  },
  lottie = lottie$1.exports,
  hasRequiredLottie;

function requireLottie() {
  return hasRequiredLottie || (hasRequiredLottie = 1, function(module, exports) {
    typeof navigator < "u" && function(e, t) {
      module.exports = t()
    }(lottie, function() {
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
          for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t.prototype[a] = s[a])
        }
      }

      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t)
      }

      function createProxyFunction(e) {
        function t() {}
        return t.prototype = e, t
      }
      var audioControllerFactory = function() {
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
        }(),
        createTypedArray = function() {
          function e(r, i) {
            var s = 0,
              a = [],
              o;
            switch (r) {
              case "int16":
              case "uint8c":
                o = 1;
                break;
              default:
                o = 1.1;
                break
            }
            for (s = 0; s < i; s += 1) a.push(o);
            return a
          }

          function t(r, i) {
            return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : e(r, i)
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? t : e
        }();

      function createSizedArray(e) {
        return Array.apply(null, {
          length: e
        })
      }

      function _typeof$6(e) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
          return typeof r
        } : _typeof$6 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
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
      var createElementID = function() {
        var e = 0;
        return function() {
          return e += 1, idPrefix$1 + "__lottie_element_" + e
        }
      }();

      function HSVtoRGB(e, t, r) {
        var i, s, a, o, l, n, h, d;
        switch (o = Math.floor(e * 6), l = e * 6 - o, n = r * (1 - t), h = r * (1 - l * t), d = r * (1 - (1 - l) * t), o % 6) {
          case 0:
            i = r, s = d, a = n;
            break;
          case 1:
            i = h, s = r, a = n;
            break;
          case 2:
            i = n, s = r, a = d;
            break;
          case 3:
            i = n, s = h, a = r;
            break;
          case 4:
            i = d, s = n, a = r;
            break;
          case 5:
            i = r, s = n, a = h;
            break
        }
        return [i, s, a]
      }

      function RGBtoHSV(e, t, r) {
        var i = Math.max(e, t, r),
          s = Math.min(e, t, r),
          a = i - s,
          o, l = i === 0 ? 0 : a / i,
          n = i / 255;
        switch (i) {
          case s:
            o = 0;
            break;
          case e:
            o = t - r + a * (t < r ? 6 : 0), o /= 6 * a;
            break;
          case t:
            o = r - e + a * 2, o /= 6 * a;
            break;
          case r:
            o = e - t + a * 4, o /= 6 * a;
            break
        }
        return [o, l, n]
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
      var rgbToHex = function() {
          var e = [],
            t, r;
          for (t = 0; t < 256; t += 1) r = t.toString(16), e[t] = r.length === 1 ? "0" + r : r;
          return function(i, s, a) {
            return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + e[i] + e[s] + e[a]
          }
        }(),
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
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
          return typeof r
        } : _typeof$5 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, _typeof$5(e)
      }
      var dataManager = function() {
          var e = 1,
            t = [],
            r, i, s = {
              onmessage: function() {},
              postMessage: function(v) {
                r({
                  data: v
                })
              }
            },
            a = {
              postMessage: function(v) {
                s.onmessage({
                  data: v
                })
              }
            };

          function o(c) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var v = new Blob(["var _workerSelf = self; self.onmessage = ", c.toString()], {
                  type: "text/javascript"
                }),
                _ = URL.createObjectURL(v);
              return new Worker(_)
            }
            return r = c, s
          }

          function l() {
            i || (i = o(function(v) {
              function _() {
                function S(F, C) {
                  var k, b, x = F.length,
                    V, M, D, O;
                  for (b = 0; b < x; b += 1)
                    if (k = F[b], "ks" in k && !k.completed) {
                      if (k.completed = !0, k.hasMask) {
                        var z = k.masksProperties;
                        for (M = z.length, V = 0; V < M; V += 1)
                          if (z[V].pt.k.i) w(z[V].pt.k);
                          else
                            for (O = z[V].pt.k.length, D = 0; D < O; D += 1) z[V].pt.k[D].s && w(z[V].pt.k[D].s[0]), z[V].pt.k[D].e && w(z[V].pt.k[D].e[0])
                      }
                      k.ty === 0 ? (k.layers = f(k.refId, C), S(k.layers, C)) : k.ty === 4 ? y(k.shapes) : k.ty === 5 && L(k)
                    }
                }

                function p(F, C) {
                  if (F) {
                    var k = 0,
                      b = F.length;
                    for (k = 0; k < b; k += 1) F[k].t === 1 && (F[k].data.layers = f(F[k].data.refId, C), S(F[k].data.layers, C))
                  }
                }

                function m(F, C) {
                  for (var k = 0, b = C.length; k < b;) {
                    if (C[k].id === F) return C[k];
                    k += 1
                  }
                  return null
                }

                function f(F, C) {
                  var k = m(F, C);
                  return k ? k.layers.__used ? JSON.parse(JSON.stringify(k.layers)) : (k.layers.__used = !0, k.layers) : null
                }

                function y(F) {
                  var C, k = F.length,
                    b, x;
                  for (C = k - 1; C >= 0; C -= 1)
                    if (F[C].ty === "sh")
                      if (F[C].ks.k.i) w(F[C].ks.k);
                      else
                        for (x = F[C].ks.k.length, b = 0; b < x; b += 1) F[C].ks.k[b].s && w(F[C].ks.k[b].s[0]), F[C].ks.k[b].e && w(F[C].ks.k[b].e[0]);
                  else F[C].ty === "gr" && y(F[C].it)
                }

                function w(F) {
                  var C, k = F.i.length;
                  for (C = 0; C < k; C += 1) F.i[C][0] += F.v[C][0], F.i[C][1] += F.v[C][1], F.o[C][0] += F.v[C][0], F.o[C][1] += F.v[C][1]
                }

                function E(F, C) {
                  var k = C ? C.split(".") : [100, 100, 100];
                  return F[0] > k[0] ? !0 : k[0] > F[0] ? !1 : F[1] > k[1] ? !0 : k[1] > F[1] ? !1 : F[2] > k[2] ? !0 : k[2] > F[2] ? !1 : null
                }
                var P = function() {
                    var F = [4, 4, 14];

                    function C(b) {
                      var x = b.t.d;
                      b.t.d = {
                        k: [{
                          s: x,
                          t: 0
                        }]
                      }
                    }

                    function k(b) {
                      var x, V = b.length;
                      for (x = 0; x < V; x += 1) b[x].ty === 5 && C(b[x])
                    }
                    return function(b) {
                      if (E(F, b.v) && (k(b.layers), b.assets)) {
                        var x, V = b.assets.length;
                        for (x = 0; x < V; x += 1) b.assets[x].layers && k(b.assets[x].layers)
                      }
                    }
                  }(),
                  T = function() {
                    var F = [4, 7, 99];
                    return function(C) {
                      if (C.chars && !E(F, C.v)) {
                        var k, b = C.chars.length;
                        for (k = 0; k < b; k += 1) {
                          var x = C.chars[k];
                          x.data && x.data.shapes && (y(x.data.shapes), x.data.ip = 0, x.data.op = 99999, x.data.st = 0, x.data.sr = 1, x.data.ks = {
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
                          }, C.chars[k].t || (x.data.shapes.push({
                            ty: "no"
                          }), x.data.shapes[0].it.push({
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
                  }(),
                  A = function() {
                    var F = [5, 7, 15];

                    function C(b) {
                      var x = b.t.p;
                      typeof x.a == "number" && (x.a = {
                        a: 0,
                        k: x.a
                      }), typeof x.p == "number" && (x.p = {
                        a: 0,
                        k: x.p
                      }), typeof x.r == "number" && (x.r = {
                        a: 0,
                        k: x.r
                      })
                    }

                    function k(b) {
                      var x, V = b.length;
                      for (x = 0; x < V; x += 1) b[x].ty === 5 && C(b[x])
                    }
                    return function(b) {
                      if (E(F, b.v) && (k(b.layers), b.assets)) {
                        var x, V = b.assets.length;
                        for (x = 0; x < V; x += 1) b.assets[x].layers && k(b.assets[x].layers)
                      }
                    }
                  }(),
                  $ = function() {
                    var F = [4, 1, 9];

                    function C(b) {
                      var x, V = b.length,
                        M, D;
                      for (x = 0; x < V; x += 1)
                        if (b[x].ty === "gr") C(b[x].it);
                        else if (b[x].ty === "fl" || b[x].ty === "st")
                        if (b[x].c.k && b[x].c.k[0].i)
                          for (D = b[x].c.k.length, M = 0; M < D; M += 1) b[x].c.k[M].s && (b[x].c.k[M].s[0] /= 255, b[x].c.k[M].s[1] /= 255, b[x].c.k[M].s[2] /= 255, b[x].c.k[M].s[3] /= 255), b[x].c.k[M].e && (b[x].c.k[M].e[0] /= 255, b[x].c.k[M].e[1] /= 255, b[x].c.k[M].e[2] /= 255, b[x].c.k[M].e[3] /= 255);
                        else b[x].c.k[0] /= 255, b[x].c.k[1] /= 255, b[x].c.k[2] /= 255, b[x].c.k[3] /= 255
                    }

                    function k(b) {
                      var x, V = b.length;
                      for (x = 0; x < V; x += 1) b[x].ty === 4 && C(b[x].shapes)
                    }
                    return function(b) {
                      if (E(F, b.v) && (k(b.layers), b.assets)) {
                        var x, V = b.assets.length;
                        for (x = 0; x < V; x += 1) b.assets[x].layers && k(b.assets[x].layers)
                      }
                    }
                  }(),
                  I = function() {
                    var F = [4, 4, 18];

                    function C(b) {
                      var x, V = b.length,
                        M, D;
                      for (x = V - 1; x >= 0; x -= 1)
                        if (b[x].ty === "sh")
                          if (b[x].ks.k.i) b[x].ks.k.c = b[x].closed;
                          else
                            for (D = b[x].ks.k.length, M = 0; M < D; M += 1) b[x].ks.k[M].s && (b[x].ks.k[M].s[0].c = b[x].closed), b[x].ks.k[M].e && (b[x].ks.k[M].e[0].c = b[x].closed);
                      else b[x].ty === "gr" && C(b[x].it)
                    }

                    function k(b) {
                      var x, V, M = b.length,
                        D, O, z, G;
                      for (V = 0; V < M; V += 1) {
                        if (x = b[V], x.hasMask) {
                          var H = x.masksProperties;
                          for (O = H.length, D = 0; D < O; D += 1)
                            if (H[D].pt.k.i) H[D].pt.k.c = H[D].cl;
                            else
                              for (G = H[D].pt.k.length, z = 0; z < G; z += 1) H[D].pt.k[z].s && (H[D].pt.k[z].s[0].c = H[D].cl), H[D].pt.k[z].e && (H[D].pt.k[z].e[0].c = H[D].cl)
                        }
                        x.ty === 4 && C(x.shapes)
                      }
                    }
                    return function(b) {
                      if (E(F, b.v) && (k(b.layers), b.assets)) {
                        var x, V = b.assets.length;
                        for (x = 0; x < V; x += 1) b.assets[x].layers && k(b.assets[x].layers)
                      }
                    }
                  }();

                function B(F) {
                  F.__complete || ($(F), P(F), T(F), A(F), I(F), S(F.layers, F.assets), p(F.chars, F.assets), F.__complete = !0)
                }

                function L(F) {
                  F.t.a.length === 0 && "m" in F.t.p
                }
                var N = {};
                return N.completeData = B, N.checkColors = $, N.checkChars = T, N.checkPathProperties = A, N.checkShapes = I, N.completeLayers = S, N
              }
              if (a.dataManager || (a.dataManager = _()), a.assetLoader || (a.assetLoader = function() {
                  function S(m) {
                    var f = m.getResponseHeader("content-type");
                    return f && m.responseType === "json" && f.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null
                  }

                  function p(m, f, y, w) {
                    var E, P = new XMLHttpRequest;
                    try {
                      P.responseType = "json"
                    } catch {}
                    P.onreadystatechange = function() {
                      if (P.readyState === 4)
                        if (P.status === 200) E = S(P), y(E);
                        else try {
                          E = S(P), y(E)
                        } catch (T) {
                          w && w(T)
                        }
                    };
                    try {
                      P.open(["G", "E", "T"].join(""), m, !0)
                    } catch {
                      P.open(["G", "E", "T"].join(""), f + "/" + m, !0)
                    }
                    P.send()
                  }
                  return {
                    load: p
                  }
                }()), v.data.type === "loadAnimation") a.assetLoader.load(v.data.path, v.data.fullPath, function(S) {
                a.dataManager.completeData(S), a.postMessage({
                  id: v.data.id,
                  payload: S,
                  status: "success"
                })
              }, function() {
                a.postMessage({
                  id: v.data.id,
                  status: "error"
                })
              });
              else if (v.data.type === "complete") {
                var u = v.data.animation;
                a.dataManager.completeData(u), a.postMessage({
                  id: v.data.id,
                  payload: u,
                  status: "success"
                })
              } else v.data.type === "loadData" && a.assetLoader.load(v.data.path, v.data.fullPath, function(S) {
                a.postMessage({
                  id: v.data.id,
                  payload: S,
                  status: "success"
                })
              }, function() {
                a.postMessage({
                  id: v.data.id,
                  status: "error"
                })
              })
            }), i.onmessage = function(c) {
              var v = c.data,
                _ = v.id,
                u = t[_];
              t[_] = null, v.status === "success" ? u.onComplete(v.payload) : u.onError && u.onError()
            })
          }

          function n(c, v) {
            e += 1;
            var _ = "processId_" + e;
            return t[_] = {
              onComplete: c,
              onError: v
            }, _
          }

          function h(c, v, _) {
            l();
            var u = n(v, _);
            i.postMessage({
              type: "loadAnimation",
              path: c,
              fullPath: window.location.origin + window.location.pathname,
              id: u
            })
          }

          function d(c, v, _) {
            l();
            var u = n(v, _);
            i.postMessage({
              type: "loadData",
              path: c,
              fullPath: window.location.origin + window.location.pathname,
              id: u
            })
          }

          function g(c, v, _) {
            l();
            var u = n(v, _);
            i.postMessage({
              type: "complete",
              animation: c,
              id: u
            })
          }
          return {
            loadAnimation: h,
            loadData: d,
            completeAnimation: g
          }
        }(),
        ImagePreloader = function() {
          var e = function() {
            var p = createTag("canvas");
            p.width = 1, p.height = 1;
            var m = p.getContext("2d");
            return m.fillStyle = "rgba(0,0,0,0)", m.fillRect(0, 0, 1, 1), p
          }();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function i(p, m, f) {
            var y = "";
            if (p.e) y = p.p;
            else if (m) {
              var w = p.p;
              w.indexOf("images/") !== -1 && (w = w.split("/")[1]), y = m + w
            } else y = f, y += p.u ? p.u : "", y += p.p;
            return y
          }

          function s(p) {
            var m = 0,
              f = setInterval((function() {
                var y = p.getBBox();
                (y.width || m > 500) && (this._imageLoaded(), clearInterval(f)), m += 1
              }).bind(this), 50)
          }

          function a(p) {
            var m = i(p, this.assetsPath, this.path),
              f = createNS("image");
            isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
              y.img = e, this._imageLoaded()
            }).bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
            var y = {
              img: f,
              assetData: p
            };
            return y
          }

          function o(p) {
            var m = i(p, this.assetsPath, this.path),
              f = createTag("img");
            f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
              y.img = e, this._imageLoaded()
            }).bind(this), !1), f.src = m;
            var y = {
              img: f,
              assetData: p
            };
            return y
          }

          function l(p) {
            var m = {
                assetData: p
              },
              f = i(p, this.assetsPath, this.path);
            return dataManager.loadData(f, (function(y) {
              m.img = y, this._footageLoaded()
            }).bind(this), (function() {
              m.img = {}, this._footageLoaded()
            }).bind(this)), m
          }

          function n(p, m) {
            this.imagesLoadedCb = m;
            var f, y = p.length;
            for (f = 0; f < y; f += 1) p[f].layers || (!p[f].t || p[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[f]))) : p[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[f]))))
          }

          function h(p) {
            this.path = p || ""
          }

          function d(p) {
            this.assetsPath = p || ""
          }

          function g(p) {
            for (var m = 0, f = this.images.length; m < f;) {
              if (this.images[m].assetData === p) return this.images[m].img;
              m += 1
            }
            return null
          }

          function c() {
            this.imagesLoadedCb = null, this.images.length = 0
          }

          function v() {
            return this.totalImages === this.loadedAssets
          }

          function _() {
            return this.totalFootages === this.loadedFootagesCount
          }

          function u(p, m) {
            p === "svg" ? (this._elementHelper = m, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
          }

          function S() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return S.prototype = {
            loadAssets: n,
            setAssetsPath: d,
            setPath: h,
            loadedImages: v,
            loadedFootages: _,
            destroy: c,
            getAsset: g,
            createImgData: o,
            createImageData: a,
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: u
          }, S
        }();

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
      var markerParser = function() {
          function e(t) {
            for (var r = t.split(`\r
`), i = {}, s, a = 0, o = 0; o < r.length; o += 1) s = r[o].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
            if (a === 0) throw new Error;
            return i
          }
          return function(t) {
            for (var r = [], i = 0; i < t.length; i += 1) {
              var s = t[i],
                a = {
                  time: s.tm,
                  duration: s.dr
                };
              try {
                a.payload = JSON.parse(t[i].cm)
              } catch {
                try {
                  a.payload = e(t[i].cm)
                } catch {
                  a.payload = {
                    name: t[i].cm
                  }
                }
              }
              r.push(a)
            }
            return r
          }
        }(),
        ProjectInterface = function() {
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
        }(),
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
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
          return typeof r
        } : _typeof$4 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
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
        var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
        r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
        var o = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
        o === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
      }, AnimationItem.prototype.includeLayers = function(e) {
        e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
        var t = this.animationData.layers,
          r, i = t.length,
          s = e.layers,
          a, o = s.length;
        for (a = 0; a < o; a += 1)
          for (r = 0; r < i;) {
            if (t[r].id === s[a].id) {
              t[r] = s[a];
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
      var animationManager = function() {
          var e = {},
            t = [],
            r = 0,
            i = 0,
            s = 0,
            a = !0,
            o = !1;

          function l(C) {
            for (var k = 0, b = C.target; k < i;) t[k].animation === b && (t.splice(k, 1), k -= 1, i -= 1, b.isPaused || g()), k += 1
          }

          function n(C, k) {
            if (!C) return null;
            for (var b = 0; b < i;) {
              if (t[b].elem === C && t[b].elem !== null) return t[b].animation;
              b += 1
            }
            var x = new AnimationItem;
            return c(x, C), x.setData(C, k), x
          }

          function h() {
            var C, k = t.length,
              b = [];
            for (C = 0; C < k; C += 1) b.push(t[C].animation);
            return b
          }

          function d() {
            s += 1, $()
          }

          function g() {
            s -= 1
          }

          function c(C, k) {
            C.addEventListener("destroy", l), C.addEventListener("_active", d), C.addEventListener("_idle", g), t.push({
              elem: k,
              animation: C
            }), i += 1
          }

          function v(C) {
            var k = new AnimationItem;
            return c(k, null), k.setParams(C), k
          }

          function _(C, k) {
            var b;
            for (b = 0; b < i; b += 1) t[b].animation.setSpeed(C, k)
          }

          function u(C, k) {
            var b;
            for (b = 0; b < i; b += 1) t[b].animation.setDirection(C, k)
          }

          function S(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.play(C)
          }

          function p(C) {
            var k = C - r,
              b;
            for (b = 0; b < i; b += 1) t[b].animation.advanceTime(k);
            r = C, s && !o ? window.requestAnimationFrame(p) : a = !0
          }

          function m(C) {
            r = C, window.requestAnimationFrame(p)
          }

          function f(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.pause(C)
          }

          function y(C, k, b) {
            var x;
            for (x = 0; x < i; x += 1) t[x].animation.goToAndStop(C, k, b)
          }

          function w(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.stop(C)
          }

          function E(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.togglePause(C)
          }

          function P(C) {
            var k;
            for (k = i - 1; k >= 0; k -= 1) t[k].animation.destroy(C)
          }

          function T(C, k, b) {
            var x = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              V, M = x.length;
            for (V = 0; V < M; V += 1) b && x[V].setAttribute("data-bm-type", b), n(x[V], C);
            if (k && M === 0) {
              b || (b = "svg");
              var D = document.getElementsByTagName("body")[0];
              D.innerText = "";
              var O = createTag("div");
              O.style.width = "100%", O.style.height = "100%", O.setAttribute("data-bm-type", b), D.appendChild(O), n(O, C)
            }
          }

          function A() {
            var C;
            for (C = 0; C < i; C += 1) t[C].animation.resize()
          }

          function $() {
            !o && s && a && (window.requestAnimationFrame(m), a = !1)
          }

          function I() {
            o = !0
          }

          function B() {
            o = !1, $()
          }

          function L(C, k) {
            var b;
            for (b = 0; b < i; b += 1) t[b].animation.setVolume(C, k)
          }

          function N(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.mute(C)
          }

          function F(C) {
            var k;
            for (k = 0; k < i; k += 1) t[k].animation.unmute(C)
          }
          return e.registerAnimation = n, e.loadAnimation = v, e.setSpeed = _, e.setDirection = u, e.play = S, e.pause = f, e.stop = w, e.togglePause = E, e.searchAnimations = T, e.resize = A, e.goToAndStop = y, e.destroy = P, e.freeze = I, e.unfreeze = B, e.setVolume = L, e.mute = N, e.unmute = F, e.getRegisteredAnimations = h, e
        }(),
        BezierFactory = function() {
          var e = {};
          e.getBezierEasing = r;
          var t = {};

          function r(m, f, y, w, E) {
            var P = E || ("bez_" + m + "_" + f + "_" + y + "_" + w).replace(/\./g, "p");
            if (t[P]) return t[P];
            var T = new p([m, f, y, w]);
            return t[P] = T, T
          }
          var i = 4,
            s = .001,
            a = 1e-7,
            o = 10,
            l = 11,
            n = 1 / (l - 1),
            h = typeof Float32Array == "function";

          function d(m, f) {
            return 1 - 3 * f + 3 * m
          }

          function g(m, f) {
            return 3 * f - 6 * m
          }

          function c(m) {
            return 3 * m
          }

          function v(m, f, y) {
            return ((d(f, y) * m + g(f, y)) * m + c(f)) * m
          }

          function _(m, f, y) {
            return 3 * d(f, y) * m * m + 2 * g(f, y) * m + c(f)
          }

          function u(m, f, y, w, E) {
            var P, T, A = 0;
            do T = f + (y - f) / 2, P = v(T, w, E) - m, P > 0 ? y = T : f = T; while (Math.abs(P) > a && ++A < o);
            return T
          }

          function S(m, f, y, w) {
            for (var E = 0; E < i; ++E) {
              var P = _(f, y, w);
              if (P === 0) return f;
              var T = v(f, y, w) - m;
              f -= T / P
            }
            return f
          }

          function p(m) {
            this._p = m, this._mSampleValues = h ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return p.prototype = {
            get: function(f) {
              var y = this._p[0],
                w = this._p[1],
                E = this._p[2],
                P = this._p[3];
              return this._precomputed || this._precompute(), y === w && E === P ? f : f === 0 ? 0 : f === 1 ? 1 : v(this._getTForX(f), w, P)
            },
            _precompute: function() {
              var f = this._p[0],
                y = this._p[1],
                w = this._p[2],
                E = this._p[3];
              this._precomputed = !0, (f !== y || w !== E) && this._calcSampleValues()
            },
            _calcSampleValues: function() {
              for (var f = this._p[0], y = this._p[2], w = 0; w < l; ++w) this._mSampleValues[w] = v(w * n, f, y)
            },
            _getTForX: function(f) {
              for (var y = this._p[0], w = this._p[2], E = this._mSampleValues, P = 0, T = 1, A = l - 1; T !== A && E[T] <= f; ++T) P += n;
              --T;
              var $ = (f - E[T]) / (E[T + 1] - E[T]),
                I = P + $ * n,
                B = _(I, y, w);
              return B >= s ? S(f, I, y, w) : B === 0 ? I : u(f, P, P + n, y, w)
            }
          }, e
        }(),
        pooling = function() {
          function e(t) {
            return t.concat(createSizedArray(t.length))
          }
          return {
            double: e
          }
        }(),
        poolFactory = function() {
          return function(e, t, r) {
            var i = 0,
              s = e,
              a = createSizedArray(s),
              o = {
                newElement: l,
                release: n
              };

            function l() {
              var h;
              return i ? (i -= 1, h = a[i]) : h = t(), h
            }

            function n(h) {
              i === s && (a = pooling.double(a), s *= 2), r && r(h), a[i] = h, i += 1
            }
            return o
          }
        }(),
        bezierLengthPool = function() {
          function e() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          }
          return poolFactory(8, e)
        }(),
        segmentsLengthPool = function() {
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
        }();

      function bezFunction() {
        var e = Math;

        function t(c, v, _, u, S, p) {
          var m = c * u + v * S + _ * p - S * u - p * c - _ * v;
          return m > -.001 && m < .001
        }

        function r(c, v, _, u, S, p, m, f, y) {
          if (_ === 0 && p === 0 && y === 0) return t(c, v, u, S, m, f);
          var w = e.sqrt(e.pow(u - c, 2) + e.pow(S - v, 2) + e.pow(p - _, 2)),
            E = e.sqrt(e.pow(m - c, 2) + e.pow(f - v, 2) + e.pow(y - _, 2)),
            P = e.sqrt(e.pow(m - u, 2) + e.pow(f - S, 2) + e.pow(y - p, 2)),
            T;
          return w > E ? w > P ? T = w - E - P : T = P - E - w : P > E ? T = P - E - w : T = E - w - P, T > -1e-4 && T < 1e-4
        }
        var i = function() {
          return function(c, v, _, u) {
            var S = getDefaultCurveSegments(),
              p, m, f, y, w, E = 0,
              P, T = [],
              A = [],
              $ = bezierLengthPool.newElement();
            for (f = _.length, p = 0; p < S; p += 1) {
              for (w = p / (S - 1), P = 0, m = 0; m < f; m += 1) y = bmPow(1 - w, 3) * c[m] + 3 * bmPow(1 - w, 2) * w * _[m] + 3 * (1 - w) * bmPow(w, 2) * u[m] + bmPow(w, 3) * v[m], T[m] = y, A[m] !== null && (P += bmPow(T[m] - A[m], 2)), A[m] = T[m];
              P && (P = bmSqrt(P), E += P), $.percents[p] = w, $.lengths[p] = E
            }
            return $.addedLength = E, $
          }
        }();

        function s(c) {
          var v = segmentsLengthPool.newElement(),
            _ = c.c,
            u = c.v,
            S = c.o,
            p = c.i,
            m, f = c._length,
            y = v.lengths,
            w = 0;
          for (m = 0; m < f - 1; m += 1) y[m] = i(u[m], u[m + 1], S[m], p[m + 1]), w += y[m].addedLength;
          return _ && f && (y[m] = i(u[m], u[0], S[m], p[0]), w += y[m].addedLength), v.totalLength = w, v
        }

        function a(c) {
          this.segmentLength = 0, this.points = new Array(c)
        }

        function o(c, v) {
          this.partialLength = c, this.point = v
        }
        var l = function() {
          var c = {};
          return function(v, _, u, S) {
            var p = (v[0] + "_" + v[1] + "_" + _[0] + "_" + _[1] + "_" + u[0] + "_" + u[1] + "_" + S[0] + "_" + S[1]).replace(/\./g, "p");
            if (!c[p]) {
              var m = getDefaultCurveSegments(),
                f, y, w, E, P, T = 0,
                A, $, I = null;
              v.length === 2 && (v[0] !== _[0] || v[1] !== _[1]) && t(v[0], v[1], _[0], _[1], v[0] + u[0], v[1] + u[1]) && t(v[0], v[1], _[0], _[1], _[0] + S[0], _[1] + S[1]) && (m = 2);
              var B = new a(m);
              for (w = u.length, f = 0; f < m; f += 1) {
                for ($ = createSizedArray(w), P = f / (m - 1), A = 0, y = 0; y < w; y += 1) E = bmPow(1 - P, 3) * v[y] + 3 * bmPow(1 - P, 2) * P * (v[y] + u[y]) + 3 * (1 - P) * bmPow(P, 2) * (_[y] + S[y]) + bmPow(P, 3) * _[y], $[y] = E, I !== null && (A += bmPow($[y] - I[y], 2));
                A = bmSqrt(A), T += A, B.points[f] = new o(A, $), I = $
              }
              B.segmentLength = T, c[p] = B
            }
            return c[p]
          }
        }();

        function n(c, v) {
          var _ = v.percents,
            u = v.lengths,
            S = _.length,
            p = bmFloor((S - 1) * c),
            m = c * v.addedLength,
            f = 0;
          if (p === S - 1 || p === 0 || m === u[p]) return _[p];
          for (var y = u[p] > m ? -1 : 1, w = !0; w;)
            if (u[p] <= m && u[p + 1] > m ? (f = (m - u[p]) / (u[p + 1] - u[p]), w = !1) : p += y, p < 0 || p >= S - 1) {
              if (p === S - 1) return _[p];
              w = !1
            } return _[p] + (_[p + 1] - _[p]) * f
        }

        function h(c, v, _, u, S, p) {
          var m = n(S, p),
            f = 1 - m,
            y = e.round((f * f * f * c[0] + (m * f * f + f * m * f + f * f * m) * _[0] + (m * m * f + f * m * m + m * f * m) * u[0] + m * m * m * v[0]) * 1e3) / 1e3,
            w = e.round((f * f * f * c[1] + (m * f * f + f * m * f + f * f * m) * _[1] + (m * m * f + f * m * m + m * f * m) * u[1] + m * m * m * v[1]) * 1e3) / 1e3;
          return [y, w]
        }
        var d = createTypedArray("float32", 8);

        function g(c, v, _, u, S, p, m) {
          S < 0 ? S = 0 : S > 1 && (S = 1);
          var f = n(S, m);
          p = p > 1 ? 1 : p;
          var y = n(p, m),
            w, E = c.length,
            P = 1 - f,
            T = 1 - y,
            A = P * P * P,
            $ = f * P * P * 3,
            I = f * f * P * 3,
            B = f * f * f,
            L = P * P * T,
            N = f * P * T + P * f * T + P * P * y,
            F = f * f * T + P * f * y + f * P * y,
            C = f * f * y,
            k = P * T * T,
            b = f * T * T + P * y * T + P * T * y,
            x = f * y * T + P * y * y + f * T * y,
            V = f * y * y,
            M = T * T * T,
            D = y * T * T + T * y * T + T * T * y,
            O = y * y * T + T * y * y + y * T * y,
            z = y * y * y;
          for (w = 0; w < E; w += 1) d[w * 4] = e.round((A * c[w] + $ * _[w] + I * u[w] + B * v[w]) * 1e3) / 1e3, d[w * 4 + 1] = e.round((L * c[w] + N * _[w] + F * u[w] + C * v[w]) * 1e3) / 1e3, d[w * 4 + 2] = e.round((k * c[w] + b * _[w] + x * u[w] + V * v[w]) * 1e3) / 1e3, d[w * 4 + 3] = e.round((M * c[w] + D * _[w] + O * u[w] + z * v[w]) * 1e3) / 1e3;
          return d
        }
        return {
          getSegmentsLength: s,
          getNewSegment: g,
          getPointInSegment: h,
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
        for (var s = t.lastIndex, a = s, o = this.keyframes.length - 1, l = !0, n, h, d; l;) {
          if (n = this.keyframes[a], h = this.keyframes[a + 1], a === o - 1 && e >= h.t - r) {
            n.h && (n = h), s = 0;
            break
          }
          if (h.t - r > e) {
            s = a;
            break
          }
          a < o - 1 ? a += 1 : (s = 0, l = !1)
        }
        d = this.keyframesMetadata[a] || {};
        var g, c, v, _, u, S, p = h.t - r,
          m = n.t - r,
          f;
        if (n.to) {
          d.bezierData || (d.bezierData = bez.buildBezierData(n.s, h.s || n.e, n.to, n.ti));
          var y = d.bezierData;
          if (e >= p || e < m) {
            var w = e >= p ? y.points.length - 1 : 0;
            for (c = y.points[w].point.length, g = 0; g < c; g += 1) i[g] = y.points[w].point[g]
          } else {
            d.__fnct ? S = d.__fnct : (S = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, d.__fnct = S), v = S((e - m) / (p - m));
            var E = y.segmentLength * v,
              P, T = t.lastFrame < e && t._lastKeyframeIndex === a ? t._lastAddedLength : 0;
            for (u = t.lastFrame < e && t._lastKeyframeIndex === a ? t._lastPoint : 0, l = !0, _ = y.points.length; l;) {
              if (T += y.points[u].partialLength, E === 0 || v === 0 || u === y.points.length - 1) {
                for (c = y.points[u].point.length, g = 0; g < c; g += 1) i[g] = y.points[u].point[g];
                break
              } else if (E >= T && E < T + y.points[u + 1].partialLength) {
                for (P = (E - T) / y.points[u + 1].partialLength, c = y.points[u].point.length, g = 0; g < c; g += 1) i[g] = y.points[u].point[g] + (y.points[u + 1].point[g] - y.points[u].point[g]) * P;
                break
              }
              u < _ - 1 ? u += 1 : l = !1
            }
            t._lastPoint = u, t._lastAddedLength = T - y.points[u].partialLength, t._lastKeyframeIndex = a
          }
        } else {
          var A, $, I, B, L;
          if (o = n.s.length, f = h.s || n.e, this.sh && n.h !== 1)
            if (e >= p) i[0] = f[0], i[1] = f[1], i[2] = f[2];
            else if (e <= m) i[0] = n.s[0], i[1] = n.s[1], i[2] = n.s[2];
          else {
            var N = createQuaternion(n.s),
              F = createQuaternion(f),
              C = (e - m) / (p - m);
            quaternionToEuler(i, slerp(N, F, C))
          } else
            for (a = 0; a < o; a += 1) n.h !== 1 && (e >= p ? v = 1 : e < m ? v = 0 : (n.o.x.constructor === Array ? (d.__fnct || (d.__fnct = []), d.__fnct[a] ? S = d.__fnct[a] : (A = n.o.x[a] === void 0 ? n.o.x[0] : n.o.x[a], $ = n.o.y[a] === void 0 ? n.o.y[0] : n.o.y[a], I = n.i.x[a] === void 0 ? n.i.x[0] : n.i.x[a], B = n.i.y[a] === void 0 ? n.i.y[0] : n.i.y[a], S = BezierFactory.getBezierEasing(A, $, I, B).get, d.__fnct[a] = S)) : d.__fnct ? S = d.__fnct : (A = n.o.x, $ = n.o.y, I = n.i.x, B = n.i.y, S = BezierFactory.getBezierEasing(A, $, I, B).get, n.keyframeMetadata = S), v = S((e - m) / (p - m)))), f = h.s || n.e, L = n.h === 1 ? n.s[a] : n.s[a] + (f[a] - n.s[a]) * v, this.propType === "multidimensional" ? i[a] = L : i = L
        }
        return t.lastIndex = s, i
      }

      function slerp(e, t, r) {
        var i = [],
          s = e[0],
          a = e[1],
          o = e[2],
          l = e[3],
          n = t[0],
          h = t[1],
          d = t[2],
          g = t[3],
          c, v, _, u, S;
        return v = s * n + a * h + o * d + l * g, v < 0 && (v = -v, n = -n, h = -h, d = -d, g = -g), 1 - v > 1e-6 ? (c = Math.acos(v), _ = Math.sin(c), u = Math.sin((1 - r) * c) / _, S = Math.sin(r * c) / _) : (u = 1 - r, S = r), i[0] = u * s + S * n, i[1] = u * a + S * h, i[2] = u * o + S * d, i[3] = u * l + S * g, i
      }

      function quaternionToEuler(e, t) {
        var r = t[0],
          i = t[1],
          s = t[2],
          a = t[3],
          o = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s),
          l = Math.asin(2 * r * i + 2 * s * a),
          n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
        e[0] = o / degToRads, e[1] = l / degToRads, e[2] = n / degToRads
      }

      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          i = e[2] * degToRads,
          s = Math.cos(t / 2),
          a = Math.cos(r / 2),
          o = Math.cos(i / 2),
          l = Math.sin(t / 2),
          n = Math.sin(r / 2),
          h = Math.sin(i / 2),
          d = s * a * o - l * n * h,
          g = l * n * o + s * a * h,
          c = l * a * o + s * n * h,
          v = s * n * o - l * a * h;
        return [g, c, v, d]
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
        var s, a = t.k.length;
        for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = t.k[s] * this.mult, this.pv[s] = t.k[s];
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
        var s, a = t.k.length,
          o, l, n, h;
        for (s = 0; s < a - 1; s += 1) t.k[s].to && t.k[s].s && t.k[s + 1] && t.k[s + 1].s && (o = t.k[s].s, l = t.k[s + 1].s, n = t.k[s].to, h = t.k[s].ti, (o.length === 2 && !(o[0] === l[0] && o[1] === l[1]) && bez.pointOnLine2D(o[0], o[1], l[0], l[1], o[0] + n[0], o[1] + n[1]) && bez.pointOnLine2D(o[0], o[1], l[0], l[1], l[0] + h[0], l[1] + h[1]) || o.length === 3 && !(o[0] === l[0] && o[1] === l[1] && o[2] === l[2]) && bez.pointOnLine3D(o[0], o[1], o[2], l[0], l[1], l[2], o[0] + n[0], o[1] + n[1], o[2] + n[2]) && bez.pointOnLine3D(o[0], o[1], o[2], l[0], l[1], l[2], l[0] + h[0], l[1] + h[1], l[2] + h[2])) && (t.k[s].to = null, t.k[s].ti = null), o[0] === l[0] && o[1] === l[1] && n[0] === 0 && n[1] === 0 && h[0] === 0 && h[1] === 0 && (o.length === 2 || o[2] === l[2] && n[2] === 0 && h[2] === 0) && (t.k[s].to = null, t.k[s].ti = null));
        this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
        var d = t.k[0].s.length;
        for (this.v = createTypedArray("float32", d), this.pv = createTypedArray("float32", d), s = 0; s < d; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", d)
        }, this.addEffect = addEffect
      }
      var PropertyFactory = function() {
        function e(r, i, s, a, o) {
          i.sid && (i = r.globalData.slotManager.getProp(i));
          var l;
          if (!i.k.length) l = new ValueProperty(r, i, a, o);
          else if (typeof i.k[0] == "number") l = new MultiDimensionalProperty(r, i, a, o);
          else switch (s) {
            case 0:
              l = new KeyframedValueProperty(r, i, a, o);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, i, a, o);
              break
          }
          return l.effectsSequence.length && o.addDynamicProperty(l), l
        }
        var t = {
          getProp: e
        };
        return t
      }();

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
      var pointPool = function() {
        function e() {
          return createTypedArray("float32", 2)
        }
        return poolFactory(8, e)
      }();

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
        var a;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
            break;
          default:
            a = [];
            break
        }(!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = e, a[i][1] = t
      }, ShapePath.prototype.setTripleAt = function(e, t, r, i, s, a, o, l) {
        this.setXYAt(e, t, "v", o, l), this.setXYAt(r, i, "o", o, l), this.setXYAt(s, a, "i", o, l)
      }, ShapePath.prototype.reverse = function() {
        var e = new ShapePath;
        e.setPathData(this.c, this._length);
        var t = this.v,
          r = this.o,
          i = this.i,
          s = 0;
        this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
        var a = this._length - 1,
          o = this._length,
          l;
        for (l = s; l < o; l += 1) e.setTripleAt(t[a][0], t[a][1], i[a][0], i[a][1], r[a][0], r[a][1], l, !1), a -= 1;
        return e
      }, ShapePath.prototype.length = function() {
        return this._length
      };
      var shapePool = function() {
        function e() {
          return new ShapePath
        }

        function t(s) {
          var a = s._length,
            o;
          for (o = 0; o < a; o += 1) pointPool.release(s.v[o]), pointPool.release(s.i[o]), pointPool.release(s.o[o]), s.v[o] = null, s.i[o] = null, s.o[o] = null;
          s._length = 0, s.c = !1
        }

        function r(s) {
          var a = i.newElement(),
            o, l = s._length === void 0 ? s.v.length : s._length;
          for (a.setLength(l), a.c = s.c, o = 0; o < l; o += 1) a.setTripleAt(s.v[o][0], s.v[o][1], s.o[o][0], s.o[o][1], s.i[o][0], s.i[o][1], o);
          return a
        }
        var i = poolFactory(4, e, t);
        return i.clone = r, i
      }();

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
      var shapeCollectionPool = function() {
          var e = {
              newShapeCollection: s,
              release: a
            },
            t = 0,
            r = 4,
            i = createSizedArray(r);

          function s() {
            var o;
            return t ? (t -= 1, o = i[t]) : o = new ShapeCollection, o
          }

          function a(o) {
            var l, n = o._length;
            for (l = 0; l < n; l += 1) shapePool.release(o.shapes[l]);
            o._length = 0, t === r && (i = pooling.double(i), r *= 2), i[t] = o, t += 1
          }
          return e
        }(),
        ShapePropertyFactory = function() {
          var e = -999999;

          function t(p, m, f) {
            var y = f.lastIndex,
              w, E, P, T, A, $, I, B, L, N = this.keyframes;
            if (p < N[0].t - this.offsetTime) w = N[0].s[0], P = !0, y = 0;
            else if (p >= N[N.length - 1].t - this.offsetTime) w = N[N.length - 1].s ? N[N.length - 1].s[0] : N[N.length - 2].e[0], P = !0;
            else {
              for (var F = y, C = N.length - 1, k = !0, b, x, V; k && (b = N[F], x = N[F + 1], !(x.t - this.offsetTime > p));) F < C - 1 ? F += 1 : k = !1;
              if (V = this.keyframesMetadata[F] || {}, P = b.h === 1, y = F, !P) {
                if (p >= x.t - this.offsetTime) B = 1;
                else if (p < b.t - this.offsetTime) B = 0;
                else {
                  var M;
                  V.__fnct ? M = V.__fnct : (M = BezierFactory.getBezierEasing(b.o.x, b.o.y, b.i.x, b.i.y).get, V.__fnct = M), B = M((p - (b.t - this.offsetTime)) / (x.t - this.offsetTime - (b.t - this.offsetTime)))
                }
                E = x.s ? x.s[0] : b.e[0]
              }
              w = b.s[0]
            }
            for ($ = m._length, I = w.i[0].length, f.lastIndex = y, T = 0; T < $; T += 1)
              for (A = 0; A < I; A += 1) L = P ? w.i[T][A] : w.i[T][A] + (E.i[T][A] - w.i[T][A]) * B, m.i[T][A] = L, L = P ? w.o[T][A] : w.o[T][A] + (E.o[T][A] - w.o[T][A]) * B, m.o[T][A] = L, L = P ? w.v[T][A] : w.v[T][A] + (E.v[T][A] - w.v[T][A]) * B, m.v[T][A] = L
          }

          function r() {
            var p = this.comp.renderedFrame - this.offsetTime,
              m = this.keyframes[0].t - this.offsetTime,
              f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              y = this._caching.lastFrame;
            return y !== e && (y < m && p < m || y > f && p > f) || (this._caching.lastIndex = y < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv
          }

          function i() {
            this.paths = this.localShapeCollection
          }

          function s(p, m) {
            if (p._length !== m._length || p.c !== m.c) return !1;
            var f, y = p._length;
            for (f = 0; f < y; f += 1)
              if (p.v[f][0] !== m.v[f][0] || p.v[f][1] !== m.v[f][1] || p.o[f][0] !== m.o[f][0] || p.o[f][1] !== m.o[f][1] || p.i[f][0] !== m.i[f][0] || p.i[f][1] !== m.i[f][1]) return !1;
            return !0
          }

          function a(p) {
            s(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function o() {
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
              var m, f = this.effectsSequence.length;
              for (m = 0; m < f; m += 1) p = this.effectsSequence[m](p);
              this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }

          function l(p, m, f) {
            this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = m, this.k = !1, this.kf = !1, this._mdf = !1;
            var y = f === 3 ? m.pt.k : m.ks.k;
            this.v = shapePool.clone(y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
          }

          function n(p) {
            this.effectsSequence.push(p), this.container.addDynamicProperty(this)
          }
          l.prototype.interpolateShape = t, l.prototype.getValue = o, l.prototype.setVValue = a, l.prototype.addEffect = n;

          function h(p, m, f) {
            this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = f === 3 ? m.pt.k : m.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var y = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          h.prototype.getValue = o, h.prototype.interpolateShape = t, h.prototype.setVValue = a, h.prototype.addEffect = n;
          var d = function() {
              var p = roundCorner;

              function m(f, y) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = y.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, y.p, 1, 0, this), this.s = PropertyFactory.getProp(f, y.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
              }
              return m.prototype = {
                reset: i,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function() {
                  var y = this.p.v[0],
                    w = this.p.v[1],
                    E = this.s.v[0] / 2,
                    P = this.s.v[1] / 2,
                    T = this.d !== 3,
                    A = this.v;
                  A.v[0][0] = y, A.v[0][1] = w - P, A.v[1][0] = T ? y + E : y - E, A.v[1][1] = w, A.v[2][0] = y, A.v[2][1] = w + P, A.v[3][0] = T ? y - E : y + E, A.v[3][1] = w, A.i[0][0] = T ? y - E * p : y + E * p, A.i[0][1] = w - P, A.i[1][0] = T ? y + E : y - E, A.i[1][1] = w - P * p, A.i[2][0] = T ? y + E * p : y - E * p, A.i[2][1] = w + P, A.i[3][0] = T ? y - E : y + E, A.i[3][1] = w + P * p, A.o[0][0] = T ? y + E * p : y - E * p, A.o[0][1] = w - P, A.o[1][0] = T ? y + E : y - E, A.o[1][1] = w + P * p, A.o[2][0] = T ? y - E * p : y + E * p, A.o[2][1] = w + P, A.o[3][0] = T ? y - E : y + E, A.o[3][1] = w - P * p
                }
              }, extendPrototype([DynamicPropertyContainer], m), m
            }(),
            g = function() {
              function p(m, f) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = m, this.comp = m.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(m), f.sy === 1 ? (this.ir = PropertyFactory.getProp(m, f.ir, 0, 0, this), this.is = PropertyFactory.getProp(m, f.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(m, f.pt, 0, 0, this), this.p = PropertyFactory.getProp(m, f.p, 1, 0, this), this.r = PropertyFactory.getProp(m, f.r, 0, degToRads, this), this.or = PropertyFactory.getProp(m, f.or, 0, 0, this), this.os = PropertyFactory.getProp(m, f.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
              }
              return p.prototype = {
                reset: i,
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                },
                convertStarToPath: function() {
                  var f = Math.floor(this.pt.v) * 2,
                    y = Math.PI * 2 / f,
                    w = !0,
                    E = this.or.v,
                    P = this.ir.v,
                    T = this.os.v,
                    A = this.is.v,
                    $ = 2 * Math.PI * E / (f * 2),
                    I = 2 * Math.PI * P / (f * 2),
                    B, L, N, F, C = -Math.PI / 2;
                  C += this.r.v;
                  var k = this.data.d === 3 ? -1 : 1;
                  for (this.v._length = 0, B = 0; B < f; B += 1) {
                    L = w ? E : P, N = w ? T : A, F = w ? $ : I;
                    var b = L * Math.cos(C),
                      x = L * Math.sin(C),
                      V = b === 0 && x === 0 ? 0 : x / Math.sqrt(b * b + x * x),
                      M = b === 0 && x === 0 ? 0 : -b / Math.sqrt(b * b + x * x);
                    b += +this.p.v[0], x += +this.p.v[1], this.v.setTripleAt(b, x, b - V * F * N * k, x - M * F * N * k, b + V * F * N * k, x + M * F * N * k, B, !0), w = !w, C += y * k
                  }
                },
                convertPolygonToPath: function() {
                  var f = Math.floor(this.pt.v),
                    y = Math.PI * 2 / f,
                    w = this.or.v,
                    E = this.os.v,
                    P = 2 * Math.PI * w / (f * 4),
                    T, A = -Math.PI * .5,
                    $ = this.data.d === 3 ? -1 : 1;
                  for (A += this.r.v, this.v._length = 0, T = 0; T < f; T += 1) {
                    var I = w * Math.cos(A),
                      B = w * Math.sin(A),
                      L = I === 0 && B === 0 ? 0 : B / Math.sqrt(I * I + B * B),
                      N = I === 0 && B === 0 ? 0 : -I / Math.sqrt(I * I + B * B);
                    I += +this.p.v[0], B += +this.p.v[1], this.v.setTripleAt(I, B, I - L * P * E * $, B - N * P * E * $, I + L * P * E * $, B + N * P * E * $, T, !0), A += y * $
                  }
                  this.paths.length = 0, this.paths[0] = this.v
                }
              }, extendPrototype([DynamicPropertyContainer], p), p
            }(),
            c = function() {
              function p(m, f) {
                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = m, this.comp = m.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, f.p, 1, 0, this), this.s = PropertyFactory.getProp(m, f.s, 1, 0, this), this.r = PropertyFactory.getProp(m, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
              }
              return p.prototype = {
                convertRectToPath: function() {
                  var f = this.p.v[0],
                    y = this.p.v[1],
                    w = this.s.v[0] / 2,
                    E = this.s.v[1] / 2,
                    P = bmMin(w, E, this.r.v),
                    T = P * (1 - roundCorner);
                  this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + w, y - E + P, f + w, y - E + P, f + w, y - E + T, 0, !0), this.v.setTripleAt(f + w, y + E - P, f + w, y + E - T, f + w, y + E - P, 1, !0), P !== 0 ? (this.v.setTripleAt(f + w - P, y + E, f + w - P, y + E, f + w - T, y + E, 2, !0), this.v.setTripleAt(f - w + P, y + E, f - w + T, y + E, f - w + P, y + E, 3, !0), this.v.setTripleAt(f - w, y + E - P, f - w, y + E - P, f - w, y + E - T, 4, !0), this.v.setTripleAt(f - w, y - E + P, f - w, y - E + T, f - w, y - E + P, 5, !0), this.v.setTripleAt(f - w + P, y - E, f - w + P, y - E, f - w + T, y - E, 6, !0), this.v.setTripleAt(f + w - P, y - E, f + w - T, y - E, f + w - P, y - E, 7, !0)) : (this.v.setTripleAt(f - w, y + E, f - w + T, y + E, f - w, y + E, 2), this.v.setTripleAt(f - w, y - E, f - w, y - E + T, f - w, y - E, 3))) : (this.v.setTripleAt(f + w, y - E + P, f + w, y - E + T, f + w, y - E + P, 0, !0), P !== 0 ? (this.v.setTripleAt(f + w - P, y - E, f + w - P, y - E, f + w - T, y - E, 1, !0), this.v.setTripleAt(f - w + P, y - E, f - w + T, y - E, f - w + P, y - E, 2, !0), this.v.setTripleAt(f - w, y - E + P, f - w, y - E + P, f - w, y - E + T, 3, !0), this.v.setTripleAt(f - w, y + E - P, f - w, y + E - T, f - w, y + E - P, 4, !0), this.v.setTripleAt(f - w + P, y + E, f - w + P, y + E, f - w + T, y + E, 5, !0), this.v.setTripleAt(f + w - P, y + E, f + w - T, y + E, f + w - P, y + E, 6, !0), this.v.setTripleAt(f + w, y + E - P, f + w, y + E - P, f + w, y + E - T, 7, !0)) : (this.v.setTripleAt(f - w, y - E, f - w + T, y - E, f - w, y - E, 1, !0), this.v.setTripleAt(f - w, y + E, f - w, y + E - T, f - w, y + E, 2, !0), this.v.setTripleAt(f + w, y + E, f + w - T, y + E, f + w, y + E, 3, !0)))
                },
                getValue: function() {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                },
                reset: i
              }, extendPrototype([DynamicPropertyContainer], p), p
            }();

          function v(p, m, f) {
            var y;
            if (f === 3 || f === 4) {
              var w = f === 3 ? m.pt : m.ks,
                E = w.k;
              E.length ? y = new h(p, m, f) : y = new l(p, m, f)
            } else f === 5 ? y = new c(p, m) : f === 6 ? y = new d(p, m) : f === 7 && (y = new g(p, m));
            return y.k && p.addDynamicProperty(y), y
          }

          function _() {
            return l
          }

          function u() {
            return h
          }
          var S = {};
          return S.getShapeProp = v, S.getConstructorFunction = _, S.getKeyframedConstructorFunction = u, S
        }();
      /*!
       Transformation Matrix v2.0
       (c) Epistemex 2014-2015
       www.epistemex.com
       By Ken Fyrstenberg
       Contributions by leeoniya.
       License: MIT, header required.
       */
      var Matrix = function() {
        var e = Math.cos,
          t = Math.sin,
          r = Math.tan,
          i = Math.round;

        function s() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
        }

        function a(b) {
          if (b === 0) return this;
          var x = e(b),
            V = t(b);
          return this._t(x, -V, 0, 0, V, x, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function o(b) {
          if (b === 0) return this;
          var x = e(b),
            V = t(b);
          return this._t(1, 0, 0, 0, 0, x, -V, 0, 0, V, x, 0, 0, 0, 0, 1)
        }

        function l(b) {
          if (b === 0) return this;
          var x = e(b),
            V = t(b);
          return this._t(x, 0, V, 0, 0, 1, 0, 0, -V, 0, x, 0, 0, 0, 0, 1)
        }

        function n(b) {
          if (b === 0) return this;
          var x = e(b),
            V = t(b);
          return this._t(x, -V, 0, 0, V, x, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function h(b, x) {
          return this._t(1, x, b, 1, 0, 0)
        }

        function d(b, x) {
          return this.shear(r(b), r(x))
        }

        function g(b, x) {
          var V = e(x),
            M = t(x);
          return this._t(V, M, 0, 0, -M, V, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(b), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(V, -M, 0, 0, M, V, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function c(b, x, V) {
          return !V && V !== 0 && (V = 1), b === 1 && x === 1 && V === 1 ? this : this._t(b, 0, 0, 0, 0, x, 0, 0, 0, 0, V, 0, 0, 0, 0, 1)
        }

        function v(b, x, V, M, D, O, z, G, H, q, Y, Q, X, j, U, W) {
          return this.props[0] = b, this.props[1] = x, this.props[2] = V, this.props[3] = M, this.props[4] = D, this.props[5] = O, this.props[6] = z, this.props[7] = G, this.props[8] = H, this.props[9] = q, this.props[10] = Y, this.props[11] = Q, this.props[12] = X, this.props[13] = j, this.props[14] = U, this.props[15] = W, this
        }

        function _(b, x, V) {
          return V = V || 0, b !== 0 || x !== 0 || V !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, x, V, 1) : this
        }

        function u(b, x, V, M, D, O, z, G, H, q, Y, Q, X, j, U, W) {
          var R = this.props;
          if (b === 1 && x === 0 && V === 0 && M === 0 && D === 0 && O === 1 && z === 0 && G === 0 && H === 0 && q === 0 && Y === 1 && Q === 0) return R[12] = R[12] * b + R[15] * X, R[13] = R[13] * O + R[15] * j, R[14] = R[14] * Y + R[15] * U, R[15] *= W, this._identityCalculated = !1, this;
          var te = R[0],
            ae = R[1],
            re = R[2],
            ee = R[3],
            ie = R[4],
            se = R[5],
            Z = R[6],
            ne = R[7],
            oe = R[8],
            K = R[9],
            le = R[10],
            J = R[11],
            he = R[12],
            ce = R[13],
            fe = R[14],
            de = R[15];
          return R[0] = te * b + ae * D + re * H + ee * X, R[1] = te * x + ae * O + re * q + ee * j, R[2] = te * V + ae * z + re * Y + ee * U, R[3] = te * M + ae * G + re * Q + ee * W, R[4] = ie * b + se * D + Z * H + ne * X, R[5] = ie * x + se * O + Z * q + ne * j, R[6] = ie * V + se * z + Z * Y + ne * U, R[7] = ie * M + se * G + Z * Q + ne * W, R[8] = oe * b + K * D + le * H + J * X, R[9] = oe * x + K * O + le * q + J * j, R[10] = oe * V + K * z + le * Y + J * U, R[11] = oe * M + K * G + le * Q + J * W, R[12] = he * b + ce * D + fe * H + de * X, R[13] = he * x + ce * O + fe * q + de * j, R[14] = he * V + ce * z + fe * Y + de * U, R[15] = he * M + ce * G + fe * Q + de * W, this._identityCalculated = !1, this
        }

        function S(b) {
          var x = b.props;
          return this.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15])
        }

        function p() {
          return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
        }

        function m(b) {
          for (var x = 0; x < 16;) {
            if (b.props[x] !== this.props[x]) return !1;
            x += 1
          }
          return !0
        }

        function f(b) {
          var x;
          for (x = 0; x < 16; x += 1) b.props[x] = this.props[x];
          return b
        }

        function y(b) {
          var x;
          for (x = 0; x < 16; x += 1) this.props[x] = b[x]
        }

        function w(b, x, V) {
          return {
            x: b * this.props[0] + x * this.props[4] + V * this.props[8] + this.props[12],
            y: b * this.props[1] + x * this.props[5] + V * this.props[9] + this.props[13],
            z: b * this.props[2] + x * this.props[6] + V * this.props[10] + this.props[14]
          }
        }

        function E(b, x, V) {
          return b * this.props[0] + x * this.props[4] + V * this.props[8] + this.props[12]
        }

        function P(b, x, V) {
          return b * this.props[1] + x * this.props[5] + V * this.props[9] + this.props[13]
        }

        function T(b, x, V) {
          return b * this.props[2] + x * this.props[6] + V * this.props[10] + this.props[14]
        }

        function A() {
          var b = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            x = this.props[5] / b,
            V = -this.props[1] / b,
            M = -this.props[4] / b,
            D = this.props[0] / b,
            O = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / b,
            z = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / b,
            G = new Matrix;
          return G.props[0] = x, G.props[1] = V, G.props[4] = M, G.props[5] = D, G.props[12] = O, G.props[13] = z, G
        }

        function $(b) {
          var x = this.getInverseMatrix();
          return x.applyToPointArray(b[0], b[1], b[2] || 0)
        }

        function I(b) {
          var x, V = b.length,
            M = [];
          for (x = 0; x < V; x += 1) M[x] = $(b[x]);
          return M
        }

        function B(b, x, V) {
          var M = createTypedArray("float32", 6);
          if (this.isIdentity()) M[0] = b[0], M[1] = b[1], M[2] = x[0], M[3] = x[1], M[4] = V[0], M[5] = V[1];
          else {
            var D = this.props[0],
              O = this.props[1],
              z = this.props[4],
              G = this.props[5],
              H = this.props[12],
              q = this.props[13];
            M[0] = b[0] * D + b[1] * z + H, M[1] = b[0] * O + b[1] * G + q, M[2] = x[0] * D + x[1] * z + H, M[3] = x[0] * O + x[1] * G + q, M[4] = V[0] * D + V[1] * z + H, M[5] = V[0] * O + V[1] * G + q
          }
          return M
        }

        function L(b, x, V) {
          var M;
          return this.isIdentity() ? M = [b, x, V] : M = [b * this.props[0] + x * this.props[4] + V * this.props[8] + this.props[12], b * this.props[1] + x * this.props[5] + V * this.props[9] + this.props[13], b * this.props[2] + x * this.props[6] + V * this.props[10] + this.props[14]], M
        }

        function N(b, x) {
          if (this.isIdentity()) return b + "," + x;
          var V = this.props;
          return Math.round((b * V[0] + x * V[4] + V[12]) * 100) / 100 + "," + Math.round((b * V[1] + x * V[5] + V[13]) * 100) / 100
        }

        function F() {
          for (var b = 0, x = this.props, V = "matrix3d(", M = 1e4; b < 16;) V += i(x[b] * M) / M, V += b === 15 ? ")" : ",", b += 1;
          return V
        }

        function C(b) {
          var x = 1e4;
          return b < 1e-6 && b > 0 || b > -1e-6 && b < 0 ? i(b * x) / x : b
        }

        function k() {
          var b = this.props,
            x = C(b[0]),
            V = C(b[1]),
            M = C(b[4]),
            D = C(b[5]),
            O = C(b[12]),
            z = C(b[13]);
          return "matrix(" + x + "," + V + "," + M + "," + D + "," + O + "," + z + ")"
        }
        return function() {
          this.reset = s, this.rotate = a, this.rotateX = o, this.rotateY = l, this.rotateZ = n, this.skew = d, this.skewFromAxis = g, this.shear = h, this.scale = c, this.setTransform = v, this.translate = _, this.transform = u, this.multiply = S, this.applyToPoint = w, this.applyToX = E, this.applyToY = P, this.applyToZ = T, this.applyToPointArray = L, this.applyToTriplePoints = B, this.applyToPointStringified = N, this.toCSS = F, this.to2dCSS = k, this.clone = f, this.cloneFromProps = y, this.equals = m, this.inversePoints = I, this.inversePoint = $, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
        }
      }();

      function _typeof$3(e) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
          return typeof r
        } : _typeof$3 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
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
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";

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
        _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
      } catch (e) {}
      var ShapeModifiers = function() {
        var e = {},
          t = {};
        e.registerModifier = r, e.getModifier = i;

        function r(s, a) {
          t[s] || (t[s] = a)
        }

        function i(s, a, o) {
          return new t[s](a, o)
        }
        return e
      }();

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
        var a = [];
        t <= 1 ? a.push({
          s: e,
          e: t
        }) : e >= 1 ? a.push({
          s: e - 1,
          e: t - 1
        }) : (a.push({
          s: e,
          e: 1
        }), a.push({
          s: 0,
          e: t - 1
        }));
        var o = [],
          l, n = a.length,
          h;
        for (l = 0; l < n; l += 1)
          if (h = a[l], !(h.e * s < i || h.s * s > i + r)) {
            var d, g;
            h.s * s <= i ? d = 0 : d = (h.s * s - i) / r, h.e * s >= i + r ? g = 1 : g = (h.e * s - i) / r, o.push([d, g])
          } return o.length || o.push([0, 0]), o
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
        var a, o, l = this.shapes.length,
          n, h, d, g, c, v = 0;
        if (r === t)
          for (o = 0; o < l; o += 1) this.shapes[o].localShapeCollection.releaseShapes(), this.shapes[o].shape._mdf = !0, this.shapes[o].shape.paths = this.shapes[o].localShapeCollection, this._mdf && (this.shapes[o].pathsData.length = 0);
        else if (r === 1 && t === 0 || r === 0 && t === 1) {
          if (this._mdf)
            for (o = 0; o < l; o += 1) this.shapes[o].pathsData.length = 0, this.shapes[o].shape._mdf = !0
        } else {
          var _ = [],
            u, S;
          for (o = 0; o < l; o += 1)
            if (u = this.shapes[o], !u.shape._mdf && !this._mdf && !e && this.m !== 2) u.shape.paths = u.localShapeCollection;
            else {
              if (a = u.shape.paths, h = a._length, c = 0, !u.shape._mdf && u.pathsData.length) c = u.totalShapeLength;
              else {
                for (d = this.releasePathsData(u.pathsData), n = 0; n < h; n += 1) g = bez.getSegmentsLength(a.shapes[n]), d.push(g), c += g.totalLength;
                u.totalShapeLength = c, u.pathsData = d
              }
              v += c, u.shape._mdf = !0
            } var p = t,
            m = r,
            f = 0,
            y;
          for (o = l - 1; o >= 0; o -= 1)
            if (u = this.shapes[o], u.shape._mdf) {
              for (S = u.localShapeCollection, S.releaseShapes(), this.m === 2 && l > 1 ? (y = this.calculateShapeEdges(t, r, u.totalShapeLength, f, v), f += u.totalShapeLength) : y = [
                  [p, m]
                ], h = y.length, n = 0; n < h; n += 1) {
                p = y[n][0], m = y[n][1], _.length = 0, m <= 1 ? _.push({
                  s: u.totalShapeLength * p,
                  e: u.totalShapeLength * m
                }) : p >= 1 ? _.push({
                  s: u.totalShapeLength * (p - 1),
                  e: u.totalShapeLength * (m - 1)
                }) : (_.push({
                  s: u.totalShapeLength * p,
                  e: u.totalShapeLength
                }), _.push({
                  s: 0,
                  e: u.totalShapeLength * (m - 1)
                }));
                var w = this.addShapes(u, _[0]);
                if (_[0].s !== _[0].e) {
                  if (_.length > 1) {
                    var E = u.shape.paths.shapes[u.shape.paths._length - 1];
                    if (E.c) {
                      var P = w.pop();
                      this.addPaths(w, S), w = this.addShapes(u, _[1], P)
                    } else this.addPaths(w, S), w = this.addShapes(u, _[1])
                  }
                  this.addPaths(w, S)
                }
              }
              u.shape.paths = S
            }
        }
      }, TrimModifier.prototype.addPaths = function(e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) t.addShape(e[r])
      }, TrimModifier.prototype.addSegment = function(e, t, r, i, s, a, o) {
        s.setXYAt(t[0], t[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), o && s.setXYAt(e[0], e[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
      }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
        t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
      }, TrimModifier.prototype.addShapes = function(e, t, r) {
        var i = e.pathsData,
          s = e.shape.paths.shapes,
          a, o = e.shape.paths._length,
          l, n, h = 0,
          d, g, c, v, _ = [],
          u, S = !0;
        for (r ? (g = r._length, u = r._length) : (r = shapePool.newElement(), g = 0, u = 0), _.push(r), a = 0; a < o; a += 1) {
          for (c = i[a].lengths, r.c = s[a].c, n = s[a].c ? c.length : c.length + 1, l = 1; l < n; l += 1)
            if (d = c[l - 1], h + d.addedLength < t.s) h += d.addedLength, r.c = !1;
            else if (h > t.e) {
            r.c = !1;
            break
          } else t.s <= h && t.e >= h + d.addedLength ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[l], s[a].v[l], r, g, S), S = !1) : (v = bez.getNewSegment(s[a].v[l - 1], s[a].v[l], s[a].o[l - 1], s[a].i[l], (t.s - h) / d.addedLength, (t.e - h) / d.addedLength, c[l - 1]), this.addSegmentFromArray(v, r, g, S), S = !1, r.c = !1), h += d.addedLength, g += 1;
          if (s[a].c && c.length) {
            if (d = c[l - 1], h <= t.e) {
              var p = c[l - 1].addedLength;
              t.s <= h && t.e >= h + p ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[0], s[a].v[0], r, g, S), S = !1) : (v = bez.getNewSegment(s[a].v[l - 1], s[a].v[0], s[a].o[l - 1], s[a].i[0], (t.s - h) / p, (t.e - h) / p, c[l - 1]), this.addSegmentFromArray(v, r, g, S), S = !1, r.c = !1)
            } else r.c = !1;
            h += d.addedLength, g += 1
          }
          if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), h > t.e) break;
          a < o - 1 && (r = shapePool.newElement(), S = !0, _.push(r), g = 0)
        }
        return _
      };

      function PuckerAndBloatModifier() {}
      extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
      }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
        var r = t / 100,
          i = [0, 0],
          s = e._length,
          a = 0;
        for (a = 0; a < s; a += 1) i[0] += e.v[a][0], i[1] += e.v[a][1];
        i[0] /= s, i[1] /= s;
        var o = shapePool.newElement();
        o.c = e.c;
        var l, n, h, d, g, c;
        for (a = 0; a < s; a += 1) l = e.v[a][0] + (i[0] - e.v[a][0]) * r, n = e.v[a][1] + (i[1] - e.v[a][1]) * r, h = e.o[a][0] + (i[0] - e.o[a][0]) * -r, d = e.o[a][1] + (i[1] - e.o[a][1]) * -r, g = e.i[a][0] + (i[0] - e.i[a][0]) * -r, c = e.i[a][1] + (i[1] - e.i[a][1]) * -r, o.setTripleAt(l, n, h, d, g, c, a);
        return o
      }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, a, o = this.amount.v;
        if (o !== 0) {
          var l, n;
          for (r = 0; r < i; r += 1) {
            if (l = this.shapes[r], n = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
              for (n.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(t[s], o));
            l.shape.paths = l.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var TransformPropertyFactory = function() {
        var e = [0, 0];

        function t(n) {
          var h = this._mdf;
          this.iterateDynamicProperties(), this._mdf = this._mdf || h, this.a && n.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && n.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && n.skewFromAxis(-this.sk.v, this.sa.v), this.r ? n.rotate(-this.r.v) : n.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? n.translate(this.px.v, this.py.v, -this.pz.v) : n.translate(this.px.v, this.py.v, 0) : n.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
        }

        function r(n) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || n) {
              var h;
              if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                var d, g;
                if (h = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (d = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / h, 0), g = this.p.getValueAtTime(this.p.keyframes[0].t / h, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (d = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / h, 0), g = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / h, 0)) : (d = this.p.pv, g = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / h, this.p.offsetTime));
                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                  d = [], g = [];
                  var c = this.px,
                    v = this.py;
                  c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (d[0] = c.getValueAtTime((c.keyframes[0].t + .01) / h, 0), d[1] = v.getValueAtTime((v.keyframes[0].t + .01) / h, 0), g[0] = c.getValueAtTime(c.keyframes[0].t / h, 0), g[1] = v.getValueAtTime(v.keyframes[0].t / h, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (d[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / h, 0), d[1] = v.getValueAtTime(v.keyframes[v.keyframes.length - 1].t / h, 0), g[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - .01) / h, 0), g[1] = v.getValueAtTime((v.keyframes[v.keyframes.length - 1].t - .01) / h, 0)) : (d = [c.pv, v.pv], g[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - .01) / h, c.offsetTime), g[1] = v.getValueAtTime((v._caching.lastFrame + v.offsetTime - .01) / h, v.offsetTime))
                } else g = e, d = g;
                this.v.rotate(-Math.atan2(d[1] - g[1], d[0] - g[0]))
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

        function a(n) {
          this._addDynamicProperty(n), this.elem.addDynamicProperty(n), this._isDirty = !0
        }

        function o(n, h, d) {
          if (this.elem = n, this.frameId = -1, this.propType = "transform", this.data = h, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(d || n), h.p && h.p.s ? (this.px = PropertyFactory.getProp(n, h.p.x, 0, 0, this), this.py = PropertyFactory.getProp(n, h.p.y, 0, 0, this), h.p.z && (this.pz = PropertyFactory.getProp(n, h.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(n, h.p || {
              k: [0, 0, 0]
            }, 1, 0, this), h.rx) {
            if (this.rx = PropertyFactory.getProp(n, h.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(n, h.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(n, h.rz, 0, degToRads, this), h.or.k[0].ti) {
              var g, c = h.or.k.length;
              for (g = 0; g < c; g += 1) h.or.k[g].to = null, h.or.k[g].ti = null
            }
            this.or = PropertyFactory.getProp(n, h.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(n, h.r || {
            k: 0
          }, 0, degToRads, this);
          h.sk && (this.sk = PropertyFactory.getProp(n, h.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(n, h.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(n, h.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(n, h.s || {
            k: [100, 100, 100]
          }, 1, .01, this), h.o ? this.o = PropertyFactory.getProp(n, h.o, 0, .01, n) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        o.prototype = {
          applyToMatrix: t,
          getValue: r,
          precalculateMatrix: i,
          autoOrient: s
        }, extendPrototype([DynamicPropertyContainer], o), o.prototype.addDynamicProperty = a, o.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

        function l(n, h, d) {
          return new o(n, h, d)
        }
        return {
          getTransformProperty: l
        }
      }();

      function RepeaterModifier() {}
      extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
      }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, s, a) {
        var o = a ? -1 : 1,
          l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
          n = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
        e.translate(i.p.v[0] * o * s, i.p.v[1] * o * s, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * o * s), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / l : l, a ? 1 / n : n), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
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
        var t, r, i, s, a, o = !1;
        if (this._mdf || e) {
          var l = Math.ceil(this.c.v);
          if (this._groups.length < l) {
            for (; this._groups.length < l;) {
              var n = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              n.it.push({
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
              }), this.arr.splice(0, 0, n), this._groups.splice(0, 0, n), this._currentCopies += 1
            }
            this.elem.reloadShapes(), o = !0
          }
          a = 0;
          var h;
          for (i = 0; i <= this._groups.length - 1; i += 1) {
            if (h = a < l, this._groups[i]._render = h, this.changeGroupRender(this._groups[i].it, h), !h) {
              var d = this.elemsData[i].it,
                g = d[d.length - 1];
              g.transform.op.v !== 0 ? (g.transform.op._mdf = !0, g.transform.op.v = 0) : g.transform.op._mdf = !1
            }
            a += 1
          }
          this._currentCopies = l;
          var c = this.o.v,
            v = c % 1,
            _ = c > 0 ? Math.floor(c) : Math.ceil(c),
            u = this.pMatrix.props,
            S = this.rMatrix.props,
            p = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var m = 0;
          if (c > 0) {
            for (; m < _;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), m += 1;
            v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, v, !1), m += v)
          } else if (c < 0) {
            for (; m > _;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), m -= 1;
            v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -v, !0), m -= v)
          }
          i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
          for (var f, y; a;) {
            if (t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, y = r.length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), m !== 0) {
              for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), f = 0; f < y; f += 1) r[f] = this.matrix.props[f];
              this.matrix.reset()
            } else
              for (this.matrix.reset(), f = 0; f < y; f += 1) r[f] = this.matrix.props[f];
            m += 1, a -= 1, i += s
          }
        } else
          for (a = this._currentCopies, i = 0, s = 1; a;) t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, i += s;
        return o
      }, RepeaterModifier.prototype.addShape = function() {};

      function RoundCornersModifier() {}
      extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
      }, RoundCornersModifier.prototype.processPath = function(e, t) {
        var r = shapePool.newElement();
        r.c = e.c;
        var i, s = e._length,
          a, o, l, n, h, d, g = 0,
          c, v, _, u, S, p;
        for (i = 0; i < s; i += 1) a = e.v[i], l = e.o[i], o = e.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === o[0] && a[1] === o[1] ? (i === 0 || i === s - 1) && !e.c ? (r.setTripleAt(a[0], a[1], l[0], l[1], o[0], o[1], g), g += 1) : (i === 0 ? n = e.v[s - 1] : n = e.v[i - 1], h = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)), d = h ? Math.min(h / 2, t) / h : 0, S = a[0] + (n[0] - a[0]) * d, c = S, p = a[1] - (a[1] - n[1]) * d, v = p, _ = c - (c - a[0]) * roundCorner, u = v - (v - a[1]) * roundCorner, r.setTripleAt(c, v, _, u, S, p, g), g += 1, i === s - 1 ? n = e.v[0] : n = e.v[i + 1], h = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)), d = h ? Math.min(h / 2, t) / h : 0, _ = a[0] + (n[0] - a[0]) * d, c = _, u = a[1] + (n[1] - a[1]) * d, v = u, S = c - (c - a[0]) * roundCorner, p = v - (v - a[1]) * roundCorner, r.setTripleAt(c, v, _, u, S, p, g), g += 1) : (r.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], g), g += 1);
        return r
      }, RoundCornersModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, a, o = this.rd.v;
        if (o !== 0) {
          var l, n;
          for (r = 0; r < i; r += 1) {
            if (l = this.shapes[r], n = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
              for (n.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1) n.addShape(this.processPath(t[s], o));
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
        var a = Math.sqrt(i) / (2 * e);
        return [s - a, s + a]
      }

      function polynomialCoefficients(e, t, r, i) {
        return [-e + 3 * t - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
      }

      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1)
      }

      function PolynomialBezier(e, t, r, i, s) {
        s && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
        var a = polynomialCoefficients(e[0], t[0], r[0], i[0]),
          o = polynomialCoefficients(e[1], t[1], r[1], i[1]);
        this.a = [a[0], o[0]], this.b = [a[1], o[1]], this.c = [a[2], o[2]], this.d = [a[3], o[3]], this.points = [e, t, r, i]
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
          a = lerpPoint(r, i, e),
          o = lerpPoint(s, a, e);
        return [new PolynomialBezier(this.points[0], t, s, o, !0), new PolynomialBezier(o, a, i, this.points[3], !0)]
      };

      function extrema(e, t) {
        var r = e.points[0][t],
          i = e.points[e.points.length - 1][t];
        if (r > i) {
          var s = i;
          i = r, r = s
        }
        for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0; o < a.length; o += 1)
          if (a[o] > 0 && a[o] < 1) {
            var l = e.point(a[o])[t];
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

      function intersectsImpl(e, t, r, i, s, a) {
        if (boxIntersect(e, t)) {
          if (r >= a || e.width <= i && e.height <= i && t.width <= i && t.height <= i) {
            s.push([e.t, t.t]);
            return
          }
          var o = splitData(e),
            l = splitData(t);
          intersectsImpl(o[0], l[0], r + 1, i, s, a), intersectsImpl(o[0], l[1], r + 1, i, s, a), intersectsImpl(o[1], l[0], r + 1, i, s, a), intersectsImpl(o[1], l[1], r + 1, i, s, a)
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
          a = [t[0], t[1], 1],
          o = [r[0], r[1], 1],
          l = [i[0], i[1], 1],
          n = crossProduct(crossProduct(s, a), crossProduct(o, l));
        return floatZero(n[2]) ? null : [n[0] / n[2], n[1] / n[2]]
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

      function setPoint(e, t, r, i, s, a, o) {
        var l = r - Math.PI / 2,
          n = r + Math.PI / 2,
          h = t[0] + Math.cos(r) * i * s,
          d = t[1] - Math.sin(r) * i * s;
        e.setTripleAt(h, d, h + Math.cos(l) * a, d - Math.sin(l) * a, h + Math.cos(n) * o, d - Math.sin(n) * o, e.length())
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
          a = e.v[i],
          o = getPerpendicularVector(s, a);
        return Math.atan2(0, 1) - Math.atan2(o[1], o[0])
      }

      function zigZagCorner(e, t, r, i, s, a, o) {
        var l = getProjectingAngle(t, r),
          n = t.v[r % t._length],
          h = t.v[r === 0 ? t._length - 1 : r - 1],
          d = t.v[(r + 1) % t._length],
          g = a === 2 ? Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)) : 0,
          c = a === 2 ? Math.sqrt(Math.pow(n[0] - d[0], 2) + Math.pow(n[1] - d[1], 2)) : 0;
        setPoint(e, t.v[r % t._length], l, o, i, c / ((s + 1) * 2), g / ((s + 1) * 2))
      }

      function zigZagSegment(e, t, r, i, s, a) {
        for (var o = 0; o < i; o += 1) {
          var l = (o + 1) / (i + 1),
            n = s === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            h = t.normalAngle(l),
            d = t.point(l);
          setPoint(e, d, h, a, r, n / ((i + 1) * 2), n / ((i + 1) * 2)), a = -a
        }
        return a
      }
      ZigZagModifier.prototype.processPath = function(e, t, r, i) {
        var s = e._length,
          a = shapePool.newElement();
        if (a.c = e.c, e.c || (s -= 1), s === 0) return a;
        var o = -1,
          l = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(a, e, 0, t, r, i, o);
        for (var n = 0; n < s; n += 1) o = zigZagSegment(a, l, t, r, i, -o), n === s - 1 && !e.c ? l = null : l = PolynomialBezier.shapeSegment(e, (n + 1) % s), zigZagCorner(a, e, n + 1, t, r, i, o);
        return a
      }, ZigZagModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, a, o = this.amplitude.v,
          l = Math.max(0, Math.round(this.frequency.v)),
          n = this.pointsType.v;
        if (o !== 0) {
          var h, d;
          for (r = 0; r < i; r += 1) {
            if (h = this.shapes[r], d = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !e))
              for (d.releaseShapes(), h.shape._mdf = !0, t = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) d.addShape(this.processPath(t[s], o, l, n));
            h.shape.paths = h.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };

      function linearOffset(e, t, r) {
        var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, i, r), polarOffset(t, i, r)]
      }

      function offsetSegment(e, t) {
        var r, i, s, a, o, l, n;
        n = linearOffset(e.points[0], e.points[1], t), r = n[0], i = n[1], n = linearOffset(e.points[1], e.points[2], t), s = n[0], a = n[1], n = linearOffset(e.points[2], e.points[3], t), o = n[0], l = n[1];
        var h = lineIntersection(r, i, s, a);
        h === null && (h = i);
        var d = lineIntersection(o, l, s, a);
        return d === null && (d = o), new PolynomialBezier(r, h, d, l)
      }

      function joinLines(e, t, r, i, s) {
        var a = t.points[3],
          o = r.points[0];
        if (i === 3 || pointEqual(a, o)) return a;
        if (i === 2) {
          var l = -t.tangentAngle(1),
            n = -r.tangentAngle(0) + Math.PI,
            h = lineIntersection(a, polarOffset(a, l + Math.PI / 2, 100), o, polarOffset(o, l + Math.PI / 2, 100)),
            d = h ? pointDistance(h, a) : pointDistance(a, o) / 2,
            g = polarOffset(a, l, 2 * d * roundCorner);
          return e.setXYAt(g[0], g[1], "o", e.length() - 1), g = polarOffset(o, n, 2 * d * roundCorner), e.setTripleAt(o[0], o[1], o[0], o[1], g[0], g[1], e.length()), o
        }
        var c = pointEqual(a, t.points[2]) ? t.points[0] : t.points[2],
          v = pointEqual(o, r.points[1]) ? r.points[3] : r.points[1],
          _ = lineIntersection(c, a, o, v);
        return _ && pointDistance(_, a) < s ? (e.setTripleAt(_[0], _[1], _[0], _[1], _[0], _[1], e.length()), _) : a
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
          i, s, a, o;
        if (r.length === 0) return [offsetSegment(e, t)];
        if (r.length === 1 || floatEqual(r[1], 1)) return a = e.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, t), offsetSegment(s, t)];
        a = e.split(r[0]), i = a[0];
        var l = (r[1] - r[0]) / (1 - r[0]);
        return a = a[1].split(l), o = a[0], s = a[1], [offsetSegment(i, t), offsetSegment(o, t), offsetSegment(s, t)]
      }

      function OffsetPathModifier() {}
      extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
      }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
        var s = shapePool.newElement();
        s.c = e.c;
        var a = e.length();
        e.c || (a -= 1);
        var o, l, n, h = [];
        for (o = 0; o < a; o += 1) n = PolynomialBezier.shapeSegment(e, o), h.push(offsetSegmentSplit(n, t));
        if (!e.c)
          for (o = a - 1; o >= 0; o -= 1) n = PolynomialBezier.shapeSegmentInverted(e, o), h.push(offsetSegmentSplit(n, t));
        h = pruneIntersections(h);
        var d = null,
          g = null;
        for (o = 0; o < h.length; o += 1) {
          var c = h[o];
          for (g && (d = joinLines(s, g, c[0], r, i)), g = c[c.length - 1], l = 0; l < c.length; l += 1) n = c[l], d && pointEqual(n.points[0], d) ? s.setXYAt(n.points[1][0], n.points[1][1], "o", s.length() - 1) : s.setTripleAt(n.points[0][0], n.points[0][1], n.points[1][0], n.points[1][1], n.points[0][0], n.points[0][1], s.length()), s.setTripleAt(n.points[3][0], n.points[3][1], n.points[3][0], n.points[3][1], n.points[2][0], n.points[2][1], s.length()), d = n.points[3]
        }
        return h.length && joinLines(s, g, h[0][0], r, i), s
      }, OffsetPathModifier.prototype.processShapes = function(e) {
        var t, r, i = this.shapes.length,
          s, a, o = this.amount.v,
          l = this.miterLimit.v,
          n = this.lineJoin;
        if (o !== 0) {
          var h, d;
          for (r = 0; r < i; r += 1) {
            if (h = this.shapes[r], d = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !e))
              for (d.releaseShapes(), h.shape._mdf = !0, t = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) d.addShape(this.processPath(t[s], o, n, l));
            h.shape.paths = h.localShapeCollection
          }
        }
        this.dynamicProperties.length || (this._mdf = !1)
      };

      function getFontProperties(e) {
        for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", s = t.length, a, o = 0; o < s; o += 1) switch (a = t[o].toLowerCase(), a) {
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
      var FontManager = function() {
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
          a = 917601,
          o = 917626,
          l = 65039,
          n = 8205,
          h = 127462,
          d = 127487,
          g = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

        function c(C) {
          var k = C.split(","),
            b, x = k.length,
            V = [];
          for (b = 0; b < x; b += 1) k[b] !== "sans-serif" && k[b] !== "monospace" && V.push(k[b]);
          return V.join(",")
        }

        function v(C, k) {
          var b = createTag("span");
          b.setAttribute("aria-hidden", !0), b.style.fontFamily = k;
          var x = createTag("span");
          x.innerText = "giItT1WQy@!-/#", b.style.position = "absolute", b.style.left = "-10000px", b.style.top = "-10000px", b.style.fontSize = "300px", b.style.fontVariant = "normal", b.style.fontStyle = "normal", b.style.fontWeight = "normal", b.style.letterSpacing = "0", b.appendChild(x), document.body.appendChild(b);
          var V = x.offsetWidth;
          return x.style.fontFamily = c(C) + ", " + k, {
            node: x,
            w: V,
            parent: b
          }
        }

        function _() {
          var C, k = this.fonts.length,
            b, x, V = k;
          for (C = 0; C < k; C += 1) this.fonts[C].loaded ? V -= 1 : this.fonts[C].fOrigin === "n" || this.fonts[C].origin === 0 ? this.fonts[C].loaded = !0 : (b = this.fonts[C].monoCase.node, x = this.fonts[C].monoCase.w, b.offsetWidth !== x ? (V -= 1, this.fonts[C].loaded = !0) : (b = this.fonts[C].sansCase.node, x = this.fonts[C].sansCase.w, b.offsetWidth !== x && (V -= 1, this.fonts[C].loaded = !0)), this.fonts[C].loaded && (this.fonts[C].sansCase.parent.parentNode.removeChild(this.fonts[C].sansCase.parent), this.fonts[C].monoCase.parent.parentNode.removeChild(this.fonts[C].monoCase.parent)));
          V !== 0 && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
        }

        function u(C, k) {
          var b = document.body && k ? "svg" : "canvas",
            x, V = getFontProperties(C);
          if (b === "svg") {
            var M = createNS("text");
            M.style.fontSize = "100px", M.setAttribute("font-family", C.fFamily), M.setAttribute("font-style", V.style), M.setAttribute("font-weight", V.weight), M.textContent = "1", C.fClass ? (M.style.fontFamily = "inherit", M.setAttribute("class", C.fClass)) : M.style.fontFamily = C.fFamily, k.appendChild(M), x = M
          } else {
            var D = new OffscreenCanvas(500, 500).getContext("2d");
            D.font = V.style + " " + V.weight + " 100px " + C.fFamily, x = D
          }

          function O(z) {
            return b === "svg" ? (x.textContent = z, x.getComputedTextLength()) : x.measureText(z).width
          }
          return {
            measureText: O
          }
        }

        function S(C, k) {
          if (!C) {
            this.isLoaded = !0;
            return
          }
          if (this.chars) {
            this.isLoaded = !0, this.fonts = C.list;
            return
          }
          if (!document.body) {
            this.isLoaded = !0, C.list.forEach(function(Y) {
              Y.helper = u(Y), Y.cache = {}
            }), this.fonts = C.list;
            return
          }
          var b = C.list,
            x, V = b.length,
            M = V;
          for (x = 0; x < V; x += 1) {
            var D = !0,
              O, z;
            if (b[x].loaded = !1, b[x].monoCase = v(b[x].fFamily, "monospace"), b[x].sansCase = v(b[x].fFamily, "sans-serif"), !b[x].fPath) b[x].loaded = !0, M -= 1;
            else if (b[x].fOrigin === "p" || b[x].origin === 3) {
              if (O = document.querySelectorAll('style[f-forigin="p"][f-family="' + b[x].fFamily + '"], style[f-origin="3"][f-family="' + b[x].fFamily + '"]'), O.length > 0 && (D = !1), D) {
                var G = createTag("style");
                G.setAttribute("f-forigin", b[x].fOrigin), G.setAttribute("f-origin", b[x].origin), G.setAttribute("f-family", b[x].fFamily), G.type = "text/css", G.innerText = "@font-face {font-family: " + b[x].fFamily + "; font-style: normal; src: url('" + b[x].fPath + "');}", k.appendChild(G)
              }
            } else if (b[x].fOrigin === "g" || b[x].origin === 1) {
              for (O = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), z = 0; z < O.length; z += 1) O[z].href.indexOf(b[x].fPath) !== -1 && (D = !1);
              if (D) {
                var H = createTag("link");
                H.setAttribute("f-forigin", b[x].fOrigin), H.setAttribute("f-origin", b[x].origin), H.type = "text/css", H.rel = "stylesheet", H.href = b[x].fPath, document.body.appendChild(H)
              }
            } else if (b[x].fOrigin === "t" || b[x].origin === 2) {
              for (O = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), z = 0; z < O.length; z += 1) b[x].fPath === O[z].src && (D = !1);
              if (D) {
                var q = createTag("link");
                q.setAttribute("f-forigin", b[x].fOrigin), q.setAttribute("f-origin", b[x].origin), q.setAttribute("rel", "stylesheet"), q.setAttribute("href", b[x].fPath), k.appendChild(q)
              }
            }
            b[x].helper = u(b[x], k), b[x].cache = {}, this.fonts.push(b[x])
          }
          M === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
        }

        function p(C) {
          if (C) {
            this.chars || (this.chars = []);
            var k, b = C.length,
              x, V = this.chars.length,
              M;
            for (k = 0; k < b; k += 1) {
              for (x = 0, M = !1; x < V;) this.chars[x].style === C[k].style && this.chars[x].fFamily === C[k].fFamily && this.chars[x].ch === C[k].ch && (M = !0), x += 1;
              M || (this.chars.push(C[k]), V += 1)
            }
          }
        }

        function m(C, k, b) {
          for (var x = 0, V = this.chars.length; x < V;) {
            if (this.chars[x].ch === C && this.chars[x].style === k && this.chars[x].fFamily === b) return this.chars[x];
            x += 1
          }
          return (typeof C == "string" && C.charCodeAt(0) !== 13 || !C) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", C, k, b)), t
        }

        function f(C, k, b) {
          var x = this.getFontByName(k),
            V = C;
          if (!x.cache[V]) {
            var M = x.helper;
            if (C === " ") {
              var D = M.measureText("|" + C + "|"),
                O = M.measureText("||");
              x.cache[V] = (D - O) / 100
            } else x.cache[V] = M.measureText(C) / 100
          }
          return x.cache[V] * b
        }

        function y(C) {
          for (var k = 0, b = this.fonts.length; k < b;) {
            if (this.fonts[k].fName === C) return this.fonts[k];
            k += 1
          }
          return this.fonts[0]
        }

        function w(C) {
          var k = 0,
            b = C.charCodeAt(0);
          if (b >= 55296 && b <= 56319) {
            var x = C.charCodeAt(1);
            x >= 56320 && x <= 57343 && (k = (b - 55296) * 1024 + x - 56320 + 65536)
          }
          return k
        }

        function E(C, k) {
          var b = C.toString(16) + k.toString(16);
          return g.indexOf(b) !== -1
        }

        function P(C) {
          return C === n
        }

        function T(C) {
          return C === l
        }

        function A(C) {
          var k = w(C);
          return k >= h && k <= d
        }

        function $(C) {
          return A(C.substr(0, 2)) && A(C.substr(2, 2))
        }

        function I(C) {
          return r.indexOf(C) !== -1
        }

        function B(C, k) {
          var b = w(C.substr(k, 2));
          if (b !== i) return !1;
          var x = 0;
          for (k += 2; x < 5;) {
            if (b = w(C.substr(k, 2)), b < a || b > o) return !1;
            x += 1, k += 2
          }
          return w(C.substr(k, 2)) === s
        }

        function L() {
          this.isLoaded = !0
        }
        var N = function() {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        N.isModifier = E, N.isZeroWidthJoiner = P, N.isFlagEmoji = $, N.isRegionalCode = A, N.isCombinedCharacter = I, N.isRegionalFlag = B, N.isVariationSelector = T, N.BLACK_FLAG_CODE_POINT = i;
        var F = {
          addChars: p,
          addFonts: S,
          getCharData: m,
          getFontByName: y,
          measureText: f,
          checkLoadedFonts: _,
          setIsLoaded: L
        };
        return N.prototype = F, N
      }();

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
      var getBlendMode = function() {
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
      }();

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
          a;
        for (i = 0; i < s; i += 1) a = new GroupEffect(r[i], t), this.effectElements.push(a)
      }

      function GroupEffect(e, t) {
        this.init(e, t)
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
        this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
        var r, i = this.data.ef.length,
          s, a = this.data.ef;
        for (r = 0; r < i; r += 1) {
          switch (s = null, a[r].ty) {
            case 0:
              s = new SliderEffect(a[r], t, this);
              break;
            case 1:
              s = new AngleEffect(a[r], t, this);
              break;
            case 2:
              s = new ColorEffect(a[r], t, this);
              break;
            case 3:
              s = new PointEffect(a[r], t, this);
              break;
            case 4:
            case 7:
              s = new CheckboxEffect(a[r], t, this);
              break;
            case 10:
              s = new LayerIndexEffect(a[r], t, this);
              break;
            case 11:
              s = new MaskIndexEffect(a[r], t, this);
              break;
            case 5:
              s = new EffectsManager(a[r], t);
              break;
            default:
              s = new NoValueEffect(a[r]);
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
              a = t("text"),
              o = t("comp");
            this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var l = i.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = o(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
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
        for (var i = this.elements, s = this.layers, a = 0, o = s.length; a < o;) s[a].ind == t && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(e)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(e, s[a].parent, r) : e.setHierarchy(r))), a += 1
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
          }
          this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
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
              var a = this.finalTransform.localOpacity;
              for (t = 0; t < r; t += 1) a *= this.localTransforms[t].opacity * .01;
              this.finalTransform.localOpacity = a
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
          var a, o = r.length,
            l;
          for (a = 0; a < o; a += 1) l = r[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - l[0], t[1] - l[1], 0];
          return t
        },
        mHelper: new Matrix
      };

      function MaskElement(e, t, r) {
        this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var i = this.globalData.defs,
          s, a = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(a), this.solidPath = "";
        var o, l = this.masksProperties,
          n = 0,
          h = [],
          d, g, c = createElementID(),
          v, _, u, S, p = "clipPath",
          m = "clip-path";
        for (s = 0; s < a; s += 1)
          if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (p = "mask", m = "mask"), (l[s].mode === "s" || l[s].mode === "i") && n === 0 ? (v = createNS("rect"), v.setAttribute("fill", "#ffffff"), v.setAttribute("width", this.element.comp.data.w || 0), v.setAttribute("height", this.element.comp.data.h || 0), h.push(v)) : v = null, o = createNS("path"), l[s].mode === "n") this.viewData[s] = {
            op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            elem: o,
            lastPath: ""
          }, i.appendChild(o);
          else {
            n += 1, o.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), o.setAttribute("clip-rule", "nonzero");
            var f;
            if (l[s].x.k !== 0 ? (p = "mask", m = "mask", S = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), f = createElementID(), _ = createNS("filter"), _.setAttribute("id", f), u = createNS("feMorphology"), u.setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), _.appendChild(u), i.appendChild(_), o.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (u = null, S = null), this.storedData[s] = {
                elem: o,
                x: S,
                expan: u,
                lastPath: "",
                lastOperator: "",
                filterId: f,
                lastRadius: 0
              }, l[s].mode === "i") {
              g = h.length;
              var y = createNS("g");
              for (d = 0; d < g; d += 1) y.appendChild(h[d]);
              var w = createNS("mask");
              w.setAttribute("mask-type", "alpha"), w.setAttribute("id", c + "_" + n), w.appendChild(o), i.appendChild(w), y.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + n + ")"), h.length = 0, h.push(y)
            } else h.push(o);
            l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
              elem: o,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
              invRect: v
            }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s])
          } for (this.maskElement = createNS(p), a = h.length, s = 0; s < a; s += 1) this.maskElement.appendChild(h[s]);
        n > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + c + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
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
          s, a;
        for (a = t._length, s = 1; s < a; s += 1) i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[s][0] + "," + t.i[s][1] + " " + t.v[s][0] + "," + t.v[s][1];
        if (t.c && a > 1 && (i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== i) {
          var o = "";
          r.elem && (t.c && (o = e.inv ? this.solidPath + i : i), r.elem.setAttribute("d", o)), r.lastPath = i
        }
      }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
      };
      var filtersFactory = function() {
          var e = {};
          e.createFilter = t, e.createAlphaToLuminanceFilter = r;

          function t(i, s) {
            var a = createNS("filter");
            return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
          }

          function r() {
            var i = createNS("feColorMatrix");
            return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
          }
          return e
        }(),
        featureSupport = function() {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        }(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

      function SVGEffects(e) {
        var t, r = "SourceGraphic",
          i = e.data.ef ? e.data.ef.length : 0,
          s = createElementID(),
          a = filtersFactory.createFilter(s, !0),
          o = 0;
        this.filters = [];
        var l;
        for (t = 0; t < i; t += 1) {
          l = null;
          var n = e.data.ef[t].ty;
          if (registeredEffects$1[n]) {
            var h = registeredEffects$1[n].effect;
            l = new h(a, e.effectsManager.effectElements[t], e, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[n].countsAsEffect && (o += 1)
          }
          l && this.filters.push(l)
        }
        o && (e.globalData.defs.appendChild(a), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && e.addRenderableComponent(this)
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
            var a = createElementID();
            if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
              var o = createNS("g");
              o.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), o.appendChild(this.layerElement), this.transformedElement = o, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
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
              i, s, a, o;
            if (t === 1 || t === 3) {
              var l = createNS("mask");
              l.setAttribute("id", r), l.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(a), this.globalData.defs.appendChild(l), !featureSupport.maskType && t === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), o = createNS("g"), o.appendChild(a), l.appendChild(o), o.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
            } else if (t === 2) {
              var n = createNS("mask");
              n.setAttribute("id", r), n.setAttribute("mask-type", "alpha");
              var h = createNS("g");
              n.appendChild(h), i = createElementID(), s = filtersFactory.createFilter(i);
              var d = createNS("feComponentTransfer");
              d.setAttribute("in", "SourceGraphic"), s.appendChild(d);
              var g = createNS("feFuncA");
              g.setAttribute("type", "table"), g.setAttribute("tableValues", "1.0 0.0"), d.appendChild(g), this.globalData.defs.appendChild(s);
              var c = createNS("rect");
              c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), h.appendChild(c), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(a), featureSupport.maskType || (n.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), o = createNS("g"), h.appendChild(c), o.appendChild(this.layerElement), h.appendChild(o)), this.globalData.defs.appendChild(n)
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
        var s, a = t.length || 0,
          o;
        for (s = 0; s < a; s += 1) o = PropertyFactory.getProp(e, t[s].v, 0, 0, this), this.k = o.k || this.k, this.dataProps[s] = {
          n: t[s].n,
          p: o
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
          a, o, l;
        for (l = t.g.p * 4, o = 0; o < l; o += 4) a = createNS("stop"), i.appendChild(a), s.push(a);
        e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var r, i, s, a = createNS("mask"),
            o = createNS("path");
          a.appendChild(o);
          var l = createElementID(),
            n = createElementID();
          a.setAttribute("id", n);
          var h = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          h.setAttribute("id", l), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), s = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
          var d = this.stops;
          for (i = e.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), d.push(r);
          o.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), e.ty === "gs" && (o.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)), this.of = h, this.ms = a, this.ost = d, this.maskId = n, t.msElem = o
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
          var a = t.o,
            o = t.i,
            l = t.v,
            n, h = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
          for (n = 1; n < r; n += 1) h += " C" + s.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + s.applyToPointStringified(o[n][0], o[n][1]) + " " + s.applyToPointStringified(l[n][0], l[n][1]);
          return i && r && (h += " C" + s.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), h += "z"), h
        },
        SVGElementsRenderer = function() {
          var e = new Matrix,
            t = new Matrix,
            r = {
              createRenderFunction: i
            };

          function i(g) {
            switch (g.ty) {
              case "fl":
                return l;
              case "gf":
                return h;
              case "gs":
                return n;
              case "st":
                return d;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return o;
              case "tr":
                return s;
              case "no":
                return a;
              default:
                return null
            }
          }

          function s(g, c, v) {
            (v || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (v || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS())
          }

          function a() {}

          function o(g, c, v) {
            var _, u, S, p, m, f, y = c.styles.length,
              w = c.lvl,
              E, P, T, A;
            for (f = 0; f < y; f += 1) {
              if (p = c.sh._mdf || v, c.styles[f].lvl < w) {
                for (P = t.reset(), T = w - c.styles[f].lvl, A = c.transformers.length - 1; !p && T > 0;) p = c.transformers[A].mProps._mdf || p, T -= 1, A -= 1;
                if (p)
                  for (T = w - c.styles[f].lvl, A = c.transformers.length - 1; T > 0;) P.multiply(c.transformers[A].mProps.v), T -= 1, A -= 1
              } else P = e;
              if (E = c.sh.paths, u = E._length, p) {
                for (S = "", _ = 0; _ < u; _ += 1) m = E.shapes[_], m && m._length && (S += buildShapeString(m, m._length, m.c, P));
                c.caches[f] = S
              } else S = c.caches[f];
              c.styles[f].d += g.hd === !0 ? "" : S, c.styles[f]._mdf = p || c.styles[f]._mdf
            }
          }

          function l(g, c, v) {
            var _ = c.style;
            (c.c._mdf || v) && _.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || v) && _.pElem.setAttribute("fill-opacity", c.o.v)
          }

          function n(g, c, v) {
            h(g, c, v), d(g, c, v)
          }

          function h(g, c, v) {
            var _ = c.gf,
              u = c.g._hasOpacity,
              S = c.s.v,
              p = c.e.v;
            if (c.o._mdf || v) {
              var m = g.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              c.style.pElem.setAttribute(m, c.o.v)
            }
            if (c.s._mdf || v) {
              var f = g.t === 1 ? "x1" : "cx",
                y = f === "x1" ? "y1" : "cy";
              _.setAttribute(f, S[0]), _.setAttribute(y, S[1]), u && !c.g._collapsable && (c.of.setAttribute(f, S[0]), c.of.setAttribute(y, S[1]))
            }
            var w, E, P, T;
            if (c.g._cmdf || v) {
              w = c.cst;
              var A = c.g.c;
              for (P = w.length, E = 0; E < P; E += 1) T = w[E], T.setAttribute("offset", A[E * 4] + "%"), T.setAttribute("stop-color", "rgb(" + A[E * 4 + 1] + "," + A[E * 4 + 2] + "," + A[E * 4 + 3] + ")")
            }
            if (u && (c.g._omdf || v)) {
              var $ = c.g.o;
              for (c.g._collapsable ? w = c.cst : w = c.ost, P = w.length, E = 0; E < P; E += 1) T = w[E], c.g._collapsable || T.setAttribute("offset", $[E * 2] + "%"), T.setAttribute("stop-opacity", $[E * 2 + 1])
            }
            if (g.t === 1)(c.e._mdf || v) && (_.setAttribute("x2", p[0]), _.setAttribute("y2", p[1]), u && !c.g._collapsable && (c.of.setAttribute("x2", p[0]), c.of.setAttribute("y2", p[1])));
            else {
              var I;
              if ((c.s._mdf || c.e._mdf || v) && (I = Math.sqrt(Math.pow(S[0] - p[0], 2) + Math.pow(S[1] - p[1], 2)), _.setAttribute("r", I), u && !c.g._collapsable && c.of.setAttribute("r", I)), c.e._mdf || c.h._mdf || c.a._mdf || v) {
                I || (I = Math.sqrt(Math.pow(S[0] - p[0], 2) + Math.pow(S[1] - p[1], 2)));
                var B = Math.atan2(p[1] - S[1], p[0] - S[0]),
                  L = c.h.v;
                L >= 1 ? L = .99 : L <= -1 && (L = -.99);
                var N = I * L,
                  F = Math.cos(B + c.a.v) * N + S[0],
                  C = Math.sin(B + c.a.v) * N + S[1];
                _.setAttribute("fx", F), _.setAttribute("fy", C), u && !c.g._collapsable && (c.of.setAttribute("fx", F), c.of.setAttribute("fy", C))
              }
            }
          }

          function d(g, c, v) {
            var _ = c.style,
              u = c.d;
            u && (u._mdf || v) && u.dashStr && (_.pElem.setAttribute("stroke-dasharray", u.dashStr), _.pElem.setAttribute("stroke-dashoffset", u.dashoffset[0])), c.c && (c.c._mdf || v) && _.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || v) && _.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || v) && (_.pElem.setAttribute("stroke-width", c.w.v), _.msElem && _.msElem.setAttribute("stroke-width", c.w.v))
          }
          return r
        }();

      function SVGShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
      }, SVGShapeElement.prototype.filterUniqueShapes = function() {
        var e, t = this.shapes.length,
          r, i, s = this.stylesList.length,
          a, o = [],
          l = !1;
        for (i = 0; i < s; i += 1) {
          for (a = this.stylesList[i], l = !1, o.length = 0, e = 0; e < t; e += 1) r = this.shapes[e], r.styles.indexOf(a) !== -1 && (o.push(r), l = r._isAnimated || l);
          o.length > 1 && l && this.setShapesAsAnimated(o)
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
          var a = e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
          r = new a(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
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
          a = new SVGShapeData(t, r, s);
        return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(e, a), a
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
        for (r = 0; r < i; r += 1) this.stylesList[r].closed || t.push(this.stylesList[r])
      }, SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var e, t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers()
      }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, s, a, o) {
        var l = [].concat(a),
          n, h = e.length - 1,
          d, g, c = [],
          v = [],
          _, u, S;
        for (n = h; n >= 0; n -= 1) {
          if (S = this.searchProcessedElement(e[n]), S ? t[n] = r[S - 1] : e[n]._render = o, e[n].ty === "fl" || e[n].ty === "st" || e[n].ty === "gf" || e[n].ty === "gs" || e[n].ty === "no") S ? t[n].style.closed = !1 : t[n] = this.createStyleElement(e[n], s), e[n]._render && t[n].style.pElem.parentNode !== i && i.appendChild(t[n].style.pElem), c.push(t[n].style);
          else if (e[n].ty === "gr") {
            if (!S) t[n] = this.createGroupElement(e[n]);
            else
              for (g = t[n].it.length, d = 0; d < g; d += 1) t[n].prevViewData[d] = t[n].it[d];
            this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, t[n].gr, s + 1, l, o), e[n]._render && t[n].gr.parentNode !== i && i.appendChild(t[n].gr)
          } else e[n].ty === "tr" ? (S || (t[n] = this.createTransformElement(e[n], i)), _ = t[n].transform, l.push(_)) : e[n].ty === "sh" || e[n].ty === "rc" || e[n].ty === "el" || e[n].ty === "sr" ? (S || (t[n] = this.createShapeElement(e[n], l, s)), this.setElementStyles(t[n])) : e[n].ty === "tm" || e[n].ty === "rd" || e[n].ty === "ms" || e[n].ty === "pb" || e[n].ty === "zz" || e[n].ty === "op" ? (S ? (u = t[n], u.closed = !1) : (u = ShapeModifiers.getModifier(e[n].ty), u.init(this, e[n]), t[n] = u, this.shapeModifiers.push(u)), v.push(u)) : e[n].ty === "rp" && (S ? (u = t[n], u.closed = !0) : (u = ShapeModifiers.getModifier(e[n].ty), t[n] = u, u.init(this, e, n, t), this.shapeModifiers.push(u), o = !1), v.push(u));
          this.addProcessedElement(e[n], n + 1)
        }
        for (h = c.length, n = 0; n < h; n += 1) c[n].closed = !0;
        for (h = v.length, n = 0; n < h; n += 1) v[n].closed = !0
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

      function LetterProps(e, t, r, i, s, a) {
        this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
          o: !0,
          sw: !!t,
          sc: !!r,
          fc: !!i,
          m: !0,
          p: !0
        }
      }
      LetterProps.prototype.update = function(e, t, r, i, s, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
        var o = !1;
        return this.o !== e && (this.o = e, this._mdf.o = !0, o = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, o = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, o = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, o = !0), this.m !== s && (this.m = s, this._mdf.m = !0, o = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, o = !0), o
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
            a = e || this.data.d.k[this.keysIndex].s;
          for (i = 0; i < s; i += 1) r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
          t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
        }
      }, TextProperty.prototype.getKeyframeValue = function() {
        for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
      }, TextProperty.prototype.buildFinalText = function(e) {
        for (var t = [], r = 0, i = e.length, s, a, o = !1, l = !1, n = ""; r < i;) o = l, l = !1, s = e.charCodeAt(r), n = e.charAt(r), FontManager.isCombinedCharacter(s) ? o = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(e, r) ? n = e.substr(r, 14) : (a = e.charCodeAt(r + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (n = e.substr(r, 2), o = !0) : FontManager.isFlagEmoji(e.substr(r, 4)) ? n = e.substr(r, 4) : n = e.substr(r, 2))) : s > 56319 ? (a = e.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (o = !0)) : FontManager.isZeroWidthJoiner(s) && (o = !0, l = !0), o ? (t[t.length - 1] += n, o = !1) : t.push(n), r += n.length;
        return t
      }, TextProperty.prototype.completeTextData = function(e) {
        e.__complete = !0;
        var t = this.elem.globalData.fontManager,
          r = this.data,
          i = [],
          s, a, o, l = 0,
          n, h = r.m.g,
          d = 0,
          g = 0,
          c = 0,
          v = [],
          _ = 0,
          u = 0,
          S, p, m = t.getFontByName(e.f),
          f, y = 0,
          w = getFontProperties(m);
        e.fWeight = w.weight, e.fStyle = w.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), a = e.finalText.length, e.finalLineHeight = e.lh;
        var E = e.tr / 1e3 * e.finalSize,
          P;
        if (e.sz)
          for (var T = !0, A = e.sz[0], $ = e.sz[1], I, B; T;) {
            B = this.buildFinalText(e.t), I = 0, _ = 0, a = B.length, E = e.tr / 1e3 * e.finalSize;
            var L = -1;
            for (s = 0; s < a; s += 1) P = B[s].charCodeAt(0), o = !1, B[s] === " " ? L = s : (P === 13 || P === 3) && (_ = 0, o = !0, I += e.finalLineHeight || e.finalSize * 1.2), t.chars ? (f = t.getCharData(B[s], m.fStyle, m.fFamily), y = o ? 0 : f.w * e.finalSize / 100) : y = t.measureText(B[s], e.f, e.finalSize), _ + y > A && B[s] !== " " ? (L === -1 ? a += 1 : s = L, I += e.finalLineHeight || e.finalSize * 1.2, B.splice(s, L === s ? 1 : 0, "\r"), L = -1, _ = 0) : (_ += y, _ += E);
            I += m.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && $ < I ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = B, a = e.finalText.length, T = !1)
          }
        _ = -E, y = 0;
        var N = 0,
          F;
        for (s = 0; s < a; s += 1)
          if (o = !1, F = e.finalText[s], P = F.charCodeAt(0), P === 13 || P === 3 ? (N = 0, v.push(_), u = _ > u ? _ : u, _ = -2 * E, n = "", o = !0, c += 1) : n = F, t.chars ? (f = t.getCharData(F, m.fStyle, t.getFontByName(e.f).fFamily), y = o ? 0 : f.w * e.finalSize / 100) : y = t.measureText(n, e.f, e.finalSize), F === " " ? N += y + E : (_ += y + E + N, N = 0), i.push({
              l: y,
              an: y,
              add: d,
              n: o,
              anIndexes: [],
              val: n,
              line: c,
              animatorJustifyOffset: 0
            }), h == 2) {
            if (d += y, n === "" || n === " " || s === a - 1) {
              for ((n === "" || n === " ") && (d -= y); g <= s;) i[g].an = d, i[g].ind = l, i[g].extra = y, g += 1;
              l += 1, d = 0
            }
          } else if (h == 3) {
          if (d += y, n === "" || s === a - 1) {
            for (n === "" && (d -= y); g <= s;) i[g].an = d, i[g].ind = l, i[g].extra = y, g += 1;
            d = 0, l += 1
          }
        } else i[l].ind = l, i[l].extra = 0, l += 1;
        if (e.l = i, u = _ > u ? _ : u, v.push(_), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
        else switch (e.boxWidth = u, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0
        }
        e.lineWidths = v;
        var C = r.a,
          k, b;
        p = C.length;
        var x, V, M = [];
        for (S = 0; S < p; S += 1) {
          for (k = C[S], k.a.sc && (e.strokeColorAnim = !0), k.a.sw && (e.strokeWidthAnim = !0), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (e.fillColorAnim = !0), V = 0, x = k.s.b, s = 0; s < a; s += 1) b = i[s], b.anIndexes[S] = V, (x == 1 && b.val !== "" || x == 2 && b.val !== "" && b.val !== " " || x == 3 && (b.n || b.val == " " || s == a - 1) || x == 4 && (b.n || s == a - 1)) && (k.s.rn === 1 && M.push(V), V += 1);
          r.a[S].s.totalChars = V;
          var D = -1,
            O;
          if (k.s.rn === 1)
            for (s = 0; s < a; s += 1) b = i[s], D != b.anIndexes[S] && (D = b.anIndexes[S], O = M.splice(Math.floor(Math.random() * M.length), 1)[0]), b.anIndexes[S] = O
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
      var TextSelectorProp = function() {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;

        function i(a, o) {
          this._currentTextLength = -1, this.k = !1, this.data = o, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, o.s || {
            k: 0
          }, 0, 0, this), "e" in o ? this.e = PropertyFactory.getProp(a, o.e, 0, 0, this) : this.e = {
            v: 100
          }, this.o = PropertyFactory.getProp(a, o.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(a, o.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(a, o.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(a, o.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(a, o.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        i.prototype = {
          getMult: function(o) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var l = 0,
              n = 0,
              h = 1,
              d = 1;
            this.ne.v > 0 ? l = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? h = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
            var g = BezierFactory.getBezierEasing(l, n, h, d).get,
              c = 0,
              v = this.finalS,
              _ = this.finalE,
              u = this.data.sh;
            if (u === 2) _ === v ? c = o >= _ ? 1 : 0 : c = e(0, t(.5 / (_ - v) + (o - v) / (_ - v), 1)), c = g(c);
            else if (u === 3) _ === v ? c = o >= _ ? 0 : 1 : c = 1 - e(0, t(.5 / (_ - v) + (o - v) / (_ - v), 1)), c = g(c);
            else if (u === 4) _ === v ? c = 0 : (c = e(0, t(.5 / (_ - v) + (o - v) / (_ - v), 1)), c < .5 ? c *= 2 : c = 1 - 2 * (c - .5)), c = g(c);
            else if (u === 5) {
              if (_ === v) c = 0;
              else {
                var S = _ - v;
                o = t(e(0, o + .5 - v), _ - v);
                var p = -S / 2 + o,
                  m = S / 2;
                c = Math.sqrt(1 - p * p / (m * m))
              }
              c = g(c)
            } else u === 6 ? (_ === v ? c = 0 : (o = t(e(0, o + .5 - v), _ - v), c = (1 + Math.cos(Math.PI + Math.PI * 2 * o / (_ - v))) / 2), c = g(c)) : (o >= r(v) && (o - v < 0 ? c = e(0, t(t(_, 1) - (v - o), 1)) : c = e(0, t(_ - o, 1))), c = g(c));
            if (this.sm.v !== 100) {
              var f = this.sm.v * .01;
              f === 0 && (f = 1e-8);
              var y = .5 - f * .5;
              c < y ? c = 0 : (c = (c - y) / f, c > 1 && (c = 1))
            }
            return c * this.a.v
          },
          getValue: function(o) {
            this.iterateDynamicProperties(), this._mdf = o || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, o && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              n = this.o.v / l,
              h = this.s.v / l + n,
              d = this.e.v / l + n;
            if (h > d) {
              var g = h;
              h = d, d = g
            }
            this.finalS = h, this.finalE = d
          }
        }, extendPrototype([DynamicPropertyContainer], i);

        function s(a, o, l) {
          return new i(a, o)
        }
        return {
          getTextSelectorProp: s
        }
      }();

      function TextAnimatorDataProperty(e, t, r) {
        var i = {
            propType: !1
          },
          s = PropertyFactory.getProp,
          a = t.a;
        this.a = {
          r: a.r ? s(e, a.r, 0, degToRads, r) : i,
          rx: a.rx ? s(e, a.rx, 0, degToRads, r) : i,
          ry: a.ry ? s(e, a.ry, 0, degToRads, r) : i,
          sk: a.sk ? s(e, a.sk, 0, degToRads, r) : i,
          sa: a.sa ? s(e, a.sa, 0, degToRads, r) : i,
          s: a.s ? s(e, a.s, 1, .01, r) : i,
          a: a.a ? s(e, a.a, 1, 0, r) : i,
          o: a.o ? s(e, a.o, 0, .01, r) : i,
          p: a.p ? s(e, a.p, 1, 0, r) : i,
          sw: a.sw ? s(e, a.sw, 0, 0, r) : i,
          sc: a.sc ? s(e, a.sc, 1, 0, r) : i,
          fc: a.fc ? s(e, a.fc, 1, 0, r) : i,
          fh: a.fh ? s(e, a.fh, 0, 0, r) : i,
          fs: a.fs ? s(e, a.fs, 0, .01, r) : i,
          fb: a.fb ? s(e, a.fb, 0, .01, r) : i,
          t: a.t ? s(e, a.t, 0, 0, r) : i
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
            a = this.mHelper,
            o = this._renderType,
            l = this.renderedLetters.length,
            n, h, d, g, c = e.l,
            v, _, u, S, p, m, f, y, w, E, P, T, A, $, I;
          if (this._hasMaskedPath) {
            if (I = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var B = I.v;
              this._pathData.r.v && (B = B.reverse()), v = {
                tLength: 0,
                segments: []
              }, g = B._length - 1;
              var L;
              for (T = 0, d = 0; d < g; d += 1) L = bez.buildBezierData(B.v[d], B.v[d + 1], [B.o[d][0] - B.v[d][0], B.o[d][1] - B.v[d][1]], [B.i[d + 1][0] - B.v[d + 1][0], B.i[d + 1][1] - B.v[d + 1][1]]), v.tLength += L.segmentLength, v.segments.push(L), T += L.segmentLength;
              d = g, I.v.c && (L = bez.buildBezierData(B.v[d], B.v[0], [B.o[d][0] - B.v[d][0], B.o[d][1] - B.v[d][1]], [B.i[0][0] - B.v[0][0], B.i[0][1] - B.v[0][1]]), v.tLength += L.segmentLength, v.segments.push(L), T += L.segmentLength), this._pathData.pi = v
            }
            if (v = this._pathData.pi, _ = this._pathData.f.v, f = 0, m = 1, S = 0, p = !0, E = v.segments, _ < 0 && I.v.c)
              for (v.tLength < Math.abs(_) && (_ = -Math.abs(_) % v.tLength), f = E.length - 1, w = E[f].points, m = w.length - 1; _ < 0;) _ += w[m].partialLength, m -= 1, m < 0 && (f -= 1, w = E[f].points, m = w.length - 1);
            w = E[f].points, y = w[m - 1], u = w[m], P = u.partialLength
          }
          g = c.length, n = 0, h = 0;
          var N = e.finalSize * 1.2 * .714,
            F = !0,
            C, k, b, x, V;
          x = i.length;
          var M, D = -1,
            O, z, G, H = _,
            q = f,
            Y = m,
            Q = -1,
            X, j, U, W, R, te, ae, re, ee = "",
            ie = this.defaultPropsArray,
            se;
          if (e.j === 2 || e.j === 1) {
            var Z = 0,
              ne = 0,
              oe = e.j === 2 ? -.5 : -1,
              K = 0,
              le = !0;
            for (d = 0; d < g; d += 1)
              if (c[d].n) {
                for (Z && (Z += ne); K < d;) c[K].animatorJustifyOffset = Z, K += 1;
                Z = 0, le = !0
              } else {
                for (b = 0; b < x; b += 1) C = i[b].a, C.t.propType && (le && e.j === 2 && (ne += C.t.v * oe), k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), M.length ? Z += C.t.v * M[0] * oe : Z += C.t.v * M * oe);
                le = !1
              } for (Z && (Z += ne); K < d;) c[K].animatorJustifyOffset = Z, K += 1
          }
          for (d = 0; d < g; d += 1) {
            if (a.reset(), X = 1, c[d].n) n = 0, h += e.yOffset, h += F ? 1 : 0, _ = H, F = !1, this._hasMaskedPath && (f = q, m = Y, w = E[f].points, y = w[m - 1], u = w[m], P = u.partialLength, S = 0), ee = "", re = "", te = "", se = "", ie = this.defaultPropsArray;
            else {
              if (this._hasMaskedPath) {
                if (Q !== c[d].line) {
                  switch (e.j) {
                    case 1:
                      _ += T - e.lineWidths[c[d].line];
                      break;
                    case 2:
                      _ += (T - e.lineWidths[c[d].line]) / 2;
                      break
                  }
                  Q = c[d].line
                }
                D !== c[d].ind && (c[D] && (_ += c[D].extra), _ += c[d].an / 2, D = c[d].ind), _ += r[0] * c[d].an * .005;
                var J = 0;
                for (b = 0; b < x; b += 1) C = i[b].a, C.p.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), M.length ? J += C.p.v[0] * M[0] : J += C.p.v[0] * M), C.a.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), M.length ? J += C.a.v[0] * M[0] : J += C.a.v[0] * M);
                for (p = !0, this._pathData.a.v && (_ = c[0].an * .5 + (T - this._pathData.f.v - c[0].an * .5 - c[c.length - 1].an * .5) * D / (g - 1), _ += this._pathData.f.v); p;) S + P >= _ + J || !w ? (A = (_ + J - S) / u.partialLength, z = y.point[0] + (u.point[0] - y.point[0]) * A, G = y.point[1] + (u.point[1] - y.point[1]) * A, a.translate(-r[0] * c[d].an * .005, -(r[1] * N) * .01), p = !1) : w && (S += u.partialLength, m += 1, m >= w.length && (m = 0, f += 1, E[f] ? w = E[f].points : I.v.c ? (m = 0, f = 0, w = E[f].points) : (S -= u.partialLength, w = null)), w && (y = u, u = w[m], P = u.partialLength));
                O = c[d].an / 2 - c[d].add, a.translate(-O, 0, 0)
              } else O = c[d].an / 2 - c[d].add, a.translate(-O, 0, 0), a.translate(-r[0] * c[d].an * .005, -r[1] * N * .01, 0);
              for (b = 0; b < x; b += 1) C = i[b].a, C.t.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), (n !== 0 || e.j !== 0) && (this._hasMaskedPath ? M.length ? _ += C.t.v * M[0] : _ += C.t.v * M : M.length ? n += C.t.v * M[0] : n += C.t.v * M));
              for (e.strokeWidthAnim && (U = e.sw || 0), e.strokeColorAnim && (e.sc ? j = [e.sc[0], e.sc[1], e.sc[2]] : j = [0, 0, 0]), e.fillColorAnim && e.fc && (W = [e.fc[0], e.fc[1], e.fc[2]]), b = 0; b < x; b += 1) C = i[b].a, C.a.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), M.length ? a.translate(-C.a.v[0] * M[0], -C.a.v[1] * M[1], C.a.v[2] * M[2]) : a.translate(-C.a.v[0] * M, -C.a.v[1] * M, C.a.v[2] * M));
              for (b = 0; b < x; b += 1) C = i[b].a, C.s.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), M.length ? a.scale(1 + (C.s.v[0] - 1) * M[0], 1 + (C.s.v[1] - 1) * M[1], 1) : a.scale(1 + (C.s.v[0] - 1) * M, 1 + (C.s.v[1] - 1) * M, 1));
              for (b = 0; b < x; b += 1) {
                if (C = i[b].a, k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), C.sk.propType && (M.length ? a.skewFromAxis(-C.sk.v * M[0], C.sa.v * M[1]) : a.skewFromAxis(-C.sk.v * M, C.sa.v * M)), C.r.propType && (M.length ? a.rotateZ(-C.r.v * M[2]) : a.rotateZ(-C.r.v * M)), C.ry.propType && (M.length ? a.rotateY(C.ry.v * M[1]) : a.rotateY(C.ry.v * M)), C.rx.propType && (M.length ? a.rotateX(C.rx.v * M[0]) : a.rotateX(C.rx.v * M)), C.o.propType && (M.length ? X += (C.o.v * M[0] - X) * M[0] : X += (C.o.v * M - X) * M), e.strokeWidthAnim && C.sw.propType && (M.length ? U += C.sw.v * M[0] : U += C.sw.v * M), e.strokeColorAnim && C.sc.propType)
                  for (R = 0; R < 3; R += 1) M.length ? j[R] += (C.sc.v[R] - j[R]) * M[0] : j[R] += (C.sc.v[R] - j[R]) * M;
                if (e.fillColorAnim && e.fc) {
                  if (C.fc.propType)
                    for (R = 0; R < 3; R += 1) M.length ? W[R] += (C.fc.v[R] - W[R]) * M[0] : W[R] += (C.fc.v[R] - W[R]) * M;
                  C.fh.propType && (M.length ? W = addHueToRGB(W, C.fh.v * M[0]) : W = addHueToRGB(W, C.fh.v * M)), C.fs.propType && (M.length ? W = addSaturationToRGB(W, C.fs.v * M[0]) : W = addSaturationToRGB(W, C.fs.v * M)), C.fb.propType && (M.length ? W = addBrightnessToRGB(W, C.fb.v * M[0]) : W = addBrightnessToRGB(W, C.fb.v * M))
                }
              }
              for (b = 0; b < x; b += 1) C = i[b].a, C.p.propType && (k = i[b].s, M = k.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), this._hasMaskedPath ? M.length ? a.translate(0, C.p.v[1] * M[0], -C.p.v[2] * M[1]) : a.translate(0, C.p.v[1] * M, -C.p.v[2] * M) : M.length ? a.translate(C.p.v[0] * M[0], C.p.v[1] * M[1], -C.p.v[2] * M[2]) : a.translate(C.p.v[0] * M, C.p.v[1] * M, -C.p.v[2] * M));
              if (e.strokeWidthAnim && (te = U < 0 ? 0 : U), e.strokeColorAnim && (ae = "rgb(" + Math.round(j[0] * 255) + "," + Math.round(j[1] * 255) + "," + Math.round(j[2] * 255) + ")"), e.fillColorAnim && e.fc && (re = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), this._hasMaskedPath) {
                if (a.translate(0, -e.ls), a.translate(0, r[1] * N * .01 + h, 0), this._pathData.p.v) {
                  $ = (u.point[1] - y.point[1]) / (u.point[0] - y.point[0]);
                  var he = Math.atan($) * 180 / Math.PI;
                  u.point[0] < y.point[0] && (he += 180), a.rotate(-he * Math.PI / 180)
                }
                a.translate(z, G, 0), _ -= r[0] * c[d].an * .005, c[d + 1] && D !== c[d + 1].ind && (_ += c[d].an / 2, _ += e.tr * .001 * e.finalSize)
              } else {
                switch (a.translate(n, h, 0), e.ps && a.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                  case 1:
                    a.translate(c[d].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[c[d].line]), 0, 0);
                    break;
                  case 2:
                    a.translate(c[d].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[c[d].line]) / 2, 0, 0);
                    break
                }
                a.translate(0, -e.ls), a.translate(O, 0, 0), a.translate(r[0] * c[d].an * .005, r[1] * N * .01, 0), n += c[d].l + e.tr * .001 * e.finalSize
              }
              o === "html" ? ee = a.toCSS() : o === "svg" ? ee = a.to2dCSS() : ie = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], se = X
            }
            l <= d ? (V = new LetterProps(se, te, ae, re, ee, ie), this.renderedLetters.push(V), l += 1, this.lettersChangedFlag = !0) : (V = this.renderedLetters[d], this.lettersChangedFlag = V.update(se, te, ae, re, ee, ie) || this.lettersChangedFlag)
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
          s, a = "";
        for (r = 0; r < i; r += 1) t[r].ty === "sh" && (s = t[r].ks.k, a += buildShapeString(s, s.i.length, !0, e));
        return a
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
            a = r.fStyle;
          this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var o = r.l || [],
          l = !!this.globalData.fontManager.chars;
        t = o.length;
        var n, h = this.mHelper,
          d = "",
          g = this.data.singleShape,
          c = 0,
          v = 0,
          _ = !0,
          u = r.tr * .001 * r.finalSize;
        if (g && !l && !r.sz) {
          var S = this.textContainer,
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
          S.setAttribute("text-anchor", p), S.setAttribute("letter-spacing", u);
          var m = this.buildTextContents(r.finalText);
          for (t = m.length, v = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1) n = this.textSpans[e].span || createNS("tspan"), n.textContent = m[e], n.setAttribute("x", 0), n.setAttribute("y", v), n.style.display = "inherit", S.appendChild(n), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = n, v += r.finalLineHeight;
          this.layerElement.appendChild(S)
        } else {
          var f = this.textSpans.length,
            y;
          for (e = 0; e < t; e += 1) {
            if (this.textSpans[e] || (this.textSpans[e] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !l || !g || e === 0) {
              if (n = f > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), f <= e) {
                if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = n, l) {
                  var w = createNS("g");
                  n.appendChild(w), this.textSpans[e].childSpan = w
                }
                this.textSpans[e].span = n, this.layerElement.appendChild(n)
              }
              n.style.display = "inherit"
            }
            if (h.reset(), g && (o[e].n && (c = -u, v += r.yOffset, v += _ ? 1 : 0, _ = !1), this.applyTextPropertiesToMatrix(r, h, o[e].line, c, v), c += o[e].l || 0, c += u), l) {
              y = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
              var E;
              if (y.t === 1) E = new SVGCompElement(y.data, this.globalData, this);
              else {
                var P = emptyShapeData;
                y.data && y.data.shapes && (P = this.buildShapeData(y.data, r.finalSize)), E = new SVGShapeElement(P, this.globalData, this)
              }
              if (this.textSpans[e].glyph) {
                var T = this.textSpans[e].glyph;
                this.textSpans[e].childSpan.removeChild(T.layerElement), T.destroy()
              }
              this.textSpans[e].glyph = E, E._debug = !0, E.prepareFrame(0), E.renderFrame(), this.textSpans[e].childSpan.appendChild(E.layerElement), y.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
            } else g && n.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), n.textContent = o[e].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }
          g && n && n.setAttribute("d", d)
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
          var s, a, o;
          for (e = 0; e < t; e += 1) i[e].n || (s = r[e], a = this.textSpans[e].span, o = this.textSpans[e].glyph, o && o.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc))
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
                a = s.getMatte(this.layers[e].tt);
              r.setMatte(a)
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
                  a = s.getMatte(this.layers[t].tt);
                e.setMatte(a);
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
          var a = createNS("desc"),
            o = createElementID();
          a.setAttribute("id", o), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + o
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var l = createNS("defs");
        this.svgElement.appendChild(l);
        var n = createNS("g");
        this.svgElement.appendChild(n), this.layerElement = n, this.renderConfig = {
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
          var a = this.sequences[s];
          return a || (a = {
            transforms: [].concat(t),
            finalTransform: new Matrix,
            _mdf: !1
          }, this.sequences[s] = a, this.sequenceList.push(a)), a
        },
        processSequence: function(t, r) {
          for (var i = 0, s = t.transforms.length, a = r; i < s && !r;) {
            if (t.transforms[i].transform.mProps._mdf) {
              a = !0;
              break
            }
            i += 1
          }
          if (a)
            for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
          t._mdf = a
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

        function a() {
          var n = createNS("svg"),
            h = createNS("filter"),
            d = createNS("feColorMatrix");
          return h.setAttribute("id", t), d.setAttribute("type", "matrix"), d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), h.appendChild(d), n.appendChild(h), n.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), n
        }

        function o() {
          r || (s = a(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
        }

        function l(n) {
          return r || o(), r.width = n.width, r.height = n.height, i.filter = "url(#" + t + ")", r
        }
        return {
          load: o,
          get: l
        }
      };

      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return r.width = e, r.height = t, r
      }
      var assetLoader = function() {
          return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          }
        }(),
        registeredEffects = {};

      function CVEffects(e) {
        var t, r = e.data.ef ? e.data.ef.length : 0;
        this.filters = [];
        var i;
        for (t = 0; t < r; t += 1) {
          i = null;
          var s = e.data.ef[t].ty;
          if (registeredEffects[s]) {
            var a = registeredEffects[s].effect;
            i = new a(e.effectsManager.effectElements[t], e)
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
            s, a, o;
          for (t.beginPath(), r = 0; r < i; r += 1)
            if (this.masksProperties[r].mode !== "n") {
              this.masksProperties[r].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), o = this.viewData[r].v, s = e.applyToPointArray(o.v[0][0], o.v[0][1], 0), t.moveTo(s[0], s[1]);
              var l, n = o._length;
              for (l = 1; l < n; l += 1) a = e.applyToTriplePoints(o.o[l - 1], o.i[l], o.v[l]), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
              a = e.applyToTriplePoints(o.o[l - 1], o.i[0], o.v[0]), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
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
                a = s.getContext("2d");
              a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
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
        var a, o = r.length,
          l;
        for (a = 0; a < o; a += 1) r[a].closed || (l = {
          transforms: i.addTransformSequence(r[a].transforms),
          trNodes: []
        }, this.styledShapes.push(l), r[a].elements.push(l))
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
        var a, o = e.length - 1,
          l, n, h = [],
          d = [],
          g, c, v, _ = [].concat(s);
        for (a = o; a >= 0; a -= 1) {
          if (g = this.searchProcessedElement(e[a]), g ? t[a] = r[g - 1] : e[a]._shouldRender = i, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") g ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], _), h.push(t[a].style);
          else if (e[a].ty === "gr") {
            if (!g) t[a] = this.createGroupElement(e[a]);
            else
              for (n = t[a].it.length, l = 0; l < n; l += 1) t[a].prevViewData[l] = t[a].it[l];
            this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, _)
          } else e[a].ty === "tr" ? (g || (v = this.createTransformElement(e[a]), t[a] = v), _.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? g || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (g ? (c = t[a], c.closed = !1) : (c = ShapeModifiers.getModifier(e[a].ty), c.init(this, e[a]), t[a] = c, this.shapeModifiers.push(c)), d.push(c)) : e[a].ty === "rp" && (g ? (c = t[a], c.closed = !0) : (c = ShapeModifiers.getModifier(e[a].ty), t[a] = c, c.init(this, e, a, t), this.shapeModifiers.push(c), i = !1), d.push(c));
          this.addProcessedElement(e[a], a + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(h), o = d.length, a = 0; a < o; a += 1) d[a].closed = !0
      }, CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
      }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
        (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
      }, CVShapeElement.prototype.drawLayer = function() {
        var e, t = this.stylesList.length,
          r, i, s, a, o, l, n = this.globalData.renderer,
          h = this.globalData.canvasContext,
          d, g;
        for (e = 0; e < t; e += 1)
          if (g = this.stylesList[e], d = g.type, !((d === "st" || d === "gs") && g.wi === 0 || !g.data._shouldRender || g.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
            for (n.save(), o = g.elements, d === "st" || d === "gs" ? (n.ctxStrokeStyle(d === "st" ? g.co : g.grd), n.ctxLineWidth(g.wi), n.ctxLineCap(g.lc), n.ctxLineJoin(g.lj), n.ctxMiterLimit(g.ml || 0)) : n.ctxFillStyle(d === "fl" ? g.co : g.grd), n.ctxOpacity(g.coOp), d !== "st" && d !== "gs" && h.beginPath(), n.ctxTransform(g.preTransforms.finalTransform.props), i = o.length, r = 0; r < i; r += 1) {
              for ((d === "st" || d === "gs") && (h.beginPath(), g.da && (h.setLineDash(g.da), h.lineDashOffset = g.do)), l = o[r].trNodes, a = l.length, s = 0; s < a; s += 1) l[s].t === "m" ? h.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? h.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : h.closePath();
              (d === "st" || d === "gs") && (n.ctxStroke(), g.da && h.setLineDash(this.dashResetter))
            }
            d !== "st" && d !== "gs" && this.globalData.renderer.ctxFill(g.r), n.restore()
          }
      }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
        var s, a = t.length - 1,
          o;
        for (o = e, s = a; s >= 0; s -= 1) t[s].ty === "tr" ? (o = r[s].transform, this.renderShapeTransform(e, o)) : t[s].ty === "sh" || t[s].ty === "el" || t[s].ty === "rc" || t[s].ty === "sr" ? this.renderPath(t[s], r[s]) : t[s].ty === "fl" ? this.renderFill(t[s], r[s], o) : t[s].ty === "st" ? this.renderStroke(t[s], r[s], o) : t[s].ty === "gf" || t[s].ty === "gs" ? this.renderGradientFill(t[s], r[s], o) : t[s].ty === "gr" ? this.renderShape(o, t[s].it, r[s].it) : t[s].ty;
        i && this.drawLayer()
      }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
        if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
          var r = e.trNodes,
            i = t.paths,
            s, a, o, l = i._length;
          r.length = 0;
          var n = e.transforms.finalTransform;
          for (o = 0; o < l; o += 1) {
            var h = i.shapes[o];
            if (h && h.v) {
              for (a = h._length, s = 1; s < a; s += 1) s === 1 && r.push({
                t: "m",
                p: n.applyToPointArray(h.v[0][0], h.v[0][1], 0)
              }), r.push({
                t: "c",
                pts: n.applyToTriplePoints(h.o[s - 1], h.i[s], h.v[s])
              });
              a === 1 && r.push({
                t: "m",
                p: n.applyToPointArray(h.v[0][0], h.v[0][1], 0)
              }), h.c && a && (r.push({
                t: "c",
                pts: n.applyToTriplePoints(h.o[s - 1], h.i[0], h.v[0])
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
          var a = this.globalData.canvasContext,
            o = t.s.v,
            l = t.e.v;
          if (e.t === 1) s = a.createLinearGradient(o[0], o[1], l[0], l[1]);
          else {
            var n = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
              h = Math.atan2(l[1] - o[1], l[0] - o[0]),
              d = t.h.v;
            d >= 1 ? d = .99 : d <= -1 && (d = -.99);
            var g = n * d,
              c = Math.cos(h + t.a.v) * g + o[0],
              v = Math.sin(h + t.a.v) * g + o[1];
            s = a.createRadialGradient(c, v, 0, o[0], o[1], n)
          }
          var _, u = e.g.p,
            S = t.g.c,
            p = 1;
          for (_ = 0; _ < u; _ += 1) t.g._hasOpacity && t.g._collapsable && (p = t.g.o[_ * 2 + 1]), s.addColorStop(S[_ * 4] / 100, "rgba(" + S[_ * 4 + 1] + "," + S[_ * 4 + 2] + "," + S[_ * 4 + 3] + "," + p + ")");
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
          s, a, o = e.l,
          l = this.mHelper;
        this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, a = e.finalText.length;
        var n, h, d, g, c, v, _, u, S, p, m = this.data.singleShape,
          f = e.tr * .001 * e.finalSize,
          y = 0,
          w = 0,
          E = !0,
          P = 0;
        for (s = 0; s < a; s += 1) {
          n = this.globalData.fontManager.getCharData(e.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), h = n && n.data || {}, l.reset(), m && o[s].n && (y = -f, w += e.yOffset, w += E ? 1 : 0, E = !1), c = h.shapes ? h.shapes[0].it : [], _ = c.length, l.scale(e.finalSize / 100, e.finalSize / 100), m && this.applyTextPropertiesToMatrix(e, l, o[s].line, y, w), S = createSizedArray(_ - 1);
          var T = 0;
          for (v = 0; v < _; v += 1)
            if (c[v].ty === "sh") {
              for (g = c[v].ks.k.i.length, u = c[v].ks.k, p = [], d = 1; d < g; d += 1) d === 1 && p.push(l.applyToX(u.v[0][0], u.v[0][1], 0), l.applyToY(u.v[0][0], u.v[0][1], 0)), p.push(l.applyToX(u.o[d - 1][0], u.o[d - 1][1], 0), l.applyToY(u.o[d - 1][0], u.o[d - 1][1], 0), l.applyToX(u.i[d][0], u.i[d][1], 0), l.applyToY(u.i[d][0], u.i[d][1], 0), l.applyToX(u.v[d][0], u.v[d][1], 0), l.applyToY(u.v[d][0], u.v[d][1], 0));
              p.push(l.applyToX(u.o[d - 1][0], u.o[d - 1][1], 0), l.applyToY(u.o[d - 1][0], u.o[d - 1][1], 0), l.applyToX(u.i[0][0], u.i[0][1], 0), l.applyToY(u.i[0][0], u.i[0][1], 0), l.applyToX(u.v[0][0], u.v[0][1], 0), l.applyToY(u.v[0][0], u.v[0][1], 0)), S[T] = p, T += 1
            } m && (y += o[s].l, y += f), this.textSpans[P] ? this.textSpans[P].elem = S : this.textSpans[P] = {
            elem: S
          }, P += 1
        }
      }, CVTextElement.prototype.renderInnerContent = function() {
        this.validateText();
        var e = this.canvasContext;
        e.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var t, r, i, s, a, o, l = this.textAnimator.renderedLetters,
          n = this.textProperty.currentData.l;
        r = n.length;
        var h, d = null,
          g = null,
          c = null,
          v, _, u = this.globalData.renderer;
        for (t = 0; t < r; t += 1)
          if (!n[t].n) {
            if (h = l[t], h && (u.save(), u.ctxTransform(h.p), u.ctxOpacity(h.o)), this.fill) {
              for (h && h.fc ? d !== h.fc && (u.ctxFillStyle(h.fc), d = h.fc) : d !== this.values.fill && (d = this.values.fill, u.ctxFillStyle(this.values.fill)), v = this.textSpans[t].elem, s = v.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                for (_ = v[i], o = _.length, this.globalData.canvasContext.moveTo(_[0], _[1]), a = 2; a < o; a += 6) this.globalData.canvasContext.bezierCurveTo(_[a], _[a + 1], _[a + 2], _[a + 3], _[a + 4], _[a + 5]);
              this.globalData.canvasContext.closePath(), u.ctxFill()
            }
            if (this.stroke) {
              for (h && h.sw ? c !== h.sw && (c = h.sw, u.ctxLineWidth(h.sw)) : c !== this.values.sWidth && (c = this.values.sWidth, u.ctxLineWidth(this.values.sWidth)), h && h.sc ? g !== h.sc && (g = h.sc, u.ctxStrokeStyle(h.sc)) : g !== this.values.stroke && (g = this.values.stroke, u.ctxStrokeStyle(this.values.stroke)), v = this.textSpans[t].elem, s = v.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
                for (_ = v[i], o = _.length, this.globalData.canvasContext.moveTo(_[0], _[1]), a = 2; a < o; a += 6) this.globalData.canvasContext.bezierCurveTo(_[a], _[a + 1], _[a + 2], _[a + 3], _[a + 4], _[a + 5]);
              this.globalData.canvasContext.closePath(), u.ctxStroke()
            }
            h && this.globalData.renderer.restore()
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
            a = this.assetData.w / this.assetData.h,
            o, l, n = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          s > a && n === "xMidYMid slice" || s < a && n !== "xMidYMid slice" ? (l = i, o = l * a) : (o = r, l = o / a), t.drawImage(this.img, (r - o) / 2, (i - l) / 2, o, l, 0, 0, this.assetData.w, this.assetData.h), this.img = e
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
        var s, a;
        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var o = this.renderConfig.preserveAspectRatio.split(" "),
            l = o[1] || "meet",
            n = o[0] || "xMidYMid",
            h = n.substr(0, 4),
            d = n.substr(4);
          s = r / i, a = this.transformCanvas.w / this.transformCanvas.h, a > s && l === "meet" || a < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), h === "xMid" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : h === "xMax" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, d === "YMid" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : d === "YMax" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
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
          var a = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
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
          s, a = r._length,
          o, l, n, h;
        if (!(a <= 1)) {
          for (s = 0; s < a - 1; s += 1) o = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), n = this.getTransformedPoint(i, r.i[s + 1]), h = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(o, l, n, h, t);
          r.c && (o = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), n = this.getTransformedPoint(i, r.i[0]), h = this.getTransformedPoint(i, r.v[0]), this.checkBounds(o, l, n, h, t))
        }
      }, HShapeElement.prototype.checkBounds = function(e, t, r, i, s) {
        this.getBoundsOfCurve(e, t, r, i);
        var a = this.shapeBoundingBox;
        s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
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
          ], a, o, l, n, h, d, g, c = 0; c < 2; ++c) o = 6 * e[c] - 12 * t[c] + 6 * r[c], a = -3 * e[c] + 9 * t[c] - 9 * r[c] + 3 * i[c], l = 3 * t[c] - 3 * e[c], o |= 0, a |= 0, l |= 0, a === 0 && o === 0 || (a === 0 ? (n = -l / o, n > 0 && n < 1 && s[c].push(this.calculateF(n, e, t, r, i, c))) : (h = o * o - 4 * l * a, h >= 0 && (d = (-o + bmSqrt(h)) / (2 * a), d > 0 && d < 1 && s[c].push(this.calculateF(d, e, t, r, i, c)), g = (-o - bmSqrt(h)) / (2 * a), g > 0 && g < 1 && s[c].push(this.calculateF(g, e, t, r, i, c)))));
        this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
      }, HShapeElement.prototype.calculateF = function(e, t, r, i, s, a) {
        return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * s[a]
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
              a = e.fStyle;
            t.fontStyle = a, t.fontWeight = s
          } var o, l, n = e.l;
        l = n.length;
        var h, d, g, c = this.mHelper,
          v, _ = "",
          u = 0;
        for (o = 0; o < l; o += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : (h = createNS("path"), h.setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? (d = this.textSpans[u], g = d.children[0]) : (d = createTag("div"), d.style.lineHeight = 0, g = createNS("svg"), g.appendChild(h), styleDiv(d)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (d = this.textSpans[u], h = this.textPaths[u]) : (d = createTag("span"), styleDiv(d), h = createTag("span"), styleDiv(h), d.appendChild(h)), this.globalData.fontManager.chars) {
            var S = this.globalData.fontManager.getCharData(e.finalText[o], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily),
              p;
            if (S ? p = S.data : p = null, c.reset(), p && p.shapes && p.shapes.length && (v = p.shapes[0].it, c.scale(e.finalSize / 100, e.finalSize / 100), _ = this.createPathShape(c, v), h.setAttribute("d", _)), this.isMasked) this.innerElem.appendChild(h);
            else {
              if (this.innerElem.appendChild(d), p && p.shapes) {
                document.body.appendChild(g);
                var m = g.getBBox();
                g.setAttribute("width", m.width + 2), g.setAttribute("height", m.height + 2), g.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2));
                var f = g.style,
                  y = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)";
                f.transform = y, f.webkitTransform = y, n[o].yOffset = m.y - 1
              } else g.setAttribute("width", 1), g.setAttribute("height", 1);
              d.appendChild(g)
            }
          } else if (h.textContent = n[o].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
          else {
            this.innerElem.appendChild(d);
            var w = h.style,
              E = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            w.transform = E, w.webkitTransform = E
          }
          this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = d, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1
        }
        for (; u < this.textSpans.length;) this.textSpans[u].style.display = "none", u += 1
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
            a = this.textAnimator.renderedLetters,
            o = this.textProperty.currentData.l;
          i = o.length;
          var l, n, h;
          for (r = 0; r < i; r += 1) o[r].n ? s += 1 : (n = this.textSpans[r], h = this.textPaths[r], l = a[s], s += 1, l._mdf.m && (this.isMasked ? n.setAttribute("transform", l.m) : (n.style.webkitTransform = l.m, n.style.transform = l.m)), n.style.opacity = l.o, l.sw && l._mdf.sw && h.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && h.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (h.setAttribute("fill", l.fc), h.style.color = l.fc));
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var d = this.innerElem.getBBox();
            this.currentBBox.w !== d.width && (this.currentBBox.w = d.width, this.svgElement.setAttribute("width", d.width)), this.currentBBox.h !== d.height && (this.currentBBox.h = d.height, this.svgElement.setAttribute("height", d.height));
            var g = 1;
            if (this.currentBBox.w !== d.width + g * 2 || this.currentBBox.h !== d.height + g * 2 || this.currentBBox.x !== d.x - g || this.currentBBox.y !== d.y - g) {
              this.currentBBox.w = d.width + g * 2, this.currentBBox.h = d.height + g * 2, this.currentBBox.x = d.x - g, this.currentBBox.y = d.y - g, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
              var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              e.transform = c, e.webkitTransform = c
            }
          }
        }
      };

      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
          var s, a = e.ks.or.k.length;
          for (s = 0; s < a; s += 1) e.ks.or.k[s].to = null, e.ks.or.k[s].ti = null
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
            var a = this.pe.v + "px",
              o = "0px 0px 0px",
              l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            i.perspective = a, i.webkitPerspective = a, s.transformOrigin = o, s.mozTransformOrigin = o, s.webkitTransformOrigin = o, i.transform = l, i.webkitTransform = l
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
            var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
              o = [s[0] / a, s[1] / a, s[2] / a],
              l = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
              n = Math.atan2(o[1], l),
              h = Math.atan2(o[0], -o[2]);
            this.mat.rotateY(h).rotateX(-n)
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var d = !this._prevMat.equals(this.mat);
          if ((d || this.pe._mdf) && this.comp.threeDElements) {
            r = this.comp.threeDElements.length;
            var g, c, v;
            for (t = 0; t < r; t += 1)
              if (g = this.comp.threeDElements[t], g.type === "3d") {
                if (d) {
                  var _ = this.mat.toCSS();
                  v = g.container.style, v.transform = _, v.webkitTransform = _
                }
                this.pe._mdf && (c = g.perspectiveElem.style, c.perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
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
              for (var s = 0, a, o, l; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (o = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : o.getBaseElement(), a = l || a), s += 1;
              a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
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
        var a = createTag("div");
        if (styleDiv(a), t === "3d") {
          i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
          var o = "50% 50%";
          i.webkitTransformOrigin = o, i.mozTransformOrigin = o, i.transformOrigin = o, s = a.style;
          var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          s.transform = l, s.webkitTransform = l
        }
        r.appendChild(a);
        var n = {
          container: a,
          perspectiveElem: r,
          startPos: e,
          endPos: e,
          type: t
        };
        return this.threeDElements.push(n), n
      }, HybridRendererBase.prototype.build3dContainers = function() {
        var e, t = this.layers.length,
          r, i = "";
        for (e = 0; e < t; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(e, "3d")), r.endPos = Math.max(r.endPos, e)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(e, "2d")), r.endPos = Math.max(r.endPos, e));
        for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
      }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
        for (var r = 0, i = this.threeDElements.length; r < i;) {
          if (t <= this.threeDElements[r].endPos) {
            for (var s = this.threeDElements[r].startPos, a; s < t;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
            a ? this.threeDElements[r].container.insertBefore(e, a) : this.threeDElements[r].container.appendChild(e);
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
        var a = createNS("defs");
        s.appendChild(a), this.data = e, this.setupGlobalData(e, s), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
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
          s, a, o, l;
        i > r ? (s = e / this.globalData.compSize.w, a = e / this.globalData.compSize.w, o = 0, l = (t - this.globalData.compSize.h * (e / this.globalData.compSize.w)) / 2) : (s = t / this.globalData.compSize.h, a = t / this.globalData.compSize.h, o = (e - this.globalData.compSize.w * (t / this.globalData.compSize.h)) / 2, l = 0);
        var n = this.resizerElem.style;
        n.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + o + "," + l + ",0,1)", n.transform = n.webkitTransform
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
      var CompExpressionInterface = function() {
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
      }();

      function _typeof$2(e) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
          return typeof r
        } : _typeof$2 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, _typeof$2(e)
      }

      function seedRandom(e, t) {
        var r = this,
          i = 256,
          s = 6,
          a = 52,
          o = "random",
          l = t.pow(i, s),
          n = t.pow(2, a),
          h = n * 2,
          d = i - 1,
          g;

        function c(f, y, w) {
          var E = [];
          y = y === !0 ? {
            entropy: !0
          } : y || {};
          var P = S(u(y.entropy ? [f, m(e)] : f === null ? p() : f, 3), E),
            T = new v(E),
            A = function() {
              for (var I = T.g(s), B = l, L = 0; I < n;) I = (I + L) * i, B *= i, L = T.g(1);
              for (; I >= h;) I /= 2, B /= 2, L >>>= 1;
              return (I + L) / B
            };
          return A.int32 = function() {
            return T.g(4) | 0
          }, A.quick = function() {
            return T.g(4) / 4294967296
          }, A.double = A, S(m(T.S), e), (y.pass || w || function($, I, B, L) {
            return L && (L.S && _(L, T), $.state = function() {
              return _(T, {})
            }), B ? (t[o] = $, I) : $
          })(A, P, "global" in y ? y.global : this == t, y.state)
        }
        t["seed" + o] = c;

        function v(f) {
          var y, w = f.length,
            E = this,
            P = 0,
            T = E.i = E.j = 0,
            A = E.S = [];
          for (w || (f = [w++]); P < i;) A[P] = P++;
          for (P = 0; P < i; P++) A[P] = A[T = d & T + f[P % w] + (y = A[P])], A[T] = y;
          E.g = function($) {
            for (var I, B = 0, L = E.i, N = E.j, F = E.S; $--;) I = F[L = d & L + 1], B = B * i + F[d & (F[L] = F[N = d & N + I]) + (F[N] = I)];
            return E.i = L, E.j = N, B
          }
        }

        function _(f, y) {
          return y.i = f.i, y.j = f.j, y.S = f.S.slice(), y
        }

        function u(f, y) {
          var w = [],
            E = _typeof$2(f),
            P;
          if (y && E == "object")
            for (P in f) try {
              w.push(u(f[P], y - 1))
            } catch {}
          return w.length ? w : E == "string" ? f : f + "\0"
        }

        function S(f, y) {
          for (var w = f + "", E, P = 0; P < w.length;) y[d & P] = d & (E ^= y[d & P] * 19) + w.charCodeAt(P++);
          return m(y)
        }

        function p() {
          try {
            var f = new Uint8Array(i);
            return (r.crypto || r.msCrypto).getRandomValues(f), m(f)
          } catch {
            var y = r.navigator,
              w = y && y.plugins;
            return [+new Date, r, w, r.screen, m(e)]
          }
        }

        function m(f) {
          return String.fromCharCode.apply(0, f)
        }
        S(t.random(), e)
      }

      function initialize$2(e) {
        seedRandom([], e)
      }
      var propTypes = {
        SHAPE: "shape"
      };

      function _typeof$1(e) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
          return typeof r
        } : _typeof$1 = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, _typeof$1(e)
      }
      var ExpressionManager = function() {
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
              for (var s = 0, a = e.length, o = t.length, l = []; s < a || s < o;)(typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] + t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
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
              for (var s = 0, a = e.length, o = t.length, l = []; s < a || s < o;)(typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] - t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
              return l
            }
            return 0
          }

          function mul(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t),
              s;
            if (isNumerable(r, e) && isNumerable(i, t)) return e * t;
            var a, o;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
              for (o = e.length, s = createTypedArray("float32", o), a = 0; a < o; a += 1) s[a] = e[a] * t;
              return s
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (o = t.length, s = createTypedArray("float32", o), a = 0; a < o; a += 1) s[a] = e * t[a];
              return s
            }
            return 0
          }

          function div(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t),
              s;
            if (isNumerable(r, e) && isNumerable(i, t)) return e / t;
            var a, o;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
              for (o = e.length, s = createTypedArray("float32", o), a = 0; a < o; a += 1) s[a] = e[a] / t;
              return s
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (o = t.length, s = createTypedArray("float32", o), a = 0; a < o; a += 1) s[a] = e / t[a];
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
              a = Math.min(t, r, i),
              o, l, n = (s + a) / 2;
            if (s === a) o = 0, l = 0;
            else {
              var h = s - a;
              switch (l = n > .5 ? h / (2 - s - a) : h / (s + a), s) {
                case t:
                  o = (r - i) / h + (r < i ? 6 : 0);
                  break;
                case r:
                  o = (i - t) / h + 2;
                  break;
                case i:
                  o = (t - r) / h + 4;
                  break
              }
              o /= 6
            }
            return [o, l, n, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t = e[0],
              r = e[1],
              i = e[2],
              s, a, o;
            if (r === 0) s = i, o = i, a = i;
            else {
              var l = i < .5 ? i * (1 + r) : i + r - i * r,
                n = 2 * i - l;
              s = hue2rgb(n, l, t + 1 / 3), a = hue2rgb(n, l, t), o = hue2rgb(n, l, t - 1 / 3)
            }
            return [s, a, o, e[3]]
          }

          function linear(e, t, r, i, s) {
            if ((i === void 0 || s === void 0) && (i = t, s = r, t = 0, r = 1), r < t) {
              var a = r;
              r = t, t = a
            }
            if (e <= t) return i;
            if (e >= r) return s;
            var o = r === t ? 0 : (e - t) / (r - t);
            if (!i.length) return i + (s - i) * o;
            var l, n = i.length,
              h = createTypedArray("float32", n);
            for (l = 0; l < n; l += 1) h[l] = i[l] + (s[l] - i[l]) * o;
            return h
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, i = t.length;
              e || (e = createTypedArray("float32", i));
              var s = createTypedArray("float32", i),
                a = BMMath.random();
              for (r = 0; r < i; r += 1) s[r] = e[r] + a * (t[r] - e[r]);
              return s
            }
            e === void 0 && (e = 0);
            var o = BMMath.random();
            return e + o * (t - e)
          }

          function createPath(e, t, r, i) {
            var s, a = e.length,
              o = shapePool.newElement();
            o.setPathData(!!i, a);
            var l = [0, 0],
              n, h;
            for (s = 0; s < a; s += 1) n = t && t[s] ? t[s] : l, h = r && r[s] ? r[s] : l, o.setTripleAt(e[s][0], e[s][1], h[0] + e[s][0], h[1] + e[s][1], n[0] + e[s][0], n[1] + e[s][1], s, !0);
            return o
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
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
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
                var i, s, a = this.pv.length ? this.pv.length : 1,
                  o = createTypedArray("float32", a);
                t = 5;
                var l = Math.floor(time * t);
                for (i = 0, s = 0; i < l;) {
                  for (s = 0; s < a; s += 1) o[s] += -r + r * 2 * BMMath.random();
                  i += 1
                }
                var n = time * t,
                  h = n - Math.floor(n),
                  d = createTypedArray("float32", a);
                if (a > 1) {
                  for (s = 0; s < a; s += 1) d[s] = this.pv[s] + o[s] + (-r + r * 2 * BMMath.random()) * h;
                  return d
                }
                return this.pv + o[0] + (-r + r * 2 * BMMath.random()) * h
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

            function applyEase(e, t, r, i, s, a) {
              s === void 0 ? (s = r, a = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var o = e(t);
              if ($bm_isInstanceOfArray(s)) {
                var l, n = s.length,
                  h = createTypedArray("float32", n);
                for (l = 0; l < n; l += 1) h[l] = (a[l] - s[l]) * o + s[l];
                return h
              }
              return (a - s) * o + s
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
              var a = {};
              return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
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
        }(),
        Expressions = function() {
          var e = {};
          e.initExpressions = t, e.resetFrame = ExpressionManager.resetFrame;

          function t(r) {
            var i = 0,
              s = [];

            function a() {
              i += 1
            }

            function o() {
              i -= 1, i === 0 && n()
            }

            function l(h) {
              s.indexOf(h) === -1 && s.push(h)
            }

            function n() {
              var h, d = s.length;
              for (h = 0; h < d; h += 1) s[h].release();
              s.length = 0
            }
            r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = o, r.renderer.globalData.registerExpressionProperty = l
          }
          return e
        }(),
        MaskManagerInterface = function() {
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
              a, o = i.viewData.length;
            for (a = 0; a < o; a += 1) s[a] = new e(i.viewData[a], i.masksProperties[a]);
            var l = function(h) {
              for (a = 0; a < o;) {
                if (i.masksProperties[a].nm === h) return s[a];
                a += 1
              }
              return null
            };
            return l
          };
          return t
        }(),
        ExpressionPropertyInterface = function() {
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

          function r(o, l, n) {
            Object.defineProperty(o, "velocity", {
              get: function() {
                return l.getVelocityAtTime(l.comp.currentFrame)
              }
            }), o.numKeys = l.keyframes ? l.keyframes.length : 0, o.key = function(h) {
              if (!o.numKeys) return 0;
              var d = "";
              "s" in l.keyframes[h - 1] ? d = l.keyframes[h - 1].s : "e" in l.keyframes[h - 2] ? d = l.keyframes[h - 2].e : d = l.keyframes[h - 2].s;
              var g = n === "unidimensional" ? new Number(d) : Object.assign({}, d);
              return g.time = l.keyframes[h - 1].t / l.elem.comp.globalData.frameRate, g.value = n === "unidimensional" ? d[0] : d, g
            }, o.valueAtTime = l.getValueAtTime, o.speedAtTime = l.getSpeedAtTime, o.velocityAtTime = l.getVelocityAtTime, o.propertyGroup = l.propertyGroup
          }

          function i(o) {
            (!o || !("pv" in o)) && (o = e);
            var l = 1 / o.mult,
              n = o.pv * l,
              h = new Number(n);
            return h.value = n, r(h, o, "unidimensional"),
              function() {
                return o.k && o.getValue(), n = o.v * l, h.value !== n && (h = new Number(n), h.value = n, r(h, o, "unidimensional")), h
              }
          }

          function s(o) {
            (!o || !("pv" in o)) && (o = t);
            var l = 1 / o.mult,
              n = o.data && o.data.l || o.pv.length,
              h = createTypedArray("float32", n),
              d = createTypedArray("float32", n);
            return h.value = d, r(h, o, "multidimensional"),
              function() {
                o.k && o.getValue();
                for (var g = 0; g < n; g += 1) d[g] = o.v[g] * l, h[g] = d[g];
                return h
              }
          }

          function a() {
            return e
          }
          return function(o) {
            return o ? o.propType === "unidimensional" ? i(o) : s(o) : a
          }
        }(),
        TransformExpressionInterface = function() {
          return function(e) {
            function t(o) {
              switch (o) {
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
            var r, i, s, a;
            return e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (s = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? a() : [r(), i(), s ? s() : 0]
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
        }(),
        LayerExpressionInterface = function() {
          function e(h) {
            var d = new Matrix;
            if (h !== void 0) {
              var g = this._elem.finalTransform.mProp.getValueAtTime(h);
              g.clone(d)
            } else {
              var c = this._elem.finalTransform.mProp;
              c.applyToMatrix(d)
            }
            return d
          }

          function t(h, d) {
            var g = this.getMatrix(d);
            return g.props[12] = 0, g.props[13] = 0, g.props[14] = 0, this.applyPoint(g, h)
          }

          function r(h, d) {
            var g = this.getMatrix(d);
            return this.applyPoint(g, h)
          }

          function i(h, d) {
            var g = this.getMatrix(d);
            return g.props[12] = 0, g.props[13] = 0, g.props[14] = 0, this.invertPoint(g, h)
          }

          function s(h, d) {
            var g = this.getMatrix(d);
            return this.invertPoint(g, h)
          }

          function a(h, d) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var g, c = this._elem.hierarchy.length;
              for (g = 0; g < c; g += 1) this._elem.hierarchy[g].finalTransform.mProp.applyToMatrix(h)
            }
            return h.applyToPointArray(d[0], d[1], d[2] || 0)
          }

          function o(h, d) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var g, c = this._elem.hierarchy.length;
              for (g = 0; g < c; g += 1) this._elem.hierarchy[g].finalTransform.mProp.applyToMatrix(h)
            }
            return h.inversePoint(d)
          }

          function l(h) {
            var d = new Matrix;
            if (d.reset(), this._elem.finalTransform.mProp.applyToMatrix(d), this._elem.hierarchy && this._elem.hierarchy.length) {
              var g, c = this._elem.hierarchy.length;
              for (g = 0; g < c; g += 1) this._elem.hierarchy[g].finalTransform.mProp.applyToMatrix(d);
              return d.inversePoint(h)
            }
            return d.inversePoint(h)
          }

          function n() {
            return [1, 1, 1, 1]
          }
          return function(h) {
            var d;

            function g(u) {
              v.mask = new MaskManagerInterface(u, h)
            }

            function c(u) {
              v.effect = u
            }

            function v(u) {
              switch (u) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return v.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return d;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return v.effect;
                case "ADBE Text Properties":
                  return v.textInterface;
                default:
                  return null
              }
            }
            v.getMatrix = e, v.invertPoint = o, v.applyPoint = a, v.toWorld = r, v.toWorldVec = t, v.fromWorld = s, v.fromWorldVec = i, v.toComp = r, v.fromComp = l, v.sampleImage = n, v.sourceRectAtTime = h.sourceRectAtTime.bind(h), v._elem = h, d = TransformExpressionInterface(h.finalTransform.mProp);
            var _ = getDescriptor(d, "anchorPoint");
            return Object.defineProperties(v, {
              hasParent: {
                get: function() {
                  return h.hierarchy.length
                }
              },
              parent: {
                get: function() {
                  return h.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(d, "rotation"),
              scale: getDescriptor(d, "scale"),
              position: getDescriptor(d, "position"),
              opacity: getDescriptor(d, "opacity"),
              anchorPoint: _,
              anchor_point: _,
              transform: {
                get: function() {
                  return d
                }
              },
              active: {
                get: function() {
                  return h.isInRange
                }
              }
            }), v.startTime = h.data.st, v.index = h.data.ind, v.source = h.data.refId, v.height = h.data.ty === 0 ? h.data.h : 100, v.width = h.data.ty === 0 ? h.data.w : 100, v.inPoint = h.data.ip / h.comp.globalData.frameRate, v.outPoint = h.data.op / h.comp.globalData.frameRate, v._name = h.data.nm, v.registerMaskInterface = g, v.registerEffectsInterface = c, v
          }
        }(),
        propertyGroupFactory = function() {
          return function(e, t) {
            return function(r) {
              return r = r === void 0 ? 1 : r, r <= 0 ? e : t(r - 1)
            }
          }
        }(),
        PropertyInterface = function() {
          return function(e, t) {
            var r = {
              _name: e
            };

            function i(s) {
              return s = s === void 0 ? 1 : s, s <= 0 ? r : t(s - 1)
            }
            return i
          }
        }(),
        EffectsExpressionInterface = function() {
          var e = {
            createEffectsInterface: t
          };

          function t(s, a) {
            if (s.effectsManager) {
              var o = [],
                l = s.data.ef,
                n, h = s.effectsManager.effectElements.length;
              for (n = 0; n < h; n += 1) o.push(r(l[n], s.effectsManager.effectElements[n], a, s));
              var d = s.data.ef || [],
                g = function(v) {
                  for (n = 0, h = d.length; n < h;) {
                    if (v === d[n].nm || v === d[n].mn || v === d[n].ix) return o[n];
                    n += 1
                  }
                  return null
                };
              return Object.defineProperty(g, "numProperties", {
                get: function() {
                  return d.length
                }
              }), g
            }
            return null
          }

          function r(s, a, o, l) {
            function n(v) {
              for (var _ = s.ef, u = 0, S = _.length; u < S;) {
                if (v === _[u].nm || v === _[u].mn || v === _[u].ix) return _[u].ty === 5 ? d[u] : d[u]();
                u += 1
              }
              throw new Error
            }
            var h = propertyGroupFactory(n, o),
              d = [],
              g, c = s.ef.length;
            for (g = 0; g < c; g += 1) s.ef[g].ty === 5 ? d.push(r(s.ef[g], a.effectElements[g], a.effectElements[g].propertyGroup, l)) : d.push(i(a.effectElements[g], s.ef[g].ty, l, h));
            return s.mn === "ADBE Color Control" && Object.defineProperty(n, "color", {
              get: function() {
                return d[0]()
              }
            }), Object.defineProperties(n, {
              numProperties: {
                get: function() {
                  return s.np
                }
              },
              _name: {
                value: s.nm
              },
              propertyGroup: {
                value: h
              }
            }), n.enabled = s.en !== 0, n.active = n.enabled, n
          }

          function i(s, a, o, l) {
            var n = ExpressionPropertyInterface(s.p);

            function h() {
              return a === 10 ? o.comp.compInterface(s.p.v) : n()
            }
            return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), h
          }
          return e
        }(),
        ShapePathInterface = function() {
          return function(t, r, i) {
            var s = r.sh;

            function a(l) {
              return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null
            }
            var o = propertyGroupFactory(a, i);
            return s.setGroupProperty(PropertyInterface("Path", o)), Object.defineProperties(a, {
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
            }), a
          }
        }(),
        ShapeExpressionInterface = function() {
          function e(_, u, S) {
            var p = [],
              m, f = _ ? _.length : 0;
            for (m = 0; m < f; m += 1) _[m].ty === "gr" ? p.push(r(_[m], u[m], S)) : _[m].ty === "fl" ? p.push(i(_[m], u[m], S)) : _[m].ty === "st" ? p.push(o(_[m], u[m], S)) : _[m].ty === "tm" ? p.push(l(_[m], u[m], S)) : _[m].ty === "tr" || (_[m].ty === "el" ? p.push(h(_[m], u[m], S)) : _[m].ty === "sr" ? p.push(d(_[m], u[m], S)) : _[m].ty === "sh" ? p.push(ShapePathInterface(_[m], u[m], S)) : _[m].ty === "rc" ? p.push(g(_[m], u[m], S)) : _[m].ty === "rd" ? p.push(c(_[m], u[m], S)) : _[m].ty === "rp" ? p.push(v(_[m], u[m], S)) : _[m].ty === "gf" ? p.push(s(_[m], u[m], S)) : p.push(a(_[m], u[m])));
            return p
          }

          function t(_, u, S) {
            var p, m = function(w) {
              for (var E = 0, P = p.length; E < P;) {
                if (p[E]._name === w || p[E].mn === w || p[E].propertyIndex === w || p[E].ix === w || p[E].ind === w) return p[E];
                E += 1
              }
              return typeof w == "number" ? p[w - 1] : null
            };
            m.propertyGroup = propertyGroupFactory(m, S), p = e(_.it, u.it, m.propertyGroup), m.numProperties = p.length;
            var f = n(_.it[_.it.length - 1], u.it[u.it.length - 1], m.propertyGroup);
            return m.transform = f, m.propertyIndex = _.cix, m._name = _.nm, m
          }

          function r(_, u, S) {
            var p = function(w) {
              switch (w) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return p.content;
                default:
                  return p.transform
              }
            };
            p.propertyGroup = propertyGroupFactory(p, S);
            var m = t(_, u, p.propertyGroup),
              f = n(_.it[_.it.length - 1], u.it[u.it.length - 1], p.propertyGroup);
            return p.content = m, p.transform = f, Object.defineProperty(p, "_name", {
              get: function() {
                return _.nm
              }
            }), p.numProperties = _.np, p.propertyIndex = _.ix, p.nm = _.nm, p.mn = _.mn, p
          }

          function i(_, u, S) {
            function p(m) {
              return m === "Color" || m === "color" ? p.color : m === "Opacity" || m === "opacity" ? p.opacity : null
            }
            return Object.defineProperties(p, {
              color: {
                get: ExpressionPropertyInterface(u.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(u.o)
              },
              _name: {
                value: _.nm
              },
              mn: {
                value: _.mn
              }
            }), u.c.setGroupProperty(PropertyInterface("Color", S)), u.o.setGroupProperty(PropertyInterface("Opacity", S)), p
          }

          function s(_, u, S) {
            function p(m) {
              return m === "Start Point" || m === "start point" ? p.startPoint : m === "End Point" || m === "end point" ? p.endPoint : m === "Opacity" || m === "opacity" ? p.opacity : null
            }
            return Object.defineProperties(p, {
              startPoint: {
                get: ExpressionPropertyInterface(u.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(u.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(u.o)
              },
              type: {
                get: function() {
                  return "a"
                }
              },
              _name: {
                value: _.nm
              },
              mn: {
                value: _.mn
              }
            }), u.s.setGroupProperty(PropertyInterface("Start Point", S)), u.e.setGroupProperty(PropertyInterface("End Point", S)), u.o.setGroupProperty(PropertyInterface("Opacity", S)), p
          }

          function a() {
            function _() {
              return null
            }
            return _
          }

          function o(_, u, S) {
            var p = propertyGroupFactory(P, S),
              m = propertyGroupFactory(E, p);

            function f(T) {
              Object.defineProperty(E, _.d[T].nm, {
                get: ExpressionPropertyInterface(u.d.dataProps[T].p)
              })
            }
            var y, w = _.d ? _.d.length : 0,
              E = {};
            for (y = 0; y < w; y += 1) f(y), u.d.dataProps[y].p.setGroupProperty(m);

            function P(T) {
              return T === "Color" || T === "color" ? P.color : T === "Opacity" || T === "opacity" ? P.opacity : T === "Stroke Width" || T === "stroke width" ? P.strokeWidth : null
            }
            return Object.defineProperties(P, {
              color: {
                get: ExpressionPropertyInterface(u.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(u.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(u.w)
              },
              dash: {
                get: function() {
                  return E
                }
              },
              _name: {
                value: _.nm
              },
              mn: {
                value: _.mn
              }
            }), u.c.setGroupProperty(PropertyInterface("Color", p)), u.o.setGroupProperty(PropertyInterface("Opacity", p)), u.w.setGroupProperty(PropertyInterface("Stroke Width", p)), P
          }

          function l(_, u, S) {
            function p(f) {
              return f === _.e.ix || f === "End" || f === "end" ? p.end : f === _.s.ix ? p.start : f === _.o.ix ? p.offset : null
            }
            var m = propertyGroupFactory(p, S);
            return p.propertyIndex = _.ix, u.s.setGroupProperty(PropertyInterface("Start", m)), u.e.setGroupProperty(PropertyInterface("End", m)), u.o.setGroupProperty(PropertyInterface("Offset", m)), p.propertyIndex = _.ix, p.propertyGroup = S, Object.defineProperties(p, {
              start: {
                get: ExpressionPropertyInterface(u.s)
              },
              end: {
                get: ExpressionPropertyInterface(u.e)
              },
              offset: {
                get: ExpressionPropertyInterface(u.o)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }

          function n(_, u, S) {
            function p(f) {
              return _.a.ix === f || f === "Anchor Point" ? p.anchorPoint : _.o.ix === f || f === "Opacity" ? p.opacity : _.p.ix === f || f === "Position" ? p.position : _.r.ix === f || f === "Rotation" || f === "ADBE Vector Rotation" ? p.rotation : _.s.ix === f || f === "Scale" ? p.scale : _.sk && _.sk.ix === f || f === "Skew" ? p.skew : _.sa && _.sa.ix === f || f === "Skew Axis" ? p.skewAxis : null
            }
            var m = propertyGroupFactory(p, S);
            return u.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", m)), u.transform.mProps.p.setGroupProperty(PropertyInterface("Position", m)), u.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", m)), u.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", m)), u.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", m)), u.transform.mProps.sk && (u.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", m)), u.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", m))), u.transform.op.setGroupProperty(PropertyInterface("Opacity", m)), Object.defineProperties(p, {
              opacity: {
                get: ExpressionPropertyInterface(u.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(u.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(u.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(u.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(u.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(u.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(u.transform.mProps.sa)
              },
              _name: {
                value: _.nm
              }
            }), p.ty = "tr", p.mn = _.mn, p.propertyGroup = S, p
          }

          function h(_, u, S) {
            function p(y) {
              return _.p.ix === y ? p.position : _.s.ix === y ? p.size : null
            }
            var m = propertyGroupFactory(p, S);
            p.propertyIndex = _.ix;
            var f = u.sh.ty === "tm" ? u.sh.prop : u.sh;
            return f.s.setGroupProperty(PropertyInterface("Size", m)), f.p.setGroupProperty(PropertyInterface("Position", m)), Object.defineProperties(p, {
              size: {
                get: ExpressionPropertyInterface(f.s)
              },
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }

          function d(_, u, S) {
            function p(y) {
              return _.p.ix === y ? p.position : _.r.ix === y ? p.rotation : _.pt.ix === y ? p.points : _.or.ix === y || y === "ADBE Vector Star Outer Radius" ? p.outerRadius : _.os.ix === y ? p.outerRoundness : _.ir && (_.ir.ix === y || y === "ADBE Vector Star Inner Radius") ? p.innerRadius : _.is && _.is.ix === y ? p.innerRoundness : null
            }
            var m = propertyGroupFactory(p, S),
              f = u.sh.ty === "tm" ? u.sh.prop : u.sh;
            return p.propertyIndex = _.ix, f.or.setGroupProperty(PropertyInterface("Outer Radius", m)), f.os.setGroupProperty(PropertyInterface("Outer Roundness", m)), f.pt.setGroupProperty(PropertyInterface("Points", m)), f.p.setGroupProperty(PropertyInterface("Position", m)), f.r.setGroupProperty(PropertyInterface("Rotation", m)), _.ir && (f.ir.setGroupProperty(PropertyInterface("Inner Radius", m)), f.is.setGroupProperty(PropertyInterface("Inner Roundness", m))), Object.defineProperties(p, {
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(f.r)
              },
              points: {
                get: ExpressionPropertyInterface(f.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(f.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(f.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(f.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(f.is)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }

          function g(_, u, S) {
            function p(y) {
              return _.p.ix === y ? p.position : _.r.ix === y ? p.roundness : _.s.ix === y || y === "Size" || y === "ADBE Vector Rect Size" ? p.size : null
            }
            var m = propertyGroupFactory(p, S),
              f = u.sh.ty === "tm" ? u.sh.prop : u.sh;
            return p.propertyIndex = _.ix, f.p.setGroupProperty(PropertyInterface("Position", m)), f.s.setGroupProperty(PropertyInterface("Size", m)), f.r.setGroupProperty(PropertyInterface("Rotation", m)), Object.defineProperties(p, {
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(f.r)
              },
              size: {
                get: ExpressionPropertyInterface(f.s)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }

          function c(_, u, S) {
            function p(y) {
              return _.r.ix === y || y === "Round Corners 1" ? p.radius : null
            }
            var m = propertyGroupFactory(p, S),
              f = u;
            return p.propertyIndex = _.ix, f.rd.setGroupProperty(PropertyInterface("Radius", m)), Object.defineProperties(p, {
              radius: {
                get: ExpressionPropertyInterface(f.rd)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }

          function v(_, u, S) {
            function p(y) {
              return _.c.ix === y || y === "Copies" ? p.copies : _.o.ix === y || y === "Offset" ? p.offset : null
            }
            var m = propertyGroupFactory(p, S),
              f = u;
            return p.propertyIndex = _.ix, f.c.setGroupProperty(PropertyInterface("Copies", m)), f.o.setGroupProperty(PropertyInterface("Offset", m)), Object.defineProperties(p, {
              copies: {
                get: ExpressionPropertyInterface(f.c)
              },
              offset: {
                get: ExpressionPropertyInterface(f.o)
              },
              _name: {
                value: _.nm
              }
            }), p.mn = _.mn, p
          }
          return function(_, u, S) {
            var p;

            function m(y) {
              if (typeof y == "number") return y = y === void 0 ? 1 : y, y === 0 ? S : p[y - 1];
              for (var w = 0, E = p.length; w < E;) {
                if (p[w]._name === y) return p[w];
                w += 1
              }
              return null
            }

            function f() {
              return S
            }
            return m.propertyGroup = propertyGroupFactory(m, f), p = e(_, u, m.propertyGroup), m.numProperties = p.length, m._name = "Contents", m
          }
        }(),
        TextExpressionInterface = function() {
          return function(e) {
            var t;

            function r(i) {
              switch (i) {
                case "ADBE Text Document":
                  return r.sourceText;
                default:
                  return null
              }
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
        }();

      function _typeof(e) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
          return typeof r
        } : _typeof = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, _typeof(e)
      }
      var FootageInterface = function() {
          var e = function(i) {
              var s = "",
                a = i.getFootageData();

              function o() {
                return s = "", a = i.getFootageData(), l
              }

              function l(n) {
                if (a[n]) return s = n, a = a[n], _typeof(a) === "object" ? l : a;
                var h = n.indexOf(s);
                if (h !== -1) {
                  var d = parseInt(n.substr(h + s.length), 10);
                  return a = a[d], _typeof(a) === "object" ? l : a
                }
                return ""
              }
              return o
            },
            t = function(i) {
              function s(a) {
                return a === "Outline" ? s.outlineInterface() : null
              }
              return s._name = "Outline", s.outlineInterface = e(i), s
            };
          return function(r) {
            function i(s) {
              return s === "Data" ? i.dataInterface : null
            }
            return i._name = "Data", i.dataInterface = t(r), i
          }
        }(),
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
      var expressionHelpers = function() {
        function e(o, l, n) {
          l.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(o, l, n).bind(n)))
        }

        function t(o) {
          return o *= this.elem.globalData.frameRate, o -= this.offsetTime, o !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < o ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(o, this._cachingAtTime), this._cachingAtTime.lastFrame = o), this._cachingAtTime.value
        }

        function r(o) {
          var l = -.01,
            n = this.getValueAtTime(o),
            h = this.getValueAtTime(o + l),
            d = 0;
          if (n.length) {
            var g;
            for (g = 0; g < n.length; g += 1) d += Math.pow(h[g] - n[g], 2);
            d = Math.sqrt(d) * 100
          } else d = 0;
          return d
        }

        function i(o) {
          if (this.vel !== void 0) return this.vel;
          var l = -.001,
            n = this.getValueAtTime(o),
            h = this.getValueAtTime(o + l),
            d;
          if (n.length) {
            d = createTypedArray("float32", n.length);
            var g;
            for (g = 0; g < n.length; g += 1) d[g] = (h[g] - n[g]) / l
          } else d = (h - n) / l;
          return d
        }

        function s() {
          return this.pv
        }

        function a(o) {
          this.propertyGroup = o
        }
        return {
          searchExpressions: e,
          getSpeedAtTime: r,
          getVelocityAtTime: i,
          getValueAtTime: t,
          getStaticValueAtTime: s,
          setGroupProperty: a
        }
      }();

      function addPropertyDecorator() {
        function e(c, v, _) {
          if (!this.k || !this.keyframes) return this.pv;
          c = c ? c.toLowerCase() : "";
          var u = this.comp.renderedFrame,
            S = this.keyframes,
            p = S[S.length - 1].t;
          if (u <= p) return this.pv;
          var m, f;
          _ ? (v ? m = Math.abs(p - this.elem.comp.globalData.frameRate * v) : m = Math.max(0, p - this.elem.data.ip), f = p - m) : ((!v || v > S.length - 1) && (v = S.length - 1), f = S[S.length - 1 - v].t, m = p - f);
          var y, w, E;
          if (c === "pingpong") {
            var P = Math.floor((u - f) / m);
            if (P % 2 !== 0) return this.getValueAtTime((m - (u - f) % m + f) / this.comp.globalData.frameRate, 0)
          } else if (c === "offset") {
            var T = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              A = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              $ = this.getValueAtTime(((u - f) % m + f) / this.comp.globalData.frameRate, 0),
              I = Math.floor((u - f) / m);
            if (this.pv.length) {
              for (E = new Array(T.length), w = E.length, y = 0; y < w; y += 1) E[y] = (A[y] - T[y]) * I + $[y];
              return E
            }
            return (A - T) * I + $
          } else if (c === "continue") {
            var B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (E = new Array(B.length), w = E.length, y = 0; y < w; y += 1) E[y] = B[y] + (B[y] - L[y]) * ((u - p) / this.comp.globalData.frameRate) / 5e-4;
              return E
            }
            return B + (B - L) * ((u - p) / .001)
          }
          return this.getValueAtTime(((u - f) % m + f) / this.comp.globalData.frameRate, 0)
        }

        function t(c, v, _) {
          if (!this.k) return this.pv;
          c = c ? c.toLowerCase() : "";
          var u = this.comp.renderedFrame,
            S = this.keyframes,
            p = S[0].t;
          if (u >= p) return this.pv;
          var m, f;
          _ ? (v ? m = Math.abs(this.elem.comp.globalData.frameRate * v) : m = Math.max(0, this.elem.data.op - p), f = p + m) : ((!v || v > S.length - 1) && (v = S.length - 1), f = S[v].t, m = f - p);
          var y, w, E;
          if (c === "pingpong") {
            var P = Math.floor((p - u) / m);
            if (P % 2 === 0) return this.getValueAtTime(((p - u) % m + p) / this.comp.globalData.frameRate, 0)
          } else if (c === "offset") {
            var T = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              A = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              $ = this.getValueAtTime((m - (p - u) % m + p) / this.comp.globalData.frameRate, 0),
              I = Math.floor((p - u) / m) + 1;
            if (this.pv.length) {
              for (E = new Array(T.length), w = E.length, y = 0; y < w; y += 1) E[y] = $[y] - (A[y] - T[y]) * I;
              return E
            }
            return $ - (A - T) * I
          } else if (c === "continue") {
            var B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (E = new Array(B.length), w = E.length, y = 0; y < w; y += 1) E[y] = B[y] + (B[y] - L[y]) * (p - u) / .001;
              return E
            }
            return B + (B - L) * (p - u) / .001
          }
          return this.getValueAtTime((m - ((p - u) % m + p)) / this.comp.globalData.frameRate, 0)
        }

        function r(c, v) {
          if (!this.k) return this.pv;
          if (c = (c || .4) * .5, v = Math.floor(v || 5), v <= 1) return this.pv;
          var _ = this.comp.renderedFrame / this.comp.globalData.frameRate,
            u = _ - c,
            S = _ + c,
            p = v > 1 ? (S - u) / (v - 1) : 1,
            m = 0,
            f = 0,
            y;
          this.pv.length ? y = createTypedArray("float32", this.pv.length) : y = 0;
          for (var w; m < v;) {
            if (w = this.getValueAtTime(u + m * p), this.pv.length)
              for (f = 0; f < this.pv.length; f += 1) y[f] += w[f];
            else y += w;
            m += 1
          }
          if (this.pv.length)
            for (f = 0; f < this.pv.length; f += 1) y[f] /= v;
          else y /= v;
          return y
        }

        function i(c) {
          this._transformCachingAtTime || (this._transformCachingAtTime = {
            v: new Matrix
          });
          var v = this._transformCachingAtTime.v;
          if (v.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
            var _ = this.a.getValueAtTime(c);
            v.translate(-_[0] * this.a.mult, -_[1] * this.a.mult, _[2] * this.a.mult)
          }
          if (this.appliedTransformations < 2) {
            var u = this.s.getValueAtTime(c);
            v.scale(u[0] * this.s.mult, u[1] * this.s.mult, u[2] * this.s.mult)
          }
          if (this.sk && this.appliedTransformations < 3) {
            var S = this.sk.getValueAtTime(c),
              p = this.sa.getValueAtTime(c);
            v.skewFromAxis(-S * this.sk.mult, p * this.sa.mult)
          }
          if (this.r && this.appliedTransformations < 4) {
            var m = this.r.getValueAtTime(c);
            v.rotate(-m * this.r.mult)
          } else if (!this.r && this.appliedTransformations < 4) {
            var f = this.rz.getValueAtTime(c),
              y = this.ry.getValueAtTime(c),
              w = this.rx.getValueAtTime(c),
              E = this.or.getValueAtTime(c);
            v.rotateZ(-f * this.rz.mult).rotateY(y * this.ry.mult).rotateX(w * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult)
          }
          if (this.data.p && this.data.p.s) {
            var P = this.px.getValueAtTime(c),
              T = this.py.getValueAtTime(c);
            if (this.data.p.z) {
              var A = this.pz.getValueAtTime(c);
              v.translate(P * this.px.mult, T * this.py.mult, -A * this.pz.mult)
            } else v.translate(P * this.px.mult, T * this.py.mult, 0)
          } else {
            var $ = this.p.getValueAtTime(c);
            v.translate($[0] * this.p.mult, $[1] * this.p.mult, -$[2] * this.p.mult)
          }
          return v
        }

        function s() {
          return this.v.clone(new Matrix)
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(c, v, _) {
          var u = a(c, v, _);
          return u.dynamicProperties.length ? u.getValueAtTime = i.bind(u) : u.getValueAtTime = s.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u
        };
        var o = PropertyFactory.getProp;
        PropertyFactory.getProp = function(c, v, _, u, S) {
          var p = o(c, v, _, u, S);
          p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = e, p.loopIn = t, p.smooth = r, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = v.a === 1 ? v.k.length : 0, p.propertyIndex = v.ix;
          var m = 0;
          return _ !== 0 && (m = createTypedArray("float32", v.a === 1 ? v.k[0].s.length : v.k.length)), p._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: m
          }, expressionHelpers.searchExpressions(c, v, p), p.k && S.addDynamicProperty(p), p
        };

        function l(c) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }
        var n = ShapePropertyFactory.getConstructorFunction(),
          h = ShapePropertyFactory.getKeyframedConstructorFunction();

        function d() {}
        d.prototype = {
          vertices: function(v, _) {
            this.k && this.getValue();
            var u = this.v;
            _ !== void 0 && (u = this.getValueAtTime(_, 0));
            var S, p = u._length,
              m = u[v],
              f = u.v,
              y = createSizedArray(p);
            for (S = 0; S < p; S += 1) v === "i" || v === "o" ? y[S] = [m[S][0] - f[S][0], m[S][1] - f[S][1]] : y[S] = [m[S][0], m[S][1]];
            return y
          },
          points: function(v) {
            return this.vertices("v", v)
          },
          inTangents: function(v) {
            return this.vertices("i", v)
          },
          outTangents: function(v) {
            return this.vertices("o", v)
          },
          isClosed: function() {
            return this.v.c
          },
          pointOnPath: function(v, _) {
            var u = this.v;
            _ !== void 0 && (u = this.getValueAtTime(_, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(u));
            for (var S = this._segmentsLength, p = S.lengths, m = S.totalLength * v, f = 0, y = p.length, w = 0, E; f < y;) {
              if (w + p[f].addedLength > m) {
                var P = f,
                  T = u.c && f === y - 1 ? 0 : f + 1,
                  A = (m - w) / p[f].addedLength;
                E = bez.getPointInSegment(u.v[P], u.v[T], u.o[P], u.i[T], A, p[f]);
                break
              } else w += p[f].addedLength;
              f += 1
            }
            return E || (E = u.c ? [u.v[0][0], u.v[0][1]] : [u.v[u._length - 1][0], u.v[u._length - 1][1]]), E
          },
          vectorOnPath: function(v, _, u) {
            v == 1 ? v = this.v.c : v == 0 && (v = .999);
            var S = this.pointOnPath(v, _),
              p = this.pointOnPath(v + .001, _),
              m = p[0] - S[0],
              f = p[1] - S[1],
              y = Math.sqrt(Math.pow(m, 2) + Math.pow(f, 2));
            if (y === 0) return [0, 0];
            var w = u === "tangent" ? [m / y, f / y] : [-f / y, m / y];
            return w
          },
          tangentOnPath: function(v, _) {
            return this.vectorOnPath(v, _, "tangent")
          },
          normalOnPath: function(v, _) {
            return this.vectorOnPath(v, _, "normal")
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([d], n), extendPrototype([d], h), h.prototype.getValueAtTime = l, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var g = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(c, v, _, u, S) {
          var p = g(c, v, _, u, S);
          return p.propertyIndex = v.ix, p.lock = !1, _ === 3 ? expressionHelpers.searchExpressions(c, v.pt, p) : _ === 4 && expressionHelpers.searchExpressions(c, v.ks, p), p.k && c.addDynamicProperty(p), p
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
          var s, a;
          for (a = 0; a < r.length; a += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
          return i
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

      function SVGTintFilter(e, t, r, i, s) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), e.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
        var o = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
        e.appendChild(o)
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
          var a = createNS("mask"),
            o = createElementID();
          a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
          var l = createNS("g");
          for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")"); e[0];) l.appendChild(e[0]);
          this.elem.layerElement.appendChild(l), this.masker = a, r.setAttribute("stroke", "#fff")
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
            var a;
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var o = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                n = s.getTotalLength();
              a = "0 0 0 " + n * o + " ";
              var h = n * (l - o),
                d = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                g = Math.floor(h / d),
                c;
              for (c = 0; c < g; c += 1) a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
              a += "0 " + n * 10 + " 0 0"
            } else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
            s.setAttribute("stroke-dasharray", a)
          } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
          var v = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(v[0] * 255) + "," + bmFloor(v[1] * 255) + "," + bmFloor(v[2] * 255) + ")")
        }
      };

      function SVGTritoneFilter(e, t, r, i) {
        this.filterManager = t;
        var s = createNS("feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(s);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
        var o = createNS("feFuncR");
        o.setAttribute("type", "table"), a.appendChild(o), this.feFuncR = o;
        var l = createNS("feFuncG");
        l.setAttribute("type", "table"), a.appendChild(l), this.feFuncG = l;
        var n = createNS("feFuncB");
        n.setAttribute("type", "table"), a.appendChild(n), this.feFuncB = n, e.appendChild(a)
      }
      SVGTritoneFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v,
            s = i[0] + " " + r[0] + " " + t[0],
            a = i[1] + " " + r[1] + " " + t[1],
            o = i[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o)
        }
      };

      function SVGProLevelsFilter(e, t, r, i) {
        this.filterManager = t;
        var s = this.filterManager.effectElements,
          a = createNS("feComponentTransfer");
        (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
      }
      SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r
      }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, s) {
        for (var a = 0, o = 256, l, n = Math.min(e, t), h = Math.max(e, t), d = Array.call(null, {
            length: o
          }), g, c = 0, v = s - i, _ = t - e; a <= 256;) l = a / 256, l <= n ? g = _ < 0 ? s : i : l >= h ? g = _ < 0 ? i : s : g = i + v * Math.pow((l - e) / _, 1 / r), d[c] = g, c += 1, a += 256 / (o - 1);
        return d.join(" ")
      }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
        if (e || this.filterManager._mdf) {
          var t, r = this.filterManager.effectElements;
          this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
        }
      };

      function SVGDropShadowEffect(e, t, r, i, s) {
        var a = t.container.globalData.renderConfig.filterSize,
          o = t.data.fs || a;
        e.setAttribute("x", o.x || a.x), e.setAttribute("y", o.y || a.y), e.setAttribute("width", o.width || a.width), e.setAttribute("height", o.height || a.height), this.filterManager = t;
        var l = createNS("feGaussianBlur");
        l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, e.appendChild(l);
        var n = createNS("feOffset");
        n.setAttribute("dx", "25"), n.setAttribute("dy", "0"), n.setAttribute("in", i + "_drop_shadow_1"), n.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = n, e.appendChild(n);
        var h = createNS("feFlood");
        h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = h, e.appendChild(h);
        var d = createNS("feComposite");
        d.setAttribute("in", i + "_drop_shadow_3"), d.setAttribute("in2", i + "_drop_shadow_2"), d.setAttribute("operator", "in"), d.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(d);
        var g = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
        e.appendChild(g)
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
              a = r * Math.sin(i);
            this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
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
          for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== e.layerElement;) s += 1;
          var o;
          s <= a - 2 && (o = i[s + 1]);
          var l = createNS("use");
          l.setAttribute("href", "#" + t), o ? r.insertBefore(l, o) : r.appendChild(l)
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
        if (!this.findSymbol(t)) {
          var r = createElementID(),
            i = createNS("mask");
          i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
          var s = e.globalData.defs;
          s.appendChild(i);
          var a = createNS("symbol");
          a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), s.appendChild(a);
          var o = createNS("use");
          o.setAttribute("href", "#" + r), i.appendChild(o), t.data.hd = !1, t.show()
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
            a = i == 2 ? 0 : r;
          this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
          var o = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", o)
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
            a = t[3].p.v,
            o = s ? a : t[4].p.v,
            l = t[5].p.v,
            n = t[6].p.v,
            h = t[7].p.v;
          this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(o * .01, a * .01, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-l * degToRads, (n + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
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
    })
  }(lottie$1, lottie$1.exports)), lottie$1.exports
}
var lottieExports = requireLottie();
const Lottie = getDefaultExportFromCjs(lottieExports),
  _hoisted_1$1 = {
    "data-dark-screen": "",
    "data-start-trigger": "top center",
    class: "footer"
  },
  _hoisted_2$1 = {
    class: "wrap-content"
  },
  _hoisted_3$1 = {
    class: "locations-contact"
  },
  _hoisted_4$1 = {
    class: "contact-part"
  },
  _hoisted_5$1 = {
    class: "l1-t"
  },
  _hoisted_6$1 = {
    class: "l1"
  },
  _hoisted_7$1 = {
    class: "contact-part"
  },
  _hoisted_8$1 = {
    class: "l1-t"
  },
  _hoisted_9$1 = {
    class: "l1"
  },
  _hoisted_10$1 = {
    class: "contact-part mob-top"
  },
  _hoisted_11$1 = {
    class: "name l1-t"
  },
  _hoisted_12$1 = {
    class: "mobile-logo-place"
  },
  _hoisted_13$1 = {
    key: 0,
    src: _imports_0,
    role: "presentation",
    class: "inner-img"
  },
  _hoisted_14$1 = {
    key: 1,
    src: _imports_1,
    autoplay: "",
    loop: "",
    class: "inner-img",
    muted: "",
    playsinline: ""
  },
  _hoisted_15 = {
    class: "contact-part"
  },
  _hoisted_16 = {
    class: "name l1-t"
  },
  _hoisted_17 = {
    class: "all-rights l1"
  },
  _sfc_main$1 = defineComponent({
    __name: "Footer",
    props: {
      legal: {},
      socials: {},
      locations: {},
      isIos: {
        type: Boolean
      }
    },
    setup(e) {
      const t = ref();
      let r = null;
      const {
        isMobile: i
      } = useViewport(), s = () => {
        var n;
        (n = t.value) == null || n.goToAndPlay(0)
      }, a = n => new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: n,
        hour12: !1
      }), o = () => {
        const n = document.querySelectorAll("[data-time-place]"),
          h = a("Asia/Dubai"),
          d = a("Asia/Bangkok");
        n.forEach(g => {
          const c = g.getAttribute("data-time-place");
          c === "dubai" ? g.textContent = `(${h})` : c === "bangkok" && (g.textContent = `(${d})`)
        }), r = requestAnimationFrame(o)
      };
      return useInitAfterPreloader(() => {
        if (ScrollTrigger.create({
            trigger: "footer.footer",
            start: "top bottom",
            onEnter: () => {
              r && cancelAnimationFrame(r), o()
            },
            onLeaveBack: () => {
              r && cancelAnimationFrame(r)
            }
          }), i.value) {
          gsapWithCSS.to(".mobile-logo-place", {
            scrollTrigger: {
              trigger: "footer.footer",
              start: "top bottom",
              once: !0
            },
            autoAlpha: 1
          });
          return
        }
        ScrollTrigger.create({
          trigger: ".footer",
          start: "top bottom",
          once: !0,
          onEnter: () => {
            const n = document.querySelector("footer.footer .tftl-logo");
            n && (t.value = Lottie.loadAnimation({
              container: n,
              renderer: "svg",
              loop: !1,
              autoplay: !1,
              path: "/lottie/tftl-logo.json"
            }))
          }
        })
      }), (n, h) => {
        const d = __nuxt_component_0$4,
          g = __nuxt_component_1;
        return openBlock(), createElementBlock("footer", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createVNode(d, {
          external: "",
          target: "_blank",
          to: "https://thefirstthelast.agency/?utm_source=fame&utm_medium=article&utm_campaign=promo",
          class: "tftl-link",
          "aria-label": "link for web-studio The First The Last",
          onMouseenter: s
        }, {
          default: withCtx(() => h[0] || (h[0] = [createBaseVNode("div", {
            class: "logo-icon"
          }, null, -1), createBaseVNode("div", {
            class: "tftl-logo"
          }, null, -1), createBaseVNode("div", {
            class: "mobile-logo"
          }, null, -1)])),
          _: 1
        }), createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [h[1] || (h[1] = createBaseVNode("p", {
          class: "name l1-t"
        }, "Dubai, UAE", -1)), createVNode(d, {
          external: "",
          target: "_blank",
          to: `tel:${n.locations.list[0].phone}`
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.locations.list[0].phone
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createBaseVNode("span", _hoisted_5$1, toDisplayString(n.locations.list[0].name), 1), createVNode(d, {
          external: "",
          target: "_blank",
          to: `mailto:${n.locations.list[0].email}`,
          class: "email"
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.locations.list[0].email
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createBaseVNode("p", _hoisted_6$1, toDisplayString(n.locations.list[0].address), 1), h[2] || (h[2] = createBaseVNode("span", {
          "data-time-place": "dubai",
          class: "l1-t"
        }, "(14:19:27)", -1))]), createBaseVNode("div", _hoisted_7$1, [h[3] || (h[3] = createBaseVNode("p", {
          class: "name l1-t"
        }, "Bangkok, Thailand", -1)), createVNode(d, {
          external: "",
          target: "_blank",
          to: `tel:${n.locations.list[1].phone}`
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.locations.list[1].phone
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createBaseVNode("span", _hoisted_8$1, toDisplayString(n.locations.list[1].name), 1), createVNode(d, {
          external: "",
          target: "_blank",
          to: `mailto:${n.locations.list[1].email}`,
          class: "email"
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.locations.list[1].email
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createBaseVNode("p", _hoisted_9$1, toDisplayString(n.locations.list[1].address), 1), h[4] || (h[4] = createBaseVNode("span", {
          "data-time-place": "bangkok",
          class: "l1-t"
        }, "(14:19:27)", -1))])]), createBaseVNode("div", _hoisted_10$1, [createBaseVNode("p", _hoisted_11$1, toDisplayString(n.$t("social")), 1), createVNode(d, {
          external: "",
          target: "_blank",
          to: n.socials.instagram
        }, {
          default: withCtx(() => [createVNode(g, {
            text: "instagram"
          })]),
          _: 1
        }, 8, ["to"]), createVNode(d, {
          external: "",
          target: "_blank",
          to: n.socials.facebook
        }, {
          default: withCtx(() => [createVNode(g, {
            text: "facebook"
          })]),
          _: 1
        }, 8, ["to"]), createVNode(d, {
          external: "",
          target: "_blank",
          to: n.socials.tikTok
        }, {
          default: withCtx(() => [createVNode(g, {
            text: "tiktok"
          })]),
          _: 1
        }, 8, ["to"])]), createBaseVNode("div", _hoisted_12$1, [n.isIos ? (openBlock(), createElementBlock("img", _hoisted_13$1)) : (openBlock(), createElementBlock("video", _hoisted_14$1))]), createBaseVNode("div", _hoisted_15, [createBaseVNode("p", _hoisted_16, toDisplayString(n.$t("legal")), 1), createVNode(d, {
          to: n.legal.privacyPolicy,
          target: "_blank",
          external: ""
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.$t("privacy-policy")
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createVNode(d, {
          to: n.legal.termsOfUse,
          target: "_blank",
          external: ""
        }, {
          default: withCtx(() => [createVNode(g, {
            text: n.$t("terms-of-use")
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"]), createBaseVNode("p", _hoisted_17, " © " + toDisplayString(new Date().getFullYear()) + " fame. " + toDisplayString(n.$t("all-rights")), 1)])])])
      }
    }
  }),
  __nuxt_component_15 = _export_sfc(_sfc_main$1, [
    ["__scopeId", "data-v-5ab10561"]
  ]),
  isDefer = e => e === "defer" || e === !1;

function useAsyncData(...e) {
  var u;
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  let [r, i, s = {}] = e;
  if (typeof r != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof i != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const a = useNuxtApp(),
    o = i,
    l = () => asyncDataDefaults.value,
    n = () => a.isHydrating ? a.payload.data[r] : a.static.data[r];
  s.server = s.server ?? !0, s.default = s.default ?? l, s.getCachedData = s.getCachedData ?? n, s.lazy = s.lazy ?? !1, s.immediate = s.immediate ?? !0, s.deep = s.deep ?? asyncDataDefaults.deep, s.dedupe = s.dedupe ?? "cancel";
  const h = s.getCachedData(r, a),
    d = h != null;
  if (!a._asyncData[r] || !s.immediate) {
    (u = a.payload._errors)[r] ?? (u[r] = asyncDataDefaults.errorValue);
    const S = s.deep ? ref : shallowRef;
    a._asyncData[r] = {
      data: S(d ? h : s.default()),
      pending: ref(!d),
      error: toRef(a.payload._errors, r),
      status: ref("idle"),
      _default: s.default
    }
  }
  const g = {
    ...a._asyncData[r]
  };
  delete g._default, g.refresh = g.execute = (S = {}) => {
    if (a._asyncDataPromises[r]) {
      if (isDefer(S.dedupe ?? s.dedupe)) return a._asyncDataPromises[r];
      a._asyncDataPromises[r].cancelled = !0
    }
    if (S._initial || a.isHydrating && S._initial !== !1) {
      const m = S._initial ? h : s.getCachedData(r, a);
      if (m != null) return Promise.resolve(m)
    }
    g.pending.value = !0, g.status.value = "pending";
    const p = new Promise((m, f) => {
      try {
        m(o(a))
      } catch (y) {
        f(y)
      }
    }).then(async m => {
      if (p.cancelled) return a._asyncDataPromises[r];
      let f = m;
      s.transform && (f = await s.transform(m)), s.pick && (f = pick(f, s.pick)), a.payload.data[r] = f, g.data.value = f, g.error.value = asyncDataDefaults.errorValue, g.status.value = "success"
    }).catch(m => {
      if (p.cancelled) return a._asyncDataPromises[r];
      g.error.value = createError(m), g.data.value = unref(s.default()), g.status.value = "error"
    }).finally(() => {
      p.cancelled || (g.pending.value = !1, delete a._asyncDataPromises[r])
    });
    return a._asyncDataPromises[r] = p, a._asyncDataPromises[r]
  }, g.clear = () => clearNuxtDataByKey(a, r);
  const c = () => g.refresh({
      _initial: !0
    }),
    v = s.server !== !1 && a.payload.serverRendered;
  {
    const S = getCurrentInstance();
    if (S && v && s.immediate && !S.sp && (S.sp = []), S && !S._nuxtOnBeforeMountCbs) {
      S._nuxtOnBeforeMountCbs = [];
      const f = S._nuxtOnBeforeMountCbs;
      onBeforeMount(() => {
        f.forEach(y => {
          y()
        }), f.splice(0, f.length)
      }), onUnmounted(() => f.splice(0, f.length))
    }
    v && a.isHydrating && (g.error.value || h != null) ? (g.pending.value = !1, g.status.value = g.error.value ? "error" : "success") : S && (a.payload.serverRendered && a.isHydrating || s.lazy) && s.immediate ? S._nuxtOnBeforeMountCbs.push(c) : s.immediate && c();
    const p = getCurrentScope();
    if (s.watch) {
      const f = watch(s.watch, () => g.refresh());
      p && onScopeDispose(f)
    }
    const m = a.hook("app:data:refresh", async f => {
      (!f || f.includes(r)) && await g.refresh()
    });
    p && onScopeDispose(m)
  }
  const _ = Promise.resolve(a._asyncDataPromises[r]).then(() => g);
  return Object.assign(_, g), _
}

function clearNuxtDataByKey(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = asyncDataDefaults.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = void 0, e._asyncData[t].error.value = asyncDataDefaults.errorValue, e._asyncData[t].pending.value = !1, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0), e._asyncDataPromises[t] = void 0)
}

function pick(e, t) {
  const r = {};
  for (const i of t) r[i] = e[i];
  return r
}
const _hoisted_1 = {
    class: "lottie-logo-wrap"
  },
  _hoisted_2 = {
    key: 0,
    src: _imports_0,
    role: "presentation",
    class: "inner-img"
  },
  _hoisted_3 = {
    key: 1,
    src: _imports_1,
    autoplay: "",
    loop: "",
    class: "inner-img",
    muted: "",
    playsinline: ""
  },
  _hoisted_4 = {
    key: 0,
    class: "page"
  },
  _hoisted_5 = {
    class: "anim-image-place"
  },
  _hoisted_6 = {
    id: "anim-image-place-main",
    class: "image-wrap"
  },
  _hoisted_7 = {
    class: "image-sticky"
  },
  _hoisted_8 = {
    class: "perspective-image"
  },
  _hoisted_9 = {
    class: "card-wrap"
  },
  _hoisted_10 = {
    id: "team-slider-place",
    class: "card-face front"
  },
  _hoisted_11 = ["src"],
  _hoisted_12 = {
    class: "card-face back"
  },
  _hoisted_13 = ["src"],
  _hoisted_14 = {
    class: "wrap-sticky"
  },
  _sfc_main = defineComponent({
    __name: "index",
    async setup(e) {
      var c, v;
      let t, r;
      const {
        locale: i
      } = useI18n(), s = useRoute(), {
        data: a
      } = ([t, r] = withAsyncContext(async () => useAsyncData(`main-page-${i.value}`, async () => await $fetch("/api/main-page", {
        query: {
          locale: /(\/ru)/g.test(s.fullPath) ? "ru" : "en"
        }
      }))), t = await t, r(), t);
      a.value && useSeoMeta(a.value.meta);
      const o = {
          privacyPolicy: ((c = a.value) == null ? void 0 : c.privacyPolicy) || "",
          termsOfUse: ((v = a.value) == null ? void 0 : v.termsOfUse) || ""
        },
        l = ref(!1),
        n = useState("init-logo-footer", () => !1),
        h = useState("show-team-slide", () => !1),
        d = useState("team-slider-main-place", () => !1);
      return useInitAfterPreloader(() => {
        l.value = isIOS();
        const _ = gsapWithCSS.matchMedia(),
          u = document.querySelector(".lottie-logo-wrap");
        _.add("(min-width: 1024px)", () => {
          gsapWithCSS.to("#anim-image-place-main .card-wrap", {
            rotateY: 360,
            scrollTrigger: {
              trigger: "#anim-image-place-main .image-sticky",
              start: "top top",
              endTrigger: "section.team-slider",
              end: "top top",
              scrub: .4,
              onUpdate({
                progress: S
              }) {
                S > .6 && !h.value && (h.value = !0), S < .6 && h.value && (h.value = !1)
              }
            },
            ease: "power1.in"
          }), gsapWithCSS.to(u, {
            scale: 1,
            duration: .6,
            ease: "out-quint",
            delay: .1
          }), gsapWithCSS.fromTo("article.full-cycle", {
            transform: "translateY(0%)"
          }, {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "center bottom",
              scrub: .4
            },
            transform: "translateY(calc(100% + 0.5rem))"
          }), gsapWithCSS.to(".lottie-logo-wrap", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash .plash-red-anim",
              start: "top bottom",
              end: "center bottom",
              scrub: .4
            },
            bottom: "0",
            onComplete: () => {
              setTimeout(() => {
                n.value = !0
              }, 200)
            }
          }), ScrollTrigger.create({
            trigger: "section.team-slider",
            start: "top center",
            once: !0,
            onEnter: () => {
              var S;
              (S = ScrollTrigger.getById("team-slider-sticky")) == null || S.refresh()
            }
          }), ScrollTrigger.create({
            trigger: "section.team-slider",
            start: "top top",
            end: "top -1%",
            id: "team-slider-sticky",
            onEnter: () => {
              gsapWithCSS.set("#anim-image-place-main", {
                autoAlpha: 0
              }), d.value = !0
            },
            onLeaveBack: () => {
              gsapWithCSS.set("#anim-image-place-main", {
                autoAlpha: 1
              }), d.value = !1
            }
          })
        }), _.add("(max-width: 1023px)", () => {
          gsapWithCSS.to(u, {
            scale: 1,
            duration: .6,
            ease: "out-quint",
            delay: .5,
            onStart: () => {
              gsapWithCSS.set(".lottie-logo-wrap", {
                autoAlpha: 1
              })
            }
          }), setTimeout(() => {
            gsapWithCSS.fromTo("article.full-cycle", {
              transform: "translateY(0%)"
            }, {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash .plash-red-anim",
                start: "top bottom",
                end: "center bottom",
                scrub: .4
              },
              transform: "translateY(calc(100% + 0.5rem))"
            }), gsapWithCSS.to(".lottie-logo-wrap", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash .plash-red-anim",
                start: "top bottom",
                end: "center bottom",
                scrub: .4
              },
              bottom: "0.5rem",
              onComplete: () => {
                setTimeout(() => {
                  n.value = !0
                }, 200)
              }
            })
          }, 1500)
        })
      }), (_, u) => {
        var C;
        const S = __nuxt_component_0$3,
          p = __nuxt_component_1$1,
          m = _sfc_main$g,
          f = __nuxt_component_3,
          y = __nuxt_component_4,
          w = __nuxt_component_5,
          E = __nuxt_component_6,
          P = __nuxt_component_7,
          T = __nuxt_component_8,
          A = __nuxt_component_9,
          $ = __nuxt_component_10,
          I = __nuxt_component_11,
          B = __nuxt_component_12,
          L = __nuxt_component_13,
          N = __nuxt_component_14,
          F = __nuxt_component_15;
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["wrap-page", [unref(i)]])
        }, [createVNode(S, {
          title: ((C = unref(a)) == null ? void 0 : C.hero.title) ?? ""
        }, null, 8, ["title"]), createVNode(p), createVNode(y, null, {
          default: withCtx(() => [createVNode(m), createVNode(f), createBaseVNode("div", _hoisted_1, [unref(l) ? (openBlock(), createElementBlock("img", _hoisted_2)) : (openBlock(), createElementBlock("video", _hoisted_3))])]),
          _: 1
        }), unref(a) ? (openBlock(), createElementBlock("main", _hoisted_4, [createBaseVNode("div", null, [createVNode(w, {
          data: unref(a).hero
        }, null, 8, ["data"]), createVNode(E, {
          data: unref(a).about
        }, null, 8, ["data"])]), createVNode(P, {
          data: unref(a).statistics
        }, null, 8, ["data"]), createVNode(T, {
          data: unref(a).services
        }, null, 8, ["data"]), createBaseVNode("div", _hoisted_5, [createVNode(y, null, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("article", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [unref(h) ? createCommentVNode("", !0) : (openBlock(), createElementBlock("img", {
            key: 0,
            src: unref(a).benefits.stickySlides[0].medium,
            role: "presentation",
            class: "inner-img top-img",
            loading: "lazy"
          }, null, 8, _hoisted_11))]), createBaseVNode("div", _hoisted_12, [createBaseVNode("img", {
            src: unref(a).benefits.stickySlides[1].medium,
            role: "presentation",
            class: "inner-img",
            loading: "lazy"
          }, null, 8, _hoisted_13)])])])])])]),
          _: 1
        }), createVNode(A, {
          data: unref(a).benefits
        }, null, 8, ["data"]), createVNode($, {
          data: unref(a).partnerLogos
        }, null, 8, ["data"]), createVNode(I, {
          data: unref(a).partnership,
          "sticky-slides": unref(a).benefits.stickySlides
        }, null, 8, ["data", "sticky-slides"]), createBaseVNode("div", _hoisted_14, [createVNode(B, {
          data: unref(a).teamSlides
        }, null, 8, ["data"]), u[0] || (u[0] = createBaseVNode("div", {
          class: "contact-reveal-pause"
        }, null, -1)), createVNode(L, {
          legal: o
        })])]), createVNode(N, {
          data: unref(a).locations
        }, null, 8, ["data"]), createVNode(F, {
          legal: o,
          "is-ios": unref(l),
          socials: unref(a).socials,
          locations: unref(a).locations
        }, null, 8, ["is-ios", "socials", "locations"])])) : createCommentVNode("", !0), u[1] || (u[1] = createBaseVNode("div", {
          id: "change-lang-overlap"
        }, null, -1))], 2)
      }
    }
  }),
  index = _export_sfc(_sfc_main, [
    ["__scopeId", "data-v-1b86b97a"]
  ]);
export {
  index as
  default
};