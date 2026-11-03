# VÆL ONE v2, built from the client reference sheet (2026-11-03): 275 mm tall with cap, 74 mm wide.
# Every part is a lathed profile (mm, r then z from the floor), spun into a real mesh with UVs laid out for baking:
# u = angle around the axis, v = distance along the profile. Lives in collection V2; the old model is left alone.
import bpy, bmesh, math
from mathutils import Vector
MM = 0.001
COL = 'V2'
col = bpy.data.collections.get(COL) or bpy.data.collections.new(COL)
if col.name not in bpy.context.scene.collection.children: bpy.context.scene.collection.children.link(col)
for o in list(col.objects): bpy.data.objects.remove(o, do_unlink=True)

def superellipse(r0, r1, z0, z1, n=2.4, k=28):
    # shoulder: wide at z0 (r0), closing to r1 at z1, meeting the collar almost flat like the sheet
    pts = []
    for i in range(1, k + 1):
        t = i / k
        pts.append((r1 + (r0 - r1) * (1 - t ** n) ** (1 / n), z0 + (z1 - z0) * t))
    return pts

def fillet(c, rad, a0, a1, k=8):
    # arc around centre c (r, z) from angle a0 to a1 (degrees)
    return [(c[0] + rad * math.cos(math.radians(a0 + (a1 - a0) * i / k)), c[1] + rad * math.sin(math.radians(a0 + (a1 - a0) * i / k))) for i in range(k + 1)]

def spin(name, prof, slots, steps=256):
    """prof: [(r, z, slot)] open profile in mm. Faces between point i and i+1 take slot of point i."""
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    uv = bm.loops.layers.uv.new('UVMap')
    # arc length along the profile for v
    L = [0.0]
    for a, b in zip(prof, prof[1:]): L.append(L[-1] + math.hypot(b[0] - a[0], b[1] - a[1]))
    tot = L[-1]
    ring = []
    for s in range(steps + 1):
        a = 2 * math.pi * s / steps
        ring.append([bm.verts.new((r * MM * math.cos(a), r * MM * math.sin(a), z * MM)) for r, z, _ in prof])
    for s in range(steps):
        for i in range(len(prof) - 1):
            q = [ring[s][i], ring[s + 1][i], ring[s + 1][i + 1], ring[s][i + 1]]
            if q[0] is q[1] or len({v.index for v in q}) < 3: pass
            try: f = bm.faces.new(q)
            except ValueError: continue
            f.material_index = prof[i][2]; f.smooth = True
            us = [s / steps, (s + 1) / steps, (s + 1) / steps, s / steps]; vs = [L[i] / tot, L[i] / tot, L[i + 1] / tot, L[i + 1] / tot]
            for lp, uu, vv in zip(f.loops, us, vs): lp[uv].uv = (uu, vv)
    # weld the seam and the points on the axis, keeping UVs per face (welding verts does not merge UVs)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-7)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me); bm.free()
    for s in slots: me.materials.append(bpy.data.materials.get(s) or bpy.data.materials.new(s))
    me.set_sharp_from_angle(angle=math.radians(38))
    ob = bpy.data.objects.new(name, me); col.objects.link(ob)
    return ob, tot

R = 37.0
# Body: 0 powder outside, 1 polished steel (neck, threads, lip, inside), 2 powder bottom disc with the engraving
body = []
body += [(0.0, 1.6, 2), (26.5, 1.6, 2)]
body += [(r, z, 0) for r, z in fillet((26.5, 0.6), 1.0, 90, 0, 4)]           # step out of the recess
body += [(28.2, 0.0, 0), (33.0, 0.0, 0)]                                       # foot ring on the floor
body += [(r, z, 0) for r, z in fillet((33.0, 4.0), 4.0, -90, 0, 10)]           # bottom fillet up to the wall
body += [(R, 8.0, 0), (R, 200.0, 0)]
body += [(r, z, 0) for r, z in superellipse(R, 26.6, 200.0, 244.5)]
body += [(26.6, 248.4, 0), (26.4, 248.7, 1)]                                   # collar top, steel starts at the seal seat
body += [(24.2, 248.9, 1), (23.6, 249.3, 1)]
z = 249.3
for i in range(4):                                                             # threads
    body += [(23.6, z, 1), (24.4, z + 0.8, 1), (24.4, z + 1.3, 1), (23.6, z + 2.1, 1)]; z += 2.7
body += [(23.6, z, 1), (23.6, 261.2, 1)]
body += [(r, z, 1) for r, z in fillet((22.6, 261.2), 1.0, 0, 180, 8)]          # rolled lip
body += [(21.6, 252.0, 1), (24.0, 246.0, 1), (33.0, 236.0, 1), (34.4, 222.0, 1), (34.4, 10.0, 1), (31.0, 6.0, 1), (0.0, 6.0, 1)]
b, bl = spin('V2_Body', body, ['V2_Powder', 'V2_SteelPolished', 'V2_PowderBottom'])

# Seal: thin dark ring between collar and cap, as on the sheet
g, _ = spin('V2_Seal', [(23.9, 248.5, 0), (25.6, 248.5, 0), (25.9, 248.8, 0), (25.9, 250.3, 0), (25.6, 250.6, 0), (23.9, 250.6, 0), (23.9, 248.5, 0)], ['V2_Rubber'], steps=192)

# Cap: 0 machined side, 1 machined top, 2 bore (inside)
cap = [(23.9, 266.0, 2), (23.9, 250.6, 2), (24.7, 250.6, 0)]
cap += [(r, z, 0) for r, z in fillet((24.7, 251.15), 0.55, -90, 0, 5)]
cap += [(25.25, 274.2, 0)]
cap += [(r, z, 1) for r, z in fillet((24.45, 274.2), 0.8, 0, 90, 6)]
cap += [(0.0, 275.0, 1)]
c, _ = spin('V2_Cap', cap, ['V2_CapSide', 'V2_CapTop', 'V2_CapBore'])

# The Core: perforated tube, two rims at the top (sheet), open rolled bottom. 0 tube, 1 rims
core = [(20.0, 193.0, 0)]
core += [(r, z, 0) for r, z in fillet((20.25, 193.0), 0.25, 180, 360, 6)]
core += [(20.5, 253.0, 0), (20.5, 255.6, 1), (22.2, 255.9, 1), (22.5, 256.6, 1), (22.5, 258.3, 1), (22.0, 258.7, 1), (22.0, 259.3, 1),
         (22.5, 259.7, 1), (22.5, 261.4, 1), (22.1, 261.9, 1), (20.0, 261.9, 1), (20.0, 193.0, 0)]
k, kl = spin('V2_Core', core, ['V2_CoreTube', 'V2_CoreRim'])

# O-ring under the Core rim (the black ring in the sheet's exploded view)
bpy.ops.mesh.primitive_torus_add(major_radius=21.7 * MM, minor_radius=0.9 * MM, major_segments=192, minor_segments=24, location=(0, 0, 255.0 * MM))
t = bpy.context.active_object; t.name = 'V2_ORing'
for c0 in t.users_collection: c0.objects.unlink(t)
col.objects.link(t); t.data.materials.append(bpy.data.materials.get('V2_Rubber'))
for p in t.data.polygons: p.use_smooth = True
t.data.uv_layers[0].name = 'UVMap'

for o in col.objects: o.hide_render = False; o.hide_set(False)
print({o.name: (round(o.dimensions.x * 1000, 1), round(o.dimensions.z * 1000, 1), len(o.data.vertices)) for o in col.objects}, 'body profile mm', round(bl, 1))
