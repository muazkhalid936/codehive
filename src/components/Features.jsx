"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
const Features = ({ data }) => {
  const t = useTranslations("translation");
  const title1 = t(data.title);
const {language}=useStore()
  const [itemHovered, setItemHovered] = useState("");
  const [clickedItem, setClickedItem] = useState("");

  const handleCardClick = (title) => {
    if (window.innerWidth < 768) {
      setClickedItem(clickedItem === title ? "" : title);
    }
  };

  const handleMouseEnter = (title) => {
    if (window.innerWidth >= 768) {
      setItemHovered(title);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setItemHovered("");
    }
  };

  return (
    <div className="bg-[#010b17] relative     z-50  overflow-hidden"
        dir={language === 'en' ? 'ltr' : 'rtl'}

    >
      <div className=" mx-8 py-[25px] sm:py-[45px]  text-white z-10 container">
        <h1 className="sub_heading  font-gilroy w-full text-center sm:text-start md:w-[60%]">
          {title1.split(" ").map((word, index, array) => (
            <span
              key={index}
              className={`${ index === array.length - 1 ? "text-[#219DD9]" : ""
              }`}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="w-full md:w-[55%] text-center sm:text-start sm:my-5 my-2 main_hero_slogan sm:leading-6">
          {t(data.description)}
        </p>

        <div className="flex flex-wrap  justify-center items-center">
          {data.cards.map((item, index) => {
            // Determine if the current index is even or odd
            const isFirst = index % 4 === 0;
            const isSec = index % 4 === 1;
            const isThird = index % 4 === 2;
            const isForth = index % 4 === 3;

            // Define classes based on even/odd
            const cardClasses = `
              sm:mx-5 mx-2 my-2 sm:my-5  h-[150px] sm:h-[280px] flex cursor-pointer flex-col justify-center items-center   
              rounded-[20px] gap-4 relative overflow-hidden 
              transition-transform duration-300 transform sm:hover:scale-[1.1]
             
            `;

            return (
              <div
                key={index}
                className={` w-1/2 md:w-1/3 ${
                  data.columns === 4 ? "xl:w-1/4" : "xl:w-1/3"
                }`}
              >
                <div
                  className={cardClasses}
                  style={{
                    border: "1px solid transparent",
                    borderRadius: " 29px",
                    //here
                    background: `linear-gradient(135deg, #052036, #02101f),linear-gradient(30deg, transparent, #2194cd ,transparent)`,
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "padding-box, border-box",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(item.title)}
                >
                  {/* Image Container */}
                  <div
                    className={`transition-opacity flex flex-col justify-center items-center duration-500 ${
                      itemHovered === item.title || clickedItem === item.title
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="sm:w-16 sm:h-16 h-9 mb-3 w-9 mx-auto"
                    />
                    <h2 className="text-center text-[13px] sm:text-[17px] mb-2">
                      {t(item.title)}
                    </h2>
                  </div>

                  {/* Description Container */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center 
                                 gap-2 bg-opacity-90 p-4 
                                transition-opacity duration-500 
                                ${
                                  itemHovered === item.title ||
                                  clickedItem === item.title
                                    ? "opacity-100"
                                    : "opacity-0"
                                }
                               `}
                    style={{
                      border: "1px solid transparent",
                      borderRadius: " 26px",
                      background: `linear-gradient(to ${
                        isFirst
                          ? "top left"
                          : isSec
                          ? "bottom right"
                          : isThird
                          ? "top right"
                          : isForth
                          ? "bottom left"
                          : ""
                      }, #021220, #0a3652)`,
                      backgroundClip: "padding-box, border-box",
                      backgroundOrigin: "padding-box, border-box",
                    }}
                  >
                    <h2 className="text-center font-bold text-[14px] sm:text-[17px]  ">
                      {t(item.title)}
                    </h2>
                    <p className="text-center text-[#fbfbfb] text-[8px] sm:text-[13px] ">
                      {t(item.description)}
                    </p>

                    {/* {item.getStarted && (
                      <Link
                        className="flex items-center justify-center gap-4 px-4 py-2 sm:px-6 sm:py-3 w-fit rounded-full shadow-lg border-white border-[1px] border-solid transition mt-6 sm:mt-10"
                        href={item.path}
                      >
                        <p className="text-white text-[15px]">Get Started</p>
                        <div className="bg-[#219DD9] rounded-full p-1 sm:p-2">
                          <FaArrowRight className="text-white" />
                        </div>
                      </Link>
                    )} */}

                    {/* Add Talk an Expert button */}
                    {/* {item.talkAnExpert && (
                      <Link
                        className="flex items-center mt-3  relative justify-center gap-4 mx-10 px-4 py-2 w-[90%] rounded-full shadow-lg border-[#3c5d73] border-[1px] border-solid transition "
                        href={item.path}
                      >
                        <p className="text-[15px] text-white">Talk an Expert</p>

                        <div className="p-1 rounded-full absolute right-2 bg-white">
                          <FaArrowRight className="text-[#219DD9]" />
                        </div>
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="my-32 text-center">
          <p className="text-4xl md:text-4xl 2xl:text-5xl font-bold font-gilroy w-full md:w-1/2 mx-auto">
            {data.subheading}
          </p>
        </div> */}

        {/* <div className="flex justify-center gap-4 items-center">
          <div className="bg-[#0c1c2c] py-3 rounded-full px-2 relative flex gap-2">
            <div className="flex gap-2  items-center justify-center">
              <FiPhoneCall />
              <p className="text-lg text-center w-[200px]">Let's talk</p>
            </div>
            <div className="p-2 rounded-full absolute right-2  bg-[#219DD9]">
              <FaArrowRight />
            </div>
          </div>
        </div> */}

<img
        src="/technologies/shade.png"
        alt="image"
        className="absolute z-[-1]  bottom-[-500px] right-[-30vw]"
        // className="h-[400px] md:h-[500px] w-full md:w-[60%] object-contain"
      />
      </div>
    </div>
  );
};

export default Features;
