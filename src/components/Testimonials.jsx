"use client";
import React, { useRef } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = ({ testimonials }) => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-white  ">
      <div className="container mx-auto ">
        <div className="flex flex-row mt-[25px] sm:mt-[45px] items-center justify-between ">
          <h2
            className=" text-left    sub_heading font-gilroy"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            What They <span className="text-blueColor">Say</span> About Us
          </h2>

          <div className=" gap-2 hidden sm:flex sm:mt-0">
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

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#000C1A] my-5 sm:my-10 mx-5 h-[300px] md:h-[400px] cursor-pointer text-white px-6 py-5 rounded-2xl shadow-lg relative transform transition-transform duration-300 ease-in-out hover:scale-[1.1] overflow-visible">
                {/* Vector Images */}
                <div>
                  <img
                    src="/Vector.png"
                    alt="Vector Image"
                    className="absolute top-0 right-12 w-16 h-20 sm:h-22 mr-2"
                  />
                  <img
                    src="/Vector1.png"
                    alt="Vector Image"
                    className="absolute top-5 right-0 w-16 h-22 sm:h-24"
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
                      {testimonial.text}
                    </p>
                  </blockquote>

                  {/* Name and Designation */}
                  <div className="">
                    <p className="text-lg sm:text-xl  font-lato">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400  font-lato">
                      {testimonial.designation}
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
