import * as THREE from 'three';

// Template shapes for packaged goods. Units are arbitrary (about 1 = 10 cm). Every shape is a Group of NAMED meshes with
// NAMED materials ("Label", "Metal", "Glass", "Content"), so the same file layout works as a GLB: the label art is never baked in.
// SPECS also tells the client's designer how big the flat label artwork must be (see labelSize()).
export const SPECS = {
  can:    { R: 0.33, H: 1.36, labelY0: 0.17, labelY1: 1.2 },   // slim 250 ml can
  jar:    { R: 0.5,  H: 0.9,  labelY0: 0.14, labelY1: 0.62 },  // 250-350 g jam / sauce jar
  bottle: { R: 0.36, H: 1.56, labelY0: 0.2,  labelY1: 0.98 }, // 500 ml bottle
  box:    { W: 0.8,  H: 1.3,  D: 0.4 },                       // carton / cosmetics box
};

// Flat label artwork size in px for a given px-per-unit (print files are usually 300 dpi: ask the client for the dieline).
export function labelSize(shape, pxPerUnit = 1000) {
  const s = SPECS[shape];
  if (shape === 'box') return { front: [Math.round(s.W * pxPerUnit), Math.round(s.H * pxPerUnit)], side: [Math.round(s.D * pxPerUnit), Math.round(s.H * pxPerUnit)], top: [Math.round(s.W * pxPerUnit), Math.round(s.D * pxPerUnit)] };
  return [Math.round(2 * Math.PI * s.R * pxPerUnit), Math.round((s.labelY1 - s.labelY0) * pxPerUnit)];
}

const lathe = (pts, seg = 96) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
const mesh = (geo, mat, name) => { const m = new THREE.Mesh(geo, mat); m.name = name; m.castShadow = true; m.receiveShadow = true; return m; };

// A printed band around the body. Lathe UV: u runs round the object from the front, v runs bottom to top.
const labelBand = (R, y0, y1, mat, paper) => {
  const m = mesh(lathe([[R + 0.002, y0], [R + 0.002, y1]], 128), mat, 'Label');
  m.castShadow = false;
  if (!paper) return m;
  // seen through glass, the far side of a real label is plain paper, not mirrored artwork
  const g = new THREE.Group(); g.name = 'LabelBand'; g.add(m);
  const back = mesh(lathe([[R + 0.0015, y0], [R + 0.0015, y1]], 128), paper, 'LabelBack'); back.castShadow = false; g.add(back); return g;
};

export function buildCan(mats) {
  const { R, H, labelY0, labelY1 } = SPECS.can; const g = new THREE.Group(); g.name = 'can';
  const body = [[0, 0.075], [0.14, 0.055], [0.215, 0.02], [0.245, 0], [0.272, 0.012], [0.29, 0.05], [R, 0.13], [R, H - 0.15], [R - 0.012, H - 0.11],
    [0.285, H - 0.075], [0.272, H - 0.05], [0.272, H - 0.025], [0.282, H - 0.01], [0.276, H], [0.262, H - 0.004], [0.255, H - 0.02], [0.23, H - 0.045], [0.0, H - 0.06]];
  g.add(mesh(lathe(body, 128), mats.metal, 'Shell'));
  g.add(labelBand(R, labelY0, labelY1, mats.label));
  const tab = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.012, 48), mats.metal); tab.name = 'Top'; tab.scale.set(1.55, 1, 0.8); tab.position.y = H - 0.052; tab.castShadow = true; g.add(tab);
  return g;
}

export function buildJar(mats) {
  const { R, labelY0, labelY1 } = SPECS.jar; const g = new THREE.Group(); g.name = 'jar';
  const glass = [[0, 0.02], [0.36, 0.02], [0.45, 0.045], [R, 0.13], [R, 0.66], [0.49, 0.72], [0.465, 0.76], [0.455, 0.79]];
  g.add(mesh(lathe(glass, 128), mats.glass, 'Glass'));
  g.add(mesh(lathe([[0, 0.05], [0.42, 0.05], [R - 0.035, 0.14], [R - 0.035, 0.58], [0.43, 0.68], [0, 0.68]], 96), mats.content, 'Content'));
  g.add(labelBand(R, labelY0, labelY1, mats.label, mats.paper));
  g.add(mesh(lathe([[0, 0.905], [0.5, 0.905], [0.523, 0.89], [0.53, 0.86], [0.53, 0.77], [0.515, 0.755], [0, 0.755]], 96), mats.metal, 'Lid'));
  return g;
}

export function buildBottle(mats) {
  const { R, labelY0, labelY1 } = SPECS.bottle; const g = new THREE.Group(); g.name = 'bottle';
  const outer = [[0, 0.02], [0.28, 0.02], [0.34, 0.04], [R, 0.1], [R, 1.0], [0.35, 1.1], [0.3, 1.2], [0.2, 1.28], [0.135, 1.32], [0.118, 1.35], [0.118, 1.45], [0.132, 1.465], [0.132, 1.5]];
  g.add(mesh(lathe(outer, 128), mats.glass, 'Glass'));
  g.add(mesh(lathe([[0, 0.05], [0.27, 0.05], [R - 0.03, 0.12], [R - 0.03, 0.96], [0.32, 1.06], [0.26, 1.14], [0, 1.14]], 96), mats.content, 'Content'));
  g.add(labelBand(R, labelY0, labelY1, mats.label, mats.paper));
  g.add(mesh(lathe([[0, 1.58], [0.14, 1.58], [0.155, 1.56], [0.155, 1.43], [0.14, 1.425], [0, 1.425]], 64), mats.metal, 'Cap'));
  return g;
}

export function buildBox(mats) {
  const { W, H, D } = SPECS.box; const g = new THREE.Group(); g.name = 'box';
  // faces: +x right, -x left, +y top, -y bottom, +z front, -z back
  const m = mesh(new THREE.BoxGeometry(W, H, D), mats.boxFaces, 'Box'); m.position.y = H / 2; g.add(m);
  return g;
}

export const BUILDERS = { can: buildCan, jar: buildJar, bottle: buildBottle, box: buildBox };
export const HEIGHT = { can: SPECS.can.H, jar: SPECS.jar.H, bottle: SPECS.bottle.H + 0.08, box: SPECS.box.H };
