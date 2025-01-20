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
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(
        (scrollPosition / maxScroll) * 5, // Adjusted to start animation immediately
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
    <div className="">
      <div className="fix-div sm:mt-[150px]   2xl:mt-[200px] flex justify-center">
        <div className="lottie   sm:w-[400px] 2xl:w-[500px] " ref={animationContainer} />
      </div>
      {/* <div className="h-screen">a</div> */}
    </div>
  );
};

export default ScrollAnimation;
