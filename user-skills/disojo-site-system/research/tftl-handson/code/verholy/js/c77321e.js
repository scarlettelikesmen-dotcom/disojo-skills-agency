/* https://verholy.com/_nuxt/c77321e.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [13], {
    656: function(t, e, r) {
      "use strict";

      function o(t, link) {
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
      r.d(e, "a", (function() {
        return o
      })), r.d(e, "b", (function() {
        return n
      }))
    },
    658: function(t, e, r) {
      var content = r(666);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("20a830c8", content, !0, {
        sourceMap: !1
      })
    },
    660: function(t, e, r) {
      var content = r(673);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("57f84dce", content, !0, {
        sourceMap: !1
      })
    },
    661: function(t, e, r) {
      "use strict";
      r(15), r(7), r(11), r(18), r(19);
      var o = r(6),
        n = (r(12), r(77)),
        d = r(8);

      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }
      var c = {
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
              i % 2 ? l(Object(source), !0).forEach((function(e) {
                Object(o.a)(t, e, source[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
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
        m = c,
        h = (r(665), r(4)),
        component = Object(h.a)(m, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "discover"
          }, t._l(t.blocks, (function(r) {
            return e("div", {
              key: r.slug,
              staticClass: "discover-item active-cursor",
              on: {
                click: function(e) {
                  return e.preventDefault(), t.toLinkSrc(r)
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
                "data-src": "".concat(r.next_image || r.main_photo),
                alt: "background image"
              }
            })]), t._v(" "), r.information ? e("h5", {
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
            }, [t._v("(" + t._s(t.$t("Number of rooms")) + " " + t._s(t.getAccommodationCount(r)) + ")")]), t._v(" "), e("div", {
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
            }, [t._v(t._s(t.getTitle(r)))]), t._v(" "), e("div", {
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
    663: function(t, e, r) {
      "use strict";
      var o = {
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
        n = (r(672), r(4)),
        component = Object(n.a)(o, (function() {
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
    665: function(t, e, r) {
      "use strict";
      r(658)
    },
    666: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, '.discover{margin-bottom:10.5555555556vw;width:100vw;height:47.2222222222vw;display:flex;align-items:center;justify-content:center}@media(max-width: 1200px){.discover{margin-bottom:132px}}@media(max-width: 900px){.discover{margin-bottom:124px}}@media(max-width: 600px){.discover{margin-bottom:96px}}@media(max-width: 400px){.discover{margin-bottom:88px}}@media(max-width: 1200px){.discover{height:484px}}@media(max-width: 900px){.discover{height:363px}}@media(max-width: 600px){.discover{flex-direction:column;height:auto}}.discover-item{width:100%;height:100%;background-size:cover;padding:2.7777777778vw 0 3.9583333333vw 3.8888888889vw;display:flex;flex-direction:column;align-items:flex-start;position:relative;cursor:pointer;overflow:hidden}.discover-item::before{content:"";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}@media(max-width: 1200px){.discover-item{padding:40px 0 55px 40px}}@media(max-width: 900px){.discover-item{padding:32px 0 45px 32px}}@media(max-width: 600px){.discover-item{height:60vw;padding:32px 0 45px 23px}}@media(max-width: 400px){.discover-item{height:70vw;padding:32px 0 43px 16px}}.discover-item:hover .h5{opacity:.8}.discover-item:hover .h3{margin-bottom:2.7777777778vw}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:40px}}@media(max-width: 900px){.discover-item:hover .h3{margin-bottom:32px}}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:0}}.discover-item:hover .img img{transform:scale(1.2)}.discover-item .img{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.discover-item .img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease-in-out}.discover-item .h5{opacity:.3;transition:.5s ease;margin-bottom:auto;display:flex;z-index:2}.discover-item .h5.noSubtitle{display:none}@media(max-width: 1200px){.discover-item .h5{opacity:.8}}.discover-item .h5 *{display:inline}.discover-item .h3{transition:.5s ease}.discover-pos{width:100%;height:130px;overflow:hidden;z-index:2;margin-top:auto}@media(max-width: 1200px){.discover-pos{height:unset;overflow:unset}}.discover-pos .discover-pos-inner{position:relative;transform:translateY(51px);transition:transform .5s ease-in-out}@media(max-width: 1200px){.discover-pos .discover-pos-inner{transform:translateY(0)}}.discover-item:hover .discover-pos .discover-pos-inner{transform:translateY(0px)}.discover-pos .discover-more{transform:scaleY(0);transform-origin:center bottom;transition:opacity .3s ease,transform .3s ease;opacity:0}@media(max-width: 1200px){.discover-pos .discover-more{opacity:1;transform:scaleY(1);margin-top:35px;height:auto}}.discover-item:hover .discover-pos .discover-more{transform:scaleY(1);height:auto;opacity:1}', ""]), t.exports = o
    },
    669: function(t, e, r) {
      var content = r(686);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("7756c688", content, !0, {
        sourceMap: !1
      })
    },
    670: function(t, e, r) {
      var content = r(688);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("a3e4684a", content, !0, {
        sourceMap: !1
      })
    },
    671: function(t, e, r) {
      var content = r(690);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("7a5efa00", content, !0, {
        sourceMap: !1
      })
    },
    672: function(t, e, r) {
      "use strict";
      r(660)
    },
    673: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, ".title-desc-img{margin-top:-10.5555555556vw;padding-top:21.3194444444vw;margin-bottom:10.5555555556vw;position:relative;min-height:80vh;display:flex;align-items:center}@media(max-width: 1200px){.title-desc-img{margin-top:128px;padding-top:200px;margin-bottom:132px}}@media(max-width: 900px){.title-desc-img{margin-top:0;padding-top:0}}@media(max-width: 600px){.title-desc-img{margin-top:72px;padding-top:0;min-height:auto;height:auto;margin-bottom:96px}}@media(max-width: 400px){.title-desc-img{margin-top:64px;margin-bottom:88px}}@media(max-width: 1200px){.title-desc-img.indent-add{margin-top:118px;margin-bottom:105px}}@media(max-width: 600px){.title-desc-img.indent-add{margin-top:72px;margin-bottom:88px}}@media(max-width: 400px){.title-desc-img.indent-add{margin-top:64px;margin-bottom:72px}}.title-desc-img.indent-add-wellness{margin-bottom:4.8611111111vw}@media(max-width: 1200px){.title-desc-img.indent-add-wellness{margin-top:118px;margin-bottom:105px}}@media(max-width: 600px){.title-desc-img.indent-add-wellness{margin-bottom:104px;margin-top:80px}}@media(max-width: 400px){.title-desc-img.indent-add-wellness{margin-bottom:88px;margin-top:88px}}.title-desc-img .container{position:relative}.title-desc-img .h4{width:55.5555555556vw;max-width:100%;margin-bottom:6.6666666667vw;text-transform:none}@media(max-width: 1200px){.title-desc-img .h4{width:664px;margin-bottom:96px}}@media(max-width: 900px){.title-desc-img .h4{width:calc(100% - 120px);margin:0 auto;margin-bottom:72px}}@media(max-width: 600px){.title-desc-img .h4{width:100%;margin-bottom:56px}}@media(max-width: 400px){.title-desc-img .h4{margin-bottom:48px}}.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:7.7777777778vw;margin-top:-.4166666667vw;margin-right:1.1111111111vw;line-height:.89;text-transform:uppercase;margin-left:0}@media(max-width: 1200px){.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:86px;line-height:1.1}}@media(max-width: 900px){.title-desc-img .h4:first-letter,.title-desc-img .h4 .word1:first-letter{font-size:76px;line-height:1}}.title-desc-img .text{width:30.0694444444vw;margin-left:auto;opacity:.4;position:static}@media(max-width: 1200px){.title-desc-img .text{width:305px}}@media(max-width: 900px){.title-desc-img .text{width:345px}}@media(max-width: 600px){.title-desc-img .text{width:100%;position:static}}.title-desc-img .images{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-2}@media(max-width: 600px){.title-desc-img .images{display:none}}.title-desc-img .images div{position:absolute !important;height:100%;width:100%}.title-desc-img .images div img{position:absolute;width:100%;height:100%;object-position:center;object-fit:cover}.title-desc-img .images div .green-bg{background:#122223}.title-desc-img .images div:nth-child(1) .green-bg{width:19.0972222222vw;height:10.7638888889vw;top:6.3194444444vw;left:5.6944444444vw}@media(max-width: 1200px){.title-desc-img .images div:nth-child(1) .green-bg{width:275px;height:155px;left:22px;top:0}}@media(max-width: 900px){.title-desc-img .images div:nth-child(1) .green-bg{width:301.08px;height:169.59px;left:-89px;top:60px}}@media(max-width: 600px){.title-desc-img .images div:nth-child(1) .green-bg{width:180px;height:102px;left:-63px;top:10%;transform:translate(0, -60%)}}@media(max-width: 400px){.title-desc-img .images div:nth-child(1) .green-bg{width:180px;height:102px;left:-70px;transform:translate(0, -30%)}}.title-desc-img .images div:nth-child(2) .green-bg{width:34.0277777778vw;height:19.1666666667vw;top:50%;right:5.6944444444vw;transform:translate(0, -50%)}@media(max-width: 1200px){.title-desc-img .images div:nth-child(2) .green-bg{width:457px;height:258px;right:-128px}}@media(max-width: 900px){.title-desc-img .images div:nth-child(2) .green-bg{width:500px;height:282px;right:0;transform:translate(40%, -50%)}}@media(max-width: 600px){.title-desc-img .images div:nth-child(2) .green-bg{width:300px;height:168px;transform:translate(35%, -50%)}}@media(max-width: 400px){.title-desc-img .images div:nth-child(2) .green-bg{width:300px;height:168px;transform:translate(50%, -50%)}}.title-desc-img .images div:nth-child(3) .green-bg{width:11.4583333333vw;height:15.2777777778vw;top:57%;left:20.4166666667vw}@media(max-width: 1200px){.title-desc-img .images div:nth-child(3) .green-bg{width:165px;height:221px;left:234px;top:70%}}@media(max-width: 900px){.title-desc-img .images div:nth-child(3) .green-bg{width:181px;height:242px;left:60px;top:unset;bottom:0}}@media(max-width: 600px){.title-desc-img .images div:nth-child(3) .green-bg{width:108px;height:144px;left:42px;top:80%}}@media(max-width: 400px){.title-desc-img .images div:nth-child(3) .green-bg{width:108.41px;height:144.87px;left:57px;top:70%}}.title-desc-img .images img{mix-blend-mode:overlay;filter:grayscale(100%);width:100%;height:100%;object-fit:cover;display:block;opacity:.5}.title-desc-img .lineSVG{position:absolute;top:50%;left:50%;transform:translate(-50%, -55%);z-index:-3}.title-desc-img .lineSVG.lineSVG-room{top:85%}.title-desc-img .lineSVG.lineSVG-spa{top:50%}", ""]), t.exports = o
    },
    685: function(t, e, r) {
      "use strict";
      r(669)
    },
    686: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, '.modal-info{position:fixed;top:0;left:0;width:100%;height:100%;background:#122223;z-index:999;overflow:hidden;display:flex;opacity:0;visibility:hidden;pointer-events:none;transition:.5s ease}.modal-info.active{opacity:1;visibility:visible;pointer-events:all}.modal-info .close{position:fixed;top:1.6666666667vw;right:1.6666666667vw;z-index:10;width:3.4722222222vw;height:3.4722222222vw;padding:.6944444444vw}@media(max-width: 1200px){.modal-info .close{top:24px;right:24px;width:32px;height:32px;padding:0}}@media(max-width: 400px){.modal-info .close{top:14px;right:14px;width:27px;height:27px}}.modal-info .close:hover{transform:rotate(90deg);transition:.3s}.modal-info .close img{width:100%;height:100%}.modal-info .gallery{position:relative;width:50%;height:100%;cursor:pointer;z-index:2}@media(max-width: 900px){.modal-info .gallery{display:none}}.modal-info .gallery:hover .cursor{opacity:1}.modal-info .gallery .cursor-fixed--wrapper{position:absolute;bottom:50%;left:50%;transform:translate(-50%, -50%);width:100%;display:none;padding:0 24px;z-index:1}@media(max-width: 1200px){.modal-info .gallery .cursor-fixed--wrapper{display:flex}}.modal-info .gallery .cursor-fixed--wrapper .cursor-fixed{display:block;width:56px;height:56px;border:1px solid rgba(255,255,255,.3);border-radius:50%;display:flex;justify-content:center;align-items:center}.modal-info .gallery .cursor-fixed--wrapper .cursor-fixed img{pointer-events:auto}.modal-info .gallery .cursor-fixed--wrapper .cursor-fixed:first-child{transform:rotate(-180deg);margin-right:24px}.modal-info .slider-desc{height:100%}.modal-info .slider-desc .swiper-container{height:100%}.modal-info .slider-desc .swiper-controls{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;display:flex}@media(max-width: 1200px){.modal-info .slider-desc .swiper-controls{display:none}}.modal-info .slider-desc .slider-prev,.modal-info .slider-desc .slider-next{width:100%;height:100%;display:flex;justify-content:center;align-items:center;outline:none}@media(max-width: 1200px){.modal-info .slider-desc .slider-prev,.modal-info .slider-desc .slider-next{cursor:pointer}}.modal-info .slider-desc .swiper-slide img{width:100%;height:100%;object-fit:cover;display:block}.modal-info .slider-desc .swiper-numbers{position:absolute;top:1.6666666667vw;left:1.6666666667vw;width:auto;height:auto;bottom:auto;z-index:1}@media(max-width: 1200px){.modal-info .slider-desc .swiper-numbers{top:unset;left:unset;right:24px;bottom:27px}}.modal-info .slider-desc .swiper-numbers span{opacity:.3}.modal-info .slider-desc .swiper-numbers span::before{content:"/";font-family:inherit;margin:0 .2777777778vw}.modal-info .slider-desc .cursor{display:block;position:fixed;width:5.1388888889vw;height:5.1388888889vw;border:1px solid rgba(255,255,255,.1);border-radius:50%;display:flex;justify-content:center;align-items:center;pointer-events:none;z-index:10;opacity:0;transition:transform .5s ease,opacity .5s ease}@media(max-width: 1200px){.modal-info .slider-desc .cursor{display:none}}.modal-info .slider-desc .cursor img{width:1.9444444444vw;height:1.3888888889vw}.modal-info .line{position:absolute;top:50%;left:20%;width:80%;height:auto;transform:translate(0, -50%);z-index:1}.modal-info .container{width:50%;overflow:auto;position:relative;z-index:2;overflow:auto}@media(max-width: 900px){.modal-info .container{width:100%}}@media(max-width: 1200px){.modal-info .container.md{padding:0 72px}}@media(max-width: 900px){.modal-info .container.md{padding:0;padding-bottom:48px}}.modal-info .hero{margin-bottom:10.5555555556vw;padding:7.2222222222vw 0;padding-bottom:0;margin-bottom:100px;display:flex;flex-direction:column;align-items:center;text-align:center}@media(max-width: 1200px){.modal-info .hero{margin-bottom:132px}}@media(max-width: 900px){.modal-info .hero{margin-bottom:124px}}@media(max-width: 600px){.modal-info .hero{margin-bottom:96px}}@media(max-width: 400px){.modal-info .hero{margin-bottom:88px}}@media(max-width: 1200px){.modal-info .hero{padding:112px 0;margin-bottom:128px}}@media(max-width: 900px){.modal-info .hero{padding:125px 0;margin-bottom:142px}}@media(max-width: 600px){.modal-info .hero{padding:87px 0 0 0;margin-bottom:96px;height:auto}}@media(max-width: 400px){.modal-info .hero{padding:80px 0 0 0;margin-bottom:88px}}.modal-info .hero ul{margin-top:100px;margin-bottom:2.7777777778vw;opacity:.5}@media(max-width: 1200px){.modal-info .hero ul{margin-bottom:40px}}@media(max-width: 900px){.modal-info .hero ul{margin-bottom:32px}}@media(max-width: 1200px){.modal-info .hero ul{margin-bottom:44px}}@media(max-width: 600px){.modal-info .hero ul{margin-top:45px;margin-bottom:0px}}.modal-info .hero .more-top{position:relative;display:block;cursor:pointer;margin-top:50px}.modal-info .hero .more-top img{position:absolute;width:1.9444444444vw;height:1.3888888889vw;top:50%;left:50%;transform:translate(-50%, -50%) rotate(90deg)}@media(max-width: 1200px){.modal-info .hero .more-top img{width:28px;height:20px}}.modal-info .hero .more{display:none;position:relative;align-self:center;padding-right:1.1111111111vw}@media(max-width: 900px){.modal-info .hero .more{display:none}}.modal-info .hero .more .action{cursor:pointer}.modal-info .hero .more img{position:absolute;width:1.9444444444vw;height:1.3888888889vw;top:50%;left:100%;transform:translate(0, -50%) rotate(90deg)}@media(max-width: 1200px){.modal-info .hero .more img{width:28px;height:20px}}@media(max-width: 900px){.modal-info .hero .heading{margin-bottom:56px}}@media(max-width: 600px){.modal-info .hero .heading{margin-bottom:32px}}.modal-info .hero .slider-mob{display:none}@media(max-width: 900px){.modal-info .hero .slider-mob{display:flex}}.modal-info .hero .slider-mob.slider-wrapper{width:100%}.modal-info .hero .slider-mob.slider-wrapper.numbering{margin-bottom:90px}@media(max-width: 900px){.modal-info .hero .slider-mob.slider-wrapper .heading{margin-bottom:0px}}.modal-info .hero .slider-mob.slider-wrapper .content{width:100%}.modal-info .hero .slider-mob.slider-wrapper .slider-main{width:526px !important}@media(max-width: 600px){.modal-info .hero .slider-mob.slider-wrapper .slider-main{width:368px !important}}@media(max-width: 400px){.modal-info .hero .slider-mob.slider-wrapper .slider-main{width:343px !important}}.modal-info .hero .slider-mob.slider-wrapper .slider-previews{width:1578px}@media(max-width: 600px){.modal-info .hero .slider-mob.slider-wrapper .slider-previews{width:1104px}}@media(max-width: 400px){.modal-info .hero .slider-mob.slider-wrapper .slider-previews{width:1029px}}.modal-info .hero .slider-mob.slider-wrapper .slider-previews span{width:526px;height:357px !important;border-top-width:32px;border-bottom-width:32px;border-left-width:36px;border-right-width:36px}@media(max-width: 600px){.modal-info .hero .slider-mob.slider-wrapper .slider-previews span{width:368px;height:248px !important;border-top-width:30px;border-bottom-width:30px;border-left-width:16px;border-right-width:16px}}@media(max-width: 400px){.modal-info .hero .slider-mob.slider-wrapper .slider-previews span{width:343px;height:232px !important;border-top-width:21px;border-bottom-width:21px;border-left-width:8px;border-right-width:8px}}.modal-info .hero .slider-mob.slider-wrapper .slider{height:356px !important}@media(max-width: 600px){.modal-info .hero .slider-mob.slider-wrapper .slider{height:246px !important}}@media(max-width: 400px){.modal-info .hero .slider-mob.slider-wrapper .slider{height:230px !important}}.modal-info .hero .slider-mob.slider-wrapper .swiper-numbers{top:calc(100% + 16px)}.modal-info .hero .slider-mob.slider-wrapper .slider-prev,.modal-info .hero .slider-mob.slider-wrapper .slider-next{width:40vw}@media(max-width: 900px){.modal-info .hero .slider-mob.slider-wrapper .slider-prev:hover~.slider-cursor,.modal-info .hero .slider-mob.slider-wrapper .slider-next:hover~.slider-cursor{opacity:0}}.modal-info .bottom-wrap{display:none;padding:7.2222222222vw 0 4.1666666667vw;text-align:center}@media(max-width: 900px){.modal-info .bottom-wrap{display:block;padding:7.2222222222vw 1.3888888889vw 0}}.modal-info .bottom-wrap .button{background:#ffe7d0;color:#122223;border:1px solid #ffe7d0;width:calc(100% + 5.5555555556vw);margin:0 -2.7777777778vw -2.7777777778vw -2.7777777778vw;transition:background-color .3s ease-in-out}.modal-info .bottom-wrap .button:hover{background:#122223;color:#ffe7d0}@media(max-width: 1200px){.modal-info .bottom-wrap .button{width:calc(100% + 48px);margin:0 -24px -24px -24px;font-size:12px}}@media(max-width: 900px){.modal-info .bottom-wrap .button{width:100%;margin:0 auto}}.modal-info .button-wrap-top{display:flex;width:100%;margin:3.4722222222vw 0 11.1111111111vw;justify-content:center;padding-right:1.7361111111vw}@media(max-width: 900px){.modal-info .button-wrap-top{display:none}}', ""]), t.exports = o
    },
    687: function(t, e, r) {
      "use strict";
      r(670)
    },
    688: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, '.card{display:flex;align-items:flex-start}@media(max-width: 600px){.card{flex-wrap:wrap;width:calc(100% + 46px) !important;margin-left:-23px !important;margin-right:-23px !important}}@media(max-width: 400px){.card{width:calc(100% + 32px) !important;margin-left:-16px !important;margin-right:-16px !important}}.card-img{width:52.5vw;cursor:pointer;overflow:hidden}@media(max-width: 1200px){.card-img{width:624px}}@media(max-width: 900px){.card-img{width:525px}}@media(max-width: 600px){.card-img{width:100%}}.card-img img{width:100%;object-fit:cover;display:block}.card-img.size-img img{height:100%}.card-info{width:29.7222222222vw;min-height:38.4722222222vw;background:#ffd9b6;margin-top:9.7222222222vw;margin-left:-5.5555555556vw;padding:3.8888888889vw;z-index:1;display:flex;flex-direction:column;align-items:flex-start;color:#353535}@media(max-width: 1200px){.card-info{width:344px;min-width:344px;min-height:510px;margin-top:40px;margin-left:-104px;padding:40px}}@media(max-width: 900px){.card-info{width:312px;min-width:312px;min-height:460px;margin-left:-133px;padding:32px;margin-top:40px}}@media(max-width: 600px){.card-info{width:calc(100% - 46px) !important;min-width:calc(100% - 46px) !important;margin:-32px auto 0 !important;min-height:432px;padding:24px}}@media(max-width: 400px){.card-info{width:calc(100% - 32px) !important;min-width:calc(100% - 32px) !important;min-height:432px}}.card-info>.h6{margin-bottom:1.1111111111vw;opacity:.4 !important}@media(max-width: 1200px){.card-info>.h6{margin-bottom:16px}}@media(max-width: 600px){.card-info>.h6{margin-bottom:14px}}@media(max-width: 900px){.card-info>.h6{margin-bottom:14px}}@media(max-width: 600px){.card-info>.h6{margin-bottom:12px}}.card-info .h3{margin-bottom:3.3333333333vw}@media(max-width: 1200px){.card-info .h3{margin-bottom:40px}}@media(max-width: 900px){.card-info .h3{margin-bottom:32px}}@media(max-width: 900px){.card-info .h3{font-size:24px}}.card-info .action{margin-bottom:5vw;color:#353535}@media(max-width: 1200px){.card-info .action{margin-bottom:64px}}@media(max-width: 600px){.card-info .action{margin-bottom:48px}}@media(max-width: 900px){.card-info .action{margin-bottom:43px}}@media(max-width: 600px){.card-info .action{margin-bottom:35px}}.card-info .button{width:calc(100% + 5.5555555556vw);margin:0 -2.7777777778vw -2.7777777778vw -2.7777777778vw;transition:background-color .3s ease-in-out}@media(max-width: 1200px){.card-info .button{width:calc(100% + 48px);margin:0 -24px -24px -24px;font-size:12px}}@media(max-width: 900px){.card-info .button{width:calc(100% + 32px);margin:0 -16px -16px -16px}}@media(max-width: 600px){.card-info .button{width:calc(100% + 18px);margin:0 -9px -9px -9px}}@media(max-width: 400px){.card-info .button{width:calc(100% + 20px);margin:0 -10px -10px -10px}}.card-characteristics{margin-bottom:3.3333333333vw;margin-top:auto}@media(max-width: 1200px){.card-characteristics{margin-bottom:40px}}@media(max-width: 900px){.card-characteristics{margin-bottom:32px}}@media(max-width: 1200px){.card-characteristics{margin-bottom:44px}}@media(max-width: 600px){.card-characteristics{margin-bottom:36px}}.card-characteristics li{opacity:.5}.card-price{margin-bottom:1.6666666667vw;margin-bottom:16px;display:flex;width:100%;justify-content:space-between;align-items:center}@media(max-width: 1200px){.card-price{margin-bottom:24px}}.card-price .h4{text-transform:lowercase}@media(max-width: 600px){.card-price .h4{font-size:20px;font-family:"apercu pro";font-weight:300}}.card-price .h6{text-align:right;opacity:.4;margin-top:.8333333333vw}@media(max-width: 1200px){.card-price .h6{margin-top:.6944444444vw}}@media(max-width: 600px){.card-price .h6{margin-top:0}}.price_for_workaday{opacity:.5;margin-bottom:16px}', ""]), t.exports = o
    },
    689: function(t, e, r) {
      "use strict";
      r(671)
    },
    690: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, ".card-list{margin-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.card-list{margin-bottom:132px}}@media(max-width: 900px){.card-list{margin-bottom:124px}}@media(max-width: 600px){.card-list{margin-bottom:96px}}@media(max-width: 400px){.card-list{margin-bottom:88px}}.card-list .card:not(:last-child){margin-bottom:10.5555555556vw}@media(max-width: 1200px){.card-list .card:not(:last-child){margin-bottom:132px}}@media(max-width: 900px){.card-list .card:not(:last-child){margin-bottom:124px}}@media(max-width: 600px){.card-list .card:not(:last-child){margin-bottom:96px}}@media(max-width: 400px){.card-list .card:not(:last-child){margin-bottom:88px}}.card-list.asymmetry .card:nth-child(6n+1) .card-info{margin-top:10.7638888889vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+1) .card-info{margin-top:132px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+1) .card-info{margin-top:172px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+1) .card-info{margin-top:-32px}}.card-list.asymmetry .card:nth-child(6n+2),.card-list.asymmetry .card:nth-child(6n+6){flex-direction:row-reverse;margin-right:-11.6666666667vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+2),.card-list.asymmetry .card:nth-child(6n+6){margin-right:-80px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+2),.card-list.asymmetry .card:nth-child(6n+6){margin-right:-32px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+2),.card-list.asymmetry .card:nth-child(6n+6){margin-right:-23px}}@media(max-width: 400px){.card-list.asymmetry .card:nth-child(6n+2),.card-list.asymmetry .card:nth-child(6n+6){margin-right:-16px}}.card-list.asymmetry .card:nth-child(6n+2) .card-img,.card-list.asymmetry .card:nth-child(6n+6) .card-img{width:49.3055555556vw;height:65.9722222222vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+2) .card-img,.card-list.asymmetry .card:nth-child(6n+6) .card-img{width:544px;height:724px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+2) .card-img,.card-list.asymmetry .card:nth-child(6n+6) .card-img{width:496px;height:660px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+2) .card-img,.card-list.asymmetry .card:nth-child(6n+6) .card-img{height:550px}}@media(max-width: 400px){.card-list.asymmetry .card:nth-child(6n+2) .card-img,.card-list.asymmetry .card:nth-child(6n+6) .card-img{height:498px}}.card-list.asymmetry .card:nth-child(6n+2) .card-info,.card-list.asymmetry .card:nth-child(6n+6) .card-info{margin-top:22.9166666667vw;margin-left:0;margin-right:-5.5555555556vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+2) .card-info,.card-list.asymmetry .card:nth-child(6n+6) .card-info{margin-top:182px;margin-right:-104px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+2) .card-info,.card-list.asymmetry .card:nth-child(6n+6) .card-info{margin-top:168px;margin-right:-133px}}.card-list.asymmetry .card:nth-child(6n+3) .card-img,.card-list.asymmetry .card:nth-child(6n+5) .card-img{width:49.3055555556vw;height:65.9722222222vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+3) .card-img,.card-list.asymmetry .card:nth-child(6n+5) .card-img{width:544px;height:724px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+3) .card-img,.card-list.asymmetry .card:nth-child(6n+5) .card-img{width:496px;height:660px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+3) .card-img,.card-list.asymmetry .card:nth-child(6n+5) .card-img{height:550px}}@media(max-width: 400px){.card-list.asymmetry .card:nth-child(6n+3) .card-img,.card-list.asymmetry .card:nth-child(6n+5) .card-img{height:498px}}.card-list.asymmetry .card:nth-child(6n+3) .card-info,.card-list.asymmetry .card:nth-child(6n+5) .card-info{margin-top:15.9722222222vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+3) .card-info,.card-list.asymmetry .card:nth-child(6n+5) .card-info{margin-top:107px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+3) .card-info,.card-list.asymmetry .card:nth-child(6n+5) .card-info{margin-top:100px}}.card-list.asymmetry .card:nth-child(6n+4){flex-direction:row-reverse;margin-right:-11.6666666667vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+4){margin-right:-80px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+4){margin-right:-32px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+4){margin-right:-23px}}@media(max-width: 400px){.card-list.asymmetry .card:nth-child(6n+4){margin-right:-16px}}.card-list.asymmetry .card:nth-child(6n+4) .card-img{width:55.5555555556vw;height:36.8055555556vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+4) .card-img{width:624px;height:416px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+4) .card-img{width:525px;height:350px}}@media(max-width: 600px){.card-list.asymmetry .card:nth-child(6n+4) .card-img{height:300px}}@media(max-width: 400px){.card-list.asymmetry .card:nth-child(6n+4) .card-img{height:272px}}.card-list.asymmetry .card:nth-child(6n+4) .card-info{margin-top:10.6944444444vw;margin-left:0;margin-right:-5.5555555556vw}@media(max-width: 1200px){.card-list.asymmetry .card:nth-child(6n+4) .card-info{margin-top:132px;margin-right:-104px}}@media(max-width: 900px){.card-list.asymmetry .card:nth-child(6n+4) .card-info{margin-top:100px;margin-right:-133px}}.card-list.simple .card .card-info{margin-top:10.7638888889vw}@media(max-width: 1200px){.card-list.simple .card .card-info{margin-top:132px}}@media(max-width: 900px){.card-list.simple .card .card-info{margin-top:172px}}@media(max-width: 600px){.card-list.simple .card .card-info{margin-top:-32px}}.card-list.simple .card:nth-child(6n+2),.card-list.simple .card:nth-child(6n+4),.card-list.simple .card:nth-child(6n+6){flex-direction:row-reverse;margin-right:-11.6666666667vw}@media(max-width: 1200px){.card-list.simple .card:nth-child(6n+2),.card-list.simple .card:nth-child(6n+4),.card-list.simple .card:nth-child(6n+6){margin-right:-80px}}@media(max-width: 900px){.card-list.simple .card:nth-child(6n+2),.card-list.simple .card:nth-child(6n+4),.card-list.simple .card:nth-child(6n+6){margin-right:-32px}}@media(max-width: 600px){.card-list.simple .card:nth-child(6n+2),.card-list.simple .card:nth-child(6n+4),.card-list.simple .card:nth-child(6n+6){margin-right:-23px}}@media(max-width: 400px){.card-list.simple .card:nth-child(6n+2),.card-list.simple .card:nth-child(6n+4),.card-list.simple .card:nth-child(6n+6){margin-right:-16px}}.card-list.simple .card:nth-child(6n+2) .card-info,.card-list.simple .card:nth-child(6n+4) .card-info,.card-list.simple .card:nth-child(6n+6) .card-info{margin-left:0;margin-right:-5.5555555556vw}@media(max-width: 1200px){.card-list.simple .card:nth-child(6n+2) .card-info,.card-list.simple .card:nth-child(6n+4) .card-info,.card-list.simple .card:nth-child(6n+6) .card-info{margin-right:-104px}}@media(max-width: 900px){.card-list.simple .card:nth-child(6n+2) .card-info,.card-list.simple .card:nth-child(6n+4) .card-info,.card-list.simple .card:nth-child(6n+6) .card-info{margin-right:-133px}}.card-list .lines{position:absolute;width:100%;height:100%;top:0;left:0;z-index:-1;display:flex;flex-direction:column;justify-content:flex-start;pointer-events:none}.card-list .lines svg:nth-child(1){position:relative;top:0;left:50%;transform:translateX(-50%)}.card-list .lines svg:nth-child(2){position:relative;top:15%;left:50%;transform:translateX(-50%)}.card-list .lines svg:nth-child(3){position:relative;top:20%;left:50%;transform:translateX(-50%)}.card-list .lines svg:nth-child(4){position:relative;bottom:30%;left:50%;transform:translateX(-50%)}.card-list .lines svg:nth-child(5){position:relative;top:35%;left:50%;transform:translateX(-50%)}.card-list-head{position:relative;z-index:10;margin-bottom:3.8888888889vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;margin-top:12.2222222222vw}@media(max-width: 1200px){.card-list-head{margin-bottom:40px}}@media(max-width: 900px){.card-list-head{margin-bottom:32px}}@media(max-width: 600px){.card-list-head{margin-bottom:24px}}@media(max-width: 1200px){.card-list-head{margin-top:96px}}@media(max-width: 900px){.card-list-head{margin-bottom:40px}}@media(max-width: 600px){.card-list-head{margin-bottom:32px;margin-top:40px}}.card-list-head .h4{text-transform:none;margin-bottom:2.0833333333vw}@media(max-width: 1200px){.card-list-head .h4{margin-bottom:20px}}.card-list-head .card-list-head__wrapper{display:flex;width:100%;justify-content:space-between;align-items:center}@media(max-width: 600px){.card-list-head .card-list-head__wrapper{flex-direction:column;align-items:flex-start}.card-list-head .card-list-head__wrapper .sorting{width:100%;justify-content:space-between}.card-list-head .card-list-head__wrapper .sorting>div{margin-left:0}}@media(max-width: 600px){.card-list-head .card-list-head__wrapper .info{width:100%;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between}}.card-list-head .card-list-head__wrapper .info .info-date{opacity:.5;display:none}@media(max-width: 600px){.card-list-head .card-list-head__wrapper .info .info-date{display:inline-block}}.card-list-head .card-list-head__wrapper .info .info-title{opacity:.2;display:inline-block}.card-list-head>.h6{opacity:.3;font-weight:300}.card-list-head .dropdown .dropdown-head{min-width:auto;border:none}.card-list-head .dropdown .dropdown-head span{font-size:.6944444444vw;line-height:1.2;letter-spacing:.3em;text-transform:uppercase;opacity:.5}@media(max-width: 1200px){.card-list-head .dropdown .dropdown-head span{font-size:9px;line-height:1}}.card-list-head .dropdown .dropdown-body{left:auto;right:-.6944444444vw;min-width:11.25vw}@media(max-width: 1200px){.card-list-head .dropdown .dropdown-body{padding:24px;min-width:162px}}.card-list-head .dropdown .dropdown-body li{font-size:.6944444444vw;line-height:1.2;letter-spacing:.3em;text-transform:uppercase;cursor:pointer;text-align:right !important;opacity:.5;transition:.5s ease}@media(max-width: 1200px){.card-list-head .dropdown .dropdown-body li{font-size:9px;line-height:1}}@media(max-width: 600px){.card-list-head .dropdown .dropdown-body li{padding:5px 0}}.card-list-head .dropdown .dropdown-body li:hover{opacity:.8}.card-list-head .dropdown .dropdown-body li:not(:last-child){margin-bottom:1.1111111111vw}@media(max-width: 1200px){.card-list-head .dropdown .dropdown-body li:not(:last-child){margin-bottom:16px}}@media(max-width: 600px){.card-list-head .dropdown .dropdown-body li:not(:last-child){margin-bottom:14px}}.card-list-head .dropdown .dropdown-body li.active{opacity:1}.booking-page .card-list .card-list-head.is_reccomend{margin-top:176px}@media(max-width: 1200px){.booking-page .card-list .card-list-head.is_reccomend{margin-top:132px}}@media(max-width: 900px){.booking-page .card-list .card-list-head.is_reccomend{margin-top:131px}}@media(max-width: 600px){.booking-page .card-list .card-list-head.is_reccomend{margin-top:56px}}@media(max-width: 400px){.booking-page .card-list .card-list-head.is_reccomend{margin-top:48px}}.sorting{display:flex;justify-content:flex-end;z-index:1}@media(max-width: 600px){.sorting .dropdown:not(:last-child) .dropdown-body{right:unset}}.sorting>div{margin-left:41px}", ""]), t.exports = o
    },
    691: function(t, e, r) {
      "use strict";
      r(11), r(12), r(15), r(7), r(18), r(19);
      var o = r(6),
        n = (r(27), r(54), r(49), r(39), r(194)),
        d = (r(62), r(38), r(657)),
        l = r(705),
        c = r(662),
        m = r(77),
        h = {
          props: {
            card: {
              type: Object
            },
            roomType: {
              type: String
            }
          },
          components: {
            AppHeading: d.a,
            Features: l.a,
            AppSlider: c.a,
            Button: m.a
          },
          data: function() {
            return {
              isMobile: !1,
              sliderOptions: {
                loop: !0,
                slidesPerView: 1,
                speed: 1e3,
                preloadImages: !1,
                lazy: {
                  loadPrevNext: !0,
                  loadOnTransitionStart: !0
                },
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
          computed: {
            getTopDescription: function() {
              if (this.item.description[this.lang][0]) return this.item.description[this.lang][0].attributes.short_description
            },
            getBottomDescription: function() {
              if (this.item.attributes_description[this.lang][0]) return this.item.attributes_description[this.lang][0].attributes.description
            },
            item: function() {
              return this.card.attributes[0]
            },
            characteristics: function() {
              var t = this.item.properties[this.lang][0];
              if (t) return JSON.parse(t.attributes.properties_field)
            },
            gallery: function() {
              return JSON.parse(this.item.gallery_images)
            }
          },
          mounted: function() {
            window.addEventListener("resize", this.handleResize)
          },
          beforeDestroy: function() {
            window.removeEventListener("resize", this.handleResize)
          },
          methods: {
            cursorLeft: function(t) {
              var cursor = this.$refs.cursor,
                e = cursor.clientHeight,
                r = cursor.clientWidth,
                o = t.x - r / 2,
                n = t.y - e / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(n, "px;\n          left: ").concat(o, "px;\n          transform: rotate(-180deg);\n        "))
            },
            cursorRight: function(t) {
              var cursor = this.$refs.cursor,
                e = cursor.clientHeight,
                r = cursor.clientWidth,
                o = t.x - r / 2,
                n = t.y - e / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(n, "px;\n          left: ").concat(o, "px;\n        "))
            },
            checkValue: function(t, e) {
              return t ? t[e] : null
            },
            handleResize: function() {
              this.isMobile = !0
            }
          }
        },
        x = (r(685), r(4)),
        w = Object(x.a)(h, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "modal-info"
          }, [e("button", {
            staticClass: "close active-cursor",
            on: {
              click: function(e) {
                return t.$emit("close")
              }
            }
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/icon-close-white.svg",
              alt: "close"
            }
          })]), t._v(" "), e("div", {
            staticClass: "gallery no-cursor"
          }, [e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:slider",
              value: t.sliderOptions,
              expression: "sliderOptions",
              arg: "slider"
            }],
            staticClass: "slider-desc"
          }, [e("div", {
            staticClass: "swiper-controls"
          }, [e("div", {
            staticClass: "slider-prev",
            on: {
              mousemove: t.cursorLeft
            }
          }), t._v(" "), e("div", {
            staticClass: "slider-next",
            on: {
              mousemove: t.cursorRight
            }
          })]), t._v(" "), e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.gallery, (function(img) {
            return e("div", {
              key: img.key,
              staticClass: "swiper-slide"
            }, [e("img", {
              staticClass: "swiper-lazy",
              attrs: {
                "data-not-lazy": "",
                "data-src": t.$env.imgUrl + img.attributes.image,
                alt: t.card.title
              }
            })])
          })), 0), t._v(" "), e("div", {
            staticClass: "cursor-fixed--wrapper"
          }, [e("span", {
            staticClass: "slider-prev fixed cursor-fixed"
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })]), t._v(" "), e("span", {
            staticClass: "slider-next fixed cursor-fixed"
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })])]), t._v(" "), e("div", {
            staticClass: "swiper-numbers action"
          }), t._v(" "), e("span", {
            ref: "cursor",
            staticClass: "cursor"
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })])])]), t._v(" "), e("div", {
            staticClass: "container md"
          }, [e("div", {
            staticClass: "hero"
          }, [e("app-heading", {
            attrs: {
              subtitle: t.roomType,
              title: t.item.title[t.lang]
            }
          }), t._v(" "), t.gallery && t.gallery.length > 0 ? e("app-slider", {
            staticClass: "slider-mob",
            attrs: {
              slides: t.gallery,
              numbering: !0
            }
          }) : t._e(), t._v(" "), e("div", {
            staticClass: "more-top"
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })]), t._v(" "), t.characteristics ? e("ul", t._l(t.characteristics, (function(r) {
            return e("li", {
              key: r.key,
              staticClass: "text"
            }, [t._v("\n            " + t._s(r.key) + ": " + t._s(r.value) + "\n          ")])
          })), 0) : t._e(), t._v(" "), e("div", {
            staticClass: "button-wrap-top"
          }, [e("Button", {
            attrs: {
              disableAnimation: !1,
              name: t.$t("Book your stay"),
              action: !0
            },
            on: {
              actionClick: function(e) {
                return t.$emit("choose")
              }
            }
          })], 1), t._v(" "), e("div", {
            staticClass: "more"
          }, [e("span", {
            staticClass: "action"
          }, [t._v(t._s(t.$t("scroll down details")))]), t._v(" "), e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })])], 1), t._v(" "), e("Features", {
            attrs: {
              topDescription: t.getTopDescription,
              bottomDescription: t.getBottomDescription,
              services: t.item.attributes[t.lang]
            }
          }), t._v(" "), e("div", {
            staticClass: "bottom-wrap"
          }, [e("button", {
            staticClass: "button cursor-light active-cursor",
            on: {
              click: function(e) {
                return t.$emit("choose")
              }
            }
          }, [t._v("\n          " + t._s(t.$t("Book your stay")) + "\n        ")])])], 1), t._v(" "), e("svg", {
            staticClass: "line",
            attrs: {
              width: "1067",
              height: "549",
              viewBox: "0 0 1067 549",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M0.999856 511.66C73.3739 567.253 179.938 553.435 259.136 508.042C408.683 422.299 485.212 250.014 614.37 135.803C720.289 42.1427 864.097 -9.75133 1004.93 2.87517C1145.77 15.5017 1280.79 94.9321 1353.55 216.164",
              opacity: "0.2",
              stroke: "#FFD9B6"
            }
          })])])
        }), [], !1, null, null, null).exports,
        f = r(16),
        v = {
          name: "ImageTextScrollParallax",
          props: {
            component: {
              type: String,
              default: "div"
            },
            yPercentImg: {
              type: Number,
              default: 30
            },
            yPercentInfo: {
              type: Number,
              default: -5
            },
            restart: Boolean,
            duration: {
              type: Number,
              default: 1
            },
            paused: {
              type: Boolean,
              default: !1
            },
            isScrollTrigger: !0
          },
          data: function() {
            return {
              timeline: null
            }
          },
          watch: {
            restart: function() {
              this.timeline && this.timeline.restart(!0)
            }
          },
          mounted: function() {
            this.timeline = this.createTl()
          },
          updated: function() {
            this.timeline = this.createTl()
          },
          methods: {
            createTl: function() {
              if (window.innerWidth > 480) {
                var t = this.$refs.el,
                  e = f.b.timeline({
                    paused: this.paused
                  }),
                  r = t.querySelector(".card-info"),
                  img = t.querySelector(".card-img");
                return e.to(img, {
                  yPercent: this.yPercentImg,
                  ease: "Power0.easeOut",
                  scrollTrigger: {
                    trigger: t,
                    scrub: !0
                  }
                }), e.to(r, {
                  yPercent: this.yPercentInfo,
                  ease: "Power2.easeOut",
                  scrollTrigger: {
                    trigger: t,
                    scrub: !0
                  }
                }), e
              }
            }
          }
        },
        y = Object(x.a)(v, (function() {
          var t = this;
          return (0, t._self._c)(t.component, {
            ref: "el",
            tag: "component"
          }, [t._t("default")], 2)
        }), [], !1, null, null, null).exports;
      r(66);

      function _(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }

      function C(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? _(Object(source), !0).forEach((function(e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var k = {
          name: "SlideUpStagger",
          props: {
            component: {
              type: String,
              default: "div"
            },
            start: {
              type: String,
              default: "center bottom"
            },
            duration: {
              type: Number,
              default: 1
            },
            delay: {
              type: Number,
              default: 0
            },
            restart: Boolean,
            paused: {
              type: Boolean,
              default: !1
            },
            isScrollTrigger: {
              type: Boolean,
              default: !0
            },
            startVars: {
              type: Object,
              default: function() {
                return {}
              }
            },
            toVars: {
              type: Object,
              default: function() {
                return {}
              }
            }
          },
          data: function() {
            return {
              timeline: null
            }
          },
          watch: {
            restart: function() {
              this.timeline && this.timeline.restart(!0)
            }
          },
          mounted: function() {
            var t = this.$refs.el,
              e = f.b.timeline({
                scrollTrigger: {
                  trigger: t,
                  start: this.start
                }
              });
            e.from(t, C({
              delay: this.delay,
              duration: this.duration,
              stagger: .01,
              y: 50,
              opacity: 0
            }, this.startVars)), e.to(t, C({
              opacity: 1,
              y: 0
            }, this.toVars))
          }
        },
        O = Object(x.a)(k, (function() {
          var t = this;
          return (0, t._self._c)(t.component, {
            ref: "el",
            tag: "component"
          }, [t._t("default")], 2)
        }), [], !1, null, null, null).exports,
        S = r(64),
        j = r(8);

      function P(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }

      function D(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? P(Object(source), !0).forEach((function(e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var B = {
          props: {
            card: {
              type: Object
            },
            idx: {
              type: Number
            },
            count: {
              type: Number
            },
            roomType: {
              type: String
            },
            innerPage: {
              type: Boolean
            },
            buttonSelect: {
              type: Boolean
            },
            sizeImg: {
              type: Boolean,
              default: !1
            },
            noAnimation: {
              type: Boolean,
              default: !1
            },
            disableAnimation: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            Button: m.a,
            AppModalInfo: w,
            ImageTextScrollParallax: y,
            SlideUpStagger: S.a,
            SlideUp: O
          },
          computed: D(D(D({}, Object(j.b)("booking", ["getRoomSumPrice", "isAccommodationListFull", "additionalPricedCount", "additionalCount", "getNightsCount"])), Object(j.c)("booking", ["one_accomodation", "upsale_was_showed", "openUpSaleModal"])), {}, {
            item: function() {
              return this.card.attributes[0]
            },
            characteristics: function() {
              var t = this.item.properties[this.lang][0];
              if (t) return JSON.parse(t.attributes.properties_field)
            },
            setRoomType: function() {
              switch (this.item.cottages_and_number_slug) {
                case "chalet":
                  return "chalet";
                case "rooms":
                  return "room";
                case "cottages":
                  return "cottage"
              }
            },
            checkBookingPage: function() {
              var t = this.$route.path.split("/");
              return "booking" === t[t.length - 1]
            },
            getCards: function() {
              return this.getFilteredFreeRooms().length > 0 ? this.getFilteredFreeRooms() : this.getFilteredFreeRooms(!0)
            }
          }),
          data: function() {
            return {
              modalShow: !1,
              upsaleShow: !1
            }
          },
          watch: {
            modalShow: function() {
              this.modalShow ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
            }
          },
          methods: {
            action: function() {
              this.innerPage ? this.$router.push(this.localePath("/accommodation/".concat(this.item.slug))) : this.modalShow = !0
            },
            closeModal: function() {
              this.modalShow = !1
            },
            addAcommodation: function() {
              this.upsale_was_showed || this.$emit("openUpsale"), this.$store.commit("booking/addAcommodation", this.card), this.isAccommodationListFull && this.upsale_was_showed && this.$router.push(this.localePath("/booking/checkout"))
            },
            getPrice: function(t) {
              return this.checkBookingPage ? this.getRoomSumPrice(t.servio_id) : this.item.default_price ? "".concat(this.item.default_price) : void 0
            },
            setOneAccommodation: function(t) {
              this.$store.commit("booking/setOneAccommodation", t), this.$store.commit("api/categories/chooseCategory", t.id), this.$store.commit("booking/clearFilters"), this.$store.commit("showBookingModal"), this.$store.dispatch("booking/getFreeRooms"), this.$store.commit("setFromCategory", !0)
            }
          },
          mounted: function() {
            this.setRoomType
          }
        },
        z = (r(687), Object(x.a)(B, (function() {
          var t = this,
            e = t._self._c;
          return e("image-text-scroll-parallax", {
            staticClass: "card"
          }, [e("div", {
            staticClass: "card-img",
            class: {
              "size-img": t.sizeImg
            },
            on: {
              click: t.action
            }
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": t.item.main_photo,
              alt: t.item.title[t.lang]
            }
          })]), t._v(" "), t.noAnimation ? e("div", {
            staticClass: "card-info cursor-black"
          }, [t.idx ? e("span", {
            staticClass: "h6"
          }, [t.checkBookingPage ? e("span", [t._v(t._s(t.item.cottages_and_number.name[t.lang]))]) : e("span", [t._v(t._s(t.idx) + " " + t._s(t.setRoomType) + " " + t._s(t.$t("of")) + " " + t._s(t.count))])]) : e("span", {
            staticClass: "h6"
          }, [t._v(t._s(t.setRoomType))]), t._v(" "), e("h3", {
            staticClass: "h3"
          }, [t._v(t._s(t.item.title[t.lang]))]), t._v(" "), t.characteristics ? e("ul", {
            staticClass: "card-characteristics"
          }, t._l(t.characteristics, (function(r) {
            return e("li", {
              key: r.key,
              staticClass: "text"
            }, [t._v("\n        " + t._s(r.key) + ": " + t._s(r.value) + "\n      ")])
          })), 0) : t._e(), t._v(" "), e("Button", {
            attrs: {
              disableAnimation: t.disableAnimation,
              name: t.card.buttonModal,
              action: !0
            },
            on: {
              actionClick: t.action
            }
          }), t._v(" "), t.getPrice ? e("div", {
            staticClass: "card-price"
          }, [e("p", {
            staticClass: "h4"
          }, [t._v("\n        " + t._s(t.getPrice(t.item)) + "\n        " + t._s(t.$t("UAH")) + "\n      ")]), t._v(" "), e("no-ssr", [e("span", {
            staticClass: "h6"
          }, [t.checkBookingPage && t.additionalPricedCount(t.item) ? e("span", [t._v("+ " + t._s(t.additionalPricedCount(t.item)) + "\n            " + t._s(t.$tc("extraSeat", 1 === t.additionalPricedCount(t.item) ? 0 : 1)) + "\n            "), e("br")]) : t._e(), t._v("\n          " + t._s(t.$t("per")) + "\n          "), t.checkBookingPage ? e("span", [t._v(t._s(t.getNightsCount))]) : e("span", [t._v("1")]), t._v("\n          " + t._s(t.$tc("nightCount", t.checkBookingPage ? t.getNightsCount : 1)) + "\n        ")])])], 1) : t._e(), t._v(" "), t.buttonSelect ? e("button", {
            staticClass: "button cursor-light active-cursor",
            on: {
              click: t.addAcommodation
            }
          }, [t._v("\n      " + t._s(t.$t("Select")) + "\n    ")]) : e("button", {
            staticClass: "button cursor-light active-cursor",
            on: {
              click: function(e) {
                return t.setOneAccommodation(t.card)
              }
            }
          }, [t._v("\n      " + t._s(t.$t("Book your stay")) + "\n    ")])], 1) : e("div", {
            staticClass: "card-info cursor-black"
          }, [t.idx ? e("SlideUp", {
            staticClass: "h6",
            attrs: {
              component: "span",
              toVars: {
                opacity: .4
              }
            }
          }, [t.checkBookingPage ? e("span", [t._v(t._s(t.item.cottages_and_number.name[t.lang]))]) : e("span", [t._v(t._s(t.idx) + " " + t._s(t.setRoomType) + " " + t._s(t.$t("of")) + " " + t._s(t.count))])]) : e("SlideUp", {
            staticClass: "h6",
            attrs: {
              component: "span",
              toVars: {
                opacity: .4
              }
            }
          }, [t._v(t._s(t.setRoomType) + "\n    ")]), t._v(" "), e("SlideUpStagger", {
            class: "h3",
            attrs: {
              start: "bottom bottom",
              component: "h3"
            }
          }, [t._v(t._s(t.item.title[t.lang]) + "\n    ")]), t._v(" "), t.characteristics ? e("ul", {
            staticClass: "card-characteristics"
          }, t._l(t.characteristics, (function(r) {
            return e("SlideUp", {
              key: r.key,
              staticClass: "text",
              attrs: {
                component: "li",
                toVars: {
                  opacity: .5
                }
              }
            }, [t._v(t._s(r.key) + ": " + t._s(r.value) + "\n      ")])
          })), 1) : t._e(), t._v(" "), e("Button", {
            attrs: {
              name: t.card.buttonModal,
              action: !0
            },
            on: {
              actionClick: t.action
            }
          }), t._v(" "), t.getPrice ? e("SlideUp", {
            staticClass: "card-price",
            attrs: {
              component: "div"
            }
          }, [e("p", {
            staticClass: "h4"
          }, [t._v("\n        " + t._s(t.getPrice(t.item)) + "\n        " + t._s(t.$t("UAH")) + "\n      ")]), t._v(" "), e("span", {
            staticClass: "h6"
          }, [t._v("\n        " + t._s(t.$t("per")) + "\n        "), t.checkBookingPage ? e("span", [t._v(t._s(t.getNightsCount))]) : e("span", [t._v("1")]), t._v("\n        " + t._s(t.$tc("nightCount", t.checkBookingPage ? t.getNightsCount : 1)) + "\n      ")])]) : t._e(), t._v(" "), e("SlideUp", [e("p", {
            staticClass: "text price_for_workaday"
          }, [t._v(t._s(t.$t("price_for_workaday")))])]), t._v(" "), t.buttonSelect ? e("SlideUp", {
            staticClass: "button cursor-light active-cursor",
            attrs: {
              component: "button",
              start: "center bottom"
            },
            nativeOn: {
              click: function(e) {
                return t.addAcommodation.apply(null, arguments)
              }
            }
          }, [t._v("\n      " + t._s(t.$t("Select")) + "\n    ")]) : e("SlideUp", {
            staticClass: "button cursor-light active-cursor",
            attrs: {
              component: "button",
              start: "top bottom"
            },
            nativeOn: {
              click: function(e) {
                return t.setOneAccommodation(t.card)
              }
            }
          }, [t._v("\n      " + t._s(t.$t("Book your stay")) + "\n    ")])], 1), t._v(" "), e("app-modal-info", {
            class: {
              active: t.modalShow
            },
            attrs: {
              card: t.card,
              roomType: t.setRoomType
            },
            on: {
              close: t.closeModal,
              choose: t.addAcommodation
            }
          })], 1)
        }), [], !1, null, null, null)),
        A = z.exports,
        N = r(704),
        $ = r(703),
        T = r(135);

      function U(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }

      function R(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? U(Object(source), !0).forEach((function(e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : U(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var F = {
          name: '{\n    "en": "All",\n    "uk": "Всі"\n  }',
          value: "all",
          id: -1
        },
        L = {
          props: {
            cards: {
              type: Array
            },
            noAnimation: {
              type: Boolean,
              default: !1
            },
            asymmetry: {
              type: Boolean,
              default: !1
            },
            simple: {
              type: Boolean,
              default: !1
            },
            bar: {
              type: Boolean,
              default: !1
            },
            cardTitle: {
              type: Boolean,
              default: !1
            },
            innerPage: {
              type: Boolean,
              default: !1
            },
            buttonSelect: {
              type: Boolean,
              default: !1
            },
            disableAnimation: {
              type: Boolean,
              default: !1
            },
            sizeImg: {
              type: Boolean,
              default: !1
            },
            is_reccomend: Boolean
          },
          mixins: [T.a],
          components: {
            AppCard: A,
            Dropdown: n.a,
            AppRoomTypeList: N.a,
            AppModalUpsale: $.a
          },
          data: function() {
            return {
              upsaleShow: !1,
              sorting: {
                title: "sort by",
                current: "recommendation",
                list: [{
                  id: 0,
                  name: this.$t("Recomendation"),
                  value: "recommendation"
                }, {
                  id: 1,
                  name: this.$t("Lowest price"),
                  value: "lowest_price"
                }, {
                  id: 2,
                  name: this.$t("Higest price"),
                  value: "highest_price"
                }]
              },
              roomType: {}
            }
          },
          computed: R(R(R({}, Object(j.c)(["category_types"])), Object(j.c)("booking", ["type_filter", "date_filter", "current_acommodations", "chosed_acommodations"])), {}, {
            allTypes: function() {
              var t = [];
              return this.category_types && (t = this.category_types.map((function(t) {
                return {
                  name: t.attributes[0].name,
                  value: t.attributes[0].slug,
                  id: t.attributes[0].id
                }
              }))).unshift(F), t
            },
            addLetter: function() {
              return this.cards.length > 1 ? this.$t("Items") : this.$t("Item")
            },
            getSortingCategory: function() {
              var t = this;
              return this.sorting.list.find((function(e) {
                return t.sorting.current === e.value
              })).name
            }
          }),
          methods: {
            closeUpsale: function() {
              this.$store.commit("booking/setUpsaleWasShowed", !0), this.upsaleShow = !1, this.chosed_acommodations.includes(null) ? this.$store.commit("booking/setNextAccomodation") : this.$router.push(this.localePath("/booking/checkout")), f.b.core.globals("scrollTrigger").ScrollTrigger.refresh()
            },
            openUpsale: function() {
              this.upsaleShow = !0
            },
            setSorting: function(t) {
              this.sorting.current = t, this.$store.commit("setSorting", t), f.b.core.globals("scrollTrigger").ScrollTrigger.refresh()
            },
            setNumber: function(t) {
              return this.cards.length > 1 ? t + 1 : null
            },
            setRoomType: function(t) {
              this.roomType = t, this.$store.commit("booking/setTypeFilter", this.roomType), f.b.core.globals("scrollTrigger").ScrollTrigger.refresh()
            }
          },
          created: function() {
            this.roomType = this.type_filter ? this.type_filter : this.allTypes[0]
          }
        },
        M = (r(689), Object(x.a)(L, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "card-list",
            class: {
              asymmetry: t.asymmetry,
              simple: t.simple
            }
          }, [t.bar ? e("div", {
            staticClass: "card-list-head container sm",
            class: {
              is_reccomend: t.is_reccomend
            }
          }, [t.cardTitle ? e("h4", {
            directives: [{
              name: "slideUpWordsStagger",
              rawName: "v-slideUpWordsStagger",
              value: {
                delay: .3
              },
              expression: "{ delay: 0.3 }"
            }],
            staticClass: "card-list-title h4"
          }, [t._v("\n      " + t._s(t.$t("Options for accomodation")) + "\n    ")]) : t._e(), t._v(" "), e("div", {
            staticClass: "card-list-head__wrapper"
          }, [e("div", {
            staticClass: "info"
          }, [e("span", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .2,
                delay: .4
              },
              expression: "{ opacity: 0.2, delay: 0.4 }"
            }],
            staticClass: "h6 info-title"
          }, [t._v(t._s(t.cards.length) + " " + t._s(t.addLetter) + " " + t._s(t.$t("found")))]), t._v(" "), e("span", {
            staticClass: "h6 info-date"
          }, [t._v("\n          " + t._s(t.getPrettyDate(t.getDefaultStartDate)) + "\n          " + t._s(t.getPrettyMonth(t.getDefaultStartDate)) + "\n          " + t._s(t.getPrettyYear(t.getDefaultStartDate)) + "\n          -\n          " + t._s(t.getPrettyDate(t.getDefaultLeaveDate)) + "\n          " + t._s(t.getPrettyMonth(t.getDefaultLeaveDate)) + "\n          " + t._s(t.getPrettyYear(t.getDefaultLeaveDate)) + "\n        ")])]), t._v(" "), e("div", {
            staticClass: "sorting"
          }, [e("Dropdown", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: 1,
                delay: .4
              },
              expression: "{ opacity: 1, delay: 0.4 }"
            }],
            attrs: {
              title: t.demo.filter.accommodation.title,
              value: t.getLang(t.roomType.name),
              closeOnSelect: !0,
              select: !0,
              activeCursor: !0,
              noDefaultCursor: !0
            }
          }, [e("app-room-type-list", {
            attrs: {
              category_types: t.allTypes
            },
            on: {
              roomType: t.setRoomType
            }
          })], 1), t._v(" "), e("Dropdown", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: 1,
                delay: .4
              },
              expression: "{ opacity: 1, delay: 0.4 }"
            }],
            attrs: {
              closeOnSelect: !0,
              value: t.getSortingCategory,
              activeCursor: !0,
              noDefaultCursor: !0
            }
          }, [e("ul", t._l(t.sorting.list, (function(r) {
            return e("li", {
              key: r.id,
              staticClass: "text",
              class: {
                active: r.value === t.sorting.current
              },
              on: {
                click: function(e) {
                  return t.setSorting(r.value)
                }
              }
            }, [t._v("\n              " + t._s(r.name) + "\n            ")])
          })), 0)])], 1)])]) : t._e(), t._v(" "), e("div", {
            staticClass: "container sm"
          }, t._l(t.cards, (function(r, o) {
            return e("app-card", {
              key: r.id,
              attrs: {
                card: r,
                idx: t.setNumber(o),
                count: t.cards.length,
                innerPage: t.innerPage,
                buttonSelect: t.buttonSelect,
                sizeImg: t.sizeImg,
                noAnimation: t.noAnimation,
                disableAnimation: t.disableAnimation
              },
              on: {
                openUpsale: t.openUpsale
              }
            })
          })), 1), t._v(" "), e("div", {
            staticClass: "lines"
          }, [e("svg", {
            staticClass: "lineSVG",
            attrs: {
              width: "1440",
              height: "1629",
              viewBox: "0 0 1440 1629",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw",
              value: {
                start: "top bottom",
                duration: 5
              },
              expression: "{ start: 'top bottom', duration: 5 }"
            }],
            attrs: {
              opacity: "0.2",
              d: "M1579.7 562.13C1579.7 562.13 1386.12 565.614 1127.18 806.658C677.902 1224.87 259.267 1136.67 -87.6402 1067.54",
              stroke: "#FFD9B6"
            }
          })]), t._v(" "), e("svg", {
            staticClass: "lineSVG",
            attrs: {
              width: "1440",
              height: "1438",
              viewBox: "0 0 1440 1438",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none"
            }
          }, [e("mask", {
            attrs: {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "1440",
              height: "1438"
            }
          }, [e("rect", {
            attrs: {
              width: "1440",
              height: "1438",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask0)"
            }
          }, [e("g", {
            attrs: {
              opacity: "0.2"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1890.84 -99.9964C1740.08 -151.921 1572.26 -90.4906 1441.19 0.316247C1310.11 91.1231 1200.45 210.749 1066.12 296.591C938.484 378.204 789.717 424.896 638.807 435.462C479.149 446.619 319.448 418.347 175.477 348.27C75.8227 363.979 34.2293 490.176 91.4426 573.262C148.656 656.348 259.222 684.921 360.104 683.783C460.986 682.645 561.02 658.345 661.79 663.199C888.389 674.121 1084.81 831.792 1215.18 1017.48C1345.55 1203.16 1425.1 1418.91 1530.32 1619.9C1580.53 1715.85 1641.71 1813.49 1738.19 1862.8C1834.66 1912.11 1974.47 1891.01 2021.06 1793.19C1964.94 1785.2 1914.03 1830.82 1889.05 1881.71C1864.07 1932.6 1856.09 1990.28 1833.1 2042.09C1783.4 2154.08 1659.05 2228.16 1536.9 2218.54C1483.35 2214.33 1432.13 2195.83 1381.14 2178.9C1330.15 2161.98 1277.51 2146.34 1223.83 2148.17C1170.14 2150 1114.49 2172.15 1084.76 2216.91C1055.04 2261.67 1060.44 2330.35 1104.49 2361.11C1148.54 2391.87 1223.67 2362.38 1225.64 2308.67C1227.16 2267.3 1188.47 2233.27 1147.86 2225.3C1107.25 2217.34 1065.6 2228.86 1025.88 2240.52C795.541 2308.13 566.855 2383.79 330.884 2427.88C-343.793 2553.95 -1065.52 2406.68 -1636.88 2026.44",
              stroke: "#FFD9B6"
            }
          })])])]), t._v(" "), e("svg", {
            staticClass: "lineSVG",
            attrs: {
              width: "1440",
              height: "322",
              viewBox: "0 0 1440 322",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none"
            }
          }, [e("mask", {
            attrs: {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "1440",
              height: "322"
            }
          }, [e("rect", {
            attrs: {
              width: "1440",
              height: "322",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask0)"
            }
          }, [e("g", {
            attrs: {
              opacity: "0.2"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1890.84 -2247C1740.08 -2298.92 1572.26 -2237.49 1441.19 -2146.68C1310.11 -2055.88 1200.45 -1936.25 1066.12 -1850.41C938.484 -1768.8 789.717 -1722.1 638.807 -1711.54C479.149 -1700.38 319.448 -1728.65 175.477 -1798.73C75.8227 -1783.02 34.2293 -1656.82 91.4426 -1573.74C148.656 -1490.65 259.222 -1462.08 360.104 -1463.22C460.986 -1464.35 561.02 -1488.65 661.79 -1483.8C888.389 -1472.88 1084.81 -1315.21 1215.18 -1129.52C1345.55 -943.836 1425.1 -728.093 1530.32 -527.099C1580.53 -431.149 1641.71 -333.514 1738.19 -284.2C1834.66 -234.886 1974.47 -255.995 2021.06 -353.808C1964.94 -361.797 1914.03 -316.176 1889.05 -265.289C1864.07 -214.402 1856.09 -156.72 1833.1 -104.907C1783.4 7.07612 1659.05 81.1585 1536.9 71.5412C1483.35 67.335 1432.13 48.8258 1381.14 31.9006C1330.15 14.9754 1277.51 -0.655743 1223.83 1.17401C1170.14 3.00376 1114.49 25.1504 1084.76 69.9123C1055.04 114.674 1060.44 183.346 1104.49 214.105C1148.54 244.865 1223.67 215.377 1225.64 161.668C1227.16 120.297 1188.47 86.2685 1147.86 78.3024C1107.25 70.3363 1065.6 81.8616 1025.88 93.5207C795.541 161.132 566.855 236.788 330.884 280.88C-343.793 406.954 -1065.52 259.682 -1636.88 -120.56",
              stroke: "#FFD9B6"
            }
          })])])]), t._v(" "), e("svg", {
            staticClass: "lineSVG",
            attrs: {
              width: "1440",
              height: "874",
              viewBox: "0 0 1440 874",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none"
            }
          }, [e("mask", {
            attrs: {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "1440",
              height: "874"
            }
          }, [e("rect", {
            attrs: {
              width: "1440",
              height: "874",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask0)"
            }
          }, [e("g", {
            attrs: {
              opacity: "0.2"
            }
          }, [e("mask", {
            attrs: {
              id: "mask1",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "-489",
              width: "1440",
              height: "2272"
            }
          }, [e("rect", {
            attrs: {
              y: "-489",
              width: "1440",
              height: "2272",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask1)"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-43.6676 1700.38C119.945 1756.73 302.084 1690.06 444.336 1591.51C586.589 1492.95 705.605 1363.13 851.394 1269.96C989.917 1181.39 1151.37 1130.71 1315.16 1119.25C1488.43 1107.14 1661.75 1137.82 1818 1213.87C1926.16 1196.83 1971.3 1059.86 1909.21 969.691C1847.11 879.518 1727.12 848.508 1617.63 849.743C1508.14 850.978 1399.58 877.351 1290.21 872.084C1044.28 860.229 831.111 689.11 689.622 487.586C548.132 286.061 461.797 51.9164 347.6 -166.221C293.111 -270.355 226.707 -376.318 122.003 -429.838C17.2996 -483.358 -134.434 -460.449 -185 -354.292C-124.093 -345.623 -68.8415 -395.135 -41.7302 -450.362C-14.6188 -505.59 -5.96114 -568.192 18.9948 -624.424C72.939 -745.959 207.89 -826.36 340.456 -815.922C398.578 -811.357 454.168 -791.269 509.505 -772.901C564.842 -754.532 621.97 -737.567 680.237 -739.553C738.504 -741.539 798.902 -765.575 831.16 -814.154C863.417 -862.734 857.557 -937.263 809.752 -970.647C761.947 -1004.03 680.407 -972.027 678.264 -913.736C676.617 -868.837 718.61 -831.906 762.685 -823.26C806.761 -814.615 851.963 -827.123 895.069 -839.777C1145.05 -913.155 1393.24 -995.264 1649.34 -1043.12C2381.57 -1179.94 3164.85 -1020.11 3784.95 -607.436",
              stroke: "#FFD9B6"
            }
          })])])])]), t._v(" "), e("svg", {
            staticClass: "lineSVG",
            attrs: {
              width: "1440",
              height: "1053",
              viewBox: "0 0 1440 1053",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              preserveAspectRatio: "none"
            }
          }, [e("mask", {
            attrs: {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "1440",
              height: "1053"
            }
          }, [e("rect", {
            attrs: {
              width: "1440",
              height: "1053",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask0)"
            }
          }, [e("g", {
            attrs: {
              opacity: "0.2"
            }
          }, [e("mask", {
            attrs: {
              id: "mask1",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "-1604",
              width: "1440",
              height: "2272"
            }
          }, [e("rect", {
            attrs: {
              y: "-1604",
              width: "1440",
              height: "2272",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask1)"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-43.6676 585.375C119.945 641.729 302.084 575.059 444.336 476.507C586.589 377.954 705.605 248.125 851.394 154.962C989.917 66.3868 1151.37 15.7121 1315.16 4.2452C1488.43 -7.86345 1661.75 22.8199 1818 98.8743C1926.16 81.8253 1971.3 -55.1355 1909.21 -145.309C1847.11 -235.482 1727.12 -266.492 1617.63 -265.257C1508.14 -264.022 1399.58 -237.649 1290.21 -242.916C1044.28 -254.771 831.111 -425.89 689.622 -627.414C548.132 -828.939 461.797 -1063.08 347.6 -1281.22C293.111 -1385.36 226.707 -1491.32 122.003 -1544.84C17.2996 -1598.36 -134.434 -1575.45 -185 -1469.29C-124.093 -1460.62 -68.8415 -1510.13 -41.7302 -1565.36C-14.6188 -1620.59 -5.96114 -1683.19 18.9948 -1739.42C72.939 -1860.96 207.89 -1941.36 340.456 -1930.92C398.578 -1926.36 454.168 -1906.27 509.505 -1887.9C564.842 -1869.53 621.97 -1852.57 680.237 -1854.55C738.504 -1856.54 798.902 -1880.57 831.16 -1929.15C863.417 -1977.73 857.557 -2052.26 809.752 -2085.65C761.947 -2119.03 680.407 -2087.03 678.264 -2028.74C676.617 -1983.84 718.61 -1946.91 762.685 -1938.26C806.761 -1929.61 851.963 -1942.12 895.069 -1954.78C1145.05 -2028.15 1393.24 -2110.26 1649.34 -2158.12C2381.57 -2294.94 3164.85 -2135.11 3784.95 -1722.44",
              stroke: "#FFD9B6"
            }
          })])]), t._v(" "), e("g", {
            attrs: {
              opacity: "0.3"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-38.7029 1839.8C12.0615 1883.24 88.7642 1876.07 143.461 1842.99C198.157 1809.91 237.044 1756.5 278.474 1707.46C419.661 1540.88 602.078 1416.12 808.193 1345.16L932.187 1290.58C1039.34 1243.42 1156.25 1186.12 1196.5 1074.07C1217.39 1015.96 1214.11 950.669 1229.75 890.585C1252.66 802.49 1318.35 728.895 1401.97 697.68C1485.59 666.466 1584.94 678.533 1662.57 729.114",
              stroke: "#FFD9B6"
            }
          })])])])]), t._v(" "), e("app-modal-upsale", {
            class: {
              active: t.upsaleShow
            },
            on: {
              close: t.closeUpsale
            }
          })], 1)
        }), [], !1, null, null, null));
      e.a = M.exports
    },
    782: function(t, e, r) {
      var content = r(914);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("215f4025", content, !0, {
        sourceMap: !1
      })
    },
    913: function(t, e, r) {
      "use strict";
      r(782)
    },
    914: function(t, e, r) {
      var o = r(9)(!1);
      o.push([t.i, "", ""]), t.exports = o
    },
    980: function(t, e, r) {
      "use strict";
      r.r(e);
      r(12), r(15), r(7), r(18), r(19);
      var o = r(6),
        n = r(63),
        d = r(1),
        l = (r(11), r(13), r(8)),
        c = r(659),
        m = r(663),
        h = r(691),
        x = r(701),
        w = r(661),
        f = r(135),
        v = r(656);

      function y(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }

      function _(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? y(Object(source), !0).forEach((function(e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var C = {
          fetch: function(t) {
            return Object(d.a)(regeneratorRuntime.mark((function e() {
              var r;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, t.route, e.next = 3, r.dispatch("getVillas");
                  case 3:
                    return e.next = 5, r.dispatch("getChalets");
                  case 5:
                    return e.next = 7, r.dispatch("getRooms");
                  case 7:
                    return e.next = 9, r.dispatch("getCottages");
                  case 9:
                    return e.next = 11, r.dispatch("getCategories");
                  case 11:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, r, o, d, l, c, m, h, x, w, f = t.$route;
            return {
              title: (null === (e = this.getLang(null === (r = this.state) || void 0 === r || null === (o = r.villas) || void 0 === o ? void 0 : o.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(n.a)(Object(v.b)({
                url: f.path,
                title: null === (d = this.getLang(null === (c = this.state) || void 0 === c || null === (m = c.villas) || void 0 === m ? void 0 : m.meta_tags)[0]) || void 0 === d || null === (l = d.attributes) || void 0 === l ? void 0 : l.title,
                description: null === (h = this.getLang(null === (x = this.state) || void 0 === x || null === (w = x.villas) || void 0 === w ? void 0 : w.meta_tags)[0]) || void 0 === h ? void 0 : h.attributes.description
              }))
            }
          },
          mixins: [f.c],
          components: {
            AppGreet: c.a,
            AppTitleDescriptionImages: m.a,
            AppCardList: h.a,
            AppTitleImages: x.a,
            AppDiscover: w.a
          },
          data: function() {
            return {
              image: ""
            }
          },
          created: function() {
            this.setTypeFilter()
          },
          computed: _(_({}, Object(l.b)(["getVillas"])), Object(l.c)("booking", ["is_one_accomodation_chosed"])),
          beforeDestroy: function() {
            this.is_one_accomodation_chosed || this.$store.commit("booking/setTypeFilter", this.demo.filter.ALL)
          },
          mounted: function() {
            this.image = window.innerWidth > 1024 ? this.getVillas[0].attributes[0].main_photo : this.getVillas[0].attributes[0].main_photo_mobile
          }
        },
        k = (r(913), r(4)),
        component = Object(k.a)(C, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "cottages"
          }, [e("app-greet", {
            attrs: {
              subtitle: t.demo.accommodation.villas.greet.subtitle,
              title: t.getLang(t.state.villas.name),
              img: t.image,
              showFilter: !0,
              page_name: "villas_page"
            }
          }), t._v(" "), null != t.getLang(t.state.villas.description)[0] && 0 != t.getLang(t.state.villas.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.villas.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.villas.description)[0].attributes.main_description,
              description: t.getLang(t.state.villas.description)[0].attributes.short_description,
              images: t.state.villas.background_images,
              lineRoom: !0
            }
          }) : t._e(), t._v(" "), e("app-card-list", {
            attrs: {
              cards: t.getVillas,
              simple: !0,
              innerPage: !0
            }
          }), t._v(" "), e("app-title-images", {
            attrs: {
              title: t.$t("titleImages"),
              images: t.demo.accommodation.chalets.titleImages.images,
              buttonName: t.$t("Book your stay")
            }
          }), t._v(" "), e("app-discover", {
            attrs: {
              noSubtitle: !0,
              blocks: [t.state.rooms, t.state.chalets]
            }
          })], 1)
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);