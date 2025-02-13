"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const ChallengesOrSolution = ({ title, image, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.to(imgRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(textRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    } else {
      gsap.to(imgRef.current, {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(textRef.current, {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col  overflow-hidden md:flex-row items-center justify-center container sm:gap-6 py-[50px]"
    >
      <img
        ref={imgRef}
        src={image}
        alt="image"
        className="h-[400px] md:h-[500px] w-full md:w-1/2 object-contain"
        style={{ transform: "translateX(-200px)", opacity: 0 }}
      />
      <div
        ref={textRef}
        className="flex-col flex gap-4 w-full md:w-1/2"
        style={{ transform: "translateX(200px)", opacity: 0 }}
      >
        <h1 className="gilray-font text-center sm:text-start sub_heading">{title}</h1>
        <p className="font-lato text-center sm:text-start text-[#535D66] main_hero_slogan ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChallengesOrSolution;
