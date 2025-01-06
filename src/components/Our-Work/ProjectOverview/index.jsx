import React from 'react';

const ProjectOverview = ({ title, description }) => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="continer py-[50px]">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="font-gilroy text-3xl md:text-5xl">
            {title.split(' ')[0]}
            <span className="text-[#229dd9]"> {title.split(' ')[1]}</span>
          </h1>
          <p className="w-full md:w-[70%] font-lato text-[#535D66] text-sm md:text-base font-[400]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
