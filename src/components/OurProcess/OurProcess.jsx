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
  const [iconSize, setIconSize] = useState("40");
  useEffect(() => {
    if (window.innerWidth > 700) {
    } else {
      setIconSize("25");
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (window.innerWidth > 700) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".new-cards",
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=5000",
          scrub: 1,
        },
      });
      //      console.log("Desktop");

      const cards = [1, 2, 3, 4, 5, 6, 7]; // Extend with new cards

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];

        if (index === 0) {
          // Intro animation for the first card and text
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
          timeline.fromTo(
            `.new-icon-container`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            "start"
          );
          timeline.to(`.new-icon1`, { backgroundColor: "#27303b" }, `start`);
        }

        if (nextCard) {
          timeline.to(
            `.new-text-${card}`,
            { opacity: 0, y: -10, duration: 0.3 },
            `card-${nextCard}`
          );

          timeline.addPause();

          timeline.fromTo(
            `.new-text-${nextCard}`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 10, duration: 0.5 },
            `card-${nextCard}+=0.3`
          );

          timeline.to(
            `.new-card-${card}`,
            { xPercent: 60, yPercent: -60, rotate: 90 },
            `card-${nextCard}`
          );
          timeline.fromTo(
            `.new-card-${nextCard}`,
            { xPercent: 60, yPercent: 60, rotate: -90 },
            { xPercent: 0, yPercent: 0, rotate: 0 },
            `card-${nextCard}`
          );

          timeline.to(
            `.new-icon${card}`,
            {
              backgroundColor: "#0c1621",
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
            { backgroundColor: "#27303b" },
            `card-${nextCard}`
          );
        }
      });
    } else {
      //  console.log("Mobile");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".new-cards",
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=5000",
          scrub: 1,
        },
      });

      const cards = [1, 2, 3, 4, 5, 6, 7]; // Extend with new cards

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];

        if (index === 0) {
          // Intro animation for the first card and text
          timeline.fromTo(
            `.new-card-${card}`,
            { opacity: 0, yPercent: 30 },
            { opacity: 1, yPercent: 0 },
            "start"
          );
          timeline.fromTo(
            `.new-text-${card}`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            "start"
          );
          timeline.fromTo(
            `.new-icon-container`,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            "start"
          );
          timeline.to(`.new-icon1`, { backgroundColor: "#27303b" }, `start`);
        }

        if (nextCard) {
          timeline.to(
            `.new-text-${card}`,
            { opacity: 0, y: -30, duration: 0.3 },
            `card-${nextCard}`
          );

          timeline.addPause();

          timeline.fromTo(
            `.new-text-${nextCard}`,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5 },
            `card-${nextCard}+=0.3`
          );

          timeline.to(
            `.new-card-${card}`,
            { scale: 0.8, yPercent: -20 },
            `card-${nextCard}`
          );
          timeline.to(
            `.new-card-${card - 1}`,
            { scale: 0.7, yPercent: -30 },
            `card-${nextCard}`
          );
          timeline.fromTo(
            `.new-card-${nextCard}`,
            { opacity: 0, yPercent: 10, xPercent: 0 },
            { opacity: 1, yPercent: 0, xPercent: 0 },
            `card-${nextCard}`
          );

          timeline.to(
            `.new-icon${card}`,
            {
              backgroundColor: "#0c1621",
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
            { backgroundColor: "#27303b" },
            `card-${nextCard}`
          );
        }
      });
    }
  }, []);

  return (
    <div className="bg-[#000B17] container mx-auto ">
      <div className="new-cards flex sm:flex-row flex-col-reverse  items-center gap-20  justify-center sm:justify-between  h-[100vh] min-h-[400px] mx-auto">
        <div className="flex sm:w-1/2  mt-[100px] sm:mt-0 sm:h-auto  flex-col gap-20 sm:gap-5 first-container">
          <div className="new-icon-container sm:mb-[80px] gap-1">
            {IconsArr.map((Icon, i) => {
              const activeColor = active === i ? "#219bd9" : "#FFFFFF";
              return (
                <div
                  key={i}
                  className={`new-icon sm:p-[15px] p-[10px]  new-icon${i + 1} `}
                >
                  <Icon fill={activeColor} iconSize={iconSize} />
                </div>
              );
            })}
          </div>

          <div className="new-text-section  text-white">
            {[
              {
                title: "Requirement Gathering ",
                description:
                  "We begin by understanding your vision, objectives, and technical requirements to ensure a clear roadmap for development.",
              },
              {
                title: "Wireframing ",
                description:
                  "Our team creates rough sketches and wireframes to establish the project’s structure, ensuring alignment with your goals.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Our designers craft intuitive and visually appealing interfaces in Figma, focusing on user experience and seamless functionality.",
              },
              {
                title: "Development ",
                description:
                  "Our developers bring the designs to life, building secure, scalable, and high-performance applications tailored to your needs.",
              },
              {
                title: "QA & esting",
                description:
                  "We conduct rigorous testing for functionality, performance, and security, ensuring a flawless user experience across all devices.",
              },
              {
                title: "Deployment ",
                description:
                  "After thorough testing, we launch your application or website, ensuring a seamless transition to the live environment.",
              },
              {
                title: "Handover & Support",
                description:
                  "We deliver the final product with complete documentation, training, and ongoing support to ensure smooth operations.",
              },
            ].map((item, i) => {
              const titleWords = item.title.split(" ");
              const lastTwoWords = titleWords.slice(-2).join(" ");
              const firstWords = titleWords.slice(0, -2).join(" ");
              return (
                <div
                  key={i}
                  className={`new-text flex flex-col gap-4 main_hero_slogan new-text-${
                    i + 1
                  }`}
                >
                  <span className="font-bold text-center sm:text-start !font-lato !text-white  ">
                    <span className="font-bold  w-[90%] text-3xl sm:text-[50px] leading-none mt-5  main-heading text-white">
                      {firstWords}{" "}
                      <span className="bg-gradient-to-r from-white  to-blueColor bg-clip-text text-transparent">
                        {lastTwoWords}
                      </span>
                    </span>
                  </span>
                  <span className="text-white text-center sm:text-start main_hero_slogan !font-lato">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex sm:w-1/2">
          {IconsArr.map((_, i) => (
            <div
              key={i}
              className={`new-card ss sm:h-screen absolute new-card-${i + 1}`}
            >
              <div className="our-process-main-pic ">
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
