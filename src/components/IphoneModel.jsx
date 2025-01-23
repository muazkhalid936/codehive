"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function IphoneModel({ rotationX, textureUrl }) {
  const { scene } = useGLTF("/iphoneModel/3.glb");
  const texture = useLoader(TextureLoader, textureUrl);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.map.flipY = false;
        child.material.needsUpdate = true;

        child.material.metalness = 1;
      }
    });
  }, [scene, texture]);

  return (
    <primitive
      object={scene}
      scale={0.07}
      rotation={[0, rotationX, 0]}
      position={[30, 0, 0]}
    />
  );
}

export default IphoneModel;

// Preload the GLTF
useGLTF.preload("/iphoneModel/3.glb");
