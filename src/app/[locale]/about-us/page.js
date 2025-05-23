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
import AnimationTestinomial from '../../../components/AnimationTestinomial';
import {
  aboutHeroData,
  ourMissionData,
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
      <OurMission data={ourMissionData}/>
      <Features data={aboutScreenFeaturesData} />
      <WhatMakesUsDifferent data={WhatMakesUsDifferentData} />
      <PartnerWithTopPeople />
      <div className='hidden justify-center sm:flex'>

      <Testimonials testimonials={aboutTestimonialsData} />
      </div>
      <div className='sm:hidden'>
        <AnimationTestinomial />
      </div>
      {/* <ConnectContact /> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
