"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import useStore from "../../store/useUserStore";
const ScrollAnimation = () => {
  const {language} =useStore();
  let num;
  if(language==="en"){
    num=5.5
  }else {
    num=5.9
  }
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
        path: "https://cdn.lottielab.com/l/EviQ3SC6woQfdv.json",
      });
    }

    const handleScroll = () => {
      if (!animationInstance || !isIntersecting.current) return;

      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(
        (scrollPosition / maxScroll) *num, // Adjusted to start animation immediately
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
    <div className=" ">
      <div className="fix-div     flex justify-center">
        <div
          className="lottie   sm:w-[450px] h-[300px]  2xl:w-[500px] "
          ref={animationContainer}
        />
      </div>
      {/* <div className="h-screen">a</div> */}
    </div>
  );
};

export default ScrollAnimation;
