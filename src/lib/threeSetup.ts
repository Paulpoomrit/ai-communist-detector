"use client";
// lib/threeSetup.ts
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { LuminosityShader } from "three/addons/shaders/LuminosityShader.js";
import { ColorifyShader } from "three/addons/shaders/ColorifyShader.js";
import { SobelOperatorShader } from "three/addons/shaders/SobelOperatorShader.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";

export const initThreeJS = (container: HTMLDivElement) => {
  const sceneC = new THREE.Scene();
  // sceneC.background = new THREE.CubeTextureLoader()
  //   .setPath("https://sbcode.net/img/")
  //   .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
  const gridHelper = new THREE.GridHelper(100, 100);
  gridHelper.position.set(0, -2, 0);
  sceneC.add(gridHelper);

  const light = new THREE.SpotLight(undefined, Math.PI * 400);
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
  renderer.shadowMap.enabled = true;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 3;

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(sceneC, camera);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.1,
    0.7,
    0.5
  );

  const luminosityEffect = new ShaderPass(LuminosityShader);

  const sobelEffect = new ShaderPass(SobelOperatorShader);
  sobelEffect.uniforms["resolution"].value.x =
    window.innerWidth * window.devicePixelRatio;
  sobelEffect.uniforms["resolution"].value.y =
    window.innerHeight * window.devicePixelRatio;

  const colorify = new ShaderPass(ColorifyShader);
  colorify.uniforms["color"].value.setRGB(
    0.9686274509803922,
    0.12941176470588237,
    0.5686274509803921
  );

  composer.addPass(renderPass);
  composer.addPass(luminosityEffect);
  composer.addPass(sobelEffect);
  composer.addPass(colorify);
  composer.addPass(bloomPass);

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
    marxHeadMaterial.map.colorSpace = THREE.SRGBColorSpace;

    marxHead.material = marxHeadMaterial;
    marxHead.scale.set(0.0015, 0.0015, 0.0015);
    marxHead.position.set(0.0, -0.5, 0);
    marxHead.castShadow = true;

    sceneC.add(marxHead);
  });

  
  const animate = () => {
    requestAnimationFrame(animate);

    if (marxHead) {
      // marxHead.rotation.x += 0.01;
      marxHead.rotation.z += 0.01;
    }

    // renderer.render(sceneC, camera);
    composer.render();
  };

  animate();

  // Return the renderer for cleanup
  return renderer;
};
