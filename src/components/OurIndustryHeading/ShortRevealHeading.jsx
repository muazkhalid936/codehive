"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ShortRevealHeading.css";
gsap.registerPlugin(ScrollTrigger);
import useStore from "../../store/useUserStore";

const ShortRevealHeading = (params) => {
  const { language } = useStore();
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling

    // GSAP Scroll Animation
    gsap
      .timeline({
        // opacity: 0,
        scale: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%", // Start when text is in the center of the viewport
          end: "+=1600", // Customize based on the desired scroll length
          pin: true, // Pin the text in place
          scrub: 1, // Smoothly animate based on scroll
        },
      })
      .fromTo(
        textRef.current,
        {
          scale: 0.8,
          backgroundPosition: `${language === "en" ? "-600px 0" : "800px 0"}`, // Move the gradient across the text
        },
        {
          scale: 1.2,
          // duration: 1,
          backgroundPosition: `${language === "en" ? "500px 0" : "-600px 0"}`, // Move the gradient across the text
          // backgroundPosition: "500px 0", // Move the gradient across the text
          ease: "none",
        }
      );
  }, []);

  return (
    <div
      className={`container h-[400px] ${
        language === "en"
          ? "mb-[1000px]  lg:mb-[1200px] mt-[-200px] sm:mt-[-400px]"
          : "mb-[1350px] sm:mb-[1200px] lg:mb-[1300px] mt-[-650px]  2xl:mt-[-500px]"
      } flex justify-center items-center mx-auto`}
    >
      <p
        ref={textRef}
        className="animated-text-short main-heading text-center header text-4xl sm:text-[60px] text-white"
      >
        {params.text}
      </p>
    </div>
  );
};

export default ShortRevealHeading;
