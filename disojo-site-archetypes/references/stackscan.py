import re,sys,urllib.request,urllib.parse,concurrent.futures as cf
UA={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'}
SIGS={'gsap':r'gsap','ScrollTrigger':r'ScrollTrigger','Lenis':r'[Ll]enis','framer-motion/motion':r'framer-motion|motion\.dev|useScroll|useTransform|AnimatePresence','three.js':r'WebGLRenderer|THREE\.|three\.module|from"three"','r3f':r'react-three|@react-three','drei':r'drei','swiper':r'[Ss]wiper','lottie':r'lottie','locomotive':r'locomotive','splitting/SplitText':r'SplitText|SplitType|split-type|splitting','matter-physics':r'matter-js|Matter\.Engine','barba':r'barba','OGL':r'\bogl\b|from"ogl"','pixi':r'PIXI|pixi\.js','rive':r'rive-app|\.riv\b','postprocessing':r'postprocessing|EffectComposer','howler/audio':r'Howler|AudioContext|createMediaElementSource','draco':r'draco','ktx2/basis':r'ktx2|basis_transcoder','css-scroll-timeline':r'animation-timeline|view-timeline','webgl-shader':r'gl_FragColor|precision (highp|mediump)'}
def get(u):
    try:
        return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=25).read().decode('utf8','ignore')
    except Exception as e: return ''
def scan(base):
    html=get(base)
    srcs=set(urllib.parse.urljoin(base,m) for m in re.findall(r'<script[^>]+src=["\']([^"\']+)',html))
    srcs|=set(urllib.parse.urljoin(base,m) for m in re.findall(r'["\'](/_next/static/[^"\']+\.js)',html))|set(urllib.parse.urljoin(base,m) for m in re.findall(r'["\'](/_nuxt/[^"\']+\.js)',html))
    srcs=[s for s in srcs if not re.search(r'googletag|analytics|clarity|hotjar|hs-|doubleclick|adsbygoogle|facebook|linkedin|cloudflareinsights|umami|ahrefs|jquery',s)]
    blobs=list(cf.ThreadPoolExecutor(8).map(get,srcs[:40]))
    found={}
    for k,rx in SIGS.items():
        n=sum(1 for b in blobs if re.search(rx,b))
        if n: found[k]=n
    return len(srcs),sum(len(b) for b in blobs)//1024,found
for u in sys.argv[1:]:
    n,kb,f=scan(u);print(u,'| scripts',n,'| js KB(raw)',kb,'|',f)
