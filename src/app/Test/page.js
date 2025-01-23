"use client";
import React, { useState, useRef } from "react";

export default function VideoWithOverlay() {
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
    <div className="relative">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="container h-[200px] sm:min-h-[350px] md:max-h-[450px] bg-blue-200 sm:h-[50vh] rounded-lg"
        onPlay={() => setIsPlaying(true)} // Update state when video starts playing
        onPause={() => setIsPlaying(false)} // Update state when video pauses
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Container */}
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
            zIndex: 1,
          }}
        >
          {/* Centered Content Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Who are <span className="text-[#219DD9]">we?</span>
            </h2>
            <p className="mt-4 text-gray-600 text-center">
              Code Hive is driven by dynamism, client focus, and technological
              strength. Since inception, it has been dedicated to building
              cutting-edge iOS and Android applications, helping emerging
              businesses bring products to market efficiently, even with tight
              time and budget constraints.
            </p>
          </div>
        </div>
      )}

      {/* Custom Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 2, // Ensure the button is above the overlay
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
