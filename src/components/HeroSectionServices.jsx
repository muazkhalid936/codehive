"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import useStore from "../store/useUserStore";
const HeroSectionServices = ({
  bgImage,
  title,
  description,
  rightImage,
  transparent = false,
  topArrow = false,
  buttonText = "getStarted",
  showButton = true,
}) => {
  const t = useTranslations("translation");
  const titleWords = t(title).split(" ");
  const button1 = t(buttonText);
  // const titleWords = title.split(' ');
  const flag = button1 === "Book a Session" ? true : false;
  const flag2 = button1 === "احجز جلسة" ? true : false;
  const { language } = useStore();
  const colors =
    bgImage && rightImage
      ? "text-black"
      : rightImage
      ? "text-black"
      : "text-white";
  const highlightColor = "text-[#219DD9]";

  const renderTitle = () => (
    <h2 className="font-black leading-tight text-center  sm:text-start hero_section_heading ">
      {titleWords.length > 1 ? (
        <>
          <span className={colors}>{titleWords.slice(0, -1).join(" ")} </span>
          <span className={highlightColor}>{titleWords.slice(-1)}</span>
        </>
      ) : (
        <span className={colors}>{title}</span>
      )}
    </h2>
  );

  return (
    <div
      className="overflow-hidden "
      dir={language === "en" ? "ltr" : "rtl"}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {topArrow && (
        <img
          src="/HeroVector.png"
          alt="Decorative Top Arrow"
          className={`absolute flex top-20 ${
            language === "en" ? "-right-0" : "left-0 scale-x-[-1]"
          } -z-50  h-[200px] md:h-[300px] object-contain`}
          aria-label="Top Arrow"
        />
      )}

      <div className="container overflow-hidden mx-auto sm:flex-row flex-col  justify-center pb-5 sm:pb-0 sm:mb-0 sm:justify-end max-h-[580px]  flex pt-20 min-h-[400px] sm:min-h-[500px] sm:h-[70vh]">
        {/* First Section */}
        <div className="left-section sm:w-1/2 flex justify-center items-center sm:items-start gap-5 md:gap-10 flex-col">
          {" "}
          {renderTitle()}
          {description && (
            <p className={`main_hero_slogan text-center sm:text-start `}>
              {/* {t('codeHiveIs')}/ */}
              {t(description)}
            </p>
          )}
          {showButton && (
            <div className="flex justify-center sm:justify-start" dir="ltr">
              <button
                className={`flex ${
                  language === "en" ? "flex-row-reverse" : "flex-row"
                }  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group`}
              >
                <p
                  className={`text-white main_hero_slogan transform transition-transform duration-300 ${
                    language === "en"
                      ? "group-hover:-translate-x-8   sm:group-hover:-translate-x-10"
                      : "group-hover:translate-x-8   sm:group-hover:translate-x-10"
                  }   `}
                >
                  {button1}
                </p>
                <div
                  className={`bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300  ${
                    flag
                      ? "md:group-hover:translate-x-32 group-hover:translate-x-[105px]"
                      : flag2
                      ? "md:group-hover:-translate-x-[93px] group-hover:-translate-x-[70px]"
                      : language === "en"
                      ? "group-hover:translate-x-20 md:group-hover:translate-x-[100px]"
                      : "md:group-hover:-translate-x-[42px] group-hover:-translate-x-[33px]"
                  } overflow-hidden`}
                >
                  {language === "en" ? (
                    <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                  ) : (
                    <FaArrowLeft className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                  )}
                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className="right-section hidden sm:flex sm:w-1/2">
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right Image"
              className="w-full z-10 object-contain h-[100%] "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionServices;
