/* https://verholy.com/_nuxt/ec12997.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5], {
    656: function(t, e, o) {
      "use strict";

      function r(t, link) {
        return [{
          rel: "alternate",
          href: t + "ua" + link,
          hreflang: "ua"
        }, {
          rel: "alternate",
          href: t + "en" + link,
          hreflang: "en"
        }]
      }

      function n(t) {
        return [{
          hid: "description",
          name: "description",
          property: "description",
          content: t.description
        }, {
          name: "og:image",
          property: "og:image",
          content: t.image
        }, {
          name: "og:url",
          property: "og:url",
          content: "https://verholy.com/" + t.url
        }, {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: t.title
        }, {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: t.description
        }, {
          hid: "og:name",
          name: "og:name",
          property: "og:name",
          content: "VERHOLY"
        }]
      }
      o.d(e, "a", (function() {
        return r
      })), o.d(e, "b", (function() {
        return n
      }))
    },
    658: function(t, e, o) {
      var content = o(666);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("20a830c8", content, !0, {
        sourceMap: !1
      })
    },
    659: function(t, e, o) {
      "use strict";
      var r = o(657),
        n = o(679),
        d = {
          props: {
            img: {
              type: String
            },
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            gradient: {
              type: Boolean,
              default: !1
            },
            info: {
              type: Object
            },
            showFilter: {
              type: Boolean,
              default: !1
            },
            withPrice: {
              type: Boolean,
              default: !1
            },
            properties: Object,
            appHeadingAnimation: Object,
            activeItem: Object,
            page_name: String
          },
          computed: {
            items: function() {
              return JSON.parse(this.info[0].attributes.properties)
            },
            getPrice: function() {
              if (this.activeItem && this.activeItem.attributes[0].default_price) return this.activeItem.attributes[0].default_price
            },
            getProperty: function() {
              if (this.properties) return JSON.parse(this.properties[this.lang][0].attributes.properties_field)
            },
            getInfo: function() {
              if (this.info) return JSON.parse(this.info[this.lang][0].attributes.properties)
            }
          },
          components: {
            AppHeading: r.a,
            AppFilter: n.a
          }
        },
        m = (o(674), o(4)),
        component = Object(m.a)(d, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "greet",
            class: {
              gradient: t.gradient,
              img: t.img
            }
          }, [e("div", {
            directives: [{
              name: "mainBlockZoom",
              rawName: "v-mainBlockZoom"
            }, {
              name: "lazy-background",
              rawName: "v-lazy-background"
            }],
            staticClass: "greet-wrapper-img",
            class: t.page_name,
            attrs: {
              "lazy-background": t.img
            }
          }), t._v(" "), e("app-heading", {
            attrs: {
              title: t.title,
              animationProps: t.appHeadingAnimation
            }
          }), t._v(" "), t.getProperty || t.getInfo ? e("div", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: 1
              },
              expression: "{ opacity: 1 }"
            }],
            staticClass: "info",
            class: {
              withPrice: t.withPrice
            }
          }, [e("div", {
            staticClass: "info-data"
          }, t._l(t.getProperty || t.getInfo, (function(o) {
            return e("div", {
              key: o.key,
              staticClass: "text"
            }, [e("span", [t._v(t._s(o.key) + ":")]), t._v(" "), e("span", [t._v(t._s(o.value))])])
          })), 0), t._v(" "), t.withPrice ? e("div", {
            staticClass: "text"
          }, [e("span", {
            staticClass: "h6"
          }, [t._v(t._s(t.$t("From")))]), t._v(" "), e("p", {
            staticClass: "h4 price"
          }, [t._v(t._s(t.getPrice) + " " + t._s(t.$t("UAH")))])]) : t._e()]) : t._e(), t._v(" "), t.showFilter ? e("app-filter", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: 1,
                delay: .6,
                start: "top bottom"
              },
              expression: "{ opacity: 1, delay: 0.6, start: 'top bottom' }"
            }]
          }) : t._e()], 1)
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    660: function(t, e, o) {
      var content = o(673);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("57f84dce", content, !0, {
        sourceMap: !1
      })
    },
    661: function(t, e, o) {
      "use strict";
      o(15), o(7), o(11), o(18), o(19);
      var r = o(6),
        n = (o(12), o(77)),
        d = o(8);

      function m(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, o)
        }
        return e
      }
      var l = {
          props: {
            blocks: {
              type: Array
            },
            noSubtitle: {
              type: Boolean,
              default: !1
            },
            hide_room_count: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            Button: n.a
          },
          computed: function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2 ? m(Object(source), !0).forEach((function(e) {
                Object(r.a)(t, e, source[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
              }))
            }
            return t
          }({}, Object(d.b)(["getRooms", "getCottages", "getChalets"])),
          methods: {
            getValue: function(t) {
              if (void 0 !== t) return t[this.lang] ? t[this.lang] : this.getLang(t) ? this.getLang(t) : ""
            },
            getTitle: function(t) {
              return t.hasOwnProperty("title") ? "string" == typeof t.title ? this.getLang(t.title) : t.title[this.lang] : t.hasOwnProperty("name") ? this.getLang(t.name) : ""
            },
            getAccommodationCount: function(t) {
              if (t.hasOwnProperty("name")) switch (JSON.parse(t.name).en) {
                case "Chalet":
                  return this.getChalets.length;
                case "Rooms":
                  return this.getRooms.length;
                case "Cottages":
                  return this.getCottages.length
              }
            },
            getCustomVal: function(t) {
              if (t.hasOwnProperty("name")) {
                var e;
                switch (JSON.parse(t.name).en) {
                  case "Chalet":
                  case "Rooms":
                    e = "(5 ".concat(this.getLang(t.name), ")");
                    break;
                  case "Cottages":
                    e = "(7 ".concat(this.getLang(t.name), ")")
                }
                return e
              }
              return t.hasOwnProperty("properties") ? JSON.parse(t.properties[this.lang][0].attributes.properties_field)[0].value : ""
            },
            toLinkSrc: function(t) {
              t.hasOwnProperty("cottages_and_number_slug") ? this.$router.push(this.localePath("/accommodation/" + t.slug)) : this.$router.push(this.localePath("/" + t.slug))
            }
          }
        },
        c = l,
        h = (o(665), o(4)),
        component = Object(h.a)(c, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "discover"
          }, t._l(t.blocks, (function(o) {
            return e("div", {
              key: o.slug,
              staticClass: "discover-item active-cursor",
              on: {
                click: function(e) {
                  return e.preventDefault(), t.toLinkSrc(o)
                }
              }
            }, [e("div", {
              staticClass: "img"
            }, [e("img", {
              directives: [{
                name: "lazy-load",
                rawName: "v-lazy-load"
              }],
              attrs: {
                "data-src": "".concat(o.next_image || o.main_photo),
                alt: "background image"
              }
            })]), t._v(" "), o.information ? e("h5", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: .3
                },
                expression: "{ opacity: 0.3 }"
              }],
              staticClass: "h5",
              class: {
                noSubtitle: t.noSubtitle
              }
            }) : e("h5", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: .3
                },
                expression: "{ opacity: 0.3 }"
              }],
              staticClass: "h5",
              class: {
                noSubtitle: t.noSubtitle || t.hide_room_count
              }
            }, [t._v("(" + t._s(t.$t("Number of rooms")) + " " + t._s(t.getAccommodationCount(o)) + ")")]), t._v(" "), e("div", {
              staticClass: "discover-pos"
            }, [e("div", {
              staticClass: "discover-pos-inner"
            }, [e("h3", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {},
                expression: "{ }"
              }],
              staticClass: "h3"
            }, [t._v(t._s(t.getTitle(o)))]), t._v(" "), e("div", {
              staticClass: "discover-more"
            }, [e("Button", {
              attrs: {
                name: t.$t("Get More information"),
                action: !0
              }
            })], 1)])])])
          })), 0)
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    663: function(t, e, o) {
      "use strict";
      var r = {
          props: {
            title: {
              type: String
            },
            description: {
              type: String
            },
            images: {
              type: Array
            },
            indentAdd: {
              type: Boolean,
              default: !1
            },
            lineFood: {
              type: Boolean,
              default: !1
            },
            indentAddWellness: {
              type: Boolean,
              default: !1
            },
            lineRoom: {
              type: Boolean,
              default: !1
            },
            lineSpa: {
              type: Boolean,
              default: !1
            },
            lineSenoval: {
              type: Boolean,
              default: !1
            }
          }
        },
        n = (o(672), o(4)),
        component = Object(n.a)(r, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "title-desc-img",
            class: {
              "indent-add": t.indentAdd,
              "indent-add-wellness": t.indentAddWellness
            }
          }, [e("div", {
            staticClass: "container sm"
          }, [e("h2", {
            directives: [{
              name: "slideUpWordsStagger",
              rawName: "v-slideUpWordsStagger",
              value: {
                elSplitSelector: "div",
                start: "center bottom",
                delay: 0
              },
              expression: "{\n        elSplitSelector: 'div',\n        start: 'center bottom',\n        delay: 0,\n      }"
            }],
            staticClass: "h4",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }), t._v(" "), e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4,
                delay: .2
              },
              expression: "{ opacity: 0.4, delay: 0.2 }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          })]), t._v(" "), e("div", {
            directives: [{
              name: "mouseParalax",
              rawName: "v-mouseParalax"
            }],
            staticClass: "images"
          }, t._l(t.images, (function(img, t) {
            return e("div", {
              key: img,
              attrs: {
                "data-depth": t % 3 / 3 + .25
              }
            }, [e("div", {
              staticClass: "green-bg"
            }, [e("img", {
              directives: [{
                name: "lazy-load",
                rawName: "v-lazy-load"
              }],
              attrs: {
                "data-src": img,
                alt: img
              }
            })])])
          })), 0), t._v(" "), t.lineFood ? e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1629",
              viewBox: "0 0 1440 1629",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              opacity: "0.2",
              d: "M1579.7 562.13C1579.7 562.13 1386.12 565.614 1127.18 806.658C677.902 1224.87 259.267 1136.67 -87.6402 1067.54",
              stroke: "#FFD9B6"
            }
          })]) : t._e(), t._v(" "), t.lineRoom ? e("svg", {
            staticClass: "lineSVG lineSVG-room",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1600",
              viewBox: "0 0 1440 1600",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              opacity: "0.2",
              d: "M-86.1874 571.435C-86.1874 571.435 106.067 569.707 369.58 802.053C826.781 1205.18 1240 1106.4 1582.52 1028.48",
              stroke: "#FFD9B6"
            }
          })]) : t._e(), t._v(" "), t.lineSpa ? e("svg", {
            staticClass: "lineSVG lineSVG-spa",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1629",
              viewBox: "0 0 1440 1629",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              opacity: "0.2",
              d: "M1579.7 562.13C1579.7 562.13 1386.12 565.614 1127.18 806.658C677.902 1224.87 259.267 1136.67 -87.6402 1067.54",
              stroke: "#FFD9B6"
            }
          })]) : t._e(), t._v(" "), t.lineSenoval ? e("svg", {
            staticClass: "lineSVG lineSVG-room",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "569",
              viewBox: "0 0 1440 569",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw",
              value: {
                start: "top bottom",
                duration: 1.5
              },
              expression: "{ start: 'top bottom', duration: 1.5 }"
            }],
            attrs: {
              opacity: "0.2",
              d: "M-82.28 16.9111C52.84 -27.7591 203.26 25.0888 320.74 103.209C438.22 181.329 536.51 284.241 656.91 358.09C771.31 428.301 904.65 468.47 1039.91 477.559C1183.01 487.158 1326.15 462.836 1455.19 402.549C1544.51 416.064 1581.79 524.629 1530.51 596.107C1479.23 667.585 1380.13 692.167 1289.71 691.188C1199.29 690.208 1109.63 669.304 1019.31 673.479C816.21 682.875 640.16 818.518 523.31 978.261C406.46 1138 335.16 1323.61 240.85 1496.52C195.85 1579.06 141.01 1663.06 54.54 1705.48C-31.93 1747.91 -157.24 1729.75 -199 1645.6C-148.7 1638.73 -103.07 1677.97 -80.68 1721.75C-58.29 1765.53 -51.14 1815.15 -30.53 1859.73C14.02 1956.06 125.47 2019.8 234.95 2011.52C282.95 2007.9 328.86 1991.98 374.56 1977.42C420.26 1962.86 467.44 1949.41 515.56 1950.99C563.68 1952.56 613.56 1971.61 640.2 2010.12C666.84 2048.63 662 2107.71 622.52 2134.17C583.04 2160.63 515.7 2135.26 513.93 2089.06C512.57 2053.47 547.25 2024.19 583.65 2017.34C620.05 2010.48 657.38 2020.4 692.98 2030.43C899.43 2088.6 1104.4 2314.93 1315.9 2352.86C1920.61 2461.32 2567.49 2334.63 3079.6 2007.51",
              stroke: "#FFD9B6"
            }
          })]) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    664: function(t, e, o) {
      var content = o(675);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("70c1f033", content, !0, {
        sourceMap: !1
      })
    },
    665: function(t, e, o) {
      "use strict";
      o(658)
    },
    666: function(t, e, o) {
      var r = o(9)(!1);
      r.push([t.i, '.discover{margin-bottom:10.5555555556vw;width:100vw;height:47.2222222222vw;display:flex;align-items:center;justify-content:center}@media(max-width: 1200px){.discover{margin-bottom:132px}}@media(max-width: 900px){.discover{margin-bottom:124px}}@media(max-width: 600px){.discover{margin-bottom:96px}}@media(max-width: 400px){.discover{margin-bottom:88px}}@media(max-width: 1200px){.discover{height:484px}}@media(max-width: 900px){.discover{height:363px}}@media(max-width: 600px){.discover{flex-direction:column;height:auto}}.discover-item{width:100%;height:100%;background-size:cover;padding:2.7777777778vw 0 3.9583333333vw 3.8888888889vw;display:flex;flex-direction:column;align-items:flex-start;position:relative;cursor:pointer;overflow:hidden}.discover-item::before{content:"";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}@media(max-width: 1200px){.discover-item{padding:40px 0 55px 40px}}@media(max-width: 900px){.discover-item{padding:32px 0 45px 32px}}@media(max-width: 600px){.discover-item{height:60vw;padding:32px 0 45px 23px}}@media(max-width: 400px){.discover-item{height:70vw;padding:32px 0 43px 16px}}.discover-item:hover .h5{opacity:.8}.discover-item:hover .h3{margin-bottom:2.7777777778vw}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:40px}}@media(max-width: 900px){.discover-item:hover .h3{margin-bottom:32px}}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:0}}.discover-item:hover .img img{transform:scale(1.2)}.discover-item .img{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.discover-item .img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease-in-out}.discover-item .h5{opacity:.3;transition:.5s ease;margin-bottom:auto;display:flex;z-index:2}.discover-item .h5.noSubtitle{display:none}@media(max-width: 1200px){.discover-item .h5{opacity:.8}}.discover-item .h5 *{display:inline}.discover-item .h3{transition:.5s ease}.discover-pos{width:100%;height:130px;overflow:hidden;z-index:2;margin-top:auto}@media(max-width: 1200px){.discover-pos{height:unset;overflow:unset}}.discover-pos .discover-pos-inner{position:relative;transform:translateY(51px);transition:transform .5s ease-in-out}@media(max-width: 1200px){.discover-pos .discover-pos-inner{transform:translateY(0)}}.discover-item:hover .discover-pos .discover-pos-inner{transform:translateY(0px)}.discover-pos .discover-more{transform:scaleY(0);transform-origin:center bottom;transition:opacity .3s ease,transform .3s ease;opacity:0}@media(max-width: 1200px){.discover-pos .discover-more{opacity:1;transform:scaleY(1);margin-top:35px;height:auto}}.discover-item:hover .discover-pos .discover-more{transform:scaleY(1);height:auto;opacity:1}', ""]), t.exports = r
    },
    672: function(t, e, o) {
      "use strict";
      o(660)
    },
    673: function(t, e, o) {
      var r = o(9)(!1);
      r.push([t.i, ".title-desc-img{margin-top:-10.5555555556vw;padding-top:21.3194444444vw;margin-bottom:10.5555555556vw;position:relative;min-height:80vh;display:flex;align-items:center}@media(max-width: 1200px){.title-desc-img{margin-top:128px;padding-top:200px;margin-bottom:132px}}@media(max-width: 900px){.title-desc-img{margin-top:0;padding-top:0}}@media(max-width: 600px){.title-desc-img{margin-top:72px;padding-top:0;min-height:auto;height:auto;margin-bottom:96px}}@media(max-width: 400px){.title-desc-img{margin-top:64px;margin-bottom:88px}}@media(max-width: 1200px){.title-desc-img.indent-add{margin-top:118px;margin-bottom:105px}}@media(max-width: 600px){.title-desc-img.indent-add{margin-top:72px;margin-bottom:88px}}@media(max-width: 400px){.title-desc-img.indent-add{margin-top:64px;margin-bottom:72px}}.title-desc-img.indent-add-wellness{margin-bottom:4.8611111111vw}@media(max-width: 1200px){.title-desc-img.indent-add-wellness{margin-top:118px;margin-bottom:105px}}@media(max-width: 600px){.title-desc-img.indent-add-wellness{margin-bottom:104px;margin-top:80px}}@media(max-width: 400px){.title-desc-img.indent-add-wellness{margin-bottom:88px;margin-top:88px}}.title-desc-img .container{position:relative}.title-desc-img .h4{width:55.5555555556vw;max-width:100%;margin-bottom:6.6666666667vw;text-transform:none}@media(max-width: 1200px){.title-desc-img .h4{width:664px;margin-bottom:96px}}@media(max-width: 900px){.title-desc-img .h4{width:calc(100% - 120px);margin:0 auto;margin-bottom:72px}}@media(max-width: 600px){.title-desc-img .h4{width:100%;margin-bottom:56px}}@media(max-width: 400px){.title-desc-img .h4{margin-bottom:48px}}.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:7.7777777778vw;margin-top:-.4166666667vw;margin-right:1.1111111111vw;line-height:.89;text-transform:uppercase;margin-left:0}@media(max-width: 1200px){.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:86px;line-height:1.1}}@media(max-width: 900px){.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:76px;line-height:1}}.title-desc-img .text{width:30.0694444444vw;margin-left:auto;opacity:.4;position:static}@media(max-width: 1200px){.title-desc-img .text{width:305px}}@media(max-width: 900px){.title-desc-img .text{width:345px}}@media(max-width: 600px){.title-desc-img .text{width:100%;position:static}}.title-desc-img .images{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-2}@media(max-width: 600px){.title-desc-img .images{display:none}}.title-desc-img .images div{position:absolute !important;height:100%;width:100%}.title-desc-img .images div img{position:absolute;width:100%;height:100%;object-position:center;object-fit:cover}.title-desc-img .images div .green-bg{background:#122223}.title-desc-img .images div:nth-child(1) .green-bg{width:19.0972222222vw;height:10.7638888889vw;top:6.3194444444vw;left:5.6944444444vw}@media(max-width: 1200px){.title-desc-img .images div:nth-child(1) .green-bg{width:275px;height:155px;left:22px;top:0}}@media(max-width: 900px){.title-desc-img .images div:nth-child(1) .green-bg{width:301.08px;height:169.59px;left:-89px;top:60px}}@media(max-width: 600px){.title-desc-img .images div:nth-child(1) .green-bg{width:180px;height:102px;left:-63px;top:10%;transform:translate(0, -60%)}}@media(max-width: 400px){.title-desc-img .images div:nth-child(1) .green-bg{width:180px;height:102px;left:-70px;transform:translate(0, -30%)}}.title-desc-img .images div:nth-child(2) .green-bg{width:34.0277777778vw;height:19.1666666667vw;top:50%;right:5.6944444444vw;transform:translate(0, -50%)}@media(max-width: 1200px){.title-desc-img .images div:nth-child(2) .green-bg{width:457px;height:258px;right:-128px}}@media(max-width: 900px){.title-desc-img .images div:nth-child(2) .green-bg{width:500px;height:282px;right:0;transform:translate(40%, -50%)}}@media(max-width: 600px){.title-desc-img .images div:nth-child(2) .green-bg{width:300px;height:168px;transform:translate(35%, -50%)}}@media(max-width: 400px){.title-desc-img .images div:nth-child(2) .green-bg{width:300px;height:168px;transform:translate(50%, -50%)}}.title-desc-img .images div:nth-child(3) .green-bg{width:11.4583333333vw;height:15.2777777778vw;top:57%;left:20.4166666667vw}@media(max-width: 1200px){.title-desc-img .images div:nth-child(3) .green-bg{width:165px;height:221px;left:234px;top:70%}}@media(max-width: 900px){.title-desc-img .images div:nth-child(3) .green-bg{width:181px;height:242px;left:60px;top:unset;bottom:0}}@media(max-width: 600px){.title-desc-img .images div:nth-child(3) .green-bg{width:108px;height:144px;left:42px;top:80%}}@media(max-width: 400px){.title-desc-img .images div:nth-child(3) .green-bg{width:108.41px;height:144.87px;left:57px;top:70%}}.title-desc-img .images img{mix-blend-mode:overlay;filter:grayscale(100%);width:100%;height:100%;object-fit:cover;display:block;opacity:.5}.title-desc-img .lineSVG{position:absolute;top:50%;left:50%;transform:translate(-50%, -55%);z-index:-3}.title-desc-img .lineSVG.lineSVG-room{top:85%}.title-desc-img .lineSVG.lineSVG-spa{top:50%}", ""]), t.exports = r
    },
    674: function(t, e, o) {
      "use strict";
      o(664)
    },
    675: function(t, e, o) {
      var r = o(9)(!1);
      r.push([t.i, '.greet{margin-bottom:10.5555555556vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:center/cover;position:relative}@media(max-width: 1200px){.greet{margin-bottom:132px}}@media(max-width: 900px){.greet{margin-bottom:124px}}@media(max-width: 600px){.greet{margin-bottom:96px}}@media(max-width: 400px){.greet{margin-bottom:88px}}.greet.img .greet-wrapper-img::before{content:""}.greet .greet-wrapper-img{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat}.greet .greet-wrapper-img::before{position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;z-index:1;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}.greet .filter{position:absolute;z-index:4;left:50%;bottom:8.3333333333vw;transform:translate(-50%, 0)}@media(max-width: 1200px){.greet .filter{bottom:30px}}@media(max-width: 900px){.greet .filter{position:fixed;bottom:16px;z-index:10}}.greet.gradient::before{content:"";position:absolute;bottom:0;left:0;right:0;height:27.7777777778vw;z-index:2;background:linear-gradient(to top, #122223, transparent)}.greet .heading{text-align:center;z-index:3}.greet .heading .h2{font-size:5.2777777778vw}@media(max-width: 1200px){.greet .heading .h2{font-size:64px}}@media(max-width: 900px){.greet .heading .h2{font-size:56px}}@media(max-width: 600px){.greet .heading .h2{font-size:42px}}@media(max-width: 400px){.greet .heading .h2{font-size:38px}}@media(max-width: 360px){.greet .heading .h2{font-size:36px}}@media(max-width: 340px){.greet .heading .h2{font-size:33px}}.greet .info{position:absolute;z-index:2;left:50%;bottom:2.7777777778vw;transform:translate(-50%, 0);display:flex;width:100%;justify-content:center}@media(max-width: 1200px){.greet .info{bottom:40px}}@media(max-width: 900px){.greet .info{bottom:32px}}@media(max-width: 600px){.greet .info{flex-direction:column;align-items:center;text-align:center}}.greet .info.withPrice{justify-content:space-between;padding:0 3.8888888889vw}@media(max-width: 1200px){.greet .info.withPrice{padding:0 40px}}@media(max-width: 900px){.greet .info.withPrice{padding:0 32px}}@media(max-width: 600px){.greet .info.withPrice{flex-direction:column;align-items:center}.greet .info.withPrice>div{margin-bottom:24px}.greet .info.withPrice .info-data{flex-direction:column;align-items:center}}@media(max-width: 900px){.greet .info.withPrice .h4{font-size:22px}}@media(max-width: 600px){.greet .info.withPrice .h4{font-family:"apercu pro";font-weight:300}}.greet .info.withPrice .price{text-transform:lowercase}.greet .info .info-data{display:flex;white-space:nowrap}.greet .info .info-data div:not(:last-child){margin-right:2.5vw}.greet .info div{display:flex;white-space:nowrap;align-items:center}.greet .info div span:nth-child(1){opacity:.5;margin-right:.5555555556vw;display:flex}.greet .info div span:nth-child(2){opacity:.8}@media(max-width: 640px){.rooms_page{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottages_page{background-image:url("/img/mobile_covers/cottages.jpg") !important}.chalets_page{background-image:url("/img/mobile_covers/chalet.png") !important}.chalet_2{background-image:url("/img/mobile_covers/chalet_2.jpg") !important}.lobby_bar_page{background-image:url("/img/mobile_covers/lobby_bar.jpg") !important}.phyto_bar_page{background-image:url("/img/mobile_covers/phytobar.jpg") !important}.wellness_page{background-image:url("/img/mobile_covers/wellness.jpg") !important}.relax_spa_page{background-image:url("/img/mobile_covers/SPA.jpg") !important}.activities_page{background-image:url("/img/mobile_covers/activities.jpg") !important}.about_story_page{background-image:url("/img/mobile_covers/history.jpg") !important}.mice_page{background-image:url("/img/mobile_covers/mice.jpg") !important}.cottage_8-28{background-image:url("/img/mobile_covers/cottage_8-28.jpg") !important}.cottage_lux_29-30{background-image:url("/img/mobile_covers/cottage_lux_29-30.jpg") !important}.cottage_premium_lux_31{background-image:url("/img/mobile_covers/cottage_premium_lux_31.jpg") !important}.verholy_duplex{background-image:url("/img/mobile_covers/verholy_duplex.jpeg") !important}.family_suite{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottage_premium_lux_6{background-image:url("/img/mobile_covers/cottage_premium_lux_6.jpg") !important}.relax_premium_cottage{background-image:url("/img/mobile_covers/relax_premium_cottage.jpeg") !important}.food-and-forest{background-image:url("/img/mobile_covers/food-and-forest.jpg") !important}}', ""]), t.exports = r
    },
    795: function(t, e, o) {
      var content = o(940);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("37f74952", content, !0, {
        sourceMap: !1
      })
    },
    805: function(t, e, o) {
      "use strict";
      var r = {
          props: {
            img: {
              type: String
            },
            alt: {
              type: String
            },
            title: {
              type: String
            },
            description: {
              type: String
            },
            lineSpa: {
              type: Boolean,
              default: !1
            }
          }
        },
        n = (o(939), o(4)),
        component = Object(n.a)(r, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "img-title-description"
          }, [e("div", {
            staticClass: "container md"
          }, [e("div", {
            staticClass: "image"
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": t.img,
              alt: t.alt
            }
          })]), t._v(" "), e("div", {
            staticClass: "text-content cursor-black"
          }, [e("h3", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: 1
              },
              expression: "{ opacity: 1 }"
            }],
            staticClass: "h4",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }), t._v(" "), e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4,
                delay: .3
              },
              expression: "{ opacity: 0.4, delay: 0.3 }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          })])]), t._v(" "), t.lineSpa ? e("svg", {
            staticClass: "line",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1771",
              viewBox: "0 0 1440 1771",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-217.559 1503.96C-122.098 1442.32 327.248 1704.66 569.5 1316C703.999 1100.21 638.595 1048.5 777 740.999C915.405 433.5 1148.08 175.653 1629.01 266.882",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    939: function(t, e, o) {
      "use strict";
      o(795)
    },
    940: function(t, e, o) {
      var r = o(9)(!1);
      r.push([t.i, ".img-title-description{margin-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.img-title-description{margin-bottom:132px}}@media(max-width: 900px){.img-title-description{margin-bottom:124px}}@media(max-width: 600px){.img-title-description{margin-bottom:96px}}@media(max-width: 400px){.img-title-description{margin-bottom:88px}}.img-title-description .container{display:flex;align-items:center}@media(max-width: 1200px){.img-title-description .container{align-items:center}}@media(max-width: 900px){.img-title-description .container{align-items:flex-start}}@media(max-width: 600px){.img-title-description .container{flex-direction:column;padding:0}}.img-title-description .container .image{min-width:49.3055555556vw;width:49.3055555556vw;height:65.9722222222vw;overflow:hidden}@media(max-width: 1200px){.img-title-description .container .image{width:504px;height:672px}}@media(max-width: 900px){.img-title-description .container .image{width:412px;height:588px}}@media(max-width: 600px){.img-title-description .container .image{width:calc(100% - 46px);height:552px;margin-left:auto}}@media(max-width: 400px){.img-title-description .container .image{width:calc(100% - 32px);height:517px}}.img-title-description .container .image img{width:100%;height:100%;object-fit:cover}.img-title-description .text-content{margin-left:-6.9444444444vw;padding:5.4166666667vw 5vw 6.1111111111vw 5vw;background:#ffd9b6;color:#353535;z-index:1}@media(max-width: 1200px){.img-title-description .text-content{margin-top:0;margin-left:-104px;padding:50px 44px 56px 56px}}@media(max-width: 900px){.img-title-description .text-content{margin-top:124px;margin-left:-132px;padding:48px 56px 56px 56px}}@media(max-width: 600px){.img-title-description .text-content{margin-top:-80px;margin-left:auto;margin-right:auto;padding:36px 40px 40px 40px;width:calc(100% - 46px)}}@media(max-width: 400px){.img-title-description .text-content{padding:36px 32px 40px 32px;width:calc(100% - 32px)}}.img-title-description .text-content .h4{margin-bottom:2.2222222222vw;text-transform:none;line-height:140%}@media(max-width: 1200px){.img-title-description .text-content .h4{margin-bottom:32px}}@media(max-width: 600px){.img-title-description .text-content .h4{margin-bottom:24px}}.img-title-description .text-content .text{opacity:.4}@media(max-width: 400px){.img-title-description .text-content .text{font-size:13px}}.img-title-description .line{position:absolute;width:100%;top:45%;left:50%;transform:translate(-50%, -50%);z-index:-1;pointer-events:none}", ""]), t.exports = r
    }
  }
]);