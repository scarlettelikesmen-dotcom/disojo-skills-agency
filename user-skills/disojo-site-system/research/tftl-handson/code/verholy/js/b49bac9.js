/* https://verholy.com/_nuxt/b49bac9.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [22], {
    791: function(t, e, o) {
      var content = o(932);
      content.__esModule && (content = content.default), "string" == typeof content && (content = [
        [t.i, content, ""]
      ]), content.locals && (t.exports = content.locals);
      (0, o(10).default)("5056058c", content, !0, {
        sourceMap: !1
      })
    },
    931: function(t, e, o) {
      "use strict";
      o(791)
    },
    932: function(t, e, o) {
      var r = o(9)(!1);
      r.push([t.i, "", ""]), t.exports = r
    },
    984: function(t, e, o) {
      "use strict";
      o.r(e);
      o(11);
      var r = o(63),
        n = o(1),
        l = (o(13), o(659)),
        c = o(663),
        d = o(680),
        _ = o(715),
        m = o(662),
        h = o(661),
        B = o(656),
        f = {
          fetch: function(t) {
            return Object(n.a)(regeneratorRuntime.mark((function e() {
              var o;
              return regeneratorRuntime.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.store, t.route, e.next = 3, o.dispatch("getPoolBar");
                  case 3:
                    return e.next = 5, o.dispatch("getLobbyBar");
                  case 5:
                    return e.next = 7, o.dispatch("getSenoval");
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))()
          },
          head: function(t) {
            var e, o, n, l = t.$route;
            return {
              title: (null === (e = this.getLang(this.state.poolBar.meta_tags)[0]) || void 0 === e ? void 0 : e.attributes.title) || "Verholy Relax Park",
              meta: Object(r.a)(Object(B.b)({
                url: l.path,
                title: null === (o = this.getLang(this.state.poolBar.meta_tags)[0]) || void 0 === o ? void 0 : o.attributes.title,
                description: null === (n = this.getLang(this.state.poolBar.meta_tags)[0]) || void 0 === n ? void 0 : n.attributes.description
              }))
            }
          },
          components: {
            AppGreet: l.a,
            AppTitleDescriptionImages: c.a,
            AppDescriptionInfo: d.a,
            AppMenuWithPdf: _.a,
            AppSlider: m.a,
            AppDiscover: h.a
          }
        },
        v = (o(931), o(4)),
        component = Object(v.a)(f, (function() {
          var t = this,
            e = t._self._c;
          return e("div", [e("app-greet", {
            attrs: {
              subtitle: t.demo.foodDrink.lobby.greet.subtitle,
              title: t.getLang(t.state.poolBar.title),
              img: t.state.poolBar.main_photo,
              info: JSON.parse(t.state.poolBar.information),
              page_name: "lobby_bar_page"
            }
          }), t._v(" "), null != t.getLang(t.state.poolBar.description)[0] && 0 != t.getLang(t.state.poolBar.description)[0].attributes.main_description.length && 0 != t.getLang(t.state.poolBar.description)[0].attributes.short_description.length ? e("app-title-description-images", {
            attrs: {
              title: t.getLang(t.state.poolBar.description)[0].attributes.main_description,
              description: t.getLang(t.state.poolBar.description)[0].attributes.short_description,
              images: t.state.poolBar.background_images,
              lineSrc: t.demo.foodDrink.lobby.titleDescriptionImages.lineSrc,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), t.getLang(t.state.poolBar.menu_block).length > 0 && t.state.poolBar.menu_image ? e("app-menu-with-pdf", {
            attrs: {
              text: t.getLang(t.state.poolBar.menu_block),
              img: t.state.poolBar.menu_image,
              list: JSON.parse(t.state.poolBar.pdf_list)[t.lang]
            }
          }) : t._e(), t._v(" "), null != t.getLang(t.state.poolBar.gallery_title)[0] && t.getLang(t.state.poolBar.gallery_title)[0].attributes.title && JSON.parse(t.state.poolBar.gallery_images).length > 0 ? e("app-slider", {
            attrs: {
              title: t.getLang(t.state.poolBar.gallery_title)[0].attributes.title,
              slides: JSON.parse(t.state.poolBar.gallery_images),
              numbering: !0,
              lineSenoval: !0
            }
          }) : t._e(), t._v(" "), e("app-discover", {
            attrs: {
              blocks: [t.state.senoval, t.state.lobbyBar].filter(Boolean)
            }
          })], 1)
        }), [], !1, null, null, null);
      e.default = component.exports
    }
  }
]);