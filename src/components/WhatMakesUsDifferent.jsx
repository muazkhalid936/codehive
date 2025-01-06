"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUsDifferent = ({ data }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step.querySelector(".animate-title"),
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "+=200",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        step.querySelector(".animate-description"),
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "+=200",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        step.querySelector(".circle"),
        { opacity: 0.2 },
        {
          opacity: 1,
          borderColor: "#219DD9",
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "+=200",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        imagesRef.current[index],
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top center",
            end: "+=200",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, [data]);

  return (
    <div
      className="bg-white relative py-[55px]"
      ref={containerRef}
    >
      <div className="w-auto text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-[45px] mb-10 gilray-font w-full">
          {data.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={`${index === 1 ? "text-[#219DD9]" : ""}`}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
      </div>
      <div className="flex container pt-10 flex-col lg:flex-row justify-around  relative">
        {/* Images */}
        <div className="w-1/2 flex flex-col gap-5 justify-between ">
          {data.steps.map((_, index) => (
            <img
              key={index}
              src={`/make/${index + 1}.png`}
              className="w-[80%] opacity-0 mx-auto h-[230px] 2xl:h-[260px] "
              ref={(el) => (imagesRef.current[index] = el)}
            />
          ))}
        </div>

        {/* Steps */}
        <div className="w-1/2">
          <ol className="relative justify-between gap-5    flex flex-col   ">
            {/* <span className="border-s border-gray-300 absolute h-full mt-10 left-8"></span> */}
            {data.steps.map((value, index) => (
              <li
                className="ms-6  h-[230px] 2xl:h-[260px]  "
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
              >
                {/* Circle Animation */}
                <span className="circle absolute flex items-center justify-center mt-[4.3rem] w-[5rem] h-[5rem] -start-2 border-[#ccc] border-2 rounded-full text-[#219DD9] z-100 bg-white">
                  <span className="font-extrabold text-xl font-gilroy">
                    {value.id.toString().padStart(2, "0")}
                  </span>
                </span>
                {/* Text Animation */}
                <div className="ml-24 mt-[3.5rem]">
                  <h3 className="animate-title text-lg md:text-3xl text-gray-800 font-semibold mb-2 ">
                    {value.title}
                  </h3>
                  <p className="animate-description text-base 2xl:text-lg text-gray-600  font-lato">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
