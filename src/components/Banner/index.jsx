import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Banner = ({
  bgImage,
  rightImage,
  title,
  description,
  backgroundColor,
  showBottomArrow,
  buttonText = "Get Started", // Default button text
  blueWords = [], // Words to be styled in blue
}) => {
  // console.log(backgroundColor);
  // Split the title into words for easier manipulation
  const titleParts = title.split(" ");
  const color = rightImage ? "text-black" : "text-white";

  return (
    <div className={`container  rounded-lg my-[55px]  overflow-hidden`}>
      <div
        className={`bg-cover relative bg-center  ${
          rightImage ? "h-[400px]" : "h-[100px]"
        } sm:h-[65vh] md:h-[55vh] 2xl:h-[55vh] min-h-[300px] max-h-[450px] w-full rounded-[20px]  justify-between flex flex-row gap:4  sm:px-0`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: "top",
          backgroundColor: backgroundColor || undefined,
          // background: "linear-gradient(90deg, #000B17 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div
          className={`flex flex-col ${color} w-full ${
            backgroundColor && `bg-[${backgroundColor}]`
          } ${rightImage ? "md:w-1/2" : "md:w-[55%]"} pl-4 md:pl-[45px] pr-2  ${
            !rightImage &&
            "bg-gradient-to-r from-black  bg-opacity-50  to-transparent"
          } h-full p-5  sm:mt-0 sm:justify-center
        border-tl-[20px] border-bl-[20px] rounded-[20px] gap-10`}
        >
          <h2 className="banner_heading leading-none gilray-font">
            {titleParts.map((word, index) => (
              <span
                key={index}
                className={`${
                  // Apply blue color to specific words passed in blueWords
                  blueWords.some(
                    (blueWord) => blueWord.toLowerCase() === word.toLowerCase()
                  )
                    ? "text-[#219DD9]"
                    : color
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          {/* <p className="main_hero_slogan hidden sm:flex my-3 2xl:my-4 leading-snug">
            {description}
          </p> */}
          <div className="flex justify-start items-start">
            <button className="flex flex-row-reverse  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group">
              <p className="text-white main_hero_slogan transform transition-transform duration-300 group-hover:-translate-x-8   sm:group-hover:-translate-x-10   ">
                {buttonText}
              </p>
              <div className="bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300 group-hover:translate-x-20 md:group-hover:translate-x-24 overflow-hidden">
                <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
              </div>
            </button>
          </div>
        </div>
        {rightImage && (
          <div className=" text-white w-[300px] md:w-1/2 right-0 absolute sm:relative bottom-0  overflow-hidden justify-end items-end flex  self-end rounded-[20px]">
            <img
              src={rightImage}
              className="object-contain  h-auto md:h-[340px] xl:h-[400px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
