/* https://verholy.com/_nuxt/ac88b06.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3], {
    703: function(e, t, o) {
      "use strict";
      o(12), o(15), o(7), o(11), o(18), o(19);
      var r = o(6),
        d = (o(49), o(39), o(54), o(77)),
        l = o(705),
        m = o(662),
        n = o(8);

      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(object, e).enumerable
          }))), t.push.apply(t, o)
        }
        return t
      }

      function h(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? c(Object(source), !0).forEach((function(t) {
            Object(r.a)(e, t, source[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
          }))
        }
        return e
      }
      var x = {
          data: function() {
            return {
              sliderGalleryOptions: {
                loop: !0,
                slidesPerView: 1,
                speed: 1e3,
                centeredSlides: !0,
                allowTouchMove: !1,
                autoplay: {
                  delay: 2e3
                }
              },
              was_showed: !1
            }
          },
          components: {
            Button: d.a,
            Features: l.a,
            AppSlider: m.a
          },
          methods: {
            chooseUpgraded: function() {
              this.$store.commit("booking/addAcommodation", this.upsaleAccommodation), this.$store.commit("booking/setUpsaleWasShowed", !0), this.chosed_acommodations.includes(null) || 1 !== this.chosed_acommodations.length ? this.$store.commit("booking/setNextAccomodation") : this.$router.push(this.localePath("/booking/checkout"))
            }
          },
          computed: h(h(h(h({
            littleImage: function() {
              return JSON.parse(this.upsaleAccommodationData.gallery_images)[0].attributes.image
            },
            moneyUpdate: function() {
              return this.getAccommodationPrice(this.upsaleAccommodationData) - this.getAccommodationPrice(this.chosedAccomodation.attributes[0])
            },
            chosedAccomodation: function() {
              return this.chosed_acommodations.find((function(e) {
                return e
              }))
            },
            upsaleAccommodationData: function() {
              var e;
              return null === (e = this.upsaleAccommodation) || void 0 === e ? void 0 : e.attributes[0]
            },
            upsaleAccommodation: function() {
              var e = this;
              try {
                if (this.upsale_was_showed) return null;
                this.type_filter;
                var t = this.chosedAccomodation;
                if (t) {
                  for (var o = this.getFilteredFreeRooms().sort((function(t, o) {
                      return e.getRoomSumPrice(t.attributes[0].servio_id) - e.getRoomSumPrice(o.attributes[0].servio_id)
                    })), r = null, i = 0; i < o.length; i++) {
                    var d = this.getAccommodationPrice(t.attributes[0]);
                    if (this.getAccommodationPrice(o[i].attributes[0]) > d) {
                      r = i;
                      break
                    }
                  }
                  if (r === o.length && (r = null), r) return o[r];
                  if (this.$store.commit("booking/setUpsaleWasShowed", !0), this.$store.commit("booking/addAcommodation", this.chosed_acommodations[this.current_acommodations]), this.is_one_accomodation_chosed) return;
                  this.isAccommodationListFull && this.$router.push(this.localePath("/booking/checkout"))
                }
              } catch (e) {
                console.log(e)
              }
            }
          }, Object(n.b)("booking", ["isAccommodationListFull", "getNightsCount", "getAccommodationPrice", "getFilteredFreeRooms", "getRoomSumPrice"])), Object(n.c)(["sorting"])), Object(n.c)("booking", ["type_filter", "current_acommodations", "chosed_acommodations", "upsale_was_showed", "is_one_accomodation_chosed"])), {}, {
            gallery: function() {
              return JSON.parse(this.upsaleAccommodationData.gallery_images)
            },
            characteristics: function() {
              var e = this.upsaleAccommodationData.properties[this.lang][0];
              if (e) return JSON.parse(e.attributes.properties_field)
            },
            area: function() {
              var e, t = this.upsaleAccommodationData.properties[this.lang][0];
              t && (e = JSON.parse(t.attributes.properties_field));
              var o = "";
              return e.forEach((function(e) {
                "Average area" !== e.key && "Territory area" !== e.key && "Inner area" !== e.key && "Середня площа" !== e.key && "Площа території" !== e.key && "загальна площа" !== e.key || (o = e.value)
              })), "" !== o ? o : void 0
            }
          }),
          mounted: function() {}
        },
        f = (o(830), o(4)),
        component = Object(f.a)(x, (function() {
          var e, t, o, r, d = this,
            l = d._self._c;
          return d.upsaleAccommodation ? l("div", {
            staticClass: "modal-upsale"
          }, [l("button", {
            staticClass: "cursor-black active-cursor close",
            on: {
              click: function(e) {
                return d.$emit("close")
              }
            }
          }, [l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/icon-close-dark.svg",
              alt: "close"
            }
          })]), d._v(" "), l("div", {
            staticClass: "content"
          }, [l("div", {
            staticClass: "container hero"
          }, [l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": d.upsaleAccommodationData.main_photo
            }
          }), d._v(" "), l("span", {
            staticClass: "h6 square",
            class: {
              "op-0": !d.area
            }
          }, [d._v("(" + d._s(d.area) + ")")]), d._v(" "), l("span", {
            staticClass: "h6"
          }, [d._v(d._s(d.upsaleAccommodationData.cottages_and_number.name[d.lang]))]), d._v(" "), l("h3", {
            staticClass: "h3"
          }, [d._v(d._s(d.upsaleAccommodationData.title[d.lang]))]), d._v(" "), l("div", {
            staticClass: "more"
          }, [l("span", {
            staticClass: "action"
          }, [d._v(d._s(d.$t("scroll down")))]), d._v(" "), l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-white.svg",
              alt: "arrow"
            }
          })])]), d._v(" "), l("div", {
            staticClass: "container md"
          }, [l("Features", {
            attrs: {
              topDescription: null === (e = d.upsaleAccommodationData.description[d.lang][0].attributes) || void 0 === e ? void 0 : e.short_description,
              bottomDescription: null === (t = d.upsaleAccommodationData.attributes_description[d.lang][0]) || void 0 === t ? void 0 : t.attributes.description,
              services: d.upsaleAccommodationData.attributes[d.lang]
            }
          })], 1)]), d._v(" "), l("div", {
            staticClass: "offer cursor-black"
          }, [l("h3", {
            staticClass: "h3"
          }, [d._v(d._s(d.$t("Upgrade your room")))]), d._v(" "), l("p", {
            staticClass: "text"
          }, [d._v("\n      " + d._s(d.$t("Upgrade your stay before reservation is complete")) + "\n    ")]), d._v(" "), l("div", {
            ref: "gallery",
            staticClass: "gallery"
          }, [l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            staticClass: "gallery-item",
            attrs: {
              "data-src": d.$env.imgUrl + d.littleImage,
              alt: "placeholder"
            }
          })]), d._v(" "), l("div", {
            staticClass: "room-preview"
          }, [l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            staticClass: "room-preview-img",
            attrs: {
              "data-src": d.upsaleAccommodationData.main_photo,
              alt: "placeholder"
            }
          }), d._v(" "), l("span", {
            staticClass: "h6 square",
            class: {
              "op-0": !d.area
            }
          }, [d._v("(" + d._s(d.area) + ")")]), d._v(" "), l("span", {
            staticClass: "h6"
          }, [d._v(d._s(d.upsaleAccommodationData.cottages_and_number.name[d.lang]))]), d._v(" "), l("h3", {
            staticClass: "h3"
          }, [d._v(d._s(d.upsaleAccommodationData.title[d.lang]))])]), d._v(" "), l("div", {
            staticClass: "price-mob"
          }, [l("h4", {
            staticClass: "h4"
          }, [d._v(d._s(d.$t("Only")) + " +" + d._s(d.moneyUpdate) + " " + d._s(d.$t("UAH")))]), d._v(" "), l("span", {
            staticClass: "h6"
          }, [d._v("\n        " + d._s(d.$t("per")) + " " + d._s(d.getNightsCount) + "\n        " + d._s(d.$tc("nightCount", d.getNightsCount)) + "\n      ")])]), d._v(" "), l("div", {
            staticClass: "more-mob"
          }, [l("img", {
            directives: [{
              name: "lazy-load",
              rawName: "v-lazy-load"
            }],
            attrs: {
              "data-src": "/img/icons/arrow-right-black.svg",
              alt: "arrow"
            }
          })]), d._v(" "), d.gallery && d.gallery.length > 0 ? l("app-slider", {
            staticClass: "slider-mob",
            attrs: {
              slides: d.gallery,
              numbering: !0
            }
          }) : d._e(), d._v(" "), l("div", {
            staticClass: "features container"
          }, [l("Features", {
            attrs: {
              topDescription: null === (o = d.upsaleAccommodationData.description[d.lang][0].attributes) || void 0 === o ? void 0 : o.short_description,
              bottomDescription: null === (r = d.upsaleAccommodationData.attributes_description[d.lang][0]) || void 0 === r ? void 0 : r.attributes.description,
              services: d.upsaleAccommodationData.attributes[d.lang]
            }
          }), d._v(" "), l("h4", {
            staticClass: "thanks-title h4",
            on: {
              click: function(e) {
                return d.$emit("close")
              }
            }
          }, [d._v("\n        " + d._s(d.$t("no thanks")) + "\n      ")]), d._v(" "), l("div", {
            staticClass: "bottom-wrap"
          }, [l("button", {
            staticClass: "button cursor-light active-cursor",
            on: {
              click: d.chooseUpgraded
            }
          }, [d._v("\n          " + d._s(d.$t("Upgrade my room")) + "\n        ")])])], 1), d._v(" "), l("div", {
            staticClass: "price"
          }, [l("h4", {
            staticClass: "h4"
          }, [d._v(d._s(d.$t("Only")) + " +" + d._s(d.moneyUpdate) + " " + d._s(d.$t("UAH")))]), d._v(" "), l("span", {
            staticClass: "h6"
          }, [d._v(d._s(d.$t("per")) + " " + d._s(d.getNightsCount) + "\n        " + d._s(d.$tc("nightCount", d.getNightsCount)))])]), d._v(" "), l("Button", {
            staticClass: "button-desktop",
            attrs: {
              name: d.$t("Upgrade my room"),
              action: !0
            },
            on: {
              actionClick: d.chooseUpgraded
            }
          })], 1)]) : d._e()
        }), [], !1, null, null, null);
      t.a = component.exports
    },
    705: function(e, t, o) {
      "use strict";
      var r = {
          props: {
            topDescription: {
              type: String
            },
            bottomDescription: {
              type: String
            },
            services: {
              type: Array
            }
          }
        },
        d = (o(828), o(4)),
        component = Object(d.a)(r, (function() {
          var e = this,
            t = e._self._c;
          return t("div", {
            staticClass: "modal-features"
          }, [t("div", {
            staticClass: "description"
          }, [t("h3", {
            staticClass: "h3"
          }, [e._v(e._s(e.$t("room details")))]), e._v(" "), t("p", {
            staticClass: "text",
            domProps: {
              innerHTML: e._s(e.topDescription)
            }
          })]), e._v(" "), t("div", {
            staticClass: "services"
          }, [t("ul", {
            staticClass: "menu-services"
          }, e._l(e.services, (function(o) {
            return t("li", {
              key: o.key,
              staticClass: "menu-services-item"
            }, [t("img", {
              directives: [{
                name: "lazy-load",
                rawName: "v-lazy-load"
              }],
              attrs: {
                "data-src": e.$env.imgUrl + o.attributes.image,
                title: o.attributes.title,
                alt: o.attributes.title
              }
            }), e._v(" "), t("span", {
              staticClass: "h6 menu-services-item-description"
            }, [e._v(e._s(o.attributes.title))])])
          })), 0), e._v(" "), e._e()])])
        }), [], !1, null, null, null);
      t.a = component.exports
    },
    743: function(e, t, o) {
      var content = o(829);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [e.i, content, ""]
      ]), content.locals && (e.exports = content.locals);
      (0, o(10).default)("024dc13c", content, !0, {
        sourceMap: !1
      })
    },
    744: function(e, t, o) {
      var content = o(831);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [e.i, content, ""]
      ]), content.locals && (e.exports = content.locals);
      (0, o(10).default)("8a53ab88", content, !0, {
        sourceMap: !1
      })
    },
    828: function(e, t, o) {
      "use strict";
      o(743)
    },
    829: function(e, t, o) {
      var r = o(9)(!1);
      r.push([e.i, '.modal-features .description{margin-bottom:5vw;text-align:center}@media(max-width: 1200px){.modal-features .description{margin-bottom:64px}}@media(max-width: 600px){.modal-features .description{margin-bottom:48px}}@media(max-width: 1200px){.modal-features .description{margin-bottom:83px}}@media(max-width: 900px){.modal-features .description{margin-bottom:64px}}@media(max-width: 600px){.modal-features .description{margin-bottom:60px}}.modal-features .description .h3{margin-bottom:2.7777777778vw}@media(max-width: 1200px){.modal-features .description .h3{margin-bottom:40px}}@media(max-width: 900px){.modal-features .description .h3{margin-bottom:32px}}@media(max-width: 1200px){.modal-features .description .h3{margin-bottom:32px}}@media(max-width: 900px){.modal-features .description .h3{margin-bottom:24px}}.modal-features .description .text{opacity:.4}.modal-features .description .text div{padding:0}@media(max-width: 900px){.modal-features .description .text div{padding:0 152px}}@media(max-width: 600px){.modal-features .description .text div{padding:0 23px}}@media(max-width: 400px){.modal-features .description .text div{padding:0 16px}}.modal-features .services{max-width:100%;padding:0;display:flex;flex-direction:column}@media(max-width: 900px){.modal-features .services{padding:0 80px}}@media(max-width: 600px){.modal-features .services{padding:0 23px}}@media(max-width: 400px){.modal-features .services{padding:0 16px}}.modal-features .services .menu-services{margin-bottom:5vw;width:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap}@media(max-width: 1200px){.modal-features .services .menu-services{margin-bottom:64px}}@media(max-width: 600px){.modal-features .services .menu-services{margin-bottom:48px}}.modal-features .services .menu-services-item{color:#ffd9b6;padding:25px 10px 21px 10px;display:flex;flex-direction:column;align-items:center;align-self:center;justify-self:center;text-align:center;min-width:11.1111111111vw;width:20%}@media(max-width: 1200px){.modal-features .services .menu-services-item{padding:22px 10px 18px 10px;min-width:160px}}@media(max-width: 900px){.modal-features .services .menu-services-item{width:25%;min-width:122px}}@media(max-width: 600px){.modal-features .services .menu-services-item{line-height:1.4;padding:10px 10px 6px 10px;width:33.3333333333%;min-width:106px;align-self:self-start}}@media(max-width: 400px){.modal-features .services .menu-services-item{width:33.3333333333%;min-width:90px}}.modal-features .services .menu-services-item img{width:4.7222222222vw;height:auto;padding-bottom:14px}@media(max-width: 1200px){.modal-features .services .menu-services-item img{width:60px;padding-bottom:20px}}@media(max-width: 600px){.modal-features .services .menu-services-item img{width:52px;padding-bottom:16px}}@media(max-width: 600px){.modal-features .services .menu-services-item img{padding-bottom:14px}}.modal-features .services .menu-services-item-description{max-width:100%;display:flex;text-align:center;margin:0 auto}.modal-features .services .bottom-description{font-family:"kudryashev";text-transform:lowercase;text-align:center}@media(max-width: 900px){.modal-features .services .bottom-description{padding:0 152px}}@media(max-width: 600px){.modal-features .services .bottom-description{padding:0 23px}}@media(max-width: 400px){.modal-features .services .bottom-description{padding:0 16px}}', ""]), e.exports = r
    },
    830: function(e, t, o) {
      "use strict";
      o(744)
    },
    831: function(e, t, o) {
      var r = o(9)(!1);
      r.push([e.i, '.modal-upsale{position:fixed;top:0;left:0;width:100%;height:100%;background:#122223;z-index:999999999;overflow:hidden;display:flex;opacity:0;visibility:hidden;pointer-events:none;transition:.5s ease}.modal-upsale.active{opacity:1;visibility:visible;pointer-events:all}.modal-upsale .close{position:fixed;top:1.6666666667vw;right:1.6666666667vw;z-index:10;width:3.4722222222vw;height:3.4722222222vw;padding:.6944444444vw}@media(max-width: 1200px){.modal-upsale .close{width:30px;height:30px;top:24px;right:24px}}@media(max-width: 600px){.modal-upsale .close{top:15px;right:15px}}@media(max-width: 400px){.modal-upsale .close{width:26px;height:26px}}.modal-upsale .close:hover{transform:rotate(90deg);transition:.3s}.modal-upsale .close img{width:100%;height:100%}.modal-upsale .content{width:50%;overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.modal-upsale .content::-webkit-scrollbar{display:none}@media(max-width: 900px){.modal-upsale .content{display:none}}.modal-upsale .hero{margin-bottom:10.5555555556vw;height:100vh;background:center/cover;position:relative;z-index:1;display:flex;flex-direction:column;align-items:flex-start;padding-top:3.3333333333vw;padding-bottom:3.3333333333vw}@media(max-width: 1200px){.modal-upsale .hero{margin-bottom:132px}}@media(max-width: 900px){.modal-upsale .hero{margin-bottom:124px}}@media(max-width: 600px){.modal-upsale .hero{margin-bottom:96px}}@media(max-width: 400px){.modal-upsale .hero{margin-bottom:88px}}.modal-upsale .hero .square{visibility:hidden}.modal-upsale .hero img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;z-index:-2}.modal-upsale .hero::before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background:rgba(0,0,0,.4)}.modal-upsale .hero .h6:first-of-type{margin-bottom:auto;opacity:.8}.modal-upsale .hero .h6:last-of-type{margin-bottom:1.1111111111vw;opacity:.4}@media(max-width: 1200px){.modal-upsale .hero .h6:last-of-type{margin-bottom:16px}}@media(max-width: 600px){.modal-upsale .hero .h6:last-of-type{margin-bottom:14px}}.modal-upsale .hero .h3{margin-bottom:1.6666666667vw;max-width:19.4444444444vw}@media(max-width: 1200px){.modal-upsale .hero .h3{margin-bottom:24px}}.modal-upsale .hero .more{position:relative;padding-right:1.1111111111vw}.modal-upsale .hero .more .action{cursor:pointer}.modal-upsale .hero .more img{position:absolute;width:1.9444444444vw;height:1.3888888889vw;top:50%;left:100%;transform:translate(0, -50%) rotate(90deg)}.modal-upsale .offer{padding-top:4.1666666667vw;padding-bottom:4.1666666667vw;height:100%;width:50%;background:#ffd9b6;color:#353535;display:flex;flex-direction:column;align-items:center;text-align:center}@media(max-width: 1200px){.modal-upsale .offer{padding-top:60px;padding-bottom:84px}}@media(max-width: 900px){.modal-upsale .offer{width:100%;padding-top:176px;padding-bottom:0;justify-content:flex-start}}@media(max-width: 600px){.modal-upsale .offer{padding-top:105px;padding-bottom:0}}@media(max-width: 400px){.modal-upsale .offer{padding-top:75px;padding-bottom:0}}.modal-upsale .offer .action.decor{color:#353535;margin-top:30px}@media(max-width: 1200px){.modal-upsale .offer .action.decor{margin-left:-20px}}.modal-upsale .offer .h3{margin-bottom:1.1111111111vw}@media(max-width: 1200px){.modal-upsale .offer .h3{margin-bottom:16px}}@media(max-width: 600px){.modal-upsale .offer .h3{margin-bottom:14px}}@media(max-width: 900px){.modal-upsale .offer .h3{font-size:40px;line-height:1.1}}@media(max-width: 600px){.modal-upsale .offer .h3{font-size:24px}}.modal-upsale .offer .room-preview{position:relative;display:none}@media(max-width: 900px){.modal-upsale .offer .room-preview{display:block;width:100%;height:300px;margin-bottom:40px}}.modal-upsale .offer .room-preview .room-preview-img{width:100%;height:100%;object-fit:cover}.modal-upsale .offer .room-preview .h6.square{color:#fff;opacity:.8;position:absolute;top:14px;left:16px}.modal-upsale .offer .room-preview .h6{color:#fff;opacity:.8;position:absolute;bottom:50px;left:16px}.modal-upsale .offer .room-preview .h3{color:#fff;opacity:1;position:absolute;bottom:0;left:16px}.modal-upsale .offer .text{margin-bottom:2.7777777778vw;width:50%;max-width:100%;opacity:.5}@media(max-width: 1200px){.modal-upsale .offer .text{margin-bottom:40px}}@media(max-width: 900px){.modal-upsale .offer .text{margin-bottom:32px}}@media(max-width: 1200px){.modal-upsale .offer .text{width:368px}}@media(max-width: 900px){.modal-upsale .offer .text{width:464px;margin-bottom:40px;margin-right:auto;margin-left:auto}}@media(max-width: 600px){.modal-upsale .offer .text{width:calc(100% - 46px);margin-bottom:30px}}.modal-upsale .offer .h4{text-transform:capitalize}@media(max-width: 1200px){.modal-upsale .offer .h4{margin-bottom:8px}}@media(max-width: 900px){.modal-upsale .offer .h4{font-size:24px;line-height:1.1;margin-bottom:16px}}@media(max-width: 600px){.modal-upsale .offer .h4{font-size:18px;margin-bottom:8px}}.modal-upsale .offer .gallery{margin-bottom:2.2222222222vw;width:16.6666666667vw;height:17.2222222222vw;display:block}@media(max-width: 1200px){.modal-upsale .offer .gallery{margin-bottom:32px}}@media(max-width: 600px){.modal-upsale .offer .gallery{margin-bottom:24px}}@media(max-width: 1200px){.modal-upsale .offer .gallery{width:243.6px;height:275.03px}}@media(max-width: 900px){.modal-upsale .offer .gallery{width:365px;height:410px;margin-bottom:40px;display:none}}.modal-upsale .offer .gallery .gallery-item{width:100%;height:100%;object-fit:cover}@media(max-width: 900px){.modal-upsale .offer .gallery .gallery-item{display:none}}.modal-upsale .offer .h6{opacity:.5;margin-bottom:auto}.modal-upsale .offer a{color:#353535}@media(max-width: 900px){.modal-upsale .offer{display:block;overflow:auto}}.modal-upsale .offer .price{display:block;margin-bottom:auto}@media(max-width: 900px){.modal-upsale .offer .price{display:none}}.modal-upsale .offer .price-mob,.modal-upsale .offer .more-mob{display:none;margin-bottom:50px;height:30px}@media(max-width: 900px){.modal-upsale .offer .price-mob,.modal-upsale .offer .more-mob{display:block}}.modal-upsale .offer .more-mob{position:relative}.modal-upsale .offer .more-mob img{position:absolute;width:1.9444444444vw;height:1.3888888889vw;top:50%;left:50%;transform:translate(-50%, -50%) rotate(90deg)}@media(max-width: 1200px){.modal-upsale .offer .more-mob img{width:28px;height:20px}}.modal-upsale .offer .slider-mob{cursor:inherit;display:none}@media(max-width: 900px){.modal-upsale .offer .slider-mob{display:flex}}.modal-upsale .offer .slider-mob.slider-wrapper{width:100%}.modal-upsale .offer .slider-mob.slider-wrapper.numbering{margin-bottom:90px}@media(max-width: 900px){.modal-upsale .offer .slider-mob.slider-wrapper .heading{margin-bottom:0px}}.modal-upsale .offer .slider-mob.slider-wrapper .content{width:100%;display:block;overflow:hidden}.modal-upsale .offer .slider-mob.slider-wrapper .slider-main{width:526px !important}@media(max-width: 600px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-main{width:368px !important}}@media(max-width: 400px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-main{width:343px !important}}.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews{width:1578px}@media(max-width: 600px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews{width:1104px}}@media(max-width: 400px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews{width:1029px}}.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews span{width:526px;height:358px !important;border-color:#ffd9b6;border-top-width:32px;border-bottom-width:32px;border-left-width:36px;border-right-width:36px}@media(max-width: 600px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews span{width:368px;height:250px !important;border-top-width:30px;border-bottom-width:30px;border-left-width:16px;border-right-width:16px}}@media(max-width: 400px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-previews span{width:343px;height:232px !important;border-top-width:21px;border-bottom-width:21px;border-left-width:8px;border-right-width:8px}}.modal-upsale .offer .slider-mob.slider-wrapper .slider{height:358px !important}@media(max-width: 600px){.modal-upsale .offer .slider-mob.slider-wrapper .slider{height:244px !important}}@media(max-width: 400px){.modal-upsale .offer .slider-mob.slider-wrapper .slider{height:230px !important}}.modal-upsale .offer .slider-mob.slider-wrapper .swiper-numbers{top:calc(100% + 16px)}.modal-upsale .offer .slider-mob.slider-wrapper .slider-prev,.modal-upsale .offer .slider-mob.slider-wrapper .slider-next{width:40vw}.modal-upsale .offer .slider-mob.slider-wrapper .slider-prev .relative-wrap .icon-btn,.modal-upsale .offer .slider-mob.slider-wrapper .slider-next .relative-wrap .icon-btn{background-image:url("/img/icons/arrow-right.svg")}.modal-upsale .offer .slider-mob.slider-wrapper .slider-prev .relative-wrap .icon-btn{left:20%}.modal-upsale .offer .slider-mob.slider-wrapper .slider-next .relative-wrap .icon-btn{right:20%}@media(max-width: 900px){.modal-upsale .offer .slider-mob.slider-wrapper .slider-prev:hover~.slider-cursor,.modal-upsale .offer .slider-mob.slider-wrapper .slider-next:hover~.slider-cursor{opacity:0}}.modal-upsale .features{display:none}@media(max-width: 900px){.modal-upsale .features{display:block;background:#122223;color:#fff;padding:100px 0 48px}}.modal-upsale .button-desktop{display:block}@media(max-width: 900px){.modal-upsale .button-desktop{display:none}}.modal-upsale .bottom-wrap{display:none;padding:7.2222222222vw 0 4.1666666667vw;text-align:center;background:#122223}@media(max-width: 900px){.modal-upsale .bottom-wrap{display:block;padding:7.2222222222vw 1.3888888889vw 0}}.modal-upsale .bottom-wrap .button{background:#ffe7d0;color:#122223;border:1px solid #ffe7d0;width:calc(100% + 5.5555555556vw);margin:0 -2.7777777778vw -2.7777777778vw -2.7777777778vw;transition:background-color .3s ease-in-out}.modal-upsale .bottom-wrap .button:hover{background:#122223;color:#ffe7d0}@media(max-width: 1200px){.modal-upsale .bottom-wrap .button{width:calc(100% + 48px);margin:0 -24px -24px -24px;font-size:12px}}@media(max-width: 900px){.modal-upsale .bottom-wrap .button{width:100%;margin:0 auto}}.op-0{opacity:0}.thanks-title.h4{font-style:normal;font-weight:400;font-size:12px !important;color:#fff;font-family:"Apercu Pro";cursor:pointer;text-transform:uppercase !important}', ""]), e.exports = r
    }
  }
]);