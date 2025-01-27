"use client";
import React from "react";
import NavbarPages from "../../components/NavbarPages";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
const page = () => {
  const [option, setOption] = useState("all");
  return (
    <div>
      <NavbarPages />

      <div className="h-[60vh] flex justify-center relative items-center bg-[#000B17] mt-20">
        <div className="absolute -left-10 -bottom-8">
          <img
            src="/12.png"
            className="lg:w-[200px] 2xl:w-[250px] rotate-[130deg] cover"
          />
        </div>
        <div className="absolute right-5 -top-5">
          <img
            src="/outline.png"
            className="lg:w-[300px] 2xl:w-[400px] rotate-[90deg] cover"
          />
        </div>

        <div className="">
          <p className="text-[20px] header sm:text-3xl w-[60%] text-center mx-auto leading-tight  md:text-[50px]  main-heading  text-white">
            {" "}
            We Craft Digital Futures By{" "}
            <span className="text-blueColor">Inspiring Innovation</span> In
            Brands
          </p>
        </div>
      </div>

      <div className="  container mb-[55px]  mx-auto ">
        <div className="w-full  ">
          <div className="flex my-[55px]  gap-5">
            <button
              onClick={() => setOption("all")}
              className={`text-white px-10 main_hero_slogan py-2 rounded-full ${
                option === "all"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              All
            </button>
            <button
              onClick={() => setOption("web")}
              className={`text-white px-10  main_hero_slogan  py-2 rounded-full ${
                option === "web"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              Web
            </button>
            <button
              onClick={() => setOption("mobile")}
              className={`text-white px-10  main_hero_slogan  py-2 rounded-full ${
                option === "mobile"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              Mobile Application
            </button>
            <button
              onClick={() => setOption("web-app")}
              className={`text-white px-10  main_hero_slogan  py-2 rounded-full ${
                option === "web-app"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              Web Application
            </button>
          </div>
        </div>

        {option === "all" ? (
          <>
            <div className="flex gap-10  lg:h-[370px] 2xl:h-[400px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/2.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a href="/our-work/solwave-website" className="font-poppin">
                      Solwave
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex  overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/3.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/delicious-bites-app"
                    >
                      Delicious Bite App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-10 mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/5.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/saloon-app">
                      Salon App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/4.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/doctor-booking-app"
                    >
                      Doctor Booking App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/6.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/laam-web">
                      Laam{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/7.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/eshop-app">
                      Eshop{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 flex-row-reverse mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/8.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/instant-save-app"
                    >
                      Insta Save
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/14.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/legal-wise-web">
                      Legal Wise Web
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10  mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/12.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/faoolun-website">
                      Faoolun{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/13.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/caption-gen">
                      Caption Gen App{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10  mt-10 lg:h-[400px] 2xl:h-[450px] flex-row-reverse">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/10.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/clixpos-website">
                      ClixPOS
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/a1.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a href="/our-work/al-abour-app">AI Labour</a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10  mt-10 lg:h-[400px] 2xl:h-[450px] ">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/11.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/word-smith-ai">
                      Wordsmith{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/1.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/food-inventory-app"
                    >
                      Food Inventory App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {option === "mobile" ? (
          <>
            <div className="flex gap-10 flex-row-reverse my-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/8.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/instant-save-app"
                    >
                      Insta Save
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/14.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/legal-wise-web">
                      Legal Wise Web
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10  lg:h-[370px] 2xl:h-[400px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/2.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a href="/our-work/solwave-website" className="font-poppin">
                      Solwave
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex  overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/3.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/delicious-bites-app"
                    >
                      Delicious Bite App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-10 mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/5.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/saloon-app">
                      Salon App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/4.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/doctor-booking-app"
                    >
                      Doctor Booking App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/6.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/laam-web">
                      Laam{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/7.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/eshop-app">
                      Eshop{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10  mt-10 lg:h-[400px] 2xl:h-[450px] ">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/11.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/word-smith-ai">
                      Wordsmith{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/1.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/food-inventory-app"
                    >
                      Food Inventory App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {option === "web" || option === "web-app" ? (
          <>
            <div className="flex flex-row-reverse gap-10 my-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/5.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/saloon-app">
                      Salon App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/4.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/doctor-booking-app"
                    >
                      Doctor Booking App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 mt-10  lg:h-[370px] 2xl:h-[400px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/2.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a href="/our-work/solwave-website" className="font-poppin">
                      Solwave
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex  overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/3.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/delicious-bites-app"
                    >
                      Delicious Bite App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 flex-row-reverse mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/8.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/instant-save-app"
                    >
                      Insta Save
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/14.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/legal-wise-web">
                      Legal Wise Web
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          

            <div className="flex gap-10  mt-10 lg:h-[400px] 2xl:h-[450px] ">
              <div
                className="flex overflow-hidden relative group w-[65%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/11.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a className="font-poppin" href="/our-work/word-smith-ai">
                      Wordsmith{" "}
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
              <div
                className="flex overflow-hidden relative group w-[35%] cursor-pointer "
                style={{
                  backgroundImage: "url(/our-work/main-page/1.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/2.png" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-7 2xl:py-10 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-4xl w-full text-center flex justify-center items-center gap-5">
                    <a
                      className="font-poppin"
                      href="/our-work/food-inventory-app"
                    >
                      Food Inventory App
                    </a>
                    <FiArrowUpRight className="bg-white text-black p-2 text-4xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default page;
