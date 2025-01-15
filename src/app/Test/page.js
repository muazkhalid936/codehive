"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FiArrowUpRight } from "react-icons/fi";
import { useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HomePage from "../../app/Test/page";

gsap.registerPlugin(ScrollTrigger);

function Model({ rotationX }) {
  const { scene } = useGLTF("/model/public/1glb.glb");

  // Set initial rotation for the model
  scene.rotation.set(0, 0, 0);

  return (
    <primitive
      object={scene}
      scale={0.1}
      rotation={[0, rotationX, 0]}
      position={[0, 0, 0]}
      speed={0.4}
    />
  );
}

const ScrollAnimation = () => {
  const containerRef = useRef();
  const [rotationX, setRotationX] = useState(0);

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
        end: "+=1800",
        scrub: 1,
        pin: true,
        toggleActions: "play none none none",
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      const modelContainer = section.querySelector(".model-container");

      if (index > 0) {
        // Animate outgoing elements of the previous section
        tl.to(
          sections[index - 1].querySelector(".heading"),
          { x: -50, opacity: 0, duration: 0.5 },
          index
        ).to(
          sections[index - 1].querySelector(".model-container"),
          { y: -200, duration: 0.5 },
          index
        );

        // Animate incoming elements of the current section
        tl.fromTo(
          heading,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        ).fromTo(
          modelContainer,
          { y: 200 },
          { y: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        );
      }

      // Calculate rotation range for each section
      const startRotation = index * (Math.PI * 10); // Start from where previous section ended
      const endRotation = startRotation + Math.PI * 3; // Add 3 half rotations

      // Add rotation animation that follows scroll
      tl.to(
        {},
        {
          // duration: 0.8,
          onUpdate: () => {
            const sectionProgress = tl.progress() * sections.length - index;
            // Only rotate during this section's portion of the timeline
            if (sectionProgress >= 0 && sectionProgress <= 1) {
              const rotationValue = gsap.utils.interpolate(
                startRotation,
                endRotation,
                sectionProgress
              );
              setRotationX(rotationValue);
            }
          },
          ease: "none",
        },
        index
      );
    });

    return () => {
      // Ensure cleanup of Lenis and ScrollTrigger
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  const data = [
    {
      title: "Car Wash",
      des1: "Transform your vehicle with state-of-the-art car wash techniques...",
      des2: "Eco-friendly solutions protect your car's paint while delivering...",
      des3: "Experience professional care that preserves the quality...",
      des4: "From exterior cleaning to interior detailing...",
    },
    {
      title: "Delivery",
      des1: "Experience reliable logistics with delivery services designed...",
      des2: "Our network ensures timely deliveries while maintaining...",
      des3: "From personal packages to business consignments...",
      des4: "With seamless processes and excellent customer support...",
    },
    {
      title: "Health Care",
      des1: "Discover innovative healthcare services that prioritize...",
      des2: "From preventive care to advanced diagnostics...",
      des3: "Our team is committed to helping you achieve a healthier lifestyle...",
      des4: "Trust us to provide the tools and knowledge necessary...",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col bg-[#000b17] items-center justify-center h-screen main22 overflow-hidden"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="section absolute flex flex-row-reverse items-center justify-between gap-8 w-full px-16"
        >
          <div className="w-1/2 heading">
            <h2 className="font-bold bg-gradient-to-r from-white via-blueColor to-blueColor bg-clip-text text-transparent main-heading text-[20px] sm:text-3xl md:text-5xl xl:text-6xl ">
              {item.title}
            </h2>
            <p className="mt-4 text-gray-500">{item.des1}</p>
            <p className="mt-4 text-gray-500">{item.des2}</p>
            <p className="mt-4 text-gray-500">{item.des3}</p>
            <p className="mt-4 text-gray-500">{item.des4}</p>
            <div className="flex justify-start items-center gap-3">
              <button className="mt-2 xl:text-xl text-white">Contact Us</button>
              <div className="bg-white text-black mt-2 rounded-full">
                <FiArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Canvas
              dpr={[1, 2]}
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ height: "450px" }}
            >
              <Stage intensity={1} environment={null}>
                <Model rotationX={rotationX} />
              </Stage>
            </Canvas>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
