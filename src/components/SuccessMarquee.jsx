"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const SuccessMarquee = () => {
  return (
    <div className="bg-[#0d1e30] py-2 overflow-hidden w-full">
      <div className="marquee">
        <div className="marquee-content text-[10px] 
        sm:text-[16px] gap-32 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            // centeredSlides={true}
            modules={[Autoplay, EffectFade, History, EffectCards]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              <div className="flex justify-center items-center text-white">
                <img src="/talent.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  20000+ Successful Clients
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <img src="/star.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  650+ Talent Globally
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <img src="/talent.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  4+ Million revenue enabled
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <img src="/star.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  20000+ Successful Clients
                </p> 
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center text-white">
                <img src="/client.png" alt="client-logo" className="w-10 h-10" />
                <p className="px-2 font-bold font-lato">
                  20000+ Successful Clients
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
