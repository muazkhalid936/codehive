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
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="flex justify-center items-center my-5">
          <h1
            className="font-black text-center hover:underline underline-offset-[2px] text-[30px] md:text-[45px] leading-[50px] sm:leading-[60px] md:leading-[77px] decoration-1 decoration-blue-500 font-gilroy"
            style={{
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
            }}
          >
            <span className="text-[#010B17]">What They </span>
            <span className="text-[#219DD9]">Say</span>
            <span className="text-[#010B17]"> About Us</span>
          </h1>
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1} // Only one card visible at a time
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Full-width card on smaller screens
            768: { slidesPerView: 1 }, // Full-width card on medium screens
            1024: { slidesPerView: 1 }, // Full-width card on larger screens
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#000C1A] text-white p-6 rounded-2xl shadow-lg relative w-[90%] h-[400px] sm:h-[400px] mx-auto">
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
                    className="w-6 h-6 sm:w-10 sm:h-10 mb-4 ml-6"
                  />
                  <blockquote className="mb-2">
                    {" "}
                    {/* Reduced margin-bottom here */}
                    <p className="text-base text-[20px] font-lato leading-relaxed px-4 sm:px-6">
                      {testimonial.text}
                    </p>
                  </blockquote>

                  {/* Name and Designation in a row */}
                  <div className="flex items-center justify-between ml-6">
                    <div>
                      <p className="text-lg sm:text-xl font-lato">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 font-lato mb-2">
                        {" "}
                        {/* Added margin-bottom here */}
                        {testimonial.designation}
                      </p>
                    </div>

                    {/* Swipe Buttons */}
                    <div className="flex gap-2">
                      <button
                        className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:bg-blueColor"
                        onClick={() => swiperRef.current?.slidePrev()} // Slide to previous
                      >
                        <HiChevronLeft className="text-black text-lg" />
                      </button>
                      <button
                        className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:bg-blueColor"
                        onClick={() => swiperRef.current?.slideNext()} // Slide to next
                      >
                        <HiChevronRight className="text-black text-lg" />
                      </button>
                    </div>
                  </div>
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
