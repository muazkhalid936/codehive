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
      <div className="bg-[url('/whoweare/bgImage.png')] bg-cover  h-[170px] sm:min-h-[350px] md:max-h-[450px]  bg-center sm:h-[50vh] w-full rounded-[20px] items-center md:items-center justify-start sm:justify-center flex md:justify-around  sm:gap-32 gap:4 px-6 sm:px-0">
        <div className="flex flex-col text-white w-full sm:w-1/2 sm:pl-20">
          <h2 className="sub_heading font-bold  flex-1 gilray-font  ">
            Who are <span className="  text-[#219DD9] "> we? </span>
          </h2>
          <p className=" w-[90%]  sm:mt-5 main_hero_slogan ">
          We are a passionate team of experts who combine creativity, strategy, and technical proficiency to deliver impactful results for projects of every scale.
          </p>
        </div>

        <img
          src="/whoweare/play-button.png"
          alt="bgImage"
          className="w-12  md:w-24 d-none mx-auto md:d-block"
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
