"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const SuccessStats = () => {
  return (
    <div className="bg-[#0d1e30] py-4 overflow-hidden w-full">
      <div className="marquee">
        <div className="marquee-content gap-32 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            // centeredSlides={true}
            modules={[Autoplay, EffectFade, History, EffectCards]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loopAddBlankSlides={false}
            loopPreventsSliding={false}
            rewind={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <p className="px-2 font-bold font-lato whitespace-nowrap">
                  20000+ Successful Clients
                </p>
                <span className="px-8 text-white flex items-center justify-center">
                  <img src="/logo.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <p className="px-2 font-bold font-lato whitespace-nowrap">
                  4+Million revenue enabled for clients
                </p>
                <span className="px-8 text-white flex items-center justify-center">
                  <img src="/logo.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <p className="px-2 font-bold font-lato whitespace-nowrap">
                  2250+ Talent globally
                </p>
                <span className="px-8 text-white flex items-center justify-center">
                  <img src="/logo.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <p className="px-2 font-bold font-lato whitespace-nowrap">
                  20000+ Successful Clients
                </p>
                <span className="px-8 text-white flex items-center justify-center">
                  <img src="/logo.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <p className="px-2 font-bold font-lato whitespace-nowrap">
                  20000+ Successful Clients
                </p>
                <span className="px-8 text-white flex items-center justify-center">
                  <img src="/logo.png" />
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessStats;
