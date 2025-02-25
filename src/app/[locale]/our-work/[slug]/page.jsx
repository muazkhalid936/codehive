import React from "react";
import NavbarPagesOurWork from "../../../../components/NavbarPagesOurWork";
import { ourWorks } from "../../../../data";
import { notFound } from "next/navigation";
import ProjectOverview from "../../../../components/Our-Work/ProjectOverview";
import ChallengesOrSolution from "../../../../components/Our-Work/ChallengesOrSolution";
import WorryNoMore from "../../../../components/Our-Work/WorryNoMore";
import Technologies from "../../../../components/Our-Work/Technologies";
import CallToAction from "../../../../components/Our-Work/CallToAction";
import HeroSectionOurWork from "../../../../components/HeroSectionOurWork";
import IndustryDetails from "../../../../components/IndustryDetails";
import Footer from "../../../../components/Footer";

const page = async ({ params }) => {
  const slug = await params.slug;

  const work = ourWorks.find((work) => work.slug === slug);

  // console.log(work);
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
      {work.bg != true ? (
        <div className="flex container mt-10 mb-10">
          <img
            src={work.image}
            alt={`${slug} featured image`}
            className="w-full object-contain rounded-xl"
          />
        </div>
      ) : (
        <div
          style={{ backgroundColor: work.bgColor }}
          className={`flex !container mx-auto overflow-hidden rounded-2xl h-[300px] xl:h-[500px]  mt-10 mb-10`}
        >
          <img
            src={work.image}
            alt={`${slug} featured image`}
            className="w-full  object-contain rounded-xl"
          />
        </div>
      )}
      {/* <CallToAction heading="Ready to Elevate your App Experience?" /> */}
      {/* <ConnectContact> */}
      {/* <CaseStudies /> */}
      {/* </ConnectContact> */}
      <Footer />
    </>
  );
};

export default page;
