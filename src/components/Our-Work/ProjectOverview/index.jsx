import React from "react";

const ProjectOverview = ({ title, description }) => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="container py-[50px]">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="gilray-font sub_heading">
            {title.split(" ")[0]}
            <span className="text-[#229dd9]"> {title.split(" ")[1]}</span>
          </h1>
          <p className="w-full md:w-[70%] main_hero_slogan font-lato text-[#535D66] ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
