"use client";
import { useState, useEffect } from "react";
import OurProcess from "../../components/OurProcess/OurProcess";
import MainHero from "../../components/MainHero";
import ContactForm from "../../components/ContactUsPage/ContactForm/index";
import Stack from "../../components/OurServices/Stack";
import Test from "../../components/OurRecentWorks/Test";
import WhySection from "../../components/WhySection/WhySection";
import OurIndustries from "../../components/OurIndustries/OurIndustries";
import Navbar from "../../components/Navbar";
import LongRevealHeading from "../../components/LongRevealHeading/LongRevealHeading";
import OurRecentWork from "../../components/OurRecentWork/OurRecentWork";
import ShortRevealHeading from "../../components/ShortRevealHeading/ShortRevealHeading";
import OurIndustryHeading from "../../components/OurIndustryHeading/ShortRevealHeading";
import ProcessHeading from "../../components/ProcessHeading/ShortRevealHeading";
import Footer from "../../components/Footer";
import { useTranslations } from "next-intl";
import useStore from "../../store/useUserStore";
// Simple Loader Component
const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000B17]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  const { language, setLanguage } = useStore();
  const t = useTranslations("translation");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "en");
    // Simulate content loading (e.g., fetching data, preloading assets, etc.)
    const loadContent = async () => {
      // Simulate a 2-second delay for loading content

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Once content is loaded, hide the loader
      setIsLoading(false);
    };

    loadContent();
  }, []);

  return (
    <div className={`overflow-hidden bg-[#000B17]`}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <MainHero />
          <LongRevealHeading text={t("whyChooseU")} />
          <WhySection />
          <ShortRevealHeading text={t("ourService")} />
          <Stack />
          <ProcessHeading />
          <OurProcess />
          <OurIndustryHeading text={t("ourIndustr")} />
          <OurIndustries />
          <OurRecentWork text={t("ourRecentW")} />
          <Test />
          <div className="mb-[50px]">
            <ContactForm />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
