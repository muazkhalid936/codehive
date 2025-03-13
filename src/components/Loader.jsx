"use client";
import { useEffect, useState } from "react";
import useVideoStore from "../store/useVideoStore";

export default function Loader({ children }) {
  const { isVideoLoading, setIsVideoLoading } = useVideoStore();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!isVideoLoading) {
      // const timer = setTimeout(() => {
        setShowLoader(false);
      // }, 500); // Smooth transition after video loads

      return () => clearTimeout(timer);
    }
  }, [isVideoLoading]);

  if (showLoader) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <video autoPlay loop muted style={{ height: "50vh" }}>
          <source src="/loaderVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return <>{children}</>;
}
