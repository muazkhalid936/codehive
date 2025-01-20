"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const ScrollAnimation = () => {
  const animationContainer = useRef(null);
  const isIntersecting = useRef(false);

  useEffect(() => {
    let animationInstance;

    if (animationContainer.current) {
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://cdn.lottielab.com/l/D5rXUhuuYwzFM7.json",
      });
    }

    const handleScroll = () => {
      if (!animationInstance || !isIntersecting.current) return;

      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight * 2;
      const progress = Math.min(
        (scrollPosition - window.innerHeight) / maxScroll,
        1
      );

      const totalFrames = animationInstance.totalFrames;
      animationInstance.goToAndStop(progress * totalFrames, true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.current = entry.isIntersecting;
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (animationContainer.current) {
      observer.observe(animationContainer.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationContainer.current) {
        observer.unobserve(animationContainer.current);
      }
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="h-screen">a</div>
      <div className="h-screen">a</div>
      <div
        style={{
          height: "600vh",
          padding: "50px",
          display: "flex",
          backgroundColor: "#000B17",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "5vh",
            height: "70vh",
            width: "600px",
          }}
          className="lottie"
          ref={animationContainer}
        />
      </div>
      <div className="h-screen">a</div>
    </div>
  );
};

export default ScrollAnimation;
