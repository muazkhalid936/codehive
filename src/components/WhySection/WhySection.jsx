"use client";
import React, { use, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhySection.css";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import useStore from "../../store/useUserStore";
const ScrollAnimation = dynamic(() => import("../Home/ScrollAnimation"), {
  ssr: false,
});
gsap.registerPlugin(ScrollTrigger);

const ImageScrollEffect = () => {
  const { language } = useStore();
  useEffect(() => {
    // Desktop GSAP timeline animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section-container",
        start: "top top",
        end: "+=4500", // Total scroll length
        scrub: true,

        pin: true, // Pin the entire container
      },
    });

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

    const headingAnimations = () => {
      timeline
        // Animate heading 1 out
        .to(".why-section-heading-1", {
          opacity: 0,
          yPercent: -100,
          duration: 0.5,
        })
        // Animate heading 2 in and apply gradient
        .to(
          ".why-section-heading-2",
          {
            yPercent: -150, // Move to the center
            duration: 0.5,
            onUpdate: function () {
              const progress = this.progress();
              applyGradient(".colorText2", progress);
            },
          },
          "<"
        )
        .to(
          ".why-section-heading-3",
          {
            yPercent: -150,
            duration: 0.5,
          },
          "<"
        )
        .to(
          ".why-section-heading-2",
          {
            yPercent: -200,
            opacity: 0,
            // duration: 1,
          } // Delay before animating the next heading
        )
        .to(
          ".why-section-heading-3",
          {
            yPercent: -300,
            onUpdate: function () {
              const progress = this.progress();
              applyGradient(".colorText3", progress);
            },
            duration: 1,
          },
          "<"
        );
    };

    if (window.innerWidth > 640) {
      headingAnimations();
    }

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

  const t = useTranslations("translation");
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
    <>
      {/* Desktop Div */}
      <div className="why-section-container  hidden container sm:flex flex-col mx-auto text-center text-white min-h-[600px] h-[100vh] font-bold relative overflow-hidden">
        {/* Images */}
        <div className="w-full animation flex justify-center">
          <ScrollAnimation />
        </div>

        {/* Headings */}
        <div className="text-4xl sm:text-[60px] justify-start flex flex-col">
          <h1 className="why-section-heading-1 main-heading">
            {firstTitleRest}{" "}
            <span className={`${language==="en"?"colorText1":"colorText12"} ml-4`}>{firstTitleLast}</span>
          </h1>
          <h1 className="why-section-heading-2 main-heading">
            {ScndTitleRest}{" "}
            <span className="colorText2 ml-4">{ScndTitleLast}</span>
          </h1>
          <h1 className="why-section-heading-3 main-heading">
            {thirdTitleRest}{" "}
            <span className="colorText3">{thirdTitleLast}</span>
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
