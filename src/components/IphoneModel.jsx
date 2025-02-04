import React, { useEffect, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { Stage } from "@react-three/drei";

const texturePaths = [
  "/iphoneModel/Car wash.jpg",
  "/iphoneModel/Car wash.jpg",
  "/iphoneModel/Delivery.png",
  "/iphoneModel/Health Care.jpg",
  "/iphoneModel/Booking.jpg",
  "/iphoneModel/Ecommerce.jpg",
  "/iphoneModel/Fitness.png",
];

const IphoneModel = React.memo(({ textureUrl, meshRef }) => {
  const { scene } = useLoader(GLTFLoader, "/iphoneModel/3.glb");
  const textures = useMemo(() => {
    const textureLoader = new TextureLoader();
    return texturePaths.reduce((acc, path) => {
      acc[path] = textureLoader.load(path);
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    if (meshRef.current && textures[textureUrl]) {
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.map = textures[textureUrl];
          child.material.map.flipY = false;
          child.material.needsUpdate = true;
          child.material.metalness = 1;
        }
      });
    }
  }, [textureUrl, textures]);

  return (
    <Stage intensity={0.5} environment={"city"} shadows={false}>
      <primitive
        ref={meshRef}
        object={scene}
        scale={10}
        position={[30, 0, 0]}
      />
    </Stage>
  );
});

export default IphoneModel;
