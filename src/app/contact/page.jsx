"use client";
import React from "react";
import Navbar from "../../components/NavbarPagesOurWork";
import HeroContact from "../../components/HeroContact";
import SupportSection from "../../components/ContactUsPage/SupportSection";
import ContactInfo from "../../components/ContactUsPage/ContactInfo";
import ContactForm from "../../components/ContactUsPage/ContactForm";
import SuccessStats from "../../components/ContactUsPage/SuccessStats";
import Testimonials from "../../components/ContactUsPage/Testimonial";
import { aboutTestimonialsData } from "../../data";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <SuccessStats />
      <SupportSection />
      <ContactInfo />
      <ContactForm />
      <Testimonials testimonials={aboutTestimonialsData} />
    </div>
  );
};

export default Contact;
