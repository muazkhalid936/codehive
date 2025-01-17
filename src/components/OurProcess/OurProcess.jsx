"use client";
import { useEffect } from "react";
import "./In.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";

const StackingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".new-cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2000",
        scrub: 1,
      },
    });

    // Card 1 and Text 1 animation
    timeline.fromTo(
      ".new-card-1",
      { xPercent: 60, yPercent: 60, rotate: -90 },
      { xPercent: 0, yPercent: 0, rotate: 0 },
      "start"
    );
    // timeline.fromTo(
    //   ".new-text-1",
    //   { opacity: 0, y: 50 },
    //   { opacity: 1, y: 0, duration: 0.5 },
    //   "start"
    // );
    timeline.fromTo(".first-container", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "start");
    timeline.to(
      ".new-icon1",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "start"
    );    // Transition to Card 2 and Text 2
    timeline.to(
      ".new-card-1",
      { xPercent: 60, yPercent: -60, rotate: 90 },
      "new-card2"
    );
    timeline.to(
      ".new-text-1",
      { opacity: 0, y: -50, duration: 0.5 },
      "new-card2"
    );
    timeline.fromTo(
      ".new-card-2",
      { xPercent: 60, yPercent: 60, rotate: -90 },
      { xPercent: 0, yPercent: 0, rotate: 0 },
      "new-card2"
    );
    timeline.fromTo(
      ".new-text-2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 },
      "new-card2"
    );
    timeline.to(".new-icon2", { backgroundColor: "grey", duration: 0.3 }, "new-card2");
    timeline.to(".new-icon1", { backgroundColor: "black", duration: 0.3 }, "new-card2");
    timeline.to(".new-icon3", { backgroundColor: "grey", duration: 0.3 }, "new-card3");
    timeline.to(".new-icon2", { backgroundColor: "black", duration: 0.3 }, "new-card3");
    timeline.to(".new-icon4", { backgroundColor: "grey", duration: 0.3 }, "new-card4");
    timeline.to(".new-icon3", { backgroundColor: "black", duration: 0.3 }, "new-card4");

    // Transition to Card 3 and Text 3
    timeline.to(
      ".new-card-2",
      { xPercent: 60, yPercent: -60, rotate: 90 },
      "new-card3"
    );
    timeline.to(
      ".new-text-2",
      { opacity: 0, y: -50, duration: 0.5 },
      "new-card3"
    );
    timeline.fromTo(
      ".new-card-3",
      { xPercent: 60, yPercent: 60, rotate: -90 },
      { xPercent: 0, yPercent: 0, rotate: 0 },
      "new-card3"
    );
    timeline.fromTo(
      ".new-text-3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 },
      "new-card3"
    );

    // Transition to Card 4 and Text 4
    timeline.to(
      ".new-card-3",
      { xPercent: 60, yPercent: -60, rotate: 90 },
      "new-card4"
    );
    timeline.to(
      ".new-text-3",
      { opacity: 0, y: -50, duration: 0.5 },
      "new-card4"
    );
    timeline.fromTo(
      ".new-card-4",
      { xPercent: 60, yPercent: 60, rotate: -90 },
      { xPercent: 0, yPercent: 0, rotate: 0 },
      "new-card4"
    );
    timeline.fromTo(
      ".new-text-4",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 },
      "new-card4"
    );
  }, []);


  return (
    <div className="bg-[#000B17] container  mx-auto ">
      <div className="new-cards h-[50vh]  items-center md:h-[100vh] mx-auto">
        <div className="flex w-1/2 flex-col gap-5 first-container ">
          {" "}
          <div className="new-icon-container gap-5">
            <FaReact className="new-icon new-icon1 new-border-active" />
            <FaNodeJs className="new-icon new-icon2" />
            <FaPython className="new-icon new-icon3" />
            <FaJava className="new-icon new-icon4" />
          </div>
          <div className="new-text-section mt-28 text-white">
            <div className="new-text flex main_hero_slogan flex-col gap-4 new-text-1">
              <span className="font-bold text-[50px] main-heading   bg-gradient-to-br from-white leading-none to-blueColor bg-clip-text text-transparent">
                Project <br /> Vision
              </span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>

            <div className="new-text flex flex-col main_hero_slogan gap-4 new-text-2">
              <span className="font-bold text-[50px] main-heading   bg-gradient-to-br from-white leading-none  to-blueColor bg-clip-text text-transparent">
                Innovative <br /> Solutions
              </span>
              Delivering tailored solutions that harness the power of innovation
              and emerging technologies to meet your business needs and drive
              growth.
            </div>

            <div className="new-text flex flex-col gap-4 main_hero_slogan new-text-3">
              <span className="font-bold leading-none text-[50px] main-heading     bg-gradient-to-br from-white  to-blueColor  bg-clip-text text-transparent">
                Future <br /> Ready
              </span>
              Empowering organizations to stay ahead of the curve with scalable,
              secure, and sustainable technological advancements.
            </div>

            <div className="new-text flex flex-col gap-4 main_hero_slogan new-text-4">
              <span className="font-bold text-[50px] leading-none main-heading   bg-gradient-to-br from-white  to-blueColor  bg-clip-text text-transparent">
                Global <br /> Impact
              </span>
              Collaborating with industries worldwide to create meaningful and
              impactful digital solutions that transform lives.
            </div>
          </div>
        </div>

        <div className=" flex w-1/2">
          <div className="new-card ss new-card-1">
            <div className="our-process-main-pic">
              <img
                src="/process/1.jpg"
                className="rounded-2xl  h-[100%] w-[100%]"
                alt="1"
              />
            </div>
          </div>
          <div className="new-card ss new-card-2">
            <div className="our-process-main-pic">
              <img
                src="/process/bg.jpg"
                className="rounded2xl h-[100%] w-[100%]"
                alt="1"
              />
            </div>
          </div>
          <div className="new-card ss new-card-3">
            <div className="our-process-main-pic ">
              <img
                src="/process/1.jpg"
                className="rounded-2xl h-[100%] w-[100%] "
                alt="1"
              />
            </div>
          </div>
          <div className="new-card ss new-card-4">
            <div className="our-process-main-pic ">
              <img
                src="/process/bg.jpg"
                className="rounded-2xl h-[100%] w-[100%] "
                alt="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
