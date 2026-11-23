/* https://verholy.com/_nuxt/06b1367.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [25], {
    656: function(t, e, n) {
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

      function r(t) {
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
      n.d(e, "a", (function() {
        return o
      })), n.d(e, "b", (function() {
        return r
      }))
    },
    657: function(t, e, n) {
      "use strict";
      n(15), n(7), n(11), n(18), n(19);
      var o = n(6);

      function r(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? r(Object(source), !0).forEach((function(e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : r(Object(source)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }
      var d = {
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
        c = (n(681), n(4)),
        component = Object(c.a)(d, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "heading",
            class: {
              appearance: t.appearance,
              position: t.position,
              indent: t.indent,
              "position-offer": t.positionOffer
            }
          }, [t.subtitle ? e("h6", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: m({
                opacity: .4
              }, t.animationProps),
              expression: "{ opacity: 0.4, ...animationProps }"
            }],
            staticClass: "h6",
            class: {
              "subtitle-hide": t.subtitleHide
            }
          }, [t._v(t._s(t.subtitle))]) : t._e(), t._v(" "), t.title ? e("h2", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: m({}, t.animationProps),
              expression: "{ ...animationProps }"
            }],
            staticClass: "h2",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }) : t._e(), t._v(" "), t.description ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: m({
                opacity: .4
              }, t.animationProps),
              expression: "{ opacity: 0.4, ...animationProps }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          }) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    667: function(t, e, n) {
      var content = n(682);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(10).default)("0cba1d92", content, !0, {
        sourceMap: !1
      })
    },
    681: function(t, e, n) {
      "use strict";
      n(667)
    },
    682: function(t, e, n) {
      var o = n(9)(!1);
      o.push([t.i, "@media(max-width: 600px){.heading{max-width:90%;margin-left:auto;margin-right:auto}}.heading.position{max-width:83.6805555556vw;margin-left:auto;margin-right:auto;height:100vh;margin-bottom:-10.5555555556vw;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;z-index:1}@media(max-width: 1200px){.heading.position{margin-bottom:-132px}}@media(max-width: 900px){.heading.position{margin-bottom:-124px}}@media(max-width: 600px){.heading.position{max-width:calc(100% - 46px);margin-bottom:-96px;height:calc(100vh - 201px)}}@media(max-width: 400px){.heading.position{max-width:calc(100% - 32px);margin-bottom:-88px;height:calc(100vh - 165px)}}.heading.position-offer{height:auto;padding:22.2222222222vw 0 10.5555555556vw 0;margin-bottom:unset}@media(max-width: 1200px){.heading.position-offer{padding:340px 0 132px 0}}@media(max-width: 900px){.heading.position-offer{padding:410px 0 124px 0}}@media(max-width: 600px){.heading.position-offer{padding:270px 0 96px 0}}@media(max-width: 400px){.heading.position-offer{padding:265px 0 88px 0}}.heading.indent{margin-bottom:5vw}@media(max-width: 1200px){.heading.indent{margin-bottom:64px}}@media(max-width: 600px){.heading.indent{margin-bottom:48px}}.heading.appearance{color:#353535}.heading .h2 div:first-child{padding-top:3px}.heading .h6{margin-bottom:1.1111111111vw;opacity:.4;display:inline-block}@media(max-width: 1200px){.heading .h6{margin-bottom:16px}}@media(max-width: 600px){.heading .h6{margin-bottom:14px}}.heading .h6.subtitle-hide{display:none}@media(max-width: 900px){.heading .h6{opacity:.6}}@media(max-width: 600px){.heading .h6{opacity:.65}}.heading .text{max-width:30.0694444444vw;margin-top:2.7777777778vw;margin-left:auto;margin-right:auto;opacity:.4}@media(max-width: 1200px){.heading .text{margin-top:40px}}@media(max-width: 900px){.heading .text{margin-top:32px}}@media(max-width: 600px){.heading .text{margin-top:24px}}@media(max-width: 1200px){.heading .text{max-width:384px}}@media(max-width: 900px){.heading .text{max-width:344px}}@media(max-width: 600px){.heading .text{max-width:100%}}", ""]), t.exports = o
    },
    710: function(t, e, n) {
      var content = n(721);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(10).default)("7e41871a", content, !0, {
        sourceMap: !1
      })
    },
    711: function(t, e, n) {
      var content = n(723);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(10).default)("78ad8994", content, !0, {
        sourceMap: !1
      })
    },
    720: function(t, e, n) {
      "use strict";
      n(710)
    },
    721: function(t, e, n) {
      var o = n(9)(!1);
      o.push([t.i, ".item-info{width:100%;display:flex;flex-direction:column;background-color:#ffe7d0}.item-info.colorDarker{background-color:#ffd9b6}.item-info:not(:last-child){margin-bottom:1.6666666667vw}@media(max-width: 1200px){.item-info:not(:last-child){margin-bottom:24px}}@media(max-width: 1200px){.item-info:not(:last-child){margin-bottom:8px}}@media(max-width: 600px){.item-info:not(:last-child){margin-bottom:6px}}.item-info .main-block:hover .icon-arrow{transform:translateX(5px)}.item-info.open .main-block{padding-bottom:3.3333333333vw}.item-info.open .main-block:hover .icon-arrow{transform:rotate(90deg)}.item-info.open .icon-arrow{transform:rotate(90deg)}.item-info.open .line{height:1px;width:calc(100% - 7.7777777778vw);margin:0 auto;background-color:rgba(53,53,53,.1)}.item-info.open .description{display:block}.item-info .main-block{width:100%;padding:3.8888888889vw;display:flex;align-items:center;opacity:1;transition:opacity .2s ease-in-out;outline:none;cursor:pointer}@media(max-width: 1200px){.item-info .main-block{padding:40px;cursor:default}}@media(max-width: 600px){.item-info .main-block{padding:32px 24px;align-items:baseline}}.item-info .main-block:hover{opacity:.8}.item-info .main-block .h3{margin-right:2.2222222222vw;max-width:72%;color:#353535;display:flex}@media(max-width: 1200px){.item-info .main-block .h3{margin-right:24px;max-width:80%}}@media(max-width: 900px){.item-info .main-block .h3{margin-right:16px;max-width:76%}}@media(max-width: 600px){.item-info .main-block .h3{margin-right:0;max-width:270px;word-break:break-word;font-size:22px}}@media(max-width: 400px){.item-info .main-block .h3{max-width:265px;font-size:20px}}.item-info .main-block .h3 .number{margin-right:.6944444444vw}@media(max-width: 1200px){.item-info .main-block .h3 .number{margin-right:5px}}@media(max-width: 600px){.item-info .main-block .h3 .number{margin-right:3px}}.item-info .main-block .icon-arrow{transition:all .2s ease-in-out;width:2.8125vw;height:1.9444444444vw}@media(max-width: 1200px){.item-info .main-block .icon-arrow{width:35px;height:23px}}@media(max-width: 900px){.item-info .main-block .icon-arrow{width:25px;height:17px}}@media(max-width: 600px){.item-info .main-block .icon-arrow{margin-left:auto}}.item-info .main-info{width:100%;display:flex;flex-direction:column;align-items:flex-start}.item-info .main-info .h4{margin-bottom:1.1111111111vw;color:#353535}@media(max-width: 1200px){.item-info .main-info .h4{margin-bottom:16px}}@media(max-width: 600px){.item-info .main-info .h4{margin-bottom:14px}}.item-info .main-info .content{display:flex;align-items:baseline}@media(max-width: 600px){.item-info .main-info .content{flex-direction:column;align-items:flex-start}}.item-info .main-info .content .content-item:not(:last-child){margin-right:5.5555555556vw}@media(max-width: 1200px){.item-info .main-info .content .content-item:not(:last-child){margin-right:56px}}@media(max-width: 900px){.item-info .main-info .content .content-item:not(:last-child){margin-right:16px}}@media(max-width: 600px){.item-info .main-info .content .content-item:not(:last-child){margin-right:0;margin-bottom:14px}}.item-info .main-info .content .content-item .text{color:#353535;opacity:.8}.item-info .main-info .content .content-item .title{opacity:.4}.item-info .description{display:none;margin-top:2.7777777778vw;padding:0 3.8888888889vw 3.8888888889vw 3.8888888889vw}@media(max-width: 1200px){.item-info .description{margin-top:40px}}@media(max-width: 900px){.item-info .description{margin-top:32px}}@media(max-width: 600px){.item-info .description{margin-top:24px}}@media(max-width: 1200px){.item-info .description{padding:0 40px 40px 40px}}@media(max-width: 900px){.item-info .description{margin-top:40px}}@media(max-width: 600px){.item-info .description{margin-top:24px;padding:0 24px 32px 24px}}.item-info .description.text{color:#353535;text-align:left;opacity:.4}.item-info .description.text li:not(:last-child){display:block;margin-bottom:2.0833333333vw}@media(max-width: 1200px){.item-info .description.text li:not(:last-child){margin-bottom:0}}", ""]), t.exports = o
    },
    722: function(t, e, n) {
      "use strict";
      n(711)
    },
    723: function(t, e, n) {
      var o = n(9)(!1);
      o.push([t.i, ".block-info.container{padding-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.block-info.container{padding-bottom:132px}}@media(max-width: 900px){.block-info.container{padding-bottom:124px}}@media(max-width: 600px){.block-info.container{padding-bottom:96px}}@media(max-width: 400px){.block-info.container{padding-bottom:88px}}.block-info.container .item-info{position:relative;z-index:1}.block-info.container .LineSVGRight{position:absolute;right:0;top:-120%;width:100%}@media(max-width: 1200px){.block-info.container .LineSVGRight{top:-160%}}@media(max-width: 900px){.block-info.container .LineSVGRight{top:-250%}}@media(max-width: 600px){.block-info.container .LineSVGRight{top:-370%}}", ""]), t.exports = o
    },
    729: function(t, e, n) {
      "use strict";
      var o, r = n(6),
        m = (n(62), n(38), o = {
          data: function() {},
          props: {
            item: {
              type: Object
            },
            colorDarker: {
              type: Boolean,
              default: !1
            },
            type: {
              type: String
            },
            index: {
              type: Number
            },
            open: !1
          }
        }, Object(r.a)(o, "data", (function() {
          return {}
        })), Object(r.a)(o, "methods", {
          toggleItem: function() {
            this.$emit("onToggle")
          },
          romanize: function(t) {
            if (isNaN(t)) return NaN;
            for (var e = String(+t).split(""), n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], o = "", i = 3; i--;) o = (n[+e.pop() + 10 * i] || "") + o;
            return Array(+e.join("") + 1).join("M") + o
          }
        }), o),
        d = (n(720), n(4)),
        c = {
          components: {
            AppInfoItem: Object(d.a)(m, (function() {
              var t = this,
                e = t._self._c;
              return e("div", {
                staticClass: "item-info",
                class: {
                  open: t.open,
                  colorDarker: t.colorDarker
                },
                on: {
                  click: t.toggleItem
                }
              }, [e("div", {
                staticClass: "main-block active-cursor cursor-black"
              }, [e("h3", {
                directives: [{
                  name: "slideUpStagger",
                  rawName: "v-slideUpStagger",
                  value: {
                    delay: .3
                  },
                  expression: "{ delay: 0.3 }"
                }],
                staticClass: "h3"
              }, ["text" === t.type ? e("span", {
                staticClass: "number"
              }, [t._v(t._s(t.romanize(t.index)))]) : t._e(), t._v("\n      " + t._s(t.item.title) + "\n    ")]), t._v(" "), e("img", {
                directives: [{
                  name: "lazy-load",
                  rawName: "v-lazy-load"
                }],
                staticClass: "icon-arrow",
                attrs: {
                  "data-src": "/img/icons/arrow-right-black.svg",
                  alt: "icon arrow"
                }
              })]), t._v(" "), e("div", {
                staticClass: "line"
              }), t._v(" "), "text" === t.type ? e("div", {
                staticClass: "description text cursor-black",
                domProps: {
                  innerHTML: t._s(t.item.description)
                }
              }) : t._e(), t._v(" "), "info" === t.type ? e("div", {
                staticClass: "main-info description cursor-black"
              }, [e("h4", {
                staticClass: "h4"
              }, [t._v(t._s(t.item.short_description))]), t._v(" "), e("div", {
                staticClass: "content"
              }, [e("div", {
                staticClass: "content-item"
              }, [e("p", {
                staticClass: "title text"
              }, [t._v(t._s(t.$t("working hours")) + ":")]), t._v(" "), e("p", {
                staticClass: "text"
              }, [t._v("from " + t._s(t.item.open_time) + " to " + t._s(t.item.close_time))])]), t._v(" "), e("div", {
                staticClass: "content-item"
              }, [e("p", {
                staticClass: "title text"
              }, [t._v("E-mail::")]), t._v(" "), e("a", {
                staticClass: "text",
                attrs: {
                  target: "_blank",
                  href: "mailto: ".concat(t.item.email)
                }
              }, [t._v(t._s(t.item.email))])])])]) : t._e()])
            }), [], !1, null, null, null).exports
          },
          props: {
            informationBlocks: {
              type: Array
            },
            positionBg: {
              type: Boolean,
              default: !1
            },
            positionMd: {
              type: Boolean,
              default: !1
            },
            colorDarker: {
              type: Boolean,
              default: !1
            },
            type: {
              type: String
            },
            number: {
              type: String
            },
            line: {
              type: Boolean,
              default: !1
            }
          },
          data: function() {
            return {
              activeIndex: null
            }
          },
          methods: {
            changeActiveIndex: function(t) {
              this.activeIndex != t ? this.activeIndex = t : this.activeIndex = null
            }
          }
        },
        l = (n(722), Object(d.a)(c, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "block-info container",
            class: {
              bg: t.positionBg,
              md: t.positionMd
            }
          }, [t._l(t.informationBlocks, (function(n, o) {
            return e("app-info-item", {
              key: n.key,
              attrs: {
                index: o + 1,
                item: n.attributes,
                type: t.type,
                colorDarker: t.colorDarker,
                open: t.activeIndex == o
              },
              on: {
                onToggle: function(e) {
                  return t.changeActiveIndex(o)
                }
              }
            })
          })), t._v(" "), e("svg", {
            staticClass: "LineSVGRight",
            attrs: {
              preserveAspectRatio: "none",
              opacity: "0.2",
              width: "100%",
              height: "2944",
              viewBox: "0 0 100% 2944",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("mask", {
            attrs: {
              id: "mask0",
              "mask-type": "alpha",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "100%",
              height: "2944"
            }
          }, [e("rect", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              width: "100%",
              height: "2944",
              fill: "#C4C4C4"
            }
          })]), t._v(" "), e("g", {
            attrs: {
              mask: "url(#mask0)"
            }
          }, [e("g", [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-81.9193 -7.48489C57.0912 -38.9483 211.842 -1.72493 332.705 53.2989C453.567 108.323 554.687 180.809 678.554 232.824C796.248 282.278 933.427 310.57 1072.58 316.973C1219.8 323.733 1367.06 306.602 1499.82 264.139C1591.71 273.658 1630.06 350.126 1577.31 400.472C1524.55 450.817 1422.6 468.131 1329.57 467.441C1236.55 466.752 1144.31 452.027 1051.39 454.968C842.441 461.587 661.322 557.126 541.107 669.642C420.893 782.157 347.54 912.885 250.514 1034.68C204.219 1092.82 147.8 1151.98 58.8401 1181.86C-30.1196 1211.74 -159.038 1198.95 -202 1139.68C-150.252 1134.84 -103.308 1162.48 -80.2732 1193.32C-57.2386 1224.15 -49.8827 1259.1 -28.6793 1290.5C17.1534 1358.36 131.812 1403.25 244.445 1397.42C293.827 1394.87 341.059 1383.65 388.074 1373.4C435.09 1363.14 483.629 1353.67 533.134 1354.78C582.64 1355.89 633.956 1369.31 661.363 1396.43C688.77 1423.55 683.791 1465.17 643.174 1483.8C602.557 1502.44 533.278 1484.57 531.457 1452.03C530.058 1426.96 565.737 1406.34 603.185 1401.52C640.633 1396.69 679.038 1403.67 715.663 1410.74C928.057 1451.71 1138.93 1497.55 1356.52 1524.27C1978.64 1600.66 2644.14 1511.42 3171 1281.02",
              stroke: "#122223"
            }
          })]), t._v(" "), e("g", [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1570.92 1699.52C1431.91 1668.05 1277.16 1705.28 1156.3 1760.3C1035.43 1815.32 934.313 1887.81 810.446 1939.82C692.752 1989.28 555.573 2017.57 416.418 2023.97C269.198 2030.73 121.937 2013.6 -10.8187 1971.14C-102.71 1980.66 -141.064 2057.13 -88.3073 2107.47C-35.5508 2157.82 66.4026 2175.13 159.426 2174.44C252.449 2173.75 344.691 2159.03 437.611 2161.97C646.559 2168.59 827.678 2264.13 947.893 2376.64C1068.11 2489.16 1141.46 2619.89 1238.49 2741.68C1284.78 2799.82 1341.2 2858.98 1430.16 2888.86C1519.12 2918.74 1648.04 2905.95 1691 2846.68C1639.25 2841.84 1592.31 2869.48 1569.27 2900.32C1546.24 2931.15 1538.88 2966.1 1517.68 2997.5C1471.85 3065.36 1357.19 3110.25 1244.56 3104.42C1195.17 3101.87 1147.94 3090.65 1100.93 3080.4C1053.91 3070.14 1005.37 3060.67 955.866 3061.78C906.36 3062.89 855.044 3076.31 827.637 3103.43C800.23 3130.55 805.209 3172.17 845.826 3190.8C886.443 3209.44 955.722 3191.57 957.543 3159.03C958.942 3133.96 923.263 3113.34 885.815 3108.52C848.367 3103.69 809.962 3110.67 773.337 3117.74C560.943 3158.71 350.072 3204.55 132.482 3231.27C-489.639 3307.66 -1155.14 3218.42 -1682 2988.02",
              stroke: "#122223"
            }
          })])])])], 2)
        }), [], !1, null, null, null));
      e.a = l.exports
    },
    760: function(t, e, n) {
      var content = n(863);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(10).default)("3def4b8f", content, !0, {
        sourceMap: !1
      })
    },
    862: function(t, e, n) {
      "use strict";
      n(760)
    },
    863: function(t, e, n) {
      var o = n(9)(!1);
      o.push([t.i, ".page-info{background-color:#fff1e4}", ""]), t.exports = o
    },
    973: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n(63),
        r = n(1),
        m = (n(13), n(657)),
        d = n(729),
        c = n(656),
        l = {
          fetch: function(t) {
            return Object(r.a)(regeneratorRuntime.mark((function e() {
              var n;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.store, t.route, e.next = 3, n.dispatch("getInfo");
                  case 3:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          components: {
            AppHeading: m.a,
            AppInfoBlock: d.a
          },
          head: function(t) {
            var e, n, r, m = t.$env,
              d = t.$route;
            return {
              link: Object(c.a)(m.baseUrl, "/informations"),
              title: (null === (e = this.getLang(this.state.info.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(o.a)(Object(c.b)({
                url: d.path,
                title: null === (n = this.getLang(this.state.info.meta_tags)[0]) || void 0 === n ? void 0 : n.attributes.title,
                description: null === (r = this.getLang(this.state.info.meta_tags)[0]) || void 0 === r ? void 0 : r.attributes.description
              }))
            }
          },
          mounted: function() {
            this.$store.commit("setHeader", {
              filled: !0
            }), this.$store.commit("setFooter", {
              padding: !0
            })
          },
          destroyed: function() {
            this.$store.commit("setHeader", {
              filled: !1
            }), this.$store.commit("setFooter", {
              padding: !1
            })
          }
        },
        x = (n(862), n(4)),
        component = Object(x.a)(l, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "page-info cursor-black"
          }, [e("app-heading", {
            attrs: {
              title: t.getLang(t.state.info.title),
              description: t.getLang(t.state.info.description),
              appearance: !0,
              position: !0
            }
          }), t._v(" "), t.getLang(t.state.info.info_blocks).length > 0 ? e("app-info-block", {
            attrs: {
              positionBg: !0,
              informationBlocks: t.getLang(t.state.info.info_blocks),
              type: "text",
              line: !0
            }
          }) : t._e()], 1)
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);