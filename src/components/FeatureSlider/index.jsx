"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules"; // Correct import for Swiper v8+
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useStore from "../../store/useUserStore";
const FeatureSlider = ({ data, from }) => {
  const t = useTranslations("translation");
  const swiperRef = useRef(null);
  const { language } = useStore();
  return (
    <div
      className={`container ${
        from === "contact"
          ? "sm:mt-[55px] mt-[40px] py-[40px] sm:py-[55px]"
          : "mt-0 pt-[40px] sm:pt-[55px]"
      }  z-50 `}
    >
      <div
        className="flex justify-center sm:justify-between"
        dir={language === "en" ? "ltr" : "rtl"}
      >
        <h2
          className={`sub_heading text-center sm:text-start font-extrabold gilray-font  ${
            from !== "contact" ? "text-black" : "text-white"
          }`}
        >
          {t(data?.title)
            ?.split(" ")
            .map((word, index) => (
              <span
                key={index}
                className={`${
                  // Last word in the title gets a special color
                  index === t(data.title).split(" ").length - 1
                    ? "text-[#219DD9]"
                    : ""
                }`}
              >
                {word}{" "}
              </span>
            ))}
        </h2>
        <div
          className={` ${
            language === "en" ? "flex-row" : "flex-row-reverse"
          } gap-2 hidden sm:flex  sm:mt-0 `}
        >
         {language==="en"? <button
            className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              from === "contact" ? "bg-[#CBCBCB33]" : "bg-[#CBCBCB]"
            } flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor`}
            onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
          >
            <FaAngleLeft className="text-white text-xl sm:text-2xl font-bold" />
          </button>: <button
            className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              from === "contact" ? "bg-[#CBCBCB33]" : "bg-[#CBCBCB]"
            } flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor`}
            onClick={() => swiperRef.current?.slideNext()} // Slide to previous
          >
            <FaAngleLeft className="text-white text-xl sm:text-2xl font-bold" />
          </button>}
         {language==="en"? <button
            className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              from === "contact" ? "bg-[#CBCBCB33]" : "bg-[#CBCBCB]"
            } flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor`}
            onClick={() => swiperRef.current?.slideNext()} // Slide to previous
          >
            <FaAngleRight className="text-white text-xl sm:text-2xl font-bold" />
          </button>: <button
            className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              from === "contact" ? "bg-[#CBCBCB33]" : "bg-[#CBCBCB]"
            } flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor`}
            onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
          >
            <FaAngleRight className="text-white text-xl sm:text-2xl font-bold" />
          </button>}
        
        </div>
      </div>

      {/* Swiper Slider */}
      <div className=" mt-[30px] sm:mt-[50px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Mousewheel]} // Add Mousewheel module here
          cssMode={false}
          mousewheel={{
            forceToAxis: true, // Force horizontal scrolling
            invert: false, // Normal scroll direction
          }}
          keyboard={true}
          spaceBetween={10}
          dir={language === "en" ? "ltr" : "rtl"}
          // slidesPerView={3.2}
          breakpoints={{
            240: { slidesPerView: 1.3 },
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 3.2 },
          }}
          pagination={{ clickable: true }}
          loop={true} // optional infinite loop
          className="mySwiper"
        >
          {data.cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className=" overflow-hidden "
                style={{
                  border: "1px solid transparent",
                  borderRadius: " 20px",
                  background: `linear-gradient(30deg, #052036, #02101f),linear-gradient(30deg, transparent, #219DD9 ,transparent)`,
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                }}
              >
                <div className="rounded-2xl h-[330px] sm:h-[450px] w-full bg-black overflow-hidden relative">
                  <img
                    src={item.picture}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="sm:p-4 h-[150px] sm:h-[300px] absolute bottom-0 w-full bg-gradient-to-t from-[#021629]   to-transparent">
                    <div className="flex flex-col sm:pt-[100px] justify-center mt-5 h-full text-center text-white">
                      <h3 className="text-[16px] sm:text-[22px] font-bold px-2">
                        {t(item.name)}
                      </h3>
                      <p className="text-[10px] sm:text-[14px] px-4 sm:px-0">
                        {t(item.description)}
                      </p>
                    </div>
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
