"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
const HeroSectionOurWork = ({
  bgImage,
  title,
  atitle,
  right,
  bottom,
  description,
  adescription,
  rightImage,
  transparent = false,
  topArrow = false,
  buttonText = "Get Started",
  abuttonText = "Get Started",
  showButton = true,
}) => {
const t=useTranslations("translation")
  // console.log("asd",title)
  const titleWords = t(title).split(" ");
  const colors =
    bgImage && rightImage
      ? "text-white"
      : rightImage
      ? "text-black"
      : "text-white";
  const highlightColor = "text-[#219DD9]";
const {language}=useStore();
  const renderTitle = () => (
    <h2 className="main-heading  hero_section_heading leading-[0.5] ">
      {titleWords.length > 0 ? (
        <>
          <span className="text-white">
            {titleWords.slice(0, -1).join(" ")}{" "}
          </span>
          <span className="text-white">{titleWords.slice(-1)}</span>
        </>
      ) : (
        <span className={colors}>{atitle}</span>
      )}
    </h2>
  );

  return (
    
    <div
      className="overflow-hidden "
      dir={language === 'en' ? 'ltr' : 'rtl'}
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
          className="absolute hidden sm:flex top-20 -right-0  h-[200px] md:h-[300px] object-contain"
          aria-label="Top Arrow"
        />
      )}

      <div className="container justify-center sm:justify-between overflow-hidden mx-auto gap-3 sm:gap-0 flex-col sm:flex-row flex max-h-[580px] pt-28 sm:pt-32  sm:min-h-[500px] h-[550px]">
        {/* First Section */}
        <div className="left-section sm:w-1/2 flex justify-center items-center sm:items-start sm:mt-[-70px]  gap-3 sm:gap-5  flex-col">
          {" "}
          {renderTitle()}
          {description && (
            <p className={`main_hero_slogan text-center sm:text-start text-white`}>{t(description)}</p>
          )}
          {showButton && (
            <div className="flex justify-center sm:justify-start">
              <button className="flex flex-row-reverse  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group">
                <p className="text-white main_hero_slogan transform transition-transform duration-300 group-hover:-translate-x-8   sm:group-hover:-translate-x-10   ">
                  {t(buttonText)}
                </p>
                <div className="bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300 sm:group-hover:translate-x-44 group-hover:translate-x-[180px] lg:group-hover:translate-x-56 overflow-hidden">
                  <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className={`right-section w-full h-[32vh] sm:h-full  flex justify-center sm:justify-end ${right=== true?"":"pb-[0px] sm:pb-[20px]  sm:pr-[70px]"} sm:items-end sm:w-1/2`}>
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right Image"
              className={` object-contain h-[100%]  ${bottom=== true?"pb-[20px] sm:pb-0":
                ""} sm:h-[100%] `}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOurWork;
