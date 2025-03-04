"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useStore from "../../store/useUserStore";
gsap.registerPlugin(ScrollTrigger);

const LongRevealHeading = (params) => {
  const textRef = useRef(null);
  const { language,setLanguage } = useStore();
  useEffect(() => {
    // GSAP Scroll Animation
  
    gsap
      .timeline({
        // opacity: 0,
        scale: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%", // Start when text is in the center of the viewport
          end: "+=2600", // Customize based on the desired scroll length
          pin: true, // Pin the text in place
          scrub: 1, // Smoothly animate based on scroll
        },
      })
      .fromTo(
        textRef.current,
        {
          scale: 0.8,
          backgroundPosition: `${language==="en"?"500%":"-450%"} 0`, // Move the gradient across the text
        },
        {
          scale: 1.2,
          // duration: 1,
          backgroundPosition: `${language==="en"?"-450%":"500%"} 0`, // Move the gradient across the text
          ease: "none",
        }
      );
  }, []);

  return (
    <div
    dir={language === "en" ? "ltr" : "rtl"}

      className={`container h-[50vh] mb-[1500px] ${language==="en"?"mt-[-1000px] sm:mt-[-800px]":"mt-[-1100px] sm:mt-[-800px]"} items-center flex justify-center  mx-auto`}
    >
      <p
        ref={textRef}
        className={`animated-text-long1  main-heading header text-4xl sm:text-[60px] text-white`}
      >
        {params.text}
      </p>
    </div>
  );
};

export default LongRevealHeading;
