"use client";
import React, { useState, useEffect, Suspense } from "react";
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
  const headingText1 = "نقدم حلول مصممة خصيصا لتناسب متطلبات عملك";
  const words = headingText.split(" ");
  const words1 = headingText1.split(" ");

  const [showModel, setShowModel] = useState(true);
  const heroSectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.top < -200 * window.innerHeight) {
            setShowModel(false); // Hide model when scrolled beyond 200vh
          } else {
            setShowModel(true); // Show model when within 200vh
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroSectionRef}
      dir={language === "ar" ? "rtl" : "ltr"}

      className="container flex-col-reverse sm:h-[292px] relative sm:pl-10 flex sm:flex-row bg-[#000B17] mx-auto sm:mt-20"
    >
      {/* Text Content */}
      <div
        className="flex sm:w-[50%] mt-[300px] sm:mt-0 flex-col gap-5 text-white xl:gap-8"
      >
        <p
          className="
          text-[30px] main-heading text-center sm:text-start sm:text-3xl md:text-[50px] z-10 font-extrabold leading-tight"
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

        {/* Spline Model (Hidden when scrolled beyond 200vh) */}
        {/* {showModel && ( */}
          <div
            className={`flex w-[200vw] scale-75 flex-1 spline_model -top-20 -right-[16rem] absolute sm:-top-[50px] sm:h-[400px] sm:scale-[1] 
            sm:-right-[21rem] xl:w-[70%] ${language==="en"?"md:right-[-13vw]":"lg:right-[300px] md:right-[150px] sm:w-[100vw] lg:w-[70vw] md:!scale-75 lg:!scale-[0.8]  xl:right-[450px]"} sm:justify-end text-white sm:items-end`}
          >
            <Suspense>
              <Spline className=" " scene="/Logo animation.spline" />
            </Suspense>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default MainHero;
