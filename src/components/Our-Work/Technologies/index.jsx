"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const Technologies = ({ rightImage }) => {
  const param = useParams();
  const slug = param.slug;
  console.log(slug);
  const imageRef = useRef(null);
  const firstDivRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      firstDivRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: firstDivRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const technologies = [
    {
      title: "Figma",
      image: "/technologies/Figma.png",
      visible: ["Mr-app","word-smith-ai","caption-gen","doctor-booking-app","saloon-app","faoolun-website","solwave-website","instant-save-app","eshop-app","food-inventory-app","al-abour-app","legal-wise-web","laam-web","clixpos-website"],
    },
    {
      title: "Illustrator",
      image: "/technologies/Illustrator.png",
      visible: ["instant-save-app","Mr-app","word-smith-ai","caption-gen","doctor-booking-app","laam-web","saloon-app","faoolun-website","solwave-website","eshop-app","food-inventory-app","al-abour-app","legal-wise-web","clixpos-website"],
    },
    {
      title: "Flutter",
      image: "/technologies/flutter.png",
      visible: ["Mr-app","word-smith-ai","eshop-app","food-inventory-app","caption-gen","doctor-booking-app","saloon-app","instant-save-app","al-abour-app"],
    },
    {
      title: "javaScript",
      image: "/technologies/js.png",
      visible: ["Mr-app" ,"doctor-booking-app","al-abour-app","instant-save-app","food-inventory-app"],
    },
    {
      title: "PHP",
      image: "/technologies/php.png",
      visible: ["caption-gen","food-inventory-app","clixpos-website"],
    },
    {
      title: ".Net",
      image: "/technologies/net.png",
      visible: ["word-smith-ai","saloon-app","eshop-app","solwave-website","laam-web"],
    },
    {
      title: "React",
      image: "/technologies/react.png",
      visible: ["Mr-app","legal-wise-web","doctor-booking-app","faoolun-website","al-abour-app","instant-save-app"],
    },
    {
      title: "Next.js",
      image: "/technologies/next.png",
      visible: ["word-smith-ai","saloon-app","legal-wise-web","faoolun-website","clixpos-website","eshop-app","laam-web" ,"solwave-website"],
    },
    {
      title: "SQL",
      image: "/technologies/sql.png",
      visible: ["word-smith-ai","saloon-app","eshop-app"],
    },
    {
      title: "Python",
      image: "/technologies/py.png",
      visible: ["Mr-app","doctor-booking-app","food-inventory-app","al-abour-app","instant-save-app"],
    },
    {
      title: "Indesign",
      image: "/technologies/Indesign.png",
      visible: [],
    },
    {
      visible: [],
      title: "Sketch",
      image: "/technologies/Sketch.png",
    },
    {
      title: "CSS",
      image: "/technologies/css.png",
      visible: ["caption-gen","faoolun-website","solwave-website","legal-wise-web","laam-web","clixpos-website"],
    },
    {
      title: "HTML",
      image: "/technologies/html.png",
      visible: ["caption-gen","laam-web","faoolun-website","solwave-website","legal-wise-web","clixpos-website"],
    },
    {
      visible: [],
      title: "XD",
      image: "/technologies/XD.png",
    },
    {
      visible: [],
      title: "Photoshop",
      image: "/technologies/Photoshop.png",
    },
  ];

  return (
    <div className="bg-[#010B17] overflow-hidden text-white py-20">
      <div className="container flex flex-col md:flex-row justify-between gap-6">
        <div ref={firstDivRef} className="first-div">
          <h1 className="gilray-font sub_heading">
            Technologies
            <span className="text-[#229dd9]"> We Used</span>
          </h1>
          {/* <p className="w-full  main_hero_slogan my-5">
            Our iOS app development services are powered by a cutting-edge tech
            stack, ensuring exceptional performance and user experiences.
          </p> */}

          <div className="grid grid-cols-2 md:grid-cols-3 pt-4">
            {technologies
              .filter((tech) => !tech.visible || tech.visible.includes(slug))
              .map((tech, index) => (
                <div
                  key={index}
                  className={`flex flex-col border border-[#343c45] py-5 items-center gap-4 ${
                    index === 0 ? "rounded-tl-xl" : ""
                  }${
                    index === 2 ? "rounded-tr-xl" : ""
                  }${
                    index === 3 ? "rounded-bl-xl" : ""
                  }${
                    index === 5 ? "rounded-br-xl" : ""
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
          ref={imageRef}
          src={rightImage}
          alt="image"
          className="h-[400px] md:h-[500px] w-full md:w-1/2 object-contain"
        />
      </div>
    </div>
  );
};

export default Technologies;
