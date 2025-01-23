"use client";
import React from "react";
import { useRef, useState } from "react";
const WhoWeAre = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // Track video play/pause state

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };
  return (
    <div className="container py-[55px] rounded-lg">
      <div className="bg-[url('/whoweare/bgImage.png')] bg-cover h-[200px] sm:min-h-[350px] md:max-h-[450px]  bg-center sm:h-[50vh] w-full rounded-[20px] items-center md:items-center justify-start sm:justify-center flex md:justify-around  sm:gap-32 gap:4  sm:px-0">
        <div
          className="flex flex-col h-[200px] justify-center  sm:min-h-[350px] md:max-h-[450px] sm:h-[50vh] !mx-10 absolute text-white  container "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            pointerEvents: "none", // Semi-transparent black background
            zIndex: 1,
          }}
        >
          <h2 className="sub_heading font-bold  gilray-font  ">
            Who are <span className="  text-[#219DD9] "> we? </span>
          </h2>
          <p className=" w-[50%] leading-[20px] mt-5 main_hero_slogan ">
            Code Hive is driven by dynamism, client focus, and technological
            strength. Since inception, it has been dedicated to building
            cutting-edge iOS and Android applications, helping emerging
            businesses bring products to market efficiently, even with tight
            time and budget constraints.
          </p>
        </div>
        <video
          ref={videoRef}
          className="container h-[200px] sm:min-h-[350px] md:max-h-[450px] bg-blue-200 sm:h-[50vh] rounded-lg"
          // onPlay={() => setIsPlaying(true)} // Update state when video starts playing
          // onPause={() => setIsPlaying(false)} // Update state when video pauses
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default WhoWeAre;
