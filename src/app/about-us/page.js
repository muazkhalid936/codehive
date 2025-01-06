"use client";
import React from "react";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import WhoWeAre from "../../components/WhoWeAre";
import OurMission from "../../components/OurMission";
import Features from "../../components/Features";
import PartnerWithTopPeople from "../../components/PartnerWithTopPeople";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";
import SuccessMarquee from "../../components/SuccessMarquee";
import ConnectContact from "../../components/ConnectContact";
import HeroSection from "../../components/HeroSection";
import {
  aboutHeroData,
  aboutScreenFeaturesData,
  aboutTestimonialsData,
  WhatMakesUsDifferentData,
} from "../../data";
import NavbarPages from "../../components/NavbarPages";

const AboutUs = () => {

  const [zoomLevel, setZoomLevel] = useState(1);
  function getZoomLevel() {
    return window.devicePixelRatio || 1;
  }

  useEffect(() => {
    const handleZoom = () => {
      const level = getZoomLevel();
      console.log(level);
      setZoomLevel(level);
    };

    // Set zoom level on mount
    handleZoom();

    // Optional: Update zoom level on resize or zoom change
    window.addEventListener("resize", handleZoom);

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);




  return (
    <div className="hide-scrollbar">
      <NavbarPages />
      {/* Hero Section */}
      {/* <Hero {...aboutHeroData} /> */}
      <HeroSection {...aboutHeroData} />
      <SuccessMarquee />
      <WhoWeAre />
      <OurMission />
      <Features data={aboutScreenFeaturesData} />
      <WhatMakesUsDifferent data={WhatMakesUsDifferentData} />
      <PartnerWithTopPeople />
      <Testimonials testimonials={aboutTestimonialsData} />
      {/* <ConnectContact /> */}
    </div>
  );
};

export default AboutUs;
