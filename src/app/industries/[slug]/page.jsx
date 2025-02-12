import React from "react";
import { industries } from "../../../data";
import NavbarPages from "../../../components/NavbarPages";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import SuccessMarquee from "../../../components/SuccessMarquee";
import Features from "../../../components/Features";
import WhatMakesUsDifferent from "../../../components/WhatMakesUsDifferent";
import Testimonials from "../../../components/Testimonials";

import IndustryDetails from "../../../components/IndustryDetails";
import AdvantagesSection from "../../../components/AdvantagesSection";
import Packages from "../../../components/Packages";
import Packages2 from "../../../components/Packages2";
import FeatureSlider from "../../../components/FeatureSlider";
import HeroSectionServices from "../../../components/HeroSectionServices";
import Footer from "../../../components/Footer";

const page = async ({ params }) => {
  const slug = await params.slug;
  const industry = industries?.find((industry) => industry.slug === slug);
  // console.log(industry)
  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div>
      <NavbarPages isBlack={industry?.heroData?.bgImage} />
      <HeroSectionServices {...industry.heroData} />
      <SuccessMarquee />
      {industry.advanceSection && (
        <AdvantagesSection data={industry.advanceSection} />
      )}
      {industry.bannerData && <Banner {...industry.bannerData} />}
      <Features data={industry.featuresData} />
      <div className="pt-[55px]">
        {industry.showFeatureSlider && (
          <FeatureSlider data={industry.featureSlider} />
        )}
      </div>
      {/* <WhatMakesUsDifferent data={industry.makesDifferentData} /> */}

      <div className="relative overflow-hidden">
        <Banner {...industry.bannerDataTwo} />
        <img
          src="/feature/vector.png"
          className="absolute top-[60%] right-0 w-60 "
        />
      </div>
      {slug === "our-booking-system" && <Packages />}
      {slug === "reward-hive" && <Packages2 />}

      <IndustryDetails panelData={industry.panelData} />
      <Testimonials testimonials={industry.testimonialsData} />
      {/* <ConnectContact /> */}
      <Footer />
    </div>
  );
};

export default page;
