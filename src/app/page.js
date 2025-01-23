import OurProcess from "../components/OurProcess/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/OurServices/Stack";
import Test from "../components/OurRecentWorks/Test";
import WhySection from "../components/WhySection/WhySection";
import OurIndustries from "../components/OurIndustries/OurIndustries";
import Navbar from "../components/Navbar";
import LongRevealHeading from "../components/LongRevealHeading/LongRevealHeading";
import OurRecentWork from "../components/OurRecentWork/OurRecentWork";
import ShortRevealHeading from "../components/ShortRevealHeading/ShortRevealHeading";
export default function Home() {
  return (
    <div className="no-scrollbar ">
      <Navbar />
      <div className="bg-[#000B17] no-scrollbar overflow-x-hidden">
        <MainHero />
        <div className="why-heading-gap no-scrollbar">
          <LongRevealHeading text="Why You Choose Us?" />
        </div>
        <div className=" first-component no-scrollbar">a</div>
        <WhySection />
        <div className=" second-component no-scrollbar">
          <ShortRevealHeading text="Our Services" />
        </div>
        <div className=" stack ">
          <Stack />
        </div>
        <div className="our no-scrollbar">
          <ShortRevealHeading text="Our Process" />
        </div>
        <div className=" forth-component no-scrollbar">a</div>
        <OurProcess />
        <div className="asd">
          <ShortRevealHeading text="Our Industries" />
        </div>

        <div className=" fifth-component no-scrollbar">a</div>
        <OurIndustries />
        <div className=" sixth-component no-scrollbar">
          <OurRecentWork text="Our Recent Works" />
        </div>
        <div className=" seven-component no-scrollbar">a</div>
        <Test />
        <ContactForm />
      </div>
    </div>
  );
}
