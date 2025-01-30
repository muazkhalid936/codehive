"use client";
import React from "react";

// Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules"; // Correct import for Swiper v8+

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeatureSlider = ({ data, from }) => {
  return (
    <div className={`container z-50 ${from !== "contact" && "pb-[55px]"}`}>
      <h2
        className={`sub_heading font-extrabold gilray-font w-full ${
          from !== "contact" ? "text-black" : "text-white"
        }`}
      >
        {data?.title
          ?.split(" ")
          .map((word, index) => (
            <span
              key={index}
              className={`${
                // Last word in the title gets a special color
                index === data.title.split(" ").length - 1
                  ? "text-[#219DD9]"
                  : ""
              }`}
            >
              {word}{" "}
            </span>
          ))}
      </h2>

      {/* Swiper Slider */}
      <div className="mt-[55px]">
        <Swiper
          modules={[Mousewheel]} // Add Mousewheel module here
          cssMode={false}
          mousewheel={{
            forceToAxis: true, // Force horizontal scrolling
            invert: false,     // Normal scroll direction
          }}
          keyboard={true}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          loop={false} // optional infinite loop
          className="mySwiper"
        >
          {data.cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl h-[300px] sm:h-[450px] w-full bg-black overflow-hidden relative">
                <img
                  src={item.picture}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="p-4 h-[200px] absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent">
                  <div className="flex flex-col justify-center mt-5 h-full text-center text-white">
                    <h3 className="text-[22px] font-bold px-2">{item.name}</h3>
                    <p className="main_hero_slogan px-4 sm:px-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureSlider;