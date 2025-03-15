"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollAnimation from "./Home/ScrollAnimation";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
import Lenis from "@studio-freight/lenis";

const PinnedContainer = () => {
  const { language } = useStore();
  const t = useTranslations("translation");
  const containerRef = useRef(null);
  const headingRefs = useRef([]);

  const applyGradient = (headingSelector, progress) => {
    const startColor = [255, 255, 255]; // Always start with white
    const endColor = [32, 157, 217]; // Always end with blue
  
    const currentColor = startColor.map((start, i) =>
      Math.round(start + (endColor[i] - start) * progress)
    );
  
    const heading = document.querySelector(headingSelector);
    if (heading) {
      heading.style.background = `linear-gradient(
        ${language==="en"?"to right":"to left"},
        rgb(${startColor.join(", ")}),
        rgb(${currentColor.join(", ")})
      )`;
      heading.style.webkitBackgroundClip = "text";
      heading.style.color = "transparent";
    }
  };


  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1,
  //     smooth: true,
  //   });
  
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  
  //   // ✅ Sync GSAP with Lenis
  //   lenis.on("scroll", () => {
  //     ScrollTrigger.update(); // Ensure GSAP updates positions
  //   });
  
  //   // ✅ Force GSAP to recalculate once page is loaded
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  
  //   return () => {
  //     ScrollTrigger.killAll(); // Cleanup on unmount
  //   };
  // }, []);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=3000px",
      pin: true,
      pinSpacing: true, // Keeps spacing after unpinning
      markers: false, // Set true for debugging
    });

    gsap.fromTo(
      ".main-head",
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000px",
          scrub: 1,
          // markers: true,
        },
        y: -300,
      }
    );

    return () => ScrollTrigger.killAll(); // Cleanup on unmount
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=1500px",
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      ".h11",
      {
        y: "0%",
        scale: 1,
        rotateX: 0,
        opacity: 1,
      },
      {
        scale: 0.8,
        duration: 2,
        rotateX: 80,
        opacity: 0,
        onUpdate: function () {
          const progress = this.progress();
          applyGradient(".colorText2", progress);
        },
        ease: "power3.inOut",
        transformStyle: "preserve-3d",
      }
    )
    //   .to({}, { duration:  }) // Small delay before the next animation
      .fromTo(
        ".h22",
        {
          y: "0%",
          scale: 1,
          rotateX: 0,
          opacity: 1,
        },
        {
          scale: 0.8,
          duration: 2,
          onUpdate: function () {
            const progress = this.progress();
            applyGradient(".colorText3", progress);
          },
          rotateX: 80,
          opacity: 0,
          ease: "power3.inOut",
          transformStyle: "preserve-3d",
        }
      );
  }, []);


  const firstTitle = t("customerCe");
  const firstTitleParts = firstTitle.split(" ");
  const firstTitleRest = firstTitleParts.slice(0, -1).join(" ");
  const firstTitleLast = firstTitleParts[firstTitleParts.length - 1];
  const ScndTitle = t("endToEndsu");
  const ScndTitleParts = ScndTitle.split(" ");
  const ScndTitleRest = ScndTitleParts.slice(0, -1).join(" ");
  const ScndTitleLast = ScndTitleParts[ScndTitleParts.length - 1];

  const thirdTitle = t("unrivaledE");
  const thirdTitleParts = thirdTitle.split(" ");
  const thirdTitleRest = thirdTitleParts.slice(0, -1).join(" ");
  const thirdTitleLast = thirdTitleParts[thirdTitleParts.length - 1];

  return (
    <div
      ref={containerRef}
      className="h-screen w-full  text-white flex flex-col items-center justify-center text-3xl font-bold"
    >
      <div className="h-[300px]">
        <ScrollAnimation />
      </div>
      {/* <div className="h-[50vh]"> */}
      <div className="flex flex-col main-head   gap-[30px]">
        <div
          ref={(el) => (headingRefs.current[0] = el)}
          className="categories-headers-wrapper h11"
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
             <h1 className="why-section-heading-1 text-4xl md:text-[50px] lg:text-[60px]  main-heading">
            {firstTitleRest}{" "}
            <span className={`${language==="en"?"colorText1":"colorText12"} ml-4`}>{firstTitleLast}</span>
          </h1>
          </div>
        </div>
        <div
          ref={(el) => (headingRefs.current[1] = el)}
          className="categories-headers-wrapper h22"
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
             <h1 className="why-section-heading-1 text-4xl md:text-[50px] lg:text-[60px]  main-heading">
             {ScndTitleRest}{" "}
            <span className="colorText2 ml-4">{ScndTitleLast}</span>
          </h1>
          </div>
        </div>
        <div
          ref={(el) => (headingRefs.current[2] = el)}
          className="categories-headers-wrapper h33"
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
             <h1 className="why-section-heading-1 text-4xl md:text-[50px] lg:text-[60px]  main-heading">
             {thirdTitleRest}{" "}
            <span className="colorText3">{thirdTitleLast}</span>
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnedContainer;
