"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import useStore from "../store/useUserStore";
const IndustryDetails = ({ panelData }) => {
  const t = useTranslations("translation");
  if (!panelData || panelData.length === 0) {
    return null;
  }
  const { language } = useStore();

  const [activePanel, setActivePanel] = useState(panelData[0]);
  const xVar = language === "ar" ? -100 : 100;
  // const xVar2 = language === "ar" ? 100 : -100;


  const segmenter = new Intl.Segmenter(language, { granularity: "word" });
  const words = Array.from(segmenter.segment(t(activePanel.heading))).map((seg) => seg.segment);
  
  return (
    <div className="bg-[#000B17] overflow-hidden text-white py-[40px] sm:py-[55px]">
      <div
        className="container relative mx-auto"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="bg-white rounded-full no-scrollbar overflow-x-auto sm:overflow-x-hidden flex gap-5 py-4 px-5 whitespace-nowrap scrollbar-hide">
          {panelData.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel)}
              className={`py-3 main_hero_slogan rounded-full flex flex-1 px-4 items-center justify-center ${
                activePanel.id === panel.id
                  ? "bg-gradient-to-r from-[#219DD9] to-[#125784] text-white"
                  : "bg-[#e9e9e9] text-[#68747b]"
              }`}
            >
              {t(panel.title)}
            </button>
          ))}
        </div>
        <motion.div
          // className="flex flex-col sm:w-[60%]"
          key={activePanel.id}
          initial={{ opacity: 0, x: -xVar }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        
<h1 className="gilray-font mt-5 sm:mt-10 sub_heading">
  {activePanel.blueTitle ? (
    <>
      {words.slice(0, -2).join(" ")}
      <span className="text-blueColor ml-2">{words.slice(-2).join(" ")}</span>
    </>
  ) : (
    <>
      {words.slice(0, -1).join(" ")}
      <span className="text-blueColor ml-2">{words.slice(-1).join(" ")}</span>
    </>
  )}
</h1>


        </motion.div>
        <div className="flex  sm:mt-5">
          <motion.div
            className="flex flex-col sm:w-[60%]"
            key={activePanel.id}
            initial={{ opacity: 0, x: -xVar }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className=" main_hero_slogan mt-2 sm:mt-0">{t(activePanel.description)}</p>

            <div className="flex">
              <div className="mt-5 sm:mt-10 flex flex-col justify-between gap-3 sm:gap-6">
                {activePanel.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 sm:gap-5 items-start">
                    <img
                      src={feature.icon}
                      className="w-10 h-10 lg:w-14 lg:h-14"
                      alt={feature.title}
                    />
                    <div>
                      <h3 className="text-[14px] sm:text-[17px] font-semibold">
                        {t(feature.title)}
                      </h3>
                      <p className="text-[10px] sm:text-[14px] text-gray-300">
                        {t(feature.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hidden items-start justify-end sm:flex  sm:w-[40%] "
            key={activePanel.image}
            initial={{ opacity: 0, x: xVar }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={activePanel.image}
              alt={activePanel.title}
              className="object-contain max-h-[450px] "
            />
          </motion.div>
          <img
            src="/technologies/shade.png"
            alt="image"
            className="absolute top-[-300px] -z-10 right-[-25vw] "
            // className="h-[400px] md:h-[500px] w-full md:w-[60%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryDetails;
