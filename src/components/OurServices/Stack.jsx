"use client";
import { useEffect } from "react";
import "./Stack.css";
import gsap from "gsap";

import StackCard from "./StackCard";

const StackingImages = () => {
  useEffect(() => {
    const cardCount = 6; // Total numbers of cards
    const cards = Array.from(
      { length: cardCount },
      (_, index) => `.card-${index + 1}`
    );

    gsap.set(cards, {
      yPercent: 0,
      scale: 1,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=4000", // Adjust as needed
        scrub: 2,
      },
    });

    cards.forEach((card, index) => {
      timeline.to(
        card,
        {
          yPercent: -100,
          duration: 5,
        },
        index * 2 // Delay each card's animation
      );
    });
  }, []);
  return (
    <div className="container  mx-auto flex flex-col gap-10">
      <div className="cards h-[100vh] min-h-[400px]  container mx-auto">
        <div className="card card-6">
          <StackCard
            bg="/services/bg-consult.png"
            type="Security"
            heading="Business Intelligence & Data Analysis"
            para="Our BI and data analysis solutions turn raw data into actionable insights, streamlining collection and visualization to drive growth and optimize performance."
            num="06"
            link="/service/business-intelligence"
          />
        </div>

        <div className="card card-5">
          <StackCard
            bg="/services/bg-consult.png"
            type="Cloud"
            heading="Digital Consultation"
            para="At Code Hive, we deliver expert digital consultation to help businesses navigate challenges and drive growth."
            num="05"
            link="/service/digital-consultation"
          />
        </div>

        <div className="card card-4">
          <StackCard
            bg="/services/bg-consult.png"
            type="Web"
            heading="Digital Transformation & Automation"
            para="Digital transformation and automation improve efficiency, cut costs, and enable innovation through real-time insights for smarter decision-making."
            num="04"
            link="/service/digital-transformation"
          />
        </div>

        <div className="card card-3">
          <StackCard
            para="At Code Hive, we deliver tailored software solutions that align with your business needs, helping you streamline operations, improve efficiency, and drive innovation."
            bg="/services/bg-consult.png"
            type="Digital"
            num="03"
            heading="Customized Software Development"
            link="/service/software-development"
          />
        </div>

        <div className="card card-2">
          <StackCard
            bg="/services/bg-consult.png"
            type="Consulting"
            num="02"
            heading="Website Development"
            link="/service/website-development"
            para="At Code Hive, we deliver cutting-edge web app development services, creating customized applications to help businesses succeed in the digital landscape."
          />
        </div>
        <div className="card card-1">
          <StackCard
            bg="/services/bg-consult.png"
            type="AI"
            num="01"
            heading="Mobile App Development"
            link="/service/mobile-app-development"
            para="Custom built mobile apps for Android and iOS, tailored to your needs."
          />
        </div>
      </div>
    </div>
  );
};

export default StackingImages;
