import * as THREE from 'three';

// PBR materials shared by every template. "Label" gets the client's artwork; everything else is neutral.
export function createMaterials({ low = false, metal = '#c9ccd1', content = '#a8431f', glassTint = '#ffffff' } = {}) {
  const label = new THREE.MeshPhysicalMaterial({ name: 'Label', color: '#ffffff', roughness: 0.45, metalness: 0.0, clearcoat: 0.35, clearcoatRoughness: 0.3 });
  const metalM = new THREE.MeshStandardMaterial({ name: 'Metal', color: metal, metalness: 1, roughness: 0.28 });
  const glass = low
    ? new THREE.MeshPhysicalMaterial({ name: 'Glass', color: glassTint, roughness: 0.05, transparent: true, opacity: 0.28, envMapIntensity: 1.4 })
    : new THREE.MeshPhysicalMaterial({ name: 'Glass', color: glassTint, roughness: 0.04, transmission: 1, thickness: 0.12, ior: 1.3, envMapIntensity: 1.2 });
  const contentM = new THREE.MeshStandardMaterial({ name: 'Content', color: content, roughness: 0.55 });
  const paper = new THREE.MeshStandardMaterial({ name: 'LabelPaper', color: '#f1ede4', roughness: 0.9, side: THREE.BackSide });
  const boxFaces = Array.from({ length: 6 }, (_, i) => new THREE.MeshStandardMaterial({ name: `BoxFace${i}`, color: '#ffffff', roughness: 0.5 }));
  return { label, paper, metal: metalM, glass, content: contentM, boxFaces };
}
