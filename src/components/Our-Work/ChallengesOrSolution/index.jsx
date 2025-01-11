"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChallengesOrSolution = ({ title, image, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center container gap-6 py-[50px]"
    >
      <motion.img
        src={image}
        alt="image"
        className="h-[400px] md:h-[500px] w-full md:w-1/2 object-contain"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      />
      <motion.div
        className="flex-col flex gap-4 w-full md:w-1/2"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <h1 className="gilray-font sub_heading">{title}</h1>
        <p className="font-lato text-[#535D66] main_hero_slogan ">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default ChallengesOrSolution;
