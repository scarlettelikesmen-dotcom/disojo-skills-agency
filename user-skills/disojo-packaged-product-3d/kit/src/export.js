// Builds each template with neutral named materials and exports a binary GLB (no label texture: art is applied at runtime, like Ciao's can).
// Run by scripts/export_glb.cjs through the dev server; results land on window.__glb as base64.
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { BUILDERS } from './product3d/shapes';
import { createMaterials } from './product3d/materials';
const out = {};
const toB64 = (buf) => { let s = ''; const b = new Uint8Array(buf); for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(s); };
const exporter = new GLTFExporter();
for (const shape of Object.keys(BUILDERS)) {
  const root = BUILDERS[shape](createMaterials({ low: true })); root.name = shape;
  out[shape] = await new Promise((res, rej) => exporter.parse(root, (b) => res(toB64(b)), rej, { binary: true }));
}
window.__glb = out; window.__done = true;
