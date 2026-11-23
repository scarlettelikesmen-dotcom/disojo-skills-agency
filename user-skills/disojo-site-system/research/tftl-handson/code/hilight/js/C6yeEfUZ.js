/* https://hilight.design/_nuxt/C6yeEfUZ.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Bs3CAh5Y.js", "./CqkleIqs.js"]))) => i.map(i => d[i]);
import {
  d as e1,
  B as t1,
  c as u,
  r as B,
  F as z,
  y as N,
  A as o1,
  m as E,
  o as l,
  a8 as f1,
  aD as v1,
  k as i,
  j as s1,
  h as b,
  n as F,
  e,
  ag as h1,
  M as k1,
  G as g1,
  W as y1,
  aE as J,
  P as X,
  u as w1,
  b as L1,
  f as d,
  l as K,
  v as x1,
  t as c,
  E as b1,
  a5 as G,
  D as M1,
  w as Q,
  aC as $1,
  g as V1,
  Y as R,
  L as H1,
  S as S1,
  ah as I1,
  I as A1
} from "#entry";
import {
  _ as T1
} from "./lKvBwyz6.js";
import {
  a as P1
} from "./DX7rj7S8.js";
import {
  a as D1
} from "./B42LVb-8.js";
const E1 = e1({
    __name: "FixedMedia",
    props: {
      mediaList: {}
    },
    setup(V, {
      expose: r
    }) {
      const o = V,
        y = s => !!s?.original,
        _ = B(null),
        M = B([]),
        C = {
          x: 0,
          y: 0
        };
      let w = -1,
        Z = 1,
        A = null,
        L = null,
        v = null,
        p = !1,
        a = !1;
      const H = s => {
          M.value.includes(s) || (M.value = [...M.value, s])
        },
        g = () => _.value ? Array.from(_.value.querySelectorAll(".wrap-media")) : [],
        j = (s = C.x, $ = C.y, h = .8) => {
          _.value && (A?.kill(), A = E.to(_.value, {
            x: s,
            y: $,
            duration: h,
            ease: "power3.out"
          }))
        },
        T = () => {
          _.value && (v && (clearTimeout(v), v = null), L?.kill(), L = E.to(_.value, {
            scale: .95,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: .6,
            ease: "power3.in"
          }))
        },
        S = () => {
          _.value && (v && (clearTimeout(v), v = null), L?.kill(), L = E.to(_.value, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            duration: .8,
            ease: "power3.out"
          }))
        },
        U = s => {
          if (p = !0, C.x = s.clientX, C.y = s.clientY, !_.value) return;
          const $ = w === -1;
          j(C.x, C.y, $ ? 0 : .45), !a && y(o.mediaList[w]) && S()
        },
        W = () => {
          _.value && (p = !1, a = !1, T(), v = setTimeout(() => {
            w = -1
          }, 400))
        },
        q = s => {
          C.x = s.clientX, C.y = s.clientY, j(C.x, C.y)
        },
        I = async s => {
          if (w === s) return;
          if (!y(o.mediaList[s])) {
            w = s, p && T();
            return
          }
          H(s), await o1();
          const h = g()[s];
          if (!h) return;
          w = s, Z += 1, p && !a && S(), E.set(h, {
            zIndex: Z
          }), E.fromTo(h, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.2,
            ease: "power3.out"
          });
          const f = h.querySelector("video");
          f && (f.currentTime = 0, f.play())
        };
      return t1(() => {
        v && clearTimeout(v), A?.kill(), L?.kill()
      }), r({
        onEnter: U,
        onLeave: W,
        onMove: q,
        setActive: I,
        setSuppressed: s => {
          if (a !== s) {
            if (a = s, a) {
              T();
              return
            }
            p && y(o.mediaList[w]) && S()
          }
        }
      }), (s, $) => {
        const h = D1;
        return l(), u("div", {
          ref_key: "fixedMediaRef",
          ref: _,
          class: "fixed-media"
        }, [(l(!0), u(z, null, N(V.mediaList, (f, P) => f1((l(), u("div", {
          key: P,
          class: "wrap-media"
        }, [i(M).includes(P) && y(f) ? (l(), s1(h, {
          key: 0,
          media: f,
          inner: ""
        }, null, 8, ["media"])) : b("", !0)], 512)), [
          [v1, i(M).includes(P)]
        ])), 128))], 512)
      }
    }
  }),
  B1 = Object.assign(F(E1, [
    ["__scopeId", "data-v-0c117b32"]
  ]), {
    __name: "CommonFixedMedia"
  }),
  F1 = {},
  Z1 = {
    class: "icon",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function j1(V, r) {
  return l(), u("svg", Z1, [...r[0] || (r[0] = [e("path", {
    d: "M9.99741 1.66663C14.5997 1.66663 18.3307 5.39758 18.3307 9.99996C18.3307 14.6023 14.5997 18.3333 9.99741 18.3333C8.46916 18.3333 7.037 17.922 5.80563 17.2039L1.66755 18.3333L2.79418 14.1929C2.0757 12.9613 1.66406 11.5287 1.66406 9.99996C1.66406 5.39758 5.39502 1.66663 9.99741 1.66663ZM6.99018 6.09023C6.88235 6.09781 6.77664 6.12414 6.68039 6.17338C6.60818 6.21033 6.54115 6.26372 6.43582 6.36318C6.33636 6.45708 6.27872 6.5391 6.21799 6.61818C5.9099 7.01929 5.74432 7.51167 5.7474 8.01744C5.74907 8.42629 5.85527 8.82363 6.02299 9.19463C6.3631 9.94696 6.92398 10.7423 7.66486 11.4799C7.84283 11.657 8.01719 11.8361 8.2052 12.0016C9.12475 12.8113 10.2206 13.3951 11.4055 13.7068C11.4055 13.7068 11.8722 13.7785 11.879 13.7789C12.0336 13.7872 12.1879 13.776 12.3427 13.7681C12.5854 13.7556 12.8224 13.69 13.0369 13.5757C13.1748 13.5023 13.2401 13.4658 13.3558 13.3928C13.3558 13.3928 13.3913 13.3688 13.4598 13.3178C13.5723 13.234 13.6418 13.175 13.7354 13.0778C13.8044 13.0061 13.8637 12.9215 13.9096 12.826C13.9747 12.69 14.0403 12.4305 14.0664 12.2149C14.0863 12.0502 14.0803 11.9602 14.0782 11.9045C14.0746 11.8148 14.0005 11.7225 13.9193 11.6834L13.4347 11.4655C13.4347 11.4655 12.7102 11.1502 12.267 10.948C12.2208 10.927 12.1703 10.9172 12.1196 10.9141C12.0084 10.9073 11.8838 10.9363 11.8046 11.0198C11.8004 11.0181 11.7452 11.0658 11.1423 11.7962C11.1091 11.836 11.0312 11.9224 10.8964 11.9143C10.8761 11.9129 10.8558 11.91 10.8361 11.9048C10.7815 11.8904 10.7283 11.8714 10.6763 11.8494C10.5732 11.8056 10.5371 11.789 10.4667 11.7587C9.98558 11.5485 9.54408 11.2674 9.15383 10.9233C9.04916 10.8311 8.95183 10.7319 8.8515 10.6346C8.50133 10.2952 8.21465 9.93421 8.00139 9.57813C7.98975 9.55871 7.9718 9.53063 7.95248 9.49921C7.91759 9.44246 7.8791 9.37496 7.86704 9.32863C7.83606 9.20604 7.91824 9.10754 7.91824 9.10754C7.91824 9.10754 8.12107 8.88579 8.21531 8.76521C8.30598 8.64913 8.38425 8.53563 8.43408 8.45471C8.53225 8.2969 8.56333 8.13381 8.51175 8.00798C8.27795 7.438 8.03673 6.87109 7.78813 6.30741C7.73906 6.19617 7.59312 6.11534 7.4604 6.10002C7.41545 6.09483 7.37054 6.08961 7.3254 6.08664C7.21369 6.08119 7.10175 6.08239 6.99018 6.09023Z",
    fill: "#201805"
  }, null, -1)])])
}
const O1 = Object.assign(F(F1, [
    ["render", j1]
  ]), {
    __name: "IconWhatsapp"
  }),
  R1 = {},
  z1 = {
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1400",
    height: "208",
    viewBox: "0 0 1400 208",
    fill: "none"
  };

function N1(V, r) {
  return l(), u("svg", z1, [...r[0] || (r[0] = [h1('<path d="M748.871 207.12H754.324C793.525 207.12 821.503 196.657 838.258 175.73C841.894 183.6 844.66 192.065 846.557 202.617H888.998V90.9504H758.355V129.852H820.239C820.239 131.283 819.606 132.982 818.342 134.95C817.235 136.917 815.101 139.064 811.94 141.389C808.937 143.714 805.222 145.86 800.796 147.828C796.528 149.795 790.838 151.495 783.725 152.925C776.612 154.177 768.709 154.803 760.015 154.803C739.624 154.803 724.449 149.974 714.491 140.316C704.533 130.478 699.554 118.495 699.554 104.365V101.414C699.554 68.5034 719.866 52.0483 760.489 52.0483C769.815 52.0483 778.114 52.8532 785.385 54.4629C792.656 55.8938 798.109 57.593 801.745 59.5604C805.538 61.349 808.7 63.5848 811.229 66.2677L811.488 66.5426C813.829 69.0246 814.803 70.0576 815.413 71.6112H887.52C887.121 66.9594 886.35 62.4953 885.204 58.219C883.624 52.1377 880.146 45.4305 874.772 38.0972C869.556 30.5851 862.68 24.2355 854.144 19.0486C845.767 13.6828 833.753 9.21129 818.105 5.63408C802.614 1.87803 784.594 0 764.046 0H754.799C734.882 0 717.258 2.14632 701.925 6.43896C686.75 10.5527 674.658 15.9185 665.648 22.5364C656.797 28.9753 649.525 36.7558 643.835 45.8776C638.303 54.8206 634.588 63.5848 632.691 72.1701C630.794 80.5765 629.846 89.5195 629.846 98.9991V106.511C629.846 115.633 630.794 124.576 632.691 133.34C634.746 141.925 638.54 150.869 644.072 160.169C649.604 169.291 656.639 177.25 665.174 184.047C673.71 190.665 685.17 196.21 699.554 200.681C713.938 204.974 730.377 207.12 748.871 207.12Z" fill="#201805" fill-opacity="0.05"></path><path d="M0 202.604V2.60417H67.2025V76.3657H177.235V2.60417H244.201V202.604H177.235V128.313H67.2025V202.604H0Z" fill="#201805" fill-opacity="0.05"></path><path d="M358.34 2.61358H425.677V144.558H548.021V202.608H358.34V2.61358Z" fill="#201805" fill-opacity="0.05"></path><path d="M571.809 2.60417L504.444 2.60417C504.438 6.61465 504.43 10.156 504.422 14.1666C504.401 24.4087 504.38 34.652 504.408 44.8998C504.421 50.0875 504.377 54.7624 504.336 59.0021C503.959 98.5375 503.943 100.222 554.864 126.843C562.262 130.711 569.135 140.607 569.731 148.129C571.135 165.58 570.881 183.131 570.627 200.683L570.601 202.606H638.903C638.785 197.799 638.552 192.891 638.28 188.111C637.438 173.494 628.567 162.958 614.051 155.315C607.473 151.838 601.913 149.061 597.214 146.714C584.716 140.47 578.312 137.272 575.056 132.05C571.633 126.563 571.687 118.843 571.796 103.009C571.824 98.9926 571.855 94.4539 571.835 89.2973C571.741 61.7493 571.772 34.2014 571.804 6.65338L571.809 2.60417Z" fill="#201805" fill-opacity="0.05"></path><path d="M912.519 2.60417V202.604H979.523V140.514C982.838 140.526 985.926 140.556 988.81 140.585C1028.03 140.972 1029.7 140.988 1056.11 88.8073C1059.95 81.2259 1069.77 74.1834 1077.23 73.5726C1081.88 73.1864 1086.53 72.9226 1091.19 72.7484L1091.2 202.604H1158.2L1158.2 2.60417L1121.71 2.60417C1121.43 2.60417 1121.16 2.60792 1120.88 2.61537C1120.41 2.61538 1119.93 2.61537 1119.44 2.61536C1106.05 2.61536 1091.94 13.2809 1084.36 28.1562C1080.91 34.8969 1078.15 40.5946 1075.83 45.4095C1069.63 58.2166 1066.46 64.7791 1061.28 68.1162C1055.83 71.623 1048.18 71.5683 1032.47 71.4561C1028.48 71.4276 1023.98 71.3955 1018.86 71.4168C1005.75 71.4628 992.637 71.4793 979.523 71.4806V2.60417L912.519 2.60417Z" fill="#201805" fill-opacity="0.05"></path><path d="M1400 2.60417H1176.61V54.396H1254.8V202.603H1321.81V54.396H1400V2.60417Z" fill="#201805" fill-opacity="0.05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1383.48 169.28C1386.57 169.28 1389.37 170.015 1391.87 171.487C1394.4 172.928 1396.38 174.925 1397.81 177.478C1399.27 180 1400 182.825 1400 185.948C1400 189.07 1399.27 191.908 1397.81 194.46C1396.38 196.982 1394.4 198.98 1391.87 200.451C1389.37 201.893 1386.57 202.614 1383.48 202.614C1380.38 202.614 1377.57 201.893 1375.04 200.451C1372.54 198.98 1370.56 196.983 1369.1 194.46C1367.67 191.908 1366.96 189.07 1366.96 185.948C1366.96 182.825 1367.67 180 1369.1 177.478C1370.56 174.925 1372.54 172.928 1375.04 171.487C1377.57 170.015 1380.38 169.28 1383.48 169.28ZM1383.48 172.839C1381.01 172.839 1378.81 173.395 1376.87 174.506C1374.94 175.617 1373.43 177.163 1372.36 179.145C1371.29 181.127 1370.75 183.395 1370.75 185.948C1370.75 188.5 1371.29 190.767 1372.36 192.749C1373.43 194.731 1374.94 196.278 1376.87 197.389C1378.81 198.501 1381.01 199.055 1383.48 199.055C1385.95 199.055 1388.15 198.5 1390.09 197.389C1392.02 196.278 1393.52 194.731 1394.6 192.749C1395.67 190.767 1396.2 188.5 1396.2 185.948C1396.2 183.395 1395.67 181.127 1394.6 179.145C1393.52 177.163 1392.02 175.617 1390.09 174.506C1388.15 173.395 1385.95 172.839 1383.48 172.839Z" fill="#201805" fill-opacity="0.05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1384.8 176.818C1386.65 176.818 1388.17 177.382 1389.3 178.546L1389.51 178.766C1390.52 179.884 1391.01 181.323 1391.01 183.042C1391.01 184.809 1390.51 186.261 1389.48 187.346L1389.48 187.348C1389.16 187.716 1388.78 188.023 1388.36 188.268L1391.9 194.908H1386.99L1386.86 194.661L1384.06 189.267H1381.5V194.908H1377.07V176.818H1384.8ZM1384.69 184.912H1381.5V181.173H1384.69C1385.23 181.173 1385.64 181.351 1385.95 181.688L1385.96 181.7C1386.28 182.026 1386.46 182.46 1386.46 183.042C1386.46 183.625 1386.28 184.07 1385.95 184.415C1385.64 184.739 1385.24 184.912 1384.69 184.912Z" fill="#201805" fill-opacity="0.05"></path><path d="M334.83 2.60607V202.606H267.727V2.60607H334.83Z" fill="#201805" fill-opacity="0.05"></path>', 9)])])
}
const U1 = Object.assign(F(R1, [
    ["render", N1]
  ]), {
    __name: "IconLogoBigOverlay"
  }),
  W1 = {},
  q1 = {
    class: "icon",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Y1(V, r) {
  return l(), u("svg", q1, [...r[0] || (r[0] = [e("path", {
    d: "M16.4085 13.4746C18.047 12.6152 18.8666 11.5281 18.8666 10.482C18.8666 9.59184 18.2789 8.6747 17.0765 7.88178C15.9133 7.11469 14.2571 6.52635 12.3176 6.26024L12.3176 7.35114L10.967 7.35114L10.967 4L12.3176 4L12.3176 5.11915L12.3188 5.10973C14.4431 5.38201 16.3273 6.02384 17.6977 6.92753C19.0571 7.82404 20 9.04574 20 10.482C20 12.1683 18.7079 13.555 16.9322 14.4863C15.129 15.4321 12.6771 16 9.99992 16C7.32274 16 4.87089 15.4321 3.06764 14.4863C1.29199 13.555 -0.00015416 12.1683 -0.000154013 10.4819C-0.000153887 9.04573 0.942733 7.82404 2.30218 6.92753C3.65112 6.03795 5.49804 5.40213 7.58167 5.12276L7.58167 4L8.93225 4L8.93225 7.35114L7.58167 7.35114L7.58167 6.27437C5.68549 6.54679 4.06635 7.12798 2.92332 7.88177C1.72095 8.67469 1.13324 9.59184 1.13324 10.482C1.13324 11.5281 1.95283 12.6152 3.59139 13.4746C5.20235 14.3195 7.4672 14.8592 9.99992 14.8592C12.5326 14.8592 14.7975 14.3195 16.4085 13.4746Z",
    fill: "#201805",
    "fill-opacity": "0.4"
  }, null, -1)])])
}
const X1 = Object.assign(F(W1, [
    ["render", Y1]
  ]), {
    __name: "IconCompanyLogo"
  }),
  G1 = {
    class: "footer"
  },
  J1 = {
    class: "items"
  },
  K1 = {
    class: "p2",
    "data-text-anim": ""
  },
  Q1 = {
    class: "descr p2",
    "data-text-anim": ""
  },
  ee = {
    class: "links industries"
  },
  te = ["onClick"],
  oe = {
    class: "p2",
    "data-text-anim": ""
  },
  se = {
    class: "descr p2",
    "data-text-anim": ""
  },
  ne = {
    class: "links services"
  },
  ae = ["onClick"],
  ie = {
    class: "p2",
    "data-text-anim": ""
  },
  le = {
    class: "descr p2",
    "data-text-anim": ""
  },
  re = {
    class: "links about"
  },
  ce = ["onClick"],
  de = {
    class: "p2",
    "data-text-anim": ""
  },
  ue = {
    class: "descr p2",
    "data-text-anim": ""
  },
  pe = {
    class: "link"
  },
  _e = {
    key: 0,
    class: "items-last"
  },
  Ce = {
    class: "p2",
    "data-text-anim": ""
  },
  me = {
    class: "descr p2",
    "data-text-anim": ""
  },
  fe = {
    class: "contact-info"
  },
  ve = {
    class: "mail-info"
  },
  he = {
    class: "mail-title l2"
  },
  ke = {
    class: "mail-details"
  },
  ge = ["href"],
  ye = {
    class: "mail-info"
  },
  we = {
    class: "mail-title l2"
  },
  Le = {
    class: "mail-details"
  },
  xe = ["href"],
  be = ["href"],
  Me = {
    class: "logo-container"
  },
  $e = {
    class: "logo"
  },
  Ve = {
    class: "logo-wrap"
  },
  He = {
    class: "logo-overlay-wrap"
  },
  Se = {
    class: "foot"
  },
  Ie = {
    key: 0,
    class: "footer-text"
  },
  Ae = {
    class: "foot-wrap"
  },
  Te = {
    class: "copy l2"
  },
  Pe = {
    class: "legal-wrap"
  },
  De = ["href"],
  Ee = ["href"],
  Be = {
    class: "created l2"
  },
  Fe = {
    key: 0,
    class: "created-text"
  },
  Ze = {
    class: "company-logo"
  },
  je = e1({
    __name: "Footer",
    setup(V) {
      const {
        t: r
      } = k1(), {
        data: o
      } = g1("common"), y = y1(), _ = J().public.hideFeedAndCareer, M = X("cookie-state"), C = X("cookiebot-fallback", () => !1), w = X("cookie-reopen", () => !1), Z = String(J().public.cookiebotId || ""), A = K(() => !Z || C.value);

      function L() {
        w.value = !0, M.value.seen = !1
      }

      function v() {
        const t = window;
        if (C.value || t.__cookiebotUnauthorized) {
          L();
          return
        }
        const n = t.Cookiebot;
        if (n?.renew || n?.show) {
          const k = () => {
            window.removeEventListener("cookiebot-unauthorized", k), L()
          };
          window.addEventListener("cookiebot-unauthorized", k), window.setTimeout(() => window.removeEventListener("cookiebot-unauthorized", k), 4e3), n.renew ? n.renew() : n.show?.();
          return
        }
        L()
      }
      const p = [{
          title: r("projects"),
          descr: o.value?.footerProjectsDescr,
          media: o.value?.footerProjectsMedia,
          link: "/projects"
        }, {
          title: r("services"),
          descr: o.value?.footerServicesDescr,
          media: o.value?.footerServicesMedia,
          link: "/services"
        }, {
          title: r("about"),
          descr: o.value?.footerAboutDescr,
          media: o.value?.footerAboutMedia,
          link: "/about"
        }, {
          title: r("feed"),
          descr: o.value?.footerFeedDescr,
          media: o.value?.footerFeedMedia,
          link: "/feed"
        }, {
          title: r("contact"),
          descr: o.value?.footerContactDescr,
          media: ""
        }],
        a = B(),
        H = B(),
        g = B(null),
        j = K(() => p.slice(0, 4).map(t => t.media).filter(Boolean)),
        T = [{
          name: r("about"),
          hash: "#aboutInfo"
        }, {
          name: r("team"),
          hash: "#aboutTeam"
        }, {
          name: r("our_values"),
          hash: "#aboutValues"
        }],
        S = t => t instanceof Element && !!t.closest(".links, .link"),
        U = t => {
          g.value?.setSuppressed(S(t.target)), g.value?.onEnter(t)
        },
        W = () => {
          g.value?.setSuppressed(!1), g.value?.onLeave()
        },
        q = t => {
          g.value?.setSuppressed(S(t.target)), g.value?.onMove(t)
        },
        I = t => {
          g.value?.setActive(t)
        },
        Y = t => {
          R(y({
            path: "/projects/",
            query: t ? {
              industry: t
            } : void 0
          }))
        },
        s = t => {
          R(y(`/services/${t||""}`))
        },
        $ = () => {
          R(y("/contact"))
        },
        h = t => {
          R(y({
            path: "/about/",
            hash: t || void 0
          }))
        },
        {
          isDesktop: f
        } = w1();
      L1(async () => {
        f.value && (await o1(), P())
      }), t1(() => {
        f.value && a1()
      });
      const P = () => {
          S1.create({
            trigger: "footer.footer .foot",
            start: "top bottom",
            once: !0,
            onEnter: () => n1()
          })
        },
        n1 = async () => {
          const t = H.value;
          if (!t) return;
          const {
            default: n
          } = await I1(async () => {
            const {
              default: k
            } = await import("./Bs3CAh5Y.js").then(x => x.l);
            return {
              default: k
            }
          }, __vite__mapDeps([0, 1]), import.meta.url);
          H.value === t && (a.value && a.value.destroy(), a.value = n.loadAnimation({
            container: H.value,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: A1("/lottie/company-logo-white.json")
          }), a.value.addEventListener("DOMLoaded", () => {
            a.value.setSpeed(2)
          }))
        }, a1 = () => {
          f.value && a.value && a.value.destroy()
        }, i1 = () => {
          f.value && a.value && (a.value.setDirection(1), a.value.play())
        }, l1 = () => {
          f.value && a.value && (a.value.setDirection(-1), a.value.play())
        };
      return (t, n) => {
        const k = b1,
          x = M1,
          r1 = H1,
          c1 = $1,
          d1 = O1,
          u1 = T1,
          p1 = P1,
          _1 = U1,
          C1 = X1;
        return l(), u("footer", G1, [n[8] || (n[8] = e("div", {
          class: "line"
        }, null, -1)), d(B1, {
          ref_key: "fixedMediaRef",
          ref: g,
          "media-list": i(j)
        }, null, 8, ["media-list"]), e("div", J1, [e("div", {
          class: x1(["items-four", {
            "without-feed": i(_)
          }]),
          onMouseenter: U,
          onMouseleave: W,
          onMousemove: q
        }, [e("div", {
          class: "item",
          onMouseenter: n[0] || (n[0] = m => I(0)),
          onClick: n[1] || (n[1] = m => Y())
        }, [e("p", K1, c(p[0]?.title), 1), d(k, {
          class: "icon-chevron-mob"
        }), e("p", Q1, c(p[0]?.descr), 1), e("div", ee, [(l(!0), u(z, null, N(i(o)?.industries, ({
          name: m
        }, D) => (l(), u("button", {
          key: D,
          class: "link",
          onClick: G(O => Y(m), ["stop"])
        }, [d(x, {
          text: m,
          arrow: ""
        }, null, 8, ["text"])], 8, te))), 128))])], 32), e("div", {
          class: "item",
          onMouseenter: n[2] || (n[2] = m => I(1)),
          onClick: n[3] || (n[3] = m => s())
        }, [e("p", oe, c(p[1]?.title), 1), d(k, {
          class: "icon-chevron-mob"
        }), e("p", se, c(p[1]?.descr), 1), e("div", ne, [(l(!0), u(z, null, N(i(o)?.services, ({
          name: m,
          slug: D
        }, O) => (l(), u("button", {
          key: O,
          class: "link",
          onClick: G(m1 => s(D), ["stop"])
        }, [d(x, {
          text: m,
          arrow: ""
        }, null, 8, ["text"])], 8, ae))), 128))])], 32), e("div", {
          class: "item",
          onMouseenter: n[4] || (n[4] = m => I(2)),
          onClick: n[5] || (n[5] = m => h())
        }, [e("p", ie, c(p[2]?.title), 1), d(k, {
          class: "icon-chevron-mob"
        }), e("p", le, c(p[2]?.descr), 1), e("div", re, [(l(), u(z, null, N(T, ({
          name: m,
          hash: D
        }, O) => e("button", {
          key: O,
          class: "link",
          onClick: G(m1 => h(D), ["stop"])
        }, [d(x, {
          text: m,
          arrow: ""
        }, null, 8, ["text"])], 8, ce)), 64))])], 32), i(_) ? b("", !0) : (l(), s1(r1, {
          key: 0,
          class: "item hover-container",
          to: "/feed",
          onMouseenter: n[6] || (n[6] = m => I(3))
        }, {
          default: Q(() => [e("p", de, c(p[3]?.title), 1), d(k, {
            class: "icon-chevron-mob"
          }), e("p", ue, c(p[3]?.descr), 1), e("div", pe, [d(x, {
            text: t.$t("explore"),
            arrow: ""
          }, null, 8, ["text"])])]),
          _: 1
        }))], 34), i(o) ? (l(), u("div", _e, [e("div", {
          class: "item",
          onClick: $
        }, [e("p", Ce, c(p[4]?.title), 1), d(k, {
          class: "icon-chevron-mob"
        }), e("p", me, c(p[4]?.descr), 1), e("div", fe, [e("div", ve, [e("p", he, c(t.$t("careers_at_hilight")), 1), e("div", ke, [e("a", {
          class: "mail-link",
          href: `mailto:${i(o)?.careersMail}`
        }, [d(x, {
          text: i(o)?.careersMail,
          arrow: ""
        }, null, 8, ["text"])], 8, ge)])]), e("div", ye, [e("p", we, c(t.$t("supplier_partnerships")), 1), e("div", Le, [e("a", {
          class: "mail-link",
          href: `mailto:${i(o)?.supplierPartnershipsMail}`
        }, [d(x, {
          text: i(o)?.supplierPartnershipsMail,
          arrow: ""
        }, null, 8, ["text"])], 8, xe)])]), d(c1), e("a", {
          target: "_blank",
          class: "soc-link",
          href: i(o).whatsappLink,
          rel: "nofollow noopener noreferrer",
          "aria-label": "WhatsApp"
        }, [d(u1, {
          border: ""
        }, {
          default: Q(() => [d(d1)]),
          _: 1
        })], 8, be)])])])) : b("", !0)]), e("div", Me, [e("div", $e, [e("div", Ve, [d(p1, {
          class: "logo-icon"
        })])]), e("div", He, [d(_1, {
          class: "logo-icon-overlay"
        })])]), e("div", Se, [i(o)?.footerText ? (l(), u("p", Ie, c(i(o).footerText), 1)) : b("", !0), e("div", Ae, [e("p", Te, " ©" + c(new Date().getFullYear()) + " hilight. " + c(t.$t("all_rights_reserved").replace(/\.$/, "")) + ". ", 1), e("div", Pe, [i(o)?.policyPrivacy ? (l(), u("a", {
          key: 0,
          href: i(o).policyPrivacy,
          class: "privacy l2",
          target: "_blank",
          rel: "noopener noreferrer"
        }, c(t.$t("privacy_policy")), 9, De)) : b("", !0), i(o)?.termsOfUse ? (l(), u("a", {
          key: 1,
          href: i(o).termsOfUse,
          class: "privacy l2",
          target: "_blank",
          rel: "noopener noreferrer"
        }, c(t.$t("terms_of_use")), 9, Ee)) : b("", !0), i(A) ? (l(), u("button", {
          key: 2,
          type: "button",
          class: "privacy l2",
          onClick: v
        }, c(t.$t("cookie_settings")), 1)) : b("", !0)]), e("p", Be, [t.$t("made_by") ? (l(), u("span", Fe, c(t.$t("made_by")), 1)) : b("", !0), e("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          class: "company-link",
          href: "https://thefirstthelast.agency/?utm_source=hilight&utm_medium=article&utm_campaign=promo",
          onMouseenter: i1,
          onMouseleave: l1
        }, [n[7] || (n[7] = V1(" thefirstthelast ", -1)), e("span", {
          ref_key: "commonLogoRef",
          ref: H,
          class: "icon-developed"
        }, null, 512), e("span", Ze, [d(C1)])], 32)])])])])
      }
    }
  }),
  Ue = Object.assign(F(je, [
    ["__scopeId", "data-v-5d44e2aa"]
  ]), {
    __name: "CommonFooter"
  });
export {
  B1 as C, Ue as _, O1 as a
};