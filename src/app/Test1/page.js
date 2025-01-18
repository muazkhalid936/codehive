"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FiArrowUpRight } from "react-icons/fi";
import { useGLTF, Stage } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

gsap.registerPlugin(ScrollTrigger);
useGLTF.preload("/iphoneModel/l3.glb");

function Model({ rotationX, textureUrl }) {
  const { scene } = useGLTF("/iphoneModel/l3.glb");
  const texture = useLoader(TextureLoader, textureUrl);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture; // Set the texture
        child.material.map.flipY = false; // Flip the texture vertically
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return (
    <primitive
      object={scene}
      scale={0.09}
      rotation={[0, rotationX, 0]}
      position={[30, 0, 0]}
    />
  );
}

const ScrollAnimation = () => {
  const containerRef = useRef();
  const [rotationX, setRotationX] = useState(0);
  const [textureUrl, setTextureUrl] = useState("/iphoneModel/1.jpg");

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = containerRef.current.querySelectorAll(".section");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 1,
        pin: true,
      },
    });

    sections.forEach((section, index) => {
      const startRotation = index * Math.PI * 2; // Start at multiples of 360°
      const endRotation = startRotation + Math.PI * 2; // Add 1 full rotation

      tl.to(
        {},
        {
          onUpdate: () => {
            const sectionProgress = tl.progress() * sections.length - index;
            const rotationValue = gsap.utils.mapRange(
              0,
              1,
              startRotation,
              endRotation
            )(sectionProgress);
            setRotationX(rotationValue);

            if (Math.floor(rotationValue) === 4 && index === 1) {
              setTextureUrl("/iphoneModel/1.jpg");
            }
          },
        },
        index
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const data = [
    {
      title: "Car Wash",
      description: "Keep your car clean and shiny!",
      image: "/textures/texture1.jpg",
    },
    {
      title: "Delivery",
      description: "Fast and reliable delivery services.",
      image: "/textures/texture2.jpg",
    },
  ];

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col h-screen overflow-hidden"
      >
        {data.map((item, index) => (
          <div key={index} className="section h-screen flex items-center">
            <div className="w-1/2 p-8">
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="mt-4">{item.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="w-1/2">
              <Canvas
                dpr={[1, 2]}
                camera={{ position: [25, 0, 0], fov: 50 }}
                style={{ height: "600px" }}
              >
                <Stage intensity={1} environment={null}>
                  <Model rotationX={rotationX} textureUrl={textureUrl} />
                </Stage>
              </Canvas>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
