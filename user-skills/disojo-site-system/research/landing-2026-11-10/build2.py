import json,re,os,html,random
from PIL import Image
e=html.escape
DROP={'ljubicicacademy.com','mcmaster.com','noma.dk','schoolofrock.com','woodendot.com'}
USE_REDO={'adamgrant.net','baolondon.com','granola.ai','gufram.it','kasiasiwosz.com','kvadrat.dk','melrobbins.com','p448.com','superhuman.com','thirdspace.london'}
A=[('yourcreative','https://yourcreative.com.au/'),('shortscut','https://shortscut.com/'),('monolog','https://bymonolog.com/'),('oh','https://www.oharchitecture.com.au/'),('supersolid','https://www.supersolid.agency/'),('disojo','https://www.disojostudio.com/')]
R=[('backhouse','https://www.backhouse.com/'),('hiss','https://www.hiss.sydney/'),('mammoth','https://mammothmurals.com/'),('slik','https://slik.com.au/'),('squiggle','https://www.squiggle.sydney/'),('ciao','https://www.ciaoenergy.com/'),('palmo','https://www.palmo.co.in/'),('agrume','https://www.agrumeafarm.it/en'),('alche','https://alche.studio/')]
def host(u): return re.sub(r'^www\.','',re.sub(r'^https?://','',u).split('/')[0])
def sid(h): return re.sub(r'[^a-z0-9]+','-',h.lower()).strip('-')
def out(src,i):
    im=Image.open(src).convert('RGB'); im=im.resize((1100,int(1100*im.height/im.width)),Image.LANCZOS); im.save(f'pub/shots/{i}.jpg','JPEG',quality=72,optimize=True,progressive=True)
pool=[]
for h,v in json.load(open('all.json')):
    if h in DROP: continue
    src=f'redo/{h}.jpg' if h in USE_REDO else '../'+v['shot']
    pool.append((sid(h),v['url'],host(v['url']),src))
for k,u in R: pool.append((sid(host(u)),u,host(u),f'new/{k}.jpg'))
assert len({p[0] for p in pool})==len(pool)
random.Random(11).shuffle(pool)
cards=[]
for k,u in A:
    i=sid(host(u)); out(f'new/{k}.jpg',i)
    cards.append(f'<article class="card ok" data-id="{i}" data-state="approved"><img src="shots/{i}.jpg" alt="Landing page of {e(host(u))}" width="1100" height="629" loading="lazy"><div class="row"><a href="{e(u)}" target="_blank" rel="noopener">{e(host(u))}</a><span class="tag">Approved</span></div></article>')
for n,(i,u,h,src) in enumerate(pool,1):
    out(src,i)
    cards.append(f'<article class="card" data-id="{i}" data-host="{e(h)}" data-url="{e(u)}"><img src="shots/{i}.jpg" alt="Landing page number {n}" width="1100" height="629" loading="lazy"><div class="row"><span class="num">{n}</span><a class="link" href="{e(u)}" target="_blank" rel="noopener" hidden>{e(h)}</a><span class="btns"><button type="button" data-v="no" aria-pressed="false">No</button><button type="button" data-v="yes" aria-pressed="false">Yes</button></span></div></article>')
s=open('shell2.html').read().replace('%%CARDS%%','\n'.join(cards)).replace('%%N%%',str(len(pool)))
open('../site-benchmarks.html','w').write(s)
fs={f'shots/{f}':f'pub/shots/{f}' for f in sorted(os.listdir('pub/shots'))}
print(len(pool),'to judge',len(fs),'files',round(sum(os.path.getsize('pub/shots/'+f) for f in os.listdir('pub/shots'))/1e6,1),'MB')
