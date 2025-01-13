"use client"
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";

function Model({ rotationX }) {
  const { scene } = useGLTF("/model/public/mobilee.glb");

  // Ensure the model starts with no rotation around other axes
  scene.rotation.set(0, 0, 0);

  return (
    <primitive
      object={scene}
      scale={0.005}
      rotation={[0, rotationX, 0]} // Rotate explicitly around X-axis
    />
  );
}

export default function HomePage() {
  const [rotationX, setRotationX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setRotationX(scrollY * 0.05); // Adjust sensitivity
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", width: "100vw", position: "relative" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ height: "60vh", position: "absolute" }}
      >
        <Stage intensity={1} environment={null}>
          <Model rotationX={rotationX} />
        </Stage>
      </Canvas>
    </div>
  );
}
