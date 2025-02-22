
import React from "react";
import { HiArrowUpRight, HiMiniCheck } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import "./style.css";
const index = () => {
  const features1 = [
    { name: "100 Digital Cards", available: true },
    { name: "1 Geo Location", available: true },
    { name: "1 Sales Seat", available: true },
    { name: "1 Manager Seat", available: true },
    { name: "Free on boadring", available: true },
    { name: "Product & Size management", available: true },
  ];
  const features2 = [
    { name: "500 Digital Cards", available: true },
    { name: "5 Geo Location", available: true },
    { name: "5 Sales Seat", available: true },
    { name: "5 Manager Seat", available: true },
    { name: "Free on Boadring", available: true },
    { name: "Product & Size management", available: true },
    { name: "Product-Based Rewards", available: true },
  ];
  const features3 = [
    { name: "Unlimited Digital Cards", available: true },
    { name: "10 Geo Location", available: true },
    { name: "Unlimited Sales Seat", available: true },
    { name: "10 Manager Seat", available: true },
    { name: "24/7 Support", available: true },
    { name: "Product & Size management", available: true },
    { name: "Product-Based Rewards", available: true },
  ];

  return (
    <div className=" py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
          <h2 className=" pb-[55px] text-center text-[45px] gilray-font leading-[55px]">
            <span className="text-white">Monthly </span>
            <span className="text-[#1E90FF]">Packages</span>
          </h2>

          <div className="flex md:flex-row justify-end items-end flex-col gap-5">
            <div className="md:w-[30%] md:mt-[10vh] mx-auto h-[520px]  bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Basic
                </p>
                <p className="text-center  text-[25px]  leading-none mb-8">
                AED 190 Monthly
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>

                <hr className="my-10 border-slate-500 " />

                <div className="h-[40vh]  ab mt-5 ">
                  {features1.map((features, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-6 mb-3 main_hero_slogan"
                    >
                      <span
                        className={`flex items-center justify-center rounded-full ${
                          features.available === true
                            ? "bg-blueColor"
                            : "bg-[#404142]"
                        } text-gray-800 p-1`}
                        style={{ width: "24px", height: "24px" }}
                      >
                        {features.available === true ? (
                          <HiMiniCheck size={16} />
                        ) : (
                          <RxCross2 size={16} />
                        )}
                      </span>
                      <span
                        className={`${
                          features.available === true
                            ? "text-white"
                            : "text-[#404142]"
                        }`}
                      >
                        {" "}
                        {features.name}
                      </span>
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-[30%] mx-auto bg-gradient-to-br h-[620px] from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                <p className="w-[60%] mx-auto text-center text-[#1FCB78] border border-[#1FCB78] px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  Most Popular
                </p>

                <p className="gilray-font text-[30px] mx-auto text-center">
                  Advanced
                </p>
                <p className="text-center  text-[25px]  leading-none mb-8">
                AED 250 Monthly
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>
                <hr className="my-10 border-slate-500 " />

                <div className="h-[40vh] ab mt-5 ">
                  {features2.map((features, i) => (
                   <li
                   key={i}
                   className="flex items-center gap-6 mb-3 main_hero_slogan"
                 >
                   <span
                     className={`flex items-center justify-center rounded-full ${
                       features.available === true
                         ? "bg-blueColor"
                         : "bg-[#404142]"
                     } text-gray-800 p-1`}
                     style={{ width: "24px", height: "24px" }}
                   >
                     {features.available === true ? (
                       <HiMiniCheck size={16} />
                     ) : (
                       <RxCross2 size={16} />
                     )}
                   </span>
                   <span
                     className={`${
                       features.available === true
                         ? "text-white"
                         : "text-[#404142]"
                     }`}
                   >
                     {" "}
                     {features.name}
                   </span>
                 </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-[30%]  md:mt-[10vh] mx-auto h-[520px] bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Enterprise
                </p>
                <p className="text-center  text-[25px]  leading-none mb-8">
                AED 350 Monthly
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">Get Started</span>
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>
                <hr className="my-10 border-slate-500 " />
                <div className="h-[40vh] ab mt-5 ">
                  {features3.map((features, i) => (
                   <li
                   key={i}
                   className="flex items-center gap-6 mb-3 main_hero_slogan"
                 >
                   <span
                     className={`flex items-center justify-center rounded-full ${
                       features.available === true
                         ? "bg-blueColor"
                         : "bg-[#404142]"
                     } text-gray-800 p-1`}
                     style={{ width: "24px", height: "24px" }}
                   >
                     {features.available === true ? (
                       <HiMiniCheck size={16} />
                     ) : (
                       <RxCross2 size={16} />
                     )}
                   </span>
                   <span
                     className={`${
                       features.available === true
                         ? "text-white"
                         : "text-[#404142]"
                     }`}
                   >
                     {" "}
                     {features.name}
                   </span>
                 </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
