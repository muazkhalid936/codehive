"use client";
import React from "react";
import NavbarPages from "../../../components/NavbarPages";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { usePathname, useRouter, Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";
import Footer from "../../../components/Footer";
const page = () => {
  const t = useTranslations("translation");
  const router = useRouter();
  const [option, setOption] = useState("all");
  const title = t("turningYou");
  const words = title.split(" ");
  const highlightIndices = [7, 8, 10];

  return (
    <div>
      <NavbarPages />

      <div className="sm:h-[60vh] h-[400px]  overflow-hidden flex justify-center relative items-center bg-[#000B17] mt-20">
        <div className="absolute -left-10 -bottom-8">
          <img
            src="/12.png"
            className=" w-[140px] z-[-1] lg:w-[200px] 2xl:w-[250px] rotate-[130deg] cover"
          />
        </div>
        <div className="absolute right-0 sm:right-5 -top-5">
          <img
            src="/outline.png"
            className=" w-[140px] z-[-1] lg:w-[300px] 2xl:w-[400px] rotate-[90deg] cover"
          />
        </div>

        <div className="sm:w-[60%]">
          <h2 className=" font-black z-1 leading-tight text-center text-[30px] lg:text-[45px] text-white">
            {words.map((word, index) => {
              const shouldHighlight =
                highlightIndices.includes(index + 1) &&
                word.toLowerCase() !== "apps";
              return (
                <span
                  key={index}
                  className={shouldHighlight ? "text-blueColor" : ""}
                >
                  {word}{" "}
                </span>
              );
            })}
          </h2>
        </div>
      </div>

      <div className="  container mb-[55px]  mx-auto ">
        <div className="w-full  ">
          <div className="flex my-[55px] main_hero_slogan gap-2 sm:gap-5">
            <button
              onClick={() => setOption("all")}
              className={`text-white px-5 sm:px-10 main_hero_slogan py-2 rounded-full ${
                option === "all"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              {t("all")}
            </button>
            <button
              onClick={() => setOption("web")}
              className={`text-white px-5 sm:px-10  main_hero_slogan  py-2 rounded-full ${
                option === "web"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              {t("web")}
            </button>
            <button
              onClick={() => setOption("mobile")}
              className={`text-white px-5 sm:px-10  main_hero_slogan  py-2 rounded-full ${
                option === "mobile"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              {t("mobileAppl")}{" "}
            </button>
            <button
              onClick={() => setOption("web-app")}
              className={`text-white px-5 sm:px-10  main_hero_slogan  py-2 rounded-full ${
                option === "web-app"
                  ? " bg-gradient-to-r from-[#053c7D] to-blueColor"
                  : "bg-[#c3c3c3]"
              } `}
            >
              {t("webApplica")}{" "}
            </button>
          </div>
        </div>

        {option === "web" ? (
          <>
            {/* Row 1: Solwave, Laam */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row lg:h-[370px] 2xl:h-[400px]">
              {/* Solwave */}
              <div
                onClick={() => router.push("/our-work/solwave-website")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] h-[300px] lg:h-[370px] 2xl:h-[400px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Solwave@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-2xl  text-center font-poppin">
                    <Link href="/our-work/solwave-website">{t("solwave1")}</Link>
                  </div>
                </div>
              </div>

              {/* Laam */}
              <div
                onClick={() => router.push("/our-work/laam-web")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[35%] h-[300px] lg:h-[370px] 2xl:h-[400px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Laam@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/laam-web">Laam</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: ClixPOS, Faoolun */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row-reverse mt-5 sm:mt-10 lg:h-[370px] 2xl:h-[400px]">
              {/* ClixPOS */}
              <div
                onClick={() => router.push("/our-work/clixpos-website")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] h-[300px] lg:h-[370px] 2xl:h-[400px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Clixpos@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/clixpos-website">ClixPOS</Link>
                  </div>
                </div>
              </div>

              {/* Faoolun */}
              <div
                onClick={() => router.push("/our-work/faoolun-website")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[35%] h-[300px] lg:h-[370px] 2xl:h-[400px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Faoolun@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/faoolun-website">Faoolun</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Legal Wise Web (single card) */}
            <div className="flex gap-5 sm:gap-10 flex-col mt-5 sm:mt-10 lg:h-[370px] 2xl:h-[400px]">
              {/* Legal Wise Web */}
              <div
                onClick={() => router.push("/our-work/legal-wise-web")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] h-[300px] lg:h-[370px] 2xl:h-[400px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Legal.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/legal-wise-web">Legal Wise Web</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {option === "all" ? (
          <>
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row  lg:h-[370px] 2xl:h-[400px]">
              <div
                onClick={() => router.push("/our-work/solwave-website")}
                className="flex overflow-hidden relative cursor-pointer group  w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Solwave@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      href="/our-work/solwave-website"
                      className="font-poppin"
                    >
                      Solwave
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/Mr-app")}
                className="flex  overflow-hidden relative group cursor-pointer w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Mr.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5  bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/Mr-app">
                      Mr Take
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  mt-5 sm:mt-10 flex-col sm:flex-row-reverse  gap-5 sm:gap-10  lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/saloon-app")}
                className="flex overflow-hidden cursor-pointer relative group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Salon.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/saloon-app">
                      Glamour Salon
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/caption-gen")}
                className="flex overflow-hidden cursor-pointer relative group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Caption.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/caption-gen">
                      Caption Gen{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 sm:mt-0 gap-5 overflow-hidden sm:gap-10 flex-col sm:flex-row  lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/laam-web")}
                className="flex cursor-pointer overflow-hidden relative group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Laam@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/laam-web">
                      Laam
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/eshop-app")}
                className="flex cursor-pointer overflow-hidden relative group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Eshop@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/eshop-app">
                      Trendora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 sm:mt-0 sm:gap-10 flex-col sm:flex-row-reverse  lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/instant-save-app")}
                className="flex overflow-hidden relative group w-[100%] cursor-pointer sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Instant.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/instant-save-app"
                    >
                      Instant Save
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/legal-wise-web")}
                className="flex overflow-hidden relative group w-[100%] cursor-pointer sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Legal.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/legal-wise-web"
                    >
                      Legal Wise Web
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 sm:mt-0 sm:gap-10 flex-col sm:flex-row   lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/faoolun-website")}
                className="flex overflow-hidden relative group w-[100%] sm:w-[65%] cursor-pointer lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Faoolun@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/faoolun-website"
                    >
                      Faoolun{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/doctor-booking-app")}
                className="flex overflow-hidden relative group w-[100%] sm:w-[35%] cursor-pointer lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Doctor.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/doctor-booking-app"
                    >
                      MedEase
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 sm:mt-0 sm:gap-10   lg:h-[400px] 2xl:h-[450px] flex-col sm:flex-row-reverse ">
              <div
                onClick={() => router.push("/our-work/clixpos-website")}
                className=" cursor-pointer flex overflow-hidden relative group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Clixpos@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/clixpos-website"
                    >
                      ClixPOS
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/al-abour-app")}
                className=" cursor-pointer flex overflow-hidden relative group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Alabour@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link href="/our-work/al-abour-app">Al Abour</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 sm:mt-0 sm:gap-10 flex-col sm:flex-row  lg:h-[400px] 2xl:h-[450px] ">
              <div
                onClick={() => router.push("/our-work/word-smith-ai")}
                className="cursor-pointer flex overflow-hidden relative group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Wordsmith@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/word-smith-ai"
                    >
                      Wordsmith{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => router.push("/our-work/food-inventory-app")}
                className=" cursor-pointer flex overflow-hidden relative group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Food.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/food-inventory-app"
                    >
                      Foodventory
                    </Link>
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
            {/* Row 1: Glamour Salon, Wordsmith */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row  lg:h-[370px] 2xl:h-[400px]">
              {/* Glamour Salon */}
              <div
                onClick={() => router.push("/our-work/saloon-app")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Salon.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/saloon-app">Glamour Salon</Link>
                  </div>
                </div>
              </div>

              {/* Wordsmith */}
              <div
                onClick={() => router.push("/our-work/word-smith-ai")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Wordsmith@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/word-smith-ai">Wordsmith</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Caption Gen, Instant Save */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row-reverse mt-5 sm:mt-10 lg:h-[400px] 2xl:h-[450px]">
              {/* Caption Gen */}
              <div
                onClick={() => router.push("/our-work/caption-gen")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Caption.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/caption-gen">Caption Gen</Link>
                  </div>
                </div>
              </div>

              {/* Instant Save */}
              <div
                onClick={() => router.push("/our-work/instant-save-app")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Instant.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/instant-save-app">Instant Save</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Eshop (Trendora), FitVerse */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row mt-5 sm:mt-0 lg:h-[400px] 2xl:h-[450px]">
              {/* Trendora (Eshop) */}
              <div
                onClick={() => router.push("/our-work/eshop-app")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Eshop@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/eshop-app">Trendora</Link>
                  </div>
                </div>
              </div>

              {/* FitVerse (example) */}

              <div
                onClick={() => router.push("/our-work/food-inventory-app")}
                className="flex overflow-hidden relative cursor-pointer group w-full sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Food.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/food-inventory-app">Foodventory</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: MedEase, Al Abour */}
            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row-reverse mt-5 sm:mt-0 lg:h-[400px] 2xl:h-[450px]">
              {/* MedEase */}
              <div
                onClick={() => router.push("/our-work/doctor-booking-app")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Doctor.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/doctor-booking-app">MedEase</Link>
                  </div>
                </div>
              </div>

              {/* Al Abour */}
              <div
                onClick={() => router.push("/our-work/al-abour-app")}
                className="flex overflow-hidden relative cursor-pointer group w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px]"
                style={{
                  backgroundImage: "url(/our-work/main-page/Alabour@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-40 lg:py-5 bg-black bg-opacity-[70%] w-full flex justify-center items-center group-hover:bottom-0 transition-all duration-300">
                  <div className="text-white text-3xl text-center font-poppin">
                    <Link href="/our-work/al-abour-app">Al Abour</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {option === "web-app" ? (
          <>
            <div className="flex flex-col sm:flex-row-reverse  gap-5 sm:gap-10 mt-5 sm:mt-10 lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/caption-gen")}
                className="flex overflow-hidden cursor-pointer relative group w-[100%] sm:w-[65%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Caption.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link className="font-poppin" href="/our-work/caption-gen">
                      Caption Gen{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push("/our-work/food-app")}
                className="flex overflow-hidden relative group w-[100%] cursor-pointer sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Legal.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/legal-wise-web"
                    >
                      Legal Wise Web
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 sm:gap-10 flex-col sm:flex-row  mt-5 sm:mt-0 lg:h-[400px] 2xl:h-[450px]">
              <div
                onClick={() => router.push("/our-work/faoolun-website")}
                className="flex overflow-hidden relative group w-[100%] sm:w-[65%] cursor-pointer lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Faoolun@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", // Adjust background position
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      className="font-poppin"
                      href="/our-work/faoolun-website"
                    >
                      Faoolun{" "}
                    </Link>
                  </div>
                </div>
              </div>

              <div
                onClick={() => router.push("/our-work/solwave-website")}
                className="flex overflow-hidden relative cursor-pointer group  w-[100%] sm:w-[35%] lg:h-[370px] 2xl:h-[400px] h-[300px] "
                style={{
                  backgroundImage: "url(/our-work/main-page/Solwave@2x.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src="/our-work/main-page/Solwave@2x.jpg" className="w-full cover" /> */}
                <div className="absolute   -bottom-40 lg:py-5 bg-black bg-opacity-[70%] justify-center items-center w-full group-hover:bottom-0 transition-all ease-in-out duration-300 ">
                  <div className="text-white text-3xl w-full text-center flex justify-center items-center gap-5">
                    <Link
                      href="/our-work/solwave-website"
                      className="font-poppin"
                    >
                      Solwave
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
