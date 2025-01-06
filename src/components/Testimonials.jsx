"use client";
import React, { useRef } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = ({ testimonials }) => {
  const swiperRef = useRef(null); // Ref for Swiper instance

  return (
    <section className="bg-white  ">
      <div className="container mx-auto ">
        {/* Title and Carousel Controls */}
        <div className="flex flex-col sm:flex-row mt-[45px] items-center justify-between ">
          {/* Title */}
          <h2
            className=" text-left  text-2xl md:text-[45px] gilray-font"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            What They <span className="text-blueColor">Say</span> About Us
          </h2>

          {/* Carousel Buttons */}
          <div className="flex gap-2  sm:mt-0">
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#CBCBCB] flex items-center justify-center hover:bg-gray-400"
              onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
            >
              <HiChevronLeft className="text-white text-xl sm:text-2xl font-bold" />
            </button>
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#219DD9] flex items-center justify-center hover:bg-[#1C87B3]"
              onClick={() => swiperRef.current?.slideNext()} // Slide to next
            >
              <HiChevronRight className="text-white text-xl sm:text-2xl font-bold" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#000C1A] my-10 sm:mx-10 md:ml-10 md:mr-5 cursor-pointer text-white p-3 h-[45vh] xl:h-[45vh] 2xl:h-[45vh]  rounded-2xl shadow-lg relative transform transition-transform duration-300 ease-in-out hover:scale-[1.1] overflow-visible">
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
                <div className="flex flex-col">
                  {/* Quotation Marks */}
                  <img
                    src="/quote.png"
                    alt="Quotation Marks"
                    className="w-6 h-6 sm:w-10 sm:h-10 mb-4 ml-6"
                  />
                  <blockquote className="mb-4">
                    <p className="text-[10px] sm:text-[12px] xl:text-[16px] font-lato leading-relaxed px-4 sm:px-6">
                      {testimonial.text}
                    </p>
                  </blockquote>

                  {/* Name and Designation */}
                  <p className="text-lg sm:text-xl ml-6 font-lato">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 ml-6 font-lato">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
