"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
const MainHero = () => {
  return (
    <div className="h-[90vh] container overflow-hidden relative pl-10 flex flex-col md:flex-row bg-[#000B17] mx-auto pt-20">
      {/* Text Content */}
      <div className="flex w-full md:w-[50%]  flex-col gap-5 text-white z-10 md:pr-10">
        <p className="text-3xl md:text-4xl z-10 font-extrabold leading-snug">
          BESPOKE{" "}
          <span className="text-3xlmd:text-4xl text-blue-500">SOLUTIONS</span>{" "}
          <br />
          TAILORED TO YOUR BUSINESS NEEDS
        </p>
        <p className="mt-4 text-sm">
          We are a dynamic creative agency, specializing in the design and
          development of impactful technical solutions, iconic brands, and
          immersive experiences.
        </p>
        <Link href="/" className="flex items-center gap-2">
          Contact Us
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
        </Link>
      </div>

      {/* Spline Component */}
      <div className="flex flex-1 scale-50 md:scale-90 md:absolute  md:top-10 h-[400px]  md:w-[800px] md:-right-60 z-20 justify-end text-white items-end">
        <Spline className="" scene="/Logo animation.spline" />
      </div>
    </div>
  );
};

export default MainHero;
