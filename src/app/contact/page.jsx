"use client";
import React from "react";
import Navbar from "../../components/NavbarPagesOurWork";
import HeroContact from "../../components/HeroContact";
import ContactInfo from "../../components/ContactUsPage/ContactInfo";
import ContactForm from "../../components/ContactUsPage/ContactForm";
import SuccessStats from "../../components/ContactUsPage/SuccessStats";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <SuccessStats />
      {/* <SupportSection /> */}
      <ContactForm />
      <ContactInfo />
      {/* <Testimonials testimonials={aboutTestimonialsData} /> */}
      <Footer />
    </div>
  );
};

export default Contact;
