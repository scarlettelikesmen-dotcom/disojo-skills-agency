/* https://static.elfsight.com/platform/platform.js */
/*!
 * 
 * 	elfsight.com
 * 	
 * 	Copyright (c) 2026 Elfsight, LLC. ALL RIGHTS RESERVED
 * 
 */
(function() {
  function e(e, t, n) {
    let r = [`${n} throws: "${e}"`];
    t && (r.push(`with 
	 ->`), r.push(t)), console.error(...r)
  }

  function t(t) {
    return (n, r) => e(n, r, t)
  }

  function n(e, t) {
    let n = t.meta || {},
      r = {
        settings: t.settings,
        app_slug: t.app,
        public_id: t.id,
        platform: `core`,
        widget_name: n.widget_name,
        app_version: n.app_version,
        thumbnail_url: n.thumbnail_url
      };
    e.postMessage({
      method: `postMessagePlatformWidget`,
      data: r
    }, `/`)
  }
  var r = {
      instashow: `instagram-feed`,
      yottie: `youtube-gallery`,
      "events-calendar": `event-calendar`,
      "social-icons": `social-media-icons`,
      "g2crowd-reviews": `g2-reviews`,
      "appleappstore-reviews": `apple-app-store-reviews`,
      "ali-express-reviews": `aliexpress-reviews`,
      "google-play-store-reviews": `google-play-reviews`,
      "dealer-rater-reviews": `dealerrater-reviews`,
      "ed-munds-reviews": `edmunds-reviews`,
      "open-table-reviews": `opentable-reviews`
    },
    i = Object.fromEntries(Object.entries(r).map(([e, t]) => [t, e]));

  function a(e) {
    if (r[e]) return r[e];
    if (i[e]) return i[e]
  }
  var o = `https://core.service.elfsight.com`,
    s = `https://dash.elfsight.com`,
    c = `309386470786326`,
    l = [`elfsight.com`, `elfsight.dev`, `elfsightcdn.com`],
    u = [`localhost`, `test`],
    d = [`127.0.0.1`, `[::1]`],
    f = t(`eapps.Platform`),
    p = (e, t) => t.some(t => e === t || e.endsWith(`.${t}`));

  function m(e) {
    let t;
    try {
      t = new URL(e)
    } catch {
      return !1
    }
    return t.protocol === `https:` && p(t.hostname, l) ? !0 : (t.protocol === `https:` || t.protocol === `http:`) && (p(t.hostname, u) || d.includes(t.hostname))
  }

  function h(e) {
    let t = e.eappsCustomPlatformUrl;
    return !t || typeof t != `string` ? o : m(t) ? t : (f(`eappsCustomPlatformUrl is ignored: the host is not allowed`, {
      url: t
    }), o)
  }
  var g = `disabled`,
    _ = `enabled`,
    v = [g, _, `first-activity`, `in-viewport`],
    y = `elfsight-app-`;

  function b(e) {
    return (e.getAttribute(`class`) || ``).split(/\s+/).find(e => e.indexOf(y) === 0 && e !== y)
  }

  function x(e) {
    if (e.tagName.toLowerCase() === `div`) {
      var t;
      return (t = b(e)) == null ? void 0 : t.slice(13)
    }
    return e.getAttribute(`data-id`)
  }

  function ee(e) {
    let t = e.getAttribute(`data-elfsight-app-lazy`);
    return t === `` ? _ : t === null || !v.includes(t) ? g : t
  }

  function S(e) {
    let t = e;
    return !!t && typeof t.getElementsByTagName == `function` && typeof t.querySelectorAll == `function`
  }

  function C(e) {
    let t = e;
    return !!t && t.nodeType === 11 && !!t.host && typeof t.querySelectorAll == `function`
  }
  var w = `*[class*="elfsight-app-"]`,
    T = `elfsight-app`;

  function E(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push(e[n]);
    return t
  }

  function D(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      b(r) && t.push(r)
    }
    return t
  }

  function O(e) {
    if (C(e)) return D(e.querySelectorAll(w)).concat(E(e.querySelectorAll(T)));
    if (!S(e)) return [];
    let t = E(e.getElementsByTagName(T)),
      n = D(e.querySelectorAll(w)).concat(t);
    return e instanceof HTMLElement && b(e) && n.push(e), n
  }
  var te = 1;

  function k(e) {
    let t = [];
    if (!S(e) && !C(e)) return t;
    let n = e => {
        e && (t.push(e), t.push(...k(e)))
      },
      r = e;
    n(r.shadowRoot);
    let i = (r.ownerDocument || r).createTreeWalker(r, te);
    for (let e = i.nextNode(); e; e = i.nextNode()) n(e.shadowRoot);
    return t
  }

  function A(e, t = k(e)) {
    let n = O(e);
    return t.forEach(e => {
      n.push(...O(e))
    }), n
  }

  function j(e, t) {
    let n = e.createElement(`style`);
    return n.type = `text/css`, n.appendChild(e.createTextNode(t)), n
  }

  function ne(e, t) {
    (e.head || e.getElementsByTagName(`head`)[0]).appendChild(j(e, t))
  }
  var M = new WeakMap;

  function re(e, t) {
    let n = e.getRootNode();
    if (!C(n)) return;
    let r = M.get(n);
    if (r && r.parentNode === n) return;
    let i = j(e.ownerDocument, t);
    n.appendChild(i), M.set(n, i)
  }
  var N = `div.eapps-widget{position:relative}div.eapps-widget.eapps-widget-show-toolbar:before{content:"";pointer-events:none;z-index:1;border:1px solid #0000;transition:border .3s;display:block;position:absolute;top:0;bottom:0;left:0;right:0}
.eapps-widget-toolbar{z-index:99999;pointer-events:none;opacity:0;padding-bottom:4px;transition:all .3s;display:block;position:absolute;top:-32px;left:0;right:0}.eapps-widget:hover .eapps-widget-toolbar{opacity:1;pointer-events:auto}.eapps-widget-toolbar a{text-decoration:none;box-shadow:none!important}.eapps-widget-toolbar-panel{color:#fff;opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#222;border-radius:6px;align-items:center;height:28px;transition:all .3s;display:inline-flex;position:relative;top:0;overflow:hidden;box-shadow:0 0 0 1px #fff3}.eapps-widget:hover .eapps-widget-toolbar-panel{opacity:1}.eapps-widget-toolbar-panel-wrapper{width:100%;position:relative}.eapps-widget-toolbar-panel-only-you{color:#9c9c9c;padding:5px 4px;font-size:11px;line-height:14px;position:absolute;top:-24px}.eapps-widget-toolbar-panel-logo{border-right:1px solid #fff3;justify-content:center;align-items:center;width:28px;height:28px;display:flex}.eapps-widget-toolbar-panel-logo svg{fill:#f93262;width:15px;height:15px;display:block}.eapps-widget-toolbar-panel-edit{color:#fff;border-right:1px solid #fff3;align-items:center;padding:9px;font-size:12px;font-weight:400;line-height:14px;text-decoration:none;display:inline-flex}.eapps-widget-toolbar-panel-edit-icon{width:14px;height:14px;margin-right:8px}.eapps-widget-toolbar-panel-edit-icon svg{fill:#fff;width:100%;height:100%;display:block}.eapps-widget-toolbar-panel-views{justify-content:center;align-items:center;display:inline-flex}.eapps-widget-toolbar-panel-views-label{margin-left:8px;font-size:12px;font-weight:400;line-height:14px}.eapps-widget-toolbar-panel-views-bar{background-color:#ffffff4d;border-radius:2px;width:70px;height:3px;margin-left:8px;display:inline-flex}.eapps-widget-toolbar-panel-views-bar-inner{background-color:#4ad504;border-radius:2px}.eapps-widget-toolbar-panel-views-green .eapps-widget-toolbar-panel-views-bar-inner{background-color:#4ad504}.eapps-widget-toolbar-panel-views-red .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ff4734}.eapps-widget-toolbar-panel-views-orange .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ffb400}.eapps-widget-toolbar-panel-views-percent{margin-left:8px;margin-right:8px;font-size:12px;font-weight:400;line-height:14px;display:inline-flex}.eapps-widget-toolbar-panel-views-get-more{color:#fff;background-color:#f93262;border-radius:0 6px 6px 0;padding:9px 16px;font-size:12px;font-weight:400}.eapps-widget-toolbar-panel-share{width:83px;height:28px;margin-left:8px;padding-bottom:4px;display:inline-block;position:absolute;top:0;box-sizing:content-box!important}.eapps-widget-toolbar-panel-share:hover .eapps-widget-toolbar-panel-share-block{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-button{color:#fff;cursor:default;background-color:#1c91ff;border-radius:6px;flex-direction:row;align-items:center;height:28px;padding:0 18px;font-size:12px;font-weight:400;display:flex;position:absolute;top:0}.eapps-widget-toolbar-panel-share-button svg{fill:#fff;margin-right:6px;display:inline-block;position:relative;top:-1px}.eapps-widget-toolbar-panel-share-block{opacity:0;pointer-events:none;background:#fff;border:1px solid #1212121a;border-radius:10px;width:209px;transition:all .3s;position:absolute;top:32px;overflow:hidden;transform:translate(-63px);box-shadow:0 4px 6px #0000000d}.eapps-widget-toolbar-panel-share-block:hover{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-block-text{color:#111;text-align:center;padding:12px 0;font-size:15px;font-weight:400}.eapps-widget-toolbar-panel-share-block-text-icon{padding-bottom:4px}.eapps-widget-toolbar-panel-share-block-actions{border-top:1px solid #1212121a;flex-direction:row;display:flex}.eapps-widget-toolbar-panel-share-block-actions-item{background-color:#0000;justify-content:center;align-items:center;width:33.3333%;height:39px;transition:all .3s;display:flex}.eapps-widget-toolbar-panel-share-block-actions-item:hover{background-color:#fafafa}.eapps-widget-toolbar-panel-share-block-actions-item a{justify-content:center;align-items:center;width:100%;height:100%;display:flex}.eapps-widget-toolbar-panel-share-block-actions-item-icon{width:16px;height:16px;display:block}.eapps-widget-toolbar-panel-share-block-actions-item-facebook .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#0866ff}.eapps-widget-toolbar-panel-share-block-actions-item-x .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#000}.eapps-widget-toolbar-panel-share-block-actions-item-linkedin .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#0a66c2}.eapps-widget-toolbar-panel-share-block-actions-item:not(:last-child){border-right:1px solid #1212121a}`,
    P = `M9.3907705,9.84479984 C9.39084949,9.84789591 9.39120496,9.85095229 9.39120496,9.85408806 C9.39120496,10.061247 9.22563696,10.22907 9.0213232,10.22907 C8.95852427,10.22907 8.89943798,10.2130737 8.84761899,10.1850899 L8.84754,10.1851296 L7.07973033,9.29155556 L7.08206061,9.28885642 C6.36524438,8.95487756 5.87944133,8.32105601 5.8725295,7.59228825 C5.8724505,7.59197071 5.87205554,7.5920104 5.87205554,7.59161347 C5.87205554,7.04563305 5.78595386,6.41089856 4.91573446,5.65760038 C3.20314046,4.17545506 0.437578214,1.75392969 0.14052742,1.49378024 C0.133220626,1.48790564 0.126229802,1.4816738 0.119396962,1.47528319 C0.116118779,1.47238559 0.113906992,1.47048031 0.113906992,1.47048031 L0.114025481,1.47032154 C0.0438802595,1.40204918 0,1.30619002 0,1.19981216 C0,0.992653173 0.165568,0.824830183 0.369763267,0.824830183 C0.437222748,0.824830183 0.500298153,0.84344631 0.554763389,0.875439056 L0.554881878,0.875240589 L8.16441401,4.79566183 C8.18708482,4.80685532 8.20940017,4.81848544 8.23159702,4.83027433 L8.26027125,4.84504021 C8.26027125,4.84504021 8.25995528,4.84539745 8.25991578,4.84543714 C8.94031653,5.21748181 9.39013856,5.85916262 9.39013856,6.58888301 C9.39013856,6.59412252 9.38970411,6.59924295 9.38966461,6.60448246 L9.39013856,6.60392675 C9.39013856,6.60392675 9.39013856,7.81560238 9.39013856,8.75974562 C9.39013856,9.47057204 9.39065201,9.79137275 9.3907705,9.84479984 Z M7.53431857,14.7455202 C3.55890924,14.6059985 0.437604872,11.2422351 0.576433956,7.24703185 C0.583108811,7.05447997 0.592627391,6.86419061 0.614903238,6.67604469 C0.626238643,6.5803443 0.774902276,5.85483139 1.42366658,5.94136264 C1.91002258,6.00626108 2.06393921,6.43383658 2.02799768,6.75971802 C2.02108585,6.82235395 2.00698571,6.9880335 2.00698571,6.9880335 C1.99805957,7.0901245 1.99174018,7.19296966 1.98810654,7.296569 C1.87645083,10.5094981 4.38663075,13.2146316 7.58357031,13.3268443 C10.7804309,13.4390571 13.4722142,10.9164331 13.58387,7.70354372 C13.6955257,4.49049559 11.1853457,1.78536206 7.98852467,1.67314929 C7.62634467,1.66044746 7.27060255,1.68180242 6.924458,1.73395933 C6.924458,1.73395933 6.08816582,1.8731238 5.90186232,1.30555026 C5.72160174,0.756354691 6.14271005,0.438650054 6.4277935,0.379070511 C6.94780024,0.279003871 7.48672566,0.235103155 8.03781591,0.254473453 C12.0131067,0.393995167 15.1343716,3.75771881 14.9955425,7.75308087 C14.8567529,11.7482842 11.5095699,14.8850419 7.53431857,14.7455202 Z`,
    F = `M11.8409658,5.0838519 C11.9103036,5.1860702 12.0261968,5.24949902 12.1508333,5.25 L12.25,5.25 C13.2164983,5.25 14,6.03350169 14,7 C14,7.96649831 13.2164983,8.75 12.25,8.75 L12.1998265,8.74999536 C12.0487015,8.7505981 11.9123649,8.84088722 11.8528316,8.97979334 C11.7877518,9.12733583 11.817782,9.29295657 11.9216456,9.39918771 L11.9564161,9.43395833 C12.2850259,9.76220278 12.4696678,10.2076171 12.4696678,10.6720833 C12.4696678,11.1365495 12.2850259,11.5819639 11.956875,11.9097495 C11.6286306,12.2383593 11.1832162,12.4230011 10.71875,12.4230011 C10.2542838,12.4230011 9.80886945,12.2383593 9.48085438,11.909979 L9.45042877,11.8795032 C9.33962324,11.7711153 9.1740025,11.7410852 9.02646001,11.8061649 C8.88755388,11.8656983 8.79726477,12.0020348 8.79666667,12.1508333 L8.79666667,12.25 C8.79666667,13.2164983 8.01316498,14 7.04666667,14 C6.08016835,14 5.29666667,13.2164983 5.29666667,12.25 C5.2931854,12.0554921 5.19476641,11.9178878 5.01447022,11.8503365 C4.87266417,11.7877518 4.70704343,11.817782 4.60081229,11.9216456 L4.56604167,11.9564161 C4.23779722,12.2850259 3.79238285,12.4696678 3.32791667,12.4696678 C2.86345048,12.4696678 2.41803612,12.2850259 2.09025055,11.956875 C1.76164072,11.6286306 1.5769989,11.1832162 1.5769989,10.71875 C1.5769989,10.2542838 1.76164072,9.80886945 2.09002104,9.48085438 L2.12049683,9.45042877 C2.22888469,9.33962324 2.25891482,9.1740025 2.1938351,9.02646001 C2.13430173,8.88755388 1.99796517,8.79726477 1.84916667,8.79666667 L1.75,8.79666667 C0.783501688,8.79666667 1.94289029e-16,8.01316498 0,7.04666667 C-1.2952602e-16,6.08016835 0.783501688,5.29666667 1.75,5.29666667 C1.94450787,5.2931854 2.0821122,5.19476641 2.14966349,5.01447022 C2.21224816,4.87266417 2.18221802,4.70704343 2.07835438,4.60081229 L2.04358388,4.56604167 C1.71497406,4.23779722 1.53033223,3.79238285 1.53033223,3.32791667 C1.53033223,2.86345048 1.71497406,2.41803612 2.043125,2.09025055 C2.37136945,1.76164072 2.81678382,1.5769989 3.28125,1.5769989 C3.74571618,1.5769989 4.19113055,1.76164072 4.51914562,2.09002104 L4.54957123,2.12049683 C4.66037676,2.22888469 4.8259975,2.25891482 4.96780355,2.19633016 C5.00517877,2.17983498 5.04407976,2.16735698 5.0838519,2.15903418 C5.1860702,2.08969644 5.24949902,1.97380324 5.25,1.84916667 L5.25,1.75 C5.25,0.783501688 6.03350169,1.94289029e-16 7,0 C7.96649831,0 8.75,0.783501688 8.75,1.75 L8.74999536,1.80017349 C8.7505981,1.9512985 8.84088722,2.08763507 8.98552978,2.14966349 C9.12733583,2.21224816 9.29295657,2.18221802 9.39918771,2.07835438 L9.43395833,2.04358388 C9.76220278,1.71497406 10.2076171,1.53033223 10.6720833,1.53033223 C11.1365495,1.53033223 11.5819639,1.71497406 11.9097495,2.043125 C12.2383593,2.37136945 12.4230011,2.81678382 12.4230011,3.28125 C12.4230011,3.74571618 12.2383593,4.19113055 11.909979,4.51914562 L11.8795032,4.54957123 C11.7711153,4.66037676 11.7410852,4.8259975 11.8036698,4.96780355 C11.820165,5.00517877 11.832643,5.04407976 11.8409658,5.0838519 Z M5.32570846,3.30839955 C4.77441872,3.50165553 4.15603406,3.36755835 3.72918771,2.94997896 L3.69395833,2.91474945 C3.58454352,2.80521284 3.43607206,2.74366557 3.28125,2.74366557 C3.12642794,2.74366557 2.97795648,2.80521284 2.86808278,2.91520833 C2.75854618,3.02462315 2.6969989,3.17309461 2.6969989,3.32791667 C2.6969989,3.48273873 2.75854618,3.63121018 2.86831229,3.74085438 L2.90783651,3.78042877 C3.3497255,4.23217443 3.47215604,4.90739742 3.23081273,5.45135564 C3.01171177,6.04708399 2.45070951,6.44833064 1.8025,6.46333333 L1.75,6.46333333 C1.4278339,6.46333333 1.16666667,6.72450056 1.16666667,7.04666667 C1.16666667,7.36883277 1.4278339,7.63 1.75,7.63 L1.85149318,7.63000464 C2.46761824,7.63246196 3.02345194,8.00056374 3.26366984,8.56113688 C3.51882271,9.13926925 3.39639217,9.81449224 2.94997896,10.2708123 L2.91474945,10.3060417 C2.80521284,10.4154565 2.74366557,10.5639279 2.74366557,10.71875 C2.74366557,10.8735721 2.80521284,11.0220435 2.91520833,11.1319172 C3.02462315,11.2414538 3.17309461,11.3030011 3.32791667,11.3030011 C3.48273873,11.3030011 3.63121018,11.2414538 3.74085438,11.1316877 L3.78042877,11.0921635 C4.23217443,10.6502745 4.90739742,10.527844 5.45135564,10.7691873 C6.04708399,10.9882882 6.44833064,11.5492905 6.46333333,12.1975 L6.46333333,12.25 C6.46333333,12.5721661 6.72450056,12.8333333 7.04666667,12.8333333 C7.36883277,12.8333333 7.63,12.5721661 7.63,12.25 L7.63000464,12.1485068 C7.63246196,11.5323818 8.00056374,10.9765481 8.56113688,10.7363302 C9.13926925,10.4811773 9.81449224,10.6036078 10.2708123,11.050021 L10.3060417,11.0852505 C10.4154565,11.1947872 10.5639279,11.2563344 10.71875,11.2563344 C10.8735721,11.2563344 11.0220435,11.1947872 11.1319172,11.0847917 C11.2414538,10.9753769 11.3030011,10.8269054 11.3030011,10.6720833 C11.3030011,10.5172613 11.2414538,10.3687898 11.1316877,10.2591456 L11.0921635,10.2195712 C10.6502745,9.76782557 10.527844,9.09260258 10.7829968,8.51447022 C11.0232147,7.95389707 11.5790484,7.58579529 12.1975,7.58333333 L12.25,7.58333333 C12.5721661,7.58333333 12.8333333,7.3221661 12.8333333,7 C12.8333333,6.6778339 12.5721661,6.41666667 12.25,6.41666667 L12.1485068,6.41666203 C11.5323818,6.41420471 10.9765481,6.04610293 10.7338351,5.47979334 C10.7127093,5.43050161 10.6985296,5.37864558 10.6916004,5.32570846 C10.4983445,4.77441872 10.6324417,4.15603406 11.050021,3.72918771 L11.0852505,3.69395833 C11.1947872,3.58454352 11.2563344,3.43607206 11.2563344,3.28125 C11.2563344,3.12642794 11.1947872,2.97795648 11.0847917,2.86808278 C10.9753769,2.75854618 10.8269054,2.6969989 10.6720833,2.6969989 C10.5172613,2.6969989 10.3687898,2.75854618 10.2591456,2.86831229 L10.2195712,2.90783651 C9.76782557,3.3497255 9.09260258,3.47215604 8.52020666,3.21949823 C7.95389707,2.97678527 7.58579529,2.42095158 7.58333333,1.8025 L7.58333333,1.75 C7.58333333,1.4278339 7.3221661,1.16666667 7,1.16666667 C6.6778339,1.16666667 6.41666667,1.4278339 6.41666667,1.75 L6.41666203,1.85149318 C6.41420471,2.46761824 6.04610293,3.02345194 5.47979334,3.2661649 C5.43050161,3.2872907 5.37864558,3.3014704 5.32570846,3.30839955 Z M7,9.33333333 C5.71133558,9.33333333 4.66666667,8.28866442 4.66666667,7 C4.66666667,5.71133558 5.71133558,4.66666667 7,4.66666667 C8.28866442,4.66666667 9.33333333,5.71133558 9.33333333,7 C9.33333333,8.28866442 8.28866442,9.33333333 7,9.33333333 Z M7,8.16666667 C7.64433221,8.16666667 8.16666667,7.64433221 8.16666667,7 C8.16666667,6.35566779 7.64433221,5.83333333 7,5.83333333 C6.35566779,5.83333333 5.83333333,6.35566779 5.83333333,7 C5.83333333,7.64433221 6.35566779,8.16666667 7,8.16666667 Z`,
    ie = `M12.7,15.3c-4.5,0.1-8.4,2.5-10.7,6c-0.2,0.3-0.6,0.5-0.9,0.5c-0.1,0-0.2,0-0.3,0c-0.5-0.1-0.8-0.6-0.8-1c0,0,0-0.1,0-0.1c0-7.1,5.7-12.9,12.7-13V5.5c0-0.5,0.3-0.9,0.7-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.5,0.1,0.7,0.2l8.8,6c0.3,0.2,0.5,0.6,0.5,0.9c0,0.4-0.2,0.7-0.5,1l-8.8,6.1c-0.2,0.2-0.5,0.2-0.7,0.2c-0.2,0-0.4,0-0.6-0.1c-0.4-0.2-0.7-0.7-0.7-1.1V15.3z`,
    ae = `M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z`,
    oe = `M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z`,
    se = `M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z`;

  function I(e) {
    return e >= 100 ? `red` : e >= 90 ? `orange` : `green`
  }
  var L = `.eapps-widget-toolbar-panel-views-get-more`,
    R = `.eapps-widget-toolbar-panel-share-block-actions-item-facebook a`,
    z = `.eapps-widget-toolbar-panel-share-block-actions-item-x a`,
    B = `.eapps-widget-toolbar-panel-share-block-actions-item-linkedin a`,
    V = [
      [R, `facebook`, `width=555,height=640,toolbar=0,status=0`],
      [z, ``, `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600`],
      [B, `linkedin`, `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=640,width=600`]
    ];

  function H(e, t) {
    let n = t.percentage * 100,
      r = `${s}/apps/${t.app}`,
      i = (e, n) => {
        let r = new URLSearchParams({
          utm_source: `clients`,
          utm_medium: `user-panel`,
          utm_campaign: n,
          utm_content: t.app,
          utm_term: t.websiteUrl
        });
        return `${e}${e.includes(`?`)?`&`:`?`}${r.toString()}`
      },
      a = e.implementation.createHTMLDocument();
    a.body.innerHTML = `<div class="eapps-widget-toolbar">
        <div class="eapps-widget-toolbar-panel-wrapper">
            <div class="eapps-widget-toolbar-panel-only-you">Panel only seen by widget owner</div>
            
            <div class="eapps-widget-toolbar-panel">
                <a href="#" target="_blank" title="Panel only seen by widget owner"> 
                    <div class="eapps-widget-toolbar-panel-logo">
                        <svg width="15px" height="15px" viewBox="0 0 15 15">
                            <path d="${P}" id="path-1"></path>
                        </svg>
                    </div>
                </a>
                
                <a href="#" target="_blank"> 
                    <div class="eapps-widget-toolbar-panel-edit">
                        <div class="eapps-widget-toolbar-panel-edit-icon">
                            <svg width="15px" height="15px" viewBox="0 0 15 15">
                                <path d="${F}"></path>
                            </svg>
                        </div>
                        
                        <div class="eapps-widget-toolbar-panel-edit-label">Edit widget</div>
                    </div>
                </a>
                
                <div class="eapps-widget-toolbar-panel-views eapps-widget-toolbar-panel-views-${I(n)}">
                    <div class="eapps-widget-toolbar-panel-views-label">Views</div>
                    
                    <div class="eapps-widget-toolbar-panel-views-bar">
                        <div class="eapps-widget-toolbar-panel-views-bar-inner"></div>
                    </div>
                    
                    <div class="eapps-widget-toolbar-panel-views-percent">${Math.round(n)}%</div>
                </div>
                
                <a href="#" target="_blank">
                    <div class="eapps-widget-toolbar-panel-views-get-more">
                        Extend Limit
                    </div>
                </a>
            </div>
            
            <div class="eapps-widget-toolbar-panel-share">
                <div class="eapps-widget-toolbar-panel-share-button">
                    <svg width="12px" height="12px" viewBox="0 0 24 24">
                        <path id="XMLID_31_" d="${ie}"></path>
                    </svg>
                    
                    <span>Share</span>
                </div>
                
                <div class="eapps-widget-toolbar-panel-share-block">
                    <div class="eapps-widget-toolbar-panel-share-block-text">
                        <div class="eapps-widget-toolbar-panel-share-block-text-icon">🔥</div>
                        Tell your customers about<br>new website functionality!
                    </div>
                    
                    <div class="eapps-widget-toolbar-panel-share-block-actions">
                        <div class="eapps-widget-toolbar-panel-share-block-actions-item-facebook eapps-widget-toolbar-panel-share-block-actions-item">
                            <a href="#" target="_blank" title="Share on Facebook">
                                <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 24 24">
                                    <path d="${ae}"></path>
                                </svg>
                            </a>
                        </div>
                        
                        <div class="eapps-widget-toolbar-panel-share-block-actions-item-x eapps-widget-toolbar-panel-share-block-actions-item">
                            <a href="#" target="_blank" title="Share on X">
                                <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="-3 -3 30 30">
                                    <path d="${oe}"></path>
                                </svg>
                            </a>
                        </div>
                        
                        <div class="eapps-widget-toolbar-panel-share-block-actions-item-linkedin eapps-widget-toolbar-panel-share-block-actions-item">
                            <a href="#" target="_blank" title="Share on LinkedIn">
                                <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 16 16">
                                    <path d="${se}"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    let o = a.body.children[0],
      l = e => o.querySelector(e),
      u = e => l(e).closest(`a`),
      d = encodeURIComponent(e.location.origin);
    return [
      [`.eapps-widget-toolbar-panel-logo`, i(r, `elfsight-icon`)],
      [`.eapps-widget-toolbar-panel-edit`, i(`${s}/widget/${t.id}`, `edit-widget`)],
      [L, i(`${r}/pricing`, `extend-limits`)],
      [R, `https://www.facebook.com/dialog/share?app_id=${c}&display=popup&href=${d}&hashtag=%23elfsight`],
      [z, `https://x.com/intent/post?url=${d}&via=elfsight&hashtags=elfsight&text=Now my site is cool as ever with a widget by Elfsight from https://elfsight.com/`],
      [B, `https://www.linkedin.com/sharing/share-offsite/?url=${d}`]
    ].forEach(([e, t]) => u(e).setAttribute(`href`, t)), l(`.eapps-widget-toolbar-panel-views-bar-inner`).style.width = `${n}%`, u(L).style.display = n >= 90 ? `block` : `none`, l(`.eapps-widget-toolbar-panel-share`).style.display = n < 90 ? `inline-flex` : `none`, V.forEach(([e, t, n]) => {
      let r = u(e);
      r.addEventListener(`click`, e => {
        e.preventDefault(), window.open(r.href, t, n)
      })
    }), o
  }

  function U(e, t) {
    t.usageStatus = () => I(t.percentage * 100), e.classList.add(`eapps-widget`, `eapps-widget-show-toolbar`), e.appendChild(H(document, t)), re(e, N)
  }
  var W = `elfsightApp`;

  function G(e) {
    let t = {};
    for (let n in e.dataset) n.startsWith(W) && (t[`attribute${n.replace(W,``)}`] = e.dataset[n]);
    return t
  }

  function K(e, t) {
    let n = {
      widgetId: t.id || null,
      widgetToken: t.public_widget_token || null,
      widgetName: t.meta && t.meta.widget_name || null,
      widgetOrigin: `apps.elfsight.com`,
      websiteUrl: t.websiteUrl,
      deactivate: t.preferences.disable_widget === 1,
      deactivatedWidgetUrl: t.preferences.deactivated_widget_url,
      showElfsightLogo: !t.preferences.hide_elfsight_logo,
      owner: t.isOwner,
      platform: t.platform,
      freeLinkUrl: t.preferences.free_link_url,
      displayFreeLink: !!t.preferences.display_free_link,
      displayFreeLinkRemove: !!t.preferences.display_free_link_remove,
      freeLinkURL: t.preferences.free_link_url,
      freeLinkRemoveURL: t.preferences.free_link_remove_url,
      freeLinkAnchor: t.preferences.free_link_anchor,
      displayDeactivation: !!t.preferences.display_deactivation,
      deactivationURL: t.preferences.deactivation_url,
      displayPoweredBy: !!t.preferences.display_elfsight_powered_by,
      splits: t.splits == null ? {} : t.splits
    };
    return [t.settings, n, G(e)].reduce((e, t) => (Object.keys(t).forEach(n => {
      e[n] = t[n]
    }), e), {})
  }

  function q(e, t) {
    let n = !1,
      r = [],
      i = (i, a) => {
        if (!n) {
          r.push({
            element: i,
            config: a,
            initialized: !1
          });
          return
        }
        a.websiteUrl = e.location.host || `undefined`;
        let o = K(i, a);
        t.initWidget(i, o, a), a.isOwner && setTimeout(() => {
          U(i, a)
        }, 500)
      },
      a = () => {
        r.forEach(e => {
          e.initialized || (e.initialized = !0, i(e.element, e.config))
        })
      };
    return t.whenReady(() => {
      n = !0, a()
    }), {
      initWidget: i
    }
  }
  var ce = t(`eapps.AppsManager`);

  function le(e) {
    let t = {},
      r = [],
      i = [],
      o = (a, o) => {
        let s = t[o.app];
        s ? i.indexOf(a) === -1 && (i.push(a), s.initWidget(a, o), n(e, o)) : r.push({
          element: a,
          config: o,
          initialized: !1
        })
      },
      s = e => {
        r.forEach(t => {
          e !== t.config.app || t.initialized || (t.initialized = !0, o(t.element, t.config))
        })
      };
    return {
      register: (n, r) => {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          ce(`Application "${n}" is already registered`, void 0);
          return
        }
        t[n] = q(e, new r), s(n);
        let i = a(n);
        i && (t[i] = q(e, new r), s(i))
      },
      initWidget: o
    }
  }
  var ue = t(`eapps.Platform`),
    J = e => {
      try {
        return new URL(e)
      } catch {
        return null
      }
    },
    Y = e => (e.protocol === `https:` || e.protocol === `http:`) && (p(e.hostname, u) || d.includes(e.hostname));

  function de(e, t) {
    let n = J(e);
    if (!n) return !1;
    if (n.protocol === `https:` && p(n.hostname, l)) return !0;
    let r = J(t);
    return !!r && Y(r) && Y(n)
  }

  function fe(e) {
    if (typeof e == `string`) return {
      url: e
    };
    if (e && typeof e.url == `string`) {
      let {
        url: t,
        integrity: n,
        type: r
      } = e;
      return {
        url: t,
        integrity: n,
        type: r === `module` ? r : void 0
      }
    }
    return null
  }

  function pe(e) {
    let t = [],
      n = [];
    return {
      load(r, i) {
        r && r.length && r.map(fe).filter(e => !!e && !t.includes(e.url)).forEach(r => {
          if (!de(r.url, i)) {
            n.includes(r.url) || (n.push(r.url), ue(`Asset is not loaded: the host is not allowed`, {
              url: r.url
            }));
            return
          }
          let a = e.createElement(`script`);
          a.src = r.url, r.type === `module` ? a.type = `module` : (a.async = !0, a.charset = `UTF-8`), r.integrity && (a.integrity = r.integrity, a.crossOrigin = `anonymous`), e.head.appendChild(a), t.push(r.url)
        })
      }
    }
  }
  var X = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

  function me(e) {
    try {
      let t = e.href;
      if (X.test(t)) {
        let e = new URL(t),
          n = e.origin + e.pathname;
        if (/^https?:$/.test(e.protocol) && X.test(n)) return n
      }
    } catch {}
  }
  var Z = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%` + e.charCodeAt(0).toString(16).toUpperCase());

  function he(e) {
    return Object.keys(e).sort().reduce((t, n) => {
      let r = e[n];
      return r !== void 0 && t.push(Z(n) + `=` + Z(r)), t
    }, []).join(`&`)
  }

  function ge(e, t, n, r, i) {
    let a = new e.XMLHttpRequest,
      o = he({
        w: n.join(`,`),
        page: me(e.document.location)
      });
    a.open(`get`, `${t}/p/boot/?${o}`), a.withCredentials = !0, a.onload = () => {
      if (a.status < 200 || a.status > 299) {
        i(`the core responded with status ${a.status}`);
        return
      }
      let e;
      try {
        e = JSON.parse(a.response)
      } catch {
        i(`the response is not valid JSON`);
        return
      }
      r(e)
    }, a.onerror = () => {
      i(`the request failed`)
    }, a.send()
  }

  function _e(e) {
    return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, {
      ...t,
      data: t.data ? {
        ...t.data,
        settings: typeof t.data.settings == `string` ? JSON.parse(t.data.settings) : t.data.settings
      } : void 0
    }]))
  }
  var ve = {
    childList: !0,
    subtree: !0,
    characterData: !0
  };

  function ye(e, t) {
    let n = new WeakSet,
      r = e => {
        e.forEach(e => {
          let n = e.addedNodes;
          for (let e = 0; e < n.length; e++) {
            let r = n[e],
              a = k(r);
            a.forEach(i);
            let o = A(r, a);
            o.length > 0 && t(o)
          }
        })
      },
      i = t => !n.has(t) && (n.add(t), e.MutationObserver && new e.MutationObserver(r).observe(t, ve), !0);
    return {
      observe(e) {
        if (!i(e)) return null;
        let t = k(e);
        return t.forEach(i), t
      }
    }
  }

  function be(e) {
    let t = [],
      n = `DOMContentLoaded`,
      r = /^loaded|^i|^c/.test(e.readyState);
    if (!r) {
      let i = () => {
        e.removeEventListener(n, i), r = !0;
        let a;
        for (; a = t.shift();) a()
      };
      e.addEventListener(n, i)
    }
    return e => {
      r ? setTimeout(e, 0) : t.push(e)
    }
  }

  function xe(e, t) {
    let n = e.createElement(`link`);
    n.href = t, n.rel = `preconnect`, n.crossOrigin = ``, e.head.appendChild(n)
  }

  function Q(e, t) {
    if (t.source === e || t.origin && t.origin !== `null` && t.origin === e.location.origin) return !0;
    try {
      let e = new URL(t.origin);
      return e.protocol === `https:` && p(e.hostname, l)
    } catch {
      return !1
    }
  }

  function Se(e, t) {
    e.addEventListener(`message`, n => {
      let r = n.data;
      r && typeof r == `object` && r.action === `EappsPlatform.widgetReset` && r.widgetId && typeof r.widgetId == `string` && Q(e, n) && t(r.widgetId)
    })
  }
  var $ = [`scroll`, `mousemove`, `touchstart`, `keydown`, `click`];

  function Ce(e, t, n, r) {
    let i = [],
      a = () => {
        i.splice(0, i.length).forEach(e => e())
      },
      o = () => {
        a(), r()
      };
    (n === `enabled` || n === `in-viewport`) && i.push((() => {
      if (e.IntersectionObserver === void 0) return () => {};
      let n = new e.IntersectionObserver(e => {
        for (let t = 0; t < e.length; ++t)
          if (e[t].isIntersecting) {
            o();
            break
          }
      });
      return n.observe(t), () => {
        n.disconnect()
      }
    })()), (n === `enabled` || n === `first-activity`) && i.push((() => {
      let t = {
        capture: !0,
        passive: !0
      };
      return $.forEach(n => {
        e.addEventListener(n, o, t)
      }), () => {
        $.forEach(n => {
          e.removeEventListener(n, o, t)
        })
      }
    })())
  }

  function we() {
    return {
      required: [],
      pending: [],
      widgets: {},
      placeholders: []
    }
  }
  var Te = `eapps.Platform`,
    Ee = 1e3;

  function De(e, n) {
    let r = e.document,
      i = r.body || r,
      a = t(Te),
      o = we(),
      s = pe(r),
      c = be(r),
      l = (e, t) => A(e || i, t),
      u = e => {
        typeof e != `string` && a(`Widget Public ID required and should be a string`, {
          pid: e
        }), o.required.indexOf(e) === -1 && o.required.push(e)
      },
      d = e => {
        let t = x(e),
          r = o.widgets[t];
        if (!r) return;
        if (!r.status || !r.data) {
          a(`Widget "${t}" can\`t be initialized because ${r.reason}`, e);
          return
        }
        r.data.id = t, r.data.platform = !0;
        let i = r.user || r.data.user;
        i && (r.data.isOwner = i.owner), n.initWidget(e, r.data)
      },
      f = () => {
        o.placeholders.forEach(d)
      },
      p = t => {
        let n = [];
        if (t.forEach(e => {
            o.pending.includes(e) || (o.pending.push(e), n.push(e))
          }), !n.length) return;
        let r = h(e),
          i = () => {
            o.pending = o.pending.filter(e => !n.includes(e))
          };
        ge(e, r, n, e => {
          try {
            if (!e || typeof e != `object`) {
              a(`Boot failed because the response is not an object`, e);
              return
            }
            let t = e,
              n = t.data,
              i = !!n && typeof n.widgets == `object` && !!n.widgets;
            t.status ? i || a(`Boot failed because the response has no widgets`, t) : a(`Boot failed because ${t.reason}`, n), i && (o.widgets = Object.assign({}, o.widgets, _e(n.widgets)), s.load(n.assets, r), f())
          } finally {
            i()
          }
        }, e => {
          a(`Boot failed because ${e}`), i()
        })
      },
      m = () => {
        let e = o.required.filter(e => !(e in o.widgets));
        e.length > 0 ? p(e) : f()
      },
      g = (t, n) => {
        l(t, n).forEach(t => {
          if (o.placeholders.includes(t)) return;
          let n = x(t);
          if (!n) return;
          let r = ee(t);
          r === `disabled` ? u(n) : Ce(e, t, r, () => {
            u(n), m()
          }), o.placeholders.push(t)
        })
      },
      _ = [],
      v = e => {
        let t = e => {
            let t = r.createElement(`div`);
            return t.className = `elfsight-app-${e}`, t
          },
          n = l();
        _.forEach(e => {
          A(e).forEach(e => {
            e.parentNode && !n.includes(e) && n.push(e)
          })
        }), n.forEach(n => {
          x(n) === e && (delete o.widgets[e], n.parentNode.replaceChild(t(e), n))
        })
      },
      y = null,
      b = ye(e, t => {
        t.forEach(e => {
          u(x(e)), o.placeholders.includes(e) || o.placeholders.push(e)
        }), y && e.clearTimeout(y), y = e.setTimeout(m, Ee)
      }),
      S = () => {
        b.observe(r)
      };
    return xe(r, h(e)), g(i), m(), c(() => {
      g(i), m(), S(), Se(e, v)
    }), {
      requireWidget: u,
      resetWidget: v,
      observe: t => {
        let n;
        if (e.ShadowRoot && t instanceof e.ShadowRoot) n = t;
        else if (t instanceof e.Element) n = t.shadowRoot || t;
        else {
          a(`observe() expects a ShadowRoot or Element`, {
            root: t
          });
          return
        }
        _.includes(n) || (_.push(n), g(n, b.observe(n) || k(n)), m())
      }
    }
  }

  function Oe(e, t) {
    return {
      platform: {
        initialize() {},
        requireWidget(t) {
          e.requireWidget(t)
        },
        resetWidget(t) {
          e.resetWidget(t)
        },
        observe(t) {
          e.observe(t)
        }
      },
      apps: {
        initialize() {},
        register(e, n) {
          t.register(e, n)
        }
      }
    }
  }

  function ke(e) {
    if (e.eapps) return;
    let t = le(e);
    e.eapps = Oe(De(e, t), t)
  }
  ke(window), ne(document, N)
})();