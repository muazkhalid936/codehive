
import React from "react";
import { HiArrowUpRight, HiMiniCheck } from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useTranslations } from "next-intl";
import "./style.css";
const index = () => {
  const features1 = [
    { name: "100Digital", available: true },
    { name: "1GeoLocati", available: true },
    { name: "1SalesSeat", available: true },
    { name: "1ManagerSe", available: true },
    { name: "freeOnBoar", available: true },
    { name: "productSiz", available: true },
  ];
  const features2 = [
    { name: "500Digital", available: true },
    { name: "5GeoLocati", available: true },
    { name: "5SalesSeat", available: true },
    { name: "5ManagerSe", available: true },
    { name: "freeOnBoar", available: true },
    { name: "productSiz", available: true },
    { name: "productBa1", available: true },
  ];
  const features3 = [
    { name: "unlimitedD", available: true },
    { name: "10GeoLocat", available: true },
    { name: "unlimitedS", available: true },
    { name: "10ManagerS", available: true },
    { name: "247Support", available: true },
    { name: "productSiz", available: true },
    { name: "productBa1", available: true },
  ];
  const t=useTranslations("translation")
  const title = t("monthlyPac")

  return (
    <div className=" py-[40px] sm:py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
        <h2 className=" pb-[55px] text-center text-[45px] gilray-font leading-[55px]">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-blueColor">{title.split(" ").slice(-1)}</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-end items-end    xl:gap-5">
            <div className="md:w-[30%] md:mt-[10vh] mx-auto h-[560px]  lg:h-[590px] xl:h-[530px]  bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                {t("basic")}
                </p>
                <p className="text-center text-[18px] xl:text-[25px]  leading-none mb-4 lg:mb-8">
                {t("basicAed19")}
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[15px] xl:text-[18px] py-3 px-6 shadow-md rounded-lg">
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

            <div className="md:w-[30%] mx-auto bg-gradient-to-br  h-[700px] lg:h-[690px] xl:h-[650px] from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
              <p className="sm:w-[80%] xl:w-[65%] mx-auto text-center text-[#1FCB78] border border-[#1FCB78] xl:px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  {t("mostPopula")}
                </p>


                <p className="gilray-font text-[30px] mx-auto text-center">
                {t("advanced")}
                </p>
                <p className="text-center text-[18px] xl:text-[25px]  leading-none mb-4 lg:mb-8">
                {t("advanceAed")}
                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] xl:text-[18px] py-3 px-6 shadow-md rounded-lg">
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

            <div className="md:w-[30%]  md:mt-[10vh] mx-auto h-[560px] lg:h-[590px] xl:h-[530px] bg-gradient-to-br from-[#010B1770] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl">
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                {t("enterprise")}
                </p>
                <p className="text-center text-[18px] xl:text-[25px]  leading-none mb-4 lg:mb-8">
{t("enterpris1")}                </p>

                <button className="flex items-center w-[180px] md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] xl:text-[18px] py-3 px-6 shadow-md rounded-lg">
                <span className="truncate">{t("getStarted")}</span>
                <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>
                </button>
                <hr className="xl:my-[30px] border-slate-500 " />
                <div className="h-[40vh]  mt-[10px] ">
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
