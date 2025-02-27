import React from "react";
import { useTranslations } from "next-intl";
const ProjectOverview = ({ title, description }) => {
  const t=useTranslations("translation")
  return (
    <div className="bg-[#F4F4F4]">
      <div className="container py-[40px] sm:py-[50px]">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="gilray-font sub_heading">
            {t(title).split(" ")[0]}
            <span className="text-[#229dd9]"> {t(title).split(" ")[1]}</span>
          </h1>
          <p className="w-full md:w-[80%] main_hero_slogan font-lato text-[#535D66] ">
            {t(description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
