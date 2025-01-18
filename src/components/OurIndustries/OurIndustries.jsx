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
useGLTF.preload("/iphoneModel/3.glb");

function Model({ rotationX, textureUrl }) {
  const { scene } = useGLTF("/iphoneModel/3.glb");
  const texture = useLoader(TextureLoader, textureUrl);

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
      scale={0.09}
      rotation={[0, rotationX, 0]}
      position={[30, 0, 0]}
    />
  );
}

const ScrollAnimation = () => {
  const image = [
    "/iphoneModel/Car wash.jpg",
    "/iphoneModel/Delivery.png",
    "/iphoneModel/Health Care.jpg",
    "/iphoneModel/Booking.jpg",
    "/iphoneModel/Ecommerce.jpg",
    "/iphoneModel/Fitness.png",
  ];

  const containerRef = useRef();
  const [rotationX, setRotationX] = useState(0);
  const [textureUrl, setTextureUrl] = useState(image[0]);

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
        end: "+=6000",
        scrub: 1,
        pin: true,
        toggleActions: "play none none none",
        onEnter: () => console.log("Start"),
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      if (index === 0) {
        tl.fromTo(
          heading,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.2 },
          0
        );
      }
      if (index > 0) {
        tl.to(
          sections[index - 1].querySelector(".heading"),
          { x: -50, opacity: 0, duration: 0.5 },
          index
        );

        tl.fromTo(
          heading,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          index + 0.5
        );
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

                // Change texture slightly before halfway (e.g., 40% of the rotation)
                const earlyPoint = startRotation + Math.PI * 0.5; // Adjust factor (e.g., 0.8 for slightly earlier)
                if (Math.abs(rotationValue - earlyPoint) < 0.1) {
                  setTextureUrl(image[index]);
                }
              }
            },
            ease: "none",
          },
          index
        );
      }
    });

    return () => {
      // Cleanup
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  const data = [
    {
      title: "Car Wash",
      des1: "Transform your vehicle with state-of-the-art car wash techniques that clean every corner thoroughly. Our team uses advanced equipment to ensure even the toughest grime is removed.",
      des2: "Eco-friendly solutions protect your car’s paint while delivering a brilliant shine.",
      des3: "Experience professional care that preserves the quality of your vehicle’s finish, ensuring longevity. Enjoy the satisfaction of driving a spotless and polished car every day.",
      des4: "From exterior cleaning to interior detailing, we provide a comprehensive service that stands out. Let us bring your car back to life with unmatched quality and care.",
      image: "/Industry/1.png",
    },
    {
      title: "Delivery",
      des1: "Experience reliable logistics with delivery services designed to handle your parcels with care. Whether it's urgent documents or large packages, we’ve got you covered.",
      des2: "Our network ensures timely deliveries while maintaining high standards of security and tracking.",
      des3: "From personal packages to business consignments, we focus on precision and punctuality.",
      des4: "With seamless processes and excellent customer support, your delivery experience will be stress-free. Count on us for all your logistics and shipping needs.",
      image: "/Industry/2.png",
    },
    {
      title: "Health Care",
      des1: "Discover innovative healthcare services that prioritize your well-being and long-term health.",
      des2: "From preventive care to advanced diagnostics, our comprehensive services cater to all your needs. Tailored treatment plans ensure that every patient gets the attention they deserve.",
      des3: "Our team is committed to helping you achieve a healthier lifestyle and manage chronic conditions effectively.",
      des4: "Trust us to provide the tools and knowledge necessary for better health outcomes. Together, we work towards a happier, healthier you.",
      image: "/Industry/3.png",
    },
    {
      title: "Booking",
      des1: "Simplify your reservations with our user-friendly booking platform. From hotels to events, we’ve made it easier than ever to secure your spot.",
      des2: "Enjoy real-time availability checks and instant confirmations that save you time and effort.",
      des3: "Our transparent pricing ensures there are no hidden surprises, giving you peace of mind.",
      des4: "Let us handle the details while you focus on enjoying your experience. Seamless booking, tailored to your needs.",
      image: "/Industry/4.png",
    },
    {
      title: "Ecommerce",
      des1: "Explore a world of online shopping with a wide range of products tailored to your needs.",
      des2: "From fashion to electronics, our platform connects you to trusted sellers offering quality items.",
      des3: "Secure payment options and efficient delivery ensure a smooth shopping experience.",
      des4: "Discover exclusive deals and personalized recommendations that make your shopping effortless and enjoyable.",
      image: "/Industry/5.png",
    },
    {
      title: "Fitness",
      des1: "Achieve your fitness goals with personalized programs designed for every level of experience.",
      des2: "Our expert trainers provide guidance and motivation to help you stay on track and succeed.",
      des3: "With state-of-the-art equipment and innovative techniques, your workouts will be both effective and enjoyable.",
      des4: "Join a community that supports your journey to health and wellness. Let’s make fitness a lifestyle, not just a goal.",
      image: "/Industry/6.png",
    },
  ];

  return (
    <div>
      {/* <div className="h-screen">a</div> */}
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
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des1}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des2}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des3}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des4}</p>
              <div className="flex justify-start items-center gap-3">
                <button className="mt-2 xl:text-xl text-white">
                  Contact Us
                </button>
                <div className="bg-white text-black mt-2 rounded-full">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <Canvas
                dpr={[1, 2]}
                camera={{ position: [25, 0, 0], fov: 50 }}
                style={{ height: "600px" }}
              >
                <Stage intensity={0} environment={"city"}>
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
