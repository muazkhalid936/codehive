import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { Stage } from "@react-three/drei";

// useGLTF.preload('/iphoneModel/3.glb');

function IphoneModel({ textureUrl, meshRef }) {
  // const { scene } = useGLTF('/iphoneModel/3.glb');
  const { scene } = useLoader(GLTFLoader, "/iphoneModel/3.glb");

  const texture = useLoader(TextureLoader, textureUrl);

  // console.log(textureUrl);

  // Update texture when it changes
  useEffect(() => {
    if (meshRef.current && texture) {
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.map = texture;
          child.material.map.flipY = false;
          child.material.needsUpdate = true;
          child.material.metalness = 1;
        }
      });
    }
  }, [texture]);

  return (
    <Stage intensity={0.2} environment={"city"}>
      <primitive
        ref={meshRef}
        object={scene}
        scale={10} // Try a larger scale
        position={[30, 0, 0]}
      />
    </Stage>
  );
}

export default IphoneModel;
