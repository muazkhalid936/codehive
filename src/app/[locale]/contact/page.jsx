"use client";
import React from "react";
import Navbar from "../../../components/NavbarPagesOurWork";
import HeroContact from "../../../components/HeroContact";
import ContactInfo from "../../../components/ContactUsPage/ContactInfo";
import ContactForm from "../../../components/ContactUsPage/ContactForm";
import SuccessStats from "../../../components/SuccessMarquee";
import Footer from "../../../components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#000B17] overflow-hidden relative">
      <Navbar />
      <HeroContact />
      <SuccessStats />
      {/* <SupportSection /> */}
      <div className="my-[50px] ">
      {/* <img
        src="/technologies/shade.png"
        alt="image"
        className="absolute h-[500px] top-[1100px] right-[-200px] "
      />
      <img
        src="/technologies/shade.png"
        alt="image"
        className="absolute h-[500px] top-[1100px] right-[-150px] "
      /> */}
        <ContactForm />
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
