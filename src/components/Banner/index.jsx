"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import useStore from "../../store/useUserStore";
import { useParams } from "next/navigation";

const Banner = ({
  bgImage,
  rightImage,
  title,
  description,
  lessSpace,
  backgroundColor,
  showDecsription,
  top,
  showBottomArrow,
  buttonTitle, // Default button text
  blueWords = [], // Words to be styled in blue
}) => {
  const { language } = useStore();
  const params = useParams();
  console.log(params.slug);
  const t = useTranslations("translation");
  // console.log(backgroundColor);
  // Split the title into words for easier manipulation
  const titleParts = t(title).split(" ");
  const color = rightImage ? "text-black" : "text-white";

  return (
    <div
      className={`container  rounded-lg ${
        top ? "mb-[40px] sm:mb-[55px]" : " my-[40px] sm:my-[55px]"
      }  overflow-hidden`}
    >
      <div
        className={`bg-cover relative bg-center  ${
          params.slug === "car-wash"
            ? "h-[200px]"
            : rightImage
            ? "h-[380px]"
            : "h-[200px]"
        } sm:h-[400px] sm:min-h-[380px] sm:max-h-[450px] w-full  rounded-[20px]  justify-between flex flex-col sm:flex-row   sm:px-0`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: "top",
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          dir={language === "en" ? "ltr" : "rtl"}
          className={`flex  justify-between flex-col ${color} w-full ${
            backgroundColor && `bg-[${backgroundColor}]`
          } ${
            rightImage ? "md:w-1/2" : "md:w-[100%]"
          } pl-4 md:pl-[45px] pr-2  ${
            !rightImage &&
            ` !h-full ${
              language === "en"
                ? "sm:bg-gradient-to-r"
                : "sm:bg-gradient-to-l md:pr-[45px]  "
            } bg-black bg-opacity-50 sm:from-black  z-[4]  sm:bg-opacity-50   sm:to-transparent`
          } sm:h-full p-5  sm:mt-0 sm:justify-center
        border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3 ${
          showDecsription ? "sm:gap-5" : "sm:gap-10"
        } `}
        >
          <div
            className={`${
              rightImage ? "md:w-full" : "md:w-[60%]"
            } flex flex-col h-full justify-center gap-5 `}
          >
            {" "}
            <h2
              className={`banner_heading mx-auto  sm:!leading-[3.5rem] sm:mx-0 ${
                lessSpace === true ? " w-[90%] md:w-[70%]" : "w-[90%] !leading-[2rem] sm:w-auto"
              } leading-none text-center sm:text-start gilray-font`}
            >
              {titleParts.map((word, index) => (
                <span
                  key={index}
                  className={`${
                    // Apply blue color to specific words passed in blueWords
                    blueWords.some(
                      (blueWord) =>
                        blueWord.toLowerCase() === word.toLowerCase()
                    )
                      ? "text-[#219DD9]"
                      : color
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </h2>
            {showDecsription && (
              <p className="main_hero_slogan hidden sm:flex  leading-snug">
                {showDecsription && t(description)}
              </p>
            )}
            <div className="flex z-[2] justify-center sm:justify-start items-start">
              <button
                dir="ltr"
                className={`flex ${
                  language === "en" ? "flex-row-reverse" : "flex-row"
                }  ease-in-out duration-300 items-center gap-4 bg-[#219DD9] px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-[#197BB6] transition group`}
              >
                <p
                  className={`text-white main_hero_slogan transform transition-transform duration-300 ${
                    language === "en"
                      ? "group-hover:-translate-x-8   sm:group-hover:-translate-x-10"
                      : "group-hover:translate-x-8   sm:group-hover:translate-x-10"
                  }   `}
                >
                  {" "}
                  {t(buttonTitle)}
                </p>
                <div
                  className={`bg-white rounded-full p-1 sm:p-2 transform transition-transform duration-300 
                  
                  ${
                    t(buttonTitle) === "احصل على عرض"
                    ? " group-hover:-translate-x-24 md:group-hover:-translate-x-[122px]"
                    :
                    t(buttonTitle) === "Get a Quote"
                    ? " group-hover:translate-x-[84px] md:group-hover:translate-x-[103px]"
                      : language === "en"
                      ? " group-hover:translate-x-20 md:group-hover:translate-x-[98px]"
                      : " group-hover:-translate-x-20 md:group-hover:-translate-x-[97px]"
                  }
                   overflow-hidden`}
                >
                  {language === "en" ? (
                    <FaArrowRight className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                  ) : (
                    <FaArrowLeft className="text-[#219DD9] text-[8px] sm:text-[10px] " />
                  )}{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
        {rightImage && (
          <div className=" text-white justify-center sm:w-[300px] md:w-1/2 right-0 w-full sm:relative bottom-0  overflow-hidden sm:justify-end items-end flex  self-end rounded-[20px]">
            <img
              src={rightImage}
              className="object-cover z-[50]  h-[100%] sm:h-[340px] md:h-[400px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
