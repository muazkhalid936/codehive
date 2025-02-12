
import React from "react";
import { HiArrowUpRight, HiMiniCheck } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import "./style.css";
const index = () => {
  const features1 = [
    { name: "Basic appointment scheduling", available: true },
    { name: "Online payments", available: true },
    { name: "Customer management", available: true },
    { name: "Map Location", available: true },
    { name: "Appointment Notifications", available: true },
    { name: "Profile management", available: true },
    { name: "iOS and Android apps", available: true },
    { name: "Loyalty program integration", available: false },
    { name: "Chat Support", available: false },
    { name: "Customized notification", available: false },
    { name: "Custom branding", available: false },
    { name: "SMS and Email Reminders", available: false },
    { name: "Inventory management", available: false },
  ];
  const features2 = [
    { name: "Basic appointment scheduling", available: true },
    { name: "Online payments", available: true },
    { name: "Customer management", available: true },
    { name: "Map Location", available: true },
    { name: "Appointment Notifications", available: true },
    { name: "Profile management", available: true },
    { name: "iOS and Android apps", available: true },
    { name: "Loyalty program integration", available: true },
    { name: "Chat Support", available: true },
    { name: "Cust omized notification", available: false },
    { name: "Custom branding", available: false },
    { name: "SMS and Email Reminders", available: false },
    { name: "Inventory management", available: false },
  ];
  const features3 = [
    { name: "Basic appointment scheduling", available: true },
    { name: "Online payments", available: true },
    { name: "Customer management", available: true },
    { name: "Map Location", available: true },
    { name: "Appointment Notifications", available: true },
    { name: "Profile management", available: true },
    { name: "iOS and Android apps", available: true },
    { name: "Loyalty program integration", available: true },
    { name: "Chat Support", available: true },
    { name: "Customized notification", available: true },
    { name: "Custom branding", available: true },
    { name: "SMS and Email Reminders", available: true },
    { name: "Inventory management", available: true },
  ];

  return (
    <div className=" py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
          <h2 className=" pb-[55px] text-center text-[45px] gilray-font leading-[55px]">
            <span className="text-white">Monthly </span>
            <span className="text-[#1E90FF]">Packages</span>
          </h2>

          <div className="flex md:flex-row flex-col gap-5">
            <div className="md:w-1/3 md:mt-[10vh] mx-auto  bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Basic
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
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

                <div className="h-[40vh]  ab mt-5 overflow-y-scroll">
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

            <div className="md:w-1/3 mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                <p className="w-1/2 mx-auto text-center text-[#1FCB78] border border-[#1FCB78] px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  Most Popular
                </p>

                <p className="gilray-font text-[30px] mx-auto text-center">
                  Advanced
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
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

                <div className="h-[40vh] ab mt-5 overflow-y-scroll">
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

            <div className="md:w-1/3  md:mt-[10vh] mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  Enterprise
                </p>
                <p className="text-center main_hero_slogan leading-none my-8">
                  When she reached the first hills of the italic mountains{" "}
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
                <div className="h-[40vh] ab mt-5 overflow-y-scroll">
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
