"use client";
import React, { useState, useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline/next";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useStore from "../store/useUserStore";
import { useTranslations } from "next-intl";

const MainHero = () => {
  const { language } = useStore();
  const t = useTranslations("translation");

  const headingText = t("bespokeSol");
  const headingText1 = "نقدم حلول مصممة خصيصا لتناسب متطلبات عملك";
  const words = headingText.split(" ");

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="container flex-col-reverse sm:h-[292px] gap-5 sm:gap-0 relative sm:pl-10 flex sm:flex-row bg-[#000B17] pt-[4\20px] mx-auto sm:mt-20"
    >
      {/* Text Content */}
      <div className="flex sm:w-[50%] gap-5 sm:gap-0 sm:mt-0 justify-center flex-col  text-white xl:gap-8">
        <p
          className="
          text-[30px] main-heading text-center sm:text-start sm:text-4xl lg:text-[40px] xl:text-[50px] z-10 font-extrabold leading-tight"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={index === 1 ? "text-blueColor" : "text-white"}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <p className="main_hero_slogan text-white z-40 text-center sm:text-start">
          {t("yourJourne")}
        </p>

      </div>
        <div className="flex flex-1">
          <video autoPlay loop muted playsInline className="w-full h-full">
            <source src="/Logo 3.mov" type="video/mp4" />
          </video>
        </div>
    </div>
  );
};

export default MainHero;
