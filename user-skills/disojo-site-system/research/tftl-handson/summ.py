"""Short code summary of a scan. python3 summ.py slug"""
import json, sys
d = json.load(open(f'scan/{sys.argv[1]}/scan.json'))
f = d.get('facts', {}); c = d.get('code', {}); m = d.get('media', {})
noise = {'createElement','createTextNode','createElementNS','createDocumentFragment','createEvent','initEvent','initMouseEvent','createComment','createText','createApp','createTask','createError','setupState','setupContext','createHref','createRange','createObjectURL','createShader','createProgram','createBuffer','createTexture','createFramebuffer','initCustomEvent','initUIEvent','initKeyboardEvent','createImageData','createLinearGradient','createElements','createAttribute','initKeyEvent','createTreeWalker','createExpression','createNSResolver','createPattern','createRadialGradient','createContextualFragment','createCDATASection','createHTML','createScript','createScriptURL','createPolicy'}
inits = [i for i in c.get('inits', []) if i not in noise]
print(d['slug'], '|', f.get('title','')[:70], '| h', f.get('h'), '| frames', d.get('wheelFrames'), '| MB', m.get('totalMB'))
print('libs', f.get('libs'), 'gen', f.get('gen','')[:30], 'canvas', f.get('canvases'), 'video', f.get('videos'))
print('fonts', f.get('fonts'))
print('gsap', c.get('gsapPlugins'), '| webgl', c.get('webgl'))
print('css', c.get('css'))
print('eases', c.get('eases')[:6])
print('inits', inits[:70])
a = sorted(f.get('attrs', {}).items(), key=lambda x: -x[1])
print('attrs', [k for k, v in a][:45])
print('media video', [u.split('/')[-1][:50] for u in m.get('video', [])][:6], '| models', [u.split('/')[-1][:50] for u in m.get('models', [])][:8])
print('scripts', [s.split('/')[-1][:60] for s in c.get('scripts', [])][:14])
print('errors', d.get('errors', [])[:3])
