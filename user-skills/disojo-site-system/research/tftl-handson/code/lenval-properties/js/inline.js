{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lenval Properties",
  "url": "/",
  "description": "Boutique residential developments in Abu Dhabi, built with intention and designed to endure.",
  "email": "info@lenvalgroup.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressRegion": "Abu Dhabi"
  },
  "areaServed": [{
      "@type": "City",
      "name": "Abu Dhabi",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    },
    {
      "@type": "City",
      "name": "Dubai",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    }
  ],
  "slogan": "Creators of Refined Living & Iconic Spaces",
  "knowsAbout": [
    "Residential Development",
    "Luxury Real Estate",
    "Architecture",
    "Interior Design",
    "Landscape Architecture",
    "Property Investment",
    "Project Management"
  ],
  "makesOffer": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "The Opportunity",
        "description": "Identifying exceptional land and unique opportunities with the potential to become landmark developments."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Investment Analysis",
        "description": "Conducting rigorous financial analysis to evaluate feasibility, manage risk, and maximize long-term value."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "The Partners",
        "description": "Assembling world-class teams of architects, interior designers, landscape architects, and hospitality specialists to bring each vision to life."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Project Management",
        "description": "In-house project management experts oversee every stage of development, ensuring efficient execution, cost optimization, and uncompromising quality."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sale Execution",
        "description": "Developing a strategic exit plan designed to maximize value and achieve targeted investment returns."
      }
    }
  ]
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
  function loadmain(src) {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('error', () => console.error('Slater: failed to load main.js'));
    document.body.appendChild(script);
  }

  const src = window.location.host.includes('webflow.io') ? 'https://slater.app/19858/59707.js' : 'https://assets.slater.app/slater/19858/59707.js?v=1.0';

  loadmain(src);
});