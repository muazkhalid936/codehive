"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhySection.css";
// import ScrolAnimation from "../Home/ScrollAnimation";
import dynamic from "next/dynamic";
const ScrollAnimation = dynamic(() => import("../Home/ScrollAnimation"), {
  ssr: false,
});
gsap.registerPlugin(ScrollTrigger);

const ImageScrollEffect = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section-container",
        start: "top top",
        end: "+=2500", // Total scroll length
        scrub: true,
        pin: true, // Pin the entire container
      },
    });
    // const timeline2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".animation",
    //     start: "top top",
    //     end: "+=3000", // Total scroll length
    //     scrub: true,
    //     pin: true, // Pin the entire container
    //   },
    // });

    // timeline2.to(".animation", {
    //   opacity: 1,
    //   xPercent: 0,
    // });
    const newFunc = () => ({
      onStart: () => {
        gsap.to(".colorText3", {
          // background: "linear-gradient(90deg, white, #209dd9, #209dd9)",
          webkitBackgroundClip: "text",
          color: "transparent",
          duration: 1, // Duration in seconds
          onStart: () => {
            const heading = document.querySelector(".colorText3");
            if (heading) {
              heading.style.background =
                "linear-gradient(90deg, white,#209dd9, #209dd9)";
              heading.style.webkitBackgroundClip = "text";
              heading.style.color = "transparent";
            }
          },
        });
      },
      onReverseComplete: () => {
        gsap.to(".colorText3", {
          duration: 1,
          color: "inherit",
        });
      },
    });
    timeline
      .to(".why-section-image-1", { opacity: 0, duration: 1 })
      .to(".why-section-image-2", { opacity: 1, duration: 1 }, "-=0.5")
      .to(".why-section-image-2", { opacity: 0, duration: 1 })
      .to(".why-section-image-3", { opacity: 1, duration: 1 }, "-=0.5");
    // .to(".why-section-heading-2", { opacity: 0, duration: 1, y: -100 }, "-=2")
    // .to(
    //   ".why-section-heading-3",
    //   {
    //     duration: 1,
    //     y: -150,
    //     ...newFunc(),
    //   },
    //   "-=2"
    // );

    const headingAnimations = () => {
      const applyGradient = (selector, startYPercent = -10) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".why-section-container",
            start: "300px center", // Adjusted to add a slight delay
            end: "+=1800",
            scrub: true,
          },
        });

        tl.to(
          ".why-section-heading-1",
          {
            opacity: 0,
            yPercent: -150,
            duration: 40, // Duration of the animation
          },
          "start+=2"
        );

        tl.to(
          ".why-section-heading-2",
          {
            yPercent: -200, // Consistent yPercent
            duration: 80, // Duration of the animation
            onStart: () => {
              // Apply gradient to .colorText2
              const heading = document.querySelector(".colorText2");
              if (heading) {
                heading.style.background =
                  "linear-gradient(90deg, white, #209dd9, #209dd9)";
                heading.style.webkitBackgroundClip = "text";
                heading.style.color = "transparent";
              }
            },
            onReverseComplete: () => {
              // Revert gradient on reverse
              const heading = document.querySelector(".colorText2");
              if (heading) {
                heading.style.background = "none";
                heading.style.color = "inherit";
              }
            },
          },
          "start+=2"
        );
        tl.to(
          ".why-section-heading-3",
          {
            yPercent: -150, // Consistent yPercent
            duration: 40, // Duration of the animation
          },
          "start+=2"
        );

        tl.to(
          ".why-section-heading-2",
          {
            yPercent: -300,
            opacity: 0, // Consistent yPercent
            duration: 40, // Duration of the animation
          },
          "+=120"
        );
        tl.to(
          ".why-section-heading-3",
          {
            duration: 80, // Match the duration of the previous animation
            y: -150,
            ...newFunc(),
          },
          "-=40" // Synchronize this animation with the previous one
        );
      };

      applyGradient(".why-section-heading-1");
    };

    headingAnimations();
  }, []);

  return (
    <>
      {/* Spacer for scrolling */}
      {/* <div className="h-screen">a</div> */}

      {/* Main Section */}
      <div className="why-section-container container flex flex-col  mx-auto text-center text-white min-h-[600px] h-[100vh] font-bold relative overflow-hidden">
        {/* Images */}
        <div
          className="w-full animation flex  justify-center  "
          // style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
        >
          <ScrollAnimation />
        </div>

        {/* Headings */}
        <div className="  text-[45px] justify-start  flex flex-col ">
          <h1 className="why-section-heading-1  main-heading ">
            Unrivaled <span className="colorText1">Expertise</span>
          </h1>
          <h1 className="why-section-heading-2   main-heading ">
            Customer-Centric
            <span className="colorText2 ml-4">Approach</span>
          </h1>
          <h1 className="why-section-heading-3  main-heading ">
            End-to-End
            <span className="colorText3 ml-4">Support</span>
          </h1>
        </div>
      </div>

      {/* Spacer for scrolling */}
      {/* <div className="h-screen">a</div> */}
    </>
  );
};
export default ImageScrollEffect;
