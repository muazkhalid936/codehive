import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
const StackCard = ({ bg, type, heading, num, para, link }) => {
  const router = useRouter();
  // console.log(link)
  return (
    <div className="service-stack-card flex  text-white flex-col md:flex-row gap-10 my-auto w-[90%] rounded-3xl overflow-hidden p-5 relative ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img src={bg} alt="1" className="w-full z-10 h-full  " />
      </div>
      <div className="w-full z-20 md:w-[55%] justify-between  flex md:px-4 md:py-2 flex-col gap-2">
        <div className="w-full">
          <h1 className="text-yellow-400  main-heading font-bold text-start text-[50px]">
            {num}
          </h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-r   from-white   to-blueColor font-extrabold bg-clip-text text-transparent sub_heading main_heading ">
            {heading}
          </h1>
        </div>

        <div className="main_hero_slogan text-[#525355]">{para}</div>

        <div className=" flex justify-start items-start flex-1 gap-2">
          <button className="xl:text-xl flex gap-2 items-center " onClick={() => router.push(link)}>
            Read More
            <div className=" bg-white mt-1 text-black rounded-full ">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* <div className="w-full flex z-20 md:w-1/2 justify-end items-center">
        {type === "AI" && (
          <div className="border-2 w-[85%] border-blue-400 h-[90%] rounded-3xl p-5">
            <h1 className="text-white font-bold text-xl">
              Why AI is great to speed up <br /> data analysis:
            </h1>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default StackCard;
