import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const WorryNoMore = ({
  rightImage,
  title,
  description,
  backgroundColor,
  points,
  blueWords = [],
}) => {

  const titleParts = title.split(" ");
  return (
    <div className={`container pb-[50px] rounded-lg    overflow-hidden`}>
      <div
        className={`bg-cover bg-center"
         h-[600px] md:h-[340px] xl:h-[400px] w-full relative rounded-[20px] items-center md:items-center justify-between flex flex-col md:flex-row gap:4 sm:px-0 `}
        style={{
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col text-black w-full md:w-1/2 pl-4 md:pl-12 pr-2 h-full sm:justify-center border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3 px-6 py-5`}
        >
          <h2 className="gilray-font leading-tight text-[30px] xl:text-[45px]">
          {titleParts.map((word, index) => (
              <span
                key={index}
                className={`${
                  // Apply blue color to specific words passed in blueWords
                  blueWords.some(
                    (blueWord) => blueWord.toLowerCase() === word.toLowerCase()
                  )
                    ? "text-[#219DD9]"
                    : "text-black"
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="mb-5 text-slate-600 main_hero_slogan">{description}</p>
          <ul className="list-disc xl:gap-2 flex flex-col">
            {points.map((point, index) => (
              <li key={index} className="flex main_hero_slogan gap-2 list-disc items-center">
                <GoDotFill className="text-black" />
                <span className="text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {rightImage && (
          <div
            className=" text-white w-full md:w-1/2 absolute sm:relative bottom-0  overflow-hidden justify-end items-end flex  self-end rounded-[20px]"
           
          >
<img src={rightImage} className="object-contain  h-auto md:h-[340px] xl:h-[400px]" />

          </div>
        )}
      </div>
    </div>
  );
};

export default WorryNoMore;
