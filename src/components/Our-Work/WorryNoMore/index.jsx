"use client"
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import useStore from "../../../store/useUserStore";
import { useTranslations } from "next-intl";
const WorryNoMore = ({
  rightImage,
  title,
  description,
  backgroundColor,
  points,
  cut,
  blueWords = [],
}) => {
  const { language } = useStore();
  const t = useTranslations("translation");
  const titleParts = t(title).split(" ");
  console.log("WorryNoMore -> blueWords", blueWords,"s",titleParts);
  return (
    <div className={`container pb-[50px] rounded-lg    `}>
      <div
        className={`bg-cover  bg-center
         h-[450px]  md:h-[260px] xl:h-[370px] w-full relative rounded-[20px] overflow-hidden items-center md:items-center justify-between flex flex-col md:flex-row gap:4 sm:px-0 `}
        style={{
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col  text-black w-full ${language==="en"?"md:w-[60%]":"md:w-[50%]"} ${cut?"":"md:!w-[70%]"} pl-4 xl:pl-12 pr-2  sm:justify-center border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3 px-6 py-5`}
      dir={language === 'en' ? 'ltr' : 'rtl'}
      >
          <h2 className="gilray-font z-[2] leading-tight sub_heading">
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
          <p className="xl:mb-5 text-[#535D66] main_hero_slogan">{t(description)}</p>
          <ul className="list-disc xl:gap-2 flex flex-col">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex main_hero_slogan gap-2 list-disc items-center"
              >
                <GoDotFill className="text-black" />
                <span className="text-[#535D66]">{t(point)}</span>
              </li>
            ))}
          </ul>
        </div>

        {rightImage && (
          <div className={` z-[1] text-white w-full sm:w-[65%] ${cut?"absolute md:right-[-2vw]":" "}  bottom-0  overflow-hidden justify-end items-end flex  self-end rounded-br-[20px]`
          }>
            <img
              src={rightImage}
              className={`object-cover  h-[200px] ${cut?"md:w-[75%] xl:h-[370px]":"xl:h-[360px]"}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorryNoMore;
