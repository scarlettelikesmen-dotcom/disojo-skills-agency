/* https://verholy.com/_nuxt/282362f.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20], {
    789: function(t, e, r) {
      var content = r(928);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, r(10).default)("5073b22e", content, !0, {
        sourceMap: !1
      })
    },
    927: function(t, e, r) {
      "use strict";
      r(789)
    },
    928: function(t, e, r) {
      var n = r(9)(!1);
      n.push([t.i, "", ""]), t.exports = n
    },
    982: function(t, e, r) {
      "use strict";
      r.r(e);
      r(11);
      var n = r(63),
        o = r(1),
        l = (r(13), r(659)),
        c = r(663),
        d = r(680),
        y = r(715),
        _ = r(662),
        m = r(661),
        h = r(656),
        B = {
          fetch: function(t) {
            return Object(o.a)(regeneratorRuntime.mark((function e() {
              var r;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.store, t.route, e.next = 3, r.dispatch("getLobbyBar");
                  case 3:
                    return e.next = 5, r.dispatch("getSenoval");
                  case 5:
                    return e.next = 7, r.dispatch("getPhytoBar");
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
              title: (null === (e = this.getLang(this.state.lobbyBar.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(n.a)(Object(h.b)({
                url: l.path,
                title: null === (r = this.getLang(this.state.lobbyBar.meta_tags)[0]) || void 0 === r ? void 0 : r.attributes.title,
                description: null === (o = this.getLang(this.state.lobbyBar.meta_tags)[0]) || void 0 === o ? void 0 : o.attributes.description
              }))
            }
          },
          components: {
            AppGreet: l.a,
            AppTitleDescriptionImages: c.a,
            AppDescriptionInfo: d.a,
            AppMenuWithPdf: y.a,
            AppSlider: _.a,
            AppDiscover: m.a
          }
        },
        f = (r(927), r(4)),
        component = Object(f.a)(B, (function() {
          var t = this,
            e = t._self._c;
          return e("div", [e("app-greet", {
            attrs: {
              subtitle: t.demo.foodDrink.lobby.greet.subtitle,
              title: t.getLang(t.state.lobbyBar.title),
              img: t.state.lobbyBar.main_photo,
              info: JSON.parse(t.state.lobbyBar.information),
              page_name: "lobby_bar_page"
            }
          }), t._v(" "), null != t.getLang(t.state.lobbyBar.description)[0] && 0 != t.getLang(t.state.lobbyBar.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.lobbyBar.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.lobbyBar.description)[0].attributes.main_description,
              description: t.getLang(t.state.lobbyBar.description)[0].attributes.short_description,
              images: t.state.lobbyBar.background_images,
              lineSrc: t.demo.foodDrink.lobby.titleDescriptionImages.lineSrc,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.lobbyBar.menu_block).length > 0 && t.state.lobbyBar.menu_image ? e("app-menu-with-pdf", {
            attrs: {
              text: t.getLang(t.state.lobbyBar.menu_block),
              img: t.state.lobbyBar.menu_image,
              list: JSON.parse(t.state.lobbyBar.pdf_list)[t.lang]
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.lobbyBar.gallery_title)[0] && t.getLang(t.state.lobbyBar.gallery_title)[0].attributes.title && JSON.parse(t.state.lobbyBar.gallery_images).length > 0 ? e("app-slider", {
            attrs: {
              title: t.getLang(t.state.lobbyBar.gallery_title)[0].attributes.title,
              slides: JSON.parse(t.state.lobbyBar.gallery_images),
              numbering: !0,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), e("app-discover", {
            attrs: {
              blocks: [t.state.senoval, t.state.phytoBar].filter(Boolean)
            }
          })], 1)
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);