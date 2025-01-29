import React from "react";
import { services } from "../../../data";
import NavbarPages from "../../../components/NavbarPagesOurWork";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import SuccessMarquee from "../../../components/SuccessMarquee";
import Features from "../../../components/Features";
import WhatMakesUsDifferent from "../../../components/WhatMakesUsDifferent";
import Testimonials from "../../../components/Testimonials";
import ConnectContact from "../../../components/ConnectContact";
import AdvantagesSection from "../../../components/AdvantagesSection";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
const page = async ({ params }) => {
  const slug = await params.slug;
  const service = services?.find((service) => service.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <NavbarPages isBlack={service?.heroData?.bgImage} />
      {/* <Hero {...service.heroData} /> */}
      <HeroSection {...service.heroData} />
      <SuccessMarquee />
      {service.advanceSection && (
        <AdvantagesSection data={service.advanceSection} />
      )}

      {service.bannerData && (
        <div className="relative">
          <Banner {...service.bannerData} />
          <img
            src="/feature/vector.png"
            className="absolute top-[60%] right-0 w-60 "
          />
        </div>
      )}
      <Features data={service.featuresData} />
      <WhatMakesUsDifferent data={service.makesDifferentData} />
      <Banner {...service.bannerDataTwo} />
      <Testimonials testimonials={service.testimonialsData} />
      <ConnectContact sliderData={service.featureSlider} />
      <Footer />
    </div>
  );
};

export default page;
