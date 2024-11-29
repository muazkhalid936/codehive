"use client";
import React from "react";
import Spline from "@splinetool/react-spline/next";

const MainHero = () => {
  return (
    <div className="container h-[70vh] flex-col md:flex-row bg-[#000B17] mx-auto flex  pt-20">
      <div className="flex w-[40%]    flex-col text-white justify-around">
        <p className="text-5xl font-extrabold">
          BESPOKE <span className="text-4xl text-blue-500">SOLUTIONS</span>{" "}
          <br />
          TAILORED TO YOUR BUSINESS NEEDS
        </p>
        <p>
          We are dynamic creative agency, specializing in the desing and
          development of impactful technical solutions, iconic brands, and
          immersive experiences.{" "}
        </p>
        <p>Get Started</p>
      </div>

      <div className=" relative ">
        <Spline className=" absolute right-0" scene="/code.splinecode" />
      </div>
    </div>
  );
};

export default MainHero;
