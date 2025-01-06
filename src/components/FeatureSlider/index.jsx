"use client";
import React from "react";

const FeatureSlider = ({ data, from }) => {
  return (
    <div
      className={` text-white overflow-hidden scrollbar-hidden   md:ml-24 z-50   ${from !== "contact" && "pb-[55px]"
        }`}
    >
      <h2
        className={`md:text-4xl 2xl:text-5xl font-extrabold gilray-font w-full ${from !== "contact" ? "text-black" : "text-white"
          }`}
      >
        {/* Partnered with Most of the Top <br /> People at Each{' '}
        <span className="text-[#219DD9]">Industry</span> */}
        {data?.title?.split(" ").map((word, index) => (
          <span
            key={index}
            className={` ${index === data.title.split(" ").length - 1 ? "text-[#219DD9]" : ""
              }`}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      {/* Snap Scroll Container */}
      <div className="mt-[55px] overflow-x-auto scroll-smooth  snap-mandatory flex gap-6 ">
        {data.cards.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 flex flex-col text-center rounded-xl h-[400px] 2xl:h-[550px]  bg-black w-[90%] md:w-[26%] overflow-hidden relative"
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-full h-full object-cover opacity-60 "
            />
            <div className="p-4 my-5 absolute bottom-0">
              <h3 className="text-2xl font-bold px-2 text-center font-gilroy">
                {item.name}
              </h3>
              <p className="text-white main_hero_slogan px-2 text-center ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
