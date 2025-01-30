"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
const MainHero = () => {
  const router = useRouter();
  return (
    <div className=" container  overflow-hidden relative pl-10 flex flex-row bg-[#000B17] mx-auto  mt-10">
      {/* Text Content */}
      <div className="flex w-[50%]   flex-col gap-5 text-white  xl:gap-8 ">
        <p className="text-[20px] main-heading sm:text-3xl md:text-[50px]    z-10 font-extrabold  leading-tight">
          BESPOKE{" "}
          <span className="  main-heading  text-blueColor">SOLUTIONS</span>{" "}
          <br />
          TAILORED TO YOUR <br /> BUSINESS NEEDS
        </p>
        <p className=" main_hero_slogan  ">
          Your journey to digital transformation starts here. Specializing in
          innovative software development, we craft scalable, user-centric
          solutions that elevate brands, empower businesses, and exceed
          expectations in the digital age.
        </p>
        <div className=" flex justify-start items-start flex-1 gap-2">
          <button
            className="xl:text-xl font-lato flex gap-2 items-center "
            onClick={() => router.push(link)}
          >
            Contact Us
            <div className=" bg-white  text-black rounded-full ">
              <FiArrowUpRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Spline Component */}
      <div
        className="flex flex-1 spline_model absolute -top-[100px]  md:top-5 h-[400px] xl:-top-14 md:scale-75 xl:scale-[0.8] 
       w-[850px] -right-[21rem]  md:-right-60 xl:-right-44  justify-end text-white items-end"
      >
        <Spline className="" scene="/Logo animation.spline" />
      </div>
    </div>
  );
};

export default MainHero;
