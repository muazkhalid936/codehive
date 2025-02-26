import React from "react";
import { HiArrowUpRight, HiMiniCheck } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useTranslations } from "next-intl";
import "./style.css";
const index = () => {
  const t = useTranslations("translation");

  const features1 = [
    { name: "basicAppoi", available: true },
    { name: "onlinePaym", available: true },
    { name: "customerM1", available: true },
    { name: "mapLocatio", available: true },
    { name: "appointme5", available: true },
    { name: "profileMa1", available: true },
    { name: "iosAndAndr", available: true },

  ];
  const features2 = [
    { name: "basicAppoi", available: true },
    { name: "onlinePaym", available: true },
    { name: "customerM1", available: true },
    { name: "mapLocatio", available: true },
    { name: "appointme5", available: true },
    { name: "profileMa1", available: true },
    { name: "iosAndAndr", available: true },
 
  ];
  const features3 = [
    { name: "basicAppoi", available: true },
    { name: "onlinePaym", available: true },
    { name: "customerM1", available: true },
    { name: "mapLocatio", available: true },
    { name: "appointme5", available: true },
    { name: "profileMa1", available: true },
    { name: "iosAndAndr", available: true },

  ];
  const title = t("monthlyPac")


  return (
    <div className=" py-[40px] sm:py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
          <h2 className=" pb-[55px] text-center text-[45px] gilray-font leading-[55px]">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-blueColor">{title.split(" ").slice(-1)}</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-end    gap-5">
            <div className="md:w-1/3 md:mt-[10vh] mx-auto  bg-gradient-to-br from-[#010B1770] h-[600px] md:h-[650px] lg:h-[660px] xl:h-[570px] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  {t("basic")}
                </p>
               

                <button className="flex items-center w-[180px] mt-10 md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                <span className="truncate">{t("getStarted")}</span>
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
                        {t(features.name)}
                      </span>
                    </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3 mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] h-[700px] md:h-[750px] lg:h-[760px] xl:h-[670px] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                <p className="sm:w-[80%] xl:w-[60%] mx-auto text-center text-[#1FCB78] border border-[#1FCB78] xl:px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  {t("mostPopula")}
                </p>

                <p className="gilray-font text-[30px] mx-auto text-center">
                {t("advanced")}
                </p>
              

                <button className="flex items-center w-[180px] mt-10 md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                <span className="truncate">{t("getStarted")}</span>
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
                     {t(features.name)}
                     </span>
                 </li>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3  md:mt-[10vh] mx-auto bg-gradient-to-br from-[#010B1770] h-[600px] md:h-[650px] lg:h-[660px]  xl:h-[570px] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  {t("enterprise")}
                </p>
              

                <button className="flex items-center w-[180px] md:w-[200px] mt-10 h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">{t("getStarted")}</span>
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
                     {t(features.name)}
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
