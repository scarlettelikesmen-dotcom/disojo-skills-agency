/* https://verholy.com/_nuxt/0c9e5da.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1], {
    657: function(e, t, r) {
      "use strict";
      r(15), r(7), r(11), r(18), r(19);
      var d = r(6);

      function n(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function l(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? n(Object(source), !0).forEach((function(t) {
            Object(d.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }
      var o = {
          props: {
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            description: {
              type: String
            },
            appearance: {
              type: Boolean,
              default: !1
            },
            position: {
              type: Boolean,
              default: !1
            },
            indent: {
              type: Boolean,
              default: !1
            },
            positionOffer: {
              type: Boolean,
              default: !1
            },
            subtitleHide: {
              type: Boolean,
              default: !1
            },
            animationProps: {
              type: Object,
              default: function() {
                return {}
              }
            }
          }
        },
        w = (r(681), r(4)),
        component = Object(w.a)(o, (function() {
          var e = this,
            t = e._self._c;
          return t("div", {
            staticClass: "heading",
            class: {
              appearance: e.appearance,
              position: e.position,
              indent: e.indent,
              "position-offer": e.positionOffer
            }
          }, [e.subtitle ? t("h6", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: l({
                opacity: .4
              }, e.animationProps),
              expression: "{ opacity: 0.4, ...animationProps }"
            }],
            staticClass: "h6",
            class: {
              "subtitle-hide": e.subtitleHide
            }
          }, [e._v(e._s(e.subtitle))]) : e._e(), e._v(" "), e.title ? t("h2", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: l({}, e.animationProps),
              expression: "{ ...animationProps }"
            }],
            staticClass: "h2",
            domProps: {
              innerHTML: e._s(e.title)
            }
          }) : e._e(), e._v(" "), e.description ? t("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: l({
                opacity: .4
              }, e.animationProps),
              expression: "{ opacity: 0.4, ...animationProps }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: e._s(e.description)
            }
          }) : e._e()])
        }), [], !1, null, null, null);
      t.a = component.exports
    },
    662: function(e, t, r) {
      "use strict";
      var d = r(657),
        n = {
          props: {
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            slides: {
              type: Array
            },
            numbering: {
              type: Boolean,
              default: !1
            },
            leftPosition: {
              type: Boolean,
              default: !1
            },
            lineFood: {
              type: Boolean,
              default: !1
            },
            subtitleHide: {
              type: Boolean,
              default: !1
            },
            line: {
              type: Boolean,
              default: !1
            },
            lineSenoval: {
              type: Boolean,
              default: !1
            },
            headerShow: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            AppHeading: d.a
          },
          data: function() {
            return {
              mainSliderOptions: {
                loop: !0,
                loopedSlides: 5,
                slidesPerView: 1,
                speed: 1200,
                centeredSlides: !0,
                longSwipesRatio: .5,
                loopPreventsSlide: !1,
                watchSlidesProgress: !0,
                mousewheelControl: !0,
                keyboardControl: !0,
                preloadImages: !1,
                autoplay: !1,
                breakpoints: {
                  900: {
                    autoplay: !1
                  }
                },
                lazy: {
                  loadPrevNext: !0
                },
                navigation: {
                  nextEl: ".slider-next",
                  prevEl: ".slider-prev"
                },
                pagination: {
                  el: ".swiper-numbers",
                  type: "custom",
                  renderCustom: function(e, t, r) {
                    return "".concat(t, "<span>").concat(r, "</span>")
                  }
                }
              },
              previewsSliderOptions: {
                loop: !0,
                loopedSlides: 5,
                slidesPerView: 3,
                speed: 800,
                centeredSlides: !0,
                preloadImages: !1,
                lazy: {
                  loadPrevNext: !0
                }
              }
            }
          },
          methods: {
            cursorHide: function(e) {
              var cursor = this.$refs.cursor;
              cursor.style.opacity = 0, cursor.classList.remove("active"), cursor.classList.add("inActive")
            },
            cursorLeft: function(e) {
              var cursor = this.$refs.cursor,
                t = cursor.clientHeight,
                r = cursor.clientWidth,
                d = e.x - r / 2,
                n = e.y - t / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(n, "px;\n          left: ").concat(d, "px;\n          transform: rotate(-180deg);\n        "), cursor.classList.add("active"), cursor.classList.remove("inActive"))
            },
            cursorRight: function(e) {
              var cursor = this.$refs.cursor,
                t = cursor.clientHeight,
                r = cursor.clientWidth,
                d = e.x - r / 2,
                n = e.y - t / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(n, "px;\n          left: ").concat(d, "px;\n        "), cursor.classList.add("active"), cursor.classList.remove("inActive"))
            },
            initCustomTransition: function() {
              this.sliderMain.on("progress", (function() {
                for (var e = this, i = 0; i < e.slides.length; i++) {
                  var t = e.slides[i].progress * (.4 * e.width);
                  e.slides[i].classList.contains("swiper-slide-active"), e.slides[i].querySelector(".slide-inner").style.transform = "translate3d(".concat(t, "px, 0, 0)")
                }
              })), this.sliderMain.on("touchStart", (function() {
                for (var i = 0; i < this.slides.length; i++) this.slides[i].style.transition = ""
              })), this.sliderMain.on("setTransition", (function(e) {
                for (var t = this, i = 0; i < t.slides.length; i++) t.slides[i].style.transition = e + "ms", t.slides[i].querySelector(".slide-inner").style.transition = e + "ms"
              }))
            }
          },
          mounted: function() {
            var e = this;
            if (this.slides.length > 0) {
              var t = this.sliderMain,
                r = this.sliderPreviews;
              if (t.controller.control = r, r.controller.control = t, this.slides[0].attributes.title) {
                var d = this.$refs.sliderText;
                t.on("transitionStart", (function() {
                  var t = this.slides[this.activeIndex];
                  if (t) {
                    var title = t.querySelector(".hidden .h6").textContent;
                    d.classList.remove("changeFast"), d.classList.add("change");
                    setTimeout((function() {
                      e.$refs.textInTextBlock.textContent = e.$t("Discover more"), e.$refs.titleInTextBlock.textContent = title
                    }), 300), setTimeout((function() {
                      d.classList.add("changeFast"), d.classList.remove("change")
                    }), 1200)
                  }
                })), t.on("slideChange", (function() {
                  var t = this.activeIndex,
                    r = this.slides[t];
                  if (r) {
                    r.querySelector(".hidden .h3").textContent, r.querySelector(".hidden .h6").textContent;
                    var link = r.querySelector(".hidden a").pathname;
                    e.$refs.linkInTextBlock && (e.$refs.linkInTextBlock.to = link)
                  }
                }))
              }
              this.initCustomTransition()
            }
          }
        },
        l = (r(819), r(4)),
        component = Object(l.a)(n, (function() {
          var e = this,
            t = e._self._c;
          return e.slides.length > 0 ? t("div", {
            staticClass: "slider-wrapper",
            class: {
              numbering: e.numbering,
              left: e.leftPosition,
              "subtitle-hide": e.subtitleHide
            }
          }, [e.headerShow ? t("app-heading", {
            attrs: {
              subtitle: e.subtitle,
              title: e.title
            }
          }) : e._e(), e._v(" "), t("div", {
            staticClass: "content"
          }, [t("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderMain",
              value: e.mainSliderOptions,
              expression: "mainSliderOptions",
              arg: "sliderMain"
            }],
            staticClass: "slider slider-main",
            on: {
              mouseleave: e.cursorHide
            }
          }, [t("div", {
            staticClass: "swiper-wrapper"
          }, e._l(e.slides, (function(r) {
            return t("div", {
              key: r.key,
              staticClass: "swiper-slide"
            }, [t("div", {
              staticClass: "slide-inner"
            }, [r.attributes.href ? e._e() : t("img", {
              directives: [{
                name: "lazy-load",
                rawName: "v-lazy-load"
              }],
              attrs: {
                "data-src": e.$env.imgUrl + r.attributes.image,
                alt: e.title,
                "data-not-lazy": ""
              }
            }), e._v(" "), r.attributes.href ? t("nuxt-link", {
              attrs: {
                to: e.localePath("/" + r.attributes.href)
              }
            }, [t("img", {
              staticClass: "swiper-lazy",
              attrs: {
                "data-src": e.$env.imgUrl + r.attributes.image,
                alt: e.title,
                "data-not-lazy": ""
              }
            })]) : e._e(), e._v(" "), r.attributes.title ? t("div", {
              staticClass: "hidden"
            }, [t("p", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: .4
                },
                expression: "{ opacity: 0.4 }"
              }],
              staticClass: "h6"
            }, [e._v("\n                " + e._s(r.attributes.title) + "\n              ")]), e._v(" "), t("h3", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {},
                expression: "{}"
              }],
              staticClass: "h3"
            }, [e._v("\n                " + e._s(r.attributes.description) + "\n              ")]), e._v(" "), t("a", {
              attrs: {
                href: e.localePath("/" + r.attributes.href)
              }
            })]) : e._e()], 1)])
          })), 0), e._v(" "), t("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.numbering,
              expression: "numbering"
            }],
            staticClass: "swiper-numbers action"
          }), e._v(" "), t("div", {
            staticClass: "slider-prev no-cursor",
            on: {
              mousemove: e.cursorLeft
            }
          }, [e._m(0)]), e._v(" "), t("div", {
            staticClass: "slider-next no-cursor",
            on: {
              mousemove: e.cursorRight
            }
          }, [e._m(1)]), e._v(" "), t("div", {
            ref: "cursor",
            staticClass: "slider-cursor"
          }, [t("svg", {
            attrs: {
              width: "74",
              height: "74",
              viewBox: "0 0 74 74",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [t("circle", {
            attrs: {
              id: "my-circle",
              opacity: "0.2",
              r: "36.5",
              transform: "matrix(-1 0 0 1 37 37)",
              stroke: "white"
            }
          }), e._v(" "), t("path", {
            attrs: {
              d: "M27.2617 36.2694C29.7773 36.2694 33.2773 36.3824 36.668 36.4954C40.0586 36.4954 43.4492 36.6084 46.0742 36.6084C46.9492 36.6084 47.6055 36.6084 48.2617 36.6084C48.1523 36.6084 48.1523 36.4954 48.043 36.4954C46.8398 35.9305 45.418 34.9135 44.1055 33.6706C43.7773 33.3316 43.4492 32.9926 43.2305 32.6536C42.9023 32.3146 42.6836 31.9757 42.4648 31.6367C42.2461 31.2977 42.0273 30.9587 41.8086 30.6197C41.5898 30.2807 41.4805 29.9418 41.2617 29.6028C41.1523 29.2638 40.9336 29.0378 40.9336 28.6988C40.8242 28.4728 40.7148 28.2469 40.7148 28.0209C40.6055 27.6819 40.4961 27.4559 40.4961 27.4559C40.4961 27.4559 40.9336 27.4559 41.2617 27.3429C41.5898 27.2299 42.0273 27.0039 42.0273 27.0039C42.0273 27.0039 42.0273 27.2299 42.1367 27.5689C42.1367 27.7949 42.2461 27.9079 42.2461 28.2469C42.2461 28.4728 42.4648 28.8118 42.4648 29.0378C42.5742 29.3768 42.6836 29.6028 42.793 29.9418C42.9023 30.2808 43.1211 30.6197 43.3398 30.9587C43.5586 31.2977 43.7773 31.6367 43.9961 31.9757C44.2148 32.3147 44.4336 32.6536 44.7617 32.9926C45.8555 34.2355 47.168 35.2525 48.3711 35.8175C48.918 36.1565 49.793 36.4954 49.793 36.4954L50.9961 37.0604L49.6836 37.5124C49.6836 37.5124 48.918 37.8514 48.3711 38.1904C47.2773 38.7553 45.9648 39.7723 44.7617 41.0152C44.4336 41.3542 44.2148 41.6932 43.9961 42.0322C43.7773 42.3711 43.5586 42.7101 43.3398 43.0491C43.1211 43.3881 43.0117 43.7271 42.793 44.0661C42.5742 44.405 42.5742 44.744 42.4648 44.97C42.3555 45.309 42.2461 45.535 42.2461 45.761C42.1367 45.987 42.1367 46.2129 42.1367 46.4389C42.0273 46.7779 42.0273 47.0039 42.0273 47.0039C42.0273 47.0039 41.5898 46.7779 41.2617 46.6649C40.9336 46.5519 40.4961 46.5519 40.4961 46.5519C40.4961 46.5519 40.6055 46.3259 40.7148 45.987C40.8242 45.761 40.8242 45.535 40.9336 45.309C41.043 45.083 41.1523 44.744 41.2617 44.4051C41.3711 44.0661 41.5898 43.7271 41.8086 43.3881C42.0273 43.0491 42.1367 42.7101 42.4648 42.3711C42.6836 42.0322 42.9023 41.6932 43.2305 41.3542C43.5586 41.0152 43.7773 40.6762 44.1055 40.3372C45.3086 39.0943 46.8398 38.0774 48.043 37.5124C48.1523 37.5124 48.1523 37.3994 48.2617 37.3994C47.6055 37.3994 46.9492 37.3994 46.0742 37.3994C43.5586 37.3994 40.0586 37.5124 36.668 37.5124C33.2773 37.6254 29.8867 37.6254 27.2617 37.7384C24.7461 37.8514 22.9961 37.8514 22.9961 37.8514C22.9961 37.8514 23.1055 37.3994 23.1055 37.0604C23.1055 36.7214 22.9961 36.2694 22.9961 36.2694C22.9961 36.2694 24.6367 36.1564 27.2617 36.2694Z",
              fill: "white"
            }
          })])])]), e._v(" "), t("div", {
            staticClass: "slider-previews-wrap"
          }, [t("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderPreviews",
              value: e.previewsSliderOptions,
              expression: "previewsSliderOptions",
              arg: "sliderPreviews"
            }],
            staticClass: "slider slider-previews"
          }, [t("div", {
            staticClass: "swiper-wrapper"
          }, e._l(e.slides, (function(r) {
            return t("div", {
              key: r.key,
              staticClass: "swiper-slide"
            }, [t("img", {
              directives: [{
                name: "imgZoomScroll",
                rawName: "v-imgZoomScroll"
              }],
              staticClass: "swiper-lazy",
              attrs: {
                "data-src": e.$env.imgUrl + r.attributes.image,
                alt: e.title,
                "data-not-lazy": ""
              }
            })])
          })), 0), e._v(" "), t("span"), e._v(" "), t("span")])]), e._v(" "), e.slides[0].attributes.href ? e._e() : [e.slides[0].attributes.title ? t("div", {
            ref: "sliderText",
            staticClass: "slider-text cursor-black"
          }, [t("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            ref: "textInTextBlock",
            staticClass: "h6"
          }, [e._v("\n          " + e._s(e.$t("Discover more")) + "\n        ")]), e._v(" "), t("h3", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{}"
            }],
            ref: "titleInTextBlock",
            staticClass: "h3"
          }, [e._v("\n          " + e._s(e.slides[0].attributes.title) + "\n        ")])]) : e._e()], e._v(" "), e.slides[0].attributes.href ? [t("nuxt-link", {
            ref: "linkInTextBlock",
            attrs: {
              to: e.localePath("/" + e.slides[0].attributes.href)
            }
          }, [e.slides[0].attributes.title ? t("div", {
            ref: "sliderText",
            staticClass: "slider-text active-cursor cursor-black"
          }, [t("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            ref: "textInTextBlock",
            staticClass: "h6"
          }, [e._v("\n            " + e._s(e.$t("Discover more")) + "\n          ")]), e._v(" "), t("h3", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{}"
            }],
            ref: "titleInTextBlock",
            staticClass: "h3"
          }, [e._v("\n            " + e._s(e.slides[0].attributes.title) + "\n          ")])]) : e._e()])] : e._e()], 2), e._v(" "), e.lineFood ? t("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1474",
              viewBox: "0 0 1440 1474",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [t("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-53.7576 1301.75C17.2492 1241.32 -22.8129 1138.53 206.043 840.488C316.384 696.789 467.719 566.319 687.733 537.427C907.746 508.535 1407.11 571.27 1449.16 171.833",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : e._e(), e._v(" "), e.line ? t("svg", {
            staticClass: "lineSVG lineSVG-story",
            attrs: {
              width: "1440",
              height: "760",
              viewBox: "0 0 1440 760",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [t("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-420.644 51.3388C-313.972 -25.6691 -156.907 -6.52874 -40.1768 56.3502C180.242 175.124 293.039 413.777 483.405 571.985C639.52 701.725 851.478 773.61 1059.06 756.119C1266.63 738.629 1465.64 628.6 1572.88 460.666",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : e._e(), e._v(" "), e.lineSenoval ? t("svg", {
            staticClass: "lineSVG lineSVG-senoval",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1176",
              viewBox: "0 0 1440 1176",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [t("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw",
              value: {
                start: "top bottom",
                duration: 3
              },
              expression: "{ start: 'top bottom', duration: 3 }"
            }],
            attrs: {
              opacity: "0.2",
              d: "M-82.28 -552.089C52.84 -596.759 203.26 -543.911 320.74 -465.791C438.22 -387.671 536.51 -284.759 656.91 -210.91C771.31 -140.699 904.65 -100.53 1039.91 -91.4405C1183.01 -81.8423 1326.15 -106.164 1455.19 -166.451C1544.51 -152.936 1581.79 -44.3708 1530.51 27.1073C1479.23 98.5854 1380.13 123.167 1289.71 122.188C1199.29 121.208 1109.63 100.304 1019.31 104.479C816.21 113.875 640.16 249.518 523.31 409.261C406.46 569.005 335.16 754.606 240.85 927.518C195.85 1010.06 141.01 1094.06 54.54 1136.48C-31.93 1178.91 -157.24 1160.75 -199 1076.6C-148.7 1069.73 -103.07 1108.97 -80.68 1152.75C-58.29 1196.53 -51.14 1246.15 -30.53 1290.73C14.02 1387.06 125.47 1450.8 234.95 1442.52C282.95 1438.9 328.86 1422.98 374.56 1408.42C420.26 1393.86 467.44 1380.41 515.56 1381.99C563.68 1383.56 613.56 1402.61 640.2 1441.12C666.84 1479.63 662 1538.71 622.52 1565.17C583.04 1591.63 515.7 1566.26 513.93 1520.06C512.57 1484.47 547.25 1455.19 583.65 1448.34C620.05 1441.48 657.38 1451.4 692.98 1461.43C899.43 1519.6 1104.4 1745.93 1315.9 1783.86C1920.61 1892.32 2567.49 1765.63 3079.6 1438.51",
              stroke: "#FFD9B6"
            }
          })]) : e._e()], 1) : e._e()
        }), [function() {
          var e = this._self._c;
          return e("div", {
            staticClass: "relative-wrap"
          }, [e("div", {
            staticClass: "icon-btn"
          })])
        }, function() {
          var e = this._self._c;
          return e("div", {
            staticClass: "relative-wrap"
          }, [e("div", {
            staticClass: "icon-btn"
          })])
        }], !1, null, null, null);
      t.a = component.exports
    },
    667: function(e, t, r) {
      var content = r(682);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [e.i, content, ""]
      ]), content.locals && (e.exports = content.locals);
      (0, r(10).default)("0cba1d92", content, !0, {
        sourceMap: !1
      })
    },
    681: function(e, t, r) {
      "use strict";
      r(667)
    },
    682: function(e, t, r) {
      var d = r(9)(!1);
      d.push([e.i, "@media(max-width: 600px){.heading{max-width:90%;margin-left:auto;margin-right:auto}}.heading.position{max-width:83.6805555556vw;margin-left:auto;margin-right:auto;height:100vh;margin-bottom:-10.5555555556vw;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;z-index:1}@media(max-width: 1200px){.heading.position{margin-bottom:-132px}}@media(max-width: 900px){.heading.position{margin-bottom:-124px}}@media(max-width: 600px){.heading.position{max-width:calc(100% - 46px);margin-bottom:-96px;height:calc(100vh - 201px)}}@media(max-width: 400px){.heading.position{max-width:calc(100% - 32px);margin-bottom:-88px;height:calc(100vh - 165px)}}.heading.position-offer{height:auto;padding:22.2222222222vw 0 10.5555555556vw 0;margin-bottom:unset}@media(max-width: 1200px){.heading.position-offer{padding:340px 0 132px 0}}@media(max-width: 900px){.heading.position-offer{padding:410px 0 124px 0}}@media(max-width: 600px){.heading.position-offer{padding:270px 0 96px 0}}@media(max-width: 400px){.heading.position-offer{padding:265px 0 88px 0}}.heading.indent{margin-bottom:5vw}@media(max-width: 1200px){.heading.indent{margin-bottom:64px}}@media(max-width: 600px){.heading.indent{margin-bottom:48px}}.heading.appearance{color:#353535}.heading .h2 div:first-child{padding-top:3px}.heading .h6{margin-bottom:1.1111111111vw;opacity:.4;display:inline-block}@media(max-width: 1200px){.heading .h6{margin-bottom:16px}}@media(max-width: 600px){.heading .h6{margin-bottom:14px}}.heading .h6.subtitle-hide{display:none}@media(max-width: 900px){.heading .h6{opacity:.6}}@media(max-width: 600px){.heading .h6{opacity:.65}}.heading .text{max-width:30.0694444444vw;margin-top:2.7777777778vw;margin-left:auto;margin-right:auto;opacity:.4}@media(max-width: 1200px){.heading .text{margin-top:40px}}@media(max-width: 900px){.heading .text{margin-top:32px}}@media(max-width: 600px){.heading .text{margin-top:24px}}@media(max-width: 1200px){.heading .text{max-width:384px}}@media(max-width: 900px){.heading .text{max-width:344px}}@media(max-width: 600px){.heading .text{max-width:100%}}", ""]), e.exports = d
    },
    740: function(e, t, r) {
      var content = r(820);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [e.i, content, ""]
      ]), content.locals && (e.exports = content.locals);
      (0, r(10).default)("27c5a95f", content, !0, {
        sourceMap: !1
      })
    },
    819: function(e, t, r) {
      "use strict";
      r(740)
    },
    820: function(e, t, r) {
      var d = r(9)(!1);
      d.push([e.i, '.slider-wrapper{position:relative;margin-bottom:10.5555555556vw}@media(max-width: 1200px){.slider-wrapper{margin-bottom:132px}}@media(max-width: 900px){.slider-wrapper{margin-bottom:124px}}@media(max-width: 600px){.slider-wrapper{margin-bottom:96px}}@media(max-width: 400px){.slider-wrapper{margin-bottom:88px}}@media(max-width: 600px){.slider-wrapper{margin-bottom:146px}}@media(max-width: 400px){.slider-wrapper{margin-bottom:138px}}.slider-wrapper.numbering{margin-bottom:13.6111111111vw}@media(max-width: 1200px){.slider-wrapper.numbering{margin-bottom:100px}}@media(max-width: 900px){.slider-wrapper.numbering{margin-bottom:134px}}@media(max-width: 600px){.slider-wrapper.numbering{margin-bottom:96px}}@media(max-width: 400px){.slider-wrapper.numbering{margin-bottom:64px}}.slider-wrapper.numbering .lineSVG{right:-5vw;left:auto}.slider-wrapper.subtitle-hide .heading{display:none}.slider-wrapper .heading{text-align:center;margin-bottom:-1.7361111111vw;position:relative;z-index:2}@media(max-width: 1200px){.slider-wrapper .heading{margin-bottom:-28px}}@media(max-width: 900px){.slider-wrapper .heading{margin-bottom:-12px}}@media(max-width: 600px){.slider-wrapper .heading{margin-bottom:2.7777777778vw}}@media(max-width: 600px)and (max-width: 1200px){.slider-wrapper .heading{margin-bottom:40px}}@media(max-width: 600px)and (max-width: 900px){.slider-wrapper .heading{margin-bottom:32px}}.slider-wrapper .content{position:relative;z-index:1}.slider-wrapper .slider{height:41.6666666667vw}@media(max-width: 1200px){.slider-wrapper .slider{height:476px}}@media(max-width: 900px){.slider-wrapper .slider{height:355px}}@media(max-width: 600px){.slider-wrapper .slider{height:246px}}@media(max-width: 400px){.slider-wrapper .slider{height:230px}}.slider-wrapper .slider img{width:100%;height:100%;object-fit:cover;outline:none !important}.slider-wrapper .slider-main{width:61.6666666667vw;position:static !important}.slider-wrapper .slider-main .swiper-slide,.slider-wrapper .slider-main .swiper-slide-duplicate{transition:transform .7s ease !important}.slider-wrapper .slider-main .swiper-slide-active,.slider-wrapper .slider-main .swiper-slide-duplicate-active{transform:scale(1.2)}@media(max-width: 1200px){.slider-wrapper .slider-main{width:704px}}@media(max-width: 900px){.slider-wrapper .slider-main{width:524px}}@media(max-width: 600px){.slider-wrapper .slider-main{width:368px}}@media(max-width: 400px){.slider-wrapper .slider-main{width:319px}}.slider-wrapper .slider-main .swiper-slide{outline:none !important}.slider-wrapper .slider-main .swiper-slide.hidden{display:none}.slider-wrapper .slider-previews-wrap{position:absolute !important;z-index:-1 !important;top:0;left:0;width:100%;overflow:hidden}.slider-wrapper .slider-previews{width:185vw;top:0;left:50%;transform:translate(-50%, 0)}@media(max-width: 1200px){.slider-wrapper .slider-previews{width:2112px}}@media(max-width: 900px){.slider-wrapper .slider-previews{width:1572px}}@media(max-width: 600px){.slider-wrapper .slider-previews{width:1104px}}@media(max-width: 400px){.slider-wrapper .slider-previews{width:957px}}.slider-wrapper .slider-previews .swiper-slide{background:#122223}.slider-wrapper .slider-previews .swiper-slide img{mix-blend-mode:overlay}.slider-wrapper .slider-previews span{position:absolute;height:41.8055555556vw;width:61.6666666667vw;top:-1px;border:5.2777777778vw solid #122223;border-top-width:5.2777777778vw;border-bottom-width:5.2777777778vw;border-left-width:8.6111111111vw;border-right-width:8.6111111111vw;z-index:1}@media(max-width: 1200px){.slider-wrapper .slider-previews span{width:704px;height:478px;border-top-width:48px;border-bottom-width:48px;border-left-width:96px;border-right-width:96px}}@media(max-width: 900px){.slider-wrapper .slider-previews span{width:524px;height:357px;border-top-width:32px;border-bottom-width:32px;border-left-width:72px;border-right-width:72px}}@media(max-width: 600px){.slider-wrapper .slider-previews span{width:368px;height:248px;border-top-width:30px;border-bottom-width:30px;border-left-width:16px;border-right-width:16px}}@media(max-width: 400px){.slider-wrapper .slider-previews span{width:319px;height:232px;border-top-width:21px;border-bottom-width:21px;border-left-width:8px;border-right-width:8px}}.slider-wrapper .slider-previews span:nth-of-type(1){left:0}.slider-wrapper .slider-previews span:nth-of-type(2){right:0}.slider-wrapper .slider-text{position:absolute;z-index:1;bottom:5.5555555556vw;right:13.5416666667vw;width:30.0694444444vw;padding:3.8888888889vw;background:#ffd9b6;color:#353535;overflow:hidden}@media(max-width: 1200px){.slider-wrapper .slider-text{bottom:48px;right:102px;width:312px;padding:40px}}@media(max-width: 900px){.slider-wrapper .slider-text{bottom:32px;right:90px;width:260px;padding:32px}}@media(max-width: 600px){.slider-wrapper .slider-text{bottom:-48.5px;right:50%;transform:translateX(50%);width:320px;padding:24px}}@media(max-width: 600px){.slider-wrapper .slider-text{width:295px}}.slider-wrapper .slider-text .h6{margin-bottom:1.1111111111vw;opacity:.4}@media(max-width: 1200px){.slider-wrapper .slider-text .h6{margin-bottom:16px}}@media(max-width: 600px){.slider-wrapper .slider-text .h6{margin-bottom:14px}}.slider-wrapper .slider-text::before{content:"";position:absolute;z-index:1;top:0;right:0;width:100%;height:100%;background:#ffd9b6;transform-origin:left;transition:transform 1.2s ease;transform:translateX(-100%)}.slider-wrapper .slider-text.change::before{transform:translateX(100%)}.slider-wrapper .slider-text.changeFast::before{transition:transform 0s ease}.slider-wrapper .slider-prev,.slider-wrapper .slider-next{position:absolute;top:0;width:50vw;height:100%;font-size:0;z-index:1;cursor:none}.slider-wrapper .slider-prev:hover~.slider-cursor,.slider-wrapper .slider-next:hover~.slider-cursor{opacity:1}.slider-wrapper .slider-prev .relative-wrap,.slider-wrapper .slider-next .relative-wrap{position:relative;width:100%;height:100%;transform:translateY(-52px)}@media(max-width: 900px){.slider-wrapper .slider-prev .relative-wrap,.slider-wrapper .slider-next .relative-wrap{transform:translateY(-100px)}}@media(max-width: 600px){.slider-wrapper .slider-prev .relative-wrap,.slider-wrapper .slider-next .relative-wrap{transform:translateY(-72px)}}.slider-wrapper .slider-prev .relative-wrap .icon-btn,.slider-wrapper .slider-next .relative-wrap .icon-btn{display:none;position:absolute;top:50%;transform:translateY(-50%);background-image:url("/img/icons/arrow-right.svg");background-repeat:no-repeat;background-position:center;background-size:cover;width:29px;height:21px}@media(max-width: 1200px){.slider-wrapper .slider-prev .relative-wrap .icon-btn,.slider-wrapper .slider-next .relative-wrap .icon-btn{display:block}}.slider-wrapper .slider-prev{left:0;outline:none !important}.slider-wrapper .slider-prev .relative-wrap .icon-btn{left:20%;right:auto;transform:rotate(180deg) scale(1.3)}@media(max-width: 900px){.slider-wrapper .slider-prev .relative-wrap .icon-btn{left:15%;transform:rotate(180deg) scale(1)}}@media(max-width: 700px){.slider-wrapper .slider-prev .relative-wrap .icon-btn{left:10%}}.slider-wrapper .slider-next{right:0;outline:none !important}.slider-wrapper .slider-next .relative-wrap .icon-btn{right:20%;left:auto;transform:scale(1.3)}@media(max-width: 900px){.slider-wrapper .slider-next .relative-wrap .icon-btn{right:15%;transform:scale(1)}}@media(max-width: 700px){.slider-wrapper .slider-next .relative-wrap .icon-btn{right:10%}}.slider-wrapper .slider-cursor{position:fixed;z-index:99;top:0;left:0;pointer-events:none;width:5.1388888889vw;height:5.1388888889vw;border:0px solid rgba(255,255,255,.2);border-radius:unset;display:flex;justify-content:center;align-items:center;transform-origin:center;transition:opacity .5s,transform .5s;opacity:0}@media(max-width: 1200px){.slider-wrapper .slider-cursor{width:74px;height:74px;display:none}}.slider-wrapper .slider-cursor.active svg circle{animation:stroke 1s ease-out forwards}@keyframes stroke{to{stroke-dashoffset:2000}}.slider-wrapper .slider-cursor.active svg path{transform:translate(0, 0) scaleX(1);opacity:1}.slider-wrapper .slider-cursor.inActive svg path{transition:transform 0s ease-out 0s,opacity 0s linear 0s}.slider-wrapper .slider-cursor svg{width:100%;height:100%}.slider-wrapper .slider-cursor svg circle{stroke-dasharray:1000;stroke-dashoffset:1000}.slider-wrapper .slider-cursor svg path{opacity:0;transform:translate(-100%, -8%) scaleX(2.3);transition:transform .5s ease-out .6s,opacity .4s linear .8s}.slider-wrapper .swiper-numbers{position:absolute;left:50% !important;top:calc(100% + 1.1111111111vw);transform:translate(-50%, 0);text-align:center}@media(max-width: 1200px){.slider-wrapper .swiper-numbers{top:calc(100% + 16px)}}@media(max-width: 600px){.slider-wrapper .swiper-numbers{top:calc(100% + 14px)}}.slider-wrapper .swiper-numbers span{opacity:.3}.slider-wrapper .swiper-numbers span::before{content:"/";margin:0 .3472222222vw;font-family:inherit}.slider-wrapper .lineSVG{position:absolute;top:-41.6666666667vw;left:0;z-index:-1}.slider-wrapper .lineSVG.lineSVG-story{top:15%;left:50%;transform:translate(-50%, -50%)}.slider-wrapper .lineSVG.lineSVG-senoval{top:-85%;left:50%;transform:translate(-50%, -50%)}.slider-wrapper.left .slider-main{margin-left:11.6666666667vw !important;margin-right:0}@media(max-width: 1200px){.slider-wrapper.left .slider-main{width:704px;margin-left:80px !important}}@media(max-width: 900px){.slider-wrapper.left .slider-main{width:524px;margin-left:32px !important}}@media(max-width: 600px){.slider-wrapper.left .slider-main{width:368px;margin-left:24px !important}}@media(max-width: 400px){.slider-wrapper.left .slider-main{width:319px;margin-left:16px !important}}.slider-wrapper.left .slider-previews{left:calc(50% - 7.5vw)}@media(max-width: 1200px){.slider-wrapper.left .slider-previews{left:calc(50% - 80px) !important}}@media(max-width: 900px){.slider-wrapper.left .slider-previews{left:calc(50% - 90px) !important}}@media(max-width: 600px){.slider-wrapper.left .slider-previews{left:50% !important}}.slider-wrapper.left .slider-previews span:first-of-type{border-right-width:13.8888888889vw}@media(max-width: 1200px){.slider-wrapper.left .slider-previews span:first-of-type{border-right-width:185px}}@media(max-width: 900px){.slider-wrapper.left .slider-previews span:first-of-type{border-right-width:180px}}.slider-wrapper.left .slider-text{right:20.8333333333vw}@media(max-width: 1200px){.slider-wrapper.left .slider-text{right:190px}}@media(max-width: 900px){.slider-wrapper.left .slider-text{right:175px}}@media(max-width: 600px){.slider-wrapper.left .slider-text{right:50%;transform:translateX(50%)}}.swiper-slide{overflow:hidden}.swiper-wrapper{transition-timing-function:cubic-bezier(0.79, 0.36, 0.34, 0.99) !important}.slide-inner{position:absolute;width:100%;height:100%;left:0;top:0;transition-timing-function:cubic-bezier(0.79, 0.36, 0.34, 0.99) !important}', ""]), e.exports = d
    }
  }
]);