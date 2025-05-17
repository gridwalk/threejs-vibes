import * as THREE from 'three';

/**
 * Sets up lights for the scene
 */
export const setupLights = (scene: THREE.Scene) => {
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(2, 4, 3);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  
  return { ambientLight, directionalLight };
};