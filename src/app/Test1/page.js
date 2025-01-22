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
useGLTF.preload("/iphoneModel/Test1.glb");

function Model({ rotationX, texture }) {
  const { scene } = useGLTF("/iphoneModel/Test1.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.map.flipY = false;
        child.material.needsUpdate = true;
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

const ScrollAnimation = () => {
  const images = [
    "/iphoneModel/Car wash.jpg",
    "/iphoneModel/Delivery.png",
    "/iphoneModel/Health care.jpg",
    "/iphoneModel/Booking.jpg",
    "/iphoneModel/Ecommerce.jpg",
    "/iphoneModel/Fitness.png",
  ];

  const containerRef = useRef();
  const [rotationX, setRotationX] = useState(0);
  const [textures, setTextures] = useState([]);
  const [currentTexture, setCurrentTexture] = useState(null);

  useEffect(() => {
    // Preload textures
    const loader = new TextureLoader();
    const loadedTextures = images.map((image) => loader.load(image));
    setTextures(loadedTextures);
    setCurrentTexture(loadedTextures[0]); // Set initial texture

    return () => {
      // Dispose of textures
      loadedTextures.forEach((texture) => texture.dispose());
    };
  }, [images]);

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
      const startRotation = Math.floor(index / 2) * Math.PI * 4;
      const endRotation = startRotation + Math.PI * 2;

      tl.to(
        {},
        {
          onUpdate: () => {
            const sectionProgress = tl.progress() * sections.length - index;

            if (sectionProgress >= 0 && sectionProgress <= 1) {
              const rotationValue = gsap.utils.interpolate(
                startRotation,
                endRotation,
                sectionProgress
              );
              setRotationX(rotationValue);

              const midPoint = startRotation + Math.PI * 0.5;
              if (Math.abs(rotationValue - midPoint) < 0.1) {
                setCurrentTexture(textures[index]);
              }
            }
          },
          ease: "none",
        },
        index
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, [textures]);

  const data = [
    { title: "Car Wash", des1: "Description for Car Wash" },
    { title: "Delivery", des1: "Description for Delivery" },
    { title: "Health Care", des1: "Description for Health Care" },
    { title: "Booking", des1: "Description for Booking" },
    { title: "Ecommerce", des1: "Description for Ecommerce" },
    { title: "Fitness", des1: "Description for Fitness" },
  ];

  return (
    <div ref={containerRef} className="flex flex-col items-center h-screen">
      {data.map((item, index) => (
        <div key={index} className="section flex items-center justify-between">
          <div className="heading">
            <h2>{item.title}</h2>
            <p>{item.des1}</p>
          </div>
          <Canvas
            dpr={[0.5, 1]}
            camera={{ position: [25, 0, 0], fov: 50 }}
            style={{ height: "50vh" }}
          >
            <Stage intensity={0} environment="city">
              {currentTexture && (
                <Model rotationX={rotationX} texture={currentTexture} />
              )}
            </Stage>
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
