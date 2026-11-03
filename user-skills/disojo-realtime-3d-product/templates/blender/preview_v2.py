# Quick Cycles look at the v2 model on a sheet-like grey studio, without touching the old scene setup (restored after).
import bpy, math
from mathutils import Vector
sc = bpy.context.scene; O = bpy.data.objects
OUT = '/Users/tejjo/Desktop/websites ARCHIVE/vael-site/blender/v2/renders/'
V = globals().get('VIEW', 'front')
keep = {o.name: o.hide_render for o in O}
for o in O: o.hide_render = not o.name.startswith('V2_')
world_keep = sc.world
w = bpy.data.worlds.get('V2_World') or bpy.data.worlds.new('V2_World'); w.use_nodes = True; nt = w.node_tree; nt.nodes.clear()
env = nt.nodes.new('ShaderNodeTexEnvironment'); env.image = bpy.data.images.get('studio_small_09_2k.hdr') or bpy.data.images.load('/Users/tejjo/Desktop/websites ARCHIVE/vael-site/proof3d/public/env/studio_small_09_2k.hdr')
mp = nt.nodes.new('ShaderNodeMapping'); tc = nt.nodes.new('ShaderNodeTexCoord'); mp.inputs['Rotation'].default_value = (0, 0, math.radians(globals().get('ENVROT', 40)))
nt.links.new(tc.outputs['Generated'], mp.inputs[0]); nt.links.new(mp.outputs[0], env.inputs[0])
bg = nt.nodes.new('ShaderNodeBackground'); bg.inputs['Strength'].default_value = 1.0; nt.links.new(env.outputs[0], bg.inputs[0])
# camera rays see flat grey, lighting comes from the HDRI
lp = nt.nodes.new('ShaderNodeLightPath'); flat = nt.nodes.new('ShaderNodeBackground'); flat.inputs['Color'].default_value = (0.3, 0.29, 0.28, 1)
mix = nt.nodes.new('ShaderNodeMixShader'); nt.links.new(lp.outputs['Is Camera Ray'], mix.inputs[0]); nt.links.new(bg.outputs[0], mix.inputs[1]); nt.links.new(flat.outputs[0], mix.inputs[2])
out = nt.nodes.new('ShaderNodeOutputWorld'); nt.links.new(mix.outputs[0], out.inputs[0])
sc.world = w
cam = O['Cam']; ck = (cam.location.copy(), cam.rotation_euler.copy(), cam.data.lens, cam.data.sensor_fit, cam.data.dof.use_dof)
rk = (sc.render.resolution_x, sc.render.resolution_y, sc.cycles.samples, sc.render.film_transparent, sc.view_settings.view_transform, sc.view_settings.look)
def aim(t): cam.rotation_euler = (Vector(t) - cam.location).to_track_quat('-Z', 'Y').to_euler()
shots = {
  'front': ((0, -1.25, 0.14), (0, 0, 0.1375), 85, (900, 1350)),
  'close': ((0, -0.30, 0.04), (0, 0, 0.045), 85, (1200, 1200)),
  'cap':   ((0.05, -0.16, 0.36), (0, 0, 0.268), 100, (1200, 1200)),
  'bottom':((0.0, -0.06, -0.20), (0, 0, 0.0), 100, (1200, 1200)),
}
loc, tgt, lens, res = shots[V]
cam.location = loc; aim(tgt); cam.data.lens = lens; cam.data.sensor_fit = 'AUTO'; cam.data.dof.use_dof = False
sc.render.resolution_x, sc.render.resolution_y = res; sc.render.resolution_percentage = 100
sc.cycles.samples = globals().get('SAMPLES', 96); sc.render.film_transparent = False
sc.view_settings.view_transform = 'AgX'; sc.view_settings.look = 'None'
sc.render.filepath = OUT + V + '.png'; bpy.ops.render.render(write_still=True)
# restore
cam.location, cam.rotation_euler, cam.data.lens, cam.data.sensor_fit, cam.data.dof.use_dof = ck
sc.render.resolution_x, sc.render.resolution_y, sc.cycles.samples, sc.render.film_transparent, sc.view_settings.view_transform, sc.view_settings.look = rk
sc.world = world_keep
for n, h in keep.items(): O[n].hide_render = h
print('rendered', V)
