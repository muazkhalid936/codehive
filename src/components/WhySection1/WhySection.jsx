"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhySection.css";
import dynamic from "next/dynamic";

const ScrollAnimation = dynamic(() => import("../Home/ScrollAnimation"), {
  ssr: false,
});
gsap.registerPlugin(ScrollTrigger);

const ImageScrollEffect = () => {
  useEffect(() => {
    // Desktop GSAP timeline animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section-container",
        start: "top top",
        end: "+=8000", // Total scroll length
        scrub: true,
        pin: true, // Pin the entire container
      },
    });

    const applyGradient = (headingSelector, progress) => {
      // Interpolate between white => #209dd9
      const startColor = [255, 255, 255];
      const endColor = [32, 157, 217];
      const currentColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * progress)
      );

      const heading = document.querySelector(headingSelector);
      if (heading) {
        heading.style.background = `linear-gradient(
          90deg,
          rgb(${startColor.join(", ")}),
          rgb(${currentColor.join(", ")})
        )`;
        heading.style.webkitBackgroundClip = "text";
        heading.style.color = "transparent";
      }
    };

    const headingAnimations = () => {
      timeline
        // Animate heading 1 out
        .to(".why-section-heading-1", {
          opacity: 0,
          yPercent: -100,
          duration: 2,
        })
        // Animate heading 2 in and apply gradient
        .to(
          ".why-section-heading-2",
          {
            yPercent: -150, // Move to the center
            duration: 2,
            onUpdate: function () {
              const progress = this.progress();
              applyGradient(".colorText2", progress);
            },
          },
          "-=1.5"
        )
        .to(
          ".why-section-heading-3",
          {
            yPercent: -150,
            duration: 2,
          },
          "-=1.5"
        )
        .to(".why-section-heading-2", {
          yPercent: -250,
          opacity: 0,
          duration: 0.5,
        })
        .to(
          ".why-section-heading-3",
          {
            yPercent: -300,
            onUpdate: function () {
              const progress = this.progress();
              applyGradient(".colorText3", progress);
            },
            duration: 0.5,
          },
          "<"
        );
    };

    headingAnimations();

    // Mobile animations
    // Select all mobile items (each containing an image and a heading)
    const mobileItems = document.querySelectorAll(".mobile-item");
    mobileItems.forEach((item) => {
      gsap.fromTo(
        item,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Desktop Div */}
      <div className="why-section-container hidden container sm:flex flex-col mx-auto text-center text-white min-h-[600px] h-[100vh] font-bold relative overflow-hidden">
        {/* Images */}
        <div className="w-full animation flex justify-center">
          <ScrollAnimation />
        </div>

        {/* Headings */}
        <div className="text-4xl sm:text-[60px] justify-start flex flex-col">
          <h1 className="why-section-heading-1 main-heading">
            Unrivaled <span className="colorText1">Expertise</span>
          </h1>
          <h1 className="why-section-heading-2 main-heading">
            Customer-Centric <span className="colorText2 ml-4">Approach</span>
          </h1>
          <h1 className="why-section-heading-3 main-heading">
            End-to-End <span className="colorText3 ml-4">Support</span>
          </h1>
        </div>
      </div>

      {/* Mobile Div */}
      <div className="h-screen sm:hidden flex flex-col justify-center text-white items-center gap-5">
        {/* Each mobile item gets the "mobile-item" class */}
        <div className="mobile-item flex flex-col text-3xl justify-between items-center gap-5">
          <img src="/Why/1.png" alt="" className="h-[150px] object-cover" />
          <h1 className="why-section-heading-1 text-center main-heading">
            Unrivaled <span className="colorText1">Expertise</span>
          </h1>
        </div>
        <div className="mobile-item flex flex-col justify-between text-3xl items-center gap-5">
          <img src="/Why/2.png" alt="" className="h-[150px] object-cover" />
          <h1 className="why-section-heading-2 text-center main-heading">
            Customer-Centric <span className="colorText1 ml-2">Approach</span>
          </h1>
        </div>
        <div className="mobile-item flex flex-col justify-between items-center gap-5">
          <img src="/Why/3.png" alt="" className="h-[150px] object-cover" />
          <h1 className="why-section-heading-3 text-center text-3xl main-heading">
            End-to-End <span className="colorText1 ml-2">Support</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ImageScrollEffect;
