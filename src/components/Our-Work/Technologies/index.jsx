"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
import useStore from "../../../store/useUserStore";
import { useTranslations } from "next-intl";
const Technologies = ({ rightImage }) => {
  const {language}  = useStore();
  const t = useTranslations("translation");
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
      visible: [
        "Mr-app",
        "word-smith-ai",
        "caption-gen",
        "doctor-booking-app",
        "saloon-app",
        "faoolun-website",
        "solwave-website",
        "instant-save-app",
        "eshop-app",
        "food-inventory-app",
        "al-abour-app",
        "legal-wise-web",
        "laam-web",
        "clixpos-website",
      ],
    },
    {
      title: "Illustrator",
      image: "/technologies/Illustrator.png",
      visible: [
        "instant-save-app",
        "Mr-app",
        "word-smith-ai",
        "caption-gen",
        "doctor-booking-app",
        "laam-web",
        "saloon-app",
        "faoolun-website",
        "solwave-website",
        "eshop-app",
        "food-inventory-app",
        "al-abour-app",
        "legal-wise-web",
        "clixpos-website",
      ],
    },
    {
      title: "Flutter",
      image: "/technologies/flutter.png",
      visible: [
        "Mr-app",
        "word-smith-ai",
        "eshop-app",
        "food-inventory-app",
        "caption-gen",
        "doctor-booking-app",
        "saloon-app",
        "instant-save-app",
        "al-abour-app",
      ],
    },
    {
      title: "JavaScript",
      image: "/technologies/js.png",
      visible: [
        "Mr-app",
        "doctor-booking-app",
        "al-abour-app",
        "instant-save-app",
        "food-inventory-app",
      ],
    },
    {
      title: "PHP",
      image: "/technologies/php.png",
      visible: ["caption-gen", "food-inventory-app", "clixpos-website"],
    },
    {
      title: ".Net",
      image: "/technologies/net.png",
      visible: [
        "word-smith-ai",
        "saloon-app",
        "eshop-app",
        "solwave-website",
        "laam-web",
      ],
    },
    {
      title: "React",
      image: "/technologies/react.png",
      visible: [
        "Mr-app",
        "legal-wise-web",
        "doctor-booking-app",
        "faoolun-website",
        "al-abour-app",
        "instant-save-app",
      ],
    },
    {
      title: "Next.js",
      image: "/technologies/next.png",
      visible: [
        "word-smith-ai",
        "saloon-app",
        "legal-wise-web",
        "faoolun-website",
        "clixpos-website",
        "eshop-app",
        "laam-web",
        "solwave-website",
      ],
    },
    {
      title: "SQL",
      image: "/technologies/sql.png",
      visible: ["word-smith-ai", "saloon-app", "eshop-app"],
    },
    {
      title: "Python",
      image: "/technologies/py.png",
      visible: [
        "Mr-app",
        "doctor-booking-app",
        "food-inventory-app",
        "al-abour-app",
        "instant-save-app",
      ],
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
      visible: [
        "caption-gen",
        "faoolun-website",
        "solwave-website",
        "legal-wise-web",
        "laam-web",
        "clixpos-website",
      ],
    },
    {
      title: "HTML",
      image: "/technologies/html.png",
      visible: [
        "caption-gen",
        "laam-web",
        "faoolun-website",
        "solwave-website",
        "legal-wise-web",
        "clixpos-website",
      ],
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
  const title = t("technologi");
  const segmenter = new Intl.Segmenter("ar", { granularity: "word" });
  const words = Array.from(segmenter.segment(title)).map((seg) => seg.segment);

  return (
    <div className="bg-[#010B17]  sm:h-[600px] relative overflow-hidden text-white py-[40px] sm:py-10">
      <div className=" flex  container flex-col md:flex-row gap-10 sm:gap-5 justify-between"
      dir={language==="ar"?"rtl":"ltr"}
      >
        <div
          ref={firstDivRef}
          className="first-div justify-center gap-5 sm:gap-10 items-center flex flex-col md:w-[43%] "
        >
          <p className="gilray-font leading-none text-[#229dd9] text-center  sm:text-start  sub_heading">
            {words.map((word, index) => (
              <span
                key={index}
                className={`${index === 0 ? "text-blueColor" : "text-white"}`}
              >
                {word}{" "}
              </span>
            ))}
          </p>

          <div className="grid  w-full grid-cols-3 "
          dir="ltr"
          >
            {technologies
              .filter((tech) => !tech.visible || tech.visible.includes(slug))
              .map((tech, index) => (
                <div
                  key={index}
                  className={`flex flex-col border border-[#343c45] py-5 items-center gap-4 ${
                    index === 0 ? "rounded-tl-[40px]" : ""
                  }${index === 2 ? "rounded-tr-[40px]" : ""}${
                    index === 3 ? "rounded-bl-[40px]" : ""
                  }${index === 5 ? "rounded-br-[40px]" : ""}`}
                >
                  <img
                    src={tech.image}
                    alt="image"
                    className="sm:w-16 w-10 h-10 sm:h-16  object-contain"
                  />
                  <h1 className="text-lg font-lato ">{tech.title}</h1>
                </div>
              ))}
          </div>
        </div>
        <div className="h-[300px] hidden  z-[2] md:h-[500px] w-full md:w-[57%] md:flex justify-center items-center">
          <img
            ref={imageRef}
            src={rightImage}
            alt="image"
            className="object-contain md:h-[500px]"
          />
        </div>
      </div>
      <img
        src="/technologies/shade.png"
        alt="image"
        className="absolute z-[1]  sm:bottom-[-700px] bottom-[-150px] right-[-50vw] sm:right-[-40vw]"
        // className="h-[400px] md:h-[500px] w-full md:w-[60%] object-contain"
      />
    </div>
  );
};

export default Technologies;
