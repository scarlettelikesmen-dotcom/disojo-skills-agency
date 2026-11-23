/* https://verholy.com/_nuxt/3afef8e.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [32], {
    678: function(t, e, r) {
      var content = r(700);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("a631489a", content, !0, {
        sourceMap: !1
      })
    },
    680: function(t, e, r) {
      "use strict";
      var n = {
          props: {
            blocks: {
              type: Array
            },
            is_data_local: {
              type: Boolean,
              default: !1
            }
          },
          data: function() {
            return {
              imgSrc: ""
            }
          },
          methods: {
            imgHover: function(t, e) {
              var r = this,
                img = this.$refs.img;
              setTimeout((function() {
                r.imgSrc = t.srcElement.dataset.imgSrc, img.style.opacity = 1
              }), 200)
            }
          },
          created: function() {
            this.imgSrc = this.is_data_local ? this.blocks[0].attributes.image : this.$env.imgUrl + this.blocks[0].attributes.image
          }
        },
        o = (r(699), r(4)),
        component = Object(o.a)(n, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            ref: "description",
            staticClass: "description-info",
            class: {
              large: t.blocks.length > 3
            }
          }, [t._l(t.blocks, (function(r, n) {
            return e("div", {
              key: r.key,
              staticClass: "item",
              attrs: {
                "data-img-src": t.is_data_local ? r.attributes.image : t.$env.imgUrl + r.attributes.image
              },
              on: {
                mouseenter: function(e) {
                  return t.imgHover(e, n)
                }
              }
            }, [e("div", {
              staticClass: "item-bg"
            }), t._v(" "), e("h5", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: .8
                },
                expression: "{ opacity: 0.8 }"
              }],
              staticClass: "h5"
            }, [r.attributes.open_time && r.attributes.close_time ? e("span") : t._e()]), t._v(" "), e("div", {
              staticClass: "item-inner",
              class: {
                local_description: t.is_data_local
              }
            }, [e("h3", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {},
                expression: "{}"
              }],
              staticClass: "h3",
              domProps: {
                innerHTML: t._s(r.attributes.title)
              }
            }), t._v(" "), e("p", {
              staticClass: "text",
              class: {
                is_data_local: t.is_data_local
              },
              domProps: {
                innerHTML: t._s(r.attributes.description)
              }
            })]), t._v(" "), e("img", {
              directives: [{
                name: "lazy-load",
                rawName: "v-lazy-load"
              }],
              staticClass: "item-img",
              attrs: {
                "data-src": t.is_data_local ? r.attributes.image : t.$env.imgUrl + r.attributes.image,
                alt: r.attributes.title
              }
            })])
          })), t._v(" "), e("transition", {
            attrs: {
              name: "img-fade",
              mode: "in-out"
            }
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            key: t.imgSrc,
            ref: "img",
            staticClass: "image",
            attrs: {
              "data-not-lazy": "",
              "data-src": t.imgSrc,
              alt: "description img"
            }
          })])], 2)
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    699: function(t, e, r) {
      "use strict";
      r(678)
    },
    700: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.description-info{margin-bottom:10.5555555556vw;width:100vw;height:51.7361111111vw;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}@media(max-width: 1200px){.description-info{margin-bottom:132px}}@media(max-width: 900px){.description-info{margin-bottom:124px}}@media(max-width: 600px){.description-info{margin-bottom:96px}}@media(max-width: 400px){.description-info{margin-bottom:88px}}@media(max-width: 1200px){.description-info{height:auto}}@media(max-width: 600px){.description-info{flex-wrap:wrap}}.description-info .image{position:absolute;width:100%;height:100%;z-index:-2;object-fit:cover;transition:.5s all ease-in-out}@media(max-width: 1200px){.description-info .image{display:none}}.description-info .item{width:100%;height:100%;padding:3.3333333333vw 3.8888888889vw 3.8888888889vw;display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;position:relative;z-index:1}@media(max-width: 1200px){.description-info .item{padding:40px;height:680px}}@media(max-width: 900px){.description-info .item{padding:32px;height:508px}}@media(max-width: 600px){.description-info .item{height:600px;padding:24px}}@media(max-width: 400px){.description-info .item{height:500px}}.description-info .item::before,.description-info .item::after{content:"";position:absolute;background:rgba(255,255,255,.1);bottom:0;right:0;z-index:3}.description-info .item::before{display:none;width:100%;height:1px}.description-info .item::after{width:1px;height:100%}@media(max-width: 600px){.description-info .item::after{width:100%;height:1px}}.description-info .item:last-of-type::after{display:none !important}.description-info .item:hover .h5{opacity:.8}.description-info .item:hover .h3{margin-bottom:1.6666666667vw}.description-info .item:hover .text{transform:scaleY(1) !important;height:auto;opacity:.6}.description-info .item:hover .item-inner{transform:translateY(0px)}.description-info .item .h5{opacity:.3;transition:.5s ease;margin-bottom:auto;z-index:2}@media(max-width: 1200px){.description-info .item .h5{opacity:.8}}.description-info .item .h3{transition:.5s ease}@media(max-width: 1200px){.description-info .item .h3{margin-bottom:24px !important}}.description-info .item-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 11.17%, rgba(0, 0, 0, 0.2) 88.59%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}.description-info .item-inner{position:relative;z-index:2;transform:translateY(calc(100% - 46px));transition:transform .5s ease-in-out}@media(max-width: 1200px){.description-info .item-inner{transform:translateY(0px)}}.description-info .item-inner .pool-options{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:.9722222222vw}@media(max-width: 1200px){.description-info .item-inner .pool-options{margin-bottom:14px}}.description-info .item-inner .pool-options .option{display:flex}.description-info .item-inner .pool-options .option:not(:last-child){margin-bottom:.2777777778vw}@media(max-width: 1200px){.description-info .item-inner .pool-options .option:not(:last-child){margin-bottom:2px}}.description-info .item-inner .pool-options .option .title-option{font-weight:600;margin-right:.6944444444vw}@media(max-width: 1200px){.description-info .item-inner .pool-options .option .title-option{margin-right:8px}}.description-info .local_description{transform:translateY(calc(100% - 92px))}.description-info .text{transform:scaleY(0);transform-origin:center bottom;transition:opacity .3s ease,transform .3s ease;opacity:0}@media(max-width: 1200px){.description-info .text{transform:scaleY(1);height:auto;opacity:.6}}.description-info .item-img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1;display:none}@media(max-width: 1200px){.description-info .item-img{display:block}}@media(max-width: 1200px){.description-info.large{height:auto;flex-wrap:wrap}}.description-info.large .h3{font-size:1.875vw}@media(max-width: 1200px){.description-info.large .h3{font-size:32px}}@media(max-width: 900px){.description-info.large .h3{font-size:24px}}.description-info.large .item{width:50%}@media(max-width: 1200px){.description-info.large .item{height:484px}}@media(max-width: 600px){.description-info.large .item{height:600px;width:100%}}@media(max-width: 400px){.description-info.large .item{height:500px}}@media(max-width: 1200px){.description-info.large .item::before{display:block}}@media(max-width: 600px){.description-info.large .item::before{display:none}}@media(max-width: 1200px){.description-info.large .item:nth-last-of-type(1)::before,.description-info.large .item:nth-last-of-type(2)::before{display:none}}@media(max-width: 1200px){.description-info.large .item:nth-child(2n)::after{display:none}}@media(max-width: 600px){.description-info.large .item:nth-child(2n)::after{display:block}}.is_data_local.text{opacity:.9 !important}.is_data_local.text .text{opacity:1 !important}', ""]), t.exports = n
    },
    796: function(t, e, r) {
      var content = r(942);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("4bf6379d", content, !0, {
        sourceMap: !1
      })
    },
    941: function(t, e, r) {
      "use strict";
      r(796)
    },
    942: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.slider-description{position:relative;display:flex;align-items:flex-start;margin-bottom:20.1388888889vw}@media(max-width: 1200px){.slider-description{margin-bottom:250px}}@media(max-width: 1200px){.slider-description{margin-bottom:150px}}@media(max-width: 900px){.slider-description{margin-bottom:114px}}@media(max-width: 600px){.slider-description{margin-bottom:86px;flex-direction:column}}@media(max-width: 400px){.slider-description{margin-bottom:78px}}.slider-description .large-img,.slider-description .small-img{overflow:hidden}.slider-description .large-img.change::before,.slider-description .small-img.change::before{transform:scaleX(1)}.slider-description .large-img::before,.slider-description .small-img::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#ffd9b6;z-index:2;transition:transform .5s ease;transform-origin:left;transform:scaleX(0);pointer-events:none}.slider-description .large-img img,.slider-description .small-img img{position:relative;width:100%;height:100%;object-fit:cover;display:block;z-index:1}.slider-description .large-img{position:relative;width:42.7083333333vw;height:56.9444444444vw;margin-left:auto;z-index:-2}@media(max-width: 1200px){.slider-description .large-img{width:calc(100% - 624px);height:532px}}@media(max-width: 900px){.slider-description .large-img{width:calc(100% - 452px);height:488px}}@media(max-width: 767px){.slider-description .large-img{width:calc(100% - 408px)}}@media(max-width: 600px){.slider-description .large-img{width:calc(100% - 23px);margin-left:0;order:1}}@media(max-width: 400px){.slider-description .large-img{width:calc(100% - 16px)}}.slider-description .small-img{position:absolute;width:18.4027777778vw;height:29.1666666667vw;z-index:10;top:37.5vw;left:0}@media(max-width: 1200px){.slider-description .small-img{width:184px;height:292px;top:476px}}@media(max-width: 900px){.slider-description .small-img{width:136px;height:216px;left:auto;right:32px;top:332px}}@media(max-width: 600px){.slider-description .small-img{display:none}}.slider-description .slider{width:57.2916666667vw;padding:0 7.7777777778vw;margin-top:13.8888888889vw}@media(max-width: 1200px){.slider-description .slider{width:624px;padding:0 80px;margin-top:20px}}@media(max-width: 900px){.slider-description .slider{width:408px;padding:0 32px;margin-top:52px}}@media(max-width: 600px){.slider-description .slider{order:2;margin-top:32px;width:100%;padding:0 23px}}@media(max-width: 400px){.slider-description .slider{padding:0 16px}}.slider-description .swiper-controls{margin-bottom:6.1111111111vw;display:flex;align-items:center;width:100%}@media(max-width: 1200px){.slider-description .swiper-controls{margin-bottom:56px}}@media(max-width: 600px){.slider-description .swiper-controls{margin-bottom:40px}}.slider-description .swiper-controls.hidden{display:none}@media(max-width: 600px){.slider-description .swiper-controls{margin-bottom:32px !important}}.slider-description .slider-prev,.slider-description .slider-next{width:5.1388888889vw;height:5.1388888889vw;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;display:flex;justify-content:center;align-items:center;border:1px solid rgba(255,255,255,.2);border-radius:50%}@media(max-width: 1200px){.slider-description .slider-prev,.slider-description .slider-next{width:56px;height:56px}}@media(max-width: 600px){.slider-description .slider-prev,.slider-description .slider-next{width:51px;height:51px;padding:5px}}.slider-description .slider-prev.positionBtn,.slider-description .slider-next.positionBtn{position:relative !important}.slider-description .slider-prev svg,.slider-description .slider-next svg{width:1.9444444444vw;height:1.3888888889vw}@media(max-width: 1200px){.slider-description .slider-prev svg,.slider-description .slider-next svg{width:22px;height:16px}}@media(max-width: 600px){.slider-description .slider-prev svg,.slider-description .slider-next svg{width:20px;height:14px}}.slider-description .slider-prev{margin-right:2.7777777778vw}@media(max-width: 1200px){.slider-description .slider-prev{margin-right:26px}}@media(max-width: 900px){.slider-description .slider-prev{margin-right:24px}}.slider-description .slider-prev svg{transform:scaleX(-1)}.slider-description .swiper-numbers{margin-left:auto;width:auto}.slider-description .swiper-numbers span{opacity:.4}.slider-description .swiper-numbers span::before{content:"/";margin:0 .3472222222vw;font-family:inherit}@media(max-width: 1200px){.slider-description .swiper-numbers span::before{margin:0 5px}}.slider-description .swiper-slide .h2{margin-bottom:2.7777777778vw}@media(max-width: 1200px){.slider-description .swiper-slide .h2{margin-bottom:40px}}@media(max-width: 900px){.slider-description .swiper-slide .h2{margin-bottom:32px}}.slider-description .swiper-slide .text{width:22.2916666667vw;padding-bottom:1.3888888889vw;margin-left:auto;max-width:100%}.slider-description .swiper-slide .text span{display:block;opacity:.4}@media(max-width: 1200px){.slider-description .swiper-slide .text{width:263px;padding-bottom:20px}}@media(max-width: 900px){.slider-description .swiper-slide .text{width:100%}}.slider-description .swiper-slide .action{margin-top:3.75vw}@media(max-width: 1200px){.slider-description .swiper-slide .action{margin-top:52px}}@media(max-width: 900px){.slider-description .swiper-slide .action{margin-top:44px}}.slider-description .lineSVG{position:absolute;top:70%;left:60%;transform:translate(-50%, -20%) rotate(-15deg);z-index:-3;pointer-events:none}.slider-description .lineSVG.lineSVG-bottom{top:-60%}.slider-description.inverse{flex-direction:row-reverse}@media(max-width: 600px){.slider-description.inverse{flex-direction:column}}.slider-description.inverse .swiper-slide .text{margin-left:0}.slider-description.inverse .swiper-slide .action{margin-left:0}.slider-description.inverse .large-img{margin-left:0;margin-right:auto}@media(max-width: 600px){.slider-description.inverse .large-img{margin-right:0;margin-left:auto}}.slider-description.inverse .small-img{left:auto;right:0}@media(max-width: 900px){.slider-description.inverse .small-img{right:auto;left:32px}}.slider-description.inverse .line{transform:translate(-50%, -20%) scaleX(-1)}', ""]), t.exports = n
    },
    969: function(t, e, r) {
      "use strict";
      r.r(e);
      r(15), r(7), r(11), r(18), r(19);
      var n = r(6),
        o = r(63),
        d = r(1),
        l = (r(13), r(8)),
        m = r(659),
        c = r(663),
        h = r(805),
        x = (r(134), r(77)),
        f = {
          props: {
            slides: {
              type: Array
            },
            inverse: {
              type: Boolean,
              default: !1
            },
            lineSpa: {
              type: Boolean,
              default: !1
            },
            lineSpaBottom: {
              type: Boolean,
              default: !1
            },
            positionBtn: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            Button: x.a
          },
          data: function() {
            return {
              sliderOptions: {
                loop: !0,
                slidesPerView: 1,
                speed: 1e3,
                navigation: {
                  nextEl: ".slider-next",
                  prevEl: ".slider-prev"
                },
                pagination: {
                  el: ".swiper-numbers",
                  type: "custom",
                  renderCustom: function(t, e, r) {
                    return "".concat(e, "<span>").concat(r, "</span>")
                  }
                }
              }
            }
          },
          mounted: function() {
            var t = this,
              e = this.slider,
              r = this.$refs,
              n = r.largeImg,
              o = r.smallImg;
            e.on("slideChangeTransitionStart", (function() {
              n.parentNode.classList.add("change"), o.parentNode.classList.add("change")
            })), e.on("slideChangeTransitionEnd", (function() {
              var r = e.activeIndex,
                d = e.slides[r],
                l = d.dataset.largeImg,
                m = d.dataset.smallImg;
              n.src = t.$env.imgUrl + l, o.src = t.$env.imgUrl + m, n.parentNode.classList.remove("change"), o.parentNode.classList.remove("change")
            }))
          }
        },
        w = (r(941), r(4)),
        v = Object(w.a)(f, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "slider-description",
            class: {
              inverse: t.inverse
            }
          }, [e("div", {
            staticClass: "slider"
          }, [e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:slider",
              value: t.sliderOptions,
              expression: "sliderOptions",
              arg: "slider"
            }]
          }, [e("div", {
            staticClass: "swiper-controls",
            class: {
              hidden: 1 === t.slides.length
            }
          }, [e("div", {
            staticClass: "slider-prev no-cursor",
            class: {
              positionBtn: t.positionBtn
            }
          }, [e("svg", [e("use", {
            attrs: {
              "xlink:href": "#icon-arrow-right"
            }
          })])]), t._v(" "), e("div", {
            staticClass: "slider-next no-cursor",
            class: {
              positionBtn: t.positionBtn
            }
          }, [e("svg", [e("use", {
            attrs: {
              "xlink:href": "#icon-arrow-right"
            }
          })])]), t._v(" "), e("div", {
            staticClass: "swiper-numbers action"
          })]), t._v(" "), e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.slides, (function(r) {
            return e("div", {
              key: r.key,
              staticClass: "swiper-slide",
              attrs: {
                "data-large-img": r.attributes.big_image,
                "data-small-img": r.attributes.small_image
              }
            }, [e("h2", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {},
                expression: "{}"
              }],
              staticClass: "h2",
              domProps: {
                innerHTML: t._s(r.attributes.title)
              }
            }), t._v(" "), e("p", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: 1
                },
                expression: "{ opacity: 1}"
              }],
              staticClass: "text"
            }, [e("span", {
              domProps: {
                innerHTML: t._s(r.attributes.description)
              }
            }), t._v(" "), r.attributes.link ? e("Button", {
              attrs: {
                name: t.$t("Get More information"),
                link: r.attributes.link
              }
            }) : t._e()], 1)])
          })), 0)])]), t._v(" "), e("div", {
            staticClass: "large-img"
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            ref: "largeImg",
            attrs: {
              "data-src": t.$env.imgUrl + t.slides[0].attributes.big_image,
              alt: t.slides[0].attributes.title
            }
          })]), t._v(" "), e("div", {
            staticClass: "small-img"
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            ref: "smallImg",
            attrs: {
              "data-src": t.$env.imgUrl + t.slides[0].attributes.small_image,
              alt: t.slides[0].attributes.title
            }
          })]), t._v(" "), t.lineSpa ? e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "760",
              viewBox: "0 0 1440 760",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-420.644 51.3388C-313.972 -25.6691 -156.907 -6.52874 -40.1768 56.3502C180.242 175.124 293.039 413.777 483.405 571.985C639.52 701.725 851.478 773.61 1059.06 756.119C1266.63 738.629 1465.64 628.6 1572.88 460.666",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : t._e(), t._v(" "), t.lineSpaBottom ? e("svg", {
            staticClass: "lineSVG lineSVG-bottom",
            attrs: {
              preserveAspectRatio: "none",
              width: "1117",
              height: "1164",
              viewBox: "0 0 1117 1164",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1116.63 1163.66C1164.99 1103.61 1150.2 1016.86 1100.62 965.621C1051.04 914.384 975.524 892.15 900.95 880.67C826.377 869.19 749.134 866.489 677.62 845.77C586.566 819.397 509.058 764.701 445.862 699.534C382.667 634.367 332.616 558.635 284.203 482.542C184.108 325.232 89.595 164.621 0.66463 0.709225",
              stroke: "#404540"
            }
          })]) : t._e()])
        }), [], !1, null, null, null).exports,
        _ = r(680),
        y = r(662),
        C = r(661),
        S = r(656);

      function k(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }

      function L(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? k(Object(source), !0).forEach((function(e) {
            Object(n.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var O = {
          fetch: function(t) {
            return Object(d.a)(regeneratorRuntime.mark((function e() {
              var r;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, t.route, e.next = 3, r.dispatch("getSpa");
                  case 3:
                    return e.next = 5, r.dispatch("getWellness");
                  case 5:
                    return e.next = 7, r.dispatch("getCategories");
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, r, n, d = t.$route;
            return {
              title: (null === (e = this.getLang(this.state.spa.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(o.a)(Object(S.b)({
                url: d.path,
                title: null === (r = this.getLang(this.state.spa.meta_tags)[0]) || void 0 === r ? void 0 : r.attributes.title,
                description: null === (n = this.getLang(this.state.spa.meta_tags)[0]) || void 0 === n ? void 0 : n.attributes.description
              }))
            }
          },
          components: {
            AppGreet: m.a,
            AppTitleDescriptionImages: c.a,
            AppImgTitleDescription: h.a,
            AppSliderDescription: v,
            AppDescriptionInfo: _.a,
            AppSlider: y.a,
            AppDiscover: C.a
          },
          computed: L(L({}, Object(l.b)(["getChalets"])), {}, {
            getLastChalet: function() {
              return this.getChalets[this.getChalets.length - 1].attributes[0]
            }
          })
        },
        j = Object(w.a)(O, (function() {
          var t = this,
            e = t._self._c;
          return e("div", [e("app-greet", {
            attrs: {
              subtitle: t.demo.spaBeauty.relaxSpa.greet.subtitle,
              title: t.getLang(t.state.spa.title),
              img: t.state.spa.main_photo,
              info: JSON.parse(t.state.spa.working_hours),
              page_name: "relax_spa_page"
            }
          }), t._v(" "), null != t.getLang(t.state.spa.description)[0] && 0 != t.getLang(t.state.spa.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.spa.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.spa.description)[0].attributes.main_description,
              description: t.getLang(t.state.spa.description)[0].attributes.short_description,
              images: t.state.spa.background_images,
              indentAdd: !0,
              lineSpa: !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.spa.information)[0] && 0 != t.getLang(t.state.spa.information)[0].attributes.title.length && 0 != t.getLang(t.state.spa.information)[0].attributes.description.length && t.state.spa.information_image ? e("app-img-title-description", {
            attrs: {
              img: t.state.spa.information_image,
              alt: t.getLang(t.state.spa.information)[0].attributes.title,
              title: t.getLang(t.state.spa.information)[0].attributes.title,
              description: t.getLang(t.state.spa.information)[0].attributes.description,
              lineSpa: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.spa.sauna_slider).length > 0 ? e("app-slider-description", {
            attrs: {
              slides: t.getLang(t.state.spa.sauna_slider),
              lineSpa: !0,
              positionBtn: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.spa.activities).length > 0 ? e("app-description-info", {
            attrs: {
              blocks: t.getLang(t.state.spa.activities)
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.spa.bar_slider).length > 0 ? e("app-slider-description", {
            attrs: {
              slides: t.getLang(t.state.spa.bar_slider),
              inverse: !0,
              lineSpaBottom: !0,
              positionBtn: !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.spa.gallery_title)[0] && t.getLang(t.state.spa.gallery_title)[0].attributes.title && JSON.parse(t.state.spa.gallery_images).length > 0 ? e("app-slider", {
            attrs: {
              title: t.getLang(t.state.spa.gallery_title)[0].attributes.title,
              slides: JSON.parse(t.state.spa.gallery_images),
              numbering: !0,
              line: !0
            }
          }) : t._e(), t._v(" "), e("app-discover", {
            attrs: {
              hide_room_count: !0,
              blocks: [t.getLastChalet, t.state.wellness]
            }
          })], 1)
        }), [], !1, null, null, null);
      e.default = j.exports
    }
  }
]);