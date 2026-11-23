# print code windows around a keyword that also hold scroll/animation code. python3 ctx.py <dir> <regex> [win] [max]
import sys,re,glob
d,pat=sys.argv[1],re.compile(sys.argv[2],re.I); win=int(sys.argv[3]) if len(sys.argv)>3 else 20; mx=int(sys.argv[4]) if len(sys.argv)>4 else 4
anim=re.compile(r'scrollTrigger|ScrollTrigger|gsap\.|\.to\(|\.fromTo\(|clipPath|clip-path|yPercent|scale',re.I)
n=0
for f in sorted(glob.glob(d+'/js/*.js')):
    if re.search(r'(gsap|ScrollTrigger|lenis|three|swiper|lottie|jquery|barba|vue|runtime|polyfill)[\w.-]*\.(min\.)?js$',f.split('/')[-1],re.I) and 'inline' not in f: continue
    L=open(f,errors='ignore').read().split('\n'); last=-999
    for i,l in enumerate(L):
        if pat.search(l) and i-last>win:
            w='\n'.join(L[max(0,i-win//2):i+win])
            if anim.search(w):
                print(f'--- {f.split("/")[-1]}:{i+1}'); print(w[:2500]); last=i; n+=1
                if n>=mx: sys.exit()
