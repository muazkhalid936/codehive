"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
import useVideoStore from "../store/useVideoStore"; // Import the Zustand store

const MainHero = () => {
  const { language } = useStore();
  const t = useTranslations("translation");
  const videoRef = useRef(null);
  const { setIsVideoLoading } = useVideoStore(); // Zustand state

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((err) => console.log("Autoplay prevented:", err));
      }
    };

    playVideo(); // Play when the component mounts
    document.addEventListener("visibilitychange", playVideo); // Resume when returning

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  // Disable right-click context menu on the video
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []);

  const headingText = t("bespokeSol");
  const words = headingText.split(" ");

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="container flex-col-reverse sm:h-[292px] gap-5 sm:gap-0 relative sm:pl-10 flex sm:flex-row bg-[#000B17] pt-[4\20px] mx-auto sm:mt-20"
    >
      {/* Text Content */}
      <div className="flex sm:w-[50%] gap-5 sm:gap-0 sm:mt-0 justify-center flex-col text-white xl:gap-8">
        <p className="text-[30px] main-heading text-center sm:text-start sm:text-4xl lg:text-[40px] xl:text-[50px] z-10 font-extrabold leading-tight">
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
      </div>

      {/* Video Section */}
      <div className="flex flex-1 relative">
        {/* Transparent overlay to intercept interactions */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
          onContextMenu={(e) => e.preventDefault()} // Disable right-click on the overlay
        ></div>

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full"
          style={{ pointerEvents: "none" }} // Disable pointer events on the video
          onCanPlay={() => setIsVideoLoading(false)} // Hide loader when the video is ready
        >
          <source src="/Logo 3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainHero;
