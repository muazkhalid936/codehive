import React from 'react';
import NavbarPagesOurWork from '../../../../components/NavbarPagesOurWork';
import { ourWorks } from '../../../../data';
import { notFound } from 'next/navigation';
import ProjectOverview from '../../../../components/Our-Work/ProjectOverview';
import ChallengesOrSolution from '../../../../components/Our-Work/ChallengesOrSolution';
import WorryNoMore from '../../../../components/Our-Work/WorryNoMore';
import Technologies from '../../../../components/Our-Work/Technologies';
import CallToAction from '../../../../components/Our-Work/CallToAction';
import HeroSectionOurWork from '../../../../components/HeroSectionOurWork';
import IndustryDetails from '../../../../components/IndustryDetails';
import Footer from '../../../../components/Footer';

const page = async ({ params }) => {
  const slug = await params.slug;
  // console.log(ourWorks);

  const work = ourWorks.find((work) => work.slug === slug);

  if (!work) {
    return notFound();
  }

  return (
    <>
      <NavbarPagesOurWork isBlack={true} />
      <HeroSectionOurWork {...work.heroData} />
      <ProjectOverview {...work.projectOverview} />
      <ChallengesOrSolution {...work.challengeSection} />
      <WorryNoMore {...work.noMoreWorriesSection} />
      <Technologies {...work.techSection} />
      <ChallengesOrSolution {...work.solutionSection} />
      <IndustryDetails panelData={work.panelData} />
      <div className="flex justify-center h-[60vh] max-h-[500px] min-h-[300px] mt-5 mb-20">
        <img
          src={work.image}
          alt={`${slug} featured image`}
          className="w-[90%] h-full object-center rounded-xl"
          style={{
            objectFit: 'cover',
            // width: "100px",
            // height: "100px",
            objectPosition: 'center',
          }}
        />
      </div>

      <CallToAction heading="Ready to Elevate your App Experience?" />
      {/* <ConnectContact> */}
      {/* <CaseStudies /> */}
      {/* </ConnectContact> */}
      <Footer />
    </>
  );
};

export default page;
