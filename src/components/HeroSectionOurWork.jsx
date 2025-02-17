"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import useStore from "../store/useUserStore";
const HeroSectionOurWork = ({
  bgImage,
  title,
  atitle,
  description,
  adescription,
  rightImage,
  transparent = false,
  topArrow = false,
  buttonText = "Get Started",
  abuttonText = "Get Started",
  showButton = true,
}) => {

  const { language } = useStore();
  
  const titleWords = title.split(" ");
  const colors =
    bgImage && rightImage
      ? "text-white"
      : rightImage
      ? "text-black"
      : "text-white";
  const highlightColor = "text-[#219DD9]";

  const renderTitle = () => (
    <h2 className="main-heading hero_section_heading ">
      {titleWords.length > 1 ? (
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
          className="absolute top-20 -right-0  h-[200px] md:h-[300px] object-contain"
          aria-label="Top Arrow"
        />
      )}

      <div className="container justify-between overflow-hidden mx-auto flex-col sm:flex-row flex max-h-[650px] pt-32 min-h-[600px] sm:min-h-[500px] h-[70vh]">
        {/* First Section */}
        <div className="left-section sm:w-1/2 flex justify-center items-center sm:items-start gap-5 md:gap-10 flex-col">
          {" "}
          {renderTitle()}
          {description && (
            <p className={`main_hero_slogan text-center sm:text-start text-white`}>{description}</p>
          )}
          {showButton && (
            <div className="flex justify-center sm:justify-start">
              <button className="flex flex-row-reverse  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group">
                <p className="text-white main_hero_slogan transform transition-transform duration-300 group-hover:-translate-x-8   sm:group-hover:-translate-x-10   ">
                  {buttonText}
                </p>
                <div className="bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300 sm:group-hover:translate-x-44 group-hover:translate-x-36 lg:group-hover:translate-x-56 overflow-hidden">
                  <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className="right-section flex justify-end items-end sm:w-1/2">
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right Image"
              className="w-full object-contain h-[300px] sm:h-[100%] "
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOurWork;
