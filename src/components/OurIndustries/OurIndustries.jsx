"use client";

export const ourIndustriesData = [
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
    des1: "Revolutionize patient care with our innovative healthcare solutions tailored to meet the needs of modern medical practices. From clinics to hospitals, we ensure efficient service delivery.",
    des2: "Seamlessly manage appointments, patient records, and billing with secure and compliant systems.",
    des3: "Enable telemedicine services, real-time consultations, and access to health records for enhanced patient engagement.",
    des4: "Leverage advanced analytics to monitor trends, optimize workflows, and improve operational efficiency.",

    des5: "Trust us to provide scalable and user-friendly solutions to elevate your healthcare services.",

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
    des1: "Deliver seamless shopping experiences with our tailored ecommerce solutions, designed to meet the demands of modern consumers. From small businesses to large enterprises, we’ve got you covered.",
    des2: "Our robust platform ensures secure transactions, optimized product management, and user-friendly navigation to enhance customer satisfaction.",
    des3: "Enable real-time inventory tracking, personalized recommendations, and streamlined checkout processes to boost sales and retention.",
    des4: "With mobile-first designs, advanced analytics, and marketing tools, we empower you to stay ahead in the competitive ecommerce landscape.",
    des5: "Count on us for comprehensive support and innovative solutions to grow your online business with confidence.",
    image: "/Industry/5.png",
  },
  {
    title: "Fitness",
    des1: "Empower fitness enthusiasts with cutting-edge digital solutions designed to transform their wellness journey.",
    des2: "Offer intuitive features like personalized workout plans, progress tracking, and exercise demonstrations to keep users motivated.",
    des3: "Integrate wearable devices and nutrition tracking for a comprehensive fitness experience.",
    des4: "Enable easy class scheduling, membership management, and seamless payment systems for gyms and fitness centers.",
    des5: "With data-driven insights and user-friendly designs, we help you create impactful fitness platforms that inspire and retain your customers.",
    image: "/Industry/6.png",
  },
];
import * as THREE from "three";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FiArrowUpRight } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
gsap.registerPlugin(ScrollTrigger);

const RotatingModel = ({ modelPath, texturePaths, scrollY }) => {
  const modelRef = useRef();
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);
  const lastThresholdRef = useRef(0); // Track the last scroll threshold
  const { scene } = useGLTF(modelPath);

  // Rotate the model based on scroll
  useEffect(() => {
    if (modelRef.current) {
      const rotationY = scrollY / 100; // Adjust rotation sensitivity
      modelRef.current.rotation.y = rotationY;

      // Calculate the current 50vh threshold
      const threshold = Math.floor(scrollY / window.innerHeight); // 50vh
      if (threshold !== lastThresholdRef.current) {
        lastThresholdRef.current = threshold; // Update the last threshold
        setCurrentTextureIndex((prevIndex) =>
          texturePaths.length > 0 ? (prevIndex + 1) % texturePaths.length : 0
        );
      }
    }
  }, [scrollY, texturePaths]);

  // Apply textures to front and back screens
  useEffect(() => {
    if (scene && texturePaths[currentTextureIndex]) {
      const textureLoader = new THREE.TextureLoader();

      // Load the texture
      textureLoader.load(texturePaths[currentTextureIndex], (texture) => {
        // Fix texture wrapping and orientation
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.flipY = false; // Correct Y-axis flipping
        texture.needsUpdate = true;
        scene.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.map = texture;
            child.material.needsUpdate = true;
          }
        });
        //   // Apply texture to the front screen
        //   const frontScreen = scene.getObjectByName("Cube014_screen001_0002_1");
        //   if (frontScreen) {
        //     if (frontScreen.material) {
        //       console.log("Existing map (front):", frontScreen.material.map);

        //       // Clear existing texture
        //       frontScreen.material.map = null;

        //       // Apply the new texture
        //       frontScreen.material.map = texture;
        //       // frontScreen.material.metalness = 0.9; // Metallic look
        //       // frontScreen.material.roughness = 0.2; // Smooth finish
        //       frontScreen.material.needsUpdate = true;
        //       console.log("Texture applied to front screen:", frontScreen.name);
        //     }
        //   } else {
        //     console.warn("Front screen not found: Cube014_screen001_0002_1");
        //   }

        //   // Apply texture to the back screen
        //   const backScreen = scene.getObjectByName("Cube014_screen001_0002_2");
        //   if (backScreen) {
        //     if (backScreen.material) {
        //       console.log("Existing map (back):", backScreen.material.map);

        //       // Clear existing texture
        //       backScreen.material.map = null;

        //       // Apply the new texture
        //       backScreen.material.map = texture;
        //       // backScreen.material.metalness = 0.9; // Metallic look
        //       // backScreen.material.roughness = 0.2; // Smooth finish
        //       backScreen.material.needsUpdate = true;
        //       console.log("Texture applied to back screen:", backScreen.name);
        //     }
        //   } else {
        //     console.warn("Back screen not found: Cube014_screen001_0002_2");
        //   }
      });
    }
  }, [currentTextureIndex, scene, texturePaths]);

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  const texturePaths = [
    "/iphoneModel/Car wash.jpg",
    "/iphoneModel/Delivery.png",
    "/iphoneModel/Health Care.jpg",
    "/iphoneModel/Booking.jpg",
    "/iphoneModel/Ecommerce.jpg",
    "/iphoneModel/Fitness.png",
  ];

  const containerRef = useRef();

  const imageObjectsRef = useRef([]);

  useEffect(() => {
    // Preload images and store them in a ref
    imageObjectsRef.current = texturePaths.map((path) => {
      const img = new Image();
      img.src = path;
      return img;
    });

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

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
        toggleActions: "play none none none",
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
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center  h-[100vh] min-h-[400px]  main22 overflow-hidden"
      >
        {ourIndustriesData.map((item, index) => (
          <div
            key={index}
            className="section  absolute flex flex-row-reverse items-center justify-between gap-8  px-16"
          >
            <div className="w-[640px] heading">
              <h2 className="font-bold bg-gradient-to-r from-white via-blueColor to-blueColor bg-clip-text text-transparent main-heading text-[20px] sm:text-3xl md:text-5xl xl:text-6xl ">
                {item.title}
              </h2>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des1}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des2}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des3}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">{item.des4}</p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des5}
              </p>
              <div className="flex justify-start items-center gap-3">
                <button className="mt-2 xl:text-xl text-white">
                  Contact Us
                </button>
                <div className="bg-white text-black mt-2 rounded-full">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[80vh] flex justify-normal items-center ">
              <Canvas camera={{ position: [1, 0, 0] }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <RotatingModel
                  modelPath="/iphoneModel/3.glb"
                  texturePaths={texturePaths}
                  scrollY={scrollY}
                />
                <OrbitControls enableZoom={false} />
                <Environment preset="city" />
              </Canvas>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
