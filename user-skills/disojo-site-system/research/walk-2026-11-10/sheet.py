# One review sheet per walked site: top row loader/first/menu/page change/footer, then scroll frames, then inner pages, then phone.
import sys,os,glob,json
from PIL import Image,ImageDraw,ImageChops,ImageStat
out,dest=sys.argv[1:3]; os.makedirs(dest,exist_ok=True)
W=1560; 
def row(fs,tw,th,cols):
    rows=(len(fs)+cols-1)//cols
    im=Image.new('RGB',(W,rows*(th+4)),(30,30,30))
    for i,f in enumerate(fs):
        try:
            t=Image.open(f).convert('RGB'); t.thumbnail((tw,th)); im.paste(t,((i%cols)*(W//cols)+2,(i//cols)*(th+4)+2))
        except Exception: pass
    return im
def sample(l,n):
    if len(l)<=n: return l
    return [l[round(i*(len(l)-1)/(n-1))] for i in range(n)]
for d in sorted(os.listdir(out)):
    p=os.path.join(out,d)
    if not os.path.exists(p+'/walk.json'): continue
    g=lambda pat:sorted(glob.glob(p+'/'+pat))
    c=g('c-*.jpg')
    # how much the screen changes per scroll step: low = continuous/pinned, high = cut to something new
    ch=[]; prev=None
    for f in c:
        try: t=Image.open(f).convert('L').resize((48,27))
        except Exception: continue
        if prev is not None: ch.append(round(ImageStat.Stat(ImageChops.difference(t,prev)).mean[0],1))
        prev=t
    R=json.load(open(p+'/walk.json')); R['frameChange']=ch; json.dump(R,open(p+'/walk.json','w'))
    top=g('a-load.jpg')+g('b-first.jpg')+g('e-menu1.jpg')+g('f-trans0.jpg')+g('f-trans1.jpg')+g('d-foot.jpg')
    parts=[row(top,256,146,6),row(sample(c,24),256,146,6),row(g('g-*a.jpg')+g('g-*b.jpg')+g('g-*c.jpg'),170,97,9) ,row(sample(g('h-*.jpg')+g('i-menu.jpg'),11),136,294,11)]
    H=sum(i.height+6 for i in parts); S=Image.new('RGB',(W,H),(0,0,0)); y=0
    for i in parts: S.paste(i,(0,y)); y+=i.height+6
    S.save(os.path.join(dest,d+'.jpg'),quality=62)
