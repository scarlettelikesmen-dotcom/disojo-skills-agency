/* https://verholy.com/_nuxt/e8976b2.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [21], {
    790: function(t, e, r) {
      var content = r(930);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("894d331c", content, !0, {
        sourceMap: !1
      })
    },
    929: function(t, e, r) {
      "use strict";
      r(790)
    },
    930: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, "", ""]), t.exports = n
    },
    983: function(t, e, r) {
      "use strict";
      r.r(e);
      r(11);
      var n = r(63),
        o = r(1),
        l = (r(13), r(659)),
        c = r(663),
        h = r(680),
        d = r(715),
        y = r(662),
        _ = r(661),
        m = r(656),
        f = {
          fetch: function(t) {
            return Object(o.a)(regeneratorRuntime.mark((function e() {
              var r;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, t.route, e.next = 3, r.dispatch("getPhytoBar");
                  case 3:
                    return e.next = 5, r.dispatch("getLobbyBar");
                  case 5:
                    return e.next = 7, r.dispatch("getFoodForest");
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, r, o, l = t.$route;
            return {
              title: (null === (e = this.getLang(this.state.phytoBar.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(n.a)(Object(m.b)({
                url: l.path,
                title: null === (r = this.getLang(this.state.phytoBar.meta_tags)[0]) || void 0 === r ? void 0 : r.attributes.title,
                description: null === (o = this.getLang(this.state.phytoBar.meta_tags)[0]) || void 0 === o ? void 0 : o.attributes.description
              }))
            }
          },
          components: {
            AppGreet: l.a,
            AppTitleDescriptionImages: c.a,
            AppDescriptionInfo: h.a,
            AppMenuWithPdf: d.a,
            AppSlider: y.a,
            AppDiscover: _.a
          }
        },
        B = (r(929), r(4)),
        component = Object(B.a)(f, (function() {
          var t = this,
            e = t._self._c;
          return e("div", [e("app-greet", {
            attrs: {
              subtitle: t.demo.foodDrink.phyto.greet.subtitle,
              title: t.getLang(t.state.phytoBar.title),
              img: t.state.phytoBar.main_photo,
              info: JSON.parse(t.state.phytoBar.information),
              page_name: "phyto_bar_page"
            }
          }), t._v(" "), null != t.getLang(t.state.phytoBar.description)[0] && 0 != t.getLang(t.state.phytoBar.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.phytoBar.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.phytoBar.description)[0].attributes.main_description,
              description: t.getLang(t.state.phytoBar.description)[0].attributes.short_description,
              images: t.state.phytoBar.background_images,
              lineSrc: t.demo.foodDrink.phyto.titleDescriptionImages.lineSrc,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.phytoBar.menu_block).length > 0 && t.state.phytoBar.menu_image ? e("app-menu-with-pdf", {
            attrs: {
              text: t.getLang(t.state.phytoBar.menu_block),
              img: t.state.phytoBar.menu_image,
              list: JSON.parse(t.state.phytoBar.pdf_list)[t.lang]
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.phytoBar.gallery_title)[0] && t.getLang(t.state.phytoBar.gallery_title)[0].attributes.title && JSON.parse(t.state.phytoBar.gallery_images).length > 0 ? e("app-slider", {
            attrs: {
              title: t.getLang(t.state.phytoBar.gallery_title)[0].attributes.title,
              slides: JSON.parse(t.state.phytoBar.gallery_images),
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