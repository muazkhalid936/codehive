'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Testimonials from '../../../components/Testimonials';
import WhoWeAre from '../../../components/WhoWeAre';
import OurMission from '../../../components/OurMission';
import Features from '../../../components/Features';
import PartnerWithTopPeople from '../../../components/PartnerWithTopPeople';
import WhatMakesUsDifferent from '../../../components/WhatMakesUsDifferent';
import SuccessMarquee from '../../../components/SuccessMarquee';
import HeroSection from '../../../components/HeroSectionServices';
import Footer from '../../../components/Footer';
import {
  aboutHeroData,
  aboutScreenFeaturesData,
  aboutTestimonialsData,
  WhatMakesUsDifferentData,
} from '../../../data';
import NavbarPages from '../../../components/NavbarPages';

const AboutUs = () => {
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
      <Footer />
    </div>
  );
};

export default AboutUs;
