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
    <div className={`container  rounded-lg my-[55px] relative overflow-hidden`}>
      <div
        className={`bg-cover bg-center"
         h-[65vh] md:h-[55vh] 2xl:h-[55vh] min-h-[300px] max-h-[450px] w-full rounded-[20px]  justify-between flex flex-col md:flex-row gap:4  sm:px-0`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundColor: backgroundColor || undefined,
          // background: "linear-gradient(90deg, #000B17 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div
          className={`flex flex-col ${color} w-full ${
            backgroundColor && `bg-[${backgroundColor}]`
          } md:w-1/2 pl-4 md:pl-20 pr-2  ${
            !rightImage && "bg-gradient-to-r from-black to-transparent"
          } h-full justify-center
        border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3`}
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
          <p className="main_hero_slogan my-3 2xl:my-4 leading-snug">
            {description}
          </p>
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
        </div>

        {rightImage && (
          <div
            className="flex flex-col text-white w-full md:w-1/2 h-full"
            style={{
              backgroundImage: `url(${rightImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          />
        )}
      </div>
      {showBottomArrow && (
        <img
          src="/feature/Vector.png"
          alt="bgImage"
          className=" absolute z-20"
        />
      )}
    </div>
  );
};

export default Banner;
