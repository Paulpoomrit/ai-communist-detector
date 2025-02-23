"use client";
// lib/threeSetup.ts
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import Stats from "three/addons/libs/stats.module.js";
//import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js'

export const initThreeJS = (container: HTMLDivElement) => {
  const sceneC = new THREE.Scene();
  // sceneC.background = new THREE.CubeTextureLoader()
  //   .setPath("https://sbcode.net/img/")
  //   .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
  const gridHelper = new THREE.GridHelper(100, 100)
  gridHelper.position.set(0,-2,0)
  sceneC.add(gridHelper)

  const light = new THREE.SpotLight(undefined, Math.PI * 1000);
  light.position.set(5, 5, 5);
  light.angle = Math.PI / 16;
  light.castShadow = true;
  sceneC.add(light);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 1.5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  new OrbitControls(camera, renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ wireframe: false });

  const cube = new THREE.Mesh(geometry, material);
  // sceneC.add(cube);

  // Import Marx's Head Model
  let marxHead;
  new GLTFLoader().load("/marx_head/scene.gltf", (gltf) => {
    console.log(gltf);
    marxHead = gltf.scene.getObjectByName("Sketchfab_model") as THREE.Mesh;
    // marxHead.scale.set(0.01,0.01,0.01);

    const textureLoader = new THREE.TextureLoader();
    const baseColor = textureLoader.load(
      "/marx_head/textures/Marx_Mat_baseColor.png"
    );
    const metallicRoughness = textureLoader.load(
      "/marx_head/textures/Marx_Mat_metallicRoughness.png"
    );
    const normalMap = textureLoader.load(
      "/marx_head/textures/Marx_Mat_normal.png"
    );

    const marxHeadMaterial = new THREE.MeshStandardMaterial({
      map: baseColor,
      metalnessMap: metallicRoughness,
      normalMap: normalMap,
    });

    marxHead.material = marxHeadMaterial;
    marxHead.scale.set(0.0015, 0.0015, 0.0015);
    marxHead.position.set(0.0, -0.5, 0);

    sceneC.add(marxHead);
  });

  const animate = () => {
    requestAnimationFrame(animate);

    if (marxHead) {
      // marxHead.rotation.x += 0.01;
      marxHead.rotation.z += 0.01;
    }

    renderer.render(sceneC, camera);
  };

  animate();

  // Return the renderer for cleanup
  return renderer;
};
