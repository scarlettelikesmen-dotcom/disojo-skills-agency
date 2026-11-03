# Export the project collection to a Draco GLB for the web. Images are not embedded: baked maps ship as WebP.
import bpy
COL = globals().get('COL', 'V2'); OUT = globals().get('OUT', '/path/to/proof3d/public/model/product.glb')
for o in bpy.context.view_layer.objects: o.select_set(o.name in bpy.data.collections[COL].all_objects)
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', use_selection=True, export_apply=True, export_materials='EXPORT',
    export_image_format='NONE', export_yup=True, export_normals=True, export_tangents=True, export_texcoords=True,
    export_draco_mesh_compression_enable=True, export_draco_mesh_compression_level=7, export_draco_position_quantization=16,
    export_draco_normal_quantization=12, export_animations=False, export_cameras=False, export_lights=False)
print('exported', OUT)
