"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const IndustryDetails = ({ panelData }) => {
  const [activePanel, setActivePanel] = useState(panelData[0]);

  return (
    <div className="bg-[#000B17] overflow-hidden text-white py-[55px] ">
      <div className="container mx-auto">
        <div className="bg-white rounded-full flex justify-center gap-5 py-4  px-5">
          {panelData.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel)}
              className={`py-3 main_hero_slogan rounded-full flex flex-1 items-center justify-center ${
                activePanel.id === panel.id
                  ? "bg-gradient-to-r from-[#219DD9] to-[#125784] text-white"
                  : "bg-[#e9e9e9] text-[#68747b]"
              }`}
            >
              {panel.title}
            </button>
          ))}
        </div>

        <div className="flex gap-10 mt-10">
          <motion.div
            className="flex flex-col w-[60%]"
            key={activePanel.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className=" gilray-font sub_heading ">
              {activePanel.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-blueColor">
                {activePanel.heading.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-5 main_hero_slogan">{activePanel.description}</p>

            <div className="flex ">
              <div className="mt-10 flex flex-col justify-between gap-6">
                {activePanel.features.map((feature, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    {/* <div className="w-[200px] rounded-full flex items-center justify-center"> */}
                    <img
                      src={feature.icon}
                      className="w-10 h-10 lg:w-14 lg:h-14 "
                      alt={feature.title}
                    />
                    {/* </div> */}
                    <div>
                      <h3 className="text-[17px] font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-[14px] text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex w-[40%]"
            key={activePanel.image}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={activePanel.image}
              alt={activePanel.title}
              className="object-cover h-[70vh] max-h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;
