"use client";
import React from "react";
import {
  HiArrowUpRight,
  HiMiniArrowUpLeft,
  HiMiniCheck,
} from "react-icons/hi2";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useTranslations } from "next-intl";
import "./style.css";
import useStore from "../../store/useUserStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const index = () => {
  const { language } = useStore();
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
  const title = t("monthlyPac");

  return (
    <div className=" py-[40px] sm:py-[55px]  bg-[#000B17] ">
      <div className="container mx-auto   text-white">
        <div className="">
          <h2 className="pb-[40px] sm:pb-[55px] text-center text-[30px]  sm:text-[45px] gilray-font ">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-blueColor">{title.split(" ").slice(-1)}</span>
          </h2>

          <div className={`sm:flex hidden flex-col ${language==="en"?"md:flex-row":"md:flex-row-reverse"} justify-end items-end    md:gap-5`}>
            <div
              dir={language === "en" ? "ltr" : "rtl"}
              className="md:w-1/3 md:mt-[10vh] mx-auto  bg-gradient-to-br from-[#010B1770] h-[600px] md:h-[650px] lg:h-[660px] xl:h-[570px] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl"
            >
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  {t("basic")}
                </p>

                <button className="flex items-center w-[180px] mt-8 md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">{t("getStarted")}</span>
                  {language === "en" ? (
                    <span
                      className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <HiMiniArrowUpRight size={16} />
                    </span>
                  ) : (
                    <span
                      className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <HiMiniArrowUpLeft size={16} />
                    </span>
                  )}
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

            <div
              dir={language === "en" ? "ltr" : "rtl"}
              className="md:w-1/3 mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] h-[700px] md:h-[750px] lg:h-[760px] xl:h-[670px] to-[#2093CA70]  p-[2px] rounded-2xl"
            >
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                <p className="sm:w-[80%] xl:w-[60%] mx-auto text-center text-[#1FCB78] border border-[#1FCB78] xl:px-5 py-3 text-lg font-semibold rounded-full z-20 my-6">
                  {t("mostPopula")}
                </p>

                <p className="gilray-font text-[30px] mx-auto text-center">
                  {t("advanced")}
                </p>

                <button className="flex items-center w-[180px] mt-8 md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">{t("getStarted")}</span>
                  {
                    language==="en"?
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>:
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpLeft size={16} />
                  </span>
                  }
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

            <div
              dir={language === "en" ? "ltr" : "rtl"}
              className="md:w-1/3  md:mt-[10vh] mx-auto bg-gradient-to-br from-[#010B1770] h-[600px] md:h-[650px] lg:h-[660px]  xl:h-[570px] via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl"
            >
              <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                <p className="gilray-font text-[30px] mx-auto text-center">
                  {t("enterprise")}
                </p>

                <button className="flex items-center w-[180px] mt-8 md:w-[200px] h-[50px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px] py-3 px-6 shadow-md rounded-lg">
                  <span className="truncate">{t("getStarted")}</span>
                  {
                    language==="en"?
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpRight size={16} />
                  </span>:
                  <span
                    className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <HiMiniArrowUpLeft size={16} />
                  </span>
                  }
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

          {/* Mobile Screen */}

          <div className="flex sm:hidden">
            <Swiper
              // modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2} // Shows one full card in center + half on left and right
              centeredSlides={true}
              initialSlide={1}
              // loop={true}
              // navigation
              dir={language === "en" ? "ltr" : "rtl"}
              // pagination={{ clickable: true }}
              className="flex sm:hidden items-end justify-end"
            >
              <SwiperSlide className="mt-[80px]">
                <div
                  dir={language === "en" ? "ltr" : "rtl"}
                  className="md:w-1/3 md:mt-[10vh] mx-auto  bg-gradient-to-br from-[#010B1770] h-[420px]  via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl"
                >
                  <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                    <p className="gilray-font text-[30px] leading-none mx-auto text-center">
                      {t("basic")}
                    </p>

                    <button className="flex items-center w-[130px] mt-[15px] sm:mt-8 md:w-[200px] h-[40px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px]  shadow-md rounded-lg">
                      <span className="truncate text-[12px] ">
                        {t("getStarted")}
                      </span>
                      {
                        language==="en"?
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpRight size={16} />
                      </span>:
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpLeft size={16} />
                      </span>
                      }
                    </button>

                    <hr className="my-5 sm:my-10 border-slate-500 " />

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
              </SwiperSlide>

              <SwiperSlide className="">
                <div
                  dir={language === "en" ? "ltr" : "rtl"}
                  className="md:w-1/3 mx-auto bg-gradient-to-br from-[#010B1770] via-[#2093CA70] h-[500px]  to-[#2093CA70]  p-[2px] rounded-2xl"
                >
                  <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-r  relative from-[#0a1929]   to-[#051e33] w-full h-full   mx-auto shadow-lg ">
                    <p className=" w-[70%] mx-auto text-center text-[14px] text-[#1FCB78] border border-[#1FCB78] py-2  font-semibold rounded-full z-20 my-5">
                      {t("mostPopula")}
                    </p>

                    <p className="gilray-font text-[30px] mx-auto text-center">
                      {t("advanced")}
                    </p>
                    <button className="flex items-center w-[130px] mt-[15px] sm:mt-8 md:w-[200px] h-[40px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px]  shadow-md rounded-lg">
                      <span className="truncate text-[12px] ">
                        {t("getStarted")}
                      </span>
                      {
                        language==="en"?
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpRight size={16} />
                      </span>:
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpLeft size={16} />
                      </span>
                      }
                    </button>
                    <hr className="my-5 sm:my-10 border-slate-500 " />

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
              </SwiperSlide>

              <SwiperSlide className="mt-[80px]">
                <div
                  dir={language === "en" ? "ltr" : "rtl"}
                  className="md:w-1/3  md:mt-[10vh] mx-auto bg-gradient-to-br from-[#010B1770] h-[420px]  via-[#2093CA70] to-[#2093CA70]  p-[2px] rounded-2xl"
                >
                  <div className=" p-4 md:p-8 rounded-2xl  bg-gradient-to-b  relative from-[#0a1929]   to-[#020d1a] w-full h-full   mx-auto shadow-lg ">
                    <p className="gilray-font text-[30px] mx-auto text-center">
                      {t("enterprise")}
                    </p>

                    <button className="flex items-center w-[130px] mt-[15px] sm:mt-8 md:w-[200px] h-[40px] m-auto justify-center gap-3 bg-[#FFFFFF0A] hover:bg-gray-700 text-white font-lato text-[16px] md:text-[18px]  shadow-md rounded-lg">
                      <span className="truncate text-[12px] ">
                        {t("getStarted")}
                      </span>
                      {
                        language==="en"?
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpRight size={16} />
                      </span>:
                      <span
                        className="flex items-center justify-center rounded-full bg-white text-gray-800 p-1"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <HiMiniArrowUpLeft size={16} />
                      </span>
                      }
                    </button>
                    <hr className="my-5 sm:my-10 border-slate-500 " />
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
