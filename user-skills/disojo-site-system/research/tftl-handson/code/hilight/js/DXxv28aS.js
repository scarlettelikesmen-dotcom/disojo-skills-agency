/* https://hilight.design/_nuxt/DXxv28aS.js */
import {
  d as ne,
  u as he,
  p as _e,
  P as te,
  b as ve,
  s as ae,
  c as b,
  o as p,
  e as a,
  h as U,
  r as D,
  k as X,
  l as ge,
  v as Ie,
  A as ke,
  m as O,
  I as Ce,
  a0 as Fe,
  n as se,
  N as Me,
  t as L,
  j as oe,
  F as Be,
  y as De,
  f as q,
  w as ye,
  L as Oe,
  z as $e,
  a1 as We,
  T as Ve,
  C as me
} from "#entry";
import {
  i as pe,
  a as He
} from "./B42LVb-8.js";
import {
  s as ze
} from "./Fjg1XfjS.js";
import {
  _ as Ne
} from "./V1AwDJuM.js";
import {
  _ as Xe
} from "./lKvBwyz6.js";
import {
  u as Ge
} from "./BNv4j3uM.js";
const je = ["src"],
  k = 28,
  N = 20,
  qe = "curl",
  Ye = `#version 300 es
precision mediump float;
uniform sampler2D uTex;
in vec2 vUv;
in float vShade;
in float vBack;
out vec4 frag;
void main() {
  vec2 uv = vec2(vBack > 0.5 ? 1.0 - vUv.x : vUv.x, vUv.y);
  vec3 color = texture(uTex, uv).rgb;
  if (vBack > 0.5) color *= 0.94;
  color *= mix(1.0, 0.32, clamp(vShade, 0.0, 1.0));
  frag = vec4(color, 1.0);
}`,
  Ke = ne({
    __name: "InfoCurl",
    props: {
      media: {}
    },
    setup(r) {
      const h = r,
        {
          isMobile: f
        } = he(),
        v = D(null),
        g = D(null),
        w = D(null),
        d = D(null),
        _ = D(!1),
        y = ge(() => _.value && pe(h.media.original) ? Fe(h.media.original) : "");
      let c = () => {},
        x = !1,
        E = null;
      const $ = () => {
          if (x) return;
          const o = v.value,
            n = g.value,
            s = w.value;
          if (!o || !n || !s) return;
          x = !0;
          const t = d.value;
          t && (t.muted = !0), c = Y(o, n, s, t, () => f.value ? h.media.large : h.media.extra)
        },
        W = async () => {
          x || (pe(h.media.original) && (_.value = !0, await ke()), $())
        }, G = () => {
          if (x || E) return;
          const o = v.value;
          o && (E = new IntersectionObserver(([n]) => {
            n?.isIntersecting && (E?.disconnect(), E = null, W())
          }, {
            rootMargin: "100% 0px",
            threshold: 0
          }), E.observe(o))
        };
      _e(() => {
        const o = te("preloader-done"),
          n = te("transition-done");
        o.value && n.value && G()
      }), ve(G), ae(() => {
        E?.disconnect(), E = null, c()
      });

      function Y(o, n, s, t, T) {
        let i = !0,
          u = null,
          S = null,
          P = null,
          e = null,
          m = 0,
          Q = -1,
          Z = () => {};
        const H = {
            t: 0
          },
          C = {
            w: 1,
            h: 1
          },
          we = async () => {
            const l = await be();
            if (!i || !l) return;
            const F = n.getContext("webgl2", {
              alpha: !0,
              antialias: !0,
              depth: !0,
              premultipliedAlpha: !0
            });
            if (!F || !i) return;
            e = F, K(o, n, l.width, l.height);
            const M = Te(e, Ee(), Ye),
              le = e.createBuffer(),
              J = e.createTexture();
            if (!le || !J) return;
            e.bindBuffer(e.ARRAY_BUFFER, le), e.bufferData(e.ARRAY_BUFFER, xe(), e.STATIC_DRAW), e.useProgram(M), e.enableVertexAttribArray(0), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 16, 0), e.enableVertexAttribArray(1), e.vertexAttribPointer(1, 2, e.FLOAT, !1, 16, 8), e.bindTexture(e.TEXTURE_2D, J), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
            let ce = !1;
            const ee = () => {
              e && (e.bindTexture(e.TEXTURE_2D, J), ce || (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, l.width, l.height, 0, e.RGBA, e.UNSIGNED_BYTE, null), ce = !0), e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, l.el))
            };
            (!(l.el instanceof HTMLVideoElement) || l.el.readyState >= 2) && ee();
            const Se = V(e, M, "uTex"),
              Pe = V(e, M, "uT"),
              Ae = V(e, M, "uPage"),
              Re = V(e, M, "uView"),
              Le = V(e, M, "uFlip");
            e.uniform1i(Se, 0), e.uniform1f(Le, l.flip), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.disable(e.CULL_FACE);
            const z = R => {
                if (!e) return;
                const A = n.clientWidth,
                  I = n.clientHeight;
                if (!A || !I) return;
                e.uniform1f(Pe, R), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.drawArrays(e.TRIANGLES, 0, k * N * 6);
                const B = Math.sin(Math.PI * R);
                s.style.opacity = String(.28 + B * .35), s.style.transform = `translate(-50%, -50%) scale(${1+B*.08}, ${.7+B*.5})`
              },
              ue = () => {
                if (!e) return;
                const R = Math.min(window.devicePixelRatio || 1, 2),
                  A = n.clientWidth,
                  I = n.clientHeight;
                if (!A || !I) return;
                const B = Math.round(A * R),
                  de = Math.round(I * R);
                (n.width !== B || n.height !== de) && (n.width = B, n.height = de);
                const fe = j(l.width, l.height, o.clientWidth, o.clientHeight);
                C.w = fe.pageW, C.h = fe.pageH, e.viewport(0, 0, n.width, n.height), e.uniform2f(Ae, C.w, C.h), e.uniform2f(Re, A, I), e.clearColor(0, 0, 0, 0), s.style.left = `${o.clientWidth/2}px`, s.style.top = `${o.clientHeight/2+C.h*.46}px`, s.style.width = `${C.w*.92}px`, z(H.t)
              };
            ue(), S = new ResizeObserver(ue), S.observe(n);
            const Ue = o.closest("section");
            if (u = O.context(() => {
                O.to(H, {
                  t: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: Ue || o,
                    start: "top top",
                    end: "bottom center",
                    scrub: !0,
                    invalidateOnRefresh: !0
                  },
                  onUpdate: () => z(H.t)
                })
              }, o), z(0), t) {
              Z = () => {
                !i || t.readyState < 2 || (Q = t.currentTime, ee(), z(H.t))
              }, t.addEventListener("loadeddata", Z);
              const R = () => {
                  m = 0, !(!i || t.paused) && (t.readyState >= 2 && t.currentTime !== Q && (Q = t.currentTime, ee(), z(H.t)), m = requestAnimationFrame(R))
                },
                A = () => {
                  !i || t.paused || m || (m = requestAnimationFrame(R))
                };
              t.addEventListener("play", A), t.addEventListener("playing", A), P = new IntersectionObserver(([I]) => {
                if (!I?.isIntersecting) {
                  t.pause();
                  return
                }
                t.play().catch(() => {})
              }, {
                rootMargin: "200px 0px",
                threshold: 0
              }), P.observe(o), A()
            }
            i || ie()
          }, be = async () => {
            if (t) return t.readyState < 1 && (t.load(), await new Promise(F => {
              if (t.readyState >= 1) {
                F();
                return
              }
              t.addEventListener("loadedmetadata", () => F(), {
                once: !0
              }), t.addEventListener("error", () => F(), {
                once: !0
              })
            })), !i || !t.videoWidth ? null : {
              el: t,
              width: t.videoWidth,
              height: t.videoHeight,
              flip: 0
            };
            const l = new Image;
            l.crossOrigin = "anonymous", l.src = Ce(T());
            try {
              await l.decode()
            } catch {
              return null
            }
            return !i || !l.naturalWidth ? null : {
              el: l,
              width: l.naturalWidth,
              height: l.naturalHeight,
              flip: 1
            }
          }, ie = () => {
            i = !1, S?.disconnect(), S = null, P?.disconnect(), P = null, u?.revert(), u = null, t && t.removeEventListener("loadeddata", Z), m && cancelAnimationFrame(m), t?.pause(), e?.getExtension("WEBGL_lose_context")?.loseContext(), e = null
          };
        return we(), ie
      }

      function K(o, n, s, t) {
        o.style.position = "relative", o.style.inset = "auto", o.style.width = "100%", o.style.height = "auto", o.style.aspectRatio = `${s} / ${t}`, n.style.inset = "auto", n.style.left = "50%", n.style.top = "50%", n.style.width = "150%", n.style.height = "180%", n.style.transform = "translate(-50%, -50%)"
      }

      function j(o, n, s, t) {
        const T = n / o || 1;
        let i = s,
          u = i * T;
        return t && u > t && (u = t, i = u / T), {
          pageW: i,
          pageH: u
        }
      }

      function xe() {
        const o = new Float32Array(k * N * 6 * 4);
        let n = 0;
        const s = (t, T, i, u) => {
          o[n] = t, o[n + 1] = T, o[n + 2] = i, o[n + 3] = u, n += 4
        };
        for (let t = 0; t < N; t++)
          for (let T = 0; T < k; T++) {
            const i = T / k,
              u = (T + 1) / k,
              S = t / N,
              P = (t + 1) / N,
              e = (i + u) / 2,
              m = (S + P) / 2;
            s(i, S, e, m), s(u, S, e, m), s(i, P, e, m), s(u, S, e, m), s(u, P, e, m), s(i, P, e, m)
          }
        return o
      }

      function Ee() {
        return `#version 300 es
layout(location = 0) in vec2 aUv;
layout(location = 1) in vec2 aMid;
uniform float uT;
uniform float uFlip;
uniform vec2 uPage;
uniform vec2 uView;
out vec2 vUv;
out float vShade;
out float vBack;

const float PI = 3.14159265;
const float COLS_F = ${k}.0;

float angAt(float u, float v, float t) {
  float radius = 0.12 + 0.035 * sin(PI * t);
  float rise = sin(min(1.0, t / 0.28) * PI * 0.5);
  float fall = pow(max(0.0, 1.0 - max(0.0, t - 0.12) / 0.7), 1.25);
  float fold = 1.05 - t * 1.68 - rise * fall * 0.38 * pow(1.0 - v, 1.2);
  float dist = u - fold;
  if (dist <= 0.0) return 0.0;
  return -min(dist / radius, PI);
}

float shadeAt(float ang) {
  float theta = clamp(-ang, 0.0, PI);
  if (theta <= 0.001) return 0.0;
  if (theta >= PI - 0.001) return 0.08;
  return exp(-theta * 2.1) * 0.62;
}

void curl(float u, float v, float t, float pageW, out float x, out float z) {
  x = 0.0;
  z = 0.0;
  float seg = pageW / COLS_F;
  float steps = floor(u * COLS_F + 0.0001);
  for (int i = 1; i <= ${k}; i++) {
    float on = float(i) <= steps ? 1.0 : 0.0;
    float u0 = float(i - 1) / COLS_F;
    float u1 = float(i) / COLS_F;
    float a = angAt((u0 + u1) * 0.5, v, t);
    x += cos(a) * seg * on;
    z += -sin(a) * seg * on;
  }
}

void main() {
  float x;
  float z;
  float cx;
  float cz;
  curl(aUv.x, aUv.y, uT, uPage.x, x, z);
  curl(0.5, 0.5, uT, uPage.x, cx, cz);
  x -= cx;
  float y = (aUv.y - 0.5) * uPage.y;
  float persp = max(uPage.x, uPage.y) * 3.4;
  float k = persp / (persp - z);
  float sx = uView.x * 0.5 + x * k;
  float sy = uView.y * 0.5 + y * k;
  float depth = clamp(z / max(uPage.x, 1.0), 0.0, 1.0);
  gl_Position = vec4(
    sx / uView.x * 2.0 - 1.0,
    1.0 - sy / uView.y * 2.0,
    1.0 - depth * 2.0,
    1.0
  );
  vUv = vec2(aUv.x, mix(aUv.y, 1.0 - aUv.y, uFlip));
  vShade = shadeAt(angAt(aUv.x, aUv.y, uT));
  vBack = cos(angAt(aMid.x, aMid.y, uT)) < 0.0 ? 1.0 : 0.0;
}`
      }

      function V(o, n, s) {
        const t = o.getUniformLocation(n, s);
        if (!t) throw new Error(s);
        return t
      }

      function Te(o, n, s) {
        const t = o.createProgram();
        if (!t) throw new Error("program");
        if (o.attachShader(t, re(o, o.VERTEX_SHADER, n)), o.attachShader(t, re(o, o.FRAGMENT_SHADER, s)), o.linkProgram(t), !o.getProgramParameter(t, o.LINK_STATUS)) throw new Error(o.getProgramInfoLog(t) || "link");
        return t
      }

      function re(o, n, s) {
        const t = o.createShader(n);
        if (!t) throw new Error("shader");
        if (o.shaderSource(t, s), o.compileShader(t), !o.getShaderParameter(t, o.COMPILE_STATUS)) throw new Error(o.getShaderInfoLog(t) || "compile");
        return t
      }
      return (o, n) => (p(), b("div", {
        ref_key: "rootEl",
        ref: v,
        class: Ie(qe)
      }, [a("div", {
        ref_key: "shadowEl",
        ref: w,
        class: "shadow"
      }, null, 512), a("canvas", {
        ref_key: "canvasEl",
        ref: g,
        class: "sheet"
      }, null, 512), X(y) ? (p(), b("video", {
        key: 0,
        ref_key: "videoEl",
        ref: d,
        class: "source",
        crossorigin: "anonymous",
        src: X(y),
        muted: "",
        loop: "",
        playsinline: "",
        preload: "none"
      }, [...n[0] || (n[0] = [a("track", {
        kind: "captions",
        srclang: "en",
        label: "English",
        src: "/captions/silent.vtt",
        default: ""
      }, null, -1)])], 8, je)) : U("", !0)], 512))
    }
  }),
  Qe = Object.assign(se(Ke, [
    ["__scopeId", "data-v-3d9a1195"]
  ]), {
    __name: "PageMainInfoCurl"
  }),
  Ze = {
    class: "col col-1"
  },
  Je = {
    class: "head"
  },
  et = {
    class: "info-title l2",
    "data-text-anim": ""
  },
  tt = {
    class: "body"
  },
  ot = {
    class: "info-text h2-light",
    "data-text-anim": ""
  },
  nt = {
    class: "col col-2"
  },
  at = {
    class: "photo-sticky"
  },
  st = {
    class: "info-media-wrap"
  },
  rt = {
    key: 0,
    class: "info-media"
  },
  it = {
    class: "col col-3"
  },
  lt = {
    class: "head"
  },
  ct = ["innerHTML"],
  ut = {
    key: 0,
    class: "info-services"
  },
  dt = {
    class: "services-list"
  },
  ft = {
    class: "body"
  },
  mt = {
    class: "info-descr2 h2-light"
  },
  pt = {
    class: "info-media-wrap-mob"
  },
  ht = {
    key: 0,
    class: "info-media"
  },
  _t = {
    class: "info-btn-wrap"
  },
  vt = {
    key: 0,
    class: "info-more"
  },
  gt = {
    class: "more-item"
  },
  yt = {
    class: "more-item-title l2",
    "data-text-anim": ""
  },
  xt = {
    class: "p2",
    "data-text-anim": ""
  },
  Et = {
    class: "more-item"
  },
  Tt = {
    class: "more-item-title l2",
    "data-text-anim": ""
  },
  wt = {
    class: "p2",
    "data-text-anim": ""
  },
  bt = ne({
    __name: "Info",
    props: {
      data: {}
    },
    setup(r) {
      const h = r,
        {
          name: f
        } = Me(),
        {
          isDesktop: v
        } = he(),
        g = D(null);
      ve(() => {
        v.value && y()
      });
      const w = ge(() => ze(h.data.descr1));
      let d = null;
      const _ = c => {
          const x = c.querySelector(".info-media-wrap");
          x && (d?.scrollTrigger?.kill(), d?.kill(), d = O.fromTo(x, {
            xPercent: 0
          }, {
            xPercent: -300,
            ease: "In",
            scrollTrigger: {
              trigger: c,
              start: "top top",
              end: "bottom center",
              scrub: !0
            }
          }))
        },
        y = () => {
          const c = g.value;
          if (!c) return;
          _(c);
          const x = c.querySelector(".info-descr2");
          if (!x) return;
          const {
            chars: E
          } = new We(x, {
            type: "chars",
            mask: "chars",
            smartWrap: !0,
            aria: "none"
          }), $ = O.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: c,
              start: "top top",
              end: "bottom 75%",
              scrub: 1
            }
          });
          E.forEach(W => {
            $.from(W, {
              opacity: .2
            })
          })
        };
      return ae(() => {
        d?.scrollTrigger?.kill(), d?.kill(), d = null
      }), (c, x) => {
        const E = Qe,
          $ = He,
          W = $e,
          G = Oe;
        return p(), b("section", {
          ref_key: "sectionEl",
          ref: g,
          class: "info"
        }, [a("div", Ze, [a("div", Je, [a("p", et, L(r.data.titleSmall), 1)]), a("div", tt, [a("h2", ot, L(r.data.title), 1)])]), a("div", nt, [a("div", at, [a("div", st, [r.data.media ? (p(), b("div", rt, [X(v) ? (p(), oe(E, {
          key: 0,
          media: r.data.media
        }, null, 8, ["media"])) : U("", !0)])) : U("", !0)])])]), a("div", it, [a("div", lt, [a("div", {
          class: "info-descr1 p1",
          "data-text-anim": "",
          innerHTML: X(w)
        }, null, 8, ct), r.data.services ? (p(), b("div", ut, [a("div", dt, [(p(!0), b(Be, null, De(r.data.services, (Y, K) => (p(), b("p", {
          key: K,
          class: "service-name p2",
          "data-text-anim": ""
        }, L(Y.split(" ").map(j => j.charAt(0).toUpperCase() + j.slice(1).toLowerCase()).join(" ")), 1))), 128))])])) : U("", !0)]), a("div", ft, [a("p", mt, L(r.data.descr2), 1), a("div", pt, [r.data.media ? (p(), b("div", ht, [q($, {
          media: r.data.media,
          inner: ""
        }, null, 8, ["media"])])) : U("", !0)]), a("div", _t, [String(X(f)).includes("about") ? U("", !0) : (p(), oe(G, {
          key: 0,
          to: "/services",
          "data-element-anim": ""
        }, {
          default: ye(() => [q(W, {
            text: c.$t("our_services"),
            border: ""
          }, null, 8, ["text"])]),
          _: 1
        }))]), r.data.philosophy ? (p(), b("div", vt, [a("div", gt, [a("p", yt, L(c.$t("philosophy")), 1), a("p", xt, L(r.data.philosophy), 1)]), a("div", Et, [a("p", Tt, L(c.$t("manifest")), 1), a("p", wt, L(r.data.manifest), 1)])])) : U("", !0)])])], 512)
      }
    }
  }),
  Mt = Object.assign(se(bt, [
    ["__scopeId", "data-v-31d7d434"]
  ]), {
    __name: "PageMainInfo"
  }),
  St = {
    class: "vimeo-popup"
  },
  Pt = ["aria-label"],
  At = ["src", "title"],
  Rt = ne({
    __name: "VimeoPopup",
    props: {
      src: {}
    },
    setup(r) {
      const h = te("video-popup-open");
      let f = !1;
      const v = () => {
          me(!0), O.fromTo(".vimeo-popup", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: .8,
            ease: "power2.out"
          })
        },
        g = () => {
          f || (f = !0, me(!1), O.to(".vimeo-popup", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: .8,
            ease: "power2.out",
            onComplete: () => {
              h.value = !1
            }
          }))
        };
      return _e(() => {
        document.documentElement.classList.add("vimeo-popup-open"), v()
      }), ae(() => {
        document.documentElement.classList.remove("vimeo-popup-open")
      }), Ge(g), (w, d) => {
        const _ = Ne,
          y = Xe;
        return p(), oe(Ve, {
          to: "body"
        }, [a("div", St, [a("button", {
          class: "close",
          type: "button",
          "aria-label": w.$t("close"),
          onClick: g
        }, [q(y, {
          white: ""
        }, {
          default: ye(() => [q(_)]),
          _: 1
        })], 8, Pt), r.src ? (p(), b("iframe", {
          key: 0,
          class: "player",
          src: r.src,
          title: w.$t("showreel"),
          allow: `
          autoplay;
          fullscreen;
          picture-in-picture;
          clipboard-write;
          encrypted-media;
          web-share;
        `,
          referrerpolicy: "strict-origin-when-cross-origin",
          allowfullscreen: ""
        }, null, 8, At)) : U("", !0)])])
      }
    }
  }),
  Bt = Object.assign(se(Rt, [
    ["__scopeId", "data-v-8a2d8742"]
  ]), {
    __name: "CommonVimeoPopup"
  });

function Dt(r) {
  const h = r.trim();
  if (!h) return "";
  let f;
  try {
    f = new URL(h)
  } catch {
    return ""
  }
  const v = f.hostname.replace(/^www\./, "");
  if (v !== "vimeo.com" && v !== "player.vimeo.com") return "";
  const g = f.pathname.match(/\/reviews\/[^/]+\/videos\/(\d+)/),
    w = f.pathname.match(/\/video\/(\d+)/),
    d = f.pathname.match(/^\/(\d+)(?:\/([A-Za-z0-9]+))?\/?$/);
  let _ = "",
    y = "";
  if (g ? _ = g[1] : w ? (_ = w[1], y = f.searchParams.get("h") || "") : d && (_ = d[1], y = d[2] || ""), !_) return "";
  const c = new URLSearchParams({
    autoplay: "1",
    title: "0",
    byline: "0",
    portrait: "0"
  });
  return y && c.set("h", y), `https://player.vimeo.com/video/${_}?${c.toString()}`
}
export {
  Mt as _, Bt as a, Dt as v
};