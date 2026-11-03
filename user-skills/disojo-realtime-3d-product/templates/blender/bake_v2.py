# Bake the v2 materials into textures for the web: colour, roughness, tangent normal, ambient occlusion (and the
# Core's perforation alpha). Lighting is not baked: the browser lights the bottle live with the HDRI.
# Other scene objects are hidden from render while baking so the old model does not shade the new one.
import bpy, os, time
sc = bpy.context.scene; O = bpy.data.objects
OUT = '/Users/tejjo/Desktop/websites ARCHIVE/vael-site/blender/v2/bake/'
os.makedirs(OUT, exist_ok=True)
WAY = globals().get('COLOURWAY', 'Mineral')
ONLY = globals().get('ONLY')            # e.g. ['V2_Body'] to rebake one part
JOBS = {
    'V2_Body': {'color': (2048, 4096), 'rough': (1024, 2048), 'normal': (2048, 4096), 'ao': (1024, 2048)},
    'V2_Cap':  {'color': (2048, 2048), 'rough': (1024, 1024), 'normal': (2048, 2048), 'ao': (1024, 1024)},
    'V2_Core': {'color': (1024, 1024), 'rough': (1024, 1024), 'ao': (1024, 1024), 'alpha': (2048, 2048)},
}
if ONLY: JOBS = {k: v for k, v in JOBS.items() if k in ONLY}
keep = {o.name: (o.hide_render, o.hide_get(), o.select_get()) for o in O}
for o in O: o.hide_render = not o.name.startswith('V2_')
eng = sc.render.engine; sc.render.engine = 'CYCLES'; smp = sc.cycles.samples
print('device', sc.cycles.device)

def rewire(mat, socket_name):
    """send whatever feeds the BSDF's socket into an Emission shader on the output; returns an undo function"""
    nt = mat.node_tree; bsdf = next(n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'); out = next(n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL')
    em = nt.nodes.new('ShaderNodeEmission'); sock = bsdf.inputs[socket_name]
    if sock.is_linked: nt.links.new(sock.links[0].from_socket, em.inputs['Color'])
    else:
        v = sock.default_value; em.inputs['Color'].default_value = (v[0], v[1], v[2], 1) if hasattr(v, '__len__') else (v, v, v, 1)
    nt.links.new(em.outputs[0], out.inputs['Surface'])
    def undo():
        nt.links.new(bsdf.outputs[0], out.inputs['Surface']); nt.nodes.remove(em)
    return undo

def bake(ob, kind, size):
    name = f"{ob.name[3:].lower()}-{kind}{'' if kind in ('normal', 'ao', 'alpha') or ob.name != 'V2_Body' else '-' + WAY.lower()}"
    img = bpy.data.images.get(name)
    if img: bpy.data.images.remove(img)
    img = bpy.data.images.new(name, size[0], size[1], alpha=False, float_buffer=False)
    img.colorspace_settings.name = 'sRGB' if kind == 'color' else 'Non-Color'
    nodes = []
    for slot in ob.material_slots:
        nt = slot.material.node_tree; n = nt.nodes.new('ShaderNodeTexImage'); n.image = img
        for x in nt.nodes: x.select = False
        n.select = True; nt.nodes.active = n; nodes.append((nt, n))
    undos = []
    if kind == 'color': undos = [rewire(s.material, 'Base Color') for s in ob.material_slots]; typ, sm = 'EMIT', 4
    elif kind == 'alpha': undos = [rewire(s.material, 'Alpha') for s in ob.material_slots]; typ, sm = 'EMIT', 4
    elif kind == 'rough': typ, sm = 'ROUGHNESS', 4
    elif kind == 'normal': typ, sm = 'NORMAL', 8
    else: typ, sm = 'AO', 96
    sc.cycles.samples = sm
    for o in O: o.select_set(False)
    ob.hide_set(False); ob.select_set(True); bpy.context.view_layer.objects.active = ob
    t = time.time()
    bpy.ops.object.bake(type=typ, normal_space='TANGENT', margin=16, margin_type='EXTEND', use_clear=True)
    for u in undos: u()
    for nt, n in nodes: nt.nodes.remove(n)
    img.filepath_raw = OUT + name + '.png'; img.file_format = 'PNG'; img.save()
    print(f'{name} {size} {time.time() - t:.0f}s')

for obn, kinds in JOBS.items():
    for kind, size in kinds.items(): bake(O[obn], kind, size)

sc.cycles.samples = smp; sc.render.engine = eng
for n, (hr, hv, sel) in keep.items():
    o = O.get(n)
    if o: o.hide_render = hr; o.hide_set(hv); o.select_set(sel)
print('bake done')
