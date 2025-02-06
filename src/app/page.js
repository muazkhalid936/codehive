"use client";
import OurProcess from "../components/OurProcess/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/ContactUsPage/ContactForm/index";
import Stack from "../components/OurServices/Stack";
import Test from "../components/OurRecentWorks/Test";
import WhySection from "../components/WhySection/WhySection";
import OurIndustries from "../components/OurIndustries/OurIndustries";
import Navbar from "../components/Navbar";
import LongRevealHeading from "../components/LongRevealHeading/LongRevealHeading";
import OurRecentWork from "../components/OurRecentWork/OurRecentWork";
import ShortRevealHeading from "../components/ShortRevealHeading/ShortRevealHeading";
import ProcessHeading from "../components/ProcessHeading/ShortRevealHeading";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="no-scrollbar ">
      <Navbar />
      <div className="bg-[#000B17] no-scrollbar overflow-x-hidden">
        <MainHero />
        <LongRevealHeading text="Why Choose Us?" />
        <WhySection />
        <ShortRevealHeading text="Our Services" />
        <Stack />
        <ProcessHeading />
        <OurProcess />
        <ShortRevealHeading text="Our Industries" />
        <OurIndustries />
        <OurRecentWork text="Our Recent Works" />
        <Test />
        <div className="mb-[50px]">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
