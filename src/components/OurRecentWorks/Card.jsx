import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import useStore from "../../store/useUserStore";
import {  useRouter } from '../../i18n/routing';


const Card = ({ head, para, bgImg, Img, link, tech1, tech2 }) => {
  const router = useRouter();
  const { language } = useStore();
  return (
    <div
      className="relative overflow-hidden bg-cover cursor-pointer bg-center h-[445px] md:h-[550px] w-[300px] md:w-[330px] rounded-xl shadow-lg"
      style={{
        backgroundImage: `${bgImg}`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="mt-4 ml-2 flex gap-2">
        <p className="text-black border-black py-1 w-fit border rounded-full px-2 text-sm">
          {tech1}
        </p>
        <p className="text-black border-black py-1 w-fit border rounded-full px-2 text-sm">
          {tech2}
        </p>
      </div>

      {/* Main card content with transition */}
      <div
            dir={language === "English" ? "ltr" : "rtl"}

      className="absolute backdrop-blur-sm h-[170px] bg-white bg-opacity-20 transition-all group ease-in-out duration-300 hover:h-[240px] bottom-0 inset-0  hover:md:top-[59%] md:top-[74%] top-[62%] rounded-lg flex flex-col justify-center p-4 gap-2">
        <div className="flex justify-start items-center">
          {/* {Icon && <Icon className="text-4xl pointer-events-none" />} Prevent hover effects
           */}
          <img src={Img} className="h-10" />
        </div>
        <h2 className="text-black text-2xl font-semibold">{head}</h2>
        <p className="text-black font-semibold ">{para}</p>
        <hr className="border hidden group-hover:flex border-black w-full" />
        <button
          onClick={() => router.push(link)}
          className="flex gap-2 items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p>
            {language === "English"
              ? "View Complete Project"
              : "عرض المشروع كامل"}
          </p>
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Card;
