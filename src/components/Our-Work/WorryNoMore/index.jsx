import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const WorryNoMore = ({
  rightImage,
  title,
  description,
  backgroundColor,
  points,
}) => {
  return (
    <div className={`container pb-[50px] rounded-lg  relative overflow-hidden`}>
      <div
        className={`bg-cover bg-center"
         h-[800px] md:h-[340px] xl:h-[400px] w-full rounded-[20px] items-center md:items-center justify-between flex flex-col md:flex-row gap:4 sm:px-0 `}
        style={{
          backgroundColor: backgroundColor || undefined,
        }}
      >
        <div
          className={`flex flex-col text-black w-full md:w-1/2 pl-4 md:pl-12 pr-2 h-full justify-center border-tl-[20px] border-bl-[20px] rounded-[20px] gap-3 px-6 py-5`}
        >
          <h2 className="gilray-font leading-tight sub_heading">
            Worry No More With <br />
            <span className="text-[#219DD9]"> {title}</span>
          </h2>
          <p className="mb-5">{description}</p>
          <ul className="list-disc gap-2 flex flex-col">
            {points.map((point, index) => (
              <li key={index} className="flex gap-2 list-disc items-center">
                <GoDotFill className="text-gray-700" />
               <span className="text-slate-600">
                 {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {rightImage && (
          <div
            className=" text-white w-full md:w-1/2 h-full self-end rounded-[20px]"
            style={{
              backgroundImage: `url(${rightImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WorryNoMore;
