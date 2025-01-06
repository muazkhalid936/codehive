"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const MainHero = () => {
  return (
    <div className=" container  overflow-hidden relative pl-10 flex flex-row bg-[#000B17] mx-auto pt-10 xl:mt-20">
      {/* Text Content */}
      <div className="flex w-[50%]   flex-col gap-5 text-white  xl:gap-10 ">
        <p className="text-[20px] main-heading sm:text-3xl md:text-[50px]    z-10 font-extrabold !leading-snug">
          BESPOKE{" "}
          <span className="  main-heading  text-blueColor">
            SOLUTIONS
          </span>{" "}
          <br />
          TAILORED TO YOUR <br /> BUSINESS NEEDS
        </p>
        <p className=" main_hero_slogan  ">
          We are a dynamic creative agency, specializing in the design and
          development of impactful technical solutions, iconic brands, and
          immersive experiences.
        </p>
        <Link
          href="/"
          className="flex items-center md:text-base xl:text-xl gap-2"
        >
          Contact Us
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
        </Link>
      </div>

      {/* Spline Component */}
      <div className="flex flex-1 spline_model absolute -top-[100px]  md:top-5 h-[400px] xl:top-0 md:scale-75 xl:scale-95  w-[850px] -right-[21rem]  md:-right-60 xl:-right-36  justify-end text-white items-end">
        <Spline className="" scene="/Logo animation.spline" />
      </div>
    </div>
  );
};

export default MainHero;
