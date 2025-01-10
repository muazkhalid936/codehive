"use client";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = ({ heading }) => {
  return (
    <div className="relative bg-[#000B17] overflow-hidden py-20">
      {/* Heading */}
      <div className="mt-32 text-center">
        <p className="gilray-font sub_heading w-full md:w-1/2 mx-auto text-white">
          {heading}
        </p>
      </div>

      {/* Call to Action Button */}
      <div>
        <div
          className="justify-between flex items-center w-[300px] m-auto bg-[#0C1C2C] mt-12 rounded-[50px] py-4 px-3 cursor-pointer 
                    transition-transform duration-300 hover:scale-105"
        >
          <div />
          <div className="flex gap-2 items-center">
            <FiPhoneCall className="text-white" />
            <p className="text-lg text-white">Let's talk</p>
          </div>
          <div className="p-2 rounded-full bg-white">
            <FaArrowRight className="text-[#219DD9]" />
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 left-4">
        <img src="/feature/arrow1.png" alt="shapes" className="w-[300px]" />
      </div>
      <div className="absolute bottom-0 right-2">
        <img
          src="/feature/arrow.png"
          alt="shapes"
          className="w-[200px] md:w-[300px] rotate-[250deg]"
        />
      </div>
    </div>
  );
};

export default CallToAction;
