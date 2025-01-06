"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ourMissionData } from "../data";
import "swiper/css";
import { useState } from "react";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";

const OurMission = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className=" h-[270px] ">
        <Swiper
          // spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          modules={[Autoplay, EffectFade, History, EffectCards]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loopAddBlankSlides={false}
          loopPreventsSliding={false}
          rewind={true}
          loop={true}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {ourMissionData.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                marginRight: 0,
              }}
            >
              <div
                className={`flex flex-col text-center transition-transform duration-300 gap-2 ${activeSlide === index
                    ? "scale-115 opacity-100"
                    : "scale-100 opacity-70"
                  }`}
              >
                <h3
                  className={`text-[#219DD9] text-2xl  ${activeSlide === index
                      ? "scale-105 opacity-100"
                      : "scale-100 opacity-70"
                    }`}
                >
                  .{index > 9 ? index + 1 : `0${index + 1}`}
                </h3>
                {activeSlide === index && (
                  <>
                    <h2 className="text-4xl !font-light font-gilroy">
                      {item.title}
                    </h2>
                    <p className="main_hero_slogan text-gray-500">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-1 container bg-[#219DD9] mb-32" />
    </>
  );
};

export default OurMission;
