"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, History, EffectCards } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import useStore from "../store/useUserStore";
const SuccessMarquee = () => {
  let space;
  useEffect(() => {
    if (window.innerWidth < 640) {
      space = 0;
    } else {
      space = 50;
    }
  });

  const { language } = useStore();
  return (
    <div className="bg-[#0d1e30] mt-[-1px] py-2 overflow-hidden w-full">
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
            <div className={`flex ml-3 sm:ml-0 justify-center  ${language==="en"?"flex-row":"flex-row-reverse"} items-center text-white`}>
            <img src="/c1.png" alt="client-logo" className="w-8 h-8" />
                <p className="sm:px-3 px-2 font-bold  font-lato">
                  {language === "en"
                    ? " 5+ Years of Experience"
                    : "5+ سنوات من الخبرة "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`flex ml-3 sm:ml-0 justify-center  ${language==="en"?"flex-row":"flex-row-reverse"} items-center text-white`}>
            <img src="/c2.png" alt="client-logo" className="w-8 h-8" />
                <p className="sm:px-3 px-2 font-bold  font-lato">
                  {language === "en"
                    ? "500+ Successful Clients"
                    : " 500+ عميل ناجح "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`flex ml-3 sm:ml-0 justify-center  ${language==="en"?"flex-row":"flex-row-reverse"} items-center text-white`}>
            <img src="/c3.png" alt="client-logo" className="w-8 h-8" />
                <p className="sm:px-3 px-2 font-bold  font-lato">
                  {language === "en"
                    ? "50+ Talent Globally"
                    : "50+ موهبة عالمية"}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`flex ml-3 sm:ml-0 justify-center  ${language==="en"?"flex-row":"flex-row-reverse"} items-center text-white`}>
            <img src="/c4.png" alt="client-logo" className="w-8 h-8" />

                <p className="sm:px-3 px-2  font-bold font-lato">
                  {language === "en"
                    ? "20+ Partners Globally"
                    : "20+ شريك عالمي"}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`flex ml-3 sm:ml-0 justify-center  ${language==="en"?"flex-row":"flex-row-reverse"} items-center text-white`}>
                <img src="/c5.png" alt="client-logo" className="w-8 h-8" />

                <p className="sm:px-3 px-2 pl-2 font-bold font-lato">
                  {language === "en"
                    ? "500+ Projects Completion"
                    : "500+ مشروع مكتمل"}
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
