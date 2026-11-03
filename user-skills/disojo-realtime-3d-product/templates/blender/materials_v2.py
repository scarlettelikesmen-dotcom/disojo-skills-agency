# Materials for VÆL ONE v2 (Cycles). All detail is procedural or a mask projected in object space, so it can be
# baked into the UV layout afterwards. Colour of the powder is set per colourway by COLOURWAY (default Mineral).
import bpy, math
TEX = '/Users/tejjo/Desktop/websites ARCHIVE/vael-site/blender/v2/tex/'
WAY = globals().get('COLOURWAY', 'Mineral')
POWDER = {'Mineral': (0.70, 0.675, 0.635), 'Carbon': (0.018, 0.018, 0.018), 'Slate': (0.05, 0.068, 0.082)}[WAY]
INK = {'Mineral': (0.028, 0.028, 0.028), 'Carbon': (0.30, 0.30, 0.29), 'Slate': (0.42, 0.44, 0.45)}[WAY]

def img(name, cs='Non-Color'):
    i = bpy.data.images.get(name) or bpy.data.images.load(TEX + name); i.colorspace_settings.name = cs; return i

class G:
    """tiny node-graph helper"""
    def __init__(self, mat):
        mat.use_nodes = True; self.t = mat.node_tree; self.t.nodes.clear(); self.x = 0
        self.out = self.n('ShaderNodeOutputMaterial'); self.bsdf = self.n('ShaderNodeBsdfPrincipled')
        self.l(self.bsdf.outputs[0], self.out.inputs['Surface'])
        self.obj = self.n('ShaderNodeTexCoord').outputs['Object']
    def n(self, t, **kw):
        nd = self.t.nodes.new(t); nd.location = (self.x, 0); self.x -= 180
        for k, v in kw.items():
            if k.startswith('i_'): nd.inputs[k[2:].replace('_', ' ')].default_value = v
            else: setattr(nd, k, v)
        return nd
    def l(self, a, b): self.t.links.new(a, b)
    def math(self, op, a, b=None, **kw):
        m = self.n('ShaderNodeMath', operation=op, **kw)
        for i, v in enumerate([a, b]):
            if v is None: continue
            if isinstance(v, (int, float)): m.inputs[i].default_value = v
            else: self.l(v, m.inputs[i])
        return m.outputs[0]
    def xyz(self):
        s = self.n('ShaderNodeSeparateXYZ'); self.l(self.obj, s.inputs[0]); return s.outputs['X'], s.outputs['Y'], s.outputs['Z']
    def image(self, name, u, v, ext='CLIP'):
        c = self.n('ShaderNodeCombineXYZ'); self.l(u, c.inputs['X']); self.l(v, c.inputs['Y'])
        t = self.n('ShaderNodeTexImage', image=img(name), extension=ext, interpolation='Cubic'); self.l(c.outputs[0], t.inputs['Vector']); return t.outputs['Color']
    def noise(self, vec, scale, detail=6, rough=0.55):
        nz = self.n('ShaderNodeTexNoise', i_Scale=scale, i_Detail=detail, i_Roughness=rough); self.l(vec, nz.inputs['Vector']); return nz.outputs['Fac']
    def scaled(self, sx, sy, sz):
        m = self.n('ShaderNodeMapping', vector_type='POINT'); m.inputs['Scale'].default_value = (sx, sy, sz); self.l(self.obj, m.inputs['Vector']); return m.outputs[0]
    def mixc(self, fac, a, b):
        m = self.n('ShaderNodeMix', data_type='RGBA', blend_type='MIX'); self.l(fac, m.inputs['Factor'])
        for sock, v in [(m.inputs[6], a), (m.inputs[7], b)]:
            if isinstance(v, tuple): sock.default_value = (*v, 1)
            else: self.l(v, sock)
        return m.outputs[2]
    def bump(self, h, strength, dist, normal=None):
        b = self.n('ShaderNodeBump', i_Strength=strength, i_Distance=dist); self.l(h, b.inputs['Height'])
        if normal is not None: self.l(normal, b.inputs['Normal'])
        return b.outputs['Normal']
    def ramp(self, fac, lo, hi):
        m = self.n('ShaderNodeMapRange', clamp=True); self.l(fac, m.inputs['Value']); m.inputs['To Min'].default_value = lo; m.inputs['To Max'].default_value = hi; return m.outputs[0]

M = bpy.data.materials
def mat(name): return M.get(name) or M.new(name)

# --- powder coat: sandy grain (sheet "texture detail"), the spaced wordmark printed low on the front
g = G(mat('V2_Powder')); X, Y, Z = g.xyz()
theta = g.math('ARCTAN2', X, g.math('MULTIPLY', Y, -1))           # 0 at the front (-Y), positive toward +X
u = g.math('ADD', g.math('DIVIDE', g.math('MULTIPLY', theta, 0.037), 0.02604), 0.5)
v = g.math('ADD', g.math('DIVIDE', g.math('SUBTRACT', Z, 0.022), 0.00744), 0.5)
mark = g.math('MULTIPLY', g.image('wm-spaced.png', u, v), 1.0)
grain = g.noise(g.obj, 620, 3, 0.45); fine = g.noise(g.obj, 2600, 2, 0.5); grain2 = g.noise(g.obj, 520, 4, 0.5)
vor = g.n('ShaderNodeTexVoronoi', feature='F1', i_Scale=1500, i_Randomness=1.0); g.l(g.obj, vor.inputs['Vector'])
grit = g.math('POWER', g.math('SUBTRACT', 1.0, g.math('MINIMUM', g.math('MULTIPLY', vor.outputs['Distance'], 1.6), 1.0)), 3.0)   # small sand bumps
tint = g.math('ADD', g.math('MULTIPLY', g.math('SUBTRACT', grain2, 0.5), 0.06), 1.0)
base = g.mixc(mark, POWDER, INK)
tinted = g.n('ShaderNodeVectorMath', operation='MULTIPLY'); g.l(base, tinted.inputs[0]); g.l(tint, tinted.inputs[1])
g.l(tinted.outputs[0], g.bsdf.inputs['Base Color'])
rough = g.math('SUBTRACT', g.ramp(grain, 0.6, 0.8), g.math('MULTIPLY', mark, 0.22))
g.l(rough, g.bsdf.inputs['Roughness'])
h = g.math('ADD', g.math('ADD', g.math('MULTIPLY', grain, 1.0), g.math('MULTIPLY', fine, 0.18)), g.math('MULTIPLY', mark, 0.25))   # print sits a hair proud
g.l(g.bump(h, 1.0, 0.0006), g.bsdf.inputs['Normal'])
g.bsdf.inputs['Coat Weight'].default_value = 0.0

# --- bottom disc: same powder, the arc text and small wordmark printed in grey (sheet "bottom (close)")
g = G(mat('V2_PowderBottom')); X, Y, Z = g.xyz()
u = g.math('ADD', g.math('DIVIDE', X, 0.056), 0.5); v = g.math('ADD', g.math('DIVIDE', Y, 0.056), 0.5)
txt = g.image('bottom.png', u, v)
grain = g.noise(g.obj, 620, 3, 0.45)
g.l(g.mixc(txt, POWDER, tuple(c * 0.35 + i * 0.65 for c, i in zip(POWDER, INK))), g.bsdf.inputs['Base Color'])
g.l(g.ramp(grain, 0.62, 0.82), g.bsdf.inputs['Roughness'])
g.l(g.bump(g.math('SUBTRACT', grain, g.math('MULTIPLY', txt, 0.6)), 0.8, 0.0003), g.bsdf.inputs['Normal'])

# --- polished steel: neck, threads, lip, inside
g = G(mat('V2_SteelPolished')); g.bsdf.inputs['Base Color'].default_value = (0.72, 0.71, 0.69, 1); g.bsdf.inputs['Metallic'].default_value = 1
g.l(g.ramp(g.noise(g.obj, 300, 3), 0.07, 0.13), g.bsdf.inputs['Roughness'])

# --- cap side: vertical brushing (sheet "cap (side)")
g = G(mat('V2_CapSide')); g.bsdf.inputs['Base Color'].default_value = (0.66, 0.655, 0.64, 1); g.bsdf.inputs['Metallic'].default_value = 1
X, Y, Z = g.xyz(); theta = g.math('ARCTAN2', Y, X)
cy = g.n('ShaderNodeCombineXYZ'); g.l(g.math('MULTIPLY', theta, 0.025), cy.inputs['X']); g.l(g.math('MULTIPLY', Z, 0.02), cy.inputs['Y'])
streak = g.noise(cy.outputs[0], 3000, 4, 0.6)
g.l(g.ramp(streak, 0.2, 0.34), g.bsdf.inputs['Roughness'])
g.l(g.bump(streak, 0.25, 0.00004), g.bsdf.inputs['Normal'])

# --- cap top: spun rings from the centre, the Æ engraved (sheet "cap (top)")
g = G(mat('V2_CapTop')); g.bsdf.inputs['Metallic'].default_value = 1
X, Y, Z = g.xyz()
rho = g.math('SQRT', g.math('ADD', g.math('MULTIPLY', X, X), g.math('MULTIPLY', Y, Y)))
cr = g.n('ShaderNodeCombineXYZ'); g.l(g.math('MULTIPLY', rho, 1.0), cr.inputs['X']); g.l(g.math('MULTIPLY', g.math('ARCTAN2', Y, X), 0.0004), cr.inputs['Y'])
spun = g.noise(cr.outputs[0], 6000, 4, 0.6)
ae = g.image('mask-ae.png', g.math('ADD', g.math('DIVIDE', X, 0.0147), 0.5), g.math('ADD', g.math('DIVIDE', Y, 0.0147), 0.5))
ae = g.math('MULTIPLY', ae, 1.08, use_clamp=True)
g.l(g.mixc(ae, (0.68, 0.675, 0.66), (0.30, 0.295, 0.285)), g.bsdf.inputs['Base Color'])
g.l(g.math('ADD', g.ramp(spun, 0.16, 0.3), g.math('MULTIPLY', ae, 0.3)), g.bsdf.inputs['Roughness'])
g.l(g.bump(g.math('SUBTRACT', g.math('MULTIPLY', spun, 0.3), ae), 0.35, 0.0002), g.bsdf.inputs['Normal'])

# --- cap bore, rubber, Core
for nm, colr, met, rgh in [('V2_CapBore', (0.45, 0.445, 0.43), 1, 0.38), ('V2_Rubber', (0.012, 0.012, 0.012), 0, 0.62), ('V2_CoreRim', (0.70, 0.695, 0.68), 1, 0.16)]:
    g = G(mat(nm)); g.bsdf.inputs['Base Color'].default_value = (*colr, 1); g.bsdf.inputs['Metallic'].default_value = met; g.bsdf.inputs['Roughness'].default_value = rgh
g = G(mat('V2_CoreTube')); g.bsdf.inputs['Base Color'].default_value = (0.64, 0.635, 0.62, 1); g.bsdf.inputs['Metallic'].default_value = 1
X, Y, Z = g.xyz()
u = g.math('DIVIDE', g.math('ADD', g.math('ARCTAN2', Y, X), math.pi), 2 * math.pi)
v = g.math('SUBTRACT', 1.0, g.math('DIVIDE', g.math('SUBTRACT', Z, 0.196), 0.057))
perf = g.image('perf.png', u, v, ext='EXTEND')
g.l(perf, g.bsdf.inputs['Alpha'])
cz = g.n('ShaderNodeCombineXYZ'); g.l(g.math('MULTIPLY', u, 6.0), cz.inputs['X']); g.l(g.math('MULTIPLY', Z, 0.4), cz.inputs['Y'])
g.l(g.ramp(g.noise(cz.outputs[0], 2500, 3), 0.24, 0.36), g.bsdf.inputs['Roughness'])
print('materials ok', WAY)
