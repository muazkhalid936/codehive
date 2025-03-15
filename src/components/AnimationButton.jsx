"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollAnimation from "./Home/ScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRefs = useRef([]);

  useEffect(() => {
   


    headingRefs.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        {
          y: "0%",
          scale: 1,
          rotateX: 0,
          opacity: 1,
        },
        {
          scrollTrigger: {
            trigger: heading,
            start: "top 70%",
            end: "+=250px",
            scrub: 1,
            markers: true,
          },
          scale: 0.8,
          duration: 2,
          rotateX: 80,
          opacity: 0,
          ease: "power3.inOut",
          transformStyle: "preserve-3d",
        }
      );
    });
  }, []);

  return (
    <div className="why-section-container  hidden container bg-black sm:flex flex-col mx-auto text-center text-white min-h-[600px] h-[1000px] font-bold relative overflow-hidden">
      <div  className="w-full animation-con flex justify-center">
        <ScrollAnimation />
      </div>
      <div className="flex flex-col main-head  gap-10">
        <div
          ref={(el) => (headingRefs.current[0] = el)}
          className="categories-headers-wrapper h1"
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          <div
            className="categories-header-cell cell-1 flex justify-center items-center"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="categories-color-header text-white text-center mx-auto text-[60px]">
              Increase muscle size
            </div>
          </div>
        </div>
        <div
          ref={(el) => (headingRefs.current[1] = el)}
          className="categories-headers-wrapper"
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          <div
            className="categories-header-cell cell-1 flex justify-center items-center"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="categories-color-header text-white text-[60px]">
              Lose weight
            </div>
          </div>
        </div>
        <div
          ref={(el) => (headingRefs.current[2] = el)}
          className="categories-headers-wrapper"
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          <div
            className="categories-header-cell cell-1 flex justify-center items-center"
            style={{
              willChange: "transform, opacity",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="categories-color-header text-white text-[60px]">
              Track results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
