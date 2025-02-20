"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const SuccessMarquee = () => {
  let space;
  if (window.innerWidth < 640) {
    space = 10;
  } else {
    space = 50;}
  return (
    <div className="bg-[#0d1e30] py-2 overflow-hidden w-full">
      <div className="marquee">
        <div
          className="marquee-content   text-[10px] 
        sm:text-[16px] gap-32 "
        >
          <Swiper
            spaceBetween={space}
            slidesPerView={3}
            // centeredSlides={true}
            modules={[Autoplay, EffectFade, History, EffectCards]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loopAddBlankSlides={false}
            loopPreventsSliding={false}
            rtl={true}
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
              <div className="flex ml-3 sm:ml-0 justify-center items-center text-white">
                <img
                  src="/c1.png"
                  alt="client-logo"
                  className="w-10 h-10"
                />
                <p className="px-2 font-bold font-lato">
                  5+ Years of Experience
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ml-3 sm:ml-0 justify-center items-center text-white">
                <img src="/c2.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  500+ Successful Clients
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <img
                  src="/c3.png"
                  alt="client-logo"
                  className="w-10 h-10"
                />
                <p className="px-2 font-bold font-lato">50+ Talent Globally</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ml-3 sm:ml-0 justify-center items-center text-white">
                <img src="/c4.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  20+ Partners Globally 
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ml-3 sm:ml-0 justify-center items-center text-white">
                <img
                  src="/c5.png"
                  alt="client-logo"
                  className="w-10 h-10"
                />
                <p className="px-2 font-bold font-lato">
                  500+ Projects Completion{" "}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessMarquee;
