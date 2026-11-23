if (!window._gtm_init) {
  window._gtm_init = 1;
  (function(w, n, d, m, e, p) {
    w[d] = (w[d] == 1 || n[d] == 'yes' || n[d] == 1 || n[m] == 1 || (w[e] && w[e][p] && w[e][p]())) ? 1 : 0
  })(window, navigator, 'doNotTrack', 'msDoNotTrack', 'external', 'msTrackingProtectionEnabled');
  (function(w, d, s, l, x, y) {
    w[x] = {};
    w._gtm_inject = function(i) {
      if (w.doNotTrack || w[x][i]) return;
      w[x][i] = 1;
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i;
      f.parentNode.insertBefore(j, f);
    };
    w[y]('GTM-5DTM389')
  })(window, document, 'script', 'dataLayer', '_gtm_ids', '_gtm_inject')
}