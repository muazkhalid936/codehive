"use client";
import React, { useRef } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useStore from "../store/useUserStore";
const Testimonials = ({ testimonials }) => {
  const swiperRef = useRef(null);

  const t = useTranslations("translation");
  const title = t("whatTheySa");
  const segmenter = new Intl.Segmenter("ar", { granularity: "word" });
  const words = Array.from(segmenter.segment(title)).map((seg) => seg.segment);

  const { language } = useStore();
  return (
    <section className="bg-white  ">
      <div className="container mx-auto ">
        <div
          className={`flex ${
            language === "en" ? "flex-row" : "flex-row-reverse"
          } mt-[25px] sm:mt-[45px] items-center justify-between `}
        >
          <h2
            className=" text-left    sub_heading font-gilroy"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`${index === 2 ? "text-blueColor" : "text-black"}`}
              >
                {word}{" "}
              </span>
            ))}{" "}
          </h2>

          <div className=" gap-2 hidden sm:flex sm:mt-0">
           {language==="en"? <button
              className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
              onClick={() => swiperRef.current?.slideNext()} // Slide to previous
            >
              <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
            </button>: <button
              className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
              onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
            >
              <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
            </button>}
           {language==="en"? <button
              className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
              onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
            >
              <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
            </button>: <button
              className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
              onClick={() => swiperRef.current?.slideNext()} // Slide to previous
            >
              <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
            </button>}
            
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          loop={true}
          dir={language === "en" ? "rtl" : "ltr"}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                dir={language === "en" ? "ltr" : "rtl"}
                className="bg-[#000C1A] my-5 sm:my-10 mx-5 h-[300px] md:h-[400px] cursor-pointer text-white px-6 py-5 rounded-2xl shadow-lg relative transform transition-transform duration-300 ease-in-out hover:scale-[1.1] overflow-visible"
              >
                {/* Vector Images */}
                <div>
                  <img
                    src="/PartnerLogo.png"
                    alt="Vector Image"
                    className={`absolute object-contain top-0 ${
                      language === "en"
                        ? "right-[-5px]"
                        : "left-[-5px] scale-x-[-1]"
                    } w-16 h-20 sm:h-22 mr-2`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col h-full justify-between">
                  {/* Quotation Marks */}
                  <img
                    src="/quote.png"
                    alt="Quotation Marks"
                    className="w-6 h-6 sm:w-10 sm:h-10 "
                  />
                  <blockquote className="mb-4">
                    <p className="text-[10px] sm:text-[15px] font-lato leading-relaxed ">
                      {language === "en" ? testimonial.text : testimonial.atext}
                    </p>
                  </blockquote>

                  {/* Name and Designation */}
                  <div className="">
                    <p className="text-lg sm:text-xl  font-lato">
                      {language === "en" ? testimonial.name : testimonial.aname}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400  font-lato">
                      {language === "en"
                        ? testimonial.designation
                        : testimonial.adesignation}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" gap-2 flex justify-center mb-5 sm:hidden sm:mt-0">
          <button
            className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center ease-in-out duration-300 hover:bg-blueColor"
            onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
          >
            <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
          </button>
          <button
            className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center ease-in-out duration-300 justify-center hover:bg-blueColor"
            onClick={() => swiperRef.current?.slideNext()} // Slide to next
          >
            <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
