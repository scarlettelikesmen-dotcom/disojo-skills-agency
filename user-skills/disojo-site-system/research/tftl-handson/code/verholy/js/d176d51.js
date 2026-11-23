/* https://verholy.com/_nuxt/d176d51.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [24], {
    656: function(t, e, r) {
      "use strict";

      function n(t, link) {
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

      function o(t) {
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
        return n
      })), r.d(e, "b", (function() {
        return o
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
    659: function(t, e, r) {
      "use strict";
      var n = r(657),
        o = r(679),
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
            AppHeading: n.a,
            AppFilter: o.a
          }
        },
        l = (r(674), r(4)),
        component = Object(l.a)(d, (function() {
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
          }, t._l(t.getProperty || t.getInfo, (function(r) {
            return e("div", {
              key: r.key,
              staticClass: "text"
            }, [e("span", [t._v(t._s(r.key) + ":")]), t._v(" "), e("span", [t._v(t._s(r.value))])])
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
    661: function(t, e, r) {
      "use strict";
      r(15), r(7), r(11), r(18), r(19);
      var n = r(6),
        o = (r(12), r(77)),
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
            Button: o.a
          },
          computed: function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2 ? l(Object(source), !0).forEach((function(e) {
                Object(n.a)(t, e, source[e])
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
    664: function(t, e, r) {
      var content = r(675);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("70c1f033", content, !0, {
        sourceMap: !1
      })
    },
    665: function(t, e, r) {
      "use strict";
      r(658)
    },
    666: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.discover{margin-bottom:10.5555555556vw;width:100vw;height:47.2222222222vw;display:flex;align-items:center;justify-content:center}@media(max-width: 1200px){.discover{margin-bottom:132px}}@media(max-width: 900px){.discover{margin-bottom:124px}}@media(max-width: 600px){.discover{margin-bottom:96px}}@media(max-width: 400px){.discover{margin-bottom:88px}}@media(max-width: 1200px){.discover{height:484px}}@media(max-width: 900px){.discover{height:363px}}@media(max-width: 600px){.discover{flex-direction:column;height:auto}}.discover-item{width:100%;height:100%;background-size:cover;padding:2.7777777778vw 0 3.9583333333vw 3.8888888889vw;display:flex;flex-direction:column;align-items:flex-start;position:relative;cursor:pointer;overflow:hidden}.discover-item::before{content:"";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}@media(max-width: 1200px){.discover-item{padding:40px 0 55px 40px}}@media(max-width: 900px){.discover-item{padding:32px 0 45px 32px}}@media(max-width: 600px){.discover-item{height:60vw;padding:32px 0 45px 23px}}@media(max-width: 400px){.discover-item{height:70vw;padding:32px 0 43px 16px}}.discover-item:hover .h5{opacity:.8}.discover-item:hover .h3{margin-bottom:2.7777777778vw}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:40px}}@media(max-width: 900px){.discover-item:hover .h3{margin-bottom:32px}}@media(max-width: 1200px){.discover-item:hover .h3{margin-bottom:0}}.discover-item:hover .img img{transform:scale(1.2)}.discover-item .img{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.discover-item .img img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease-in-out}.discover-item .h5{opacity:.3;transition:.5s ease;margin-bottom:auto;display:flex;z-index:2}.discover-item .h5.noSubtitle{display:none}@media(max-width: 1200px){.discover-item .h5{opacity:.8}}.discover-item .h5 *{display:inline}.discover-item .h3{transition:.5s ease}.discover-pos{width:100%;height:130px;overflow:hidden;z-index:2;margin-top:auto}@media(max-width: 1200px){.discover-pos{height:unset;overflow:unset}}.discover-pos .discover-pos-inner{position:relative;transform:translateY(51px);transition:transform .5s ease-in-out}@media(max-width: 1200px){.discover-pos .discover-pos-inner{transform:translateY(0)}}.discover-item:hover .discover-pos .discover-pos-inner{transform:translateY(0px)}.discover-pos .discover-more{transform:scaleY(0);transform-origin:center bottom;transition:opacity .3s ease,transform .3s ease;opacity:0}@media(max-width: 1200px){.discover-pos .discover-more{opacity:1;transform:scaleY(1);margin-top:35px;height:auto}}.discover-item:hover .discover-pos .discover-more{transform:scaleY(1);height:auto;opacity:1}', ""]), t.exports = n
    },
    674: function(t, e, r) {
      "use strict";
      r(664)
    },
    675: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.greet{margin-bottom:10.5555555556vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:center/cover;position:relative}@media(max-width: 1200px){.greet{margin-bottom:132px}}@media(max-width: 900px){.greet{margin-bottom:124px}}@media(max-width: 600px){.greet{margin-bottom:96px}}@media(max-width: 400px){.greet{margin-bottom:88px}}.greet.img .greet-wrapper-img::before{content:""}.greet .greet-wrapper-img{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat}.greet .greet-wrapper-img::before{position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;z-index:1;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}.greet .filter{position:absolute;z-index:4;left:50%;bottom:8.3333333333vw;transform:translate(-50%, 0)}@media(max-width: 1200px){.greet .filter{bottom:30px}}@media(max-width: 900px){.greet .filter{position:fixed;bottom:16px;z-index:10}}.greet.gradient::before{content:"";position:absolute;bottom:0;left:0;right:0;height:27.7777777778vw;z-index:2;background:linear-gradient(to top, #122223, transparent)}.greet .heading{text-align:center;z-index:3}.greet .heading .h2{font-size:5.2777777778vw}@media(max-width: 1200px){.greet .heading .h2{font-size:64px}}@media(max-width: 900px){.greet .heading .h2{font-size:56px}}@media(max-width: 600px){.greet .heading .h2{font-size:42px}}@media(max-width: 400px){.greet .heading .h2{font-size:38px}}@media(max-width: 360px){.greet .heading .h2{font-size:36px}}@media(max-width: 340px){.greet .heading .h2{font-size:33px}}.greet .info{position:absolute;z-index:2;left:50%;bottom:2.7777777778vw;transform:translate(-50%, 0);display:flex;width:100%;justify-content:center}@media(max-width: 1200px){.greet .info{bottom:40px}}@media(max-width: 900px){.greet .info{bottom:32px}}@media(max-width: 600px){.greet .info{flex-direction:column;align-items:center;text-align:center}}.greet .info.withPrice{justify-content:space-between;padding:0 3.8888888889vw}@media(max-width: 1200px){.greet .info.withPrice{padding:0 40px}}@media(max-width: 900px){.greet .info.withPrice{padding:0 32px}}@media(max-width: 600px){.greet .info.withPrice{flex-direction:column;align-items:center}.greet .info.withPrice>div{margin-bottom:24px}.greet .info.withPrice .info-data{flex-direction:column;align-items:center}}@media(max-width: 900px){.greet .info.withPrice .h4{font-size:22px}}@media(max-width: 600px){.greet .info.withPrice .h4{font-family:"apercu pro";font-weight:300}}.greet .info.withPrice .price{text-transform:lowercase}.greet .info .info-data{display:flex;white-space:nowrap}.greet .info .info-data div:not(:last-child){margin-right:2.5vw}.greet .info div{display:flex;white-space:nowrap;align-items:center}.greet .info div span:nth-child(1){opacity:.5;margin-right:.5555555556vw;display:flex}.greet .info div span:nth-child(2){opacity:.8}@media(max-width: 640px){.rooms_page{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottages_page{background-image:url("/img/mobile_covers/cottages.jpg") !important}.chalets_page{background-image:url("/img/mobile_covers/chalet.png") !important}.chalet_2{background-image:url("/img/mobile_covers/chalet_2.jpg") !important}.lobby_bar_page{background-image:url("/img/mobile_covers/lobby_bar.jpg") !important}.phyto_bar_page{background-image:url("/img/mobile_covers/phytobar.jpg") !important}.wellness_page{background-image:url("/img/mobile_covers/wellness.jpg") !important}.relax_spa_page{background-image:url("/img/mobile_covers/SPA.jpg") !important}.activities_page{background-image:url("/img/mobile_covers/activities.jpg") !important}.about_story_page{background-image:url("/img/mobile_covers/history.jpg") !important}.mice_page{background-image:url("/img/mobile_covers/mice.jpg") !important}.cottage_8-28{background-image:url("/img/mobile_covers/cottage_8-28.jpg") !important}.cottage_lux_29-30{background-image:url("/img/mobile_covers/cottage_lux_29-30.jpg") !important}.cottage_premium_lux_31{background-image:url("/img/mobile_covers/cottage_premium_lux_31.jpg") !important}.verholy_duplex{background-image:url("/img/mobile_covers/verholy_duplex.jpeg") !important}.family_suite{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottage_premium_lux_6{background-image:url("/img/mobile_covers/cottage_premium_lux_6.jpg") !important}.relax_premium_cottage{background-image:url("/img/mobile_covers/relax_premium_cottage.jpeg") !important}.food-and-forest{background-image:url("/img/mobile_covers/food-and-forest.jpg") !important}}', ""]), t.exports = n
    },
    676: function(t, e, r) {
      var content = r(696);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("147399ae", content, !0, {
        sourceMap: !1
      })
    },
    693: function(t, e, r) {
      "use strict";
      r(134);
      var n = r(77),
        o = {
          props: {
            description: {
              type: String
            },
            link: {
              type: String
            },
            openModal: {
              type: Function
            },
            button: {
              type: String,
              default: "discover more"
            },
            nameButton: {
              type: String,
              default: function() {
                return this.$t("Get More information")
              }
            }
          },
          components: {
            Button: n.a
          }
        },
        d = (r(695), r(4)),
        component = Object(d.a)(o, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "description-more"
          }, [e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .6
              },
              expression: "{ opacity: 0.6 }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          }), t._v(" "), t._t("default", (function() {
            return [e("Button", {
              attrs: {
                name: t.nameButton,
                link: t.link,
                action: !!t.openModal
              },
              on: {
                actionClick: function(e) {
                  return t.openModal()
                }
              }
            })]
          }))], 2)
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    695: function(t, e, r) {
      "use strict";
      r(676)
    },
    696: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".description-more{width:30.0694444444vw;max-width:100%}@media(max-width: 1200px){.description-more{width:304px}}@media(max-width: 900px){.description-more{width:344px}}.description-more.no-title{margin-top:31.25vw}@media(max-width: 1200px){.description-more.no-title{margin-top:196px}}@media(max-width: 900px){.description-more.no-title{margin-top:146px}}@media(max-width: 600px){.description-more.no-title{margin-top:0}}.description-more .text{margin-bottom:2.7777777778vw;opacity:.4}@media(max-width: 1200px){.description-more .text{margin-bottom:40px}}@media(max-width: 900px){.description-more .text{margin-bottom:32px}}@media(max-width: 1200px){.description-more .text{margin-bottom:50px}}@media(max-width: 900px){.description-more .text{margin-bottom:40px}}@media(max-width: 600px){.description-more .text{margin-bottom:43px}}", ""]), t.exports = n
    },
    706: function(t, e, r) {
      var content = r(717);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("191fe1f4", content, !0, {
        sourceMap: !1
      })
    },
    716: function(t, e, r) {
      "use strict";
      r(706)
    },
    717: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".text-picture{margin-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.text-picture{margin-bottom:132px}}@media(max-width: 900px){.text-picture{margin-bottom:124px}}@media(max-width: 600px){.text-picture{margin-bottom:96px}}@media(max-width: 400px){.text-picture{margin-bottom:88px}}.text-picture .h6{margin-bottom:2.2222222222vw;opacity:.4}@media(max-width: 1200px){.text-picture .h6{margin-bottom:32px}}@media(max-width: 600px){.text-picture .h6{margin-bottom:24px}}.text-picture .h1{font-size:7.7777777778vw;line-height:1;background-size:cover;-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,.0001);display:inline-block;display:-webkit-box}@media(max-width: 1200px){.text-picture .h1{font-size:87px}}@media(max-width: 900px){.text-picture .h1{font-size:65px}}@media(max-width: 600px){.text-picture .h1{font-size:40px}}@media(max-width: 400px){.text-picture .h1{font-size:36px}}@media(max-width: 360px){.text-picture .h1{font-size:30px}}.text-picture .description-more{margin-top:6.6666666667vw;margin-left:auto}@media(max-width: 1200px){.text-picture .description-more{margin-top:96px}}@media(max-width: 900px){.text-picture .description-more{margin-top:72px}}@media(max-width: 600px){.text-picture .description-more{margin-top:56px}}@media(max-width: 400px){.text-picture .description-more{margin-top:48px}}@media(max-width: 1200px){.text-picture .description-more{margin-top:6.6666666667vw}}@media(max-width: 1200px)and (max-width: 1200px){.text-picture .description-more{margin-top:96px}}@media(max-width: 1200px)and (max-width: 900px){.text-picture .description-more{margin-top:72px}}@media(max-width: 1200px)and (max-width: 600px){.text-picture .description-more{margin-top:56px}}@media(max-width: 1200px)and (max-width: 400px){.text-picture .description-more{margin-top:48px}}@media(max-width: 600px){.text-picture .description-more{width:100%}}.text-picture .char{-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,.0001)}.text-picture .lineSVG1{position:absolute;z-index:-1;top:40%;left:50%;transform:translate(-50%, -50%);pointer-events:none;width:100vw;height:100vh}.text-picture .lineSVG2{position:absolute;z-index:-1;top:-20%;left:50%;transform:translate(-50%, -50%);pointer-events:none;width:100vw}.text-picture .lineSVG2:last-child{top:85%;left:60%}.path{stroke-dasharray:1;stroke-dashoffset:1;animation:dash 5s linear alternate infinite}@keyframes dash{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}", ""]), t.exports = n
    },
    730: function(t, e, r) {
      "use strict";
      r(134);
      var n = r(16),
        o = r(693),
        d = {
          props: {
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            img: {
              type: String
            },
            description: {
              type: String
            },
            link: {
              type: String
            },
            nameButton: {
              type: String
            },
            openModal: {
              type: Function
            },
            line1: {
              type: Boolean,
              default: !1
            },
            line2: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            AppDescriptionMore: o.a
          },
          methods: {
            initBackgroundParalax: function() {
              var title = this.$refs.title;
              n.b.to(title, 1, {
                scrollTrigger: {
                  trigger: title,
                  start: "top bottom",
                  end: "+=".concat(2 * window.innerHeight),
                  scrub: .5
                },
                backgroundPosition: "0 100px"
              })
            }
          },
          mounted: function() {
            this.initBackgroundParalax(), n.b.set(".text-picture .char", {
              backgroundImage: "url(".concat(this.img, ")")
            })
          }
        },
        l = (r(716), r(4)),
        component = Object(l.a)(d, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "text-picture"
          }, [e("div", {
            staticClass: "container"
          }, [t.subtitle ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            staticClass: "h6"
          }, [t._v("\n      " + t._s(t.$t("Chapter 1. Verholy")) + "\n    ")]) : t._e(), t._v(" "), e("h2", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp"
            }, {
              name: "lazy-background",
              rawName: "v-lazy-background"
            }],
            ref: "title",
            staticClass: "h1 paralaxed_title",
            attrs: {
              "lazy-background": t.img
            },
            domProps: {
              innerHTML: t._s(t.title)
            }
          }), t._v(" "), t.description ? e("app-description-more", {
            attrs: {
              description: t.description,
              nameButton: t.nameButton,
              link: t.link,
              openModal: t.openModal
            }
          }) : t._e()], 1), t._v(" "), t.line1 ? e("svg", {
            staticClass: "lineSVG1",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "911",
              viewBox: "0 0 1440 911",
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
              d: "M-78 910C-39.8333 827.667 188.5 725 511.5 725C1071.91 725 1364.17 263 1553 1",
              stroke: "#FFD9B6"
            }
          })]) : t._e(), t._v(" "), t.line2 ? e("svg", {
            staticClass: "lineSVG2",
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
          })]) : t._e(), t._v(" "), t.line2 ? e("svg", {
            staticClass: "lineSVG2",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "1474",
              viewBox: "0 0 1440 1474",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-53.7576 1301.75C17.2492 1241.32 -22.8129 1138.53 206.043 840.488C316.384 696.789 467.719 566.319 687.733 537.427C907.746 508.535 1407.11 571.27 1449.16 171.833",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    751: function(t, e, r) {
      var content = r(845);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("4ec2fe5d", content, !0, {
        sourceMap: !1
      })
    },
    752: function(t, e, r) {
      var content = r(847);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("60925867", content, !0, {
        sourceMap: !1
      })
    },
    753: function(t, e, r) {
      var content = r(849);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("de748778", content, !0, {
        sourceMap: !1
      })
    },
    754: function(t, e, r) {
      var content = r(851);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("560dde3f", content, !0, {
        sourceMap: !1
      })
    },
    755: function(t, e, r) {
      var content = r(853);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("0d5e0e89", content, !0, {
        sourceMap: !1
      })
    },
    756: function(t, e, r) {
      var content = r(855);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("329483b3", content, !0, {
        sourceMap: !1
      })
    },
    757: function(t, e, r) {
      var content = r(857);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("f0dbcbb2", content, !0, {
        sourceMap: !1
      })
    },
    758: function(t, e, r) {
      var content = r(859);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("9080424c", content, !0, {
        sourceMap: !1
      })
    },
    759: function(t, e, r) {
      var content = r(861);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("1d1e7349", content, !0, {
        sourceMap: !1
      })
    },
    844: function(t, e, r) {
      "use strict";
      r(751)
    },
    845: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".button-slider{position:absolute}.button-slider svg{position:absolute;top:50%;transform:translateY(-50%);right:0}.button-slider svg:nth-child(2) path{stroke-dasharray:140;stroke-dashoffset:140;transition:all 3s ease}.button-slider svg:hover{cursor:pointer}.button-slider svg:hover:nth-child(2) rect,.button-slider svg:hover:nth-child(2) path{stroke-dashoffset:0}", ""]), t.exports = n
    },
    846: function(t, e, r) {
      "use strict";
      r(752)
    },
    847: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.slider-main-wrapper{height:100vh;position:relative;overflow:visible;margin-bottom:10.5555555556vw;z-index:5}@media(max-width: 1200px){.slider-main-wrapper{margin-bottom:132px}}@media(max-width: 900px){.slider-main-wrapper{margin-bottom:124px}}@media(max-width: 600px){.slider-main-wrapper{margin-bottom:96px}}@media(max-width: 400px){.slider-main-wrapper{margin-bottom:88px}}@media(max-width: 900px){.slider-main-wrapper{z-index:10 !important}}.slider-main-wrapper.gradient::before{content:"";position:absolute;bottom:0;left:0;right:0;height:27.7777777778vw;z-index:2;background:linear-gradient(to top, #122223, transparent)}.slider-main-wrapper .filter{position:absolute;z-index:110;left:50%;bottom:8.3333333333vw;transform:translate(-50%, 0)}@media(max-width: 1200px){.slider-main-wrapper .filter{bottom:30px}}@media(max-width: 900px){.slider-main-wrapper .filter{position:fixed !important;bottom:16px;z-index:10}}.slider-main-wrapper .swiper-slide{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:center/cover;position:relative}.slider-main-wrapper .swiper-slide::before{position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;z-index:1;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}.slider-main-wrapper .swiper-slide.img::before{content:""}.slider-main-wrapper .swiper-slide .heading{text-align:center;z-index:3}.slider-main-wrapper .swiper-slide .heading .h2{font-size:5.2777777778vw}@media(max-width: 1200px){.slider-main-wrapper .swiper-slide .heading .h2{font-size:64px}}@media(max-width: 900px){.slider-main-wrapper .swiper-slide .heading .h2{font-size:56px}}@media(max-width: 600px){.slider-main-wrapper .swiper-slide .heading .h2{font-size:48px}}@media(max-width: 400px){.slider-main-wrapper .swiper-slide .heading .h2{font-size:42px}}.slider-main-wrapper .swiper-pagination{display:none !important;text-align:left !important;bottom:125px !important;padding-left:32px}@media(max-width: 900px){.slider-main-wrapper .swiper-pagination{display:inline-block !important}}@media(max-width: 600px){.slider-main-wrapper .swiper-pagination{bottom:110px !important}}.slider-main-wrapper .swiper-pagination-bullet{width:6px;height:6px;background:gray;opacity:.8;transition:all .3s ease-in-out}.slider-main-wrapper .swiper-pagination-bullet.swiper-pagination-bullet-active{transform:scale(1.3);background:#a5a0a0}.slider-main-wrapper .slider-prev,.slider-main-wrapper .slider-next{position:absolute;top:50%;transform:translateY(-50%);z-index:100;cursor:none}@media(max-width: 900px){.slider-main-wrapper .slider-prev,.slider-main-wrapper .slider-next{top:unset;transform:translateY(0);bottom:125px}}.slider-main-wrapper .slider-prev:hover~.slider-cursor,.slider-main-wrapper .slider-next:hover~.slider-cursor{opacity:0}@media(max-width: 1200px){.slider-main-wrapper .slider-prev:hover~.slider-cursor,.slider-main-wrapper .slider-next:hover~.slider-cursor{opacity:1}}@media(max-width: 1200px){.slider-main-wrapper .slider-prev .button-slider svg rect,.slider-main-wrapper .slider-prev .button-slider svg path,.slider-main-wrapper .slider-next .button-slider svg rect,.slider-main-wrapper .slider-next .button-slider svg path{opacity:0}}.slider-main-wrapper .slider-prev{left:35px;display:inline-block}@media(max-width: 900px){.slider-main-wrapper .slider-prev{display:none}}.slider-main-wrapper .slider-prev .button-slider{transform:rotate(180deg)}.slider-main-wrapper .slider-prev svg:nth-child(2) path{stroke-dashoffset:-140}.slider-main-wrapper .slider-prev svg:hover:nth-child(2),.slider-main-wrapper .slider-prev svg:hover rect,.slider-main-wrapper .slider-prev svg:hover path{stroke-dashoffset:0}.slider-main-wrapper .slider-next{right:35px;display:inline-block}@media(max-width: 900px){.slider-main-wrapper .slider-next{display:none}}.slider-main-wrapper .slider-cursor{position:fixed;z-index:100;top:0;left:0;pointer-events:none;width:5.1388888889vw;height:5.1388888889vw;border:0px solid rgba(255,255,255,.2);border-radius:unset;transform:rotate(-45deg);display:flex;justify-content:center;align-items:center;transform-origin:center;transition:opacity .5s,transform .5s;opacity:0}@media(max-width: 1200px){.slider-main-wrapper .slider-cursor{opacity:1;width:70px;height:70px;position:absolute;left:50% !important;top:calc(50% + 102px) !important;transform:translate(-50%, -50%) rotate(-45deg)}}.slider-main-wrapper .slider-cursor.active svg circle{animation:stroke 1s ease-out forwards}@keyframes stroke{to{stroke-dashoffset:2000}}.slider-main-wrapper .slider-cursor.active svg path{transform:translate(0, 0) scaleX(1);opacity:1}.slider-main-wrapper .slider-cursor.inActive svg path{transition:transform 0s ease-out 0s,opacity 0s linear 0s}.slider-main-wrapper .slider-cursor svg{width:100%;height:100%}.slider-main-wrapper .slider-cursor svg circle{stroke-dasharray:1000;stroke-dashoffset:1000}.slider-main-wrapper .slider-cursor svg path{opacity:0;transform:translate(-100%, -8%) scaleX(2.3);transition:transform .5s ease-out .6s,opacity .4s linear .8s}.slider-main-wrapper .slider-cursor-bounds{display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:80%;height:50%;z-index:101;cursor:none}@media(max-width: 1200px){.slider-main-wrapper .slider-cursor-bounds{width:100px;height:100px;top:calc(50% + 102px)}}.slider-main-wrapper .slider-cursor-bounds>div{width:100%;height:100%}@media(max-width: 1200px){.slider-main-wrapper .slider-cursor-bounds .show-cursor{display:none}}.slider-main-wrapper.swiper-container{overflow:visible}.hero-heading>h2{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}', ""]), t.exports = n
    },
    848: function(t, e, r) {
      "use strict";
      r(753)
    },
    849: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".title-description{margin-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.title-description{margin-bottom:132px}}@media(max-width: 900px){.title-description{margin-bottom:124px}}@media(max-width: 600px){.title-description{margin-bottom:96px}}@media(max-width: 400px){.title-description{margin-bottom:88px}}.title-description .max-width .heading{max-width:65%}.title-description .description-more{margin-top:2.7777777778vw;margin-left:auto}@media(max-width: 1200px){.title-description .description-more{margin-top:40px}}@media(max-width: 900px){.title-description .description-more{margin-top:32px}}@media(max-width: 600px){.title-description .description-more{margin-top:24px}}@media(max-width: 600px){.title-description .description-more{max-width:100%;width:100%;margin-left:0}}.title-description .lineSVG{position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none;width:100vw}", ""]), t.exports = n
    },
    850: function(t, e, r) {
      "use strict";
      r(754)
    },
    851: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".thumbnails{margin-bottom:12.5vw}@media(max-width: 900px){.thumbnails .heading{max-width:60%}}@media(max-width: 600px){.thumbnails{margin-bottom:96px}.thumbnails .heading{max-width:100% !important;margin-left:0}}@media(max-width: 400px){.thumbnails{margin-bottom:88px}}.thumbnails .title-description{margin-bottom:11.1111111111vw}@media(max-width: 600px){.thumbnails .title-description{margin-bottom:0}}.thumbnails-list .swiper-container{overflow:visible}.thumbnails-list .swiper-wrapper{align-items:flex-end}.thumbnails-list .swiper-slide{transform:translateY(-50px);display:flex;flex-direction:column;width:36.6666666667vw !important;opacity:.4;transition:opacity .5s ease,transform .5s ease;padding:0 10px}.thumbnails-list .swiper-slide.normal_transform{transform:translateY(0px) !important}@media(max-width: 1200px){.thumbnails-list .swiper-slide{width:412px !important}.thumbnails-list .swiper-slide:nth-of-type(2n){transform:translateY(0)}.thumbnails-list .swiper-slide:nth-of-type(2n + 1){transform:translateY(0)}}@media(max-width: 900px){.thumbnails-list .swiper-slide{width:384px !important}}@media(max-width: 400px){.thumbnails-list .swiper-slide{width:320px !important}}@media(max-width: 1200px){.thumbnails-list .swiper-slide.swiper-slide-active{opacity:1}}@media(min-width: 1200px){.thumbnails-list .swiper-slide.swiper-slide-active{opacity:1}}.thumbnails-list .swiper-slide.even{transform:translateY(50px)}.thumbnails-list .swiper-slide.even .image{margin-bottom:0;order:4}.thumbnails-list .swiper-slide .h6{margin-bottom:1.1111111111vw;order:2}@media(max-width: 1200px){.thumbnails-list .swiper-slide .h6{margin-bottom:16px}}@media(max-width: 600px){.thumbnails-list .swiper-slide .h6{margin-bottom:14px}}.thumbnails-list .swiper-slide .h3{margin-bottom:1.6666666667vw;order:3}@media(max-width: 1200px){.thumbnails-list .swiper-slide .h3{margin-bottom:24px}}.thumbnails-list .swiper-slide .image{margin-bottom:1.6666666667vw;overflow:hidden;width:100%;height:22.5694444444vw;object-fit:cover;order:1}@media(max-width: 1200px){.thumbnails-list .swiper-slide .image{margin-bottom:24px}}@media(max-width: 1200px){.thumbnails-list .swiper-slide .image{height:274px}}@media(max-width: 900px){.thumbnails-list .swiper-slide .image{height:256px}}@media(max-width: 400px){.thumbnails-list .swiper-slide .image{height:214px}}.thumbnails-list .swiper-slide .image img{width:100%;height:100%}.slider-prev,.slider-next{position:absolute;top:0;width:50vw;height:100%;font-size:0;z-index:1;cursor:none}.slider-prev:hover~.slider-cursor,.slider-next:hover~.slider-cursor{opacity:1}.slider-prev{left:0;outline:none !important}.slider-next{right:0;outline:none !important}.slider-cursor{position:fixed;z-index:99;top:0;left:0;pointer-events:none;width:5.1388888889vw;height:5.1388888889vw;border:0px solid rgba(255,255,255,.2);border-radius:unset;display:flex;justify-content:center;align-items:center;transform-origin:center;transition:opacity .5s,transform .5s;opacity:0}@media(max-width: 1200px){.slider-cursor{width:74px;height:74px;display:none}}.slider-cursor.active svg circle{animation:stroke 1s ease-out forwards}@keyframes stroke{to{stroke-dashoffset:2000}}.slider-cursor.active svg path{transform:translate(0, 0) scaleX(1);opacity:1}.slider-cursor.inActive svg path{transition:transform 0s ease-out 0s,opacity 0s linear 0s}.slider-cursor svg{width:100%;height:100%}.slider-cursor svg circle{stroke-dasharray:1000;stroke-dashoffset:1000}.slider-cursor svg path{opacity:0;transform:translate(-100%, -8%) scaleX(2.3);transition:transform .5s ease-out .6s,opacity .4s linear .8s}", ""]), t.exports = n
    },
    852: function(t, e, r) {
      "use strict";
      r(755)
    },
    853: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".links-description{width:100vw;background-color:#ffd9b6;position:relative;z-index:0;overflow:hidden;padding:5.5555555556vw 0 10.5555555556vw 0}@media(max-width: 1200px){.links-description{padding:132px 0}}@media(max-width: 900px){.links-description{padding:124px 0}}@media(max-width: 600px){.links-description{padding:96px 0}}@media(max-width: 400px){.links-description{padding:88px 0}}.links-description .content{margin-bottom:1.1111111111vw;width:100%;display:flex;justify-content:space-between;align-items:flex-start;z-index:2;position:relative;color:#353535}@media(max-width: 1200px){.links-description .content{margin-bottom:16px}}@media(max-width: 600px){.links-description .content{margin-bottom:14px}}@media(max-width: 1200px){.links-description .content{margin-bottom:51px;align-items:flex-start}}@media(max-width: 900px){.links-description .content{margin-bottom:34px;align-items:flex-start}}@media(max-width: 600px){.links-description .content{margin-bottom:6.6666666667vw;padding-left:23px;padding-right:23px;width:100%;flex-direction:column;align-items:flex-start}}@media(max-width: 600px)and (max-width: 1200px){.links-description .content{margin-bottom:96px}}@media(max-width: 600px)and (max-width: 900px){.links-description .content{margin-bottom:72px}}@media(max-width: 600px)and (max-width: 600px){.links-description .content{margin-bottom:56px}}@media(max-width: 600px)and (max-width: 400px){.links-description .content{margin-bottom:48px}}@media(max-width: 400px){.links-description .content{padding-left:16px;padding-right:16px}}.links-description .content .heading{margin:0 0 6.1111111111vw 3.8888888889vw;padding-top:4.8611111111vw;min-width:31.25vw;display:flex;flex-direction:column}@media(max-width: 1200px){.links-description .content .heading{margin:0 0 0 40px;padding-top:0;min-width:335px}}@media(max-width: 900px){.links-description .content .heading{margin-right:32px}}@media(max-width: 600px){.links-description .content .heading{margin-right:0px;margin-left:0px;min-width:100%}.links-description .content .heading .h2{margin-bottom:2.7777777778vw;display:flex}}@media(max-width: 600px)and (max-width: 1200px){.links-description .content .heading .h2{margin-bottom:40px}}@media(max-width: 600px)and (max-width: 900px){.links-description .content .heading .h2{margin-bottom:32px}}@media(max-width: 600px){.links-description .content .heading .h2>div:nth-child(1){margin-right:10px}}.links-description .content .description{max-width:377px;margin:0 4.0277777778vw 3.6111111111vw 8.75vw;padding-top:6.6666666667vw}@media(max-width: 1200px){.links-description .content .description{padding-top:80px;margin:auto 81px -45px 0}}@media(max-width: 900px){.links-description .content .description{margin-top:unset;margin-bottom:0;margin-right:32px;padding-top:65px}}@media(max-width: 600px){.links-description .content .description{margin-right:0;padding-top:0}}.links-description .content .description .text{opacity:.4}@media(max-width: 900px){.links-description .content .description .text{font-size:13px}}@media(max-width: 600px){.links-description .content .description .text{font-size:15px}}.links-description .content .image{width:31.1111111111vw;height:23.4722222222vw;display:block;overflow:hidden !important;position:relative}@media(max-width: 1200px){.links-description .content .image{display:none}}.links-description .content .image img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;object-fit:cover}.links-description .content .slider-link-wrapper-small{display:none}@media(max-width: 1200px){.links-description .content .slider-link-wrapper-small{display:block;width:280px;min-width:280px;height:211.25px}}@media(max-width: 900px){.links-description .content .slider-link-wrapper-small{display:none}}.links-description .content .slider-link-wrapper-small .swiper-wrapper{width:100%;min-width:100%;height:100%}.links-description .content .slider-link-wrapper-small .swiper-wrapper .swiper-slide{background-size:cover}.links-description .links{width:100%;display:flex;justify-content:space-between;z-index:2;position:relative}@media(max-width: 900px){.links-description .links{align-items:center}}@media(max-width: 600px){.links-description .links{flex-direction:column;align-items:flex-start}}.links-description .links .image{width:32.2916666667vw;height:42.9166666667vw;margin-right:18.1944444444vw;overflow:hidden !important;display:inline-block;position:relative}@media(max-width: 1200px){.links-description .links .image{display:none}}.links-description .links .image img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;object-fit:cover}.links-description .links .links-list{margin-top:7.2222222222vw;display:flex;flex-direction:column;flex-grow:1}@media(max-width: 1200px){.links-description .links .links-list{margin-top:104px}}@media(max-width: 900px){.links-description .links .links-list{margin-top:96px}}@media(max-width: 600px){.links-description .links .links-list{margin-top:88px}}@media(max-width: 1200px){.links-description .links .links-list{margin-top:60px}}@media(max-width: 900px){.links-description .links .links-list{margin-top:0px}}@media(max-width: 600px){.links-description .links .links-list{width:100%;padding-left:23px;margin-bottom:6.6666666667vw}}@media(max-width: 600px)and (max-width: 1200px){.links-description .links .links-list{margin-bottom:96px}}@media(max-width: 600px)and (max-width: 900px){.links-description .links .links-list{margin-bottom:72px}}@media(max-width: 600px)and (max-width: 600px){.links-description .links .links-list{margin-bottom:56px}}@media(max-width: 600px)and (max-width: 400px){.links-description .links .links-list{margin-bottom:48px}}.links-description .links .links-list a{width:fit-content;display:flex;justify-content:space-between;align-items:center;color:#353535;opacity:.3;text-decoration:none;transition:all .3s ease-in-out;position:relative}@media(max-width: 1200px){.links-description .links .links-list a.links-list-active{opacity:1}.links-description .links .links-list a.links-list-active svg{opacity:1;transform:translate(16px, -50%)}}@media(max-width: 1200px)and (max-width: 600px){.links-description .links .links-list a.links-list-active{padding:2px 2px 2px 0}}.links-description .links .links-list a:not(:last-child){margin-bottom:2.7777777778vw}@media(max-width: 1200px){.links-description .links .links-list a:not(:last-child){margin-bottom:40px}}@media(max-width: 900px){.links-description .links .links-list a:not(:last-child){margin-bottom:32px}}.links-description .links .links-list a.active{opacity:1}.links-description .links .links-list a.active .lineGsap{padding-right:1.3888888889vw}@media(max-width: 600px){.links-description .links .links-list a.active .lineGsap{padding-right:20px;display:flex !important}}.links-description .links .links-list a.active svg{opacity:1;transform:translate(0.6944444444vw, 0)}@media(max-width: 1200px){.links-description .links .links-list a.active svg{transform:translate(10px, 0)}}@media(max-width: 600px){.links-description .links .links-list a .lineGsap{padding-right:20px;display:flex !important}}.links-description .links .links-list a svg{width:2.7777777778vw;height:1.9444444444vw;transition:.5s ease;opacity:0}@media(max-width: 1200px){.links-description .links .links-list a svg{width:33px;height:23px}}@media(max-width: 600px){.links-description .links .links-list a svg{transform:translate(10px, 0) !important}}.links-description .slider-link-wrapper-big{display:none}@media(max-width: 1200px){.links-description .slider-link-wrapper-big{width:344px;height:458px;margin-right:137px;display:flex}}@media(max-width: 900px){.links-description .slider-link-wrapper-big{width:333px;height:443px;margin-right:119px}}@media(max-width: 600px){.links-description .slider-link-wrapper-big{order:1;width:calc(100% - 63px);height:447px}}@media(max-width: 400px){.links-description .slider-link-wrapper-big{width:calc(100% - 16px);height:477px}}.links-description .slider-link-wrapper-big .swiper-wrapper{width:100%;height:100%}.links-description .slider-link-wrapper-big .swiper-wrapper .swiper-slide{background-size:cover}.links-description .line{position:absolute;left:50%;transform:translateX(-50%);width:100vw;z-index:1}.links-description .line.top{top:-4.1666666667vw}.links-description .line.bottom{bottom:-17.7083333333vw;left:60%}", ""]), t.exports = n
    },
    854: function(t, e, r) {
      "use strict";
      r(756)
    },
    855: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.video{margin-bottom:10.5555555556vw;height:100vh;position:relative;cursor:pointer}@media(max-width: 1200px){.video{margin-bottom:132px}}@media(max-width: 900px){.video{margin-bottom:124px}}@media(max-width: 600px){.video{margin-bottom:96px}}@media(max-width: 400px){.video{margin-bottom:88px}}@media(max-width: 900px){.video{height:460px}}@media(max-width: 600px){.video{height:554px}}.video .heading{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1;pointer-events:none;width:55.8333333333vw;max-width:100%}@media(max-width: 1200px){.video .heading{width:784px}}@media(max-width: 900px){.video .heading{width:75%}}@media(max-width: 600px){.video .heading{width:90%}}.video video{width:100%;height:100%;object-fit:cover;display:block}.video-info{position:absolute;bottom:.8333333333vw;left:50%;transform:translate(-50%, 0);z-index:1;display:flex;align-items:center;padding:1.3888888889vw;cursor:default}.video-info>span{opacity:.7;min-width:2.7777777778vw}.video-info>div{width:27.7777777778vw;height:1px;margin:0 1.1111111111vw;position:relative;display:flex;align-items:center;background:rgba(255,255,255,.3)}.video-info>div span{position:relative;width:1.3888888889vw;height:1.3888888889vw;cursor:pointer;text-align:center;z-index:2;display:flex;align-items:center;justify-content:center;transform:translate(-50%, 0)}.video-info>div span::after{content:"";width:.4861111111vw;height:.4861111111vw;background:#fff;border-radius:50%;right:0}.video-info>div div{position:absolute;top:0;left:0;width:0;height:1px;z-index:1;background:#fff}.video-cursor{position:fixed;top:0;left:0;z-index:99;pointer-events:none;width:5.1388888889vw;height:5.1388888889vw;border:1px solid rgba(255,255,255,.2);border-radius:50%;opacity:0;transition:opacity .5s ease}.video:hover .video-cursor{opacity:1}.video-info:hover~.video-cursor{opacity:0}.video-cursor svg{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.video-cursor svg:nth-child(1){width:2.0833333333vw;height:.8333333333vw}.video-cursor svg:nth-child(2){width:2.3611111111vw;height:1.8055555556vw}', ""]), t.exports = n
    },
    856: function(t, e, r) {
      "use strict";
      r(757)
    },
    857: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, ".description-block{display:flex;flex-direction:column;align-items:flex-start;background-color:#ffd9b6;padding:3.8888888889vw}@media(max-width: 1200px){.description-block{padding:40px}}@media(max-width: 900px){.description-block{padding:32px}}@media(max-width: 600px){.description-block{padding:24px 24px 37px 24px}}.description-block .heading .h3{color:#353535}.description-block .content .text{color:#353535;opacity:.4}.description-block .action{color:#353535}@media(max-width: 1200px){.description-block .action svg path{stroke:#353535}}", ""]), t.exports = n
    },
    858: function(t, e, r) {
      "use strict";
      r(758)
    },
    859: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, '.address{margin-bottom:10.5555555556vw}@media(max-width: 1200px){.address{margin-bottom:132px}}@media(max-width: 900px){.address{margin-bottom:124px}}@media(max-width: 600px){.address{margin-bottom:96px}}@media(max-width: 400px){.address{margin-bottom:88px}}.address>.heading{margin-bottom:2.7777777778vw;text-align:center}@media(max-width: 1200px){.address>.heading{margin-bottom:40px}}@media(max-width: 900px){.address>.heading{margin-bottom:32px}}.address .container{display:flex;width:100%}@media(max-width: 900px){.address .container{flex-direction:column}}@media(max-width: 900px){.address .container .contacts,.address .container .description-block{min-height:318px}}@media(max-width: 400px){.address .container .contacts,.address .container .description-block{min-height:300px}}.address .container .contacts{width:33.125vw;min-width:33.125vw;min-height:27.0833333333vw;margin-right:1.1111111111vw;padding:3.8888888889vw;display:flex;flex-direction:column;justify-content:space-between;background:#ffd9b6 url("/img/map.svg") center/cover;color:#353535;position:relative;margin-bottom:0}@media(max-width: 1200px){.address .container .contacts{width:345px;min-width:23.9583333333vw;min-height:318px;padding:40px;margin-right:14px}}@media(max-width: 900px){.address .container .contacts{margin-right:0;margin-bottom:8px;width:100%;padding:32px}}@media(max-width: 600px){.address .container .contacts{padding:24px;margin-bottom:6px}}.address .container .contacts .h3{margin-top:auto;color:#122223}.address .container .contacts::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background:linear-gradient(to bottom, rgba(255, 217, 182, 0) 48.89%, #FFD9B6 72.87%);background:-webkit-linear-gradient(to bottom, rgba(255, 217, 182, 0) 48.89%, #FFD9B6 72.87%)}.address .container .contacts>*{z-index:2}@media(max-width: 900px){.address .container .contacts .h3{font-size:32px;max-width:364px}}@media(max-width: 600px){.address .container .contacts .h3{font-size:24px;max-width:90%}}.address .container .contacts-head{position:relative;display:flex;justify-content:space-between;align-items:center}.address .container .contacts-list_adress{width:70%;margin-right:0}.address .container .contacts-list_phone{width:fit-content}.address .container .contacts-list{width:fit-content;max-width:calc(100% - 40px);padding-right:2.5vw}@media(max-width: 1200px){.address .container .contacts-list{padding-right:36px}}.address .container .contacts-list li{margin-right:0}@media(max-width: 600px){.address .container .contacts-list li{padding:5px 5px 5px 0}}.address .container .contacts-list li:not(:last-child){margin-bottom:1.1111111111vw}@media(max-width: 1200px){.address .container .contacts-list li:not(:last-child){margin-bottom:16px}}@media(max-width: 600px){.address .container .contacts-list li:not(:last-child){margin-bottom:14px}}.address .container .contacts-list a{color:#353535;opacity:.4;transition:.5s ease}.address .container .contacts-list a:hover{opacity:1}.address .container .contacts-list .phone_link{opacity:1}.address .container .contacts-pin{width:2.7777777778vw;height:2.7777777778vw;display:flex;justify-content:center;align-items:center;color:#353535;border:1px solid rgba(0,0,0,.2);border-radius:50%}@media(max-width: 1200px){.address .container .contacts-pin{width:32px;height:32px}}@media(max-width: 600px){.address .container .contacts-pin{padding:5px;right:0}}.address .container .contacts-pin svg{width:1.1111111111vw;height:100%}@media(max-width: 1200px){.address .container .contacts-pin svg{width:10px;height:12px}}@media(max-width: 600px){.address .container .contacts-pin svg{width:14px;height:15px}}.address .container .description-block{flex-grow:1;min-height:27.0833333333vw}@media(max-width: 1200px){.address .container .description-block{min-height:318px}}.address .container .description-block .heading{margin-bottom:2.2222222222vw;max-width:26.3888888889vw}@media(max-width: 1200px){.address .container .description-block .heading{margin-bottom:32px}}@media(max-width: 600px){.address .container .description-block .heading{margin-bottom:24px}}@media(max-width: 900px){.address .container .description-block .heading{max-width:364px}.address .container .description-block .heading .h3{font-size:32px}}@media(max-width: 600px){.address .container .description-block .heading{max-width:100%;margin-left:0}.address .container .description-block .heading .h3{font-size:24px}}.address .container .description-block .content{margin-bottom:5vw}@media(max-width: 1200px){.address .container .description-block .content{margin-bottom:64px}}@media(max-width: 600px){.address .container .description-block .content{margin-bottom:48px}}@media(max-width: 1200px){.address .container .description-block .content{margin-bottom:30px;max-width:285px}}@media(max-width: 900px){.address .container .description-block .content{max-width:265px}}@media(max-width: 600px){.address .container .description-block .content{max-width:100%;margin-top:unset}}.address .container .description-block .action{margin-top:auto}', ""]), t.exports = n
    },
    860: function(t, e, r) {
      "use strict";
      r(759)
    },
    861: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, "", ""]), t.exports = n
    },
    958: function(t, e, r) {
      "use strict";
      r.r(e);
      r(134), r(15), r(7), r(11), r(18), r(19);
      var n, o = r(6),
        d = r(63),
        l = r(1),
        c = (r(27), r(38), r(12), r(49), r(39), r(13), r(657)),
        m = {
          props: {
            click: {
              type: Function
            },
            mouseenter: {
              type: Function
            },
            mouseleave: {
              type: Function
            }
          }
        },
        h = (r(844), r(4)),
        x = Object(h.a)(m, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "button-slider"
          }, [e("svg", {
            attrs: {
              width: "56",
              height: "52",
              viewBox: "0 0 56 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("rect", {
            attrs: {
              opacity: "0.2",
              width: "24",
              height: "1",
              transform: "matrix(-1 0 0 1 24 25.0024)",
              fill: "white"
            }
          }), t._v(" "), e("path", {
            attrs: {
              d: "M7 17.0024C10.6131 7.64232 19.6966 1.00244 30.331 1.00244C44.1381 1.00244 55.331 12.1953 55.331 26.0024C55.331 39.8096 44.1381 51.0024 30.331 51.0024C19.6966 51.0024 10.6131 44.3626 7 35.0024",
              stroke: "white",
              "stroke-opacity": "0.1",
              "stroke-width": "0.5"
            }
          }), t._v(" "), e("circle", {
            attrs: {
              opacity: "0.5",
              cx: "30.5",
              cy: "25.5024",
              r: "3",
              fill: "white"
            }
          })]), t._v(" "), e("svg", {
            attrs: {
              width: "50",
              height: "52",
              viewBox: "0 0 50 52",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            },
            on: {
              click: t.click,
              mouseenter: t.mouseenter,
              mouseleave: t.mouseleave
            }
          }, [e("path", {
            attrs: {
              d: "M1 17.0024C4.61309 7.64232 13.6966 1.00244 24.331 1.00244C38.1381 1.00244 49.331 12.1953 49.331 26.0024C49.331 39.8096 38.1381 51.0024 24.331 51.0024C13.6966 51.0024 4.61309 44.3626 1 35.0024",
              stroke: "white",
              "stroke-opacity": "0.5",
              "stroke-width": "0.5"
            }
          })])])
        }), [], !1, null, null, null).exports,
        v = r(679),
        w = {
          props: {
            time: {
              type: Object,
              default: function() {
                return {}
              }
            },
            slider: {
              type: Array
            },
            gradient: {
              type: Boolean,
              default: !1
            },
            showFilter: {
              type: Boolean,
              default: !1
            },
            subtitle: {
              type: String
            },
            subtitleHide: {
              type: Boolean,
              default: !1
            },
            appHeadingAnimation: Object
          },
          components: {
            AppHeading: c.a,
            ButtonSlider: x,
            AppFilter: v.a
          },
          data: function() {
            return {
              isMobile: !1,
              activeSlide: 0,
              buttonTimeout: null,
              mainSliderOptions: {
                slidesPerView: 1,
                allowTouchMove: !1,
                speed: 1e3,
                centeredSlides: !0,
                autoplay: {
                  delay: 2e3
                },
                navigation: {
                  nextEl: ".slider-next",
                  prevEl: ".slider-prev"
                },
                pagination: {
                  el: ".swiper-pagination",
                  type: "bullets"
                },
                breakpoints: {
                  320: {
                    autoplay: {
                      delay: 2e3
                    }
                  },
                  900: {
                    autoplay: !1
                  }
                },
                on: {
                  click: function() {},
                  slideChange: function() {
                    var t = this.slides[this.activeIndex],
                      e = document.querySelector(".link");
                    t && (e.href = t.dataset.link)
                  }
                }
              },
              currentHours: 0
            }
          },
          computed: {
            backgroundImageUrl: function() {
              var t = 60 * this.time.hours + this.time.minutes,
                e = (t - (60 * this.time.sunrise.hours + this.time.sunrise.minutes)) / 60,
                r = (t - (60 * this.time.sunset.hours + this.time.sunset.minutes)) / 60;
              return e <= 2 && e >= 0 ? e > 1 ? "/img/first_screen/9.png" : "/img/first_screen/6.png" : e < 0 && e >= -2 ? e < -1 ? "/img/first_screen/3.png" : "/img/first_screen/6.png" : r <= 2 && r >= 0 ? r > 1 ? "/img/first_screen/21.png" : "/img/first_screen/18.png" : r >= -2 && r < 0 ? r < -1 ? "/img/first_screen/15.png" : "/img/first_screen/18.png" : e > 2 && r < -2 ? "/img/first_screen/12.png" : e < -2 || r > 2 ? "/img/first_screen/0.png" : void 0
            },
            appOnlyOneSlide: function() {
              var t = [];
              return t.push(this.slider[0]), t
            }
          },
          methods: {
            prevButtonEnter: function() {
              var t = this;
              this.buttonTimeout = setTimeout((function() {
                return t.prevSlide()
              }), 3e3)
            },
            nextButtonEnter: function() {
              var t = this;
              this.buttonTimeout = setTimeout((function() {
                return t.nextSlide()
              }), 3e3)
            },
            clearButtonTimeout: function() {
              this.buttonTimeout && clearTimeout(this.buttonTimeout)
            },
            nextSlide: function() {
              this.sliderHome.slideNext(), this.clearButtonTimeout()
            },
            prevSlide: function() {
              this.sliderHome.slidePrev(), this.clearButtonTimeout()
            },
            cursorHide: function(t) {
              var cursor = this.$refs.cursor;
              cursor.style.opacity = 0, cursor.classList.remove("active"), cursor.classList.add("inActive")
            },
            cursorMove: function(t) {
              if (!this.isMobile) {
                var cursor = this.$refs.cursor,
                  e = cursor.clientHeight,
                  r = cursor.clientWidth,
                  n = t.x - r / 2,
                  o = t.y - e / 2;
                cursor && (cursor.style.cssText = "\n            top: ".concat(o, "px;\n            left: ").concat(n, "px;\n            opacity: 1;\n          "), cursor.classList.add("active"), cursor.classList.remove("inActive"))
              }
            },
            handleResize: function() {
              this.isMobile = window.innerWidth <= 900, this.sliderHome && this.sliderHome.update()
            }
          },
          created: function() {
            this.currentHours = (new Date).getHours(), this.handleResize(), window.addEventListener("resize", this.handleResize)
          },
          mounted: function() {
            this.isMobile = window.innerWidth <= 1200, window.addEventListener("resize", this.handleResize)
          },
          beforeDestroy: function() {
            window.removeEventListener("resize", this.handleResize)
          }
        },
        f = (r(846), Object(h.a)(w, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderHome",
              value: t.mainSliderOptions,
              expression: "mainSliderOptions",
              arg: "sliderHome"
            }],
            staticClass: "slider-main-wrapper",
            class: {
              gradient: t.gradient
            }
          }, [e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.appOnlyOneSlide, (function(r) {
            return e("div", {
              directives: [{
                name: "mainBlockZoom",
                rawName: "v-mainBlockZoom"
              }, {
                name: "lazy-background",
                rawName: "v-lazy-background"
              }],
              key: r.key,
              staticClass: "swiper-slide",
              attrs: {
                "lazy-background": t.backgroundImageUrl,
                "data-link": t.backgroundImageUrl
              }
            }, [e("app-heading", {
              staticClass: "hero-heading",
              attrs: {
                subtitle: t.subtitle,
                title: r.attributes.title,
                animationProps: t.appHeadingAnimation,
                subtitleHide: t.subtitleHide
              }
            })], 1)
          })), 0), t._v(" "), e("div", {
            ref: "cursor",
            staticClass: "slider-cursor"
          }, [e("svg", {
            attrs: {
              width: "74",
              height: "74",
              viewBox: "0 0 74 74",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("circle", {
            attrs: {
              id: "my-circle",
              opacity: "0.2",
              r: "36.5",
              transform: "matrix(-1 0 0 1 37 37)",
              stroke: "white"
            }
          }), t._v(" "), e("path", {
            attrs: {
              d: "M27.2617 36.2694C29.7773 36.2694 33.2773 36.3824 36.668 36.4954C40.0586 36.4954 43.4492 36.6084 46.0742 36.6084C46.9492 36.6084 47.6055 36.6084 48.2617 36.6084C48.1523 36.6084 48.1523 36.4954 48.043 36.4954C46.8398 35.9305 45.418 34.9135 44.1055 33.6706C43.7773 33.3316 43.4492 32.9926 43.2305 32.6536C42.9023 32.3146 42.6836 31.9757 42.4648 31.6367C42.2461 31.2977 42.0273 30.9587 41.8086 30.6197C41.5898 30.2807 41.4805 29.9418 41.2617 29.6028C41.1523 29.2638 40.9336 29.0378 40.9336 28.6988C40.8242 28.4728 40.7148 28.2469 40.7148 28.0209C40.6055 27.6819 40.4961 27.4559 40.4961 27.4559C40.4961 27.4559 40.9336 27.4559 41.2617 27.3429C41.5898 27.2299 42.0273 27.0039 42.0273 27.0039C42.0273 27.0039 42.0273 27.2299 42.1367 27.5689C42.1367 27.7949 42.2461 27.9079 42.2461 28.2469C42.2461 28.4728 42.4648 28.8118 42.4648 29.0378C42.5742 29.3768 42.6836 29.6028 42.793 29.9418C42.9023 30.2808 43.1211 30.6197 43.3398 30.9587C43.5586 31.2977 43.7773 31.6367 43.9961 31.9757C44.2148 32.3147 44.4336 32.6536 44.7617 32.9926C45.8555 34.2355 47.168 35.2525 48.3711 35.8175C48.918 36.1565 49.793 36.4954 49.793 36.4954L50.9961 37.0604L49.6836 37.5124C49.6836 37.5124 48.918 37.8514 48.3711 38.1904C47.2773 38.7553 45.9648 39.7723 44.7617 41.0152C44.4336 41.3542 44.2148 41.6932 43.9961 42.0322C43.7773 42.3711 43.5586 42.7101 43.3398 43.0491C43.1211 43.3881 43.0117 43.7271 42.793 44.0661C42.5742 44.405 42.5742 44.744 42.4648 44.97C42.3555 45.309 42.2461 45.535 42.2461 45.761C42.1367 45.987 42.1367 46.2129 42.1367 46.4389C42.0273 46.7779 42.0273 47.0039 42.0273 47.0039C42.0273 47.0039 41.5898 46.7779 41.2617 46.6649C40.9336 46.5519 40.4961 46.5519 40.4961 46.5519C40.4961 46.5519 40.6055 46.3259 40.7148 45.987C40.8242 45.761 40.8242 45.535 40.9336 45.309C41.043 45.083 41.1523 44.744 41.2617 44.4051C41.3711 44.0661 41.5898 43.7271 41.8086 43.3881C42.0273 43.0491 42.1367 42.7101 42.4648 42.3711C42.6836 42.0322 42.9023 41.6932 43.2305 41.3542C43.5586 41.0152 43.7773 40.6762 44.1055 40.3372C45.3086 39.0943 46.8398 38.0774 48.043 37.5124C48.1523 37.5124 48.1523 37.3994 48.2617 37.3994C47.6055 37.3994 46.9492 37.3994 46.0742 37.3994C43.5586 37.3994 40.0586 37.5124 36.668 37.5124C33.2773 37.6254 29.8867 37.6254 27.2617 37.7384C24.7461 37.8514 22.9961 37.8514 22.9961 37.8514C22.9961 37.8514 23.1055 37.3994 23.1055 37.0604C23.1055 36.7214 22.9961 36.2694 22.9961 36.2694C22.9961 36.2694 24.6367 36.1564 27.2617 36.2694Z",
              fill: "white"
            }
          })])]), t._v(" "), t.showFilter ? e("app-filter", {
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
        }), [], !1, null, null, null).exports),
        y = r(703),
        k = r(659),
        _ = r(730),
        C = r(662),
        S = r(693),
        z = {
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
            link: {
              type: String
            },
            maxWidth: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            AppHeading: c.a,
            AppDescriptionMore: S.a
          }
        },
        O = (r(848), Object(h.a)(z, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "title-description"
          }, [e("div", {
            staticClass: "container",
            class: {
              "max-width": t.maxWidth
            }
          }, [e("app-heading", {
            attrs: {
              subtitle: t.subtitle,
              title: t.title
            }
          }), t._v(" "), t.description ? e("app-description-more", {
            attrs: {
              description: t.description,
              link: t.link
            }
          }) : t._e()], 1), t._v(" "), e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "815",
              viewBox: "0 0 1440 815",
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
              d: "M-186.137 600.882C175.502 625.485 233.648 466.261 167.033 482.048C100.419 497.836 153.552 579.49 249.155 597.896C344.759 616.301 580.186 614.164 785.358 454.958C990.53 295.752 1293.89 121.711 1579.42 227.924",
              stroke: "#FFD9B6"
            }
          })])])
        }), [], !1, null, null, null).exports),
        j = {
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
            link: {
              type: String
            },
            slides: {
              type: Array
            },
            maxWidth: {
              type: Boolean,
              default: !1
            }
          },
          data: function() {
            return {
              thumbnailsOptions: {
                loop: !0,
                speed: 1e3,
                spaceBetween: 16,
                centeredSlides: !1,
                slidesPerView: "auto",
                preloadImages: !1,
                watchSlidesVisibility: !0,
                autoplay: {
                  delay: 5e3
                },
                lazy: {
                  loadPrevNextAmount: 2,
                  loadOnTransitionStart: !0
                },
                navigation: {
                  nextEl: ".slider-next",
                  prevEl: ".slider-prev"
                },
                breakpoints: {
                  600: {
                    spaceBetween: 56
                  },
                  900: {
                    spaceBetween: 60,
                    autoplay: !1
                  },
                  1200: {
                    autoplay: !1,
                    loopedSlides: 5,
                    centeredSlides: !0,
                    spaceBetween: 100
                  }
                }
              }
            }
          },
          filters: {
            addZero: function(t) {
              return t + 1 < 10 ? "0" + (t + 1) : t + 1
            }
          },
          methods: {
            cursorHide: function(t) {
              var cursor = this.$refs.cursor;
              cursor.style.opacity = 0, cursor.classList.remove("active"), cursor.classList.add("inActive")
            },
            cursorLeft: function(t) {
              var cursor = this.$refs.cursor,
                e = cursor.clientHeight,
                r = cursor.clientWidth,
                n = t.x - r / 2,
                o = t.y - e / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(o, "px;\n          left: ").concat(n, "px;\n          transform: rotate(-180deg);\n        "), cursor.classList.add("active"), cursor.classList.remove("inActive"))
            },
            cursorRight: function(t) {
              var cursor = this.$refs.cursor,
                e = cursor.clientHeight,
                r = cursor.clientWidth,
                n = t.x - r / 2,
                o = t.y - e / 2;
              cursor && (cursor.style.cssText = "\n          top: ".concat(o, "px;\n          left: ").concat(n, "px;\n        "), cursor.classList.add("active"), cursor.classList.remove("inActive"))
            },
            addSliderListeners: function() {
              this.sliderPreviews.on("touchStart", (function() {
                for (var i = 0; i < this.slides.length; i++) this.slides[i].classList.add("normal_transform")
              })), this.sliderPreviews.on("touchEnd", (function() {
                for (var i = 0; i < this.slides.length; i++) this.slides[i].classList.remove("normal_transform")
              }))
            }
          },
          mounted: function() {
            this.addSliderListeners()
          },
          components: {
            AppTitleDescriptionMore: O
          }
        },
        P = (r(850), Object(h.a)(j, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "thumbnails"
          }, [e("app-title-description-more", {
            attrs: {
              subtitle: t.$t("Chapter 4"),
              title: t.title,
              description: t.description,
              link: t.link,
              maxWidth: !0
            }
          }), t._v(" "), e("div", {
            staticClass: "thumbnails-list"
          }, [e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderPreviews",
              value: t.thumbnailsOptions,
              expression: "thumbnailsOptions",
              arg: "sliderPreviews"
            }]
          }, [e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.slides, (function(r, n) {
            return e("div", {
              key: r.id,
              staticClass: "swiper-slide",
              class: {
                even: n % 2 == 0
              }
            }, [e("span", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: 1
                },
                expression: "{ opacity: 1 }"
              }],
              staticClass: "h6"
            }, [t._v("(" + t._s(t._f("addZero")(n)) + ")")]), t._v(" "), e("h3", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {},
                expression: "{}"
              }],
              staticClass: "h3"
            }, [t._v("\n            " + t._s(r.attributes.title) + "\n          ")]), t._v(" "), e("div", {
              staticClass: "image"
            }, [e("img", {
              directives: [{
                name: "imgZoomScroll",
                rawName: "v-imgZoomScroll"
              }],
              staticClass: "swiper-lazy",
              attrs: {
                "data-src": t.$env.imgUrl + r.attributes.image,
                alt: r.attributes.title,
                "data-not-lazy": ""
              }
            })])])
          })), 0), t._v(" "), e("div", {
            staticClass: "slider-prev no-cursor",
            on: {
              mousemove: t.cursorLeft,
              mouseleave: t.cursorHide
            }
          }, [t._v("\n        prev\n      ")]), t._v(" "), e("div", {
            staticClass: "slider-next no-cursor",
            on: {
              mousemove: t.cursorRight,
              mouseleave: t.cursorHide
            }
          }, [t._v("\n        next\n      ")]), t._v(" "), e("div", {
            ref: "cursor",
            staticClass: "slider-cursor"
          }, [e("svg", {
            attrs: {
              width: "74",
              height: "74",
              viewBox: "0 0 74 74",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("circle", {
            attrs: {
              id: "my-circle",
              opacity: "0.2",
              r: "36.5",
              transform: "matrix(-1 0 0 1 37 37)",
              stroke: "white"
            }
          }), t._v(" "), e("path", {
            attrs: {
              d: "M27.2617 36.2694C29.7773 36.2694 33.2773 36.3824 36.668 36.4954C40.0586 36.4954 43.4492 36.6084 46.0742 36.6084C46.9492 36.6084 47.6055 36.6084 48.2617 36.6084C48.1523 36.6084 48.1523 36.4954 48.043 36.4954C46.8398 35.9305 45.418 34.9135 44.1055 33.6706C43.7773 33.3316 43.4492 32.9926 43.2305 32.6536C42.9023 32.3146 42.6836 31.9757 42.4648 31.6367C42.2461 31.2977 42.0273 30.9587 41.8086 30.6197C41.5898 30.2807 41.4805 29.9418 41.2617 29.6028C41.1523 29.2638 40.9336 29.0378 40.9336 28.6988C40.8242 28.4728 40.7148 28.2469 40.7148 28.0209C40.6055 27.6819 40.4961 27.4559 40.4961 27.4559C40.4961 27.4559 40.9336 27.4559 41.2617 27.3429C41.5898 27.2299 42.0273 27.0039 42.0273 27.0039C42.0273 27.0039 42.0273 27.2299 42.1367 27.5689C42.1367 27.7949 42.2461 27.9079 42.2461 28.2469C42.2461 28.4728 42.4648 28.8118 42.4648 29.0378C42.5742 29.3768 42.6836 29.6028 42.793 29.9418C42.9023 30.2808 43.1211 30.6197 43.3398 30.9587C43.5586 31.2977 43.7773 31.6367 43.9961 31.9757C44.2148 32.3147 44.4336 32.6536 44.7617 32.9926C45.8555 34.2355 47.168 35.2525 48.3711 35.8175C48.918 36.1565 49.793 36.4954 49.793 36.4954L50.9961 37.0604L49.6836 37.5124C49.6836 37.5124 48.918 37.8514 48.3711 38.1904C47.2773 38.7553 45.9648 39.7723 44.7617 41.0152C44.4336 41.3542 44.2148 41.6932 43.9961 42.0322C43.7773 42.3711 43.5586 42.7101 43.3398 43.0491C43.1211 43.3881 43.0117 43.7271 42.793 44.0661C42.5742 44.405 42.5742 44.744 42.4648 44.97C42.3555 45.309 42.2461 45.535 42.2461 45.761C42.1367 45.987 42.1367 46.2129 42.1367 46.4389C42.0273 46.7779 42.0273 47.0039 42.0273 47.0039C42.0273 47.0039 41.5898 46.7779 41.2617 46.6649C40.9336 46.5519 40.4961 46.5519 40.4961 46.5519C40.4961 46.5519 40.6055 46.3259 40.7148 45.987C40.8242 45.761 40.8242 45.535 40.9336 45.309C41.043 45.083 41.1523 44.744 41.2617 44.4051C41.3711 44.0661 41.5898 43.7271 41.8086 43.3881C42.0273 43.0491 42.1367 42.7101 42.4648 42.3711C42.6836 42.0322 42.9023 41.6932 43.2305 41.3542C43.5586 41.0152 43.7773 40.6762 44.1055 40.3372C45.3086 39.0943 46.8398 38.0774 48.043 37.5124C48.1523 37.5124 48.1523 37.3994 48.2617 37.3994C47.6055 37.3994 46.9492 37.3994 46.0742 37.3994C43.5586 37.3994 40.0586 37.5124 36.668 37.5124C33.2773 37.6254 29.8867 37.6254 27.2617 37.7384C24.7461 37.8514 22.9961 37.8514 22.9961 37.8514C22.9961 37.8514 23.1055 37.3994 23.1055 37.0604C23.1055 36.7214 22.9961 36.2694 22.9961 36.2694C22.9961 36.2694 24.6367 36.1564 27.2617 36.2694Z",
              fill: "white"
            }
          })])])])])], 1)
        }), [], !1, null, null, null).exports),
        M = (r(136), {
          props: {
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            links: {
              type: Array
            },
            text: {
              type: String
            }
          },
          components: {
            AppHeading: c.a
          },
          data: function() {
            return {
              smImg: null,
              bigImg: null,
              activeIdx: 0,
              linkDescBigImgSliderOptions: {
                loop: !0,
                slidesPerView: 1,
                speed: 1e3,
                centeredSlides: !0,
                allowTouchMove: !1,
                autoplay: {
                  delay: 2e3
                }
              },
              linkDescSmallImgSliderOptions: {
                loop: !0,
                slidesPerView: 1,
                speed: 1e3,
                centeredSlides: !0,
                allowTouchMove: !1,
                autoplay: {
                  delay: 2e3
                }
              }
            }
          },
          methods: {
            changeImages: function(t, e) {
              var r = this;
              if (this.activeIdx !== e) {
                this.activeIdx = e;
                var link = t.target;
                if (link.dataset.bigImg !== this.bigImg) {
                  var n = Object.keys(this.$refs).filter((function(t) {
                    return t.startsWith("image")
                  })).map((function(t) {
                    return r.$refs[t]
                  }));
                  n.forEach((function(i) {
                    return i.style.opacity = 0
                  })), this.smImg = link.dataset.smallImg, this.bigImg = link.dataset.bigImg, n.forEach((function(i) {
                    return i.style.opacity = 1
                  }))
                }
              }
            }
          },
          mounted: function() {
            this.links && (this.smImg = this.links[0].main_photo, this.bigImg = this.links[0].image_for_home_page, this.activeIdx = 0)
          }
        }),
        L = (r(852), Object(h.a)(M, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "links-description cursor-black"
          }, [e("div", {
            staticClass: "content"
          }, [e("app-heading", {
            attrs: {
              subtitle: t.$t("Chapter 3. Food & Beverage"),
              title: t.title
            }
          }), t._v(" "), e("div", {
            staticClass: "description"
          }, [t.text ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.text)
            }
          }) : t._e()]), t._v(" "), e("div", {
            ref: "image1",
            staticClass: "image"
          }, [e("transition", {
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
            key: t.smImg,
            attrs: {
              "data-not-lazy": "",
              "data-src": t.smImg,
              alt: "restaurant photo"
            }
          })])], 1), t._v(" "), e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderSmallImg",
              value: t.linkDescSmallImgSliderOptions,
              expression: "linkDescSmallImgSliderOptions",
              arg: "sliderSmallImg"
            }],
            staticClass: "slider-link-wrapper-small"
          }, [e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.links, (function(link) {
            return e("div", {
              directives: [{
                name: "imgZoomScroll",
                rawName: "v-imgZoomScroll"
              }, {
                name: "lazy-background",
                rawName: "v-lazy-background"
              }],
              key: link.id,
              staticClass: "swiper-slide",
              attrs: {
                "lazy-background": link.main_photo
              }
            })
          })), 0)])], 1), t._v(" "), e("div", {
            staticClass: "links"
          }, [e("div", {
            ref: "image2",
            staticClass: "image"
          }, [e("transition", {
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
            key: t.bigImg,
            attrs: {
              "data-not-lazy": "",
              "data-src": t.bigImg,
              alt: "restaurant photo"
            }
          })])], 1), t._v(" "), e("div", {
            directives: [{
              name: "swiper",
              rawName: "v-swiper:sliderBigImg",
              value: t.linkDescBigImgSliderOptions,
              expression: "linkDescBigImgSliderOptions",
              arg: "sliderBigImg"
            }],
            staticClass: "slider-link-wrapper-big"
          }, [e("div", {
            staticClass: "swiper-wrapper"
          }, t._l(t.links, (function(link) {
            return e("div", {
              directives: [{
                name: "imgZoomScroll",
                rawName: "v-imgZoomScroll"
              }, {
                name: "lazy-background",
                rawName: "v-lazy-background"
              }],
              key: link.id,
              staticClass: "swiper-slide",
              attrs: {
                "lazy-background": link.image_for_home_page
              }
            })
          })), 0)]), t._v(" "), e("div", {
            staticClass: "links-list"
          }, t._l(t.links, (function(link, r) {
            return e("nuxt-link", {
              directives: [{
                name: "slideUpStagger",
                rawName: "v-slideUpStagger",
                value: {
                  elSplitSelector: "div"
                },
                expression: "{ elSplitSelector: 'div' }"
              }],
              key: link.id,
              staticClass: "h3 links-list-active active-cursor",
              class: {
                active: t.activeIdx === r
              },
              attrs: {
                to: t.localePath("/" + link.slug)
              }
            }, [e("div", {
              attrs: {
                "data-small-img": link.main_photo,
                "data-big-img": link.image_for_home_page
              },
              on: {
                mouseenter: function(e) {
                  return t.changeImages(e, r)
                }
              }
            }, [t._v("\n          " + t._s(t.getLang(link.title)) + "\n          "), e("svg", [e("use", {
              attrs: {
                "xlink:href": "#icon-arrow-right"
              }
            })])])])
          })), 1)]), t._v(" "), e("div", {
            staticClass: "line top"
          }, [e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "827",
              viewBox: "0 0 1440 827",
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
              d: "M-120.928 554.349C92.5086 403.986 577.698 118 810.965 176.96C1102.55 250.66 1476.22 593.606 1567.57 452.686",
              stroke: "#122223"
            }
          })])]), t._v(" "), e("div", {
            staticClass: "line bottom"
          }, [e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "951",
              viewBox: "0 0 1440 951",
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
              d: "M1444.41 172.5C1443.79 363.197 1044.06 725.744 750.235 553.003C300.376 288.525 -110.333 252.537 -462.086 652.727",
              stroke: "#122223"
            }
          })])])])
        }), [], !1, null, null, null).exports),
        B = r(661),
        N = {
          props: {
            subtitle: {
              type: String
            },
            title: {
              type: String
            },
            img: {
              type: String
            },
            src: {
              type: String
            }
          },
          components: {
            AppHeading: c.a
          },
          data: function() {
            return {
              isPlaying: !1,
              actualVideoTime: "00:00"
            }
          },
          methods: {
            playVideo: function() {
              var t = this.$refs,
                video = t.video,
                e = t.durationPin,
                r = t.durationLineIndicator;
              this.isPlaying = !this.isPlaying, this.isPlaying ? video.play() : video.pause();
              var n = setInterval((function() {
                  var t = video.currentTime,
                    d = video.duration,
                    l = o.timing(t),
                    c = Math.floor(t / d * 100);
                  o.actualVideoTime = o.addZero(l.minutes) + ":" + o.addZero(l.seconds), e.style.cssText = "\n          left: ".concat(c, "%\n        "), r.style.cssText = "\n          width: ".concat(c, "%\n        "), video.paused && clearInterval(n);
                  (t == d || video.ended) && (o.isPlaying = !1, clearInterval(n))
                }), 100),
                o = this
            },
            timing: function(t) {
              var e = Math.floor(t % 60);
              return {
                minutes: Math.floor(t / 60 % 60),
                seconds: e
              }
            },
            addZero: function(t) {
              return t < 10 ? "0" + t : t
            },
            movePin: function(t) {
              var e = this.$refs,
                r = e.durationPin,
                n = e.durationLine,
                o = e.durationLineIndicator,
                video = e.video,
                d = t.x,
                l = (t.y, n.getBoundingClientRect()),
                c = l.left,
                m = l.right,
                h = n.clientWidth;
              if (!(d < c || d > m)) {
                var x = Math.floor((d - m) / h * 100 + 100);
                video.currentTime = video.duration * (x / 100), r.style.cssText = "\n        left: ".concat(x, "%;\n      "), o.style.cssText = "\n        width: ".concat(x, "%;\n      ");
                var v = video.currentTime,
                  w = this.timing(v);
                this.actualVideoTime = this.addZero(w.minutes) + ":" + this.addZero(w.seconds)
              }
            },
            cursorMove: function(t) {
              var cursor = this.$refs.cursor,
                e = t.x,
                r = t.y;
              cursor && (cursor.style.cssText = "\n        transform: translate(".concat(e - cursor.clientWidth / 2, "px, ").concat(r - cursor.clientHeight / 2, "px)\n      "))
            }
          },
          mounted: function() {
            var t = this,
              e = this.$refs,
              video = e.video,
              r = e.durationTime;
            this.$nextTick((function() {
              video.onloadeddata = function() {
                var e = video.duration,
                  n = t.timing(e);
                r.textContent = t.addZero(n.minutes) + ":" + t.addZero(n.seconds)
              }
            })), this.$refs.durationPin.addEventListener("mousedown", (function() {
              document.addEventListener("mousemove", t.movePin), video.pause()
            })), document.addEventListener("mouseup", (function() {
              document.removeEventListener("mousemove", t.movePin), t.isPlaying && (t.isPlaying = !1, t.playVideo())
            }))
          }
        },
        A = (r(854), Object(h.a)(N, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "video",
            on: {
              mousemove: t.cursorMove
            }
          }, [e("transition", {
            attrs: {
              name: "fade"
            }
          }, [e("app-heading", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.isPlaying,
              expression: "!isPlaying"
            }],
            attrs: {
              subtitle: t.subtitle,
              title: t.title
            }
          })], 1), t._v(" "), e("video", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            ref: "video",
            attrs: {
              "data-poster": t.img
            },
            on: {
              click: function(e) {
                return t.playVideo()
              }
            }
          }, [e("source", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": t.src,
              type: "video/mp4"
            }
          })]), t._v(" "), e("transition", {
            attrs: {
              name: "fade"
            }
          }, [e("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.isPlaying,
              expression: "isPlaying"
            }],
            staticClass: "video-info h6"
          }, [e("span", [t._v(t._s(t.actualVideoTime))]), t._v(" "), e("div", {
            ref: "durationLine"
          }, [e("span", {
            ref: "durationPin"
          }), t._v(" "), e("div", {
            ref: "durationLineIndicator"
          })]), t._v(" "), e("span", {
            ref: "durationTime"
          })])]), t._v(" "), e("span", {
            ref: "cursor",
            staticClass: "video-cursor"
          }, [e("transition-group", {
            attrs: {
              name: "fade",
              mode: "out-in"
            }
          }, [e("svg", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.isPlaying,
              expression: "!isPlaying"
            }],
            key: "1"
          }, [e("use", {
            attrs: {
              "xlink:href": "#icon-eye"
            }
          })]), t._v(" "), e("svg", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.isPlaying,
              expression: "isPlaying"
            }],
            key: "2"
          }, [e("use", {
            attrs: {
              "xlink:href": "#icon-pause"
            }
          })])])], 1)], 1)
        }), [], !1, null, null, null).exports),
        I = r(77),
        U = {
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
            link: {
              type: Object
            }
          },
          components: {
            Button: I.a
          },
          methods: {
            actionButton: function() {
              this.$store.commit("showBookingModal")
            }
          }
        },
        D = (r(856), Object(h.a)(U, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "description-block"
          }, [e("div", {
            staticClass: "heading"
          }, [t.subtitle ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            staticClass: "h6"
          }, [t._v(t._s(t.subtitle))]) : t._e(), t._v(" "), t.title ? e("h3", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{ }"
            }],
            staticClass: "h3"
          }, [t._v(t._s(t.title))]) : t._e()]), t._v(" "), e("div", {
            staticClass: "content"
          }, [t.description ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          }) : t._e()]), t._v(" "), e("Button", {
            attrs: {
              name: t.$t("Reserve"),
              action: !0
            },
            on: {
              actionClick: t.actionButton
            }
          })], 1)
        }), [], !1, null, null, null).exports),
        T = {
          props: (n = {
            contacts: {
              type: Object
            },
            content: {
              type: Object
            },
            titleContent: {
              type: String
            }
          }, Object(o.a)(n, "titleContent", {
            type: String
          }), Object(o.a)(n, "description", {
            type: String
          }), Object(o.a)(n, "street", {
            type: String
          }), Object(o.a)(n, "phone", {
            type: String
          }), Object(o.a)(n, "address", {
            type: String
          }), Object(o.a)(n, "link", {
            type: String
          }), n),
          components: {
            AppHeading: c.a,
            AppDescriptionBlock: D
          }
        },
        H = (r(858), Object(h.a)(T, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "address"
          }, [e("app-heading", {
            attrs: {
              subtitle: t.$t("Chapter 5"),
              title: t.$t("Address")
            }
          }), t._v(" "), e("div", {
            staticClass: "container"
          }, [e("div", {
            staticClass: "contacts cursor-black"
          }, [e("div", {
            staticClass: "contacts-head"
          }, [e("ul", {
            staticClass: "contacts-list"
          }, [e("li", {
            staticClass: "h6 contacts-list_adress active-cursor"
          }, [e("a", {
            attrs: {
              rel: "noopener",
              href: t.link,
              target: "_blank"
            }
          }, [t._v(t._s(t.address))])]), t._v(" "), e("li", {
            staticClass: "text active-cursor contacts-list_phone"
          }, [e("a", {
            staticClass: "phone_link",
            attrs: {
              href: "tel:".concat(t.phone)
            }
          }, [t._v(t._s(t.phone))])])]), t._v(" "), e("a", {
            staticClass: "contacts-pin active-cursor",
            attrs: {
              href: t.link,
              rel: "noopener",
              target: "_blank"
            }
          }, [e("svg", [e("use", {
            attrs: {
              "xlink:href": "#icon-map-pin"
            }
          })])])]), t._v(" "), e("a", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{}"
            }],
            staticClass: "h3 active-cursor",
            attrs: {
              href: t.link,
              rel: "noopener",
              target: "_blank"
            }
          }, [t._v(t._s(t.street))])]), t._v(" "), e("app-description-block", {
            staticClass: "cursor-black",
            attrs: {
              title: t.titleContent,
              description: t.description
            }
          })], 1)], 1)
        }), [], !1, null, null, null).exports),
        $ = r(656),
        F = r(16);

      function V(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, r)
        }
        return e
      }
      var R = {
          asyncData: function(t) {
            return Object(l.a)(regeneratorRuntime.mark((function e() {
              var r, n;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, n = t.error, t.$axios, e.next = 3, r.dispatch("api/categories/getCategories").catch((function(t) {
                      console.log(t), n({
                        statusCode: 404
                      })
                    }));
                  case 3:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          fetch: function(t) {
            return Object(l.a)(regeneratorRuntime.mark((function e() {
              var r;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, t.route, e.next = 3, r.dispatch("getCategories");
                  case 3:
                    return e.next = 5, r.dispatch("getHome");
                  case 5:
                    return e.next = 7, r.dispatch("getSpa");
                  case 7:
                    return e.next = 9, r.dispatch("getWellness");
                  case 9:
                    return e.next = 11, r.dispatch("getAboutStory");
                  case 11:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          fetchOnServer: !1,
          head: function(t) {
            var e = t.$env,
              r = t.$route;
            return {
              link: Object($.a)(e.baseUrl, ""),
              title: this.getLang(this.state.home[0].attributes[0].meta_tags)[0].attributes.title || "Verholy Relax Park",
              meta: Object(d.a)(Object($.b)({
                url: r.path,
                title: this.getLang(this.state.home[0].attributes[0].meta_tags)[0].attributes.title,
                description: this.getLang(this.state.home[0].attributes[0].meta_tags)[0].attributes.description
              }))
            }
          },
          components: {
            AppFirstScreen: f,
            AppGreet: k.a,
            AppTextPicture: _.a,
            AppSlider: C.a,
            AppThumbnails: P,
            AppLinksDescription: L,
            AppDiscover: B.a,
            AppVideo: A,
            AppAddress: H,
            AppFilter: v.a,
            AppModalUpsale: y.a
          },
          computed: {
            time: function() {
              var t = new Date,
                e = t.getHours(),
                r = t.getMinutes(),
                n = t.getMonth(),
                d = 50.4500336,
                l = 30.5241361,
                c = n >= 3 && n <= 9 ? 3 : 2;
              return function(t) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2 ? V(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : V(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                  }))
                }
                return t
              }({
                hours: e,
                minutes: r
              }, this.calculateSunriseSunset(d, l, c))
            },
            slides: function() {
              var t = this,
                e = JSON.parse(JSON.stringify(this.$store.state.home[0].attributes[0].accommodation));
              return e.map((function(e) {
                var img = e.main_photo.split("/");
                return img = img[img.length - 1], {
                  attributes: {
                    title: t.getLang(e.name),
                    description: t.getLang(e.name),
                    image: img,
                    href: "".concat(e.slug),
                    sort_order: e.sort_order
                  }
                }
              })).sort((function(a, b) {
                return a.attributes.sort_order - b.attributes.sort_order
              }))
            },
            isActiveUpsale: function() {
              return this.$store.state.upsaleModal.isActive
            }
          },
          methods: {
            closeUpsale: function() {
              this.$store.commit("booking/setUpsaleWasShowed", !0), this.$store.state.booking.chosed_acommodations.includes(null) ? this.$store.commit("booking/setNextAccomodation") : this.$router.push(this.localePath("/booking/checkout")), F.b.core.globals("scrollTrigger").ScrollTrigger.refresh()
            },
            calculateSunriseSunset: function(t, e) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                n = new Date,
                o = n.getFullYear(),
                d = o % 4 == 0,
                l = d ? 366 : 365,
                c = y(n),
                m = 2 * Math.PI / l * (c - 1),
                h = 229.18 * (75e-6 + .001868 * k(m) - .032077 * _(m) - .014615 * k(2 * m) - .040849 * _(2 * m)),
                x = .006918 - .399912 * k(m) + .070257 * _(m) - .006758 * k(2 * m) + 907e-6 * _(2 * m) - .002697 * k(3 * m) + .00148 * _(3 * m),
                v = C(k(2 * Math.PI * 90.833 / 360) / k(2 * Math.PI * t / 360) / k(x) - S(2 * Math.PI * t / 360) * Math.tan(x)) / 2 / Math.PI * 360,
                w = 720 - 4 * (e + v) - h,
                f = 720 - 4 * (e - v) - h;
              return {
                sunrise: {
                  get _hours() {
                    return Math.floor(w / 60) % 24
                  },
                  get hours() {
                    return (Math.floor(w / 60) + r) % 24
                  },
                  get minutes() {
                    return Math.floor(w - 60 * this._hours)
                  }
                },
                sunset: {
                  get _hours() {
                    return Math.floor(f / 60) % 24
                  },
                  get hours() {
                    return (Math.floor(f / 60) + r) % 24
                  },
                  get minutes() {
                    return Math.floor(f - 60 * this._hours)
                  }
                }
              };

              function y(t) {
                var e = new Date(t.getFullYear(), 0, 0),
                  r = t - e;
                return Math.floor(r / 864e5)
              }

              function k(t) {
                return Math.cos(t)
              }

              function _(t) {
                return Math.sin(t)
              }

              function C(t) {
                return Math.acos(t)
              }

              function S(t) {
                return Math.tan(t)
              }
            }
          }
        },
        Z = R,
        E = (r(860), Object(h.a)(Z, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "home"
          }, [e("app-first-screen", {
            attrs: {
              gradient: !0,
              showFilter: !0,
              subtitle: t.demo.home.greet.subtitle,
              slider: t.getLang(t.state.home[0].attributes[0].slider),
              appHeadingAnimation: {
                delay: .7
              },
              subtitleHide: !0,
              time: t.time
            }
          }), t._v(" "), null != t.getLang(t.state.aboutStory.description)[0] && 0 != t.getLang(t.state.aboutStory.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.aboutStory.description)[0].attributes.short_description.length ? e("app-text-picture", {
            attrs: {
              subtitle: t.demo.home.textPicture.subtitle,
              title: t.getLang(t.state.aboutStory.description)[0].attributes.main_description,
              img: t.demo.home.textPicture.img,
              description: t.getLang(t.state.aboutStory.description)[0].attributes.short_description,
              link: "about-story",
              line1: !0
            }
          }) : t._e(), t._v(" "), e("app-slider", {
            attrs: {
              headerShow: !0,
              title: t.$t("AccomodationSlider"),
              slides: t.slides
            }
          }), t._v(" "), null != t.getLang(t.state.home[0].attributes[0].food_description)[0] && 0 != t.getLang(t.state.home[0].attributes[0].food_description)[0].attributes.title.length && 0 != t.getLang(t.state.home[0].attributes[0].food_description)[0].attributes.description.length ? e("app-links-description", {
            attrs: {
              subtitle: t.demo.home.linksDescription.subtitle,
              title: t.getLang(t.state.home[0].attributes[0].food_description)[0].attributes.title,
              text: t.getLang(t.state.home[0].attributes[0].food_description)[0].attributes.description,
              links: t.state.home[0].attributes[0].foods
            }
          }) : t._e(), t._v(" "), e("app-discover", {
            attrs: {
              blocks: [t.state.spa, t.state.wellness]
            }
          }), t._v(" "), t.getLang(t.state.home[0].attributes[0].activities_slider).length > 0 && null != t.getLang(t.state.home[0].attributes[0].activities)[0] && 0 != t.getLang(t.state.home[0].attributes[0].activities)[0].attributes.title.length && 0 != t.getLang(t.state.home[0].attributes[0].activities)[0].attributes.description.length ? e("app-thumbnails", {
            attrs: {
              subtitle: t.demo.home.thumbnails.subtitle,
              title: t.getLang(t.state.home[0].attributes[0].activities)[0].attributes.title,
              description: t.getLang(t.state.home[0].attributes[0].activities)[0].attributes.description,
              slides: t.getLang(t.state.home[0].attributes[0].activities_slider),
              link: "activities-and-services",
              maxWidth: !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.home[0].attributes[0].video_title)[0] && 0 != t.getLang(t.state.home[0].attributes[0].video_title)[0].attributes.title.length && null != t.state.home[0].attributes[0].video_preview && 1 != t.state.home[0].attributes[0].video ? e("app-video", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              subtitle: t.demo.home.video.subtitle,
              title: t.getLang(t.state.home[0].attributes[0].video_title)[0].attributes.title,
              img: t.state.home[0].attributes[0].video_preview,
              "data-src": t.state.home[0].attributes[0].video
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.home[0].attributes[0].address)[0] && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.title.length && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.description.length && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.phone.length && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.street.length && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.address.length && 0 != t.getLang(t.state.home[0].attributes[0].address)[0].attributes.link.length ? e("app-address", {
            attrs: {
              titleContent: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.title,
              description: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.description,
              phone: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.phone,
              street: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.street,
              address: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.address,
              link: t.getLang(t.state.home[0].attributes[0].address)[0].attributes.link
            }
          }) : t._e(), t._v(" "), t.isActiveUpsale ? e("AppModalUpsale", {
            class: {
              active: t.isActiveUpsale
            },
            on: {
              close: t.closeUpsale
            }
          }) : t._e()], 1)
        }), [], !1, null, null, null));
      e.default = E.exports
    }
  }
]);