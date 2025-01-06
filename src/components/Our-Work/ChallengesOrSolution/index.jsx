import React from 'react';

const ChallengesOrSolution = ({ title, image, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center container gap-6 py-[50px]">
      <img
        src={image}
        alt="image"
        className="h-[400px] md:h-[500px] w-full md:w-1/2 object-contain"
      />
      <div className="flex-col flex gap-4  w-full md:w-1/2">
        <h1 className="font-gilroy text-3xl md:text-5xl">{title}</h1>
        <p className="font-lato text-[#535D66] text-sm md:text-base font-[400] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChallengesOrSolution;
