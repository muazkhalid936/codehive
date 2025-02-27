"use client";
import React, { Suspense,useState,useEffect } from "react";
import Spline from "@splinetool/react-spline/next";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useStore from "../store/useUserStore";
import { useTranslations } from "next-intl";
const MainHero = () => {
  const { language } = useStore();
  const router = useRouter();
  const t = useTranslations("translation");
  const headingText = t("bespokeSol");
  const words = headingText.split(" ");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 1.5) {
        setIsVisible(false); // Hide after 150vh scroll
      } else {
        setIsVisible(true); // Show when user scrolls back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className=" container flex-col-reverse sm:h-[292px]    relative sm:pl-10 flex sm:flex-row bg-[#000B17] mx-auto  sm:mt-20">
      {/* Text Content */}
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className="flex sm:w-[50%] mt-[300px] sm:mt-0   flex-col gap-5 text-white  xl:gap-8 "
      >
        <p
          className={`
          
          
          text-[30px] main-heading text-center sm:text-start sm:text-3xl md:text-[50px]    z-10 font-extrabold  leading-tight`}
        >
          {words.map((word, index) => (
            <span key={index} className={index === 1 ? "text-blueColor" : ""}>
              {word}{" "}
            </span>
          ))}
        </p>

        <p className=" main_hero_slogan z-40 text-center sm:text-start  ">
          {t("yourJourne")}
        </p>
      </div>

      {/* Spline Component */}
      <div
        className="flex w-[200vw]  scale-75    flex-1 spline_model -top-20 -right-[16rem] absolute sm:-top-[50px]     sm:h-[400px]   sm:scale-[1] 
        sm:-right-[21rem] sm:w-[70%] md:right-[-13vw]  sm:justify-end text-white sm:items-end  "
      >
        {/* <div className='flex sm:w-1/2'> */}
       {
       isVisible&&
       <Suspense>
          <Spline className=" " scene="/Logo animation.spline" />
        </Suspense>}
      </div>
    </div>
  );
};

export default MainHero;
