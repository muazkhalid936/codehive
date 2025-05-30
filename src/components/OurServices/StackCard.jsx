import React from "react";
import { FiArrowUpRight,FiArrowUpLeft } from "react-icons/fi";
import {  useRouter } from '../../i18n/routing';

import useStore from "../../store/useUserStore";
import Image from "next/image";

const StackCard = ({ bg, imgLink, heading, num, para, link }) => {
  const { language } = useStore();
  const router = useRouter();
  const splitHeading = heading.split(" ");
  const lastTwoWords = splitHeading.slice(-2).join(" ");
  const restOfHeading = splitHeading.slice(0, -2).join(" ");
  return (
    <div className={`${language==="en"?"h-[460px]":"h-[435px]"}  sm:h-[350px] lg:h-[400px]  flex   text-white flex-col md:flex-row  gap-5 justify-between sm:gap-10 my-auto lg:w-[95%] rounded-3xl overflow-hidden sm:p-5  p-2 relative `}>
      <div
        className="absolute  p-[1px] top-0  left-0 h-full w-full "
        style={{
          border: "1px solid transparent",
          borderRadius: "20px",
          background:
            " linear-gradient(140deg, #02101f 0%,#02101f 20%, #2194cd 50%, #02101f 80%)",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "padding-box, border-box",
        }}
      >
        <img src={bg} alt="1" className="w-full z-10 h-full  " />
      </div>
      <div className="w-full z-20 md:w-[65%] justify-between  flex px-2 md:px-4 md:py-2 flex-col sm:gap-2">
        <div className="w-full">
          <h1 className="text-yellow-400  main-heading font-bold  text-start sub_heading">
            {num}
          </h1>
        </div>
        <div>
          <span className={`text-start ${language==="en"?"bg-gradient-to-r":"bg-gradient-to-l"}  from-white via-blueColor to-blueColor bg-clip-text text-transparent font-extrabold leading-tight sub_heading`}>
            {heading}
            
          </span>
        </div>

        <div className="main_hero_slogan text-start text-white">{para}</div>

        <div className=" flex justify-start items-start flex-1 gap-2">
          <button
            className="xl:text-xl mt-2 flex gap-2 items-center "
            onClick={() => router.push(link)}
          >
            {language === "en" ? "Read More" : "اقرأ أكثر"}
            <div className=" bg-white sm:mt-1 text-black rounded-full ">
              {language==="en"?<FiArrowUpRight className="sm:text-lg text-sm" />:<FiArrowUpLeft className="sm:text-lg text-sm" />}
            </div>
          </button>
        </div>
      </div>

      <div className="w-full flex z-20 pb-[15px] sm:mb-0 md:w-1/2 justify-center sm:justify-end items-center">
        <div className="border-[1px]  sm:w-[95%] border-blue-400 sm:h-[90%] rounded-[20px] ">
          <Image src={imgLink} alt="1" width={500} height={500} className="!w-full !h-full  " />
        </div>
      </div>
    </div>
  );
};

export default StackCard;
