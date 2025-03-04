"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
import { FaArrowLeft } from "react-icons/fa6";
const HeroSection = ({
  bgImage,
  title,
  description,
  rightImage,
  blueWords = [],
  transparent = false,
  topArrow = false,
  buttonText = "getStarted",
  showButton = true,
}) => {
  const t = useTranslations("translation");
  const titleWords = t(title).split(" ");
  const colors =
    bgImage && rightImage
      ? "text-black"
      : rightImage
      ? "text-black"
      : "text-white";
  const highlightColor = "text-[#219DD9]";
  const { language } = useStore();
  buttonText = t(buttonText);
  const renderTitle = () => (
    <h2 className="font-black hero_section_heading  sm:w-full text-center sm:text-start  leading-tight">
      {titleWords.length > 1 ? (
        <>
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`${
                // Apply blue color to specific words passed in blueWords
                blueWords.some(
                  (blueWord) => blueWord.toLowerCase() === word.toLowerCase()
                )
                  ? "text-[#219DD9]"
                  : "text-white"
              }`}
            >
              {word} {index === 1 && <br />}{" "}
              {/* Add a line break after the second word */}
            </span>
          ))}
        </>
      ) : (
        <span className={colors}>{t(title)}</span>
      )}
    </h2>
  );

  return (
    <div
      dir={language === "en" ? "ltr" : "rtl"}
      className="overflow-hidden bg-[#042A3E] "
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {topArrow && (
        <img
          src="/feature/gray.png"
          alt="Decorative Top Arrow"
          className={`absolute hidden sm:flex top-20 ${language==="en"?"-right-0":"left-0 scale-x-[-1]"}  h-[200px]  md:h-[300px] object-contain`}
          aria-label="Top Arrow"
        />
      )}

      <div className="container overflow-hidden mx-auto sm:flex-row flex-col justify-center sm:justify-end max-h-[580px]  flex pt-10 min-h-[400px] sm:min-h-[500px] sm:h-[70vh]">
        {/* First Section */}
        <div className="left-section sm:w-1/2 flex  justify-center items-center sm:items-start gap-5  flex-col">
          {" "}
          {renderTitle()}
          {description && (
            <p
              className={`main_hero_slogan text-center sm:text-start sm:my-0 ${colors}`}
            >
              {t(description)}
            </p>
          )}
          {showButton && (
            <div className="flex justify-center sm:justify-start" dir="ltr">
              <button 
           className={`flex ${language==="en"?"flex-row-reverse":"flex-row"}  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group`}
              
           >
             <p className={`text-white main_hero_slogan transform transition-transform duration-300 ${
               language==="en"?"group-hover:-translate-x-8   sm:group-hover:-translate-x-10":"group-hover:translate-x-8   sm:group-hover:translate-x-10"
             }   `}>
                  {buttonText}
                </p>
                <div
                  className={`bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300  ${
                    language === "en"
                      ? "md:group-hover:translate-x-28 group-hover:translate-x-20"
                      : "md:group-hover:-translate-x-12 group-hover:-translate-x-[35px]"
                  } overflow-hidden`}
                >
  {
                    language==="en"?

                    <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                    :<FaArrowLeft className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                  }                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className="right-section hidden mx-auto sm:flex items-end  sm:w-1/2">
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right Image"
              className="sm:w-full w-1/2 mx-auto object-contain sm:min-h-[200px] mt-5 sm:mt-0  xl:h-[60vh] xl:min-h-[400px] sm:max-h-[400px] xl:max-h-[500px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
