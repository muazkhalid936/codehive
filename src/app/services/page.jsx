import React from "react";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import Features from "../../components/Features";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";
import SuccessMarquee from "../../components/SuccessMarquee";
import ConnectContact from "../../components/ConnectContact";
import HeroSection from "../../components/HeroSection";
import {
  aboutTestimonialsData,
  bannerDataService,
  serviceHeroData,
  servicesAdvanceSolutionData,
  serviceScreenFeaturesData,
  WhatMakesUsDifferentData,
} from "../../data";
import NavbarPages from "../../components/NavbarPages";
import AdvantagesSection from "../../components/AdvantagesSection";
import Banner from "../../components/Banner";

const Services = () => {
  return (
    <div>
      <NavbarPages isBlack={serviceHeroData?.bgImage} />
      {/* <Hero {...serviceHeroData} /> */}
      <HeroSection {...serviceHeroData} />
      <SuccessMarquee />
      <AdvantagesSection data={servicesAdvanceSolutionData} />
      <Features data={serviceScreenFeaturesData} />
      <WhatMakesUsDifferent data={WhatMakesUsDifferentData} />
      <Banner {...bannerDataService} />
      <Testimonials testimonials={aboutTestimonialsData} />
      {/* <ConnectContact /> */}
    </div>
  );
};

export default Services;
