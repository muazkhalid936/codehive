import React, { useState } from "react";
import { HiMiniArrowUpRight, HiMiniArrowUpLeft } from "react-icons/hi2";
import useStore from "../../store/useUserStore";
import { useRouter } from "../../i18n/routing";
import Image from "next/image";

const Card = ({ head, para, bgImg, Img, link, tech1, tech2 }) => {
  const router = useRouter();
  const { language } = useStore();
  const [height, setHeight] = useState(false);

  const handleMouseEnter = () => {
    setHeight(true);
  };

  const handleMouseLeave = () => {
    setHeight(false);
  };
  const handleOnClick = () => {
    setHeight(!height);
  };

  return (
    <div
      className="relative  bg-cover overflow-hidden cursor-pointer bg-center h-[445px] md:h-[550px] w-[300px] md:w-[330px] rounded-xl shadow-lg"
      style={{
        backgroundImage: `${bgImg}`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className={`mt-4 ${language === "en" ? "ml-2" : "mr-2"} flex gap-2`}>
        <p className="text-black border-black py-1 w-fit border rounded-full px-2 text-sm">
          {tech1}
        </p>
        <p className="text-black border-black py-1 w-fit border rounded-full px-2 text-sm">
          {tech2}
        </p>
      </div>

      {/* Main card content with transition */}
      <div
        dir={language === "en" ? "ltr" : "rtl"}
        className={`absolute backdrop-blur-sm h-[220px] w-full  bg-white bg-opacity-20 transition-all ${
          height ? " top-[57%] sm:top-[65%]" : " sm:top-[75%] top-[68%]"
        } group ease-in-out duration-300  flex flex-col justify-start gap-2 p-4 `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOnClick}
      >
        <div className="flex justify-start items-center">
          <Image src={Img} width={100} height={50} className="!h-10 !w-auto" />
        </div>
        <p className="text-black text-2xl font-semibold">{head}</p>
        <p className="text-black main_hero_slogan">{para}</p>
        <hr
          className={`border mt-1 ${
            height ? "opacity-100" : "opacity-0"
          } border-black w-full`}
        />
        <button
          onClick={() => router.push(link)}
          className={`flex gap-2 r ${
            height ? "opacity-100" : "opacity-0"
          } items-center justify-between `}
        >
          <p className="main_hero_slogan">
            {language === "en" ? "View Complete Project" : "عرض المشروع كامل"}
          </p>
          {language === "en" ? (
            <HiMiniArrowUpRight
              className="bg-black rounded-full p-[1px] text-white text
-xl"
            />
          ) : (
            <HiMiniArrowUpLeft className="bg-black rounded-full p-[1px] text-white text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
