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
  // Split the title into words for easier manipulation
  const titleParts = title.split(" ");
  const color = rightImage ? "text-black" : "text-white";

  return (
    <div
      className={`container  rounded-lg my-[55px] relative overflow-hidden`}
    >
      <div
        className={`bg-cover bg-center"
         h-[65vh] md:h-[50vh] 2xl:h-[60vh] w-full rounded-[20px] items-center md:items-center justify-between flex flex-col md:flex-row gap:4 px-6 sm:px-0`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col ${color} w-full sm:w-1/2 pl-4 md:pl-20 pr-2  ${!rightImage && "bg-gradient-to-r from-black to-transparent"
            } h-full justify-center
        border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3`}
        >
          <h2 className="text-3xl md:text-[45px] leading-tight gilray-font">
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
          <p className="main_hero_slogan  leading-snug mt-2">{description}</p>
          <button className="flex items-center justify-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg hover:bg-[#197BB6] transition mt-6 sm:mt-10">
            <p className="text-white text-sm sm:text-lg">{buttonText}</p>
            <div className="bg-white rounded-full p-1 sm:p-2">
              <FaArrowRight className="text-[#219DD9]" />
            </div>
          </button>
        </div>

        {rightImage && (
          <div
            className="flex flex-col text-white w-full sm:w-1/2 h-full"
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
        <img src="/feature/Vector.png" alt="bgImage" className=" absolute z-20" />
      )}
    </div>
  );
};

export default Banner;
