"use client";
import React from "react";
import Navbar from "../../components/NavbarPagesOurWork";
import HeroContact from "../../components/HeroContact";
import ContactInfo from "../../components/ContactUsPage/ContactInfo";
import ContactForm from "../../components/ContactUsPage/ContactForm";
import SuccessStats from "../../components/SuccessMarquee";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#000B17]">
      <Navbar />
      <HeroContact />
      <SuccessStats />
      {/* <SupportSection /> */}
      <div className="my-[50px]">
        <ContactForm />
      </div>
      <ContactInfo />
      {/* <Testimonials testimonials={aboutTestimonialsData} /> */}
      <Footer />
    </div>
  );
};

export default Contact;
