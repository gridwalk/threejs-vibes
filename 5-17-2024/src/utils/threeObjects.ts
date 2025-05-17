import * as THREE from 'three';

/**
 * Creates a basic cube with materials
 */
export const createCube = () => {
  // Create geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  
  // Create material
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x3b82f6,
    metalness: 0.1,
    roughness: 0.5,
  });
  
  // Create mesh
  const cube = new THREE.Mesh(geometry, material);
  
  // Add some gentle rotation for initial view
  cube.rotation.x = Math.PI / 6;
  cube.rotation.y = Math.PI / 4;
  
  return cube;
};