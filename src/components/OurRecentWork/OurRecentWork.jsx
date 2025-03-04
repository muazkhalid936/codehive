"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LongRevealHeading.css";
import useStore from "../../store/useUserStore";
gsap.registerPlugin(ScrollTrigger);

const LongRevealHeading = (params) => {
  const textRef = useRef(null);
  const { language } = useStore();

  useEffect(() => {
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
          backgroundPosition:`${language==="en"?"-600px 0":"600px 0"}`,
          // backgroundPosition: "-600px 0", // Move the gradient across the text
        },
        {
          scale: 1.2,
          // duration: 1,
          backgroundPosition:`${language==="en"?"600px 0":"-600px 0"}`,
          // backgroundPosition: "600px 0", // Move the gradient across the text
          ease: "none",
        }
      );
  }, []);

  return (
    <div className={`container h-[50vh] ${language==="en"?"mb-[1000px] sm:mb-[1300px] mt-[-350px]":"mb-[1400px] sm:mb-[1300px] mt-[-850px]"} items-center flex justify-center  mx-auto`}>
      <p
        ref={textRef}
        className="animated-text-long main-heading header text-3xl sm:text-[60px] text-white"
      >
        {params.text}
      </p>
    </div>
  );
};

export default LongRevealHeading;
