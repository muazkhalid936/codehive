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

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".new-cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    timeline.addLabel("new-card1", "second-animation");

    timeline.from(".first-container", {
      opacity: 0,
      yPercent: 100,
    });
    timeline.to(
      ".first-container",
      {
        opacity: 1,
        yPercent: 0,
      },
      "new-card1"
    );

    // Card Animations
    timeline.from(
      ".new-card-1",
      {
        xPercent: 40,
        yPercent: 40,
        rotate: -90,
      },
      "new-card1"
    );
    timeline.to(".new-card-1", {
      yPercent: 0,
    });

    timeline.from(".new-card-2", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card2");

    timeline.to(
      ".new-card-1",
      {
        xPercent: 40,
        rotate: 90,
        yPercent: -40,
        duration: 0.5,
      },
      ".new-card-2-=0.4"
    );

    timeline.from(".new-card-3", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card3");

    timeline.to(
      ".new-card-2",
      {
        xPercent: 40,
        yPercent: -40,
        rotate: 90,
      },
      ".new-card-3-=0.4"
    );

    timeline.from(".new-card-4", {
      xPercent: 40,
      yPercent: 40,
      rotate: -90,
    });
    timeline.addLabel("new-card4");

    timeline.to(
      ".new-card-3",
      {
        xPercent: 40,
        yPercent: -40,
        rotate: 90,
      },
      ".new-card-4-=0.5"
    );

    // Text animations with icon border effect
    timeline.from(
      ".new-text-1",
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      },
      "new-card1"
    );

    timeline.to(
      ".new-icon1",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card1"
    );

    timeline.to(
      ".new-icon1",
      { backgroundColor: "transparent", duration: 0.3 },
      "new-card2-=0.5"
    );

    timeline.to(
      ".new-icon2",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card2-=0.5"
    );

    timeline.to(
      ".new-icon3",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card3-=0.5"
    );

    timeline.to(
      ".new-icon4",
      {
        backgroundColor: "grey",
        duration: 0.3,
      },
      "new-card4-=0.5"
    );

    timeline.to(
      ".new-icon3",
      {
        backgroundColor: "transparent",
        duration: 0.3,
      },
      "new-card4-=0.5"
    );

    timeline.to(
      ".new-icon2",
      {
        backgroundColor: "transparent",
        duration: 0.3,
      },
      "new-card3-=0.5"
    );

    timeline.to(
      ".new-text-1",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card2-=0.5"
    );

    timeline.from(
      ".new-text-2",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card2-=0.3"
    );

    timeline.to(
      ".new-text-2",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card3-=0.5"
    );

    timeline.from(
      ".new-text-3",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card3-=0.3"
    );

    timeline.to(
      ".new-text-3",
      {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card4-=0.5"
    );

    timeline.from(
      ".new-text-4",
      {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
      },
      "new-card4-=0.3"
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
          <div className="new-text-section mt-32 text-white">
            <div className="new-text flex main_hero_slogan flex-col gap-4 new-text-1">
              <span className="font-bold text-[20px] main-heading sm:text-3xl md:text-5xl xl:text-6xl  bg-gradient-to-br from-white  to-blueColor bg-clip-text text-transparent">
                Project <br /> Vision
              </span>
              We provide bespoke software solutions powered by cutting-edge
              technologies like AI, blockchain, and cloud computing. Our team
              ensures every application is scalable.
            </div>

            <div className="new-text flex flex-col main_hero_slogan gap-4 new-text-2">
              <span className="font-bold text-[20px] main-heading sm:text-3xl md:text-5xl xl:text-6xl  bg-gradient-to-br from-white  to-blueColor bg-clip-text text-transparent">
                Innovative <br /> Solutions
              </span>
              Delivering tailored solutions that harness the power of innovation
              and emerging technologies to meet your business needs and drive
              growth.
            </div>

            <div className="new-text flex flex-col gap-4 main_hero_slogan new-text-3">
              <span className="font-bold text-[20px] main-heading sm:text-3xl md:text-5xl xl:text-6xl  bg-gradient-to-br from-white  to-blueColor  bg-clip-text text-transparent">
                Future <br /> Ready
              </span>
              Empowering organizations to stay ahead of the curve with scalable,
              secure, and sustainable technological advancements.
            </div>

            <div className="new-text flex flex-col gap-4 main_hero_slogan new-text-4">
              <span className="font-bold text-[20px] main-heading sm:text-3xl md:text-5xl xl:text-6xl  bg-gradient-to-br from-white  to-blueColor  bg-clip-text text-transparent">
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
