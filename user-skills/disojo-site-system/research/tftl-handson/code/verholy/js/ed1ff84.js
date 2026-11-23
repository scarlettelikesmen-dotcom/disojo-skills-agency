/* https://verholy.com/_nuxt/ed1ff84.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8], {
    656: function(t, e, o) {
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
      o.d(e, "a", (function() {
        return n
      })), o.d(e, "b", (function() {
        return r
      }))
    },
    659: function(t, e, o) {
      "use strict";
      var n = o(657),
        r = o(679),
        m = {
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
            AppFilter: r.a
          }
        },
        d = (o(674), o(4)),
        component = Object(d.a)(m, (function() {
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
    664: function(t, e, o) {
      var content = o(675);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("70c1f033", content, !0, {
        sourceMap: !1
      })
    },
    668: function(t, e, o) {
      var content = o(684);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("37e25b1c", content, !0, {
        sourceMap: !1
      })
    },
    674: function(t, e, o) {
      "use strict";
      o(664)
    },
    675: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, '.greet{margin-bottom:10.5555555556vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:center/cover;position:relative}@media(max-width: 1200px){.greet{margin-bottom:132px}}@media(max-width: 900px){.greet{margin-bottom:124px}}@media(max-width: 600px){.greet{margin-bottom:96px}}@media(max-width: 400px){.greet{margin-bottom:88px}}.greet.img .greet-wrapper-img::before{content:""}.greet .greet-wrapper-img{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat}.greet .greet-wrapper-img::before{position:absolute;top:0;left:0;z-index:999;width:100%;height:100%;z-index:1;background:linear-gradient(180deg, rgba(0, 0, 0, 0.4) 13.11%, rgba(0, 0, 0, 0) 39.69%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))}.greet .filter{position:absolute;z-index:4;left:50%;bottom:8.3333333333vw;transform:translate(-50%, 0)}@media(max-width: 1200px){.greet .filter{bottom:30px}}@media(max-width: 900px){.greet .filter{position:fixed;bottom:16px;z-index:10}}.greet.gradient::before{content:"";position:absolute;bottom:0;left:0;right:0;height:27.7777777778vw;z-index:2;background:linear-gradient(to top, #122223, transparent)}.greet .heading{text-align:center;z-index:3}.greet .heading .h2{font-size:5.2777777778vw}@media(max-width: 1200px){.greet .heading .h2{font-size:64px}}@media(max-width: 900px){.greet .heading .h2{font-size:56px}}@media(max-width: 600px){.greet .heading .h2{font-size:42px}}@media(max-width: 400px){.greet .heading .h2{font-size:38px}}@media(max-width: 360px){.greet .heading .h2{font-size:36px}}@media(max-width: 340px){.greet .heading .h2{font-size:33px}}.greet .info{position:absolute;z-index:2;left:50%;bottom:2.7777777778vw;transform:translate(-50%, 0);display:flex;width:100%;justify-content:center}@media(max-width: 1200px){.greet .info{bottom:40px}}@media(max-width: 900px){.greet .info{bottom:32px}}@media(max-width: 600px){.greet .info{flex-direction:column;align-items:center;text-align:center}}.greet .info.withPrice{justify-content:space-between;padding:0 3.8888888889vw}@media(max-width: 1200px){.greet .info.withPrice{padding:0 40px}}@media(max-width: 900px){.greet .info.withPrice{padding:0 32px}}@media(max-width: 600px){.greet .info.withPrice{flex-direction:column;align-items:center}.greet .info.withPrice>div{margin-bottom:24px}.greet .info.withPrice .info-data{flex-direction:column;align-items:center}}@media(max-width: 900px){.greet .info.withPrice .h4{font-size:22px}}@media(max-width: 600px){.greet .info.withPrice .h4{font-family:"apercu pro";font-weight:300}}.greet .info.withPrice .price{text-transform:lowercase}.greet .info .info-data{display:flex;white-space:nowrap}.greet .info .info-data div:not(:last-child){margin-right:2.5vw}.greet .info div{display:flex;white-space:nowrap;align-items:center}.greet .info div span:nth-child(1){opacity:.5;margin-right:.5555555556vw;display:flex}.greet .info div span:nth-child(2){opacity:.8}@media(max-width: 640px){.rooms_page{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottages_page{background-image:url("/img/mobile_covers/cottages.jpg") !important}.chalets_page{background-image:url("/img/mobile_covers/chalet.png") !important}.chalet_2{background-image:url("/img/mobile_covers/chalet_2.jpg") !important}.lobby_bar_page{background-image:url("/img/mobile_covers/lobby_bar.jpg") !important}.phyto_bar_page{background-image:url("/img/mobile_covers/phytobar.jpg") !important}.wellness_page{background-image:url("/img/mobile_covers/wellness.jpg") !important}.relax_spa_page{background-image:url("/img/mobile_covers/SPA.jpg") !important}.activities_page{background-image:url("/img/mobile_covers/activities.jpg") !important}.about_story_page{background-image:url("/img/mobile_covers/history.jpg") !important}.mice_page{background-image:url("/img/mobile_covers/mice.jpg") !important}.cottage_8-28{background-image:url("/img/mobile_covers/cottage_8-28.jpg") !important}.cottage_lux_29-30{background-image:url("/img/mobile_covers/cottage_lux_29-30.jpg") !important}.cottage_premium_lux_31{background-image:url("/img/mobile_covers/cottage_premium_lux_31.jpg") !important}.verholy_duplex{background-image:url("/img/mobile_covers/verholy_duplex.jpeg") !important}.family_suite{background-image:url("/img/mobile_covers/family_suite.jpg") !important}.cottage_premium_lux_6{background-image:url("/img/mobile_covers/cottage_premium_lux_6.jpg") !important}.relax_premium_cottage{background-image:url("/img/mobile_covers/relax_premium_cottage.jpeg") !important}.food-and-forest{background-image:url("/img/mobile_covers/food-and-forest.jpg") !important}}', ""]), t.exports = n
    },
    676: function(t, e, o) {
      var content = o(696);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("147399ae", content, !0, {
        sourceMap: !1
      })
    },
    677: function(t, e, o) {
      var content = o(698);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("5560f6b7", content, !0, {
        sourceMap: !1
      })
    },
    683: function(t, e, o) {
      "use strict";
      o(668)
    },
    684: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, '.large-description{position:relative;z-index:2;padding:7.2222222222vw 0;height:100vh;margin:15.4166666667vw 0 26.3888888889vw}@media(max-width: 1200px){.large-description{margin:180px 0 220px;padding:104px 0}}@media(max-width: 900px){.large-description{margin:174px 0 232px;padding:56px 0;height:auto}}@media(max-width: 600px){.large-description{margin:176px 0 151px;padding:96px 0}}@media(max-width: 400px){.large-description{margin:126px 0 135px}}.large-description .lineSVG{position:absolute;top:0;left:50%;transform:translate(-50%, -50%);z-index:-1}.large-description .main-img{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}.large-description .main-img.desc{display:flex}@media(max-width: 600px){.large-description .main-img.desc{display:none;background-attachment:unset}}.large-description .main-img.mob{display:none}.large-description .main-img.mob img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-1}@media(max-width: 600px){.large-description .main-img.mob{display:flex}}.large-description .main-img::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.large-description .container{height:100%;display:flex;flex-direction:column;justify-content:space-between}@media(max-width: 900px){.large-description .container{min-height:398px}}@media(max-width: 600px){.large-description .container{min-height:474px;justify-content:flex-start}}@media(max-width: 400px){.large-description .container{height:405px}}.large-description .h2{width:53.4722222222vw;max-width:100%;position:relative;z-index:2}@media(max-width: 1200px){.large-description .h2{width:544px}}@media(max-width: 900px){.large-description .h2{width:404px;margin-bottom:136px}}@media(max-width: 600px){.large-description .h2{width:100%;margin-bottom:32px}}.large-description .description{display:flex;justify-content:flex-end;align-items:flex-start}@media(max-width: 600px){.large-description .description{flex-direction:column-reverse}}.large-description .text{width:25.4166666667vw;opacity:.6}@media(max-width: 1200px){.large-description .text{width:284px;max-width:100%}}@media(max-width: 600px){.large-description .text{width:100%}}.large-description ul{margin:.6944444444vw 5.9722222222vw 0}@media(max-width: 1200px){.large-description ul{margin:10px 55px 0}}@media(max-width: 900px){.large-description ul{margin:10px 16px 0}}@media(max-width: 600px){.large-description ul{width:100%;margin:32px 0 0 0}}.large-description li:not(:last-child){margin-bottom:1.6666666667vw}@media(max-width: 1200px){.large-description li:not(:last-child){margin-bottom:24px}}.large-description a{text-decoration:underline}.large-description a:hover{text-decoration:none}.large-description .large-img,.large-description .small-img{overflow:hidden;position:absolute}.large-description .large-img img,.large-description .small-img img{width:100%;height:100%;object-fit:cover;display:block}.large-description .large-img{width:28.1944444444vw;height:31.5972222222vw;left:7.7777777778vw;bottom:-15.9722222222vw}@media(max-width: 1200px){.large-description .large-img{width:264px;height:296px;left:80px;bottom:-88px}}@media(max-width: 900px){.large-description .large-img{width:224px;height:252px;left:32px;bottom:-108px}}@media(max-width: 600px){.large-description .large-img{width:179px;height:200px;left:23px;bottom:-55px;display:none}}@media(max-width: 400px){.large-description .large-img{width:167px;height:187px;left:16px;bottom:-47px}}.large-description .small-img{width:13.8888888889vw;height:15.1388888889vw;right:7.7777777778vw;top:-4.8611111111vw}@media(max-width: 1200px){.large-description .small-img{width:146px;height:160px;right:80px;top:-48px}}@media(max-width: 900px){.large-description .small-img{width:121px;height:132px;right:32px;top:-50px}}@media(max-width: 600px){.large-description .small-img{width:110px;height:120px;right:23px;top:-80px}}@media(max-width: 400px){.large-description .small-img{width:88px;height:97px;right:16px}}.large-description.inverse{margin:23.8888888889vw 0 17.0833333333vw}@media(max-width: 1200px){.large-description.inverse{margin:220px 0 180px}}@media(max-width: 900px){.large-description.inverse{margin:172px 0 212px}}@media(max-width: 600px){.large-description.inverse{margin:176px 0 152px}}@media(max-width: 400px){.large-description.inverse{margin:126px 0 135px}}.large-description.inverse .h2{margin-left:auto}.large-description.inverse .description{flex-direction:row-reverse}@media(max-width: 600px){.large-description.inverse .description{flex-direction:column-reverse}}.large-description.inverse .large-img{bottom:auto;top:-20px}@media(max-width: 1200px){.large-description.inverse .large-img{top:-88px}}@media(max-width: 900px){.large-description.inverse .large-img{top:-48px}}@media(max-width: 600px){.large-description.inverse .large-img{width:110px;height:120px;left:auto;right:23px;top:-80px}}@media(max-width: 400px){.large-description.inverse .large-img{right:16px;width:88px;height:98px;top:-38px}}.large-description.inverse .small-img{bottom:-9.0277777778vw;top:auto}@media(max-width: 1200px){.large-description.inverse .small-img{bottom:-48px}}@media(max-width: 900px){.large-description.inverse .small-img{bottom:-44px}}@media(max-width: 600px){.large-description.inverse .small-img{left:23px;right:auto;width:180px;height:200px;bottom:-55px}}@media(max-width: 400px){.large-description.inverse .small-img{left:16px;width:168px;height:188px;bottom:-47px}}@media(max-width: 900px){.large-description.large-desc-indent{margin:212px 0 172px}}@media(max-width: 600px){.large-description.large-desc-indent{margin:152px 0 176px}}@media(max-width: 400px){.large-description.large-desc-indent{margin:126px 0 176px}}.large-description.large-desc-indent-top{margin-top:18.0555555556vw}@media(max-width: 1200px){.large-description.large-desc-indent-top{margin-top:200px}}@media(max-width: 900px){.large-description.large-desc-indent-top{margin-top:160px}}@media(max-width: 600px){.large-description.large-desc-indent-top{margin-top:130px}}@media(max-width: 400px){.large-description.large-desc-indent-top{margin-top:100px}}.large-img.images_contain img{object-fit:contain}', ""]), t.exports = n
    },
    692: function(t, e, o) {
      "use strict";
      o(62);
      var n = o(16),
        r = {
          name: "ImagesScrollParallax",
          props: {
            component: {
              type: String,
              default: "div"
            },
            yPercentImgLarge: {
              type: Number,
              default: -75
            },
            yPercentImgSmall: {
              type: Number,
              default: -45
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
              if (window.innerWidth > 600) {
                var t = this.$refs.el,
                  e = n.b.timeline({
                    paused: this.paused
                  }),
                  o = t.querySelector(".large-img"),
                  r = t.querySelector(".small-img"),
                  m = t.querySelector(".main-img");
                return e.to(o, {
                  yPercent: this.yPercentImgLarge,
                  ease: "Power4.easeOut",
                  scrollTrigger: {
                    trigger: t,
                    scrub: !0
                  }
                }), e.to(m, {
                  backgroundPosition: "50% ".concat(-innerHeight / 2, "px"),
                  ease: "none",
                  scrollTrigger: {
                    trigger: t,
                    scrub: !0
                  }
                }), e.to(r, {
                  yPercent: this.yPercentImgSmall,
                  ease: "Power4.easeOut",
                  scrollTrigger: {
                    trigger: t,
                    start: "bottom bottom",
                    scrub: !0
                  }
                }), e
              }
            }
          }
        },
        m = o(4),
        d = Object(m.a)(r, (function() {
          var t = this;
          return (0, t._self._c)(t.component, {
            ref: "el",
            tag: "component"
          }, [t._t("default")], 2)
        }), [], !1, null, null, null).exports,
        l = {
          props: {
            title: {
              type: String
            },
            description: {
              type: String
            },
            bgImg: {
              type: String
            },
            lgImg: {
              type: String
            },
            smImg: {
              type: String
            },
            links: {
              type: Array
            },
            inverse: {
              type: Boolean,
              default: !1
            },
            largeDescIndent: {
              type: Boolean,
              default: !1
            },
            largeDescIndentTop: {
              type: Boolean,
              default: !1
            },
            lineWell: {
              type: Boolean,
              default: !1
            },
            images_contain: {
              type: Boolean,
              default: !1
            }
          },
          components: {
            ImagesScrollParallax: d
          }
        },
        c = (o(683), Object(m.a)(l, (function() {
          var t = this,
            e = t._self._c;
          return e("images-scroll-parallax", {
            staticClass: "large-description",
            class: {
              inverse: t.inverse,
              "large-desc-indent": t.largeDescIndent,
              "large-desc-indent-top": t.largeDescIndentTop
            }
          }, [e("div", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-background",
              rawName: "v-lazy-background"
            }],
            staticClass: "main-img desc",
            attrs: {
              "lazy-background": t.bgImg
            }
          }), t._v(" "), e("div", {
            staticClass: "main-img mob"
          }, [e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": t.bgImg,
              alt: "main image"
            }
          })]), t._v(" "), e("div", {
            staticClass: "container md"
          }, [e("h2", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{}"
            }],
            staticClass: "h2",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }), t._v(" "), e("div", {
            staticClass: "description"
          }, [t.links ? e("ul", {
            staticClass: "h6"
          }, t._l(t.links, (function(link) {
            return e("li", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: 1,
                  start: "center bottom",
                  delay: .2
                },
                expression: "{ opacity: 1, start:'center bottom', delay:0.2}"
              }],
              key: link.key,
              staticClass: "active-cursor"
            }, [e("a", {
              attrs: {
                href: t.$env.imgUrl + link.attributes.pdf,
                target: "_blank"
              }
            }, [t._v(t._s(link.attributes.title))])])
          })), 0) : t._e(), t._v(" "), e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .6,
                start: "center bottom"
              },
              expression: "{ opacity: 0.6, start:'center bottom'}"
            }],
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          })])]), t._v(" "), e("div", {
            staticClass: "large-img",
            class: {
              images_contain: t.images_contain
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
              "data-src": t.lgImg,
              alt: t.title
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
            attrs: {
              "data-src": t.smImg,
              alt: t.title
            }
          })]), t._v(" "), t.lineWell ? e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "217",
              viewBox: "0 0 1440 217",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-171.148 115.816C-152.15 59.1378 -89.1829 25.6501 -31.1209 21.8019C26.9412 17.9538 82.2883 36.6307 137.55 50.888C325.629 99.1073 526.066 96.6159 719.596 43.6532L841.609 20.3039C947.054 0.126751 1064.85 -17.7014 1148.85 42.2845C1192.42 73.3956 1220.6 121.807 1261.02 156.969C1320.27 208.531 1405.94 228.164 1485.6 208.414C1565.26 188.664 1636.76 129.996 1673.27 54.6771",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : t._e()])
        }), [], !1, null, null, null));
      e.a = c.exports
    },
    693: function(t, e, o) {
      "use strict";
      o(134);
      var n = o(77),
        r = {
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
        m = (o(695), o(4)),
        component = Object(m.a)(r, (function() {
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
    694: function(t, e, o) {
      var content = o(708);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("3d615579", content, !0, {
        sourceMap: !1
      })
    },
    695: function(t, e, o) {
      "use strict";
      o(676)
    },
    696: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, ".description-more{width:30.0694444444vw;max-width:100%}@media(max-width: 1200px){.description-more{width:304px}}@media(max-width: 900px){.description-more{width:344px}}.description-more.no-title{margin-top:31.25vw}@media(max-width: 1200px){.description-more.no-title{margin-top:196px}}@media(max-width: 900px){.description-more.no-title{margin-top:146px}}@media(max-width: 600px){.description-more.no-title{margin-top:0}}.description-more .text{margin-bottom:2.7777777778vw;opacity:.4}@media(max-width: 1200px){.description-more .text{margin-bottom:40px}}@media(max-width: 900px){.description-more .text{margin-bottom:32px}}@media(max-width: 1200px){.description-more .text{margin-bottom:50px}}@media(max-width: 900px){.description-more .text{margin-bottom:40px}}@media(max-width: 600px){.description-more .text{margin-bottom:43px}}", ""]), t.exports = n
    },
    697: function(t, e, o) {
      "use strict";
      o(677)
    },
    698: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, ".img-description-pdf{margin-bottom:10.5555555556vw;position:relative;z-index:1}@media(max-width: 1200px){.img-description-pdf{margin-bottom:132px}}@media(max-width: 900px){.img-description-pdf{margin-bottom:124px}}@media(max-width: 600px){.img-description-pdf{margin-bottom:96px}}@media(max-width: 400px){.img-description-pdf{margin-bottom:88px}}.img-description-pdf.inverse .container{flex-direction:row-reverse}.img-description-pdf .container{display:flex;justify-content:space-between;align-items:stretch}@media(max-width: 600px){.img-description-pdf .container{flex-direction:column-reverse;justify-content:flex-start;align-items:flex-start}}.img-description-pdf .text-content{width:35.4166666667vw;padding:3.75vw 0;margin-top:auto;margin-bottom:auto}@media(max-width: 1200px){.img-description-pdf .text-content{min-width:344px;padding:126px 0;margin-right:80px}}@media(max-width: 900px){.img-description-pdf .text-content{margin-right:76px;padding:40px 0}}@media(max-width: 767px){.img-description-pdf .text-content{margin-right:32px}}@media(max-width: 600px){.img-description-pdf .text-content{margin-right:0;width:100%;padding:0;min-width:100%}}.img-description-pdf .text-content .h2{margin-bottom:2.7777777778vw;font-size:4.1666666667vw}@media(max-width: 1200px){.img-description-pdf .text-content .h2{margin-bottom:40px}}@media(max-width: 900px){.img-description-pdf .text-content .h2{margin-bottom:32px}}@media(max-width: 1200px){.img-description-pdf .text-content .h2{font-size:48px}}@media(max-width: 600px){.img-description-pdf .text-content .h2{font-size:40px}}.img-description-pdf .text-content .text{opacity:.4}.img-description-pdf .text-content ul{margin-top:3.3333333333vw}@media(max-width: 1200px){.img-description-pdf .text-content ul{margin-top:40px}}@media(max-width: 900px){.img-description-pdf .text-content ul{margin-top:32px}}.img-description-pdf .text-content li:not(:last-child){margin-bottom:1.6666666667vw}@media(max-width: 1200px){.img-description-pdf .text-content li:not(:last-child){margin-bottom:24px}}.img-description-pdf .text-content a{text-decoration:underline}@media(max-width: 1200px){.img-description-pdf .text-content a{padding:10px 10px 10px 0}}.img-description-pdf .text-content a:hover{text-decoration:none}.img-description-pdf .img{width:47.2222222222vw;min-height:35.4166666667vw;margin-right:-11.6666666667vw;overflow:hidden}@media(max-width: 1200px){.img-description-pdf .img{margin-right:-80px;min-height:672px;width:100%}}@media(max-width: 900px){.img-description-pdf .img{margin-right:-32px;min-height:448px}}@media(max-width: 600px){.img-description-pdf .img{width:calc(100% + 23px);transform:translateX(-23px);height:auto;min-height:auto;margin-bottom:40px}}@media(max-width: 400px){.img-description-pdf .img{margin-right:-16px;width:calc(100% + 16px);transform:translateX(-16px)}}.img-description-pdf .img img{width:100%;height:100%;object-fit:cover;display:block}.img-description-pdf .lineSVG{position:absolute;left:50%;top:-10%;transform:translate(-50%, -50%);z-index:-1}.img-description-pdf .lineSVG.lineSVG-well{z-index:-3}.img-description-pdf .lineSVG.lineSVG-mice{top:10%}.img-description-pdf.inverse .container{flex-direction:row-reverse}@media(max-width: 600px){.img-description-pdf.inverse .container{flex-direction:column-reverse}}.img-description-pdf.inverse .text-content{margin-left:11.25vw;margin-right:0}@media(max-width: 1200px){.img-description-pdf.inverse .text-content{margin-left:80px}}@media(max-width: 900px){.img-description-pdf.inverse .text-content{margin-left:76px}}@media(max-width: 767px){.img-description-pdf.inverse .text-content{margin-left:32px}}@media(max-width: 600px){.img-description-pdf.inverse .text-content{margin-left:0}}.img-description-pdf.inverse .img{margin-right:0;margin-left:-11.6666666667vw}@media(max-width: 1200px){.img-description-pdf.inverse .img{margin-left:-80px}}@media(max-width: 900px){.img-description-pdf.inverse .img{margin-left:-32px}}@media(max-width: 600px){.img-description-pdf.inverse .img{margin-left:-23px;transform:translateX(23px)}}@media(max-width: 400px){.img-description-pdf.inverse .img{margin-left:-16px;transform:translateX(16px)}}@media(max-width: 600px){.img-description-pdf.add-position .img{margin-bottom:40px;min-height:294px;margin-left:0;margin-right:23px;transform:translateX(-23px)}}@media(max-width: 400px){.img-description-pdf.add-position .img{min-height:270px;height:270px}}", ""]), t.exports = n
    },
    702: function(t, e, o) {
      "use strict";
      var n = {
          props: {
            title: {
              type: String
            },
            description: {
              type: String
            },
            links: {
              type: Array
            },
            img: {
              type: String
            },
            inverse: {
              type: Boolean,
              default: !1
            },
            addPosition: {
              type: Boolean,
              default: !1
            },
            line: {
              type: Boolean,
              default: !1
            },
            lineWellness: {
              type: Boolean,
              default: !1
            },
            lineMice: {
              type: Boolean,
              default: !1
            }
          }
        },
        r = (o(697), o(4)),
        component = Object(r.a)(n, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "img-description-pdf",
            class: {
              inverse: t.inverse,
              "add-position": t.addPosition
            }
          }, [e("div", {
            staticClass: "container sm"
          }, [e("div", {
            staticClass: "text-content"
          }, [e("h2", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{ }"
            }],
            staticClass: "h2",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }), t._v(" "), e("p", {
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
          }), t._v(" "), t.links ? e("ul", {
            staticClass: "h6"
          }, t._l(t.links, (function(link) {
            return e("li", {
              directives: [{
                name: "slideUp",
                rawName: "v-slideUp",
                value: {
                  opacity: 1
                },
                expression: "{ opacity: 1 }"
              }],
              key: link.key,
              staticClass: "active-cursor"
            }, [e("a", {
              attrs: {
                href: t.$env.imgUrl + link.attributes.pdf,
                target: "_blank"
              }
            }, [t._v(t._s(link.attributes.title))])])
          })), 0) : t._e()]), t._v(" "), e("div", {
            staticClass: "img"
          }, [e("img", {
            directives: [{
              name: "imgZoomScroll",
              rawName: "v-imgZoomScroll"
            }, {
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "string" == typeof t.img ? t.img : t.img.main_image,
              alt: t.title
            }
          })])]), t._v(" "), t.line ? e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "332",
              viewBox: "0 0 1440 332",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1537 63.0301C1517.89 18.3428 1463.6 -2.11127 1415.12 1.38209C1366.63 4.87545 1321.73 26.6844 1276.63 44.8287C1123.13 106.33 956.398 127.315 792.449 105.767L689.673 100.486C600.853 95.9231 501.905 94.7233 435.604 153.988C401.21 184.726 380.625 228.001 349.087 261.727C302.857 311.181 232.802 337.267 165.44 330.092C98.0791 322.918 35.2149 282.622 0.460912 224.533",
              stroke: "#404540"
            }
          })]) : t._e(), t._v(" "), t.lineWellness ? e("svg", {
            staticClass: "lineSVG lineSVG-well",
            attrs: {
              preserveAspectRatio: "none",
              width: "1398",
              height: "1252",
              viewBox: "0 0 1398 1252",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M1772.87 1229.43C1639.74 1203 1519.73 1116.65 1452.31 998.876C1407.69 920.769 1385.88 831.329 1341.84 752.952C1297.79 674.576 1220.37 603.986 1130.55 608.475C1112.48 609.373 1093.58 613.854 1080.59 626.441C1067.6 639.027 1063.05 661.483 1074.55 675.45C1089.29 693.359 1121.97 685.18 1131.87 664.195C1141.76 643.209 1132.74 617.154 1116.26 600.828C1099.78 584.503 1077.35 575.88 1055.39 568.346C910.573 518.608 757.772 497.588 608.187 464.794C458.602 432.001 308.107 385.345 186.348 292.471C130.428 249.811 79.8154 194.927 61.925 126.913",
              stroke: "#FFD9B6",
              "stroke-opacity": "0.2"
            }
          })]) : t._e(), t._v(" "), t.lineMice ? e("svg", {
            staticClass: "lineSVG lineSVG-mice",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "373",
              viewBox: "0 0 1440 373",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw"
            }],
            attrs: {
              d: "M-376.696 372.278C-369.803 314.072 -313.914 270.918 -256.593 257.351C-199.272 243.784 -139.849 252.53 -81.4573 257.003C117.21 271.931 317.398 235.567 499.866 151.406L617.056 108.088C718.332 70.6539 832.48 33.4066 929.434 77.3781C979.729 100.182 1018.31 142.378 1066.31 169.645C1136.69 209.635 1226.68 214.173 1302.22 181.52C1377.77 148.868 1436.82 79.8386 1457.26 0.581801",
              stroke: "#414640"
            }
          })]) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    706: function(t, e, o) {
      var content = o(717);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("191fe1f4", content, !0, {
        sourceMap: !1
      })
    },
    707: function(t, e, o) {
      "use strict";
      o(694)
    },
    708: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, ".simple-description{margin-bottom:9.3055555556vw;position:relative;display:flex;flex-direction:column;justify-content:space-between}@media(max-width: 1200px){.simple-description{margin-bottom:134px}}@media(max-width: 900px){.simple-description{margin-bottom:96px}}@media(max-width: 600px){.simple-description{margin-bottom:56px}}@media(max-width: 400px){.simple-description{margin-bottom:48px}}.simple-description.positionText{margin-bottom:6.6666666667vw}@media(max-width: 1200px){.simple-description.positionText{margin-bottom:96px}}@media(max-width: 900px){.simple-description.positionText{margin-bottom:72px}}@media(max-width: 600px){.simple-description.positionText{margin-bottom:56px}}@media(max-width: 400px){.simple-description.positionText{margin-bottom:48px}}.simple-description.story-description{margin-bottom:7.2222222222vw}@media(max-width: 1200px){.simple-description.story-description{margin-bottom:104px}}@media(max-width: 900px){.simple-description.story-description{margin-bottom:96px}}@media(max-width: 600px){.simple-description.story-description{margin-bottom:88px}}.simple-description .h2{width:31.25vw}@media(max-width: 1200px){.simple-description .h2{width:415px}}@media(max-width: 900px){.simple-description .h2{width:55%}}@media(max-width: 600px){.simple-description .h2{width:100%}}.simple-description .h2.positionText{width:53.4027777778vw}@media(max-width: 1200px){.simple-description .h2.positionText{width:664px}}@media(max-width: 900px){.simple-description .h2.positionText{width:464px}}@media(max-width: 600px){.simple-description .h2.positionText{width:100%}}.simple-description .h2.story-description{width:60.9722222222vw;margin-bottom:3.8888888889vw}@media(max-width: 1200px){.simple-description .h2.story-description{margin-bottom:40px}}@media(max-width: 900px){.simple-description .h2.story-description{margin-bottom:32px}}@media(max-width: 600px){.simple-description .h2.story-description{margin-bottom:24px}}@media(max-width: 1200px){.simple-description .h2.story-description{width:664px}}@media(max-width: 900px){.simple-description .h2.story-description{width:464px}}@media(max-width: 600px){.simple-description .h2.story-description{width:100%}}.simple-description .text{opacity:.4;width:30vw;align-self:flex-end;margin-top:-.6944444444vw}@media(max-width: 1200px){.simple-description .text{width:304px;margin-top:-10px}}@media(max-width: 900px){.simple-description .text{width:calc(50% - 16px);margin-top:32px}}@media(max-width: 600px){.simple-description .text{width:100%;margin-top:32px}}.simple-description .text.positionText{margin-top:2.7777777778vw}@media(max-width: 1200px){.simple-description .text.positionText{margin-top:40px}}@media(max-width: 900px){.simple-description .text.positionText{margin-top:32px}}@media(max-width: 600px){.simple-description .text.positionText{margin-top:24px}}@media(max-width: 1200px){.simple-description .text.positionText{width:344px}}@media(max-width: 600px){.simple-description .text.positionText{width:100%}}.simple-description .text.story-description{margin-top:0}.simple-description .lineSVG{position:absolute;left:50%;top:83.3333333333vw;transform:translate(-50%, -50%);z-index:-1}", ""]), t.exports = n
    },
    714: function(t, e, o) {
      "use strict";
      o(77);
      var n = {
          props: {
            title: {
              type: String
            },
            description: {
              type: String
            },
            large: {
              type: Boolean,
              default: !1
            },
            positionText: {
              type: Boolean,
              default: !1
            },
            storyDescription: {
              type: Boolean,
              default: !1
            },
            lineActive: {
              type: Boolean,
              default: !1
            }
          }
        },
        r = (o(707), o(4)),
        component = Object(r.a)(n, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "container md simple-description",
            class: {
              positionText: t.positionText,
              "story-description": t.storyDescription
            }
          }, [t.title ? e("h2", {
            directives: [{
              name: "slideUpStagger",
              rawName: "v-slideUpStagger",
              value: {},
              expression: "{ }"
            }],
            staticClass: "h2",
            class: {
              positionText: t.positionText,
              "story-description": t.storyDescription
            },
            domProps: {
              innerHTML: t._s(t.title)
            }
          }) : t._e(), t._v(" "), t.description ? e("p", {
            directives: [{
              name: "slideUp",
              rawName: "v-slideUp",
              value: {
                opacity: .4
              },
              expression: "{ opacity: 0.4 }"
            }],
            staticClass: "text",
            class: {
              positionText: t.positionText,
              "story-description": t.storyDescription
            },
            domProps: {
              innerHTML: t._s(t.description)
            }
          }) : t._e(), t._v(" "), t.lineActive ? e("svg", {
            staticClass: "lineSVG",
            attrs: {
              preserveAspectRatio: "none",
              width: "1440",
              height: "2593",
              viewBox: "0 0 1440 2593",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [e("path", {
            directives: [{
              name: "lineDraw",
              rawName: "v-lineDraw",
              value: {
                start: "top bottom"
              },
              expression: "{start:'top bottom'}"
            }],
            attrs: {
              d: "M1890.84 20.0036C1740.08 -31.9211 1572.26 29.5094 1441.19 120.316C1310.11 211.123 1200.45 330.749 1066.12 416.591C938.484 498.204 789.717 544.896 638.807 555.462C479.149 566.619 319.448 538.347 175.477 468.27C75.8227 483.979 34.2293 610.176 91.4426 693.262C148.656 776.348 259.222 804.921 360.104 803.783C460.986 802.645 561.02 778.345 661.79 783.199C888.389 794.121 1084.81 951.792 1215.18 1137.48C1345.55 1323.16 1425.1 1538.91 1530.32 1739.9C1580.53 1835.85 1641.71 1933.49 1738.19 1982.8C1834.66 2032.11 1974.47 2011.01 2021.06 1913.19C1964.94 1905.2 1914.03 1950.82 1889.05 2001.71C1864.07 2052.6 1856.09 2110.28 1833.1 2162.09C1783.4 2274.08 1659.05 2348.16 1536.9 2338.54C1483.35 2334.33 1432.13 2315.83 1381.14 2298.9C1330.15 2281.98 1277.51 2266.34 1223.83 2268.17C1170.14 2270 1114.49 2292.15 1084.76 2336.91C1055.04 2381.67 1060.44 2450.35 1104.49 2481.11C1148.54 2511.87 1223.67 2482.38 1225.64 2428.67C1227.16 2387.3 1188.47 2353.27 1147.86 2345.3C1107.25 2337.34 1065.6 2348.86 1025.88 2360.52C795.541 2428.13 566.855 2503.79 330.884 2547.88C-343.793 2673.95 -1065.52 2526.68 -1636.88 2146.44",
              stroke: "#414640"
            }
          })]) : t._e()])
        }), [], !1, null, null, null);
      e.a = component.exports
    },
    716: function(t, e, o) {
      "use strict";
      o(706)
    },
    717: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, ".text-picture{margin-bottom:10.5555555556vw;position:relative}@media(max-width: 1200px){.text-picture{margin-bottom:132px}}@media(max-width: 900px){.text-picture{margin-bottom:124px}}@media(max-width: 600px){.text-picture{margin-bottom:96px}}@media(max-width: 400px){.text-picture{margin-bottom:88px}}.text-picture .h6{margin-bottom:2.2222222222vw;opacity:.4}@media(max-width: 1200px){.text-picture .h6{margin-bottom:32px}}@media(max-width: 600px){.text-picture .h6{margin-bottom:24px}}.text-picture .h1{font-size:7.7777777778vw;line-height:1;background-size:cover;-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,.0001);display:inline-block;display:-webkit-box}@media(max-width: 1200px){.text-picture .h1{font-size:87px}}@media(max-width: 900px){.text-picture .h1{font-size:65px}}@media(max-width: 600px){.text-picture .h1{font-size:40px}}@media(max-width: 400px){.text-picture .h1{font-size:36px}}@media(max-width: 360px){.text-picture .h1{font-size:30px}}.text-picture .description-more{margin-top:6.6666666667vw;margin-left:auto}@media(max-width: 1200px){.text-picture .description-more{margin-top:96px}}@media(max-width: 900px){.text-picture .description-more{margin-top:72px}}@media(max-width: 600px){.text-picture .description-more{margin-top:56px}}@media(max-width: 400px){.text-picture .description-more{margin-top:48px}}@media(max-width: 1200px){.text-picture .description-more{margin-top:6.6666666667vw}}@media(max-width: 1200px)and (max-width: 1200px){.text-picture .description-more{margin-top:96px}}@media(max-width: 1200px)and (max-width: 900px){.text-picture .description-more{margin-top:72px}}@media(max-width: 1200px)and (max-width: 600px){.text-picture .description-more{margin-top:56px}}@media(max-width: 1200px)and (max-width: 400px){.text-picture .description-more{margin-top:48px}}@media(max-width: 600px){.text-picture .description-more{width:100%}}.text-picture .char{-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,.0001)}.text-picture .lineSVG1{position:absolute;z-index:-1;top:40%;left:50%;transform:translate(-50%, -50%);pointer-events:none;width:100vw;height:100vh}.text-picture .lineSVG2{position:absolute;z-index:-1;top:-20%;left:50%;transform:translate(-50%, -50%);pointer-events:none;width:100vw}.text-picture .lineSVG2:last-child{top:85%;left:60%}.path{stroke-dasharray:1;stroke-dashoffset:1;animation:dash 5s linear alternate infinite}@keyframes dash{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}", ""]), t.exports = n
    },
    730: function(t, e, o) {
      "use strict";
      o(134);
      var n = o(16),
        r = o(693),
        m = {
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
            AppDescriptionMore: r.a
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
        d = (o(716), o(4)),
        component = Object(d.a)(m, (function() {
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
    739: function(t, e, o) {
      var content = o(818);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("2b5be9cc", content, !0, {
        sourceMap: !1
      })
    },
    741: function(t, e, o) {
      var content = o(822);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("c89cd6ce", content, !0, {
        sourceMap: !1
      })
    },
    817: function(t, e, o) {
      "use strict";
      o(739)
    },
    818: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, ".story-information{margin-bottom:10.5555555556vw;padding:7.7777777778vw 0;background-color:#ffd9b6}@media(max-width: 1200px){.story-information{margin-bottom:132px}}@media(max-width: 900px){.story-information{margin-bottom:124px}}@media(max-width: 600px){.story-information{margin-bottom:96px}}@media(max-width: 400px){.story-information{margin-bottom:88px}}@media(max-width: 1200px){.story-information{padding:132px 0}}@media(max-width: 900px){.story-information{padding:124px 0}}@media(max-width: 600px){.story-information{padding:96px 0}}@media(max-width: 400px){.story-information{padding:88px 0}}.story-information .container{position:relative;width:100%;padding:0;display:flex;justify-content:space-between}@media(max-width: 600px){.story-information .container{flex-direction:column;align-items:center;padding:0 23px}}@media(max-width: 400px){.story-information .container{padding:0 16px}}.story-information .container .image-b{margin-top:6.9444444444vw;width:42.7083333333vw;height:56.8055555556vw;margin-right:6.5277777778vw;z-index:2;position:relative;overflow:hidden}@media(max-width: 1200px){.story-information .container .image-b{width:440px;min-height:587px;margin-right:62px;margin-top:135px}}@media(max-width: 900px){.story-information .container .image-b{width:332px;min-height:443px;margin-right:42px;margin-top:223px}}@media(max-width: 600px){.story-information .container .image-b{width:100%;height:491px;margin-right:0;margin-top:0;order:-2}}@media(max-width: 400px){.story-information .container .image-b{height:457px}}.story-information .container .image-b img{object-fit:cover;width:100%;height:100%}.story-information .container .image-b .h2{z-index:2;left:0;transform:none;top:9.375vw}@media(max-width: 1200px){.story-information .container .image-b .h2{top:-32px;left:80px}}@media(max-width: 900px){.story-information .container .image-b .h2{top:-87px;left:32px}}@media(max-width: 600px){.story-information .container .image-b .h2{display:none}}.story-information .container .main-inf{display:flex;flex-direction:column;flex-grow:1;align-items:flex-end;position:relative}.story-information .container .main-inf .image-sm{margin-bottom:6.1111111111vw;width:50.7638888889vw;height:37.9166666667vw;z-index:2;position:relative;overflow:hidden}@media(max-width: 1200px){.story-information .container .main-inf .image-sm{margin-bottom:56px}}@media(max-width: 600px){.story-information .container .main-inf .image-sm{margin-bottom:40px}}@media(max-width: 1200px){.story-information .container .main-inf .image-sm{width:523px;min-height:391px;margin-bottom:70px}}@media(max-width: 900px){.story-information .container .main-inf .image-sm{width:394px;min-height:295px;margin-bottom:55px}}@media(max-width: 600px){.story-information .container .main-inf .image-sm{width:100%;height:276px;margin-bottom:30px}}@media(max-width: 400px){.story-information .container .main-inf .image-sm{height:258px}}.story-information .container .main-inf .image-sm img{object-fit:cover;width:100%;height:100%}.story-information .container .main-inf .image-sm .h2{z-index:2;right:0;transform:none;right:0;left:unset}@media(max-width: 1200px){.story-information .container .main-inf .image-sm .h2{right:80px}}@media(max-width: 900px){.story-information .container .main-inf .image-sm .h2{right:32px}}@media(max-width: 600px){.story-information .container .main-inf .image-sm .h2{display:none}}.story-information .container .main-inf .text{width:30.0694444444vw;margin-right:11.6666666667vw;color:#353535;opacity:.4}@media(max-width: 1200px){.story-information .container .main-inf .text{width:344px;margin-right:80px}}@media(max-width: 900px){.story-information .container .main-inf .text{margin-right:32px}}@media(max-width: 600px){.story-information .container .main-inf .text{margin-right:0px;width:100%}}.story-information .container .title-pos{position:absolute;top:16.25vw;left:50%;transform:translateX(-50%);width:84.4444444444vw;text-align:center;color:#fff;width:100vw}@media(max-width: 1200px){.story-information .container .title-pos{top:102px;width:calc(100vw - 160px)}}@media(max-width: 900px){.story-information .container .title-pos{top:137px;width:calc(100vw - 64px)}}@media(max-width: 600px){.story-information .container .title-pos{position:static;top:unset;left:unset;transform:translateX(0);width:100%;margin:40px 0;order:-1}}.story-information .container .title-pos.title-color{color:#353535;z-index:1}.story-information .line{position:absolute;top:-6.9444444444vw;z-index:-1}", ""]), t.exports = n
    },
    821: function(t, e, o) {
      "use strict";
      o(741)
    },
    822: function(t, e, o) {
      var n = o(9)(!1);
      n.push([t.i, "", ""]), t.exports = n
    },
    964: function(t, e, o) {
      "use strict";
      o.r(e);
      var n = o(63),
        r = o(1),
        m = (o(13), o(659)),
        d = o(730),
        l = {
          props: {
            bigImg: {
              type: String
            },
            smImg: {
              type: String
            },
            title: {
              type: String
            },
            description: {
              type: String
            }
          }
        },
        c = (o(817), o(4)),
        x = Object(c.a)(l, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "story-information"
          }, [e("div", {
            staticClass: "container"
          }, [e("div", {
            staticClass: "image-b"
          }, [t.bigImg ? e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            staticClass: "image-sm",
            attrs: {
              "data-src": t.bigImg,
              alt: "image decription"
            }
          }) : t._e(), t._v(" "), e("h2", {
            staticClass: "h2 title-pos",
            domProps: {
              innerHTML: t._s(t.title)
            }
          })]), t._v(" "), e("div", {
            staticClass: "main-inf"
          }, [e("div", {
            staticClass: "image-sm"
          }, [t.smImg ? e("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            staticClass: "image-sm",
            attrs: {
              "data-src": t.smImg,
              alt: "image decription"
            }
          }) : t._e(), t._v(" "), e("h2", {
            staticClass: "h2 title-pos",
            domProps: {
              innerHTML: t._s(t.title)
            }
          })]), t._v(" "), t.description ? e("p", {
            staticClass: "text",
            domProps: {
              innerHTML: t._s(t.description)
            }
          }) : t._e()]), t._v(" "), t.title ? e("h2", {
            staticClass: "h2 title-pos title-color",
            domProps: {
              innerHTML: t._s(t.title)
            }
          }) : t._e()])])
        }), [], !1, null, null, null).exports,
        h = o(714),
        w = o(662),
        f = o(692),
        v = o(702),
        y = o(656),
        _ = {
          fetch: function(t) {
            return Object(r.a)(regeneratorRuntime.mark((function e() {
              var o;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.store, t.route, e.next = 3, o.dispatch("getAboutStory");
                  case 3:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, o, r = t.$route;
            return {
              title: this.getLang(this.state.aboutStory.meta_tags)[0].attributes.title || "Verholy Relax Park",
              meta: Object(n.a)(Object(y.b)({
                url: r.path,
                title: null === (e = this.getLang(this.state.aboutStory.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title,
                description: null === (o = this.getLang(this.state.aboutStory.meta_tags)[0]) || void 0 === o ? void 0 : o.attributes.description
              }))
            }
          },
          components: {
            AppGreet: m.a,
            AppTextPicture: d.a,
            AppStoryInformation: x,
            AppSimpleDescription: h.a,
            AppSlider: w.a,
            AppLargeDescription: f.a,
            AppImgDescriptionPdf: v.a
          },
          methods: {
            openBookingModal: function() {
              this.$store.commit("showBookingModal")
            },
            openModal: function() {
              this.$store.commit("showBookingModal")
            }
          }
        },
        S = (o(821), Object(c.a)(_, (function() {
          var t = this,
            e = t._self._c;
          return e("div", [e("app-greet", {
            attrs: {
              subtitle: t.demo.aboutStory.greet.subtitle,
              title: t.getLang(t.state.aboutStory.title),
              img: t.state.aboutStory.main_photo,
              page_name: "about_story_page"
            }
          }), t._v(" "), null != t.getLang(t.state.aboutStory.description)[0] && 0 != t.getLang(t.state.aboutStory.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.aboutStory.description)[0].attributes.short_description.length ? e("app-text-picture", {
            attrs: {
              title: t.getLang(t.state.aboutStory.description)[0].attributes.main_description,
              description: t.getLang(t.state.aboutStory.description)[0].attributes.short_description,
              img: t.demo.aboutStory.textPicture.img,
              nameButton: t.$t("Book your stay"),
              openModal: t.openModal,
              line2: !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.aboutStory.information)[0] && 0 != t.getLang(t.state.aboutStory.information)[0].attributes.main_description.length && 0 != t.getLang(t.state.aboutStory.information)[0].attributes.short_description.length && t.state.aboutStory.information_images.wide_image && t.state.aboutStory.information_images.long_image ? e("app-story-information", {
            attrs: {
              title: t.getLang(t.state.aboutStory.information)[0].attributes.main_description,
              description: t.getLang(t.state.aboutStory.information)[0].attributes.short_description,
              smImg: t.state.aboutStory.information_images.wide_image,
              bigImg: t.state.aboutStory.information_images.long_image
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.aboutStory.slider_description)[0] && 0 != t.getLang(t.state.aboutStory.slider_description)[0].attributes.title.length && 0 != t.getLang(t.state.aboutStory.slider_description)[0].attributes.description.length ? e("app-simple-description", {
            attrs: {
              title: t.getLang(t.state.aboutStory.slider_description)[0].attributes.title,
              description: t.getLang(t.state.aboutStory.slider_description)[0].attributes.description,
              storyDescription: !0
            }
          }) : t._e(), t._v(" "), JSON.parse(t.state.aboutStory.slider_images).length > 0 ? e("app-slider", {
            attrs: {
              slides: JSON.parse(t.state.aboutStory.slider_images),
              numbering: !0,
              line: !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.aboutStory.additional_info)[0] && 0 != t.getLang(t.state.aboutStory.additional_info)[0].attributes.title.length && 0 != t.getLang(t.state.aboutStory.additional_info)[0].attributes.description.length && t.state.aboutStory.additional_images.main_image && t.state.aboutStory.additional_images.top_image && t.state.aboutStory.additional_images.bottom_image ? e("app-large-description", {
            attrs: {
              title: t.getLang(t.state.aboutStory.additional_info)[0].attributes.title,
              description: t.getLang(t.state.aboutStory.additional_info)[0].attributes.description,
              bgImg: t.state.aboutStory.additional_images.main_image,
              lgImg: t.state.aboutStory.additional_images.top_image,
              smImg: t.state.aboutStory.additional_images.bottom_image,
              inverse: !0,
              "large-desc-indent": !0
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.aboutStory.mission_description)[0] && 0 != t.getLang(t.state.aboutStory.mission_description)[0].attributes.title.length && 0 != t.getLang(t.state.aboutStory.mission_description)[0].attributes.description.length && t.state.aboutStory.mission_image ? e("app-img-descriptionPdf", {
            attrs: {
              title: t.getLang(t.state.aboutStory.mission_description)[0].attributes.title,
              description: t.getLang(t.state.aboutStory.mission_description)[0].attributes.description,
              img: t.state.aboutStory.mission_image,
              inverse: !0,
              "add-position": !0,
              line: !0
            }
          }) : t._e()], 1)
        }), [], !1, null, null, null));
      e.default = S.exports
    }
  }
]);