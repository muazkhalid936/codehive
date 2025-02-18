import OurProcess from '../../components/OurProcess/OurProcess';
import MainHero from '../../components/MainHero';
import ContactForm from '../../components/ContactUsPage/ContactForm/index';
import Stack from '../../components/OurServices/Stack';
import Test from '../../components/OurRecentWorks/Test';
import WhySection from '../../components/WhySection/WhySection';
import OurIndustries from '../../components/OurIndustries/OurIndustries';
import Navbar from '../../components/Navbar';
import LongRevealHeading from '../../components/LongRevealHeading/LongRevealHeading';
import OurRecentWork from '../../components/OurRecentWork/OurRecentWork';
import ShortRevealHeading from '../../components/ShortRevealHeading/ShortRevealHeading';
import ProcessHeading from '../../components/ProcessHeading/ShortRevealHeading';
import Footer from '../../components/Footer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('translation');

  return (
    <div className={`no-scrollbar`}>
      <Navbar />
      <div className="bg-[#000B17] no-scrollbar overflow-x-hidden">
        <MainHero />
        <LongRevealHeading text={t('whyChooseU')} />
        <WhySection />
        <ShortRevealHeading text={t('ourService')} />
        <Stack />
        <ProcessHeading />
        <OurProcess />
        <ShortRevealHeading text={t('ourIndustr')} />
        <OurIndustries />
        <OurRecentWork text={t('ourRecentW')} />
        <Test />
        <div className="mb-[50px]">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
