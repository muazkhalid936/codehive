"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { FiArrowUpRight } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = containerRef.current.querySelectorAll(".section");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
        toggleActions: "play none none none",
      },
    });

    sections.forEach((section, index) => {
      const heading = section.querySelector(".heading");
      const image = section.querySelector(".image");

      if (index === 0) {
        // Animate the first section's heading and image from off-screen
        tl.fromTo(
          heading,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          0 // Start at the beginning of the timeline
        ).fromTo(
          image,
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          0 // Start at the beginning of the timeline
        );
      } else {
        if (index > 0) {
          // Animate outgoing elements of the previous section
          tl.to(
            sections[index - 1].querySelector(".heading"),
            { x: -50, opacity: 0, duration: 0.5 },
            index
          ).to(
            sections[index - 1].querySelector(".image"),
            { x: 0, opacity: 0, duration: 0.5 },
            index
          );

          // Animate incoming elements of the current section
          tl.fromTo(
            heading,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            index + 0.5
          ).fromTo(
            image,
            { x: 0, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            index + 0.5
          );
        }
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const data = [
    {
      title: "Car Wash",
      des1: "Transform your vehicle with state-of-the-art car wash techniques that clean every corner thoroughly. Our team uses advanced equipment to ensure even the toughest grime is removed.",
      des2: "Eco-friendly solutions protect your car’s paint while delivering a brilliant shine. ",
      des3: "Experience professional care that preserves the quality of your vehicle’s finish, ensuring longevity. Enjoy the satisfaction of driving a spotless and polished car every day.",
      des4: "From exterior cleaning to interior detailing, we provide a comprehensive service that stands out. Let us bring your car back to life with unmatched quality and care.",
      image: "/Industry/1.png",
    },
    {
      title: "Delivery",
      des1: "Experience reliable logistics with delivery services designed to handle your parcels with care. Whether it's urgent documents or large packages, we’ve got you covered.",
      des2: "Our network ensures timely deliveries while maintaining high standards of security and tracking. ",
      des3: "From personal packages to business consignments, we focus on precision and punctuality. ",
      des4: "With seamless processes and excellent customer support, your delivery experience will be stress-free. Count on us for all your logistics and shipping needs.",
      image: "/Industry/2.png",
    },
    {
      title: "Health Care",
      des1: "Discover innovative healthcare services that prioritize your well-being and long-term health. ",
      des2: "From preventive care to advanced diagnostics, our comprehensive services cater to all your needs. Tailored treatment plans ensure that every patient gets the attention they deserve.",
      des3: "Our team is committed to helping you achieve a healthier lifestyle and manage chronic conditions effectively. ",
      des4: "Trust us to provide the tools and knowledge necessary for better health outcomes. Together, we work towards a happier, healthier you.",
      image: "/Industry/3.png",
    },
    // Additional sections can be uncommented as needed
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen main22 overflow-hidden"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="section absolute flex flex-row-reverse items-center justify-between gap-8 w-full px-16"
        >
          {/* Left Section: Title and Descriptions */}
          <div className="w-1/2 heading">
            <h2 className="font-bold bg-gradient-to-r from-white via-blueColor to-blueColor bg-clip-text text-transparent main-heading text-[20px]  sm:text-3xl md:text-5xl xl:text-6xl ">
              {item.title}
            </h2>
            <p className="mt-4   main_hero_slogan  text-gray-500">
              {item.des1}
            </p>
            <p className="mt-4   main_hero_slogan  text-gray-500">
              {item.des2}
            </p>
            <p className="mt-4  main_hero_slogan  text-gray-500">{item.des3}</p>
            <p className="mt-4  main_hero_slogan text-gray-500">{item.des4}</p>

            <div className=" flex justify-start items-center  gap-3">
              <button className=" mt-2  xl:text-xl text-white ">
                Contact Us
              </button>
              <div className=" bg-white text-black mt-2 2xl:mt-4 rounded-full ">
                <FiArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Right Section: Image */}
          <div className="w-1/2">
            <img
              src={item.image}
              alt={`${item.title} image`}
              className="image w-1/4 xl:h-[400px] 2xl:h-[500px] iphone-image 2xl:w-1/3   mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
