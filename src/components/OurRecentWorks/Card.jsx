import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoApple } from "react-icons/io5";

const Card = ({ head, para, bgImg, icon: Icon }) => {
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
          Web Development
        </p>
        <p className="text-black border-black py-1 w-fit border rounded-full px-2 text-sm">
          Flutter
        </p>
      </div>

      {/* Main card content with transition */}
      <div className="absolute backdrop-blur-md h-[170px] transition-all group ease-in-out duration-300 hover:h-[240px] bottom-0 inset-0 bg-opacity-50 hover:md:top-[59%] md:top-[74%] top-[62%] rounded-lg flex flex-col justify-center p-4 gap-2">

        <div className="flex justify-start items-center">

        {Icon && <Icon className="text-4xl pointer-events-none" />} {/* Prevent hover effects */}
        </div>
        <h2 className="text-black text-2xl font-bold">{head}</h2>
        <p className="text-slate-800">{para}</p>
        <hr className="border hidden group-hover:flex border-black w-full" />
        <div className="flex gap-2 items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p>View Complete Project</p>
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
