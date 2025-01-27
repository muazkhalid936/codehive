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

    const headingAnimations = () => {
      const applyGradient = (selector, startYPercent = -10) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".why-section-container",
            start: "300px center", // Adjusted to add a slight delay
            end: "+=2500",
            scrub: true,
          },
        });

        // Add a label for the first animation
        tl.add("firstAnimation").to(
          ".why-section-heading-1",
          {
            delay: 0.3, // Delay the animation
            opacity: 0,
            yPercent: -200,
            duration: 2, // Duration of the animation
          },
          "firstAnimation" // Start at this label
        );

        // Add a label for the second animation
        tl.add("secondAnimation", "+=0.5") // Start 0.5 seconds after the first
          .to(
            ".why-section-heading-2",
            {
              delay: 0.3, // Delay the animation
              yPercent: -200, // Consistent yPercent
              duration: 2, // Duration of the animation
              onUpdate: function () {
                // Use this.progress (GSAP binds `this` to the animation instance)
                const progress = this.progress();

                // Interpolate between colors
                const startColor = [255, 255, 255]; // White
                const endColor = [32, 157, 217]; // #209dd9 (light blue)

                // Calculate current color based on progress
                const currentColor = startColor.map((start, index) =>
                  Math.round(start + (endColor[index] - start) * progress)
                );

                // Apply the gradient with the calculated color
                const heading = document.querySelector(".colorText2");
                if (heading) {
                  heading.style.background = `linear-gradient(90deg, white, rgb(${currentColor.join(
                    ", "
                  )}), rgb(${currentColor.join(", ")}))`;
                  heading.style.webkitBackgroundClip = "text";
                  heading.style.color = "transparent";
                }
              },
            },
            "firstAnimation" // Start at this label
          );

        // Add a label for the third animation
        tl.add("thirdAnimation", "+=0.5") // Start 0.5 seconds after the second
          .to(
            ".why-section-heading-3",
            {
              delay: 0.3, // Delay the animation

              yPercent: -150, // Consistent yPercent
              duration: 2, // Duration of the animation
            },
            "firstAnimation" // Start at this label
          );
        tl.add("thirdAnimation", "+=0.5") // Start 0.5 seconds after the second
          .to(
            ".why-section-heading-2",
            {
              yPercent: -350, // Consistent yPercent
              opacity: 0,
              // delay: 2, // Delay the animation

              duration: 0.5, // Duration of the animation
            },
            "secondAnimation+=1" // Start at this label
          )
          .to(
            ".why-section-heading-3",
            {
              yPercent: -350, // Consistent yPercent
              // opacity: 0,
              // delay: 2, // Delay the animation
              onUpdate: function () {
                // Use this.progress (GSAP binds `this` to the animation instance)
                const progress = this.progress();

                // Interpolate between colors
                const startColor = [255, 255, 255]; // White
                const endColor = [32, 157, 217]; // #209dd9 (light blue)

                // Calculate current color based on progress
                const currentColor = startColor.map((start, index) =>
                  Math.round(start + (endColor[index] - start) * progress)
                );

                // Apply the gradient with the calculated color
                const heading = document.querySelector(".colorText3");
                if (heading) {
                  heading.style.background = `linear-gradient(90deg, white, rgb(${currentColor.join(
                    ", "
                  )}), rgb(${currentColor.join(", ")}))`;
                  heading.style.webkitBackgroundClip = "text";
                  heading.style.color = "transparent";
                }
              },

              duration: 1, // Duration of the animation
            },
            "secondAnimation+=1" // Start at this label
          );
      };

      applyGradient(".why-section-heading-1");
    };

    headingAnimations();
  }, []);

  return (
    <>
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
    </>
  );
};
export default ImageScrollEffect;
