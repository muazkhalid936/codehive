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
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 60%",
            end: "+=150",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        step.querySelector(".animate-description"),
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 60%",
            end: "+=150",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      gsap.fromTo(
        step.querySelector(".circle"),
        { opacity: 0 },
        {
          opacity: 1,
          borderColor: "#219DD9",
          scrollTrigger: {
            trigger: step,
            start: "top 60%",
            end: "+=150",
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
            start: "top 60%",
            end: "+=150",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, [data]);

  return (
    <div className="bg-white relative py-[25px] sm:py-[55px]" ref={containerRef}>
      <div className="w-auto text-center mx-auto">
        <h1 className="sub_heading mb-10 gilray-font w-full">
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
      <div className="flex container pt-10 flex-col lg:flex-row justify-around w-full  relative">
        {/* Images */}
        {/* <div className="w-1/2 flex flex-col gap-5 justify-between ">
          {data.steps.map((_, index) => (
          
          ))}
        </div> */}

        {/* Steps */}
        <div className="">
          <ol className="  flex flex-col gap-[2rem] ">
            {/* <span className="border-s border-gray-300 absolute h-full mt-10 left-8"></span> */}
            {data.steps.map((value, index) => (
              <div
                className="flex gap-[2rem] flex-row justify-around flex-1 items-center"
                key={index}
              >
                <div className="sm:w-1/2 sm:flex hidden  justify-center items-center">
                  <img
                    key={index}
                    src={value.img}
                    className="w-[70%] opacity-0 mx-auto  object-cover h-[180px] rounded-2xl"
                    ref={(el) => (imagesRef.current[index] = el)}
                  />
                </div>

                <li
                  className="sm:ms-6 sm:w-1/2 flex flex-col sm:flex-row gap-3 sm:gap-10 justify-center items-center "
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                >
                  {/* Circle Animation */}
                  <div className="w-[50px]">
                    <span className="circle   flex items-center justify-center  p-4 px-8  -start-2 border-[#ccc] border-2 rounded-full text-[#219DD9] z-150 bg-white">
                      <span className="font-extrabold text-xl font-gilroy">
                        {value.id.toString().padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                  {/* Text Animation */}
                  <div className="">
                    <h3 className="animate-title text-center sm:text-start  text-[#162E4A] text-[19px] font-semibold mb-2 ">
                      {value.title}
                    </h3>
                    <p className="animate-description text-[14px] sm:text-[16px] text-center sm:text-start text-gray-600  ">
                      {value.description}
                    </p>
                  </div>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
