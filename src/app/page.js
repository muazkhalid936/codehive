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
import useStore from "../store/useUserStore";
export default function Home() {
  const { language } = useStore();

  return (
    <div className={`no-scrollbar`}>
      <Navbar />
      <div className="bg-[#000B17] no-scrollbar overflow-x-hidden">
        <MainHero />
        <LongRevealHeading
          text={language === "English" ? "Why Choose Us?" : "لماذا تختارنا؟"}
        />
        <WhySection />
        <ShortRevealHeading text="Our Services" />
        <Stack />
        <ProcessHeading />
        <OurProcess />
        <ShortRevealHeading text="Our Industries" />
        <OurIndustries />
        <OurRecentWork text="Our Recent Work" />
        <Test />
        <div className="mb-[50px]">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
