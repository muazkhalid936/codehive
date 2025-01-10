import { title } from "process";
import React from "react";

const Technologies = ({ rightImage }) => {
  const technologies = [
    {
      title: "Figma",
      image: "/technologies/Figma.png",
    },
    {
      title: "Illustrator",
      image: "/technologies/Illustrator.png",
    },
    {
      title: "Indesign",
      image: "/technologies/Indesign.png",
    },
    {
      title: "Sketch",
      image: "/technologies/Sketch.png",
    },
    {
      title: "XD",
      image: "/technologies/XD.png",
    },
    {
      title: "Photoshop",
      image: "/technologies/Photoshop.png",
    },
  ];

  return (
    <div className="bg-[#010B17] text-white py-20">
      <div className="container flex flex-col md:flex-row justify-center gap-6">
        <div>
          <h1 className="gilray-font sub_heading">
            Technologies
            <span className="text-[#229dd9]"> We Used</span>
          </h1>
          <p className="w-full  main_hero_slogan my-5">
            Our iOS app development services are powered by a cutting-edge tech
            stack, ensuring exceptional performance and user experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 pt-4 rounded-xl">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col border border-[#343c45] py-5 items-center gap-4 ${
                  index === 1 ? "rounded-tl-lg" : ""
                }`}
              >
                <img
                  src={tech.image}
                  alt="image"
                  className="w-20 h-20 object-contain"
                />
                <h1 className="text-lg ">{tech.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <img
          src={rightImage}
          alt="image"
          className="h-[400px] md:h-[500px] w-full md:w-1/2 object-contain"
        />
      </div>
    </div>
  );
};

export default Technologies;
