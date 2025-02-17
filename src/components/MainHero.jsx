"use client";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline/next";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useStore from "../store/useUserStore";
const MainHero = () => {
  const { language } = useStore();
  const router = useRouter();
  const headingText = "BESPOKE SOLUTIONS TAILORED TO YOUR BUSINESS NEEDS";
  const headingText1 = "نقدم حلول مصممة خصيصا لتناسب متطلبات عملك";
  const words = headingText.split(" ");
  const words1 = headingText1.split(" ");
  return (
    <div className=" container flex-col-reverse h-[292px]    relative sm:pl-10 flex sm:flex-row bg-[#000B17] mx-auto  sm:mt-10">
      {/* Text Content */}
      <div
       dir={language === "English" ? "ltr" : "rtl"}
      className="flex sm:w-[50%] mt-[40vh] sm:mt-0   flex-col gap-5 text-white  xl:gap-8 ">
        <p className={`
          
          ${language==="English"?"":"hidden"}
          text-[30px] main-heading text-center sm:text-start sm:text-3xl md:text-[50px]    z-10 font-extrabold  leading-tight`}>
        {words.map((word, index) => (
            <span key={index} className={index === 1 ? "text-blueColor" : ""}>
              {word}{" "}
            </span>
          ))}
        </p>
        <p className={`
          
          ${language!="English"?"":"hidden"}
          text-[30px] main-heading text-center sm:text-start sm:text-3xl md:text-[50px]    z-10 font-extrabold  leading-tight`}>
        {words1.map((word, index) => (
            <span key={index} className={index === 1 ? "text-blueColor" : ""}>
              {word}{" "}
            </span>
          ))}
        </p>
        <p className=" main_hero_slogan z-40 text-center sm:text-start  ">
       {language==="English"?"   Your journey to digital transformation starts here. Specializing in innovative software development, we craft scalable, user-centric solutions that elevate brands, empower businesses, and exceed expectations in the digital age." :"رحلتك نحو التحول الرقمي تبدأ ھنا. نحن متخصصون في تطور البرمجات المبتكرة، ونصمم حلولا ً قابلة للتوسع ومتمحورة حول المستخدم، مما عزز العمات التجارة،  وتجاوز التوقعات في العصر الرقمي."}
        </p>
      </div>

      {/* Spline Component */}
      <div
        className="flex w-[200vw]  scale-75    flex-1 spline_model -top-20 -right-[16rem] absolute sm:-top-[100px] sm:scale-50   md:top-5 sm:h-[400px] xl:-top-14 md:scale-75 xl:scale-[0.8] 
       sm:w-[850px] sm:-right-[21rem]  md:-right-60 xl:-right-44  sm:justify-end text-white sm:items-end  "
      >
        <Suspense>
          <Spline className=" " scene="/Logo animation.spline" />
        </Suspense>
      </div>
    </div>
  );
};

export default MainHero;
