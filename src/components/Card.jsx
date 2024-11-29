import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Card = ({ head, para, bgImg }) => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center h-[500px] w-[330px] rounded-lg shadow-lg"
      style={{
        backgroundImage: `${bgImg}`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className=" mt-4 ml-2 flex gap-2">
        <p className="text-black border-black py-1 w-fit  border rounded-full px-2 text-sm">
          Web Development
        </p>
        <p className="text-black border-black py-1 w-fit  border rounded-full px-2 text-sm">
          Flutter
        </p>
      </div>

      <div className="absolute backdrop-blur-md h-[170px] bottom-0 inset-0 bg-opacity-50 top-[67%] rounded-lg flex flex-col justify-center  p-4 gap-2">
        <h2 className="text-black    text-2xl font-bold">{head}</h2>
        <p className="text-slate-800">{para}</p>
        <hr className="border border-black w-full" />
        <div className="flex gap-2 items-center justify-between">
          <p>View Complete Project</p>
          <FiArrowUpRight className="bg-white rounded-full text-[#000B17] text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Card;
