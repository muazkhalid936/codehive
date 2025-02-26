"use client";
import React from "react";
import useStore from "../store/useUserStore";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const {language} = useStore();
 
  const t = useTranslations("translation");
  const title = t("whoWeAre");



  return (
    <div className="container py-[40px] sm:py-[55px] rounded-lg">
      <div className="bg-[url('/whoweare/bgImage.png')] bg-cover  h-[170px] sm:min-h-[350px] md:max-h-[450px]  bg-center sm:h-[50vh] w-full rounded-[20px] items-center md:items-center justify-start sm:justify-center flex md:justify-around  sm:gap-32 gap:4 px-6 sm:px-0">
        <div className="flex flex-col text-white w-full sm:w-1/2 sm:pl-20"
        dir={language === "en" ? "ltr" : "rtl"}>
        
          <h2 className="sub_heading font-bold  flex-1 gilray-font">
            {title.split(" ").map((word, index) => (
              <span
                key={index}
                className={`${index !== 2 ? "text-white" : "text-blueColor"}`}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="w-[90%] main_hero_slogan">{t("weAreAPass")} </p>
        </div>

        <img
          src="/whoweare/play-button.png"
          alt="bgImage"
          className="w-12 md:w-24 d-none mx-auto md:d-block"
        />
        {/* <video
          ref={videoRef}
          className="container h-[200px] sm:min-h-[350px] md:max-h-[450px] bg-blue-200 sm:h-[50vh] rounded-lg"
          // onPlay={() => setIsPlaying(true)} // Update state when video starts playing
          // onPause={() => setIsPlaying(false)} // Update state when video pauses
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
