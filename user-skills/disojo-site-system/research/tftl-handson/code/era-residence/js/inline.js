{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ERA Residence — Contemporary Mediterranean Residences in Estepona",
  "description": "Boutique residences on the New Golden Mile combining contemporary architecture, natural materials and resort-style living near Marbella and Estepona.",
  "url": "/",
  "inLanguage": "en",
  "mainEntity": {
    "@type": "ApartmentComplex",
    "name": "ERA Residence",
    "description": "A boutique gated community of 25 residences on Costa del Sol, designed around privacy, wellbeing and timeless Mediterranean living.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Litoral",
      "addressLocality": "Estepona",
      "addressRegion": "Málaga",
      "postalCode": "29680",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "Place",
      "name": "New Golden Mile, Estepona"
    },
    "numberOfAccommodationUnits": 25,
    "amenityFeature": [{
        "@type": "LocationFeatureSpecification",
        "name": "Saltwater Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Children's Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sauna",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Jacuzzi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wellness Shower",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Spa & Gym",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Gated Community",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking with EV Charging Pre-installation",
        "value": true
      }
    ],
    "containsPlace": [{
        "@type": "Accommodation",
        "name": "Ground Floor + Basement",
        "numberOfRooms": 3,
        "floorSize": {
          "@type": "QuantitativeValue",
          "minValue": 178,
          "maxValue": 202,
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Accommodation",
        "name": "Ground Floor",
        "numberOfRooms": 2,
        "floorSize": {
          "@type": "QuantitativeValue",
          "minValue": 97,
          "maxValue": 104,
          "unitCode": "MTK"
        }
      },
      {
        "@type": "Accommodation",
        "name": "Penthouse Duplex",
        "numberOfRooms": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 3
        },
        "floorSize": {
          "@type": "QuantitativeValue",
          "minValue": 124,
          "maxValue": 243,
          "unitCode": "MTK"
        }
      }
    ],
    "telephone": "+34655408648",
    "image": [
      "https://www.era-residence.com/_wf/6a068da7ad91b057365bf967/6a25da81dce540a251389928_era-residence_gated-community_day.webp",
      "https://www.era-residence.com/_wf/6a0853d5dab31b18f0677081/6a150affaf1d8cc969d57dd0_img_cam_02.webp",
      "https://www.era-residence.com/_wf/6a0853d5dab31b18f0677081/6a150bbc2a39862be04f2cd5_era-residence-terrace.webp",
      "https://www.era-residence.com/_wf/6a068da7ad91b057365bf967/6a0f8c07861fe831459ff0d9_img_cam_05_alpha.webp"
    ]
  }
}

/* ---- */

console.log(
  "%c" +
  `
                             .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                .$$$$$$$+///////////////////////////////////////////+$$$$$$$.
          $$$$$$€//////////////////////////////////////////////////++++++++++$$$$$$.
     .$$$$$+////////////////                                     +/+++++++++++++++$$$$$$
  .$$$$$++++//////+                                                       .+++++++€€€$$$$$$
.$$$$$€€++++/                                                                   ++€€€€$$$$$$.
$$$$$$€€+$                                                                         .€€$€$$$$$
$$$$$$€                                                                               $$$$$$$
$$$$$$$                       $$$$$$$$$               $$$$$$$$$                       $$$$$$€
$$$$$$$$$$                    /////////               /////////                    $$$$$$$++€
 $$$€€$$$$$$$$.               /////////               /////////               .$$$$$$$€++++€
  $$$€€€€€€$$$$$$$$$$.        /////////               /////////        .$$$$$$$$$+/////++++
    .€€€€€€€€++++++$$$$$$$$$$$/////////               /////////$$$$$$$$$$$/////////////+.
        $€€€€++++++++++++//////////////               //////////////////////////////$
             €++++++++++++/////////////               /////////////////////////
                      ++++/////////////               /////////////////
                              /////////               /////////
                              /////////               /////////
                              /////////               /////////


                              ###          CREDITS          ###
                              DESIGNED, DEVELOPED AND DELIVERED
                                       BY  Ivan Chopei         
                                            ©2026              

                              PRODUCER............Maks Stepenko
                              AGENCY............THEFIRSTTHELAST


                              :::::::::::::::::::::::::::::::::
                              WWW.       THEFIRSTTHELAST.AGENCY
`,
  "font-size:10px;color: rgb(255, 117, 194);font-family:monospace;"
)

/* ---- */

document.addEventListener('DOMContentLoaded', function() {
  function loadtwc(e) {
    let t = document.createElement('script');
    (t.setAttribute('src', e), t.setAttribute('type', 'module'), document.body.appendChild(t));
  }
  let src = window.location.host.includes('webflow.io') ? 'https://slater.app/20164.js' : 'https://assets.slater.app/slater/20164.js?v=1.0';
  loadtwc(src);
});

/* ---- */
! function(b, e, f, g, a, c, d) {
  b.fbq || (a = b.fbq = function() {
    a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
  }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d))
}(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
fbq("init", "845813938192979");
fbq("track", "PageView");