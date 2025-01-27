"use client";
import { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../../app/globals.css";
const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://cdn.lottielab.com/l/7rgZcdq4Lusops.json",
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      animation.destroy();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex lottie overflow-hidden justify-center items-center">
        <div ref={lottieContainerRef} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Preloader;
