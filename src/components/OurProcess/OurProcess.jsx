"use client";
import { useState, useEffect } from "react";
import "./In.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Icon1 from "../../assets/icons/Icon1";
import Icon2 from "../../assets/icons/Icon2";
import Icon3 from "../../assets/icons/Icon3";
import Icon4 from "../../assets/icons/Icon4";
import Icon5 from "../../assets/icons/Icon5";
import Icon6 from "../../assets/icons/Icon6";
import Icon7 from "../../assets/icons/Icon7";
const IconsArr = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

const StackingImages = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".new-cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=3000",
        scrub: 1,
      },
    });

    // Define animations for each card and text
    const cards = [1, 2, 3, 4, 5, 6, 7]; // Extend with new cards
    cards.forEach((card, index) => {
      const nextCard = cards[index + 1];

      if (index === 0) {
        timeline.fromTo(
          ".first-container",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "start"
        );
      }
      if (index === 0) {
        timeline.fromTo(
          `.new-card-${card}`,
          { xPercent: 60, yPercent: 60, rotate: -90 },
          { xPercent: 0, yPercent: 0, rotate: 0 },
          "start"
        );
        timeline.fromTo(
          `.new-text-${card}`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "start"
        );
      }

      // Transition animations
      if (nextCard) {
        timeline.to(
          `.new-card-${card}`,
          { xPercent: 60, yPercent: -60, rotate: 90 },
          `card-${nextCard}`
        );
        timeline.to(
          `.new-text-${card}`,
          { opacity: 0, y: -50, duration: 0.2 },
          `card-${nextCard}`
        );
        timeline.fromTo(
          `.new-card-${nextCard}`,
          { xPercent: 60, yPercent: 60, rotate: -90 },
          { xPercent: 0, yPercent: 0, rotate: 0 },
          `card-${nextCard}`
        );
        timeline.fromTo(
          `.new-text-${nextCard}`,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.5 },
          `card-${nextCard}`
        );
        timeline.to(
          `.new-icon${card}`,
          {
            backgroundColor: "#0c1621",
            duration: 0.3,
            onStart: function () {
              setActive(index + 1);
            },
            onReverseComplete: function () {
              setActive(index);
            },
          },

          `card-${nextCard}`
        );
        timeline.to(
          `.new-icon${nextCard}`,
          { backgroundColor: "#27303b", duration: 0.3 },
          `card-${nextCard}`
        );
      }
    });
  }, []);

  console.log(active);

  return (
    <div className="bg-[#000B17] container mx-auto">
      <div className="new-cards  items-center  h-[100vh] min-h-[400px] mx-auto">
        <div className="flex w-1/2 flex-col gap-5 first-container">
          <div className="new-icon-container gap-2">
            {IconsArr.map((Icon, i) => {
              const activeColor = active === i ? "#219bd9" : "#2a333d";
              return (
                <div key={i} className={`new-icon new-icon${i + 1} `}>
                  <Icon fill={activeColor} />
                </div>
              );
            })}
          </div>

          <div className="new-text-section mt-20 text-white">
            {[
              {
                title: "Our Vision",
                description:
                  "We strive to transform innovative ideas into world-class apps and websites, delivering exceptional user experiences that drive success.",
              },
              {
                title: "Initial Sketch Design",
                description:
                  "We start with brainstorming and sketching to lay the foundation for your unique project, ensuring clarity and alignment with your goals.",
              },
              {
                title: "Figma Design Creation",
                description:
                  "Our designers bring your vision to life with detailed, user-friendly designs in Figma, focusing on both aesthetics and functionality.",
              },
              {
                title: "Development Phase",
                description:
                  "Our developers turn designs into reality by building robust, secure, and scalable websites or apps tailored to your needs.",
              },
              {
                title: "Testing",
                description:
                  "We rigorously test your product for performance, usability, and reliability to ensure it functions seamlessly in all scenarios.",
              },
              {
                title: "Application/Website Launch",
                description:
                  "After thorough preparation, we launch your app or website, ensuring a smooth transition to the live environment.",
              },
              {
                title: "Project Handover",
                description:
                  "We provide you with a fully functional product, complete with all the resources and support needed to take full control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`new-text flex flex-col gap-4 main_hero_slogan new-text-${
                  i + 1
                }`}
              >
                <span className="font-bold !font-lato !text-white  ">
                  <span className=" text-white main_hero_slogan">
                    {item.title}
                  </span>
                </span>
                <span className="text-white main_hero_slogan !font-lato">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-1/2">
          {IconsArr.map((_, i) => (
            <div key={i} className={`new-card ss new-card-${i + 1}`}>
              <div className="our-process-main-pic">
                <img
                  src={`/process/bg${i + 1}.png`}
                  className="h-[100%] w-[100%]"
                  alt={`Card ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
