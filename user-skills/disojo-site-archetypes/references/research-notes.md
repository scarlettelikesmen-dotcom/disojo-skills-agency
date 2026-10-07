# Research notes (audit run 2026-10-07)

Method: puppeteer-core + local Chrome (headless, software GL), 1440x900 desktop and 390x844 mobile, CDP network totals (encoded bytes), library signatures from page globals and from each site's JS bundles (stackscan.py), screenshots at 5-9 scroll positions, text/structure review. Mobile network totals in the raw run are invalid (served from cache on the second load); use desktop. Agrumea and Everest needed wheel/click input; Everest was viewed in a real-GPU browser.

## Bundle library scan (number of script files containing the signature)
```
https://www.palmo.co.in/ | scripts 17 | js KB(raw) 2121 | {'gsap': 4, 'ScrollTrigger': 2, 'Lenis': 5, 'three.js': 2, 'r3f': 1, 'drei': 1, 'splitting/SplitText': 2, 'howler/audio': 2, 'draco': 1, 'ktx2/basis': 1, 'webgl-shader': 3}
https://www.cravburgers.shop/ | scripts 15 | js KB(raw) 1024 | {'gsap': 6, 'ScrollTrigger': 6, 'Lenis': 3, 'splitting/SplitText': 1}
https://www.eraresidence.mk/ | scripts 14 | js KB(raw) 649 | {'gsap': 2, 'ScrollTrigger': 2, 'Lenis': 1}
https://www.on.energy/ | scripts 14 | js KB(raw) 1289 | {'gsap': 1, 'ScrollTrigger': 1, 'Lenis': 1, 'splitting/SplitText': 1, 'webgl-shader': 1}
https://www.agrumeafarm.it/ | scripts 13 | js KB(raw) 646 | {'gsap': 1, 'ScrollTrigger': 1, 'Lenis': 1, 'three.js': 1, 'splitting/SplitText': 1, 'matter-physics': 1}
https://ethicallifeworld.com/ | scripts 33 | js KB(raw) 855 | {'gsap': 2, 'ScrollTrigger': 2, 'Lenis': 2, 'splitting/SplitText': 2, 'barba': 2}
https://www.ciaoenergy.com/ | scripts 5 | js KB(raw) 543 | {'gsap': 3, 'ScrollTrigger': 2, 'splitting/SplitText': 2}
https://everest.suraj.work/ | scripts 1 | js KB(raw) 120 | {'Lenis': 1, 'howler/audio': 1, 'webgl-shader': 1}
```

## Per-site audit summary (desktop)
```
======================================================================
palmo https://www.palmo.co.in/
[desktop] title='Palmo Coconut Co. - Pure Coconut Water' gen='Next.js'
  libs=['Lenis'] canvases=[{'w': 1440, 'h': 900, 'gl': 'webgl2'}, {'w': 421, 'h': 500, 'gl': 'webgl2'}, {'w': 421, 'h': 500, 'gl': 'webgl2'}, {'w': 421, 'h': 500, 'gl': 'webgl2'}] videos=0 []
  pageH=11831 sections=10 imgs=3 svgs=70 sticky=3 fixed=9
  weight=9520KB req=63 byType={'Document': 44, 'Font': 100, 'Script': 710, 'Stylesheet': 14, 'Manifest': 1, 'Other': 6, 'Fetch': 4715, 'Image': 3929}
  h1 [] | h2 ['COCONUT', 'PURE COCONUT WATER. NATURALLY HYDRATING, REFRESHINGLY PURE FRESH CLEAN , FROM NA', 'Explore all flavours', 'PALMO']
  nav ['Home', 'Our Story', 'Flavours', 'Benefits', 'Contact']
  fonts {'h1': 'Khand, "Khand Fallback"', 'body': 'Inter, "Inter Fallback", sans-serif', 'h1size': '135px'} colors {'bodyBg': 'rgb(248, 248, 240)', 'bodyColor': 'rgb(70, 55, 33)', 'h1Color': 'rgb(70, 55, 33)'}
  scripts ['www.palmo.co.in/_next/static/chunks/10muk0s002m9w.js', 'www.palmo.co.in/_next/static/chunks/0iec5q4ack_04.js', 'www.palmo.co.in/_next/static/chunks/turbopack-2iyoiymdh', 'www.palmo.co.in/_next/static/chunks/338t1e2nqb5r3.js', 'www.palmo.co.in/_next/static/chunks/2--w9tz-22jso.js', 'www.palmo.co.in/_next/static/chunks/0go91qjosk0r7.js', 'www.palmo.co.in/_next/static/chunks/03qfc0gje7fcu
  big [(3130, 'Fetch', 'https://www.palmo.co.in/model/coconut.glb'), (1471, 'Fetch', 'https://www.palmo.co.in/hdri/empty_warehouse_01_1k.hdr'), (787, 'Image', 'https://www.palmo.co.in/fruits/watermolon.webp?v=2'), (509, 'Image', 'https://www.palmo.co.in/model/tex/litchi.webp'), (494, 'Image', 'https://www.palmo.co.in/model/tex/guava.webp'), (429, 'Image', 'https://www.palmo.co.in/model/tex/waterme
  errs []
  libs=['Lenis'] canvases=[{'w': 780, 'h': 1688, 'gl': 'webgl2'}, {'w': 497, 'h': 372, 'gl': 'webgl2'}, {'w': 497, 'h': 372, 'gl': 'webgl2'}, {'w': 497, 'h': 372, 'gl': 'webgl2'}] videos=0 []
  pageH=9931 sections=10 imgs=3 svgs=70 sticky=3 fixed=9
  weight=1KB req=62 byType={'Document': 0, 'Font': 0, 'Stylesheet': 0, 'Script': 0, 'Manifest': 0, 'Fetch': 1, 'Other': 0, 'Image': 0}
  errs []
======================================================================
agrumea https://www.agrumeafarm.it/
[desktop] title='Agrumea Farm | Jams, pestos and flavours of Sicily' gen=''
  libs=['Lenis', 'nuxt'] canvases=[{'w': 300, 'h': 150, 'gl': 'webgl2'}, {'w': 300, 'h': 150, 'gl': 'webgl2'}, {'w': 300, 'h': 150, 'gl': 'webgl2'}, {'w': 300, 'h': 150, 'gl': 'webgl2'}] videos=0 []
  pageH=900 sections=1 imgs=12 svgs=25 sticky=0 fixed=9
  weight=1280KB req=59 byType={'Document': 65, 'Script': 423, 'Stylesheet': 6, 'Other': 17, 'Image': 676, 'Font': 73, 'Manifest': 1, 'XHR': 0, 'Fetch': 18}
  h1 ['Agrumea Farm: Sicilian artisan marmalades, spreads and preserves'] | h2 []
  nav ['IT', 'EN']
  fonts {'h1': 'ivystyle-sans, "Avenir Next", "Helvetica Neue", Helvetica, A', 'body': 'ivystyle-sans, "Avenir Next", "Helvetica Neue", Helvetica, A', 'h1size': '32px'} colors {'bodyBg': 'rgb(253, 243, 235)', 'bodyColor': 'rgb(118, 37, 48)', 'h1Color': 'rgb(118, 37, 48)'}
  scripts ['www.agrumeafarm.it/_nuxt/5uUeoJaR.js', 'www.googletagmanager.com/gtag/js', 'static.cloudflareinsights.com/beacon.min.js/v31edd6df95cf4e85bb4c19e7']
  big [(209, 'Script', 'https://www.agrumeafarm.it/_nuxt/5uUeoJaR.js'), (175, 'Script', 'https://www.googletagmanager.com/gtag/js?id=G-PNTJV1LQLZ'), (56, 'Image', 'te/ahvhdweQX7-eWdI5_fragola_result.webp?auto=format,compress'), (53, 'Image', 'ahvhdAeQX7-eWdI2_caponata_result-1.webp?auto=format,compress'), (53, 'Image', 'ite/ahvhggeQX7-eWdJE_pera_result-1.webp?auto=format,compress'), (52, 'Image', 
  errs []
  libs=['Lenis', 'nuxt'] canvases=[{'w': 300, 'h': 150, 'gl': '2d/other'}, {'w': 300, 'h': 150, 'gl': '2d/other'}, {'w': 300, 'h': 150, 'gl': '2d/other'}, {'w': 300, 'h': 150, 'gl': '2d/other'}] videos=0 []
  pageH=844 sections=1 imgs=12 svgs=25 sticky=0 fixed=11
  weight=67KB req=68 byType={'Document': 65, 'Stylesheet': 0, 'Script': 0, 'Other': 1, 'Font': 0, 'Image': 0, 'Manifest': 1, 'Fetch': 0, 'XHR': 0}
  errs []
======================================================================
ciao https://www.ciaoenergy.com/
[desktop] title='Ciao Energy - L’energy drink parfaite' gen='Webflow'
  libs=['gsap', 'ScrollTrigger', 'Lenis', 'Webflow'] canvases=[{'w': 1440, 'h': 900, 'gl': 'webgl2'}] videos=7 [{'src': '/cdn.skaald.com/ciaoenergy/loader/Ciao-energy_loader-v2.webm', 'loop': False, 'muted': True, 'autoplay': True, 'dur': 7}, {'src': 'om/ciaoenergy/loop/Ciao-energy_background_double-litchi.webm', 'loop': True, 'muted': True, 'autoplay': False, 'dur': 0}]
  pageH=12807 sections=11 imgs=2 svgs=41 sticky=0 fixed=15
  weight=5084KB req=76 byType={'Document': 48, 'Stylesheet': 10, 'Image': 1460, 'Script': 626, 'Font': 157, 'Media': 365, 'Fetch': 2418, 'Other': 1, 'Preflight': 0}
  h1 [] | h2 ['FOIRE AUX QUESTIONS']
  nav []
  fonts {'h1': '"Franklin Gothic Atf", Arial, sans-serif', 'body': 'Geist, Arial, sans-serif', 'h1size': '60.0048px'} colors {'bodyBg': 'rgb(0, 0, 0)', 'bodyColor': 'rgb(255, 255, 255)', 'h1Color': 'rgb(255, 255, 255)'}
  scripts ['cloud.umami.is/script.js', 'sibforms.com/forms/end-form/build/main.js', 'd3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js', 'cdn.prod.website-files.com/69fb53371d5b8e9c3f4e4c69/js/webflow.9a8', 'cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js', 'cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js', 'cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js']
  big [(1398, 'Fetch', 'https://cdn.skaald.com/ciaoenergy/webgl/hdri2.hdr'), (608, 'Fetch', 'https://cdn.skaald.com/ciaoenergy/webgl/base.glb'), (365, 'Media', '/cdn.skaald.com/ciaoenergy/loader/Ciao-energy_loader-v2.webm'), (251, 'Script', 's://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js'), (247, 'Image', 'aoenergy/textures/ciao-energy_texture_abricot_framboise.avif'), (239, 'Image',
  errs []
  libs=['gsap', 'ScrollTrigger', 'Lenis', 'Webflow'] canvases=[{'w': 780, 'h': 1688, 'gl': 'webgl2'}] videos=7 [{'src': '/cdn.skaald.com/ciaoenergy/loader/Ciao-energy_loader-v2.webm', 'loop': False, 'muted': True, 'autoplay': True, 'dur': 7}, {'src': 'om/ciaoenergy/loop/Ciao-energy_background_double-litchi.webm', 'loop': True, 'muted': True, 'autoplay': False, 'dur': 0}]
  pageH=12077 sections=11 imgs=2 svgs=41 sticky=0 fixed=15
  weight=0KB req=73 byType={'Document': 0, 'Stylesheet': 0, 'Image': 0, 'Script': 0, 'Media': 0, 'Font': 0, 'Fetch': 0}
  errs []
======================================================================
era https://www.eraresidence.mk/
[desktop] title='ERA Residence | Modern Residences in Skopje' gen=''
  libs=[] canvases=[] videos=0 []
  pageH=19384 sections=8 imgs=25 svgs=2 sticky=0 fixed=0
  weight=44842KB req=49 byType={'Document': 10, 'Image': 44516, 'Script': 185, 'Font': 104, 'Stylesheet': 9, 'Fetch': 6, 'Other': 11}
  h1 [] | h2 ['Rehatia fillon këtu...', 'KOMODITET QË NDIHET NË ÇDO DETAJ', 'BRENDA REZIDENCËS', 'REZIDENCA MODERNE NË SHKUP', 'INVESTIM PËR TË ARDHMEN', 'Rehatia fillon këtu...']
  nav ['GALERIA', 'REZERVO NJË VIZITË', 'Rreth Nesh', 'Galeria', 'Karakteristikat', 'Vizioni Ynë', 'Kontakt']
  fonts {'h1': '', 'body': 'Prettywise, Helvetica, Arial, sans-serif', 'h1size': ''} colors {'bodyBg': 'rgb(10, 10, 10)', 'bodyColor': 'rgb(237, 237, 237)', 'h1Color': ''}
  scripts ['www.eraresidence.mk/_next/static/chunks/4bd1b696-c023c6e352', 'www.eraresidence.mk/_next/static/chunks/255-cb395327542b56e', 'www.eraresidence.mk/_next/static/chunks/main-app-f9b5d20365', 'www.eraresidence.mk/_next/static/chunks/674-d0f83363bc92dba', 'www.eraresidence.mk/_next/static/chunks/17-83bc734c3f218aed', 'www.eraresidence.mk/_next/static/chunks/515-1e3410bb670ddec', 'www.erares
  big [(3400, 'Image', 'https://www.eraresidence.mk/slider-1.jpg'), (3318, 'Image', 'https://www.eraresidence.mk/1.jpg'), (3280, 'Image', 'ww.eraresidence.mk/interior/upper-floor-plan-transparent.png'), (3245, 'Image', 'w.eraresidence.mk/interior/ground-floor-plan-transparent.png'), (3094, 'Image', 'https://www.eraresidence.mk/slider-7.jpg'), (2922, 'Image', 'https://www.eraresidence.mk/second-sec
  errs []
  libs=[] canvases=[] videos=0 []
  pageH=18383 sections=8 imgs=25 svgs=2 sticky=0 fixed=0
  weight=85KB req=48 byType={'Document': 0, 'Stylesheet': 0, 'Font': 0, 'Script': 0, 'Image': 84, 'Other': 0, 'Fetch': 0}
  errs []
======================================================================
crav https://www.cravburgers.shop/
[desktop] title='CRAV | Sizzling' gen=''
  libs=['Lenis'] canvases=[] videos=0 []
  pageH=10804 sections=6 imgs=42 svgs=20 sticky=0 fixed=4
  weight=5930KB req=63 byType={'Document': 22, 'Stylesheet': 12, 'Image': 5441, 'Script': 381, 'Font': 49, 'Manifest': 1, 'Other': 7, 'Fetch': 18}
  h1 ['THE BURGER THE BURGER'] | h2 ['JUICY CHEESY FULLY LOADED', 'FOOD THAT FEELS GOOD', 'QUALITY THAT TRAVELS WITH YOU', 'A story in every bite.', 'FEEL THE CHANGE', 'CRAV']
  nav ['CRAV', 'BURGERS BURGERS', 'HOME', 'ABOUT', 'OUR SPICES', 'LOCATIONS', 'CONTACT', 'HOME HOME', 'BURGERS BURGERS', 'SPICES SPICES']
  fonts {'h1': '"Mouse Memoirs", "Mouse Memoirs Fallback"', 'body': '"Mouse Memoirs", "Mouse Memoirs Fallback"', 'h1size': '432px'} colors {'bodyBg': 'rgb(245, 227, 205)', 'bodyColor': 'rgb(27, 27, 27)', 'h1Color': 'rgb(249, 24, 20)'}
  scripts ['www.cravburgers.shop/_next/static/chunks/0pqt~8bl3ukh4.js', 'www.cravburgers.shop/_next/static/chunks/0wj8l4fwydekq.js', 'www.cravburgers.shop/_next/static/chunks/0257pdz1-imal.js', 'www.cravburgers.shop/_next/static/chunks/turbopack-0b3buy4qy', 'www.cravburgers.shop/_next/static/chunks/0jg2m1sj81gv0.js', 'www.cravburgers.shop/_next/static/chunks/15b1_xl_2nu.v.js', 'www.cravburgers.sho
  big [(2616, 'Image', 'https://www.cravburgers.shop/img/burgerselfie.png'), (1706, 'Image', 'https://www.cravburgers.shop/img/burger-boy.png'), (411, 'Image', 'https://www.cravburgers.shop/img-webp/spices.webp'), (162, 'Image', 'vburgers.shop/_next/image?url=%2Fimg%2Fplane.png&w=1080&q=75'), (80, 'Image', '.shop/_next/image?url=%2Fimg-webp%2FburgerH.webp&w=1080&q=75'), (71, 'Script', '://www.crav
  errs []
  libs=['Lenis'] canvases=[] videos=0 []
  pageH=6938 sections=6 imgs=38 svgs=19 sticky=0 fixed=3
  weight=619KB req=63 byType={'Document': 0, 'Stylesheet': 0, 'Font': 0, 'Script': 0, 'Image': 618, 'Manifest': 0, 'Fetch': 1}
  errs []
======================================================================
stringtune https://stringtune.com/
[desktop] title='StringTune – Free Online String & Instrument Tuner' gen='Hugo 0.114.0'
  libs=[] canvases=[{'w': 1440, 'h': 427, 'gl': '2d/other'}] videos=0 []
  pageH=3190 sections=1 imgs=8 svgs=0 sticky=0 fixed=4
  weight=539KB req=37 byType={'Document': 6, 'Script': 464, 'Stylesheet': 7, 'Manifest': 1, 'Image': 9, 'Fetch': 0, 'Ping': 1, 'XHR': 13, 'Other': 38}
  h1 ['Online Tuner for Guitar, Bass and Ukulele'] | h2 ['Reference pitch', 'How to tune a guitar online in 3 steps', 'Standard guitar tuning: E A D G B E', 'Tips for accurate tuning', 'Guitar', 'Bass', 'Ukulele', 'Tune another instrument']
  nav ['Violin tuner', 'Viola tuner', 'Cello tuner', 'Mandolin tuner', 'Bouzouki tuner', 'Banjo tuner', 'Ukulele tuner', 'Bass tuner']
  fonts {'h1': '"system-ui", -apple-system, "segoe ui", roboto, oxygen, ubun', 'body': '"system-ui", -apple-system, "segoe ui", roboto, oxygen, ubun', 'h1size': '20px'} colors {'bodyBg': 'rgba(0, 0, 0, 0)', 'bodyColor': 'rgb(196, 211, 219)', 'h1Color': 'rgb(244, 143, 177)'}
  scripts ['pagead2.googlesyndication.com/pagead/managed/js/adsense/m202610010101', 'stringtune.com/js/analytics.js', 'stringtune.com/js/main.c63279b297ec092618dc85b7aedb83d', 'stringtune.com/js/production.js', 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'www.googletagmanager.com/gtag/js', 'stringtune.com/js/tuner/screenlock.js', 'stringtune.com/js/lang.js', 'stringtune.com/js/tuner/
  big [(187, 'Script', 'com/pagead/managed/js/adsense/m202610010101/show_ads_impl.js'), (186, 'Script', 'https://www.googletagmanager.com/gtag/js?id=G-ZJQ4QQXGDS'), (66, 'Script', '.com/pagead/js/adsbygoogle.js?client=ca-pub-8679955917317735'), (31, 'Other', 's://stringtune.com/images/favicon/android-chrome-192x192.png'), (13, 'XHR', 'odar?sv=200&tid=gda&tv=r20261005&st=env&sjk=4930068685558945'),
  errs []
  libs=[] canvases=[{'w': 390, 'h': 361, 'gl': '2d/other'}] videos=0 []
  pageH=4314 sections=1 imgs=8 svgs=0 sticky=0 fixed=4
  weight=13KB req=34 byType={'Document': 0, 'Stylesheet': 0, 'Script': 0, 'Image': 0, 'Manifest': 0, 'Other': 0, 'Fetch': 0, 'XHR': 13}
  errs []
======================================================================
ethical https://ethicallifeworld.com/
[desktop] title='Daily Multivitamin Gummies | Ethical Life' gen='WordPress 7.1.3'
  libs=['gsap', 'ScrollTrigger', 'Lenis'] canvases=[] videos=0 []
  pageH=7801 sections=1 imgs=434 svgs=5 sticky=1 fixed=4
  weight=20898KB req=497 byType={'Document': 32, 'Stylesheet': 106, 'Script': 744, 'Image': 19910, 'Manifest': 1, 'Font': 104, 'Fetch': 0, 'Other': 1}
  h1 ['Daily Multivitamin Gummies'] | h2 ['Why Choose Our Vitamins', 'Pharmacist and Nutritionist Formulated', 'Clean Ingredients You Can Feel Good About', 'Benefits of Daily Multivitamin Gummies', 'Gummies vs. Pills', 'Who Our Daily Multivitamin Gummies Are For', 'Frequently Asked Questions', 'Start Your Daily Wellness Routine']
  nav []
  fonts {'h1': 'Sora, sans-serif', 'body': 'Inter, sans-serif', 'h1size': '168.641px'} colors {'bodyBg': 'rgb(255, 255, 255)', 'bodyColor': 'rgb(45, 45, 45)', 'h1Color': 'rgb(45, 45, 45)'}
  scripts ['ethicallifeworld.com/wp-content/themes/ethical-life/js/all.j', 'ethicallifeworld.com/wp-content/themes/ethical-life/js/main.', 'ethicallifeworld.com/wp-includes/js/jquery/jquery.min.js', 'ethicallifeworld.com/wp-includes/js/jquery/jquery-migrate.mi', 'ethicallifeworld.com/wp-content/plugins/woocommerce/assets/j', 'ethicallifeworld.com/wp-content/plugins/woocommerce/assets/j', 'ethicall
  big [(941, 'Image', 'rld.com/wp-content/uploads/2025/12/EthicalLife_IMG_2769.jpeg'), (930, 'Image', 'thicallifeworld.com/wp-content/uploads/2025/11/IMG_3855.jpeg'), (876, 'Image', 'thicallifeworld.com/wp-content/uploads/2025/11/IMG_2946.jpeg'), (763, 'Image', 'om/wp-content/uploads/2025/12/Photoroom_20251216_143420.jpeg'), (413, 'Image', 'icallifeworld.com/wp-content/uploads/2025/10/popup_image.
  errs []
  libs=['gsap', 'ScrollTrigger', 'Lenis'] canvases=[] videos=0 []
  pageH=13709 sections=1 imgs=434 svgs=5 sticky=1 fixed=5
  weight=32KB req=495 byType={'Document': 32, 'Stylesheet': 0, 'Image': 0, 'Script': 0, 'Font': 0, 'Manifest': 0}
  errs []
======================================================================
on https://www.on.energy/
[desktop] title='ON.energy | The Race is ON for Grid-Safe AI Power' gen=''
  libs=[] canvases=[{'w': 1440, 'h': 900, 'gl': '2d/other'}, {'w': 2500, 'h': 1318, 'gl': 'webgl'}] videos=2 [{'src': 'a.storyblok.com/f/288034353253643/x/4772c775e3/home-hero.mp4', 'loop': True, 'muted': True, 'autoplay': True, 'dur': 13}, {'src': 'https://www.on.energy/video/trail.mp4', 'loop': True, 'muted': True, 'autoplay': True, 'dur': 8}]
  pageH=15594 sections=10 imgs=16 svgs=29 sticky=2 fixed=9
  weight=20730KB req=414 byType={'Document': 290, 'Stylesheet': 25, 'Script': 1146, 'Other': 57, 'Manifest': 1, 'Image': 3004, 'Font': 158, 'Media': 16026, 'Ping': 1, 'Fetch': 21, 'XHR': 2}
  h1 ['Grid-Safe Power for AI Factories.'] | h2 ['ERCOT-gradevoltage ride-through', 'O U R E X P E R T I S E', 'O U R P E R F O R M A N C E', "Let's get it ON"]
  nav ['Home page', 'AI Workloads', 'Projects', 'Technology', 'AI UPS', 'Parallel BESS vs. AI UPS', 'Financing', 'Team', 'Careers', 'Press']
  fonts {'h1': '"Univers Next Pro", sans-serif', 'body': '"Univers Next Pro", sans-serif', 'h1size': '64px'} colors {'bodyBg': 'rgb(0, 0, 0)', 'bodyColor': 'rgb(238, 238, 238)', 'h1Color': 'rgb(238, 238, 238)'}
  scripts ['js.hs-banner.com/v2/51117502/banner.js', 'js.hscollectedforms.net/collectedforms.js', 'js.hs-analytics.net/analytics/1791379500000/51117502.js', 'scripts.clarity.ms/0.8.70/clarity.js', 'snap.licdn.com/li.lms-analytics/insight.beta.min.js', 'www.clarity.ms/tag/w52vfs9tgz', 'snap.licdn.com/li.lms-analytics/insight.min.js', 'www.googletagmanager.com/gtag/js', 'www.googletagmanager.com/gtm
  big [(8654, 'Media', 'https://www.on.energy/video/trail.mp4'), (7372, 'Media', 'a.storyblok.com/f/288034353253643/x/4772c775e3/home-hero.mp4'), (2996, 'Image', '/f/288034353253643/1920x1440/073f7c873e/home-hero-poster.png'), (290, 'Document', 'https://www.on.energy/'), (267, 'Script', 'https://www.on.energy/_nuxt/BEwoyFFn.js'), (240, 'Script', 'https://www.on.energy/_nuxt/DqFK1bza.js')]
  errs []
  libs=[] canvases=[{'w': 780, 'h': 1688, 'gl': '2d/other'}, {'w': 2500, 'h': 1318, 'gl': 'webgl'}] videos=2 [{'src': 'a.storyblok.com/f/288034353253643/x/4772c775e3/home-hero.mp4', 'loop': True, 'muted': True, 'autoplay': True, 'dur': 13}, {'src': 'https://www.on.energy/video/trail.mp4', 'loop': True, 'muted': True, 'autoplay': True, 'dur': 8}]
  pageH=17533 sections=10 imgs=16 svgs=29 sticky=2 fixed=9
  weight=13KB req=405 byType={'Document': 0, 'Stylesheet': 0, 'Image': 11, 'Script': 1, 'Other': 0, 'Media': 0, 'Font': 0, 'Manifest': 0, 'XHR': 1, 'Fetch': 0}
  errs []
```
