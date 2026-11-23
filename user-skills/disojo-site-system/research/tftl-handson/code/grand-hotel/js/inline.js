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
    w[y]('GTM-KXDRC38')
  })(window, document, 'script', 'dataLayer', '_gtm_ids', '_gtm_inject')
}
/* ---- */
[{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "GRAND HOTEL LVIV",
  "image": "https://api.grand-hotel.com.ua/storage/dsc04956-1685369998qJC0f.jpg",
  "description": "Забронювати готель в центрі міста ✓ 5-зірковий готель у Львові ✓ Ціни в GRAND HOTEL LVIV ✓ Зручне розташування біля Оперного театру.",
  "url": "https://grand-hotel.com.ua/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Просп. Свободи, 13",
    "addressLocality": "Львів",
    "addressRegion": "Львівська область",
    "postalCode": "79000",
    "addressCountry": "Україна"
  },
  "telephone": "+38 (093) 170-67-58",
  "email": "reception@grand-hotel.com.ua",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "1550"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+38 (093) 170-67-58",
    "contactType": "Reservations",
    "availableLanguage": ["Ukrainian", "English"]
  },
  "amenityFeature": [{
    "@type": "LocationFeatureSpecification",
    "name": "Free WiFi",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Indoor pool",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Fitness Center",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Restaurant",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Free parking",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Paid breakfast",
    "value": "true"
  }, {
    "@type": "LocationFeatureSpecification",
    "name": "Air-conditioned",
    "value": "true"
  }],
  "sameAs": ["https://www.facebook.com/grandhotellviv/", "https://www.instagram.com/grand_hotel_lviv/"]
}, {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GRAND HOTEL LVIV",
  "url": "https://grand-hotel.com.ua/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://grand-hotel.com.ua/accommodation-all"
  }
}]
/* ---- */
(function(a, e, b, f, g, c, d) {
  a[b] = a[b] || function() {
    (a[b].q = a[b].q || []).push(arguments)
  };
  c = e.createElement(f);
  c.async = 1;
  c.src = "https://www.clarity.ms/tag/" + g + "?ref\x3dgtm2";
  d = e.getElementsByTagName(f)[0];
  d.parentNode.insertBefore(c, d)
})(window, document, "clarity", "script", "da3gksdmaq");