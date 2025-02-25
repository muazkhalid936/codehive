"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ShortRevealHeading.css";
gsap.registerPlugin(ScrollTrigger);
import { useTranslations } from "next-intl";

const ShortRevealHeading = () => {
  const t = useTranslations("translation");
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
          end: "+=1800", // Customize based on the desired scroll length
          pin: true, // Pin the text in place
          scrub: 1, // Smoothly animate based on scroll
        },
      })
      .fromTo(
        textRef.current,
        {
          scale: 0.8,
          backgroundPosition: "-600px 0", // Move the gradient across the text
        },
        {
          scale: 1.2,
          // duration: 1,
          backgroundPosition: "500px 0", // Move the gradient across the text
          ease: "none",
        }
      );
  }, []);

  return (
    <div className="container h-[400px] mb-[800px] 2xl:mb-[700px] sm:mt-[-1700px] mt-[-1800px] 2xl:mt-[-2000px] flex justify-center items-center mx-auto">
      <p
        ref={textRef}
        className="animated-text-short main-heading header text-4xl sm:text-[60px] text-white"
      >
{t("ourProcess")}      </p>
    </div>
  );
};

export default ShortRevealHeading;
