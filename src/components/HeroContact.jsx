"use client";
import React from "react";
import useStore from "../store/useUserStore";
import { useTranslations } from "next-intl";
const HeroContact = () => {
  const t = useTranslations("translation");
  const { language } = useStore();
  const title = t("getInTouch").split(" ");
  const formattedTitle = (
    <>
      <span className="text-blueColor">{title.slice(0, 3).join(" ")}</span>
      <br />
      {title.slice(3).join(" ")}
    </>
  );
  return (
    <div className="sm:h-[70vh] overflow-hidden sm:min-h-[500px] sm:max-h-[580px] h-[350px] bg-gradient-to-t from-[#0d1724] via-[#0d1724] to-[#000b17] relative">
      {/* Background image container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/contact.png"
          className={`h-[62vh] mt-[5rem] min-h-[500px] max-h-[650px] ${language==="ar"?"scale-x-[-1]":""}  object-cover sm:object-contain`}
          alt="Contact"
        />
      </div>

      {/* Content overlay */}
      <div className={`relative z-10 flex container justify-center mt-[100px] sm:mt-[200px] ${language==="en"?"flex-row":"flex-row-reverse"} gap-2`}>
        {/* Left Column */}
        <div
          className="flex-1 lg:w-1/2 flex-col flex justify-center"
          dir={language === "en" ? "ltr" : "rtl"}
        >
          <div className="flex flex-col gap-5">
            <h2 className=" header text-center sm:text-start hero_section_heading leading-tight main-heading text-white">
              {formattedTitle}
            </h2>
            <p className="main_hero_slogan text-center sm:text-start text-[#ebeced]">
              {t("haveQuesti")}{" "}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="sm:flex  hidden w-1/2 "></div>
      </div>
    </div>
  );
};

export default HeroContact;
