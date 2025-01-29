import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

useGLTF.preload('/iphoneModel/3.glb');

function IphoneModel({ textureUrl, meshRef }) {
  const { scene } = useGLTF('/iphoneModel/3.glb');
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
    <primitive
      ref={meshRef}
      object={scene}
      scale={0.07}
      position={[30, 0, 0]}
    />
  );
}

export default IphoneModel;
