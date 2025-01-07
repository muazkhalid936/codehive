"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhySection.css";
gsap.registerPlugin(ScrollTrigger);

const ImageScrollEffect = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section-container",
        start: "top top",
        end: "+=1800", // Total scroll length
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
    timeline
      .to(".why-section-image-1", { opacity: 0, duration: 1 })
      .to(".why-section-image-2", { opacity: 1, duration: 1 }, "-=0.5")
      .to(".why-section-image-2", { opacity: 0, duration: 1 })
      .to(".why-section-image-3", { opacity: 1, duration: 1 }, "-=0.5")
      .to(
        ".why-section-heading-2",
        { opacity: 0, duration: 1, y: -50 },
        "-=1.5"
      )
      .to(
        ".why-section-heading-3",
        {
          duration: 1,
          y: -100,
          ...newFunc(),
        },
        "-=1.5"
      );

    const headingAnimations = () => {
      const applyGradient = (selector, startYPercent = -10) => {
        gsap.to(".why-section-heading-1", {
          opacity: 0,
          yPercent: -100,
          // color: "#209dd9",
          duration: 1,
          scrollTrigger: {
            trigger: ".why-section-container",
            start: "top top",
            end: "+=600",
            scrub: true,
          },

          // onStart: () => {
          //   gsap.to(".colorText1", {
          //     color: "#209dd9",
          //     duration: 1,
          //   });
          // },
          // onReverseComplete: () => {
          //   gsap.to(".colorText1", {
          //     duration: 1,
          //     color: "inherit",
          //   });
          // },
          // onStart: () => {
          //   const heading = document.querySelector(".colorText1");
          //   if (heading) {
          //     heading.style.background =
          //       "linear-gradient(90deg, white,#209dd9, #209dd9)";
          //     heading.style.webkitBackgroundClip = "text";
          //     heading.style.color = "transparent";
          //   }
          // },
          // onReverseComplete: () => {
          //   const heading = document.querySelector(selector);
          //   if (heading) {
          //     heading.style.background = "none";
          //     heading.style.color = "inherit";
          //   }
          // },
        });
      };

      let yPercentValue = -300;
      let as = 60;
      // console.log(window.innerWidth, "window.innerWidth");
      // Default yPercent value for all headings
      if (window.innerHeight <= 1000) {
        yPercentValue = -150;
        as = 40; // Set yPercent value to 200 for screen width 1440px or greater
      }

      gsap.to(".why-section-heading-2", {
        scrollTrigger: {
          trigger: ".why-section-heading-1",
          start: "top center",
          end: "+=600",
          scrub: true,
        },
        onStart: () => {
          gsap.to(".colorText2", {
            // background: "linear-gradient(90deg, white, #209dd9, #209dd9)",
            webkitBackgroundClip: "text",
            color: "transparent",
            duration: 1, // Duration in seconds
            onStart: () => {
              const heading = document.querySelector(".colorText2");
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
          gsap.to(".colorText2", {
            duration: 1,
            color: "inherit",
          });
        },

        // onStart: () => {
        //   const heading = document.querySelector(".why-section-heading-2");
        //   if (heading) {
        //     heading.style.background =
        //       "linear-gradient(20deg, white,white, #209dd9)";
        //     heading.style.webkitBackgroundClip = "text";
        //     heading.style.color = "transparent";
        //   }
        // },
        // onReverseComplete: () => {
        //   const heading = document.querySelector(".why-section-heading-2");
        //   if (heading) {
        //     heading.style.background = "none";
        //     heading.style.color = "inherit";
        //   }
        // },
        // color: "blue",
        yPercent: yPercentValue, // Use consistent yPercent
      }

      );

      gsap.to(".why-section-heading-3", {
        scrollTrigger: {
          trigger: ".why-section-heading-1",
          start: "top center",
          end: "+=600",
          scrub: true,
        },
        yPercent: yPercentValue, // Use consistent yPercent
      });

      applyGradient(".why-section-heading-1");
    };

    headingAnimations();
  }, []);

  return (
    <>
      {/* Spacer for scrolling */}
      {/* <div className="h-screen">a</div> */}

      {/* Main Section */}
      <div className="why-section-container container flex flex-col mx-auto text-center text-white h-[100vh] font-bold relative overflow-hidden">
        {/* Images */}
        <div className="w-full h-screen flex justify-center items-start">
          <img
            src="/Why/1.png"
            alt="First Image"
            className="absolute  why-section-img   why-section-image-1 opacity-100"
          />
          <img
            src="/Why/2.png"
            alt="Second Image"
            className="absolute  why-section-img  why-section-image-2    opacity-0"
          />
          <img
            src="/Why/3.png"
            alt="Third Image"
            className="absolute  why-section-img   why-section-image-3  opacity-0 "
          />
        </div>

        {/* Headings */}
        <div className="relative why-section-heading-section text-[50px]  flex flex-col ">
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
