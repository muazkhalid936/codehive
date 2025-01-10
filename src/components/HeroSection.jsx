import React from "react";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = ({
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
    <h2 className="font-black hero_section_heading leading-tight">
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
          src="/feature/gray.png"
          alt="Decorative Top Arrow"
          className="absolute top-20 -right-0  h-[200px]  md:h-[300px] object-contain"
          aria-label="Top Arrow"
        />
      )}

      <div className="container overflow-hidden mx-auto sm:flex-row flex-col justify-end max-h-[650px]  flex pt-20 min-h-[400px] sm:min-h-[500px] sm:h-[70vh]">
        {/* First Section */}
        <div className="left-section sm:w-1/2 flex justify-center items-start gap-5 md:gap-10 flex-col">
          {" "}
          {renderTitle()}
          {description && (
            <p className={`main_hero_slogan my-5 sm:my-0 ${colors}`}>
              {description}
            </p>
          )}
          {showButton && (
            // <div className="flex justify-center sm:justify-start">
            //   <button className="flex items-center gap-4 bg-[#219DD9] px-4 py-1 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition">
            //     <p className="text-white main_hero_slogan">{buttonText}</p>
            //     <div className="bg-white rounded-full p-1 sm:p-2">
            //       <FaArrowRight className="text-[#219DD9] text-[10px]" />
            //     </div>
            //   </button>
            // </div>
            <div className="flex justify-center sm:justify-start">
              <button className="flex flex-row-reverse  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group">
                <p className="text-white main_hero_slogan transform transition-transform duration-300 group-hover:-translate-x-8   sm:group-hover:-translate-x-10   ">
                  {buttonText}
                </p>
                <div className="bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300 group-hover:translate-x-20 md:group-hover:translate-x-24 overflow-hidden">
                  <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                </div>
              </button>
            </div>
          )}
        </div>
        {/* Second Section */}
        <div className="right-section mx-auto flex items-end  sm:w-1/2">
          {rightImage && (
            <img
              src={rightImage}
              alt="Hero Right Image"
              className="sm:w-full w-1/2 mx-auto object-contain min-h-[200px]  xl:h-[60vh] xl:min-h-[400px] sm:max-h-[400px] xl:max-h-[500px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
