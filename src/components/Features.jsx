"use client";
import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Features = ({ data }) => {
  const [itemHovered, setItemHovered] = useState("");

  return (
    <div className="bg-[#010b17] relative     z-50  overflow-hidden">
      <div className=" mx-8 pt-[45px] pb-[40px] text-white z-10 container">
        <h1 className="sub_heading  gilray-font w-full  md:w-[60%]">
          {data.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={`${index === 1 ? "text-[#219DD9]" : ""}`}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="w-full md:w-[55%] my-5 main_hero_slogan leading-6">
          {data.description}
        </p>

        <div className="flex flex-wrap  justify-start items-center">
          {data.cards.map((item, index) => {
            // Determine if the current index is even or odd
            const isEven = index % 2 === 0;

            // Define classes based on even/odd
            const cardClasses = `
              border border-blueColor 
              mx-5 my-5 p-6 h-[280px] flex cursor-pointer flex-col justify-center items-center   
              rounded-[20px] gap-4 relative overflow-hidden 
              transition-transform duration-300 transform hover:scale-[1.1]
              ${
                isEven
                  ? "bg-gradient-to-r from-[#062035] to-transparent"
                  : "bg-gradient-to-tl from-[#062035] to-transparent"
              }
            `;

            return (
              <div
                key={index}
                className={`w-[95%] sm:w-1/2 md:w-1/3 ${
                  data.columns === 4 ? "xl:w-1/4" : "xl:w-1/3"
                }`}
              >
                <div
                  className={cardClasses}
                  onMouseEnter={() => setItemHovered(item.title)}
                  onMouseLeave={() => setItemHovered("")}
                >
                  {/* Image Container */}
                  <div
                    className={`transition-opacity duration-500 ${
                      itemHovered === item.title ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 mx-auto"
                    />
                    <h2 className="text-center text-[17px] mb-2">
                      {item.title}
                    </h2>
                  </div>

                  {/* Description Container */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center 
                                bg-gradient-to-t  from-[#062035] to-transparent gap-2 bg-opacity-90 p-4 
                                transition-opacity duration-500 
                                ${
                                  itemHovered === item.title
                                    ? "opacity-100"
                                    : "opacity-0"
                                }
                               `}
                  >
                    <h2 className="text-center text-[17px]  ">{item.title}</h2>
                    <p className="text-center text-[#fbfbfb]  text-[13px] ">
                      {item.description}
                    </p>

                    {item.getStarted && (
                      <Link
                        className="flex items-center justify-center gap-4 px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg border-white border-[1px] border-solid transition mt-6 sm:mt-10"
                        href={item.path}
                      >
                        <p className="text-white text-[15px]">Get Started</p>
                        <div className="bg-[#219DD9] rounded-full p-1 sm:p-2">
                          <FaArrowRight className="text-white" />
                        </div>
                      </Link>
                    )}

                    {/* Add Talk an Expert button */}
                    {item.talkAnExpert && (
                      <Link
                        className="flex items-center mt-3  relative justify-center gap-4 mx-10 px-4 py-2 w-[90%] rounded-full shadow-lg border-[#3c5d73] border-[1px] border-solid transition "
                        href={item.path}
                      >
                        <p className="text-[15px] text-white">Talk an Expert</p>

                        <div className="p-1 rounded-full absolute right-2 bg-white">
                          <FaArrowRight className="text-[#219DD9]" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="my-32 text-center">
          <p className="text-4xl md:text-4xl 2xl:text-5xl font-bold font-gilroy w-full md:w-1/2 mx-auto">
            {data.subheading}
          </p>
        </div> */}

        {/* <div className="flex justify-center gap-4 items-center">
          <div className="bg-[#0c1c2c] py-3 rounded-full px-2 relative flex gap-2">
            <div className="flex gap-2  items-center justify-center">
              <FiPhoneCall />
              <p className="text-lg text-center w-[200px]">Let's talk</p>
            </div>
            <div className="p-2 rounded-full absolute right-2  bg-[#219DD9]">
              <FaArrowRight />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features;
