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
        end: "+=3000", // Increased end value to accommodate more cards
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

    timeln.to(
      ".card-2",
      {
        yPercent: 0,
        opacity: 1,
        delay: 1, // Slight delay for a smooth transition
        duration: 1, // Slower duration
      },
      "-=0.5"
    );

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

    // Adding animations for card-5
    timeln.from(".card-5", {
      yPercent: 70,
      duration: 1.5,
    });
    timeln.addLabel("card5");

    timeln.to(
      ".card-4",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 1,
      },
      "-=0.5"
    );

    timeln.to(".card-5", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
    });

    // Adding animations for card-6
    timeln.from(".card-6", {
      yPercent: 70,
      duration: 1.5,
    });
    timeln.addLabel("card6");

    timeln.to(
      ".card-5",
      {
        scale: 0.98,
        yPercent: -10,
        opacity: 0.6,
        duration: 1,
      },
      "-=0.5"
    );

    timeln.to(".card-6", {
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
            heading="Mobile App Development"
            para="Custom built mobile apps for Android and iOS, tailored to your needs."
          />
        </div>
        <div className="card card-2">
          <StackCard
            bg="/services/bg-consult.png"
            type="Consulting"
            num="02"
            heading="Website Development"
            para="At Code Hive, we deliver cutting-edge web app development services, creating customized applications to help businesses succeed in the digital landscape."
          />
        </div>
        <div className="card card-3">
          <StackCard
            para="At Code Hive, we deliver tailored software solutions that align with your business needs, helping you streamline operations, improve efficiency, and drive innovation."
            bg="/services/bg-consult.png"
            type="Digital"
            num="03"
            heading="Customized Software Development"
          />
        </div>
        <div className="card card-4">
          <StackCard
            bg="/services/bg-consult.png"
            type="Web"
            heading="Digital Transformation & Automation"
            para="Digital transformation and automation improve efficiency, cut costs, and enable innovation through real-time insights for smarter decision-making."
            num="04"
          />
        </div>
        <div className="card card-5">
          <StackCard
            bg="/services/bg-consult.png"
            type="Cloud"
            heading="Digital
Consultation"
            para="At Code Hive, we deliver expert digital consultation to help businesses navigate challenges and drive growth."
            num="05"
          />
        </div>
        <div className="card card-6">
          <StackCard
            bg="/services/bg-consult.png"
            type="Security"
            heading="Business Intelligence
& Data Analysis"
            para="Our BI and data analysis solutions turn raw data into actionable insights, streamlining collection and visualization to drive growth and optimize performance."
            num="06"
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
