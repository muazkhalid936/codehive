"use client";
import React, { useState, useEffect, Suspense } from "react";
import Spline from "@splinetool/react-spline/next";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useStore from "../store/useUserStore";
import { useTranslations } from "next-intl";

const MainHero = () => {
  const { language } = useStore();
  const router = useRouter();
  const t = useTranslations("translation");

  const headingText = t("bespokeSol");
  const headingText1 = "نقدم حلول مصممة خصيصا لتناسب متطلبات عملك";
  const words = headingText.split(" ");
  const words1 = headingText1.split(" ");

  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isModelStable, setIsModelStable] = useState(false); // New state for model stability
  const heroSectionRef = React.useRef(null);

  useEffect(() => {
    if (isModelStable) {
      document.body.style.overflow = "auto"; // Enable scrolling after model is stable
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling while loading
    }
  }, [isModelStable]);

  const handleModelLoad = () => {
    setIsModelLoaded(true); // Model is loaded
    setTimeout(() => {
      setIsModelStable(true); // Model is stable after 1 second
    }, 1000); // 1-second delay
  };

  return (
    <>
      {/* Full-Screen Loader */}
      {!isModelStable && ( // Show loader until model is stable
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <video autoPlay loop muted style={{ height: "50vh" }}>
              <source src="/loaderVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Main Content (Hidden Until Model is Stable) */}
      <div
        ref={heroSectionRef}
        className={`container flex-col-reverse sm:h-[292px] relative sm:pl-10 flex sm:flex-row bg-[#000B17] mx-auto sm:mt-20 transition-opacity duration-500 ${
          isModelStable ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Text Content */}
        <div
          className="flex sm:w-[50%] mt-[300px] sm:mt-0 flex-col gap-5 text-white xl:gap-8"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <p className="text-[30px] main-heading text-center sm:text-start sm:text-3xl md:text-[50px] z-10 font-extrabold leading-tight">
            {words.map((word, index) => (
              <span
                key={index}
                className={index === 1 ? "text-blueColor" : "text-white"}
              >
                {word}{" "}
              </span>
            ))}
          </p>

          <p className="main_hero_slogan text-white z-40 text-center sm:text-start">
            {t("yourJourne")}
          </p>

          {/* Spline Model */}
          <div
            className="flex w-[200vw] scale-75 flex-1 spline_model -top-20 -right-[16rem] absolute sm:-top-[50px] sm:h-[400px] sm:scale-[1] 
            sm:-right-[21rem] sm:w-[70%] md:right-[-13vw] sm:justify-end text-white sm:items-end"
          >
            <Suspense fallback={null}>
              <Spline
                scene="/Logo animation.spline"
                onLoad={handleModelLoad} // Use the new handler
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;