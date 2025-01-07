import React from "react";
import { FaArrowRight } from "react-icons/fa";
const HeroSectionServices = ({
  bgImage,
  title,
  description,
  rightImage,
  transparent = false,
  topArrow = false,
  buttonText = "Get Started",
  showButton = true,
}) => {
  const titleWords = title.split(" ");
  const colors =
    bgImage && rightImage
      ? "text-black"
      : rightImage
        ? "text-black"
        : "text-white";
  const highlightColor = "text-[#219DD9]";

  const renderTitle = () => (
    <h2 className="font-black leading-tight text-[50px]">
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
          className="absolute top-20 -right-0 -z-50  h-[200px] md:h-[300px] object-contain"
          aria-label="Top Arrow"
        />
      )}

      <div className="container overflow-hidden mx-auto flex  md:pt-28 2xl:pt-32 h-[70vh]">
        {/* First Section */}
        <div className="left-section w-1/2 flex justify-center items-start gap-5 xl:gap-10 flex-col">
          {" "}
          {renderTitle()}
          {description && <p className={`main_hero_slogan `}>{description}</p>}
          {showButton && (
            <div className="flex justify-center sm:justify-start">
              <button className="flex items-center gap-4 bg-[#219DD9] p-2 2xl:py-3 2xl:px=4 rounded-full shadow-lg hover:bg-[#197BB6] transition">
                <p className="text-white text-sm sm:text-lg">{buttonText}</p>
                <div className="bg-white rounded-full p-1 sm:p-2">
                  <FaArrowRight className="text-[#219DD9]" />
                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className="right-section w-1/2">
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
