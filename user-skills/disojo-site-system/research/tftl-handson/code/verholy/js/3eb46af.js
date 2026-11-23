/* https://verholy.com/_nuxt/3eb46af.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [23], {
    792: function(t, e, n) {
      var content = n(934);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, n(10).default)("f0270d74", content, !0, {
        sourceMap: !1
      })
    },
    933: function(t, e, n) {
      "use strict";
      n(792)
    },
    934: function(t, e, n) {
      var o = n(9)(!1);
      o.push([t.i, ".senoval .menu-card .lineSVG{top:-25%}", ""]), t.exports = o
    },
    985: function(t, e, n) {
      "use strict";
      n.r(e);
      n(11);
      var o = n(63),
        l = n(1),
        r = (n(13), n(659)),
        c = n(663),
        v = n(680),
        d = n(715),
        m = n(662),
        _ = n(661),
        f = n(656),
        h = {
          fetch: function(t) {
            return Object(l.a)(regeneratorRuntime.mark((function e() {
              var n;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.store, t.route, e.next = 3, n.dispatch("getSenoval");
                  case 3:
                    return e.next = 5, n.dispatch("getFoodForest");
                  case 5:
                    return e.next = 7, n.dispatch("getLobbyBar");
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, n, l, r = t.$route;
            return {
              title: (null === (e = this.getLang(this.state.senoval.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(o.a)(Object(f.b)({
                url: r.path,
                title: null === (n = this.getLang(this.state.senoval.meta_tags)[0]) || void 0 === n ? void 0 : n.attributes.title,
                description: null === (l = this.getLang(this.state.senoval.meta_tags)[0]) || void 0 === l ? void 0 : l.attributes.description
              }))
            }
          },
          components: {
            AppGreet: r.a,
            AppTitleDescriptionImages: c.a,
            AppDescriptionInfo: v.a,
            AppMenuWithPdf: d.a,
            AppSlider: m.a,
            AppDiscover: _.a
          }
        },
        L = (n(933), n(4)),
        component = Object(L.a)(h, (function() {
          var t = this,
            e = t._self._c;
          return e("div", {
            staticClass: "senoval"
          }, [e("app-greet", {
            attrs: {
              subtitle: t.demo.foodDrink.senoval.greet.subtitle,
              title: t.getLang(t.state.senoval.title),
              img: t.state.senoval.main_photo,
              info: JSON.parse(t.state.senoval.information)
            }
          }), t._v(" "), null != t.getLang(t.state.senoval.description)[0] && 0 != t.getLang(t.state.senoval.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.senoval.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.senoval.description)[0].attributes.main_description,
              description: t.getLang(t.state.senoval.description)[0].attributes.short_description,
              images: t.state.senoval.background_images,
              lineSrc: t.demo.foodDrink.senoval.titleDescriptionImages.lineSrc,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.senoval.menu_block).length > 0 && t.state.senoval.menu_image ? e("app-menu-with-pdf", {
            attrs: {
              text: t.getLang(t.state.senoval.menu_block),
              img: t.state.senoval.menu_image,
              list: JSON.parse(t.state.senoval.pdf_list)[t.lang]
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.senoval.gallery_title)[0] && t.getLang(t.state.senoval.gallery_title)[0].attributes.title && JSON.parse(t.state.senoval.gallery_images).length > 0 ? e("app-slider", {
            attrs: {
              title: t.getLang(t.state.senoval.gallery_title)[0].attributes.title,
              slides: JSON.parse(t.state.senoval.gallery_images),
              numbering: !0,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), e("app-discover", {
            attrs: {
              blocks: [t.state.foodForest, t.state.lobbyBar].filter(Boolean)
            }
          })], 1)
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);