import React from "react";
import Navbar from "../../components/Navbar";
import HeroContact from "../../components/HeroContact";
import SupportSection from "../../components/ContactUsPage/SupportSection";
import ContactInfo from "../../components/ContactUsPage/ContactInfo";
import ContactForm from "../../components/ContactUsPage/ContactForm";
import SuccessStats from "../../components/ContactUsPage/SuccessStats";
import Testimonials from "../../components/ContactUsPage/Testimonial";
import { contactHeroData, aboutTestimonialsData } from "../../data";

const Services = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero {...contactHeroData} /> */}
      <HeroContact />
      <SuccessStats />
      <SupportSection />
      <ContactInfo />
      <ContactForm />
      <Testimonials testimonials={aboutTestimonialsData} />
    </div>
  );
};

export default Services;
