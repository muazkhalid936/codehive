"use client";
import React from "react";

const FeatureSlider = ({ data, from }) => {
  return (
    <div
      className={` text-white overflow-hidden scrollbar-hidden   md:ml-24 z-50   ${
        from !== "contact" && "pb-[55px]"
      }`}
    >
      <h2
        className={`sub_heading font-extrabold gilray-font w-full ${
          from !== "contact" ? "text-black" : "text-white"
        }`}
      >
        {/* Partnered with Most of the Top <br /> People at Each{' '}
        <span className="text-[#219DD9]">Industry</span> */}
        {data?.title?.split(" ").map((word, index) => (
          <span
            key={index}
            className={` ${
              index === data.title.split(" ").length - 1 ? "text-[#219DD9]" : ""
            }`}
          >
            {word}{" "}
          </span>
        ))}
      </h2>
      {/* Snap Scroll Container */}
      <div className="mt-[55px] overflow-x-scroll as scroll-smooth  snap-mandatory flex gap-6 ">
        {data.cards.map((item, index) => (
          <div
            key={index}
            className="snap-center shrink-0 flex flex-col text-center rounded-xl h-[450px]  w-[90%] md:w-[26%] bg-black overflow-hidden relative"
            // style={{
            //   background:
            //     "linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 2000%)",
            // }}
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-full h-full object-cover opacity-60 "
            />
            <div className="p-4 h-[200px]  absolute bg-gradient-to-t from-black to-transparent bottom-0">
              <div className="flex flex-col justify-center mt-5 h-full">
                <h3 className="text-[22px] font-bold px-2  ">
                  {item.name}
                </h3>
                <p className="text-white main_hero_slogan px-10  ">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
