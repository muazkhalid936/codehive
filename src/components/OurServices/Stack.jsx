"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import StackCard from "./StackCard";

const StackingImages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.set(".card-1", {
      opacity: 0.5,
      yPercent: 70,
      scale: 1,
    });

    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=2000",
        scrub: 2, // Increased scrub value for slower animations
      },
    });

    timeln.addLabel("card1");
    timeln.to(".card-1", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5, // Slower duration
    });

    timeln.from(".card-2", {
      yPercent: 70,
      // opacity: 0,
      duration: 1.5, // Slower duration
    });
    timeln.addLabel("card2");

    timeln.to(
      ".card-1",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.5,
        duration: 1, // Adjust duration for a smooth transition
      },
      "-=0.5" // Slight overlap
    );

    timeln.to(".card-2", {
      yPercent: 0,
      opacity: 1,
      delay: 1, // Slight delay for a smooth transition
      duration: 2, // Slower duration
    });

    timeln.from(".card-3", {
      yPercent: 70,
      // opacity: 0,
      duration: 1.5, // Slower duration
    });
    timeln.addLabel("card3");

    timeln.to(
      ".card-2",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 1,
      },
      "-=0.5" // Slight overlap
    );

    timeln.to(".card-3", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
    });

    timeln.from(".card-4", {
      yPercent: 70,
      // opacity: 0,
      duration: 1.5,
    });
    timeln.addLabel("card4");

    timeln.to(
      ".card-3",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 1,
      },
      "-=0.5"
    );

    timeln.to(".card-4", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="container  mx-auto flex flex-col gap-10">
      <div className="cards h-[100vh] container mx-auto">
        <div className="card card-1">
          <StackCard
            bg="/services/bg-consult.png"
            type="AI"
            num="01"
            heading="AI & Data Analysis"
            para="Custom built mobile apps for Android and iOS, tailored to your needs."
          />
        </div>
        <div className="card card-2">
          <StackCard
            bg="/services/bg-consult.png"
            type="Consulting"
            num="02"
            heading="Consultation"
            para="Codehive has more than two decades of expertise in the world of experience design, software engineering and cloud technologies."
          />
        </div>
        <div className="card card-3">
          <StackCard
            para="Custom built mobile apps for Android and iOS, tailored to your needs."
            bg="/services/bg-consult.png"
            type="Digital"
            num="03"
            heading="Digital Transformation"
          />
        </div>
        <div className="card card-4">
          <StackCard
            bg="/services/bg-consult.png"
            type="Web"
            heading="Web Development"
            para="Codehive has more than two decades of expertise in the world of experience design, software engineering and cloud technologies."
            num="04"
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
