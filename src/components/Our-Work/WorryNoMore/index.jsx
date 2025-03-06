"use client";
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
  wordsCut,
  cut,
  blueWords = [],
}) => {
  const { language } = useStore();
  const t = useTranslations("translation");
  const titleParts = t(title).split(" ");
  const firstLine = titleParts.slice(0, wordsCut).join(" ");
  const remainingLines = titleParts.slice(wordsCut).join(" ");
  console.log(wordsCut);
  return (
    <div className={`container pb-[50px] rounded-lg    `}>
      <div
        className={`bg-cover  bg-center
         h-auto md:h-[400px]  xl:h-[450px]  w-full  relative rounded-[20px] overflow-hidden items-center md:items-center justify-between flex flex-col md:flex-row gap:4 sm:px-0 `}
        style={{
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col   text-black  ${
            language === "en" ? "xl:pl-20 xl:w-[60%]" : "xl:pr-20 md:w-[50%]"
          } ${
            cut ? "worryNoMoreWidth xl:!w-[55%]" : "md:w-[65%] lg:!w-[60%]"
          } pl-4 md:pl-10  pr-2  sm:justify-center border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3 px-6 py-5`}
          dir={language === "en" ? "ltr" : "rtl"}
        >
          <h2 className="gilray-font z-[2] leading-tight sub_heading">
            <span>
              {firstLine.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={`${
                    blueWords.some(
                      (blueWord) =>
                        blueWord.toLowerCase() === word.toLowerCase()
                    )
                      ? "text-[#219DD9]"
                      : "text-black"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
            <br />
            <span>
              {remainingLines.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={`${
                    blueWords.some(
                      (blueWord) =>
                        blueWord.toLowerCase() === word.toLowerCase()
                    )
                      ? "text-[#219DD9]"
                      : "text-black"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </h2>
          <p className="xl:mb-5 text-[#535D66] main_hero_slogan">
            {t(description)}
          </p>
          <ul className="list-disc !font-lato xl:gap-2 flex flex-col">
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
          <div
            className={` sm:z-10 text-white w-full lg:w-[65%] ${
              cut ? "sm:absolute md:right-[-25vw] lg:!w-[80%] lg:right-[-14vw] xl:right-[-5vw]" : " sm:absolute right-0 "
            }  bottom-0  overflow-hidden justify-end items-end flex  self-end rounded-br-[20px]`}
          >
            <img
              src={rightImage}
              className={`object-cover    ${
                cut ? "xl:w-[75%] worryNoMoreHeightCut md:h-[450px]" : " worryNoMoreHeight md:h-[400px] xl:!h-[450px]"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorryNoMore;
