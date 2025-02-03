"use client";

export const ourIndustriesData = [
  {
    title: "Car Wash",
    des1: "Say goodbye to long waits and inconvenient trips to the car wash! Our car wash app makes it easy to book professional cleaning services anytime, anywhere. With just a few taps, you can schedule a wash, track your service, and enjoy a spotless car without leaving your home.",
    des2: "Whether you need a quick exterior clean or a full interior detail, our trusted professionals ensure top-quality care using eco-friendly products. Experience hassle-free car care with a seamless booking process, secure payments, and real-time updates—all in one easy-to-use app!",
    link: "/industries/car-wash",
  },
  {
    title: "Delivery",
    link: "/industry/delivery",
    des1: " This delivery app streamlines the entire shipping process with a focus on speed, reliability, and convenience.",
    des2: "Easily schedule pickups, track your deliveries in real-time, and get instant updates on your shipments. Our app offers services like same-day delivery, scheduled deliveries, and secure handling of all types of items, ensuring a seamless experience.",
    des3: "With user-friendly interface, you can manage deliveries on the go, choose the best service for your needs, and enjoy fast, efficient shipping without the hassle. We’re committed to making your delivery experience smooth, reliable, and stress-free",
  },
  {
    title: "Health Care",
    link: "/industry/health-care",
    des1: "Our healthcare solutions are built to enhance efficiency and improve patient care for clinics, hospitals, and medical centres.",
    des2: "Manage appointments, patient records, and billing seamlessly with secure, fully compliant systems. Enable telemedicine, real-time consultations, and instant access to health records for a better patient experience.",
    des3: "Use advanced analytics to track trends, optimize workflows, and streamline operations. With our scalable and easy-to-use solutions, you can elevate your healthcare services and deliver exceptional care.",
  },
  {
    title: "Booking",
    link: "/industries/our-booking-system",
    des1: "Simplify your reservations with our user-friendly booking platform. From hotels to events, we’ve made it easier than ever to secure your spot.",
    des2: "Enjoy real-time availability checks and instant confirmations that save you time and effort.",
    des3: "Our transparent pricing ensures there are no hidden surprises, giving you peace of mind.",
    des4: "Let us handle the details while you focus on enjoying your experience. Seamless booking, tailored to your needs.",
    image: "/Industry/4.png",
  },
  {
    title: "Ecommerce",
    link: "/industries/ecommerce",
    des1: "Our ecommerce platform is built to help businesses grow, offering a seamless and efficient online shopping experience.",
    des2: "Easily manage products, track inventory in real-time, and optimize sales with personalized recommendations. Our secure payment processing and streamlined checkout ensure smooth transactions for your customers.",
    des3: "With a mobile-first design, advanced analytics, and built-in marketing tools, you can enhance engagement, boost conversions, and stay ahead of the competition. Whether you're a small business or a large enterprise, we provide the solutions you need to scale with confidence.",
  },
  {
    title: "Fitness",
    link: "/industries/fitness",
    des1: "Enhance the fitness experience with smart digital solutions tailored for gyms, trainers, and wellness platforms.",
    des2: "Provide users with personalized workout plans, progress tracking, and guided exercise demonstrations to keep them engaged. Integrate wearable devices and nutrition tracking for a holistic approach to fitness.",
    des3: "Simplify class scheduling, membership management, and payments with seamless automation. With data-driven insights and an intuitive interface, our solutions help you build a strong, loyal fitness community.",
  },
];

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FiArrowUpRight } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Stage } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

// Lazy load the IphoneModel component
const IphoneModel = dynamic(() =>
  import("../../components/IphoneModel", {
    ssr: false,
  })
);

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [startRotation, setStartRotation] = useState(false);
  const texturePaths = [
    "/iphoneModel/Car wash.jpg",
    "/iphoneModel/Delivery.png",
    "/iphoneModel/Health Care.jpg",
    "/iphoneModel/Booking.jpg",
    "/iphoneModel/Ecommerce.jpg",
    "/iphoneModel/Fitness.png",
  ];
  let progress;
  const containerRef = useRef();
  const isInViewRef = useRef(false); // Ref instead of state for performance
  const textureUrlRef = useRef(texturePaths[0]);
  const [textureUrl, setTextureUrl] = useState(texturePaths[0]);
  const meshRef = useRef();
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
        onEnter: () => setStartRotation(true), // Set startRotation to true when animation starts
        onLeaveBack: () => setStartRotation(false), // Set startRotation to false when animation is reversed
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");

      if (index === 0) {
        tl.fromTo(
          heading,
          { x: 150, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          0
        );
        tl.fromTo(
          ".iphone",
          { x: -150, opacity: 0 },
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
              if (
                (tl.progress() * sections.length - index).toFixed(3) == 0.002
              ) {
                progress = tl.progress() * sections.length - index;
              }

              if (sectionProgress >= progress) {
                progress = tl.progress() * sections.length - index;

                const rotationValue = gsap.utils.interpolate(
                  startRotation,
                  endRotation,
                  sectionProgress
                );

                if( meshRef.current){

                  meshRef.current.rotation.y = rotationValue;
                }                const earlyPoint = startRotation + Math.PI * 0.5;
                if (Math.abs(rotationValue - earlyPoint) < 0.1) {
                  setTextureUrl(texturePaths[index]);
                }
              } else {
                progress = tl.progress() * sections.length - index;
                const rotationValue = gsap.utils.interpolate(
                  startRotation,
                  endRotation,
                  sectionProgress
                );
                if( meshRef.current){

                  meshRef.current.rotation.y = rotationValue;
                }
                const earlyPoint = startRotation + Math.PI * 0.5;
                if (Math.abs(rotationValue - earlyPoint) < 0.1) {
                  setTextureUrl(texturePaths[index - 1]);
                }
              }
            },

            ease: "none",
          },
          index
        );
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInViewRef.current = true; // Ref update
          } else {
            isInViewRef.current = false; // Ref update
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center mt-[-300px]  h-[100vh] min-h-[400px]  main22 overflow-hidden"
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
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des1}
              </p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des2}
              </p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des3}
              </p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des4}
              </p>
              <p className="mt-4 main_hero_slogan text-gray-500">
                {item?.des5}
              </p>
              <div className="flex justify-start items-center gap-3">
                <button
                  onClick={() => router.push(item.link)}
                  className="mt-2 xl:text-xl text-white"
                >
                  Contact Us
                </button>
                <div className="bg-white text-black mt-2 rounded-full">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="w-1/2 iphone">
             <Canvas
                dpr={[1, 2]}
                camera={{ position: [25, 0, 0], fov: 50 }}
                style={{
                  height: "70vh",
                  minHeight: "400px",
                  maxHeight: "700px",
                }}
              >
                    <IphoneModel textureUrl={textureUrl} meshRef={meshRef} />
              </Canvas>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;
