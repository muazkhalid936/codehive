"use client";
import React, { useState } from "react";


const IndustryDetails = ({ panelData }) => {
  const [activePanel, setActivePanel] = useState(panelData[0]);

  return (
    <div className="bg-[#000B17] text-white py-[55px] ">
      <div className="container mx-auto">
        <div className="bg-white rounded-full flex justify-center gap-5 py-4  px-5">
          {panelData.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel)}
              className={`py-3 main_hero_slogan rounded-full flex flex-1 items-center justify-center ${activePanel.id === panel.id
                ? "bg-gradient-to-r from-[#219DD9] to-[#125784] text-white"
                : "bg-[#e9e9e9] text-[#68747b]"
                }`}
            >
              {panel.title}
            </button>
          ))}
        </div>

        <div className="flex gap-10 mt-10">
          <div className="flex flex-col w-[60%]">
            <h1 className="text-[20px] header sm:text-3xl md:text-5xl main-heading">
              {activePanel.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-blueColor">
                {activePanel.heading.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-5 text-lg">{activePanel.description}</p>

            <div className="flex ">
              <div className="mt-10 flex flex-col justify-between gap-6">
                {activePanel.features.map((feature, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    {/* <div className="w-[200px] rounded-full flex items-center justify-center"> */}
                    <img src={feature.icon} className="lg:w-10 lg:h-10 2xl:w-16 2xl:h-16" alt={feature.title} />
                    {/* </div> */}
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="lg:text-[15px] text-[#FBFBFB]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-[40%] ">
            <img
              src={activePanel.image}
              alt={activePanel.title}
              className="object-cover h-[70vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;
