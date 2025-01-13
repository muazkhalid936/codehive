"use client";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = ({ heading }) => {
  return (
    <div className="relative h-[40vh] min-h-[400px] bg-[#000B17] overflow-hidden flex justify-center  flex-col py-20">
      {/* Heading */}
      <div className=" text-center">
        <p className="gilray-font sub_heading w-full md:w-1/2 mx-auto text-white">
          {heading}
        </p>
      </div>

      {/* Call to Action Button */}
      <div>
        <div className="justify-between flex flex-row-reverse group items-center w-[300px] m-auto bg-[#0C1C2C] mt-12 rounded-[50px] py-4 px-3 cursor-pointer transition-transform duration-300">
          <div />
          <div className="flex group-hover:-translate-x-10 gap-2 ease-in-out duration-300 items-center">
            <FiPhoneCall className="text-white" />
            <p className="text-lg text-white">Let's talk</p>
          </div>
          <div className="p-2 rounded-full group-hover:translate-x-[600%] ease-in-out duration-300 bg-white">
            <FaArrowRight className="text-[#219DD9]" />
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute  bottom_right_vector top-0 left-4">
        <img
          src="/feature/arrow1.png"
          alt="shapes"
          className="w-[200px]md:w-[300px]"
        />
      </div>
      <div className="absolute bottom_right_vector bottom-0 right-2">
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
